// ============================================================
// SafeCity Global - 专业城市安全指南数据库 v4.0
// 全方位指数评分系统，包含紧急联系、区域安全、本地推荐
// ============================================================

var CITY_DATABASE = {
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
  }
};

// ============================================================
// 辅助函数和工具
// ============================================================

// 获取所有城市列表（用于搜索和展示）
var CITY_LIST = Object.keys(CITY_DATABASE).map(function(id) {
  var city = CITY_DATABASE[id];
  return {
    id: id,
    name: city.name,
    nameEn: city.nameEn,
    country: city.country,
    continent: city.continent,
    flag: city.flag,
    overallScore: city.safetyIndex.overall,
    grade: city.safetyIndex.grade
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
var CITY_INDEX = Object.keys(CITY_DATABASE).map(function(id) {
  var city = CITY_DATABASE[id];
  return {
    id: id,
    name: city.name,
    country: city.country,
    continent: city.continent,
    flag: city.flag,
    image: city.image,
    safetyScore: city.safetyIndex.overall,
    safetyGrade: city.safetyIndex.grade
  };
});

// 导出为全局变量
window.CITY_DATABASE = CITY_DATABASE;
window.CITY_LIST = CITY_LIST;
window.CITY_INDEX = CITY_INDEX;