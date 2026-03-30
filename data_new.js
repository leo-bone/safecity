// ============================================================
// SafeCity Global - 专业城市安全指南数据库 v4.0
// 全方位指数评分系统，包含紧急联系、区域安全、本地推荐
// ============================================================

var CITY_DATABASE_DETAIL = {
  // 东京示例 - 完整专业数据
  'tokyo': {
    // 基础信息
    "id": "tokyo",
    "name": "东京",
    "nameEn": "Tokyo", 
    "country": "日本",
    "continent": "亚洲",
    "flag": "🇯🇵",
    "lat": 35.6762,
    "lng": 139.6503,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    "population": "1400万",
    "language": "日语",
    "currency": "日元 (JPY)",
    "timezone": "UTC+9",
    "bestVisit": "3-4月（樱花季），10-11月（秋叶季）",
    
    // ========== 全方位指数评分系统 ==========
    "safetyIndex": {
      "overall": 92,
      "grade": "A+",
      "trend": "stable", // stable, improving, declining
      
      // 六个核心评分维度
      "dimensions": {
        "crimeSafety": {
          "score": 95,
          "grade": "A+",
          "description": "全球犯罪率最低的城市之一，暴力犯罪极少",
          "details": {
            "violentCrime": 8,      // 低
            "propertyCrime": 15,    // 低
            "corruption": 5,        // 极低
            "terrorismRisk": 10     // 低
          }
        },
        "healthMedical": {
          "score": 94,
          "grade": "A+",
          "description": "世界顶级的医疗体系，医院密度高，医疗质量卓越",
          "details": {
            "hospitalQuality": 95,
            "emergencyResponse": 90,
            "pharmacyDensity": 88,
            "vaccinationRate": 92
          }
        },
        "transportSafety": {
          "score": 96,
          "grade": "A+",
          "description": "公共交通全球最安全，交通事故率极低",
          "details": {
            "roadSafety": 94,
            "publicTransport": 98,
            "taxiSafety": 92,
            "walkingSafety": 95
          }
        },
        "naturalDisaster": {
          "score": 75,
          "grade": "B",
          "description": "地震和台风风险较高，但防灾体系完善",
          "details": {
            "earthquakeRisk": 65,   // 较高
            "typhoonRisk": 70,
            "tsunamiRisk": 60,
            "preparedness": 90      // 防灾准备充分
          }
        },
        "environmental": {
          "score": 88,
          "grade": "A",
          "description": "空气质量良好，水质优良，环境卫生标准高",
          "details": {
            "airQuality": 85,
            "waterSafety": 92,
            "foodSafety": 90,
            "sanitation": 88
          }
        },
        "socialStability": {
          "score": 90,
          "grade": "A",
          "description": "社会高度稳定，治安良好，社区凝聚力强",
          "details": {
            "politicalStability": 88,
            "socialCohesion": 92,
            "policeTrust": 94,
            "neighborhoodWatch": 85
          }
        }
      },
      
      // 历史趋势
      "trendHistory": [
        {"year": 2023, "score": 91},
        {"year": 2022, "score": 90},
        {"year": 2021, "score": 89},
        {"year": 2020, "score": 88}
      ]
    },
    
    // ========== 紧急联系信息 ==========
    "emergencyContacts": {
      // 紧急电话
      "phoneNumbers": {
        "police": "110",
        "ambulance": "119", 
        "fire": "119",
        "coastGuard": "118",
        "earthquakeInfo": "171"
      },
      
      // 重要机构
      "importantOrganizations": [
        {
          "name": "东京警察厅",
          "phone": "+81-3-3581-4321",
          "website": "https://www.keishicho.metro.tokyo.lg.jp",
          "description": "东京都警察总部"
        },
        {
          "name": "东京消防厅",
          "phone": "+81-3-3212-2119", 
          "website": "https://www.tfd.metro.tokyo.lg.jp",
          "description": "紧急消防救援"
        },
        {
          "name": "东京都保健所",
          "phone": "+81-3-5320-4580",
          "website": "https://www.fukushihoken.metro.tokyo.lg.jp",
          "description": "公共卫生与医疗咨询"
        }
      ],
      
      // 外国游客特别服务
      "foreignerServices": [
        {
          "name": "东京旅游咨询中心",
          "phone": "+81-3-3201-3331",
          "languages": ["英语", "中文", "韩语"],
          "hours": "9:00-17:00",
          "description": "多语言旅游协助"
        },
        {
          "name": "Japan Visitor Hotline",
          "phone": "+81-50-3816-2787",
          "languages": ["英语"],
          "hours": "24/7",
          "description": "24小时游客热线"
        }
      ],
      
      // 领事馆信息（中国游客）
      "consulates": [
        {
          "name": "中国驻日本大使馆",
          "address": "东京都港区元麻布3-4-33",
          "phone": "+81-3-3403-3388",
          "emergency": "+81-80-6552-4761",
          "website": "http://www.china-embassy.or.jp"
        }
      ]
    },
    
    // ========== 危险/安全区域 ==========
    "areaSafety": {
      "safestAreas": [
        {
          "name": "港区",
          "description": "高端商业和住宅区，治安极好，外国人友好",
          "safetyLevel": "A+",
          "features": ["大使馆集中", "国际学校", "高级餐厅", "购物中心"],
          "avoidAtNight": false
        },
        {
          "name": "目黑区",
          "description": "安静住宅区，犯罪率极低，适合家庭居住",
          "safetyLevel": "A+", 
          "features": ["公园众多", "社区氛围好", "咖啡馆文化"],
          "avoidAtNight": false
        },
        {
          "name": "世田谷区",
          "description": "最大住宅区，治安良好，生活便利",
          "safetyLevel": "A",
          "features": ["大型公园", "购物街", "家庭友好"],
          "avoidAtNight": false
        }
      ],
      
      "cautionAreas": [
        {
          "name": "新宿歌舞伎町",
          "description": "夜生活区，晚上可能有醉汉和推销人员",
          "safetyLevel": "B-",
          "risks": ["醉酒者", "推销骚扰", "扒手风险稍高"],
          "precautions": ["结伴而行", "注意随身物品", "避免深夜单独逗留"],
          "avoidAtNight": "女性建议避免深夜单独前往"
        },
        {
          "name": "上野阿美横町",
          "description": "繁忙市场区，人多拥挤，需注意扒手",
          "safetyLevel": "B",
          "risks": ["扒手", "拥挤", "交通混乱"],
          "precautions": ["钱包放前袋", "注意背包", "避免展示贵重物品"],
          "avoidAtNight": false
        }
      ],
      
      "dangerousAreas": [
        {
          "name": "无特别危险区域",
          "description": "东京整体治安优秀，没有特别危险的地区",
          "safetyLevel": "A-",
          "note": "相比其他国际大都市，东京没有真正的危险区域"
        }
      ]
    },
    
    // ========== 吃喝玩乐推荐 ==========
    "localRecommendations": {
      "foodDrink": [
        {
          "name": "筑地市场",
          "type": "市场/海鲜",
          "description": "世界著名的海鲜市场（现已部分搬迁），新鲜寿司和海鲜料理",
          "priceRange": "¥¥",
          "safetyTips": "市场拥挤，注意个人物品，生食确保新鲜",
          "mustTry": ["金枪鱼大腹寿司", "海胆丼", "烤扇贝"]
        },
        {
          "name": "一兰拉面",
          "type": "拉面",
          "description": "著名连锁拉面店，个人隔间设计，专注品尝美味",
          "priceRange": "¥",
          "safetyTips": "非常安全，24小时营业店铺需注意深夜出行",
          "mustTry": ["豚骨拉面", "溏心蛋", "抹茶杏仁豆腐"]
        }
      ],
      
      "attractions": [
        {
          "name": "东京塔/晴空塔",
          "type": "地标/观景",
          "description": "东京标志性建筑，360度城市全景",
          "bestTime": "日落时分",
          "safetyTips": "观景台人多拥挤，注意儿童安全",
          "localTip": "晴空塔的夜景更美，但门票较贵"
        },
        {
          "name": "明治神宫",
          "type": "文化/宗教",
          "description": "市中心的大型神社，宁静的森林步道",
          "bestTime": "清晨",
          "safetyTips": "宗教场所需保持安静，尊重当地习俗",
          "localTip": "周末可能有传统婚礼，可以安静观看"
        }
      ],
      
      "hiddenGems": [
        {
          "name": "代官山茑屋书店",
          "type": "文化/休闲",
          "description": "世界最美书店之一，融合书籍、音乐、咖啡",
          "whySpecial": "设计感强，环境优雅，适合安静阅读",
          "safetyTips": "非常安全，注意店内禁止拍照区域",
          "insiderTip": "二楼咖啡厅视野很好，适合工作或阅读"
        },
        {
          "name": "豪德寺招财猫神社",
          "type": "文化/奇特景点",
          "description": "成千上万只招财猫的独特神社",
          "whySpecial": "Instagram热门地点，拍照效果极佳",
          "safetyTips": "神社区域保持安静",
          "insiderTip": "清晨人少，光线适合拍照"
        }
      ],
      
      "nightlife": [
        {
          "name": "六本木新城",
          "type": "综合娱乐",
          "description": "高端购物、餐饮、观景一体化综合体",
          "safetyLevel": "A",
          "tips": "相对安全的夜生活区，适合家庭和游客",
          "warning": "周边酒吧街晚上可能有推销人员"
        }
      ]
    },
    
    // ========== 实用安全贴士 ==========
    "safetyTips": {
      "general": [
        "东京整体非常安全，但公共场所仍需注意个人物品",
        "地铁和JR线路极其准时和可靠，是最好出行方式",
        "大部分区域深夜步行也相对安全，但建议女性结伴",
        "遇到问题可寻找警察派出所（交番），警官通常友好"
      ],
      "forWomen": [
        "东京有针对女性的专用地铁车厢（女性专用车），早晚高峰可用",
        "深夜出租车安全，但建议使用正规出租车公司",
        "胶囊旅馆有女性专用楼层，安全有保障"
      ],
      "forFamilies": [
        "公共场所普遍有母婴室和儿童设施",
        "地铁和商场有电梯和坡道，婴儿车友好",
        "餐厅通常有儿童菜单和高脚椅"
      ],
      "emergencyProcedures": [
        "地震时：立即躲到桌下，保护头部，等震动停止",
        "拨打110报警，119急救/消防",
        "外国游客可拨打Japan Visitor Hotline寻求多语言帮助"
      ]
    },
    
    // ========== 数据来源和更新 ==========
    "dataSources": [
      "东京都警察厅犯罪统计（2024）",
      "世界卫生组织城市健康报告",
      "Numbeo城市安全指数",
      "日本国土交通省交通安全数据",
      "本地游客评价和反馈"
    ],
    "lastUpdated": "2026-03-30",
    "updateFrequency": "每月更新重大变化，每年全面修订"
  },
  
  // 新加坡示例（简化版，实际需要完整数据）
  'singapore': {
    "id": "singapore",
    "name": "新加坡",
    "nameEn": "Singapore",
    "country": "新加坡", 
    "continent": "亚洲",
    "flag": "🇸🇬",
    "lat": 1.3521,
    "lng": 103.8198,
    "image": "https://images.unsplash.com/photo-1531590878845-12627191e687?w=800&q=80",
    
    // 简化安全指数
    "safetyIndex": {
      "overall": 95,
      "grade": "A+",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 98, "grade": "A+"},
        "healthMedical": {"score": 96, "grade": "A+"},
        "transportSafety": {"score": 97, "grade": "A+"},
        "naturalDisaster": {"score": 85, "grade": "A-"},
        "environmental": {"score": 90, "grade": "A"},
        "socialStability": {"score": 94, "grade": "A+"}
      }
    },
    
    // 紧急联系
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "999",
        "ambulance": "995", 
        "fire": "995"
      }
    },
    
    // 区域安全
    "areaSafety": {
      "safestAreas": [
        {"name": "乌节路", "safetyLevel": "A+", "description": "高端购物区，治安极好"}
      ],
      "cautionAreas": [
        {"name": "芽笼", "safetyLevel": "B", "description": "红灯区，晚上需谨慎"}
      ]
    },
    
    // 本地推荐
    "localRecommendations": {
      "foodDrink": [
        {"name": "天天海南鸡饭", "type": "当地美食", "description": "米其林推荐平民美食"}
      ]
    }
  },
  
  // ========== 伦敦 - 英国 ==========
  'london': {
    "id": "london",
    "name": "伦敦",
    "nameEn": "London",
    "country": "英国",
    "continent": "欧洲",
    "flag": "🇬🇧",
    "lat": 51.5074,
    "lng": -0.1278,
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    "population": "890万",
    "language": "英语",
    "currency": "英镑 (GBP)",
    "timezone": "UTC+0",
    "bestVisit": "5-6月（夏季），12月（圣诞市集）",
    
    "safetyIndex": {
      "overall": 72,
      "grade": "B",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 65, "grade": "B-", "description": "犯罪率中等，主要集中于特定区域"},
        "healthMedical": {"score": 88, "grade": "A-", "description": "世界级医疗系统NHS，急救响应迅速"},
        "transportSafety": {"score": 82, "grade": "A-", "description": "公共交通发达，地铁网络完善，需注意扒手"},
        "naturalDisaster": {"score": 78, "grade": "B+", "description": "自然灾害风险较低"},
        "environmental": {"score": 70, "grade": "B", "description": "空气质量中等"},
        "socialStability": {"score": 75, "grade": "B", "description": "社会整体稳定"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "999",
        "ambulance": "999",
        "fire": "999",
        "nonEmergency": "101"
      },
      "importantOrganizations": [
        {"name": "伦敦警察厅", "phone": "+44-20-7402-2222", "description": "伦敦都市警察"},
        {"name": "NHS紧急热线", "phone": "111", "description": "医疗咨询"}
      ],
      "consulates": [
        {"name": "中国驻英国大使馆", "address": "伦敦市皮卡迪利广场31号", "phone": "+44-20-7636-9030", "emergency": "+44-20-7438-4046"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "肯辛顿-切尔西", "description": "伦敦最富裕安全的区域", "safetyLevel": "A", "features": ["高档住宅", "博物馆", "皇家公园"]},
        {"name": "威斯敏斯特", "description": "市中心政府区，治安良好", "safetyLevel": "A-", "features": ["国会大厦", "白金汉宫", "特拉法加广场"]},
        {"name": "里士满", "description": "优雅住宅区，绿化良好", "safetyLevel": "A", "features": ["里士满公园", "泰晤士河"]}
      ],
      "cautionAreas": [
        {"name": "伦敦东部", "description": "部分区域犯罪率较高", "safetyLevel": "B-", "risks": ["入室盗窃", "抢夺"]},
        {"name": "斯托克纽因顿", "description": "需注意夜间安全", "safetyLevel": "B"}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "炸鱼薯条", "type": "英式经典", "description": "伦敦经典美食", "mustTry": ["炸鳕鱼", "薯条", "豌豆泥"]}
      ],
      "attractions": [
        {"name": "大英博物馆", "type": "文化/博物馆", "description": "世界顶级博物馆", "bestTime": "上午"}
      ]
    },
    
    "safetyTips": {
      "general": ["伦敦地铁需注意扒手", "夜间出行选择正规出租车", "人多的景点需保管好财物"],
      "forWomen": ["乘坐地铁女性专用车厢", "夜间避免独自前往偏僻地区"]
    }
  },
  
  // ========== 纽约 - 美国 ==========
  'new_york': {
    "id": "new_york",
    "name": "纽约",
    "nameEn": "New York",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 40.7128,
    "lng": -74.0060,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    "population": "840万",
    "language": "英语",
    "currency": "美元 (USD)",
    "timezone": "UTC-5",
    "bestVisit": "4-6月（春季），9-11月（秋季）",
    
    "safetyIndex": {
      "overall": 70,
      "grade": "B",
      "trend": "improving",
      "dimensions": {
        "crimeSafety": {"score": 65, "grade": "B-", "description": "犯罪率较前几年有所下降，但仍需注意"},
        "healthMedical": {"score": 85, "grade": "A-", "description": "世界顶级医疗资源"},
        "transportSafety": {"score": 75, "grade": "B+", "description": "地铁系统庞大，需注意扒窃"},
        "naturalDisaster": {"score": 70, "grade": "B", "description": "冬季暴风雪，夏季飓风风险"},
        "environmental": {"score": 68, "grade": "B-", "description": "空气质量一般"},
        "socialStability": {"score": 72, "grade": "B", "description": "城市充满活力，偶有抗议活动"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "911",
        "ambulance": "911",
        "fire": "911"
      },
      "importantOrganizations": [
        {"name": "纽约市警察局", "phone": "+1-212-555-1000", "description": "NYPD总部"},
        {"name": "纽约市消防局", "phone": "+1-212-555-1900", "description": "FDNY"}
      ],
      "consulates": [
        {"name": "中国驻纽约总领事馆", "address": "曼哈顿42街520号", "phone": "+1-212-244-9392"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "曼哈顿上城区", "description": "中央公园以北的住宅区", "safetyLevel": "A-", "features": ["哥伦比亚大学", " Riverside Park"]},
        {"name": "布鲁克林 Heights", "description": "优雅社区，治安良好", "safetyLevel": "A-", "features": ["布鲁克林大桥", "步行街"]},
        {"name": "皇后区森林 Hills", "description": "安静住宅区", "safetyLevel": "A"}
      ],
      "cautionAreas": [
        {"name": "时代广场", "description": "游客众多，扒窃风险高", "safetyLevel": "B", "risks": ["扒手", "推销"]},
        {"name": "地铁内", "description": "需注意随身物品", "safetyLevel": "B-", "risks": ["扒窃"]}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "Shake Shack", "type": "汉堡", "description": "纽约知名汉堡店", "mustTry": ["经典汉堡", "奶昔"]},
        {"name": "中央公园热狗", "type": "街头美食", "description": "经典纽约街头美食"}
      ],
      "attractions": [
        {"name": "自由女神像", "type": "地标", "description": "纽约标志性景点", "bestTime": "清晨"},
        {"name": "中央公园", "type": "公园", "description": "城市绿洲", "bestTime": "早晨或傍晚"}
      ]
    },
    
    "safetyTips": {
      "general": ["地铁出行注意扒手", "夜间避开偏僻街道", "保管好贵重物品"],
      "forWomen": ["乘坐地铁注意安全", "夜间打车使用正规app"]
    }
  },
  
  // ========== 巴黎 - 法国 ==========
  'paris': {
    "id": "paris",
    "name": "巴黎",
    "nameEn": "Paris",
    "country": "法国",
    "continent": "欧洲",
    "flag": "🇫🇷",
    "lat": 48.8566,
    "lng": 2.3522,
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    "population": "216万",
    "language": "法语",
    "currency": "欧元 (EUR)",
    "timezone": "UTC+1",
    "bestVisit": "4-10月（温暖季节）",
    
    "safetyIndex": {
      "overall": 74,
      "grade": "B",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 70, "grade": "B", "description": "主要财产犯罪，暴力风险低"},
        "healthMedical": {"score": 88, "grade": "A-", "description": "优秀医疗系统"},
        "transportSafety": {"score": 80, "grade": "A-", "description": "地铁系统安全"},
        "naturalDisaster": {"score": 75, "grade": "B", "description": "较少自然灾害"},
        "environmental": {"score": 75, "grade": "B", "description": "空气质量一般"},
        "socialStability": {"score": 70, "grade": "B", "description": "偶有抗议活动"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "17",
        "ambulance": "15",
        "fire": "18",
        "euEmergency": "112"
      },
      "consulates": [
        {"name": "中国驻法国大使馆", "address": "巴黎第八区乔治五世大街20号", "phone": "+33-1-4952-1950"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "第十六区", "description": "高档住宅区，埃菲尔铁塔附近", "safetyLevel": "A", "features": ["埃菲尔铁塔", "布洛涅森林"]},
        {"name": "第七区", "description": "旅游核心区，治安良好", "safetyLevel": "A-", "features": ["战神广场", "荣军院"]},
        {"name": "玛黑区", "description": "历史文化区", "safetyLevel": "B+", "features": ["孚日广场", "博物馆"]}
      ],
      "cautionAreas": [
        {"name": "北站/东站周边", "description": "移民聚集区，较混乱", "safetyLevel": "B-", "risks": ["偷盗", "抢劫"]},
        {"name": "十八区部分区域", "description": "蒙马特高地夜间需注意", "safetyLevel": "B"}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "法棍三明治", "type": "快餐", "description": "巴黎经典快餐", "mustTry": ["火腿奶酪", "鸡肉"]},
        {"name": "马卡龙", "type": "甜点", "description": "法式精致甜点", "mustTry": ["Ladurée", "Pierre Hermé"]}
      ]
    },
    
    "safetyTips": {
      "general": ["景点周边小心扒手", "地铁上注意财物", "夜间避免逗留火车站周边"]
    }
  },
  
  // ========== 香港 - 中国 ==========
  'hong_kong': {
    "id": "hong_kong",
    "name": "香港",
    "nameEn": "Hong Kong",
    "country": "中国香港",
    "continent": "亚洲",
    "flag": "🇭🇰",
    "lat": 22.3193,
    "lng": 114.1694,
    "image": "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
    "population": "750万",
    "language": "粤语/普通话/英语",
    "currency": "港币 (HKD)",
    "timezone": "UTC+8",
    "bestVisit": "10-12月（秋季），3-4月（春季）",
    
    "safetyIndex": {
      "overall": 85,
      "grade": "A-",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 88, "grade": "A-", "description": "治安良好，犯罪率低"},
        "healthMedical": {"score": 90, "grade": "A", "description": "优质医疗资源"},
        "transportSafety": {"score": 92, "grade": "A+", "description": "高效公共交通"},
        "naturalDisaster": {"score": 65, "grade": "B", "description": "台风季节需注意"},
        "environmental": {"score": 78, "grade": "B+", "description": "城市绿化好"},
        "socialStability": {"score": 80, "grade": "A-", "description": "社会稳定"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "999",
        "ambulance": "999",
        "fire": "999"
      },
      "consulates": [
        {"name": "香港中国旅行社", "phone": "+852-2525-6141", "description": "中国居民服务"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "中环", "description": "金融中心，治安极好", "safetyLevel": "A+", "features": ["国际金融中心", "太平山顶"]},
        {"name": "南区", "description": "海滩和住宅区", "safetyLevel": "A", "features": ["浅水湾", "赤柱"]},
        {"name": "大屿山", "description": "郊野公园", "safetyLevel": "A"}
      ],
      "cautionAreas": [
        {"name": "旺角", "description": "人流密集，需防扒窃", "safetyLevel": "B+", "risks": ["扒手"]}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "港式茶餐厅", "type": "当地美食", "description": "正宗粤菜", "mustTry": ["奶茶", "菠萝包", "干炒牛河"]}
      ]
    },
    
    "safetyTips": {
      "general": ["公共交通便利安全", "街头美食丰富", "台风季注意天气"]
    }
  },
  
  // ========== 首尔 - 韩国 ==========
  'seoul': {
    "id": "seoul",
    "name": "首尔",
    "nameEn": "Seoul",
    "country": "韩国",
    "continent": "亚洲",
    "flag": "🇰🇷",
    "lat": 37.5665,
    "lng": 126.9780,
    "image": "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
    "population": "977万",
    "language": "韩语",
    "currency": "韩元 (KRW)",
    "timezone": "UTC+9",
    "bestVisit": "3-5月（春季），9-11月（秋季）",
    
    "safetyIndex": {
      "overall": 88,
      "grade": "A-",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 90, "grade": "A", "description": "治安良好，暴力犯罪少"},
        "healthMedical": {"score": 88, "grade": "A-", "description": "医疗水平高"},
        "transportSafety": {"score": 92, "grade": "A+", "description": "世界级公共交通"},
        "naturalDisaster": {"score": 70, "grade": "B", "description": "台风季节注意"},
        "environmental": {"score": 80, "grade": "A-", "description": "空气质量改善"},
        "socialStability": {"score": 88, "grade": "A-", "description": "社会稳定"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "112",
        "ambulance": "119",
        "fire": "119"
      },
      "consulates": [
        {"name": "中国驻韩国大使馆", "address": "首尔市龙山区梨泰院路546号", "phone": "+82-2-738-1038"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "江南区", "description": "高档商业区，明星经常出没", "safetyLevel": "A+", "features": ["狎鸥亭", "清潭洞"]},
        {"name": "钟路区", "description": "传统市中心", "safetyLevel": "A", "features": ["景福宫", "仁寺洞"]},
        {"name": "麻浦区", "description": "弘大商圈，年轻人天堂", "safetyLevel": "A-"}
      ],
      "cautionAreas": [
        {"name": "东大门", "description": "夜间批发市场，较混乱", "safetyLevel": "B+", "risks": ["夜间醉汉"]}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "烤肉", "type": "韩式烧烤", "description": "必尝韩国美食", "mustTry": ["五花肉", "烤肉"]},
        {"name": "参鸡汤", "type": "传统料理", "description": "养生美食"}
      ]
    },
    
    "safetyTips": {
      "general": ["深夜地铁安全", "女性独自出行也较安全", "注意保管财物"]
    }
  },
  
  // ========== 迪拜 - 阿联酋 ==========
  'dubai': {
    "id": "dubai",
    "name": "迪拜",
    "nameEn": "Dubai",
    "country": "阿联酋",
    "continent": "亚洲",
    "flag": "🇦🇪",
    "lat": 25.2048,
    "lng": 55.2708,
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    "population": "340万",
    "language": "阿拉伯语/英语",
    "currency": "迪拉姆 (AED)",
    "timezone": "UTC+4",
    "bestVisit": "11-3月（冬季凉爽）",
    
    "safetyIndex": {
      "overall": 85,
      "grade": "A-",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 90, "grade": "A", "description": "犯罪率极低，法律严格"},
        "healthMedical": {"score": 88, "grade": "A-", "description": "世界级医疗设施"},
        "transportSafety": {"score": 85, "grade": "A-", "description": "交通规范，驾车需注意"},
        "naturalDisaster": {"score": 60, "grade": "B", "description": "沙漠气候，极端高温"},
        "environmental": {"score": 70, "grade": "B", "description": "沙漠城市，沙尘较多"},
        "socialStability": {"score": 88, "grade": "A-", "description": "社会安定"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "999",
        "ambulance": "998",
        "fire": "997"
      },
      "consulates": [
        {"name": "中国驻迪拜总领事馆", "address": "迪拜市Al Wasl区", "phone": "+971-4-394-4733"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "朱美拉棕榈岛", "description": "豪华度假区，治安一流", "safetyLevel": "A+", "features": ["亚特兰蒂斯", "海滩"]},
        {"name": "迪拜市中心", "description": "哈利法塔周边", "safetyLevel": "A", "features": ["哈利法塔", "迪拜Mall"]},
        {"name": "迪拜国际金融中心", "description": "商业核心区", "safetyLevel": "A+"}
      ],
      "cautionAreas": []
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "沙瓦玛", "type": "中东美食", "description": "经典阿拉伯烤肉卷", "mustTry": ["鸡肉沙瓦玛", "羊肉沙瓦玛"]},
        {"name": "骆驼奶", "type": "特色饮品", "description": "当地特色"}
      ]
    },
    
    "safetyTips": {
      "general": ["斋月期间注意公共行为", "夏季避免长时间户外活动", "女性穿着得体"]
    }
  },
  
  // ========== 悉尼 - 澳大利亚 ==========
  'sydney': {
    "id": "sydney",
    "name": "悉尼",
    "nameEn": "Sydney",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -33.8688,
    "lng": 151.2093,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    "population": "530万",
    "language": "英语",
    "currency": "澳元 (AUD)",
    "timezone": "UTC+10",
    "bestVisit": "9-11月（春季），3-5月（秋季）",
    
    "safetyIndex": {
      "overall": 82,
      "grade": "A-",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 80, "grade": "A-", "description": "治安良好，财产犯罪较少"},
        "healthMedical": {"score": 90, "grade": "A", "description": "优秀医疗系统"},
        "transportSafety": {"score": 85, "grade": "A-", "description": "公共交通发达"},
        "naturalDisaster": {"score": 65, "grade": "B", "description": "丛林火灾季节注意"},
        "environmental": {"score": 85, "grade": "A-", "description": "空气质量优良"},
        "socialStability": {"score": 85, "grade": "A-", "description": "社会稳定多元"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "000",
        "ambulance": "000",
        "fire": "000"
      },
      "consulates": [
        {"name": "中国驻悉尼总领事馆", "address": "悉尼市Kent街539号", "phone": "+61-2-9228-1688"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "北悉尼", "description": "高档住宅区，海港美景", "safetyLevel": "A", "features": ["海港大桥", "月神公园"]},
        {"name": "悉尼CBD", "description": "商业中心区", "safetyLevel": "A-", "features": ["歌剧院", "环形码头"]},
        {"name": " Mosman", "description": "富裕郊区", "safetyLevel": "A"}
      ],
      "cautionAreas": [
        {"name": "部分西部郊区", "description": "夜间需注意", "safetyLevel": "B+"}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "澳式咖啡", "type": "饮品", "description": "悉尼咖啡文化浓郁", "mustTry": ["Flat White"]},
        {"name": "海鲜", "type": "美食", "description": "新鲜海产", "mustTry": ["悉尼岩石区龙虾"]}
      ]
    },
    
    "safetyTips": {
      "general": ["注意防晒", "海滩注意安全", "夜间市中心安全"]
    }
  },
  
  // ========== 曼谷 - 泰国 ==========
  'bangkok': {
    "id": "bangkok",
    "name": "曼谷",
    "nameEn": "Bangkok",
    "country": "泰国",
    "continent": "亚洲",
    "flag": "🇹🇭",
    "lat": 13.7563,
    "lng": 100.5018,
    "image": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    "population": "830万",
    "language": "泰语",
    "currency": "泰铢 (THB)",
    "timezone": "UTC+7",
    "bestVisit": "11-2月（凉季）",
    
    "safetyIndex": {
      "overall": 72,
      "grade": "B",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 65, "grade": "B-", "description": "扒窃和诈骗较多，暴力犯罪少"},
        "healthMedical": {"score": 78, "grade": "B+", "description": "医疗旅游热门目的地"},
        "transportSafety": {"score": 60, "grade": "B-", "description": "交通混乱，摩托车多"},
        "naturalDisaster": {"score": 65, "grade": "B", "description": "洪水季节注意"},
        "environmental": {"score": 55, "grade": "C+", "description": "空气质量较差"},
        "socialStability": {"score": 78, "grade": "B+", "description": "民风友善"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "191",
        "ambulance": "1669",
        "fire": "199"
      },
      "consulates": [
        {"name": "中国驻泰国大使馆", "address": "曼谷市拉差达披色路57号", "phone": "+66-2-245-7032"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "素坤逸路", "description": "高端酒店和购物中心区", "safetyLevel": "B+", "features": ["商场", "餐厅"]},
        {"name": "是隆区", "description": "商业中心", "safetyLevel": "B+", "features": ["写字楼", "酒店"]},
        {"name": "湄南河畔", "description": "旅游区", "safetyLevel": "B"}
      ],
      "cautionAreas": [
        {"name": "考山路", "description": "背包客区，较混乱", "safetyLevel": "B-", "risks": ["骗子", "高价"]},
        {"name": "红灯区", "description": "芭提雅等地需谨慎", "safetyLevel": "C+"}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "泰式炒河粉", "type": "街头美食", "description": "必尝泰式经典", "mustTry": ["Pad Thai"]},
        {"name": "冬阴功汤", "type": "汤品", "description": "泰式酸辣汤", "mustTry": ["冬阴功"]},
        {"name": "泰式按摩", "type": "体验", "description": "知名体验"}
      ]
    },
    
    "safetyTips": {
      "general": ["街头食物注意卫生", "打车议价", "尊重皇室"],
      "forWomen": ["穿着得体参观寺庙", "夜间避免独自出行"]
    }
  },
  
  // ========== 洛杉矶 - 美国 ==========
  'los_angeles': {
    "id": "los_angeles",
    "name": "洛杉矶",
    "nameEn": "Los Angeles",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 34.0522,
    "lng": -118.2437,
    "image": "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80",
    "population": "390万",
    "language": "英语/西班牙语",
    "currency": "美元 (USD)",
    "timezone": "UTC-8",
    "bestVisit": "3-5月（春季），9-11月（秋季）",
    
    "safetyIndex": {
      "overall": 68,
      "grade": "B-",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 60, "grade": "B-", "description": "不同区域差异大"},
        "healthMedical": {"score": 85, "grade": "A-", "description": "世界级医疗"},
        "transportSafety": {"score": 65, "grade": "B", "description": "自驾为主，需注意交通安全"},
        "naturalDisaster": {"score": 60, "grade": "B", "description": "地震风险，山火"},
        "environmental": {"score": 55, "grade": "C+", "description": "空气质量较差"},
        "socialStability": {"score": 70, "grade": "B", "description": "多元化城市"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "911",
        "ambulance": "911",
        "fire": "911"
      },
      "consulates": [
        {"name": "中国驻洛杉矶总领事馆", "address": "洛杉矶市Shatto Place 500号", "phone": "+1-213-807-8088"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "比佛利山庄", "description": "好莱坞豪宅区", "safetyLevel": "A-", "features": ["罗迪欧大道"]},
        {"name": "圣莫尼卡", "description": "海滩城市，适宜家庭", "safetyLevel": "B+", "features": ["海滩", "码头"]},
        {"name": "马里布", "description": "海滨豪宅区", "safetyLevel": "A-"}
      ],
      "cautionAreas": [
        {"name": "市中心Skid Row", "description": "流浪汉聚集区", "safetyLevel": "C", "risks": ["无家可归者"]},
        {"name": "南洛杉矶", "description": "治安较差", "safetyLevel": "C"}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "In-N-Out Burger", "type": "汉堡", "description": "加州经典汉堡", "mustTry": ["Double-Double"]},
        {"name": "墨西哥卷饼", "type": "美食", "description": "加州多元美食"}
      ]
    },
    
    "safetyTips": {
      "general": ["租车自驾需注意", "山区注意山火", "贵重物品不放车内"]
    }
  },
  
  // ========== 柏林 - 德国 ==========
  'berlin': {
    "id": "berlin",
    "name": "柏林",
    "nameEn": "Berlin",
    "country": "德国",
    "continent": "欧洲",
    "flag": "🇩🇪",
    "lat": 52.5200,
    "lng": 13.4050,
    "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
    "population": "370万",
    "language": "德语",
    "currency": "欧元 (EUR)",
    "timezone": "UTC+1",
    "bestVisit": "5-9月（夏季）",
    
    "safetyIndex": {
      "overall": 80,
      "grade": "A-",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 82, "grade": "A-", "description": "治安良好，近年有所改善"},
        "healthMedical": {"score": 90, "grade": "A", "description": "世界级医疗系统"},
        "transportSafety": {"score": 85, "grade": "A-", "description": "公共交通高效"},
        "naturalDisaster": {"score": 75, "grade": "B", "description": "较少自然灾害"},
        "environmental": {"score": 82, "grade": "A-", "description": "环保城市"},
        "socialStability": {"score": 80, "grade": "A-", "description": "社会稳定"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "110",
        "ambulance": "112",
        "fire": "112",
        "euEmergency": "112"
      },
      "consulates": [
        {"name": "中国驻德国大使馆", "address": "柏林市Märkisches Ufer 54号", "phone": "+49-30-27588-0"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "蒂尔加滕区", "description": "使馆区和富人区", "safetyLevel": "A", "features": ["勃兰登堡门", "菩提树下大街"]},
        {"name": "夏洛腾堡区", "description": "高档住宅区", "safetyLevel": "A-", "features": ["威廉皇帝纪念教堂"]},
        {"name": "普伦茨劳贝格", "description": "时尚社区", "safetyLevel": "B+"}
      ],
      "cautionAreas": [
        {"name": "亚历山大广场", "description": "旅游区扒窃较多", "safetyLevel": "B", "risks": ["扒手"]}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "咖喱香肠", "type": "街头美食", "description": "柏林经典", "mustTry": ["Currywurst"]},
        {"name": "德国啤酒", "type": "饮品", "description": "世界闻名", "mustTry": ["小麦啤酒"]}
      ]
    },
    
    "safetyTips": {
      "general": ["地铁需购票", "自行车道注意", "冬季注意保暖"]
    }
  },
  
  // ========== 阿姆斯特丹 - 荷兰 ==========
  'amsterdam': {
    "id": "amsterdam",
    "name": "阿姆斯特丹",
    "nameEn": "Amsterdam",
    "country": "荷兰",
    "continent": "欧洲",
    "flag": "🇳🇱",
    "lat": 52.3676,
    "lng": 4.9041,
    "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
    "population": "87万",
    "language": "荷兰语/英语",
    "currency": "欧元 (EUR)",
    "timezone": "UTC+1",
    "bestVisit": "4-10月（春季郁金香）",
    
    "safetyIndex": {
      "overall": 78,
      "grade": "B+",
      "trend": "stable",
      "dimensions": {
        "crimeSafety": {"score": 72, "grade": "B", "description": "毒品相关犯罪需注意"},
        "healthMedical": {"score": 88, "grade": "A-", "description": "优秀医疗"},
        "transportSafety": {"score": 82, "grade": "A-", "description": "自行车王国"},
        "naturalDisaster": {"score": 80, "grade": "A-", "description": "洪水风险但防护好"},
        "environmental": {"score": 85, "grade": "A-", "description": "环保优秀"},
        "socialStability": {"score": 80, "grade": "A-", "description": "包容开放"}
      }
    },
    
    "emergencyContacts": {
      "phoneNumbers": {
        "police": "112",
        "ambulance": "112",
        "fire": "112"
      },
      "consulates": [
        {"name": "中国驻荷兰大使馆", "address": "海牙市Prins Willem Alexanderstraat 5号", "phone": "+31-70-306-5061"}
      ]
    },
    
    "areaSafety": {
      "safestAreas": [
        {"name": "Oude Pijp", "description": "时尚社区", "safetyLevel": "B+"},
        {"name": "De Pijp", "description": "博物馆区", "safetyLevel": "B+", "features": ["梵高博物馆"]},
        {"name": "Plantage", "description": "绿意盎然", "safetyLevel": "A-"}
      ],
      "cautionAreas": [
        {"name": "红灯区", "description": "注意扒手", "safetyLevel": "B-", "risks": ["扒手"]},
        {"name": "中央车站周边", "description": "旅游陷阱", "safetyLevel": "B"}
      ]
    },
    
    "localRecommendations": {
      "foodDrink": [
        {"name": "荷兰松饼", "type": "甜点", "description": "经典美食", "mustTry": ["Poffertjes"]},
        {"name": "荷兰啤酒", "type": "饮品", "description": "修道院啤酒"}
      ]
    },
    
    "safetyTips": {
      "general": ["自行车注意", "红灯区夜晚安全", "大麻合法但有限制"]
    }
  }
};

