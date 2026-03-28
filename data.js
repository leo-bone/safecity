
// ============================================================
// SafeCity Global - 全球城市安全数据库
// ============================================================

const CITY_DATABASE = {
  // ===== 亚洲 =====
  "tokyo": {
    id: "tokyo",
    name: "东京",
    nameEn: "Tokyo",
    country: "日本",
    countryEn: "Japan",
    continent: "亚洲",
    lat: 35.6762,
    lng: 139.6503,
    flag: "🇯🇵",
    image: "https://picsum.photos/seed/tokyo/800/400",
    overview: "东京是全球最安全的大城市之一，犯罪率极低，治安良好，但自然灾害风险（地震、台风）需要特别注意。",
    safety: {
      overall: 88,
      grade: "A",
      grades: {
        robbery: { score: 95, label: "抢劫", desc: "极低风险，街头抢劫案极为罕见" },
        homicide: { score: 96, label: "凶杀", desc: "凶杀率全球最低之列，2023年每10万人约0.24起" },
        traffic: { score: 72, label: "交通", desc: "交通密集，行人需注意自行车道，驾驶靠左行" },
        theft: { score: 85, label: "盗窃", desc: "扒窃少见，但繁华地带（新宿、渋谷）需注意随身物品" },
        scam: { score: 90, label: "诈骗", desc: "诈骗风险较低，但存在针对外国人的'友好搭讪'陷阱" },
        drugs: { score: 95, label: "毒品", desc: "日本对毒品零容忍，管控严格" },
        natural: { score: 40, label: "自然灾害", desc: "⚠️ 高风险：地震（位于环太平洋火山带）、台风（7-10月）、海啸" },
        political: { score: 92, label: "政治稳定", desc: "政治稳定，无近期冲突风险" }
      },
      hotspots: [
        { area: "歌舞伎町（新宿）", risk: "中", desc: "夜间娱乐区，存在骚扰、酒吧陷阱风险，建议结伴前往" },
        { area: "上野公园", risk: "低中", desc: "白天安全，夜间避免偏僻角落" },
        { area: "池袋北口", risk: "中", desc: "流浪人员聚集，夜间注意安全" }
      ],
      safeAreas: ["银座", "代官山", "表参道", "六本木Hills周边", "台场"],
      history: "二战期间遭受大规模轰炸，1945年3月东京大轰炸造成重大伤亡。1923年关东大地震死亡约14万人。近年无重大地缘冲突风险。",
      tips: [
        "随时关注气象厅地震预警（下载NHK World或Yahoo! Japan防灾App）",
        "住宿时了解紧急避难场所位置",
        "台风季节（7-10月）及时关注气象预报",
        "深夜独行需谨慎，优先使用最终末班电车前返回",
        "贵重物品存放酒店保险箱",
        "不要在公共场所大声喧哗，尊重当地文化"
      ]
    },
    emergency: {
      police: "110",
      ambulance: "119",
      fire: "119",
      coastguard: "118",
      touristHotline: "+81-3-3503-4141 (JNTO观光局紧急服务)",
      embassies: {
        "中国大使馆": "+81-3-3403-3380",
        "美国大使馆": "+81-3-3224-5000",
        "英国大使馆": "+81-3-5211-1100"
      },
      hospitals: [
        { name: "东京医疗中心（含英文服务）", phone: "+81-3-3411-0111", address: "目黑区東が丘2-5-1" },
        { name: "圣路加国际医院", phone: "+81-3-3541-5151", address: "中央区明石町9-1" }
      ],
      apps: ["Safety tips（地震/海啸预警）", "NHK World（灾害播报）", "Google翻译（离线包）"],
      selfDefense: [
        "随时保持手机充电，保存紧急联系人",
        "记下住所附近警察署位置",
        "地铁内遭遇骚扰可按车厢紧急按钮",
        "遇地震：蹲下、抓住支撑物、保护头部，不要急于外跑"
      ]
    },
    lifestyle: {
      food: [
        { name: "筑地场外市场", type: "海鲜/早餐", price: "💴💴", desc: "最正宗的金枪鱼刺身、海胆丼，清晨5点开始营业", tip: "避开工作日中午人流高峰" },
        { name: "一兰拉面总本店（博多）", type: "拉面", price: "💴💴", desc: "独特单人隔间设计，猪骨汤底经典" },
        { name: "立吃寿司（回转寿司UOBEI）", type: "寿司", price: "💴", desc: "新干线传送带送餐，超新奇体验，价格亲民" },
        { name: "居酒屋深夜食堂体验", type: "日式下酒菜", price: "💴💴", desc: "新宿思い出横丁，昭和风情小巷，烤串+啤酒" },
        { name: "代代木公园野餐（便利店便当）", type: "户外", price: "💴", desc: "7-11/全家便当堪称米其林水准，公园野餐体验极佳" }
      ],
      attractions: [
        { name: "浅草寺&仲见世通", type: "历史文化", desc: "东京最古老寺庙，凌晨5点无人时参拜最为神圣静谧", hidden: false },
        { name: "谷根千（谷中·根津·千駄木）", type: "小众街区", desc: "保留江户时代氛围的老街，猫咖、手工艺品、银座替代品", hidden: true },
        { name: "高円寺骨董市", type: "市集", desc: "每月第一&第三周日举办，淘复古古着和生活杂货圣地", hidden: true },
        { name: "台场自由女神像&彩虹桥夜景", type: "景观", desc: "黄昏时分最佳拍摄角度" },
        { name: "三鹰之森吉卜力美术馆", type: "博物馆", desc: "宫崎骏作品主题，需提前1个月网络抢票" }
      ],
      festivals: [
        { name: "隅田川花火大会", date: "7月最后一个周六", desc: "东京最大烟火大会，提前3小时抢占位置" },
        { name: "上野公园赏樱", date: "3月下旬-4月初", desc: "东京赏樱第一选择，夜樱配日本酒体验绝佳" },
        { name: "三社祭（浅草）", date: "5月第3个周末", desc: "东京三大祭典之一，神轿巡游震撼非凡" },
        { name: "Comiket动漫展", date: "8月&12月", desc: "全球最大同人展，展示日本二次元文化精髓" }
      ],
      customs: [
        "进餐厅前确认是否需要脱鞋",
        "筷子不能插在米饭上（祭祀风俗）",
        "不在走路时进食",
        "地铁内保持安静，手机调静音",
        "收名片需双手接，仔细阅读后妥善收好",
        "小费文化：日本不需要也不应该给小费"
      ],
      transport: "东京轨道交通极为发达，IC卡（Suica/Pasmo）通行全城，建议购买7日JR Pass（外国人专享）探索周边城市。"
    }
  },

  "bangkok": {
    id: "bangkok",
    name: "曼谷",
    nameEn: "Bangkok",
    country: "泰国",
    countryEn: "Thailand",
    continent: "亚洲",
    lat: 13.7563,
    lng: 100.5018,
    flag: "🇹🇭",
    image: "https://picsum.photos/seed/bangkok/800/400",
    overview: "曼谷是东南亚最繁华的都市之一，旅游基础设施完善，但需注意扒窃、诈骗和交通安全问题。",
    safety: {
      overall: 62,
      grade: "B-",
      grades: {
        robbery: { score: 70, label: "抢劫", desc: "夜间偏僻区域有风险，Khaosan Road附近需警惕" },
        homicide: { score: 75, label: "凶杀", desc: "整体较低，但夜间纠纷偶发" },
        traffic: { score: 45, label: "交通", desc: "⚠️ 高风险：交通混乱，摩的事故频发，避免乘坐无证摩的" },
        theft: { score: 55, label: "盗窃", desc: "扒窃是主要问题，拥挤市场、BTS站需高度警惕" },
        scam: { score: 45, label: "诈骗", desc: "⚠️ 高风险：Tuk-tuk诈骗、宝石诈骗、'景点关闭'骗局非常普遍" },
        drugs: { score: 70, label: "毒品", desc: "泰国近年放开部分大麻，但硬性毒品严控，外国人持毒可面临严酷刑罚" },
        natural: { score: 60, label: "自然灾害", desc: "洪涝风险（雨季5-10月），2011年曾发生大规模洪灾" },
        political: { score: 55, label: "政治稳定", desc: "政治局势周期性波动，关注抗议活动区域" }
      },
      hotspots: [
        { area: "Khaosan Road", risk: "中高", desc: "旅游者聚集，扒窃、酒后骚扰、毒品相关事件高发" },
        { area: "帕蓬夜市", risk: "中", desc: "强迫消费、酒水陷阱，进任何场所前确认价格" },
        { area: "火车市场周边小巷", risk: "中", desc: "夜间独行需谨慎" },
        { area: "Min Buri区", risk: "高", desc: "非旅游区，本地犯罪事件较多" }
      ],
      safeAreas: ["素坤逸路（BTS沿线）", "暹罗广场", "曼谷河滨（Near Asiatique）", "通罗区"],
      history: "2010年曼谷政治骚乱造成重大伤亡。近年政治局势总体稳定但仍有波动。历史上曾多次军事政变（最近一次2014年）。",
      tips: [
        "切勿接受陌生人的'免费带路'或Tuk-tuk优惠，这是常见骗局入口",
        "购买任何物品前先确认价格并写下来",
        "乘坐出租车坚持使用Grab App（类似滴滴），避免议价纠纷",
        "不要在寺庙穿暴露服装，备一条沙笼",
        "注意食物中毒风险，选择人流量大、卫生条件好的摊位",
        "雨季随身携带雨具，关注洪水预警"
      ]
    },
    emergency: {
      police: "191",
      ambulance: "1669",
      fire: "199",
      touristPolice: "1155（24小时英语服务）",
      touristHotline: "1672（旅游局投诉热线）",
      embassies: {
        "中国大使馆": "+66-2-245-7032",
        "美国大使馆": "+66-2-205-4000",
        "英国大使馆": "+66-2-305-8333"
      },
      hospitals: [
        { name: "BNH Hospital（最推荐外国人）", phone: "+66-2-686-2700", address: "Silom Road" },
        { name: "Bumrungrad International Hospital", phone: "+66-2-667-1000", address: "Sukhumvit 3" }
      ],
      apps: ["Grab（打车必备）", "LINE（本地通讯）", "Google Maps（离线地图）"],
      selfDefense: [
        "随身携带护照复印件，原件存酒店",
        "包包斜挎于胸前，不使用单肩包",
        "夜间单独出行告知他人行程",
        "遇到强迫推销：坚定说'No thank you'后直接离开"
      ]
    },
    lifestyle: {
      food: [
        { name: "Or Tor Kor市场", type: "本地市场/熟食", price: "฿", desc: "泰国最干净高档的市集，食材新鲜，芒果糯米饭是招牌" },
        { name: "Thip Samai（傍晚后排队）", type: "Pad Thai", price: "฿฿", desc: "曼谷最正宗炒金面，60年老店，番茄酱版本是特色" },
        { name: "Jay Fai（米其林街头小吃）", type: "泰式蟹肉炒蛋", price: "฿฿฿฿", desc: "全球最著名街头小吃，需提前电话预约排队，明显物超所值" },
        { name: "Talad Rot Fai（火车夜市）", type: "夜市", price: "฿฿", desc: "复古风市集，啤酒+烤肉+vintage购物，本地人聚集地" },
        { name: "Chinatown Yaowarat夜市", type: "中泰混合", price: "฿฿", desc: "全球最知名唐人街之一，燕窝、海鲜、泰式烤肉齐聚" }
      ],
      attractions: [
        { name: "大皇宫+卧佛寺", type: "历史文化", desc: "必游，早晨8:30开门第一批进入避开人潮", hidden: false },
        { name: "Iconsiam购物中心内部运河市场", type: "小众体验", desc: "室内仿真水上市场，真实的泰式小食体验", hidden: true },
        { name: "Bang Krachao绿肺骑行", type: "自然", desc: "曼谷市区内'绿色之肺'，渡轮+自行车，逃离城市喧嚣", hidden: true },
        { name: "湄南河夜游", type: "游船", desc: "黄昏乘船欣赏郑王庙灯光倒影，性价比极高" },
        { name: "Chatuchak周末市场", type: "购物", desc: "全球最大周末市集，8000+摊位，限周六日，早上去避开热浪" }
      ],
      festivals: [
        { name: "宋干节（泼水节）", date: "4月13-15日", desc: "全球最狂欢的新年庆典，全城泼水，Silom Road是主战场" },
        { name: "水灯节（Loy Krathong）", date: "农历十二月十五（约11月）", desc: "放灯笼于河面/空中，清迈版本更震撼" },
        { name: "中国农历新年（唐人街）", date: "春节期间", desc: "耀华力路整条街灯火通明，舞龙舞狮，年味十足" }
      ],
      customs: [
        "泰国人视头部为神圣，切勿随意触碰他人头部",
        "脚被视为低贱，不要用脚指向他人或佛像",
        "对皇室表示尊重是法律义务（冒犯皇室罪）",
        "寺庙内需脱鞋，穿着需覆盖膝盖和肩膀",
        "微笑文化：泰国人会用微笑掩盖不满，注意背后含义"
      ],
      transport: "BTS天铁和MRT地铁覆盖主要区域，Grab是最安全打车方式，短途可乘摩的（需自行评估风险）。"
    }
  },

  "paris": {
    id: "paris",
    name: "巴黎",
    nameEn: "Paris",
    country: "法国",
    countryEn: "France",
    continent: "欧洲",
    lat: 48.8566,
    lng: 2.3522,
    flag: "🇫🇷",
    image: "https://picsum.photos/seed/paris/800/400",
    overview: "巴黎是艺术与浪漫之都，但也是欧洲扒窃最严重的城市之一，尤其在旅游景点周边，需高度保持警惕。",
    safety: {
      overall: 65,
      grade: "B",
      grades: {
        robbery: { score: 60, label: "抢劫", desc: "街头抢劫偶发，近郊93省（Seine-Saint-Denis）风险较高" },
        homicide: { score: 78, label: "凶杀", desc: "整体中等，郊区犯罪率高于市区" },
        traffic: { score: 65, label: "交通", desc: "巴黎市区驾驶复杂，环城大道车速极快，骑行需注意" },
        theft: { score: 40, label: "盗窃", desc: "⚠️ 高风险：扒窃是最主要问题，埃菲尔铁塔、卢浮宫、地铁1号线尤其严重" },
        scam: { score: 50, label: "诈骗", desc: "⚠️ 常见骗局：'爱心手环'、'捡到戒指'、'签名请愿'是三大经典" },
        drugs: { score: 72, label: "毒品", desc: "毒品管控严格，但部分地区（如St-Denis）贩毒活动可见" },
        natural: { score: 82, label: "自然灾害", desc: "塞纳河偶有洪涝（2016/2021年），自然灾害风险整体较低" },
        political: { score: 65, label: "政治稳定", desc: "黄背心运动等社会抗议周期性发生，恐袭风险较高（Vigipirate紧急状态）" }
      },
      hotspots: [
        { area: "埃菲尔铁塔周边", risk: "高", desc: "全球扒窃密度最高地点之一，假求婚骗局、人群拥挤" },
        { area: "蒙马特尔（Montmartre）", risk: "高", desc: "特别是拱顶圣心堂台阶，手串骗局横行" },
        { area: "地铁1号线全线", risk: "高", desc: "连接所有主要景点，扒手最活跃" },
        { area: "Nord火车站周边（18区）", risk: "高", desc: "性工作者聚集，抢劫风险，建议快速通过" },
        { area: "93省（近郊）", risk: "极高", desc: "游客无需前往，治安极差" }
      ],
      safeAreas: ["16区", "7区（战神广场附近住宅区）", "圣日耳曼德佩", "马莱区（白天）"],
      history: "2015年巴黎恐怖袭击（巴塔克兰剧院等多处，130人遇难）。法国目前仍处于Vigipirate最高警戒级别'紧急警戒'。历史上宗教战争、法国大革命等留下深刻痕迹，但近代无战争冲突。",
      tips: [
        "护照、现金分散存放，使用腰包或贴身钱包",
        "遇到任何人强制系手环或索要签名，坚定拒绝并快速离开",
        "地铁车厢内背包放在胸前",
        "关注法国政府的vigipirate安全预警级别",
        "夜间避免独自前往非旅游区，特别是地铁站外围区域",
        "使用Citymapper代替Google Maps获取更准确的巴黎交通信息"
      ]
    },
    emergency: {
      police: "17",
      ambulance: "15（SAMU）",
      fire: "18",
      european: "112（欧盟统一紧急号码）",
      touristHotline: "+33-1-42-76-67-54（旅游警察）",
      embassies: {
        "中国大使馆": "+33-1-49-52-19-50",
        "美国大使馆": "+33-1-43-12-22-22",
        "英国大使馆": "+33-1-44-51-31-00"
      },
      hospitals: [
        { name: "Hôtel-Dieu（巴黎最中心）", phone: "+33-1-42-34-82-34", address: "1 Parvis Notre-Dame" },
        { name: "Ambroise Paré Hospital", phone: "+33-1-49-09-50-00", address: "Boulogne-Billancourt" }
      ],
      apps: ["Citymapper（交通）", "SNCF Connect（火车）", "Alertes Météo（天气预警）"],
      selfDefense: [
        "护照存酒店，随身携带复印件",
        "手机拍下住宿地址，避免语言不通时迷路",
        "遭遇扒窃后立即前往最近警局（Commissariat）报案，获取报案证明用于保险理赔",
        "不要在人群聚集处低头看手机"
      ]
    },
    lifestyle: {
      food: [
        { name: "Du Pain et des Idées面包房", type: "法式面包", price: "€€", desc: "巴黎最佳可颂之一，蜗牛奶酪面包是招牌，仅工作日营业" },
        { name: "Le Bouillon Chartier", type: "传统法国菜", price: "€€", desc: "1896年老餐厅，正宗法式料理价格亲民，排队入场" },
        { name: "Marché d'Aligre市场", type: "本地市场", price: "€", desc: "巴黎人最爱早市，奶酪、火腿、鲜花，非旅游区真实生活" },
        { name: "Septime（预约难度S级）", type: "新派法国菜", price: "€€€€", desc: "全球最难订位餐厅之一，每周二上午放票需秒杀" },
        { name: "Le Marais犹太区法拉费尔", type: "中东小吃", price: "€", desc: "L'As du Fallafel是经典，排队30分钟也值得" }
      ],
      attractions: [
        { name: "卢浮宫（周三周五夜间开放）", type: "博物馆", desc: "夜间人少，蒙娜丽莎区域相对空旷，网上提前购票必须" },
        { name: "巴黎下水道博物馆", type: "小众", desc: "真实参观巴黎地下排水系统，充满工业感，出乎意料的有趣", hidden: true },
        { name: "Palais Royal花园", type: "隐秘花园", desc: "闹市中心的宁静绿洲，本地白领午休地，游客极少", hidden: true },
        { name: "Belleville街头艺术", type: "艺术", desc: "巴黎最活跃的涂鸦艺术区，多元移民文化汇聚地", hidden: true },
        { name: "凡尔赛宫（周二开门前到达）", type: "宫殿", desc: "开门前30分钟到达可避开90%人流" }
      ],
      festivals: [
        { name: "国庆日烟火（7月14日）", date: "7月14日", desc: "特罗卡德罗广场埃菲尔铁塔烟火，全球最美国庆烟火" },
        { name: "巴黎白夜（Nuit Blanche）", date: "10月第一个周末", desc: "全城博物馆通宵免费开放，装置艺术遍布街头" },
        { name: "Tour de France终点", date: "7月最后一周", desc: "香榭丽舍大道上观看环法自行车赛终点冲刺免费" }
      ],
      customs: [
        "进店必须打招呼（Bonjour）和离店道谢（Merci, au revoir），否则被认为无礼",
        "餐厅要等服务员领座，自行就座会被无视",
        "午餐时间（12-14点）是法国人神圣时光，很多商店关门",
        "巴黎人普遍不愿讲英语，几句法语（merci/pardon/s'il vous plaît）会大大改善体验",
        "小费文化：账单含服务费，自愿给1-2欧小费即可"
      ],
      transport: "地铁（Métro）最便捷，Navigo周卡适合多日游客，RER B可达戴高乐机场，避免买票时使用老式自动售票机（故障多）。"
    }
  },

  "newyork": {
    id: "newyork",
    name: "纽约",
    nameEn: "New York City",
    country: "美国",
    countryEn: "United States",
    continent: "北美洲",
    lat: 40.7128,
    lng: -74.0060,
    flag: "🇺🇸",
    image: "https://picsum.photos/seed/newyork/800/400",
    overview: "纽约是全球最著名的城市之一，近年犯罪率相较上世纪90年代大幅下降，但不同区域安全差距显著，需要了解区域安全分布。",
    safety: {
      overall: 61,
      grade: "B-",
      grades: {
        robbery: { score: 62, label: "抢劫", desc: "公交站台、偏僻街道有风险，但地铁犯罪2025年已降至2009年以来最低（同比-4%）" },
        homicide: { score: 62, label: "凶杀", desc: "枪支问题突出，Brooklyn和Bronx部分区域风险高" },
        traffic: { score: 55, label: "交通", desc: "交通拥堵严重，骑行安全需注意，行人闯红灯文化" },
        theft: { score: 50, label: "盗窃", desc: "地铁和时代广场扒窃频发，手机抢夺是突出问题" },
        scam: { score: 60, label: "诈骗", desc: "CD骗局、卖艺强制收费、假冥想馆等是常见骗局" },
        drugs: { score: 55, label: "毒品", desc: "纽约州部分大麻合法化，公开吸食问题突出，毒品相关犯罪存在" },
        natural: { score: 70, label: "自然灾害", desc: "飓风风险（桑迪2012年损失惨重），极端天气增多" },
        political: { score: 75, label: "政治稳定", desc: "政治稳定，但社会分裂背景下抗议活动频繁" }
      },
      hotspots: [
        { area: "South Bronx（Mott Haven）", risk: "高", desc: "犯罪率高，游客无需前往" },
        { area: "East New York（Brooklyn）", risk: "高", desc: "本地居民聚集，街头犯罪多发" },
        { area: "Times Square地铁站", risk: "中高", desc: "拥挤环境下扒窃，精神疾病患者推人事件有记录" },
        { area: "Rikers Island附近（Queens）", risk: "高", desc: "监狱岛附近区域，无游客价值" }
      ],
      safeAreas: ["Upper East Side", "Tribeca", "West Village", "Park Slope（Brooklyn）", "Astoria（Queens）"],
      history: "9/11恐怖袭击（2001年，近3000人遇难）永久改变了纽约。历史上曾经历1970-80年代高犯罪率时期，现已大幅改善。近年仇恨犯罪（反亚裔等）有所上升。",
      tips: [
        "地铁候车时站在距门口两步的位置，不要站在月台边缘",
        "手机使用完立即收起，不要低头走路刷手机",
        "Citibike共享单车建议穿戴头盔（虽非强制）",
        "遇到强迫推销的'免费'CD立即走开",
        "乘坐Uber/Lyft替代出租车，价格透明",
        "关注NYPD官方安全通报"
      ]
    },
    emergency: {
      police: "911（紧急）/ 311（非紧急）",
      ambulance: "911",
      fire: "911",
      touristHotline: "+1-212-484-1200（NYC & Co旅游局）",
      embassies: {
        "中国总领事馆（纽约）": "+1-212-244-9392",
        "英国总领事馆": "+1-212-745-0200"
      },
      hospitals: [
        { name: "NYU Langone Health（顶级医疗）", phone: "+1-212-263-7300", address: "550 First Avenue" },
        { name: "Mount Sinai Hospital", phone: "+1-212-241-6500", address: "1 Gustave L. Levy Place" }
      ],
      apps: ["Citizen（实时安全预警）", "MTA myMTA（地铁实时信息）", "Notify NYC（官方紧急通知）"],
      selfDefense: [
        "随时保持对周围环境的感知，不戴耳机在偏僻区域行走",
        "遇到抢劫：放弃财物不要抵抗，生命比财物重要",
        "报警后要求获取警方报告编号（Police Report Number）",
        "手机安装Find My/Find My Device，提前设置远程锁定"
      ]
    },
    lifestyle: {
      food: [
        { name: "Katz's Delicatessen", type: "熟食/三明治", price: "$$", desc: "1888年开业，《当哈利遇到莎莉》取景地，经典Pastrami三明治" },
        { name: "Di Fara Pizza（Brooklyn）", type: "披萨", price: "$$", desc: "传奇披萨匠Dom DeMarco手工制作，值得排队1小时" },
        { name: "Xi'an Famous Foods（多处分店）", type: "陕西面食", price: "$", desc: "正宗陕西裤带面和凉皮，华人街头美食改变纽约饮食史" },
        { name: "Smorgasburg（周末）", type: "美食市集", price: "$$", desc: "布鲁克林河边露天美食市集，周六Williamsburg周日Prospect Park" },
        { name: "The Halal Guys（路边推车）", type: "中东快餐", price: "$", desc: "纽约标志性街头小吃，鸡肉/牛肉配黄色白色酱汁" }
      ],
      attractions: [
        { name: "High Line公园", type: "城市绿化", desc: "废弃铁路改造的空中花园，Chelsea画廊区旁，日落时分最美" },
        { name: "The Vessel（哈德逊广场）", type: "建筑", desc: "蜂巢状公共艺术装置，周边新城区探索" },
        { name: "Mast Brothers Chocolate工厂（Williamsburg）", type: "小众", desc: "手工巧克力工厂参观，Brooklyn hipster文化圣地", hidden: true },
        { name: "Governor's Island", type: "岛屿", desc: "免费渡轮可达，无车岛屿，城市远眺最佳，仅夏季开放", hidden: true },
        { name: "美国自然历史博物馆（建议下午3点后入场）", type: "博物馆", desc: "人流减少，恐龙化石和宇宙展厅震撼，建议预约" }
      ],
      festivals: [
        { name: "感恩节大游行", date: "11月第四个周四", desc: "梅西百货感恩节大游行，Broadway沿线最佳观看点" },
        { name: "New Year's Eve时代广场", date: "12月31日", desc: "全球最著名跨年现场，需提前8小时占位，非常拥挤" },
        { name: "Coney Island烟火（周五夏季）", date: "6-8月每周五", desc: "布鲁克林海滩免费烟火，本地人夏日仪式" }
      ],
      customs: [
        "小费文化：餐厅18-22%，出租车15-20%，按摩/美发20%以上，是员工收入的重要组成",
        "纽约人走路快，不要在人行道上突然停下来拍照",
        "地铁内饮食理论上被禁止（实际执法宽松）",
        "交谈时保持1-2臂的个人空间",
        "称赞别人：美国人习惯频繁给予正面反馈"
      ],
      transport: "地铁OMNY（感应支付）最方便，7日无限次通票适合游客，黄色出租车起步费高，Uber/Lyft更透明，JFK/EWR机场乘AirTrain+地铁最省钱。"
    }
  },

  "nairobi": {
    id: "nairobi",
    name: "内罗毕",
    nameEn: "Nairobi",
    country: "肯尼亚",
    countryEn: "Kenya",
    continent: "非洲",
    lat: -1.2921,
    lng: 36.8219,
    flag: "🇰🇪",
    image: "https://picsum.photos/seed/nairobi/800/400",
    overview: "内罗毕是东非最重要的商业中心，也是前往肯尼亚国家公园的门户，但城市安全形势复杂，犯罪率较高，需高度谨慎。",
    safety: {
      overall: 38,
      grade: "D+",
      grades: {
        robbery: { score: 30, label: "抢劫", desc: "⚠️ 武装抢劫风险高，特别是夜间出行和繁华商业区" },
        homicide: { score: 35, label: "凶杀", desc: "凶杀率较高，帮派冲突在贫民区（Kibera等）突出" },
        traffic: { score: 35, label: "交通", desc: "⚠️ 马他图（公共小型巴士）超速和超载，道路事故频发" },
        theft: { score: 30, label: "盗窃", desc: "扒窃和'飞车抢劫'（包括抢夺项链）非常普遍" },
        scam: { score: 45, label: "诈骗", desc: "出租车欺诈、假导游、网络诈骗是主要问题" },
        drugs: { score: 55, label: "毒品", desc: "管控较严，但恰特草（Khat）合法，部分区域毒品可及" },
        natural: { score: 65, label: "自然灾害", desc: "旱涝交替（近年极端气候加剧），洪涝偶发" },
        political: { score: 50, label: "政治稳定", desc: "选举期间紧张（2022年选举后骚乱），恐袭风险（索马里边境）" }
      },
      hotspots: [
        { area: "Eastleigh（索马里城）", risk: "极高", desc: "恐袭和犯罪双重风险，外国游客非必要不前往" },
        { area: "Kibera贫民窟", risk: "高", desc: "非导览陪同不得独自进入，帮派地盘争夺激烈" },
        { area: "CBD（中央商业区）夜间", risk: "高", desc: "日落后快速撤离，基本不留外国人出没" },
        { area: "Tom Mboya Street", risk: "高", desc: "扒窃热点，人流混杂" }
      ],
      safeAreas: ["Westlands", "Karen（前郊外别墅区）", "Gigiri（大使馆区）", "Lavington"],
      history: "1998年美国大使馆炸弹袭击（224人遇难）。2013年西门购物中心恐袭（67人遇难）。肯尼亚面临来自索马里Al-Shabaab的持续恐袭威胁。殖民地历史和土地问题导致深层社会矛盾。",
      tips: [
        "不要在街头展示任何电子设备、相机、珠宝",
        "乘坐信誉良好的出租车公司或Uber（不要随机拦车）",
        "尽量在白天活动，17点前返回安全区域",
        "随时携带少量现金（20-50美元）以备'关系费用'",
        "所有行程告知可信任的人，保持联系",
        "投宿有安保的酒店，了解紧急疏散程序"
      ]
    },
    emergency: {
      police: "999 / 112",
      ambulance: "999 / AMREF +254-20-6000-090",
      fire: "999",
      touristHotline: "+254-20-604-767（肯尼亚旅游部）",
      embassies: {
        "中国大使馆": "+254-20-722-1559",
        "美国大使馆": "+254-20-363-6000",
        "英国大使馆": "+254-20-284-4000"
      },
      hospitals: [
        { name: "Aga Khan University Hospital（最推荐）", phone: "+254-20-366-2000", address: "3rd Parklands Ave" },
        { name: "Nairobi Hospital", phone: "+254-20-284-5000", address: "Argwings Kodhek Rd" }
      ],
      apps: ["Uber（安全出行必备）", "M-Pesa（本地移动支付）", "Kenya Red Cross应急App"],
      selfDefense: [
        "雇用有口碑的当地导游陪同参观敏感区域",
        "住宿酒店前了解最近的医院和大使馆位置",
        "准备旅行保险，包含医疗撤离条款",
        "复印所有重要证件并上传到云端"
      ]
    },
    lifestyle: {
      food: [
        { name: "Carnivore Restaurant", type: "非洲烤肉", price: "KSh KSh KSh", desc: "享誉全球的烤肉餐厅，鸵鸟肉、鳄鱼肉等非洲特色，需预约" },
        { name: "Mama Oliech's Fish", type: "传统肯尼亚鱼", price: "KSh KSh", desc: "当地最知名的维多利亚湖鱼餐，政客和普通市民都爱光顾" },
        { name: "Java House（连锁，安全可靠）", type: "咖啡/早餐", price: "KSh KSh", desc: "肯尼亚本土连锁咖啡，肯尼亚单品咖啡是必点" },
        { name: "Ngong Road路边烤玉米", type: "街头小吃", price: "KSh", desc: "白天安全区域体验本地平民美食，5肯尼亚先令一穗" }
      ],
      attractions: [
        { name: "内罗毕国家公园", type: "野生动物", desc: "全球唯一城市内国家公园，城市天际线为背景拍狮子" },
        { name: "长颈鹿中心", type: "动物保护", desc: "可亲手喂食濒危罗斯柴尔德长颈鹿，距市区15分钟" },
        { name: "大卫·谢尔德里克野生动物信托", type: "保护机构", desc: "孤儿大象项目，早晨11点喂养仪式，治愈系体验" },
        { name: "Kazuri珠子工厂", type: "手工艺", desc: "女性赋权合作社，可参观手工陶珠制作并购买", hidden: true },
        { name: "Kitengela热玻璃艺术", type: "艺术", desc: "废旧材料回收制作玻璃艺术品的神奇地方", hidden: true }
      ],
      festivals: [
        { name: "内罗毕国际马拉松", date: "10月底", desc: "东非最大马拉松，穿越国家公园，野生动物相伴" },
        { name: "Koroga Festival（音乐节）", date: "不定期周末", desc: "肯尼亚最受欢迎的户外音乐节，融合非洲和现代音乐" }
      ],
      customs: [
        "斯瓦希里语问候：Jambo（你好）/ Asante（谢谢）会让当地人倍感亲切",
        "用右手或双手接受和给予物品",
        "进入清真寺需脱鞋并着装保守（约35%穆斯林人口）",
        "拍照前一定要征求当地人同意",
        "周五下午部分穆斯林商店关门做礼拜"
      ],
      transport: "Uber在内罗毕非常安全可靠，是首选出行方式。马他图便宜但危险，不推荐游客使用。租车需经验丰富的当地司机陪同。"
    }
  },

  "sydney": {
    id: "sydney",
    name: "悉尼",
    nameEn: "Sydney",
    country: "澳大利亚",
    countryEn: "Australia",
    continent: "大洋洲",
    lat: -33.8688,
    lng: 151.2093,
    flag: "🇦🇺",
    image: "https://picsum.photos/seed/sydney/800/400",
    overview: "悉尼是全球最宜居城市之一，安全程度极高，城市设施完善，自然环境优美，是公认的高安全感旅游城市。",
    safety: {
      overall: 83,
      grade: "A-",
      grades: {
        robbery: { score: 85, label: "抢劫", desc: "风险低，偶发于夜间娱乐区（Kings Cross等）" },
        homicide: { score: 90, label: "凶杀", desc: "凶杀率极低，全球最安全城市之一" },
        traffic: { score: 75, label: "交通", desc: "左行驾驶，中国/美国驾照持有人需适应，道路交通规范" },
        theft: { score: 80, label: "盗窃", desc: "海滩扒窃是主要问题，不要将贵重物品留在无人海滩" },
        scam: { score: 88, label: "诈骗", desc: "极少见，偶发旅游套餐价格虚高" },
        drugs: { score: 82, label: "毒品", desc: "执法严格，但派对毒品（摇头丸等）在夜间娱乐场所存在" },
        natural: { score: 45, label: "自然灾害", desc: "⚠️ 丛林火灾（11月-3月）、鲨鱼袭击（沿海）、蜘蛛蛇等有毒生物" },
        political: { score: 90, label: "政治稳定", desc: "政治极为稳定，民主制度健全" }
      },
      hotspots: [
        { area: "Kings Cross（夜间）", risk: "中", desc: "成人娱乐区，酒后纠纷、扒窃有发生" },
        { area: "Central Station周边", risk: "中低", desc: "流浪人员聚集，包袋需注意" },
        { area: "海滩无监管区域", risk: "中（自然）", desc: "鲨鱼、有毒海洋生物，务必在有旗帜标注的安全区域游泳" }
      ],
      safeAreas: ["Manly", "Bondi Junction", "Newtown", "Darlinghurst（白天）", "CBD全区"],
      history: "无近代战争历史（自二战以来本土未受战争威胁）。2014年悉尼人质危机（Lindt咖啡馆，2人遇难）。澳大利亚原住民与土地权利问题是重要历史背景。",
      tips: [
        "海滩游泳务必在红黄旗之间（Swim Between the Flags）",
        "bush walk需携带充足饮水，穿着防晒衣，防丛林火灾季",
        "见到蜘蛛、蛇类保持距离，澳大利亚拥有全球最毒动物",
        "防晒不可少，澳大利亚紫外线全球最强",
        "驾驶靠左行，圆环路让行规则需提前了解",
        "关注丛林火灾季（Bushfire Season）预警"
      ]
    },
    emergency: {
      police: "000（紧急）/ 131 444（非紧急）",
      ambulance: "000",
      fire: "000",
      coastGuard: "VHF Channel 16 / *500（海上）",
      touristHotline: "+61-2-9290-1288（NSW旅游局）",
      embassies: {
        "中国总领事馆（悉尼）": "+61-2-8595-8000",
        "美国总领事馆": "+61-2-9373-9200",
        "英国总领事馆": "+61-2-9247-7521"
      },
      hospitals: [
        { name: "Royal Prince Alfred Hospital", phone: "+61-2-9515-6111", address: "50 Missenden Rd, Camperdown" },
        { name: "St Vincent's Hospital", phone: "+61-2-8382-1111", address: "390 Victoria St, Darlinghurst" }
      ],
      apps: ["Hazards Near Me（丛林火灾预警）", "Opal Travel（公交信息）", "Emergency+（定位报警）"],
      selfDefense: [
        "参加海滩活动前检查Surf Life Saving Australia的安全预警",
        "徒步前告知他人路线和预计返回时间",
        "携带急救包（尤其是防蛇咬绑带）进行野外活动",
        "下载澳大利亚急救手册（St John Australia）"
      ]
    },
    lifestyle: {
      food: [
        { name: "Grounds of Alexandria", type: "咖啡/早午餐", price: "$$", desc: "工业风庭院咖啡馆，网红山羊和迷你火车，周末排队1小时" },
        { name: "Sydney Fish Market", type: "海鲜", price: "$$", desc: "南半球最大鱼市场，现取现吃生蚝和龙虾，早晨7点开门" },
        { name: "Bourke Street Bakery", type: "面包/蛋糕", price: "$", desc: "悉尼最知名烘焙，猪肉茴香香肠卷是招牌，多处分店" },
        { name: "Messina冰淇淋", type: "意大利冰淇淋", price: "$", desc: "澳大利亚最受欢迎冰淇淋品牌，每周更新创意口味" },
        { name: "中国城Haymarket的肉馅包子", type: "中式点心", price: "$", desc: "外皮薄肉汁饱满，当地华人聚集地，正宗广式饮茶" }
      ],
      attractions: [
        { name: "悉尼歌剧院导览", type: "地标建筑", desc: "预约内部导览了解建筑奥秘，比外拍更有价值" },
        { name: "蓝山（Blue Mountains）日游", type: "自然", desc: "2小时车程，三姐妹岩、回声角，澳大利亚内陆自然壮景" },
        { name: "Newtown街头涂鸦", type: "小众艺术", desc: "悉尼最有活力的艺术街区，二手书店、素食餐厅、Live音乐", hidden: true },
        { name: "Wenworth Falls瀑布徒步", type: "户外", desc: "蓝山最精华且游客相对较少的步道，单程3小时", hidden: true },
        { name: "Bondi到Coogee海岸步道", type: "徒步", desc: "6公里沿海步道，免费且风景绝美，日出时人最少" }
      ],
      festivals: [
        { name: "悉尼同性恋嘉年华（Mardi Gras）", date: "2-3月", desc: "全球最大LGBTQ+庆典之一，牛津街游行壮观非凡" },
        { name: "Vivid Sydney灯光节", date: "5月底-6月中", desc: "悉尼歌剧院、海港大桥灯光艺术装置，全球最大灯光秀" },
        { name: "悉尼新年烟火", date: "12月31日", desc: "海港大桥烟火全球最知名之一，建议傍晚占位" }
      ],
      customs: [
        "澳大利亚人极为随和，'No worries'（没问题）是国民口头禅",
        "户外烧烤（Barbie）是重要社交活动，邀请参加是高度认可",
        "严格的垃圾分类和环保意识，随意丢垃圾会遭到白眼",
        "原住民土地致谢（Acknowledgement of Country）在公开场合普遍",
        "小费文化：澳大利亚不强制小费，偶尔给5-10%表达满意即可"
      ],
      transport: "Opal卡可乘地铁、公交、渡轮、轻轨，Ferry（渡轮）穿越海港是特色体验，Manly Ferry是最经典的悉尼体验方式。"
    }
  },

  "mexico_city": {
    id: "mexico_city",
    name: "墨西哥城",
    nameEn: "Mexico City",
    country: "墨西哥",
    countryEn: "Mexico",
    continent: "拉丁美洲",
    lat: 19.4326,
    lng: -99.1332,
    flag: "🇲🇽",
    image: "https://picsum.photos/seed/mexicocity/800/400",
    overview: "墨西哥城是北美最大都市，文化底蕴深厚，近年安全形势有所改善，但仍需注意区域差异，局部地区犯罪严重。",
    safety: {
      overall: 48,
      grade: "C+",
      grades: {
        robbery: { score: 45, label: "抢劫", desc: "持械抢劫（Express Kidnapping快速绑架）在某些区域有记录" },
        homicide: { score: 50, label: "凶杀", desc: "墨西哥毒枭冲突影响，特定区域严重，市中心相对较低" },
        traffic: { score: 45, label: "交通", desc: "交通混乱，空气污染导致能见度低，地震后道路损坏问题" },
        theft: { score: 40, label: "盗窃", desc: "地铁扒窃非常普遍，尤其拥挤车厢，飞车抢夺手机突出" },
        scam: { score: 55, label: "诈骗", desc: "假警察诈骗是特有风险（要求展示证件后实施勒索）" },
        drugs: { score: 40, label: "毒品", desc: "毒枭影响渗透，某些区域毒品活动明显，外国人需谨慎" },
        natural: { score: 35, label: "自然灾害", desc: "⚠️ 地震高发区：1985年大地震8000+死亡，2017年7.1级地震369人遇难" },
        political: { score: 58, label: "政治稳定", desc: "政治转型期，腐败问题持续，2024年左翼政府执政" }
      },
      hotspots: [
        { area: "Tepito市场", risk: "极高", desc: "黑市聚集地，绑架和武装抢劫案记录最多，外国人严禁前往" },
        { area: "Iztapalapa区", risk: "高", desc: "帮派活动区域，非旅游区" },
        { area: "地铁2/4/8号线", risk: "高（扒窃）", desc: "拥挤时段扒窃极为猖獗，所有贵重物品放入前袋" },
        { area: "超级高速公路休息站附近", risk: "高", desc: "夜间驾驶在高速公路休息站发生劫车的记录" }
      ],
      safeAreas: ["Polanco", "Condesa", "Roma Norte", "Coyoacán（白天）", "圣安赫尔"],
      history: "阿兹特克帝国首都Tenochtitlán遗址位于城市地下。1985年大地震（里氏8.1级，约10000人遇难）永久影响城市建筑规范。毒枭战争（Sinaloa等贩毒集团）对城市安全的持续影响。",
      tips: [
        "使用Uber/DiDi而非街头出租车（强烈建议）",
        "提取现金在银行内部ATM，而非街头露天机器",
        "遇到自称警察要求检查护照：要求在警察局内处理，拒绝在街头配合",
        "地震：下载SkyAlert地震预警App，了解附近建筑疏散出口",
        "所有包袋抱在胸前，在地铁内不使用手机",
        "注意高海拔（2240米）引起的高原反应"
      ]
    },
    emergency: {
      police: "911（综合紧急）",
      ambulance: "911 / Cruz Roja +55-5395-1111",
      fire: "911",
      touristHotline: "+55-5250-8555（旅游警察SECTOR TURISTICO）",
      embassies: {
        "中国大使馆": "+52-55-5616-0609",
        "美国大使馆": "+52-55-5080-2000",
        "英国大使馆": "+52-55-1670-3200"
      },
      hospitals: [
        { name: "American British Cowdray (ABC) Hospital", phone: "+52-55-5230-8000", address: "Sur 136 No. 116, Observatorio" },
        { name: "Hospital Español", phone: "+52-55-5255-9600", address: "Ejército Nacional 613, Polanco" }
      ],
      apps: ["SkyAlert（地震预警）", "Uber/DiDi（安全出行）", "Waze（实时路况）"],
      selfDefense: [
        "不要在街头展示DSLR相机、苹果手表、昂贵手机",
        "预先规划好每天行程，夜间减少不必要外出",
        "告诉酒店前台你的出行计划",
        "手机安装好紧急联系快速拨号"
      ]
    },
    lifestyle: {
      food: [
        { name: "El Huequito（1959年开业）", type: "塔可", price: "MXN", desc: "墨西哥城最古老塔可店，Al Pastor（旋转烤肉）口味完美" },
        { name: "Mercado de Medellín", type: "本地市场", price: "MXN", desc: "非旅游化的真实市场，新鲜辣椒、异国水果、本地美食" },
        { name: "Contramar（午餐必订）", type: "海鲜", price: "MXN MXN MXN", desc: "墨西哥城传奇海鲜餐厅，烤金枪鱼和绿辣椒虾堪称完美" },
        { name: "Churrería El Moro（24小时）", type: "甜点", price: "MXN", desc: "1935年开业，经典西班牙油条配热巧克力，深夜最佳" },
        { name: "Pujol（拉丁美洲Top餐厅）", type: "创意墨西哥菜", price: "MXN MXN MXN MXN MXN", desc: "全球Top50餐厅，提前2周网络预约，玉米塔可套餐是精华" }
      ],
      attractions: [
        { name: "特奥蒂瓦坎金字塔（日出前到达）", type: "古迹", desc: "太阳金字塔和月亮金字塔，建议周二早上开门前到达避人潮" },
        { name: "芙丽达·卡罗故居博物馆", type: "艺术", desc: "蓝屋，墨西哥最伟大艺术家故居，强烈建议提前网络购票" },
        { name: "Xochimilco运河独木舟", type: "文化体验", desc: "乘坐彩色船屋在古阿兹特克运河游览，周末气氛最热闹" },
        { name: "Roma Norte街头壁画探索", type: "小众艺术", desc: "步行探索文化街区的世界级涂鸦艺术", hidden: true },
        { name: "Mercado de Jamaica花卉市场", type: "本地文化", desc: "墨西哥最大花市，凌晨3点开始营业，万寿菊（Día de Muertos）批发", hidden: true }
      ],
      festivals: [
        { name: "亡灵节（Día de los Muertos）", date: "11月1-2日", desc: "UNESCO非遗，最正宗体验在Mixquic村，墨西哥城公墓夜间开放" },
        { name: "独立日（9月15日午夜）", date: "9月15-16日", desc: "宪法广场午夜独立呐喊仪式，最纯粹的墨西哥民族激情" },
        { name: "圣周（Semana Santa）", date: "复活节前一周", desc: "Iztapalapa的耶稣受难日演出，世界最大passion play" }
      ],
      customs: [
        "握手是标准问候，亲近朋友间脸颊轻吻（贴面礼）",
        "餐后说'¡Estuvo muy rico!'（非常好吃）是对厨师的最高赞美",
        "准时不是强制：商务约会允许迟到15-20分钟，社交聚会迟到1小时正常",
        "亡灵节非常严肃而非恐怖，外国人应该以尊敬而非猎奇态度参与",
        "小费文化：餐厅10-15%，侍者希望现金小费而非信用卡加收"
      ],
      transport: "地铁票价超便宜（5比索=约2元人民币），但安全性低。Uber是最推荐的长途出行方式。Metrobús（快速公交）相对安全。"
    }
  },

  "dubai": {
    id: "dubai",
    name: "迪拜",
    nameEn: "Dubai",
    country: "阿联酋",
    countryEn: "UAE",
    continent: "中东",
    lat: 25.2048,
    lng: 55.2708,
    flag: "🇦🇪",
    image: "https://picsum.photos/seed/dubai/800/400",
    overview: "迪拜是中东最安全的城市之一，现代化程度极高，但法律法规与西方迥异，文化差异显著，需要了解当地法律红线。",
    safety: {
      overall: 85,
      grade: "A",
      grades: {
        robbery: { score: 92, label: "抢劫", desc: "街头抢劫极为罕见，严密监控系统和严酷刑法有效震慑" },
        homicide: { score: 93, label: "凶杀", desc: "凶杀率极低，全球最安全城市之列" },
        traffic: { score: 60, label: "交通", desc: "⚠️ 高速公路超速问题严重，阿联酋交通事故率是全球最高之一" },
        theft: { score: 90, label: "盗窃", desc: "盗窃极少，但要注意在人群聚集的传统市场（Souq）" },
        scam: { score: 75, label: "诈骗", desc: "旅游套餐价格虚高，黄金珠宝店需了解国际市价" },
        drugs: { score: 95, label: "毒品", desc: "零容忍：即使是极微量毒品也可能导致数年监禁，某些西方药物处方在迪拜违法" },
        natural: { score: 80, label: "自然灾害", desc: "沙尘暴偶发，2024年历史性洪涝（气候变化影响），极端高温（夏季可达50℃）" },
        political: { score: 88, label: "政治稳定", desc: "政治极为稳定，君主制，但中东地区整体地缘风险存在（近年也门胡塞武装导弹）" }
      },
      hotspots: [
        { area: "Bur Dubai/Deira传统区", risk: "低中", desc: "相对较旧区域，扒窃可能性略高，但总体安全" },
        { area: "海滩（着装不当）", risk: "法律风险", desc: "比基尼仅限指定海滩，在公共场合着装不当会被逮捕" }
      ],
      safeAreas: ["几乎全城皆安全"],
      history: "迪拜是近50年从沙漠渔村迅速崛起的现代城市，无战争历史。2023-2024年也门胡塞武装向阿联酋发射导弹，但落点未造成重大伤亡。海湾战争期间（1990-91）阿联酋是联军后方基地。",
      tips: [
        "⚠️ 法律红线：公开饮酒（仅限授权场所）、亲密行为展示、非婚性行为、LGBTQ+表达均违法",
        "在非指定区域（如购物中心停车场）不要喝酒，即使是啤酒",
        "斋月期间（Ramadan）白天不得在公共场所饮食，穿着更保守",
        "拍摄政府建筑、军事设施、其他人（未经同意）均可能违法",
        "所有处方药需携带英文医生证明（防止某些物质被归类为违禁品）",
        "驾驶时被追尾，即使对方全责，你仍可能因追尾被起诉"
      ]
    },
    emergency: {
      police: "999",
      ambulance: "998",
      fire: "997",
      touristHotline: "+971-4-223-2323（迪拜旅游局）",
      embassies: {
        "中国总领事馆（迪拜）": "+971-4-394-4733",
        "美国总领事馆": "+971-4-309-4000",
        "英国总领事馆": "+971-4-309-4444"
      },
      hospitals: [
        { name: "Dubai Hospital（公立，高质量）", phone: "+971-4-219-5000", address: "Al Baraha" },
        { name: "American Hospital Dubai", phone: "+971-4-336-7777", address: "Oud Metha" }
      ],
      apps: ["Dubai Police（一站式警务服务）", "RTA Dubai（公交打车）", "Dubai Now（政府服务汇聚）"],
      selfDefense: [
        "了解当地法律是保护自身安全最重要的一步",
        "所有活动在合法框架内进行",
        "遇到纠纷保持冷静，避免肢体接触（任何形式的打架都违法）",
        "在大使馆网站注册行程（部分国家提供此服务）"
      ]
    },
    lifestyle: {
      food: [
        { name: "Al Ustad Special Kebab（1978年）", type: "伊朗烤肉", price: "AED AED", desc: "60年老店，迪拜最正宗波斯烤羊腿，非旅游化的真实体验" },
        { name: "Ravi Restaurant", type: "巴基斯坦菜", price: "AED", desc: "迪拜传奇廉价餐厅，喜马拉雅山劳工工人最爱，印巴风味完美" },
        { name: "Arabian Tea House", type: "传统阿拉伯餐", price: "AED AED", desc: "Al Fahidi历史区内，传统沙扎比（枣椰饼+阿拉伯咖啡）体验" },
        { name: "Pai Thai（漂浮在运河上）", type: "泰国菜", price: "AED AED AED", desc: "Dubai Creek漂浮餐厅，水上进餐体验独特" },
        { name: "Gold Souq旁的街头沙瓦尔玛", type: "街头快餐", price: "AED", desc: "8迪拉姆的黎巴嫩鸡肉卷，24小时供应，远比餐厅好吃" }
      ],
      attractions: [
        { name: "哈利法塔日落前45分钟（At the Top）", type: "地标", desc: "购买At the Top Sunset票，日落后城市灯光同时绽放" },
        { name: "Al Fahidi历史街区", type: "文化历史", desc: "迪拜唯一保存完好的旧城区，清凉的风塔建筑与博物馆" },
        { name: "阿布扎比谢赫扎耶德大清真寺", type: "宗教建筑", desc: "世界最壮观清真寺之一，阿布扎比日游必选，免费进入" },
        { name: "Alserkal Avenue艺术区", type: "小众艺术", desc: "工业仓库改造的当代艺术村，远离购物中心的文艺迪拜", hidden: true },
        { name: "沙漠星空骑骆驼", type: "体验", desc: "日落骆驼徒步+沙漠露营+天文观星，脱离城市的纯粹体验" }
      ],
      festivals: [
        { name: "开斋节（Eid Al Fitr）", date: "斋月结束（约4月/5月）", desc: "全城欢庆，传统服饰、美食、烟火，感受阿拉伯民族节日魅力" },
        { name: "迪拜购物节", date: "12月-1月", desc: "全球最大购物节之一，折扣、演出、抽奖汇聚" },
        { name: "迪拜国际电影节", date: "12月", desc: "中东最重要的电影节，红毯活动公众可观看" }
      ],
      customs: [
        "斋月是神圣月份，对穆斯林同事白天禁食表示尊重",
        "进入清真寺女性须佩戴头巾并着装保守，男性需脱鞋",
        "商务谈判时喝完阿拉伯咖啡摇晃杯子表示不需要续杯",
        "用右手进食和递接物品（左手被认为不洁净）",
        "与异性握手时等对方主动伸手（部分保守穆斯林不与异性握手）"
      ],
      transport: "迪拜地铁（Dubai Metro）干净准时，Nol卡通乘地铁/公交/水上巴士，Uber/Careem是主要打车方式，不建议步行（夏季酷热难耐，城市设计不友好步行）。"
    }
  },

  "beijing": {
    id: "beijing",
    name: "北京",
    nameEn: "Beijing",
    country: "中国",
    countryEn: "China",
    continent: "亚洲",
    lat: 39.9042,
    lng: 116.4074,
    flag: "🇨🇳",
    image: "https://picsum.photos/seed/beijing/800/400",
    overview: "北京是中国首都，历史文化积淀深厚，社会治安总体良好，但空气质量、交通拥堵和部分旅游景点陷阱值得注意。",
    safety: {
      overall: 78,
      grade: "B+",
      grades: {
        robbery: { score: 88, label: "抢劫", desc: "街头暴力抢劫极少，安全感强" },
        homicide: { score: 90, label: "凶杀", desc: "凶杀率极低，暴力犯罪少见" },
        traffic: { score: 60, label: "交通", desc: "交通拥堵严重，电动车闯红灯、快递骑手需注意，事故较多" },
        theft: { score: 72, label: "盗窃", desc: "旅游景点（天安门、王府井）扒窃偶发，地铁高峰期注意" },
        scam: { score: 55, label: "诈骗", desc: "⚠️ 茶艺表演骗局（美女邀请品茶后高额收费）、画廊骗局较常见" },
        drugs: { score: 92, label: "毒品", desc: "管控极严，贩毒走私面临极刑" },
        natural: { score: 65, label: "自然灾害", desc: "重度雾霾（PM2.5）是健康风险，偶发洪涝（2023年北京洪灾），冬季冰雪" },
        political: { score: 70, label: "政治稳定", desc: "政治稳定，但外国人需注意拍摄限制（军事、政治敏感设施）" }
      },
      hotspots: [
        { area: "三里屯夜间", risk: "低中", desc: "外国人聚集区，酒后纠纷偶发" },
        { area: "王府井步行街", risk: "中（诈骗）", desc: "茶艺表演骗局高发地" },
        { area: "天安门广场周边", risk: "低（但注意）", desc: "拍摄限制多，便衣安全人员密集，无关政治行为均正常" }
      ],
      safeAreas: ["几乎全城安全", "CBD朝阳区", "海淀区", "西城区"],
      history: "北京拥有3000年建城史和860年都城史。二战期间被日本占领（1937-1945年）。建国后多次政治运动对城市影响深刻。是中国政治中心，重大活动期间安保级别会提升。",
      tips: [
        "下载支付宝/微信用于支付，现金使用率极低",
        "翻墙工具（VPN）在中国大陆属于灰色地带，访问境外网站需提前准备",
        "下载百度地图（离线），Google Maps在中国不好用",
        "重度雾霾天（AQI>200）建议佩戴N95口罩",
        "景区门票提前在微信/支付宝预约，部分景区不支持现场购票",
        "出租车/滴滴司机导航中文，提前准备好目的地中文地址"
      ]
    },
    emergency: {
      police: "110",
      ambulance: "120",
      fire: "119",
      touristHotline: "12301（全国旅游投诉）",
      embassies: {
        "美国大使馆": "+86-10-8531-3000",
        "英国大使馆": "+86-10-5192-4000",
        "日本大使馆": "+86-10-6532-2361"
      },
      hospitals: [
        { name: "北京和睦家医院（国际部）", phone: "+86-10-5927-7000", address: "朝阳区将台路2号" },
        { name: "北京协和医院国际医疗部", phone: "+86-10-6529-6114", address: "东城区帅府园1号" }
      ],
      apps: ["滴滴出行（打车）", "百度地图（导航）", "支付宝（支付）", "微信（通讯支付一体）"],
      selfDefense: [
        "遇到警察检查：配合出示护照，保持礼貌",
        "所有电话都可以拨打，包括不认识的号码前确认来源",
        "雾霾天购买正规品牌口罩（3M/霍尼韦尔）",
        "在景区遇到过度热情的'导游'，礼貌拒绝后快速离开"
      ]
    },
    lifestyle: {
      food: [
        { name: "南锣鼓巷老北京炸酱面", type: "传统北京菜", price: "¥", desc: "手擀宽面配炸酱和各式配料，最地道的老北京味道" },
        { name: "护国寺小吃街", type: "北京小吃", price: "¥", desc: "豆汁、焦圈、驴打滚、艾窝窝，老北京味道汇聚" },
        { name: "顺峰（连锁烤鸭）", type: "北京烤鸭", price: "¥¥", desc: "性价比高于大董全聚德，且无需提前订位" },
        { name: "三里屯工体附近烤串", type: "北京烧烤", price: "¥", desc: "深夜的撸串文化，羊肉串+啤酒是北京夏夜标配" },
        { name: "牛街清真小吃", type: "清真美食", price: "¥", desc: "老牛街，穆斯林风味马蹄烧饼、羊杂汤、牛肉馅饼" }
      ],
      attractions: [
        { name: "故宫（提前3天网络预约）", type: "历史建筑", desc: "世界最大宫殿建筑群，建议早晨8:30开门第一批入场" },
        { name: "长城（慕田峪段，非八达岭）", type: "历史建筑", desc: "慕田峪游客少30%，风景更原始，可乘缆车上下" },
        { name: "798艺术区", type: "当代艺术", desc: "前军工厂改造的艺术特区，北京最活跃的当代艺术展览空间" },
        { name: "胡同骑行探索", type: "小众文化", desc: "租自行车穿越南锣鼓巷、什刹海周边胡同，老北京生活图景", hidden: true },
        { name: "天坛公园清晨", type: "文化", desc: "早晨6点与老北京人一起打太极、唱京剧、遛鸟，极具生命力", hidden: true }
      ],
      festivals: [
        { name: "春节庙会", date: "正月初一至十五", desc: "地坛、天坛庙会，传统手工艺、民俗表演、年货，最纯粹的北京年味" },
        { name: "国庆节天安门", date: "10月1-7日", desc: "国庆阅兵（重大年份）和升旗仪式，需提前申请入场许可" },
        { name: "北京国际电影节", date: "4月", desc: "亚洲最重要电影节之一，院线放映大量国际影片" }
      ],
      customs: [
        "敬酒时晚辈酒杯低于长辈酒杯，表示尊重",
        "接受礼物时推辞一两次再接受，直接接受显得贪婪",
        "在别人家吃饭时，不要清空盘子（表示还没吃饱需要继续招待）",
        "点餐时多点菜比人数，体现慷慨待客之道",
        "遇到想要和你合影的中国游客，这通常是友好行为而非陷阱"
      ],
      transport: "北京地铁网络庞大，地铁卡/手机支付通行，滴滴出行是最便捷打车工具，共享单车（美团/哈啰）解决最后一公里问题。"
    }
  }
};

