import express from 'express';
import type { Request, Response } from 'express';
import crypto from 'node:crypto';
import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';
import type { FixOutcome, Issue } from '../src/types/issue.ts';
import {
  getAllIssuesMerged,
  incrementIssueFeedback,
  incrementIssueHelpful,
  saveCommunityIssue,
} from './store.ts';

interface CatalogItemInput {
  id: string;
  title: string;
  platform: string;
  category: string;
  summary: string;
  tags?: string[];
}

interface DiagnoseRequestBody {
  imageBase64?: string;
  mimeType?: string;
  note?: string;
  issuesCatalog?: CatalogItemInput[];
}

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function extractBase64Payload(raw: string, fallbackMime: string): { data: string; mimeType: string } {
  const dataUrlMatch = raw.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/s);
  if (dataUrlMatch) {
    return {
      mimeType: dataUrlMatch[1],
      data: dataUrlMatch[2].replace(/\s+/g, ''),
    };
  }
  return {
    mimeType: fallbackMime || 'image/jpeg',
    data: raw.replace(/\s+/g, ''),
  };
}

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '15mb' }));



  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true });
  });

  // --- Open Community Issues Endpoints (No login or AI moderation required) ---
  app.get('/api/issues', (_req: Request, res: Response) => {
    res.json({ issues: getAllIssuesMerged() });
  });

  app.post('/api/issues', (req: Request, res: Response) => {
    const payload = (req.body ?? {}) as Partial<Issue>;
    const title = typeof payload.title === 'string' ? payload.title.trim() : '';
    const summary = typeof payload.summary === 'string' ? payload.summary.trim() : '';
    const causes = Array.isArray(payload.causes)
      ? payload.causes.map((c) => String(c).trim()).filter(Boolean)
      : [];
    const steps = Array.isArray(payload.steps)
      ? payload.steps
          .filter((s) => s && typeof s.instructions === 'string' && s.instructions.trim())
          .map((s, idx) => ({
            stepNumber: idx + 1,
            title: typeof s.title === 'string' && s.title.trim() ? s.title.trim() : `Bước ${idx + 1}`,
            instructions: s.instructions.trim(),
            tip: typeof s.tip === 'string' && s.tip.trim() ? s.tip.trim() : undefined,
            warning: typeof s.warning === 'string' && s.warning.trim() ? s.warning.trim() : undefined,
          }))
      : [];

    if (title.length < 5 || summary.length < 10 || causes.length === 0 || steps.length === 0) {
      res.status(400).json({
        error: 'Vui lòng nhập đầy đủ tiêu đề, tóm tắt, nguyên nhân và ít nhất 1 bước khắc phục.',
      });
      return;
    }

    const symptoms = Array.isArray(payload.symptoms)
      ? payload.symptoms.map((s) => String(s).trim()).filter(Boolean)
      : [];
    const requiredTools = Array.isArray(payload.requiredTools)
      ? payload.requiredTools.map((t) => String(t).trim()).filter(Boolean)
      : undefined;

    const validPlatforms = new Set(['iphone', 'android', 'windows', 'mac', 'hardware']);
    const validCategories = new Set(['system', 'screen', 'battery', 'network', 'hardware', 'security']);
    const validSeverities = new Set(['easy', 'medium', 'hard']);

    const platform = validPlatforms.has(String(payload.platform))
      ? (payload.platform as Issue['platform'])
      : 'hardware';
    const category = validCategories.has(String(payload.category))
      ? (payload.category as Issue['category'])
      : 'system';
    const severity = validSeverities.has(String(payload.severity))
      ? (payload.severity as Issue['severity'])
      : 'medium';

    const authorName =
      typeof payload.author === 'string' && payload.author.trim()
        ? payload.author.trim().slice(0, 60)
        : 'Kỹ thuật viên cộng đồng';

    const newIssue: Issue = {
      id: `custom-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`,
      title: title.slice(0, 180),
      platform,
      category,
      severity,
      estimatedTime:
        typeof payload.estimatedTime === 'string' && payload.estimatedTime.trim()
          ? payload.estimatedTime.trim().slice(0, 40)
          : '10 phút',
      summary: summary.slice(0, 600),
      symptoms,
      causes,
      steps,
      requiredTools,
      tags: Array.isArray(payload.tags) && payload.tags.length > 0
        ? payload.tags.slice(0, 6).map((t) => String(t).trim()).filter(Boolean)
        : [platform, category],
      author: authorName,
      createdAt: new Date().toISOString().split('T')[0],
      helpfulCount: 1,
      isUserSubmitted: true,
    };

    saveCommunityIssue(newIssue);
    res.status(201).json({ issue: newIssue });
  });

  app.post('/api/issues/:id/helpful', (req: Request, res: Response) => {
    const nextCount = incrementIssueHelpful(req.params.id);
    if (nextCount === null) {
      res.status(404).json({ error: 'Không tìm thấy bài viết.' });
      return;
    }
    res.json({ helpfulCount: nextCount });
  });

  app.post('/api/issues/:id/feedback', (req: Request, res: Response) => {
    const outcome = (req.body as { outcome?: unknown } | undefined)?.outcome;
    if (outcome !== 'fixed' && outcome !== 'not_fixed' && outcome !== 'need_shop') {
      res.status(400).json({ error: 'Lựa chọn phản hồi không hợp lệ.' });
      return;
    }

    const nextCounts = incrementIssueFeedback(req.params.id, outcome as FixOutcome);
    if (nextCounts === null) {
      res.status(404).json({ error: 'Không tìm thấy bài viết.' });
      return;
    }
    res.json({ feedbackCounts: nextCounts });
  });

  // --- Gemini Camera Vision Diagnostic Scanner ---
  app.post('/api/diagnose-image', async (req: Request, res: Response) => {
    const body = (req.body ?? {}) as DiagnoseRequestBody;

    if (!body.imageBase64 || typeof body.imageBase64 !== 'string') {
      res.status(400).json({
        error: 'Thiếu dữ liệu hình ảnh. Vui lòng chụp từ camera hoặc tải ảnh thiết bị bị lỗi.',
      });
      return;
    }

    const ai = getGeminiClient();
    if (!ai) {
      res.status(503).json({
        error:
          'Chưa cấu hình GEMINI_API_KEY trên máy chủ. Vui lòng kiểm tra khóa API trong Settings > Secrets.',
      });
      return;
    }

    const { data, mimeType } = extractBase64Payload(body.imageBase64, body.mimeType || 'image/jpeg');
    if (!data || data.length < 32) {
      res.status(400).json({
        error: 'Dữ liệu hình ảnh không hợp lệ hoặc bị trống.',
      });
      return;
    }

    const catalog =
      Array.isArray(body.issuesCatalog) && body.issuesCatalog.length > 0
        ? body.issuesCatalog.slice(0, 200)
        : getAllIssuesMerged().slice(0, 200).map((item) => ({
            id: item.id,
            title: item.title,
            platform: item.platform,
            category: item.category,
            summary: item.summary,
            tags: item.tags,
          }));
    const catalogText = catalog
      .map(
        (item) =>
          `- "${item.id}" [${item.platform}/${item.category}]: ${item.title} (${item.summary})`
      )
      .join('\n');

    const userNote = typeof body.note === 'string' && body.note.trim() ? body.note.trim() : 'Không có';

    const systemInstruction = `Bạn là bộ máy nhận diện lỗi thiết bị điện tử bằng thị giác (Gemini Vision) tích hợp trong TechCare.
QUY TẮC BẮT BUỘC:
1. CHỈ được đối chiếu hình ảnh và chọn TỐI ĐA 3 lỗi CÓ TRONG danh mục TechCare được cung cấp (điền vào "matchedIssues" gồm "id" chính xác trong danh mục và "confidence" từ 0 đến 100).
2. TUYỆT ĐỐI KHÔNG tự viết cách sửa, KHÔNG bịa các bước khắc phục hay giải pháp mới ngoài danh mục. "visualObservations" và "reasonForRecommendation" chỉ mô tả dấu hiệu thấy trong ảnh và lý do chọn mã lỗi trong kho, KHÔNG viết hướng dẫn tự sửa.
3. KIỂM TRA NGUY HIỂM KHẨN CẤP: Nếu ảnh có dấu hiệu PIN PHỒNG (máy/nắp lưng kênh, màn hình bung, pin phồng), VÀO NƯỚC (nước đọng, ngấm nước, hơi nước trong ống kính/màn hình), hoặc CHÁY KHÉT (vết cháy sém, chảy nhựa, bốc khói, chập cháy), BẮT BUỘC đặt "hasCriticalDanger": true và liệt kê dấu hiệu vào "criticalDangerReasons".
4. Nếu ảnh không phải thiết bị điện tử, quá mờ hoặc không chắc chắn lỗi nào phù hợp: đặt "confidence" dưới 50 (ví dụ 20-45) và "matchedIssues": [].
5. Viết tiếng Việt chuẩn xác, ngắn gọn.`;

    const promptText = `Phân tích lỗi trong ảnh thiết bị. Ghi chú thêm: ${userNote}

Danh mục lỗi CÓ SẴN trong TechCare (chỉ được chọn tối đa 3 ID từ danh sách này):
${catalogText || '(Trống)'}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType,
                data,
              },
            },
            {
              text: promptText,
            },
          ],
        },
        config: {
          systemInstruction,
          thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              isDeviceErrorDetected: {
                type: Type.BOOLEAN,
                description: 'True nếu hình ảnh thể hiện lỗi hoặc sự cố thiết bị điện tử.',
              },
              detectedPlatform: {
                type: Type.STRING,
                description: 'Một trong: iphone, android, windows, mac, hardware',
              },
              detectedIssueTitle: {
                type: Type.STRING,
                description: 'Tên ngắn gọn của tình trạng được nhận diện từ hình ảnh.',
              },
              confidence: {
                type: Type.INTEGER,
                description: 'Độ tin cậy tổng thể từ 0 đến 100.',
              },
              errorCodeOrText: {
                type: Type.STRING,
                description: 'Mã lỗi hoặc dòng thông báo chính đọc được từ màn hình (nếu có).',
              },
              hasCriticalDanger: {
                type: Type.BOOLEAN,
                description: 'True nếu ảnh có pin phồng, vào nước hoặc cháy khét.',
              },
              criticalDangerReasons: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Các dấu hiệu nguy hiểm nghiêm trọng thấy trong ảnh (pin phồng, vào nước, cháy khét).',
              },
              visualObservations: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: '2-3 dấu hiệu trực quan quan sát được trong ảnh (không ghi bước sửa).',
              },
              matchedIssues: {
                type: Type.ARRAY,
                description: 'Tối đa 3 lỗi CÓ SẴN trong danh mục TechCare khớp với ảnh, kèm độ tin cậy (%).',
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING, description: 'ID chính xác trong danh mục TechCare.' },
                    confidence: { type: Type.INTEGER, description: 'Độ tin cậy (%) cho lỗi này từ 0 đến 100.' },
                  },
                  required: ['id', 'confidence'],
                },
              },
              reasonForRecommendation: {
                type: Type.STRING,
                description: '1 câu giải thích ngắn vì sao ảnh khớp với các ID trong danh mục (không viết cách sửa).',
              },
            },
            required: [
              'isDeviceErrorDetected',
              'detectedPlatform',
              'detectedIssueTitle',
              'confidence',
              'hasCriticalDanger',
              'criticalDangerReasons',
              'visualObservations',
              'matchedIssues',
              'reasonForRecommendation',
            ],
          },
        },
      });

      const responseText = response.text?.trim();
      if (!responseText) {
        res.status(502).json({
          error: 'Gemini không trả về kết quả phân tích. Vui lòng thử chụp ảnh rõ nét hơn.',
        });
        return;
      }

      res.json({ rawText: responseText });
    } catch (err: unknown) {
      const errorObj = err as { status?: number; message?: string };
      const status = typeof errorObj?.status === 'number' ? errorObj.status : 500;
      const msg = errorObj?.message || 'Lỗi kết nối Gemini API.';

      if (status === 400 || status === 403 || msg.includes('API_KEY_INVALID') || msg.includes('PERMISSION_DENIED')) {
        res.status(status).json({
          error: 'Khóa API Gemini không hợp lệ hoặc thiếu quyền truy cập. Vui lòng kiểm tra lại trong Settings > Secrets.',
        });
        return;
      }

      if (status === 429 || msg.includes('RESOURCE_EXHAUSTED')) {
        res.status(429).json({
          error: 'Hệ thống đang đạt giới hạn lượt phân tích. Vui lòng thử lại sau vài giây.',
        });
        return;
      }

      res.status(500).json({
        error: `Không thể phân tích hình ảnh lúc này: ${msg}`,
      });
    }
  });

export default app;
