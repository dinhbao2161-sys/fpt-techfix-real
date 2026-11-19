import type { Issue } from '../types/issue.ts';

/**
 * Parse an issue's estimatedTime string (e.g., "10 phút", "10-20 phút", "1 - 2 giờ")
 * into minutes. For ranges, returns the midpoint (e.g., 10-20 -> 15).
 * Returns null if no numeric duration can be extracted.
 */
export function parseEstimatedMinutes(estimatedTime: string | undefined): number | null {
  if (!estimatedTime || typeof estimatedTime !== 'string') {
    return null;
  }

  const normalized = estimatedTime.trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  const matches = normalized.match(/\d+(?:[.,]\d+)?/g);
  if (!matches || matches.length === 0) {
    return null;
  }

  const numbers = matches
    .map((m) => Number.parseFloat(m.replace(',', '.')))
    .filter((n) => Number.isFinite(n) && n > 0);

  if (numbers.length === 0) {
    return null;
  }

  const rawValue =
    numbers.length >= 2
      ? (numbers[0] + numbers[1]) / 2
      : numbers[0];

  const isHours = /(?:giờ|tiếng|\bgio\b|\bhour\b|\bhours\b|\bhr\b|\bhrs\b|(?<=\d|\s)h(?=\s|$))/i.test(normalized);
  return isHours ? rawValue * 60 : rawValue;
}

/**
 * Compute the rounded average resolution time (in minutes) across all provided issues.
 */
export function calculateAverageEstimatedMinutes(issues: Issue[]): number {
  let total = 0;
  let count = 0;

  for (const issue of issues) {
    const mins = parseEstimatedMinutes(issue.estimatedTime);
    if (mins !== null) {
      total += mins;
      count += 1;
    }
  }

  if (count === 0) {
    return 0;
  }

  return Math.round(total / count);
}
