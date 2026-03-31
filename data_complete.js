// ============================================================
// SafeCity Global - 全球城市安全数据库 v5.0 (完整版)
// 包含125个全球主要城市，详细生活旅行信息
// 更新时间: 2026-03-31T15:26:37.297Z
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
      }
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
      "police": "110",
      "ambulance": "119",
      "fire": "119"
    },
    "lifestyle": {
      "food": [
        {
          "name": "寿司",
          "type": "日本料理",
          "price": "¥2,000-5,000",
          "desc": "新鲜生鱼片，日本传统料理的代表",
          "tip": "建议选择有「刺身通」认证的店铺"
        },
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
      }
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "lifestyle": {
      "food": [
        {
          "name": "海南鸡饭",
          "type": "新加坡菜",
          "price": "SGD4-6",
          "desc": "香滑鸡肉配上特制米饭",
          "tip": "小贩中心更有地道风味"
        },
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
          "name": "韩式烤肉",
          "type": "烧烤",
          "price": "₩20,000-40,000",
          "desc": "炭火烤制的优质牛肉，配泡菜、生菜、大蒜",
          "tip": "搭配烧酒更佳，不同部位价格差异很大"
        },
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
          "name": "寿司",
          "type": "日本料理",
          "price": "¥2,000-5,000",
          "desc": "新鲜生鱼片配醋饭，日本料理的代表",
          "tip": "建议选择有「刺身通」认证的店铺，每日更新鱼获信息"
        },
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
    }
  }
};