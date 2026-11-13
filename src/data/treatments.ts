import { Treatment, AddonItem, StudioBranch } from '../types';

export const HERO_IMAGE = '/assets/aistudio/image_da5865cc.png';
export const FACIAL_TREATMENT_IMAGE = '/src/assets/images/facial_treatment_1792041934924.jpg';

export const STUDIO_INFO: StudioBranch = {
  id: 'zhongshan-songjiang',
  name: '本顏室 · Skincare & Waxing & Body SPA',
  badge: '全預約制 · 獨立隱私包廂',
  address: '104 臺北市中山區松江路 297 巷 1 號 2 樓',
  metro: '捷運行天宮 3 號出口（步行約 2 分鐘）',
  hours: '週一至週日 11:00 - 22:00（有特殊時段需求都可以討論預約）',
  googleMapUrl: 'https://maps.google.com/?q=台北市中山區松江路297巷1號2樓',
  instagramUrl: 'https://www.instagram.com/healglow_space/',
  lineUrl: 'https://line.me/R/ti/p/@healglow_space',
};

export const BRANCHES: StudioBranch[] = [STUDIO_INFO];

// 每個標籤的專屬色彩對應表（確保全站相同名稱標籤具有絕對一致的顏色）
export const TAG_COLORS: Record<string, string> = {
  '深層修護': 'text-emerald-800 bg-emerald-50 border-emerald-300',
  '高CP✨': 'text-amber-800 bg-amber-50 border-amber-300',
  '美白緊緻': 'text-rose-800 bg-rose-50 border-rose-300',
  '細緻拋光': 'text-orange-800 bg-orange-50 border-orange-300',
  '無痛換膚&營養注入': 'text-cyan-800 bg-cyan-50 border-cyan-300',
  '=100片面膜': 'text-blue-800 bg-blue-50 border-blue-300',
  '全效煥膚': 'text-purple-800 bg-purple-50 border-purple-300',
  '水潤透亮': 'text-sky-800 bg-sky-50 border-sky-300',
  '活絡機能': 'text-purple-800 bg-purple-50 border-purple-300',
  '上半身': 'text-blue-800 bg-blue-50 border-blue-300',
  '下半身': 'text-teal-800 bg-teal-50 border-teal-300',
  '私密部位': 'text-indigo-800 bg-indigo-50 border-indigo-300',
};

export const getTagColor = (tag: string): string => {
  return TAG_COLORS[tag] || 'text-[#334E68] bg-slate-50 border-slate-200';
};

