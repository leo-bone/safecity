// ============================================================
// SafeCity Global - 扩展城市数据库（亚洲）
// ============================================================

const CITY_DATABASE_EXTRA_ASIA = {

  "singapore": {
    id: "singapore",
    name: "新加坡",
    nameEn: "Singapore",
    country: "新加坡",
    countryEn: "Singapore",
    continent: "亚洲",
    lat: 1.3521, lng: 103.8198,
    flag: "🇸🇬",
    image: "https://picsum.photos/seed/singapore/800/400",
    overview: "新加坡是全球最安全的城市之一，法律严格，执法高效，街道干净整洁，是亚洲旅行的首选目的地。",
    safety: {
      overall: 92, grade: "A",
      grades: {
        robbery: { score: 97, label: "抢劫", desc: "街头抢劫极为罕见，安保摄像头覆盖全岛" },
        homicide: { score: 97, label: "凶杀", desc: "凶杀率极低，全球最安全城市之一" },
        traffic: { score: 85, label: "交通", desc: "驾驶靠左，道路设施完善，行人安全" },
        theft: { score: 90, label: "盗窃", desc: "扒窃极少，但商业区繁忙时段仍需注意" },
        scam: { score: 88, label: "诈骗", desc: "电信诈骗和网络诈骗有所上升" },
        drugs: { score: 99, label: "毒品", desc: "持毒可判死刑，零容忍政策" },
        natural: { score: 88, label: "自然灾害", desc: "无地震台风，年均气温28°C，雷雨频繁" },
        political: { score: 95, label: "政治稳定", desc: "政治高度稳定，无冲突风险" }
      },
      hotspots: [
        { area: "牛车水（夜间）", risk: "低", desc: "夜间小心扒窃，娱乐场所人多拥挤" },
        { area: "小印度（周末）", risk: "低中", desc: "周末外来工聚集，偶有纠纷，整体安全" }
      ],
      safeAreas: ["乌节路", "滨海湾", "植物园", "圣淘沙", "Holland Village"],
      history: "1965年独立建国，从第三世界迅速发展为第一世界，无重大内乱历史。",
      tips: [
        "口香糖禁止携带入境（罚款高额）",
        "地铁站和公共场所禁止饮食，罚款500新元",
        "在街头乱扔垃圾可被逮捕并处罚款",
        "橙色衣物（出现在特定地点）可能引发误解"
      ]
    },
    emergency: {
      police: "999", ambulance: "995", fire: "995",
      touristHotline: "+65-1800-736-2000",
      embassies: { "中国大使馆": "+65-6418-0800", "美国大使馆": "+65-6476-9100" },
      hospitals: [{ name: "新加坡综合医院", phone: "+65-6222-3322", address: "Outram Road" }],
      apps: ["myResponder（急救）", "SGSecure（安全警报）", "Grab（打车）"],
      selfDefense: ["遇紧急情况拨打999", "安全门户网站: www.police.gov.sg"]
    },
    lifestyle: {
      food: [
        { name: "麦士威熟食中心", type: "小贩中心", price: "S$", desc: "天天海南鸡饭、炒粿条，正宗狮城味道" },
        { name: "老巴刹夜市", type: "烧烤/沙爹", price: "S$", desc: "周二到周日夜间封路，数十档位沙爹烧烤" },
        { name: "滨海湾金沙购物中心美食", type: "高端餐饮", price: "S$S$S$", desc: "各国米其林餐厅汇聚" }
      ],
      attractions: [
        { name: "滨海湾花园（超级树）", type: "地标", desc: "夜间灯光秀18:45和20:45，免费观看" },
        { name: "普宁山自然保护区", type: "自然", desc: "城市中心热带雨林，时光倒流的感觉", hidden: true },
        { name: "哈芝巷壁画街", type: "街头艺术", desc: "最佳打卡地，色彩鲜艳壁画和boutique小店", hidden: true }
      ],
      festivals: [
        { name: "新加坡大奖赛（F1）", date: "9月夜间赛", desc: "全球唯一夜间F1赛事，市区街道赛道" },
        { name: "农历新年牛车水", date: "1-2月", desc: "华人农历新年庆典，灯笼彩饰装点" }
      ],
      customs: ["用餐时用餐巾或包包占座是本地文化", "收取小费不是惯例", "公共场合语音通话时保持音量适中"],
      transport: "MRT地铁网络四通八达，Ez-Link卡通用，Grab打车方便实惠。"
    }
  },

  "seoul": {
    id: "seoul",
    name: "首尔",
    nameEn: "Seoul",
    country: "韩国",
    countryEn: "South Korea",
    continent: "亚洲",
    lat: 37.5665, lng: 126.9780,
    flag: "🇰🇷",
    image: "https://picsum.photos/seed/seoul/800/400",
    overview: "首尔是东亚最安全的大城市之一，治安良好，夜生活活跃，但需注意朝鲜半岛地缘政治背景。",
    safety: {
      overall: 84, grade: "A-",
      grades: {
        robbery: { score: 90, label: "抢劫", desc: "街头抢劫罕见，城市整体安全" },
        homicide: { score: 90, label: "凶杀", desc: "凶杀率低，社会治安良好" },
        traffic: { score: 68, label: "交通", desc: "交通拥堵，行人注意交叉路口，驾驶文化较激进" },
        theft: { score: 80, label: "盗窃", desc: "人多场所注意随身物品，扒窃有记录" },
        scam: { score: 82, label: "诈骗", desc: "针对外国人的出租车欺客偶有发生" },
        drugs: { score: 92, label: "毒品", desc: "对毒品管控严格，处罚重" },
        natural: { score: 72, label: "自然灾害", desc: "夏季台风和洪涝，冬季大雪" },
        political: { score: 70, label: "政治稳定", desc: "与朝鲜关系紧张，但实际冲突风险低" }
      },
      hotspots: [
        { area: "弘大夜间", risk: "低中", desc: "年轻人聚集，饮酒后纠纷偶有发生" },
        { area: "梨泰院", risk: "低中", desc: "2022年踩踏事件后加强管控，注意人流密集时段" }
      ],
      safeAreas: ["江南区", "清潭洞", "光化门广场", "北村韩屋村"],
      history: "朝鲜战争（1950-53年）后重建，现为韩国经济文化中心。",
      tips: [
        "T-Money交通卡通用地铁、公交、出租车",
        "深夜独自乘坐出租车建议使用Kakao Taxi",
        "手机随时保持充电，满街有免费充电站",
        "餐厅通常免费提供水和小菜（反复点取无需额外费用）"
      ]
    },
    emergency: {
      police: "112", ambulance: "119", fire: "119",
      touristHotline: "+82-2-1330",
      embassies: { "中国大使馆": "+82-2-738-1333", "美国大使馆": "+82-2-397-4114" },
      hospitals: [{ name: "首尔大学医院（国际部）", phone: "+82-2-2072-2114", address: "钟路区大学路101号" }],
      apps: ["Kakao Map（导航）", "Kakao Taxi（打车）", "Naver翻译"],
      selfDefense: ["紧急情况拨打112（警察）或119（急救）", "地铁站均有安全中心"]
    },
    lifestyle: {
      food: [
        { name: "广藏市场", type: "传统市场", price: "₩", desc: "活章鱼、绿豆煎饼、麻辣拌，老首尔味道" },
        { name: "弘大小吃街", type: "街头小食", price: "₩", desc: "年糕炒、炸鸡、糖饼，年轻人最爱" },
        { name: "三清洞韩定食", type: "韩式套餐", price: "₩₩₩", desc: "传统韩国宫廷料理体验" }
      ],
      attractions: [
        { name: "景福宫（日出换岗仪式）", type: "历史", desc: "着古装入场半价，每日10:00和14:00换岗" },
        { name: "北岳山城郭夜间徒步", type: "户外", desc: "夜间城郭徒步，俯瞰首尔夜景，需提前预约", hidden: true },
        { name: "乙支路印刷街", type: "小众文化", desc: "老式印刷厂改造的hipster咖啡文化区", hidden: true }
      ],
      festivals: [
        { name: "首尔灯节", date: "11月", desc: "清溪川灯火节，数千盏彩灯照亮城市" },
        { name: "樱花节（汝矣岛）", date: "4月初", desc: "汝矣岛樱花大道，首尔最美赏樱胜地" }
      ],
      customs: ["双手奉递和接收物品", "年长者先用餐", "脱鞋进家门和部分餐厅", "饮酒时不给自己倒酒"],
      transport: "地铁网络极其完善，T-Money卡通用，Kakao Taxi叫车安全可靠。"
    }
  },

  "osaka": {
    id: "osaka",
    name: "大阪",
    nameEn: "Osaka",
    country: "日本",
    countryEn: "Japan",
    continent: "亚洲",
    lat: 34.6937, lng: 135.5023,
    flag: "🇯🇵",
    image: "https://picsum.photos/seed/osaka/800/400",
    overview: "大阪是日本第二大城市，以美食闻名全球，治安极佳，人情味浓厚，是旅行者最喜爱的日本城市之一。",
    safety: {
      overall: 87, grade: "A",
      grades: {
        robbery: { score: 94, label: "抢劫", desc: "街头犯罪极少，全球最安全城市之一" },
        homicide: { score: 95, label: "凶杀", desc: "凶杀率极低" },
        traffic: { score: 74, label: "交通", desc: "交通复杂，注意单行道和自行车道" },
        theft: { score: 87, label: "盗窃", desc: "道顿堀、心斋桥等繁华地段需注意随身物品" },
        scam: { score: 88, label: "诈骗", desc: "低风险，偶有针对外国人的过度收费" },
        drugs: { score: 95, label: "毒品", desc: "日本对毒品零容忍" },
        natural: { score: 42, label: "自然灾害", desc: "地震（大阪2018年6.1级地震造成损失）、台风风险高" },
        political: { score: 92, label: "政治稳定", desc: "高度稳定" }
      },
      hotspots: [
        { area: "道顿堀夜间", risk: "低中", desc: "人流极密集，扒窃偶有发生，注意背包" },
        { area: "西成区", risk: "中", desc: "历史上的贫困区，虽已改善，夜间仍需注意" }
      ],
      safeAreas: ["梅田", "心斋桥", "北堀江", "帝塚山"],
      history: "大阪是日本古代经济中心，二战时遭受轰炸，战后迅速重建成为现代都市。",
      tips: [
        "大阪的自动扶梯站立靠右（与东京相反）",
        "尝试章鱼小丸子时小心烫嘴",
        "IC卡（ICOCA）覆盖大阪全区交通",
        "便利店（7-11、全家）提供ATM可取现日元"
      ]
    },
    emergency: {
      police: "110", ambulance: "119", fire: "119",
      touristHotline: "+81-6-6282-8181",
      embassies: { "中国总领事馆": "+81-6-6445-9481" },
      hospitals: [{ name: "大阪大学附属医院", phone: "+81-6-6879-5111", address: "吹田市山田丘2-15" }],
      apps: ["Safety Tips（灾害预警）", "Google Maps（导航）"],
      selfDefense: ["遇地震立即躲避桌下或承重墙旁", "确认住宿附近避难场所位置"]
    },
    lifestyle: {
      food: [
        { name: "黑门市场", type: "海鲜市场", price: "¥¥", desc: "号称大阪的厨房，海鲜刺身、烤扇贝现场即食" },
        { name: "道顿堀章鱼小丸子", type: "大阪小吃", price: "¥", desc: "章鱼小丸子发源地，章鱼饼、大阪烧必尝" },
        { name: "鶴橋韩国城烤肉", type: "烧烤", price: "¥¥", desc: "大阪在日韩国人聚居地，正宗韩式烤肉低价实惠" }
      ],
      attractions: [
        { name: "大阪城公园樱花", type: "历史+自然", desc: "春季600棵樱花树盛放，护城河倒影绝美" },
        { name: "中崎町复古街", type: "小众", desc: "保留昭和时代建筑的古着和咖啡街区", hidden: true },
        { name: "天保山摩天轮+海遊館", type: "家庭", desc: "海遊館是全球最大水族馆之一" }
      ],
      festivals: [
        { name: "天神祭", date: "7月24-25日", desc: "日本三大祭之一，1000年历史的水上巡行和焰火大会" },
        { name: "大阪光之盛典", date: "12月", desc: "中之岛公园灯光艺术节" }
      ],
      customs: ["大阪人说话直接幽默，不同于东京的含蓄", "问路时大阪人热情帮忙是常态", "吃饭时可以发出声音表示享受"],
      transport: "地铁（大阪Metro）、JR环状线、私铁（阪急、阪神）组成完善网络，IC卡通用。"
    }
  },

  "mumbai": {
    id: "mumbai",
    name: "孟买",
    nameEn: "Mumbai",
    country: "印度",
    countryEn: "India",
    continent: "亚洲",
    lat: 19.0760, lng: 72.8777,
    flag: "🇮🇳",
    image: "https://picsum.photos/seed/mumbai/800/400",
    overview: "印度的经济首都，充满活力与混乱并存，对于有经验的旅行者是迷人的目的地，但需要做足准备。",
    safety: {
      overall: 52, grade: "B-",
      grades: {
        robbery: { score: 55, label: "抢劫", desc: "街头抢劫和拉包有记录，人多场所需紧握包包" },
        homicide: { score: 62, label: "凶杀", desc: "凶杀率较低，有组织犯罪存在但针对游客少" },
        traffic: { score: 30, label: "交通", desc: "交通混乱，行人危险极高，事故率高" },
        theft: { score: 48, label: "盗窃", desc: "扒窃较普遍，火车、集市和旅游景点需特别注意" },
        scam: { score: 42, label: "诈骗", desc: "针对外国人的出租车诈骗、宝石诈骗等较常见" },
        drugs: { score: 65, label: "毒品", desc: "地下毒品交易存在，但执法较严" },
        natural: { score: 40, label: "自然灾害", desc: "季风洪涝（6-9月）、热浪风险高" },
        political: { score: 60, label: "政治稳定", desc: "偶有宗教和种族紧张局势，大型示威" }
      },
      hotspots: [
        { area: "达拉维（亚洲最大贫民窟）", risk: "中", desc: "建议随导游参观，不要单独前往" },
        { area: "科拉巴深夜", risk: "中", desc: "旅游区夜间需注意" },
        { area: "火车站（超载高峰期）", risk: "高", desc: "早晚高峰每平方米人数极高，被推落站台的事故有记录" }
      ],
      safeAreas: ["班德拉（Bandra）", "卡拉庄（Colaba）白天", "Juhu海滩"],
      history: "殖民时代港口城市，1993年连环爆炸案，2008年孟买恐怖袭击，均已恢复。",
      tips: [
        "预约Uber/Ola，避免街头出租车（计价器问题）",
        "女性旅行者建议穿着保守，避免深夜独行",
        "饮用水只喝瓶装水，避免冰块",
        "季风季节（6-9月）携带雨具，城市易涝"
      ]
    },
    emergency: {
      police: "100", ambulance: "108", fire: "101",
      touristHotline: "+91-22-2287-3007",
      embassies: { "中国总领事馆": "+91-22-2369-0008", "美国总领事馆": "+91-22-2363-3611" },
      hospitals: [{ name: "孟买亚洲心脏医院（国际部）", phone: "+91-22-6698-6666", address: "Andheri East" }],
      apps: ["Uber/Ola（打车必备）", "Zomato（外卖）", "BMTC（公交）"],
      selfDefense: ["背包放在身前", "护照存酒店保险箱携带复印件", "不在公开场合显摆手机和相机"]
    },
    lifestyle: {
      food: [
        { name: "维多利亚火车站附近Vada Pav摊", type: "街头小食", price: "₹", desc: "孟买的灵魂小吃，土豆饼夹面包，从10卢比起" },
        { name: "Leopold Cafe", type: "历史餐吧", price: "₹₹", desc: "1871年开业的经典地标，曾是2008年袭击现场" },
        { name: "Trishna餐厅", type: "海鲜", price: "₹₹₹", desc: "奶油蟹和调味虾，孟买海鲜顶级体验" }
      ],
      attractions: [
        { name: "印度门（Gateway of India）", type: "地标", desc: "殖民时代地标，清晨游客少，夜晚灯光璀璨" },
        { name: "达拉维贫民窟导览", type: "社会观察", desc: "Reality Tours等机构提供负责任的导览体验", hidden: true },
        { name: "Dhobi Ghat洗衣场", type: "文化", desc: "世界最大露天洗衣场，拥有独特的城市景观", hidden: true }
      ],
      festivals: [
        { name: "象神节（Ganesh Chaturthi）", date: "8-9月", desc: "10天盛典，最后一天将象神神像送入大海，震撼壮观" },
        { name: "排灯节（Diwali）", date: "10-11月", desc: "全城灯火辉煌，甜食交换，烟花绚丽" }
      ],
      customs: ["右手进食，左手不洁净", "进寺庙需脱鞋", "点头可能代表是或只是确认", "素食主义者很普遍"],
      transport: "城郊铁路（Local Train）是主要通勤工具，高峰期极拥挤；Uber/Ola在市区实用。"
    }
  },

  "delhi": {
    id: "delhi",
    name: "新德里",
    nameEn: "New Delhi",
    country: "印度",
    countryEn: "India",
    continent: "亚洲",
    lat: 28.6139, lng: 77.2090,
    flag: "🇮🇳",
    image: "https://picsum.photos/seed/delhi/800/400",
    overview: "印度首都，历史遗迹与现代都市交融，污染问题严重，女性旅行需额外注意安全。",
    safety: {
      overall: 45, grade: "C+",
      grades: {
        robbery: { score: 48, label: "抢劫", desc: "街头犯罪有记录，旅游区较集中" },
        homicide: { score: 55, label: "凶杀", desc: "凶杀率高于全国平均，帮派活动存在" },
        traffic: { score: 28, label: "交通", desc: "交通事故死亡率全国最高之一，混乱拥堵" },
        theft: { score: 45, label: "盗窃", desc: "扒窃、摩托飞车抢包较普遍" },
        scam: { score: 38, label: "诈骗", desc: "针对外国人的旅游诈骗极为普遍，出租车、宝石店" },
        drugs: { score: 58, label: "毒品", desc: "地下交易存在，陌生人提供的食物/饮料要拒绝" },
        natural: { score: 35, label: "自然灾害", desc: "严重空气污染（AQI常超500）、夏季热浪（45°C+）" },
        political: { score: 55, label: "政治稳定", desc: "示威游行频繁，宗教敏感地区注意" }
      },
      hotspots: [
        { area: "老德里（Paharganj）夜间", risk: "高", desc: "背包客聚集但犯罪率高，独行危险" },
        { area: "尼扎姆丁周边", risk: "中高", desc: "历史区人多混乱，扒窃频发" },
        { area: "夜间出租车", risk: "高", desc: "女性禁止乘坐无认证的夜间出租车" }
      ],
      safeAreas: ["Connaught Place（白天）", "外交官区（Chanakyapuri）", "赛克特（Saket）商场周边"],
      history: "德里苏丹国、莫卧儿帝国都城，1947年印巴分治引发大规模暴力冲突。",
      tips: [
        "女性旅行者建议结伴而行，避免深夜外出",
        "出租车坚持使用Uber/Ola，拒绝陌生人引荐",
        "冬季（11月-2月）空气污染严重，携带N95口罩",
        "不要接受陌生人请喝的茶（已记录多起迷药案例）"
      ]
    },
    emergency: {
      police: "100", ambulance: "102", fire: "101",
      touristHotline: "+91-11-2332-8044",
      embassies: { "中国大使馆": "+91-11-2611-2345", "美国大使馆": "+91-11-2419-8000" },
      hospitals: [{ name: "阿波罗医院（Delhi）", phone: "+91-11-7179-1090", address: "Sarita Vihar" }],
      apps: ["Uber（必备）", "Google Maps（导航）", "AQI India（空气质量）"],
      selfDefense: ["护照存酒店保险箱", "随时携带N95口罩", "女性下载iSafe等紧急呼救App"]
    },
    lifestyle: {
      food: [
        { name: "Karim's餐厅（贾玛清真寺旁）", type: "莫卧儿菜", price: "₹₹", desc: "1913年开业，传奇烤肉和Nihari炖牛肉" },
        { name: "Chandni Chowk街头小吃", type: "北印度小食", price: "₹", desc: "Jalebi甜圈、Paranthe Wali Gali煎饼" },
        { name: "INA市场", type: "国际食材", price: "₹₹", desc: "南亚规模最大的国际食材市场" }
      ],
      attractions: [
        { name: "红堡（黎明参观）", type: "历史", desc: "莫卧儿时代宏伟宫殿，清晨光线绝美" },
        { name: "洛迪园（Lodhi Garden）晨练", type: "公园", desc: "15世纪陵墓群中间的城市公园，晨间散步极佳", hidden: true },
        { name: "Dilli Haat手工艺市集", type: "购物文化", desc: "全国各州手工艺品聚集，固定价格无需砍价", hidden: true }
      ],
      festivals: [
        { name: "排灯节焰火", date: "10-11月", desc: "全城灯火通明，但同期空污加剧" },
        { name: "洒红节（Holi）", date: "3月", desc: "彩色粉末狂欢，需保护相机和眼睛" }
      ],
      customs: ["进清真寺和神庙需脱鞋覆头", "与陌生人握手可先询问意愿（部分女性不与异性握手）", "左手不用于传递食物"],
      transport: "德里地铁覆盖广，Uber/Ola安全可靠，避免非正规rickshaw报价。"
    }
  },

  "kuala_lumpur": {
    id: "kuala_lumpur",
    name: "吉隆坡",
    nameEn: "Kuala Lumpur",
    country: "马来西亚",
    countryEn: "Malaysia",
    continent: "亚洲",
    lat: 3.1390, lng: 101.6869,
    flag: "🇲🇾",
    image: "https://picsum.photos/seed/kl/800/400",
    overview: "马来西亚首都，多民族文化融合，现代化程度高，治安在东南亚属中上水平。",
    safety: {
      overall: 62, grade: "B",
      grades: {
        robbery: { score: 60, label: "抢劫", desc: "摩托飞车抢包在繁华街道有记录，保护手袋" },
        homicide: { score: 70, label: "凶杀", desc: "凶杀率中等，部分区域帮派活动存在" },
        traffic: { score: 50, label: "交通", desc: "交通拥堵，摩托车多，行人需注意" },
        theft: { score: 58, label: "盗窃", desc: "扒窃在购物中心和旅游区常见" },
        scam: { score: 62, label: "诈骗", desc: "出租车不打表、假货诈骗常见" },
        drugs: { score: 72, label: "毒品", desc: "毒品持有可判死刑，风险极高" },
        natural: { score: 65, label: "自然灾害", desc: "洪涝（东海岸），东南亚雾霾季节" },
        political: { score: 68, label: "政治稳定", desc: "政治较稳定，偶有示威游行" }
      },
      hotspots: [
        { area: "加冷（Chow Kit）", risk: "高", desc: "夜间治安差，毒品和性交易区域" },
        { area: "苏丹依斯迈路夜间", risk: "中", desc: "摩托飞车抢包常见区域" }
      ],
      safeAreas: ["KLCC双子塔周边", "孟沙（Bangsar）", "蒙娜拉（Mont Kiara）"],
      history: "英国殖民时代锡矿城市，1957年独立，现为东南亚重要金融中心。",
      tips: [
        "包包放在身前，不要挂在背后或椅背上",
        "坚持使用Grab打车，避免街头出租车不打表",
        "进清真寺需穿长衣，女性需覆头",
        "榴莲虽气味强烈，但公共交通上禁止携带"
      ]
    },
    emergency: {
      police: "999", ambulance: "999", fire: "994",
      touristHotline: "+60-3-2615-8000",
      embassies: { "中国大使馆": "+60-3-2163-4146", "美国大使馆": "+60-3-2168-5000" },
      hospitals: [{ name: "吉隆坡国际医院", phone: "+60-3-2691-1966", address: "Ampang" }],
      apps: ["Grab（打车/外卖）", "Waze（导航）", "Google Translate"],
      selfDefense: ["不在街边路边包包展示钱财", "快餐店或商场就餐看管好手机"]
    },
    lifestyle: {
      food: [
        { name: "Jalan Alor夜市", type: "夜市", price: "RM", desc: "各式烧烤、炒粿条、龙虾、榴莲等，聚集所有马来美食" },
        { name: "马来西亚肉骨茶", type: "特色", price: "RM", desc: "新鲜猪骨炖煮加中药香料，早餐经典" },
        { name: "Little India印度饭焦", type: "印度菜", price: "RM", desc: "香蕉叶盛饭，咖喱蔬菜拼盘，正宗南印度风味" }
      ],
      attractions: [
        { name: "双子塔空桥（提前网络预约）", type: "地标", desc: "第41层空中连桥，俯瞰KL全景，每日有限名额" },
        { name: "Brickfields壁画街", type: "街头艺术", desc: "小印度区彩色壁画和街头艺术，拍照圣地", hidden: true },
        { name: "Carcosa Seri Negara下午茶", type: "历史", desc: "英国殖民地总督官邸改造的豪华酒店，殖民风格下午茶", hidden: true }
      ],
      festivals: [
        { name: "大宝森节（Thaipusam）", date: "1-2月", desc: "印度教节日，信徒用铁钩穿刺皮肤进行苦行，震撼场面" },
        { name: "槟城乔治市文化节", date: "7月（周边城市）", desc: "吉隆坡附近，世界文化遗产城市的艺术庆典" }
      ],
      customs: ["马来人右手交物品，不用左手", "清真寺参观需着装保守", "可以与不同族裔朋友混搭，多元文化是常态"],
      transport: "LRT/MRT/KL Monorail组成城市轨道网，Grab是最安全出行方式，KLIA Express往返机场。"
    }
  },

  "hongkong": {
    id: "hongkong",
    name: "香港",
    nameEn: "Hong Kong",
    country: "中国香港",
    countryEn: "Hong Kong, China",
    continent: "亚洲",
    lat: 22.3193, lng: 114.1694,
    flag: "🇭🇰",
    image: "https://picsum.photos/seed/hongkong/800/400",
    overview: "国际金融中心，交通便捷，饮食多元，整体治安良好，是亚洲最方便旅行的城市之一。",
    safety: {
      overall: 83, grade: "A-",
      grades: {
        robbery: { score: 88, label: "抢劫", desc: "街头犯罪较少，但人多场所注意随身物品" },
        homicide: { score: 90, label: "凶杀", desc: "凶杀率低" },
        traffic: { score: 72, label: "交通", desc: "驾驶靠左，行人注意方向，街道繁忙" },
        theft: { score: 80, label: "盗窃", desc: "旺角、尖沙咀等繁华区扒窃有记录" },
        scam: { score: 78, label: "诈骗", desc: "电子产品售卖诈骗、换钱局注意" },
        drugs: { score: 85, label: "毒品", desc: "管控较严，但夜生活区域存在" },
        natural: { score: 50, label: "自然灾害", desc: "台风（6-10月）和山泥倾泻风险" },
        political: { score: 60, label: "政治稳定", desc: "2019年以来政治局势有变化，公众集会受限" }
      },
      hotspots: [
        { area: "旺角夜间", risk: "低中", desc: "人流极密，扒窃发生，深夜酒后纠纷" },
        { area: "尖沙咀电子商场", risk: "低中", desc: "警惕非正规电子商铺欺客" }
      ],
      safeAreas: ["中环", "金钟", "太古城", "浅水湾"],
      history: "英国殖民地至1997年回归，现为中国特别行政区，保持独特法律体系。",
      tips: [
        "台风信号8号或以上：所有交通停运，留在室内",
        "八达通卡通用交通、便利店、餐厅",
        "餐厅普遍收取10%服务费，无需额外小费",
        "MPF（港澳通行证）和普通护照入境规则不同"
      ]
    },
    emergency: {
      police: "999", ambulance: "999", fire: "999",
      touristHotline: "+852-2508-1234",
      embassies: { "驻港内地机构": "+852-3413-2300（中国驻港联络办）", "美国总领事馆": "+852-2523-9011" },
      hospitals: [{ name: "香港玛丽医院", phone: "+852-2255-3838", address: "薄扶林道102号" }],
      apps: ["MyObservatory（台风/天气）", "八达通App", "HKTaxi"],
      selfDefense: ["台风时关注天文台预报", "遇扒窃立即报警（999）"]
    },
    lifestyle: {
      food: [
        { name: "兰芳园（中环）", type: "港式茶餐厅", price: "HK$", desc: "1952年创立，丝袜奶茶和菠萝油的发源地" },
        { name: "庙街夜市大排档", type: "粤式夜市", price: "HK$", desc: "炒螃蟹、白灼虾、炒贵刁，地道香港夜宵" },
        { name: "Tim Ho Wan（添好运）", type: "港式点心", price: "HK$HK$", desc: "米其林一星点心，猪肉酥皮叉烧包名震天下" }
      ],
      attractions: [
        { name: "太平山顶（清晨）", type: "景观", desc: "清晨6-7点无人，维多利亚港晨雾中最美的一刻" },
        { name: "大澳渔村", type: "小众", desc: "大屿山棚屋渔村，香港最后的渔民聚居地", hidden: true },
        { name: "西九龙M+博物馆", type: "艺术", desc: "亚洲最大当代视觉文化博物馆，俯瞰维港的绝美景观", hidden: true }
      ],
      festivals: [
        { name: "香港艺术节", date: "2-3月", desc: "世界级艺术演出，话剧、歌剧、舞蹈年度盛事" },
        { name: "维多利亚港烟火（农历新年）", date: "1-2月", desc: "维港跨年焰火，全球最壮观烟花秀之一" }
      ],
      customs: ["尖沙咀餐厅普遍接受国语", "叫服务生说'唔该'（粤语谢谢）", "加零0.5在本票金额上方"],
      transport: "地铁（MTR）全球效率最高之一，八达通通用各类交通，天星小轮渡海别有风情。"
    }
  },

  "taipei": {
    id: "taipei",
    name: "台北",
    nameEn: "Taipei",
    country: "中国台湾",
    countryEn: "Taiwan, China",
    continent: "亚洲",
    lat: 25.0330, lng: 121.5654,
    flag: "🇹🇼",
    image: "https://picsum.photos/seed/taipei/800/400",
    overview: "台北是亚洲最友善的旅游城市之一，夜市文化丰富，交通便利，人情温暖。",
    safety: {
      overall: 85, grade: "A-",
      grades: {
        robbery: { score: 90, label: "抢劫", desc: "犯罪率低，街头抢劫罕见" },
        homicide: { score: 89, label: "凶杀", desc: "凶杀率极低" },
        traffic: { score: 60, label: "交通", desc: "摩托车多，行人需小心，交叉口复杂" },
        theft: { score: 82, label: "盗窃", desc: "繁华夜市区需注意随身物品" },
        scam: { score: 85, label: "诈骗", desc: "整体低风险，偶有旅游区过度消费" },
        drugs: { score: 88, label: "毒品", desc: "毒品管控严格" },
        natural: { score: 38, label: "自然灾害", desc: "台风（7-10月）、地震（位于环太平洋火山带）" },
        political: { score: 75, label: "政治稳定", desc: "两岸关系持续紧张，实际冲突风险短期低" }
      },
      hotspots: [
        { area: "万华区（夜间）", risk: "低中", desc: "历史老区，夜间需注意" }
      ],
      safeAreas: ["信义区", "大安区", "中山区", "内湖"],
      history: "二战后为国民政府所在地，现为华语文化创意中心。",
      tips: [
        "悠游卡（EasyCard）通用全台交通和便利店",
        "夜市用餐注意卫生，选人多的摊位",
        "台风警报后坚决不外出",
        "便利店（7-11、全家、萊爾富）提供各类服务"
      ]
    },
    emergency: {
      police: "110", ambulance: "119", fire: "119",
      touristHotline: "+886-2-2717-3737",
      embassies: { "旅行注意：无邦交": "使用各国贸易办事处联系本国领事" },
      hospitals: [{ name: "台大医院国际医疗中心", phone: "+886-2-2312-3456", address: "中正区中山南路7号" }],
      apps: ["台湾气象（台风预警）", "Google Maps（捷运路线）", "Uber/LINE Taxi"],
      selfDefense: ["台风时绝对不外出", "地震来时远离玻璃，躲在桌下"]
    },
    lifestyle: {
      food: [
        { name: "士林夜市", type: "夜市", price: "NT$", desc: "台北最大夜市，大鸡排、蚵仔煎、珍珠奶茶发源地" },
        { name: "饶河街夜市", type: "夜市", price: "NT$", desc: "规模适中，人潮较少，胡椒饼是招牌" },
        { name: "永康街牛肉面", type: "台湾经典", price: "NT$NT$", desc: "台湾本地人公认最正宗的红烧牛肉面街区" }
      ],
      attractions: [
        { name: "台北101日落时分", type: "地标", desc: "傍晚登顶，夕阳西下与城市灯光渐亮的交接时刻" },
        { name: "猫空缆车+茶园", type: "小众体验", desc: "乘缆车到山顶茶园，俯瞰台北盆地，品铁观音", hidden: true },
        { name: "迪化街年货大街", type: "文化", desc: "保存完好的日治时代南洋风格建筑，过年前最热闹", hidden: true }
      ],
      festivals: [
        { name: "平溪天灯节", date: "元宵节", desc: "台北近郊放天灯许愿，入选全球十大节日" },
        { name: "基隆中元节鬼节", date: "农历7月", desc: "华人世界规模最大的鬼节祭典，独特文化体验" }
      ],
      customs: ["敬酒时晚辈先喝", "坐博爱座真的不要坐（会有人提醒）", "便利店24小时提供各种服务，是真正的城市命脉"],
      transport: "捷运（MRT）覆盖全台北，悠游卡通用，YouBike自行车租借覆盖率极高。"
    }
  },

  "jakarta": {
    id: "jakarta",
    name: "雅加达",
    nameEn: "Jakarta",
    country: "印度尼西亚",
    countryEn: "Indonesia",
    continent: "亚洲",
    lat: -6.2088, lng: 106.8456,
    flag: "🇮🇩",
    image: "https://picsum.photos/seed/jakarta/800/400",
    overview: "印尼首都（迁都进行中），东南亚最大城市之一，交通极度拥堵，但文化多元，值得探索。",
    safety: {
      overall: 50, grade: "B-",
      grades: {
        robbery: { score: 52, label: "抢劫", desc: "摩托飞车抢包较普遍，显贵物品易成目标" },
        homicide: { score: 60, label: "凶杀", desc: "凶杀率中等，局部区域帮派存在" },
        traffic: { score: 25, label: "交通", desc: "全球最严重交通拥堵城市之一，摩托车洪流危险" },
        theft: { score: 50, label: "盗窃", desc: "公共场所扒窃多，手机、钱包需保管好" },
        scam: { score: 55, label: "诈骗", desc: "出租车欺客、兑换诈骗常见" },
        drugs: { score: 62, label: "毒品", desc: "毒品持有最高判死刑，不可触碰" },
        natural: { score: 35, label: "自然灾害", desc: "洪涝频发（季节性）、附近火山群（须弥山等）、地震" },
        political: { score: 60, label: "政治稳定", desc: "整体稳定，选举期间偶有示威" }
      },
      hotspots: [
        { area: "火车站附近", risk: "高", desc: "扒窃和摩托车抢包高发区" },
        { area: "Senen区", risk: "高", desc: "治安较差，建议避开" }
      ],
      safeAreas: ["SCBD金融区", "Kemang", "Senayan"],
      history: "荷兰殖民时代巴达维亚，1945年独立，现为经济中心（迁都努桑塔拉进行中）。",
      tips: [
        "坚持使用Gojek/Grab，拒绝街头出租车报价",
        "行人步道不多，尽量避免长距离步行",
        "斋戒月（Ramadan）期间白天在公共场合饮食需谨慎",
        "包包放身前，摩托车从后方抢夺是常见手法"
      ]
    },
    emergency: {
      police: "110", ambulance: "119", fire: "113",
      touristHotline: "+62-21-5708000",
      embassies: { "中国大使馆": "+62-21-5761038", "美国大使馆": "+62-21-5083-1000" },
      hospitals: [{ name: "Pondok Indah医院", phone: "+62-21-765-7525", address: "Pondok Indah" }],
      apps: ["Gojek（打车/外卖）", "Grab（打车）", "Google Maps"],
      selfDefense: ["白天保持警觉，夜间减少不必要外出", "在咖啡馆将笔记本电脑用锁链固定"]
    },
    lifestyle: {
      food: [
        { name: "Waroeng Spesial Sambal", type: "印尼菜", price: "Rp", desc: "超辣参巴酱配各类主食，本地人最爱" },
        { name: "Kota Tua历史区街头小吃", type: "小吃", price: "Rp", desc: "沙爹、Kerak Telor传统蛋饼、Es Doger椰奶刨冰" },
        { name: "Sate Khas Senayan", type: "烤串", price: "Rp Rp", desc: "雅加达最著名沙爹连锁，鸡肉羊肉各有特色" }
      ],
      attractions: [
        { name: "独立广场（Monas纪念碑）", type: "地标", desc: "印尼独立象征，137米高黄金塔尖" },
        { name: "Kota Tua荷兰殖民老城", type: "历史", desc: "17世纪荷兰巴达维亚时代建筑群保存完好" },
        { name: "Glodok华人区", type: "文化", desc: "历史最长的华人聚居区，庙宇和传统商铺林立", hidden: true }
      ],
      festivals: [
        { name: "开斋节（Eid al-Fitr）", date: "斋戒月结束", desc: "全国最重要节日，雅加达人口减半返乡，体验近乎空城" },
        { name: "雅加达特别日（Jakarta Fair）", date: "6月", desc: "印尼规模最大博览会，美食、商品、表演汇聚" }
      ],
      customs: ["右手传递和接收物品", "进清真寺覆头着长衣", "直视眼神被视为挑衅，保持适当眼神接触"],
      transport: "TransJakarta BRT公交系统覆盖全市，MRT近年新建，Gojek摩托打车快速穿越拥堵。"
    }
  },

  "ho_chi_minh": {
    id: "ho_chi_minh",
    name: "胡志明市",
    nameEn: "Ho Chi Minh City",
    country: "越南",
    countryEn: "Vietnam",
    continent: "亚洲",
    lat: 10.8231, lng: 106.6297,
    flag: "🇻🇳",
    image: "https://picsum.photos/seed/hochiminh/800/400",
    overview: "越南最大城市，充满活力，街头文化丰富，扒窃是主要安全问题，整体旅行体验良好。",
    safety: {
      overall: 55, grade: "B-",
      grades: {
        robbery: { score: 50, label: "抢劫", desc: "摩托飞车抢包是头号问题，挂包常被抢走" },
        homicide: { score: 70, label: "凶杀", desc: "针对游客的暴力犯罪少" },
        traffic: { score: 30, label: "交通", desc: "摩托车洪流过马路是一门艺术，均速通过即可" },
        theft: { score: 52, label: "盗窃", desc: "咖啡馆桌面物品被抢的情况有记录" },
        scam: { score: 50, label: "诈骗", desc: "出租车诈骗、换钱诈骗极为常见" },
        drugs: { score: 65, label: "毒品", desc: "毒品处罚极重，包括死刑" },
        natural: { score: 55, label: "自然灾害", desc: "洪涝（雨季）、偶有台风影响" },
        political: { score: 70, label: "政治稳定", desc: "政治稳定，一党执政体制" }
      },
      hotspots: [
        { area: "第一郡Ben Thanh市场周边", risk: "中", desc: "旅游中心扒窃和摩托抢包最集中区域" },
        { area: "Bui Vien背包街夜间", risk: "中", desc: "酒醉后纠纷和盗窃发生率高" }
      ],
      safeAreas: ["第二郡（Thao Dien）", "第七郡（富美兴）"],
      history: "前西贡，1975年统一，现为越南经济中心和旅游枢纽。",
      tips: [
        "包包背在身前，手机不要放裤兜",
        "过马路保持匀速直行，不要突然停步",
        "出租车使用Grab或Mai Linh/Vinasun正规公司",
        "兑换美元使用银行或金行，拒绝街头兑换"
      ]
    },
    emergency: {
      police: "113", ambulance: "115", fire: "114",
      touristHotline: "+84-28-38-292-828",
      embassies: { "中国总领事馆": "+84-28-3829-2463", "美国总领事馆": "+84-28-3520-4200" },
      hospitals: [{ name: "FV医院（法越医院）", phone: "+84-28-5411-3333", address: "第7郡" }],
      apps: ["Grab（打车/外卖）", "Google Maps", "XE Currency（货币换算）"],
      selfDefense: ["挎包挂在与摩托车道相反一侧", "咖啡馆内手机不要放桌上"]
    },
    lifestyle: {
      food: [
        { name: "Pho Hoa（第三郡）", type: "越南河粉", price: "VND", desc: "胡志明最经典的河粉店，清晨5点开始营业" },
        { name: "Ben Thanh市场美食广场", type: "小吃", price: "VND", desc: "越式三明治（Bánh mì）、炸虾饼、椰浆糕" },
        { name: "Bun Bo Hue（顺化牛肉米线）", type: "特色", price: "VND", desc: "比河粉更辣更复杂的米线，是城市的隐藏宝藏" }
      ],
      attractions: [
        { name: "战争遗迹博物馆", type: "历史", desc: "关于越战的深刻展览，带来深层历史反思" },
        { name: "古芝地道（一日游）", type: "历史", desc: "越战时期250公里地下隧道网络，真实震撼" },
        { name: "第四郡街头早市", type: "小众", desc: "本地人才知道的清晨街头早市，凌晨4点开始", hidden: true }
      ],
      festivals: [
        { name: "越南新年（Tet）", date: "1-2月", desc: "春节期间城市空旷（多数人返乡），但活动精彩" },
        { name: "中秋节灯会（第五郡唐人街）", date: "8-9月", desc: "热带中秋，灯笼绚丽，月饼各式各样" }
      ],
      customs: ["双手递接物品", "进寺庙须脱鞋", "宗教场所不要穿暴露衣物", "称赞越南食物让当地人很开心"],
      transport: "Grab打车最安全，摩托Grab更快穿越拥堵，出租车选Mai Linh（绿色）或Vinasun（白色）。"
    }
  },

  "istanbul": {
    id: "istanbul",
    name: "伊斯坦布尔",
    nameEn: "Istanbul",
    country: "土耳其",
    countryEn: "Turkey",
    continent: "亚洲",
    lat: 41.0082, lng: 28.9784,
    flag: "🇹🇷",
    image: "https://picsum.photos/seed/istanbul/800/400",
    overview: "横跨欧亚两洲的古城，文化遗产丰富，旅游业发达，但近年通货膨胀和政治紧张需要关注。",
    safety: {
      overall: 60, grade: "B",
      grades: {
        robbery: { score: 65, label: "抢劫", desc: "旅游区较安全，偏僻区域需注意" },
        homicide: { score: 68, label: "凶杀", desc: "凶杀率中等，对游客的暴力少" },
        traffic: { score: 45, label: "交通", desc: "伊斯坦布尔交通混乱，行人极需注意" },
        theft: { score: 58, label: "盗窃", desc: "旅游区扒窃有记录，大巴扎和集市需注意" },
        scam: { score: 50, label: "诈骗", desc: "擦鞋诈骗、酒吧陷阱（飞单诈骗）极为常见" },
        drugs: { score: 70, label: "毒品", desc: "管控严格" },
        natural: { score: 42, label: "自然灾害", desc: "地震风险高（2023年土耳其大地震提醒）" },
        political: { score: 52, label: "政治稳定", desc: "政治紧张，示威偶有，库尔德问题持续" }
      },
      hotspots: [
        { area: "独立大道酒吧区夜间", risk: "中", desc: "酒吧陷阱诈骗高发，避免陌生人引入无价目表的场所" },
        { area: "大巴扎周边", risk: "中", desc: "扒窃集中地，包包放前方" }
      ],
      safeAreas: ["贝西克塔斯区", "卡迪科伊", "尼沙塔斯"],
      history: "拜占庭帝国首都君士坦丁堡，奥斯曼帝国中心，无数历史遗迹。",
      tips: [
        "拒绝陌生人主动引路，这通常是诈骗前奏",
        "独立大街酒吧，入场前确认有价目表（Menu with prices）",
        "擦鞋男故意丢刷鞋工具是诈骗开场",
        "兑换土耳其里拉使用正规银行"
      ]
    },
    emergency: {
      police: "155", ambulance: "112", fire: "110",
      touristHotline: "+90-212-518-1802",
      embassies: { "中国大使馆": "+90-312-436-0628（安卡拉）", "美国大使馆": "+90-312-455-5555" },
      hospitals: [{ name: "Memorial医院（国际部）", phone: "+90-212-314-6666", address: "Şişli" }],
      apps: ["BiTaksi（出租车）", "Moovit（公交导航）", "Google Translate"],
      selfDefense: ["随时保持对周围环境的警觉", "护照复印件随身携带"]
    },
    lifestyle: {
      food: [
        { name: "Karaköy码头烤鱼三明治（Balık Ekmek）", type: "街头小食", price: "TL", desc: "加拉太桥下新鲜烤鱼夹面包，伊斯坦布尔最具代表性街食" },
        { name: "Karaköy Güllüoğlu甜食店", type: "果仁蜜饼", price: "TL", desc: "伊斯坦布尔最著名的果仁果冻甜饼（Baklava）" },
        { name: "Çiya餐厅（亚洲区卡迪科伊）", type: "安纳托利亚菜", price: "TLTL", desc: "土耳其各地传统美食汇集，是米其林推荐的本地餐厅" }
      ],
      attractions: [
        { name: "圣索菲亚大教堂（清晨参观）", type: "历史", desc: "清晨礼拜时光线最美，避免中午人潮" },
        { name: "法纳尔区（Fener）希腊社区", type: "小众历史", desc: "保存完好的拜占庭时代希腊社区，极少游客", hidden: true },
        { name: "亚洲区卡迪科伊市场", type: "本地生活", desc: "本地人购物区，最真实的伊斯坦布尔日常生活", hidden: true }
      ],
      festivals: [
        { name: "伊斯坦布尔爵士音乐节", date: "7月", desc: "全球顶级爵士表演者汇聚的夏日音乐节" },
        { name: "开斋节（Eid）", date: "按伊斯兰历", desc: "宰牲节期间全城宁静，体验伊斯兰文化" }
      ],
      customs: ["进清真寺脱鞋覆头（女性）", "土耳其茶（Çay）是友谊象征，礼貌接受", "讨价还价是集市文化的一部分"],
      transport: "伊斯坦布尔卡（Istanbul Card）通用地铁、有轨电车、渡轮，Ferry是横跨博斯普鲁斯的独特体验。"
    }
  },

  "tehran": {
    id: "tehran",
    name: "德黑兰",
    nameEn: "Tehran",
    country: "伊朗",
    countryEn: "Iran",
    continent: "亚洲",
    lat: 35.6892, lng: 51.3890,
    flag: "🇮🇷",
    image: "https://picsum.photos/seed/tehran/800/400",
    overview: "伊朗首都，历史文化深厚，当地人极为热情好客，但外国游客需严格遵守当地法律和着装规定。",
    safety: {
      overall: 50, grade: "B-",
      grades: {
        robbery: { score: 62, label: "抢劫", desc: "对游客的抢劫较少，但需保持警觉" },
        homicide: { score: 65, label: "凶杀", desc: "凶杀率中等" },
        traffic: { score: 30, label: "交通", desc: "交通极度混乱，几乎没有交通规则概念" },
        theft: { score: 60, label: "盗窃", desc: "扒窃有记录，市集和公共交通需注意" },
        scam: { score: 58, label: "诈骗", desc: "钱币诈骗、地毯过度推销" },
        drugs: { score: 50, label: "毒品", desc: "伊朗毒品问题严峻，但执法严厉，游客需完全远离" },
        natural: { score: 40, label: "自然灾害", desc: "德黑兰位于活跃地震带，历史上多次强震" },
        political: { score: 38, label: "政治稳定", desc: "国内政治紧张，反政府示威曾遭镇压，中美关系紧张" }
      },
      hotspots: [
        { area: "德黑兰南部老城区", risk: "中", desc: "治安相对较差，外国人需格外注意" },
        { area: "巴扎集市", risk: "中", desc: "人流密集，扒窃风险高" }
      ],
      safeAreas: ["北部高档区（约尔丹、扎法兰尼耶）", "萨阿达巴德宫殿区"],
      history: "波斯帝国后裔，1979年伊斯兰革命彻底改变国家面貌，现受国际制裁。",
      tips: [
        "女性必须佩戴头巾（Hijab），无论国籍",
        "男女在公共场合不得有肢体接触（除非是夫妻）",
        "酒精严格禁止，违者处以鞭刑",
        "不要拍摄军事设施、政府建筑和敏感地点"
      ]
    },
    emergency: {
      police: "110", ambulance: "115", fire: "125",
      touristHotline: "+98-21-6640-5250",
      embassies: { "中国大使馆": "+98-21-2229-0000", "美国大使馆": "美国已撤馆，紧急联系瑞士大使馆" },
      hospitals: [{ name: "德黑兰医科大学医院", phone: "+98-21-6692-2031", address: "德黑兰" }],
      apps: ["Google Maps（部分功能受限）", "Snapp（伊朗版Uber）"],
      selfDefense: ["严格遵守着装法规", "不要接受陌生人的食物或饮料", "随时备有导游或当地联系人"]
    },
    lifestyle: {
      food: [
        { name: "纳戈斯坦传统餐厅", type: "波斯菜", price: "IR", desc: "传统波斯烤肉（Kebab Koobideh）和藏红花米饭" },
        { name: "Tajrish市场美食区", type: "市集食物", price: "IR", desc: "各式伊朗传统小吃、无花果、手工糖" },
        { name: "Dizi炖肉汤", type: "传统汤", price: "IR", desc: "用捣碎的羊肉和鹰嘴豆制作，传统食法用石钵研碎" }
      ],
      attractions: [
        { name: "戈莱斯坦皇宫", type: "历史", desc: "UNESCO世界遗产，波斯王朝宫殿建筑" },
        { name: "德黑兰当代艺术博物馆（TMoCA）", type: "艺术", desc: "拥有西方现代艺术（毕加索、沃霍尔）的罕见收藏", hidden: true }
      ],
      festivals: [
        { name: "诺鲁孜节（Nowruz）", date: "3月20-21日", desc: "波斯新年，持续13天，绝美彩蛋和春季庆典" }
      ],
      customs: ["塔鲁夫（Taarof）：礼节性的谦让拒绝，需要反复邀请才接受", "主人热情款待是文化传统，接受邀请是尊重", "指向他人的脚被视为不礼貌"],
      transport: "德黑兰地铁男女车厢分开（或有专用区），Snapp打车App实用，避免街头无表出租车。"
    }
  }

};
