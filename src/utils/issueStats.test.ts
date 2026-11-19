import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeFeedbackCounts,
  calculateSuccessRate,
  buildIssueStatsSummary,
} from './issueStats';
import type { Issue } from '../types/issue';

function makeIssue(
  id: string,
  feedbackCounts?: Issue['feedbackCounts']
): Issue {
  return {
    id,
    title: `Issue ${id}`,
    platform: 'hardware',
    category: 'battery',
    severity: 'easy',
    estimatedTime: '10 phút',
    summary: 'Summary',
    symptoms: [],
    causes: [],
    steps: [],
    tags: [],
    author: 'TechCare',
    createdAt: '2026-11-19',
    helpfulCount: 1,
    feedbackCounts,
  };
}

test('normalizeFeedbackCounts defaults missing or invalid counts to zero', () => {
  assert.deepEqual(normalizeFeedbackCounts(undefined), {
    fixed: 0,
    not_fixed: 0,
    need_shop: 0,
  });
  assert.deepEqual(
    normalizeFeedbackCounts({ fixed: 3.9, not_fixed: -1, need_shop: 2 }),
    { fixed: 3, not_fixed: 0, need_shop: 2 }
  );
});

test('calculateSuccessRate computes rounded percentage and handles zero total', () => {
  assert.equal(calculateSuccessRate(0, 0), 0);
  assert.equal(calculateSuccessRate(3, 4), 75);
  assert.equal(calculateSuccessRate(2, 3), 66.7);
});

test('buildIssueStatsSummary aggregates row counts and top totals accurately', () => {
  const issues = [
    makeIssue('A', { fixed: 6, not_fixed: 2, need_shop: 2 }),
    makeIssue('B', { fixed: 2, not_fixed: 0, need_shop: 0 }),
    makeIssue('C'),
  ];

  const summary = buildIssueStatsSummary(issues);
  assert.equal(summary.totalIssues, 3);
  assert.equal(summary.totalFixed, 8);
  assert.equal(summary.totalNotFixed, 2);
  assert.equal(summary.totalNeedShop, 2);
  assert.equal(summary.totalVotes, 12);
  assert.equal(summary.overallSuccessRate, 66.7);

  assert.equal(summary.rows[0].successRate, 60);
  assert.equal(summary.rows[1].successRate, 100);
  assert.equal(summary.rows[2].successRate, 0);
});
