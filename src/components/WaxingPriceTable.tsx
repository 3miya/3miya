import React from 'react';

export interface WaxingItem {
  name: string;
  price: number;
}

export interface WaxingSection {
  id: '上半身' | '下半身' | '私密部位';
  title: string;
  items: WaxingItem[];
}

export const WAXING_SECTIONS: WaxingSection[] = [
  {
    id: '上半身',
    title: '上半身',
    items: [
      { name: '腋下', price: 500 },
      { name: '胸/腹/背', price: 800 },
      { name: '半手', price: 800 },
      { name: '全手', price: 1200 },
      { name: '上下鬍', price: 900 },
      { name: '全鬍', price: 1200 },
    ],
  },
  {
    id: '下半身',
    title: '下半身',
    items: [
      { name: '臀部', price: 500 },
      { name: '大腿', price: 1200 },
      { name: '小腿', price: 1200 },
      { name: '全腿', price: 2200 },
    ],
  },
  {
    id: '私密部位',
    title: '私密部位',
    items: [
      { name: '(V)修型', price: 800 },
      { name: '(B)蛋蛋', price: 500 },
      { name: '(O)肛門', price: 500 },
      { name: '(V)陰部', price: 1000 },
      { name: '(VBO)修型', price: 1700 },
      { name: '(VBO)全除', price: 1800 },
    ],
  },
];

interface WaxingPriceTableProps {
  activeTag: string;
}

export const WaxingPriceTable: React.FC<WaxingPriceTableProps> = ({ activeTag }) => {
  // Filter sections according to activeTag ('all' or '上半身' | '下半身' | '私密部位')
  const visibleSections = WAXING_SECTIONS.filter((sec) => {
    if (activeTag === 'all') return true;
    return sec.id === activeTag;
  });

  return (
    <div className="space-y-4 pt-1">
      {/* Cards Grid */}
      <div
        className={`grid gap-4 sm:gap-5 ${
          visibleSections.length === 1
            ? 'grid-cols-1 max-w-md mx-auto w-full'
            : 'grid-cols-1 md:grid-cols-3'
        }`}
      >
        {visibleSections.map((sec) => (
          <div
            key={sec.id}
            className="flex flex-col bg-white rounded-2xl border border-[#CADAE8] shadow-[0_2px_12px_rgba(30,60,90,0.03)] overflow-hidden"
          >
            {/* Header pill matching reference image: dark navy background with / 標題 / */}
            <div className="bg-[#182837] text-white py-2.5 px-4 text-center font-bold font-serif-tc tracking-widest text-sm sm:text-base border-b border-[#182837]">
              /&nbsp;&nbsp;{sec.title}&nbsp;&nbsp;/
            </div>

            {/* List items with exact price alignment */}
            <div className="p-4 sm:p-5 flex-1 space-y-1.5 bg-[#F4F8FB]/50">
              {sec.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-sm sm:text-base py-1.5 px-1 border-b border-dashed border-[#CADAE8]/80 last:border-b-0"
                >
                  <span className="font-serif-tc font-bold text-[#152433] tracking-wide">
                    {item.name}
                  </span>
                  <span className="font-bold text-[#152433] tracking-tight tabular-nums">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 最底下深藍色框與白色框 */}
      <div className="space-y-2 pt-1 max-w-3xl mx-auto w-full">
        {/* 深藍色框 */}
        <div className="bg-[#182837] text-white py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold shadow-xs tracking-wide">
          上半身、下半身、私密部位 +$300可升級成日式光學
        </div>

        {/* 白色框 */}
        <div className="bg-white text-[#152433] border border-[#CADAE8] py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold shadow-xs tracking-wide">
          加購優惠👉私密光能美白，一個部位 +$200
        </div>
      </div>
    </div>
  );
};
