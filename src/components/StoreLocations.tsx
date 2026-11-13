import React from 'react';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { STUDIO_INFO } from '../data/treatments';

interface StoreLocationsProps {
  className?: string;
}

export const StoreLocations: React.FC<StoreLocationsProps> = ({ className = '' }) => {
  return (
    <section id="studio" className={`scroll-mt-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-sky-800 shrink-0" />
        <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#152433]">
          工作室指引
        </h2>
      </div>

      {/* Clean Studio Info Card */}
      <div className="bg-white rounded-2xl border border-[#CADAE8] p-5 sm:p-7 shadow-[0_2px_12px_rgba(30,60,90,0.03)] max-w-2xl">
        <div className="space-y-4 text-xs sm:text-sm text-[#334E68]">
          {/* 地址 */}
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#152433] text-sm sm:text-base">{STUDIO_INFO.address}</p>
              <p className="text-[#576F84] mt-0.5">{STUDIO_INFO.metro}</p>
            </div>
          </div>

          {/* 營業時間 (括號裡的字安排在下一行) */}
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#152433]">週一至週日 11:00 - 22:00</p>
              <p className="text-[#576F84] mt-0.5">(有特殊時段需求都可以討論預約)</p>
            </div>
          </div>

          {/* Google 地圖導航按鈕 */}
          <div className="pt-1">
            <a
              href={STUDIO_INFO.googleMapUrl}
              target="_blank"
              rel="noreferrer"
              className="h-10 px-4 text-xs font-bold text-[#152433] bg-[#F4F8FB] hover:bg-[#E2ECF4] border border-[#CADAE8] rounded-xl transition-colors text-center inline-flex items-center justify-center gap-2 shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-700 shrink-0" />
              <span>Google 地圖導航路線</span>
              <ExternalLink className="w-3 h-3 text-[#576F84] shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
