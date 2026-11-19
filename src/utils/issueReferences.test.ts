import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeShopGuidance,
  normalizeReferenceLinks,
} from './issueReferences';

test('normalizeShopGuidance handles string, array, and empty values', () => {
  assert.deepEqual(normalizeShopGuidance(undefined), []);
  assert.deepEqual(normalizeShopGuidance('   '), []);
  assert.deepEqual(
    normalizeShopGuidance('Máy không lên nguồn sau 1 giờ sạc.'),
    ['Máy không lên nguồn sau 1 giờ sạc.']
  );
  assert.deepEqual(
    normalizeShopGuidance(['Pin phồng', '  ', 'Rơi nước']),
    ['Pin phồng', 'Rơi nước']
  );
});

test('normalizeReferenceLinks handles URL strings, labeled objects, and filters unsafe schemes', () => {
  assert.deepEqual(normalizeReferenceLinks(undefined), []);
  assert.deepEqual(normalizeReferenceLinks([]), []);

  const links = normalizeReferenceLinks([
    'https://support.apple.com/vi-vn/102655',
    { title: 'Google Pixel Help', url: 'https://support.google.com/pixelphone' },
    { label: 'Samsung Support', url: 'https://www.samsung.com/vn/support/' },
    'javascript:alert(1)',
    { title: 'Invalid', url: 'ftp://example.com/doc' },
  ]);

  assert.deepEqual(links, [
    {
      label: 'https://support.apple.com/vi-vn/102655',
      url: 'https://support.apple.com/vi-vn/102655',
    },
    {
      label: 'Google Pixel Help',
      url: 'https://support.google.com/pixelphone',
    },
    {
      label: 'Samsung Support',
      url: 'https://www.samsung.com/vn/support/',
    },
  ]);
});
