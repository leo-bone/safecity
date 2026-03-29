// ============================================================
// SafeCity Global - 扩展城市数据库（欧洲）
// ============================================================

const CITY_DATABASE_EXTRA_EUROPE = {

  "london": {
    id: "london", name: "伦敦", nameEn: "London",
    country: "英国", countryEn: "United Kingdom",
    continent: "欧洲", lat: 51.5074, lng: -0.1278,
    flag: "🇬🇧",
    image: "https://picsum.photos/seed/london/800/400",
    overview: "伦敦是全球最多元化的城市之一，整体安全，但扒窃和摩托车抢劫近年明显上升，特别是在旅游区和地铁内。",
    safety: {
      overall: 72, grade: "B+",
      grades: {
        robbery: { score: 68, label: "抢劫", desc: "摩托车飞车抢夺手机现象严重，尤其在市中心，骑行者抢夺手机已成城市顽疾" },
        homicide: { score: 80, label: "凶杀", desc: "凶杀率低于欧洲平均，但刀刺伤事件时有发生，部分区域有帮派问题" },
        traffic: { score: 72, label: "交通", desc: "靠左行驶，过马路须先看右方，骑行文化发达，共享单车普及" },
        theft: { score: 65, label: "盗窃", desc: "扒窃是最大问题，地铁和市场是高发地，尤其是Piccadilly线和牛津街" },
        scam: { score: 75, label: "诈骗", desc: "CD碟推销和街头「游戏」是常见陷阱，主要针对游客" },
        drugs: { score: 70, label: "毒品", desc: "娱乐性毒品使用率较高，部分区域夜间有毒品交易" },
        natural: { score: 90, label: "自然灾害", desc: "无重大自然灾害风险，偶发洪水，冬季多雾" },
        political: { score: 82, label: "政治稳定", desc: "政治稳定，偶有抗议示威，极少演变成暴力" }
      },
      hotspots: [
        { area: "牛津街/皮卡迪利广场", risk: "高", desc: "扒窃高发区，人流密集，注意保管手机和钱包" },
        { area: "Brixton/Peckham", risk: "中高", desc: "夜间需谨慎，有帮派活动，白天较安全" },
        { area: "London Bridge区", risk: "中", desc: "2017年曾发生恐袭，现已加强安保" }
      ],
      safeAreas: ["Kensington和Chelsea", "Richmond", "Wimbledon", "Hampstead"],
      history: "罗马人建立的Londinium，曾是大英帝国心脏，现为欧洲最大城市和全球金融中心。",
      tips: [
        "过马路务必先看右方（靠左行驶国家）",
        "不要在街头展示高价手机，特别是拍照时",
        "地铁高峰期（8-9时和17-19时）注意看管随身物品",
        "夜间打车使用Uber或官方黑色出租车（黑色cab），避免白牌车"
      ]
    },
    emergency: {
      police: "999（紧急）/ 101（非紧急）", ambulance: "999", fire: "999",
      touristHotline: "+44-20-7001-5000",
      embassies: { "中国大使馆": "+44-20-7299-4049", "美国大使馆": "+44-20-7499-9000" },
      hospitals: [{ name: "圣托马斯医院", phone: "+44-20-7188-7188", address: "Westminster Bridge Road" }],
      apps: ["Citymapper（地铁导航）", "TfL Go（官方交通）", "Bolt/Uber（打车）"],
      selfDefense: ["保持对周围环境的警觉", "背包背在前面", "避免在地铁独自坐最末节车厢"]
    },
    lifestyle: {
      food: [
        { name: "Borough Market", type: "美食市场", price: "££", desc: "伦敦最著名的美食市场，来自全球的美食小摊，必试炸鱼薯条" },
        { name: "Dishoom（Covent Garden）", type: "印度菜", price: "££", desc: "排队也值得的孟买风格印度餐厅，黑豆咖喱是招牌" },
        { name: "Padella（Borough）", type: "意大利面", price: "£", desc: "现做意大利面，价格亲民，经常排队，蛋黄意面是经典" }
      ],
      attractions: [
        { name: "塔桥", type: "地标", desc: "免费欣赏外观，也可购票进入塔桥内部博物馆" },
        { name: "大英博物馆", type: "博物馆", desc: "免费入场，收藏全球文明遗珍，罗塞塔石碑在此" },
        { name: "Columbia Road花市", type: "市集", desc: "周日限定花卉市场，维多利亚式街道，拍照极美", hidden: true }
      ],
      festivals: [
        { name: "诺丁山嘉年华", date: "8月最后一个周末", desc: "欧洲最大街头嘉年华，加勒比风格，人山人海（注意扒窃）" },
        { name: "盖伊·福克斯之夜", date: "11月5日", desc: "全城烟火表演，Battersea Park的焰火最壮观" }
      ],
      customs: ["排队文化极为严格，插队是大忌", "在酒吧不需要小费，但餐厅一般给10-15%", "握手是标准问候方式"],
      transport: "牡蛎卡（Oyster Card）或感应式信用卡乘地铁/公交，比单次票便宜很多。英国铁路Railcard打折卡值得购买。"
    }
  },

  "berlin": {
    id: "berlin", name: "柏林", nameEn: "Berlin",
    country: "德国", countryEn: "Germany",
    continent: "欧洲", lat: 52.5200, lng: 13.4050,
    flag: "🇩🇪",
    image: "https://picsum.photos/seed/berlin/800/400",
    overview: "柏林是欧洲最自由开放的大城市，整体安全，夜生活世界著名，但扒窃和部分地区帮派活动需要注意。",
    safety: {
      overall: 73, grade: "B+",
      grades: {
        robbery: { score: 75, label: "抢劫", desc: "街头抢劫不常见，但夜间独行于偏僻街道需谨慎" },
        homicide: { score: 82, label: "凶杀", desc: "凶杀率低，偶发有组织犯罪相关事件" },
        traffic: { score: 78, label: "交通", desc: "自行车文化发达，骑行者众多，行人需注意自行车道" },
        theft: { score: 68, label: "盗窃", desc: "扒窃在U-Bahn（地铁）和观光景点较为普遍" },
        scam: { score: 80, label: "诈骗", desc: "假票贩和黑市换钱偶有出现，坚持正规渠道" },
        drugs: { score: 72, label: "毒品", desc: "2024年德国已将大麻部分合法化，但公共场所限制区域明确" },
        natural: { score: 90, label: "自然灾害", desc: "自然灾害风险极低，冬季有冰雪" },
        political: { score: 82, label: "政治稳定", desc: "政治稳定，抗议活动频繁但通常和平" }
      },
      hotspots: [
        { area: "Görlitzer Park", risk: "中高", desc: "毒品交易活跃，夜间尤其不建议独自前往" },
        { area: "Alexanderplatz", risk: "中", desc: "扒窃高发，是游客区同时也是犯罪热点" },
        { area: "Neukölln南部", risk: "中", desc: "近年士绅化但仍有部分高风险街区" }
      ],
      safeAreas: ["Prenzlauer Berg", "Charlottenburg", "Mitte（勃兰登堡门附近）", "Zehlendorf"],
      history: "经历二战轰炸、冷战分裂和两德统一，柏林墙见证了20世纪最戏剧性的历史转折。",
      tips: [
        "验票员随机检查，公共交通逃票罚款60欧，务必打票",
        "自行车道严格禁止行人踩踏",
        "Berghain夜店进场规则严苛，不要拍照",
        "超市周日关门，提前备好食物"
      ]
    },
    emergency: {
      police: "110", ambulance: "112", fire: "112",
      touristHotline: "+49-30-25002333",
      embassies: { "中国大使馆": "+49-30-27588-0", "美国大使馆": "+49-30-8305-0" },
      hospitals: [{ name: "夏里特医院", phone: "+49-30-450-50", address: "Charitéplatz 1" }],
      apps: ["BVG Fahrinfo（公交导航）", "Flinkster（共享汽车）", "Wolt/Lieferando（外卖）"],
      selfDefense: ["避免在地铁内使用手机（避免抢夺）", "夜间步行在灯光充足的街道", "随身携带欧元现金（部分商店不接受卡）"]
    },
    lifestyle: {
      food: [
        { name: "Curry36", type: "咖喱烤肠", price: "€", desc: "柏林标志性街头食物，Currywurst配薯条，永远排队" },
        { name: "Markthalle Neun（Kreuzberg）", type: "街头市集", desc: "周四Street Food Thursday，全球美食聚集", price: "€€" },
        { name: "Clärchens Ballhaus", type: "德国传统", price: "€€", desc: "1913年开业的舞厅餐厅，每周有舞会，猪肘子一绝" }
      ],
      attractions: [
        { name: "柏林墙东边画廊", type: "历史", desc: "1.3公里保存最完整的柏林墙段，世界最长户外画廊" },
        { name: "博物馆岛", type: "博物馆", desc: "UNESCO世界遗产，5座顶级博物馆，佩加蒙祭坛必看" },
        { name: "Tempelhofer Feld", type: "公园", desc: "前机场改建的超大公园，可骑行、野餐、放风筝", hidden: true }
      ],
      festivals: [
        { name: "柏林电影节（Berlinale）", date: "2月", desc: "全球三大电影节之一，部分影票对公众开放" },
        { name: "Christopher Street Day（同志游行）", date: "7月", desc: "欧洲最大LGBTQ+游行，全城庆典" }
      ],
      customs: ["德国人守时观念极强，迟到需事先通知", "餐厅小费约10%，直接给现金给服务员", "周日很安静，很多商店关闭"],
      transport: "ABC区域月票覆盖全柏林，每月约86欧，德国已推出49欧Deutschland-Ticket覆盖全国公共交通。"
    }
  },

  "amsterdam": {
    id: "amsterdam", name: "阿姆斯特丹", nameEn: "Amsterdam",
    country: "荷兰", countryEn: "Netherlands",
    continent: "欧洲", lat: 52.3676, lng: 4.9041,
    flag: "🇳🇱",
    image: "https://picsum.photos/seed/amsterdam/800/400",
    overview: "阿姆斯特丹是欧洲最受欢迎的旅游城市，自行车王国，整体安全但扒窃和行骗较猖獗，红灯区需特别注意。",
    safety: {
      overall: 70, grade: "B",
      grades: {
        robbery: { score: 72, label: "抢劫", desc: "街头抢劫不多，但夜间在红灯区附近有风险" },
        homicide: { score: 80, label: "凶杀", desc: "凶杀率低，偶有有组织犯罪" },
        traffic: { score: 65, label: "交通", desc: "自行车绝对优先，行人要时刻注意自行车道，被撞概率极高" },
        theft: { score: 60, label: "盗窃", desc: "扒窃是最主要问题，尤其在运河区、中央车站和博物馆广场" },
        scam: { score: 68, label: "诈骗", desc: "假大麻糖果、街头荷官游戏和假票贩很常见" },
        drugs: { score: 70, label: "毒品", desc: "大麻在咖啡馆（coffeeshop）合法销售，但在街上购买是非法的" },
        natural: { score: 85, label: "自然灾害", desc: "低地国家，洪水历史风险高，但现代防洪体系完善" },
        political: { score: 85, label: "政治稳定", desc: "政治稳定，偶有农民抗议等运动" }
      },
      hotspots: [
        { area: "红灯区（De Wallen）", risk: "中高", desc: "扒窃和行骗集中地，严禁拍摄性工作者（违法）" },
        { area: "中央火车站广场", risk: "中高", desc: "扒窃高发区，行李要特别注意" },
        { area: "Vondelpark夜间", risk: "中", desc: "夜间有毒品交易，白天是安全的家庭公园" }
      ],
      safeAreas: ["Jordaan区", "De Pijp", "Museum Quarter（博物馆区）", "Oud-Zuid"],
      history: "17世纪荷兰黄金时代的贸易中心，运河系统是UNESCO遗产，曾是全球最重要的港口城市。",
      tips: [
        "踩进自行车道会被骑行者怒骂甚至碰撞，永远先看车道",
        "绝不在街上购买大麻（只在官方coffeeshop购买）",
        "自行车失窃极常见，多锁几道且停在有监控的地方",
        "中央车站里的兑换所汇率奇差，用ATM取现"
      ]
    },
    emergency: {
      police: "112（紧急）/ 0900-8844（非紧急）", ambulance: "112", fire: "112",
      touristHotline: "+31-20-702-6000",
      embassies: { "中国大使馆": "+31-70-306-5061", "美国大使馆": "+31-70-310-2209" },
      hospitals: [{ name: "阿姆斯特丹学术医疗中心(AMC)", phone: "+31-20-566-9111", address: "Meibergdreef 9" }],
      apps: ["GVB（市内公交）", "NS（荷兰铁路）", "OV-chipkaart（公交卡）"],
      selfDefense: ["包包永远背在前面", "不要接受街头陌生人递来的任何食物", "醉酒后运河边极其危险（每年有人掉入）"]
    },
    lifestyle: {
      food: [
        { name: "Brouwerij 't IJ（酿酒厂）", type: "荷兰啤酒", price: "€€", desc: "建在风车里的精酿啤酒厂，荷兰最著名，必须打卡" },
        { name: "Verstegen（烟熏鱼摊）", type: "街头小吃", price: "€", desc: "荷兰式鲱鱼（Hollandse Nieuwe），生吃配洋葱，当地标志性美食" },
        { name: "Restaurant Sinne", type: "创意荷兰菜", price: "€€€", desc: "荷兰现代料理，价格合理的米其林水准", hidden: true }
      ],
      attractions: [
        { name: "梵高博物馆", type: "博物馆", desc: "全球最大梵高作品收藏，提前网上购票，否则排队数小时" },
        { name: "安妮之家", type: "历史", desc: "二战犹太少女Anne Frank躲藏之处，感人至深，必须提前预约" },
        { name: "NDSM码头", type: "文化", desc: "旧造船厂改建的创意区，涂鸦艺术和文化活动聚集地", hidden: true }
      ],
      festivals: [
        { name: "国王节（Koningsdag）", date: "4月27日", desc: "荷兰最大节日，全城穿橙色，运河派对，跳蚤市场遍布全城" },
        { name: "阿姆斯特丹灯光节", date: "11-1月", desc: "运河沿岸灯光艺术装置，冬季最美" }
      ],
      customs: ["直接说「不」在荷兰是礼貌，不拐弯抹角", "AA付账（Dutch treat）是常态", "自行车是最主要交通工具，人人骑车"],
      transport: "OV-chipkaart是荷兰通用交通卡，GVB有电车、公交和地铁，阿姆斯特丹极小，步行和骑车最方便。"
    }
  },

  "rome": {
    id: "rome", name: "罗马", nameEn: "Rome",
    country: "意大利", countryEn: "Italy",
    continent: "欧洲", lat: 41.9028, lng: 12.4964,
    flag: "🇮🇹",
    image: "https://picsum.photos/seed/rome/800/400",
    overview: "罗马是欧洲扒窃最严重的旅游城市之一，特别是公共交通上，但暴力犯罪低，主要风险是小偷和骗局。",
    safety: {
      overall: 64, grade: "B-",
      grades: {
        robbery: { score: 68, label: "抢劫", desc: "包抢（scooter snatch）事件时有发生，不要让包包挂在路侧" },
        homicide: { score: 82, label: "凶杀", desc: "暴力犯罪率低，与普通游客极少相关" },
        traffic: { score: 60, label: "交通", desc: "罗马司机驾驶方式混乱，行人过马路需极其谨慎" },
        theft: { score: 48, label: "盗窃", desc: "扒窃是罗马最大威胁，特别是64路公交（梵蒂冈线）、地铁A线、特莱维喷泉附近" },
        scam: { score: 58, label: "诈骗", desc: "玫瑰花手环陷阱、假警察、餐厅加收服务费等是常见骗局" },
        drugs: { score: 75, label: "毒品", desc: "毒品问题不突出，但Termini火车站附近有交易" },
        natural: { score: 78, label: "自然灾害", desc: "意大利中部地震带，但罗马较稳定，极端热浪夏季频发" },
        political: { score: 78, label: "政治稳定", desc: "政治稳定，工人罢工较频繁可能影响交通" }
      },
      hotspots: [
        { area: "Termini火车站", risk: "高", desc: "扒手聚集地，行李要看管，假出租司机众多" },
        { area: "特莱维喷泉/西班牙台阶", risk: "高", desc: "全球著名扒手区，人流密集时随时有人在你口袋里" },
        { area: "64号公交车（梵蒂冈线）", risk: "高", desc: "臭名昭著的扒手公交，被称为「扒手圣地」" }
      ],
      safeAreas: ["Trastevere（白天）", "Prati（梵蒂冈附近高档区）", "Aventino山", "EUR商务区"],
      history: "「永恒之城」，曾是地跨三大洲的罗马帝国首都，2800年历史，处处是古迹。",
      tips: [
        "使用腰包或贴身包，绝不用后背包放贵重物品",
        "餐厅要求面包费（Coperto）是合法的，约1-3欧/人",
        "不要接受街头陌生人给的玫瑰花（之后会要价）",
        "许愿池边的投币是好运，但看好自己的东西"
      ]
    },
    emergency: {
      police: "113", ambulance: "118", fire: "115",
      touristHotline: "+39-06-36004399",
      embassies: { "中国大使馆": "+39-06-9677-4200", "美国大使馆": "+39-06-46741" },
      hospitals: [{ name: "罗马综合医院（Gemelli）", phone: "+39-06-30151", address: "Largo Agostino Gemelli 8" }],
      apps: ["ATAC（罗马公交）", "Uber（有限服务）", "FrecciaRossa（高铁）"],
      selfDefense: ["挎包背在前胸而非肩侧", "手机不要放在餐桌上", "遇到有人「意外」撞你，立即检查口袋"]
    },
    lifestyle: {
      food: [
        { name: "Da Enzo al 29（Trastevere）", type: "罗马传统菜", price: "€€", desc: "当地人常去的老店，Cacio e Pepe（奶酪胡椒意面）是必点" },
        { name: "Supplì Roma（街头小吃）", type: "炸饭球", price: "€", desc: "罗马标志性街头食物，炸饭球内有番茄肉酱和奶酪" },
        { name: "Grattachecca（碎冰饮料）", type: "夏日饮品", price: "€", desc: "罗马传统碎冰饮料，Lungotevere沿河的摊位是经典", hidden: true }
      ],
      attractions: [
        { name: "斗兽场", type: "古迹", desc: "提前网上购票，附近黄牛票价翻倍，罗马论坛同票进入" },
        { name: "梵蒂冈博物馆/西斯廷教堂", type: "宗教艺术", desc: "米开朗基罗天顶画，务必提前在官网购票，节省3-4小时排队" },
        { name: "Aperol Spritz at Campo de' Fiori", type: "体验", desc: "日落时分在广场喝一杯Aperol Spritz，感受罗马节奏", hidden: true }
      ],
      festivals: [
        { name: "复活节", date: "3-4月", desc: "教皇在圣彼得广场主持弥撒，全球天主教徒朝圣，需要提前申请入场" },
        { name: "夏季电影节（Estate Romana）", date: "7-9月", desc: "全城户外电影放映，在古迹旁看电影是独特体验" }
      ],
      customs: ["早餐站着在吧台喝浓缩咖啡是意大利传统，坐下加收服务费", "午休（Riposo）13-16时许多小店关门", "用餐时间晚，晚餐通常20时以后"],
      transport: "罗马公交系统混乱，以步行、地铁A/B线和出租车为主，出租车须用官方白色车辆（非黑车）。"
    }
  },

  "barcelona": {
    id: "barcelona", name: "巴塞罗那", nameEn: "Barcelona",
    country: "西班牙", countryEn: "Spain",
    continent: "欧洲", lat: 41.3851, lng: 2.1734,
    flag: "🇪🇸",
    image: "https://picsum.photos/seed/barcelona/800/400",
    overview: "巴塞罗那是欧洲扒窃最严重城市之一，高迪建筑和地中海海滩极具魅力，但旅游区扒窃猖獗到令人震惊的程度。",
    safety: {
      overall: 60, grade: "B-",
      grades: {
        robbery: { score: 62, label: "抢劫", desc: "摩托车飞车抢包事件频繁，特别是在海滩和Las Ramblas" },
        homicide: { score: 82, label: "凶杀", desc: "暴力犯罪极低，主要问题是财产犯罪" },
        traffic: { score: 72, label: "交通", desc: "交通较有序，但摩托车众多，过马路需注意" },
        theft: { score: 45, label: "盗窃", desc: "扒窃极其猖獗，巴塞罗那在全球扒窃严重城市榜长期名列前茅" },
        scam: { score: 60, label: "诈骗", desc: "Las Ramblas的「三张牌」赌局、假花献给女性等骗局" },
        drugs: { score: 72, label: "毒品", desc: "大麻消费较普遍（私人场所合法），但街头兜售是违法的" },
        natural: { score: 82, label: "自然灾害", desc: "地震活动低，偶有强暴风雨，夏季热浪" },
        political: { score: 72, label: "政治稳定", desc: "加泰罗尼亚独立运动导致偶发大规模抗议，通常和平" }
      },
      hotspots: [
        { area: "Las Ramblas（兰布拉大道）", risk: "极高", desc: "全欧洲扒窃最高发地带，带好贵重物品" },
        { area: "Barceloneta海滩", risk: "高", desc: "沙滩扒窃，不要将任何东西放在沙滩上离开视线" },
        { area: "地铁L3/L5线", risk: "高", desc: "扒手在拥挤地铁上活动，进出站时最危险" }
      ],
      safeAreas: ["Sarrià-Sant Gervasi", "Gràcia", "Eixample（Eixample）", "Pedralbes"],
      history: "加泰罗尼亚文化中心，巴塞罗那声称是欧洲最古老的城市之一，高迪于19-20世纪初改变了这座城市的面貌。",
      tips: [
        "背包绝对放在前面，从未有任何例外",
        "在餐厅将手机放在口袋里或膝盖上，不要放桌上",
        "Las Ramblas只在白天人多时安全，夜间走两侧的平行街",
        "警告：有人「意外」洒东西在你身上然后帮你擦，这是扒窃配合动作"
      ]
    },
    emergency: {
      police: "112", ambulance: "112", fire: "112",
      touristHotline: "+34-932-553-829",
      embassies: { "中国大使馆（马德里）": "+34-91-519-4242", "美国总领事馆": "+34-93-280-2227" },
      hospitals: [{ name: "圣帕乌医院（Hospital de la Santa Creu i Sant Pau）", phone: "+34-93-553-7200", address: "Carrer de Sant Antoni Maria Claret 167" }],
      apps: ["TMB（地铁公交）", "T-Casual（10次卡划算）", "Bicing（共享单车，需当地手机号注册）"],
      selfDefense: ["使用贴身腰包", "海滩绝不离开自己的物品", "报警用英文可以，旅游警察（Guàrdia Urbana）有英语服务"]
    },
    lifestyle: {
      food: [
        { name: "La Boqueria市场（早上9-11时）", type: "美食市场", price: "€€", desc: "避开中午高峰，早上去才是本地人的节奏，海鲜最新鲜" },
        { name: "Bar Cañete", type: "加泰罗尼亚菜", price: "€€€", desc: "精致Tapas，Jamón Ibérico和pa amb tomàquet（番茄面包）是必点" },
        { name: "Cervecería Catalana", type: "Tapas吧", price: "€€", desc: "最受欢迎的Tapas吧，海鲜Pintxos和香肠", hidden: true }
      ],
      attractions: [
        { name: "圣家堂（Sagrada Família）", type: "建筑", desc: "高迪未竟之作，预计2026年完工，务必提前网上购票+选塔楼门票" },
        { name: "古埃尔公园（Park Güell）", type: "建筑", desc: "高迪设计的彩色公园，指定区域收费，需提前购票" },
        { name: "El Born区", type: "街区", desc: "中世纪老城改造的时尚街区，加泰罗尼亚最美咖啡馆聚集地", hidden: true }
      ],
      festivals: [
        { name: "La Mercè节", date: "9月24日前后", desc: "巴塞罗那最大市节，卡斯特利斯（人塔）表演、烟火，完全免费" },
        { name: "Sonar音乐节", date: "6月", desc: "全球最重要的电子音乐节之一，连续三天" }
      ],
      customs: ["加泰罗尼亚语和西班牙语并行，说加泰语会有加分", "午餐是正餐（13:30-15:30），晚餐21时后才是正常时间", "餐厅侍者不会主动来收账，你需要示意或要求"],
      transport: "TMB地铁8条线覆盖全城，T-Casual 10次票划算，机场特快巴士（Aerobus）比地铁快。"
    }
  },

  "vienna": {
    id: "vienna", name: "维也纳", nameEn: "Vienna",
    country: "奥地利", countryEn: "Austria",
    continent: "欧洲", lat: 48.2082, lng: 16.3738,
    flag: "🇦🇹",
    image: "https://picsum.photos/seed/vienna/800/400",
    overview: "维也纳连续多年被评为全球最宜居城市，安全指数极高，音乐和咖啡馆文化举世无双，是欧洲旅行必选目的地。",
    safety: {
      overall: 86, grade: "A-",
      grades: {
        robbery: { score: 88, label: "抢劫", desc: "抢劫事件极少，城市整体非常安全" },
        homicide: { score: 90, label: "凶杀", desc: "凶杀率极低，是欧洲最安全的首都之一" },
        traffic: { score: 88, label: "交通", desc: "交通有序，有轨电车网络密集，行人优先" },
        theft: { score: 78, label: "盗窃", desc: "扒窃主要在中央车站和圣斯蒂芬大教堂周边" },
        scam: { score: 82, label: "诈骗", desc: "诈骗较少，偶有机场/车站的黑心出租" },
        drugs: { score: 82, label: "毒品", desc: "毒品问题较轻，偶在Praterstern附近有交易" },
        natural: { score: 85, label: "自然灾害", desc: "冬季有大雪，偶有多瑙河洪水，总体风险低" },
        political: { score: 88, label: "政治稳定", desc: "政治极为稳定，民主法治健全" }
      },
      hotspots: [
        { area: "Praterstern地铁站", risk: "中", desc: "有毒品交易和流浪者聚集，夜间独行需注意" },
        { area: "维也纳中央车站", risk: "低中", desc: "扒窃偶发，看管好行李即可" }
      ],
      safeAreas: ["第一区（老城区）", "第三区（外交区）", "第十九区（Döbling）"],
      history: "哈布斯堡帝国的心脏，莫扎特、贝多芬、舒伯特的家乡，维也纳曾是欧洲最强大帝国的首都。",
      tips: [
        "公共交通须购票，查票很严（70欧罚款）",
        "维也纳自来水是山泉水级别，可以直接饮用",
        "博物馆周日常有特价（1欧入场）",
        "维也纳人对噪音敏感，安静是基本礼貌"
      ]
    },
    emergency: {
      police: "133", ambulance: "144", fire: "122",
      touristHotline: "+43-1-24555",
      embassies: { "中国大使馆": "+43-1-7143149", "美国大使馆": "+43-1-31339-0" },
      hospitals: [{ name: "维也纳综合医院（AKH）", phone: "+43-1-40400-0", address: "Währinger Gürtel 18-20" }],
      apps: ["WienerLinien（维也纳公交）", "Öffi（奥地利公交导航）", "Bolt（打车）"],
      selfDefense: ["随时保管好随身物品", "避免Praterstern区域夜间独行", "在咖啡馆不要将手机留在桌上"]
    },
    lifestyle: {
      food: [
        { name: "Café Central（咖啡馆）", type: "维也纳咖啡馆", price: "€€", desc: "1876年开业，穹顶大厅极美，弗洛伊德和托洛茨基的常去地" },
        { name: "Figlmüller（维也纳炸肉排）", type: "奥地利传统菜", price: "€€€", desc: "盘子大过桌面的炸小牛肉排（Wiener Schnitzel），需预约" },
        { name: "Naschmarkt（露天市场）", type: "食品市场", price: "€€", desc: "维也纳最大食品市场，周六跳蚤市场，中东和地中海食材最全", hidden: true }
      ],
      attractions: [
        { name: "美泉宫（Schönbrunn Palace）", type: "宫殿", desc: "哈布斯堡帝国夏宫，宫殿+花园，山顶凉亭俯瞰全城最美" },
        { name: "艺术史博物馆", type: "博物馆", desc: "世界级绘画收藏，拉斐尔、鲁本斯、提香的真迹" },
        { name: "维也纳歌剧院（Staatsoper）", type: "音乐", desc: "全球最顶级歌剧院，站票只需4欧，是欣赏世界顶级演出的最经济方式", hidden: true }
      ],
      festivals: [
        { name: "维也纳歌剧院舞会（Opernball）", date: "2月", desc: "全球最顶级的黑领带舞会，门票极贵但电视直播全程" },
        { name: "维也纳圣诞市场", date: "11-12月", desc: "欧洲最美圣诞市场，市政厅广场前的最壮观" }
      ],
      customs: ["维也纳咖啡馆文化是UNESCO非物质文化遗产，点咖啡附赠水是传统", "公共场合保持安静是基本礼貌", "握手问候，包括初次见面的儿童"],
      transport: "U-Bahn地铁+Straßenbahn有轨电车+公交组成完美网络，Vienna City Card日票划算。"
    }
  },

  "prague": {
    id: "prague", name: "布拉格", nameEn: "Prague",
    country: "捷克", countryEn: "Czech Republic",
    continent: "欧洲", lat: 50.0755, lng: 14.4378,
    flag: "🇨🇿",
    image: "https://picsum.photos/seed/prague/800/400",
    overview: "布拉格是中欧最美丽的城市，保存极佳的中世纪老城和廉价消费吸引大量游客，安全但旅游区诈骗严重。",
    safety: {
      overall: 71, grade: "B",
      grades: {
        robbery: { score: 78, label: "抢劫", desc: "抢劫不常见，但Wenceslas广场夜间需谨慎" },
        homicide: { score: 87, label: "凶杀", desc: "凶杀率极低，是中欧最安全城市之一" },
        traffic: { score: 78, label: "交通", desc: "有轨电车网络密集，行人过马路注意轨道车" },
        theft: { score: 65, label: "盗窃", desc: "扒窃主要在老城广场、查理大桥和地铁A线" },
        scam: { score: 55, label: "诈骗", desc: "出租车诈骗极其猖獗（必须用AAA或Liftago），ATM换钱骗局" },
        drugs: { score: 75, label: "毒品", desc: "大麻使用较宽松，但公开场合持有仍违法" },
        natural: { score: 85, label: "自然灾害", desc: "伏尔塔瓦河洪水偶发，其余风险低" },
        political: { score: 85, label: "政治稳定", desc: "政治稳定，欧盟成员国" }
      },
      hotspots: [
        { area: "Wenceslas Square夜间", risk: "中高", desc: "夜间有黑市换钱骗局、毒品交易和色情陷阱" },
        { area: "查理大桥", risk: "中", desc: "扒窃高发，大量游客聚集时背包放前面" },
        { area: "车站附近出租车", risk: "高", desc: "无表出租车对游客收费可达正常价格10倍" }
      ],
      safeAreas: ["老城区（白天）", "Vinohrady", "Malá Strana（小城区）", "Dejvice"],
      history: "神圣罗马帝国的重要都市，20世纪经历了纳粹占领和共产主义，1989年天鹅绒革命后涌现出令人振奋的活力。",
      tips: [
        "永远用Uber、Bolt或电话预约的出租车，绝不乘路边揽客的",
        "ATM使用银行官方机器，避免Euronet等私人ATM（汇率差）",
        "布拉格啤酒比水便宜（约50克朗/500ml），喝水也是安全的",
        "奥尔良机械钟（Astronomical Clock）每小时整点表演，人很挤，注意扒手"
      ]
    },
    emergency: {
      police: "158", ambulance: "155", fire: "150",
      touristHotline: "+420-224-142-484",
      embassies: { "中国大使馆": "+420-233-028-280", "美国大使馆": "+420-257-022-000" },
      hospitals: [{ name: "那·霍门尔卡医院（Na Homolce）", phone: "+420-257-272-111", address: "Roentgenova 37/2" }],
      apps: ["PID Lítačka（公交卡）", "Bolt（最便宜打车）", "Wolt（外卖）"],
      selfDefense: ["不要在街上拿出很多现金", "在地铁拥挤时随时注意口袋", "对主动接近你兜售服务的陌生人保持警惕"]
    },
    lifestyle: {
      food: [
        { name: "Lokál（Dlouhá街）", type: "捷克传统菜", price: "€€", desc: "布拉格最佳捷克传统餐厅之一，直从桶里倒的Pilsner Urquell啤酒绝对新鲜" },
        { name: "Pražský Svět（烤猪肘）", type: "烤肉", price: "€€", desc: "烤猪膝（Pečené Vepřové Koleno）是捷克招牌，配酸菜和黑啤" },
        { name: "Naše maso（精肉铺）", type: "熟食", price: "€", desc: "当地人的内脏熟食铺，试试Tlačenka肉冻，配芥末和醋洋葱", hidden: true }
      ],
      attractions: [
        { name: "布拉格城堡", type: "历史", desc: "世界最大城堡建筑群，圣维特大教堂位于其中，俯瞰全城最美" },
        { name: "犹太区（Josefov）", type: "历史", desc: "保存完好的欧洲犹太历史，六座会堂和古老犹太墓地令人肃穆" },
        { name: "捷克共和国军事历史博物馆", type: "历史", desc: "非常详尽的二战和冷战历史，鲜有游客知道但极值得参观", hidden: true }
      ],
      festivals: [
        { name: "布拉格春季音乐节", date: "5月", desc: "捷克最重要古典音乐节，在历史宫殿中演出，用贝多芬第九交响曲开幕" },
        { name: "布拉格圣诞市场", date: "11-12月", desc: "老城广场圣诞市场，煮红酒（Svařák）和肉桂卷（Trdelník）不可错过" }
      ],
      customs: ["喝酒先碰杯再喝，眼神接触是礼貌", "捷克人外表保守内心温暖，一旦熟悉非常热情", "捷克语「Dekuji」（谢谢）是尊重当地文化的表现"],
      transport: "地铁3条线+有轨电车+公交，购24小时票最划算，Jízdenka购票机有英文界面。"
    }
  }

};
