// ============================================================
// SafeCity Global - 全球城市安全数据库 v5.1 (完整版)
// 包含125个全球主要城市，详细生活旅行信息
// 更新时间: 2026-03-31T16:01:25.783Z
// ============================================================

var SAFETY_COLORS = {
  "A":  { bg: "#00b894", text: "#fff", label: "非常安全" },
  "A-": { bg: "#00cec9", text: "#fff", label: "安全" },
  "B+": { bg: "#0984e3", text: "#fff", label: "较安全" },
  "B":  { bg: "#6c5ce7", text: "#fff", label: "一般" },
  "B-": { bg: "#fdcb6e", text: "#2d3436", label: "需谨慎" },
  "C+": { bg: "#e17055", text: "#fff", label: "风险较高" },
  "C":  { bg: "#d63031", text: "#fff", label: "高风险" },
  "C-": { bg: "#c0392b", text: "#fff", label: "高度危险" },
  "D+": { bg: "#b2bec3", text: "#2d3436", label: "高度危险" },
  "D":  { bg: "#636e72", text: "#fff", label: "极度危险" }
};

var CITY_DATABASE = {
  "tokyo": {
    "id": "tokyo",
    "name": "东京",
    "nameEn": "Tokyo",
    "country": "日本",
    "continent": "亚洲",
    "flag": "🇯🇵",
    "lat": 35.6762,
    "lng": 139.6503,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 81,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B",
        "health": "B+",
        "natural": "B"
      },
      "hotspots": [
        {
          "area": "新宿歌舞伎町",
          "desc": "夜间娱乐区，人员复杂，有醉酒者和可疑商家",
          "risk": "高"
        },
        {
          "area": "池袋西口",
          "desc": "治安稍差，有流浪人员和醉汉聚集",
          "risk": "中高"
        },
        {
          "area": "上野公园周边",
          "desc": "夜间有流浪人员聚集，光线较暗",
          "risk": "中"
        },
        {
          "area": "浅草仲见世通",
          "desc": "游客密集，扒窃风险较高",
          "risk": "低中"
        },
        {
          "area": "涩谷站周边",
          "desc": "人流量大，拥挤时易被扒窃",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "港区（六本木、麻布）- 高档住宅和使馆区，24小时监控",
        "千代田区（丸之内、大手町）- CBD核心区，商务中心",
        "涩谷区（代官山、惠比寿）- 时尚购物区，环境优雅",
        "新宿区（新宿御苑周边）- 绿化公园区域",
        "文京区 - 教育区域，大学众多，安静安全",
        "世田谷区 - 高档住宅区，生活便利"
      ]
    },
    "highlights": [
      "文化景点多",
      "医疗水平高",
      "购物便利",
      "美食丰富"
    ],
    "risks": [
      "语言沟通问题",
      "食品安全",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "03-5321-7837",
      "touristHotline": "050-3816-1857",
      "police": "110",
      "ambulance": "119",
      "fire": "119"
    },
    "lifestyle": {{"food":[{"name":"寿司","type":"日本料理","price":"¥2000-30000","desc":"筑地市场新鲜","tip":"早起去筑地"},{"name":"拉面","type":"面食","price":"¥800-1500","desc":"豚骨、酱油","tip":"一兰拉面"},{"name":"烧肉","type":"烧烤","price":"¥3000-8000","desc":"A5级和牛","tip":"提前预约"},{"name":"人形烧","type":"甜点","price":"¥500-1000","desc":"雷门限定","tip":"仲见世通"}],"attractions":[{"name":"浅草寺","type":"寺庙","desc":"东京最古老寺庙","hidden":false},{"name":"涩谷十字路口","type":"地标","desc":"世界最繁忙","hidden":false},{"name":"秋叶原","type":"动漫街","desc":"电器动漫","hidden":false},{"name":"神乐坂","type":"街区","desc":"日式风情","hidden":true}],"festivals":[{"name":"樱花季","date":"3-4月","desc":"上野公园赏樱"},{"name":"夏日祭","date":"7-8月","desc":"花火大会"},{"name":"红叶季","date":"11月","desc":"明治神宫"}],"customs":["进入餐厅脱鞋","电车安静","不边走边吃","不给小费"],"transport":"地铁JR全覆盖，西瓜卡通用","hotspots":[{"area":"新宿歌舞","desc":"夜间复杂","risk":"高"},{"area":"池袋西口","desc":"流浪汉","risk":"中高"}],"safeAreas":["港区","千代田区","涩谷区","文京区别"]}},
        {
          "name": "拉面",
          "type": "面食",
          "price": "¥800-1,500",
          "desc": "浓郁汤底配上Q弹面条",
          "tip": "拉面店通常营业时间较短"
        },
        {
          "name": "天妇罗",
          "type": "日本料理",
          "price": "¥1,500-3,000",
          "desc": "油炸海鲜和蔬菜"
        },
        {
          "name": "烤肉",
          "type": "烧烤",
          "price": "¥3,000-6,000",
          "desc": "高品质和牛烤肉"
        }
      ],
      "attractions": [
        {
          "name": "浅草寺",
          "type": "寺庙",
          "desc": "东京最古老的佛教寺庙",
          "hidden": false
        },
        {
          "name": "涩谷十字路口",
          "type": "地标",
          "desc": "世界最繁忙的十字路口",
          "hidden": false
        },
        {
          "name": "明治神宫",
          "type": "神社",
          "desc": "供奉明治天皇和昭宪皇太后的神社",
          "hidden": false
        },
        {
          "name": "代官山茑屋书店",
          "type": "书店",
          "desc": "全球最美书店之一",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "樱花节",
          "date": "3月下旬-4月上旬",
          "desc": "全国赏樱热潮"
        },
        {
          "name": "神田祭",
          "date": "5月中旬",
          "desc": "日本三大祭之一"
        },
        {
          "name": "花火大会",
          "date": "7-8月",
          "desc": "夏日烟花盛宴"
        }
      ],
      "customs": [
        "进入室内需要脱鞋",
        "不要在电车上大声说话",
        "给小费是不礼貌的行为",
        "不要边走边吃",
        "公共场合尽量避免大声打电话"
      ],
      "transport": "公共交通非常发达，地铁和电车是最主要交通方式，购买一日券更划算。"
    },
    "safety_tips": {
      "crime": [
        "在东京旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足"
      ],
      "cultural": [
        "尊重日本的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息"
      ]
    },
    "travel_tips": {
      "best_season": "3-5月春季,10-11月秋季",
      "weather": {
        "spring": {
          "temp": "10-20°C",
          "tips": "赏樱花,准备轻薄外套"
        },
        "summer": {
          "temp": "25-35°C",
          "tips": "炎热潮湿,注意防暑防晒"
        },
        "autumn": {
          "temp": "10-20°C",
          "tips": "赏红叶,天气宜人"
        },
        "winter": {
          "temp": "0-10°C",
          "tips": "寒冷干燥,注意保暖"
        }
      },
      "budget": {
        "daily_budget": "¥8,000-15,000/天",
        "accommodation": "¥5,000-12,000/晚",
        "food": "¥2,000-5,000/天",
        "transport": "¥1,000-2,000/天"
      },
      "visas": {
        "chinese_citizens": "需要签证,建议提前1-2个月申请",
        "visa_free_countries": "68个国家免签"
      },
      "language": {
        "primary": "日语",
        "english_spoken": "普遍水平有限,旅游区较好",
        "essential_phrases": {
          "谢谢": "ありがとう (Arigatou)",
          "对不起": "すみません (Sumimasen)",
          "警察在哪里": "警察はどこですか (Keisatsu wa doko desu ka)"
        }
      }
    },
    "overview": "东京是日本的政治、经济、文化中心，也是世界上最大的都市圈之一。这座融合了传统与现代的城市，既保留着古老的寺庙和神社，又拥有着摩天大楼和霓虹灯街景。作为全球金融、科技和时尚中心，东京吸引了来自世界各地的游客和商务人士。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。东京的地铁系统是全球最繁忙的之一，通过智能化管理和严格安检，保持了极低的犯罪率。2011年东日本大地震后，东京加强了防灾减灾能力建设，建立了全球领先的灾害预警和应急响应系统。"
  },
  "singapore": {
    "id": "singapore",
    "name": "新加坡",
    "nameEn": "Singapore",
    "country": "新加坡",
    "continent": "亚洲",
    "flag": "🇸🇬",
    "lat": 1.3521,
    "lng": 103.8198,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "hotspots": [
        {
          "area": "小印度",
          "desc": "夜间偶有纠纷，人员复杂",
          "risk": "低"
        },
        {
          "area": "芽笼",
          "desc": "红灯区，人员复杂，游客应避免",
          "risk": "中"
        },
        {
          "area": "巴刹夜市",
          "desc": "人流密集，易丢财物",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "乌节路商圈 - 主要商业街，监控全覆盖",
        "滨海湾区域 - CBD核心区，24小时安保",
        "东海岸公园 - 海滨公园，家庭友好",
        "武吉知马区 - 高档住宅区，环境优美",
        "荷兰村 - 外籍人士聚集区，国际化氛围"
      ]
    },
    "highlights": [
      "美食丰富",
      "医疗水平高",
      "文化景点多",
      "发达公共交通"
    ],
    "risks": [
      "语言沟通问题",
      "食品安全",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "1800-736-2000",
      "touristHotline": "1800-736-2000",
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "lifestyle": {{"food":[{"name":"肉骨茶","type":"新加坡","price":"S$8-20","desc":"胡椒猪骨汤","tip":"松发肉骨茶"},{"name":"辣椒蟹","type":"新加坡","price":"S},
        {
          "name": "辣椒蟹",
          "type": "海鲜",
          "price": "SGD30-50",
          "desc": "甜辣酱汁配新鲜螃蟹"
        },
        {
          "name": "肉骨茶",
          "type": "汤品",
          "price": "SGD8-12",
          "desc": "排骨汤配药材",
          "tip": "胡椒味和药材味两种选择"
        },
        {
          "name": "叻沙",
          "type": "面食",
          "price": "SGD5-8",
          "desc": "椰浆咖喱汤面"
        }
      ],
      "attractions": [
        {
          "name": "滨海湾花园",
          "type": "公园",
          "desc": "未来感十足的超级花园",
          "hidden": false
        },
        {
          "name": "鱼尾狮公园",
          "type": "地标",
          "desc": "新加坡标志性景点",
          "hidden": false
        },
        {
          "name": "圣淘沙岛",
          "type": "度假村",
          "desc": "综合度假胜地",
          "hidden": false
        },
        {
          "name": "武吉士街市",
          "type": "集市",
          "desc": "本地人常逛的街头市场",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "春节",
          "date": "1-2月",
          "desc": "华人传统新年"
        },
        {
          "name": "开斋节",
          "date": "4-5月",
          "desc": "马来族重要节日"
        },
        {
          "name": "屠妖节",
          "date": "10-11月",
          "desc": "印度族光明节"
        }
      ],
      "customs": [
        "公共场合禁止吃口香糖",
        "不要随地乱扔垃圾",
        "地铁上禁止饮食",
        "过马路必须等绿灯",
        "尊重多元文化习俗"
      ],
      "transport": "地铁和巴士网络完善，易通卡可通用所有公共交通，出租车安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在新加坡旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足"
      ],
      "cultural": [
        "尊重新加坡的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息"
      ]
    },
    "travel_tips": {
      "best_season": "2-4月,11-1月",
      "weather": {
        "spring": {
          "temp": "24-32°C",
          "tips": "炎热,注意防晒"
        },
        "summer": {
          "temp": "26-34°C",
          "tips": "高温高湿,多喝水"
        },
        "autumn": {
          "temp": "25-33°C",
          "tips": "烟雾季节,佩戴口罩"
        },
        "winter": {
          "temp": "23-31°C",
          "tips": "最佳旅游季节"
        }
      },
      "budget": {
        "daily_budget": "SGD100-200/天",
        "accommodation": "SGD80-250/晚",
        "food": "SGD20-60/天",
        "transport": "SGD10-20/天"
      },
      "visas": {
        "chinese_citizens": "可免签停留30天",
        "visa_free_countries": "164个国家免签"
      },
      "language": {
        "primary": "英语、马来语、汉语、泰米尔语",
        "english_spoken": "普遍,官方语言之一",
        "essential_phrases": {
          "谢谢": "Thank you / Terima Kasih",
          "对不起": "Sorry / Maaf",
          "警察在哪里": "Where is the police?"
        }
      }
    },
    "overview": "新加坡是东南亚的城邦国家，被誉为'花园城市'。这座多元文化融合的现代化都市，以高效的政府、清洁的环境和严格的法制著称。作为亚洲重要的金融、贸易和航运中心，新加坡连接着东西方文化，为游客提供独特的多元体验。",
    "safety_history": "新加坡建立了全球领先的城市安全体系。通过全覆盖的监控系统、严格的法律制度、高效的应急响应机制和全民安全教育，新加坡成为世界上最安全的城市之一。2020年全球安全指数排名中，新加坡位居前列。"
  },
  "seoul": {
    "id": "seoul",
    "name": "首尔",
    "nameEn": "Seoul",
    "country": "韩国",
    "continent": "亚洲",
    "flag": "🇰🇷",
    "lat": 37.5665,
    "lng": 126.978,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 93,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "文化景点多",
      "购物便利",
      "医疗水平高"
    ],
    "risks"5-60","desc":"斯里兰卡蟹","tip":"无招牌海鲜"},{"name":"海南鸡饭","type":"新加坡","price":"S$5-12","desc":"白切鸡","tip":"天天海南鸡饭"},{"name":"叻沙","type":"马来","price":"S$6-12","desc":"椰奶咖喱面","tip":"328叻沙"}],"attractions":[{"name":"滨海湾金沙","type":"地标","desc":"空中花园","hidden":false},{"name":"鱼尾狮","type":"地标","desc":"新加坡标志","hidden":false},{"name":"牛车水","type":"唐人街","desc":"百年老店","hidden":false},{"name":"哈芝巷","type":"街区","desc":"涂鸦墙","hidden":true}],"festivals":[{"name":"新加坡日","date":"8月9日","desc":"国庆阅兵"},{"name":"美食节","date":"7月","desc":"小贩美食"},{"name":"中秋灯会","date":"9月","desc":"牛车水"}],"customs":["保持卫生","地铁禁食","对长辈用您","先找座位"],"transport":"MRT覆盖全岛，Grab叫车","hotspots":[{"area":"芽笼","desc":"红灯区","risk":"中"},{"area":"小印度","desc":"周末拥挤","risk":"低"}],"safeAreas":["滨海湾","乌节路","圣淘沙","荷兰村"]}},
        {
          "name": "辣椒蟹",
          "type": "海鲜",
          "price": "SGD30-50",
          "desc": "甜辣酱汁配新鲜螃蟹"
        },
        {
          "name": "肉骨茶",
          "type": "汤品",
          "price": "SGD8-12",
          "desc": "排骨汤配药材",
          "tip": "胡椒味和药材味两种选择"
        },
        {
          "name": "叻沙",
          "type": "面食",
          "price": "SGD5-8",
          "desc": "椰浆咖喱汤面"
        }
      ],
      "attractions": [
        {
          "name": "滨海湾花园",
          "type": "公园",
          "desc": "未来感十足的超级花园",
          "hidden": false
        },
        {
          "name": "鱼尾狮公园",
          "type": "地标",
          "desc": "新加坡标志性景点",
          "hidden": false
        },
        {
          "name": "圣淘沙岛",
          "type": "度假村",
          "desc": "综合度假胜地",
          "hidden": false
        },
        {
          "name": "武吉士街市",
          "type": "集市",
          "desc": "本地人常逛的街头市场",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "春节",
          "date": "1-2月",
          "desc": "华人传统新年"
        },
        {
          "name": "开斋节",
          "date": "4-5月",
          "desc": "马来族重要节日"
        },
        {
          "name": "屠妖节",
          "date": "10-11月",
          "desc": "印度族光明节"
        }
      ],
      "customs": [
        "公共场合禁止吃口香糖",
        "不要随地乱扔垃圾",
        "地铁上禁止饮食",
        "过马路必须等绿灯",
        "尊重多元文化习俗"
      ],
      "transport": "地铁和巴士网络完善，易通卡可通用所有公共交通，出租车安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在新加坡旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足"
      ],
      "cultural": [
        "尊重新加坡的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息"
      ]
    },
    "travel_tips": {
      "best_season": "2-4月,11-1月",
      "weather": {
        "spring": {
          "temp": "24-32°C",
          "tips": "炎热,注意防晒"
        },
        "summer": {
          "temp": "26-34°C",
          "tips": "高温高湿,多喝水"
        },
        "autumn": {
          "temp": "25-33°C",
          "tips": "烟雾季节,佩戴口罩"
        },
        "winter": {
          "temp": "23-31°C",
          "tips": "最佳旅游季节"
        }
      },
      "budget": {
        "daily_budget": "SGD100-200/天",
        "accommodation": "SGD80-250/晚",
        "food": "SGD20-60/天",
        "transport": "SGD10-20/天"
      },
      "visas": {
        "chinese_citizens": "可免签停留30天",
        "visa_free_countries": "164个国家免签"
      },
      "language": {
        "primary": "英语、马来语、汉语、泰米尔语",
        "english_spoken": "普遍,官方语言之一",
        "essential_phrases": {
          "谢谢": "Thank you / Terima Kasih",
          "对不起": "Sorry / Maaf",
          "警察在哪里": "Where is the police?"
        }
      }
    },
    "overview": "新加坡是东南亚的城邦国家，被誉为'花园城市'。这座多元文化融合的现代化都市，以高效的政府、清洁的环境和严格的法制著称。作为亚洲重要的金融、贸易和航运中心，新加坡连接着东西方文化，为游客提供独特的多元体验。",
    "safety_history": "新加坡建立了全球领先的城市安全体系。通过全覆盖的监控系统、严格的法律制度、高效的应急响应机制和全民安全教育，新加坡成为世界上最安全的城市之一。2020年全球安全指数排名中，新加坡位居前列。"
  },
  "seoul": {
    "id": "seoul",
    "name": "首尔",
    "nameEn": "Seoul",
    "country": "韩国",
    "continent": "亚洲",
    "flag": "🇰🇷",
    "lat": 37.5665,
    "lng": 126.978,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 93,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "文化景点多",
      "购物便利",
      "医疗水平高"
    ],
    "risks": [
      "自然灾害风险",
      "蚊虫叮咬",
      "部分城市交通拥堵"
    ],
    "emergency": {
      "touristPolice": "1330",
      "touristHotline": "1330",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"韩式烤肉","type":"韩式","price":"₩15000-40000","desc":"烤肉配生菜","tip":"弘大"},{"name":"炸鸡啤酒","type":"韩式","price":"₩12000-25000","desc":"韩式炸鸡","tip":"BHC"},{"name":"参鸡汤","type":"韩式","price":"₩15000-25000","desc":"人参鸡汤","tip":"土俗村"},{"name":"辣炒年糕","type":"小吃","price":"₩3000-8000","desc":"辣酱年糕","tip":"明洞"}],"attractions":[{"name":"景福宫","type":"宫殿","desc":"朝鲜王朝","hidden":false},{"name":"明洞","type":"购物","desc":"购物天堂","hidden":false},{"name":"弘大","type":"艺术区","desc":"潮流","hidden":false},{"name":"北村韩屋","type":"街区","desc":"传统韩屋","hidden":true}],"festivals":[{"name":"首尔灯节","date":"11月","desc":"清溪川"},{"name":"韩服节","date":"10月","desc":"穿韩服"},{"name":"樱花季","date":"4月","desc":"汝矣岛"}],"customs":["长辈优先","不倒满酒","双手递接","室内禁烟"],"transport":"地铁四通八达，T-money卡","hotspots":[{"area":"东大门","desc":"批发区","risk":"中"},{"area":"江南","desc":"时尚","risk":"低"}],"safeAreas":["江南","狎鸥亭","益善洞","仁寺洞"]}},
        {
          "name": "泡菜",
          "type": "发酵食品",
          "price": "₩5,000-10,000",
          "desc": "韩国传统发酵蔬菜，每家餐厅味道都不同",
          "tip": "有几百种泡菜，不只是白菜泡菜"
        },
        {
          "name": "石锅拌饭",
          "type": "米饭",
          "price": "₩8,000-15,000",
          "desc": "热石锅盛装的营养拌饭，底部有锅巴",
          "tip": "全州石锅拌饭最著名，全州是发源地"
        },
        {
          "name": "炸鸡",
          "type": "韩式",
          "price": "₩12,000-20,000",
          "desc": "酥脆炸鸡配特制酱料，夜宵首选",
          "tip": "甜辣味和蒜味最受欢迎，搭配啤酒就是\"炸鸡啤酒\""
        },
        {
          "name": "冷面",
          "type": "面食",
          "price": "₩8,000-12,000",
          "desc": "清凉爽口的冷汤面，夏天解暑",
          "tip": "平壤冷面和水冷面两种，平壤冷面更酸"
        }
      ],
      "attractions": [
        {
          "name": "景福宫",
          "type": "宫殿",
          "desc": "朝鲜王朝的主要宫殿，有守门将换岗仪式",
          "hidden": false
        },
        {
          "name": "明洞",
          "type": "购物街",
          "desc": "首尔最繁华的购物区，美妆、服装、街头小吃",
          "hidden": false
        },
        {
          "name": "南山塔",
          "type": "观景台",
          "desc": "首尔最佳观景点，夜晚俯瞰城市全景",
          "hidden": false
        },
        {
          "name": "北村韩屋村",
          "type": "历史区",
          "desc": "保留传统韩屋的街区，感受朝鲜王朝风貌",
          "hidden": false
        },
        {
          "name": "益善洞",
          "type": "艺术区",
          "desc": "充满艺术气息的小巷，独立咖啡馆和精品店",
          "hidden": true
        },
        {
          "name": "汉江公园",
          "type": "公园",
          "desc": "沿汉江的城市公园，适合散步、骑行、野餐",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "首尔灯光节",
          "date": "11月",
          "desc": "首尔市中心的灯光艺术装置，夜景迷人"
        },
        {
          "name": "江南樱花节",
          "date": "4月",
          "desc": "樱花盛开季节，汝矣岛赏樱胜地"
        },
        {
          "name": "首尔国际烟花节",
          "date": "10月",
          "desc": "韩流音乐配合盛大烟花表演",
          "hidden": false
        },
        {
          "name": "首尔佛诞日灯会",
          "date": "5月",
          "desc": "庆祝佛诞日，寺庙和街道装饰灯笼"
        }
      ],
      "customs": [
        "和长辈一起喝酒要侧身，不要正面饮酒",
        "双手接过长辈给的物品，表示尊重",
        "鞋子要整齐放在门口，不要踩踏",
        "不要给小费，韩国没有小费文化",
        "公共场合保持安静，不要大声说话",
        "用筷子时不要指人",
        "不要用筷子插食物，这被认为不吉利"
      ],
      "transport": "地铁系统发达，覆盖全市，T-money卡可用于交通和便利店支付。出租车分普通、模范、大型三种，价格递增。"
    },
    "safety_tips": {
      "crime": [
        "在韩国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重韩国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "首都是韩国的政治、经济、文化中心，拥有超过500万人口。这座活力四射的现代化都市，完美融合了古老的宫殿和繁华的购物区。作为K-pop、韩剧等韩国文化的发源地，首尔吸引了大量国际游客。",
    "safety_history": "韩国建立了完善的城市安全管理体系。首尔作为首都，拥有先进的监控系统、高效的应急响应机制和严格的交通管理。近年来，通过智能城市建设和安全科技应用，城市安全水平持续提升，为国际游客提供了可靠的安全保障。"
  },
  "hong_kong": {
    "id": "hong_kong",
    "name": "香港",
    "nameEn": "Hong Kong",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇭🇰",
    "lat": 22.3193,
    "lng": 114.1694,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 82,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B",
        "health": "B+",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "文化景点多",
      "购物便利",
      "医疗水平高"
    ],
    "risks": [
      "食品安全",
      "语言沟通问题",
      "部分城市交通拥堵"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"港式奶茶","type":"茶餐厅","price":"HK"hong_kong": {
    "id": "hong_kong",
    "name": "香港",
    "nameEn": "Hong Kong",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇭🇰",
    "lat": 22.3193,
    "lng": 114.1694,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 82,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B",
        "health": "B+",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "文化景点多",
      "购物便利",
      "医疗水平高"
    ],
    "risks": [
      "食品安全",
      "语言沟通问题",
      "部分城市交通拥堵"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {5-30","desc":"丝滑奶茶","tip":"兰芳园"},{"name":"云吞面","type":"粤菜","price":"HK$35-60","desc":"鲜虾云吞","tip":"麦焕池记"},{"name":"烧腊","type":"粤菜","price":"HK$40-80","desc":"叉烧烧鹅","tip":"深井"},{"name":"鸡蛋仔","type":"小吃","price":"HK"hong_kong": {
    "id": "hong_kong",
    "name": "香港",
    "nameEn": "Hong Kong",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇭🇰",
    "lat": 22.3193,
    "lng": 114.1694,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 82,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B",
        "health": "B+",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "文化景点多",
      "购物便利",
      "医疗水平高"
    ],
    "risks": [
      "食品安全",
      "语言沟通问题",
      "部分城市交通拥堵"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {5-25","desc":"脆皮蛋糕","tip":"街边"}],"attractions":[{"name":"维多利亚港","type":"地标","desc":"世界三大夜景","hidden":false},{"name":"太平山顶","type":"景点","desc":"俯瞰全港","hidden":false},{"name":"迪士尼","type":"乐园","desc":"童话王国","hidden":false},{"name":"南丫岛","type":"离岛","desc":"渔村","hidden":true}],"festivals":[{"name":"农历新年","date":"1-2月","desc":"烟花"},{"name":"中秋节","date":"9月","desc":"舞火龙"},{"name":"赛马季","date":"9月-7月","desc":"跑马地"}],"customs":["排队秩序","不乱扔垃圾","地铁禁食","给导游小费"],"transport":"MTR地铁发达，天星小轮","hotspots":[{"area":"旺角","desc":"复杂","risk":"中"},{"area":"油麻地","desc":"夜市","risk":"低"}],"safeAreas":["中环","铜锣湾","山顶","浅水湾"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "香港是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，香港拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "beijing": {
    "id": "beijing",
    "name": "北京",
    "nameEn": "Beijing",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 39.9042,
    "lng": 116.4074,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 83,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B+",
        "health": "B+",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "购物便利",
      "发达公共交通",
      "文化景点多"
    ],
    "risks": [
      "蚊虫叮咬",
      "部分城市交通拥堵",
      "食品安全"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"北京烤鸭","type":"京菜","price":"¥80-200","desc":"挂炉烤鸭","tip":"全聚德"},{"name":"涮羊肉","type":"京菜","price":"¥50-150","desc":"铜锅","tip":"东来顺"},{"name":"炸酱面","type":"面食","price":"¥15-40","desc":"手擀面","tip":"海碗居"},{"name":"豆汁","type":"小吃","price":"¥5-15","desc":"老传统","tip":"锦芳"}],"attractions":[{"name":"故宫","type":"宫殿","desc":"明清皇宫","hidden":false},{"name":"长城","type":"古迹","desc":"八达岭","hidden":false},{"name":"天坛","type":"古迹","desc":"祈年殿","hidden":false},{"name":"什刹海","type":"街区","desc":"胡同","hidden":true}],"festivals":[{"name":"春节","date":"1-2月","desc":"庙会"},{"name":"国庆","date":"10月1日","desc":"广场"},{"name":"两会","date":"3月","desc":"人大"}],"customs":["故宫预约","长城穿鞋","正规游","谨慎购物"],"transport":"地铁发达","hotspots":[{"area":"三里屯","desc":"酒吧","risk":"低"},{"area":"前门","desc":"游客","risk":"低"}],"safeAreas":["东城","西城","朝阳","海淀"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "北京是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，北京拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "shanghai": {
    "id": "shanghai",
    "name": "上海",
    "nameEn": "Shanghai",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 31.2304,
    "lng": 121.4737,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A-",
        "health": "B+",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "文化景点多",
      "医疗水平高",
      "美食丰富",
      "发达公共交通"
    ],
    "risks": [
      "语言沟通问题",
      "自然灾害风险",
      "食品安全"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"生煎包","type":"小吃","price":"¥10-25","desc":"底脆汤多","tip":"佳佳"},{"name":"红烧肉","type":"本帮","price":"¥30-80","desc":"浓油赤酱","tip":"老吉士"},{"name":"小笼包","type":"点心","price":"¥15-40","desc":"皮薄汤鲜","tip":"南翔"},{"name":"排骨年糕","type":"小吃","price":"¥15-35","desc":"炸排骨","tip":"鲜得来"}],"attractions":[{"name":"外滩","type":"地标","desc":"万国建筑","hidden":false},{"name":"陆家嘴","type":"金融","desc":"摩天楼","hidden":false},{"name":"田子坊","type":"创意","desc":"石库门","hidden":false},{"name":"武康路","type":"街区","desc":"梧桐树","hidden":true}],"festivals":[{"name":"时装周","date":"3月、10月","desc":"时尚"},{"name":"进博会","date":"11月","desc":"进口"},{"name":"灯光秀","date":"每晚","desc":"浦江"}],"customs":["排队秩序","地铁禁食","不乱扔","小费非必须"],"transport":"地铁发达，共享单车","hotspots":[{"area":"城隍庙","desc":"游客多","risk":"中"},{"area":"七宝","desc":"古镇","risk":"低"}],"safeAreas":["静安","黄浦","长宁","徐汇"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "上海是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，上海拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "bangkok": {
    "id": "bangkok",
    "name": "曼谷",
    "nameEn": "Bangkok",
    "country": "泰国",
    "continent": "亚洲",
    "flag": "🇹🇭",
    "lat": 13.7563,
    "lng": 100.5018,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "B",
        "transport": "A-",
        "health": "B+",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "文化景点多",
      "医疗水平高",
      "美食丰富",
      "发达公共交通"
    ],
    "risks": [
      "部分城市交通拥堵",
      "食品安全",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "1155",
      "touristHotline": "1678",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"冬阴功","type":"泰式","price":"฿150-400","desc":"酸辣虾汤","tip":"Poom Mai"},{"name":"泰式炒河粉","type":"泰式","price":"฿60-150","desc":"Pad Thai","tip":"唐人街"},{"name":"芒果糯米饭","type":"甜点","price":"฿50-120","desc":"椰浆糯米饭","tip":"水上市集"},{"name":"烤肉串","type":"小吃","price":"฿20-50","desc":"沙爹","tip":"恰图恰"}],"attractions":[{"name":"大皇宫","type":"宫殿","desc":"皇室官邸","hidden":false},{"name":"卧佛寺","type":"寺庙","desc":"46米卧佛","hidden":false},{"name":"郑王庙","type":"寺庙","desc":"黎明寺","hidden":false},{"name":"考山路","type":"街区","desc":"背包客","hidden":true}],"festivals":[{"name":"泼水节","date":"4月13-15日","desc":"宋干节"},{"name":"水灯节","date":"11月","desc":"湄南河"},{"name":"国王生日","date":"12月5日","desc":"圣体节"}],"customs":["寺庙脱鞋","不可指点点","尊重皇室","不摸头"],"transport":"BTS空铁，MRT地铁","hotspots":[{"area":"考山路","desc":"背包客区","risk":"中"},{"area":"是隆区","desc":"商业","risk":"低"}],"safeAreas":["素坤逸","暹罗广场","湄南河畔","无线路"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在泰国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重泰国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "曼谷是泰国的重要城市，位于亚洲。作为该地区的经济、文化中心，曼谷拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "kuala_lumpur": {
    "id": "kuala_lumpur",
    "name": "吉隆坡",
    "nameEn": "Kuala Lumpur",
    "country": "马来西亚",
    "continent": "亚洲",
    "flag": "🇲🇾",
    "lat": 3.139,
    "lng": 101.6869,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "B+",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "美食丰富",
      "发达公共交通",
      "购物便利",
      "文化景点多"
    ],
    "risks": [
      "部分城市交通拥堵",
      "语言沟通问题",
      "食品安全"
    ],
    "emergency": {
      "touristPolice": "999",
      "touristHotline": "1300-88-5050",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"肉骨茶","type":"马来","price":"RM15-30","desc":"胡椒猪骨汤","tip":"新峰肉骨茶"},{"name":"椰浆饭","type":"马来","price":"RM8-15","desc":"Nasi Lemak","tip":"嘛嘛档"},{"name":"沙爹","type":"小吃","price":"RM5-12","desc":"烤肉串","tip":"阿罗街"},{"name":"榴莲","type":"水果","price":"RM20-50","desc":"猫山王","tip":"榴莲档"}],"attractions":[{"name":"双子塔","type":"地标","desc":"世界最高双塔","hidden":false},{"name":"独立广场","type":"地标","desc":"马来西亚标志","hidden":false},{"name":"茨厂街","type":"唐人街","desc":"华人美食","hidden":false},{"name":"阿罗街","type":"夜市","desc":"美食夜市","hidden":true}],"festivals":[{"name":"开斋节","date":"4月","desc":"马来新年"},{"name":"国庆日","date":"8月31日","desc":"独立日"},{"name":"大宝节","date":"1月","desc":"印度节日"}],"customs":["不清真食物注意","周五祈祷","右手进食","参观清真寺脱鞋"],"transport":"地铁LRT，Grab叫车","hotspots":[{"area":"武吉免登","desc":"商业区","risk":"低"},{"area":"嘉美清真寺","desc":"宗教区","risk":"低"}],"safeAreas":["KLCC","武吉免登","安邦","白沙罗"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在马来西亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重马来西亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "吉隆坡是马来西亚的重要城市，位于亚洲。作为该地区的经济、文化中心，吉隆坡拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "taipei": {
    "id": "taipei",
    "name": "台北",
    "nameEn": "Taipei",
    "country": "台湾",
    "continent": "亚洲",
    "flag": "🇹🇼",
    "lat": 25.033,
    "lng": 121.5654,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 91,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "发达公共交通",
      "文化景点多",
      "医疗水平高"
    ],
    "risks": [
      "部分城市交通拥堵",
      "食品安全",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"牛肉面","type":"台菜","price":"NT"taipei": {
    "id": "taipei",
    "name": "台北",
    "nameEn": "Taipei",
    "country": "台湾",
    "continent": "亚洲",
    "flag": "🇹🇼",
    "lat": 25.033,
    "lng": 121.5654,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 91,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "发达公共交通",
      "文化景点多",
      "医疗水平高"
    ],
    "risks": [
      "部分城市交通拥堵",
      "食品安全",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {50-350","desc":"红烧或清炖","tip":"林东芳"},{"name":"小笼包","type":"点心","price":"NT"taipei": {
    "id": "taipei",
    "name": "台北",
    "nameEn": "Taipei",
    "country": "台湾",
    "continent": "亚洲",
    "flag": "🇹🇼",
    "lat": 25.033,
    "lng": 121.5654,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 91,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "发达公共交通",
      "文化景点多",
      "医疗水平高"
    ],
    "risks": [
      "部分城市交通拥堵",
      "食品安全",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {00-250","desc":"鼎泰丰","tip":"信义店"},{"name":"珍珠奶茶","type":"饮品","price":"NT$50-100","desc":"发源地","tip":"春水堂"},{"name":"蚵仔煎","type":"小吃","price":"NT$50-120","desc":"牡蛎蛋","tip":"宁夏夜市"}],"attractions":[{"name":"101大楼","type":"地标","desc":"最高绿建筑","hidden":false},{"name":"士林夜市","type":"夜市","desc":"最大夜市","hidden":false},{"name":"故宫","type":"博物馆","desc":"中华瑰宝","hidden":false},{"name":"阳明山","type":"自然","desc":"火山温泉","hidden":true}],"festivals":[{"name":"灯节","date":"2月","desc":"元宵"},{"name":"端午","date":"5月","desc":"龙舟"},{"name":"中秋","date":"9月","desc":"烤肉"}],"customs":["不乱扔垃圾","捷运禁食","排队","小费非必须"],"transport":"捷运便利，悠游卡","hotspots":[{"area":"万华","desc":"老城","risk":"中"},{"area":"东区","desc":"商业","risk":"低"}],"safeAreas":["大安","信义","中山","内湖"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在台湾旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重台湾的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "台北是台湾的重要城市，位于亚洲。作为该地区的经济、文化中心，台北拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "osaka": {
    "id": "osaka",
    "name": "大阪",
    "nameEn": "Osaka",
    "country": "日本",
    "continent": "亚洲",
    "flag": "🇯🇵",
    "lat": 34.6937,
    "lng": 135.5023,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "新宿区（繁华区域）",
        "涩谷区（中央车站附近）",
        "港区（高档住宅区）",
        "千代田区（政府机关区域）"
      ],
      "hotspots": [
        {
          "area": "歌舞伎町",
          "desc": "夜生活区，注意拉客和诈骗",
          "risk": "中"
        },
        {
          "area": "六本木",
          "desc": "夜间娱乐区，注意酒后闹事",
          "risk": "中"
        },
        {
          "area": "新宿站周围",
          "desc": "人流密集，注意财物",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "发达公共交通",
      "文化景点多",
      "美食丰富"
    ],
    "risks": [
      "语言沟通问题",
      "食品安全",
      "自然灾害风险"
    ],
    "emergency": {
      "touristPolice": "03-5321-7837",
      "touristHotline": "050-3816-1857",
      "police": "110",
      "ambulance": "119",
      "fire": "119",
      "hospitals": [
        {
          "name": "东京大学医学部附属医院",
          "phone": "03-3815-5411",
          "address": "东京都文京区本郷7-3-1"
        },
        {
          "name": "圣路加国际医院",
          "phone": "03-3541-5151",
          "address": "东京都中央区明石町9-1"
        }
      ],
      "embassies": {
        "中国大使馆": "+81-3-3403-3388",
        "美国大使馆": "+81-3-3224-5000"
      },
      "apps": [
        "Safety tips (Japan)",
        "Google Translate",
        "Japan Transit Planner"
      ],
      "selfDefense": [
        "遇到危险时大声呼救\"tasukete\" (救命)",
        "前往附近的\"交番\" (小警察亭)求助",
        "下载\"Safety tips\"APP获取紧急信息"
      ]
    },
    "lifestyle": {{"food":[{"name":"章鱼烧","type":"小吃","price":"¥500-1000","desc":"章鱼丸","tip":"道顿堀"},{"name":"大阪烧","type":"日本","price":"¥800-2000","desc":"文字烧","tip":"鹤桥风月"},{"name":"串炸","type":"小吃","price":"¥300-800","desc":"油炸肉串","tip":"新世界"},{"name":"拉面","type":"面食","price":"¥700-1500","desc":"豚骨","tip":"金龙"}],"attractions":[{"name":"道顿堀","type":"街区","desc":"美食天堂","hidden":false},{"name":"大阪城","type":"城堡","desc":"丰臣秀吉","hidden":false},{"name":"环球影城","type":"乐园","desc":"哈利波特","hidden":false},{"name":"新世界","type":"街区","desc":"复古游戏","hidden":true}],"festivals":[{"name":"樱花季","date":"3-4月","desc":"城公园"},{"name":"通天阁","date":"全年","desc":"灯光秀"},{"name":"天神祭","date":"7月","desc":"三大祭"}],"customs":["电车禁食","不边走吃","垃圾分类","不乱扔"],"transport":"JR环状线，ICOCA","hotspots":[{"area":"飞田新地","desc":"红灯区","risk":"中"},{"area":"天王寺","desc":"热闹","risk":"低"}],"safeAreas":["梅田","心斋桥","天王寺","港岛"]}},
        {
          "name": "拉面",
          "type": "面食",
          "price": "¥800-1,500",
          "desc": "浓郁汤底配上Q弹手工面条，各地风味独特",
          "tip": "拉面店通常营业时间较短，建议提前查询营业时间"
        },
        {
          "name": "天妇罗",
          "type": "日本料理",
          "price": "¥1,500-3,000",
          "desc": "酥脆外衣包裹新鲜海鲜蔬菜，配特制天妇罗汁",
          "tip": "老字号天妇罗店往往需要预约"
        },
        {
          "name": "烤肉",
          "type": "烧烤",
          "price": "¥3,000-6,000",
          "desc": "高品质和牛烤肉，炭火烤制，肉质鲜嫩",
          "tip": "高级和牛店铺通常限量和预约"
        },
        {
          "name": "怀石料理",
          "type": "高级料理",
          "price": "¥15,000-30,000",
          "desc": "传统多道菜精致料理，体验日本饮食文化精髓",
          "tip": "需要提前预约，用餐时长2-3小时"
        }
      ],
      "attractions": [
        {
          "name": "浅草寺",
          "type": "寺庙",
          "desc": "东京最古老的佛教寺庙，雷门大灯笼是标志性景点",
          "hidden": false
        },
        {
          "name": "涩谷十字路口",
          "type": "地标",
          "desc": "世界最繁忙的十字路口，人流量惊人",
          "hidden": false
        },
        {
          "name": "明治神宫",
          "type": "神社",
          "desc": "供奉明治天皇和昭宪皇太后的神社，位于繁华都市中的绿洲",
          "hidden": false
        },
        {
          "name": "筑地市场",
          "type": "市场",
          "desc": "传统海鲜市场，可以体验清晨竞拍和新鲜海鲜",
          "hidden": false
        },
        {
          "name": "代官山茑屋书店",
          "type": "书店",
          "desc": "被评为全球最美书店，设计独特，艺术气息浓厚",
          "hidden": true
        },
        {
          "name": "根津美术馆庭园",
          "type": "庭园",
          "desc": "精致的传统日式庭园，人少清幽",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "樱花节",
          "date": "3月下旬-4月上旬",
          "desc": "全国赏樱热潮，上野公园、新宿御苑等都是著名赏樱地"
        },
        {
          "name": "神田祭",
          "date": "5月中旬",
          "desc": "日本三大祭之一，传统神舆游行，热闹非凡"
        },
        {
          "name": "花火大会",
          "date": "7-8月",
          "desc": "夏日盛大烟花盛宴，隅田川花火大会最著名"
        },
        {
          "name": "时代祭",
          "date": "10月22日",
          "desc": "京都传统祭典，展示平安时代的历史服饰和传统"
        }
      ],
      "customs": [
        "进入室内需要脱鞋，注意不要踩踏门槛",
        "不要在电车上大声说话，手机需设置为静音",
        "给小费是不礼貌的行为，服务费已包含在账单中",
        "不要边走边吃，站在店铺旁边吃完再走",
        "公共场合尽量避免大声打电话，使用耳机接听",
        "递东西时使用双手，表示尊重",
        "不要用筷子直插米饭（像上香一样）"
      ],
      "transport": "公共交通非常发达，地铁和电车是最主要交通方式。建议购买一日券（Tokyo Metro 24/48/72小时券）、西瓜卡（Suica）或Pasmo卡，充值即可使用。出租车价格较高，但服务优质。"
    },
    "safety_tips": {
      "crime": [
        "在日本旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重日本的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "大阪是日本的重要城市，位于亚洲。作为该地区的经济、文化中心，大阪拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "mumbai": {
    "id": "mumbai",
    "name": "孟买",
    "nameEn": "Mumbai",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 19.076,
    "lng": 72.8777,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 61,
      "grade": "B-",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "文化景点多",
      "医疗水平高",
      "发达公共交通",
      "购物便利"
    ],
    "risks": [
      "语言沟通问题",
      "食品安全",
      "自然灾害风险"
    ],
    "emergency": {
      "touristPolice": "100",
      "touristHotline": "91-11-2338-1234",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"孟买特色菜","type":"印度","price":"₹150-400","desc":"Pav Bhaji","tip":"街头"},{"name":"孟买三角饼","type":"小吃","price":"₹30-80","desc":"Vada Pav","tip":"火车站"},{"name":"印度甜点","type":"甜点","price":"₹50-150","desc":"Ladoo","tip":"甜品店"},{"name":"椰子水","type":"饮品","price":"₹30-60","desc":" tender Coconut","tip":"海滩"}],"attractions":[{"name":"印度门","type":"地标","desc":"地标建筑","hidden":false},{"name":"宝莱坞","type":"电影","desc":"电影工厂","hidden":false},{"name":"滨海大道","type":"海滩","desc":"海边步道","hidden":false},{"name":"千人洗衣场","type":"奇观","desc":"百年洗衣","hidden":true}],"festivals":[{"name":"孟买电影节","date":"10月","desc":"宝莱坞"},{"name":"象神节","date":"8-9月","desc":" Ganesh Chaturthi"},{"name":"独立日","date":"8月15日","desc":"国庆"}],"customs":["给小费","注意财物","女性注意","防骗"],"transport":"本地火车、的士","hotspots":[{"area":" Crawford","desc":"市场","risk":"中"},{"area":"Colaba","desc":"旅游区","risk":"低"}],"safeAreas":["南孟买","班德拉","安德瑞","浦那"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印度旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印度的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "孟买是印度的重要城市，位于亚洲。作为该地区的经济、文化中心，孟买拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "delhi": {
    "id": "delhi",
    "name": "德里",
    "nameEn": "New Delhi",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 28.6139,
    "lng": 77.209,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 79,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "B",
        "health": "B",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "文化景点多",
      "购物便利",
      "发达公共交通"
    ],
    "risks": [
      "食品安全",
      "蚊虫叮咬",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "100",
      "touristHotline": "91-11-2338-1234",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"印度香饭","type":"印度","price":"₹200-500","desc":"Biryani","tip":"Karim's"},{"name":"印度烤鸡","type":"印度","price":"₹250-600","desc":"Butter Chicken","tip":"老城"},{"name":"印度煎饼","type":"小吃","price":"₹30-80","desc":"Paratha","tip":"街头"},{"name":"拉茶","type":"饮品","price":"₹20-50","desc":"Chai","tip":"茶摊"}],"attractions":[{"name":"泰姬陵","type":"古迹","desc":"世界新七大奇迹","hidden":false},{"name":"红堡","type":"历史","desc":"莫卧儿帝国","hidden":false},{"name":"贾玛清真寺","type":"寺庙","desc":"印度最大","hidden":false},{"name":"月光集市","type":"老城","desc":"传统市场","hidden":true}],"festivals":[{"name":"排灯节","date":"10-11月","desc":"印度新年"},{"name":"洒红节","date":"3月","desc":"色彩节"},{"name":"独立日","date":"8月15日","desc":"国庆"}],"customs":["左手不递物","不摸小孩头","寺庙脱鞋","砍价"],"transport":"地铁、Auto","hotspots":[{"area":"火车站","desc":"小偷多","risk":"高"},{"area":"康诺特广场","desc":"商业","risk":"低"}],"safeAreas":["新德里","萨罗基尼","维杰瓦纳","古尔冈"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印度旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印度的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "德里是印度的重要城市，位于亚洲。作为该地区的经济、文化中心，德里拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "jakarta": {
    "id": "jakarta",
    "name": "雅加达",
    "nameEn": "Jakarta",
    "country": "印尼",
    "continent": "亚洲",
    "flag": "🇮🇩",
    "lat": -6.2088,
    "lng": 106.8456,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 78,
      "grade": "B+",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "B",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "文化景点多",
      "购物便利",
      "发达公共交通"
    ],
    "risks": [
      "语言沟通问题",
      "自然灾害风险",
      "部分城市交通拥堵"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"印尼炒饭","type":"印尼","price":"Rp25000-60000","desc":"Nasi Goreng","tip":"街头"},{"name":"沙嗲","type":"小吃","price":"Rp15000-35000","desc":"Sate","tip":"夜市"},{"name":"印尼春卷","type":"小吃","price":"Rp5000-15000","desc":"Lumpia","tip":"唐人街"},{"name":"椰子糕","type":"甜点","price":"Rp5000-12000","desc":"Kue Putu","tip":"街头"}],"attractions":[{"name":"独立广场","type":"地标","desc":"印尼标志","hidden":false},{"name":"民族纪念塔","type":"地标","desc":" Monument","hidden":false},{"name":"老城区","type":"老城","desc":"荷式建筑","hidden":false},{"name":"安佐尔梦幻公园","type":"乐园","desc":"主题公园","hidden":true}],"festivals":[{"name":"独立日","date":"8月17日","desc":"国庆"},{"name":"开斋节","date":"4月","desc":" Eid"},{"name":"雅加达节","date":"8月","desc":"文化节"}],"customs":["左手不递物","进入脱鞋","宗教场所着装","交通拥堵"],"transport":"地铁、Grab","hotspots":[{"area":"老城区","desc":"复杂","risk":"中"},{"area":"库塔","desc":"商业","risk":"低"}],"safeAreas":["中雅加达","南雅加达","西雅加达","丹拿阿邦"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印尼旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印尼的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "雅加达是印尼的重要城市，位于亚洲。作为该地区的经济、文化中心，雅加达拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "ho_chi_minh": {
    "id": "ho_chi_minh",
    "name": "胡志明市",
    "nameEn": "Ho Chi Minh City",
    "country": "越南",
    "continent": "亚洲",
    "flag": "🇻🇳",
    "lat": 10.8231,
    "lng": 106.6297,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "A-",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "购物便利",
      "文化景点多",
      "医疗水平高"
    ],
    "risks": [
      "自然灾害风险",
      "语言沟通问题",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "113",
      "touristHotline": "84-24-3933-1111",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"越南河粉","type":"越南","price":"₫50000-120000","desc":"Pho牛肉粉","tip":"锦灿"},{"name":"越南法棍","type":"小吃","price":"₫20000-40000","desc":"Bánh mì","tip":"范老五街"},{"name":"越南春卷","type":"越南","price":"₫30000-60000","desc":"Gỏi cuốn","tip":"街头"},{"name":"滴漏咖啡","type":"饮品","price":"₫25000-50000","desc":"Cà phê sữa đá","tip":"咖啡公寓"}],"attractions":[{"name":"统一宫","type":"历史","desc":"战争遗迹","hidden":false},{"name":"范老五街","type":"街区","desc":"背包客区","hidden":false},{"name":"滨城市场","type":"市场","desc":"百年市场","hidden":false},{"name":"咖啡公寓","type":"咖啡","desc":"INS打卡","hidden":true}],"festivals":[{"name":"越南新年","date":"1-2月","desc":"Tết"},{"name":"解放日","date":"4月30日","desc":"统一纪念"},{"name":"中秋节","date":"9月","desc":"儿童节"}],"customs":["不踩门槛","不触摸头部","接受物品用双手","砍价正常"],"transport":"摩托出租，Grab","hotspots":[{"area":"范老五街","desc":"游客区","risk":"中"},{"area":"第五郡","desc":"唐人街","risk":"中"}],"safeAreas":["第一郡","第七郡","第三郡","守德"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在越南旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重越南的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "胡志明市是越南的重要城市，位于亚洲。作为该地区的经济、文化中心，胡志明市拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "manila": {
    "id": "manila",
    "name": "马尼拉",
    "nameEn": "Manila",
    "country": "菲律宾",
    "continent": "亚洲",
    "flag": "🇵🇭",
    "lat": 14.5995,
    "lng": 120.9842,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 77,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "B",
        "health": "B",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "文化景点多",
      "购物便利",
      "美食丰富",
      "医疗水平高"
    ],
    "risks": [
      "部分城市交通拥堵",
      "食品安全",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "166",
      "touristHotline": "63-2-524-1728",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"烤鸡","type":"菲律宾","price":"₱150-300","desc":"Lechon","tip":"著名连锁"},{"name":"Halo-halo","type":"甜点","price":"₱50-100","desc":"刨冰甜品","tip":"街头摊"},{"name":"Adobo","type":"菲律宾","price":"₱100-200","desc":"醋炖肉","tip":"家常菜"},{"name":"炸香蕉","type":"小吃","price":"₱20-50","desc":"Plant Chips","tip":"街边"}],"attractions":[{"name":"马尼拉湾","type":"海湾","desc":"日落美景","hidden":false},{"name":"圣地亚哥堡","type":"历史","desc":"西班牙古堡","hidden":false},{"name":"黎刹公园","type":"公园","desc":"国父纪念","hidden":false},{"name":"SM商场","type":"购物","desc":"最大商场","hidden":true}],"festivals":[{"name":"独立日","date":"6月12日","desc":"国庆"},{"name":"黑耶稣节","date":"1月9日","desc":"盛大游行"},{"name":"圣诞节","date":"12月","desc":"最长圣诞"}],"customs":["给小费","尊重长辈","避开午休","注意安全"],"transport":"吉普尼、Grab","hotspots":[{"area":"马尼拉湾区","desc":"较安全","risk":"低"},{"area":"码头区","desc":"复杂","risk":"中"}],"safeAreas":["马卡蒂","阿拉邦","文尼法寿","马尼拉湾区"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在菲律宾旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重菲律宾的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "马尼拉是菲律宾的重要城市，位于亚洲。作为该地区的经济、文化中心，马尼拉拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "dubai": {
    "id": "dubai",
    "name": "迪拜",
    "nameEn": "Dubai",
    "country": "阿联酋",
    "continent": "亚洲",
    "flag": "🇦🇪",
    "lat": 25.2048,
    "lng": 55.2708,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "文化景点多",
      "购物便利",
      "美食丰富",
      "发达公共交通"
    ],
    "risks": [
      "自然灾害风险",
      "部分城市交通拥堵",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "999",
      "touristHotline": "971-4-708-1111",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"沙瓦尔玛","type":"中东","price":"AED15-40","desc":"烤肉卷","tip":"老城区"},{"name":"骆驼奶","type":"饮品","price":"AED10-25","desc":"营养丰富","tip":"沙漠"},{"name":"海鲜","type":"海鲜","price":"AED80-200","desc":"波斯湾海鲜","tip":"Fish Market"},{"name":"阿拉伯甜点","type":"甜点","price":"AED10-30","desc":"椰枣","tip":"香料市集"}],"attractions":[{"name":"哈利法塔","type":"地标","desc":"世界最高","hidden":false},{"name":"棕榈岛","type":"人造岛","desc":"亚特兰蒂斯","hidden":false},{"name":"黄金市集","type":"市场","desc":"最大金市","hidden":false},{"name":"沙漠冲沙","type":"活动","desc":"日落Safari","hidden":true}],"festivals":[{"name":"购物节","date":"1月","desc":"全球最大"},{"name":"开斋节","date":"4月","desc":"宰牲节"},{"name":"美食节","date":"2月","desc":"国际美食"}],"customs":["斋月注意","着装得体","禁酒猪","周五休息"],"transport":"地铁无人驾驶，Taxi","hotspots":[{"area":"德拉","desc":"老城","risk":"中"},{"area":"Marina","desc":"高档","risk":"低"}],"safeAreas":["棕榈岛","市中心","Business Bay","海滩"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在阿联酋旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重阿联酋的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "迪拜是阿联酋的重要城市，位于亚洲。作为该地区的经济、文化中心，迪拜拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "doha": {
    "id": "doha",
    "name": "多哈",
    "nameEn": "Doha",
    "country": "卡塔尔",
    "continent": "亚洲",
    "flag": "🇶🇦",
    "lat": 25.2854,
    "lng": 51.531,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 92,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A-",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "发达公共交通",
      "美食丰富",
      "购物便利"
    ],
    "risks": [
      "自然灾害风险",
      "部分城市交通拥堵",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在卡塔尔旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重卡塔尔的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "多哈是卡塔尔的重要城市，位于亚洲。作为该地区的经济、文化中心，多哈拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "riyadh": {
    "id": "riyadh",
    "name": "利雅得",
    "nameEn": "Riyadh",
    "country": "沙特阿拉伯",
    "continent": "亚洲",
    "flag": "🇸🇦",
    "lat": 24.7136,
    "lng": 46.6753,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 90,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A-",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "美食丰富",
      "发达公共交通",
      "医疗水平高"
    ],
    "risks": [
      "自然灾害风险",
      "部分城市交通拥堵",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在沙特阿拉伯旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重沙特阿拉伯的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "利雅得是沙特阿拉伯的重要城市，位于亚洲。作为该地区的经济、文化中心，利雅得拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "muscat": {
    "id": "muscat",
    "name": "马斯喀特",
    "nameEn": "Muscat",
    "country": "阿曼",
    "continent": "亚洲",
    "flag": "🇴🇲",
    "lat": 23.588,
    "lng": 58.3829,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 92,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "美食丰富",
      "文化景点多",
      "医疗水平高"
    ],
    "risks": [
      "食品安全",
      "蚊虫叮咬",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在阿曼旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重阿曼的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "马斯喀特是阿曼的重要城市，位于亚洲。作为该地区的经济、文化中心，马斯喀特拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "tel_aviv": {
    "id": "tel_aviv",
    "name": "特拉维夫",
    "nameEn": "Tel Aviv",
    "country": "以色列",
    "continent": "亚洲",
    "flag": "🇮🇱",
    "lat": 32.0853,
    "lng": 34.7818,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 81,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "B+",
        "health": "B+",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "文化景点多",
      "购物便利",
      "发达公共交通",
      "美食丰富"
    ],
    "risks": [
      "食品安全",
      "部分城市交通拥堵",
      "自然灾害风险"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在以色列旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重以色列的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "特拉维夫是以色列的重要城市，位于亚洲。作为该地区的经济、文化中心，特拉维夫拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "istanbul": {
    "id": "istanbul",
    "name": "伊斯坦布尔",
    "nameEn": "Istanbul",
    "country": "土耳其",
    "continent": "亚洲",
    "flag": "🇹🇷",
    "lat": 41.0082,
    "lng": 28.9784,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 81,
      "grade": "A-",
      "grades": {
        "crime": "B",
        "transport": "A-",
        "health": "B",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "文化景点多",
      "购物便利",
      "发达公共交通",
      "美食丰富"
    ],
    "risks": [
      "食品安全",
      "部分城市交通拥堵",
      "自然灾害风险"
    ],
    "emergency": {
      "touristPolice": "155",
      "touristHotline": "90-212-463-3000",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在土耳其旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重土耳其的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "伊斯坦布尔是土耳其的重要城市，位于亚洲。作为该地区的经济、文化中心，伊斯坦布尔拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "bali": {
    "id": "bali",
    "name": "巴厘岛",
    "nameEn": "Bali",
    "country": "印尼",
    "continent": "亚洲",
    "flag": "🇮🇩",
    "lat": -8.4095,
    "lng": 115.1889,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "B-",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "美食丰富",
      "发达公共交通",
      "购物便利"
    ],
    "risks": [
      "部分城市交通拥堵",
      "蚊虫叮咬",
      "自然灾害风险"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"印尼炒饭","type":"印尼","price":"Rp30000-80000","desc":"Nasi Goreng","tip":"脏鸭"},{"name":"沙嗲","type":"小吃","price":"Rp20000-50000","desc":"烤肉串","tip":"街边"},{"name":"烤猪饭","type":"印尼","price":"Rp25000-60000","desc":"Babi Guling","tip":"Ibu Oka"},{"name":"椰子水","type":"饮品","price":"Rp10000-30000","desc":"新鲜","tip":"海边"}],"attractions":[{"name":"乌布皇宫","type":"宫殿","desc":"艺术中心","hidden":false},{"name":"海神庙","type":"寺庙","desc":"岩礁上","hidden":false},{"name":"圣泉寺","type":"寺庙","desc":"千佛泉","hidden":false},{"name":"梯田","type":"自然","desc":"火山梯田","hidden":true}],"festivals":[{"name":"安宁日","date":"3月","desc":"全岛静默"},{"name":"风筝节","date":"7-8月","desc":"比赛"},{"name":"狂欢节","date":"10月","desc":"沙滩"}],"customs":["寺庙纱笼","不摸头","左侧行","尊重祭"],"transport":"租摩托，Grab","hotspots":[{"area":"库塔","desc":"游客区","risk":"中"},{"area":"Seminyak","desc":"夜店","risk":"低"}],"safeAreas":["乌布","努沙杜瓦","金巴兰","沙努尔"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印尼旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印尼的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "巴厘岛是印尼的重要城市，位于亚洲。作为该地区的经济、文化中心，巴厘岛拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "chiangmai": {
    "id": "chiangmai",
    "name": "清迈",
    "nameEn": "Chiang Mai",
    "country": "泰国",
    "continent": "亚洲",
    "flag": "🇹🇭",
    "lat": 18.7883,
    "lng": 98.9853,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 70,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "C",
        "health": "B-",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "发达公共交通",
      "医疗水平高",
      "美食丰富"
    ],
    "risks": [
      "食品安全",
      "部分城市交通拥堵",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "1155",
      "touristHotline": "1678",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"泰北咖喱面","type":"泰式","price":"฿60-120","desc":"Khao Soi","tip":"老城"},{"name":"泰式炒面","type":"泰式","price":"฿40-80","desc":"Pad Thai","tip":"夜市"},{"name":"自助烤肉","type":"泰式","price":"฿80-200","desc":"Moo Yang","tip":"河边"},{"name":"泰式甜品","type":"甜点","price":"฿20-50","desc":"Khao Tom","tip":"老城"}],"attractions":[{"name":"古城墙","type":"历史","desc":"兰纳王朝","hidden":false},{"name":"素帖寺","type":"寺庙","desc":"双龙寺","hidden":false},{"name":"清迈夜市","type":"夜市","desc":"最大夜市","hidden":false},{"name":"宁曼路","type":"街区","desc":"文艺小清新","hidden":true}],"festivals":[{"name":"水灯节","date":"11月","desc":"天灯节"},{"name":"泼水节","date":"4月13日","desc":"宋干节"},{"name":"花节","date":"2月","desc":"鲜花节"}],"customs":["寺庙脱鞋","不指指点点","尊重僧侣","不摸头"],"transport":"双条车、摩托","hotspots":[{"area":"火车站区","desc":"复杂","risk":"中"},{"area":"老城区","desc":"旅游区","risk":"低"}],"safeAreas":["古城","宁曼","杭东","湄林"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在泰国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重泰国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "清迈是泰国的重要城市，位于亚洲。作为该地区的经济、文化中心，清迈拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "phuket": {
    "id": "phuket",
    "name": "普吉岛",
    "nameEn": "Phuket",
    "country": "泰国",
    "continent": "亚洲",
    "flag": "🇹🇭",
    "lat": 7.8804,
    "lng": 98.3923,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "B+",
        "health": "B+",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "发达公共交通",
      "购物便利",
      "美食丰富"
    ],
    "risks": [
      "蚊虫叮咬",
      "食品安全",
      "部分城市交通拥堵"
    ],
    "emergency": {
      "touristPolice": "1155",
      "touristHotline": "1678",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"海鲜","type":"海鲜","price":"฿200-800","desc":"龙虾螃蟹","tip":"芭东海滩"},{"name":"泰式炒饭","type":"泰式","price":"฿60-150","desc":"Khao Pad","tip":"夜市"},{"name":"水果","type":"水果","price":"฿30-100","desc":"榴莲山竹","tip":"市场"},{"name":"泰式甜点","type":"甜点","price":"฿20-50","desc":"椰子糕","tip":"街边"}],"attractions":[{"name":"芭东海滩","type":"海滩","desc":"最热闹","hidden":false},{"name":"皮皮岛","type":"离岛","desc":"浮潜天堂","hidden":false},{"name":"普吉大佛","type":"地标","desc":"山顶佛像","hidden":false},{"name":"普吉镇","type":"老城","desc":"葡式建筑","hidden":true}],"festivals":[{"name":"海鲜节","date":"11月","desc":"海鲜美食"},{"name":"狂欢节","date":"11月","desc":"街头派对"},{"name":"素食节","date":"9-10月","desc":"九皇斋节"}],"customs":["海滩注意财物","浮潜注意安全","尊重佛教","不摸僧侣"],"transport":"突突车、摩托","hotspots":[{"area":"芭东海滩","desc":"游客多","risk":"中"},{"area":"江西冷","desc":"商业区","risk":"低"}],"safeAreas":["芭东海滩","卡塔海滩","卡伦海滩","普吉镇"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在泰国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重泰国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "普吉岛是泰国的重要城市，位于亚洲。作为该地区的经济、文化中心，普吉岛拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "penang": {
    "id": "penang",
    "name": "槟城",
    "nameEn": "Penang",
    "country": "马来西亚",
    "continent": "亚洲",
    "flag": "🇲🇾",
    "lat": 5.4141,
    "lng": 100.3288,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 92,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "美食丰富",
      "发达公共交通",
      "医疗水平高",
      "文化景点多"
    ],
    "risks": [
      "食品安全",
      "自然灾害风险",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "999",
      "touristHotline": "1300-88-5050",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"叻沙","type":"马来","price":"RM8-18","desc":"Asam Laksa","tip":"汕头街"},{"name":"炒粿条","type":"马来","price":"RM6-15","desc":"Char Kway Teow","tip":"关仔角"},{"name":"椰子布丁","type":"甜点","price":"RM4-8","desc":"Coconut Pudding","tip":"街头"},{"name":"福建面","type":"马来","price":"RM8-16","desc":"Hokkien Mee","tip":"小贩中心"}],"attractions":[{"name":"乔治城","type":"老城","desc":"世界遗产","hidden":false},{"name":"升旗山","type":"景点","desc":"俯瞰全城","hidden":false},{"name":"壁画街","type":"艺术","desc":"街头涂鸦","hidden":false},{"name":"姓氏桥","type":"历史","desc":"华人村落","hidden":true}],"festivals":[{"name":"大宝森节","date":"1-2月","desc":"印度节日"},{"name":"中秋节","date":"9月","desc":"灯笼节"},{"name":"圣乔治节","date":"4月","desc":"槟城纪念"}],"customs":["遗产区慢行","左行","给小费","清真食品注意"],"transport":"公交、Grab","hotspots":[{"area":"汕头街","desc":"夜市","risk":"低"},{"area":"牛干冬","desc":"酒吧街","risk":"中"}],"safeAreas":["乔治城","丹绒道光","丹绒林","峇都丁宜"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在马来西亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重马来西亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "槟城是马来西亚的重要城市，位于亚洲。作为该地区的经济、文化中心，槟城拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "hanoi": {
    "id": "hanoi",
    "name": "河内",
    "nameEn": "Hanoi",
    "country": "越南",
    "continent": "亚洲",
    "flag": "🇻🇳",
    "lat": 21.0285,
    "lng": 105.8542,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 92,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A-",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "美食丰富",
      "购物便利",
      "文化景点多"
    ],
    "risks": [
      "食品安全",
      "部分城市交通拥堵",
      "自然灾害风险"
    ],
    "emergency": {
      "touristPolice": "113",
      "touristHotline": "84-24-3933-1111",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"河粉","type":"越南","price":"₫40000-100000","desc":"Pho牛肉粉","tip":"Bun Cha"},{"name":"烤肉米线","type":"越南","price":"₫35000-80000","desc":"Bún chả","tip":"还剑湖旁"},{"name":"鸡蛋咖啡","type":"饮品","price":"₫20000-40000","desc":"Cà phê trứng","tip":"老城区"},{"name":"炸春卷","type":"小吃","price":"₫20000-45000","desc":"Nem rán","tip":"街头"}],"attractions":[{"name":"还剑湖","type":"湖泊","desc":"市中心","hidden":false},{"name":"三十六行街","type":"街区","desc":"老城区","hidden":false},{"name":"巴亭广场","type":"地标","desc":"胡志明陵","hidden":false},{"name":"西湖","type":"湖泊","desc":"最大湖","hidden":true}],"festivals":[{"name":"河内建城","date":"10月10日","desc":"千年历史"},{"name":"春节","date":"1-2月","desc":"传统新年"},{"name":"端午节","date":"5月","desc":"驱邪祈福"}],"customs":["不踩门槛","女士优先","不要随意拍照","砍价"],"transport":"摩托、 taxi","hotspots":[{"area":"老城区","desc":"复杂","risk":"中"},{"area":"还剑湖","desc":"旅游区","risk":"低"}],"safeAreas":["巴亭郡","还剑郡","二征夫人郡","龙边郡"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在越南旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重越南的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "河内是越南的重要城市，位于亚洲。作为该地区的经济、文化中心，河内拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "bangalore": {
    "id": "bangalore",
    "name": "班加罗尔",
    "nameEn": "Bangalore",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 12.9716,
    "lng": 77.5946,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A-",
        "health": "B+",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "美食丰富",
      "医疗水平高",
      "文化景点多"
    ],
    "risks": [
      "蚊虫叮咬",
      "自然灾害风险",
      "部分城市交通拥堵"
    ],
    "emergency": {
      "touristPolice": "100",
      "touristHotline": "91-11-2338-1234",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印度旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印度的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "班加罗尔是印度的重要城市，位于亚洲。作为该地区的经济、文化中心，班加罗尔拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "chennai": {
    "id": "chennai",
    "name": "金奈",
    "nameEn": "Chennai",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 13.0827,
    "lng": 80.2707,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 80,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B-",
        "health": "B+",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "医疗水平高",
      "发达公共交通",
      "文化景点多"
    ],
    "risks": [
      "蚊虫叮咬",
      "自然灾害风险",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "100",
      "touristHotline": "91-11-2338-1234",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印度旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印度的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "金奈是印度的重要城市，位于亚洲。作为该地区的经济、文化中心，金奈拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "kolkata": {
    "id": "kolkata",
    "name": "加尔各答",
    "nameEn": "Kolkata",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 22.5726,
    "lng": 88.3639,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 66,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "C+",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "美食丰富",
      "文化景点多",
      "购物便利",
      "医疗水平高"
    ],
    "risks": [
      "蚊虫叮咬",
      "自然灾害风险",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "100",
      "touristHotline": "91-11-2338-1234",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印度旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印度的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "加尔各答是印度的重要城市，位于亚洲。作为该地区的经济、文化中心，加尔各答拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "hyderabad": {
    "id": "hyderabad",
    "name": "海德拉巴",
    "nameEn": "Hyderabad",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 17.385,
    "lng": 78.4867,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B-",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "C",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "美食丰富",
      "文化景点多",
      "购物便利",
      "医疗水平高"
    ],
    "risks": [
      "蚊虫叮咬",
      "部分城市交通拥堵",
      "食品安全"
    ],
    "emergency": {
      "touristPolice": "100",
      "touristHotline": "91-11-2338-1234",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在印度旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重印度的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "海德拉巴是印度的重要城市，位于亚洲。作为该地区的经济、文化中心，海德拉巴拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "shenzhen": {
    "id": "shenzhen",
    "name": "深圳",
    "nameEn": "Shenzhen",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 22.5431,
    "lng": 114.0579,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 78,
      "grade": "B+",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "B",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物便利",
      "文化景点多",
      "医疗水平高",
      "美食丰富"
    ],
    "risks": [
      "蚊虫叮咬",
      "语言沟通问题",
      "自然灾害风险"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "深圳是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，深圳拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "guangzhou": {
    "id": "guangzhou",
    "name": "广州",
    "nameEn": "Guangzhou",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 23.1291,
    "lng": 113.2644,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 87,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "B+",
        "health": "A",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "美食丰富",
      "医疗水平高",
      "文化景点多"
    ],
    "risks": [
      "部分城市交通拥堵",
      "语言沟通问题",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "广州是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，广州拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "chengdu": {
    "id": "chengdu",
    "name": "成都",
    "nameEn": "Chengdu",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 30.5728,
    "lng": 104.0668,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 87,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "B+",
        "health": "A-",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "美食丰富",
      "文化景点多",
      "医疗水平高"
    ],
    "risks": [
      "食品安全",
      "部分城市交通拥堵",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "成都是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，成都拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "hangzhou": {
    "id": "hangzhou",
    "name": "杭州",
    "nameEn": "Hangzhou",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 30.2741,
    "lng": 120.1551,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A-",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "文化景点多",
      "美食丰富",
      "发达公共交通"
    ],
    "risks": [
      "部分城市交通拥堵",
      "自然灾害风险",
      "蚊虫叮咬"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "杭州是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，杭州拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "xian": {
    "id": "xian",
    "name": "西安",
    "nameEn": "Xi'an",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 34.3416,
    "lng": 108.9398,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 94,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "发达公共交通",
      "医疗水平高",
      "购物便利",
      "文化景点多"
    ],
    "risks": [
      "部分城市交通拥堵",
      "蚊虫叮咬",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在中国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重中国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "西安是中国的重要城市，位于亚洲。作为该地区的经济、文化中心，西安拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。"
  },
  "london": {
    "id": "london",
    "name": "伦敦",
    "nameEn": "London",
    "country": "英国",
    "continent": "欧洲",
    "flag": "🇬🇧",
    "lat": 51.5074,
    "lng": -0.1278,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "食品安全",
      "公共交通发达",
      "历史建筑众多"
    ],
    "risks": [
      "物价较高",
      "罢工影响交通",
      "申根签证"
    ],
    "emergency": {
      "touristPolice": "999",
      "touristHotline": "44-20-7946-0958",
      "police": "999",
      "ambulance": "999",
      "fire": "999",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"炸鱼薯条","type":"英式料理","price":"£12-25","desc":"英国国菜，香脆鳕鱼配薯条","tip":"推荐Poppies Fish & Chips"},{"name":"英式早餐","type":"早餐","price":"£8-18","desc":"培根、煎蛋、烤番茄、蘑菇、豆子","tip":"Full English Breakfast"},{"name":"英式下午茶","type":"茶点","price":"£25-50","desc":"司康配伯爵茶","tip":"提前预约Ritz"},{"name":"印度咖喱","type":"印度菜","price":"£10-20","desc":"咖喱羊肉","tip":"Brick Lane curry街"}],"attractions":[{"name":"大英博物馆","type":"博物馆","desc":"世界最大博物馆之一","hidden":false},{"name":"白金汉宫","type":"宫殿","desc":"英国皇室官邸","hidden":false},{"name":"伦敦塔桥","type":"地标","desc":"泰晤士河上标志","hidden":false},{"name":"诺丁山","type":"街区","desc":"彩色房屋、复古市集","hidden":true}],"festivals":[{"name":"伦敦跨年烟花","date":"12月31日","desc":"泰晤士河畔烟花"},{"name":"诺丁山狂欢节","date":"8月底","desc":"欧洲最大街头狂欢"},{"name":"切尔西花展","date":"5月","desc":"皇家花卉盛事"}],"customs":["排队保持秩序","乘电梯靠右站","酒吧吧台点单","给小费10-15%"],"transport":"地铁四通八达，建议办Oyster卡","hotspots":[{"area":"苏活区夜间","desc":"人员复杂","risk":"中"},{"area":"贝克卢区域","desc":"游客众多","risk":"低"}],"safeAreas":["梅费尔区","肯辛顿","圣詹姆斯公园","里士满区"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在英国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重英国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "伦敦是英国的首都和最大城市，也是全球金融中心之一。这座拥有2000多年历史的都市，融合了古老的建筑和现代的摩天大楼。作为政治、经济和文化中心，伦敦对全球事务具有重要影响力。",
    "safety_history": "英国建立了成熟的城市安全体系，包括广泛的CCTV监控网络、专业的应急响应机制和严格的法律制度。伦敦等主要城市通过智能化警务、社区巡逻和国际合作，为居民和游客提供了良好的安全保障。"
  },
  "paris": {
    "id": "paris",
    "name": "巴黎",
    "nameEn": "Paris",
    "country": "法国",
    "continent": "欧洲",
    "flag": "🇫🇷",
    "lat": 48.8566,
    "lng": 2.3522,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "公共交通发达",
      "历史建筑众多",
      "社会秩序好"
    ],
    "risks": [
      "小偷小摸",
      "罢工影响交通",
      "申根签证"
    ],
    "emergency": {
      "touristPolice": "17",
      "touristHotline": "33-1-42-96-02-47",
      "police": "17",
      "ambulance": "15",
      "fire": "18",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"法棍面包","type":"面包","price":"€1-3","desc":"外脆内软","tip":"最好上午购买"},{"name":"可丽饼","type":"甜点","price":"€3-8","desc":"薄饼配Nutella","tip":"蒙马特路边摊"},{"name":"马卡龙","type":"甜点","price":"€2-5/个","desc":"LADUREE招牌","tip":"送礼首选"},{"name":"法式蜗牛","type":"前菜","price":"€8-15","desc":"蒜香黄油焗蜗牛","tip":"传统法餐必点"}],"attractions":[{"name":"埃菲尔铁塔","type":"地标","desc":"巴黎标志性建筑","hidden":false},{"name":"卢浮宫","type":"博物馆","desc":"世界最大美术馆","hidden":false},{"name":"蒙马特高地","type":"街区","desc":"圣心大教堂","hidden":false},{"name":"玛黑区","type":"街区","desc":"设计师店铺","hidden":true}],"festivals":[{"name":"国庆日阅兵","date":"7月14日","desc":"香榭丽舍大道"},{"name":"巴黎时装周","date":"9月底","desc":"全球时尚盛事"},{"name":"白夜艺术节","date":"10月初","desc":"整夜开放博物馆"}],"customs":["见面亲吻面颊礼","餐厅点单举手","不催促进餐","公共场所安静"],"transport":"地铁便捷，Vélib自行车","hotspots":[{"area":"北站周边","desc":"移民区","risk":"中高"},{"area":"塞纳河畔","desc":"游客密集","risk":"低"}],"safeAreas":["香榭丽舍","玛黑区","拉丁区","16区"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在法国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重法国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "巴黎是法国的首都和最大城市，被誉为'光之城'。这座充满浪漫气息的城市，以其优雅的建筑、世界级的艺术收藏和精致的美食而闻名。作为全球时尚和文化的中心，巴黎每年吸引数百万游客。",
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。"
  },
  "berlin": {
    "id": "berlin",
    "name": "柏林",
    "nameEn": "Berlin",
    "country": "德国",
    "continent": "欧洲",
    "flag": "🇩🇪",
    "lat": 52.52,
    "lng": 13.405,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "公共交通发达",
      "历史建筑众多",
      "艺术氛围浓厚"
    ],
    "risks": [
      "物价较高",
      "语言障碍",
      "申根签证"
    ],
    "emergency": {
      "touristPolice": "110",
      "touristHotline": "49-30-187-1174",
      "police": "110",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"咖喱香肠","type":"小吃","price":"€3-8","desc":"咖喱番茄酱","tip":"Babel"},{"name":"德国猪脚","type":"德式","price":"€12-25","desc":"烤猪脚","tip":"Hofbräu"},{"name":"柏林咖喱","type":"德式","price":"€5-12","desc":"咖喱饭","tip":"Curry 36"},{"name":"黑森林","type":"甜点","price":"€4-10","desc":"樱桃蛋糕","tip":"咖啡馆"}],"attractions":[{"name":"勃兰登堡门","type":"地标","desc":"柏林象征","hidden":false},{"name":"柏林墙","type":"历史","desc":"东画廊","hidden":false},{"name":"博物馆岛","type":"博物馆","desc":"佩加蒙","hidden":false},{"name":"克罗伊茨","type":"街区","desc":"嬉皮士","hidden":true}],"festivals":[{"name":"电影节","date":"2月","desc":"金熊奖"},{"name":"啤酒节","date":"9月","desc":"慕尼黑"},{"name":"圣诞市场","date":"12月","desc":"灯火"}],"customs":["红灯区合法","先下后上","周日关门","小费10%"],"transport":"地铁公交，S-Bahn","hotspots":[{"area":"夜店区","desc":"纪念馆旁","risk":"低"},{"area":"Friedrich","desc":"年轻","risk":"低"}],"safeAreas":["米特区","夏洛滕堡","广场","Kreuzberg"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在德国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重德国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "柏林是德国的重要城市，位于欧洲。作为该地区的经济、文化中心，柏林拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。"
  },
  "amsterdam": {
    "id": "amsterdam",
    "name": "阿姆斯特丹",
    "nameEn": "Amsterdam",
    "country": "荷兰",
    "continent": "欧洲",
    "flag": "🇳🇱",
    "lat": 52.3676,
    "lng": 4.9041,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "艺术氛围浓厚",
      "社会秩序好",
      "历史建筑众多"
    ],
    "risks": [
      "罢工影响交通",
      "语言障碍",
      "物价较高"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "31-20-752-7888",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在荷兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重荷兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "阿姆斯特丹是荷兰的重要城市，位于欧洲。作为该地区的经济、文化中心，阿姆斯特丹拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "vienna": {
    "id": "vienna",
    "name": "维也纳",
    "nameEn": "Vienna",
    "country": "奥地利",
    "continent": "亚洲",
    "flag": "🇦🇹",
    "lat": 48.2082,
    "lng": 16.3738,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "B-",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "医疗水平高",
      "文化景点多",
      "购物便利",
      "美食丰富"
    ],
    "risks": [
      "部分城市交通拥堵",
      "蚊虫叮咬",
      "语言沟通问题"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在奥地利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重奥地利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "维也纳是奥地利的重要城市，位于亚洲。作为该地区的经济、文化中心，维也纳拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "zurich": {
    "id": "zurich",
    "name": "苏黎世",
    "nameEn": "Zurich",
    "country": "瑞士",
    "continent": "欧洲",
    "flag": "🇨🇭",
    "lat": 47.3769,
    "lng": 8.5417,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "社会秩序好",
      "艺术氛围浓厚",
      "食品安全"
    ],
    "risks": [
      "罢工影响交通",
      "语言障碍",
      "物价较高"
    ],
    "emergency": {
      "touristPolice": "117",
      "touristHotline": "41-44-113-100",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在瑞士旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重瑞士的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "苏黎世是瑞士的重要城市，位于欧洲。作为该地区的经济、文化中心，苏黎世拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "stockholm": {
    "id": "stockholm",
    "name": "斯德哥尔摩",
    "nameEn": "Stockholm",
    "country": "瑞典",
    "continent": "欧洲",
    "flag": "🇸🇪",
    "lat": 59.3293,
    "lng": 18.0686,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A-",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "社会秩序好",
      "食品安全",
      "公共交通发达"
    ],
    "risks": [
      "语言障碍",
      "小偷小摸",
      "物价较高"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "46-8-783-4900",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在瑞典旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重瑞典的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "斯德哥尔摩是瑞典的重要城市，位于欧洲。作为该地区的经济、文化中心，斯德哥尔摩拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "oslo": {
    "id": "oslo",
    "name": "奥斯陆",
    "nameEn": "Oslo",
    "country": "挪威",
    "continent": "欧洲",
    "flag": "🇳🇴",
    "lat": 59.9139,
    "lng": 10.7522,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A-",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "历史建筑众多",
      "公共交通发达",
      "食品安全"
    ],
    "risks": [
      "小偷小摸",
      "罢工影响交通",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "47-23-10-66-00",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在挪威旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重挪威的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "奥斯陆是挪威的重要城市，位于欧洲。作为该地区的经济、文化中心，奥斯陆拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "copenhagen": {
    "id": "copenhagen",
    "name": "哥本哈根",
    "nameEn": "Copenhagen",
    "country": "丹麦",
    "continent": "欧洲",
    "flag": "🇩🇰",
    "lat": 55.6761,
    "lng": 12.5683,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 87,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "B+",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "食品安全",
      "社会秩序好",
      "艺术氛围浓厚",
      "历史建筑众多"
    ],
    "risks": [
      "罢工影响交通",
      "物价较高",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "45-33-14-88-70",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在丹麦旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重丹麦的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "哥本哈根是丹麦的重要城市，位于欧洲。作为该地区的经济、文化中心，哥本哈根拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "helsinki": {
    "id": "helsinki",
    "name": "赫尔辛基",
    "nameEn": "Helsinki",
    "country": "芬兰",
    "continent": "欧洲",
    "flag": "🇫🇮",
    "lat": 60.1699,
    "lng": 24.9384,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "食品安全",
      "社会秩序好",
      "艺术氛围浓厚",
      "公共交通发达"
    ],
    "risks": [
      "小偷小摸",
      "罢工影响交通",
      "申根签证"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在芬兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重芬兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "赫尔辛基是芬兰的重要城市，位于欧洲。作为该地区的经济、文化中心，赫尔辛基拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "madrid": {
    "id": "madrid",
    "name": "马德里",
    "nameEn": "Madrid",
    "country": "西班牙",
    "continent": "欧洲",
    "flag": "🇪🇸",
    "lat": 40.4168,
    "lng": -3.7038,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "食品安全",
      "社会秩序好",
      "历史建筑众多",
      "艺术氛围浓厚"
    ],
    "risks": [
      "申根签证",
      "物价较高",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "091",
      "touristHotline": "902-102-112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在西班牙旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重西班牙的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "马德里是西班牙的重要城市，位于欧洲。作为该地区的经济、文化中心，马德里拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "rome": {
    "id": "rome",
    "name": "罗马",
    "nameEn": "Rome",
    "country": "意大利",
    "continent": "欧洲",
    "flag": "🇮🇹",
    "lat": 41.9028,
    "lng": 12.4964,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "艺术氛围浓厚",
      "历史建筑众多",
      "社会秩序好"
    ],
    "risks": [
      "小偷小摸",
      "申根签证",
      "罢工影响交通"
    ],
    "emergency": {
      "touristPolice": "113",
      "touristHotline": "39-06-4676-91",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"意大利披萨","type":"意式","price":"€5-15","desc":"薄底","tip":"Roscioli"},{"name":"罗马意面","type":"意式","price":"€8-18","desc":"Carbonara","tip":"Da Enzo"},{"name":"提拉米苏","type":"甜点","price":"€4-10","desc":"经典甜点","tip":"Pompi"},{"name":"冰淇淋","type":"甜点","price":"€2-6","desc":"GELATO","tip":"老字号"}],"attractions":[{"name":"罗马斗兽场","type":"古罗马","desc":"新七大奇迹","hidden":false},{"name":"梵蒂冈","type":"博物馆","desc":"西斯廷堂","hidden":false},{"name":"许愿池","type":"地标","desc":"特莱维","hidden":false},{"name":"波格赛","type":"博物馆","desc":"贝尼尼","hidden":true}],"festivals":[{"name":"复活节","date":"4月","desc":"圣彼得"},{"name":"八月节","date":"8月15日","desc":"全城狂欢"},{"name":"圣诞节","date":"12月","desc":"灯展"}],"customs":["进教堂着装","不坐台阶","站喝Espresso","给小费10%"],"transport":"地铁A、B线","hotspots":[{"area":"Termini","desc":"小偷多","risk":"中高"},{"area":"特拉斯提","desc":"酒吧","risk":"低"}],"safeAreas":["西班牙广场","万神殿","波各赛","梵蒂冈"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在意大利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重意大利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "罗马是意大利的重要城市，位于欧洲。作为该地区的经济、文化中心，罗马拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。"
  },
  "barcelona": {
    "id": "barcelona",
    "name": "巴塞罗那",
    "nameEn": "Barcelona",
    "country": "西班牙",
    "continent": "欧洲",
    "flag": "🇪🇸",
    "lat": 41.3851,
    "lng": 2.1734,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "食品安全",
      "艺术氛围浓厚",
      "历史建筑众多"
    ],
    "risks": [
      "小偷小摸",
      "申根签证",
      "罢工影响交通"
    ],
    "emergency": {
      "touristPolice": "091",
      "touristHotline": "902-102-112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"海鲜饭","type":"西班牙","price":"€12-25","desc":"藏红花","tip":"La Boqueria"},{"name":"油条","type":"小吃","price":"€2-6","desc":"Churros","tip":"Granja Viader"},{"name":"烤番茄","type":"前菜","price":"€4-10","desc":"Pan amb tomàquet","tip":"家常"},{"name":"桑格利亚","type":"饮品","price":"€3-8","desc":"红酒水果","tip":"La Pepita"}],"attractions":[{"name":"圣家堂","type":"教堂","desc":"高迪杰作","hidden":false},{"name":"桂尔公园","type":"公园","desc":"马赛克","hidden":false},{"name":"兰布拉","type":"大道","desc":"流浪歌手","hidden":false},{"name":"哥特区","type":"街区","desc":"中世纪","hidden":true}],"festivals":[{"name":"圣乔治节","date":"4月23日","desc":"玫瑰书"},{"name":"格拉西亚节","date":"8月","desc":"装饰比赛"},{"name":"梅尔赛节","date":"9月","desc":"叠人塔"}],"customs":["午休2-5点","晚餐9点后","不催促","小费10%"],"transport":"地铁L1-L5，T10卡","hotspots":[{"area":"La Rambla","desc":"小偷","risk":"中高"},{"area":"Raval","desc":"多元","risk":"中"}],"safeAreas":["扩展区","sarrià","Gràcia","海滨"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在西班牙旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重西班牙的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "巴塞罗那是西班牙的重要城市，位于欧洲。作为该地区的经济、文化中心，巴塞罗那拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "lisbon": {
    "id": "lisbon",
    "name": "里斯本",
    "nameEn": "Lisbon",
    "country": "葡萄牙",
    "continent": "欧洲",
    "flag": "🇵🇹",
    "lat": 38.7223,
    "lng": -9.1393,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "艺术氛围浓厚",
      "食品安全",
      "社会秩序好"
    ],
    "risks": [
      "小偷小摸",
      "申根签证",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在葡萄牙旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重葡萄牙的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "里斯本是葡萄牙的重要城市，位于欧洲。作为该地区的经济、文化中心，里斯本拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "prague": {
    "id": "prague",
    "name": "布拉格",
    "nameEn": "Prague",
    "country": "捷克",
    "continent": "欧洲",
    "flag": "🇨🇿",
    "lat": 50.0755,
    "lng": 14.4378,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "艺术氛围浓厚",
      "食品安全",
      "历史建筑众多"
    ],
    "risks": [
      "小偷小摸",
      "罢工影响交通",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在捷克旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重捷克的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "布拉格是捷克的重要城市，位于欧洲。作为该地区的经济、文化中心，布拉格拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "warsaw": {
    "id": "warsaw",
    "name": "华沙",
    "nameEn": "Warsaw",
    "country": "波兰",
    "continent": "欧洲",
    "flag": "🇵🇱",
    "lat": 52.2297,
    "lng": 21.0122,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "B+",
        "health": "A",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "艺术氛围浓厚",
      "社会秩序好",
      "食品安全"
    ],
    "risks": [
      "小偷小摸",
      "罢工影响交通",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在波兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重波兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "华沙是波兰的重要城市，位于欧洲。作为该地区的经济、文化中心，华沙拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "athens": {
    "id": "athens",
    "name": "雅典",
    "nameEn": "Athens",
    "country": "希腊",
    "continent": "欧洲",
    "flag": "🇬🇷",
    "lat": 37.9838,
    "lng": 23.7275,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 83,
      "grade": "A-",
      "grades": {
        "crime": "B",
        "transport": "A-",
        "health": "B+",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "食品安全",
      "艺术氛围浓厚",
      "社会秩序好"
    ],
    "risks": [
      "申根签证",
      "小偷小摸",
      "罢工影响交通"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在希腊旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重希腊的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "雅典是希腊的重要城市，位于欧洲。作为该地区的经济、文化中心，雅典拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "brussels": {
    "id": "brussels",
    "name": "布鲁塞尔",
    "nameEn": "Brussels",
    "country": "比利时",
    "continent": "欧洲",
    "flag": "🇧🇪",
    "lat": 50.8503,
    "lng": 4.3517,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 87,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "A-",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "艺术氛围浓厚",
      "食品安全",
      "历史建筑众多"
    ],
    "risks": [
      "物价较高",
      "罢工影响交通",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在比利时旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重比利时的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "布鲁塞尔是比利时的重要城市，位于欧洲。作为该地区的经济、文化中心，布鲁塞尔拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "budapest": {
    "id": "budapest",
    "name": "布达佩斯",
    "nameEn": "Budapest",
    "country": "匈牙利",
    "continent": "欧洲",
    "flag": "🇭🇺",
    "lat": 47.4979,
    "lng": 19.0402,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 94,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "公共交通发达",
      "艺术氛围浓厚",
      "食品安全"
    ],
    "risks": [
      "物价较高",
      "语言障碍",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在匈牙利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重匈牙利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "布达佩斯是匈牙利的重要城市，位于欧洲。作为该地区的经济、文化中心，布达佩斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "moscow": {
    "id": "moscow",
    "name": "莫斯科",
    "nameEn": "Moscow",
    "country": "俄罗斯",
    "continent": "欧洲",
    "flag": "🇷🇺",
    "lat": 55.7558,
    "lng": 37.6173,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 70,
      "grade": "B",
      "grades": {
        "crime": "C+",
        "transport": "B-",
        "health": "C+",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "历史建筑众多",
      "食品安全",
      "公共交通发达"
    ],
    "risks": [
      "申根签证",
      "小偷小摸",
      "罢工影响交通"
    ],
    "emergency": {
      "touristPolice": "102",
      "touristHotline": "7-495-938-2141",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在俄罗斯旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重俄罗斯的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "莫斯科是俄罗斯的重要城市，位于欧洲。作为该地区的经济、文化中心，莫斯科拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "st_petersburg": {
    "id": "st_petersburg",
    "name": "圣彼得堡",
    "nameEn": "St. Petersburg",
    "country": "俄罗斯",
    "continent": "欧洲",
    "flag": "🇷🇺",
    "lat": 59.9311,
    "lng": 30.3609,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B-",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "C",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "历史建筑众多",
      "食品安全",
      "公共交通发达"
    ],
    "risks": [
      "申根签证",
      "语言障碍",
      "罢工影响交通"
    ],
    "emergency": {
      "touristPolice": "102",
      "touristHotline": "7-495-938-2141",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在俄罗斯旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重俄罗斯的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "圣彼得堡是俄罗斯的重要城市，位于欧洲。作为该地区的经济、文化中心，圣彼得堡拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "milan": {
    "id": "milan",
    "name": "米兰",
    "nameEn": "Milan",
    "country": "意大利",
    "continent": "欧洲",
    "flag": "🇮🇹",
    "lat": 45.4642,
    "lng": 9.19,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 87,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "A-",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "食品安全",
      "历史建筑众多",
      "社会秩序好"
    ],
    "risks": [
      "物价较高",
      "申根签证",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "113",
      "touristHotline": "39-06-4676-91",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在意大利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重意大利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "米兰是意大利的重要城市，位于欧洲。作为该地区的经济、文化中心，米兰拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。"
  },
  "munich": {
    "id": "munich",
    "name": "慕尼黑",
    "nameEn": "Munich",
    "country": "德国",
    "continent": "欧洲",
    "flag": "🇩🇪",
    "lat": 48.1351,
    "lng": 11.582,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "食品安全",
      "公共交通发达",
      "历史建筑众多"
    ],
    "risks": [
      "申根签证",
      "小偷小摸",
      "物价较高"
    ],
    "emergency": {
      "touristPolice": "110",
      "touristHotline": "49-30-187-1174",
      "police": "110",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在德国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重德国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "慕尼黑是德国的重要城市，位于欧洲。作为该地区的经济、文化中心，慕尼黑拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。"
  },
  "frankfurt": {
    "id": "frankfurt",
    "name": "法兰克福",
    "nameEn": "Frankfurt",
    "country": "德国",
    "continent": "欧洲",
    "flag": "🇩🇪",
    "lat": 50.1109,
    "lng": 8.6821,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 92,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "社会秩序好",
      "公共交通发达",
      "食品安全"
    ],
    "risks": [
      "申根签证",
      "小偷小摸",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "110",
      "touristHotline": "49-30-187-1174",
      "police": "110",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在德国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重德国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "法兰克福是德国的重要城市，位于欧洲。作为该地区的经济、文化中心，法兰克福拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。"
  },
  "hamburg": {
    "id": "hamburg",
    "name": "汉堡",
    "nameEn": "Hamburg",
    "country": "德国",
    "continent": "欧洲",
    "flag": "🇩🇪",
    "lat": 53.5511,
    "lng": 9.9937,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "社会秩序好",
      "公共交通发达",
      "艺术氛围浓厚"
    ],
    "risks": [
      "罢工影响交通",
      "物价较高",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "110",
      "touristHotline": "49-30-187-1174",
      "police": "110",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在德国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重德国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "汉堡是德国的重要城市，位于欧洲。作为该地区的经济、文化中心，汉堡拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。"
  },
  "dublin": {
    "id": "dublin",
    "name": "都柏林",
    "nameEn": "Dublin",
    "country": "爱尔兰",
    "continent": "欧洲",
    "flag": "🇮🇪",
    "lat": 53.3498,
    "lng": -6.2603,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "公共交通发达",
      "食品安全",
      "社会秩序好"
    ],
    "risks": [
      "语言障碍",
      "小偷小摸",
      "申根签证"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在爱尔兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重爱尔兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "都柏林是爱尔兰的重要城市，位于欧洲。作为该地区的经济、文化中心，都柏林拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "edinburgh": {
    "id": "edinburgh",
    "name": "爱丁堡",
    "nameEn": "Edinburgh",
    "country": "英国",
    "continent": "欧洲",
    "flag": "🇬🇧",
    "lat": 55.9533,
    "lng": -3.1883,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 93,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "食品安全",
      "公共交通发达",
      "社会秩序好",
      "历史建筑众多"
    ],
    "risks": [
      "罢工影响交通",
      "语言障碍",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "999",
      "touristHotline": "44-20-7946-0958",
      "police": "999",
      "ambulance": "999",
      "fire": "999",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在英国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重英国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "爱丁堡是英国的重要城市，位于欧洲。作为该地区的经济、文化中心，爱丁堡拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "英国建立了成熟的城市安全体系，包括广泛的CCTV监控网络、专业的应急响应机制和严格的法律制度。伦敦等主要城市通过智能化警务、社区巡逻和国际合作，为居民和游客提供了良好的安全保障。"
  },
  "manchester": {
    "id": "manchester",
    "name": "曼彻斯特",
    "nameEn": "Manchester",
    "country": "英国",
    "continent": "欧洲",
    "flag": "🇬🇧",
    "lat": 53.4808,
    "lng": -2.2426,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "A-",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "艺术氛围浓厚",
      "食品安全",
      "公共交通发达"
    ],
    "risks": [
      "物价较高",
      "申根签证",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "999",
      "touristHotline": "44-20-7946-0958",
      "police": "999",
      "ambulance": "999",
      "fire": "999",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在英国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重英国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "曼彻斯特是英国的重要城市，位于欧洲。作为该地区的经济、文化中心，曼彻斯特拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "英国建立了成熟的城市安全体系，包括广泛的CCTV监控网络、专业的应急响应机制和严格的法律制度。伦敦等主要城市通过智能化警务、社区巡逻和国际合作，为居民和游客提供了良好的安全保障。"
  },
  "lyon": {
    "id": "lyon",
    "name": "里昂",
    "nameEn": "Lyon",
    "country": "法国",
    "continent": "欧洲",
    "flag": "🇫🇷",
    "lat": 45.764,
    "lng": 4.8357,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "公共交通发达",
      "艺术氛围浓厚",
      "历史建筑众多"
    ],
    "risks": [
      "物价较高",
      "申根签证",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "17",
      "touristHotline": "33-1-42-96-02-47",
      "police": "17",
      "ambulance": "15",
      "fire": "18",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在法国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重法国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "里昂是法国的重要城市，位于欧洲。作为该地区的经济、文化中心，里昂拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。"
  },
  "marseille": {
    "id": "marseille",
    "name": "马赛",
    "nameEn": "Marseille",
    "country": "法国",
    "continent": "欧洲",
    "flag": "🇫🇷",
    "lat": 43.2965,
    "lng": 5.3698,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "历史建筑众多",
      "艺术氛围浓厚",
      "食品安全"
    ],
    "risks": [
      "物价较高",
      "申根签证",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "17",
      "touristHotline": "33-1-42-96-02-47",
      "police": "17",
      "ambulance": "15",
      "fire": "18",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在法国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重法国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "马赛是法国的重要城市，位于欧洲。作为该地区的经济、文化中心，马赛拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。"
  },
  "nice": {
    "id": "nice",
    "name": "尼斯",
    "nameEn": "Nice",
    "country": "法国",
    "continent": "欧洲",
    "flag": "🇫🇷",
    "lat": 43.7102,
    "lng": 7.262,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "B+",
        "health": "A",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "社会秩序好",
      "食品安全",
      "历史建筑众多"
    ],
    "risks": [
      "小偷小摸",
      "罢工影响交通",
      "语言障碍"
    ],
    "emergency": {
      "touristPolice": "17",
      "touristHotline": "33-1-42-96-02-47",
      "police": "17",
      "ambulance": "15",
      "fire": "18",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在法国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重法国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "尼斯是法国的重要城市，位于欧洲。作为该地区的经济、文化中心，尼斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。"
  },
  "venice": {
    "id": "venice",
    "name": "威尼斯",
    "nameEn": "Venice",
    "country": "意大利",
    "continent": "欧洲",
    "flag": "🇮🇹",
    "lat": 45.4408,
    "lng": 12.3155,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "B+",
        "health": "A",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "艺术氛围浓厚",
      "社会秩序好",
      "食品安全"
    ],
    "risks": [
      "物价较高",
      "申根签证",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "113",
      "touristHotline": "39-06-4676-91",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在意大利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重意大利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "威尼斯是意大利的重要城市，位于欧洲。作为该地区的经济、文化中心，威尼斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。"
  },
  "florence": {
    "id": "florence",
    "name": "佛罗伦萨",
    "nameEn": "Florence",
    "country": "意大利",
    "continent": "欧洲",
    "flag": "🇮🇹",
    "lat": 43.7696,
    "lng": 11.2558,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "社会秩序好",
      "食品安全",
      "艺术氛围浓厚",
      "公共交通发达"
    ],
    "risks": [
      "申根签证",
      "物价较高",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "113",
      "touristHotline": "39-06-4676-91",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在意大利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重意大利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "佛罗伦萨是意大利的重要城市，位于欧洲。作为该地区的经济、文化中心，佛罗伦萨拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。"
  },
  "naples": {
    "id": "naples",
    "name": "那不勒斯",
    "nameEn": "Naples",
    "country": "意大利",
    "continent": "欧洲",
    "flag": "🇮🇹",
    "lat": 40.8518,
    "lng": 14.2681,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A-",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "食品安全",
      "历史建筑众多",
      "公共交通发达"
    ],
    "risks": [
      "罢工影响交通",
      "小偷小摸",
      "物价较高"
    ],
    "emergency": {
      "touristPolice": "113",
      "touristHotline": "39-06-4676-91",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在意大利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重意大利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "那不勒斯是意大利的重要城市，位于欧洲。作为该地区的经济、文化中心，那不勒斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。"
  },
  "valencia": {
    "id": "valencia",
    "name": "瓦伦西亚",
    "nameEn": "Valencia",
    "country": "西班牙",
    "continent": "欧洲",
    "flag": "🇪🇸",
    "lat": 39.4699,
    "lng": -0.3763,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "食品安全",
      "历史建筑众多",
      "社会秩序好"
    ],
    "risks": [
      "语言障碍",
      "物价较高",
      "申根签证"
    ],
    "emergency": {
      "touristPolice": "091",
      "touristHotline": "902-102-112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在西班牙旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重西班牙的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "瓦伦西亚是西班牙的重要城市，位于欧洲。作为该地区的经济、文化中心，瓦伦西亚拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "seville": {
    "id": "seville",
    "name": "塞维利亚",
    "nameEn": "Seville",
    "country": "西班牙",
    "continent": "欧洲",
    "flag": "🇪🇸",
    "lat": 37.3891,
    "lng": -5.9845,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "社会秩序好",
      "历史建筑众多",
      "食品安全"
    ],
    "risks": [
      "物价较高",
      "语言障碍",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "091",
      "touristHotline": "902-102-112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在西班牙旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重西班牙的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "塞维利亚是西班牙的重要城市，位于欧洲。作为该地区的经济、文化中心，塞维利亚拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "malaga": {
    "id": "malaga",
    "name": "马拉加",
    "nameEn": "Malaga",
    "country": "西班牙",
    "continent": "欧洲",
    "flag": "🇪🇸",
    "lat": 36.7213,
    "lng": -4.4214,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "食品安全",
      "历史建筑众多",
      "社会秩序好"
    ],
    "risks": [
      "语言障碍",
      "申根签证",
      "罢工影响交通"
    ],
    "emergency": {
      "touristPolice": "091",
      "touristHotline": "902-102-112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在西班牙旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重西班牙的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "马拉加是西班牙的重要城市，位于欧洲。作为该地区的经济、文化中心，马拉加拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "porto": {
    "id": "porto",
    "name": "波尔图",
    "nameEn": "Porto",
    "country": "葡萄牙",
    "continent": "欧洲",
    "flag": "🇵🇹",
    "lat": 41.1579,
    "lng": -8.6291,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "艺术氛围浓厚",
      "食品安全",
      "历史建筑众多",
      "社会秩序好"
    ],
    "risks": [
      "申根签证",
      "物价较高",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在葡萄牙旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重葡萄牙的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "波尔图是葡萄牙的重要城市，位于欧洲。作为该地区的经济、文化中心，波尔图拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "krakow": {
    "id": "krakow",
    "name": "克拉科夫",
    "nameEn": "Krakow",
    "country": "波兰",
    "continent": "欧洲",
    "flag": "🇵🇱",
    "lat": 50.0647,
    "lng": 19.945,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "社会秩序好",
      "历史建筑众多",
      "食品安全"
    ],
    "risks": [
      "申根签证",
      "物价较高",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在波兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重波兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "克拉科夫是波兰的重要城市，位于欧洲。作为该地区的经济、文化中心，克拉科夫拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "geneva": {
    "id": "geneva",
    "name": "日内瓦",
    "nameEn": "Geneva",
    "country": "瑞士",
    "continent": "欧洲",
    "flag": "🇨🇭",
    "lat": 46.2044,
    "lng": 6.1432,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "公共交通发达",
      "食品安全",
      "社会秩序好",
      "艺术氛围浓厚"
    ],
    "risks": [
      "申根签证",
      "物价较高",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "117",
      "touristHotline": "41-44-113-100",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在瑞士旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重瑞士的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "日内瓦是瑞士的重要城市，位于欧洲。作为该地区的经济、文化中心，日内瓦拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "cologne": {
    "id": "cologne",
    "name": "科隆",
    "nameEn": "Cologne",
    "country": "德国",
    "continent": "欧洲",
    "flag": "🇩🇪",
    "lat": 50.9375,
    "lng": 6.9603,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "历史建筑众多",
      "社会秩序好",
      "食品安全",
      "公共交通发达"
    ],
    "risks": [
      "物价较高",
      "罢工影响交通",
      "小偷小摸"
    ],
    "emergency": {
      "touristPolice": "110",
      "touristHotline": "49-30-187-1174",
      "police": "110",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在德国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重德国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "科隆是德国的重要城市，位于欧洲。作为该地区的经济、文化中心，科隆拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。"
  },
  "new_york": {
    "id": "new_york",
    "name": "纽约",
    "nameEn": "New York",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 40.7128,
    "lng": -74.006,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 67,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "C+",
        "health": "C+",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "多元文化",
      "科技发达",
      "自然景观丰富"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"热狗","type":"快餐","price":"$3-8","desc":"街头热狗车","tip":"中央公园南"},{"name":"贝果","type":"面包","price":"$3-10","desc":"熏三文鱼","tip":"Zuckers Bagel"},{"name":"汉堡","type":"美式","price":""new_york": {
    "id": "new_york",
    "name": "纽约",
    "nameEn": "New York",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 40.7128,
    "lng": -74.006,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 67,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "C+",
        "health": "C+",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "多元文化",
      "科技发达",
      "自然景观丰富"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {0-30","desc":"Shake Shack","tip":"错峰排队"},{"name":"披萨","type":"意式","price":"$3-15","desc":"纽约派","tip":"Joe Pizza"}],"attractions":[{"name":"自由女神像","type":"地标","desc":"渡轮登岛","hidden":false},{"name":"中央公园","type":"公园","desc":"曼哈顿绿洲","hidden":false},{"name":"时代广场","type":"地标","desc":"霓虹灯海","hidden":false},{"name":"高线公园","type":"公园","desc":"空中花园","hidden":true}],"festivals":[{"name":"跨年","date":"12月31日","desc":"水晶球"},{"name":"骄傲月","date":"6月","desc":"LGBTQ+"},{"name":"梅西游行","date":"11月","desc":"感恩节"}],"customs":["点头表示","给小费15-20%","排队距离","不打断"],"transport":"地铁24小时，黄色出租","hotspots":[{"area":"哈莱姆区","desc":"犯罪率高","risk":"高"},{"area":"时报广场","desc":"扒窃","risk":"中"}],"safeAreas":["上东区","切尔西","布鲁克林","长岛市"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "纽约是美国的重要城市，位于美洲。作为该地区的经济、文化中心，纽约拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "los_angeles": {
    "id": "los_angeles",
    "name": "洛杉矶",
    "nameEn": "Los Angeles",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 34.0522,
    "lng": -118.2437,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 73,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "B-",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "科技发达",
      "多元文化",
      "购物选择多"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "毒品问题"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"In-N-Out","type":"美式","price":"$5-12","desc":"传奇汉堡","tip":"秘密菜单"},{"name":"墨西哥卷","type":"墨西哥","price":"$5-15","desc":"Taco","tip":"Laemmle"},{"name":"韩国烤肉","type":"韩式","price":""los_angeles": {
    "id": "los_angeles",
    "name": "洛杉矶",
    "nameEn": "Los Angeles",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 34.0522,
    "lng": -118.2437,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 73,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "B-",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "科技发达",
      "多元文化",
      "购物选择多"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "毒品问题"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {5-40","desc":"烤牛排","tip":"Koreatown"},{"name":"明星甜点","type":"甜点","price":"$8-25","desc":"Lady M","tip":"网红"}],"attractions":[{"name":"好莱坞","type":"地标","desc":"星光大道","hidden":false},{"name":"迪士尼","type":"乐园","desc":"第一座","hidden":false},{"name":"圣莫尼卡","type":"海滩","desc":"栈道","hidden":false},{"name":"Getty","type":"博物馆","desc":"艺术","hidden":true}],"festivals":[{"name":"奥斯卡","date":"2月","desc":"颁奖"},{"name":"格莱美","date":"2月","desc":"音乐"},{"name":"动漫展","date":"7月","desc":"Comic-Con"}],"customs":["小费15-20%","文化","注意限速","防晒"],"transport":"需开车，Uber","hotspots":[{"area":"南中央","desc":"犯罪","risk":"高"},{"area":"好莱坞","desc":"游客","risk":"中"}],"safeAreas":["比佛利山","Santa Monica","马里布","尔湾"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "洛杉矶是美国的重要城市，位于美洲。作为该地区的经济、文化中心，洛杉矶拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "chicago": {
    "id": "chicago",
    "name": "芝加哥",
    "nameEn": "Chicago",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 41.8781,
    "lng": -87.6298,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 69,
      "grade": "B-",
      "grades": {
        "crime": "C",
        "transport": "B",
        "health": "C+",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "科技发达",
      "购物选择多",
      "多元文化"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "毒品问题"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "芝加哥是美国的重要城市，位于美洲。作为该地区的经济、文化中心，芝加哥拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "toronto": {
    "id": "toronto",
    "name": "多伦多",
    "nameEn": "Toronto",
    "country": "加拿大",
    "continent": "美洲",
    "flag": "🇨🇦",
    "lat": 43.6532,
    "lng": -79.3832,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 76,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "B-",
        "health": "B",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "多元文化",
      "娱乐设施完善",
      "科技发达"
    ],
    "risks": [
      "治安差异大",
      "枪支暴力风险",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-613-944-4440",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在加拿大旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重加拿大的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "多伦多是加拿大的重要城市，位于美洲。作为该地区的经济、文化中心，多伦多拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "加拿大建立了完善的城市安全体系，多伦多、温哥华等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、文化包容和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "vancouver": {
    "id": "vancouver",
    "name": "温哥华",
    "nameEn": "Vancouver",
    "country": "加拿大",
    "continent": "美洲",
    "flag": "🇨🇦",
    "lat": 49.2827,
    "lng": -123.1207,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "娱乐设施完善",
      "科技发达",
      "多元文化",
      "购物选择多"
    ],
    "risks": [
      "枪支暴力风险",
      "毒品问题",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-613-944-4440",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在加拿大旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重加拿大的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "温哥华是加拿大的重要城市，位于美洲。作为该地区的经济、文化中心，温哥华拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "加拿大建立了完善的城市安全体系，多伦多、温哥华等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、文化包容和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "montreal": {
    "id": "montreal",
    "name": "蒙特利尔",
    "nameEn": "Montreal",
    "country": "加拿大",
    "continent": "美洲",
    "flag": "🇨🇦",
    "lat": 45.5017,
    "lng": -73.5673,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 73,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "C+",
        "health": "B",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "娱乐设施完善",
      "自然景观丰富",
      "科技发达"
    ],
    "risks": [
      "枪支暴力风险",
      "毒品问题",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-613-944-4440",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在加拿大旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重加拿大的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "蒙特利尔是加拿大的重要城市，位于美洲。作为该地区的经济、文化中心，蒙特利尔拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "加拿大建立了完善的城市安全体系，多伦多、温哥华等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、文化包容和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "san_francisco": {
    "id": "san_francisco",
    "name": "旧金山",
    "nameEn": "San Francisco",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 37.7749,
    "lng": -122.4194,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 79,
      "grade": "B+",
      "grades": {
        "crime": "B-",
        "transport": "A-",
        "health": "B",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "科技发达",
      "多元文化",
      "娱乐设施完善"
    ],
    "risks": [
      "毒品问题",
      "自然灾害",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"蛤蜊浓汤","type":"美式","price":"$8-15","desc":"酸面包","tip":"渔人码头"},{"name":"越南河粉","type":"越南","price":""san_francisco": {
    "id": "san_francisco",
    "name": "旧金山",
    "nameEn": "San Francisco",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 37.7749,
    "lng": -122.4194,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 79,
      "grade": "B+",
      "grades": {
        "crime": "B-",
        "transport": "A-",
        "health": "B",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "科技发达",
      "多元文化",
      "娱乐设施完善"
    ],
    "risks": [
      "毒品问题",
      "自然灾害",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {0-20","desc":"Pho","tip":"Turtle Tower"},{"name":"墨西哥卷","type":"墨西哥","price":"$8-16","desc":"Mission","tip":"La Taqueria"},{"name":"酸面包","type":"面包","price":"$3-8","desc":"Sourdough","tip":"Boudin"}],"attractions":[{"name":"金门大桥","type":"地标","desc":"标志","hidden":false},{"name":"恶魔岛","type":"景点","desc":"监狱","hidden":false},{"name":"渔人码头","type":"景点","desc":"海滨","hidden":false},{"name":"彩绘女士","type":"景点","desc":"维多利亚","hidden":true}],"festivals":[{"name":"骄傲游行","date":"6月","desc":"LGBTQ"},{"name":"电影节","date":"10月","desc":"国际"},{"name":"中国新年","date":"1-2月","desc":"华埠"}],"customs":["小费15-20%","注意财物","停车难","早晚冷"],"transport":"地铁Bart，Uber","hotspots":[{"area":"Tenderloin","desc":"差","risk":"高"},{"area":"Mission","desc":"复杂","risk":"中"}],"safeAreas":["Marina","Pacific Heights","Noe Valley","SOMA"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "旧金山是美国的重要城市，位于美洲。作为该地区的经济、文化中心，旧金山拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "seattle": {
    "id": "seattle",
    "name": "西雅图",
    "nameEn": "Seattle",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 47.6062,
    "lng": -122.3321,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 66,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "C+",
        "health": "C+",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "娱乐设施完善",
      "多元文化",
      "购物选择多",
      "科技发达"
    ],
    "risks": [
      "毒品问题",
      "自然灾害",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "西雅图是美国的重要城市，位于美洲。作为该地区的经济、文化中心，西雅图拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "miami": {
    "id": "miami",
    "name": "迈阿密",
    "nameEn": "Miami",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 25.7617,
    "lng": -80.1918,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 77,
      "grade": "B+",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "B",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "娱乐设施完善",
      "多元文化",
      "购物选择多",
      "科技发达"
    ],
    "risks": [
      "医疗费用高",
      "毒品问题",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "迈阿密是美国的重要城市，位于美洲。作为该地区的经济、文化中心，迈阿密拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "boston": {
    "id": "boston",
    "name": "波士顿",
    "nameEn": "Boston",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 42.3601,
    "lng": -71.0589,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B+",
        "health": "A-",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "多元文化",
      "自然景观丰富",
      "购物选择多",
      "娱乐设施完善"
    ],
    "risks": [
      "医疗费用高",
      "毒品问题",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "波士顿是美国的重要城市，位于美洲。作为该地区的经济、文化中心，波士顿拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "washington_dc": {
    "id": "washington_dc",
    "name": "华盛顿",
    "nameEn": "Washington D.C.",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 38.9072,
    "lng": -77.0369,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 71,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "B-",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "娱乐设施完善",
      "购物选择多",
      "多元文化",
      "自然景观丰富"
    ],
    "risks": [
      "医疗费用高",
      "毒品问题",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "华盛顿是美国的重要城市，位于美洲。作为该地区的经济、文化中心，华盛顿拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "las_vegas": {
    "id": "las_vegas",
    "name": "拉斯维加斯",
    "nameEn": "Las Vegas",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 36.1699,
    "lng": -115.1398,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 66,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "C+",
        "health": "C+",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "科技发达",
      "多元文化",
      "购物选择多",
      "娱乐设施完善"
    ],
    "risks": [
      "医疗费用高",
      "毒品问题",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "拉斯维加斯是美国的重要城市，位于美洲。作为该地区的经济、文化中心，拉斯维加斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "denver": {
    "id": "denver",
    "name": "丹佛",
    "nameEn": "Denver",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 39.7392,
    "lng": -104.9903,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 80,
      "grade": "A-",
      "grades": {
        "crime": "B",
        "transport": "B+",
        "health": "B",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "娱乐设施完善",
      "购物选择多",
      "多元文化"
    ],
    "risks": [
      "自然灾害",
      "枪支暴力风险",
      "毒品问题"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "丹佛是美国的重要城市，位于美洲。作为该地区的经济、文化中心，丹佛拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "atlanta": {
    "id": "atlanta",
    "name": "亚特兰大",
    "nameEn": "Atlanta",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 33.749,
    "lng": -84.388,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 73,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "B-",
        "health": "B-",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "多元文化",
      "购物选择多",
      "娱乐设施完善",
      "自然景观丰富"
    ],
    "risks": [
      "治安差异大",
      "医疗费用高",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "亚特兰大是美国的重要城市，位于美洲。作为该地区的经济、文化中心，亚特兰大拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "dallas": {
    "id": "dallas",
    "name": "达拉斯",
    "nameEn": "Dallas",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 32.7767,
    "lng": -96.797,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 85,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B+",
        "health": "A-",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "多元文化",
      "购物选择多",
      "科技发达",
      "自然景观丰富"
    ],
    "risks": [
      "治安差异大",
      "医疗费用高",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "达拉斯是美国的重要城市，位于美洲。作为该地区的经济、文化中心，达拉斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "houston": {
    "id": "houston",
    "name": "休斯顿",
    "nameEn": "Houston",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 29.7604,
    "lng": -95.3698,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 81,
      "grade": "A-",
      "grades": {
        "crime": "B",
        "transport": "B+",
        "health": "B+",
        "natural": "B+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "科技发达",
      "购物选择多",
      "多元文化",
      "自然景观丰富"
    ],
    "risks": [
      "毒品问题",
      "治安差异大",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "休斯顿是美国的重要城市，位于美洲。作为该地区的经济、文化中心，休斯顿拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "phoenix": {
    "id": "phoenix",
    "name": "凤凰城",
    "nameEn": "Phoenix",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 33.4484,
    "lng": -112.074,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 76,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "B",
        "health": "B",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "多元文化",
      "科技发达",
      "娱乐设施完善",
      "自然景观丰富"
    ],
    "risks": [
      "毒品问题",
      "治安差异大",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "凤凰城是美国的重要城市，位于美洲。作为该地区的经济、文化中心，凤凰城拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "portland": {
    "id": "portland",
    "name": "波特兰",
    "nameEn": "Portland",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 45.5152,
    "lng": -122.6784,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 68,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "C+",
        "health": "C+",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "多元文化",
      "科技发达",
      "娱乐设施完善",
      "自然景观丰富"
    ],
    "risks": [
      "医疗费用高",
      "治安差异大",
      "毒品问题"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "波特兰是美国的重要城市，位于美洲。作为该地区的经济、文化中心，波特兰拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "san_diego": {
    "id": "san_diego",
    "name": "圣迭戈",
    "nameEn": "San Diego",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 32.7157,
    "lng": -117.1611,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A-",
        "health": "B+",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "多元文化",
      "自然景观丰富",
      "科技发达",
      "购物选择多"
    ],
    "risks": [
      "毒品问题",
      "治安差异大",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "圣迭戈是美国的重要城市，位于美洲。作为该地区的经济、文化中心，圣迭戈拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "austin": {
    "id": "austin",
    "name": "奥斯汀",
    "nameEn": "Austin",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 30.2672,
    "lng": -97.7431,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 70,
      "grade": "B",
      "grades": {
        "crime": "C+",
        "transport": "B-",
        "health": "C+",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "自然景观丰富",
      "科技发达",
      "娱乐设施完善"
    ],
    "risks": [
      "枪支暴力风险",
      "医疗费用高",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "奥斯汀是美国的重要城市，位于美洲。作为该地区的经济、文化中心，奥斯汀拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  },
  "mexico_city": {
    "id": "mexico_city",
    "name": "墨西哥城",
    "nameEn": "Mexico City",
    "country": "墨西哥",
    "continent": "美洲",
    "flag": "🇲🇽",
    "lat": 19.4326,
    "lng": -99.1332,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 59,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "自然景观丰富",
      "科技发达",
      "娱乐设施完善"
    ],
    "risks": [
      "医疗费用高",
      "枪支暴力风险",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "55-8854-0080",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在墨西哥旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重墨西哥的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "墨西哥城是墨西哥的重要城市，位于美洲。作为该地区的经济、文化中心，墨西哥城拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "cancun": {
    "id": "cancun",
    "name": "坎昆",
    "nameEn": "Cancun",
    "country": "墨西哥",
    "continent": "美洲",
    "flag": "🇲🇽",
    "lat": 21.1619,
    "lng": -86.8515,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 61,
      "grade": "B-",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "多元文化",
      "娱乐设施完善",
      "科技发达",
      "自然景观丰富"
    ],
    "risks": [
      "医疗费用高",
      "枪支暴力风险",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "55-8854-0080",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在墨西哥旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重墨西哥的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "坎昆是墨西哥的重要城市，位于美洲。作为该地区的经济、文化中心，坎昆拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "sao_paulo": {
    "id": "sao_paulo",
    "name": "圣保罗",
    "nameEn": "Sao Paulo",
    "country": "巴西",
    "continent": "美洲",
    "flag": "🇧🇷",
    "lat": -23.5505,
    "lng": -46.6333,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 71,
      "grade": "B",
      "grades": {
        "crime": "C",
        "transport": "B",
        "health": "C+",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "科技发达",
      "娱乐设施完善",
      "多元文化",
      "购物选择多"
    ],
    "risks": [
      "医疗费用高",
      "自然灾害",
      "枪支暴力风险"
    ],
    "emergency": {
      "touristPolice": "190",
      "touristHotline": "55-61-3823-8484",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在巴西旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重巴西的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "圣保罗是巴西的重要城市，位于美洲。作为该地区的经济、文化中心，圣保罗拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "rio_de_janeiro": {
    "id": "rio_de_janeiro",
    "name": "里约热内卢",
    "nameEn": "Rio de Janeiro",
    "country": "巴西",
    "continent": "美洲",
    "flag": "🇧🇷",
    "lat": -22.9068,
    "lng": -43.1729,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 57,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "多元文化",
      "娱乐设施完善",
      "科技发达"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "190",
      "touristHotline": "55-61-3823-8484",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在巴西旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重巴西的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "里约热内卢是巴西的重要城市，位于美洲。作为该地区的经济、文化中心，里约热内卢拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "buenos_aires": {
    "id": "buenos_aires",
    "name": "布宜诺斯艾利斯",
    "nameEn": "Buenos Aires",
    "country": "阿根廷",
    "continent": "美洲",
    "flag": "🇦🇷",
    "lat": -34.6037,
    "lng": -58.3816,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "科技发达",
      "娱乐设施完善",
      "多元文化"
    ],
    "risks": [
      "医疗费用高",
      "治安差异大",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在阿根廷旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重阿根廷的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "布宜诺斯艾利斯是阿根廷的重要城市，位于美洲。作为该地区的经济、文化中心，布宜诺斯艾利斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "santiago": {
    "id": "santiago",
    "name": "圣地亚哥",
    "nameEn": "Santiago",
    "country": "智利",
    "continent": "美洲",
    "flag": "🇨🇱",
    "lat": -33.4489,
    "lng": -70.6693,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 64,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "C",
        "health": "C+",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "科技发达",
      "多元文化",
      "自然景观丰富"
    ],
    "risks": [
      "枪支暴力风险",
      "治安差异大",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在智利旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重智利的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "圣地亚哥是智利的重要城市，位于美洲。作为该地区的经济、文化中心，圣地亚哥拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "lima": {
    "id": "lima",
    "name": "利马",
    "nameEn": "Lima",
    "country": "秘鲁",
    "continent": "美洲",
    "flag": "🇵🇪",
    "lat": -12.0464,
    "lng": -77.0428,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 73,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "C+",
        "health": "B",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "娱乐设施完善",
      "多元文化",
      "科技发达"
    ],
    "risks": [
      "枪支暴力风险",
      "毒品问题",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在秘鲁旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重秘鲁的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "利马是秘鲁的重要城市，位于美洲。作为该地区的经济、文化中心，利马拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "bogota": {
    "id": "bogota",
    "name": "波哥大",
    "nameEn": "Bogota",
    "country": "哥伦比亚",
    "continent": "美洲",
    "flag": "🇨🇴",
    "lat": 4.711,
    "lng": -74.0721,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 63,
      "grade": "B-",
      "grades": {
        "crime": "C",
        "transport": "B-",
        "health": "C",
        "natural": "C+"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "购物选择多",
      "科技发达",
      "多元文化",
      "娱乐设施完善"
    ],
    "risks": [
      "枪支暴力风险",
      "医疗费用高",
      "自然灾害"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在哥伦比亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重哥伦比亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "波哥大是哥伦比亚的重要城市，位于美洲。作为该地区的经济、文化中心，波哥大拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "medellin": {
    "id": "medellin",
    "name": "麦德林",
    "nameEn": "Medellin",
    "country": "哥伦比亚",
    "continent": "美洲",
    "flag": "🇨🇴",
    "lat": 6.2442,
    "lng": -75.5812,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 66,
      "grade": "B-",
      "grades": {
        "crime": "C",
        "transport": "B-",
        "health": "C",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "娱乐设施完善",
      "多元文化",
      "科技发达"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在哥伦比亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重哥伦比亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "麦德林是哥伦比亚的重要城市，位于美洲。作为该地区的经济、文化中心，麦德林拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "panama_city": {
    "id": "panama_city",
    "name": "巴拿马城",
    "nameEn": "Panama City",
    "country": "巴拿马",
    "continent": "美洲",
    "flag": "🇵🇦",
    "lat": 8.9824,
    "lng": -79.5199,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 79,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "B",
        "health": "B",
        "natural": "B"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "娱乐设施完善",
      "多元文化",
      "购物选择多"
    ],
    "risks": [
      "枪支暴力风险",
      "自然灾害",
      "治安差异大"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在巴拿马旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重巴拿马的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "巴拿马城是巴拿马的重要城市，位于美洲。作为该地区的经济、文化中心，巴拿马城拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "cairo": {
    "id": "cairo",
    "name": "开罗",
    "nameEn": "Cairo",
    "country": "埃及",
    "continent": "非洲",
    "flag": "🇪🇬",
    "lat": 30.0444,
    "lng": 31.2357,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 30,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然风光独特",
      "人民热情",
      "野生动物丰富",
      "文化多元"
    ],
    "risks": [
      "医疗条件有限",
      "治安风险高",
      "疾病风险"
    ],
    "emergency": {
      "touristPolice": "122",
      "touristHotline": "20-2-2348-7099",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在埃及旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重埃及的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "开罗是埃及的重要城市，位于非洲。作为该地区的经济、文化中心，开罗拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "cape_town": {
    "id": "cape_town",
    "name": "开普敦",
    "nameEn": "Cape Town",
    "country": "南非",
    "continent": "非洲",
    "flag": "🇿🇦",
    "lat": -33.9249,
    "lng": 18.4241,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 44,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "物价相对低",
      "文化多元",
      "野生动物丰富",
      "人民热情"
    ],
    "risks": [
      "治安风险高",
      "基础设施差",
      "医疗条件有限"
    ],
    "emergency": {
      "touristPolice": "10111",
      "touristHotline": "27-12-431-4000",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在南非旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重南非的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "开普敦是南非的重要城市，位于非洲。作为该地区的经济、文化中心，开普敦拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "johannesburg": {
    "id": "johannesburg",
    "name": "约翰内斯堡",
    "nameEn": "Johannesburg",
    "country": "南非",
    "continent": "非洲",
    "flag": "🇿🇦",
    "lat": -26.2041,
    "lng": 28.0473,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 41,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然风光独特",
      "文化多元",
      "人民热情",
      "物价相对低"
    ],
    "risks": [
      "医疗条件有限",
      "政治动荡",
      "基础设施差"
    ],
    "emergency": {
      "touristPolice": "10111",
      "touristHotline": "27-12-431-4000",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在南非旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重南非的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "约翰内斯堡是南非的重要城市，位于非洲。作为该地区的经济、文化中心，约翰内斯堡拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "lagos": {
    "id": "lagos",
    "name": "拉各斯",
    "nameEn": "Lagos",
    "country": "尼日利亚",
    "continent": "非洲",
    "flag": "🇳🇬",
    "lat": 6.5244,
    "lng": 3.3792,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "safety": {
      "overall": 30,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "物价相对低",
      "自然风光独特",
      "野生动物丰富",
      "文化多元"
    ],
    "risks": [
      "医疗条件有限",
      "政治动荡",
      "基础设施差"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在尼日利亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重尼日利亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "拉各斯是尼日利亚的重要城市，位于非洲。作为该地区的经济、文化中心，拉各斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "nairobi": {
    "id": "nairobi",
    "name": "内罗毕",
    "nameEn": "Nairobi",
    "country": "肯尼亚",
    "continent": "非洲",
    "flag": "🇰🇪",
    "lat": -1.2921,
    "lng": 36.8219,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 38,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "物价相对低",
      "自然风光独特",
      "人民热情",
      "野生动物丰富"
    ],
    "risks": [
      "疾病风险",
      "医疗条件有限",
      "治安风险高"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在肯尼亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重肯尼亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "内罗毕是肯尼亚的重要城市，位于非洲。作为该地区的经济、文化中心，内罗毕拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "casablanca": {
    "id": "casablanca",
    "name": "卡萨布兰卡",
    "nameEn": "Casablanca",
    "country": "摩洛哥",
    "continent": "非洲",
    "flag": "🇲🇦",
    "lat": 33.5731,
    "lng": -7.5898,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 52,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "物价相对低",
      "自然风光独特",
      "人民热情",
      "野生动物丰富"
    ],
    "risks": [
      "基础设施差",
      "治安风险高",
      "政治动荡"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在摩洛哥旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重摩洛哥的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "卡萨布兰卡是摩洛哥的重要城市，位于非洲。作为该地区的经济、文化中心，卡萨布兰卡拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "marrakech": {
    "id": "marrakech",
    "name": "马拉喀什",
    "nameEn": "Marrakech",
    "country": "摩洛哥",
    "continent": "非洲",
    "flag": "🇲🇦",
    "lat": 31.6295,
    "lng": -7.9811,
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "safety": {
      "overall": 52,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "物价相对低",
      "自然风光独特",
      "文化多元",
      "人民热情"
    ],
    "risks": [
      "医疗条件有限",
      "政治动荡",
      "疾病风险"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在摩洛哥旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重摩洛哥的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "马拉喀什是摩洛哥的重要城市，位于非洲。作为该地区的经济、文化中心，马拉喀什拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "tunis": {
    "id": "tunis",
    "name": "突尼斯",
    "nameEn": "Tunis",
    "country": "突尼斯",
    "continent": "非洲",
    "flag": "🇹🇳",
    "lat": 36.8065,
    "lng": 10.1815,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "safety": {
      "overall": 64,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "C+",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "物价相对低",
      "自然风光独特",
      "野生动物丰富",
      "文化多元"
    ],
    "risks": [
      "医疗条件有限",
      "政治动荡",
      "疾病风险"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在突尼斯旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重突尼斯的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "突尼斯是突尼斯的重要城市，位于非洲。作为该地区的经济、文化中心，突尼斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "accra": {
    "id": "accra",
    "name": "阿克拉",
    "nameEn": "Accra",
    "country": "加纳",
    "continent": "非洲",
    "flag": "🇬🇭",
    "lat": 5.6037,
    "lng": -0.187,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 42,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "物价相对低",
      "野生动物丰富",
      "文化多元",
      "自然风光独特"
    ],
    "risks": [
      "治安风险高",
      "疾病风险",
      "政治动荡"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在加纳旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重加纳的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "阿克拉是加纳的重要城市，位于非洲。作为该地区的经济、文化中心，阿克拉拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "addis_ababa": {
    "id": "addis_ababa",
    "name": "亚的斯亚贝巴",
    "nameEn": "Addis Ababa",
    "country": "埃塞俄比亚",
    "continent": "非洲",
    "flag": "🇪🇹",
    "lat": 9.032,
    "lng": 38.7469,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 42,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "C"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然风光独特",
      "人民热情",
      "文化多元",
      "野生动物丰富"
    ],
    "risks": [
      "政治动荡",
      "疾病风险",
      "医疗条件有限"
    ],
    "emergency": {
      "touristPolice": "112",
      "touristHotline": "112",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在埃塞俄比亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重埃塞俄比亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "亚的斯亚贝巴是埃塞俄比亚的重要城市，位于非洲。作为该地区的经济、文化中心，亚的斯亚贝巴拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "sydney": {
    "id": "sydney",
    "name": "悉尼",
    "nameEn": "Sydney",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -33.8688,
    "lng": 151.2093,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "空气清新",
      "生活节奏慢",
      "自然环境优美",
      "海滩风光"
    ],
    "risks": [
      "天气变化快",
      "野生动物",
      "地域广阔交通不便"
    ],
    "emergency": {
      "touristPolice": "000",
      "touristHotline": "1300-135-391",
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {{"food":[{"name":"海鲜拼盘","type":"海鲜","price":"AUD40-100","desc":"龙虾生蚝","tip":"Fish Market"},{"name":"澳式汉堡","type":"美式","price":"AUD12-25","desc":"牛肉芝士","tip":"Merrylands"},{"name":"Flat White","type":"咖啡","price":"AUD4-6","desc":"澳式白咖啡","tip":"网红店"},{"name":"肉派","type":"小吃","price":"AUD5-10","desc":"经典咸派","tip":"港口"}],"attractions":[{"name":"歌剧院","type":"地标","desc":"贝壳造型","hidden":false},{"name":"海港大桥","type":"地标","desc":"可攀登","hidden":false},{"name":"邦迪海滩","type":"海滩","desc":"冲浪圣地","hidden":false},{"name":"蓝山","type":"自然","desc":"桉树森林","hidden":true}],"festivals":[{"name":"跨年烟花","date":"12月31日","desc":"全球最壮观"},{"name":"Vivid","date":"5-6月","desc":"灯光艺术"},{"name":"澳洲日","date":"1月26日","desc":"国庆"}],"customs":["小费非必须","排队距离","公园禁酒","防晒"],"transport":"地铁渡轮，Opal卡","hotspots":[{"area":"红坊","desc":"酒吧区","risk":"中"},{"area":"Kings Cross","desc":"夜生活","risk":"中"}],"safeAreas":["CBD","北悉尼","Mosman","东区"]}},
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在澳大利亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重澳大利亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "悉尼是澳大利亚的重要城市，位于大洋洲。作为该地区的经济、文化中心，悉尼拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "melbourne": {
    "id": "melbourne",
    "name": "墨尔本",
    "nameEn": "Melbourne",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -37.8136,
    "lng": 144.9631,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 92,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "户外运动多",
      "海滩风光",
      "自然环境优美",
      "生活节奏慢"
    ],
    "risks": [
      "紫外线强",
      "野生动物",
      "地域广阔交通不便"
    ],
    "emergency": {
      "touristPolice": "000",
      "touristHotline": "1300-135-391",
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在澳大利亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重澳大利亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "墨尔本是澳大利亚的重要城市，位于大洋洲。作为该地区的经济、文化中心，墨尔本拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "brisbane": {
    "id": "brisbane",
    "name": "布里斯班",
    "nameEn": "Brisbane",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -27.4698,
    "lng": 153.0251,
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "B+",
        "health": "A",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "海滩风光",
      "空气清新",
      "户外运动多",
      "自然环境优美"
    ],
    "risks": [
      "天气变化快",
      "野生动物",
      "地域广阔交通不便"
    ],
    "emergency": {
      "touristPolice": "000",
      "touristHotline": "1300-135-391",
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在澳大利亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重澳大利亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "布里斯班是澳大利亚的重要城市，位于大洋洲。作为该地区的经济、文化中心，布里斯班拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "perth": {
    "id": "perth",
    "name": "珀斯",
    "nameEn": "Perth",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -31.9505,
    "lng": 115.8605,
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "safety": {
      "overall": 94,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "海滩风光",
      "空气清新",
      "生活节奏慢",
      "自然环境优美"
    ],
    "risks": [
      "海洋生物危险",
      "紫外线强",
      "地域广阔交通不便"
    ],
    "emergency": {
      "touristPolice": "000",
      "touristHotline": "1300-135-391",
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在澳大利亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重澳大利亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "珀斯是澳大利亚的重要城市，位于大洋洲。作为该地区的经济、文化中心，珀斯拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "adelaide": {
    "id": "adelaide",
    "name": "阿德莱德",
    "nameEn": "Adelaide",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -34.9285,
    "lng": 138.6007,
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=400&q=80",
    "safety": {
      "overall": 85,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "B+",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "空气清新",
      "海滩风光",
      "自然环境优美",
      "户外运动多"
    ],
    "risks": [
      "海洋生物危险",
      "地域广阔交通不便",
      "紫外线强"
    ],
    "emergency": {
      "touristPolice": "000",
      "touristHotline": "1300-135-391",
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在澳大利亚旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重澳大利亚的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "阿德莱德是澳大利亚的重要城市，位于大洋洲。作为该地区的经济、文化中心，阿德莱德拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。"
  },
  "auckland": {
    "id": "auckland",
    "name": "奥克兰",
    "nameEn": "Auckland",
    "country": "新西兰",
    "continent": "大洋洲",
    "flag": "🇳🇿",
    "lat": -36.8509,
    "lng": 174.7645,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "safety": {
      "overall": 91,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "B+",
        "health": "A",
        "natural": "A-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "空气清新",
      "生活节奏慢",
      "自然环境优美",
      "海滩风光"
    ],
    "risks": [
      "紫外线强",
      "地域广阔交通不便",
      "野生动物"
    ],
    "emergency": {
      "touristPolice": "111",
      "touristHotline": "0800-556-556",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在新西兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重新西兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "奥克兰是新西兰的重要城市，位于大洋洲。作为该地区的经济、文化中心，奥克兰拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "wellington": {
    "id": "wellington",
    "name": "惠灵顿",
    "nameEn": "Wellington",
    "country": "新西兰",
    "continent": "大洋洲",
    "flag": "🇳🇿",
    "lat": -41.2865,
    "lng": 174.7762,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "空气清新",
      "户外运动多",
      "海滩风光",
      "生活节奏慢"
    ],
    "risks": [
      "紫外线强",
      "地域广阔交通不便",
      "野生动物"
    ],
    "emergency": {
      "touristPolice": "111",
      "touristHotline": "0800-556-556",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在新西兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重新西兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "惠灵顿是新西兰的重要城市，位于大洋洲。作为该地区的经济、文化中心，惠灵顿拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "christchurch": {
    "id": "christchurch",
    "name": "基督城",
    "nameEn": "Christchurch",
    "country": "新西兰",
    "continent": "大洋洲",
    "flag": "🇳🇿",
    "lat": -43.532,
    "lng": 172.6362,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 94,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "生活节奏慢",
      "空气清新",
      "户外运动多",
      "海滩风光"
    ],
    "risks": [
      "天气变化快",
      "海洋生物危险",
      "野生动物"
    ],
    "emergency": {
      "touristPolice": "111",
      "touristHotline": "0800-556-556",
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在新西兰旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重新西兰的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "基督城是新西兰的重要城市，位于大洋洲。作为该地区的经济、文化中心，基督城拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。"
  },
  "honolulu": {
    "id": "honolulu",
    "name": "檀香山",
    "nameEn": "Honolulu",
    "country": "美国",
    "continent": "美洲",
    "flag": "🇺🇸",
    "lat": 21.3069,
    "lng": -157.8583,
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "safety": {
      "overall": 71,
      "grade": "B",
      "grades": {
        "crime": "C+",
        "transport": "B",
        "health": "C+",
        "natural": "B-"
      },
      "safeAreas": [
        "市中心商业区",
        "主要旅游区",
        "高档住宅区",
        "大学校园周边"
      ],
      "hotspots": [
        {
          "area": "偏僻街道",
          "desc": "夜间避免单独前往",
          "risk": "中"
        },
        {
          "area": "旅游区人流密集处",
          "desc": "注意财物安全",
          "risk": "低"
        }
      ]
    },
    "highlights": [
      "自然景观丰富",
      "科技发达",
      "多元文化",
      "购物选择多"
    ],
    "risks": [
      "枪支暴力风险",
      "毒品问题",
      "医疗费用高"
    ],
    "emergency": {
      "touristPolice": "911",
      "touristHotline": "1-888-407-4747",
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "hospitals": [
        {
          "name": "主要公立医院",
          "phone": "当地急救电话",
          "address": "市中心区域"
        }
      ],
      "embassies": {
        "中国大使馆": "请查询当地使馆信息",
        "紧急领事保护": "+86-10-12308"
      },
      "apps": [
        "Google Translate",
        "当地打车APP"
      ],
      "selfDefense": [
        "保持警愓，注意周围环境",
        "携带护照复印件",
        "保存当地紧急联系方式"
      ]
    },
    "lifestyle": {
      "food": [
        {
          "name": "当地特色菜",
          "type": "当地菜",
          "price": "中等",
          "desc": "品尝当地传统美食",
          "tip": "选择当地人推荐的餐厅"
        },
        {
          "name": "街头小吃",
          "type": "小吃",
          "price": "便宜",
          "desc": "体验地道风味",
          "tip": "注意卫生条件"
        },
        {
          "name": "海鲜料理",
          "type": "海鲜",
          "price": "中高",
          "desc": "新鲜的海鲜料理"
        },
        {
          "name": "当地烤肉",
          "type": "烧烤",
          "price": "中等",
          "desc": "当地特色烤肉"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
      ],
      "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动",
        "保持安静和礼貌"
      ],
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。"
    },
    "safety_tips": {
      "crime": [
        "在美国旅行时，保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放",
        "使用ATM时注意周围环境",
        "不要携带大量现金"
      ],
      "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程",
        "乘坐出租车确认计价器正常",
        "夜间出行尽量选择多人同行"
      ],
      "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生",
        "饮用瓶装水或煮沸的水",
        "预防蚊虫叮咬"
      ],
      "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足",
        "下载当地天气预报APP",
        "了解自然灾害应对措施"
      ],
      "cultural": [
        "尊重美国的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息",
        "学习基本当地语言",
        "尊重宗教场所规定"
      ]
    },
    "travel_tips": {
      "best_season": "建议查询当地最佳旅游季节",
      "weather": {
        "spring": {
          "temp": "根据当地气候",
          "tips": "春季天气宜人"
        },
        "summer": {
          "temp": "根据当地气候",
          "tips": "注意防晒防暑"
        },
        "autumn": {
          "temp": "根据当地气候",
          "tips": "秋季凉爽舒适"
        },
        "winter": {
          "temp": "根据当地气候",
          "tips": "注意保暖"
        }
      },
      "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
      },
      "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
      },
      "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
          "谢谢": "当地语言表达",
          "对不起": "当地语言表达",
          "警察在哪里": "当地语言表达"
        }
      }
    },
    "overview": "檀香山是美国的重要城市，位于美洲。作为该地区的经济、文化中心，檀香山拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。",
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。"
  }
};