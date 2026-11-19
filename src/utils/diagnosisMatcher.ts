import { Issue } from '../types/issue';
import {
  DetectedPlatform,
  GeminiDiagnosisResult,
  MatchedIssueCandidate,
  MatchedIssueResult,
} from '../types/diagnosis';
import { removeVietnameseTones } from './filterIssues';

const VALID_PLATFORMS: DetectedPlatform[] = ['iphone', 'android', 'windows', 'mac', 'hardware'];

export const LOW_CONFIDENCE_THRESHOLD = 50;

const CRITICAL_DANGER_KEYWORDS = [
  'pin phong',
  'phong pin',
  'pin bi phong',
  'vao nuoc',
  'roi vao nuoc',
  'ngam nuoc',
  'tham nuoc',
  'chay khet',
  'mui khet',
  'chay sem',
  'chay no',
  'boc khoi',
  'tia lua',
  'chay chan',
];

export function normalizePlatform(val: unknown): DetectedPlatform {
  if (typeof val === 'string' && (VALID_PLATFORMS as string[]).includes(val.toLowerCase())) {
    return val.toLowerCase() as DetectedPlatform;
  }
  return 'hardware';
}

function clampConfidence(value: unknown, fallback = 0): number {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return Math.max(0, Math.min(100, Math.round(num)));
}

/**
 * Parse and sanitize JSON returned by Gemini Vision.
 * Strictly enforces catalog-only matches (max 3) and critical safety flags without self-written fixes.
 */
export function parseDiagnosisPayload(rawText: string): GeminiDiagnosisResult {
  const stripped = rawText
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

  const parsed = JSON.parse(stripped) as Record<string, unknown>;

  const confidence = clampConfidence(parsed.confidence, 0);

  const visualObservations = Array.isArray(parsed.visualObservations)
    ? parsed.visualObservations.filter(
        (item): item is string => typeof item === 'string' && item.trim().length > 0
      )
    : [];

  const criticalDangerReasons = Array.isArray(parsed.criticalDangerReasons)
    ? parsed.criticalDangerReasons.filter(
        (item): item is string => typeof item === 'string' && item.trim().length > 0
      )
    : [];

  const seenIds = new Set<string>();
  const matchedIssues: MatchedIssueCandidate[] = [];

  if (Array.isArray(parsed.matchedIssues)) {
    for (const entry of parsed.matchedIssues) {
      if (!entry || typeof entry !== 'object') continue;
      const obj = entry as Record<string, unknown>;
      const id = typeof obj.id === 'string' ? obj.id.trim() : '';
      if (!id || seenIds.has(id)) continue;
      seenIds.add(id);
      matchedIssues.push({
        id,
        confidence: clampConfidence(obj.confidence, confidence),
      });
      if (matchedIssues.length >= 3) break;
    }
  }

  // Fallback compatibility if model only populated matchedIssueIds
  if (matchedIssues.length === 0 && Array.isArray(parsed.matchedIssueIds)) {
    for (const rawId of parsed.matchedIssueIds) {
      if (typeof rawId !== 'string') continue;
      const id = rawId.trim();
      if (!id || seenIds.has(id)) continue;
      seenIds.add(id);
      matchedIssues.push({
        id,
        confidence,
      });
      if (matchedIssues.length >= 3) break;
    }
  }

  return {
    isDeviceErrorDetected: parsed.isDeviceErrorDetected !== false,
    detectedPlatform: normalizePlatform(parsed.detectedPlatform),
    detectedIssueTitle:
      typeof parsed.detectedIssueTitle === 'string' && parsed.detectedIssueTitle.trim()
        ? parsed.detectedIssueTitle.trim()
        : 'Chưa xác định rõ sự cố thiết bị',
    confidence,
    visualObservations,
    errorCodeOrText:
      typeof parsed.errorCodeOrText === 'string' && parsed.errorCodeOrText.trim()
        ? parsed.errorCodeOrText.trim()
        : undefined,
    hasCriticalDanger: parsed.hasCriticalDanger === true,
    criticalDangerReasons,
    matchedIssues,
    matchedIssueIds: matchedIssues.map((m) => m.id),
    reasonForRecommendation:
      typeof parsed.reasonForRecommendation === 'string' && parsed.reasonForRecommendation.trim()
        ? parsed.reasonForRecommendation.trim()
        : 'Gemini đã phân tích hình ảnh và đối chiếu với kho lỗi có sẵn của TechCare.',
  };
}

