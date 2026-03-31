// ============================================================
// SafeCity Global - 增强版数据结构 v5.0
// 包含50+个安全细分指标和详细的实用信息
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

// 安全指标维度定义
var SAFETY_DIMENSIONS = {
  // 犯罪安全 (12项)
  "violent_crime": { name: "暴力犯罪", icon: "🔫", category: "crime" },
  "property_crime": { name: "财产犯罪", icon: "💰", category: "crime" },
  "theft": { name: "盗窃", icon: "👜", category: "crime" },
  "fraud": { name: "诈骗", icon: "📱", category: "crime" },
  "street_safety": { name: "街道安全", icon: "🛣️", category: "crime" },
  "night_safety": { name: "夜间安全", icon: "🌙", category: "crime" },
  "tourist_safety": { name: "游客安全", icon: "🎒", category: "crime" },
  "women_safety": { name: "女性安全", icon: "👩", category: "crime" },
  "child_safety": { name: "儿童安全", icon: "👶", category: "crime" },
  "corruption": { name: "腐败程度", icon: "🏛️", category: "crime" },
  "terrorism": { name: "恐怖主义", icon: "💣", category: "crime" },
  "gang_activity": { name: "帮派活动", icon: "🚨", category: "crime" },
  
  // 交通安全 (10项)
  "road_safety": { name: "道路安全", icon: "🚗", category: "transport" },
  "public_transport": { name: "公共交通", icon: "🚇", category: "transport" },
  "taxi_safety": { name: "出租车安全", icon: "🚕", category: "transport" },
  "air_safety": { name: "航空安全", icon: "✈️", category: "transport" },
  "traffic_accidents": { name: "交通事故", icon: "🚧", category: "transport" },
  "driving_laws": { name: "交通法规", icon: "📋", category: "transport" },
  "vehicle_security": { name: "车辆安全", icon: "🔐", category: "transport" },
  "pedestrian_safety": { name: "行人安全", icon: "🚶", category: "transport" },
  "bicycle_safety": { name: "自行车安全", icon: "🚲", category: "transport" },
  "traffic_congestion": { name: "交通拥堵", icon: "🚦", category: "transport" },
  
  // 医疗健康 (8项)
  "medical_quality": { name: "医疗质量", icon: "🏥", category: "health" },
  "hospital_access": { name: "医院便利性", icon: "🚑", category: "health" },
  "emergency_response": { name: "急救响应", icon: "🆘", category: "health" },
  "medicine_cost": { name: "医疗费用", icon: "💊", category: "health" },
  "health_insurance": { name: "医疗保险", icon: "📄", category: "health" },
  "disease_risk": { name: "疾病风险", icon: "🦠", category: "health" },
  "food_safety": { name: "食品安全", icon: "🍜", category: "health" },
  "water_quality": { name: "水质安全", icon: "💧", category: "health" },
  
  // 自然灾害 (8项)
  "earthquake_risk": { name: "地震风险", icon: "🌋", category: "natural" },
  "flood_risk": { name: "洪水风险", icon: "🌊", category: "natural" },
  "hurricane_risk": { name: "飓风风险", icon: "🌀", category: "natural" },
  "wildfire_risk": { name: "野火风险", icon: "🔥", category: "natural" },
  "tsunami_risk": { name: "海啸风险", icon: "🌊", category: "natural" },
  "landslide_risk": { name: "山体滑坡", icon: "⛰️", category: "natural" },
  "extreme_weather": { name: "极端天气", icon: "⚡", category: "natural" },
  "volcanic_risk": { name: "火山风险", icon: "🌋", category: "natural" },
  
  // 其他安全 (12项)
  "political_stability": { name: "政治稳定", icon: "⚖️", category: "other" },
  "economic_stability": { name: "经济稳定", icon: "💱", category: "other" },
  "social_inequality": { name: "社会不平等", icon: "📊", category: "other" },
  "drug_problem": { name: "毒品问题", icon: "💊", category: "other" },
  "gun_control": { name: "枪支管制", icon: "🔫", category: "other" },
  "pollution": { name: "环境污染", icon: "🏭", category: "other" },
  "noise_level": { name: "噪音水平", icon: "🔊", category: "other" },
  "internet_freedom": { name: "网络自由", icon: "🌐", category: "other" },
  "lgbtq_safety": { name: "LGBTQ安全", icon: "🏳️‍🌈", category: "other" },
  "religious_freedom": { name: "宗教自由", icon: "⛪", category: "other" },
  "immigration": { name: "移民政策", icon: "🛂", category: "other" },
  "cybersecurity": { name: "网络安全", icon: "💻", category: "other" }
};

