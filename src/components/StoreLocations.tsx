import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Calendar, ShieldCheck, Heart, Sparkles, UserCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/treatments';
import { CtaButtons } from './CtaButtons';

interface StoreLocationsProps {
  onOpenBooking: () => void;
}

export const StoreLocations: React.FC<StoreLocationsProps> = ({ onOpenBooking }) => {
  return (
    <section id="studio" className="scroll-mt-24 py-6 px-4 sm:px-6 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs uppercase tracking-wider text-sky-800 font-semibold">
            Studio Location
          </span>
          <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#152433]">
            工作室資訊與預約時段
          </h2>
        </div>
        <span className="text-xs text-[#576F84]">
          鄰近捷運行天宮站 · 全預約制私密空間
        </span>
      </div>

      {/* Single Studio Card */}
      <div className="bg-white rounded-3xl border border-[#CADAE8] p-6 sm:p-8 shadow-[0_2px_16px_rgba(30,60,90,0.04)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-900 font-bold border border-sky-200/60">
                {STUDIO_INFO.badge}
              </span>
              <span className="text-xs text-[#576F84]">一人一室獨立客房包廂</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#152433]">
              {STUDIO_INFO.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#576F84] leading-relaxed">
              位於台北市中山區，鄰近捷運行天宮站。採完全預約制與獨立客房包廂，提供專業皮膚管理、熱蠟除毛與精油舒壓，讓您在私密安心的環境中全然放鬆。
            </p>

            <div className="space-y-3 text-xs text-[#334E68] pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#152433] text-sm">{STUDIO_INFO.address}</p>
                  <p className="text-[#576F84] mt-0.5">{STUDIO_INFO.metro}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-700 shrink-0" />
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="hover:text-sky-900 hover:underline font-bold tabular-nums text-sm text-[#152433]"
                >
                  {STUDIO_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#152433]">{STUDIO_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Google Maps (Item 5), Call, IG (Item 6) */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <a
                href={STUDIO_INFO.googleMapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[130px] h-11 px-3 text-xs font-bold text-[#152433] hover:bg-[#E2ECF4] border border-[#CADAE8] rounded-xl transition-colors text-center flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span>Google 地圖導航</span>
                <ExternalLink className="w-3 h-3 text-[#576F84] shrink-0" />
              </a>

              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex-1 min-w-[130px] h-11 px-3 text-xs font-bold text-[#152433] hover:bg-[#E2ECF4] border border-[#CADAE8] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                <span>電話預約諮詢</span>
              </a>

              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="h-11 px-3.5 text-xs font-bold text-[#152433] hover:bg-white border border-[#CADAE8] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs bg-[#F4F8FB] whitespace-nowrap"
                title="追蹤官方 Instagram"
              >
                <svg
                  className="w-4 h-4 text-[#D82D7E] shrink-0"
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
                <span>官方 IG</span>
              </a>
            </div>
          </div>

          {/* Studio Environment Highlights (Item 5: 獨立客房包廂、私密安心，取消草本茶與微氣泡) */}
          <div className="bg-[#F4F8FB] border border-[#CADAE8] rounded-2xl p-5 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-800">
              工作室獨立客房包廂空間禮遇
            </h4>

            <div className="space-y-3 text-xs text-[#334E68]">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white text-sky-800 flex items-center justify-center shrink-0 border border-[#CADAE8] shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#152433]">一人一室獨立客房包廂</p>
                  <p className="text-[#576F84] text-[11px] mt-0.5">專屬獨立私密空間與獨立空調，享有高規格紫外線消毒與無菌備品。</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white text-emerald-800 flex items-center justify-center shrink-0 border border-[#CADAE8] shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#152433]">專業細膩手工無痛清粉刺</p>
                  <p className="text-[#576F84] text-[11px] mt-0.5">專業細緻手法深層清潔黑頭與角質，不傷真皮層，退紅迅速安心。</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white text-indigo-800 flex items-center justify-center shrink-0 border border-[#CADAE8] shadow-xs">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#152433]">1v1 專屬客製調配護理</p>
                  <p className="text-[#576F84] text-[11px] mt-0.5">針對當下個人膚質與毛髮狀況，量身設計最契合的專屬修護方案。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 直接呈現 LINE 預約 ＋ Instagram 雙按鈕 (如附圖) */}
      <div className="py-6 flex justify-center">
        <CtaButtons onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
};