// ============================================================
// 辅助函数和工具
// ============================================================

// 获取所有城市列表（用于搜索和展示）
var CITY_LIST = Object.keys(CITY_DATABASE_DETAIL).map(function(id) {
  var city = CITY_DATABASE_DETAIL[id];
  return {
    id: id,
    name: city.name,
    nameEn: city.nameEn,
    country: city.country,
    continent: city.continent,
    flag: city.flag,
    overallScore: city.safetyIndex?.overall || 70,
    grade: city.safetyIndex?.grade || 'B'
  };
});

// 按评分排序
CITY_LIST.sort(function(a, b) {
  return b.overallScore - a.overallScore;
});

// 获取城市排名
CITY_LIST.forEach(function(city, index) {
  city.rank = index + 1;
});

// 创建CITY_INDEX兼容旧代码
var CITY_INDEX = Object.keys(CITY_DATABASE_DETAIL).map(function(id) {
  var city = CITY_DATABASE_DETAIL[id];
  return {
    id: id,
    name: city.name,
    country: city.country,
    continent: city.continent,
    flag: city.flag,
    image: city.image,
    safetyScore: city.safetyIndex?.overall || 70,
    safetyGrade: city.safetyIndex?.grade || 'B'
  };
});

// 导出为全局变量
window.CITY_DATABASE_DETAIL = CITY_DATABASE_DETAIL;
window.CITY_DATABASE = CITY_DATABASE_DETAIL; // 兼容：让 index.html 也能获取到数据
window.CITY_LIST = CITY_LIST;
window.CITY_INDEX = CITY_INDEX;