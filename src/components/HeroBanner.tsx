import React from 'react';
import { Sparkles, ShieldCheck, Heart, UserCheck, ArrowRight, Gift, Calendar, Star } from 'lucide-react';
import { HERO_IMAGE, STUDIO_INFO } from '../data/treatments';
import { BrandLogo } from './BrandLogo';

interface HeroBannerProps {
  onOpenBooking: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="hero" className="pt-6 pb-6 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Brand Header Block with Official Logo */}
      <div className="text-center max-w-2xl mx-auto space-y-3 flex flex-col items-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[#CADAE8] text-[11px] font-semibold text-[#25425C] shadow-[0_1px_4px_rgba(30,60,90,0.04)]">
          <span className="w-2 h-2 rounded-full bg-[#06C755] animate-pulse"></span>
          <span>全預約制 · 獨立隱私包廂 · 台北行天宮站</span>
        </div>
        
        {/* Authentic Brand LOGO (Item 7) */}
        <div className="py-1">
          <BrandLogo variant="stacked" size="xl" />
        </div>

        {/* Brand Core Motto (Item 2) */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-tc font-bold tracking-tight text-[#152433] text-balance pt-1">
          回歸到最美好，最原本的自己
        </h2>

        {/* Subtext under motto (Item 2) */}
        <p className="text-xs sm:text-sm text-[#576F84] leading-relaxed max-w-lg mx-auto font-medium">
          結合科技與手技，幫助你重回健康、光澤肌膚・只做真正對你有幫助的事
        </p>
      </div>

      {/* 3 Core Highlights (Item 3: 1v1 專屬客製 / 無痛清粉刺 / 獨立包廂服務) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 max-w-xl mx-auto">
        <div className="bg-white/90 border border-[#CADAE8] rounded-2xl p-2.5 sm:p-3 text-center shadow-[0_2px_8px_rgba(30,60,90,0.03)] hover:shadow-md transition-shadow">
          <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center mx-auto mb-1.5 border border-sky-100">
            <UserCheck className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#152433]">1v1 專屬客製</p>
          <p className="text-[10px] sm:text-xs text-[#576F84] mt-0.5 font-medium">專業檢測諮詢</p>
        </div>

        <div className="bg-white/90 border border-[#CADAE8] rounded-2xl p-2.5 sm:p-3 text-center shadow-[0_2px_8px_rgba(30,60,90,0.03)] hover:shadow-md transition-shadow">
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto mb-1.5 border border-emerald-100">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#152433]">無痛清粉刺</p>
          <p className="text-[10px] sm:text-xs text-[#576F84] mt-0.5 font-medium">細膩手法乾淨清潔</p>
        </div>

        <div className="bg-white/90 border border-[#CADAE8] rounded-2xl p-2.5 sm:p-3 text-center shadow-[0_2px_8px_rgba(30,60,90,0.03)] hover:shadow-md transition-shadow">
          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-800 flex items-center justify-center mx-auto mb-1.5 border border-indigo-100">
            <Heart className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#152433]">獨立包廂服務</p>
          <p className="text-[10px] sm:text-xs text-[#576F84] mt-0.5 font-medium">私人隱密時光無擾</p>
        </div>
      </div>

      {/* Visual Banner Card */}
      <div className="mt-5 relative rounded-3xl overflow-hidden border border-[#CADAE8] shadow-[0_4px_20px_rgba(30,60,90,0.06)] max-w-4xl mx-auto aspect-21/9 sm:aspect-16/7 bg-[#CADAE8]/30">
        <img
          src={HERO_IMAGE}
          alt="本顏室 頂級護理空間"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#182837]/90 via-[#182837]/40 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-sky-200 font-semibold">
                Skincare & Waxing & Body SPA
              </span>
              <h3 className="text-lg sm:text-2xl font-serif-tc font-bold mt-0.5">
                回歸純粹 · 探索原生無瑕透亮美肌
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#treatments"
                className="h-11 sm:h-12 px-4 sm:px-5 text-xs sm:text-sm font-semibold bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl text-white border border-white/25 transition-colors cursor-pointer flex items-center justify-center whitespace-nowrap"
              >
                探索服務項目
              </a>
              <button
                type="button"
                onClick={onOpenBooking}
                className="h-11 sm:h-12 px-4 sm:px-5 text-xs sm:text-sm font-bold bg-[#06C755] hover:bg-[#05b34c] rounded-xl text-white shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>即刻線上預約</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Item 8: 完成google評論打卡，即享任意課程88折 Strip */}
      <div className="mt-4 bg-white/90 border border-[#CADAE8] rounded-2xl px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 max-w-4xl mx-auto text-xs sm:text-sm shadow-[0_1px_4px_rgba(30,60,90,0.03)]">
        <div className="flex items-center gap-2 text-[#152433] font-bold">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
          <span>新客限定禮遇：完成 Google 評論打卡，即享任意課程 88 折！</span>
        </div>
        <button
          type="button"
          onClick={onOpenBooking}
          className="h-9 px-3 text-xs font-bold text-sky-800 hover:text-sky-950 underline underline-offset-2 shrink-0 cursor-pointer self-end sm:self-auto whitespace-nowrap flex items-center"
        >
          立即預約享受 88 折
        </button>
      </div>
    </section>
  );
};
