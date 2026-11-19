export type Platform = 'all' | 'iphone' | 'android' | 'windows' | 'mac' | 'hardware';

export type Category =
  | 'all'
  | 'system'     // Hệ thống & Khởi động
  | 'screen'     // Màn hình & Cảm ứng
  | 'battery'    // Pin & Nguồn
  | 'network'    // Mạng & Kết nối (Wi-Fi, Bluetooth, SIM)
  | 'hardware'   // Linh kiện & Phần cứng
  | 'security';  // Mật khẩu & Bảo mật

export type Severity = 'easy' | 'medium' | 'hard';

export type FixOutcome = 'fixed' | 'not_fixed' | 'need_shop';

export interface IssueFeedbackCounts {
  fixed: number;
  not_fixed: number;
  need_shop: number;
}

export interface StepGuide {
  stepNumber: number;
  title: string;
  instructions: string;
  tip?: string;
  warning?: string;
}

export interface Issue {
  id: string;
  code?: string;
  title: string;
  platform: 'iphone' | 'android' | 'windows' | 'mac' | 'hardware';
  platforms?: ('iphone' | 'android' | 'windows' | 'mac' | 'hardware')[];
  category: 'system' | 'screen' | 'battery' | 'network' | 'hardware' | 'security';
  severity: Severity;
  estimatedTime: string;
  summary: string;
  symptoms: string[];
  causes: string[];
  steps: StepGuide[];
  requiredTools?: string[];
  warnings?: string[];
  seeTechnicianIf?: string[];
  can_sao_luu_truoc?: boolean;
  canh_bao_an_toan?: boolean;
  khi_nao_mang_ra_tiem?: string | string[];
  nguon_tham_khao?: (string | { label?: string; title?: string; url: string })[];
  tags: string[];
  sourceUrl?: string;
  author: string;
  createdAt: string;
  helpfulCount: number;
  feedbackCounts?: IssueFeedbackCounts;
  isUserSubmitted?: boolean;
}

export interface IssueFilterOptions {
  query: string;
  platform: Platform;
  category: Category;
  severity: 'all' | Severity;
  onlyBookmarked?: boolean;
  bookmarkedIds?: string[];
}