// 城市列表索引（用于搜索和展示）
const CITY_INDEX = Object.values(CITY_DATABASE).map(city => ({
  id: city.id,
  name: city.name,
  nameEn: city.nameEn,
  country: city.country,
  continent: city.continent,
  flag: city.flag,
  safetyScore: city.safety.overall,
  safetyGrade: city.safety.grade,
  image: city.image
}));

// 洲际分类
const CONTINENTS = {
  "亚洲": ["tokyo", "bangkok", "beijing", "dubai"],
  "欧洲": ["paris"],
  "北美洲": ["newyork"],
  "拉丁美洲": ["mexico_city"],
  "非洲": ["nairobi"],
  "大洋洲": ["sydney"],
  "中东": ["dubai"]
};

// 安全等级颜色映射
const SAFETY_COLORS = {
  "A": { bg: "#00b894", text: "#fff", label: "非常安全" },
  "A-": { bg: "#00cec9", text: "#fff", label: "安全" },
  "B+": { bg: "#0984e3", text: "#fff", label: "较安全" },
  "B": { bg: "#6c5ce7", text: "#fff", label: "一般" },
  "B-": { bg: "#fdcb6e", text: "#2d3436", label: "需谨慎" },
  "C+": { bg: "#e17055", text: "#fff", label: "风险较高" },
  "C": { bg: "#d63031", text: "#fff", label: "高风险" },
  "D+": { bg: "#b2bec3", text: "#2d3436", label: "高度危险" },
  "D": { bg: "#636e72", text: "#fff", label: "极度危险" }
};
