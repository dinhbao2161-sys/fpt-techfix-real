import type { Issue } from '../types/issue.ts';

export interface NormalizedReferenceLink {
  label: string;
  url: string;
}

/**
 * Normalize `khi_nao_mang_ra_tiem` (string or string[]) into clean non-empty lines.
 */
export function normalizeShopGuidance(
  raw: Issue['khi_nao_mang_ra_tiem']
): string[] {
  if (!raw) return [];
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    return trimmed ? [trimmed] : [];
  }
  if (Array.isArray(raw)) {
    return raw
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter(Boolean);
  }
  return [];
}

/**
 * Normalize `nguon_tham_khao` items (URL strings or `{ label/title, url }` objects)
 * into safe http/https external links.
 */
export function normalizeReferenceLinks(
  raw: Issue['nguon_tham_khao']
): NormalizedReferenceLink[] {
  if (!Array.isArray(raw) || raw.length === 0) {
    return [];
  }

  const results: NormalizedReferenceLink[] = [];

  for (const entry of raw) {
    if (typeof entry === 'string') {
      const url = entry.trim();
      if (/^https?:\/\//i.test(url)) {
        results.push({ label: url, url });
      }
    } else if (entry && typeof entry === 'object' && typeof entry.url === 'string') {
      const url = entry.url.trim();
      if (/^https?:\/\//i.test(url)) {
        const label =
          (typeof entry.title === 'string' && entry.title.trim()) ||
          (typeof entry.label === 'string' && entry.label.trim()) ||
          url;
        results.push({ label, url });
      }
    }
  }

  return results;
}
