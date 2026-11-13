import React from 'react';
import { Clock } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentCardProps {
  treatment: Treatment;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#CADAE8] shadow-[0_2px_12px_rgba(30,60,90,0.03)] hover:border-[#9ABDD9] transition-all flex flex-col justify-between overflow-hidden">
      {/* Top Tag & Badge */}
      <div className="p-4 sm:p-5 pb-3">
        {treatment.category !== 'waxing' && (treatment.subCategory || treatment.badge) ? (
          <div className="flex items-center justify-between gap-2 mb-2 min-h-6">
            {treatment.subCategory ? (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-lg font-semibold border ${treatment.tagColor}`}
                >
                  {treatment.subCategory}
                </span>
                {treatment.category !== 'campaign' && (
                  <span className="text-[11px] font-medium text-[#576F84] bg-slate-100 px-2 py-0.5 rounded-lg">
                    {treatment.category === 'skincare' && '皮膚管理'}
                    {treatment.category === 'massage' && '舒壓按摩'}
                  </span>
                )}
              </div>
            ) : (
              <div />
            )}
            {treatment.badge && (
              <span className="text-[11px] font-bold text-white bg-[#182837] px-2.5 py-0.5 rounded-full shadow-xs shrink-0">
                {treatment.badge}
              </span>
            )}
          </div>
        ) : null}

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif-tc font-bold text-[#152433]">
          {treatment.title}
        </h3>

        {/* Tagline / Subtitle */}
        {treatment.tagline ? (
          <p className="text-xs text-[#576F84] mt-1 line-clamp-1 font-sans">
            {treatment.tagline}
          </p>
        ) : null}

        {/* Bullet Features (項目內文列點加粗：圓點醒目、文字加粗) */}
        <ul className="mt-3 space-y-1.5 text-xs">
          {treatment.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-left leading-relaxed">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-700 mt-1.5 shrink-0 shadow-2xs" />
              <span className="flex-1 font-semibold text-[#182837] line-clamp-2">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Duration and Price (限定活動不用顯示約多少時間) */}
      <div className="p-4 sm:p-5 pt-3 border-t border-[#CADAE8]/60 bg-[#F4F8FB]/80 mt-2 flex items-baseline justify-between">
        {treatment.category !== 'campaign' ? (
          <div className="flex items-center gap-1.5 text-xs text-[#576F84]">
            <Clock className="w-3.5 h-3.5 text-sky-700" />
            <span>約 {treatment.durationMinutes} 分鐘</span>
          </div>
        ) : (
          <div className="text-xs text-sky-800 font-semibold">
            <span>限定專案禮遇</span>
          </div>
        )}

        <div className="text-right ml-auto">
          <span className="text-xs text-[#829AB1] line-through mr-1.5 tabular-nums">
            NT$ {treatment.originalPrice.toLocaleString()}
          </span>
          <span className="text-base sm:text-lg font-bold text-[#152433] tabular-nums">
            NT$ {treatment.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};
