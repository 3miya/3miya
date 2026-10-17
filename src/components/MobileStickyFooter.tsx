import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/treatments';

interface MobileStickyFooterProps {
  onOpenBooking: () => void;
}

export const MobileStickyFooter: React.FC<MobileStickyFooterProps> = ({
  onOpenBooking,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#CADAE8] px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(20,40,65,0.08)] transition-transform">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-2.5">
        {/* Quick Phone Call Button (0962015282) */}
        <a
          href={`tel:${STUDIO_INFO.phone}`}
          className="flex flex-col items-center justify-center min-w-[52px] h-11 px-2 text-[#334E68] hover:text-[#152433] transition-colors rounded-xl border border-[#CADAE8] bg-[#F4F8FB] shrink-0"
          title="電話預約諮詢 0962015282"
        >
          <Phone className="w-4 h-4 text-sky-800" />
          <span className="text-[10px] font-bold mt-0.5 whitespace-nowrap">電話</span>
        </a>

        {/* Quick Instagram Link */}
        <a
          href={STUDIO_INFO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center min-w-[52px] h-11 px-2 text-[#334E68] hover:text-[#152433] transition-colors rounded-xl border border-[#CADAE8] bg-[#F4F8FB] shrink-0"
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
          <span className="text-[10px] font-bold mt-0.5 whitespace-nowrap">IG 專頁</span>
        </a>

        {/* Main 3-Step Booking Action */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 h-11 px-4 bg-[#06C755] hover:bg-[#05b34c] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-between cursor-pointer whitespace-nowrap"
        >
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">線上即時預約</span>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
              全預約制
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
