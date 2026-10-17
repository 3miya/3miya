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
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`text-xs px-2.5 py-0.5 rounded-lg font-semibold border ${treatment.tagColor}`}
            >
              {treatment.subCategory}
            </span>
            <span className="text-[11px] font-medium text-[#576F84] bg-slate-100 px-2 py-0.5 rounded-lg">
              {treatment.category === 'skincare' && '皮膚管理'}
              {treatment.category === 'waxing' && '乾淨除毛'}
              {treatment.category === 'massage' && '舒壓按摩'}
            </span>
          </div>
          {treatment.badge && (
            <span className="text-[11px] font-bold text-white bg-[#182837] px-2.5 py-0.5 rounded-full shadow-xs shrink-0">
              {treatment.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-serif-tc font-bold text-[#152433]">
          {treatment.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-xs text-[#576F84] mt-1 line-clamp-1 font-sans">
          {treatment.tagline}
        </p>

        {/* Bullet Features */}
        <ul className="mt-3 space-y-1.5 text-xs text-[#334E68]">
          {treatment.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="text-sky-700 mt-0.5 shrink-0 font-bold">·</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Duration and Price (取消了解項目程序按鈕) */}
      <div className="p-4 sm:p-5 pt-3 border-t border-[#CADAE8]/60 bg-[#F4F8FB]/80 mt-2 flex items-baseline justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[#576F84]">
          <Clock className="w-3.5 h-3.5 text-sky-700" />
          <span>約 {treatment.durationMinutes} 分鐘</span>
        </div>

        <div className="text-right">
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
