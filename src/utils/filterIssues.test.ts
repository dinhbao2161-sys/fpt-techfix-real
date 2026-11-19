import test from 'node:test';
import assert from 'node:assert/strict';
import {
  removeVietnameseTones,
  filterIssues,
  findSimilarIssuesByTitle,
  validateIssueForm,
} from './filterIssues';
import { DEFAULT_ISSUES } from '../data/defaultIssues';
import { Issue } from '../types/issue';

const mockIssues: Issue[] = [
  {
    id: 'test-bsod',
    title: 'Màn hình xanh chết chóc (BSOD) trên Windows 11',
    platform: 'windows',
    category: 'system',
    severity: 'hard',
    estimatedTime: '15 phút',
    summary: 'Máy tính bị khởi động lại và xuất hiện màn hình xanh báo mã lỗi Stop Code.',
    symptoms: ['Màn hình xanh xuất hiện đột ngột', 'Mã lỗi CRITICAL_PROCESS_DIED'],
    causes: ['Driver xung đột', 'RAM bị lỗi'],
    steps: [
      { stepNumber: 1, title: 'Khởi động vào Safe Mode', instructions: 'Giữ phím Shift và chọn Restart' }
    ],
    tags: ['bsod', 'màn hình xanh', 'windows 11', 'crash'],
    author: 'Admin',
    createdAt: '2026-03-01',
    helpfulCount: 42
  },
  {
    id: 'test-iphone-passcode',
    title: 'Quên mật khẩu iPhone và cách khôi phục',
    platform: 'iphone',
    category: 'security',
    severity: 'medium',
    estimatedTime: '10 phút',
    summary: 'Hướng dẫn mở khóa iPhone khi quên mật khẩu màn hình không làm hỏng máy.',
    symptoms: ['iPhone bị vô hiệu hóa', 'Không nhớ passcode'],
    causes: ['Nhập sai nhiều lần', 'Quên mật khẩu vừa đổi'],
    steps: [
      { stepNumber: 1, title: 'Sử dụng tính năng Xóa iPhone', instructions: 'Bấm Xóa iPhone ở góc dưới màn hình khóa' }
    ],
    tags: ['iphone', 'quên mật khẩu', 'passcode', 'khóa màn hình'],
    author: 'Admin',
    createdAt: '2026-03-02',
    helpfulCount: 56
  },
  {
    id: 'test-android-hang',
    title: 'Điện thoại Android bị treo đơ máy hoàn toàn',
    platform: 'android',
    category: 'system',
    severity: 'easy',
    estimatedTime: '3 phút',
    summary: 'Màn hình đứng im, phím cảm ứng không nhận phản hồi.',
    symptoms: ['Không thể vuốt màn hình', 'Đơ tại màn hình chính'],
    causes: ['Tràn RAM', 'Ứng dụng chạy ngầm xung đột'],
    steps: [
      { stepNumber: 1, title: 'Khởi động lại cưỡng bức', instructions: 'Nhấn giữ nút Nguồn + Giảm âm lượng trong 10 giây' }
    ],
    tags: ['android', 'treo máy', 'đơ màn hình', 'restart'],
    author: 'Admin',
    createdAt: '2026-03-03',
    helpfulCount: 38
  }
];

test('removeVietnameseTones strips accents accurately', () => {
  assert.equal(removeVietnameseTones('Màn hình xanh chết chóc'), 'man hinh xanh chet choc');
  assert.equal(removeVietnameseTones('Điện thoại Đơ máy'), 'dien thoai do may');
  assert.equal(removeVietnameseTones('Kiểm tra linh kiện chính hãng'), 'kiem tra linh kien chinh hang');
});

test('filterIssues matches case- and accent-insensitive query', () => {
  const result = filterIssues(mockIssues, {
    query: 'man hinh xanh',
    platform: 'all',
    category: 'all',
    severity: 'all'
  });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'test-bsod');

  const resultIphone = filterIssues(mockIssues, {
    query: 'quen mat khau',
    platform: 'all',
    category: 'all',
    severity: 'all'
  });
  assert.equal(resultIphone.length, 1);
  assert.equal(resultIphone[0].id, 'test-iphone-passcode');
});