// 增强版城市数据模板
var CITY_DATABASE_ENHANCED = {
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
    
    // 基础安全评分
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
    
    // 50+个细分指标评分 (0-100分)
    "details": {
      // 犯罪安全
      "violent_crime": 85,
      "property_crime": 82,
      "theft": 78,
      "fraud": 80,
      "street_safety": 83,
      "night_safety": 75,
      "tourist_safety": 85,
      "women_safety": 88,
      "child_safety": 90,
      "corruption": 75,
      "terrorism": 85,
      "gang_activity": 82,
      
      // 交通安全
      "road_safety": 72,
      "public_transport": 88,
      "taxi_safety": 90,
      "air_safety": 95,
      "traffic_accidents": 75,
      "driving_laws": 85,
      "vehicle_security": 90,
      "pedestrian_safety": 70,
      "bicycle_safety": 72,
      "traffic_congestion": 45,
      
      // 医疗健康
      "medical_quality": 88,
      "hospital_access": 82,
      "emergency_response": 85,
      "medicine_cost": 60,
      "health_insurance": 78,
      "disease_risk": 80,
      "food_safety": 85,
      "water_quality": 95,
      
      // 自然灾害
      "earthquake_risk": 50,
      "flood_risk": 70,
      "hurricane_risk": 85,
      "wildfire_risk": 75,
      "tsunami_risk": 60,
      "landslide_risk": 75,
      "extreme_weather": 80,
      "volcanic_risk": 85,
      
      // 其他安全
      "political_stability": 85,
      "economic_stability": 80,
      "social_inequality": 75,
      "drug_problem": 90,
      "gun_control": 95,
      "pollution": 60,
      "noise_level": 55,
      "internet_freedom": 70,
      "lgbtq_safety": 75,
      "religious_freedom": 85,
      "immigration": 65,
      "cybersecurity": 82
    },
    
    // 详细的安全建议和实用信息
    "safety_tips": {
      "crime_prevention": [
        "尽量避免深夜独自行走,特别是在偏僻地区",
        "保管好贵重物品,使用酒店保险箱",
        "警惕街头诈骗和推销,遇到可疑情况立即离开",
        "在拥挤场所注意周围环境,防范扒手"
      ],
      "transport_safety": [
        "使用官方出租车或Uber,避免黑车",
        "地铁在高峰期非常拥挤,注意保管财物",
        "购买地铁一日票或多日票更经济",
        "学习基本日语短语,方便问路"
      ],
      "health_tips": [
        "购买旅游保险,日本医疗费用较高",
        "准备常用药物,日本药店种类有限",
        "保持充足水分,避免中暑",
        "了解附近的医院和诊所位置"
      ],
      "natural_disasters": [
        "了解地震应急程序,学习避难场所位置",
        "下载地震预警APP",
        "了解台风季节的天气变化",
        "准备应急包,包括手电筒、水、食物"
      ],
      "cultural_tips": [
        "尊重当地文化,进入室内要脱鞋",
        "不要在公共场所大声说话",
        "学习基本的用餐礼仪",
        "避免在电车和地铁里大声交谈"
      ]
    },
    
    // 安全区域和危险区域
    "areas": {
      "safe_areas": [
        { name: "新宿", description: "商业区,交通便利,24小时警力巡逻", safety_level: "A" },
        { name: "涩谷", description: "购物区,人流密集,治安良好", safety_level: "A-" },
        { name: "原宿", description: "年轻人聚集地,白天安全", safety_level: "A-" },
        { name: "六本木", description: "国际区域,高档餐厅酒吧", safety_level: "A" }
      ],
      "caution_areas": [
        { name: "歌舞伎町", description: "红灯区,深夜需谨慎", safety_level: "B", caution: "警惕黑店和不良商贩" },
        { name: "上野公园", description: "深夜无家可归者聚集地", safety_level: "B+", caution: "夜晚尽量避开" },
        { name: "池袋", description: "复杂的商业区,部分区域需注意", safety_level: "B+", caution: "注意周围环境" }
      ]
    },
    
    // 紧急服务信息
    "emergency": {
      "police": "110",
      "ambulance": "119",
      "fire": "119",
      "tourist_police": "+81-3-3503-8484",
      "embassy_china": "+81-3-3403-3388",
      "hospitals": [
        { name: "东京大学医学部附属医院", address: "东京都文京区本郷7-3-1", emergency: true },
        { name: "圣路加国际医院", address: "东京都中央区明石町9-1", emergency: true }
      ]
    },
    
    // 旅行贴士
    "travel_tips": {
      "best_season": "3-5月春季,10-11月秋季",
      "weather": {
        "spring": { temp: "10-20°C", tips: "赏樱花,准备轻薄外套" },
        "summer": { temp: "25-35°C", tips: "炎热潮湿,注意防暑防晒" },
        "autumn": { temp: "10-20°C", tips: "赏红叶,天气宜人" },
        "winter": { temp: "0-10°C", tips: "寒冷干燥,注意保暖" }
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
          "警察在哪里": "警察はどこですか (Keisatsu wa doko desu ka)",
          "救命": "助けてください (Tasukete kudasai)"
        }
      }
    },
    
    // 亮点和特色
    "highlights": [
      "犯罪率世界最低之一",
      "公共交通系统世界领先",
      "美食文化丰富多样",
      "购物天堂,从高端到平价",
      "动漫文化圣地",
      "四季景色各异"
    ],
    
    // 风险提示
    "risks": [
      "语言障碍,英语普及度有限",
      "自然灾害风险(地震、台风)",
      "生活成本高",
      "工作压力大,加班文化严重",
      "地铁高峰期极度拥挤"
    ],
    
    // 特殊注意事项
    "special_considerations": {
      "cultural": [
        "不要给小费,这在日本被视为不礼貌",
        "不要在街头吃东西,被认为不雅",
        "进入室内要脱鞋",
        "不要在电车上打电话"
      ],
      "legal": [
        "购买成人商品需满20岁",
        "禁止在公共场所吸烟",
        "禁止酒驾,违者严厉处罚",
        "禁止在街头吐痰"
      ],
      "health": [
        "医疗费用昂贵,务必购买保险",
        "药店晚上9点后关门",
        "紧急情况可拨打119",
        "备好常用药品"
      ]
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
    
    "details": {
      // 犯罪安全
      "violent_crime": 95,
      "property_crime": 92,
      "theft": 90,
      "fraud": 88,
      "street_safety": 95,
      "night_safety": 93,
      "tourist_safety": 95,
      "women_safety": 95,
      "child_safety": 98,
      "corruption": 92,
      "terrorism": 90,
      "gang_activity": 90,
      
      // 交通安全
      "road_safety": 92,
      "public_transport": 95,
      "taxi_safety": 95,
      "air_safety": 95,
      "traffic_accidents": 90,
      "driving_laws": 95,
      "vehicle_security": 95,
      "pedestrian_safety": 92,
      "bicycle_safety": 88,
      "traffic_congestion": 65,
      
      // 医疗健康
      "medical_quality": 92,
      "hospital_access": 95,
      "emergency_response": 95,
      "medicine_cost": 65,
      "health_insurance": 85,
      "disease_risk": 90,
      "food_safety": 92,
      "water_quality": 95,
      
      // 自然灾害
      "earthquake_risk": 95,
      "flood_risk": 75,
      "hurricane_risk": 90,
      "wildfire_risk": 95,
      "tsunami_risk": 88,
      "landslide_risk": 92,
      "extreme_weather": 85,
      "volcanic_risk": 95,
      
      // 其他安全
      "political_stability": 95,
      "economic_stability": 92,
      "social_inequality": 78,
      "drug_problem": 95,
      "gun_control": 98,
      "pollution": 70,
      "noise_level": 75,
      "internet_freedom": 65,
      "lgbtq_safety": 75,
      "religious_freedom": 82,
      "immigration": 85,
      "cybersecurity": 90
    },
    
    "safety_tips": {
      "crime_prevention": [
        "新加坡犯罪率极低,但仍需保持基本警惕",
        "不要随身携带大量现金",
        "保管好护照等贵重物品",
        "注意防范网络诈骗"
      ],
      "transport_safety": [
        "地铁系统安全可靠,可放心使用",
        "出租车安全规范,使用计价器",
        "共享单车需遵守交通规则",
        "注意交通规则,过马路使用人行横道"
      ],
      "health_tips": [
        "医疗水平世界一流,但费用较高",
        "购买旅游保险",
        "注意防暑,热带气候炎热",
        "保持水分补充"
      ],
      "natural_disasters": [
        "注意烟雾季节(9-10月)",
        "了解暴雨应急措施",
        "台风季节关注天气预报"
      ],
      "cultural_tips": [
        "严格遵守当地法律,处罚严厉",
        "公共场所禁止吸烟",
        "禁止吃口香糖",
        "尊重多民族文化"
      ]
    },
    
    "areas": {
      "safe_areas": [
        { name: "乌节路", description: "购物中心,24小时保安", safety_level: "A" },
        { name: "滨海湾", description: "旅游区,治安极佳", safety_level: "A" },
        { name: "圣淘沙", description: "度假岛,安全度高", safety_level: "A" },
        { name: "牛车水", description: "文化区,游客友好", safety_level: "A" }
      ],
      "caution_areas": [
        { name: "芽笼", description: "红灯区,夜晚谨慎", safety_level: "B+", caution: "避开非法服务" },
        { name: "小印度", description: "节假日人群拥挤", safety_level: "B+", caution: "注意人流" }
      ]
    },
    
    "emergency": {
      "police": "999",
      "ambulance": "995",
      "fire": "995",
      "tourist_police": "+65-6735-2000",
      "embassy_china": "+65-6471-2117",
      "hospitals": [
        { name: "新加坡中央医院", address: "Outram Rd, Singapore 169608", emergency: true },
        { name: "国大医院", address: "5 Lower Kent Ridge Rd, Singapore 119074", emergency: true }
      ]
    },
    
    "travel_tips": {
      "best_season": "2-4月,11-1月",
      "weather": {
        "spring": { temp: "24-32°C", tips: "炎热,注意防晒" },
        "summer": { temp: "26-34°C", tips: "高温高湿,多喝水" },
        "autumn": { temp: "25-33°C", tips: "烟雾季节,佩戴口罩" },
        "winter": { temp: "23-31°C", tips: "最佳旅游季节" }
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
    
    "highlights": [
      "世界最安全城市之一",
      "多民族文化融合",
      "美食天堂",
      "清洁城市",
      "花园城市",
      "金融中心"
    ],
    
    "risks": [
      "生活成本极高",
      "法律严格,处罚严厉",
      "热带气候炎热",
      "人工费昂贵"
    ],
    
    "special_considerations": {
      "cultural": [
        "公共场所严格禁烟",
        "禁止吃口香糖",
        "注意穿着得体",
        "尊重宗教场所"
      ],
      "legal": [
        "严厉禁毒,违者重罚",
        "禁止随地吐痰",
        "禁止乱扔垃圾",
        "禁止喂食野生动物"
      ],
      "health": [
        "热带疾病预防",
        "注意防蚊",
        "保持水分",
        "购买保险"
      ]
    }
  }
};
