/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar, DeviceMode } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { TreatmentCard } from './components/TreatmentCard';
import { BookingNotes } from './components/BookingNotes';
import { FaqSection } from './components/FaqSection';
import { StoreLocations } from './components/StoreLocations';
import { MobileStickyFooter } from './components/MobileStickyFooter';
import { BookingModal } from './components/BookingModal';
import {
  TREATMENTS,
  STUDIO_INFO,
  HOMECARE_PRODUCTS,
  RESERVATION_POLICIES,
  SKINCARE_TIPS,
} from './data/treatments';
import { TreatmentCategory } from './types';
import {
  Sparkles,
  Calendar,
  ShieldCheck,
  Heart,
  UserCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Clock,
  Sparkle,
} from 'lucide-react';

export default function App() {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('responsive');

  // Category Filter in Treatments section
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | 'all'>('skincare');

  // 3-Step Instant Booking Modal state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  // Filter treatments by active category
  const filteredTreatments = useMemo(() => {
    if (activeCategory === 'all') return TREATMENTS;
    return TREATMENTS.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  const handleOpenBookingModal = () => {
    setIsBookingOpen(true);
  };

  // Pure Native Smooth Scroll handler (no page reload)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  // One-Page Application Content
  const appContent = (
    <div className="min-h-screen bg-[#E2ECF4] text-[#152433] flex flex-col pb-28 font-sans selection:bg-sky-200 selection:text-sky-900 transition-colors">
      {/* Top Navbar */}
      <Navbar
        deviceMode={deviceMode}
        onDeviceModeChange={setDeviceMode}
        onOpenBooking={handleOpenBookingModal}
      />

      <main className="flex-1 space-y-10 sm:space-y-14">
        {/* SECTION 1: Hero Banner */}
        <HeroBanner onOpenBooking={handleOpenBookingModal} />

        {/* SECTION 2: One-Page Quick Navigation Bar (Smooth Scroll Jump Links) */}
        <div className="px-4 sm:px-6 max-w-6xl mx-auto -mt-4">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'treatments', label: '服務價目' },
              { id: 'policy', label: '預約須知' },
              { id: 'products', label: '產品保養' },
              { id: 'tips', label: '保養小撇步✨' },
              { id: 'space', label: '空間禮遇' },
              { id: 'faq', label: '常見問題' },
              { id: 'studio', label: '工作室資訊' },
            ].map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={(e) => scrollToSection(e, nav.id)}
                className="h-10 px-4 rounded-full whitespace-nowrap transition-all cursor-pointer font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs bg-white hover:bg-[#182837] hover:text-white text-[#334E68] border border-[#CADAE8] active:scale-95"
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 3: 服務價目表 (Treatments) */}
        <section id="treatments" className="scroll-mt-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#CADAE8] pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-sky-800 font-bold">
                Treatment Menu
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#152433]">
                專業療程價目表
              </h2>
            </div>
            <span className="text-xs text-[#576F84]">
              全預約制 ‧ 獨立隱私包廂 ‧ 價格透明無隱形收費
            </span>
          </div>

          {/* 3 Core Category Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-md rounded-2xl border border-[#CADAE8] max-w-xl mx-auto shadow-[0_2px_8px_rgba(30,60,90,0.04)]">
            <button
              type="button"
              onClick={() => setActiveCategory('skincare')}
              className={`flex-1 h-11 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'skincare'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              皮膚管理
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('waxing')}
              className={`flex-1 h-11 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'waxing'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              乾淨除毛
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('massage')}
              className={`flex-1 h-11 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'massage'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              舒壓按摩
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`flex-1 h-11 px-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              全部服務
            </button>
          </div>

          {/* Treatment Category Title & Count */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <span className="font-bold text-[#152433]">
              {activeCategory === 'skincare' && '專業皮膚管理系列（原生水光與無痛淨化）'}
              {activeCategory === 'waxing' && '乾淨除毛系列（義大利天然植萃溫熱蠟）'}
              {activeCategory === 'massage' && '舒壓按摩系列（芳療精油深層釋壓）'}
              {activeCategory === 'all' && '全店完整服務總覽'}
            </span>
            <span className="text-[#576F84]">共 {filteredTreatments.length} 項課程</span>
          </div>

          {/* Treatment Cards Grid (取消了解項目程序按鈕，純粹卡片展示) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </section>

        {/* SECTION 4: 預約須知 (Reservation Policy - Matching Image 3) */}
        <section id="policy" className="scroll-mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#CADAE8] p-6 sm:p-8 shadow-[0_2px_16px_rgba(30,60,90,0.04)]">
            <div className="border-b border-[#CADAE8]/60 pb-4 mb-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold tracking-[0.15em] text-[#152433] uppercase">
                  Reservation Policy
                </h3>
                <p className="text-xs sm:text-sm font-serif-tc font-semibold text-sky-900 mt-0.5">
                  工作室採全預約制 · 守護每位貴賓的完整時光
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#182837] text-white shrink-0 self-start sm:self-auto">
                一人一室 ‧ 獨立隱私包廂
              </span>
            </div>

            {/* Bullets matching Image 3 */}
            <div className="space-y-4 text-xs sm:text-sm text-[#334E68] leading-relaxed">
              {RESERVATION_POLICIES.map((policy, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F4F8FB] border border-[#CADAE8]/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#182837] mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#152433] text-sm">
                      {policy.title}
                    </h4>
                    <p className="mt-1 text-[#486581]">
                      {policy.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#CADAE8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#576F84]">
              <div>
                <p className="font-bold text-[#152433]">工作室地址：{STUDIO_INFO.address}</p>
                <p className="mt-0.5">交通：{STUDIO_INFO.metro} · 預約專線：{STUDIO_INFO.phone}</p>
              </div>
              <button
                type="button"
                onClick={handleOpenBookingModal}
                className="h-10 px-5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center shrink-0 cursor-pointer whitespace-nowrap"
              >
                即刻線上預約時段
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: 產品保養 (Skin Homecare - Matching Image 2) */}
        <section id="products" className="scroll-mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#CADAE8] p-6 sm:p-8 shadow-[0_2px_16px_rgba(30,60,90,0.04)]">
            {/* Header: Skin Homecare 懶人居家修護，延續柔嫩光透肌 */}
            <div className="border-b border-[#CADAE8]/60 pb-4 mb-5">
              <h3 className="text-lg sm:text-xl font-serif font-bold tracking-[0.15em] text-[#152433] uppercase">
                Skin Homecare
              </h3>
              <p className="text-xs sm:text-sm text-[#576F84] mt-0.5 font-medium">
                懶人居家修護，延續柔嫩光透肌
              </p>
            </div>

            {/* Product Cards Grid matching Image 2 */}
            <div className="space-y-3.5">
              {HOMECARE_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#CADAE8] hover:border-[#9ABDD9] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_2px_8px_rgba(30,60,90,0.02)]"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm sm:text-base text-[#152433]">
                        {product.name}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E2ECF4] text-sky-900">
                        {product.capacity}
                      </span>
                    </div>
                    <p className="text-xs text-[#576F84]">
                      {product.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs text-[#829AB1] line-through mr-2 tabular-nums">
                      NT$ {product.originalPrice}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#152433] tabular-nums">
                      NT$ {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Promo Strip matching Image 2 */}
            <div className="mt-5 p-3.5 rounded-2xl bg-[#FAF6F0] border border-[#C5A880]/50 text-center text-xs font-bold text-[#8C6D46] flex items-center justify-center gap-1.5 shadow-2xs">
              <span>✨ 施作當日加購任一居家護理產品現折 50 元</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: 保養小撇步✨ (Skincare Tips) */}
        <section id="tips" className="scroll-mt-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#CADAE8] p-6 sm:p-8 shadow-[0_2px_16px_rgba(30,60,90,0.04)]">
            <div className="border-b border-[#CADAE8]/60 pb-4 mb-5">
              <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#152433]">
                美容師私房 · 居家術後養膚小撇步✨
              </h3>
              <p className="text-xs sm:text-sm text-[#576F84] mt-0.5">
                施作後掌握黃金修護週期，讓透亮細緻的光澤持久綻放
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKINCARE_TIPS.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F4F8FB] border border-[#CADAE8]/60 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#182837] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-[#152433]">{tip.title}</h4>
                  </div>
                  <p className="text-xs text-[#486581] leading-relaxed pl-7">
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: 空間禮遇與一人一室包廂 (Space & Hospitality) */}
        <BookingNotes />

        {/* SECTION 8: 常見問題 (FAQ) */}
        <FaqSection />

        {/* SECTION 9: 工作室門市資訊 & LINE/IG 預約雙按鈕 (StoreLocations) */}
        <StoreLocations onOpenBooking={handleOpenBookingModal} />
      </main>

      {/* Footer */}
      <footer className="mt-14 py-10 px-4 text-center border-t border-[#CADAE8] text-xs text-[#576F84] space-y-2 bg-[#E2ECF4]/60">
        <p className="font-serif-tc font-bold text-base text-[#152433]">
          本顏室・Skincare & Waxing & Body SPA
        </p>
        <p className="font-medium text-[#334E68] text-xs sm:text-sm tracking-wide">
          全預約制 ‧ 獨立隱私包廂 ‧ 皮膚管理 ‧ 專業除毛 ‧ 沉浸舒壓
        </p>
        <p className="text-xs text-[#576F84] pt-1">
          {STUDIO_INFO.address} · {STUDIO_INFO.metro} · 預約諮詢專線：
          <a href={`tel:${STUDIO_INFO.phone}`} className="font-bold underline text-[#152433] ml-1">
            {STUDIO_INFO.phone}
          </a>
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-xs text-sky-900 hover:underline"
          >
            <span>Instagram: @healglow_space</span>
          </a>
          <span className="text-[#CADAE8]">|</span>
          <a
            href={STUDIO_INFO.googleMapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-bold text-xs text-sky-900 hover:underline"
          >
            <span>Google 地圖導航</span>
          </a>
        </div>
        <p className="text-[11px] text-[#576F84]/70 pt-2">
          Copyright © 2026 本顏室 版權所有 · 隱私權保護政策
        </p>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <MobileStickyFooter onOpenBooking={handleOpenBookingModal} />

      {/* 3-Step Instant Booking Modal (選時段 -> 填基本資料 -> .ics 行事曆) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );

  // If mobile simulator mode is toggled on desktop
  if (deviceMode === 'mobile' || deviceMode === 'mobile-large') {
    const frameWidth = deviceMode === 'mobile' ? 'max-w-[390px]' : 'max-w-[430px]';
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-start py-6 px-2 sm:px-4">
        {/* Device Switcher Header Floating in Simulator */}
        <div className="w-full max-w-xl mb-4 flex items-center justify-between text-xs text-slate-300 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-white">
              {deviceMode === 'mobile' ? 'iPhone 標準手機尺寸 (390px)' : '旗艦大螢幕手機尺寸 (430px)'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDeviceMode('responsive')}
              className="h-8 px-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer text-xs font-semibold flex items-center justify-center whitespace-nowrap"
            >
              切換滿版自適應
            </button>
          </div>
        </div>

        {/* Realistic Mobile Frame with exact #E2ECF4 canvas background */}
        <div
          className={`w-full ${frameWidth} bg-[#E2ECF4] rounded-[48px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-[10px] border-slate-800 overflow-hidden relative flex flex-col h-[844px]`}
        >
          {/* Dynamic Island / Notch */}
          <div className="w-full bg-[#E2ECF4] pt-2 pb-1 px-6 flex items-center justify-between z-50 shrink-0 text-[11px] font-semibold text-[#152433] border-b border-[#CADAE8]/50">
            <span>09:41</span>
            <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto" />
            <div className="flex items-center gap-1 text-[10px]">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* Scrollable Phone Screen Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
            {appContent}
          </div>

          {/* Bottom Home Indicator */}
          <div className="w-full bg-[#E2ECF4] py-1.5 flex justify-center z-50 shrink-0 border-t border-[#CADAE8]/50">
            <div className="w-32 h-1 bg-slate-500/60 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  // Default Responsive Web View (full viewport, fluid mobile-to-desktop responsiveness)
  return appContent;
}
