import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_ISSUES } from '../data/defaultIssues';
import {
  parseDiagnosisPayload,
  resolveMatchedIssues,
  resolveMatchedIssuesWithConfidence,
  detectCriticalDanger,
} from './diagnosisMatcher';

test('parseDiagnosisPayload strips markdown fences, clamps confidence, and caps matches at 3', () => {
  const raw = `\`\`\`json
  {
    "isDeviceErrorDetected": true,
    "detectedPlatform": "iphone",
    "detectedIssueTitle": "Lỗi pin và cổng sạc",
    "confidence": 125,
    "visualObservations": ["Thông báo phụ kiện hoặc cổng sạc"],
    "hasCriticalDanger": false,
    "criticalDangerReasons": [],
    "matchedIssues": [
      { "id": "PIN-01", "confidence": 92 },
      { "id": "PIN-02", "confidence": 81 },
      { "id": "PIN-03", "confidence": 65 },
      { "id": "PIN-04", "confidence": 55 }
    ],
    "reasonForRecommendation": "Đối chiếu với kho lỗi TechCare."
  }
  \`\`\``;

  const parsed = parseDiagnosisPayload(raw);
  assert.equal(parsed.isDeviceErrorDetected, true);
  assert.equal(parsed.confidence, 100);
  assert.equal(parsed.matchedIssues.length, 3);
  assert.deepEqual(parsed.matchedIssueIds, ['PIN-01', 'PIN-02', 'PIN-03']);
  assert.equal(parsed.matchedIssues[0].confidence, 92);
});

test('resolveMatchedIssuesWithConfidence keeps only valid app issues and preserves confidence', () => {
  const diagnosis = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'iphone',
      detectedIssueTitle: 'Báo phát hiện chất lỏng ở cổng sạc',
      confidence: 92,
      visualObservations: ['Cảnh báo phát hiện chất lỏng hoặc độ ẩm khi cắm cáp'],
      matchedIssues: [
        { id: 'PIN-02', confidence: 92 },
        { id: 'non-existent-id', confidence: 80 },
      ],
      reasonForRecommendation: 'Khớp chính xác mô-đun xử lý cảnh báo độ ẩm cổng sạc.',
    })
  );

  const resolved = resolveMatchedIssuesWithConfidence(diagnosis, DEFAULT_ISSUES);
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].issue.id, 'PIN-02');
  assert.equal(resolved[0].confidence, 92);
});

test('resolveMatchedIssuesWithConfidence returns empty when confidence is under 50%', () => {
  const diagnosis = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'android',
      detectedIssueTitle: 'Ảnh mờ không rõ lỗi',
      confidence: 42,
      visualObservations: ['Ảnh mờ, thiếu sáng'],
      matchedIssues: [{ id: 'PIN-01', confidence: 42 }],
      reasonForRecommendation: 'Độ tin cậy thấp.',
    })
  );

  const resolved = resolveMatchedIssuesWithConfidence(diagnosis, DEFAULT_ISSUES);
  assert.equal(resolved.length, 0);
});

test('resolveMatchedIssues falls back to existing app issues when matchedIssues is empty and confidence >= 50', () => {
  const diagnosis = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'hardware',
      detectedIssueTitle: 'Cảnh báo độ ẩm cổng sạc USB',
      confidence: 88,
      visualObservations: ['Cảnh báo phát hiện chất lỏng ở cổng sạc', 'Máy từ chối sạc'],
      matchedIssues: [],
      reasonForRecommendation: 'Khớp mô-đun độ ẩm cổng sạc.',
    })
  );

  const resolved = resolveMatchedIssues(diagnosis, DEFAULT_ISSUES);
  assert.ok(resolved.length >= 1 && resolved.length <= 3);
  assert.equal(resolved[0].id, 'PIN-02');
});

test('detectCriticalDanger flags swollen battery, water damage, and burning/scorch', () => {
  const swollen = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'hardware',
      detectedIssueTitle: 'Pin phồng làm bung màn hình',
      confidence: 95,
      hasCriticalDanger: true,
      criticalDangerReasons: ['Pin phồng biến dạng'],
      visualObservations: ['Màn hình bị đẩy cong do pin phồng'],
      matchedIssues: [{ id: 'PIN-10', confidence: 95 }],
    })
  );
  assert.equal(detectCriticalDanger(swollen, []), true);

  const water = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'hardware',
      detectedIssueTitle: 'Điện thoại bị vào nước',
      confidence: 45,
      hasCriticalDanger: false,
      visualObservations: ['Có hơi nước đọng bên trong cụm camera sau khi vào nước'],
      matchedIssues: [],
    })
  );
  assert.equal(detectCriticalDanger(water, []), true);

  const burnt = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'hardware',
      detectedIssueTitle: 'Cổng sạc có vết cháy khét',
      confidence: 80,
      hasCriticalDanger: false,
      visualObservations: ['Chân sạc bị đen, có dấu hiệu cháy khét'],
      matchedIssues: [],
    })
  );
  assert.equal(detectCriticalDanger(burnt, []), true);

  const normal = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'windows',
      detectedIssueTitle: 'Lỗi Wi-Fi No Internet',
      confidence: 85,
      hasCriticalDanger: false,
      visualObservations: ['Biểu tượng Wi-Fi có dấu chấm than'],
      matchedIssues: [{ id: 'WIN-01', confidence: 85 }],
    })
  );
  const winIssue = DEFAULT_ISSUES.find((i) => i.code === 'WIN-01' || i.id === 'WIN-01');
  assert.ok(winIssue);
  assert.equal(detectCriticalDanger(normal, [{ issue: winIssue, confidence: 85 }]), false);
});

test('DEFAULT_ISSUES contains all 50 imported phone troubleshooting entries individually', () => {
  const expectedPrefixes = ['PIN-', 'MAN-', 'PM-', 'KN-', 'AT-', 'CUNG-'];
  const phoneFaults = DEFAULT_ISSUES.filter((item) =>
    expectedPrefixes.some((prefix) => item.id.startsWith(prefix))
  );
  assert.equal(phoneFaults.length, 50);
});
