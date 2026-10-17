import { Treatment, AddonItem, StudioBranch } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_spa_banner_1792041906876.jpg';
export const FACIAL_TREATMENT_IMAGE = '/src/assets/images/facial_treatment_1792041934924.jpg';

export const STUDIO_INFO: StudioBranch = {
  id: 'zhongshan-songjiang',
  name: '本顏室 · Skincare & Waxing & Body SPA',
  badge: '全預約制 · 獨立隱私包廂',
  address: '104 臺北市中山區松江路 297 巷 1 號 2 樓',
  metro: '捷運行天宮 3 號出口（步行約 2 分鐘）',
  phone: '0962015282',
  hours: '週一至週日 11:00 - 22:00（有特殊時段需求都可以討論預約）',
  googleMapUrl: 'https://maps.google.com/?q=台北市中山區松江路297巷1號2樓',
  instagramUrl: 'https://www.instagram.com/healglow_space/',
};

export const BRANCHES: StudioBranch[] = [STUDIO_INFO];

export const TREATMENTS: Treatment[] = [
  // 1. 專業皮膚護理 (Skincare)
  {
    id: 'deep-pore-cleansing',
    category: 'skincare',
    subCategory: '深層調理',
    title: '水光深層毛孔清潔護理',
    tagline: '無痛手工細緻清粉刺 · 淨化黑頭與老化角質',
    features: [
      '專業手工無痛深層清潔粉刺',
      '植萃溫和調理軟化老廢角質',
      '超低溫洋甘菊冰封收斂毛孔'
    ],
    durationMinutes: 75,
    price: 1680,
    originalPrice: 2200,
    badge: '經典首選',
    tagColor: 'text-teal-800 bg-teal-50 border-teal-200/70',
    description: '專為出油旺盛、黑頭白頭堆積、毛孔粗大困擾設計。以溫和軟化精華調理角質，配合專業細緻手工無痛引流代謝深層髒污，清潔後進行超低溫冰封收縮毛孔，讓肌膚重現細緻光滑。',
    steps: [
      '植萃親膚深層卸妝與潔顏淨化',
      '草本角質溫和軟化與放鬆熱敷',
      '專業細緻手工無痛深層清粉刺',
      '鎮定舒緩修護精華微導入',
      '超低溫洋甘菊冰封收縮毛孔',
      '海藻水凝軟膜深層注水鎖水'
    ],
    suitableFor: ['出油旺盛、毛孔粗大者', '草莓鼻、黑頭白頭粉刺頑固者', '日常保養品不易吸收者'],
    homecareTips: ['施作當晚請以常溫水洗臉', '一週內加強保濕，避免高濃度酸類或去角質', '外出請做好基礎物理防曬'],
    image: FACIAL_TREATMENT_IMAGE,
  },
  {
    id: 'aurora-hydra-repair',
    category: 'skincare',
    subCategory: '水光保濕',
    title: '極光 · 水光修護煥顏護理',
    tagline: '活胜肽微分子精華 · 五重玻尿酸深層注水',
    features: [
      '多重活胜肽高滲透深層導入',
      '五重玻尿酸專利立體抓水鎖水',
      '修護屏障重現原生透亮光澤'
    ],
    durationMinutes: 90,
    price: 2280,
    originalPrice: 3000,
    badge: '水光熱推 HOT',
    tagColor: 'text-sky-800 bg-sky-50 border-sky-200/70',
    description: '針對暗沉乾燥、疲態缺水、缺乏彈性的疲倦肌膚。以多重活性胜肽與微分子玻尿酸，透過深層微導入直達肌底，強化角質抓水力，打造水潤飽滿的原生光感。',
    steps: [
      '胺基酸溫和潔顏與表皮調理',
      '五重微分子玻尿酸立體注水',
      '活胜肽精華深層超聲波導入',
      '極光微低溫冰封鎖定水分子',
      '水光透亮生物纖維極致面膜',
      '滋養保濕修護霜封存原生光采'
    ],
    suitableFor: ['換季乾荒、脫屑上妝不服貼者', '長期熬夜、膚色蠟黃暗沉者', '重要約會或活動前急救補水'],
    homecareTips: ['施作後 3 天內加強溫和保濕面膜', '多飲用溫水促進身體循環代謝', '維持規律作息效果更持久'],
    image: HERO_IMAGE,
  },
  {
    id: 'centella-calming-repair',
    category: 'skincare',
    subCategory: '舒緩抗敏',
    title: '積雪草植萃鎮定修護護理',
    tagline: '退紅舒敏強化屏障 · 敏弱泛紅肌膚專屬調配',
    features: [
      '高純度積雪草植萃深層修護',
      '快速退紅舒緩換季乾癢泛紅',
      '修補脆弱皮脂膜提升防禦力'
    ],
    durationMinutes: 60,
    price: 1580,
    originalPrice: 2000,
    badge: '敏弱肌友善',
    tagColor: 'text-amber-800 bg-amber-50 border-amber-200/70',
    description: '無添加化學酸類、無酒精、無刺激性香精，專為敏弱肌、易泛紅或雷射醫美後保養設計。利用積雪草與神經醯胺修護脆弱皮脂膜，迅速安撫躁動不適。',
    steps: [
      '零負擔純水感溫和潔膚乳',
      '積雪草純露冷噴舒緩鎮定',
      '神經醯胺微脂囊修護導入',
      '洋甘菊冰封水導膜深層退紅',
      '低敏舒緩多肽修護乳霜鎖水'
    ],
    suitableFor: ['換季易泛紅、乾癢刺痛敏弱肌', '雷射或醫美療程後黃金修護期', '長期戴口罩造成摩擦受損者'],
    homecareTips: ['避免使用過熱的水清洗面部', '暫停使用磨砂膏或高濃度A醇', '使用成分單純溫和的保濕乳霜'],
  },
  {
    id: 'signature-v-contour',
    category: 'skincare',
    subCategory: '緊緻拉提',
    title: '極致V臉緊緻筋膜提拉護理',
    tagline: '法式面部筋膜提拉 · 撫平細紋緊實下顎線條',
    features: [
      '法式深層筋膜舒緩提拉手法',
      '活化微循環迅速消退面部水腫',
      '重塑清晰下顎線緊緻澎潤'
    ],
    durationMinutes: 80,
    price: 2380,
    originalPrice: 3200,
    badge: '輪廓塑型',
    tagColor: 'text-purple-800 bg-purple-50 border-purple-200/70',
    description: '結合東方經絡與法式筋膜提拉手法，放鬆緊繃咀嚼肌與筋膜層，加速水分循環代謝，重塑立體輪廓線條，呈現緊實飽滿的原生光采。',
    steps: [
      '深層活氧潔面與筋膜醒膚熱敷',
      '面部淋巴排引與鎖骨引流放鬆',
      '天然白玉石深層筋膜提拉雕塑',
      '微電流緊膚儀加強輪廓定位',
      '膠原蛋白緊膚彈潤定型面膜',
      '頭頸部深層放鬆與保養品封存'
    ],
    suitableFor: ['面部線條鬆弛、輪廓線不明顯者', '晨起容易水腫、雙下巴困擾者', '希望面部更緊緻澎潤有精神者'],
    homecareTips: ['施作後可輕柔按壓耳後淋巴穴位', '早晨可用微涼水洗臉維持緊緻感', '睡前兩小時減少大量飲水防止水腫'],
  },

  // 2. 乾淨除毛 (Waxing)
  {
    id: 'brazilian-waxing',
    category: 'waxing',
    subCategory: '深層調理',
    title: '巴西全除專業熱蠟護理',
    tagline: '義大利天然植萃熱蠟 · 私密極淨乾爽舒適',
    features: [
      '義大利頂級天然植萃溫熱蠟',
      '專業手法低痛感深層毛囊除毛',
      '長效維持潔淨乾爽無異味'
    ],
    durationMinutes: 60,
    price: 1980,
    originalPrice: 2600,
    badge: '極淨推薦',
    tagColor: 'text-teal-800 bg-teal-50 border-teal-200/70',
    description: '全館獨立隱私包廂施作。嚴選義大利天然植萃溫熱蠟，專為嬌嫩私密肌膚調配，毛髮生長週期大幅延緩，告別生理期悶熱不適與摩擦困擾。',
    steps: [
      '私密肌膚清潔與天然消毒調理',
      '塗抹植萃蠟前修護保護油',
      '分區溫熱低痛感細緻熱蠟除毛',
      '手工夾除細小雜毛精密修整',
      '鎮定舒緩金縷梅冷敷修護凝膠',
      '生長延緩保濕精華乳塗抹'
    ],
    suitableFor: ['生理期易悶熱不適有異味困擾者', '喜愛穿著泳裝、比基尼與運動服者', '追求日常清爽潔淨生活品質者'],
    homecareTips: ['施作後 3 天內避免泡澡、三溫暖或劇烈流汗', '除毛後一週開始定期進行私密溫和去角質', '穿著寬鬆透氣純棉內褲'],
  },
  {
    id: 'underarm-waxing',
    category: 'waxing',
    subCategory: '深層調理',
    title: '腋下清新淨白熱蠟除毛',
    tagline: '毛根連根溫和拔除 · 告別黑頭小黑點與暗沉',
    features: [
      '溫和連根拔除粗硬雜亂毛髮',
      '減少刮刀刮傷引發之色素沉著',
      '長效清爽乾淨自信無負擔'
    ],
    durationMinutes: 30,
    price: 680,
    originalPrice: 1000,
    badge: '高CP值',
    tagColor: 'text-teal-800 bg-teal-50 border-teal-200/70',
    description: '告別天天用刮刀造成的小黑頭與粗糙暗沉。使用親膚性極佳的溫熱蠟，完整清除毛囊粗硬毛髮，術後配合美白保濕導入，腋下潔淨亮白。',
    steps: [
      '肌膚表層潔淨與油脂淨化',
      '植萃蠟前隔離保護精油',
      '順向細緻熱蠟除毛拔除根部',
      '精細手工清理微小殘留毛髮',
      '傳明酸美白舒緩凝膠鎮定',
      '抑毛保濕修護霜封存'
    ],
    suitableFor: ['習慣刮除毛髮導致毛囊粗大發黑者', '喜愛無袖上衣、背心與洋裝者', '希望腋下清爽乾淨無異味者'],
    homecareTips: ['除毛當日避免噴灑含酒精止汗劑', '3 天內避免穿著過緊摩擦之衣物', '一週後適度去角質防止內生毛'],
  },
  {
    id: 'calves-waxing',
    category: 'waxing',
    subCategory: '水光保濕',
    title: '小腿絲滑柔嫩熱蠟除毛',
    tagline: '大面積溫和除毛 · 雙腿肌膚觸感柔嫩細緻',
    features: [
      '大面積溫和順向熱蠟除毛',
      '代謝表皮老廢角質兼具嫩膚',
      '術後深層保濕精華封存'
    ],
    durationMinutes: 45,
    price: 1280,
    originalPrice: 1800,
    badge: '絲滑美腿',
    tagColor: 'text-sky-800 bg-sky-50 border-sky-200/70',
    description: '針對小腿粗硬毛髮或經常刮腿毛引發的粗糙顆粒感。採用天然植萃熱蠟快速大面積清除，同時帶走腿部老廢角質，雙腿立即重現絲滑白皙觸感。',
    steps: [
      '小腿表面潔顏淨化與溫敷',
      '蠟前隔離親膚滋養精油',
      '大面積順向溫熱蠟脫毛處理',
      '細節手工夾除微小絨毛',
      '低敏舒緩蘆薈保濕凍膜敷貼',
      '深層絲滑潤膚乳全身封存'
    ],
    suitableFor: ['常穿短裙短褲追求細嫩腿部肌膚者', '刮腿毛常造成毛囊角化粗糙者', '追求觸感光滑細緻者'],
    homecareTips: ['除毛後一週定期去角質避免毛髮倒插', '洗澡後勤擦身體乳液維持保濕', '外出請注意腿部基礎防曬'],
  },
  {
    id: 'face-waxing',
    category: 'waxing',
    subCategory: '緊緻拉提',
    title: '全臉絲滑光澤熱蠟除毛',
    tagline: '代謝細毛汗毛與唇周雜毛 · 上妝極致服貼不卡粉',
    features: [
      '溫和清除全臉絨毛與唇周鬍渣',
      '代謝表層老化粗糙老舊角質',
      '底妝輕透服貼呈現原生光澤'
    ],
    durationMinutes: 45,
    price: 1180,
    originalPrice: 1600,
    badge: '底妝救星',
    tagColor: 'text-purple-800 bg-purple-50 border-purple-200/70',
    description: '全臉細小汗毛常常導致粉底不服貼或暗沉發灰。美容師以低溫專用臉部熱蠟細緻代謝絨毛與老廢角質，術後立即導入積雪草保濕修護，肌膚細緻發光。',
    steps: [
      '溫和胺基酸深層卸妝洗臉',
      '臉部專用親膚蠟前防護液',
      '額頭、臉頰、唇周分區低溫除毛',
      '細緻手工修飾微小絨毛',
      '洋甘菊冰封水導膜深層降紅',
      '積雪草屏障修護乳塗抹'
    ],
    suitableFor: ['臉部細毛汗毛明顯、唇周暗沉者', '上粉底容易浮粉不貼妝卡粉者', '希望面部素顏時更透亮光滑者'],
    homecareTips: ['施作後 48 小時內避免高溫熱水洗臉', '一週內加強保濕，避免酸類去角質', '出門務必塗抹溫和無香精防曬乳'],
  },

  // 3. 舒壓按摩 (Massage)
  {
    id: 'fullbody-oil-massage',
    category: 'massage',
    subCategory: '舒緩抗敏',
    title: '植萃精油全身深層釋壓 SPA',
    tagline: '芳療級草本精油 · 全身經絡深層鬆解身心壓力',
    features: [
      '歐盟進口芳療級草本複方精油',
      '全背肩頸腿部深層經絡滑壓指壓',
      '釋放深層疲憊累積恢復輕盈活力'
    ],
    durationMinutes: 90,
    price: 2200,
    originalPrice: 2800,
    badge: '釋壓必選',
    tagColor: 'text-amber-800 bg-amber-50 border-amber-200/70',
    description: '在獨立隱私包廂的靜謐氛圍中，專業芳療師以溫熱草本精油搭配深層經絡滑壓、揉捏與伸展，逐一鬆解全身筋膜的長期緊繃，讓身心靈回歸完全放鬆的寧靜狀態。',
    steps: [
      '嗅吸客製高山薰衣草與甜橙精油',
      '全背溫熱乾壓鬆筋深層引導',
      '肩頸、斜方肌與背部深層精油揉捏',
      '大腿小腿深層淋巴循環滑壓',
      '腰部及臀部肌肉緊繃釋放',
      '頭部與前胸鎖骨順氣放鬆收尾'
    ],
    suitableFor: ['長期高壓忙碌、身心緊繃疲累者', '全身肌肉緊繃、睡眠品質不佳者', '希望享受 90 分鐘專屬私人沉浸時光者'],
    homecareTips: ['施作當晚建議早睡，維持身體循環代謝', '多飲用溫水促進身體代謝循環', '施作當天避免吹冷風或沖冷水澡'],
  },
  {
    id: 'deep-shoulder-neck-relief',
    category: 'massage',
    subCategory: '深層調理',
    title: '芳香深層肩頸背部放鬆調理',
    tagline: '溫感精油深入肌肉 · 鬆解斜方肌與背部僵硬',
    features: [
      '溫熱精油深層滲透肌肉筋膜',
      '深層釋放斜方肌與膏肓穴酸脹',
      '恢復身心輕盈暢快深呼吸'
    ],
    durationMinutes: 50,
    price: 1180,
    originalPrice: 1600,
    badge: '上班族救星',
    tagColor: 'text-teal-800 bg-teal-50 border-teal-200/70',
    description: '專為長期低頭滑手機、久坐電腦前的上班族設計。以溫熱天然植物精油搭配精準穴位揉捏與按壓，徹底鬆開肩頸肌肉的硬塊打結，迅速卸下累積的疲倦重擔。',
    steps: [
      '背部溫熱鬆筋深層引導開穴',
      '迷迭香與尤加利溫熱精油塗抹',
      '大椎穴、風池穴與肩胛骨周圍深度鬆解',
      '斜方肌精準指壓與深層滑撫',
      '手臂伸展與肩頸熱敷放鬆'
    ],
    suitableFor: ['久坐辦公室、肩膀長期僵硬酸脹者', '經常低頭看手機、頸椎緊繃不適者', '午休或下班後希望迅速釋壓者'],
    homecareTips: ['當晚避免直接吹對流冷氣或電風扇', '平時每隔 50 分鐘適度起身伸展頸部', '維持良好坐姿與電腦螢幕視線高度'],
  },
  {
    id: 'botanical-head-spa',
    category: 'massage',
    subCategory: '舒緩抗敏',
    title: '植萃精油頭部舒壓放鬆 SPA',
    tagline: '頭部十二經絡穴位指壓 · 釋放眼壓與緊繃偏頭痛',
    features: [
      '瑞士進口草本複方精油深層滲透',
      '百會穴、風池穴等經絡精準開穴',
      '大幅改善睡眠障礙、眼周疲憊與頭脹'
    ],
    durationMinutes: 45,
    price: 980,
    originalPrice: 1300,
    badge: '好眠舒壓',
    tagColor: 'text-amber-800 bg-amber-50 border-amber-200/70',
    description: '現代人長時間使用螢幕造成眼壓過高、思緒緊繃甚至失眠。芳療師以客製草本精油配合檀木經絡梳與穴位指腹深層按壓，瞬間撫平緊繃神經，恢復清爽輕盈。',
    steps: [
      '嗅吸舒壓甜橙與高山薰衣草精油',
      '百會穴、太陽穴、風池穴開穴指壓',
      '溫熱精油頭皮深層指腹揉捏放鬆',
      '天然檀木經絡梳深層梳理微循環',
      '眼周草本舒壓熱敷閉目靜心'
    ],
    suitableFor: ['長時間專注螢幕、用眼過度眼脹者', '睡眠品質差、容易醒來或難以入睡者', '思緒繁雜、壓力型偏頭痛緊繃者'],
    homecareTips: ['施作當晚避免飲用咖啡或濃茶', '睡前可進行 5 分鐘腹式深呼吸', '當晚建議提早就寢促進身體自然修復'],
  }
];

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
    answer: '為了維護每位客人的隱私與完整預約時段，若需更改或取消，請於預約時間前 24 小時透過官方 IG ( @healglow_space ) 或致電 0962015282 告知我們，我們將由專人為您重新安排最佳時段。'
  }
];

// Image 2: SKIN HOMECARE PRODUCTS
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

// Image 3: RESERVATION POLICY 工作室採全預約制
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

// 保養小撇步✨
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

