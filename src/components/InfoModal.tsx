import React, { useEffect, useState } from 'react';
import {
  X,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Package,
  ChevronDown,
  Lightbulb,
  Droplets,
} from 'lucide-react';
import {
  HOMECARE_PRODUCTS,
  RESERVATION_POLICIES,
  SKINCARE_TIPS,
  FAQS,
  STUDIO_INFO,
} from '../data/treatments';
import { InfoModalType } from '../types';

interface InfoModalProps {
  type: InfoModalType;
  onClose: () => void;
  onSelectType: (type: InfoModalType) => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  type,
  onClose,
  onSelectType,
}) => {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (!type) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  // Track expanded FAQ index (first one opened by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!type) return null;

  const tabs: { key: NonNullable<InfoModalType>; label: string; icon: React.ReactNode }[] = [
    { key: 'knowledge', label: '美容小知識✨', icon: <Sparkles className="w-4 h-4" /> },
    { key: 'products', label: '產品保養', icon: <Package className="w-4 h-4" /> },
    { key: 'tips', label: '保養小步驟✨', icon: <Sparkles className="w-4 h-4" /> },
    { key: 'faq', label: '常見問題', icon: <HelpCircle className="w-4 h-4" /> },
    { key: 'policy', label: '預訂須知', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-hidden shadow-2xl border border-[#CADAE8] flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#CADAE8] bg-[#F4F8FB] flex items-center justify-between gap-3 relative shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-sky-800">
              {type === 'knowledge' && 'Beauty Knowledge'}
              {type === 'products' && 'Skin Homecare Products'}
              {type === 'tips' && 'Skincare Tips & Routine'}
              {type === 'faq' && 'Frequently Asked Questions'}
              {type === 'policy' && 'Reservation Policy'}
            </span>
            <h3 className="text-lg sm:text-xl font-serif-tc font-bold text-[#152433]">
              {type === 'knowledge' && '美容小知識✨'}
              {type === 'products' && '懶人居家修護'}
              {type === 'tips' && '美容師私房 · 居家術後養膚小步驟✨'}
              {type === 'faq' && '常見問題 · 療程前夕與術後解答'}
              {type === 'policy' && '預訂須知 · 守護每位貴賓的完整時光'}
            </h3>
          </div>

          {/* 右上角黑色圓＋白色叉叉（縮小） */}
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black hover:bg-neutral-800 active:scale-95 flex items-center justify-center transition-all cursor-pointer z-30 shadow-sm shrink-0 group"
            aria-label="關閉返回頁面"
            title="關閉返回頁面"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white stroke-[2.5]" />
          </button>
        </div>

        {/* 快速切換標籤列 */}
        <div className="bg-[#E2ECF4]/40 border-b border-[#CADAE8]/60 px-3 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
          {tabs.map((tab) => {
            const isActive = type === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onSelectType(tab.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#182837] text-white shadow-xs'
                    : 'text-[#334E68] hover:bg-white/80 hover:text-[#182837]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm">
          {/* ======================================================== */}
          {/* TAB 1: 美容小知識✨ (依指定僅保留兩項，無圖片) */}
          {/* ======================================================== */}
          {type === 'knowledge' && (
            <div className="space-y-4">
              {/* 1. 標題：什麼是Q菲秀？（標籤：衛福部認證） */}
              <div className="bg-[#F4F8FB] p-4 sm:p-5 rounded-2xl border border-[#CADAE8] space-y-2.5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h4 className="font-bold text-base sm:text-lg text-[#152433] font-serif-tc">
                    什麼是Q菲秀？
                  </h4>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-900 text-white shadow-2xs">
                    衛福部認證
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#334E68] leading-relaxed">
                  不同於市面常見入門水飛梭僅具備清潔力。他有3種管理系統負荷皮膚管理設備，透過專利真空負壓渦旋探頭，順時針旋轉溫和深入毛孔帶走深層皮脂污垢與頑固黑頭，補水舒緩，溫和舒適不傷皮膚。
                </p>
              </div>

              {/* 2. 標題：適合以下膚質（不需要加小字） */}
              <div className="bg-[#F4F8FB] p-4 sm:p-5 rounded-2xl border border-[#CADAE8] space-y-3">
                <h4 className="font-bold text-base sm:text-lg text-[#152433] font-serif-tc">
                  適合以下膚質
                </h4>

                {/* 清楚條列 6 大困擾打勾標籤：✓ 出油、✓ 毛孔髒污、✓ 粉刺堵塞、✓ 妝感不貼、✓ 暗沉無光、✓ 乾燥缺水 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    '出油',
                    '毛孔髒污',
                    '粉刺堵塞',
                    '妝感不貼',
                    '暗沉無光',
                    '乾燥缺水',
                  ].map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-white border border-[#CADAE8] shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="text-emerald-600 font-extrabold text-sm">✓</span>
                      <span className="text-xs sm:text-sm font-bold text-[#152433]">{item}</span>
                    </div>
                  ))}
                </div>

                {/* 附顯著綠色打勾標籤：✓ 全膚質安心適用（後面不要小字） */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span className="text-sm font-bold text-emerald-950">
                    全膚質安心適用
                  </span>
                </div>
              </div>

              {/* Bottom return button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-10 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#152433] font-bold text-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  返回頁面
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: 預訂須知 (Policy) */}
          {/* ======================================================== */}
          {type === 'policy' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-800 shrink-0" />
                  <span className="font-bold text-sky-950 text-xs sm:text-sm">
                    一人一室 ‧ 獨立隱私包廂 ‧ 全預約制服務
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-sky-800 shrink-0">
                  行天宮站 2 分鐘
                </span>
              </div>

              <div className="space-y-3">
                {RESERVATION_POLICIES.map((policy, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F4F8FB] border border-[#CADAE8]/70 flex items-start gap-3"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#182837] mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#152433] text-sm">
                        {policy.title}
                      </h4>
                      <p className="mt-1 text-[#486581] leading-relaxed">
                        {policy.content}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="p-4 rounded-2xl bg-[#F4F8FB] border border-[#CADAE8]/70 flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#182837] mt-1.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#152433] text-sm">
                      洗卸免煩惱
                    </h4>
                    <p className="mt-1 text-[#486581] leading-relaxed">
                      每個臉部護理療程均包含專業溫和的眼唇卸妝與深層潔顏步驟，您可以帶著平常出門的妝容直接前來。
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Info Recap in Modal */}
              <div className="mt-4 pt-4 border-t border-[#CADAE8] text-xs text-[#576F84] space-y-1">
                <p className="font-bold text-[#152433]">工作室地址：{STUDIO_INFO.address}</p>
                <p>交通方式：{STUDIO_INFO.metro}</p>
                <p>營業時間：{STUDIO_INFO.hours}</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#152433] font-bold text-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  返回頁面
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: 產品保養 (Products) */}
          {/* ======================================================== */}
          {type === 'products' && (
            <div className="space-y-4">
              <div className="space-y-3">
                {HOMECARE_PRODUCTS.map((product) => (
                  <div
                    key={product.id}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#CADAE8] shadow-[0_2px_8px_rgba(30,60,90,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-sky-300 transition-colors"
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

              <div className="pt-2 flex items-center justify-between gap-2">
                <span className="text-xs text-[#576F84]">
                  如需諮詢產品適合膚質，歡迎向美容師詢問
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#152433] font-bold text-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  返回頁面
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: 保養小步驟 (Tips) */}
          {/* ======================================================== */}
          {type === 'tips' && (
            <div className="space-y-4">
              <p className="text-xs text-[#576F84]">
                施作後掌握黃金修護週期，讓透亮細緻的光澤持久綻放。以下為美容師整理之日常養膚 4 大核心原則：
              </p>

              <div className="space-y-3">
                {SKINCARE_TIPS.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F4F8FB] border border-[#CADAE8]/70 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#182837] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-[#152433]">
                        {tip.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#486581] leading-relaxed pl-8">
                      {tip.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* 除毛後特別叮嚀 */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <p className="font-bold">除毛護理特別提醒：</p>
                <p className="text-amber-900/90 leading-relaxed">
                  熱蠟除毛後 3 天內請避免泡澡、三溫暖或穿著過緊衣物；施作一週後可開始每週進行 1~2 次溫和去角質，預防毛髮內生。
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#152433] font-bold text-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  返回頁面
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 5: 常見問題 (FAQ) */}
          {/* ======================================================== */}
          {type === 'faq' && (
            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#CADAE8] bg-white overflow-hidden transition-all shadow-[0_1px_4px_rgba(30,60,90,0.02)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-sm text-[#152433]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#576F84] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-sky-800' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-[#486581] leading-relaxed border-t border-[#CADAE8]/40 bg-[#F4F8FB]/60 animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-3 flex items-center justify-between gap-2">
                <span className="text-xs text-[#576F84]">
                  若有其他疑問，歡迎透過官方 Instagram 私訊詢問
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#152433] font-bold text-xs transition-all cursor-pointer whitespace-nowrap"
                >
                  返回頁面
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
