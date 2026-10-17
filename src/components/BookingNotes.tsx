import React from 'react';
import { CalendarCheck, ShieldCheck, Heart, Sparkles, UserCheck } from 'lucide-react';

export const BookingNotes: React.FC = () => {
  return (
    <section id="space" className="scroll-mt-24 py-4 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl border border-[#CADAE8] p-5 sm:p-6 shadow-[0_2px_12px_rgba(30,60,90,0.03)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1: 預約須知 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#152433]">
              <div className="w-6 h-6 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-bold font-serif-tc tracking-wide">
                預約須知 · 守護您的完整時光
              </h3>
            </div>
            
            <ul className="text-xs text-[#334E68] space-y-2 leading-relaxed pl-1">
              <li className="flex items-start gap-2">
                <span className="text-sky-700 font-bold">•</span>
                <span>為保障每位貴賓享有安靜放鬆之私人體驗，本顏室採<strong>完全預約制</strong>，恕不接受現場無預約臨時候位。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-700 font-bold">•</span>
                <span>預約時段將為您保留 10 分鐘。若需調整行程或取消，敬請於 24 小時前聯繫官方官方客服或來電告知。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-700 font-bold">•</span>
                <span>皮膚護理前無需刻意自行洗卸，專業美容師將依標準流程為您進行溫和無痛深層潔淨。</span>
              </li>
            </ul>
          </div>

          {/* Column 2: 獨立客房包廂與空間禮遇 (取消迎賓草本茶與專利奈米微氣泡) */}
          <div className="space-y-3 border-t md:border-t-0 md:border-l border-[#CADAE8] pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center gap-2 text-[#152433]">
              <div className="w-6 h-6 rounded-full bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-bold font-serif-tc tracking-wide">
                空間禮遇 · 沉浸私密放鬆環境
              </h3>
            </div>

            <ul className="text-xs text-[#334E68] space-y-2 leading-relaxed pl-1">
              <li className="flex items-start gap-2">
                <span className="text-sky-700 font-bold">•</span>
                <span><strong>一人一室獨立隱私包廂</strong>：獨立空調與私密空間，享有絕對隱私及安心的高規格紫外線消毒。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-700 font-bold">•</span>
                <span><strong>細緻手工無痛清粉刺</strong>：專業細膩手法溫和代謝毛孔髒污，不撕扯皮脂膜，低紅腫快速復原。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-700 font-bold">•</span>
                <span><strong>專業肌膚檢測與 1v1 客製</strong>：施作前後仔細記錄膚況，為您客製專屬的原生調養護理配方。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
