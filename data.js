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
    "lifestyle": {
      "food": [
        {
          "name": "寿司",
          "price": "¥2000-30000",
          "desc": "筑地市场"
        },
        {
          "name": "拉面",
          "price": "¥800-1500",
          "desc": "豚骨"
        },
        {
          "name": "烧肉",
          "price": "¥3000-8000",
          "desc": "A5和牛"
        },
        {
          "name": "人形烧",
          "price": "¥500-1000",
          "desc": "雷门"
        }
      ],
      "attractions": [
        {
          "name": "浅草寺",
          "desc": "最古"
        },
        {
          "name": "涩谷十字",
          "desc": "繁忙"
        },
        {
          "name": "秋叶原",
          "desc": "动漫"
        },
        {
          "name": "神乐坂",
          "desc": "日式"
        }
      ],
      "festivals": [
        {
          "name": "樱花季",
          "date": "3-4月"
        },
        {
          "name": "夏日祭",
          "date": "7-8月"
        },
        {
          "name": "红叶季",
          "date": "11月"
        }
      ],
      "customs": [
        "脱鞋",
        "安静",
        "不给小费"
      ],
      "transport": "地铁JR",
      "hotspots": [
        {
          "area": "新宿",
          "desc": "夜店区，复杂",
          "risk": "中"
        },
        {
          "area": "涩谷",
          "desc": "混乱但安全",
          "risk": "低"
        },
        {
          "area": "秋叶原",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "港区",
        "涩谷"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。东京的地铁系统是全球最繁忙的之一，通过智能化管理和严格安检，保持了极低的犯罪率。2011年东日本大地震后，东京加强了防灾减灾能力建设，建立了全球领先的灾害预警和应急响应系统。",
    "embassy": {
      "name": "中国驻日本大使馆",
      "phone": "+81-3-3403-3388",
      "address": "东京都港区元麻布3-4-33",
      "emergency": "+81-90-8830-1039"
    },
    "hospital": {
      "name": "东京大学医学部附属医院",
      "phone": "+81-3-5800-8630",
      "address": "东京都文京本乡7-3-1"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "肉骨茶",
          "price": "S-20",
          "desc": "胡椒汤"
        },
        {
          "name": "辣椒蟹",
          "price": "S\u0005-60",
          "desc": "蟹"
        },
        {
          "name": "海南鸡饭",
          "price": "S-12",
          "desc": "白切鸡"
        },
        {
          "name": "叻沙",
          "price": "S-12",
          "desc": "咖喱面"
        }
      ],
      "attractions": [
        {
          "name": "金沙",
          "desc": "空中"
        },
        {
          "name": "鱼尾狮",
          "desc": "标志"
        },
        {
          "name": "牛车水",
          "desc": "华人"
        },
        {
          "name": "哈芝巷",
          "desc": "涂鸦"
        }
      ],
      "festivals": [
        {
          "name": "国庆",
          "date": "8月9日"
        },
        {
          "name": "美食节",
          "date": "7月"
        },
        {
          "name": "中秋",
          "date": "9月"
        }
      ],
      "customs": [
        "罚款",
        "禁食",
        "先坐"
      ],
      "transport": "MRT",
      "hotspots": [
        {
          "area": "芽笼",
          "desc": "红灯区",
          "risk": "中"
        },
        {
          "area": "小印度",
          "desc": "混乱",
          "risk": "低"
        },
        {
          "area": "牛车水",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "滨海湾",
        "乌节"
      ]
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
    "safety_history": "新加坡建立了全球领先的城市安全体系。通过全覆盖的监控系统、严格的法律制度、高效的应急响应机制和全民安全教育，新加坡成为世界上最安全的城市之一。2020年全球安全指数排名中，新加坡位居前列。",
    "embassy": {
      "name": "中国驻新加坡大使馆",
      "phone": "+65-6471-2117",
      "address": "150 Tanglin Road, Singapore 247969",
      "emergency": "+65-6471-2122"
    },
    "hospital": {
      "name": "Singapore General Hospital",
      "phone": "+65-6222-3322",
      "address": "Outram Rd, Singapore 169608"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "烤肉",
          "price": "₩15000-40000",
          "desc": "秘制酱"
        },
        {
          "name": "炸鸡",
          "price": "₩12000-25000",
          "desc": "韩式"
        },
        {
          "name": "参鸡汤",
          "price": "₩15000-25000",
          "desc": "人参"
        },
        {
          "name": "辣炒年糕",
          "price": "₩3000-8000",
          "desc": "辣酱"
        }
      ],
      "attractions": [
        {
          "name": "景福宫",
          "desc": "王朝"
        },
        {
          "name": "明洞",
          "desc": "购物"
        },
        {
          "name": "弘大",
          "desc": "潮流"
        },
        {
          "name": "北村",
          "desc": "韩屋"
        }
      ],
      "festivals": [
        {
          "name": "灯节",
          "date": "11月"
        },
        {
          "name": "韩服节",
          "date": "10月"
        },
        {
          "name": "樱花",
          "date": "4月"
        }
      ],
      "customs": [
        "长辈优先",
        "不倒满酒"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "弘大",
          "desc": "夜生活",
          "risk": "中"
        },
        {
          "area": "江南",
          "desc": "安全",
          "risk": "低"
        },
        {
          "area": "明洞",
          "desc": "小偷",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "江南",
        "狎鸥亭"
      ]
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
    "safety_history": "韩国建立了完善的城市安全管理体系。首尔作为首都，拥有先进的监控系统、高效的应急响应机制和严格的交通管理。近年来，通过智能城市建设和安全科技应用，城市安全水平持续提升，为国际游客提供了可靠的安全保障。",
    "embassy": {
      "name": "中国驻韩国大使馆",
      "phone": "+82-2-738-1038",
      "address": "首尔市钟路区孝子洞54号",
      "emergency": "+82-2-738-1039"
    },
    "hospital": {
      "name": "Seoul National University Hospital",
      "phone": "+82-2-760-2114",
      "address": "首尔市龙山区梨泰院1洞"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "奶茶",
          "price": "HK\u0005-35",
          "desc": "丝滑"
        },
        {
          "name": "云吞面",
          "price": "HK\u0005-60",
          "desc": "鲜虾"
        },
        {
          "name": "烧腊",
          "price": "HK\u0000-80",
          "desc": "叉烧"
        },
        {
          "name": "鸡蛋仔",
          "price": "HK\u0000-30",
          "desc": "脆皮"
        }
      ],
      "attractions": [
        {
          "name": "维港",
          "desc": "夜景"
        },
        {
          "name": "太平山",
          "desc": "俯瞰"
        },
        {
          "name": "迪士尼",
          "desc": "童话"
        },
        {
          "name": "南丫岛",
          "desc": "渔村"
        }
      ],
      "festivals": [
        {
          "name": "新年",
          "date": "1-2月"
        },
        {
          "name": "中秋",
          "date": "9月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "禁食",
        "八达通"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "旺角",
          "desc": "小偷多",
          "risk": "中"
        },
        {
          "area": "深水埗",
          "desc": "老区复杂",
          "risk": "中"
        },
        {
          "area": "中环",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "中环",
        "湾仔"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "中国外交部驻港公署",
      "phone": "+852-2106-7000",
      "address": "南丫岛东段7号",
      "emergency": "+852-2106-7000"
    },
    "hospital": {
      "name": "玛丽医院",
      "phone": "+852-2255-3838",
      "address": "香港薄扶林道102号"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "烤鸭",
          "price": "¥80-200",
          "desc": "挂炉"
        },
        {
          "name": "涮羊肉",
          "price": "¥50-150",
          "desc": "铜锅"
        },
        {
          "name": "炸酱面",
          "price": "¥15-40",
          "desc": "手擀"
        },
        {
          "name": "豆汁",
          "price": "¥5-15",
          "desc": "老味"
        }
      ],
      "attractions": [
        {
          "name": "故宫",
          "desc": "皇宫"
        },
        {
          "name": "长城",
          "desc": "八达岭"
        },
        {
          "name": "天坛",
          "desc": "祈年"
        },
        {
          "name": "什刹海",
          "desc": "胡同"
        }
      ],
      "festivals": [
        {
          "name": "春节",
          "date": "1-2月"
        },
        {
          "name": "国庆",
          "date": "10月"
        },
        {
          "name": "两会",
          "date": "3月"
        }
      ],
      "customs": [
        "预约",
        "正规游"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "三里屯",
          "desc": "酒吧区",
          "risk": "低"
        },
        {
          "area": "秀水街",
          "desc": "骗子",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "东城",
        "西城"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "外交部领事保护热线",
      "phone": "+86-10-12308",
      "address": "北京市朝阳区朝阳门外大街15号",
      "emergency": "+86-10-12308"
    },
    "hospital": {
      "name": "协和医院",
      "phone": "+86-10-6915-6114",
      "address": "北京市东城区帅府园1号"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "生煎",
          "price": "¥10-25",
          "desc": "底脆"
        },
        {
          "name": "红烧肉",
          "price": "¥30-80",
          "desc": "浓油"
        },
        {
          "name": "小笼",
          "price": "¥15-40",
          "desc": "皮薄"
        },
        {
          "name": "排骨",
          "price": "¥15-35",
          "desc": "炸排"
        }
      ],
      "attractions": [
        {
          "name": "外滩",
          "desc": "建筑"
        },
        {
          "name": "陆家嘴",
          "desc": "摩天"
        },
        {
          "name": "田子坊",
          "desc": "石库门"
        },
        {
          "name": "武康路",
          "desc": "梧桐"
        }
      ],
      "festivals": [
        {
          "name": "时装周",
          "date": "3月"
        },
        {
          "name": "进博会",
          "date": "11月"
        },
        {
          "name": "灯光秀",
          "date": "每晚"
        }
      ],
      "customs": [
        "排队",
        "禁食"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "城隍庙",
          "desc": "游客，骗子",
          "risk": "中"
        },
        {
          "area": "陆家嘴",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "静安",
        "徐汇"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "上海市外事办公室",
      "phone": "+86-21-2313-0000",
      "address": "上海黄浦区延安西路1208号",
      "emergency": "+86-21-12308"
    },
    "hospital": {
      "name": "华山医院",
      "phone": "+86-21-5288-9999",
      "address": "上海静安区乌鲁木齐中路12号"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "冬阴功",
          "price": "฿150-400",
          "desc": "酸辣"
        },
        {
          "name": "炒河粉",
          "price": "฿60-150",
          "desc": "Pad Thai"
        },
        {
          "name": "芒果糯米饭",
          "price": "฿50-120",
          "desc": "椰浆"
        },
        {
          "name": "烤肉串",
          "price": "฿20-50",
          "desc": "沙爹"
        }
      ],
      "attractions": [
        {
          "name": "大皇宫",
          "desc": "皇室"
        },
        {
          "name": "卧佛寺",
          "desc": "46米"
        },
        {
          "name": "郑王庙",
          "desc": "黎明"
        },
        {
          "name": "考山路",
          "desc": "背包客"
        }
      ],
      "festivals": [
        {
          "name": "泼水节",
          "date": "4月"
        },
        {
          "name": "水灯节",
          "date": "11月"
        },
        {
          "name": "国王生日",
          "date": "12月"
        }
      ],
      "customs": [
        "脱鞋",
        "不指",
        "皇室"
      ],
      "transport": "BTS",
      "hotspots": [
        {
          "area": "考山路",
          "desc": "背包客，复杂",
          "risk": "中"
        },
        {
          "area": "是隆",
          "desc": "商业区",
          "risk": "低"
        },
        {
          "area": "暹罗",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "素坤逸",
        "暹罗"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻泰国大使馆",
      "phone": "+66-2-245-7044",
      "address": "57 Ratchadaphisek Road, Bangkok 10400",
      "emergency": "+66-2-245-7038"
    },
    "hospital": {
      "name": "Bumrungrad Hospital",
      "phone": "+66-2-066-8888",
      "address": "33 Sukhumvit Soi 3, Bangkok"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "肉骨茶",
          "price": "RM15-30",
          "desc": "胡椒汤"
        },
        {
          "name": "椰浆饭",
          "price": "RM8-15",
          "desc": "Nasi"
        },
        {
          "name": "沙爹",
          "price": "RM5-12",
          "desc": "烤肉"
        },
        {
          "name": "榴莲",
          "price": "RM20-50",
          "desc": "猫山王"
        }
      ],
      "attractions": [
        {
          "name": "双子塔",
          "desc": "最高"
        },
        {
          "name": "独立广场",
          "desc": "标志"
        },
        {
          "name": "茨厂街",
          "desc": "华人"
        },
        {
          "name": "阿罗街",
          "desc": "夜市"
        }
      ],
      "festivals": [
        {
          "name": "开斋节",
          "date": "4月"
        },
        {
          "name": "国庆",
          "date": "8月"
        },
        {
          "name": "大宝节",
          "date": "1月"
        }
      ],
      "customs": [
        "清真",
        "周五祈祷",
        "右手"
      ],
      "transport": "LRT",
      "hotspots": [
        {
          "area": "武吉免登",
          "desc": "商业中心",
          "risk": "低"
        },
        {
          "area": "嘉美清真寺",
          "desc": "复杂",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "KLCC"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻马来西亚大使馆",
      "phone": "+60-3-4251-3555",
      "address": "No.229, Jalan Ampang, 50450 Kuala Lumpur",
      "emergency": "+60-3-4251-3555"
    },
    "hospital": {
      "name": "Prince Court Medical Centre",
      "phone": "+60-3-2160-0000",
      "address": "39 Jalan Kia Peng, Kuala Lumpur"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "牛肉面",
          "price": "NT(-350",
          "desc": "红烧"
        },
        {
          "name": "蚵仔煎",
          "price": "NT\u0000-120",
          "desc": "牡蛎"
        },
        {
          "name": "珍奶",
          "price": "NT\u0000-80",
          "desc": "手摇"
        },
        {
          "name": "小笼包",
          "price": "NT\u0010-250",
          "desc": "鼎泰丰"
        }
      ],
      "attractions": [
        {
          "name": "101",
          "desc": "观景"
        },
        {
          "name": "士林夜市",
          "desc": "最大"
        },
        {
          "name": "故宫",
          "desc": "文物"
        },
        {
          "name": "阳明山",
          "desc": "火山"
        }
      ],
      "festivals": [
        {
          "name": "春节",
          "date": "1-2月"
        },
        {
          "name": "元宵",
          "date": "2月"
        },
        {
          "name": "中秋",
          "date": "9月"
        }
      ],
      "customs": [
        "小费",
        "禁食",
        "博爱座"
      ],
      "transport": "捷运",
      "hotspots": [
        {
          "area": "西门町",
          "desc": "青少年区",
          "risk": "low"
        },
        {
          "area": "万华",
          "desc": "老区",
          "risk": "low"
        },
        {
          "area": "大安",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "大安",
        "信义"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "海峡两岸旅游协会",
      "phone": "+886-2-2758-8008",
      "address": "台北市松山区敦化北路240号",
      "emergency": "+886-2-2758-8008"
    },
    "hospital": {
      "name": "台大医院",
      "phone": "+886-2-2312-3456",
      "address": "台北市中正区常德街1号"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "章鱼烧",
          "price": "¥500-1000",
          "desc": "章鱼丸"
        },
        {
          "name": "大阪烧",
          "price": "¥800-2000",
          "desc": "文字烧"
        },
        {
          "name": "串炸",
          "price": "¥300-800",
          "desc": "油炸"
        },
        {
          "name": "拉面",
          "price": "¥700-1500",
          "desc": "豚骨"
        }
      ],
      "attractions": [
        {
          "name": "道顿堀",
          "desc": "美食"
        },
        {
          "name": "大阪城",
          "desc": "秀吉"
        },
        {
          "name": "环球影城",
          "desc": "哈利波特"
        },
        {
          "name": "新世界",
          "desc": "复古"
        }
      ],
      "festivals": [
        {
          "name": "樱花",
          "date": "3-4月"
        },
        {
          "name": "天神祭",
          "date": "7月"
        }
      ],
      "customs": [
        "禁食",
        "不边走"
      ],
      "transport": "JR环状",
      "hotspots": [
        {
          "area": "飞田新地",
          "desc": "红灯区",
          "risk": "中"
        },
        {
          "area": "新世界",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "道顿堀",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "梅田",
        "心斋桥"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻大阪总领事馆",
      "phone": "+81-6-6445-9481",
      "address": "大阪府大阪市西区靭本町3-9-2",
      "emergency": "+81-6-6445-9481"
    },
    "hospital": {
      "name": "大阪大学医学部附属医院",
      "phone": "+81-6-6879-5111",
      "address": "大阪府吹田市山田丘2-15"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "三角饼",
          "price": "₹30-80",
          "desc": "Vada Pav"
        },
        {
          "name": "香饭",
          "price": "₹200-500",
          "desc": "Biryani"
        },
        {
          "name": "特色菜",
          "price": "₹150-400",
          "desc": "Pav Bhaji"
        },
        {
          "name": "甜点",
          "price": "₹50-150",
          "desc": "Ladoo"
        }
      ],
      "attractions": [
        {
          "name": "印度门",
          "desc": "地标"
        },
        {
          "name": "宝莱坞",
          "desc": "电影"
        },
        {
          "name": "滨海大道",
          "desc": "海边"
        },
        {
          "name": "洗衣场",
          "desc": "百年"
        }
      ],
      "festivals": [
        {
          "name": "电影节",
          "date": "10月"
        },
        {
          "name": "象神节",
          "date": "8-9月"
        },
        {
          "name": "独立日",
          "date": "8月"
        }
      ],
      "customs": [
        "小费",
        "注意财物",
        "防骗"
      ],
      "transport": "火车",
      "hotspots": [
        {
          "area": "Crawford市场",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "Dharavi",
          "desc": "贫民窟",
          "risk": "中"
        },
        {
          "area": "南孟买",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "南孟买"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻孟买总领事馆",
      "phone": "+91-22-6658-0200",
      "address": "Nehru Rd, Nariman Point, Mumbai",
      "emergency": "+91-22-6658-0202"
    },
    "hospital": {
      "name": "Kokilaben Dhirubhai Ambani Hospital",
      "phone": "+91-22-3099-9999",
      "address": "Andheri West, Mumbai"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "香饭",
          "price": "₹200-500",
          "desc": "Biryani"
        },
        {
          "name": "烤鸡",
          "price": "₹250-600",
          "desc": "Butter Chicken"
        },
        {
          "name": "煎饼",
          "price": "₹30-80",
          "desc": "Paratha"
        },
        {
          "name": "拉茶",
          "price": "₹20-50",
          "desc": "Chai"
        }
      ],
      "attractions": [
        {
          "name": "泰姬陵",
          "desc": "奇迹"
        },
        {
          "name": "红堡",
          "desc": "莫卧儿"
        },
        {
          "name": "贾玛清真寺",
          "desc": "最大"
        },
        {
          "name": "月光集市",
          "desc": "传统"
        }
      ],
      "festivals": [
        {
          "name": "排灯节",
          "date": "10-11月"
        },
        {
          "name": "洒红节",
          "date": "3月"
        },
        {
          "name": "独立日",
          "date": "8月"
        }
      ],
      "customs": [
        "左手",
        "不摸头",
        "砍价"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "康诺特广场",
          "desc": "商业区",
          "risk": "中"
        },
        {
          "area": "月光集市",
          "desc": "混乱",
          "risk": "高"
        },
        {
          "area": "新德里",
          "desc": "相对安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "新德里"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻印度大使馆",
      "phone": "+91-11-2611-2345",
      "address": "50-D, Shanti Path, Chanakyapuri, New Delhi",
      "emergency": "+91-11-2611-2345"
    },
    "hospital": {
      "name": "All India Institute of Medical Sciences",
      "phone": "+91-11-2658-8500",
      "address": "Ansari Nagar, New Delhi"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "炒饭",
          "price": "Rp25000-60000",
          "desc": "Nasi Goreng"
        },
        {
          "name": "沙嗲",
          "price": "Rp15000-35000",
          "desc": "Sate"
        },
        {
          "name": "春卷",
          "price": "Rp5000-15000",
          "desc": "Lumpia"
        },
        {
          "name": "椰子糕",
          "price": "Rp5000-12000",
          "desc": "Kue Putu"
        }
      ],
      "attractions": [
        {
          "name": "独立广场",
          "desc": "标志"
        },
        {
          "name": "纪念塔",
          "desc": "Monas"
        },
        {
          "name": "老城区",
          "desc": "荷式"
        },
        {
          "name": "梦幻公园",
          "desc": "主题"
        }
      ],
      "festivals": [
        {
          "name": "独立日",
          "date": "8月"
        },
        {
          "name": "开斋节",
          "date": "4月"
        },
        {
          "name": "雅加达节",
          "date": "8月"
        }
      ],
      "customs": [
        "左手",
        "脱鞋",
        "着装"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "老城",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "中雅加达",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "中雅加达"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻印尼大使馆",
      "phone": "+62-21-576-1039",
      "address": "Jl. Mega Kuningan No.2, Jakarta Selatan",
      "emergency": "+62-21-576-1039"
    },
    "hospital": {
      "name": "RS Pondok Indah",
      "phone": "+62-21-765-7521",
      "address": "Jl. Metro Duta Kav.21, Jakarta"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "河粉",
          "price": "₫50000-120000",
          "desc": "Pho"
        },
        {
          "name": "法棍",
          "price": "₫20000-40000",
          "desc": "Bánh mì"
        },
        {
          "name": "春卷",
          "price": "₫30000-60000",
          "desc": "Gỏi"
        },
        {
          "name": "滴漏咖啡",
          "price": "₫25000-50000",
          "desc": "Cà phê"
        }
      ],
      "attractions": [
        {
          "name": "统一宫",
          "desc": "战争"
        },
        {
          "name": "范老五街",
          "desc": "背包客"
        },
        {
          "name": "滨城市场",
          "desc": "百年"
        },
        {
          "name": "咖啡公寓",
          "desc": "INS"
        }
      ],
      "festivals": [
        {
          "name": "新年",
          "date": "1-2月"
        },
        {
          "name": "解放日",
          "date": "4月"
        },
        {
          "name": "中秋",
          "date": "9月"
        }
      ],
      "customs": [
        "不踩门槛",
        "不摸头",
        "砍价"
      ],
      "transport": "Grab",
      "hotspots": [
        {
          "area": "范老五街",
          "desc": "背包客",
          "risk": "中"
        },
        {
          "area": "第七郡",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "第一郡",
        "第七郡"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻胡志明市总领事馆",
      "phone": "+84-28-3829-2463",
      "address": "175 Nguyen Van Cu St, Dist 5, HCMC",
      "emergency": "+84-28-3829-2463"
    },
    "hospital": {
      "name": "Cho Ray Hospital",
      "phone": "+84-28-3855-4137",
      "address": "201B Nguyen Chi Thanh St, HCMC"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "烤鸡",
          "price": "₱150-300",
          "desc": "Lechon"
        },
        {
          "name": "Halo-halo",
          "price": "₱50-100",
          "desc": "刨冰"
        },
        {
          "name": "Adobo",
          "price": "₱100-200",
          "desc": "醋炖"
        },
        {
          "name": "炸香蕉",
          "price": "₱20-50",
          "desc": "Plant"
        }
      ],
      "attractions": [
        {
          "name": "马尼拉湾",
          "desc": "日落"
        },
        {
          "name": "圣地亚哥堡",
          "desc": "西班牙"
        },
        {
          "name": "黎刹公园",
          "desc": "国父"
        },
        {
          "name": "SM商场",
          "desc": "最大"
        }
      ],
      "festivals": [
        {
          "name": "独立日",
          "date": "6月"
        },
        {
          "name": "黑耶稣",
          "date": "1月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "尊重",
        "注意安全"
      ],
      "transport": "吉普尼",
      "hotspots": [
        {
          "area": "马尼拉湾",
          "desc": "游客",
          "risk": "低"
        },
        {
          "area": "Ermita",
          "desc": "红灯区",
          "risk": "高"
        }
      ],
      "safeAreas": [
        "马卡蒂"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻菲律宾大使馆",
      "phone": "+63-2-844-3148",
      "address": "1235 Acacia St, Dasmariñas Village, Makati",
      "emergency": "+63-2-844-3148"
    },
    "hospital": {
      "name": "Makati Medical Center",
      "phone": "+63-2-888-8999",
      "address": "2 Amorsolo St, Makati"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "沙瓦尔玛",
          "price": "AED15-40",
          "desc": "烤肉卷"
        },
        {
          "name": "骆驼奶",
          "price": "AED10-25",
          "desc": "营养"
        },
        {
          "name": "海鲜",
          "price": "AED80-200",
          "desc": "波斯湾"
        },
        {
          "name": "甜点",
          "price": "AED10-30",
          "desc": "椰枣"
        }
      ],
      "attractions": [
        {
          "name": "哈利法塔",
          "desc": "最高"
        },
        {
          "name": "棕榈岛",
          "desc": "人造"
        },
        {
          "name": "黄金市集",
          "desc": "金市"
        },
        {
          "name": "沙漠",
          "desc": "Safari"
        }
      ],
      "festivals": [
        {
          "name": "购物节",
          "date": "1月"
        },
        {
          "name": "开斋节",
          "date": "4月"
        },
        {
          "name": "美食节",
          "date": "2月"
        }
      ],
      "customs": [
        "斋月",
        "着装",
        "禁酒猪"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "德拉老城",
          "desc": "复杂",
          "risk": "中"
        },
        {
          "area": "马尔萨阿拉伯",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "棕榈岛",
        "市中心"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻迪拜总领事馆",
      "phone": "+971-4-394-4733",
      "address": "Al Wasl Road, Dubai",
      "emergency": "+971-4-394-4733"
    },
    "hospital": {
      "name": "Dubai Hospital",
      "phone": "+971-4-222-1211",
      "address": "Al Khaleej Road, Dubai"
    }
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
          "name": "阿拉伯沙拉",
          "price": "QR30-60",
          "desc": "新鲜蔬菜"
        },
        {
          "name": "烤肉串",
          "price": "QR40-80",
          "desc": "Shawarma"
        },
        {
          "name": "椰枣",
          "price": "QR20-50",
          "desc": "当地甜点"
        },
        {
          "name": "阿拉伯咖啡",
          "price": "QR15-30",
          "desc": "Qahwa"
        }
      ],
      "attractions": [
        {
          "name": "伊斯兰艺术博物馆",
          "desc": "建筑"
        },
        {
          "name": "瓦其夫市场",
          "desc": "老市场"
        },
        {
          "name": "珍珠卡塔尔",
          "desc": "人工岛"
        },
        {
          "name": "海滨大道",
          "desc": "散步"
        }
      ],
      "festivals": [
        {
          "name": "国庆",
          "date": "12月"
        },
        {
          "name": "开斋节",
          "date": "4月"
        },
        {
          "name": "购物节",
          "date": "1月"
        }
      ],
      "customs": [
        "着装",
        "斋月注意",
        "禁酒"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "老城",
          "desc": "传统",
          "risk": "低"
        },
        {
          "area": "滨海路",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "西湾",
        "珍珠"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻卡塔尔大使馆",
      "phone": "+974-4498-6020",
      "address": "Al Dafna Area, Doha",
      "emergency": "+974-4498-6020"
    },
    "hospital": {
      "name": "Hamad General Hospital",
      "phone": "+974-4439-2222",
      "address": "Doha, Qatar"
    }
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
          "name": "沙特烤肉",
          "price": "SAR40-80",
          "desc": "Kabab"
        },
        {
          "name": "椰枣",
          "price": "SAR20-50",
          "desc": "甜点"
        },
        {
          "name": "大饼",
          "price": "SAR5-15",
          "desc": "Bread"
        },
        {
          "name": "咖啡",
          "price": "SAR15-30",
          "desc": "Qahwa"
        }
      ],
      "attractions": [
        {
          "name": "王国中心",
          "desc": "摩天"
        },
        {
          "name": "马斯马克",
          "desc": "堡垒"
        },
        {
          "name": "德拉伊耶",
          "desc": "历史"
        },
        {
          "name": "瓦迪",
          "desc": "公园"
        }
      ],
      "festivals": [
        {
          "name": "国庆",
          "date": "9月"
        },
        {
          "name": "开斋节",
          "date": "4月"
        }
      ],
      "customs": [
        "着装",
        "女性限制",
        "禁酒"
      ],
      "transport": "Uber",
      "hotspots": [
        {
          "area": "市区",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "北部"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻沙特阿拉伯大使馆",
      "phone": "+966-11-483-4747",
      "address": "Olaya District, Riyadh",
      "emergency": "+966-11-483-4747"
    },
    "hospital": {
      "name": "King Faisal Specialist Hospital",
      "phone": "+966-11-464-7272",
      "address": "Al Mathar, Riyadh"
    }
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
          "name": "烤肉串",
          "price": "OMR5-12",
          "desc": "Shawarma"
        },
        {
          "name": "鱼排",
          "price": "OMR8-18",
          "desc": "海鲜"
        },
        {
          "name": "椰枣",
          "price": "OMR3-8",
          "desc": "甜点"
        },
        {
          "name": "咖啡",
          "price": "OMR2-5",
          "desc": "Qahwa"
        }
      ],
      "attractions": [
        {
          "name": "大寺",
          "desc": "寺庙"
        },
        {
          "name": "要塞",
          "desc": "堡垒"
        },
        {
          "name": "歌剧院",
          "desc": "文化"
        },
        {
          "name": "穆特拉赫",
          "desc": "老城"
        }
      ],
      "festivals": [
        {
          "name": "国庆",
          "date": "11月"
        },
        {
          "name": "独立日",
          "date": "7月"
        }
      ],
      "customs": [
        "着装",
        "周五祈祷",
        "禁酒"
      ],
      "transport": "出租车",
      "hotspots": [
        {
          "area": "老城",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "马斯喀特"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻阿曼大使馆",
      "phone": "+968-2469-8278",
      "address": "Al Khuwair, Muscat",
      "emergency": "+968-2469-8278"
    },
    "hospital": {
      "name": "Royal Hospital",
      "phone": "+968-2456-0000",
      "address": "Muscat, Oman"
    }
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
          "name": "鹰嘴豆泥",
          "price": "₪25-50",
          "desc": "Hummus"
        },
        {
          "name": "沙瓦尔玛",
          "price": "₪20-40",
          "desc": "Shawarma"
        },
        {
          "name": "沙拉",
          "price": "₪20-35",
          "desc": "Salad"
        },
        {
          "name": "法棍",
          "price": "₪10-20",
          "desc": "Baguette"
        }
      ],
      "attractions": [
        {
          "name": "海滩",
          "desc": "地中海"
        },
        {
          "name": "雅法",
          "desc": "老城"
        },
        {
          "name": "博物馆",
          "desc": "文化"
        },
        {
          "name": "Rothschild",
          "desc": "林荫道"
        }
      ],
      "festivals": [
        {
          "name": "独立日",
          "date": "4月"
        },
        {
          "name": "普林节",
          "date": "3月"
        }
      ],
      "customs": [
        "安全",
        "周日休息",
        "小费"
      ],
      "transport": "公交",
      "hotspots": [
        {
          "area": "南特拉维夫",
          "desc": "移民",
          "risk": "中"
        },
        {
          "area": "雅法",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "海滨",
        "雅法"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻以色列大使馆",
      "phone": "+972-3-528-0398",
      "address": "222 Ben Gurion St, Tel Aviv",
      "emergency": "+972-3-528-0398"
    },
    "hospital": {
      "name": "Tel Aviv Sourasky Medical Center",
      "phone": "+972-3-697-4444",
      "address": "Weizman St 14, Tel Aviv"
    }
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
          "name": "烤肉",
          "price": "TRY50-150",
          "desc": "Kebab"
        },
        {
          "name": "披萨",
          "price": "TRY40-100",
          "desc": "Lahmacun"
        },
        {
          "name": "冰淇淋",
          "price": "TRY20-50",
          "desc": "Dondurma"
        },
        {
          "name": "茶",
          "price": "TRY10-20",
          "desc": "Çay"
        }
      ],
      "attractions": [
        {
          "name": "蓝色清真寺",
          "desc": "地标"
        },
        {
          "name": "圣索菲亚",
          "desc": "拜占庭"
        },
        {
          "name": "大巴扎",
          "desc": "集市"
        },
        {
          "name": "博斯普鲁斯",
          "desc": "海峡"
        }
      ],
      "festivals": [
        {
          "name": "节",
          "date": "4月"
        },
        {
          "name": "独立日",
          "date": "10月"
        }
      ],
      "customs": [
        "清真寺着装",
        "讨价还价",
        "小费"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "大巴扎",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Sultanahmet",
          "desc": "游客",
          "risk": "低"
        },
        {
          "area": "Taksim",
          "desc": "夜生活",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "新城",
        "贝伊奥卢"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻伊斯坦布尔总领事馆",
      "phone": "+90-212-299-2188",
      "address": "Çırağan Cad. 32, Beşiktaş, Istanbul",
      "emergency": "+90-212-299-2188"
    },
    "hospital": {
      "name": "Acıbadem Hospital",
      "phone": "+90-444-5544",
      "address": "Cad. No: 22, Istanbul"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "沙嗲",
          "price": "Rp20000-50000",
          "desc": "烤肉"
        },
        {
          "name": "炒饭",
          "price": "Rp30000-80000",
          "desc": "Nasi"
        },
        {
          "name": "脏鸭",
          "price": "Rp80000-150000",
          "desc": "酥脆"
        },
        {
          "name": "水果",
          "price": "Rp10000-30000",
          "desc": "热带"
        }
      ],
      "attractions": [
        {
          "name": "乌布皇宫",
          "desc": "皇室"
        },
        {
          "name": "海神庙",
          "desc": "日落"
        },
        {
          "name": "梯田",
          "desc": "德格拉朗"
        },
        {
          "name": "天空之门",
          "desc": "ins"
        }
      ],
      "festivals": [
        {
          "name": "安宁日",
          "date": "3月"
        },
        {
          "name": "加隆安",
          "date": "3月"
        },
        {
          "name": "独立日",
          "date": "8月"
        }
      ],
      "customs": [
        "进庙",
        "不摸头",
        "祭品"
      ],
      "transport": "GoJek",
      "hotspots": [
        {
          "area": "库塔",
          "desc": "夜生活",
          "risk": "中"
        },
        {
          "area": "乌布",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "乌布",
        "萨努尔"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻登巴萨总领事馆",
      "phone": "+62-361-239901",
      "address": "Jl. Sunset Road No.888, Badung, Bali",
      "emergency": "+62-361-239901"
    },
    "hospital": {
      "name": "Sanglah Hospital",
      "phone": "+62-361-227911",
      "address": "Jl. Pulau Bali No.2, Denpasar"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "咖喱面",
          "price": "฿60-120",
          "desc": "Khao Soi"
        },
        {
          "name": "炒面",
          "price": "฿40-80",
          "desc": "Pad Thai"
        },
        {
          "name": "烤肉",
          "price": "฿80-200",
          "desc": "Moo Yang"
        },
        {
          "name": "甜品",
          "price": "฿20-50",
          "desc": "Khao Tom"
        }
      ],
      "attractions": [
        {
          "name": "古城墙",
          "desc": "兰纳"
        },
        {
          "name": "素帖寺",
          "desc": "双龙"
        },
        {
          "name": "清迈夜市",
          "desc": "最大"
        },
        {
          "name": "宁曼路",
          "desc": "文艺"
        }
      ],
      "festivals": [
        {
          "name": "水灯节",
          "date": "11月"
        },
        {
          "name": "泼水节",
          "date": "4月"
        },
        {
          "name": "花节",
          "date": "2月"
        }
      ],
      "customs": [
        "脱鞋",
        "不指",
        "僧侣"
      ],
      "transport": "双条车",
      "hotspots": [
        {
          "area": "老城",
          "desc": "安全",
          "risk": "低"
        },
        {
          "area": "尼曼路",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "古城",
        "宁曼"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻清迈总领事馆",
      "phone": "+66-53-282-310",
      "address": "25/3 ถนนช้างเผือก อำเภอเมือง เชียงใหม่",
      "emergency": "+66-53-282-310"
    },
    "hospital": {
      "name": "Chiang Mai Ram Hospital",
      "phone": "+66-53-920-300",
      "address": "8 Siriporn Rd, Chiang Mai"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "海鲜",
          "price": "฿200-800",
          "desc": "龙虾"
        },
        {
          "name": "炒饭",
          "price": "฿60-150",
          "desc": "Khao Pad"
        },
        {
          "name": "水果",
          "price": "฿30-100",
          "desc": "榴莲"
        },
        {
          "name": "甜点",
          "price": "฿20-50",
          "desc": "椰子"
        }
      ],
      "attractions": [
        {
          "name": "芭东海滩",
          "desc": "最热闹"
        },
        {
          "name": "皮皮岛",
          "desc": "浮潜"
        },
        {
          "name": "大佛",
          "desc": "佛像"
        },
        {
          "name": "普吉镇",
          "desc": "葡式"
        }
      ],
      "festivals": [
        {
          "name": "海鲜节",
          "date": "11月"
        },
        {
          "name": "狂欢节",
          "date": "11月"
        },
        {
          "name": "素食节",
          "date": "9-10月"
        }
      ],
      "customs": [
        "财物",
        "安全",
        "佛教"
      ],
      "transport": "突突车",
      "hotspots": [
        {
          "area": "芭东海滩",
          "desc": "游客区",
          "risk": "中"
        },
        {
          "area": "普吉镇",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "芭东海滩",
        "卡塔"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻普吉总领事馆",
      "phone": "+66-76-327-100",
      "address": "74/75 Phuket Rd, Mueang Phuket",
      "emergency": "+66-76-327-100"
    },
    "hospital": {
      "name": "Phuket Hospital",
      "phone": "+66-76-361-234",
      "address": "353 Yaowarat Rd, Phuket"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "叻沙",
          "price": "RM8-18",
          "desc": "Asam"
        },
        {
          "name": "炒粿条",
          "price": "RM6-15",
          "desc": "Char Kway"
        },
        {
          "name": "布丁",
          "price": "RM4-8",
          "desc": "Coconut"
        },
        {
          "name": "福建面",
          "price": "RM8-16",
          "desc": "Hokkien"
        }
      ],
      "attractions": [
        {
          "name": "乔治城",
          "desc": "遗产"
        },
        {
          "name": "升旗山",
          "desc": "俯瞰"
        },
        {
          "name": "壁画街",
          "desc": "涂鸦"
        },
        {
          "name": "姓氏桥",
          "desc": "华人"
        }
      ],
      "festivals": [
        {
          "name": "大宝森",
          "date": "1-2月"
        },
        {
          "name": "中秋",
          "date": "9月"
        },
        {
          "name": "圣乔治",
          "date": "4月"
        }
      ],
      "customs": [
        "慢行",
        "左行",
        "小费"
      ],
      "transport": "Grab",
      "hotspots": [
        {
          "area": "汕头街",
          "desc": "夜市",
          "risk": "低"
        },
        {
          "area": "乔治城",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "乔治城"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻槟城总领事馆",
      "phone": "+60-4-226-6060",
      "address": "No.1 St. George's Road, 10350 Penang",
      "emergency": "+60-4-226-6060"
    },
    "hospital": {
      "name": "Penang Hospital",
      "phone": "+60-4-229-3333",
      "address": "Jalan Perak, Georgetown, Penang"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "河粉",
          "price": "₫40000-100000",
          "desc": "Pho"
        },
        {
          "name": "烤肉米线",
          "price": "₫35000-80000",
          "desc": "Bún chả"
        },
        {
          "name": "鸡蛋咖啡",
          "price": "₫20000-40000",
          "desc": "Cà phê trứng"
        },
        {
          "name": "炸春卷",
          "price": "₫20000-45000",
          "desc": "Nem"
        }
      ],
      "attractions": [
        {
          "name": "还剑湖",
          "desc": "市中心"
        },
        {
          "name": "三十六行街",
          "desc": "老城"
        },
        {
          "name": "巴亭广场",
          "desc": "胡志明陵"
        },
        {
          "name": "西湖",
          "desc": "最大湖"
        }
      ],
      "festivals": [
        {
          "name": "建城",
          "date": "10月"
        },
        {
          "name": "春节",
          "date": "1-2月"
        },
        {
          "name": "端午",
          "date": "5月"
        }
      ],
      "customs": [
        "不踩门槛",
        "女士优先",
        "不拍照"
      ],
      "transport": "摩托",
      "hotspots": [
        {
          "area": "老城",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "还剑湖",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "巴亭郡"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻越南大使馆",
      "phone": "+84-24-3823-4982",
      "address": "46 Hoang Dieu Str, Ba Dinh Dist, Hanoi",
      "emergency": "+84-24-3823-4982"
    },
    "hospital": {
      "name": "Vietnam Military Hospital 108",
      "phone": "+84-24-6686-0000",
      "address": "1 Tran Hung Dao Str, Hanoi"
    }
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
          "name": "香饭",
          "price": "₹200-400",
          "desc": "Biryani"
        },
        {
          "name": "套餐",
          "price": "₹150-300",
          "desc": "Thali"
        },
        {
          "name": "Dosa",
          "price": "₹80-150",
          "desc": "薄饼"
        },
        {
          "name": "奶茶",
          "price": "₹30-60",
          "desc": "Chai"
        }
      ],
      "attractions": [
        {
          "name": "王宫",
          "desc": "宫殿"
        },
        {
          "name": "植物园",
          "desc": "花园"
        },
        {
          "name": "MG路",
          "desc": "购物"
        },
        {
          "name": "科技园",
          "desc": "硅谷"
        }
      ],
      "festivals": [
        {
          "name": "排灯节",
          "date": "10-11月"
        },
        {
          "name": "独立日",
          "date": "8月"
        }
      ],
      "customs": [
        "小费",
        "交通",
        "多元"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "MG路",
          "desc": "商业区",
          "risk": "低"
        },
        {
          "area": "Whitefield",
          "desc": "IT区",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Indiranagar"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻班加罗尔总领事馆",
      "phone": "+91-80-2220-6827",
      "address": "No.1, MG Road, Bangalore",
      "emergency": "+91-80-2220-6827"
    },
    "hospital": {
      "name": "Manipal Hospital",
      "phone": "+91-80-4000-2100",
      "address": "98, HAL Road, Bangalore"
    }
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
          "name": "Dosa",
          "price": "₹80-150",
          "desc": "薄饼"
        },
        {
          "name": "香饭",
          "price": "₹150-300",
          "desc": "Biryani"
        },
        {
          "name": "咖喱角",
          "price": "₹50-100",
          "desc": "Samosa"
        },
        {
          "name": "咖啡",
          "price": "₹30-60",
          "desc": "Filter coffee"
        }
      ],
      "attractions": [
        {
          "name": "海滩",
          "desc": "马里纳"
        },
        {
          "name": "神庙",
          "desc": "寺庙"
        },
        {
          "name": "博物馆",
          "desc": "政府"
        },
        {
          "name": "T Nagar",
          "desc": "购物"
        }
      ],
      "festivals": [
        {
          "name": "新年",
          "date": "4月"
        },
        {
          "name": "排灯节",
          "date": "10月"
        }
      ],
      "customs": [
        "小费",
        "寺庙",
        "热"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "T Nagar",
          "desc": "购物区",
          "risk": "低"
        },
        {
          "area": " beaches",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Nungambakkam"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻金奈总领事馆",
      "phone": "+91-44-2822-4519",
      "address": "9/3 Mahatma Gandhi Rd, Chennai",
      "emergency": "+91-44-2822-4519"
    },
    "hospital": {
      "name": "Apollo Hospital",
      "phone": "+91-44-2829-0202",
      "address": "21/2 Old #14, Chennai"
    }
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
          "name": "香饭",
          "price": "₹150-300",
          "desc": "Biryani"
        },
        {
          "name": "Rasgulla",
          "price": "₹50-100",
          "desc": "甜点"
        },
        {
          "name": "Mughlai",
          "price": "₹100-200",
          "desc": "烤肉"
        },
        {
          "name": "鱼咖喱",
          "price": "₹80-150",
          "desc": "Machher Jhol"
        }
      ],
      "attractions": [
        {
          "name": "维多利亚堂",
          "desc": "建筑"
        },
        {
          "name": "霍卡市场",
          "desc": "购物"
        },
        {
          "name": "马坦公园",
          "desc": "公园"
        },
        {
          "name": "泰戈尔故居",
          "desc": "文化"
        }
      ],
      "festivals": [
        {
          "name": "Durga Puja",
          "date": "9-10月"
        },
        {
          "name": "新年",
          "date": "1月"
        }
      ],
      "customs": [
        "小费",
        "文化",
        "交通"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Park Street",
          "desc": "商业",
          "risk": "低"
        },
        {
          "area": "Bhowanipore",
          "desc": "复杂",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Park Street"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻加尔各答总领事馆",
      "phone": "+91-33-2228-7588",
      "address": "18A Edmund Road, Kolkata",
      "emergency": "+91-33-2228-7588"
    },
    "hospital": {
      "name": "CMRI Hospital",
      "phone": "+91-33-3090-3000",
      "address": "7/2 Diamond Harbour Rd, Kolkata"
    }
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
          "name": "海德拉巴香饭",
          "price": "₹200-400",
          "desc": "Biryani"
        },
        {
          "name": "Haleem",
          "price": "₹150-300",
          "desc": "肉汤"
        },
        {
          "name": "Chicken 65",
          "price": "₹100-200",
          "desc": "辣鸡"
        },
        {
          "name": "伊朗茶",
          "price": "₹30-60",
          "desc": "Irani Chai"
        }
      ],
      "attractions": [
        {
          "name": "查尔米纳尔",
          "desc": "标志"
        },
        {
          "name": "戈尔康达堡",
          "desc": "堡垒"
        },
        {
          "name": "湖泊",
          "desc": "Hussaini Sagar"
        },
        {
          "name": "Laad Bazaar",
          "desc": "珍珠"
        }
      ],
      "festivals": [
        {
          "name": "Bakrid",
          "date": "4月"
        },
        {
          "name": "Diwali",
          "date": "10月"
        }
      ],
      "customs": [
        "小费",
        "寺庙",
        "安全"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "老城",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "Banjara Hills",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Banjara Hills"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻海德拉巴总领事馆",
      "phone": "+91-40-2341-7624",
      "address": "Flat No.201, Salar's Apex, Hyderabad",
      "emergency": "+91-40-2341-7624"
    },
    "hospital": {
      "name": "Yashoda Hospital",
      "phone": "+91-40-4567-0000",
      "address": "Raj Bhavan Rd, Hyderabad"
    }
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
          "name": "粤菜",
          "price": "¥80-200",
          "desc": "早茶"
        },
        {
          "name": "海鲜",
          "price": "¥100-300",
          "desc": "海边"
        },
        {
          "name": "潮汕牛肉",
          "price": "¥60-150",
          "desc": "火锅"
        },
        {
          "name": "糖水",
          "price": "¥20-50",
          "desc": "甜品"
        }
      ],
      "attractions": [
        {
          "name": "世界之窗",
          "desc": "主题"
        },
        {
          "name": "欢乐谷",
          "desc": "乐园"
        },
        {
          "name": "深圳湾",
          "desc": "公园"
        },
        {
          "name": "华强北",
          "desc": "电子"
        }
      ],
      "festivals": [
        {
          "name": "春节",
          "date": "1-2月"
        },
        {
          "name": "五一",
          "date": "5月"
        }
      ],
      "customs": [
        "电子支付",
        "地铁",
        "安全"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "华强北",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "东门",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "福田",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "福田",
        "南山"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "深圳市外事办",
      "phone": "+86-755-12345",
      "address": "深圳市福田区福中三路",
      "emergency": "+86-12308"
    },
    "hospital": {
      "name": "北大深圳医院",
      "phone": "+86-755-8392-3333",
      "address": "深圳市福田区莲花路1120号"
    }
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
          "name": "早茶",
          "price": "¥60-150",
          "desc": "点心"
        },
        {
          "name": "烧腊",
          "price": "¥40-100",
          "desc": "叉烧"
        },
        {
          "name": "肠粉",
          "price": "¥20-50",
          "desc": "米粉"
        },
        {
          "name": "糖水",
          "price": "¥15-40",
          "desc": "甜品"
        }
      ],
      "attractions": [
        {
          "name": "广州塔",
          "desc": "小蛮腰"
        },
        {
          "name": "陈家祠",
          "desc": "祠堂"
        },
        {
          "name": "上下九",
          "desc": "老街"
        },
        {
          "name": "沙面",
          "desc": "租界"
        }
      ],
      "festivals": [
        {
          "name": "广交会",
          "date": "4月"
        },
        {
          "name": "春节",
          "date": "1月"
        }
      ],
      "customs": [
        "早茶",
        "粤语",
        "美食"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "火车站",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "上下九",
          "desc": "商业",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "天河",
        "越秀"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "广州市外事办",
      "phone": "+86-20-12345",
      "address": "广州市越秀区东风西路",
      "emergency": "+86-12308"
    },
    "hospital": {
      "name": "中山大学附属第一医院",
      "phone": "+86-20-8775-5766",
      "address": "广州市越秀区中山二路58号"
    }
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
          "name": "火锅",
          "price": "¥60-150",
          "desc": "川味"
        },
        {
          "name": "麻辣烫",
          "price": "¥30-80",
          "desc": "串串"
        },
        {
          "name": "担担面",
          "price": "¥15-40",
          "desc": "小吃"
        },
        {
          "name": "龙抄手",
          "price": "¥20-50",
          "desc": "馄饨"
        }
      ],
      "attractions": [
        {
          "name": "熊猫基地",
          "desc": "大熊猫"
        },
        {
          "name": "宽窄巷子",
          "desc": "老街"
        },
        {
          "name": "锦里",
          "desc": "古街"
        },
        {
          "name": "青城山",
          "desc": "道教"
        }
      ],
      "festivals": [
        {
          "name": "川剧",
          "date": "常年"
        },
        {
          "name": "春节",
          "date": "1月"
        }
      ],
      "customs": [
        "辣椒",
        "慢生活",
        "茶馆"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "春熙路",
          "desc": "商业",
          "risk": "低"
        },
        {
          "area": "宽窄巷子",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "锦江",
        "武侯"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "成都市外事办",
      "phone": "+86-28-12345",
      "address": "成都市锦江区春熙路",
      "emergency": "+86-12308"
    },
    "hospital": {
      "name": "四川大学华西医院",
      "phone": "+86-28-8542-2114",
      "address": "成都市武侯区国学巷37号"
    }
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
          "name": "东坡肉",
          "price": "¥40-100",
          "desc": "名菜"
        },
        {
          "name": "龙井虾仁",
          "price": "¥60-150",
          "desc": "茶香"
        },
        {
          "name": "叫化鸡",
          "price": "¥50-120",
          "desc": "煨鸡"
        },
        {
          "name": "西湖醋鱼",
          "price": "¥60-150",
          "desc": "酸甜"
        }
      ],
      "attractions": [
        {
          "name": "西湖",
          "desc": "世界遗产"
        },
        {
          "name": "灵隐寺",
          "desc": "寺庙"
        },
        {
          "name": "宋城",
          "desc": "演出"
        },
        {
          "name": "河坊街",
          "desc": "老街"
        }
      ],
      "festivals": [
        {
          "name": "桂花节",
          "date": "9月"
        },
        {
          "name": "龙舟赛",
          "date": "6月"
        }
      ],
      "customs": [
        "龙井茶",
        "西湖",
        "慢"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "西湖",
          "desc": "安全",
          "risk": "低"
        },
        {
          "area": "河坊街",
          "desc": "游客",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "西湖区"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "杭州市外事办",
      "phone": "+86-571-12345",
      "address": "杭州市上城区平海路",
      "emergency": "+86-12308"
    },
    "hospital": {
      "name": "浙大一院",
      "phone": "+86-571-8723-6666",
      "address": "杭州市上城区庆春路79号"
    }
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
          "name": "羊肉泡馍",
          "price": "¥30-80",
          "desc": "主食"
        },
        {
          "name": "肉夹馍",
          "price": "¥10-30",
          "desc": "小吃"
        },
        {
          "name": "凉皮",
          "price": "¥10-25",
          "desc": "凉面"
        },
        {
          "name": "biangbiang面",
          "price": "¥15-40",
          "desc": "宽面"
        }
      ],
      "attractions": [
        {
          "name": "兵马俑",
          "desc": "世界奇迹"
        },
        {
          "name": "古城墙",
          "desc": "骑行"
        },
        {
          "name": "大雁塔",
          "desc": "佛教"
        },
        {
          "name": "回民街",
          "desc": "美食"
        }
      ],
      "festivals": [
        {
          "name": "春节",
          "date": "1月"
        },
        {
          "name": "国庆",
          "date": "10月"
        }
      ],
      "customs": [
        "历史",
        "文物",
        "面食"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "回民街",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "兵马俑",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "雁塔",
        "碑林"
      ]
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
    "safety_history": "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    "embassy": {
      "name": "西安市外事办",
      "phone": "+86-29-12345",
      "address": "西安市碑林区南大街",
      "emergency": "+86-12308"
    },
    "hospital": {
      "name": "西京医院",
      "phone": "+86-29-8477-5346",
      "address": "西安市新城区长乐西路169号"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "炸鱼薯条",
          "price": "£12-25",
          "desc": "国菜"
        },
        {
          "name": "英早",
          "price": "£8-18",
          "desc": "培根"
        },
        {
          "name": "下午茶",
          "price": "£25-50",
          "desc": "司康"
        },
        {
          "name": "咖喱",
          "price": "£10-20",
          "desc": "印度"
        }
      ],
      "attractions": [
        {
          "name": "大英博物馆",
          "desc": "最大"
        },
        {
          "name": "白金汉宫",
          "desc": "皇室"
        },
        {
          "name": "塔桥",
          "desc": "泰晤士"
        },
        {
          "name": "诺丁山",
          "desc": "彩色"
        }
      ],
      "festivals": [
        {
          "name": "跨年",
          "date": "12月"
        },
        {
          "name": "狂欢节",
          "date": "8月"
        },
        {
          "name": "花展",
          "date": "5月"
        }
      ],
      "customs": [
        "排队",
        "靠右",
        "小费"
      ],
      "transport": "Oyster",
      "hotspots": [
        {
          "area": "苏活区Soho",
          "desc": "小偷多，夜店纠纷",
          "risk": "中"
        },
        {
          "area": "卡姆登镇",
          "desc": "抢劫频发",
          "risk": "中"
        },
        {
          "area": "布里克斯顿",
          "desc": "帮派活动区域",
          "risk": "高"
        }
      ],
      "safeAreas": [
        "梅费尔",
        "肯辛顿"
      ]
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
    "safety_history": "英国建立了成熟的城市安全体系，包括广泛的CCTV监控网络、专业的应急响应机制和严格的法律制度。伦敦等主要城市通过智能化警务、社区巡逻和国际合作，为居民和游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻英国大使馆",
      "phone": "+44-20-7946-0958",
      "address": "Portland Place, London W1B 1LQ",
      "emergency": "+44-20-7436-8294"
    },
    "hospital": {
      "name": "St Thomas Hospital",
      "phone": "+44-20-7188-7188",
      "address": "Westminster Bridge Road"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "法棍",
          "price": "€1-3",
          "desc": "外脆"
        },
        {
          "name": "可丽饼",
          "price": "€3-8",
          "desc": "Nutella"
        },
        {
          "name": "马卡龙",
          "price": "€2-5",
          "desc": "甜点"
        },
        {
          "name": "蜗牛",
          "price": "€8-15",
          "desc": "蒜香"
        }
      ],
      "attractions": [
        {
          "name": "埃菲尔",
          "desc": "标志"
        },
        {
          "name": "卢浮宫",
          "desc": "最大"
        },
        {
          "name": "蒙马特",
          "desc": "圣心"
        },
        {
          "name": "玛黑",
          "desc": "设计"
        }
      ],
      "festivals": [
        {
          "name": "国庆",
          "date": "7月"
        },
        {
          "name": "时装周",
          "date": "9月"
        },
        {
          "name": "白夜",
          "date": "10月"
        }
      ],
      "customs": [
        "亲吻",
        "点单",
        "不催"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Barbès-Rochechouart",
          "desc": "扒窃多发，移民聚集区",
          "risk": "高"
        },
        {
          "area": "Gare du Nord北站",
          "desc": "小偷聚集，夜间抢劫",
          "risk": "高"
        },
        {
          "area": "塞纳河畔",
          "desc": "游客诈骗多发",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "香榭",
        "玛黑",
        "拉丁"
      ]
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
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。",
    "embassy": {
      "name": "中国驻法国大使馆",
      "phone": "+33-1-53-75-88-88",
      "address": "11 avenue George V, 75008 Paris",
      "emergency": "+33-1-53-75-88-88"
    },
    "hospital": {
      "name": "Hôpital Pitié-Salpêtrière",
      "phone": "+33-1-84-56-10-10",
      "address": "47-83 Boulevard de l'Hôpital"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "咖喱香肠",
          "price": "€3-8",
          "desc": "街头"
        },
        {
          "name": "猪肘",
          "price": "€12-25",
          "desc": "烤肘"
        },
        {
          "name": "柏林卷",
          "price": "€2-5",
          "desc": "Pyramide"
        },
        {
          "name": "面包",
          "price": "€2-6",
          "desc": "多种"
        }
      ],
      "attractions": [
        {
          "name": "勃兰登堡门",
          "desc": "标志"
        },
        {
          "name": "柏林墙",
          "desc": "冷战"
        },
        {
          "name": "博物馆岛",
          "desc": "五大"
        }
      ],
      "festivals": [
        {
          "name": "啤酒节",
          "date": "9-10月"
        },
        {
          "name": "灯光节",
          "date": "10月"
        }
      ],
      "customs": [
        "守时",
        "小费",
        "周日"
      ],
      "transport": "S-Bahn",
      "hotspots": [
        {
          "area": "Kreuzberg",
          "desc": "夜店纠纷，帮派",
          "risk": "中"
        },
        {
          "area": "Friedrichshain",
          "desc": "盗窃",
          "risk": "中"
        },
        {
          "area": "Mitte",
          "desc": "游客骗局",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "夏洛滕堡"
      ]
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
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻德国大使馆",
      "phone": "+49-30-27588-0",
      "address": "Märkisches Ufer 54, 10179 Berlin",
      "emergency": "+49-30-27588-155"
    },
    "hospital": {
      "name": "Charité - Universitätsmedizin Berlin",
      "phone": "+49-30-450-50",
      "address": "Charitéplatz 1, Berlin"
    }
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
          "name": "煎饼",
          "price": "€5-12",
          "desc": "Poffertjes"
        },
        {
          "name": "鲱鱼",
          "price": "€4-8",
          "desc": "生吃"
        },
        {
          "name": "薯条",
          "price": "€3-6",
          "desc": "Frietjes"
        },
        {
          "name": "奶酪",
          "price": "€8-20",
          "desc": "Gouda"
        }
      ],
      "attractions": [
        {
          "name": "梵高",
          "desc": "大师"
        },
        {
          "name": "安妮之家",
          "desc": "二战"
        },
        {
          "name": "红灯区",
          "desc": "橱窗"
        },
        {
          "name": "运河带",
          "desc": "骑行"
        }
      ],
      "festivals": [
        {
          "name": "国王节",
          "date": "4月"
        },
        {
          "name": "郁金香",
          "date": "3-5月"
        },
        {
          "name": "骄傲",
          "date": "8月"
        }
      ],
      "customs": [
        "自行车",
        "大麻",
        "小费"
      ],
      "transport": "tram",
      "hotspots": [
        {
          "area": "红灯区",
          "desc": "盗窃，骗子",
          "risk": "中"
        },
        {
          "area": "中央车站",
          "desc": "扒手多",
          "risk": "中"
        },
        {
          "area": "Vondelpark",
          "desc": "夜间抢劫",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "博物馆区"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻荷兰大使馆",
      "phone": "+31-70-306-5100",
      "address": "Willem van Nassaustraat 34, 2595 TT Den Haag",
      "emergency": "+31-70-306-5100"
    },
    "hospital": {
      "name": "AMC Amsterdam",
      "phone": "+31-20-566-9111",
      "address": "Meibergdreef 9, Amsterdam"
    }
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
          "name": "炸牛排",
          "price": "€12-25",
          "desc": "Schnitzel"
        },
        {
          "name": "萨赫蛋糕",
          "price": "€4-8",
          "desc": "Sachertorte"
        },
        {
          "name": "咖啡",
          "price": "€3-6",
          "desc": "Melange"
        },
        {
          "name": "烤排骨",
          "price": "€10-20",
          "desc": "Stelze"
        }
      ],
      "attractions": [
        {
          "name": "美泉宫",
          "desc": "茜茜"
        },
        {
          "name": "金色大厅",
          "desc": "音乐"
        },
        {
          "name": "大教堂",
          "desc": "哥特"
        },
        {
          "name": "市政厅",
          "desc": "新文艺"
        }
      ],
      "festivals": [
        {
          "name": "新年",
          "date": "1月"
        },
        {
          "name": "美食节",
          "date": "6月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "准时",
        "西装"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "地铁站",
          "desc": "夜间盗窃",
          "risk": "中"
        },
        {
          "area": "卡尔广场",
          "desc": "骗子",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "内城"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻奥地利大使馆",
      "phone": "+43-1-714-3149",
      "address": "Metternichgasse 4, 1030 Wien",
      "emergency": "+43-1-714-3149"
    },
    "hospital": {
      "name": "AKH Wien",
      "phone": "+43-1-40400-0",
      "address": "Währinger Gürtel 18-20, Vienna"
    }
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
          "name": "火锅",
          "price": "CHF20-40",
          "desc": "Fondue"
        },
        {
          "name": "烤鸡",
          "price": "CHF10-20",
          "desc": "Bratchäs"
        },
        {
          "name": "巧克力",
          "price": "CHF5-15",
          "desc": "Toblerone"
        },
        {
          "name": "咖啡",
          "price": "CHF4-8",
          "desc": "Latte"
        }
      ],
      "attractions": [
        {
          "name": "班霍夫",
          "desc": "购物"
        },
        {
          "name": "苏黎世湖",
          "desc": "天鹅"
        },
        {
          "name": "大教堂",
          "desc": "双塔"
        },
        {
          "name": "国家博物馆",
          "desc": "历史"
        }
      ],
      "festivals": [
        {
          "name": "音乐节",
          "date": "6月"
        },
        {
          "name": "灯光节",
          "date": "11月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "准时",
        "安静",
        "小费"
      ],
      "transport": "Tram",
      "hotspots": [
        {
          "area": "火车总站",
          "desc": "小偷",
          "risk": "低"
        },
        {
          "area": "Langstrasse",
          "desc": "红灯区",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "老城"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻苏黎世总领事馆",
      "phone": "+41-44-201-1005",
      "address": "Rämistrasse 48, 8002 Zürich",
      "emergency": "+41-44-201-1005"
    },
    "hospital": {
      "name": "Universitätsspital Zürich",
      "phone": "+41-44-255-1111",
      "address": "Rämistrasse 100, Zürich"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "塞尔加斯",
          "desc": "移民区冲突",
          "risk": "中"
        },
        {
          "area": "中央车站",
          "desc": "盗窃",
          "risk": "低"
        },
        {
          "area": "南岛",
          "desc": "夜店",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻瑞典大使馆",
      "phone": "+46-8-579-36429",
      "address": "Lidköpingsvägen 8, 181 56 Lidingö",
      "emergency": "+46-8-579-36429"
    },
    "hospital": {
      "name": "Karolinska Sjukhuset",
      "phone": "+46-8-517-70000",
      "address": "Solna, Stockholm"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Grønland",
          "desc": "移民区",
          "risk": "中"
        },
        {
          "area": "中央车站",
          "desc": "小偷",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻挪威大使馆",
      "phone": "+47-2249-5527",
      "address": "Tuengsvegen 8, 0283 Oslo",
      "emergency": "+47-2249-5527"
    },
    "hospital": {
      "name": "Oslo University Hospital",
      "phone": "+47-22-93-40-40",
      "address": "Kirkeveien 166, Oslo"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Nørrebro",
          "desc": "帮派",
          "risk": "中"
        },
        {
          "area": "Vesterbro",
          "desc": "夜店区",
          "risk": "中"
        },
        {
          "area": "中央车站",
          "desc": "盗窃",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻丹麦大使馆",
      "phone": "+45-394-60887",
      "address": "Øregårds Allé 5, 2900 Hellerup",
      "emergency": "+45-394-60887"
    },
    "hospital": {
      "name": "Rigshospitalet",
      "phone": "+45-35-45-35-45",
      "address": "Blegdamsvej 9, Copenhagen"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "中央车站",
          "desc": "小偷",
          "risk": "低"
        },
        {
          "area": "卡利奥区",
          "desc": "移民区",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻芬兰大使馆",
      "phone": "+358-9-2289-0110",
      "address": "Vanha Ruohuvaarankatu 4, 00570 Helsinki",
      "emergency": "+358-9-2289-0110"
    },
    "hospital": {
      "name": "Helsinki University Hospital",
      "phone": "+358-9-4711",
      "address": "Topeliuksenkatu 5, Helsinki"
    }
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
          "name": "海鲜饭",
          "price": "€12-25",
          "desc": "Paella"
        },
        {
          "name": "烩菜",
          "price": "€8-15",
          "desc": "Cocido"
        },
        {
          "name": "油条",
          "price": "€2-5",
          "desc": "Churros"
        },
        {
          "name": "桑格利亚",
          "price": "€3-6",
          "desc": "Sangria"
        }
      ],
      "attractions": [
        {
          "name": "普拉多",
          "desc": "戈雅"
        },
        {
          "name": "王宫",
          "desc": "皇室"
        },
        {
          "name": "太阳门",
          "desc": "熊树"
        },
        {
          "name": "Gran Via",
          "desc": "购物"
        }
      ],
      "festivals": [
        {
          "name": "奔牛",
          "date": "5月"
        },
        {
          "name": "三王节",
          "date": "1月"
        },
        {
          "name": "跨年",
          "date": "12月"
        }
      ],
      "customs": [
        "午休",
        "晚餐晚",
        "小费"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Sol广场",
          "desc": "小偷多",
          "risk": "中"
        },
        {
          "area": "Lavapiés",
          "desc": "移民区，复杂",
          "risk": "中"
        },
        {
          "area": "Gran Via",
          "desc": "扒窃",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Chueca"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻西班牙大使馆",
      "phone": "+34-91-519-4242",
      "address": "Calle Arturo Soria 113, 28043 Madrid",
      "emergency": "+34-91-519-4242"
    },
    "hospital": {
      "name": "Hospital Clínico San Carlos",
      "phone": "+34-91-330-3000",
      "address": "Calle del Prof Martín Lagos, Madrid"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "披萨",
          "price": "€8-18",
          "desc": "薄底"
        },
        {
          "name": "冰淇淋",
          "price": "€3-6",
          "desc": "Gelato"
        },
        {
          "name": "意面",
          "price": "€10-20",
          "desc": "手工"
        },
        {
          "name": "卡布奇诺",
          "price": "€2-4",
          "desc": "早茶"
        }
      ],
      "attractions": [
        {
          "name": "斗兽场",
          "desc": "古罗马"
        },
        {
          "name": "梵蒂冈",
          "desc": "西斯廷"
        },
        {
          "name": "许愿池",
          "desc": "特莱维"
        },
        {
          "name": "波格赛",
          "desc": "贝尔尼尼"
        }
      ],
      "festivals": [
        {
          "name": "主显节",
          "date": "1月"
        },
        {
          "name": "独立日",
          "date": "3月"
        }
      ],
      "customs": [
        "不催单",
        "小费",
        "教堂"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Termini中央车站",
          "desc": "小偷最多，抢劫",
          "risk": "高"
        },
        {
          "area": "特拉斯提弗列",
          "desc": "夜间抢劫",
          "risk": "中"
        },
        {
          "area": "西班牙广场",
          "desc": "吉普赛人偷窃",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "特拉斯提弗列"
      ]
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
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻意大利大使馆",
      "phone": "+39-06-96301388",
      "address": "Via Armando Spadini 42, 00136 Roma",
      "emergency": "+39-06-96301388"
    },
    "hospital": {
      "name": "Policlinico Gemelli",
      "phone": "+39-06-30151",
      "address": "Largo Agostino Gemelli 8, Roma"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "海鲜饭",
          "price": "€12-25",
          "desc": "Paella"
        },
        {
          "name": "墨鱼饭",
          "price": "€12-22",
          "desc": "Arroz"
        },
        {
          "name": "油条",
          "price": "€2-5",
          "desc": "Churros"
        },
        {
          "name": "雪利酒",
          "price": "€3-8",
          "desc": "Jerez"
        }
      ],
      "attractions": [
        {
          "name": "圣家堂",
          "desc": "高迪"
        },
        {
          "name": "桂尔公园",
          "desc": "高迪"
        },
        {
          "name": "兰布拉",
          "desc": "步行"
        },
        {
          "name": "哥特区",
          "desc": "老城"
        }
      ],
      "festivals": [
        {
          "name": "圣乔治",
          "date": "4月"
        },
        {
          "name": "火祭",
          "date": "8月"
        },
        {
          "name": "Mercè",
          "date": "9月"
        }
      ],
      "customs": [
        "午休",
        "晚餐晚"
      ],
      "transport": "L1L4",
      "hotspots": [
        {
          "area": "兰布拉大道",
          "desc": "小偷最多，抢劫",
          "risk": "高"
        },
        {
          "area": "Raval区",
          "desc": "非法活动，夜间危险",
          "risk": "高"
        },
        {
          "area": " Barceloneta海滩",
          "desc": "夜间盗窃",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "扩展区"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻巴塞罗那总领事馆",
      "phone": "+34-93-254-1197",
      "address": "Carrer de Lepant 266, Barcelona",
      "emergency": "+34-93-254-1197"
    },
    "hospital": {
      "name": "Hospital Clínic de Barcelona",
      "phone": "+34-93-227-5400",
      "address": "Villarroel 170, Barcelona"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Alfama区",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Baixa",
          "desc": "抢劫",
          "risk": "中"
        },
        {
          "area": "Cais do Sodré",
          "desc": "夜店区纠纷",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻葡萄牙大使馆",
      "phone": "+351-21-392-8430",
      "address": "Rua do Estádio 10, 1400-200 Lisboa",
      "emergency": "+351-21-392-8430"
    },
    "hospital": {
      "name": "Hospital de Santa Maria",
      "phone": "+351-21-780-2000",
      "address": "Av. Professor Egas Moniz, Lisbon"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "老城广场",
          "desc": "小偷，餐厅诈骗",
          "risk": "中"
        },
        {
          "area": "地铁站",
          "desc": "盗窃",
          "risk": "中"
        },
        {
          "area": "查理大桥",
          "desc": "抢劫",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻捷克大使馆",
      "phone": "+420-224-311-323",
      "address": " Pelleova 355/22, 160 00 Prague 6",
      "emergency": "+420-224-311-323"
    },
    "hospital": {
      "name": "University Hospital Motol",
      "phone": "+420-224-433-000",
      "address": "V Úvalu 84, Prague 5"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "中心站",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Praga区",
          "desc": "较乱",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻波兰大使馆",
      "phone": "+48-22-831-3836",
      "address": "Bonifraterska 00-203 Warsaw",
      "emergency": "+48-22-831-3836"
    },
    "hospital": {
      "name": "Warsaw Medical University Hospital",
      "phone": "+48-22-599-2200",
      "address": "ul. Banacha 1a, Warsaw"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Exarchia",
          "desc": "无政府主义区域，冲突",
          "risk": "高"
        },
        {
          "area": "宪法广场",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "卫城",
          "desc": "骗子",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻希腊大使馆",
      "phone": "+30-210-672-3282",
      "address": "Dimitsanas 7, Athens 152 31",
      "emergency": "+30-210-672-3282"
    },
    "hospital": {
      "name": "General Hospital of Athens",
      "phone": "+30-213-203-4000",
      "address": "Vasilissis Sofias Ave, Athens"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "北站",
          "desc": "犯罪高发",
          "risk": "高"
        },
        {
          "area": "地铁站",
          "desc": "盗窃",
          "risk": "中"
        },
        {
          "area": "欧盟区",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻比利时大使馆",
      "phone": "+32-2-771-3309",
      "address": "Avenue de la Dynastie 4, 1000 Brussels",
      "emergency": "+32-2-771-3309"
    },
    "hospital": {
      "name": "Cliniques Universitaires St-Luc",
      "phone": "+32-2-764-1111",
      "address": "Avenue Hippocrate 10, Brussels"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "八区",
          "desc": "吉普赛人骗术",
          "risk": "高"
        },
        {
          "area": "地铁站",
          "desc": "扒窃",
          "risk": "中"
        },
        {
          "area": "恐怖屋附近",
          "desc": "夜间危险",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻匈牙利大使馆",
      "phone": "+36-1-413-2400",
      "address": "Benczúr utca 18, 1068 Budapest",
      "emergency": "+36-1-413-2400"
    },
    "hospital": {
      "name": "Semmelweis University Hospital",
      "phone": "+36-1-266-0455",
      "address": "Üllői út 78, Budapest"
    }
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
          "name": "饺子",
          "price": "₽200-400",
          "desc": "Pelmeni"
        },
        {
          "name": "红菜汤",
          "price": "₽150-300",
          "desc": "Borscht"
        },
        {
          "name": "布林饼",
          "price": "₽100-200",
          "desc": "Blini"
        },
        {
          "name": "伏特加",
          "price": "₽300-600",
          "desc": "Vodka"
        }
      ],
      "attractions": [
        {
          "name": "红场",
          "desc": "克里姆林"
        },
        {
          "name": "圣瓦西里",
          "desc": "洋葱头"
        },
        {
          "name": "克里姆林宫",
          "desc": "总统"
        },
        {
          "name": "特列季亚科夫",
          "desc": "画廊"
        }
      ],
      "festivals": [
        {
          "name": "新年",
          "date": "1月"
        },
        {
          "name": "胜利日",
          "date": "5月"
        },
        {
          "name": "城市日",
          "date": "9月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "不拍照"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "车站",
          "desc": "小偷",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "市中心"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻俄罗斯大使馆",
      "phone": "+7-499-951-8435",
      "address": "Ul. Drzhkovskaya 6, Moscow",
      "emergency": "+7-499-951-8435"
    },
    "hospital": {
      "name": "Botkin Hospital",
      "phone": "+7-495-945-0085",
      "address": "2nd Botkinskiy proezd 5, Moscow"
    }
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
          "name": "饺子",
          "price": "₽200-400",
          "desc": "Pelmeni"
        },
        {
          "name": "鱼汤",
          "price": "₽150-300",
          "desc": "Uha"
        },
        {
          "name": "布林饼",
          "price": "₽100-200",
          "desc": "Blini"
        },
        {
          "name": "格瓦斯",
          "price": "₽50-100",
          "desc": "Kvass"
        }
      ],
      "attractions": [
        {
          "name": "冬宫",
          "desc": "埃尔米塔日"
        },
        {
          "name": "彼得宫",
          "desc": "喷泉"
        },
        {
          "name": "滴血教堂",
          "desc": "马赛克"
        },
        {
          "name": "夏宫",
          "desc": "花园"
        }
      ],
      "festivals": [
        {
          "name": "白夜",
          "date": "6月"
        },
        {
          "name": "新年",
          "date": "1月"
        }
      ],
      "customs": [
        "小费",
        "教堂",
        "防骗"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "涅瓦大街",
          "desc": "小偷",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "市中心"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻圣彼得堡总领事馆",
      "phone": "+7-812-714-7670",
      "address": "Nab. Reki Moiki 4, St. Petersburg",
      "emergency": "+7-812-714-7670"
    },
    "hospital": {
      "name": "St. Petersburg Hospital",
      "phone": "+7-812-274-5431",
      "address": "Nab. Reki Fontanki 14, St. Petersburg"
    }
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
          "name": "烩饭",
          "price": "€12-25",
          "desc": "Risotto"
        },
        {
          "name": "披萨",
          "price": "€8-18",
          "desc": "Napoli"
        },
        {
          "name": "冰淇淋",
          "price": "€3-6",
          "desc": "Gelato"
        },
        {
          "name": "咖啡",
          "price": "€1-3",
          "desc": "Espresso"
        }
      ],
      "attractions": [
        {
          "name": "大教堂",
          "desc": "哥特"
        },
        {
          "name": "长廊",
          "desc": "购物"
        },
        {
          "name": "城堡",
          "desc": "博物馆"
        },
        {
          "name": "最后的晚餐",
          "desc": "达芬奇"
        }
      ],
      "festivals": [
        {
          "name": "时装周",
          "date": "9月"
        },
        {
          "name": "家具展",
          "date": "4月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "时尚",
        "排队"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Centrale",
          "desc": "车站",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Brera"
      ]
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
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻米兰总领事馆",
      "phone": "+39-02-569-4106",
      "address": "Via Benaco 4, 20139 Milano",
      "emergency": "+39-02-569-4106"
    },
    "hospital": {
      "name": "Ospedale Maggiore",
      "phone": "+39-02-317-01",
      "address": "Via Francesco Sforza 35, Milano"
    }
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
          "name": "猪肘",
          "price": "€12-25",
          "desc": "Schweinhaxen"
        },
        {
          "name": "香肠",
          "price": "€4-10",
          "desc": "Weisswurst"
        },
        {
          "name": "啤酒",
          "price": "€3-8",
          "desc": "Bier"
        },
        {
          "name": "椒盐卷",
          "price": "€2-5",
          "desc": "Brezel"
        }
      ],
      "attractions": [
        {
          "name": "玛利亚广场",
          "desc": "市政厅"
        },
        {
          "name": "英烈祠",
          "desc": "HB"
        },
        {
          "name": "宝马博物馆",
          "desc": "汽车"
        },
        {
          "name": "新天鹅堡",
          "desc": "童话"
        }
      ],
      "festivals": [
        {
          "name": "啤酒节",
          "date": "9-10月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        },
        {
          "name": "洋葱节",
          "date": "10月"
        }
      ],
      "customs": [
        "小费",
        "准时",
        "周日"
      ],
      "transport": "U-Bahn",
      "hotspots": [
        {
          "area": "中央车站",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "玛利亚广场",
          "desc": "扒窃",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "马克西米利安"
      ]
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
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻慕尼黑总领事馆",
      "phone": "+49-89-173016-0",
      "address": "Münchener Str. 22, 85737 Ismaning",
      "emergency": "+49-89-173016-0"
    },
    "hospital": {
      "name": "Klinikum Großhaderner",
      "phone": "+49-89-7095-0",
      "address": "Marchioninistrasse 15, München"
    }
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
          "name": "苹果酒",
          "price": "€3-6",
          "desc": "Apfelwein"
        },
        {
          "name": "烤肠",
          "price": "€4-8",
          "desc": "Currywurst"
        },
        {
          "name": "绿酱",
          "price": "€6-12",
          "desc": "Grüne"
        },
        {
          "name": "椒盐卷",
          "price": "€2-5",
          "desc": "Brezel"
        }
      ],
      "attractions": [
        {
          "name": "罗马广场",
          "desc": "老城"
        },
        {
          "name": "大教堂",
          "desc": "皇帝"
        },
        {
          "name": "歌德故居",
          "desc": "作家"
        },
        {
          "name": "交易所",
          "desc": "历史"
        }
      ],
      "festivals": [
        {
          "name": "苹果酒节",
          "date": "8月"
        },
        {
          "name": "圣诞市场",
          "date": "12月"
        },
        {
          "name": "文献展",
          "date": "5年"
        }
      ],
      "customs": [
        "准时",
        "小费",
        "禁食"
      ],
      "transport": "S-Bahn",
      "hotspots": [
        {
          "area": "车站",
          "desc": "复杂",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Sachsenhausen"
      ]
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
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻法兰克福总领事馆",
      "phone": "+49-69-750-855",
      "address": "Mainzer Landstraße 55, 60329 Frankfurt",
      "emergency": "+49-69-750-855"
    },
    "hospital": {
      "name": "Universitätsklinikum Frankfurt",
      "phone": "+49-6301-0",
      "address": "Theodor-Stern-Kai 7"
    }
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
          "name": "鱼汤",
          "price": "€8-15",
          "desc": "Fischsuppe"
        },
        {
          "name": "鱼排",
          "price": "€6-12",
          "desc": "Fischbrötchen"
        },
        {
          "name": "烤肉卷",
          "price": "€4-8",
          "desc": "Döner"
        },
        {
          "name": "啤酒",
          "price": "€3-6",
          "desc": "Bier"
        }
      ],
      "attractions": [
        {
          "name": "港口城",
          "desc": "仓库"
        },
        {
          "name": "圣米迦勒",
          "desc": "汉堡"
        },
        {
          "name": "绳索街",
          "desc": "红灯"
        },
        {
          "name": "爱乐厅",
          "desc": "音乐"
        }
      ],
      "festivals": [
        {
          "name": "港口节",
          "date": "5月"
        },
        {
          "name": "灯光节",
          "date": "10月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "周日关",
        "自行车"
      ],
      "transport": "S-Bahn",
      "hotspots": [
        {
          "area": "St Pauli",
          "desc": "红灯",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "新城区"
      ]
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
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻汉堡总领事馆",
      "phone": "+49-40-8227-6014",
      "address": "Am Sandtorkai 50, Hamburg",
      "emergency": "+49-40-8227-6014"
    },
    "hospital": {
      "name": "Universitätsklinikum Hamburg-Eppendorf",
      "phone": "+49-40-7410-0",
      "address": "Martinistraße 52, Hamburg"
    }
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
          "name": "炖肉",
          "price": "€10-20",
          "desc": "Stew"
        },
        {
          "name": "炸鱼薯条",
          "price": "€8-15",
          "desc": "Fish"
        },
        {
          "name": "黑布丁",
          "price": "€4-8",
          "desc": "Blood"
        },
        {
          "name": "吉尼斯",
          "price": "€5-10",
          "desc": "Stout"
        }
      ],
      "attractions": [
        {
          "name": "圣三一",
          "desc": "古老"
        },
        {
          "name": "健力士",
          "desc": "啤酒"
        },
        {
          "name": "圣殿酒吧",
          "desc": "文化"
        },
        {
          "name": "凤凰公园",
          "desc": "最大"
        }
      ],
      "festivals": [
        {
          "name": "圣帕特里克",
          "date": "3月"
        },
        {
          "name": "啤酒节",
          "date": "9月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "热情",
        "酒吧"
      ],
      "transport": "Luas",
      "hotspots": [
        {
          "area": "Temple Bar",
          "desc": "盗窃，醉酒闹事",
          "risk": "中"
        },
        {
          "area": "北城区",
          "desc": "帮派",
          "risk": "高"
        },
        {
          "area": "OConnell St",
          "desc": "小偷",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Rathmines"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻爱尔兰大使馆",
      "phone": "+353-1-269-1707",
      "address": "40 Ailesbury Road, Dublin 4",
      "emergency": "+353-1-269-1707"
    },
    "hospital": {
      "name": "St James's Hospital",
      "phone": "+353-1-410-3000",
      "address": "James St, Dublin 8"
    }
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
          "name": "哈吉斯",
          "price": "£8-15",
          "desc": "Haggis"
        },
        {
          "name": "鹿肉",
          "price": "£15-25",
          "desc": "Venison"
        },
        {
          "name": "烤三文鱼",
          "price": "£10-20",
          "desc": "Salmon"
        },
        {
          "name": "威士忌",
          "price": "£5-15",
          "desc": "Whisky"
        }
      ],
      "attractions": [
        {
          "name": "城堡",
          "desc": "标志"
        },
        {
          "name": "皇家大道",
          "desc": "历史"
        },
        {
          "name": "卡尔顿山",
          "desc": "日落"
        },
        {
          "name": "象咖啡馆",
          "desc": "哈利波特"
        }
      ],
      "festivals": [
        {
          "name": "艺术节",
          "date": "8月"
        },
        {
          "name": "除夕",
          "date": "12月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "准时",
        "防偷"
      ],
      "transport": "Bus",
      "hotspots": [
        {
          "area": "皇家一英里",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "利斯",
          "desc": "犯罪率高",
          "risk": "高"
        },
        {
          "area": "斯托克布里奇",
          "desc": "夜间危险",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "New Town"
      ]
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
    "safety_history": "英国建立了成熟的城市安全体系，包括广泛的CCTV监控网络、专业的应急响应机制和严格的法律制度。伦敦等主要城市通过智能化警务、社区巡逻和国际合作，为居民和游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻爱丁堡总领事馆",
      "phone": "+44-131-337-3220",
      "address": "55 Corstorphine Road, Edinburgh",
      "emergency": "+44-131-337-3220"
    },
    "hospital": {
      "name": "Royal Infirmary of Edinburgh",
      "phone": "+44-131-536-1000",
      "address": "51 Little France Drive, Edinburgh"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "牛津路",
          "desc": "抢劫",
          "risk": "中"
        },
        {
          "area": "Longsight",
          "desc": "帮派活动",
          "risk": "高"
        },
        {
          "area": "市中心",
          "desc": "扒窃",
          "risk": "低"
        }
      ]
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
    "safety_history": "英国建立了成熟的城市安全体系，包括广泛的CCTV监控网络、专业的应急响应机制和严格的法律制度。伦敦等主要城市通过智能化警务、社区巡逻和国际合作，为居民和游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻曼彻斯特总领事馆",
      "phone": "+44-161-224-8672",
      "address": "69 Fountain St, Manchester M2 2AF",
      "emergency": "+44-161-224-8672"
    },
    "hospital": {
      "name": "Manchester Royal Infirmary",
      "phone": "+44-161-276-1234",
      "address": "Oxford Rd, Manchester"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Part-Dieu",
          "desc": "车站犯罪",
          "risk": "中"
        },
        {
          "area": " Guillotière",
          "desc": "移民区",
          "risk": "中"
        },
        {
          "area": "老城",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。",
    "embassy": {
      "name": "中国驻里昂总领事馆",
      "phone": "+33-4-7842-6168",
      "address": "27 Rue Paul Devaux, 69002 Lyon",
      "emergency": "+33-4-7842-6168"
    },
    "hospital": {
      "name": "Hospices Civils de Lyon",
      "phone": "+33-4-7210-1111",
      "address": "Pl. de l'Hôpital, Lyon"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "旧港",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "北站",
          "desc": "帮派",
          "risk": "高"
        },
        {
          "area": "卡斯特拉内",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。",
    "embassy": {
      "name": "中国驻马赛总领事馆",
      "phone": "+33-4-9132-2901",
      "address": "72 Blvd Camille Flammarion, 13001 Marseille",
      "emergency": "+33-4-9132-2901"
    },
    "hospital": {
      "name": "APHM Marseille",
      "phone": "+33-4-9138-3000",
      "address": "80 Rue Augustin Fliche, Marseille"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "老城",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "天使湾",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。",
    "embassy": {
      "name": "中国驻尼斯总领事馆",
      "phone": "+33-4-9321-0101",
      "address": "12 Ave des Fleurs, 06000 Nice",
      "emergency": "+33-4-9321-0101"
    },
    "hospital": {
      "name": "Nice CHU",
      "phone": "+33-4-9203-0000",
      "address": "30 Voie Romaine, Nice"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "圣马可广场",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "火车站",
          "desc": "盗窃",
          "risk": "中"
        },
        {
          "area": "里亚托桥",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻米兰总领事馆(管威尼斯)",
      "phone": "+39-02-569-4106",
      "address": "Via Benaco 4, Milano",
      "emergency": "+39-02-569-4106"
    },
    "hospital": {
      "name": "Ospedale SS Giovanni e Paolo",
      "phone": "+39-041-529-4111",
      "address": "Castello 6777, Venice"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "中央市场",
          "desc": "小偷",
          "risk": "高"
        },
        {
          "area": "圣十字广场",
          "desc": "骗子",
          "risk": "中"
        },
        {
          "area": "火车站",
          "desc": "盗窃",
          "risk": "中"
        }
      ]
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
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻佛罗伦萨总领事馆",
      "phone": "+39-055-582-889",
      "address": "Via dei Gelsomini 50, 50122 Firenze",
      "emergency": "+39-055-582-889"
    },
    "hospital": {
      "name": "Careggi Hospital",
      "phone": "+39-055-794-1111",
      "address": "Largo Brambilla 3, Florence"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Garibaldi站",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Scampia",
          "desc": "帮派区域",
          "risk": "高"
        },
        {
          "area": "市中心",
          "desc": "扒窃",
          "risk": "中"
        }
      ]
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
    "safety_history": "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。",
    "embassy": {
      "name": "中国驻米兰总领事馆(管那不勒斯)",
      "phone": "+39-02-569-4106",
      "address": "Via Benaco 4, Milano",
      "emergency": "+39-02-569-4106"
    },
    "hospital": {
      "name": "Ospedale Cardarelli",
      "phone": "+39-081-747-2111",
      "address": "Via A. Cardarelli 9, Napoli"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "中央市场",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Carmen区",
          "desc": "夜生活",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻巴塞罗那总领事馆(管瓦伦西亚)",
      "phone": "+34-93-254-1197",
      "address": "Carrer de Lepant 266, Barcelona",
      "emergency": "+34-93-254-1197"
    },
    "hospital": {
      "name": "Hospital Universitario La Fe",
      "phone": "+34-96-386-2700",
      "address": "Avenida de Fernando Abril Martorell 106, Valencia"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Triana",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Alameda",
          "desc": "夜店",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻西班牙大使馆(管塞维利亚)",
      "phone": "+34-91-519-4242",
      "address": "Calle Arturo Soria 113, Madrid",
      "emergency": "+34-91-519-4242"
    },
    "hospital": {
      "name": "Hospital Universitario Virgen del Rocío",
      "phone": "+34-95-501-2000",
      "address": "Avenida Manuel Siurot s/n, Sevilla"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Teatinos",
          "desc": "学生区",
          "risk": "低"
        },
        {
          "area": "市中心",
          "desc": "扒窃",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻西班牙大使馆(管马拉加)",
      "phone": "+34-91-519-4242",
      "address": "Calle Arturo Soria 113, Madrid",
      "emergency": "+34-91-519-4242"
    },
    "hospital": {
      "name": "Hospital Universitario Málaga",
      "phone": "+34-951-030-000",
      "address": "Av. Carlos Haya, Málaga"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Baixa",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Ribeira",
          "desc": "游客",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻葡萄牙大使馆(管波尔图)",
      "phone": "+351-21-392-8430",
      "address": "Rua do Estádio 10, Lisboa",
      "emergency": "+351-21-392-8430"
    },
    "hospital": {
      "name": "Centro Hospitalar Porto",
      "phone": "+351-222-077-500",
      "address": "Largo Prof. Abel Salazar, Porto"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "老城",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Kazimierz",
          "desc": "犹太区",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻波兰大使馆(管克拉科夫)",
      "phone": "+48-22-831-3836",
      "address": "Bonifraterska 00-203 Warsaw",
      "emergency": "+48-22-831-3836"
    },
    "hospital": {
      "name": "University Hospital Krakow",
      "phone": "+48-12-424-7000",
      "address": "ul. Kopernika 17, Krakow"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "火车站",
          "desc": "小偷",
          "risk": "低"
        },
        {
          "area": "Paquis",
          "desc": "夜生活",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻日内瓦总领事馆",
      "phone": "+41-22-849-1100",
      "address": "Chemin de la Tulipe 42, 1203 Geneva",
      "emergency": "+41-22-849-1100"
    },
    "hospital": {
      "name": "HUG Geneva",
      "phone": "+41-22-372-3311",
      "address": "Rue Gabrielle-Perret-Gentil 4, Geneva"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "中央车站",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Ehrenfeld",
          "desc": "移民区",
          "risk": "中"
        },
        {
          "area": "大教堂",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻杜塞尔多夫总领事馆(管科隆)",
      "phone": "+49-211-909-050",
      "address": "Schadowplatz 12, 40212 Düsseldorf",
      "emergency": "+49-211-909-050"
    },
    "hospital": {
      "name": "Universitätsklinikum Köln",
      "phone": "+49-221-478-0",
      "address": "Kerpener Str. 62, Köln"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "热狗",
          "price": "$3-8",
          "desc": "街头"
        },
        {
          "name": "贝果",
          "price": "$3-10",
          "desc": "烟三文"
        },
        {
          "name": "汉堡",
          "price": "$10-30",
          "desc": "Shake"
        },
        {
          "name": "披萨",
          "price": "$3-15",
          "desc": "薄底"
        }
      ],
      "attractions": [
        {
          "name": "自由女",
          "desc": "渡轮"
        },
        {
          "name": "中央公园",
          "desc": "绿洲"
        },
        {
          "name": "时代广场",
          "desc": "霓虹"
        },
        {
          "name": "高线",
          "desc": "空中"
        }
      ],
      "festivals": [
        {
          "name": "跨年",
          "date": "12月"
        },
        {
          "name": "骄傲月",
          "date": "6月"
        },
        {
          "name": "感恩节",
          "date": "11月"
        }
      ],
      "customs": [
        "小费",
        "排队"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "哈莱姆",
          "desc": "犯罪率高",
          "risk": "高"
        },
        {
          "area": "布朗克斯",
          "desc": "帮派",
          "risk": "高"
        },
        {
          "area": "时代广场",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "中央公园",
          "desc": "夜间危险",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "上东",
        "布鲁克林"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻纽约总领事馆",
      "phone": "+1-212-244-9392",
      "address": "520 12th Ave, New York, NY 10036",
      "emergency": "+1-212-244-9456"
    },
    "hospital": {
      "name": "Bellevue Hospital",
      "phone": "+1-212-562-4141",
      "address": "462 1st Ave, New York"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "In-N-Out",
          "price": "$8-15",
          "desc": "汉堡"
        },
        {
          "name": "Ktown",
          "price": "$20-40",
          "desc": "烤肉"
        },
        {
          "name": "塔可",
          "price": "$3-10",
          "desc": "街头"
        },
        {
          "name": "越南粉",
          "price": "$10-20",
          "desc": "Saigon"
        }
      ],
      "attractions": [
        {
          "name": "好莱坞",
          "desc": "标志"
        },
        {
          "name": "天文台",
          "desc": "夜景"
        },
        {
          "name": "圣莫尼卡",
          "desc": "海滩"
        },
        {
          "name": "威尼斯",
          "desc": "艺人"
        }
      ],
      "festivals": [
        {
          "name": "奥斯卡",
          "date": "2月"
        },
        {
          "name": "Coachella",
          "date": "4月"
        },
        {
          "name": "独立日",
          "date": "7月"
        }
      ],
      "customs": [
        "租车",
        "小费",
        "防晒"
      ],
      "transport": "租车",
      "hotspots": [
        {
          "area": "南中央",
          "desc": "贫困区，犯罪",
          "risk": "高"
        },
        {
          "area": "Skid Row",
          "desc": "流浪汉",
          "risk": "高"
        },
        {
          "area": "好莱坞",
          "desc": "小偷",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "比弗利",
        "马里布"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻洛杉矶总领事馆",
      "phone": "+1-213-807-8088",
      "address": "600 N State College Blvd, Pasadena, CA 91101",
      "emergency": "+1-213-807-8092"
    },
    "hospital": {
      "name": "UCLA Medical Center",
      "phone": "+1-310-825-9111",
      "address": "757 Westwood Plaza, LA"
    }
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
          "name": "深盘披萨",
          "price": "$10-25",
          "desc": "Deep dish"
        },
        {
          "name": "热狗",
          "price": "$3-8",
          "desc": "Chicago"
        },
        {
          "name": "牛肉",
          "price": "$8-15",
          "desc": "Italian beef"
        },
        {
          "name": "爆米花",
          "price": "$5-12",
          "desc": "Garrett"
        }
      ],
      "attractions": [
        {
          "name": "云门",
          "desc": "豆子"
        },
        {
          "name": "海军码头",
          "desc": "游乐园"
        },
        {
          "name": "威利斯",
          "desc": "摩天"
        },
        {
          "name": "科学馆",
          "desc": "博物馆"
        }
      ],
      "festivals": [
        {
          "name": "爵士节",
          "date": "6月"
        },
        {
          "name": "美食节",
          "date": "7月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "寒冷"
      ],
      "transport": "CTA",
      "hotspots": [
        {
          "area": "南城",
          "desc": "枪击案多",
          "risk": "高"
        },
        {
          "area": "West Side",
          "desc": "帮派",
          "risk": "高"
        },
        {
          "area": "市中心",
          "desc": "相对安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Loop"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻芝加哥总领事馆",
      "phone": "+1-312-453-0210",
      "address": "1 E Erie St, Chicago, IL 60611",
      "emergency": "+1-312-453-0210"
    },
    "hospital": {
      "name": "Northwestern Memorial Hospital",
      "phone": "+1-312-926-2000",
      "address": "251 E Huron St, Chicago"
    }
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
          "name": "培根",
          "price": "$8-15",
          "desc": "Peameal"
        },
        {
          "name": "枫糖",
          "price": "$5-12",
          "desc": "Maple"
        },
        {
          "name": "越南粉",
          "price": "$10-20",
          "desc": "Pho"
        },
        {
          "name": "肉汁薯条",
          "price": "$8-15",
          "desc": "Poutine"
        }
      ],
      "attractions": [
        {
          "name": "CN塔",
          "desc": "地标"
        },
        {
          "name": "电视塔",
          "desc": "观景"
        },
        {
          "name": "尼亚加拉",
          "desc": "瀑布"
        },
        {
          "name": "古酿酒区",
          "desc": "历史"
        }
      ],
      "festivals": [
        {
          "name": "TIFF",
          "date": "9月"
        },
        {
          "name": "骄傲",
          "date": "6月"
        }
      ],
      "customs": [
        "小费",
        "多元",
        "冬季"
      ],
      "transport": "TTC",
      "hotspots": [
        {
          "area": "Jane/Finch",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Regent Park",
          "desc": "犯罪",
          "risk": "中"
        },
        {
          "area": "市中心",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Yorkville"
      ]
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
    "safety_history": "加拿大建立了完善的城市安全体系，多伦多、温哥华等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、文化包容和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻多伦多总领事馆",
      "phone": "+1-416-964-7260",
      "address": "110 University Ave, Toronto, ON M5G 1Y8",
      "emergency": "+1-416-964-7190"
    },
    "hospital": {
      "name": "Toronto General Hospital",
      "phone": "+1-416-340-3111",
      "address": "200 Elizabeth St, Toronto"
    }
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
          "name": "三文鱼",
          "price": "C$15-30",
          "desc": "Salmon"
        },
        {
          "name": "斑点虾",
          "price": "C$10-25",
          "desc": "Prawns"
        },
        {
          "name": "烩饭",
          "price": "C$15-30",
          "desc": "Prawns"
        },
        {
          "name": "枫糖",
          "price": "C$5-15",
          "desc": "Maple"
        }
      ],
      "attractions": [
        {
          "name": "斯坦利公园",
          "desc": "骑行"
        },
        {
          "name": "卡皮拉诺",
          "desc": "吊桥"
        },
        {
          "name": "格兰维尔",
          "desc": "市场"
        },
        {
          "name": "Gastown",
          "desc": "老城"
        }
      ],
      "festivals": [
        {
          "name": "郁金香",
          "date": "4月"
        },
        {
          "name": "烟火",
          "date": "7月"
        }
      ],
      "customs": [
        "小费",
        "自然",
        "冬季"
      ],
      "transport": "SkyTrain",
      "hotspots": [
        {
          "area": "East Vancouver",
          "desc": "犯罪",
          "risk": "中"
        },
        {
          "area": "Downtown Eastside",
          "desc": "毒品",
          "risk": "高"
        },
        {
          "area": "温哥华市中心",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "West End"
      ]
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
    "safety_history": "加拿大建立了完善的城市安全体系，多伦多、温哥华等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、文化包容和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻温哥华总领事馆",
      "phone": "+1-604-734-7494",
      "address": "2005 W Broadway, Vancouver, BC V6J 5E5",
      "emergency": "+1-604-734-7492"
    },
    "hospital": {
      "name": "Vancouver General Hospital",
      "phone": "+1-604-875-4111",
      "address": "899 W 12th Ave, Vancouver"
    }
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
          "name": "熏肉",
          "price": "CAD10-25",
          "desc": "Smoked meat"
        },
        {
          "name": "芝士火锅",
          "price": "CAD15-35",
          "desc": "Fondue"
        },
        {
          "name": "百吉饼",
          "price": "CAD3-8",
          "desc": "Bagel"
        },
        {
          "name": "枫糖",
          "price": "CAD5-15",
          "desc": "Maple syrup"
        }
      ],
      "attractions": [
        {
          "name": "旧蒙特利尔",
          "desc": "老城"
        },
        {
          "name": "圣母大教堂",
          "desc": "建筑"
        },
        {
          "name": "皇家山",
          "desc": "公园"
        },
        {
          "name": "圣约瑟夫堂",
          "desc": "宗教"
        }
      ],
      "festivals": [
        {
          "name": "爵士节",
          "date": "6月"
        },
        {
          "name": "喜剧节",
          "date": "7月"
        },
        {
          "name": "冰雪节",
          "date": "2月"
        }
      ],
      "customs": [
        "小费",
        "法语",
        "文化"
      ],
      "transport": "STM",
      "hotspots": [
        {
          "area": "Plateau",
          "desc": "学生区",
          "risk": "低"
        },
        {
          "area": "市中心",
          "desc": "安全",
          "risk": "低"
        },
        {
          "area": "Berri-UQAM",
          "desc": "混乱",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Plateau",
        "Westmount"
      ]
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
    "safety_history": "加拿大建立了完善的城市安全体系，多伦多、温哥华等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、文化包容和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻蒙特利尔总领事馆",
      "phone": "+1-514-680-8465",
      "address": "2100 Guy St, Montreal, QC H3H 2M9",
      "emergency": "+1-514-680-8465"
    },
    "hospital": {
      "name": "McGill University Health Centre",
      "phone": "+1-514-934-1934",
      "address": "1650 Cedar Ave, Montreal"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "酸面包",
          "price": "$3-8",
          "desc": "Boudin"
        },
        {
          "name": "蛤蜊汤",
          "price": "$8-15",
          "desc": "渔人码头"
        },
        {
          "name": "越南粉",
          "price": "$10-18",
          "desc": "Crocker"
        },
        {
          "name": "墨西哥卷",
          "price": "$8-15",
          "desc": "Mission"
        }
      ],
      "attractions": [
        {
          "name": "金门大桥",
          "desc": "地标"
        },
        {
          "name": "渔人码头",
          "desc": "海滨"
        },
        {
          "name": "恶魔岛",
          "desc": "监狱"
        },
        {
          "name": "彩绘女士",
          "desc": "维多利亚"
        }
      ],
      "festivals": [
        {
          "name": "骄傲",
          "date": "6月"
        },
        {
          "name": "灯光",
          "date": "10月"
        },
        {
          "name": "中国城",
          "date": "1-2月"
        }
      ],
      "customs": [
        "小费",
        "防盗窃"
      ],
      "transport": "BART",
      "hotspots": [
        {
          "area": "Tenderloin",
          "desc": "治安最差",
          "risk": "高"
        },
        {
          "area": "Mission",
          "desc": "盗窃",
          "risk": "中"
        },
        {
          "area": "金门公园",
          "desc": "夜间危险",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "太平洋高地",
        "Marina"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻旧金山总领事馆",
      "phone": "+1-415-674-2900",
      "address": "1450 Laguna St, San Francisco, CA 94115",
      "emergency": "+1-415-674-2900"
    },
    "hospital": {
      "name": "UCSF Medical Center",
      "phone": "+1-415-476-1000",
      "address": "505 Parnassus Ave, San Francisco"
    }
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
          "name": "海鲜",
          "price": "$15-35",
          "desc": "Pacific salmon"
        },
        {
          "name": "咖啡",
          "price": "$4-8",
          "desc": "Starbucks起源"
        },
        {
          "name": "苹果酒",
          "price": "$6-12",
          "desc": "Cider"
        },
        {
          "name": "clam chowder",
          "price": "$8-18",
          "desc": "蛤蜊浓汤"
        }
      ],
      "attractions": [
        {
          "name": "太空针塔",
          "desc": "地标"
        },
        {
          "name": "派克市场",
          "desc": "市场"
        },
        {
          "name": "克里夫兰公园",
          "desc": "艺术"
        },
        {
          "name": "雷尼尔山",
          "desc": "火山"
        }
      ],
      "festivals": [
        {
          "name": "咖啡节",
          "date": "9月"
        },
        {
          "name": "音乐节",
          "date": "6月"
        },
        {
          "name": "灯光秀",
          "date": "11月"
        }
      ],
      "customs": [
        "小费",
        "科技",
        "雨天"
      ],
      "transport": "Link",
      "hotspots": [
        {
          "area": "Capitol Hill",
          "desc": "安全",
          "risk": "低"
        },
        {
          "area": "Pioneer Square",
          "desc": "游民",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Capitol Hill",
        "Ballard"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻旧金山总领事馆(管西雅图)",
      "phone": "+1-415-674-2900",
      "address": "1450 Laguna St, San Francisco",
      "emergency": "+1-415-674-2900"
    },
    "hospital": {
      "name": "Harborview Medical Center",
      "phone": "+1-206-744-3000",
      "address": "325 9th Ave, Seattle"
    }
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
          "name": "古巴三明治",
          "price": "$8-15",
          "desc": "Cuban sandwich"
        },
        {
          "name": "石蟹爪",
          "price": "$20-40",
          "desc": "Stone crab"
        },
        {
          "name": "Key Lime派",
          "price": "$5-10",
          "desc": "甜点"
        },
        {
          "name": "咖啡",
          "price": "$3-6",
          "desc": "Cuban coffee"
        }
      ],
      "attractions": [
        {
          "name": "南海滩",
          "desc": "地标"
        },
        {
          "name": "小哈瓦那",
          "desc": "古巴文化"
        },
        {
          "name": "大沼泽地",
          "desc": "国家公园"
        },
        {
          "name": "装饰艺术区",
          "desc": "建筑"
        }
      ],
      "festivals": [
        {
          "name": "超级碗",
          "date": "2月"
        },
        {
          "name": "艺木周",
          "date": "3月"
        },
        {
          "name": "国庆",
          "date": "7月"
        }
      ],
      "customs": [
        "小费",
        "阳光",
        "安全"
      ],
      "transport": "公交",
      "hotspots": [
        {
          "area": "Overtown",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Liberty City",
          "desc": "犯罪率高",
          "risk": "高"
        },
        {
          "area": "南海滩",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Brickell",
        "Coral Gables"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻迈阿密总领事馆",
      "phone": "+1-305-442-6918",
      "address": "1300 Brickell Ave, Miami, FL 33131",
      "emergency": "+1-305-442-6918"
    },
    "hospital": {
      "name": "Jackson Memorial Hospital",
      "phone": "+1-305-585-1000",
      "address": "1611 NW 12th Ave, Miami"
    }
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
          "name": "蛤蜊浓汤",
          "price": "$8-15",
          "desc": "Clam chowder"
        },
        {
          "name": "龙虾卷",
          "price": "$15-30",
          "desc": "Lobster roll"
        },
        {
          "name": "波士顿奶油",
          "price": "$5-10",
          "desc": "甜点"
        },
        {
          "name": "咖啡",
          "price": "$4-8",
          "desc": "波士顿咖啡"
        }
      ],
      "attractions": [
        {
          "name": "自由之路",
          "desc": "历史"
        },
        {
          "name": "哈佛",
          "desc": "大学"
        },
        {
          "name": "Faneuil Hall",
          "desc": "市场"
        },
        {
          "name": "波士顿公园",
          "desc": "公园"
        }
      ],
      "festivals": [
        {
          "name": "马拉松",
          "date": "4月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "感恩节",
          "date": "11月"
        }
      ],
      "customs": [
        "小费",
        "历史",
        "文化"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Roxbury",
          "desc": "犯罪",
          "risk": "中"
        },
        {
          "area": "Dorchester",
          "desc": "危险",
          "risk": "中"
        },
        {
          "area": "市中心",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Back Bay",
        "Beacon Hill"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻纽约总领事馆(管波士顿)",
      "phone": "+1-212-244-9392",
      "address": "520 12th Ave, New York, NY 10036",
      "emergency": "+1-212-244-9456"
    },
    "hospital": {
      "name": "Massachusetts General Hospital",
      "phone": "+1-617-726-2000",
      "address": "55 Fruit St, Boston"
    }
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
          "name": "蓝蟹",
          "price": "$15-30",
          "desc": "Blue crab"
        },
        {
          "name": "烧烤",
          "price": "$10-25",
          "desc": "BBQ"
        },
        {
          "name": "墨西哥卷",
          "price": "$8-15",
          "desc": "Tacoes"
        },
        {
          "name": "咖啡",
          "price": "$4-8",
          "desc": "特色"
        }
      ],
      "attractions": [
        {
          "name": "白宫",
          "desc": "地标"
        },
        {
          "name": "国会山",
          "desc": "立法"
        },
        {
          "name": "林肯纪念堂",
          "desc": "纪念"
        },
        {
          "name": "史密森尼",
          "desc": "博物馆"
        }
      ],
      "festivals": [
        {
          "name": "樱花节",
          "date": "3-4月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "国庆",
          "date": "7月4日"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "政治"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Anacostia",
          "desc": "犯罪率高",
          "risk": "高"
        },
        {
          "area": "SE华盛顿",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "白宫区域",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Georgetown",
        "Dupont Circle"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻美国大使馆",
      "phone": "+1-202-495-2266",
      "address": "3505 International Place NW, Washington DC",
      "emergency": "+1-202-495-2266"
    },
    "hospital": {
      "name": "George Washington University Hospital",
      "phone": "+1-202-715-4000",
      "address": "900 23rd St NW, Washington DC"
    }
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
          "name": "自助餐",
          "price": "$20-50",
          "desc": "Buffet"
        },
        {
          "name": "牛排",
          "price": "$30-80",
          "desc": "Steakhouse"
        },
        {
          "name": "墨西哥",
          "price": "$10-20",
          "desc": "Mexican"
        },
        {
          "name": "亚洲",
          "price": "$15-30",
          "desc": "Asian"
        }
      ],
      "attractions": [
        {
          "name": "Strip",
          "desc": "大道"
        },
        {
          "name": "威尼斯人",
          "desc": "酒店"
        },
        {
          "name": "Bellagio喷泉",
          "desc": "表演"
        },
        {
          "name": "大峡谷",
          "desc": "一日游"
        }
      ],
      "festivals": [
        {
          "name": "CES",
          "date": "1月"
        },
        {
          "name": "婚礼",
          "date": "全年"
        },
        {
          "name": "跨年",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "赌博",
        "夜生活"
      ],
      "transport": "公交",
      "hotspots": [
        {
          "area": "Fremont Street",
          "desc": "醉汉",
          "risk": "中"
        },
        {
          "area": "Strip北段",
          "desc": "较安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Strip中心",
        "Summerlin"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻洛杉矶总领事馆(管拉斯维加斯)",
      "phone": "+1-213-807-8088",
      "address": "600 N State College Blvd, Pasadena",
      "emergency": "+1-213-807-8092"
    },
    "hospital": {
      "name": "University Medical Center",
      "phone": "+1-702-822-2111",
      "address": "1800 W Charleston Blvd, Las Vegas"
    }
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
          "name": "科罗拉多羊排",
          "price": "$20-40",
          "desc": "Lamb"
        },
        {
          "name": "精酿啤酒",
          "price": "$6-12",
          "desc": "Craft beer"
        },
        {
          "name": "汉堡",
          "price": "$10-20",
          "desc": "Burgery"
        },
        {
          "name": "咖啡",
          "price": "$4-8",
          "desc": "Mountain coffee"
        }
      ],
      "attractions": [
        {
          "name": "红石公园",
          "desc": "露天剧场"
        },
        {
          "name": "丹佛艺术博物馆",
          "desc": "文化"
        },
        {
          "name": "Union Station",
          "desc": "车站"
        },
        {
          "name": "第十六街",
          "desc": "步行街"
        }
      ],
      "festivals": [
        {
          "name": "啤酒节",
          "date": "9月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "夏季",
          "date": "6-8月"
        }
      ],
      "customs": [
        "小费",
        "户外",
        "高度"
      ],
      "transport": "RTD",
      "hotspots": [
        {
          "area": "市中心",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Capitol Hill",
        "Wash Park"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻旧金山总领事馆(管丹佛)",
      "phone": "+1-415-674-2900",
      "address": "1450 Laguna St, San Francisco",
      "emergency": "+1-415-674-2900"
    },
    "hospital": {
      "name": "University of Colorado Hospital",
      "phone": "+1-720-848-0000",
      "address": "12605 E 16th Ave, Aurora, CO"
    }
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
          "name": "炸鸡",
          "price": "$8-15",
          "desc": "Fried chicken"
        },
        {
          "name": "烧烤",
          "price": "$10-25",
          "desc": "BBQ"
        },
        {
          "name": "海滨",
          "price": "$15-30",
          "desc": "Seafood"
        },
        {
          "name": "咖啡",
          "price": "$4-8",
          "desc": "特色"
        }
      ],
      "attractions": [
        {
          "name": "可口可乐世界",
          "desc": "博物馆"
        },
        {
          "name": "CNN中心",
          "desc": "新闻"
        },
        {
          "name": "水族馆",
          "desc": "海洋"
        },
        {
          "name": "马丁路德金",
          "desc": "历史"
        }
      ],
      "festivals": [
        {
          "name": "桃节",
          "date": "4月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "啤酒节",
          "date": "9月"
        }
      ],
      "customs": [
        "小费",
        "南方",
        "机场"
      ],
      "transport": "MARTA",
      "hotspots": [
        {
          "area": "Beltline",
          "desc": "盗窃",
          "risk": "中"
        },
        {
          "area": "SW亚特兰大",
          "desc": "犯罪",
          "risk": "高"
        },
        {
          "area": "中城",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Midtown",
        "Buckhead"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻亚特兰大总领事馆",
      "phone": "+1-404-894-4111",
      "address": "4500 Summit Blvd, Atlanta, GA 30319",
      "emergency": "+1-404-894-4111"
    },
    "hospital": {
      "name": "Emory University Hospital",
      "phone": "+1-404-712-7000",
      "address": "1364 Clifton Rd, Atlanta"
    }
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
          "name": "德州烧烤",
          "price": "$15-30",
          "desc": "BBQ"
        },
        {
          "name": "牛排",
          "price": "$25-50",
          "desc": "Steak"
        },
        {
          "name": "墨西哥",
          "price": "$10-20",
          "desc": "Tex-Mex"
        },
        {
          "name": "甜点",
          "price": "$5-12",
          "desc": "Pie"
        }
      ],
      "attractions": [
        {
          "name": "迪利广场",
          "desc": "历史"
        },
        {
          "name": "阿蒙卡特",
          "desc": "艺术"
        },
        {
          "name": "达拉斯动物园",
          "desc": "动物"
        },
        {
          "name": "植物园",
          "desc": "花园"
        }
      ],
      "festivals": [
        {
          "name": "牛仔节",
          "date": "3月"
        },
        {
          "name": "艺术节",
          "date": "9月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "牛仔",
        "大"
      ],
      "transport": "DART",
      "hotspots": [
        {
          "area": "Downtown",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Uptown",
        "Highland Park"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻休斯顿总领事馆(管达拉斯)",
      "phone": "+1-713-521-9996",
      "address": "3417 Montrose Blvd, Houston, TX",
      "emergency": "+1-713-521-9996"
    },
    "hospital": {
      "name": "UT Southwestern Medical Center",
      "phone": "+1-214-645-5555",
      "address": "5323 Harry Hines Blvd, Dallas"
    }
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
          "name": "烧烤",
          "price": "$15-30",
          "desc": "BBQ"
        },
        {
          "name": "越南粉",
          "price": "$10-20",
          "desc": "Pho"
        },
        {
          "name": "墨西哥",
          "price": "$10-20",
          "desc": "Tex-Mex"
        },
        {
          "name": "海鲜",
          "price": "$20-40",
          "desc": "Gulf seafood"
        }
      ],
      "attractions": [
        {
          "name": "NASA",
          "desc": "太空中心"
        },
        {
          "name": "博物馆区",
          "desc": "文化"
        },
        {
          "name": "雷尼尔球场",
          "desc": "体育"
        },
        {
          "name": "赫曼公园",
          "desc": "公园"
        }
      ],
      "festivals": [
        {
          "name": "牛仔节",
          "date": "3月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "能源节",
          "date": "10月"
        }
      ],
      "customs": [
        "小费",
        "汽车",
        "多元"
      ],
      "transport": "METRO",
      "hotspots": [
        {
          "area": "市中心",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Montrose",
        "River Oaks"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻休斯顿总领事馆",
      "phone": "+1-713-521-9996",
      "address": "3417 Montrose Blvd, Houston, TX 77019",
      "emergency": "+1-713-521-9996"
    },
    "hospital": {
      "name": "Texas Medical Center",
      "phone": "+1-713-795-1000",
      "address": "6560 Fannin St, Houston"
    }
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
          "name": "墨西哥",
          "price": "$10-20",
          "desc": "Sonoran"
        },
        {
          "name": "烧烤",
          "price": "$15-30",
          "desc": "BBQ"
        },
        {
          "name": "牛排",
          "price": "$25-50",
          "desc": "Steak"
        },
        {
          "name": "沙拉",
          "price": "$10-20",
          "desc": "Salad"
        }
      ],
      "attractions": [
        {
          "name": "驼峰山",
          "desc": "徒步"
        },
        {
          "name": "沙漠植物园",
          "desc": "植物"
        },
        {
          "name": "音乐厅",
          "desc": "表演"
        },
        {
          "name": "老城",
          "desc": "历史"
        }
      ],
      "festivals": [
        {
          "name": "超级碗",
          "date": "2月"
        },
        {
          "name": "艺术节",
          "date": "3月"
        },
        {
          "name": "灯展",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "沙漠",
        "高温"
      ],
      "transport": "Valley Metro",
      "hotspots": [
        {
          "area": "Downtown",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Scottsdale",
        "Paradise Valley"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻洛杉矶总领事馆(管菲尼克斯)",
      "phone": "+1-213-807-8088",
      "address": "600 N State College Blvd, Pasadena",
      "emergency": "+1-213-807-8092"
    },
    "hospital": {
      "name": "Mayo Clinic Phoenix",
      "phone": "+1-480-515-5700",
      "address": "5777 E Mayo Blvd, Phoenix"
    }
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
          "name": "精酿啤酒",
          "price": "$6-12",
          "desc": "Craft beer"
        },
        {
          "name": "甜甜圈",
          "price": "$3-8",
          "desc": "Donut"
        },
        {
          "name": "咖啡",
          "price": "$4-8",
          "desc": "Third wave"
        },
        {
          "name": "墨西哥卷",
          "price": "$8-15",
          "desc": "Food trucks"
        }
      ],
      "attractions": [
        {
          "name": "华盛顿公园",
          "desc": "森林"
        },
        {
          "name": "皮托克屋",
          "desc": "鬼屋"
        },
        {
          "name": "珍珠区",
          "desc": "购物"
        },
        {
          "name": "阿尔布赖特",
          "desc": "花园"
        }
      ],
      "festivals": [
        {
          "name": "玫瑰节",
          "date": "6月"
        },
        {
          "name": "啤酒节",
          "date": "7月"
        },
        {
          "name": "音乐节",
          "date": "9月"
        }
      ],
      "customs": [
        "小费",
        "精酿",
        "自行车"
      ],
      "transport": "TriMet",
      "hotspots": [
        {
          "area": "Downtown",
          "desc": "游民",
          "risk": "中"
        },
        {
          "area": "Old Town",
          "desc": "犯罪",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Pearl",
        "Sellwood"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻旧金山总领事馆(管波特兰)",
      "phone": "+1-415-674-2900",
      "address": "1450 Laguna St, San Francisco",
      "emergency": "+1-415-674-2900"
    },
    "hospital": {
      "name": "OHSU Hospital",
      "phone": "+1-503-494-8311",
      "address": "3181 SW Sam Jackson Park Rd, Portland"
    }
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
          "name": "加州卷",
          "price": "$10-20",
          "desc": "California roll"
        },
        {
          "name": "鱼墨西哥",
          "price": "$8-15",
          "desc": "Fish tacos"
        },
        {
          "name": "汉堡",
          "price": "$10-20",
          "desc": "Burgers"
        },
        {
          "name": "咖啡",
          "price": "$4-8",
          "desc": "特色"
        }
      ],
      "attractions": [
        {
          "name": "中途岛",
          "desc": "航母"
        },
        {
          "name": "巴尔博亚公园",
          "desc": "公园"
        },
        {
          "name": "拉霍亚",
          "desc": "海滩"
        },
        {
          "name": "科罗纳多",
          "desc": "岛"
        }
      ],
      "festivals": [
        {
          "name": "动漫展",
          "date": "7月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "玫瑰碗",
          "date": "1月"
        }
      ],
      "customs": [
        "小费",
        "海滩",
        "户外"
      ],
      "transport": " MTS",
      "hotspots": [
        {
          "area": "Gaslamp",
          "desc": "夜生活",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "La Jolla",
        "Del Mar"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻洛杉矶总领事馆(管圣地亚哥)",
      "phone": "+1-213-807-8088",
      "address": "600 N State College Blvd, Pasadena",
      "emergency": "+1-213-807-8092"
    },
    "hospital": {
      "name": "UC San Diego Medical Center",
      "phone": "+1-619-543-6400",
      "address": "200 W Arbor Dr, San Diego"
    }
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
          "name": "烤肉",
          "price": "$15-30",
          "desc": "BBQ"
        },
        {
          "name": "炸鸡",
          "price": "$8-15",
          "desc": "Fried chicken"
        },
        {
          "name": "墨西哥",
          "price": "$8-15",
          "desc": "Tex-Mex"
        },
        {
          "name": "啤酒",
          "price": "$6-12",
          "desc": "Craft beer"
        }
      ],
      "attractions": [
        {
          "name": "国会大厦",
          "desc": "地标"
        },
        {
          "name": "第六街",
          "desc": "音乐"
        },
        {
          "name": " Barton泉",
          "desc": "游泳"
        },
        {
          "name": "Zilker公园",
          "desc": "公园"
        }
      ],
      "festivals": [
        {
          "name": "西南偏南",
          "date": "3月"
        },
        {
          "name": "ACL",
          "date": "10月"
        },
        {
          "name": "独立日",
          "date": "7月"
        }
      ],
      "customs": [
        "小费",
        "音乐",
        "户外"
      ],
      "transport": "Capital Metro",
      "hotspots": [
        {
          "area": "Downtown",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Domain",
        "Tarrytown"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻休斯顿总领事馆(管奥斯汀)",
      "phone": "+1-713-521-9996",
      "address": "3417 Montrose Blvd, Houston",
      "emergency": "+1-713-521-9996"
    },
    "hospital": {
      "name": "Ascension Seton Medical Center",
      "phone": "+1-512-324-1000",
      "address": "1201 W 38th St, Austin"
    }
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
          "name": "墨西哥夹饼",
          "price": "MX$30-80",
          "desc": "Tacos al pastor"
        },
        {
          "name": "墨西哥玉米",
          "price": "MX$20-50",
          "desc": "Elote"
        },
        {
          "name": "墨西哥辣肉",
          "price": "MX$50-100",
          "desc": "Carnitas"
        },
        {
          "name": "龙舌兰",
          "price": "MX$50-150",
          "desc": "Tequila"
        }
      ],
      "attractions": [
        {
          "name": "宪法广场",
          "desc": "中心"
        },
        {
          "name": "弗里达博物馆",
          "desc": "艺术"
        },
        {
          "name": "人类学博物馆",
          "desc": "文化"
        },
        {
          "name": "罗马区",
          "desc": "社区"
        }
      ],
      "festivals": [
        {
          "name": "亡灵节",
          "date": "10-11月"
        },
        {
          "name": "独立日",
          "date": "9月"
        },
        {
          "name": "圣诞节",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "文化"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Iztapalapa",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Centro Historico",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Polanco",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Condesa",
        "Polanco"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻墨西哥大使馆",
      "phone": "+52-55-5280-2121",
      "address": "Av.弾利马斯 580, Polanco, Mexico City",
      "emergency": "+52-55-5280-2121"
    },
    "hospital": {
      "name": "Hospital Angeles",
      "phone": "+52-55-5278-0000",
      "address": "Av.弾利马斯 790, Mexico City"
    }
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
          "name": "海鲜",
          "price": "MX$150-400",
          "desc": "Grouper"
        },
        {
          "name": "墨西哥",
          "price": "MX$80-200",
          "desc": "Mexican"
        },
        {
          "name": "加勒比",
          "price": "MX$100-250",
          "desc": "Caribbean"
        },
        {
          "name": "龙舌兰",
          "price": "MX$50-150",
          "desc": "Tequila"
        }
      ],
      "attractions": [
        {
          "name": "海滩",
          "desc": "加勒比"
        },
        {
          "name": "奇琴伊察",
          "desc": "金字塔"
        },
        {
          "name": "女人岛",
          "desc": "离岛"
        },
        {
          "name": "水下博物馆",
          "desc": "水下"
        }
      ],
      "festivals": [
        {
          "name": "春假",
          "date": "3月"
        },
        {
          "name": "鲨鱼节",
          "date": "7月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "海滩",
        "度假"
      ],
      "transport": "公交",
      "hotspots": [
        {
          "area": "Hotel Zone",
          "desc": "游客区安全",
          "risk": "low"
        },
        {
          "area": "市中心",
          "desc": "较乱",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Playa del Carmen",
        "Tulum"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻墨西哥大使馆(管坎昆)",
      "phone": "+52-55-5280-2121",
      "address": "Av.弾利马斯 580, Polanco, Mexico City",
      "emergency": "+52-55-5280-2121"
    },
    "hospital": {
      "name": "Hospital AmeriMed",
      "phone": "+52-998-881-1313",
      "address": "Blvd. Kukulcán Km 5.5, Cancún"
    }
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
          "name": "巴西烤肉",
          "price": "R$50-100",
          "desc": "Churrasco"
        },
        {
          "name": "披萨",
          "price": "R$40-80",
          "desc": " Paulista"
        },
        {
          "name": "咖啡",
          "price": "R$10-25",
          "desc": "Café"
        },
        {
          "name": "Feijoada",
          "price": "R$30-60",
          "desc": "黑豆"
        }
      ],
      "attractions": [
        {
          "name": "保利斯塔大道",
          "desc": "金融"
        },
        {
          "name": "伊比拉普埃拉",
          "desc": "公园"
        },
        {
          "name": "圣保罗大教堂",
          "desc": "宗教"
        },
        {
          "name": "东方街",
          "desc": "日本"
        }
      ],
      "festivals": [
        {
          "name": "狂欢节",
          "date": "2月"
        },
        {
          "name": "独立日",
          "date": "9月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "多元"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Cracolandia",
          "desc": "毒品区",
          "risk": "高"
        },
        {
          "area": "Centro",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Jardins",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Jardins",
        "Pinheiros"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻圣保罗总领事馆",
      "phone": "+55-11-3898-8200",
      "address": "Av. Paulista 1754, São Paulo",
      "emergency": "+55-11-3898-8200"
    },
    "hospital": {
      "name": "Hospital Sírio-Libanês",
      "phone": "+55-11-3164-7000",
      "address": "Rua Adma Jafet 91, São Paulo"
    }
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
          "name": "巴西烤肉",
          "price": "R$50-100",
          "desc": "Churrasco"
        },
        {
          "name": "黑豆饭",
          "price": "R$20-50",
          "desc": "Feijoada"
        },
        {
          "name": "椰子水",
          "price": "R$10-20",
          "desc": "Coco"
        },
        {
          "name": "巴西莓",
          "price": "R$15-30",
          "desc": "Açaí"
        }
      ],
      "attractions": [
        {
          "name": "基督像",
          "desc": "地标"
        },
        {
          "name": "面包山",
          "desc": "景观"
        },
        {
          "name": "Copacabana",
          "desc": "海滩"
        },
        {
          "name": "里约植物园",
          "desc": "花园"
        }
      ],
      "festivals": [
        {
          "name": "狂欢节",
          "date": "2月"
        },
        {
          "name": "新年",
          "date": "12月"
        },
        {
          "name": "摇滚节",
          "date": "9月"
        }
      ],
      "customs": [
        "小费",
        "海滩",
        "安全"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Rocinha",
          "desc": "贫民窟，帮派",
          "risk": "高"
        },
        {
          "area": "Centro",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Copacabana",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Ipanema",
        "Leblon"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻里约总领事馆",
      "phone": "+55-21-3823-0700",
      "address": "Av. Marechal Rondon 185, Rio de Janeiro",
      "emergency": "+55-21-3823-0700"
    },
    "hospital": {
      "name": "Hospital Sírio-Libanês",
      "phone": "+55-11-3164-7000",
      "address": "Rua Adma Jafet 91, São Paulo"
    }
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
          "name": "烤肉",
          "price": "ARS500-1500",
          "desc": "Asado"
        },
        {
          "name": "奶酪派",
          "price": "ARS200-500",
          "desc": "Empanada"
        },
        {
          "name": "马黛茶",
          "price": "ARS100-300",
          "desc": "Mate"
        },
        {
          "name": "冰淇淋",
          "price": "ARS200-500",
          "desc": "Helado"
        }
      ],
      "attractions": [
        {
          "name": "五月广场",
          "desc": "中心"
        },
        {
          "name": "科隆剧院",
          "desc": "文化"
        },
        {
          "name": "博卡区",
          "desc": "足球"
        },
        {
          "name": "雷科莱塔",
          "desc": "墓地"
        }
      ],
      "festivals": [
        {
          "name": "探戈节",
          "date": "8月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "足球",
        "探戈"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Once区",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "La Boca",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Palermo",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Palermo",
        "Recoleta"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻阿根廷大使馆",
      "phone": "+54-11-4547-8140",
      "address": "Av. Crámer 4176, Buenos Aires",
      "emergency": "+54-11-4547-8140"
    },
    "hospital": {
      "name": "Hospital Italiano",
      "phone": "+54-11-4959-9000",
      "address": "Gasón 1180, Buenos Aires"
    }
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
          "name": "烤肉",
          "price": "CLP5000-15000",
          "desc": "Asado"
        },
        {
          "name": "Combro",
          "price": "CLP2000-5000",
          "desc": "肉卷"
        },
        {
          "name": "海鲜",
          "price": "CLP8000-20000",
          "desc": "Marisco"
        },
        {
          "name": "葡萄酒",
          "price": "CLP5000-15000",
          "desc": "Vino"
        }
      ],
      "attractions": [
        {
          "name": "武器广场",
          "desc": "中心"
        },
        {
          "name": "圣克里斯托瓦尔山",
          "desc": "景观"
        },
        {
          "name": "拉莫内达宫",
          "desc": "总统"
        },
        {
          "name": "瓦尔帕莱索",
          "desc": "彩色"
        }
      ],
      "festivals": [
        {
          "name": "独立日",
          "date": "9月"
        },
        {
          "name": "国庆",
          "date": "9月18日"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "安第斯"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Estación Central",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "La Pintana",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Providencia",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Providencia",
        "Las Condes"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻智利大使馆",
      "phone": "+56-2-2232-1605",
      "address": "Av. Costanera 8734, Las Condes, Santiago",
      "emergency": "+56-2-2232-1605"
    },
    "hospital": {
      "name": "Clínica Las Condes",
      "phone": "+56-2-2210-4000",
      "address": "Lo Fontecilla 441, Santiago"
    }
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
          "name": "酸橘汁腌鱼",
          "price": "PEN30-80",
          "desc": "Ceviche"
        },
        {
          "name": "秘鲁烤肉",
          "price": "PEN40-100",
          "desc": "Anticucho"
        },
        {
          "name": "秘鲁鸡",
          "price": "PEN25-60",
          "desc": "Pollo a la brasa"
        },
        {
          "name": "古柯茶",
          "price": "PEN10-25",
          "desc": "Mate de coca"
        }
      ],
      "attractions": [
        {
          "name": "武器广场",
          "desc": "中心"
        },
        {
          "name": "米拉弗洛雷斯",
          "desc": "海滨"
        },
        {
          "name": "拉尔科博物馆",
          "desc": "文化"
        },
        {
          "name": "印加市场",
          "desc": "购物"
        }
      ],
      "festivals": [
        {
          "name": "秘鲁日",
          "date": "7月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        },
        {
          "name": "独立日",
          "date": "7月28日"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "美食"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Centro",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Callao",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Miraflores",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Miraflores",
        "San Isidro"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻秘鲁大使馆",
      "phone": "+51-1-442-9459",
      "address": "Av. Javier Prado Este 1550, Lima",
      "emergency": "+51-1-442-9459"
    },
    "hospital": {
      "name": "Clinica Ricardo Palma",
      "phone": "+51-1-423-4420",
      "address": "Av. Javier Prado Este 1062, Lima"
    }
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
          "name": " Bandeja Paisa",
          "price": "COP20000-50000",
          "desc": "丰盛套餐"
        },
        {
          "name": "Arepa",
          "price": "COP5000-15000",
          "desc": "玉米饼"
        },
        {
          "name": "Ajiaco",
          "price": "COP15000-35000",
          "desc": "鸡汤"
        },
        {
          "name": "咖啡",
          "price": "COP5000-15000",
          "desc": "哥伦比亚咖啡"
        }
      ],
      "attractions": [
        {
          "name": "玻利瓦尔广场",
          "desc": "中心"
        },
        {
          "name": "黄金博物馆",
          "desc": "黄金"
        },
        {
          "name": "蒙特塞拉特",
          "desc": "山"
        },
        {
          "name": "Zona Rosa",
          "desc": "夜生活"
        }
      ],
      "festivals": [
        {
          "name": "鲜花节",
          "date": "8月"
        },
        {
          "name": "独立日",
          "date": "7月20日"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "高海拔"
      ],
      "transport": "TransMilenio",
      "hotspots": [
        {
          "area": "Ciudad Bolívar",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Centro",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Zona Rosa",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Usaquen",
        "Chicó"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻哥伦比亚大使馆",
      "phone": "+57-1-622-3219",
      "address": "Carrera 16 #98-30, Bogotá",
      "emergency": "+57-1-622-3219"
    },
    "hospital": {
      "name": "Hospital Simón Bolívar",
      "phone": "+57-1-670-3000",
      "address": "Calle 170 #60-10, Bogotá"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Comuna 13",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Centro",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "El Poblado",
          "desc": "安全",
          "risk": "low"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻哥伦比亚大使馆(管麦德林)",
      "phone": "+57-1-622-3219",
      "address": "Carrera 16 #98-30, Bogotá",
      "emergency": "+57-1-622-3219"
    },
    "hospital": {
      "name": "Hospital Pablo Tobón Uribe",
      "phone": "+57-4-445-9000",
      "address": "Calle 78B #69-240, Medellín"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Casco Viejo",
          "desc": "旅游但小心",
          "risk": "中"
        },
        {
          "area": "El Chorillo",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Costa del Este",
          "desc": "安全",
          "risk": "low"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻巴拿马大使馆",
      "phone": "+507-2690-1555",
      "address": "Torre Global Business, Panama City",
      "emergency": "+507-2690-1555"
    },
    "hospital": {
      "name": "Hospital Punta Pacífica",
      "phone": "+507-204-8000",
      "address": "Punta Pacífica, Panama City"
    }
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
          "name": "库莎里",
          "price": "EGP20-50",
          "desc": "Egyptian rice"
        },
        {
          "name": "沙瓦尔玛",
          "price": "EGP15-40",
          "desc": "Shawarma"
        },
        {
          "name": "烤鸽子",
          "price": "EGP30-80",
          "desc": "Hamam"
        },
        {
          "name": "甜点",
          "price": "EGP10-30",
          "desc": "Basbousa"
        }
      ],
      "attractions": [
        {
          "name": "金字塔",
          "desc": "奇迹"
        },
        {
          "name": "狮身人面",
          "desc": "地标"
        },
        {
          "name": "埃及博物馆",
          "desc": "文物"
        },
        {
          "name": "哈利利",
          "desc": "市场"
        }
      ],
      "festivals": [
        {
          "name": "斋月",
          "date": "4月"
        },
        {
          "name": "独立日",
          "date": "7月"
        },
        {
          "name": "闻风节",
          "date": "4月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "文化"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "老城",
          "desc": "小偷",
          "risk": "高"
        },
        {
          "area": "吉萨",
          "desc": "骗子",
          "risk": "中"
        },
        {
          "area": "金字塔景区",
          "desc": "小心骗子",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Zamalek",
        "Maadi"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻埃及大使馆",
      "phone": "+20-2-2736-1234",
      "address": "14 Baher Atef St, Maadi, Cairo",
      "emergency": "+20-2-2736-1234"
    },
    "hospital": {
      "name": "Cairo University Hospital",
      "phone": "+20-2-236-8280",
      "address": "El-Manial, Cairo"
    }
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
          "name": "烤肉",
          "price": "ZAR100-250",
          "desc": "Braai"
        },
        {
          "name": "海鲜",
          "price": "ZAR80-200",
          "desc": "Crayfish"
        },
        {
          "name": "南非酒",
          "price": "ZAR50-150",
          "desc": "Wine"
        },
        {
          "name": "Bunny Chow",
          "price": "ZAR40-100",
          "desc": "面包碗"
        }
      ],
      "attractions": [
        {
          "name": "桌山",
          "desc": "地标"
        },
        {
          "name": "好望角",
          "desc": "景点"
        },
        {
          "name": "V&A码头",
          "desc": "购物"
        },
        {
          "name": "葡萄酒庄",
          "desc": "Stellenbosch"
        }
      ],
      "festivals": [
        {
          "name": "开普敦音乐节",
          "date": "3月"
        },
        {
          "name": "种族隔离日",
          "date": "3月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "多元"
      ],
      "transport": "MyCiTi",
      "hotspots": [
        {
          "area": "Khayelitsha",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "Gugulethu",
          "desc": "帮派",
          "risk": "高"
        },
        {
          "area": "V&A waterfront",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "CBD",
        "Seapoint"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻开普敦总领事馆",
      "phone": "+27-21-674-0583",
      "address": "25th Floor, Portside Building, Cape Town",
      "emergency": "+27-21-674-0583"
    },
    "hospital": {
      "name": "Groote Schuur Hospital",
      "phone": "+27-21-404-9111",
      "address": "Main Rd, Observatory, Cape Town"
    }
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
          "name": "烤肉",
          "price": "ZAR80-200",
          "desc": "Braai"
        },
        {
          "name": "印度咖喱",
          "price": "ZAR60-150",
          "desc": "Curry"
        },
        {
          "name": "汉堡",
          "price": "ZAR50-120",
          "desc": "Burgers"
        },
        {
          "name": "咖啡",
          "price": "ZAR30-80",
          "desc": "Coffee"
        }
      ],
      "attractions": [
        {
          "name": "种族隔离博物馆",
          "desc": "历史"
        },
        {
          "name": "约翰内斯堡动物园",
          "desc": "动物"
        },
        {
          "name": "桑顿城",
          "desc": "金融"
        },
        {
          "name": "金礦城",
          "desc": "主题"
        }
      ],
      "festivals": [
        {
          "name": "爵士节",
          "date": "9月"
        },
        {
          "name": "音乐节",
          "date": "11月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "活力"
      ],
      "transport": "Gautrain",
      "hotspots": [
        {
          "area": "约翰内斯堡CBD",
          "desc": "犯罪",
          "risk": "高"
        },
        {
          "area": "Hillbrow",
          "desc": "危险",
          "risk": "高"
        },
        {
          "area": "桑顿",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Sandton",
        "Rosebank"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻约翰内斯堡总领事馆",
      "phone": "+27-11-784-7245",
      "address": "25 Bailey Lane, Johannesburg",
      "emergency": "+27-11-784-7245"
    },
    "hospital": {
      "name": "Charlotte Maxeke Hospital",
      "phone": "+27-11-488-3000",
      "address": "Parktown, Johannesburg"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Lagos Island",
          "desc": "混乱",
          "risk": "高"
        },
        {
          "area": "Ikoyi",
          "desc": "安全",
          "risk": "低"
        },
        {
          "area": "Victoria Island",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻拉各斯总领事馆",
      "phone": "+234-1-271-9250",
      "address": "Plot 8, Victoria Anegbe Link, Lagos",
      "emergency": "+234-1-271-9250"
    },
    "hospital": {
      "name": "Lagos University Teaching Hospital",
      "phone": "+234-1-585-2400",
      "address": "Idi-Araba, Lagos"
    }
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
          "name": "Nyama Choma",
          "price": "KES500-1500",
          "desc": "烤肉"
        },
        {
          "name": "Ugali",
          "price": "KES200-500",
          "desc": "玉米面"
        },
        {
          "name": "Chai",
          "price": "KES100-300",
          "desc": "茶"
        },
        {
          "name": "Samosa",
          "price": "KES100-250",
          "desc": "三角包"
        }
      ],
      "attractions": [
        {
          "name": "内罗毕国家公园",
          "desc": "野生动物"
        },
        {
          "name": "长颈鹿中心",
          "desc": "动物"
        },
        {
          "name": "凯伦故居",
          "desc": "历史"
        },
        {
          "name": "大象孤儿院",
          "desc": "保护"
        }
      ],
      "festivals": [
        {
          "name": "独立日",
          "date": "12月"
        },
        {
          "name": "马拉松",
          "date": "2月"
        },
        {
          "name": "音乐节",
          "date": "7月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "多元"
      ],
      "transport": "Matatu",
      "hotspots": [
        {
          "area": "市中心",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Kibera",
          "desc": "贫民窟",
          "risk": "高"
        },
        {
          "area": "Westlands",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Westlands",
        "Kilimani"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻肯尼亚大使馆",
      "phone": "+254-20-722-6000",
      "address": "Mombasa Road, Nairobi",
      "emergency": "+254-20-722-6000"
    },
    "hospital": {
      "name": "Kenyatta National Hospital",
      "phone": "+254-20-272-6300",
      "address": "Hospital Rd, Nairobi"
    }
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
          "name": "塔吉锅",
          "price": "MAD80-200",
          "desc": "Tagine"
        },
        {
          "name": " couscous",
          "price": "MAD60-150",
          "desc": "蒸面"
        },
        {
          "name": "Pastilla",
          "price": "MAD50-120",
          "desc": "甜咸派"
        },
        {
          "name": "薄荷茶",
          "price": "MAD20-50",
          "desc": "Mint tea"
        }
      ],
      "attractions": [
        {
          "name": "哈桑二世清真寺",
          "desc": "地标"
        },
        {
          "name": "老城",
          "desc": "Medina"
        },
        {
          "name": "穆罕默德五世广场",
          "desc": "中心"
        },
        {
          "name": "里克咖啡馆",
          "desc": "怀旧"
        }
      ],
      "festivals": [
        {
          "name": "独立日",
          "date": "11月"
        },
        {
          "name": "音乐节",
          "date": "6月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "安全",
        "法国"
      ],
      "transport": "电车",
      "hotspots": [
        {
          "area": "老城",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "中心市场",
          "desc": "复杂",
          "risk": "中"
        },
        {
          "area": "海滨",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Ain Diab",
        "Anfa"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻摩洛哥大使馆",
      "phone": "+212-522-642-099",
      "address": "46 Rue Ibn Toummert, Casablanca",
      "emergency": "+212-522-642-099"
    },
    "hospital": {
      "name": "CHU Ibn Rochd",
      "phone": "+212-522-640-000",
      "address": "Rue des Hôpitaux, Casablanca"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "麦地那",
          "desc": "小偷，骗子",
          "risk": "高"
        },
        {
          "area": "Jemaa el-Fnaa",
          "desc": "骗子多",
          "risk": "中"
        },
        {
          "area": "Gueliz",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻摩洛哥大使馆(管马拉喀什)",
      "phone": "+212-522-642-099",
      "address": "46 Rue Ibn Toummert, Casablanca",
      "emergency": "+212-522-642-099"
    },
    "hospital": {
      "name": "CHU Mohammed VI",
      "phone": "+212-524-436-400",
      "address": "Avenue Ibn Rochd, Marrakech"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "老城",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "布尔吉巴",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻突尼斯大使馆",
      "phone": "+216-71-783-388",
      "address": "Rue du 1er Juin, Tunis",
      "emergency": "+216-71-783-388"
    },
    "hospital": {
      "name": "CHU Charles Nicolle",
      "phone": "+216-71-560-100",
      "address": "Blvd du 9 Avril, Tunis"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Osu",
          "desc": "夜生活",
          "risk": "中"
        },
        {
          "area": "Central",
          "desc": "混乱",
          "risk": "中"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻加纳大使馆",
      "phone": "+233-30-277-4150",
      "address": "P.O. Box GP 3356, Accra",
      "emergency": "+233-30-277-4150"
    },
    "hospital": {
      "name": "Korle Bu Teaching Hospital",
      "phone": "+233-30-266-1701",
      "address": "Accra, Ghana"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Piazza",
          "desc": "混乱",
          "risk": "中"
        },
        {
          "area": "Bole",
          "desc": "安全",
          "risk": "低"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻埃塞俄比亚大使馆",
      "phone": "+251-11-371-2399",
      "address": "Jomo Kenyatta Ave, Addis Ababa",
      "emergency": "+251-11-371-2399"
    },
    "hospital": {
      "name": "Black Lion Hospital",
      "phone": "+251-11-551-1777",
      "address": "Addis Ababa University, Addis Ababa"
    }
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
    "lifestyle": {
      "food": [
        {
          "name": "海鲜",
          "price": "A\u0005-40",
          "desc": "鱼市场"
        },
        {
          "name": "早午餐",
          "price": "A\u0005-30",
          "desc": "brunch"
        },
        {
          "name": "牛排",
          "price": "A\u0005-50",
          "desc": "Aussie"
        },
        {
          "name": "澳白",
          "price": "A-6",
          "desc": "咖啡"
        }
      ],
      "attractions": [
        {
          "name": "歌剧院",
          "desc": "建筑"
        },
        {
          "name": "大桥",
          "desc": "攀登"
        },
        {
          "name": "邦迪",
          "desc": "冲浪"
        },
        {
          "name": "蓝山",
          "desc": "遗产"
        }
      ],
      "festivals": [
        {
          "name": "跨年",
          "date": "12月"
        },
        {
          "name": "Vivid",
          "date": "5-6月"
        },
        {
          "name": "Mardi Gras",
          "date": "3月"
        }
      ],
      "customs": [
        "小费",
        "防晒"
      ],
      "transport": "地铁",
      "hotspots": [
        {
          "area": "Kings Cross",
          "desc": "红灯区",
          "risk": "中"
        },
        {
          "area": "CBD",
          "desc": "安全",
          "risk": "低"
        },
        {
          "area": "Bondi",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "北岸"
      ]
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
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻悉尼总领事馆",
      "phone": "+61-2-8595-8000",
      "address": "539 Elizabeth St, Surry Hills, NSW 2010",
      "emergency": "+61-2-8595-8002"
    },
    "hospital": {
      "name": "Royal Prince Alfred Hospital",
      "phone": "+61-2-9515-6111",
      "address": "Missenden Rd, Camperdown, NSW"
    }
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
          "name": "咖啡",
          "price": "A$4-6",
          "desc": "世界最好"
        },
        {
          "name": "早午餐",
          "price": "A$15-30",
          "desc": "brunch"
        },
        {
          "name": "Dim Sims",
          "price": "A$3-8",
          "desc": "点心"
        },
        {
          "name": "香肠卷",
          "price": "A$4-8",
          "desc": "Sausage"
        }
      ],
      "attractions": [
        {
          "name": "大洋路",
          "desc": "自驾"
        },
        {
          "name": "展览馆",
          "desc": "遗产"
        },
        {
          "name": "疏芬山",
          "desc": "淘金"
        },
        {
          "name": "企鹅岛",
          "desc": "企鹅"
        }
      ],
      "festivals": [
        {
          "name": "澳网",
          "date": "1月"
        },
        {
          "name": "喜剧节",
          "date": "3月"
        },
        {
          "name": "赛马节",
          "date": "11月"
        }
      ],
      "customs": [
        "小费",
        "咖啡",
        "多元"
      ],
      "transport": "Tram",
      "hotspots": [
        {
          "area": "Flinders St站",
          "desc": "小偷",
          "risk": "中"
        },
        {
          "area": "Fitzroy",
          "desc": "多元",
          "risk": "低"
        },
        {
          "area": "CBD",
          "desc": "安全",
          "risk": "低"
        }
      ],
      "safeAreas": [
        "Fitzroy"
      ]
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
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻墨尔本总领事馆",
      "phone": "+61-3-9509-5200",
      "address": "70-76 Franklin St, Melbourne, VIC 3000",
      "emergency": "+61-3-9509-5200"
    },
    "hospital": {
      "name": "Royal Melbourne Hospital",
      "phone": "+61-3-9342-7000",
      "address": "300 Grattan St, Parkville, VIC"
    }
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
          "name": "海鲜",
          "price": "A$20-40",
          "desc": "Seafood"
        },
        {
          "name": "烤肉",
          "price": "A$15-35",
          "desc": "BBQ"
        },
        {
          "name": "咖啡",
          "price": "A$4-8",
          "desc": "Coffee"
        },
        {
          "name": "蛋糕",
          "price": "A$5-12",
          "desc": "Sweet"
        }
      ],
      "attractions": [
        {
          "name": "南岸",
          "desc": "河畔"
        },
        {
          "name": "库萨山",
          "desc": "景观"
        },
        {
          "name": "龙柏动物园",
          "desc": "考拉"
        },
        {
          "name": "故事桥",
          "desc": "地标"
        }
      ],
      "festivals": [
        {
          "name": "Riverfire",
          "date": "9月"
        },
        {
          "name": "咖啡节",
          "date": "8月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "户外",
        "河岸"
      ],
      "transport": "CityCat",
      "hotspots": [
        {
          "area": "Fortitude Valley",
          "desc": "夜店",
          "risk": "中"
        },
        {
          "area": "CBD",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "West End",
        "New Farm"
      ]
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
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻布里斯班总领事馆",
      "phone": "+61-7-3210-6508",
      "address": "144 Adelaide St, Brisbane, QLD 4000",
      "emergency": "+61-7-3210-6508"
    },
    "hospital": {
      "name": "Royal Brisbane Hospital",
      "phone": "+61-7-3646-8111",
      "address": "Butterfield St, Herston, QLD"
    }
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
          "name": "海鲜",
          "price": "A$20-45",
          "desc": "西澳龙虾"
        },
        {
          "name": "牛排",
          "price": "A$20-40",
          "desc": "West beef"
        },
        {
          "name": "咖啡",
          "price": "A$4-8",
          "desc": "Flat white"
        },
        {
          "name": "葡萄酒",
          "price": "A$15-35",
          "desc": "Margaret River"
        }
      ],
      "attractions": [
        {
          "name": "国王公园",
          "desc": "公园"
        },
        {
          "name": "弗里曼特尔",
          "desc": "港口"
        },
        {
          "name": "科特索海滩",
          "desc": "海滩"
        },
        {
          "name": "罗特尼斯岛",
          "desc": "离岛"
        }
      ],
      "festivals": [
        {
          "name": "灯光节",
          "date": "9月"
        },
        {
          "name": "音乐节",
          "date": "3月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "户外",
        "悠闲"
      ],
      "transport": "Transperth",
      "hotspots": [
        {
          "area": "East Perth",
          "desc": "较乱",
          "risk": "中"
        },
        {
          "area": "CBD",
          "desc": "安全",
          "risk": "low"
        }
      ],
      "safeAreas": [
        "Fremantle",
        "Cottesloe"
      ]
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
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻珀斯总领事馆",
      "phone": "+61-8-9222-0930",
      "address": "45 Kings Park Rd, West Perth, WA 6005",
      "emergency": "+61-8-9222-0930"
    },
    "hospital": {
      "name": "Royal Perth Hospital",
      "phone": "+61-8-9224-2222",
      "address": "Shenton Park, WA 6008"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Hindley St",
          "desc": "夜店",
          "risk": "low"
        },
        {
          "area": "CBD",
          "desc": "安全",
          "risk": "low"
        }
      ]
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
    "safety_history": "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。",
    "embassy": {
      "name": "中国驻阿德莱德总领事馆",
      "phone": "+61-8-8232-6899",
      "address": "Level 9, 63 Elder St, Adelaide, SA 5000",
      "emergency": "+61-8-8232-6899"
    },
    "hospital": {
      "name": "Royal Adelaide Hospital",
      "phone": "+61-8-7074-0000",
      "address": "Port Rd, Adelaide, SA 5000"
    }
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
          "name": "新西兰羊排",
          "price": "NZ$20-40",
          "desc": "Lamb"
        },
        {
          "name": "海鲜",
          "price": "NZ$25-50",
          "desc": "Seafood"
        },
        {
          "name": "咖啡",
          "price": "NZ$4-8",
          "desc": "Flat white"
        },
        {
          "name": "派",
          "price": "NZ$5-12",
          "desc": "Pavlova"
        }
      ],
      "attractions": [
        {
          "name": "天空塔",
          "desc": "地标"
        },
        {
          "name": "使命湾",
          "desc": "海滩"
        },
        {
          "name": "怀赫科岛",
          "desc": "离岛"
        },
        {
          "name": "激流岛",
          "desc": "酒庄"
        }
      ],
      "festivals": [
        {
          "name": "元旦",
          "date": "1月"
        },
        {
          "name": "橄榄球",
          "date": "9月"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "户外",
        "自然"
      ],
      "transport": "AT",
      "hotspots": [
        {
          "area": "City Centre",
          "desc": "安全",
          "risk": "low"
        },
        {
          "area": "K Road",
          "desc": "红灯区",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Parnell",
        "Devonport"
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻奥克兰总领事馆",
      "phone": "+64-9-571-1980",
      "address": "588 Great South Rd, Auckland",
      "emergency": "+64-9-571-1980"
    },
    "hospital": {
      "name": "Auckland City Hospital",
      "phone": "+64-9-379-7440",
      "address": "2 Park Road, Auckland"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "Cuba Mall",
          "desc": "学生区",
          "risk": "low"
        },
        {
          "area": " Courtney Place",
          "desc": "夜生活",
          "risk": "low"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻新西兰大使馆",
      "phone": "+64-4-473-3514",
      "address": "28 Glenmore St, Wellington 6011",
      "emergency": "+64-4-473-3514"
    },
    "hospital": {
      "name": "Wellington Hospital",
      "phone": "+64-4-806-0999",
      "address": "Mein St, Newtown, Wellington"
    }
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
      "transport": "建议使用当地公共交通，方便又经济实惠。打车软件通常安全可靠。",
      "hotspots": [
        {
          "area": "市中心",
          "desc": "重建中",
          "risk": "low"
        }
      ]
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
    "safety_history": "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    "embassy": {
      "name": "中国驻克赖斯特彻奇总领事馆",
      "phone": "+64-3-379-4080",
      "address": "106A Victoria St, Christchurch",
      "emergency": "+64-3-379-4080"
    },
    "hospital": {
      "name": "Christchurch Hospital",
      "phone": "+64-3-364-0640",
      "address": "2 Riccarton Rd, Christchurch"
    }
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
          "name": "Poke Bowl",
          "price": "$10-20",
          "desc": "生鱼片碗"
        },
        {
          "name": "蒜虾",
          "price": "$15-30",
          "desc": "Garlic shrimp"
        },
        {
          "name": "椰子派",
          "price": "$5-10",
          "desc": "Coconut cream"
        },
        {
          "name": "刨冰",
          "price": "$5-12",
          "desc": "Shave ice"
        }
      ],
      "attractions": [
        {
          "name": "威基基",
          "desc": "海滩"
        },
        {
          "name": "珍珠港",
          "desc": "历史"
        },
        {
          "name": "钻石山",
          "desc": "景观"
        },
        {
          "name": "北海岸",
          "desc": "冲浪"
        }
      ],
      "festivals": [
        {
          "name": "草裙舞",
          "date": "夏季"
        },
        {
          "name": "冲浪",
          "date": "冬季"
        },
        {
          "name": "圣诞",
          "date": "12月"
        }
      ],
      "customs": [
        "小费",
        "海滩",
        "Aloha"
      ],
      "transport": "TheBus",
      "hotspots": [
        {
          "area": "Waikiki",
          "desc": "游客区安全",
          "risk": "低"
        },
        {
          "area": "Kalihi",
          "desc": "较乱",
          "risk": "中"
        }
      ],
      "safeAreas": [
        "Kahala",
        "Makapu"
      ]
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
    "safety_history": "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    "embassy": {
      "name": "中国驻洛杉矶总领事馆(管夏威夷)",
      "phone": "+1-213-807-8088",
      "address": "600 N State College Blvd, Pasadena",
      "emergency": "+1-213-807-8092"
    },
    "hospital": {
      "name": "Queens Medical Center",
      "phone": "+1-808-691-7111",
      "address": "1301 Punchbowl St, Honolulu"
    }
  }
};