// 完整價目表與活動分類項目（精確對應隨附圖：皮膚管理、除毛、SPA按摩、限定活動專案）
export const TREATMENTS: Treatment[] = [
  // ==========================================
  // 1. 皮膚管理 (Skincare) - 隨附圖【皮膚管理價目表】
  // 全課程皆含低痛感手工粉刺清潔；標題下方無小字
  // ==========================================
  {
    id: 'basic-botanical-hydra',
    category: 'skincare',
    subCategory: '深層修護',
    tags: ['深層修護'],
    title: '本顏 · 基礎植萃保濕',
    tagline: '',
    features: [
      '低痛感細膩手工粉刺清潔（不趕時間，一次乾淨）',
      '植萃草本溫和軟化代謝角質',
      '深層活水導入，瞬效提升水潤好氣色'
    ],
    durationMinutes: 90,
    price: 1800,
    originalPrice: 2200,
    badge: '提升好氣色',
    tagColor: TAG_COLORS['深層修護'],
    description: '全課程皆含低痛感手工粉刺清潔。以植萃舒緩配方溫和軟化角質，細膩清潔毛孔髒污與黑白頭，深層補水注養，令肌膚重現水嫩清透光彩。',
    steps: [
      '胺基酸溫和潔顏淨化',
      '草本角質溫和軟化熱敷',
      '專業手工無痛粉刺深層清除',
      '植萃保濕精華微超聲波導入',
      '極致水光鎮定保濕凍膜',
      '修護乳霜封存水分子'
    ],
    suitableFor: ['暗沉缺水、氣色不佳者', '毛孔輕微堵塞、初次體驗做臉者', '日常保養吸收不佳者'],
    homecareTips: ['施作當晚以常溫水潔面', '一週內多敷保濕面膜，避免去角質', '做好日間基礎防曬'],
    image: FACIAL_TREATMENT_IMAGE,
  },
  {
    id: 'custom-crystal-skin',
    category: 'skincare',
    subCategory: '深層修護',
    tags: ['深層修護', '高CP✨', '美白緊緻'],
    title: '本顏 · 淨透肌客製管理',
    tagline: '',
    features: [
      '高CP值全方位客製化調理（含高效安瓶）',
      '低痛感手工深層排空頑固粉刺與黑頭',
      '依膚況客製控油美白/彈潤抗老/PDRN水光安瓶'
    ],
    durationMinutes: 120,
    price: 3500,
    originalPrice: 4200,
    badge: 'CP值最高★',
    tagColor: TAG_COLORS['深層修護'],
    description: '全店CP值最高的人氣療程！內含高效安瓶，由美容師針對當前膚況客製調配，結合完整無痛粉刺清剿、深層肌底導入與多重修護，打造鏡面淨透肌。',
    steps: [
      '深層活氧潔顏與肌膚檢測',
      '溫感軟化與無痛手工粉刺徹底清除',
      '高規格高效安瓶深層高滲透導入',
      '光能美白修護藍/紅光照射',
      '低溫冰封收縮毛孔',
      '高活性水光軟膜深層封存'
    ],
    suitableFor: ['出油旺盛伴隨暗沉缺水者', '追求一步到位頂級全套保養者', '重要約會前夕急救煥顏'],
    homecareTips: ['施作後加強溫和補水保濕', '一週內避免刺激性酸類或烈日曝曬', '早晚配合專屬居家修護露'],
    image: HERO_IMAGE,
  },
  {
    id: 'q-facial-hydra',
    category: 'skincare',
    subCategory: '無痛換膚&營養注入',
    tags: ['高CP✨'],
    title: '「Q菲秀」韓式複合水飛梭',
    tagline: '',
    features: [
      '醫美原廠課程，皆含光能美白',
      '專利真空渦旋技術，溫和深入毛孔不傷肌',
      '三道原廠精華溶液 (AHA/BHA/TON) 客製清潔調理'
    ],
    durationMinutes: 100,
    price: 3200,
    originalPrice: 4000,
    badge: '醫美原廠',
    tagColor: TAG_COLORS['無痛換膚&營養注入'],
    description: '非一般市售入門水飛梭！本顏室採用原廠認證 Q菲秀複合式肌膚管理設備，以專利真空渦旋三步驟帶走角質皮脂髒污，並注入三道醫材級原廠精華與光能美白，溫和不拉扯，做完立刻透亮水潤。',
    steps: [
      'STEP 01: AHA水溶性乳酸精華軟化代謝老舊角質',
      'STEP 02: BHA水楊酸水解毛孔髒污與粉刺油脂',
      '手工細微修飾加強顽固黑頭粉刺',
      'STEP 03: TON舒緩修護精華深度保濕注入',
      '光能美白舒緩照射',
      '低溫鎮靜水潤定型面膜'
    ],
    suitableFor: ['油性、粉刺痘痘肌、毛孔粗大者', '敏感肌亦可無痛深層潔淨', '妝感浮粉不貼、暗沉無光者'],
    homecareTips: ['施作後當天避免高溫三溫暖', '加強日常玻尿酸保濕補水', '外出做好物理性抗UV防曬'],
    image: '/assets/aistudio/1_28af0695.jpg',
  },
  {
    id: 'seyo-air-mesotherapy',
    category: 'skincare',
    subCategory: '=100片面膜',
    tags: ['高CP✨', '美白緊緻'],
    title: 'SEYO 空氣水光訂製管理',
    tagline: '',
    features: [
      '醫美原廠課程，皆含光能美白',
      '德國原廠無創氣壓滲透技術，不破皮無修復期',
      '精華液分子直達真皮層，澎潤飽滿持久發光'
    ],
    durationMinutes: 90,
    price: 3600,
    originalPrice: 4500,
    badge: '醫美原廠',
    tagColor: TAG_COLORS['=100片面膜'],
    description: '高端儀器深層美學！以音速超音速氣壓噴射，將專利微胜肽水光精華無創滲透導入肌底，如同一次敷上100片高效面膜，迅速撫平細紋、深層澎潤，重塑透明感原生肌。',
    steps: [
      '溫和潔膚與手工粉刺細緻淨化',
      'SEYO 德國無創氣壓深層注氧喚膚',
      '專屬高濃度水光胜肽精華超音速導入',
      '醫美光能美白照射修護',
      '膠原蛋白極效修護冰封軟膜'
    ],
    suitableFor: ['肌膚極度乾燥缺水、細紋明顯者', '婚禮、舞台表演、重要活動前急救透亮', '害怕針劑侵入但渴望極致水光者'],
    homecareTips: ['施作後一週水分吸收極快，建議每日早晚保濕', '多喝溫開水維持肌膚高含水量', '外出務必塗抹防曬乳'],
    image: '/assets/aistudio/DM-final_b75ff188.jpg',
  },
  {
    id: 'liquid-picosecond',
    category: 'skincare',
    subCategory: '美白緊緻',
    tags: ['美白緊緻', '深層修護'],
    title: '液態皮秒煥膚管理',
    tagline: '',
    features: [
      '專利多元果酸與胜肽煥膚配方',
      '改善暗沉粗糙、斑點蠟黃與粗大毛孔',
      '預約即贈光能美白照射（提亮美白·減少出油）'
    ],
    durationMinutes: 80,
    price: 2500,
    originalPrice: 3200,
    badge: '預約贈美白光',
    tagColor: TAG_COLORS['美白緊緻'],
    description: '隨附圖人氣特惠項目！透過溫和配方深層代謝表皮色素與老化角質，結合低痛感手工粉刺清潔與光能美白，立即改善粗大毛孔、出油暗沉，讓肌膚光感升級。',
    steps: [
      '胺基酸親膚深層卸洗',
      '低痛感手工粉刺清潔淨化',
      '液態皮秒精華分層溫和刷膚',
      '中和舒緩冰晶冷敷鎮定',
      '光能美白照射修護',
      '神經醯胺修護乳封存'
    ],
    suitableFor: ['出油量大、容易暗沉長痘痘者', '膚色不均、有色沉痘印困擾者', '希望肌膚緊緻光滑細膩者'],
    homecareTips: ['施作後 7 天避免使用A醇或磨砂產品', '加強日常防曬與保濕補水', '洗臉水溫維持常溫，避免泡澡'],
    image: '/assets/aistudio/ig_line_aujust_25a44ce2.jpg',
  },
  {
    id: 'spicule-regeneration',
    category: 'skincare',
    subCategory: '深層修護',
    tags: ['深層修護'],
    title: '藻針重生肌管理',
    tagline: '',
    features: [
      '天然海洋微晶藻針深層喚醒肌膚代謝',
      '針對頑固粉刺、囊腫痘痘、凹凸粗糙毛孔',
      '全課程含手工粉刺深度排毒清除'
    ],
    durationMinutes: 100,
    price: 3000,
    originalPrice: 3800,
    badge: '粉刺痘痘肌必推 !!',
    tagColor: TAG_COLORS['深層修護'],
    description: '粉刺痘痘肌的救星！運用純天然淡水微晶矽藻，物理性深入毛孔基底加速老化角質自然剝落，促進健康肌膚再生，大幅改善閉鎖粉刺與痘痘發炎狀況。',
    steps: [
      '深層活氧洗顏潔膚',
      '專業手工排毒清痘清粉刺',
      '高純度微晶藻針深層按壓植入',
      '洋甘菊冰封水導膜深層降紅退熱',
      'EGF生長胜肽修護乳塗抹防護'
    ],
    suitableFor: ['頑固粉刺、反覆發作痘痘肌膚', '毛孔角化粗糙、色素沉澱凹疤者', '角質代謝停滯肥厚者'],
    homecareTips: ['施作後 24-48 小時內避免碰水洗臉', '皮膚微刺屬正常現象，多噴保濕純露', '一週內禁止去角質、三溫暖及劇烈運動'],
  },
  {
    id: 'face-contour-massage',
    category: 'skincare',
    subCategory: '深層修護',
    tags: ['深層修護', '美白緊緻'],
    title: '小臉提顏鬆筋',
    tagline: '',
    features: [
      '東方經絡撥筋手法深層放鬆咀嚼肌',
      '加速面部循環排水腫，清晰下顎輪廓線',
      '耗時約 40 分鐘，快速重現立體小V臉'
    ],
    durationMinutes: 50,
    price: 1500,
    originalPrice: 2000,
    badge: '約會秘密武器',
    tagColor: TAG_COLORS['深層修護'],
    description: '約會、面試或拍照前的秘密法寶！利用天然玉石撥筋工具深入面部肌肉筋膜，釋放長期疲累緊繃，疏通淋巴排水腫，瞬間拉提下垂線條，氣色容光煥發。',
    steps: [
      '臉部放鬆熱敷與精油喚膚',
      '面部經絡穴位重點鬆筋',
      '下顎線與咀嚼肌深層筋膜提拉',
      '頸部與鎖骨淋巴排導引流',
      '緊膚膠原定型水光敷膜'
    ],
    suitableFor: ['容易晨起臉部水腫、雙下巴者', '咀嚼肌緊繃、面部輪廓線鬆弛者', '重要拍照前希望臉型立體者'],
    homecareTips: ['施作後多喝溫水促進代謝排出水分', '早起可搭配向上滑按耳後淋巴', '避免熬夜與睡前攝取過多鹽分'],
  },
  {
    id: 'back-custom-care',
    category: 'skincare',
    subCategory: '深層修護',
    tags: ['深層修護'],
    title: '背部客製化管理',
    tagline: '',
    features: [
      '全背大面積手工無痛粉刺潔淨',
      '溫和去角質調理背部痘印暗沉',
      '冰封鎮定水凝膜深層收斂毛孔'
    ],
    durationMinutes: 80,
    price: 2800,
    originalPrice: 3500,
    badge: '還你美背',
    tagColor: TAG_COLORS['深層修護'],
    description: '夏天穿露背裝、比基尼必備！針對平時自己洗不到、容易堆積油脂角質的背部，進行全背深度清潔、粉刺排空、淡化痘印與冰敷收斂，重現光滑無瑕美背。',
    steps: [
      '背部深層去角質淨膚洗浴',
      '草本角質軟化與放鬆熱敷',
      '全背細緻手工無痛粉刺清剿',
      '茶樹植萃淨化精華深層導入',
      '全背冰封舒緩鎮定泥膜'
    ],
    suitableFor: ['背部容易出油、冒粉刺痘痘者', '背部色素沉澱、痘印斑駁者', '有露背穿搭或婚禮拍照需求者'],
    homecareTips: ['平時洗完頭髮請先沖淨背部護髮乳', '洗澡後穿著透氣純棉衣物', '定期使用溫和身體噴霧維持水油平衡'],
  },

  // ==========================================
  // 2. 乾淨除毛 (Waxing) - 隨附圖【熱蠟 & 日式光學除毛價目表】
  // 全課程皆含沐浴清潔 (限私密部位)、維他命E油修護
  // ==========================================
  {
    id: 'waxing-plan-a',
    category: 'waxing',
    subCategory: '私密部位',
    tags: ['私密部位', '上半身'],
    title: '🅐完美型男：VBO巴西式全除 + 腋下',
    tagline: '',
    features: [
      '天然溫熱蠟，低痛感乾淨俐落',
      '+$300 可升級日式光學'
    ],
    durationMinutes: 75,
    price: 2100,
    originalPrice: 2800,
    badge: '',
    tagColor: 'text-blue-800 bg-blue-50 border-blue-200/70',
    description: '店內除毛指名度第一名的超值套餐！包含VBO全除與雙側腋下除毛。全館獨立包廂施作，包含沐浴清潔與高規格維他命E油修護，清爽潔淨，告別悶熱異味。+$300 可升級成日式光學除毛。',
    steps: [
      '私密部位專屬淋浴潔淨',
      '植萃蠟前隔離保護修護油',
      '分區溫熱低痛感細緻熱蠟除毛',
      '細微雜毛手工精密夾除修飾',
      '維他命E油深層滋養與金縷梅冷敷'
    ],
    suitableFor: ['追求極致乾淨清爽生活型態者', '運動健身、流汗易有悶熱摩擦者', '初次嘗試全身除毛的高CP選擇'],
    homecareTips: ['術後 3 天避免三溫暖、泡澡及劇烈摩擦', '一週後開始定期進行溫和去角質', '穿著寬鬆透氣內著'],
  },
  {
    id: 'waxing-plan-b',
    category: 'waxing',
    subCategory: '私密部位',
    tags: ['私密部位', '上半身'],
    title: '🅑質感型男：泳褲修型 + 腋下',
    tagline: '',
    features: [
      '修除邊緣雜亂多餘毛髮',
      '+$300 可升級日式光學'
    ],
    durationMinutes: 60,
    price: 2000,
    originalPrice: 2600,
    badge: '',
    tagColor: 'text-indigo-800 bg-indigo-50 border-indigo-200/70',
    description: '專為注重體態修飾與運動穿著設計。專業美體師細膩修型，維持乾淨美觀輪廓，同時潔淨雙側腋下，包含沐浴清潔與維他命E油修護，自信無拘束。+$300 可升級成日式光學除毛。',
    steps: [
      '沐浴清潔與私密肌膚調和',
      '蠟前隔離親膚保護油塗抹',
      '精緻對稱泳褲線條熱蠟修除',
      '雙側腋下根部除毛',
      '鎮定舒緩與維他命E修護'
    ],
    suitableFor: ['喜愛游泳、海灘衝浪、水上運動者', '不想完全除光但希望外觀乾淨整齊者', '穿著低腰運動褲不露邊角雜毛'],
    homecareTips: ['除毛後避免穿著過緊三角褲', '加強日常保濕乳液塗抹', '避免摩擦與熱水刺激'],
  },
  {
    id: 'waxing-plan-c',
    category: 'waxing',
    subCategory: '上半身',
    tags: ['上半身'],
    title: '🅒清爽型男：全鬍（熱蠟 + 光學）',
    tagline: '',
    features: [
      '告別天天刮鬍青髭小黑點與發炎',
      '大幅延緩生長速度，輪廓線清爽年輕',
      '雙效合一，徹底潔淨'
    ],
    durationMinutes: 45,
    price: 2200,
    originalPrice: 2900,
    badge: '',
    tagColor: 'text-cyan-800 bg-cyan-50 border-cyan-200/70',
    description: '告別天天用刮鬍刀導致的毛囊發炎、粗糙青色鬍渣與暗沉！結合熱蠟連根淨除與日式光學雙效能量，讓面部下半部重現光滑透亮，視覺年齡立刻減齡。',
    steps: [
      '臉部深層潔顏與軟化鬍根',
      '臉部專用親膚蠟前隔離護理',
      '順向細緻熱蠟拔除粗硬鬍根',
      '日式光學淨白光波照射延緩毛髮',
      '蘆薈冰封水導膜深層降溫退紅'
    ],
    suitableFor: ['鬍鬚生長旺盛半天就冒黑渣者', '經常刮鬍引起毛囊紅腫倒插者', '追求乾淨俐落紳士面貌者'],
    homecareTips: ['當天避免熱水沖臉，避免使用含酒精刮鬍水', '一週內加強保濕，外出做好防曬', '生長出之細軟毛請勿自行用刮刀硬刮'],
  },

  // ==========================================
  // 3. 舒壓按摩 (Massage) - 隨附圖【SPA 按摩價目表】
  // (限男性) 全課程皆含沐浴清潔，純天然玫瑰精油 & 專業沙龍去角質粉
  // ==========================================
  {
    id: 'rose-hot-stone-spa',
    category: 'massage',
    subCategory: '深層修護',
    tags: ['深層修護'],
    title: '玫瑰精油熱石舒壓',
    tagline: '',
    features: [
      '精油採用純天然玫瑰精油，溫熱火山能量熱石深入肌肉',
      '60 分鐘 $1,200 ｜ 90 分鐘 $1,500'
    ],
    durationMinutes: 60,
    price: 1200,
    originalPrice: 1600,
    badge: '',
    tagColor: TAG_COLORS['深層修護'],
    description: '限男性專屬。全課程皆含獨立包廂沐浴清潔，嚴選純天然頂級玫瑰精油，搭配溫熱能量火山玄武石深層滑壓經絡，溫熱能量直達深層肌肉硬結，深層融化長期累積的壓力與疲倦。',
    steps: [
      '獨立包廂舒心淋浴沐浴洗淨',
      '全背玫瑰精油深層溫熱開穴',
      '能量火山玄武岩熱石深層滑推',
      '肩頸斜方肌與膏肓穴深層釋壓',
      '腿部經絡循環舒緩與熱敷'
    ],
    suitableFor: ['長期高壓疲勞、肩膀沈重僵硬者', '容易手腳冰冷、循環不佳者', '享受溫熱能量放鬆身心者'],
    homecareTips: ['施作當晚避免吹對流冷風', '多喝溫水幫助身體循環代謝', '當晚建議早早就寢休息'],
  },
  {
    id: 'rose-body-scrub',
    category: 'massage',
    subCategory: '細緻拋光',
    tags: ['細緻拋光'],
    title: '精油全身去角質',
    tagline: '',
    features: [
      '天然玫瑰精油 & 專業沙龍去角質粉',
      '拋光全身粗糙老廢角質，肌膚重回絲滑細緻',
      '打造清爽乾淨的紳士體態'
    ],
    durationMinutes: 45,
    price: 990,
    originalPrice: 1400,
    badge: '',
    tagColor: TAG_COLORS['細緻拋光'],
    description: '限男性專屬。採用頂級天然玫瑰精油與專業沙龍去角質粉，細緻研磨全身每一吋肌膚，溫和代謝背部、手肘、膝蓋等粗糙暗沉角質，讓全身重現乾淨透亮。',
    steps: [
      '沐浴潔膚與全身溫和暖膚',
      '玫瑰精油調和沙龍去角質微粉全身打圈代謝',
      '重點加強背部、手肘、膝蓋與足跟',
      '溫水淋浴沖淨老舊角質碎屑',
      '深層潤澤保濕乳液全身封存'
    ],
    suitableFor: ['全身角質厚重、觸感粗糙者', '背部暗沉痘印、手臂顆粒感者', '追求乾淨清爽紳士形象者'],
    homecareTips: ['去角質後一週勤擦保濕乳液', '避免使用過熱水溫沐浴', '白天外出時注意身體防曬'],
  },
  {
    id: 'root-vitality-spa',
    category: 'massage',
    subCategory: '活絡機能',
    tags: ['活絡機能'],
    title: '根源調理舒壓',
    tagline: '',
    features: [
      '專注男性生理核心循環',
      '深度活絡機能，喚醒根源張力',
      '60分 $1,800 ｜ 90分 $2,200 ｜ 120分 $2,800'
    ],
    durationMinutes: 60,
    price: 1800,
    originalPrice: 2400,
    badge: '',
    tagColor: TAG_COLORS['活絡機能'],
    description: '限男性專屬的高端養生療程。在完全私密的一人一室包廂中，透過純天然精油針對男性核心循環經絡進行深度按摩調理，促進深層血循暢通，重拾活力生機。',
    steps: [
      '獨立包廂放鬆沐浴潔淨',
      '腹股溝及下焦核心經絡溫熱引導',
      '天然純草本精油深層深層滑壓揉捏',
      '腰部及骨盆核心肌肉深層放鬆',
      '溫熱草本熱敷舒緩封存'
    ],
    suitableFor: ['久坐下半身循環不良、腰腹緊繃者', '疲憊無力、渴望重拾活力元氣者', '注重男性深層養生保養者'],
    homecareTips: ['施作後可飲用溫熱開水或養生茶', '避免當晚劇烈運動或熬夜', '維持規律作息'],
  },

  // ==========================================
  // 4. 限定活動專案 (Campaign) - 隨附圖【獨奏時分 × 肌本調律】與【限定優惠】
  // ==========================================
  {
    id: 'campaign-music-stage',
    category: 'campaign',
    subCategory: '全效煥膚',
    tags: ['全效煥膚', '美白緊緻'],
    title: '【我即舞台 · 極致透亮】',
    tagline: '',
    features: [
      'SEYO空氣水光／韓式水飛梭二擇一',
      '贈光能美白 + 小臉提顏撥筋 雙重禮遇'
    ],
    durationMinutes: 100,
    price: 2880,
    originalPrice: 3600,
    badge: '音樂人限定特惠',
    tagColor: TAG_COLORS['全效煥膚'],
    description: '隨附海報【獨奏時分 × 肌本調律】強檔主打！為肌膚注入純淨光采。SEYO空氣水光或韓式水飛梭二選一，加贈光能美白與小臉提顏撥筋，抹去暗沉浮腫，綻放專屬舞台光芒。',
    steps: [
      '溫和潔顏與肌膚評估',
      'SEYO 空氣水光 或 韓式水飛梭 二擇一施作',
      '手工深層粉刺排毒清除',
      '小臉提顏撥筋（消除水腫拉提輪廓）',
      '光能美白修護照射',
      '膠原深層鎖水定型面膜'
    ],
    suitableFor: ['音樂人、表演者、舞台工作者', '即將參與重要聚會活動需要極致發光者', '想一次體驗儀器與手技雙重極致者'],
    homecareTips: ['施作後一週加強保濕面膜', '外出做好完整防曬', '避免熬夜維持水光巔峰'],
    image: '/assets/aistudio/DM-final_b75ff188.jpg',
  },
  {
    id: 'campaign-future-star',
    category: 'campaign',
    subCategory: '水潤透亮',
    tags: ['水潤透亮', '高CP✨'],
    title: '【未來之星 · 水潤淨透】',
    tagline: '',
    features: [
      '本顏·基礎植萃保濕 + 光能美白 + 小臉提顏撥筋三合一',
      '出示憑學生證+IG限動標記即享優惠NT$1,999'
    ],
    durationMinutes: 90,
    price: 1999,
    originalPrice: 2800,
    badge: '學生專屬甜甜價',
    tagColor: TAG_COLORS['水潤透亮'],
    description: '出示學生證與 IG 限動標記，即可享受 $1,999 專屬甜甜價！包含完整本顏·基礎植萃保濕、光能美白修護與小臉提顏撥筋三合一。',
    steps: [
      '洗顏與手工粉刺細緻淨化',
      '植萃保濕精華深層導入',
      '小臉提顏鬆筋拉提面部水腫',
      '光能美白照射提亮肌膚色澤',
      '保濕水凝冰封鎮定敷膜'
    ],
    suitableFor: ['在學學生、剛畢業職場新鮮人', '常熬夜讀書、打報告肌膚暗沉蠟黃者', '小資預算想享受全套高端護理者'],
    homecareTips: ['當晚以常溫水潔面', '多喝溫水促進代謝', '定期防曬'],
    image: '/assets/aistudio/DM-final_b75ff188.jpg',
  },
  {
    id: 'campaign-liquid-pico',
    category: 'campaign',
    subCategory: '美白緊緻',
    tags: ['美白緊緻', '深層修護'],
    title: '【液態皮秒煥膚】',
    tagline: '',
    features: [
      '提亮美白 ｜ 細緻肌膚 ｜ 減少出油',
      '預約即贈光能美白照射（提亮美白·減少出油）',
      '溫和水解老舊角質，撫平顆粒粗糙感'
    ],
    durationMinutes: 80,
    price: 2500,
    originalPrice: 3200,
    badge: '八月限定',
    tagColor: TAG_COLORS['美白緊緻'],
    description: '隨附圖專案限定！只要預約液態皮秒課程，即免費加贈「光能美白」修護！溫和去除老舊角質與暗沉色素，讓毛孔細膩緊緻，上妝不浮粉。',
    steps: [
      '深層洗卸潔顏',
      '手工深層粉刺排空清理',
      '液態皮秒精華分層溫和刷顏',
      '中和舒緩冰晶冷敷鎮定',
      '光能美白照射（免費加贈）',
      '修護乳霜深層鎖水'
    ],
    suitableFor: ['出油量大、粗糙暗沉肌膚', '毛孔角化顆粒感明顯者', '想要快速美白提亮好氣色者'],
    homecareTips: ['一週內避免酸類及磨砂去角質', '注重日常保濕與純物理防曬', '使用常溫水洗臉'],
    image: '/assets/aistudio/ig_line_aujust_25a44ce2.jpg',
  }
];

