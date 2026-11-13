export interface SkinConcern {
  title: string;
  description: string;
}

export interface ComparisonItem {
  dimension: string;
  general: string;
  qfacial: string;
}

export interface VacuumStep {
  step: string;
  title: string;
  description: string;
}

export interface SolutionFormula {
  code: string;
  name: string;
  formulaType: string;
  suitableSkin: string[];
  color: string;
}

export interface RoutineStep {
  step: string;
  title: string;
  subTitle: string;
  solution: string;
  benefits: string[];
}

export const SKIN_CONCERNS: SkinConcern[] = [
  {
    title: '容易出油',
    description: 'T字部位油光明顯，午後皮脂分泌旺盛。',
  },
  {
    title: '毛孔髒污',
    description: '深層皮脂、灰塵與老廢角質堆積難以排出。',
  },
  {
    title: '粉刺困擾',
    description: '閉鎖性粉刺、黑頭白頭容易堵塞發炎。',
  },
  {
    title: '妝感不服貼',
    description: '皮膚顆粒感明顯，上粉底容易浮粉卡粉。',
  },
  {
    title: '暗沉無光',
    description: '暗沉斑點、膚色不均勻，臉部缺乏光澤。',
  },
  {
    title: '乾燥缺水',
    description: '洗完臉有緊繃乾澀感，甚至脫屑產生細紋。',
  },
];

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    dimension: '設備系統',
    general: '基礎真空吸力（僅進行皮膚表層基本清潔）',
    qfacial: '專利真空渦旋技術（溫和深入毛孔，減少拉扯不傷肌）',
  },
  {
    dimension: '精華溶劑',
    general: '常規基礎溶劑（僅具備基礎清潔功能）',
    qfacial: '三道原廠精華溶液（客製化清潔、調理與深度修護）',
  },
  {
    dimension: '清潔效果',
    general: '表面髒污清除（被動減少油脂與淺層粉刺）',
    qfacial: '深層淨化 × 徹底吸附（軟化頑固角質帶走髒污，注入深度滋養）',
  },
  {
    dimension: '肌膚感受',
    general: '易有拉扯泛紅感（部分敏感肌膚術後易暫時泛紅）',
    qfacial: '溫和舒適 × 穩定膚況（過程舒適，做完立刻透亮水潤）',
  },
  {
    dimension: '安全認證',
    general: '溶劑來源不一（品質與安全性依品牌而異）',
    qfacial: '原廠精華（衛福部嚴格醫材認證，安心有保障）',
  },
];

export const VACUUM_STEPS: VacuumStep[] = [
  {
    step: 'STEP 01',
    title: '順時針渦旋噴射',
    description: '原廠精華溶液從微細噴嘴內部高速噴射，形成微細水渦流軟化角質。',
  },
  {
    step: 'STEP 02',
    title: '負壓深層吸附排除',
    description: '專利負壓將皮脂、黑頭及老廢角質等雜質與殘留溶劑排入廢水桶。',
  },
  {
    step: 'STEP 03',
    title: '精華原液注氧導入',
    description: '溶液再度通過噴嘴均勻到達皮膚表面，達到深層補水、鎮靜舒緩。',
  },
];

export const SOLUTION_FORMULAS: SolutionFormula[] = [
  {
    code: 'AH',
    name: 'Formula-A',
    formulaType: '水溶性去角質溶液',
    suitableSkin: ['中性肌膚', '乾性肌膚', '敏感肌膚'],
    color: 'border-amber-300 bg-amber-50 text-amber-900',
  },
  {
    code: 'BHA',
    name: 'Formula-B',
    formulaType: '油溶性毛孔清潔液',
    suitableSkin: ['油性肌膚', '問題肌膚', '痘痘粉刺肌'],
    color: 'border-sky-300 bg-sky-50 text-sky-900',
  },
  {
    code: 'TON',
    name: 'Formula-C',
    formulaType: '滋養保濕舒緩精華',
    suitableSkin: ['油性肌膚', '敏感肌膚', '全膚質修護'],
    color: 'border-rose-300 bg-rose-50 text-rose-900',
  },
];

export const ROUTINE_STEPS: RoutineStep[] = [
  {
    step: '01',
    title: '清潔 + 去角質',
    subTitle: '溫和軟化及清潔肌膚老廢角質',
    solution: 'AHA 乳酸精華溶液',
    benefits: ['軟化老廢角質', '溫和代謝角質層'],
  },
  {
    step: '02',
    title: '吸取 + 保濕',
    subTitle: '深入毛孔調理、控油拔除粉刺',
    solution: 'BHA 水楊酸精華溶液',
    benefits: ['溶解多餘油脂', '深層清潔粉刺髒污'],
  },
  {
    step: '03',
    title: '注入 + 防護',
    subTitle: '營養微導入、補水深度舒緩',
    solution: 'TON 舒緩修護精華溶液',
    benefits: ['保濕深層舒緩', '抗氧收斂穩定膚況'],
  },
  {
    step: '04',
    title: '集中加強',
    subTitle: '安瓶管理、尊榮客製化專屬護理',
    solution: '高效安瓶保養系列',
    benefits: ['鎮靜抗痘控油', '美白緊緻彈潤'],
  },
];
