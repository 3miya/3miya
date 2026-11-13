import React from 'react';
import { Smartphone, Monitor, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { STUDIO_INFO } from '../data/treatments';

import { InfoModalType } from '../types';

export type DeviceMode = 'mobile' | 'mobile-large' | 'responsive';

interface NavbarProps {
  deviceMode: DeviceMode;
  onDeviceModeChange: (mode: DeviceMode) => void;
  onOpenModal: (type: InfoModalType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  deviceMode,
  onDeviceModeChange,
  onOpenModal,
}) => {
  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#E2ECF4]/95 backdrop-blur-md border-b border-[#CADAE8] transition-all">
      {/* Top Device Switcher Banner (Desktop utility bar to simulate any phone size) */}
      <div className="hidden md:flex items-center justify-between px-4 py-1.5 bg-[#182837] text-white/90 text-xs border-b border-white/10">
        <div className="flex items-center gap-2 text-sky-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-medium">本顏室 · 全尺寸手機自適應與官方資訊平台</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-white/60 mr-1">檢視尺寸:</span>
          <button
            onClick={() => onDeviceModeChange('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
              deviceMode === 'mobile'
                ? 'bg-sky-600 text-white font-medium shadow-xs'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            title="標準手機尺寸 (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>標準手機 (390px)</span>
          </button>
          <button
            onClick={() => onDeviceModeChange('mobile-large')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
              deviceMode === 'mobile-large'
                ? 'bg-sky-600 text-white font-medium shadow-xs'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            title="大螢幕旗艦手機 (430px)"
          >
            <Smartphone className="w-3.5 h-3.5 scale-110" />
            <span>大螢幕手機 (430px)</span>
          </button>
          <button
            onClick={() => onDeviceModeChange('responsive')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
              deviceMode === 'responsive'
                ? 'bg-sky-600 text-white font-medium shadow-xs'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            title="滿版響應式網頁"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>滿版自適應網頁</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand LOGO (Item 7: 最上方文字改成 LOGO 圖) */}
        <a
          href="#hero"
          onClick={handleNavClick('hero')}
          className="flex items-center shrink-0 group cursor-pointer"
        >
          <BrandLogo variant="horizontal" size="md" />
        </a>

        {/* Navigation Links: 順序與頁面導覽列完全一致 */}
        <nav className="hidden md:flex items-center gap-5 text-xs lg:text-sm font-medium text-[#334E68]">
          <a
            href="#treatments"
            onClick={handleNavClick('treatments')}
            className="hover:text-[#152433] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            服務價目
          </a>
          <button
            type="button"
            onClick={() => onOpenModal('knowledge')}
            className="hover:text-[#152433] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left bg-transparent border-none p-0 font-medium"
          >
            美容小知識✨
          </button>
          <button
            type="button"
            onClick={() => onOpenModal('products')}
            className="hover:text-[#152433] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left bg-transparent border-none p-0 font-medium"
          >
            產品保養
          </button>
          <button
            type="button"
            onClick={() => onOpenModal('tips')}
            className="hover:text-[#152433] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left bg-transparent border-none p-0 font-medium"
          >
            保養小步驟✨
          </button>
          <button
            type="button"
            onClick={() => onOpenModal('faq')}
            className="hover:text-[#152433] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left bg-transparent border-none p-0 font-medium"
          >
            常見問題
          </button>
        </nav>

        {/* Action Buttons: 只保留最上方的 IG */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="h-10 px-3.5 flex items-center justify-center gap-1.5 text-xs font-bold text-[#152433] bg-white hover:bg-slate-50 rounded-xl border border-[#CADAE8] transition-all shadow-xs whitespace-nowrap"
            title="追蹤官方 Instagram @healglow_space"
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
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
};
