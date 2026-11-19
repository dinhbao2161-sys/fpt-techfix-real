import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  Camera,
  Upload,
  Sparkles,
  RefreshCw,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  ScanLine,
  SwitchCamera,
  Clock,
  Layers,
  Image as ImageIcon,
  ShieldAlert,
  Lock,
} from 'lucide-react';
import { Issue } from '../types/issue';
import {
  GeminiDiagnosisResult,
  IssueCatalogSummary,
  MatchedIssueResult,
} from '../types/diagnosis';
import {
  parseDiagnosisPayload,
  resolveMatchedIssuesWithConfidence,
  detectCriticalDanger,
  LOW_CONFIDENCE_THRESHOLD,
} from '../utils/diagnosisMatcher';

interface CameraDiagnoseModalProps {
  isOpen: boolean;
  onClose: () => void;
  issues: Issue[];
  onOpenModuleToFix: (issue: Issue) => void;
  onSaveAndOpenModule?: (newIssue: Issue) => void;
}

type InputTab = 'camera' | 'upload';

const PLATFORM_LABELS: Record<string, string> = {
  iphone: 'iPhone / iOS',
  android: 'Android OS',
  windows: 'Windows PC',
  mac: 'macOS',
  hardware: 'Phần cứng',
};

export const CameraDiagnoseModal: React.FC<CameraDiagnoseModalProps> = ({
  isOpen,
  onClose,
  issues,
  onOpenModuleToFix,
}) => {
  const [hasConsented, setHasConsented] = useState(false);
  const [activeTab, setActiveTab] = useState<InputTab>('camera');
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [capturedMimeType, setCapturedMimeType] = useState<string>('image/jpeg');
  const [userNote, setUserNote] = useState('');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzeError, setAnalyzeError] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<GeminiDiagnosisResult | null>(null);
  const [matchedModules, setMatchedModules] = useState<MatchedIssueResult[]>([]);
  const [isCriticalDanger, setIsCriticalDanger] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const stopCameraStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraReady(false);
  }, []);

  const startCameraStream = useCallback(async () => {
    stopCameraStream();
    setCameraError(null);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraError(
        'Trình duyệt hiện tại không hỗ trợ truy cập camera trực tiếp. Bạn có thể tải ảnh hoặc dán ảnh chụp màn hình.'
      );
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: facingMode },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => {});
      }
      setIsCameraReady(true);
    } catch (err: unknown) {
      const errorName = err instanceof Error ? err.name : '';
      if (errorName === 'NotAllowedError' || errorName === 'PermissionDeniedError') {
        setCameraError(
          'Bạn chưa cấp quyền Camera cho trình duyệt. Hãy cấp quyền hoặc chuyển sang mục Tải ảnh lên.'
        );
      } else if (errorName === 'NotFoundError' || errorName === 'DevicesNotFoundError') {
        setCameraError(
          'Không tìm thấy thiết bị Camera khả dụng. Hãy chuyển sang mục Tải ảnh hoặc dán ảnh chụp màn hình.'
        );
      } else {
        setCameraError(
          'Không thể khởi động Camera lúc này. Bạn có thể tải ảnh từ thiết bị để Gemini nhận diện.'
        );
      }
    }
  }, [facingMode, stopCameraStream]);

  // Manage camera lifecycle only AFTER user consents
  useEffect(() => {
    if (isOpen && hasConsented && activeTab === 'camera' && !capturedImage) {
      startCameraStream();
    } else {
      stopCameraStream();
    }
    return () => {
      stopCameraStream();
    };
  }, [isOpen, hasConsented, activeTab, capturedImage, startCameraStream, stopCameraStream]);

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      stopCameraStream();
      setHasConsented(false);
      setActiveTab('camera');
      setCapturedImage(null);
      setUserNote('');
      setAnalyzeError(null);
      setDiagnosis(null);
      setMatchedModules([]);
      setIsCriticalDanger(false);
      setIsAnalyzing(false);
    }
  }, [isOpen, stopCameraStream]);

  // Support Ctrl+V image paste inside the modal (only after consent)
  useEffect(() => {
    if (!isOpen || !hasConsented) return;
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            handleFileLoad(file);
            setActiveTab('upload');
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [isOpen, hasConsented]);

  const handleFileLoad = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setAnalyzeError('Vui lòng chọn tệp hình ảnh hợp lệ (JPG, PNG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCapturedImage(reader.result);
        setCapturedMimeType(file.type || 'image/jpeg');
        setAnalyzeError(null);
        setDiagnosis(null);
        setMatchedModules([]);
        setIsCriticalDanger(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyzeImage = async (imageDataUrl: string, mimeType: string) => {
    setIsAnalyzing(true);
    setAnalyzeError(null);
    setDiagnosis(null);
    setMatchedModules([]);
    setIsCriticalDanger(false);

    const catalog: IssueCatalogSummary[] = issues.map((item) => ({
      id: item.id,
      title: item.title,
      platform: item.platform,
      category: item.category,
      summary: item.summary,
      tags: item.tags,
    }));

    try {
      const response = await fetch('/api/diagnose-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: imageDataUrl,
          mimeType,
          note: userNote,
          issuesCatalog: catalog,
        }),
      });

      const payload = (await response.json()) as { rawText?: string; error?: string };
      if (!response.ok) {
        throw new Error(payload.error || 'Không thể phân tích hình ảnh.');
      }

      if (!payload.rawText) {
        throw new Error('Không nhận được phản hồi hợp lệ từ Gemini.');
      }

      const parsedDiagnosis = parseDiagnosisPayload(payload.rawText);
      const resolved = resolveMatchedIssuesWithConfidence(parsedDiagnosis, issues, 3);
      const critical = detectCriticalDanger(parsedDiagnosis, resolved);

      setDiagnosis(parsedDiagnosis);
      setMatchedModules(resolved);
      setIsCriticalDanger(critical);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Đã xảy ra lỗi khi nhận diện hình ảnh.';
      setAnalyzeError(message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCaptureFromCamera = () => {
    const video = videoRef.current;
    if (!video || !video.videoWidth || !video.videoHeight) {
      setCameraError('Camera chưa sẵn sàng để chụp. Vui lòng đợi một giây hoặc tải ảnh lên.');
      return;
    }

    const canvas = document.createElement('canvas');
    const maxWidth = 1280;
    const scale = video.videoWidth > maxWidth ? maxWidth / video.videoWidth : 1;
    canvas.width = Math.round(video.videoWidth * scale);
    canvas.height = Math.round(video.videoHeight * scale);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
    setCapturedImage(dataUrl);
    setCapturedMimeType('image/jpeg');
    stopCameraStream();
    void handleAnalyzeImage(dataUrl, 'image/jpeg');
  };

  const handleResetScanner = () => {
    setCapturedImage(null);
    setAnalyzeError(null);
    setDiagnosis(null);
    setMatchedModules([]);
    setIsCriticalDanger(false);
  };

  if (!isOpen) return null;

  const isLowConfidence =
    diagnosis !== null &&
    (!diagnosis.isDeviceErrorDetected || diagnosis.confidence < LOW_CONFIDENCE_THRESHOLD);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#000000]/90 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gemini-scanner-title"
    >
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Window */}
      <div className="relative w-full max-w-3xl max-h-[94vh] sm:max-h-[90vh] bg-[#0A0A0A] rounded-t-3xl sm:rounded-3xl border border-white/[0.1] shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 border border-[#F97316]/40 flex items-center justify-center text-[#F97316]">
              <ScanLine className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2
                  id="gemini-scanner-title"
                  className="text-base font-bold text-[#FFFFFF] font-['Manrope']"
                >
                  Gemini Camera — Nhận Diện Lỗi
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30">
                  Vision AI
                </span>
              </div>
              <p className="text-xs text-[#A0A0A0]">
                Đối chiếu ảnh thiết bị với tối đa 3 lỗi có sẵn trong TechCare
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] border border-white/[0.08] flex items-center justify-center text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ quét lỗi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* STEP 0: Mandatory Privacy Consent Screen Before Capture */}
          {!hasConsented ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#F97316]/40 space-y-5 text-center max-w-xl mx-auto my-2">
              <div className="w-12 h-12 rounded-2xl bg-[#F97316]/15 border border-[#F97316]/40 text-[#F97316] flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#F97316] font-bold">
                  Lưu ý quyền riêng tư trước khi quét
                </div>
                <p className="text-sm sm:text-base font-semibold text-[#FFFFFF] leading-relaxed">
                  Ảnh được gửi tới Google Gemini để phân tích, không chụp màn hình có mật khẩu hay thông tin cá nhân
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-10 px-5 rounded-xl bg-[#181818] hover:bg-[#222222] border border-white/[0.1] text-xs sm:text-sm font-semibold text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => setHasConsented(true)}
                  className="h-10 px-6 rounded-xl bg-[#F97316] hover:bg-[#FB923C] text-[#000000] text-xs sm:text-sm font-bold shadow-[0_2px_14px_rgba(249,115,22,0.3)] transition-all cursor-pointer"
                >
                  Đồng ý
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Input Mode Switcher (when no image is locked in yet) */}
              {!capturedImage && (
                <div className="flex items-center gap-2 p-1 rounded-xl bg-[#000000] border border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('camera')}
                    className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'camera'
                        ? 'bg-[#141414] text-[#F97316] border border-[#F97316]/40'
                        : 'text-[#A0A0A0] hover:text-[#FFFFFF]'
                    }`}
                  >
                    <Camera className="w-4 h-4" />
                    <span>Camera trực tiếp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('upload')}
                    className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'upload'
                        ? 'bg-[#141414] text-[#F97316] border border-[#F97316]/40'
                        : 'text-[#A0A0A0] hover:text-[#FFFFFF]'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    <span>Tải ảnh / Dán ảnh (Ctrl+V)</span>
                  </button>
                </div>
              )}

              {/* LIVE CAMERA VIEW */}
              {!capturedImage && activeTab === 'camera' && (
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden bg-[#000000] border border-white/[0.1] aspect-video flex items-center justify-center">
                    {cameraError ? (
                      <div className="p-6 text-center space-y-3 max-w-md">
                        <div className="w-11 h-11 rounded-xl bg-[#F97316]/15 border border-[#F97316]/30 text-[#F97316] flex items-center justify-center mx-auto">
                          <AlertCircle className="w-5 h-5" />
                        </div>
                        <p className="text-xs sm:text-sm text-[#FFFFFF] font-medium leading-relaxed">
                          {cameraError}
                        </p>
                        <div className="flex items-center justify-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={startCameraStream}
                            className="px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] border border-white/[0.1] text-xs font-semibold text-[#FFFFFF] flex items-center gap-1.5 cursor-pointer"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Thử lại Camera</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTab('upload')}
                            className="px-3.5 py-2 rounded-xl bg-[#F97316] hover:bg-[#FB923C] text-xs font-bold text-[#000000] flex items-center gap-1.5 cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Chuyển sang Tải ảnh</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <video
                          ref={videoRef}
                          playsInline
                          muted
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                        {/* Viewfinder targeting reticle */}
                        <div className="pointer-events-none absolute inset-6 border border-white/10 rounded-xl">
                          <div className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-2 border-l-2 border-[#F97316] rounded-tl-lg" />
                          <div className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t-2 border-r-2 border-[#F97316] rounded-tr-lg" />
                          <div className="absolute -bottom-0.5 -left-0.5 w-6 h-6 border-b-2 border-l-2 border-[#F97316] rounded-bl-lg" />
                          <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b-2 border-r-2 border-[#F97316] rounded-br-lg" />
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'))
                          }
                          className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-[#000000]/80 hover:bg-[#141414] border border-white/[0.15] text-xs text-[#FFFFFF] flex items-center gap-1.5 cursor-pointer"
                          title="Đổi camera trước/sau"
                        >
                          <SwitchCamera className="w-3.5 h-3.5 text-[#F97316]" />
                          <span>Đổi camera</span>
                        </button>
                      </>
                    )}
                  </div>

                  {!cameraError && (
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <input
                        type="text"
                        value={userNote}
                        onChange={(e) => setUserNote(e.target.value)}
                        placeholder="Ghi chú thêm triệu chứng (tuỳ chọn, VD: máy tự sập nguồn)..."
                        className="flex-1 h-11 px-4 rounded-xl bg-[#000000] border border-white/[0.1] focus:border-[#F97316] outline-none text-xs sm:text-sm text-[#FFFFFF] placeholder:text-[#666666]"
                      />
                      <button
                        type="button"
                        onClick={handleCaptureFromCamera}
                        disabled={!isCameraReady}
                        className="h-11 px-5 rounded-xl bg-[#F97316] hover:bg-[#FB923C] disabled:opacity-50 text-[#000000] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                      >
                        <Camera className="w-4 h-4 stroke-[2.5]" />
                        <span>Chụp & Nhận diện lỗi</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* UPLOAD / PASTE VIEW */}
              {!capturedImage && activeTab === 'upload' && (
                <div className="space-y-4">
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files?.[0];
                      if (file) handleFileLoad(file);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        fileInputRef.current?.click();
                      }
                    }}
                    className="rounded-2xl border-2 border-dashed border-white/[0.14] hover:border-[#F97316]/60 bg-[#000000] p-10 text-center space-y-3 transition-colors cursor-pointer"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileLoad(file);
                      }}
                    />
                    <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-white/[0.08] text-[#F97316] flex items-center justify-center mx-auto">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#FFFFFF]">
                        Bấm để chọn ảnh hoặc kéo thả ảnh lỗi vào đây
                      </p>
                      <p className="text-xs text-[#A0A0A0]">
                        Hỗ trợ ảnh chụp màn hình lỗi, ảnh pin phồng, vào nước, cháy khét... (hoặc nhấn Ctrl+V để dán)
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CAPTURED IMAGE PREVIEW + ANALYZE / RESULTS */}
              {capturedImage && (
                <div className="space-y-5">
                  {/* Image Preview Strip */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start bg-[#000000] p-4 rounded-2xl border border-white/[0.08]">
                    <div className="md:col-span-2 rounded-xl overflow-hidden border border-white/[0.08] bg-[#0E0E0E]">
                      <img
                        src={capturedImage}
                        alt="Ảnh thiết bị cần nhận diện lỗi"
                        className="w-full h-44 object-contain bg-[#000000]"
                      />
                    </div>

                    <div className="md:col-span-3 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#F97316]">
                          Ảnh đã sẵn sàng phân tích
                        </span>
                        <button
                          type="button"
                          onClick={handleResetScanner}
                          disabled={isAnalyzing}
                          className="text-xs text-[#A0A0A0] hover:text-[#FFFFFF] flex items-center gap-1 cursor-pointer disabled:opacity-50"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Chọn / chụp ảnh khác</span>
                        </button>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="gemini-note-input" className="block text-xs text-[#A0A0A0]">
                          Mô tả thêm triệu chứng (tuỳ chọn)
                        </label>
                        <input
                          id="gemini-note-input"
                          type="text"
                          value={userNote}
                          onChange={(e) => setUserNote(e.target.value)}
                          disabled={isAnalyzing}
                          placeholder="Ví dụ: máy đứng hình ở màn hình này 10 phút..."
                          className="w-full h-10 px-3.5 rounded-xl bg-[#0E0E0E] border border-white/[0.1] focus:border-[#F97316] outline-none text-xs text-[#FFFFFF] placeholder:text-[#666666]"
                        />
                      </div>

                      {!diagnosis && (
                        <button
                          type="button"
                          onClick={() => handleAnalyzeImage(capturedImage, capturedMimeType)}
                          disabled={isAnalyzing}
                          className="w-full h-10 px-4 rounded-xl bg-[#F97316] hover:bg-[#FB923C] disabled:opacity-60 text-[#000000] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>
                            {isAnalyzing
                              ? 'Gemini đang nhận diện lỗi...'
                              : 'Phân tích & Đối chiếu kho lỗi'}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Loading Indicator */}
                  {isAnalyzing && (
                    <div className="p-5 rounded-2xl bg-[#0E0E0E] border border-[#F97316]/30 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 text-[#F97316] flex items-center justify-center animate-pulse shrink-0">
                        <ScanLine className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-[#FFFFFF]">
                          Gemini Vision đang phân tích hình ảnh thiết bị...
                        </div>
                        <p className="text-xs text-[#A0A0A0]">
                          Đang nhận dạng dấu hiệu an toàn và đối chiếu với danh mục lỗi có sẵn trên TechCare.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* API Error Banner */}
                  {analyzeError && (
                    <div className="p-4 rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/40 flex items-start gap-3 text-xs">
                      <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-bold text-[#FFFFFF]">Không thể hoàn tất nhận diện</div>
                        <p className="text-[#E5E5E5]">{analyzeError}</p>
                      </div>
                    </div>
                  )}

                  {/* Diagnosis Result */}
                  {diagnosis && (
                    <div className="space-y-5">
                      {/* ALWAYS SHOW RED SAFETY WARNING FOR SWOLLEN BATTERY / WATER DAMAGE / BURNING */}
                      {isCriticalDanger && (
                        <div
                          role="alert"
                          data-testid="critical-danger-banner"
                          className="p-5 rounded-2xl bg-[#EF4444]/15 border-2 border-[#EF4444] flex items-start gap-3.5 text-[#FECACA]"
                        >
                          <ShieldAlert className="w-6 h-6 text-[#EF4444] shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <div className="text-sm sm:text-base font-extrabold text-[#FFFFFF]">
                              Ngừng sử dụng, mang ra tiệm ngay
                            </div>
                            <p className="text-xs text-[#FECACA] leading-relaxed">
                              Phát hiện dấu hiệu nguy hiểm nghiêm trọng (pin phồng, vào nước hoặc cháy khét). Không cắm sạc hay tự ý tháo lắp.
                            </p>
                            {diagnosis.criticalDangerReasons.length > 0 && (
                              <ul className="pt-1 space-y-1 text-xs text-[#FCA5A5]">
                                {diagnosis.criticalDangerReasons.map((reason, idx) => (
                                  <li key={idx}>• {reason}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Detection Summary Card */}
                      <div className="p-5 rounded-2xl bg-[#0E0E0E] border border-[#F97316]/35 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30 font-semibold">
                              {PLATFORM_LABELS[diagnosis.detectedPlatform] ||
                                diagnosis.detectedPlatform}
                            </span>
                            <span
                              className={`text-[11px] font-mono px-2.5 py-1 rounded bg-[#000000] border ${
                                diagnosis.confidence < LOW_CONFIDENCE_THRESHOLD
                                  ? 'border-amber-500/40 text-amber-300'
                                  : 'border-white/[0.08] text-[#A0A0A0]'
                              }`}
                            >
                              Độ tin cậy:{' '}
                              <strong className="text-[#FFFFFF]">{diagnosis.confidence}%</strong>
                            </span>
                          </div>

                          {diagnosis.errorCodeOrText && (
                            <span className="text-[11px] font-mono text-[#FB923C] px-2.5 py-1 rounded bg-[#000000] border border-white/[0.08]">
                              Mã/Thông báo: {diagnosis.errorCodeOrText}
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0] mb-1">
                            Kết quả nhận diện từ ảnh
                          </div>
                          <h3 className="text-lg font-bold text-[#FFFFFF] font-['Manrope']">
                            {diagnosis.detectedIssueTitle}
                          </h3>
                          <p className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">
                            {diagnosis.reasonForRecommendation}
                          </p>
                        </div>

                        {diagnosis.visualObservations.length > 0 && (
                          <div className="pt-3 border-t border-white/[0.08]">
                            <div className="text-xs font-semibold text-[#FFFFFF] mb-2">
                              Dấu hiệu quan sát được:
                            </div>
                            <ul className="space-y-1.5">
                              {diagnosis.visualObservations.map((obs, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs text-[#A0A0A0] flex items-start gap-2"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                                  <span>{obs}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Below 50% confidence notice */}
                      {isLowConfidence ? (
                        <div
                          data-testid="low-confidence-banner"
                          className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <div className="text-sm font-bold text-[#FFFFFF]">
                                AI chưa chắc chắn, hãy tìm theo triệu chứng
                              </div>
                              <p className="text-xs text-[#D4D4D4]">
                                Độ tin cậy hiện tại là {diagnosis.confidence}% (dưới 50%). Bạn nên dùng ô tìm kiếm theo tên lỗi hoặc triệu chứng trên trang chủ để xem hướng dẫn chính xác.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={onClose}
                            className="h-9 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#000000] text-xs font-bold shrink-0 cursor-pointer"
                          >
                            Tìm theo triệu chứng
                          </button>
                        </div>
                      ) : matchedModules.length > 0 ? (
                        /* Matched TechCare Catalog Modules (Max 3, Existing App Issues Only) */
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-[#FFFFFF] flex items-center gap-2">
                              <Layers className="w-4 h-4 text-[#F97316]" />
                              <span>Lỗi khớp trong dữ liệu TechCare (tối đa 3):</span>
                            </h4>
                          </div>

                          <div className="space-y-3">
                            {matchedModules.map(({ issue: mod, confidence }) => (
                              <div
                                key={mod.id}
                                className="p-4 rounded-2xl bg-[#121212] border border-white/[0.1] hover:border-[#F97316]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                              >
                                <div className="space-y-1.5">
                                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                                    {mod.code && (
                                      <span className="px-1.5 py-0.5 rounded bg-[#000000] border border-white/[0.08] text-[#F97316] font-bold">
                                        {mod.code}
                                      </span>
                                    )}
                                    <span className="text-[#F97316]">
                                      {PLATFORM_LABELS[mod.platform] || mod.platform}
                                    </span>
                                    <span className="text-[#666666]">·</span>
                                    <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
                                      Độ tin cậy: {confidence}%
                                    </span>
                                    <span className="text-[#666666]">·</span>
                                    <span className="flex items-center gap-1 text-[#A0A0A0]">
                                      <Clock className="w-3 h-3 text-[#F97316]" />
                                      {mod.estimatedTime}
                                    </span>
                                    <span className="text-[#666666]">·</span>
                                    <span className="text-[#A0A0A0]">
                                      {mod.steps.length} bước fix
                                    </span>
                                  </div>
                                  <div className="text-sm font-bold text-[#FFFFFF]">{mod.title}</div>
                                  <p className="text-xs text-[#A0A0A0] line-clamp-2">
                                    {mod.summary}
                                  </p>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => onOpenModuleToFix(mod)}
                                  className="h-10 px-4 rounded-xl bg-[#F97316] hover:bg-[#FB923C] text-[#000000] text-xs font-bold flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                                >
                                  <span>Mở bài hướng dẫn</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-2xl bg-[#121212] border border-white/[0.08] text-xs text-[#A0A0A0]">
                          Không có bài hướng dẫn nào khớp trực tiếp trong dữ liệu TechCare. Bạn có thể đóng cửa sổ này và tìm theo triệu chứng trên trang chủ.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
