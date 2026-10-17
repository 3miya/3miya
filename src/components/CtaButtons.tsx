import React from 'react';
import { STUDIO_INFO } from '../data/treatments';

interface CtaButtonsProps {
  onOpenBooking: () => void;
  className?: string;
}

/**
 * Image 1 Reference Dual Capsule Action Buttons:
 * [ LINE 預約 ] (Green background with LINE speech bubble)
 * [ Instagram ] (White background with warm gold/tan border and Instagram camera icon)
 */
export const CtaButtons: React.FC<CtaButtonsProps> = ({
  onOpenBooking,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mx-auto ${className}`}>
      {/* LINE 預約 (Exact Image 1 Style: Green Pill #06C755) */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="w-full sm:w-56 h-12 bg-[#06C755] hover:bg-[#05b34c] active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-full shadow-[0_4px_14px_rgba(6,199,85,0.25)] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
      >
        {/* LINE Speech Bubble Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-white shrink-0"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 5.92 2 10.75c0 4.3 3.58 7.9 8.44 8.64.33.07.78.22.89.51.1.26.07.67.03 1.02l-.32 1.4c-.1.45-.48 1.76.77 1.05 1.25-.71 6.75-3.97 9.21-6.8 2.01-2.28 2.98-4.22 2.98-5.82C22 5.92 17.52 2 12 2z" />
        </svg>
        <span className="tracking-wide">LINE 預約</span>
      </button>

      {/* Instagram (Exact Image 1 Style: White Pill with warm tan/gold border #C5A880) */}
      <a
        href={STUDIO_INFO.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="w-full sm:w-56 h-12 bg-white hover:bg-[#FAF8F5] active:scale-[0.98] text-[#152433] font-bold text-sm sm:text-base rounded-full border-2 border-[#C5A880] shadow-[0_2px_8px_rgba(197,168,128,0.15)] transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
      >
        {/* Instagram Gradient Camera Icon */}
        <svg
          className="w-5 h-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ig-grad-cta" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FA8F21" />
              <stop offset="0.4" stopColor="#D82D7E" />
              <stop offset="0.8" stopColor="#9B27B0" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="url(#ig-grad-cta)" strokeWidth="2" />
          <circle cx="12" cy="12" r="4.2" stroke="url(#ig-grad-cta)" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad-cta)" />
        </svg>
        <span className="tracking-wide text-[#1A1A1A]">Instagram</span>
      </a>
    </div>
  );
};
