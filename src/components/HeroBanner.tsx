import React from 'react';
import { Sparkles, ShieldCheck, Heart, UserCheck, ArrowRight, Gift, Calendar, Star } from 'lucide-react';
import { HERO_IMAGE, STUDIO_INFO } from '../data/treatments';
import { BrandLogo } from './BrandLogo';

interface HeroBannerProps {
  className?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ className = '' }) => {
  return (
    <section id="hero" className={`pt-4 pb-2 px-4 sm:px-6 max-w-6xl mx-auto ${className}`}>
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

        {/* Subtext under motto (Item 2: 斷句到第二行，畫面整齊好看) */}
        <p className="text-xs sm:text-sm text-[#576F84] leading-relaxed max-w-lg mx-auto font-medium">
          <span className="block">結合科技與手技，幫助你重回健康、光澤肌膚</span>
          <span className="block mt-0.5">只做真正對你有幫助的事</span>
        </p>
      </div>

      {/* 3 Core Highlights (Item 3: 1v1 專屬客製 / 無痛清粉刺 / 獨立包廂服務) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 max-w-xl mx-auto">
        <div className="bg-white/90 border border-[#CADAE8] rounded-2xl p-2.5 sm:p-3 text-center shadow-[0_2px_8px_rgba(30,60,90,0.03)] hover:shadow-md transition-shadow flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center mb-1.5 border border-sky-100 shrink-0">
            <UserCheck className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#152433] whitespace-nowrap">1v1 專屬客製</p>
          <p className="text-[10px] sm:text-xs text-[#576F84] mt-0.5 font-medium whitespace-nowrap">專業檢測諮詢</p>
        </div>

        <div className="bg-white/90 border border-[#CADAE8] rounded-2xl p-2.5 sm:p-3 text-center shadow-[0_2px_8px_rgba(30,60,90,0.03)] hover:shadow-md transition-shadow flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-1.5 border border-emerald-100 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#152433] whitespace-nowrap">無痛清粉刺</p>
          <p className="text-[10px] sm:text-xs text-[#576F84] mt-0.5 font-medium whitespace-nowrap">細膩手法乾淨清潔</p>
        </div>

        <div className="bg-white/90 border border-[#CADAE8] rounded-2xl p-2.5 sm:p-3 text-center shadow-[0_2px_8px_rgba(30,60,90,0.03)] hover:shadow-md transition-shadow flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-800 flex items-center justify-center mb-1.5 border border-indigo-100 shrink-0">
            <Heart className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#152433] whitespace-nowrap">獨立包廂服務</p>
          <p className="text-[10px] sm:text-xs text-[#576F84] mt-0.5 font-medium whitespace-nowrap">私人隱密時光無擾</p>
        </div>
      </div>

      {/* Visual Banner Card (底圖改為實景空間隨附圖，保留英文字，不放中文) */}
      <div className="mt-5 relative rounded-3xl overflow-hidden border border-[#CADAE8] shadow-[0_4px_20px_rgba(30,60,90,0.06)] max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] bg-[#CADAE8]/30">
        <img
          src={HERO_IMAGE}
          alt="本顏室 頂級護理美學空間"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#182837]/65 via-[#182837]/10 to-transparent flex flex-col justify-end p-4 sm:p-6">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-white/95 font-semibold drop-shadow-sm">
              Skincare & Waxing & Body SPA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
