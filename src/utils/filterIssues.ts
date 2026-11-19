import { Issue, IssueFilterOptions } from '../types/issue';

/**
 * Remove Vietnamese accents and convert to lowercase for flexible search
 */
export function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Filter and search issues by query, platform, category, severity, and bookmarks
 */
export function filterIssues(issues: Issue[], options: IssueFilterOptions): Issue[] {
  const { query, platform, category, severity, onlyBookmarked, bookmarkedIds = [] } = options;
  const cleanQuery = removeVietnameseTones(query);

  return issues.filter((issue) => {
    // 1. Platform filter
    if (platform !== 'all') {
      const matchesPrimary = issue.platform === platform;
      const matchesSecondary = Array.isArray(issue.platforms) && issue.platforms.includes(platform);
      if (!matchesPrimary && !matchesSecondary) {
        return false;
      }
    }

    // 2. Category filter
    if (category !== 'all' && issue.category !== category) {
      return false;
    }

    // 3. Severity filter
    if (severity !== 'all' && issue.severity !== severity) {
      return false;
    }

    // 4. Bookmark filter
    if (onlyBookmarked && !bookmarkedIds.includes(issue.id)) {
      return false;
    }

    // 5. Query search (case- and accent-insensitive across code, title, summary, symptoms, causes, tags, and steps)
    if (cleanQuery) {
      const matchCode = issue.code ? removeVietnameseTones(issue.code).includes(cleanQuery) : false;
      const matchTitle = removeVietnameseTones(issue.title).includes(cleanQuery);
      const matchSummary = removeVietnameseTones(issue.summary).includes(cleanQuery);
      const matchTags = issue.tags.some((tag) => removeVietnameseTones(tag).includes(cleanQuery));
      const matchSymptoms = issue.symptoms.some((s) => removeVietnameseTones(s).includes(cleanQuery));
      const matchCauses = issue.causes.some((c) => removeVietnameseTones(c).includes(cleanQuery));
      const matchSteps = issue.steps.some(
        (st) =>
          removeVietnameseTones(st.title).includes(cleanQuery) ||
          removeVietnameseTones(st.instructions).includes(cleanQuery)
      );

      if (!matchCode && !matchTitle && !matchSummary && !matchTags && !matchSymptoms && !matchCauses && !matchSteps) {
        return false;
      }
    }

    return true;
  });
}

function getBigrams(str: string): string[] {
  const compact = str.replace(/\s+/g, '');
  if (compact.length < 2) return compact ? [compact] : [];
  const bigrams: string[] = [];
  for (let i = 0; i < compact.length - 1; i++) {
    bigrams.push(compact.slice(i, i + 2));
  }
  return bigrams;
}

function diceSimilarity(a: string, b: string): number {
  const bigramsA = getBigrams(a);
  const bigramsB = getBigrams(b);
  if (bigramsA.length === 0 || bigramsB.length === 0) return 0;

  const counts = new Map<string, number>();
  for (const bg of bigramsA) {
    counts.set(bg, (counts.get(bg) ?? 0) + 1);
  }

  let intersection = 0;
  for (const bg of bigramsB) {
    const count = counts.get(bg) ?? 0;
    if (count > 0) {
      intersection++;
      counts.set(bg, count - 1);
    }
  }

  return (2 * intersection) / (bigramsA.length + bigramsB.length);
}

/**
 * Return up to `limit` issues whose titles are most similar to `query`
 * (case- and accent-insensitive), used when a search yields 0 exact matches.
 */
export function findSimilarIssuesByTitle(
  issues: Issue[],
  query: string,
  limit = 3
): Issue[] {
  if (issues.length === 0 || limit <= 0) {
    return [];
  }

  const cleanQuery = removeVietnameseTones(query);
  if (!cleanQuery) {
    return issues.slice(0, limit);
  }

  const queryTokens = cleanQuery.split(' ').filter((t) => t.length >= 2);

  const scored = issues.map((issue, index) => {
    const cleanTitle = removeVietnameseTones(issue.title);
    const titleTokens = cleanTitle.split(' ').filter(Boolean);

    let score = 0;

    if (cleanTitle.includes(cleanQuery)) {
      score += 50;
    }

    for (const qToken of queryTokens) {
      if (titleTokens.includes(qToken)) {
        score += 12;
      } else if (titleTokens.some((t) => t.includes(qToken) || qToken.includes(t))) {
        score += 6;
      } else {
        // Check closest single-word Dice similarity for minor typos
        let bestWordSim = 0;
        for (const tToken of titleTokens) {
          const sim = diceSimilarity(qToken, tToken);
          if (sim > bestWordSim) bestWordSim = sim;
        }
        if (bestWordSim >= 0.45) {
          score += bestWordSim * 8;
        }
      }
    }

    score += diceSimilarity(cleanQuery, cleanTitle) * 20;

    return { issue, score, index };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.issue.helpfulCount !== a.issue.helpfulCount) {
      return b.issue.helpfulCount - a.issue.helpfulCount;
    }
    return a.index - b.index;
  });

  return scored.slice(0, limit).map((entry) => entry.issue);
}

/**
 * Validate a user-contributed issue
 */
export function validateIssueForm(data: {
  title: string;
  summary: string;
  causes: string[];
  steps: { title: string; instructions: string }[];
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.title.trim()) {
    errors.title = 'Vui lòng nhập tiêu đề sự cố.';
  } else if (data.title.trim().length < 5) {
    errors.title = 'Tiêu đề cần ít nhất 5 ký tự.';
  }

  if (!data.summary.trim()) {
    errors.summary = 'Vui lòng nhập tóm tắt ngắn về sự cố.';
  }

  const validCauses = data.causes.filter((c) => c.trim().length > 0);
  if (validCauses.length === 0) {
    errors.causes = 'Vui lòng nêu ít nhất 1 nguyên nhân.';
  }

  const validSteps = data.steps.filter((s) => s.title.trim() && s.instructions.trim());
  if (validSteps.length === 0) {
    errors.steps = 'Vui lòng thêm ít nhất 1 bước hướng dẫn khắc phục cụ thể.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