// 價目表中的「細節加點」項目（精簡文字、區分基礎加點與高效安瓶系列）
export const BASE_DETAIL_ADDONS = [
  { id: 'face-scraping', title: '小臉鬆筋', duration: '40min', price: 999, desc: '筋膜深層放鬆，消除臉部浮腫' },
  { id: 'shoulder-relief', title: '頭肩舒壓', duration: '15min', price: 399, desc: '釋放肩頸斜方肌酸脹' },
  { id: 'photo-whitening', title: '光能美白', duration: '15min', price: 299, desc: '提亮膚色、平衡皮脂細緻毛孔' },
];

export const AMPOULE_DETAIL_ADDONS = [
  { id: 'ampoule-oil-control', title: '控油美白安瓶', duration: '超聲波導入', price: 599, desc: '調節皮脂分泌，淡化暗沉' },
  { id: 'ampoule-firming', title: '彈潤抗老安瓶', duration: '超聲波導入', price: 699, desc: '多胜肽精華，深層緊緻撫紋' },
  { id: 'ampoule-pdrn', title: 'PDRN 水光安瓶', duration: '超聲波導入', price: 999, desc: '三文魚修護精萃，強健屏障' }
];

export const DETAIL_ADDONS = [...BASE_DETAIL_ADDONS, ...AMPOULE_DETAIL_ADDONS];

