// ============================================================
// SafeCity Global - 扩展城市数据库（北美洲、拉丁美洲、大洋洲、非洲、中东）
// ============================================================

const CITY_DATABASE_EXTRA_WORLD = {

  // ===== 北美洲 =====
  "los_angeles": {
    id: "los_angeles", name: "洛杉矶", nameEn: "Los Angeles",
    country: "美国", countryEn: "USA",
    continent: "北美洲", lat: 34.0522, lng: -118.2437,
    flag: "🇺🇸",
    image: "https://picsum.photos/seed/losangeles/800/400",
    overview: "洛杉矶是美国最大城市之一，区域差异悬殊，比佛利山和圣莫尼卡高度安全，Skid Row和南中区犯罪严重，出行靠车。",
    safety: {
      overall: 60, grade: "B-",
      grades: {
        robbery: { score: 58, label: "抢劫", desc: "部分区域抢劫高发，车内物品被盗极普遍" },
        homicide: { score: 62, label: "凶杀", desc: "凶杀率高于全美平均，局部地区帮派活动严重" },
        traffic: { score: 55, label: "交通", desc: "全美最堵城市，疲劳驾驶常见，公路行车速度快" },
        theft: { score: 55, label: "盗窃", desc: "砸车窗盗窃是主要问题，任何物品不要留在车内" },
        scam: { score: 72, label: "诈骗", desc: "好莱坞虚假星探、路边算命等骗局" },
        drugs: { score: 58, label: "毒品", desc: "大麻已合法化，但无家者营地毒品问题严重" },
        natural: { score: 50, label: "自然灾害", desc: "山火、地震、泥石流，洛杉矶多灾，2025年初Palisades大火造成重大损失" },
        political: { score: 75, label: "政治稳定", desc: "政治稳定，抗议活动有时演变成骚乱" }
      },
      hotspots: [
        { area: "Skid Row", risk: "极高", desc: "美国最集中的无家者营地，毒品和犯罪严重，非必要不进入" },
        { area: "South Central / Compton", risk: "高", desc: "帮派历史地区，陌生人不建议夜间前往" },
        { area: "威尼斯海滩夜间", risk: "中高", desc: "白天是游客圣地，夜间人员复杂" }
      ],
      safeAreas: ["比佛利山（Beverly Hills）", "圣莫尼卡（Santa Monica）", "韦斯特伍德（Westwood）", "马利布"],
      history: "西班牙和墨西哥移民建立，1848年并入美国，20世纪好莱坞崛起使其成为全球娱乐中心。",
      tips: [
        "任何物品不要放在车内可见位置，包括空购物袋",
        "Uber/Lyft必须确认车牌和驾驶员信息再上车",
        "在ATM取款时注意周围环境，不要在偏僻地方操作",
        "地震时躲在桌下，不要跑到室外"
      ]
    },
    emergency: {
      police: "911", ambulance: "911", fire: "911",
      touristHotline: "+1-213-689-8822",
      embassies: { "中国总领事馆": "+1-213-807-8088", "其他国领事馆": "各国领事馆均设于洛杉矶" },
      hospitals: [{ name: "Cedars-Sinai医疗中心", phone: "+1-310-423-3277", address: "8700 Beverly Blvd, LA" }],
      apps: ["Google Maps（导航）", "Uber/Lyft（打车）", "LA Metro（公交）"],
      selfDefense: ["驾车时锁好车门", "夜间在停车场快速进出", "不要在街上走路看手机"]
    },
    lifestyle: {
      food: [
        { name: "Grand Central Market（市中心）", type: "美食大厅", price: "$$", desc: "建于1917年的历史市场，集中所有LA美食，寿司、墨西哥菜、汉堡、酸奶一应俱全" },
        { name: "Guisados（Boyle Heights）", type: "墨西哥Taco", price: "$", desc: "洛杉矶最好的炖肉Taco，小炉慢炖的各式馅料，必须亲自体验" },
        { name: "In-N-Out Burger", type: "美式汉堡", price: "$", desc: "加州经典，点「Double Double Animal Style」是当地传统", hidden: false }
      ],
      attractions: [
        { name: "好莱坞星光大道", type: "地标", desc: "免费，有签名星，但周边商店很贵，注意扒手" },
        { name: "Getty博物馆", type: "博物馆", desc: "免费入场（停车费25美元），印象派和古典油画收藏一流，视野绝美" },
        { name: "Griffith天文台", type: "观景", desc: "洛杉矶最佳俯瞰点，《爱乐之城》取景地，停车困难建议骑行或Uber", hidden: true }
      ],
      festivals: [
        { name: "奥斯卡颁奖典礼", date: "2-3月", desc: "好莱坞最盛大的夜晚，红毯外围可免费观看" },
        { name: "洛杉矶马拉松", date: "3月", desc: "全美最大马拉松之一，穿越城市各大地标" }
      ],
      customs: ["在LA小费文化盛行，餐厅18-20%是基本", "人人开车，步行被认为奇怪", "健康文化盛行，超市有机食品选择极多"],
      transport: "必须租车或依赖Uber/Lyft，Metro Rail覆盖有限，公交等待时间长，LA是一座为汽车设计的城市。"
    }
  },

  "toronto": {
    id: "toronto", name: "多伦多", nameEn: "Toronto",
    country: "加拿大", countryEn: "Canada",
    continent: "北美洲", lat: 43.6532, lng: -79.3832,
    flag: "🇨🇦",
    image: "https://picsum.photos/seed/toronto/800/400",
    overview: "多伦多是加拿大最大城市，全球最多元文化都市之一，安全指数高，整体生活质量优异。",
    safety: {
      overall: 76, grade: "B+",
      grades: {
        robbery: { score: 78, label: "抢劫", desc: "抢劫率低于多数北美大城市，市中心总体安全" },
        homicide: { score: 78, label: "凶杀", desc: "凶杀率低，偶有枪击事件但与普通市民关联不大" },
        traffic: { score: 78, label: "交通", desc: "交通有序，冬季雪天驾驶需注意，TTC地铁安全" },
        theft: { score: 72, label: "盗窃", desc: "手机盗窃和自行车盗窃是主要问题" },
        scam: { score: 80, label: "诈骗", desc: "诈骗较少，网络诈骗是主要风险" },
        drugs: { score: 72, label: "毒品", desc: "大麻全国合法，但阿片类危机在部分社区严重" },
        natural: { score: 80, label: "自然灾害", desc: "冬季暴风雪，偶有冻雨，但城市应对有序" },
        political: { score: 88, label: "政治稳定", desc: "政治极为稳定，民主法治健全" }
      },
      hotspots: [
        { area: "Jane-Finch交叉口", risk: "中高", desc: "历史上低收入社区，犯罪率高于市平均" },
        { area: "Regent Park周边", risk: "中", desc: "社会住房区，近年改造中，夜间需注意" }
      ],
      safeAreas: ["约克维尔（Yorkville）", "The Beaches", "North York", "Etobicoke"],
      history: "原住民土地（Haudenosaunee和Anishinaabe），1834年建市，现是加拿大经济和金融中心。",
      tips: [
        "冬季气温可低至-20°C，穿戴防寒务必充分",
        "加拿大人极有礼貌，随时说谢谢和对不起",
        "Presto卡通用于TTC和GO Train，比单程票便宜",
        "枫糖浆产品质量差异大，在农贸市场或专卖店购买"
      ]
    },
    emergency: {
      police: "911（紧急）/ 416-808-2222（非紧急）", ambulance: "911", fire: "911",
      touristHotline: "+1-416-338-0338",
      embassies: { "中国总领事馆": "+1-416-964-7260", "美国总领事馆": "+1-416-595-1700" },
      hospitals: [{ name: "多伦多综合医院", phone: "+1-416-340-4800", address: "200 Elizabeth St" }],
      apps: ["TTC（多伦多公交）", "Presto（公交卡）", "Waze（导航）"],
      selfDefense: ["冬季雪天在室内走廊（PATH系统）出行", "夜间地铁站等在「等候区」（标有蓝色大写W）", "自行车务必上两把锁"]
    },
    lifestyle: {
      food: [
        { name: "Kensington Market", type: "多元文化", price: "$$", desc: "多伦多最有个性的市场，集中加勒比、越南、牙买加等各国小吃" },
        { name: "St. Lawrence Market", type: "美食市场", price: "$$", desc: "北美最佳食品市场之一，周六农夫市集，加拿大奶酪和肉品一流" },
        { name: "Scarborough区亚洲美食", type: "亚洲菜", price: "$", desc: "多伦多东区的亚洲美食天堂，地道香港、台湾、韩国料理", hidden: true }
      ],
      attractions: [
        { name: "CN塔", type: "地标", desc: "加拿大标志，玻璃地板和旋转餐厅，预约可省时间" },
        { name: "多伦多艺术馆（AGO）", type: "博物馆", desc: "弗兰克·盖里设计，收藏加拿大原住民艺术和欧洲大师" },
        { name: "多伦多群岛", type: "自然", desc: "轮渡15分钟，城市公园岛屿，俯瞰多伦多天际线，夏日最佳去处", hidden: true }
      ],
      festivals: [
        { name: "多伦多国际电影节（TIFF）", date: "9月", desc: "全球最重要电影节之一，部分电影票向公众开放" },
        { name: "Pride多伦多", date: "6月", desc: "全球最大的LGBTQ+活动之一，游行和活动超过两周" }
      ],
      customs: ["加拿大人极为礼貌，'Sorry'是口头禅", "多元文化是多伦多最大特色，尊重各族文化是共识", "小费餐厅15-20%是惯例"],
      transport: "TTC地铁+电车+公交覆盖全城，Presto卡刷卡，GO Train连接郊区，共享单车Bike Share Toronto也很普及。"
    }
  },

  "san_francisco": {
    id: "san_francisco", name: "旧金山", nameEn: "San Francisco",
    country: "美国", countryEn: "USA",
    continent: "北美洲", lat: 37.7749, lng: -122.4194,
    flag: "🇺🇸",
    image: "https://picsum.photos/seed/sanfrancisco/800/400",
    overview: "旧金山是硅谷之门，城市美丽但贫富分化极端，Market Street以南（Tenderloin/SoMa）的无家者危机和毒品问题全美最严重之一。",
    safety: {
      overall: 55, grade: "C+",
      grades: {
        robbery: { score: 58, label: "抢劫", desc: "手机飞车抢夺、汽车爆窃是日常发生的事" },
        homicide: { score: 68, label: "凶杀", desc: "凶杀率比旧金山郊区高，但仍低于许多美国城市" },
        traffic: { score: 70, label: "交通", desc: "著名陡坡街道，停车是噩梦，Muni公交不准时" },
        theft: { score: 42, label: "盗窃", desc: "砸车窗盗窃到了荒唐程度，每年数万起，任何物品在车内都会被盗" },
        scam: { score: 65, label: "诈骗", desc: "Tenderloin区有各类街头骗局，网络诈骗也很常见" },
        drugs: { score: 42, label: "毒品", desc: "芬太尼危机极为严重，Tenderloin街头随处可见吸毒者" },
        natural: { score: 52, label: "自然灾害", desc: "海沃德断层贯穿湾区，地震风险高；雾和强风是日常" },
        political: { score: 72, label: "政治稳定", desc: "政治稳定，但近年无家者政策引发持续争议" }
      },
      hotspots: [
        { area: "Tenderloin区", risk: "极高", desc: "毒品注射、帐篷营地遍布，日间也非常危险，建议绕行" },
        { area: "UN Plaza附近", risk: "高", desc: "无家者聚集，抢劫和药物交易活跃" },
        { area: "市场街（Market St.）夜间", risk: "中高", desc: "夜间人员复杂，注意保管财物" }
      ],
      safeAreas: ["Pacific Heights", "Noe Valley", "Cole Valley", "Marina District", "Castro"],
      history: "1849年淘金热使其从渔村变为城市，华埠是美国最老的华人聚居地，硅谷风投在此聚集。",
      tips: [
        "车内绝对不留任何东西，哪怕一个空袋子都会被砸窗",
        "Tenderloin区域绝对避开，即使在地图上显示为直接路线",
        "现金支付小费很常见，随身带一些零钱",
        "大雾（Karl the Fog）是SF名片，夏季穿外套"
      ]
    },
    emergency: {
      police: "911（紧急）/ 415-553-0123（非紧急）", ambulance: "911", fire: "911",
      touristHotline: "+1-415-391-2000",
      embassies: { "中国总领事馆": "+1-415-852-5900", "其他国家": "大多数国家在SF设有总领事馆" },
      hospitals: [{ name: "UCSF医疗中心", phone: "+1-415-476-1000", address: "500 Parnassus Ave" }],
      apps: ["Muni Mobile（公交）", "Clipper卡（公交卡）", "Uber/Lyft（打车）"],
      selfDefense: ["步行时手机放口袋", "不要在街上展示高价物品", "BART/Muni夜间避免空车厢"]
    },
    lifestyle: {
      food: [
        { name: "Ferry Building Marketplace", type: "农夫市集", price: "$$$", desc: "周二、四、六早市，旧金山最好的有机食材，Acme面包和Cowgirl奶酪是招牌" },
        { name: "Mission Dolores区塔可馆", type: "墨西哥菜", price: "$", desc: "Mission区的超级墨西哥卷（Super Burrito）是SF本地灵魂食物" },
        { name: "Zuni Café", type: "加州菜", price: "$$$", desc: "SF经典，周六烤鸡需提前一天预约，面包沙拉配烤鸡是传奇", hidden: true }
      ],
      attractions: [
        { name: "金门大桥", type: "地标", desc: "步行或骑行过桥，大桥上风大，穿厚外套；Vista Point观景台是最佳拍照点" },
        { name: "卡斯特罗区", type: "文化", desc: "LGBTQ+历史文化圣地，Harvey Milk故居，文化包容氛围浓厚" },
        { name: "穆尔红杉国家公园", type: "自然", desc: "离市中心45分钟车程，千年红杉遮天，对比城市反差极大", hidden: true }
      ],
      festivals: [
        { name: "弗利斯科音乐节（Outside Lands）", date: "8月", desc: "金门公园内的大型音乐节，历年阵容强大" },
        { name: "中国城新年游行", date: "1-2月", desc: "全美规模最大的中国春节游行，纪念意义深远" }
      ],
      customs: ["科技文化浓厚，休闲装是普遍着装", "「先生/女士」很少用，名字直呼是常态", "现金越来越少用，大多数地方只接受卡或手机支付"],
      transport: "Muni轻轨+公交+缆车（游客专用景点交通），BART连接湾区各城市，Clipper卡最方便。"
    }
  },

  // ===== 拉丁美洲 =====
  "buenos_aires": {
    id: "buenos_aires", name: "布宜诺斯艾利斯", nameEn: "Buenos Aires",
    country: "阿根廷", countryEn: "Argentina",
    continent: "拉丁美洲", lat: -34.6037, lng: -58.3816,
    flag: "🇦🇷",
    image: "https://picsum.photos/seed/buenosaires/800/400",
    overview: "布宜诺斯艾利斯是「南美的巴黎」，文化气息浓厚，食物美味，但近年经济危机导致犯罪率上升，需要保持警惕。",
    safety: {
      overall: 58, grade: "C+",
      grades: {
        robbery: { score: 55, label: "抢劫", desc: "持械抢劫（entraderas）有上升趋势，晚上在郊区需格外小心" },
        homicide: { score: 68, label: "凶杀", desc: "凶杀率相对南美较低，但仍高于欧洲" },
        traffic: { score: 60, label: "交通", desc: "司机驾驶风格激进，行人优先不被保障，摩托车多" },
        theft: { score: 52, label: "盗窃", desc: "扒窃和「快速打劫」（arrebato）是日常威胁，手机最常被抢" },
        scam: { score: 62, label: "诈骗", desc: "非官方换汇（蓝色美元）有被骗风险，假比索也很常见" },
        drugs: { score: 68, label: "毒品", desc: "可卡因文化较普遍，部分夜店区有交易" },
        natural: { score: 75, label: "自然灾害", desc: "偶发强暴风雨，洪涝风险，南大西洋季风" },
        political: { score: 60, label: "政治稳定", desc: "政治上多变，通货膨胀严重，抗议示威频发" }
      },
      hotspots: [
        { area: "La Boca区（夜间）", risk: "高", desc: "Caminito街白天安全，夜间立即危险，不要进入周边小巷" },
        { area: "Retiro火车站周边", risk: "中高", desc: "扒窃频繁，行李要随时紧握" },
        { area: "Constitución区", risk: "高", desc: "夜间犯罪率高，避免前往" }
      ],
      safeAreas: ["Palermo（帕勒莫）", "Recoleta（雷科莱塔）", "Belgrano", "Puerto Madero"],
      history: "西班牙殖民地，1816年独立，曾是全球最富裕城市之一，后经历多次经济崩溃，探戈发源地。",
      tips: [
        "在餐厅和咖啡馆不要把手机放在桌上，会直接被抢走",
        "换汇使用官方兑换点，蓝色美元虽然汇率好但有风险",
        "在ATM排队时注意被人偷看密码",
        "餐厅通常22时后才热闹，探戈表演23时才开始"
      ]
    },
    emergency: {
      police: "911", ambulance: "107", fire: "100",
      touristHotline: "+54-11-4313-0187",
      embassies: { "中国大使馆": "+54-11-4778-3829", "美国大使馆": "+54-11-5777-4533" },
      hospitals: [{ name: "Hospital Alemán", phone: "+54-11-4827-7000", address: "Av. Pueyrredón 1640" }],
      apps: ["SUBE卡（公共交通）", "Uber/Cabify（打车）", "PedidosYa（外卖）"],
      selfDefense: ["只携带当天需要的现金", "贵重物品放腰包或前包", "打车优先选Uber而非路边揽客出租"]
    },
    lifestyle: {
      food: [
        { name: "La Cabrera（帕勒莫）", type: "烤肉", price: "$$$", desc: "阿根廷牛排圣地，侧菜小碟子几十种，Bife de Chorizo最经典" },
        { name: "Café Tortoni（老城区）", type: "传统咖啡馆", price: "$$", desc: "1858年开业，布宜诺斯艾利斯最老咖啡馆，卡洛斯·加德尔的常去地" },
        { name: "El Federal（圣特尔莫）", type: "小酒馆", price: "$$", desc: "老式小酒馆（bodegón），自制意面和炸牛肉，当地人不为游客而设", hidden: true }
      ],
      attractions: [
        { name: "Recoleta公墓", type: "历史", desc: "埃维塔（Eva Perón）长眠于此，南美最美的公墓，雕塑极具艺术价值" },
        { name: "马德罗港（Puerto Madero）", type: "建筑", desc: "废弃港口改造的时尚区，Santiago Calatrava设计的妇女桥（Puente de la Mujer）是标志" },
        { name: "San Telmo星期日市集", type: "市集", desc: "百年历史的骨董市场，探戈街头表演，阿根廷艺术品最集中", hidden: true }
      ],
      festivals: [
        { name: "布宜诺斯艾利斯国际探戈节", date: "8月", desc: "全球最大探戈活动，街头免费表演和比赛" },
        { name: "Buenos Aires Fashion Week", date: "7月和10月", desc: "南美最重要时尚节" }
      ],
      customs: ["阿根廷人用贴面礼（Un beso）问候，男女均如此", "午餐通常13-15时，晚餐20时以后", "阿根廷人非常热情健谈，批评足球队是友谊破裂点"],
      transport: "Subte（地铁）6条线，红色SUBE卡通用于地铁公交和郊区火车，出租车选Radio Taxi或Uber。"
    }
  },

  "sao_paulo": {
    id: "sao_paulo", name: "圣保罗", nameEn: "São Paulo",
    country: "巴西", countryEn: "Brazil",
    continent: "拉丁美洲", lat: -23.5505, lng: -46.6333,
    flag: "🇧🇷",
    image: "https://picsum.photos/seed/saopaulo/800/400",
    overview: "圣保罗是南美最大城市，经济中心，美食文化极丰富，但贫富分化严重，「闪劫」（Lightning Kidnap）和「哄抢」是严重威胁。",
    safety: {
      overall: 45, grade: "C",
      grades: {
        robbery: { score: 42, label: "抢劫", desc: "闪劫（Sequestro relâmpago）极危险，强制带你去ATM取完所有现金" },
        homicide: { score: 52, label: "凶杀", desc: "凶杀率高，但主要集中在贫民窟（Favela）地带" },
        traffic: { score: 55, label: "交通", desc: "交通极其拥堵，有钱人乘直升机通勤" },
        theft: { score: 45, label: "盗窃", desc: "街头抢夺（arrastão）成群结队，很难防范" },
        scam: { score: 58, label: "诈骗", desc: "假交警、假出租司机等骗局" },
        drugs: { score: 50, label: "毒品", desc: "贫民窟毒品问题严重，Cracolândia是著名毒品区" },
        natural: { score: 68, label: "自然灾害", desc: "暴雨和洪水是最主要自然灾害，雨季淹水严重" },
        political: { score: 65, label: "政治稳定", desc: "民主国家，但政治腐败和社会不平等是长期问题" }
      },
      hotspots: [
        { area: "Cracolândia（冰毒区）", risk: "极高", desc: "可卡因/冰毒聚集地，全天危险，严禁进入" },
        { area: "中央区（Sé/República）夜间", risk: "高", desc: "夜间犯罪率极高，商家下班后区域变危险" }
      ],
      safeAreas: ["Jardins（贾丁斯）", "Itaim Bibi", "Moema", "Vila Madalena（白天）"],
      history: "葡萄牙殖民地，1822年巴西独立后逐渐发展成南美最大经济中心，日本裔移民聚居的Liberdade区举世闻名。",
      tips: [
        "手机绝不在街上使用，即使在车里也需在红灯时收好（红灯抢劫）",
        "圣保罗人不在路上行走时佩戴珠宝或名表",
        "雨季（1-3月）暴雨频繁，出行留余量",
        "在Liberdade日本城体验世界最大日裔社区文化"
      ]
    },
    emergency: {
      police: "190", ambulance: "192", fire: "193",
      touristHotline: "+55-11-3107-5642",
      embassies: { "中国总领事馆": "+55-11-3819-6700", "美国总领事馆": "+55-11-3250-5000" },
      hospitals: [{ name: "Einstein医院", phone: "+55-11-2151-1233", address: "Av. Albert Einstein 627" }],
      apps: ["99（本地打车）", "Uber（打车）", "iFood（外卖）"],
      selfDefense: ["拒绝抢劫时不要抵抗，财物可以找回，人身安全第一", "避免在夜间行走，即使短距离也打车", "留意被尾随，进建筑前确认无人跟踪"]
    },
    lifestyle: {
      food: [
        { name: "Mercadão（Central de Abastecimento）", type: "食品市场", price: "$$", desc: "圣保罗最大传统市场，三明治（Mortadella sandwich）是标志性小吃，单个巨大" },
        { name: "Bráz Pizzeria", type: "那不勒斯比萨", price: "$$", desc: "圣保罗以全球最多那不勒斯比萨店著称，Bráz是各大排行榜常客" },
        { name: "Liberdade日本城", type: "日本料理", price: "$$", desc: "全球最大日本移民社区，拉面、寿司、抹茶甜品水平等同日本本土", hidden: true }
      ],
      attractions: [
        { name: "圣保罗艺术博物馆（MASP）", type: "博物馆", desc: "苏珊·柯尼特斯设计，巴西最重要的艺术博物馆，周二免费入场" },
        { name: "维拉-洛博斯公园", type: "公园", desc: "圣保罗中央大型城市公园，跑步、骑行、野餐，周末热闹非凡" },
        { name: "蝙蝠侠小巷（Beco do Batman）", type: "涂鸦", desc: "Villa Madalena区的涂鸦圣地，每面墙都是艺术品，完全免费", hidden: true }
      ],
      festivals: [
        { name: "圣保罗同志骚动（São Paulo Pride）", date: "6月", desc: "全球规模最大的LGBTQ+游行，参与人数超500万" },
        { name: "圣保罗F1大奖赛", date: "11月", desc: "巴西F1赛事，英特拉格斯赛道，观赛体验极佳" }
      ],
      customs: ["巴西人非常热情，见面就握手和拥抱", "用餐前说「Bom apetite」是礼貌", "不要穿绿色和黄色去看足球赛（容易被认为是对手球迷）"],
      transport: "地铁+单轨+公交，Bilhete Único卡转乘优惠，但高峰期极拥挤；Uber/99更安全方便。"
    }
  },

  // ===== 大洋洲 =====
  "melbourne": {
    id: "melbourne", name: "墨尔本", nameEn: "Melbourne",
    country: "澳大利亚", countryEn: "Australia",
    continent: "大洋洲", lat: -37.8136, lng: 144.9631,
    flag: "🇦🇺",
    image: "https://picsum.photos/seed/melbourne/800/400",
    overview: "墨尔本多次荣登全球最宜居城市榜首，咖啡文化世界级，多元民族和文化，安全且活力四射。",
    safety: {
      overall: 84, grade: "A-",
      grades: {
        robbery: { score: 85, label: "抢劫", desc: "抢劫率低，CBD和大多数郊区安全" },
        homicide: { score: 88, label: "凶杀", desc: "凶杀率极低，是全球最安全大城市之一" },
        traffic: { score: 82, label: "交通", desc: "交通有序，有轨电车免费区在CBD，驾驶靠左" },
        theft: { score: 75, label: "盗窃", desc: "自行车和电动车盗窃较常见，扒窃在旅游区偶发" },
        scam: { score: 82, label: "诈骗", desc: "诈骗较少，主要是假慈善机构和假票" },
        drugs: { score: 75, label: "毒品", desc: "派对毒品在年轻人中使用较普遍" },
        natural: { score: 68, label: "自然灾害", desc: "「四季在一天内」气候多变，山火威胁夏季郊区，偶发热浪" },
        political: { score: 88, label: "政治稳定", desc: "政治高度稳定，民主法治完善" }
      },
      hotspots: [
        { area: "St Kilda夜间", risk: "中", desc: "夜间有毒品和性交易，白天是美丽的海滩区" },
        { area: "特定郊区夜间（Dandenong等）", risk: "中高", desc: "部分郊区夜间安全度较低，非必要避免" }
      ],
      safeAreas: ["CBD（市中心）", "Southbank", "Fitzroy", "Carlton", "Brighton"],
      history: "1835年建城，维多利亚淘金热中心，1956年奥运会主办城市，长期与悉尼竞争「澳大利亚最好城市」。",
      tips: [
        "随时准备应对天气变化，一天内可能经历春夏秋冬",
        "有轨电车在CBD核心区完全免费",
        "咖啡文化极度认真，「平白咖啡」（Flat White）是墨尔本发明的",
        "澳元纸币防水，掉进水里也没关系"
      ]
    },
    emergency: {
      police: "000（紧急）/ 131 444（非紧急）", ambulance: "000", fire: "000",
      touristHotline: "+61-3-9658-9658",
      embassies: { "中国总领事馆": "+61-3-9822-0604", "美国总领事馆": "+61-3-9526-5900" },
      hospitals: [{ name: "皇家墨尔本医院", phone: "+61-3-9342-7000", address: "300 Grattan St, Parkville" }],
      apps: ["PTV（公共交通）", "myki（公交卡）", "Uber（打车）"],
      selfDefense: ["山火季节关注CFA火灾警报", "海滩严格遵守旗帜颜色提示（红旗禁止游泳）", "野外活动注意蛇和蜘蛛"]
    },
    lifestyle: {
      food: [
        { name: "Queen Victoria市场（QVM）", type: "食品市场", price: "$$", desc: "澳大利亚最大露天市场，每周二、四、五、六、日营业，海鲜和熟食极全" },
        { name: "Lune Croissanterie（Fitzroy）", type: "法式糕点", price: "$$", desc: "被纽约时报评为「全球最好的可颂面包」，每日供应限量，需早起排队" },
        { name: "Flower Drum（Chinatown）", type: "广东菜", price: "$$$$", desc: "40年历史的高档广东餐厅，澳洲最著名的中餐厅之一，需提前预约", hidden: true }
      ],
      attractions: [
        { name: "菲利普岛企鹅", type: "自然", desc: "日落后小蓝企鹅从海里回家，全球罕见奇景，需提前购票" },
        { name: "墨尔本板球场（MCG）", type: "体育", desc: "南半球最大体育场，AFL决赛圣地，可参观博物馆" },
        { name: "大洋路（Great Ocean Road）", type: "自然", desc: "一日自驾游圣地，十二使徒岩，岩崩后实剩8座，更显珍贵", hidden: true }
      ],
      festivals: [
        { name: "澳大利亚网球公开赛", date: "1月", desc: "全球第一个大满贯，墨尔本公园球场，可购买地面票看多场比赛" },
        { name: "墨尔本美食美酒节", date: "3月", desc: "全球最大美食节之一，100+活动跨越整个3月" }
      ],
      customs: ["澳洲人非正式随和，直呼名字是常态", "禁止在室内、餐厅、公共建筑吸烟（一律在室外）", "AA付账（splitting the bill）普遍"],
      transport: "myki卡通用于有轨电车、地铁和公交，CBD区域有轨电车完全免费，市郊Skybus连接机场。"
    }
  },

  // ===== 中东/非洲 =====
  "riyadh": {
    id: "riyadh", name: "利雅得", nameEn: "Riyadh",
    country: "沙特阿拉伯", countryEn: "Saudi Arabia",
    continent: "中东", lat: 24.6877, lng: 46.7219,
    flag: "🇸🇦",
    image: "https://picsum.photos/seed/riyadh/800/400",
    overview: "利雅得是沙特首都，快速现代化，暴力犯罪极低，但宗教法律和社会规范限制极多，外国人须严格遵守。",
    safety: {
      overall: 78, grade: "B+",
      grades: {
        robbery: { score: 88, label: "抢劫", desc: "街头犯罪极少，严格的执法使得暴力犯罪罕见" },
        homicide: { score: 88, label: "凶杀", desc: "凶杀率极低，沙特法律对犯罪惩罚严苛" },
        traffic: { score: 55, label: "交通", desc: "交通事故是主要死亡原因，超速和疲劳驾驶极普遍，道路宽阔但危险" },
        theft: { score: 82, label: "盗窃", desc: "盗窃极少，被发现处以严厉惩罚" },
        scam: { score: 78, label: "诈骗", desc: "商业欺诈和合同陷阱偶发，网络诈骗有所增加" },
        drugs: { score: 95, label: "毒品", desc: "持毒可判死刑，零容忍，走私毒品者已被处决" },
        natural: { score: 70, label: "自然灾害", desc: "极端热浪（夏季50°C以上），沙尘暴，偶发洪水" },
        political: { score: 80, label: "政治稳定", desc: "政治稳定，君主制，但2017年后MBS改革带来新变化" }
      },
      hotspots: [],
      safeAreas: ["迪普拉伊亚（Diriyah）景区", "King Abdullah Financial District", "利雅得公园"],
      history: "纳吉德地区的古老城镇，1902年阿卜杜勒-阿齐兹夺回后成为沙特阿拉伯王国首都，石油发现后迅速现代化。",
      tips: [
        "女性现在可以驾驶并不需要头巾（2018年改变），但着装仍需保守",
        "公共场合饮酒违法，严禁携带酒精入境",
        "祈祷时间（5次/天）商店关门15-30分钟",
        "2019年起开放旅游签证，游客体验大幅改善"
      ]
    },
    emergency: {
      police: "999", ambulance: "911", fire: "998",
      touristHotline: "+966-11-800-124-9000",
      embassies: { "中国大使馆": "+966-11-480-4825", "美国大使馆": "+966-11-488-3800" },
      hospitals: [{ name: "利雅得国王法赫德医疗城", phone: "+966-11-288-9999", address: "King Fahad Road" }],
      apps: ["Uber（已在沙特运营）", "Careem（中东打车）", "Jahez（外卖）"],
      selfDefense: ["遵守当地宗教和文化规范是最重要的自我保护", "酒店内的非伊斯兰行为相对宽松", "雇用当地向导探索非旅游区"]
    },
    lifestyle: {
      food: [
        { name: "Najd Village餐厅", type: "沙特传统菜", price: "$$", desc: "传统纳吉德建筑，体验沙特饮食文化，手抓饭（Kabsa）是国菜" },
        { name: "Al Tazaj（快餐）", type: "烤鸡", price: "$", desc: "沙特最受欢迎的烤鸡连锁店，人人皆知，价格亲民" },
        { name: "Black Cherry（甜品）", type: "甜品", price: "$$", desc: "沙特年轻人最爱的甜品店，各式慕斯蛋糕和冰淇淋", hidden: true }
      ],
      attractions: [
        { name: "迪里雅赫（Diriyah）", type: "历史遗址", desc: "沙特王国发源地，UNESCO遗产，耗资数十亿美元改造成旅游区" },
        { name: "国家博物馆", type: "博物馆", desc: "阿拉伯半岛历史和伊斯兰文化，建筑本身就是艺术品" },
        { name: "Edge of the World（世界边缘）", type: "自然", desc: "利雅得郊区的壮观峡谷悬崖，俯瞰900米高差，需要吉普车前往", hidden: true }
      ],
      festivals: [
        { name: "利雅得赛季（Riyadh Season）", date: "10-3月", desc: "沙特最大娱乐活动季，演唱会、展览、游乐园，2024年大幅扩展" },
        { name: "沙特国庆节", date: "9月23日", desc: "全城焰火和庆典活动" }
      ],
      customs: ["握手时等对方先伸手，穆斯林妇女可能不握手", "接受或给予东西用右手", "祈祷时间公众场合保持安静"],
      transport: "利雅得地铁2023年开通，路线覆盖主要区域；Uber和Careem是主要打车方式；道路宽阔但步行极不方便。"
    }
  },

  "cape_town": {
    id: "cape_town", name: "开普敦", nameEn: "Cape Town",
    country: "南非", countryEn: "South Africa",
    continent: "非洲", lat: -33.9249, lng: 18.4241,
    flag: "🇿🇦",
    image: "https://picsum.photos/seed/capetown/800/400",
    overview: "开普敦是世界最美丽的城市之一，但也是全球谋杀率最高城市之一，桌山下的美景与严峻的社会不平等形成极端对比。",
    safety: {
      overall: 42, grade: "C",
      grades: {
        robbery: { score: 40, label: "抢劫", desc: "持械抢劫在多个区域频发，外国游客是主要目标" },
        homicide: { score: 35, label: "凶杀", desc: "开普敦局部区域凶杀率位列全球前列，Cape Flats社区间帮派战争持续" },
        traffic: { score: 58, label: "交通", desc: "交通事故率高，酒驾严重，部分道路夜间危险" },
        theft: { score: 42, label: "盗窃", desc: "车辆和民宅盗窃是最常见犯罪，住宿必须选有安保的" },
        scam: { score: 60, label: "诈骗", desc: "ATM换卡骗局、假导游等针对游客的骗局" },
        drugs: { score: 48, label: "毒品", desc: "本土合成毒品「Tik」（冰毒）危机严重影响Cape Flats社区" },
        natural: { score: 68, label: "自然灾害", desc: "极端干旱（2018年近乎断水危机），偶发强风，海浪凶猛" },
        political: { score: 62, label: "政治稳定", desc: "民主国家但政治腐败严重，频发服务抗议" }
      },
      hotspots: [
        { area: "Cape Flats所有区域", risk: "极高", desc: "帮派战争区域，禁止前往，即使白天也非常危险" },
        { area: "Green Point Stadium周边夜间", risk: "高", desc: "夜间持械抢劫风险极高" },
        { area: "Long Street夜间", risk: "中高", desc: "酒吧区夜间抢劫和药物犯罪" }
      ],
      safeAreas: ["V&A Waterfront（维多利亚和阿尔弗雷德码头）", "Camps Bay（海滩区）", "Constantia（酒庄区）", "Hout Bay（白天）"],
      history: "荷兰东印度公司1652年建立的补给站，后被英国占领，是种族隔离（Apartheid）制度的核心地之一，纳尔逊·曼德拉被关押的罗本岛就在此。",
      tips: [
        "绝对不要独自夜行，哪怕是在所谓的安全区域",
        "酒店选择有安保的地方，验证评价真实性",
        "不要在街上展示手机、相机或珠宝",
        "开车时锁好车门，红灯时保持警惕"
      ]
    },
    emergency: {
      police: "10111（警察）/ 107（市政安全）", ambulance: "10177", fire: "107",
      touristHotline: "+27-21-487-6800",
      embassies: { "中国总领事馆": "+27-21-674-0388", "美国总领事馆": "+27-21-702-7300" },
      hospitals: [{ name: "Groote Schuur医院", phone: "+27-21-404-9111", address: "Main Road Observatory" }],
      apps: ["Uber（相对安全的出行方式）", "SnapScan（扫码支付）", "GoodFellas（本地向导）"],
      selfDefense: ["打车优先选Uber，不要乘路边出租车", "攻击发生时不要抵抗，放弃财物", "告知酒店你的外出计划"]
    },
    lifestyle: {
      food: [
        { name: "V&A Waterfront美食区", type: "综合", price: "$$", desc: "最安全的用餐环境，有保安巡逻，海鲜新鲜，可以看到桌山的全景" },
        { name: "Biesmiellah（Bo-Kaap区）", type: "开普马来菜", price: "$$", desc: "彩色房子区的传统开普马来菜，Bobotie（肉末焗饭）是代表作" },
        { name: "Test Kitchen（De Waterkant）", type: "创意料理", price: "$$$$", desc: "非洲最受瞩目餐厅之一，提前2个月以上预约", hidden: true }
      ],
      attractions: [
        { name: "桌山（Table Mountain）", type: "自然", desc: "乘缆车或徒步登顶，俯瞰整个开普半岛，务必携带防风衣" },
        { name: "罗本岛（Robben Island）", type: "历史", desc: "纳尔逊·曼德拉被关押18年之处，由前政治犯担任讲解员" },
        { name: "博尔德斯海滩企鹅群（Boulders）", type: "自然", desc: "非洲企鹅群居地，距开普敦1小时车程，近距离接触企鹅", hidden: true }
      ],
      festivals: [
        { name: "开普敦国际爵士音乐节", date: "3-4月", desc: "非洲最大国际爵士节，超过40个舞台" },
        { name: "开普顿骄傲节（Cape Town Pride）", date: "2月", desc: "非洲重要的LGBTQ+活动" }
      ],
      customs: ["南非有11种官方语言，英语是通用语", "布拉德 / Braai（南非烧烤）是文化核心，被邀请是荣誉", "南非人热情好客，但城市安全意识强"],
      transport: "驾车是最安全的出行方式，Uber也可以；旅游区可步行但需保持警惕；夜间绝对不要步行。"
    }
  },

  "cairo": {
    id: "cairo", name: "开罗", nameEn: "Cairo",
    country: "埃及", countryEn: "Egypt",
    continent: "非洲", lat: 30.0444, lng: 31.2357,
    flag: "🇪🇬",
    image: "https://picsum.photos/seed/cairo/800/400",
    overview: "开罗是非洲最大城市，金字塔脚下的千年古都，交通混乱，针对女性的性骚扰是严重问题，游客遭受诈骗极为普遍。",
    safety: {
      overall: 55, grade: "C+",
      grades: {
        robbery: { score: 62, label: "抢劫", desc: "严重暴力犯罪不多，但扒窃和小偷活跃" },
        homicide: { score: 68, label: "凶杀", desc: "针对外国人的暴力犯罪罕见，但当地社区问题存在" },
        traffic: { score: 38, label: "交通", desc: "开罗交通是全球最混乱之一，红灯仅供参考，步行过马路是冒险" },
        theft: { score: 55, label: "盗窃", desc: "扒窃在市场和旅游景点集中，特别是汗哈利里市场" },
        scam: { score: 35, label: "诈骗", desc: "对游客的诈骗极为猖獗：假向导、关门骗局、帕皮鲁斯店的「政府官价」等多达数十种手法" },
        drugs: { score: 70, label: "毒品", desc: "毒品持有处罚极严，相对问题不大" },
        natural: { score: 72, label: "自然灾害", desc: "偶发地震，沙尘暴（Khamaseen）春季严重，夏季极端高温" },
        political: { score: 62, label: "政治稳定", desc: "军事威权政府统治，政治稳定但抗议非常危险" }
      },
      hotspots: [
        { area: "汗哈利里市场（全天）", risk: "高", desc: "诈骗和扒窃密集地，任何进入店铺都可能陷入购买陷阱" },
        { area: "吉萨金字塔停车场和周边", risk: "高", desc: "骆驼骑手、假向导、「政府控制区」是常见骗局" }
      ],
      safeAreas: ["Zamalek（岛上高档区）", "Maadi（外交区）", "Heliopolis（外籍人士区）"],
      history: "法老时代的孟菲斯附近，伊斯兰教传入后成为重要城市，1千年历史的开罗老城是UNESCO遗产，古埃及文明的博物馆。",
      tips: [
        "任何人主动提供「帮助」几乎必有索价，坚定说不",
        "开罗博物馆和金字塔必须官网购票，绕开中间人",
        "女性必须着装保守（长袖、覆盖头发在宗教场所），无论国籍",
        "骑骆驼前必须谈好价格并白纸黑字，否则返程被漫天要价"
      ]
    },
    emergency: {
      police: "122", ambulance: "123", fire: "180",
      touristHotline: "+20-2-2390-8855",
      embassies: { "中国大使馆": "+20-2-2337-2226", "美国大使馆": "+20-2-2797-3300" },
      hospitals: [{ name: "开罗国际医院", phone: "+20-2-2364-8500", address: "4 Ahmad Nessim, Giza" }],
      apps: ["Uber（开罗已开通）", "Careem（本地替代品）", "Google Maps（离线下载）"],
      selfDefense: ["坚决拒绝陌生人的所有主动提供的帮助", "重要物品分散存放", "女性建议穿着宽松长裙和上衣"]
    },
    lifestyle: {
      food: [
        { name: "Koshary Abou Tarek", type: "埃及国菜", price: "£E", desc: "Koshary（米饭、意面、扁豆混合）是埃及国民食物，此店是全开罗最著名" },
        { name: "Cafe Riche（开罗老咖啡馆）", type: "传统咖啡馆", price: "£E£E", desc: "1908年开业，纳吉布·马哈福兹常在此写作，埃及文学和政治的见证者" },
        { name: "El Abd（甜品）", type: "东方甜品", price: "£E", desc: "开罗最老牌甜品店，果仁蜜饼（Baklava）和甜饮品，排队也值得", hidden: true }
      ],
      attractions: [
        { name: "吉萨金字塔和狮身人面像", type: "古迹", desc: "人类七大奇迹中唯一尚存，宏伟程度超越一切描述，须防骗子" },
        { name: "埃及国家博物馆（新）", type: "博物馆", desc: "2023年开放的大埃及博物馆（GEM），图坦卡蒙黄金面具等3万件文物" },
        { name: "开罗老城（伊斯兰开罗）", type: "历史", desc: "苏丹哈桑清真寺、伊本·土伦清真寺，1千年历史的伊斯兰建筑群", hidden: true }
      ],
      festivals: [
        { name: "开罗国际电影节", date: "11-12月", desc: "中东最历史悠久的电影节，阿拉伯电影首映" },
        { name: "斋月（Ramadan）", date: "伊斯兰历法", desc: "整个开罗生活节奏改变，夜间市集（Fanous）极具文化体验价值" }
      ],
      customs: ["右手接受和给予，左手被认为不洁净", "进清真寺脱鞋，女性覆盖头发", "砍价是市场文化传统，标价可以砍到一半"],
      transport: "地铁3条线（价格极低，约5埃磅）是安全选择，女性有专用车厢；Uber和Careem在开罗运营；出租车必须提前谈价格。"
    }
  },

  "tel_aviv": {
    id: "tel_aviv", name: "特拉维夫", nameEn: "Tel Aviv",
    country: "以色列", countryEn: "Israel",
    continent: "中东", lat: 32.0853, lng: 34.7818,
    flag: "🇮🇱",
    image: "https://picsum.photos/seed/telaviv/800/400",
    overview: "特拉维夫是中东最现代化的城市，夜生活极活跃，海滩极美，科技创业氛围浓厚，但与加沙冲突的安全风险需持续关注。",
    safety: {
      overall: 63, grade: "B-",
      grades: {
        robbery: { score: 78, label: "抢劫", desc: "日常犯罪少，街头抢劫不多见" },
        homicide: { score: 80, label: "凶杀", desc: "日常凶杀率低，但恐袭风险使情况特殊" },
        traffic: { score: 68, label: "交通", desc: "以色列司机相对激进，摩托车危险，行人需注意" },
        theft: { score: 72, label: "盗窃", desc: "扒窃相对少，但旅游区需注意" },
        scam: { score: 72, label: "诈骗", desc: "诈骗较少，部分景区存在价格虚高问题" },
        drugs: { score: 72, label: "毒品", desc: "大麻使用较普遍，娱乐性使用相对宽松" },
        natural: { score: 72, label: "自然灾害", desc: "地震带，热浪，偶发沙尘暴" },
        political: { score: 42, label: "政治稳定", desc: "持续的巴以冲突和地区不稳定是最大安全风险，火箭弹袭击有历史记录" }
      },
      hotspots: [
        { area: "南特拉维夫（Neve Shaanan）", risk: "中高", desc: "移民集中地，夜间需谨慎" }
      ],
      safeAreas: ["特拉维夫海滩大道", "Neve Tzedek（老城艺术区）", "Rothschild大道（白城建筑带）"],
      history: "1909年作为雅法（Jaffa）的郊区建立，现是以色列经济和文化中心，「白城」包含全球最大的包豪斯建筑群。",
      tips: [
        "始终知道最近的防空洞位置，空袭警报响起时立即执行标准程序",
        "安息日（Shabbat，周五日落到周六日落）大多数商店和公共交通停运",
        "入关时边境审查极严，配合并诚实回答所有问题",
        "Hummus配Pita是宗教级别的早餐，要去Abu Hassan（Jaffa）体验"
      ]
    },
    emergency: {
      police: "100", ambulance: "101", fire: "102",
      touristHotline: "+972-3-516-6188",
      embassies: { "中国大使馆": "+972-3-544-4150", "美国大使馆": "+972-3-519-7575" },
      hospitals: [{ name: "以色列Sourasky医疗中心（Ichilov）", phone: "+972-3-697-4444", address: "6 Weizmann St" }],
      apps: ["Moovit（公共交通导航）", "Gett（打车）", "Waze（以色列本地导航，最准确）"],
      selfDefense: ["了解Home Front Command应急App", "宾馆台阶遇火箭弹：蹲在楼梯间而非电梯", "进高楼前确认防空洞位置"]
    },
    lifestyle: {
      food: [
        { name: "Carmel Market（Shuk HaCarmel）", type: "市集美食", price: "₪", desc: "以色列最大市场，Falafel、沙瓦尔马（Shawarma）、新鲜果汁，最好在早上去" },
        { name: "Abu Hassan（Jaffa）", type: "胡姆斯", price: "₪", desc: "以色列最传奇胡姆斯店，仅早餐和午餐供应，售完即停，本地人每周必来" },
        { name: "Norman Hotel Rooftop Bar", type: "鸡尾酒吧", price: "₪₪₪₪", desc: "特拉维夫最时尚的屋顶酒吧，海景和天际线绝美，需预订", hidden: true }
      ],
      attractions: [
        { name: "特拉维夫海滩", type: "自然", desc: "全年可游泳，Frishman和Gordon海滩最热门，夏季极拥挤" },
        { name: "Old Jaffa（雅法老城）", type: "历史", desc: "4千年历史的古城，艺廊聚集，跳蚤市场（周六）是特色" },
        { name: "以色列博物馆（耶路撒冷，1小时车程）", type: "博物馆", desc: "死海古卷和以色列史前艺术，耶路撒冷同时还有圣殿山等世界级景点", hidden: true }
      ],
      festivals: [
        { name: "特拉维夫Pride游行", date: "6月", desc: "中东最大LGBTQ+活动，全球独一无二" },
        { name: "白夜节（White Night）", date: "6月", desc: "全城通宵文化活动，音乐、舞蹈、艺术同步进行" }
      ],
      customs: ["以色列人非常直接，被认为「粗鲁」的行为在当地是正常的坦诚", "Chutzpah（自信进取）是文化推崇的特质", "在Shabbat（安息日）期间外来游客应注意当地宗教习俗"],
      transport: "公交（Egged/Dan）是主要公共交通，Rav-Kav卡通用；Gett打车可靠；特拉维夫海滩沿线可租自行车。"
    }
  }

};
