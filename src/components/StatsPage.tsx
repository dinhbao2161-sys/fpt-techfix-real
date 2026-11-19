import React, { useMemo } from 'react';
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  XCircle,
  Store,
  TrendingUp,
} from 'lucide-react';
import { Issue } from '../types/issue';
import { buildIssueStatsSummary } from '../utils/issueStats';

interface StatsPageProps {
  issues: Issue[];
  onSelectIssue: (issue: Issue) => void;
  onBackToCatalog: () => void;
}

export const StatsPage: React.FC<StatsPageProps> = ({
  issues,
  onSelectIssue,
  onBackToCatalog,
}) => {
  const summary = useMemo(() => buildIssueStatsSummary(issues), [issues]);

  const getPlatformLabel = (issue: Issue) => {
    if (
      Array.isArray(issue.platforms) &&
      issue.platforms.includes('iphone') &&
      issue.platforms.includes('android')
    ) {
      return 'iOS & Android';
    }
    switch (issue.platform) {
      case 'iphone':
        return 'iPhone / iOS';
      case 'android':
        return 'Android';
      case 'windows':
        return 'Windows';
      case 'mac':
        return 'macOS';
      default:
        return 'Phần cứng';
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Header & Back Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0E0E0E] border border-[#F97316]/30 text-xs font-mono text-[#F97316]">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>BÁO CÁO HIỆU QUẢ KHẮC PHỤC</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF] font-['Manrope']">
            Thống kê kết quả sửa lỗi
          </h1>
          <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-2xl">
            Tổng hợp phản hồi thực tế từ người dùng sau khi làm theo hướng dẫn cho từng sự cố. Tỉ lệ sửa được tính trên tổng số lượt phản hồi của mỗi bài.
          </p>
        </div>

        <button
          type="button"
          onClick={onBackToCatalog}
          className="h-10 px-4 rounded-xl bg-[#0E0E0E] hover:bg-[#161616] border border-white/[0.1] hover:border-[#F97316]/40 text-xs sm:text-sm font-semibold text-[#FFFFFF] flex items-center gap-2 transition-colors self-start sm:self-auto cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-[#F97316]" />
          <span>Quay lại danh sách lỗi</span>
        </button>
      </div>

      {/* Top KPI Cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] space-y-1">
          <div className="flex items-center justify-between text-xs text-[#A0A0A0]">
            <span>Đã sửa được</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
            {summary.totalFixed}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] space-y-1">
          <div className="flex items-center justify-between text-xs text-[#A0A0A0]">
            <span>Chưa được</span>
            <XCircle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
            {summary.totalNotFixed}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] space-y-1">
          <div className="flex items-center justify-between text-xs text-[#A0A0A0]">
            <span>Phải mang ra tiệm</span>
            <Store className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-rose-400 tabular-nums">
            {summary.totalNeedShop}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-[#F97316]/30 space-y-1">
          <div className="flex items-center justify-between text-xs text-[#A0A0A0]">
            <span>Tỉ lệ sửa được chung</span>
            <TrendingUp className="w-4 h-4 text-[#F97316]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#F97316] tabular-nums">
            {summary.overallSuccessRate}%
          </div>
        </div>
      </section>

      {/* Statistics Table (Totals Row Pinned at the Top) */}
      <section className="rounded-2xl bg-[#0A0A0A] border border-white/[0.08] overflow-hidden">
        <div className="px-5 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm sm:text-base font-bold text-[#FFFFFF]">
            Bảng thống kê chi tiết theo từng lỗi
          </h2>
          <span className="text-xs font-mono text-[#A0A0A0]">
            {summary.totalIssues} bài hướng dẫn · {summary.totalVotes} lượt phản hồi
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#0F0F0F] text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0]">
                <th className="py-3.5 px-5 font-semibold">Lỗi / Sự cố</th>
                <th className="py-3.5 px-4 text-right font-semibold">Đã sửa được</th>
                <th className="py-3.5 px-4 text-right font-semibold">Chưa được</th>
                <th className="py-3.5 px-4 text-right font-semibold">Mang ra tiệm</th>
                <th className="py-3.5 px-5 text-right font-semibold w-44">Tỉ lệ sửa được (%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
              {/* Totals Row Always at the Very Top */}
              <tr
                data-testid="stats-total-row"
                className="bg-[#F97316]/[0.1] border-b-2 border-[#F97316]/40 font-bold text-[#FFFFFF]"
              >
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded bg-[#F97316] text-[#000000] text-[10px] font-mono uppercase tracking-wider">
                      Tổng
                    </span>
                    <span>Tất cả sự cố ({summary.totalIssues} lỗi)</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right font-mono tabular-nums text-emerald-400">
                  {summary.totalFixed}
                </td>
                <td className="py-4 px-4 text-right font-mono tabular-nums text-amber-400">
                  {summary.totalNotFixed}
                </td>
                <td className="py-4 px-4 text-right font-mono tabular-nums text-rose-400">
                  {summary.totalNeedShop}
                </td>
                <td className="py-4 px-5 text-right font-mono tabular-nums text-[#F97316]">
                  <div className="flex items-center justify-end gap-2">
                    <span>{summary.overallSuccessRate}%</span>
                  </div>
                </td>
              </tr>

              {/* Individual Issue Rows */}
              {summary.rows.map((row) => (
                <tr
                  key={row.issue.id}
                  className="hover:bg-white/[0.03] transition-colors"
                >
                  <td className="py-3.5 px-5">
                    <button
                      type="button"
                      onClick={() => onSelectIssue(row.issue)}
                      className="text-left group cursor-pointer block w-full"
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        {row.issue.code && (
                          <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#141414] border border-white/[0.08] text-[#F97316]">
                            {row.issue.code}
                          </span>
                        )}
                        <span className="font-semibold text-[#FFFFFF] group-hover:text-[#F97316] transition-colors">
                          {row.issue.title}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#777777] mt-0.5">
                        {getPlatformLabel(row.issue)}
                      </div>
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono tabular-nums text-emerald-400">
                    {row.fixed}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono tabular-nums text-amber-400">
                    {row.notFixed}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono tabular-nums text-rose-400">
                    {row.needShop}
                  </td>
                  <td className="py-3.5 px-5 text-right font-mono tabular-nums">
                    <div className="flex items-center justify-end gap-2.5">
                      <div className="w-16 h-1.5 rounded-full bg-[#161616] overflow-hidden hidden sm:block">
                        <div
                          className="h-full bg-[#F97316] rounded-full"
                          style={{ width: `${Math.min(100, row.successRate)}%` }}
                        />
                      </div>
                      <span
                        className={
                          row.totalVotes > 0
                            ? 'text-[#FFFFFF] font-semibold'
                            : 'text-[#666666]'
                        }
                      >
                        {row.successRate}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