export const ADDONS: AddonItem[] = [
  {
    id: 'eye-revitalize',
    title: '眼周舒緩明亮活化',
    tag: '眼周保養',
    description: '溫熱微震眼部循環按摩 + 活性胜肽緊緻眼膜，改善暗沉與細紋。',
    durationMinutes: 15,
    price: 399,
  },
  {
    id: 'microcurrent-firming',
    title: '微電流深層緊膚導入',
    tag: '導入升級',
    description: '深層微電流加強膠原蛋白活化，促進精華成分吸收力倍增。',
    durationMinutes: 15,
    price: 499,
  },
  {
    id: 'seaweed-hydra-mask',
    title: '深海巨藻極效水潤泥膜',
    tag: '頂級厚敷',
    description: '深海巨藻多醣體鎖住高倍水分，療程後肌膚水嫩飽滿透光。',
    durationMinutes: 15,
    price: 350,
  }
];

export const FAQS = [
  {
    question: '療程前需要先自行卸妝或洗臉嗎？',
    answer: '不需要喔！本顏室每個臉部護理療程均包含專業溫和的眼唇卸妝與深層潔顏步驟。您可以帶著平常出門的妝容直接前來，我們會為您溫柔清潔淨化。'
  },
  {
    question: '敏感肌、孕婦或酒糟肌可以進行護理嗎？',
    answer: '完全可以！我們特別研發「積雪草植萃鎮定修護」與無酸類舒緩配方，並全面使用天然認證原液。孕期顧客我們更提供專屬孕婦友善香氛與安心姿勢調整。'
  },
  {
    question: '做完清粉刺後會紅腫脫皮嗎？可以化妝嗎？',
    answer: '本顏室採用細緻專業手工無痛技巧，避免暴力撕扯肌膚，護理後均會使用超低溫洋甘菊冰封鎮定收斂，退紅極快。當日請以常溫水潔膚與加強保濕，隔日即可正常淡妝。'
  },
  {
    question: '熱蠟除毛會很痛嗎？需要預留多長的毛髮？',
    answer: '我們嚴選義大利頂級天然植萃溫熱蠟，抓毛力強且緊密貼合毛髮、不黏扯活皮，大幅降低痛感。建議施作前毛髮保留約 0.5 至 1 公分長度（約刮後 2~3 週），除毛效果最佳。'
  },
  {
    question: '工作室現場如何付款？是否支援行動支付？',
    answer: '工作室現場支援多元付款方式，包含現金、各大信用卡、Apple Pay、LINE Pay 及街口支付，結帳無額外手續費，安心便捷。'
  },
  {
    question: '預約後如果需要更改時間或取消該怎麼辦？',
    answer: '為了維護每位客人的隱私與完整預約時段，若需更改或取消，請於預約時間前 24 小時透過官方 IG ( @healglow_space ) 告知我們，我們將由專人為您重新安排最佳時段。'
  }
];

