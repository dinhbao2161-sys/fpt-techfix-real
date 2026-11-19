import test from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_ISSUES } from '../data/defaultIssues';
import {
  parseDiagnosisPayload,
  resolveMatchedIssues,
  buildModuleFromSuggestion,
} from './diagnosisMatcher';

test('parseDiagnosisPayload strips markdown fences and clamps confidence', () => {
  const raw = `\`\`\`json
  {
    "isDeviceErrorDetected": true,
    "detectedPlatform": "windows",
    "detectedIssueTitle": "Màn hình xanh BSOD CRITICAL_PROCESS_DIED",
    "confidence": 125,
    "visualObservations": ["Màn hình xanh dương", "Mã lỗi CRITICAL_PROCESS_DIED"],
    "errorCodeOrText": "CRITICAL_PROCESS_DIED",
    "matchedIssueIds": ["windows-bsod-blue-screen"],
    "reasonForRecommendation": "Phát hiện giao diện Stop Code BSOD của Windows."
  }
  \`\`\``;

  const parsed = parseDiagnosisPayload(raw);
  assert.equal(parsed.isDeviceErrorDetected, true);
  assert.equal(parsed.detectedPlatform, 'windows');
  assert.equal(parsed.confidence, 100);
  assert.deepEqual(parsed.matchedIssueIds, ['windows-bsod-blue-screen']);
  assert.equal(parsed.errorCodeOrText, 'CRITICAL_PROCESS_DIED');
});

test('resolveMatchedIssues returns matching TechCare modules by ID', () => {
  const diagnosis = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'iphone',
      detectedIssueTitle: 'Báo phát hiện chất lỏng ở cổng sạc',
      confidence: 92,
      visualObservations: ['Cảnh báo phát hiện chất lỏng hoặc độ ẩm khi cắm cáp'],
      matchedIssueIds: ['PIN-02', 'non-existent-id'],
      reasonForRecommendation: 'Khớp chính xác mô-đun xử lý cảnh báo độ ẩm cổng sạc.',
    })
  );

  const resolved = resolveMatchedIssues(diagnosis, DEFAULT_ISSUES);
  assert.equal(resolved.length, 1);
  assert.equal(resolved[0].id, 'PIN-02');
});

test('resolveMatchedIssues falls back to keyword scoring when matchedIssueIds is empty', () => {
  const diagnosis = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: true,
      detectedPlatform: 'hardware',
      detectedIssueTitle: 'Cảnh báo độ ẩm cổng sạc USB',
      confidence: 88,
      visualObservations: ['Cảnh báo phát hiện chất lỏng ở cổng sạc', 'Máy từ chối sạc'],
      matchedIssueIds: [],
      reasonForRecommendation: 'Khớp mô-đun độ ẩm cổng sạc.',
    })
  );

  const resolved = resolveMatchedIssues(diagnosis, DEFAULT_ISSUES);
  assert.ok(resolved.length >= 1);
  assert.equal(resolved[0].id, 'PIN-02');
});

test('DEFAULT_ISSUES contains all 50 imported phone troubleshooting entries individually', () => {
  const expectedPrefixes = ['PIN-', 'MAN-', 'PM-', 'KN-', 'AT-', 'CUNG-'];
  const phoneFaults = DEFAULT_ISSUES.filter((item) =>
    expectedPrefixes.some((prefix) => item.id.startsWith(prefix))
  );
  assert.equal(phoneFaults.length, 50);
});

test('resolveMatchedIssues returns empty array when no device error detected', () => {
  const diagnosis = parseDiagnosisPayload(
    JSON.stringify({
      isDeviceErrorDetected: false,
      detectedPlatform: 'hardware',
      detectedIssueTitle: 'Không phát hiện lỗi thiết bị trong ảnh',
      confidence: 20,
      visualObservations: ['Ảnh không chứa màn hình lỗi hoặc thiết bị gặp sự cố'],
      matchedIssueIds: ['PIN-01'],
      reasonForRecommendation: 'Không tìm thấy dấu hiệu lỗi thiết bị.',
    })
  );

  const resolved = resolveMatchedIssues(diagnosis, DEFAULT_ISSUES);
  assert.equal(resolved.length, 0);
});

test('buildModuleFromSuggestion constructs a valid Issue with numbered steps', () => {
  const issue = buildModuleFromSuggestion({
    title: 'Lỗi ổ cứng Boot Device Not Found 3F0',
    platform: 'windows',
    category: 'system',
    severity: 'medium',
    estimatedTime: '10 phút',
    summary: 'Laptop HP báo lỗi Boot Device Not Found (3F0) khi khởi động.',
    symptoms: ['Màn hình đen báo Boot Device Not Found'],
    causes: ['Lỗi cấu hình BIOS Legacy/UEFI hoặc lỏng cáp SSD'],
    steps: [
      { title: 'Kiểm tra chế độ UEFI trong BIOS', instructions: 'Nhấn F10 để vào BIOS và bật UEFI.' },
      { title: 'Chạy chẩn đoán ổ cứng', instructions: 'Nhấn F2 chọn Hard Drive Check.' },
    ],
    tags: ['3F0', 'boot', 'windows'],
  });

  assert.equal(issue.platform, 'windows');
  assert.equal(issue.steps.length, 2);
  assert.equal(issue.steps[0].stepNumber, 1);
  assert.equal(issue.steps[1].stepNumber, 2);
  assert.equal(issue.isUserSubmitted, true);
});