test('filterIssues matches case- and accent-insensitive query in summary and symptoms', () => {
  const bySummary = filterIssues(mockIssues, {
    query: 'MO KHOA IPHONE',
    platform: 'all',
    category: 'all',
    severity: 'all',
  });
  assert.equal(bySummary.length, 1);
  assert.equal(bySummary[0].id, 'test-iphone-passcode');

  const bySymptoms = filterIssues(mockIssues, {
    query: 'KHONG THE VUOT MAN HINH',
    platform: 'all',
    category: 'all',
    severity: 'all',
  });
  assert.equal(bySymptoms.length, 1);
  assert.equal(bySymptoms[0].id, 'test-android-hang');
});

test('filterIssues filters by platform correctly', () => {
  const result = filterIssues(mockIssues, {
    query: '',
    platform: 'android',
    category: 'all',
    severity: 'all'
  });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'test-android-hang');
});

test('filterIssues filters by bookmark', () => {
  const result = filterIssues(mockIssues, {
    query: '',
    platform: 'all',
    category: 'all',
    severity: 'all',
    onlyBookmarked: true,
    bookmarkedIds: ['test-iphone-passcode']
  });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'test-iphone-passcode');
});

test('validateIssueForm validates required fields properly', () => {
  const invalid = validateIssueForm({
    title: '   ',
    summary: '',
    causes: [],
    steps: []
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.title);
  assert.ok(invalid.errors.summary);
  assert.ok(invalid.errors.causes);
  assert.ok(invalid.errors.steps);

  const valid = validateIssueForm({
    title: 'Lỗi loa MacBook bị rè',
    summary: 'Loa bên phải phát tiếng rè khi mở âm lượng trên 70%.',
    causes: ['Màng loa bám bụi kim loại'],
    steps: [{ title: 'Kiểm tra phần mềm', instructions: 'Chạy Apple Diagnostics để kiểm tra loa' }]
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('filterIssues matches multi-platform phone issues and fault code', () => {
  const dualPhoneIssue: Issue = {
    id: 'PIN-01',
    code: 'PIN-01',
    title: 'Sạc không vào hoặc sạc rất chậm',
    platform: 'hardware',
    platforms: ['iphone', 'android'],
    category: 'battery',
    severity: 'medium',
    estimatedTime: '10 phút',
    summary: 'Hướng dẫn kiểm tra cổng sạc và cáp sạc.',
    symptoms: ['Cắm sạc không nhận'],
    causes: ['Cổng sạc bám bụi'],
    steps: [{ stepNumber: 1, title: 'Thử cáp khác', instructions: 'Thử cáp và củ sạc chính hãng.' }],
    tags: ['PIN-01', 'sạc chậm'],
    author: 'Sửa điện thoại tại nhà',
    createdAt: '2026-11-19',
    helpfulCount: 1,
  };

  assert.equal(
    filterIssues([dualPhoneIssue], { query: 'PIN-01', platform: 'iphone', category: 'all', severity: 'all' }).length,
    1
  );
  assert.equal(
    filterIssues([dualPhoneIssue], { query: '', platform: 'android', category: 'battery', severity: 'all' }).length,
    1
  );
  assert.equal(
    filterIssues([dualPhoneIssue], { query: '', platform: 'windows', category: 'all', severity: 'all' }).length,
    0
  );
});

test('findSimilarIssuesByTitle returns top 3 closest matching issues by title', () => {
  const similarBattery = findSimilarIssuesByTitle(DEFAULT_ISSUES, 'pin bi phongg than may', 3);
  assert.equal(similarBattery.length, 3);
  assert.equal(similarBattery[0].id, 'PIN-10');

  const similarTouch = findSimilarIssuesByTitle(DEFAULT_ISSUES, 'cam ung bi loan tu bamm', 3);
  assert.equal(similarTouch.length, 3);
  assert.equal(similarTouch[0].id, 'MAN-01');

  const fallbackEmpty = findSimilarIssuesByTitle(DEFAULT_ISSUES, '', 3);
  assert.equal(fallbackEmpty.length, 3);
});
