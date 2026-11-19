export type DetectedPlatform = 'iphone' | 'android' | 'windows' | 'mac' | 'hardware';

export interface MatchedIssueCandidate {
  id: string;
  confidence: number;
}

export interface MatchedIssueResult {
  issue: import('./issue').Issue;
  confidence: number;
}

export interface GeminiDiagnosisResult {
  isDeviceErrorDetected: boolean;
  detectedPlatform: DetectedPlatform;
  detectedIssueTitle: string;
  confidence: number;
  visualObservations: string[];
  errorCodeOrText?: string;
  hasCriticalDanger: boolean;
  criticalDangerReasons: string[];
  matchedIssues: MatchedIssueCandidate[];
  matchedIssueIds: string[];
  reasonForRecommendation: string;
}

export interface IssueCatalogSummary {
  id: string;
  title: string;
  platform: DetectedPlatform;
  category: 'system' | 'screen' | 'battery' | 'network' | 'hardware' | 'security';
  summary: string;
  tags: string[];
}