/**
 * Determine whether the scanned image indicates swollen battery, water ingress, or burning/scorch danger.
 */
export function detectCriticalDanger(
  diagnosis: GeminiDiagnosisResult,
  matchedResults: MatchedIssueResult[] = []
): boolean {
  if (diagnosis.hasCriticalDanger) {
    return true;
  }

  const combinedText = removeVietnameseTones(
    [
      diagnosis.detectedIssueTitle,
      diagnosis.errorCodeOrText ?? '',
      diagnosis.reasonForRecommendation,
      ...diagnosis.visualObservations,
      ...diagnosis.criticalDangerReasons,
    ].join(' ')
  );

  if (CRITICAL_DANGER_KEYWORDS.some((kw) => combinedText.includes(kw))) {
    return true;
  }

  // Also trigger if PIN-10 (pin phồng) or CUNG-04 (vào nước) was matched with confidence >= 50
  return matchedResults.some(
    (entry) =>
      entry &&
      entry.issue &&
      entry.confidence >= LOW_CONFIDENCE_THRESHOLD &&
      (entry.issue.id === 'PIN-10' ||
        entry.issue.code === 'PIN-10' ||
        entry.issue.id === 'CUNG-04' ||
        entry.issue.code === 'CUNG-04')
  );
}

/**
 * Resolve up to 3 matched issues that strictly exist in the app's data, along with confidence (%).
 * Returns an empty array if overall confidence is below 50% or no device error is detected.
 */
export function resolveMatchedIssuesWithConfidence(
  diagnosis: GeminiDiagnosisResult,
  allIssues: Issue[],
  maxResults = 3
): MatchedIssueResult[] {
  if (!diagnosis.isDeviceErrorDetected || diagnosis.confidence < LOW_CONFIDENCE_THRESHOLD) {
    return [];
  }

  const limit = Math.max(1, Math.min(3, maxResults));
  const issueById = new Map(allIssues.map((issue) => [issue.id, issue]));
  const directMatches: MatchedIssueResult[] = [];
  const seenIds = new Set<string>();

  for (const candidate of diagnosis.matchedIssues) {
    const found = issueById.get(candidate.id);
    if (found && !seenIds.has(found.id)) {
      directMatches.push({
        issue: found,
        confidence: clampConfidence(candidate.confidence, diagnosis.confidence),
      });
      seenIds.add(found.id);
    }
    if (directMatches.length >= limit) {
      return directMatches;
    }
  }

  if (directMatches.length > 0) {
    return directMatches;
  }

  // Keyword & platform fallback strictly within existing app issues
  const searchTokens = removeVietnameseTones(
    [
      diagnosis.detectedIssueTitle,
      diagnosis.errorCodeOrText ?? '',
      ...diagnosis.visualObservations,
    ].join(' ')
  )
    .split(/\s+/)
    .filter((token) => token.length >= 3);

  const scored = allIssues
    .map((issue) => {
      let score = 0;
      if (issue.platform === diagnosis.detectedPlatform) {
        score += 3;
      }
      const haystack = removeVietnameseTones(
        [issue.title, issue.summary, ...issue.tags, ...issue.symptoms].join(' ')
      );
      for (const token of searchTokens) {
        if (haystack.includes(token)) {
          score += 2;
        }
      }
      return { issue, score };
    })
    .filter((entry) => entry.score >= 4)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => ({
      issue: entry.issue,
      confidence: diagnosis.confidence,
    }));

  return scored;
}

export function resolveMatchedIssues(
  diagnosis: GeminiDiagnosisResult,
  allIssues: Issue[],
  maxResults = 3
): Issue[] {
  return resolveMatchedIssuesWithConfidence(diagnosis, allIssues, maxResults).map(
    (item) => item.issue
  );
}