// SKIN HOMECARE PRODUCTS
export const HOMECARE_PRODUCTS = [
  {
    id: 'cica-b5-serum',
    name: '高濃度積雪草B5退紅急救修護露',
    capacity: '30ML',
    originalPrice: 980,
    price: 690,
    description: '瞬效鎮定泛紅敏感，清爽修護受損肌膚屏障',
  },
  {
    id: 'ceramide-bio-mask',
    name: '神經醯胺深層水光生物纖維面膜',
    capacity: '5入/盒',
    originalPrice: 600,
    price: 399,
    description: '術後專用零刺激配方，極致緊密貼合、長效封存水分',
  },
  {
    id: 'physical-sunscreen',
    name: '純物理透氧光感防曬乳 SPF50+',
    capacity: '50ML',
    originalPrice: 880,
    price: 590,
    description: '清透不泛白不致粉刺，術後脆弱肌的安心防護盾',
  },
];

// RESERVATION POLICY 工作室採全預約制
export const RESERVATION_POLICIES = [
  {
    title: '準時守則',
    content: '預約保留 10 分鐘，如遲到逾 15 分鐘將視情況縮短按摩步驟或改期，以維護下一位預約客人權益。',
  },
  {
    title: '醫美間隔',
    content: '近兩週內曾施打皮秒雷射、音波電波或注射針劑微整者，請提前告知美容師評估適合的課程。',
  },
  {
    title: '環境維護',
    content: '為維持靜謐身心放鬆氛圍，謝絕攜伴、男性陪同與寵物。',
  },
];

// 保養小步驟✨
export const SKINCARE_TIPS = [
  {
    title: '常溫清潔，避免摩擦',
    content: '施作後 48 小時內請以常溫水清潔臉部，切勿使用熱水沖臉，潔面後以毛巾輕壓吸乾水分，避免來回摩擦受損角質。',
  },
  {
    title: '術後黃金 7 天補水鎖水',
    content: '施作後一週為肌膚吸收修護黃金期，請加強敷積雪草純水感修護面膜，並擦上神經醯胺修護乳封存水分，暫停使用高濃度酸類或去角質。',
  },
  {
    title: '純物理防曬防護',
    content: '外出請務必塗抹溫和純物理性防曬（SPF50+），並搭配陽傘、遮陽帽防止強烈紫外線照射，降低色素沈著風險。',
  },
  {
    title: '多飲溫水與規律作息',
    content: '每日建議飲用 1,500 ~ 2,000c.c. 溫開水，幫助體內循環代謝，施作當晚早早就寢，給予肌膚充足自我修復的沉睡時光。',
  },
];
