import React from 'react';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/treatments';
import { InfoModalType } from '../types';

interface MobileStickyFooterProps {
  onOpenModal: (type: InfoModalType) => void;
}

export const MobileStickyFooter: React.FC<MobileStickyFooterProps> = ({
  onOpenModal,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#CADAE8] px-3 sm:px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(20,40,65,0.08)] transition-transform">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
        {/* Quick Modal Trigger: 預訂須知 */}
        <button
          type="button"
          onClick={() => onOpenModal('policy')}
          className="flex flex-col items-center justify-center min-w-[58px] h-11 px-2 text-[#334E68] hover:text-[#152433] transition-colors rounded-xl border border-[#CADAE8] bg-[#F4F8FB] shrink-0 cursor-pointer"
          title="查看預訂須知"
        >
          <CalendarCheck className="w-4 h-4 text-sky-800" />
          <span className="text-[10px] font-bold mt-0.5 whitespace-nowrap">預訂須知</span>
        </button>

        {/* Quick Instagram Link */}
        <a
          href={STUDIO_INFO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center min-w-[58px] h-11 px-2 text-[#334E68] hover:text-[#152433] transition-colors rounded-xl border border-[#CADAE8] bg-[#F4F8FB] shrink-0 cursor-pointer"
          title="追蹤官方 IG"
        >
          <svg
            className="w-4 h-4 text-[#D82D7E]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="text-[10px] font-bold mt-0.5 whitespace-nowrap">官方 IG</span>
        </a>

        {/* Main LINE 預約諮詢 Button */}
        <a
          href={STUDIO_INFO.lineUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 h-11 px-4 bg-[#06C755] hover:bg-[#05b34c] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-between cursor-pointer whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-white shrink-0"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 5.92 2 10.75c0 4.3 3.58 7.9 8.44 8.64.33.07.78.22.89.51.1.26.07.67.03 1.02l-.32 1.4c-.1.45-.48 1.76.77 1.05 1.25-.71 6.75-3.97 9.21-6.8 2.01-2.28 2.98-4.22 2.98-5.82C22 5.92 17.52 2 12 2z" />
            </svg>
            <span className="truncate">LINE 官方預約諮詢</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-full shrink-0">
            <span>全預約制</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </a>
      </div>
    </div>
  );
};
