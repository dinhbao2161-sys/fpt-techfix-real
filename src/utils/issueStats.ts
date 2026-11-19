import type { Issue, IssueFeedbackCounts } from '../types/issue.ts';

export interface IssueStatRow {
  issue: Issue;
  fixed: number;
  notFixed: number;
  needShop: number;
  totalVotes: number;
  successRate: number;
}

export interface IssueStatsSummary {
  totalIssues: number;
  totalFixed: number;
  totalNotFixed: number;
  totalNeedShop: number;
  totalVotes: number;
  overallSuccessRate: number;
  rows: IssueStatRow[];
}

export function normalizeFeedbackCounts(
  raw?: Partial<IssueFeedbackCounts> | null
): IssueFeedbackCounts {
  const fixed =
    typeof raw?.fixed === 'number' && Number.isFinite(raw.fixed) && raw.fixed >= 0
      ? Math.floor(raw.fixed)
      : 0;
  const not_fixed =
    typeof raw?.not_fixed === 'number' && Number.isFinite(raw.not_fixed) && raw.not_fixed >= 0
      ? Math.floor(raw.not_fixed)
      : 0;
  const need_shop =
    typeof raw?.need_shop === 'number' && Number.isFinite(raw.need_shop) && raw.need_shop >= 0
      ? Math.floor(raw.need_shop)
      : 0;

  return { fixed, not_fixed, need_shop };
}

export function calculateSuccessRate(fixed: number, totalVotes: number): number {
  if (totalVotes <= 0 || fixed <= 0) {
    return 0;
  }
  return Math.round((fixed / totalVotes) * 1000) / 10;
}

export function buildIssueStatsSummary(issues: Issue[]): IssueStatsSummary {
  let totalFixed = 0;
  let totalNotFixed = 0;
  let totalNeedShop = 0;

  const rows: IssueStatRow[] = issues.map((issue) => {
    const counts = normalizeFeedbackCounts(issue.feedbackCounts);
    const totalVotes = counts.fixed + counts.not_fixed + counts.need_shop;
    const successRate = calculateSuccessRate(counts.fixed, totalVotes);

    totalFixed += counts.fixed;
    totalNotFixed += counts.not_fixed;
    totalNeedShop += counts.need_shop;

    return {
      issue,
      fixed: counts.fixed,
      notFixed: counts.not_fixed,
      needShop: counts.need_shop,
      totalVotes,
      successRate,
    };
  });

  const totalVotes = totalFixed + totalNotFixed + totalNeedShop;
  const overallSuccessRate = calculateSuccessRate(totalFixed, totalVotes);

  return {
    totalIssues: issues.length,
    totalFixed,
    totalNotFixed,
    totalNeedShop,
    totalVotes,
    overallSuccessRate,
    rows,
  };
}
