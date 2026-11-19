import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseEstimatedMinutes,
  calculateAverageEstimatedMinutes,
} from './issueMetrics';
import { DEFAULT_ISSUES } from '../data/defaultIssues';
import type { Issue } from '../types/issue';

test('parseEstimatedMinutes extracts single minute duration and range midpoint', () => {
  assert.equal(parseEstimatedMinutes('10 phút'), 10);
  assert.equal(parseEstimatedMinutes('10-20 phút'), 15);
  assert.equal(parseEstimatedMinutes('10 - 15 phút'), 12.5);
  assert.equal(parseEstimatedMinutes('1 giờ'), 60);
  assert.equal(parseEstimatedMinutes('1-2 giờ'), 90);
  assert.equal(parseEstimatedMinutes(''), null);
  assert.equal(parseEstimatedMinutes('Không rõ'), null);
});

test('calculateAverageEstimatedMinutes computes average with range midpoints', () => {
  const sample: Issue[] = [
    {
      id: 'a',
      title: 'Issue A',
      platform: 'iphone',
      category: 'battery',
      severity: 'easy',
      estimatedTime: '10-20 phút',
      summary: 'Summary A',
      symptoms: [],
      causes: [],
      steps: [],
      tags: [],
      author: 'TechCare',
      createdAt: '2026-11-19',
      helpfulCount: 1,
    },
    {
      id: 'b',
      title: 'Issue B',
      platform: 'android',
      category: 'system',
      severity: 'easy',
      estimatedTime: '5 phút',
      summary: 'Summary B',
      symptoms: [],
      causes: [],
      steps: [],
      tags: [],
      author: 'TechCare',
      createdAt: '2026-11-19',
      helpfulCount: 1,
    },
  ];

  // (15 + 5) / 2 = 10
  assert.equal(calculateAverageEstimatedMinutes(sample), 10);
  assert.equal(calculateAverageEstimatedMinutes([]), 0);
});

test('calculateAverageEstimatedMinutes returns positive average for DEFAULT_ISSUES', () => {
  const avg = calculateAverageEstimatedMinutes(DEFAULT_ISSUES);
  assert.ok(avg > 0 && avg < 60, `Expected realistic average in minutes, got ${avg}`);
});
