import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/treatments';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-6 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-sky-800 font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="text-xl sm:text-2xl font-serif-tc font-bold text-[#152433]">
            常見問題 (FAQ)
          </h2>
        </div>
        <span className="text-xs text-[#576F84]">點擊題目展開詳細解答</span>
      </div>

      <div className="space-y-2.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#CADAE8] overflow-hidden transition-all shadow-[0_2px_8px_rgba(30,60,90,0.03)]"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#F4F8FB]/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-serif-tc font-bold text-sky-800 shrink-0">
                    Q{idx + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#152433] font-serif-tc">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#576F84] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-sky-800' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#334E68] leading-relaxed border-t border-[#CADAE8]/50 bg-[#F4F8FB]/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
