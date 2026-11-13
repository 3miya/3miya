/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar, DeviceMode } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { TreatmentCard } from './components/TreatmentCard';
import { BookingNotes } from './components/BookingNotes';
import { StoreLocations } from './components/StoreLocations';
import { WaxingPriceTable } from './components/WaxingPriceTable';
import { InfoModal } from './components/InfoModal';
import { BrandLogo } from './components/BrandLogo';
import {
  TREATMENTS,
  STUDIO_INFO,
  BASE_DETAIL_ADDONS,
  AMPOULE_DETAIL_ADDONS,
  getTagColor,
} from './data/treatments';
import { TreatmentCategory, InfoModalType } from './types';
import {
  Sparkles,
  Clock,
} from 'lucide-react';

export default function App() {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('responsive');

  // Category Filter in Treatments section (皮膚管理、乾淨除毛、舒壓按摩、限定活動🔥)
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('skincare');

  // Tag Filter in Treatments section
  const [activeTag, setActiveTag] = useState<string>('all');

  // Switch category and reset active tag
  const handleCategoryChange = (category: TreatmentCategory) => {
    setActiveCategory(category);
    setActiveTag('all');
  };

  // Dynamic Sub-tags based on active category
  // 皮膚管理: 全部項目、深層修護、高CP✨、美白緊緻
  // 乾淨除毛: 全部項目、上半身、下半身、私密部位
  // 舒壓按摩 / 限定活動: 隱藏次級標籤導覽列
  const currentSubTags = useMemo(() => {
    if (activeCategory === 'skincare') {
      return [
        { id: 'all', label: '全部項目' },
        { id: '深層修護', label: '深層修護' },
        { id: '高CP✨', label: '高CP✨' },
        { id: '美白緊緻', label: '美白緊緻' },
      ];
    }
    if (activeCategory === 'waxing') {
      return [
        { id: 'all', label: '全部項目' },
        { id: '上半身', label: '上半身' },
        { id: '下半身', label: '下半身' },
        { id: '私密部位', label: '私密部位' },
      ];
    }
    return [];
  }, [activeCategory]);

  // Popup Modal Component state for 美容小知識💡, 產品保養, 保養小步驟, 常見問題
  const [activeModal, setActiveModal] = useState<InfoModalType>(null);

  // Filter treatments by active category and tag
  // 乾淨除毛：點選上半身、下半身、私密部位標籤時，隱藏 a、b、c 套餐方案（僅在「全部項目」時展示）
  const filteredTreatments = useMemo(() => {
    if (activeCategory === 'waxing' && activeTag !== 'all') {
      return [];
    }
    return TREATMENTS.filter((t) => {
      const matchCategory = t.category === activeCategory;
      const matchTag = activeTag === 'all' || (t.tags && t.tags.includes(activeTag));
      return matchCategory && matchTag;
    });
  }, [activeCategory, activeTag]);

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
    <div className="min-h-screen bg-[#E2ECF4] text-[#152433] flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900 transition-colors">
      {/* Top Navbar (只保留最上方的 IG，無 LINE 預約與預訂須知) */}
      <Navbar
        deviceMode={deviceMode}
        onDeviceModeChange={setDeviceMode}
        onOpenModal={setActiveModal}
      />

      <main className="flex-1 space-y-8 sm:space-y-10">
        {/* SECTION 1: Hero Banner */}
        <HeroBanner />

        {/* SECTION 2: 導覽系統 (快捷功能列、核心分類列、小標籤次級列，三列間距完全一致) */}
        <div id="treatments" className="scroll-mt-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-3 sm:space-y-3.5">
          {/* Row 1: 快捷功能導覽列（膠囊圓角 rounded-full，留白充裕、不擁擠） */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto overflow-x-auto scrollbar-none py-0.5">
            {[
              { id: 'treatments', label: '服務價目', isModal: false },
              { id: 'knowledge', label: '美容小知識✨', isModal: true, modalType: 'knowledge' },
              { id: 'products', label: '產品保養', isModal: true, modalType: 'products' },
              { id: 'tips', label: '保養小步驟✨', isModal: true, modalType: 'tips' },
              { id: 'faq', label: '常見問題', isModal: true, modalType: 'faq' },
            ].map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={(e) => {
                  if (nav.isModal && nav.modalType) {
                    setActiveModal(nav.modalType as InfoModalType);
                  } else {
                    scrollToSection(e, nav.id);
                  }
                }}
                className="h-10 px-3.5 sm:px-4.5 rounded-full text-xs font-bold transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap bg-white/80 hover:bg-[#182837] hover:text-white text-[#152433] border border-[#CADAE8] shadow-2xs active:scale-95 shrink-0 sm:flex-1"
              >
                {nav.label}
              </button>
            ))}
          </div>

          {/* Row 2: 核心功能導覽列 (皮膚管理、乾淨除毛、舒壓按摩、限定活動🔥) */}
          <div className="flex items-center gap-2 sm:gap-3.5 p-1.5 sm:p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-[#CADAE8] max-w-2xl mx-auto shadow-[0_2px_8px_rgba(30,60,90,0.04)] overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => handleCategoryChange('skincare')}
              className={`flex-1 h-10 sm:h-11 px-2 sm:px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'skincare'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              皮膚管理
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('waxing')}
              className={`flex-1 h-10 sm:h-11 px-2 sm:px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'waxing'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              乾淨除毛
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('massage')}
              className={`flex-1 h-10 sm:h-11 px-2 sm:px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'massage'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              舒壓按摩
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('campaign')}
              className={`flex-1 h-10 sm:h-11 px-2 sm:px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center cursor-pointer flex items-center justify-center whitespace-nowrap ${
                activeCategory === 'campaign'
                  ? 'bg-[#182837] text-white shadow-xs'
                  : 'text-[#334E68] hover:text-[#182837] hover:bg-white/70'
              }`}
            >
              限定活動🔥
            </button>
          </div>

          {/* Row 3: 小標籤導覽列 (精巧微透膠囊標籤，柔和選取效果，不搶過核心分類列) */}
          {currentSubTags.length > 0 && (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 max-w-md mx-auto overflow-x-auto scrollbar-none py-0.5">
              {currentSubTags.map((tag) => {
                const isActive = activeTag === tag.id;
                const colorClass =
                  tag.id === 'all'
                    ? isActive
                      ? 'bg-[#182837]/12 text-[#182837] border-[#182837]/35 font-bold shadow-2xs'
                      : 'bg-white/40 hover:bg-white/75 text-[#526B82] border-[#CADAE8]/60'
                    : isActive
                      ? `${getTagColor(tag.label)} bg-opacity-90 border-current font-bold ring-1 ring-current/20 shadow-2xs`
                      : `${getTagColor(tag.label)} bg-opacity-40 border-opacity-40 opacity-70 hover:opacity-95 hover:bg-opacity-65`;

                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => setActiveTag(tag.id)}
                    className={`flex-1 h-7.5 sm:h-8 px-2 sm:px-2.5 rounded-full text-[11px] font-medium transition-all whitespace-nowrap cursor-pointer flex items-center justify-center text-center border backdrop-blur-[2px] ${colorClass}`}
                    title={tag.id === 'all' ? '查看全部項目' : `篩選「${tag.label}」`}
                  >
                    {tag.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* SECTION 3: 服務項目列表 (Treatments Menu) */}
        <section className="px-4 sm:px-6 max-w-6xl mx-auto space-y-4">
          {/* Treatment Category Title & Filter State */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-[#152433]">
                {activeCategory === 'skincare' && '皮膚管理系列（全課程皆含低痛感手工粉刺清潔）'}
                {activeCategory === 'waxing' && '乾淨除毛系列（含沐浴清潔與維他命E油修護）'}
                {activeCategory === 'massage' && '舒壓按摩系列（限男性 ‧ 含沐浴清潔）'}
                {activeCategory === 'campaign' && '限定特惠活動專案'}
              </span>
              {activeTag !== 'all' && (
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getTagColor(activeTag)}`}>
                  #{activeTag}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {activeTag !== 'all' && (
                <button
                  type="button"
                  onClick={() => setActiveTag('all')}
                  className="text-xs font-bold text-[#334E68] hover:text-[#152433] underline cursor-pointer whitespace-nowrap shrink-0 inline-block px-1 py-0.5"
                >
                  清除篩選
                </button>
              )}
            </div>
          </div>

          {/* 温馨提醒 (皮膚管理預留時間提示，標籤置左，兩行文字精準左對齊) */}
          {activeCategory === 'skincare' && (
            <div className="p-2.5 sm:p-3 rounded-xl bg-sky-50/70 border border-sky-200/60 text-xs text-sky-950 flex items-start gap-2.5">
              <Clock className="w-3.5 h-3.5 text-sky-800 shrink-0 mt-0.5" />
              <div className="flex items-start gap-1 leading-relaxed">
                <span className="font-bold text-sky-900 shrink-0 select-none">溫馨提醒：</span>
                <div className="flex flex-col">
                  <span className="font-medium text-sky-950">預約肌膚管理課程請預留 2-3 小時</span>
                  <span className="text-[11px] text-sky-800/85">（小臉鬆筋課程除外）</span>
                </div>
              </div>
            </div>
          )}

          {/* Treatment Cards Grid */}
          {filteredTreatments.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          )}

          {/* 乾淨除毛專屬：部位價目卡片（上半身/下半身/私密部位，參考隨附圖）及升級加購框 */}
          {activeCategory === 'waxing' && (
            <WaxingPriceTable activeTag={activeTag} />
          )}

          {/* 細節加點專區 (隨附圖【皮膚管理價目表】細節加點：字數精簡、高效安瓶獨立隔線一區) */}
          {activeCategory === 'skincare' && (
            <div className="mt-4 bg-white/90 rounded-2xl border border-[#CADAE8] p-4 sm:p-5 space-y-3.5 shadow-[0_2px_12px_rgba(30,60,90,0.02)]">
              <div className="flex items-center justify-between gap-2 border-b border-[#CADAE8]/60 pb-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-800" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#152433]">
                    細節加點專區 · 為療程升級尊榮養護
                  </h4>
                </div>
                <span className="text-[11px] text-[#576F84]">
                  本顏·淨透肌客製管理已含高效安瓶
                </span>
              </div>

              {/* 基礎細節加點 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {BASE_DETAIL_ADDONS.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-[#F4F8FB] border border-[#CADAE8]/70 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs text-[#152433]">{item.title}</span>
                        <span className="text-[10px] text-sky-800 bg-sky-100/70 px-1.5 py-0.5 rounded font-semibold shrink-0">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#576F84] mt-1">{item.desc}</p>
                    </div>
                    <p className="text-right text-xs font-bold text-[#152433] mt-2">
                      +NT$ {item.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* 隔線分開為獨立一區：高效安瓶系列 */}
              <div className="border-t border-[#CADAE8]/70 pt-3">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-[#152433] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    高效安瓶系列
                  </span>
                  <span className="text-[10px] text-teal-800 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-md font-medium">
                    本顏·淨透肌已內含
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {AMPOULE_DETAIL_ADDONS.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-white border border-[#CADAE8]/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-bold text-xs text-[#152433]">{item.title}</span>
                          <span className="text-[10px] text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded font-semibold border border-teal-200/50 shrink-0">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#576F84] mt-1">{item.desc}</p>
                      </div>
                      <p className="text-right text-xs font-bold text-[#152433] mt-2">
                        +NT$ {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTION 4: 沉浸私密放鬆環境 (Space & Hospitality) */}
        <BookingNotes />

        {/* SECTION 5: 工作室門市資訊 (StoreLocations - 無底部 IG 與 LINE) */}
        <StoreLocations />
      </main>

      {/* Footer (底部無 LINE 預約、無 IG、無捷運指引與地圖導航) */}
      <footer className="mt-12 sm:mt-16 py-10 px-4 text-center border-t border-[#CADAE8] text-xs text-[#576F84] space-y-2 bg-[#E2ECF4]/60">
        <div className="flex justify-center pb-1">
          <BrandLogo variant="mark-only" size="sm" className="opacity-80" />
        </div>
        <p className="font-serif-tc font-bold text-base text-[#152433]">
          本顏室・Skincare & Waxing & Body SPA
        </p>
        <p className="font-medium text-[#334E68] text-xs sm:text-sm tracking-wide">
          全預約制 ‧ 獨立隱私包廂 ‧ 皮膚管理 ‧ 專業除毛 ‧ 沉浸舒壓
        </p>
        <p className="text-xs text-[#576F84] pt-1">
          {STUDIO_INFO.address}
        </p>
        <p className="text-[11px] text-[#576F84]/70 pt-2">
          Copyright © 2026 本顏室 版權所有 · 隱私權保護政策
        </p>
      </footer>

      {/* 彈跳窗組件 (產品保養、保養小步驟、常見問題 - 右上角黑色圓＋白色叉叉縮小返回頁面) */}
      <InfoModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
        onSelectType={setActiveModal}
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
