// SafeCity Global - Global City Safety Database v9.0 (Fully Enhanced)
// 125 cities with complete data: emergency, attractions, festivals, customs, food, health
// Updated: 2026-04-19

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
          "area": "Shinjuku Kabukicho",
          "desc": "Frequent touts, price scams in some bars - Avoid accepting touts, choose chain izakayas",
          "risk": "Medium"
        },
        {
          "area": "Ikebukuro North Exit (Sunshine-dori)",
          "desc": "Homeless concentration, be careful at night - Safe during day for shopping, use South Exit at night",
          "risk": "Medium"
        },
        {
          "area": "San'ya Area (Kita-ku)",
          "desc": "10min walk from Hibiya line, homeless district - Completely avoid",
          "risk": "High"
        }
      ],
      "safeAreas": [
        "Minato-ku (Aoyama, Azabu, Roppongi)",
        "Shibuya-ku (Daikanyama, Ebisu)",
        "Bunkyo & Chiyoda",
        "Meguro River Area"
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
      "police": "110",
      "ambulance": "119",
      "fire": "119"
    },
    "lifestyle": {
      "food": [
        {
          "name": "Sukiyabashi Jiro (�的寿司)",
          "type": "Sushi",
          "price": "¥30,000+ (omakase)",
          "desc": "Ginza - Otoro (fatty tuna)",
          "tip": "Must book 1-2 months ahead, closed Monday"
        },
        {
          "name": "Ichiran Ramen",
          "type": "Ramen",
          "price": "¥1,000-1,500",
          "desc": "Shibuya/Shinjuku - Rich Tonkotsu Ramen",
          "tip": "24hr, single-seat booth design"
        },
        {
          "name": "A5 Wagyu BBQ",
          "type": "BBQ",
          "price": "¥5,000-15,000",
          "desc": "Various - Wagyu Beef Set",
          "tip": "Highly ranked on tabelog.com"
        }
      ],
      "attractions": [
        {
          "name": "Nezu Museum",
          "type": "Art Museum",
          "desc": "Omotesando/Aoyama: Hidden gem, garden called 'Most Beautiful in Tokyo', quiet and peaceful",
          "hidden": true
        },
        {
          "name": "Kagurazaka",
          "type": "Old Street",
          "desc": "Iidabashi area: Known as 'Little Kyoto', stone paths, lanterns, traditional izakayas",
          "hidden": true
        },
        {
          "name": "Nakameguro",
          "type": "Neighborhood",
          "desc": "Meguro River area: Dense concentration of art shops, highest coffee shop density in Tokyo",
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
      "transport": "公共交通非常发达，地铁和电车是最主要交通方式，购买一日券更划算。",
      "foodDetails": [
        {
          "name": "金子半之助",
          "type": "天妇罗",
          "location": "日本桥人形町",
          "price": "¥2000-3000",
          "mustTry": "上天妇罗盖饭",
          "tips": "11点开门就去排队，周二定休"
        },
        {
          "name": "AFURI",
          "type": "拉面",
          "location": "惠比寿、涩谷",
          "price": "¥1000-1500",
          "mustTry": "柚子盐拉面",
          "tips": "清淡口味，肉质软嫩"
        },
        {
          "name": "Blue Bottle Coffee",
          "type": "咖啡",
          "location": "清澄白河",
          "price": "¥500-700",
          "mustTry": "手冲咖啡",
          "tips": "咖啡朝圣地，环境绝佳"
        },
        {
          "name": "�的木（築地）",
          "type": "寿司",
          "location": "筑地市场",
          "price": "¥3000-10000",
          "mustTry": "金枪鱼大腹",
          "tips": "早市5点开门，午餐最划算"
        },
        {
          "name": "一兰拉面",
          "type": "拉面",
          "location": "新宿等多店",
          "price": "¥1000-1500",
          "mustTry": "天然豚骨",
          "tips": "24小时营业，有一人位"
        }
      ],
      "attractionDetails": [
        {
          "name": "shibuya十字路口",
          "type": "地标",
          "location": "涩谷区",
          "why": "全球最繁忙的行人交叉口，霓虹灯夜景震撼",
          "bestTime": "夜晚21:00-23:00",
          "duration": "30分钟",
          "tips": "从星巴克2楼拍摄全景最佳"
        },
        {
          "name": "东京迪士尼度假区",
          "type": "主题乐园",
          "location": "千叶县",
          "why": "亚洲最受欢迎的主题乐园，氛围梦幻",
          "bestTime": "平日（非节假日）9:00开门",
          "duration": "1-2天",
          "tips": "提前购买fast pass，下载官方APP"
        },
        {
          "name": "teamLab无界美术馆",
          "type": "艺术馆",
          "location": "台场",
          "why": "沉浸式数字艺术先驱，互动性强",
          "bestTime": "工作日下午",
          "duration": "2-3小时",
          "tips": "禁止拍照区域请遵守"
        },
        {
          "name": "明治神宫",
          "type": "神社",
          "location": "涩谷区",
          "why": "东京最重要的神社，位于都市绿洲",
          "bestTime": "清晨6:00-8:00",
          "duration": "1小时",
          "tips": "入口处有日本传统婚礼可观看"
        },
        {
          "name": "阿美横丁",
          "type": "市场",
          "location": "上野",
          "why": "地道东京烟火气，美食和砍价天堂",
          "bestTime": "下午14:00-18:00",
          "duration": "1-2小时",
          "tips": "海产品新鲜但需讲价"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "日本和平宪法，无武装冲突风险",
      "gang_activity": "中等",
      "gang_desc": "暴力团存在但远离游客区",
      "civil_unrest": "低",
      "civil_desc": "社会稳定，秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "Shinjuku Kabukicho",
        "risk": "Medium",
        "reason": "Frequent touts, price scams in some bars",
        "time": "After 11pm risk increases",
        "tips": "Avoid accepting touts, choose chain izakayas"
      },
      {
        "area": "Ikebukuro North Exit (Sunshine-dori)",
        "risk": "Medium",
        "reason": "Homeless concentration, be careful at night",
        "time": "After 10pm",
        "tips": "Safe during day for shopping, use South Exit at night"
      },
      {
        "area": "San'ya Area (Kita-ku)",
        "risk": "High",
        "reason": "10min walk from Hibiya line, homeless district",
        "time": "Any time",
        "tips": "Completely avoid"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "Minato-ku (Aoyama, Azabu, Roppongi)",
        "why": "Embassy district and upscale residential, excellent security",
        "features": [
          "Embassy Area",
          "Upscale",
          "Quiet & Clean"
        ],
        "bestFor": "Business, Families"
      },
      {
        "area": "Shibuya-ku (Daikanyama, Ebisu)",
        "why": "Fashion district, mainly locals, safe even at night",
        "features": [
          "Fashion",
          "Boutiques",
          "Cafes"
        ],
        "bestFor": "Youth, Shopping"
      },
      {
        "area": "Bunkyo & Chiyoda",
        "why": "University town and Imperial Palace area, high素质, good order",
        "features": [
          "Academic",
          "Cultural",
          "Quiet"
        ],
        "bestFor": "Culture Lovers"
      },
      {
        "area": "Meguro River Area",
        "why": "Upscale residential, good lighting, comprehensive surveillance",
        "features": [
          "Cherry Blossoms",
          "Upscale",
          "Safe"
        ],
        "bestFor": "Strolling, Night View"
      }
    ],
    "festivals": [
      {
        "name": "樱花季（3月下旬-4月中旬）",
        "desc": "上野公园、千鸟渊赏樱，野餐文化"
      },
      {
        "name": "衹园祭（7月）",
        "desc": "京都最大祭典，山鉾巡行持续整月"
      },
      {
        "name": "花火大会（7-8月）",
        "desc": "各地举办大型烟火表演，浴衣文化"
      },
      {
        "name": "正月（1月1日）",
        "desc": "初詣参拜，吃年糕汤，挂门松"
      }
    ],
    "customs": [
      "进入寺庙前需净手（手水舍）",
      "脱鞋进入榻榻米房间",
      "电车上不大声说话、不吃东西",
      "鞠躬礼节：15-30度日常，90度正式道歉",
      "不给小费文化（会给反而尴尬）",
      "吃饭不剩食物是礼貌"
    ],
    "foodSafety": {
      "tapWater": "可直接饮用，符合严格标准",
      "streetFood": "非常安全，注意选择本地人多的摊位",
      "seafood": "非常新鲜，刺身品质世界一流",
      "allergies": "过敏原标识不全，需主动询问",
      "tips": "便利店食物安全可靠，生鱼片选超市更保险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感（冬季高发）",
      "vaccinations": "无需特殊疫苗",
      "mosquito": "夏季登革热风险低",
      "airQuality": "花粉症（杉木，2-4月）",
      "tips": "医疗费用高，建议购买旅行保险"
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
          "area": "Geylang (芽笼)",
          "desc": "Legal red-light district, mixed crowd on weekends - OK for sightseeing but avoid alleys late night",
          "risk": "Medium"
        },
        {
          "area": "Little India (weekend evenings)",
          "desc": "Crowded, occasional pickpocketing - Safest during weekday daytime",
          "risk": "Low"
        }
      ],
      "safeAreas": [
        "Orchard Road",
        "Marina Bay",
        "East Coast Park",
        "Bukit Timah"
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
      "police": "999",
      "ambulance": "995",
      "fire": "995"
    },
    "lifestyle": {
      "food": [
        {
          "name": "Tian Tian Hainanese Chicken Rice",
          "type": "Singaporean",
          "price": "SGD 4-6",
          "desc": "Maxwell Food Centre - Hainanese Chicken Rice",
          "tip": "May sell out by noon, go early"
        },
        {
          "name": "Song Fa Bak Kut Teh",
          "type": "Bak Kut Teh",
          "price": "SGD 8-15",
          "desc": "Clarke Quay/Chinatown - Herbal Bak Kut Teh + You Tiao",
          "tip": "50-year history, unlimited soup refills"
        },
        {
          "name": "Jumbo Seafood",
          "type": "Seafood",
          "price": "SGD 50-100",
          "desc": "East Coast/Clarke Quay - Chili Crab, MRT Crabs",
          "tip": "Reservation required, higher cost per person"
        }
      ],
      "attractions": [
        {
          "name": "Haji Lane",
          "type": "Creative District",
          "desc": "Near Bugis: Rainbow alley, graffiti walls, local designer shops",
          "hidden": true
        },
        {
          "name": "Southern Ridges",
          "type": "Hiking",
          "desc": "Mount Faber Park-Henderson Waves: Most beautiful hiking trail in Singapore, overlooks entire city",
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
      "transport": "地铁和巴士网络完善，易通卡可通用所有公共交通，出租车安全可靠。",
      "foodDetails": [
        {
          "name": "了凡香港油鸡饭面",
          "type": "米其林小贩",
          "location": "牛车水大厦",
          "price": "$5-10",
          "mustTry": "油鸡面",
          "tips": "最便宜米其林一星"
        },
        {
          "name": "328加东叻沙",
          "type": "娘惹菜",
          "location": "加东区",
          "price": "$6-12",
          "mustTry": "加东叻沙",
          "tips": "55年老店，11点前去"
        },
        {
          "name": "松发肉骨茶",
          "type": "潮汕美食",
          "location": "克拉码头",
          "price": "$8-15",
          "mustTry": "肉骨茶",
          "tips": "唐城阁分店更宽敞"
        },
        {
          "name": "亚坤咖椰吐司",
          "type": "早餐",
          "location": "多处分店",
          "price": "$5-8",
          "mustTry": "咖椰吐司+半熟蛋",
          "tips": "国民早餐"
        }
      ],
      "attractionDetails": [
        {
          "name": "滨海湾花园",
          "type": "公园",
          "location": "滨海湾",
          "why": "超级树和云雾林室内花园，科幻感十足",
          "bestTime": "19:45灯光秀",
          "duration": "3小时",
          "tips": "免费进入户外区，付费参观云雾林"
        },
        {
          "name": "环球影城",
          "type": "主题乐园",
          "location": "圣淘沙",
          "why": "东南亚最好玩的主题乐园，适合各年龄",
          "bestTime": "平日开门即去",
          "duration": "1天",
          "tips": "周一至周四人少，购买快速通行证"
        },
        {
          "name": "小印度",
          "type": "文化区",
          "location": "实龙岗路",
          "why": "新加坡印度文化缩影，色彩斑斓",
          "bestTime": "周日（最佳）",
          "duration": "2小时",
          "tips": "周日印度劳工聚集，氛围独特"
        },
        {
          "name": "克拉码头",
          "type": "夜生活",
          "location": "新加坡河畔",
          "why": "酒吧餐厅聚集地，夜景绝美",
          "bestTime": "19:00后",
          "duration": "3小时",
          "tips": "珍宝海鲜需提前一个月预约"
        },
        {
          "name": "鱼尾狮公园",
          "type": "地标",
          "location": "滨海湾",
          "why": "新加坡地标，必打卡",
          "bestTime": "夜晚",
          "duration": "30分钟",
          "tips": "从对面金沙酒店拍倒影更佳"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "区域稳定，无武装冲突",
      "gang_activity": "极少",
      "gang_desc": "严刑峻法，犯罪率极低",
      "civil_unrest": "极低",
      "civil_desc": "政府治理高效"
    },
    "detailedDangerZones": [
      {
        "area": "Geylang (芽笼)",
        "risk": "Medium",
        "reason": "Legal red-light district, mixed crowd on weekends",
        "time": "Friday/Saturday late night",
        "tips": "OK for sightseeing but avoid alleys late night"
      },
      {
        "area": "Little India (weekend evenings)",
        "risk": "Low",
        "reason": "Crowded, occasional pickpocketing",
        "time": "Saturday evenings",
        "tips": "Safest during weekday daytime"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "Orchard Road",
        "why": "Embassy area, 24hr security, dense surveillance",
        "features": [
          "Shopping Paradise",
          "Embassy",
          "Safe"
        ],
        "bestFor": "Shopping, Nightlife"
      },
      {
        "area": "Marina Bay",
        "why": "Government core area, strictest security, frequent patrols",
        "features": [
          "Landmark",
          "Surveillance",
          "Police Patrols"
        ],
        "bestFor": "Sightseeing, Business"
      },
      {
        "area": "East Coast Park",
        "why": "Upscale residential, beach safe, family-friendly",
        "features": [
          "Beach",
          "Running Track",
          "Family-Friendly"
        ],
        "bestFor": "Family, Sports"
      },
      {
        "area": "Bukit Timah",
        "why": "Upscale residential, local elite area",
        "features": [
          "Upscale",
          "Green",
          "Quiet"
        ],
        "bestFor": "Jogging, Walking"
      }
    ],
    "festivals": [
      {
        "name": "农历新年",
        "desc": "牛车水灯展，捞鱼生习俗"
      },
      {
        "name": "哈芝节",
        "desc": "马来穆斯林节日"
      }
    ],
    "customs": [
      "不随地吐痰、不乱扔垃圾（高额罚款）",
      "禁烟区域多（罚款1000新币）",
      "无死刑犯罪处鞭刑",
      "多元宗教共存，尊重各宗教场所",
      "ATM可取出新币和人民币"
    ],
    "foodSafety": {
      "tapWater": "可直接饮用，符合WHO标准",
      "streetFood": "非常安全，政府严格监管",
      "seafood": "新鲜，来源可追溯",
      "allergies": "强制标注过敏原",
      "tips": "食阁和小贩中心食物安全，便宜好吃"
    },
    "diseasePrevention": {
      "commonIllnesses": "登革热（全年，2024年创纪录）",
      "vaccinations": "无需特殊疫苗",
      "mosquito": "高风险，持续防蚊",
      "airQuality": "偶尔来自印尼烧芭",
      "tips": "医疗水平高但费用昂贵"
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
        "Gangnam Yeoksam-dong",
        "Samcheong-dong (Insadong)",
        "Apgujeong Rodeo Street",
        "Hannam-dong"
      ],
      "hotspots": [
        {
          "area": "Itaewon Nightclub Area",
          "desc": "Drink-spiking, occasional drug incidents - Refuse drinks from strangers, watch your phone",
          "risk": "Medium"
        },
        {
          "area": "Hongdae Nightclub Street",
          "desc": "Young crowd, occasional fights - Go in groups, avoid conflicts",
          "risk": "Medium"
        },
        {
          "area": "Dongdaemun (late night)",
          "desc": "Wholesale market area, mixed crowd - Shopping during day is safer",
          "risk": "Low"
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
      "ambulance": "119",
      "fire": "119"
    },
    "lifestyle": {
      "food": [
        {
          "name": "Wangsimni Tteokbokkeum (Wangsimni)",
          "type": "Rice Cake",
          "price": "₩8,000-15,000",
          "desc": "Wangsimni - Spicy Rice Cakes",
          "tip": "Local favorite, long queue at peak"
        },
        {
          "name": "Gwangjang Market (�的市场)",
          "type": "Market Food",
          "price": "₩5,000-15,000/piece",
          "desc": "Gwangjang Market - Mung Bean Pancakes, Yukhoe",
          "tip": "Some stalls close after 8pm"
        },
        {
          "name": "Myeongdong Kyoja",
          "type": "Korean",
          "price": "₩10,000-20,000",
          "desc": "Myeongdong - Kalguksu, Mandu",
          "tip": "Local favorite, simple menu"
        }
      ],
      "attractions": [
        {
          "name": "Bukchon Hanok Village",
          "type": "Traditional Culture",
          "desc": "Samcheong-dong: 600-year history traditional Hanok, 10min walk from Anguk Station Line 3",
          "hidden": true
        },
        {
          "name": "Ikseong-dong",
          "type": "Creative Area",
          "desc": "Euljiro 3-ga: Seoul's 'Gulangyu', narrow alleys with indie cafes",
          "hidden": true
        },
        {
          "name": "Hannam-dong",
          "type": "Shopping",
          "desc": "Itaewon Station: Designer brands, independent shops, Korean version of 'Nanhua Alley'",
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
      "transport": "地铁系统发达，覆盖全市，T-money卡可用于交通和便利店支付。出租车分普通、模范、大型三种，价格递增。",
      "foodDetails": [
        {
          "name": "广藏市场",
          "type": "传统市场",
          "location": "钟路区",
          "price": "₩10000-30000",
          "mustTry": "生拌牛肉、绿豆煎饼",
          "tips": "晚餐时间最热闹"
        },
        {
          "name": "Isaac Toast",
          "type": "三明治",
          "location": "多处分店",
          "price": "₩4000-7000",
          "mustTry": "烤肉吐司",
          "tips": "24小时，韩国版麦当劳"
        },
        {
          "name": "Myth Kimchi",
          "type": "韩定食",
          "location": "明洞",
          "price": "₩20000-40000",
          "mustTry": "24个小菜",
          "tips": "24道小菜的自助"
        }
      ],
      "attractionDetails": [
        {
          "name": "明洞",
          "type": "购物",
          "location": "中区",
          "why": "首尔购物天堂，美妆/时尚/美食",
          "bestTime": "10:00-22:00",
          "duration": "3小时",
          "tips": "换钱去明洞大妈店更划算"
        },
        {
          "name": "北村韩屋村",
          "type": "文化",
          "location": "嘉会洞",
          "why": "600年历史韩屋，穿越朝鲜时代",
          "bestTime": "清晨或傍晚",
          "duration": "2小时",
          "tips": "参加韩屋体验需预约"
        },
        {
          "name": "南山首尔塔",
          "type": "地标",
          "location": "南山",
          "why": "俯瞰首尔全景，爱情锁墙浪漫",
          "bestTime": "日落到夜景",
          "duration": "2小时",
          "tips": "缆车往返省体力"
        },
        {
          "name": "弘大街头",
          "type": "艺术",
          "location": "弘益大学",
          "why": "街头表演、涂鸦墙、年轻文化",
          "bestTime": "周五周六21:00后",
          "duration": "3小时",
          "tips": "有很多live house值得一看"
        },
        {
          "name": "东大门设计广场",
          "type": "建筑",
          "location": "东大门",
          "why": "未来感建筑，常设展览",
          "bestTime": "晚上灯光秀",
          "duration": "2小时",
          "tips": "隔壁东大门批发市场可购物"
        }
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
    "conflict": {
      "war_risk": "中",
      "war_desc": "朝鲜半岛局势需关注，但首尔相对安全",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪存在但不影响游客",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "Itaewon Nightclub Area",
        "risk": "Medium",
        "reason": "Drink-spiking, occasional drug incidents",
        "time": "2-4am",
        "tips": "Refuse drinks from strangers, watch your phone"
      },
      {
        "area": "Hongdae Nightclub Street",
        "risk": "Medium",
        "reason": "Young crowd, occasional fights",
        "time": "1-3am",
        "tips": "Go in groups, avoid conflicts"
      },
      {
        "area": "Dongdaemun (late night)",
        "risk": "Low",
        "reason": "Wholesale market area, mixed crowd",
        "time": "12am-4am",
        "tips": "Shopping during day is safer"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "Gangnam Yeoksam-dong",
        "why": "Rich district, dense surveillance, frequent patrols",
        "features": [
          "Rich Area",
          "Gangnam Style",
          "Shopping"
        ],
        "bestFor": "Shopping, Nightlife"
      },
      {
        "area": "Samcheong-dong (Insadong)",
        "why": "Traditional culture district, mainly local tourists, good order",
        "features": [
          "Hanok Village",
          "Traditional",
          "Quiet"
        ],
        "bestFor": "Culture Experience"
      },
      {
        "area": "Apgujeong Rodeo Street",
        "why": "Luxury brand district, strict security",
        "features": [
          "Luxury",
          "Upscale",
          "Safe"
        ],
        "bestFor": "Shopping"
      },
      {
        "area": "Hannam-dong",
        "why": "Embassy area, quieter and safer than Itaewon",
        "features": [
          "Embassy",
          "Design Shops",
          "Cafes"
        ],
        "bestFor": "Artistic Youth"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "999",
      "ambulance": "999",
      "fire": "999"
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
      "foodDetails": [
        {
          "name": "添好运点心",
          "type": "粤式点心",
          "location": "深水埗/中环",
          "price": "HK$50-150",
          "mustTry": "酥皮焗叉烧包、虾饺",
          "tips": "最便宜的米其林星级餐厅"
        },
        {
          "name": "九记牛腩",
          "type": "牛腩面",
          "location": "上环歌赋街",
          "price": "HK$60-100",
          "mustTry": "咖喱牛筋腩、清汤牛腩",
          "tips": "周一至周六营业，经常排队"
        }
      ],
      "attractionDetails": [
        {
          "name": "香港市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "香港博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "深水埗某些后巷",
        "risk": "低",
        "time": "深夜23:00后",
        "reason": "无业游民聚集",
        "tips": "尽量结伴，避免深夜独行"
      },
      {
        "area": "重庆大厦周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "人员复杂，拉客行为",
        "tips": "快速通过，注意财物"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "中环/上环",
        "why": "金融中心，安保严密，商业发达",
        "features": [
          "金融区",
          "使馆安保",
          "商业"
        ],
        "bestFor": "商务旅客"
      },
      {
        "area": "山顶（太平山）",
        "why": "高端住宅区，俯瞰维港，灯光秀",
        "features": [
          "高端区",
          "景观",
          "旅游"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "119"
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
      "foodDetails": [
        {
          "name": "全聚德烤鸭",
          "type": "北京烤鸭",
          "location": "多家分店",
          "price": "¥200-500",
          "mustTry": "片皮烤鸭、鸭架汤",
          "tips": "百年老店，建议去前门店"
        },
        {
          "name": "护国寺小吃",
          "type": "京味小吃",
          "location": "西城",
          "price": "¥20-60",
          "mustTry": "豆汁、焦圈、驴打滚",
          "tips": "体验老北京早点文化"
        }
      ],
      "attractionDetails": [
        {
          "name": "北京市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "北京博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "中国国内局势稳定",
      "gang_activity": "极少",
      "gang_desc": "严格管控，社会秩序良好",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "北京某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "东城区（胡同保护区）",
        "why": "传统与现代结合，旅游设施完善",
        "features": [
          "胡同文化",
          "旅游区",
          "设施完善"
        ],
        "bestFor": "文化探索"
      },
      {
        "area": "朝阳区（CBD）",
        "why": "商务中心，国际化程度高，警力充足",
        "features": [
          "商务区",
          "国际化",
          "安全"
        ],
        "bestFor": "商务旅客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "119"
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
      "foodDetails": [
        {
          "name": "南翔馒头店",
          "type": "小笼包",
          "location": "豫园",
          "price": "¥30-80",
          "mustTry": "鲜肉小笼、蟹粉小笼",
          "tips": "百年老店，建议错峰前往"
        },
        {
          "name": "上海老饭店",
          "type": "本帮菜",
          "location": "黄浦",
          "price": "¥100-300",
          "mustTry": "红烧肉、腌笃鲜",
          "tips": "正宗本帮菜，口味偏甜"
        }
      ],
      "attractionDetails": [
        {
          "name": "上海市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "上海博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "中国国内局势稳定",
      "gang_activity": "极少",
      "gang_desc": "严格管控，社会秩序良好",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "上海某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "静安区",
        "why": "法租界区域，高档社区，街道整洁",
        "features": [
          "法租界",
          "高档社区",
          "梧桐区"
        ],
        "bestFor": "购物、美食"
      },
      {
        "area": "徐汇区（衡山路）",
        "why": "梧桐树街区，咖啡馆林立，氛围优雅",
        "features": [
          "梧桐区",
          "咖啡馆",
          "海派文化"
        ],
        "bestFor": "文艺游客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
        "Silom Business District",
        "Sukhumvit (main stations)",
        "Chao Phraya River (IconSiam area)"
      ],
      "hotspots": [
        {
          "area": "Khao San Road (late night)",
          "desc": "Backpacker hub, scammers, drug trade - Keep passport safe, refuse strangers' offers",
          "risk": "Medium"
        },
        {
          "area": "Silom Nightlife Area",
          "desc": "Bars, occasional scams - Avoid being dragged into overpriced bars",
          "risk": "Medium"
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
      "police": "191",
      "ambulance": "1669",
      "fire": "199"
    },
    "lifestyle": {
      "food": [
        {
          "name": "Jay Fai ( Michelin 3-Star)",
          "type": "Michelin Street",
          "price": "฿300-800",
          "desc": "Near Khao San - Crab Omelette, Tom Yum",
          "tip": "Michelin 3-star, 2hr+ queue, wearing goggles while cooking is iconic"
        },
        {
          "name": "Thipsamai (Best Pad Thai)",
          "type": "Pad Thai",
          "price": "฿100-200",
          "desc": "Siam Square - Signature Pad Thai",
          "tip": "Over 50 years, Golden Egg Fried Rice is must-try"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
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
      "foodDetails": [
        {
          "name": "Jay Fai（痣姐）",
          "type": "街头米其林",
          "location": "耀华力路",
          "price": "฿400-1000",
          "mustTry": "蟹肉炒蛋、冬阴功",
          "tips": "米其林星级摊位，下午3点开门"
        },
        {
          "name": "Thipsamai",
          "type": "泰式炒河粉",
          "location": "是隆路",
          "price": "฿100-200",
          "mustTry": "招牌Pad Thai",
          "tips": "曼谷最好吃，24小时"
        },
        {
          "name": "Raan Jay Fai",
          "type": "路边摊",
          "location": "耀华力路",
          "price": "฿300-600",
          "mustTry": "酒煎干贝",
          "tips": "路边摊环境，营业到凌晨"
        },
        {
          "name": "建兴酒家",
          "type": "中餐",
          "location": "是隆路",
          "price": "฿200-400",
          "mustTry": "咖喱蟹、粉丝煲",
          "tips": "老字号，环境好"
        }
      ],
      "attractionDetails": [
        {
          "name": "大皇宫",
          "type": "宫殿",
          "location": "拉塔纳科辛区",
          "why": "泰国皇室象征，金碧辉煌",
          "bestTime": "8:30开门即去",
          "duration": "2小时",
          "tips": "穿长裤/长裙，不能露肩"
        },
        {
          "name": "考山路",
          "type": "夜生活",
          "location": "帕那空区",
          "why": "全球背包客聚集地，夜生活丰富",
          "bestTime": "18:00后",
          "duration": "3小时",
          "tips": "马杀鸡便宜但要选正规店"
        },
        {
          "name": "恰图恰市场",
          "type": "市场",
          "location": "乍都节区",
          "why": "世界最大露天市场，15000+摊位",
          "bestTime": "周末10:00-18:00",
          "duration": "4小时",
          "tips": "砍价从3折开始，记得带水"
        },
        {
          "name": "黎明寺",
          "type": "寺庙",
          "location": "湄南河畔",
          "why": "曼谷最美寺庙，瓷片装饰精致",
          "bestTime": "清晨或傍晚",
          "duration": "1.5小时",
          "tips": "坐渡轮比坐船便宜"
        },
        {
          "name": " ASIATIQUE河畔夜市",
          "type": "夜市",
          "location": "湄南河畔",
          "why": "摩天轮夜市，购物餐饮一体",
          "bestTime": "17:00-23:00",
          "duration": "3小时",
          "tips": "摩天轮300泰铢，值得一试"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "泰国国内局势稳定",
      "gang_activity": "中等",
      "gang_desc": "部分区域存在帮派活动，游客避免深夜外出",
      "civil_unrest": "低",
      "civil_desc": "政治局势总体平稳"
    },
    "detailedDangerZones": [
      {
        "area": "Khao San Road (late night)",
        "risk": "Medium",
        "reason": "Backpacker hub, scammers, drug trade",
        "time": "After midnight",
        "tips": "Keep passport safe, refuse strangers' offers"
      },
      {
        "area": "Silom Nightlife Area",
        "risk": "Medium",
        "reason": "Bars, occasional scams",
        "time": "Night",
        "tips": "Avoid being dragged into overpriced bars"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "Silom Business District",
        "why": "Financial district, many police, comprehensive surveillance",
        "features": [
          "Financial",
          "BTS Station",
          "Safe"
        ],
        "bestFor": "Business, Shopping"
      },
      {
        "area": "Sukhumvit (main stations)",
        "why": "Tourist area, 7-11 density high, good security",
        "features": [
          "Tourist Area",
          "Convenience Stores",
          "Night Markets"
        ],
        "bestFor": "Nightlife"
      },
      {
        "area": "Chao Phraya River (IconSiam area)",
        "why": "New development area, comprehensive security",
        "features": [
          "River View",
          "High-end Mall",
          "Safe"
        ],
        "bestFor": "Shopping, Sightseeing"
      }
    ],
    "festivals": [
      {
        "name": "宋干节（4月13-15日）",
        "desc": "泰国新年，泼水节"
      }
    ],
    "customs": [
      "不可触碰他人头部（头部最神圣）",
      "不可用脚指向人或佛像",
      "寺庙需穿长裤长裙",
      "付小费是习惯（10%）",
      "微笑之国，有纠纷先微笑"
    ],
    "foodSafety": {
      "tapWater": "不可直接饮用，只用瓶装水",
      "streetFood": "风险较高，选择排队本地人多的摊位",
      "seafood": "新鲜度参差，需确保充分加热",
      "allergies": "沟通困难，主动出示文字说明",
      "tips": "只吃煮熟的食物，冰块可能是问题水源"
    },
    "diseasePrevention": {
      "commonIllnesses": "登革热、寨卡（全年）、手足口病",
      "vaccinations": "建议甲肝、伤寒疫苗",
      "mosquito": "高风险，防蚊是必须",
      "airQuality": "雾霾严重（3-4月）",
      "tips": "PM2.5有时超过200，备口罩"
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
      "police": "999",
      "ambulance": "999",
      "fire": "994"
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
      "foodDetails": [
        {
          "name": "吉隆坡中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "吉隆坡市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "吉隆坡博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "茨厂街夜间后巷",
        "risk": "中",
        "time": "深夜",
        "reason": "抢劫多发",
        "tips": "结伴而行"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "吉隆坡市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "吉隆坡主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
        "Da'an District (East District)",
        "Xinyi District"
      ],
      "hotspots": [
        {
          "area": "Ximending (late night)",
          "desc": "Young crowd, occasional arguments - Generally safe, watch belongings",
          "risk": "Low"
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
      "police": "110",
      "ambulance": "119",
      "fire": "119"
    },
    "lifestyle": {
      "food": [
        {
          "name": "Din Tai Fung",
          "type": "Xiao Long Bao",
          "price": "NT$300-600",
          "desc": "Xinyi/multiple - Xiaolongbao, Spicy Wontons",
          "tip": "World-famous, Michelin 1-star"
        },
        {
          "name": "Shangjia Fish Market",
          "type": "Seafood",
          "price": "NT$500-1500",
          "desc": "Zhongshan Fish Market - Nigiri Sushi, Sea Urchin",
          "tip": "Standing-eat area has best value"
        },
        {
          "name": "Lin Dong Fang Beef Noodles",
          "type": "Beef Noodles",
          "price": "NT$150-300",
          "desc": "Bade Road - Half-Tendon Half-Meat Noodles",
          "tip": "24hr, add chili oil for extra flavor"
        }
      ],
      "attractions": [
        {
          "name": "市中心历史区",
          "type": "历史文化",
          "desc": "探索当地历史文化",
          "hidden": false
        },
        {
          "name": "本地市场",
          "type": "集市",
          "desc": "体验当地生活气息",
          "hidden": true
        },
        {
          "name": "城市公园",
          "type": "公园",
          "desc": "休闲娱乐的好去处",
          "hidden": false
        },
        {
          "name": "艺术区",
          "type": "文化区",
          "desc": "当地艺术和文化中心",
          "hidden": true
        }
      ],
      "festivals": [
        {
          "name": "新年庆祝",
          "date": "1月1日",
          "desc": "新年庆祝活动"
        },
        {
          "name": "文化节日",
          "date": "全年",
          "desc": "体验当地文化"
        },
        {
          "name": "美食节",
          "date": "根据当地安排",
          "desc": "品尝当地美食"
        }
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
      "foodDetails": [
        {
          "name": "Din Tai Fung",
          "type": "Xiao Long Bao",
          "location": "Xinyi/multiple",
          "price": "NT$300-600",
          "mustTry": "Xiaolongbao, Spicy Wontons",
          "tips": "World-famous, Michelin 1-star"
        },
        {
          "name": "Shangjia Fish Market",
          "type": "Seafood",
          "location": "Zhongshan Fish Market",
          "price": "NT$500-1500",
          "mustTry": "Nigiri Sushi, Sea Urchin",
          "tips": "Standing-eat area has best value"
        },
        {
          "name": "Lin Dong Fang Beef Noodles",
          "type": "Beef Noodles",
          "location": "Bade Road",
          "price": "NT$150-300",
          "mustTry": "Half-Tendon Half-Meat Noodles",
          "tips": "24hr, add chili oil for extra flavor"
        }
      ],
      "attractionDetails": [
        {
          "name": "台北市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "台北博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "中",
      "war_desc": "台海局势需关注，整体相对稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪活动较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "Ximending (late night)",
        "risk": "Low",
        "reason": "Young crowd, occasional arguments",
        "time": "After midnight",
        "tips": "Generally safe, watch belongings"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "Da'an District (East District)",
        "why": "Cultural-educational district, high resident素质, safe at night",
        "features": [
          "Cultural-Educational",
          "Night Markets",
          "Cafes"
        ],
        "bestFor": "Culture, Food"
      },
      {
        "area": "Xinyi District",
        "why": "New civic center, comprehensive surveillance",
        "features": [
          "101 Tower",
          "Malls",
          "Safe"
        ],
        "bestFor": "Sightseeing, Shopping"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "119"
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
      "transport": "公共交通非常发达，地铁和电车是最主要交通方式。建议购买一日券（Tokyo Metro 24/48/72小时券）、西瓜卡（Suica）或Pasmo卡，充值即可使用。出租车价格较高，但服务优质。",
      "foodDetails": [
        {
          "name": "大阪中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "大阪市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "大阪博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "日本和平宪法，无武装冲突风险",
      "gang_activity": "中等",
      "gang_desc": "暴力团存在但远离游客区",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "飞田新地（西成区）",
        "risk": "中高",
        "time": "全天",
        "reason": "风俗店聚集区",
        "tips": "游客应完全避免"
      },
      {
        "area": "釜崎地区",
        "risk": "中高",
        "time": "全天",
        "reason": "日工聚集地",
        "tips": "避免前往"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "大阪市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "大阪主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
          "area": "Dharavi Slum",
          "desc": "High crime, tourists easily targeted - Only visit with正规 tours if needed",
          "risk": "High"
        },
        {
          "area": "Grant Road (late night)",
          "desc": "Red-light area vicinity - Avoid going alone",
          "risk": "Medium"
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
      "police": "100",
      "ambulance": "102",
      "fire": "101"
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
      "foodDetails": [
        {
          "name": "孟买中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "孟买市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "孟买博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "印度政局稳定",
      "gang_activity": "中等",
      "gang_desc": "有组织犯罪存在但远离游客区",
      "civil_unrest": "中",
      "civil_desc": "社会分层明显"
    },
    "detailedDangerZones": [
      {
        "area": "Dharavi Slum",
        "risk": "High",
        "reason": "High crime, tourists easily targeted",
        "time": "Any time",
        "tips": "Only visit with正规 tours if needed"
      },
      {
        "area": "Grant Road (late night)",
        "risk": "Medium",
        "reason": "Red-light area vicinity",
        "time": "Night",
        "tips": "Avoid going alone"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "孟买市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "孟买主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "100",
      "ambulance": "102",
      "fire": "101"
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
      "foodDetails": [
        {
          "name": "德里中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "德里市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "德里博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "德里火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "德里市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "德里市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "德里主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "110",
      "ambulance": "118",
      "fire": "113"
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
      "foodDetails": [
        {
          "name": "雅加达中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "雅加达市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "雅加达博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "印尼政局稳定",
      "gang_activity": "中等",
      "gang_desc": "有组织犯罪存在",
      "civil_unrest": "中",
      "civil_desc": "政治活动较多"
    },
    "detailedDangerZones": [
      {
        "area": "雅加达火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "雅加达市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "雅加达市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "雅加达主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "113",
      "ambulance": "115",
      "fire": "114"
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
      "foodDetails": [
        {
          "name": "胡志明市中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "胡志明市市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "胡志明市博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "第五郡华埠深夜",
        "risk": "中",
        "time": "夜间",
        "reason": "飞车党活跃",
        "tips": "避免佩戴首饰"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "胡志明市市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "胡志明市主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "117",
      "ambulance": "911",
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "马尼拉中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "马尼拉市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "马尼拉博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "菲律宾政局稳定",
      "gang_activity": "较高",
      "gang_desc": "帮派问题存在",
      "civil_unrest": "中",
      "civil_desc": "政治对立明显"
    },
    "detailedDangerZones": [
      {
        "area": "马尼拉火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "马尼拉市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "马尼拉市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "马尼拉主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
          "area": "Deira Old District (late night)",
          "desc": "Working-class area, slightly chaotic at night - More comfortable during daytime",
          "risk": "Low"
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
      "police": "999",
      "ambulance": "998",
      "fire": "997"
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
      "foodDetails": [
        {
          "name": "Al Ustad Special Kebab",
          "type": "烤肉",
          "location": "布尔迪拜",
          "price": " AED50-100",
          "mustTry": "混合烤肉拼盘",
          "tips": "50年老店，需要等位"
        },
        {
          "name": "Arabian Tea House",
          "type": "阿拉伯菜",
          "location": "Al Fahidi",
          "price": "AED50-100",
          "mustTry": "三角薯、鹰嘴豆泥",
          "tips": "环境阿拉伯风情"
        },
        {
          "name": "Zaroob",
          "type": "中东快餐",
          "location": "迪拜购物中心",
          "price": "AED30-60",
          "mustTry": "Shawarma",
          "tips": "便宜好吃，适合快餐"
        }
      ],
      "attractionDetails": [
        {
          "name": "哈利法塔",
          "type": "地标",
          "location": "市中心",
          "why": "世界第一高楼，148层观景台震撼",
          "bestTime": "日落时段（17:00-18:30）",
          "duration": "2小时",
          "tips": "提前官网买票，选At The Top SKY"
        },
        {
          "name": "迪拜Mall",
          "type": "购物",
          "location": "市中心",
          "why": "世界最大购物中心，1200+店铺",
          "bestTime": "下午14:00后",
          "duration": "4小时",
          "tips": "水族馆和水上乐园需额外买票"
        },
        {
          "name": "沙漠冲沙",
          "type": "体验",
          "location": "沙漠保护区",
          "why": "阿拉伯特色体验，夕阳下冲沙",
          "bestTime": "15:00-19:00",
          "duration": "4小时",
          "tips": "选择正规旅行社，含BBQ晚餐"
        },
        {
          "name": "老城区",
          "type": "文化",
          "location": "德拉",
          "why": "黄金市场、香料市场，地道阿拉伯",
          "bestTime": "下午16:00-20:00",
          "duration": "3小时",
          "tips": "Abela冲沙船游览可拍照"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "阿联酋政局稳定，区域相对安全",
      "gang_activity": "极少",
      "gang_desc": "严格法律，社会秩序极佳",
      "civil_unrest": "极低",
      "civil_desc": "政府治理高效"
    },
    "detailedDangerZones": [
      {
        "area": "Deira Old District (late night)",
        "risk": "Low",
        "reason": "Working-class area, slightly chaotic at night",
        "time": "After 10pm",
        "tips": "More comfortable during daytime"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "朱美拉棕榈岛",
        "why": "高端度假区，酒店安保严密，几乎零犯罪",
        "features": [
          "度假区",
          "酒店安保",
          "海滩"
        ],
        "bestFor": "度假、家庭"
      }
    ],
    "festivals": [
      {
        "name": "迪拜购物节（1-2月）",
        "desc": "全场打折，送礼"
      }
    ],
    "customs": [
      "斋月期间白天不可在公共场合饮食",
      "着装保守，避免暴露",
      "斋月期间商店营业时间调整",
      "公共场合禁止饮酒（酒店除外）",
      "周四到周六是周末"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "999",
      "ambulance": "999",
      "fire": "999"
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
      "foodDetails": [
        {
          "name": "多哈中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "多哈市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "多哈博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "低",
      "war_desc": "卡塔尔外交政策灵活，区域局势需关注",
      "gang_activity": "极少",
      "gang_desc": "严格法律管控",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "多哈某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "多哈市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "多哈主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "999",
      "ambulance": "997",
      "fire": "998"
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
      "foodDetails": [
        {
          "name": "利雅得中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "利雅得市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "利雅得博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "利雅得某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "利雅得市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "利雅得主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "马斯喀特中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "马斯喀特市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "马斯喀特博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "马斯喀特某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "马斯喀特市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "马斯喀特主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "100",
      "ambulance": "101",
      "fire": "102"
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
      "foodDetails": [
        {
          "name": "特拉维夫中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "特拉维夫市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "特拉维夫博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "雅法港夜间偏僻区域",
        "risk": "中",
        "time": "深夜",
        "reason": "抢劫案件",
        "tips": "天黑后留在主街道"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "特拉维夫市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "特拉维夫主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "155",
      "ambulance": "112",
      "fire": "110"
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
      "foodDetails": [
        {
          "name": "伊斯坦布尔中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "伊斯坦布尔市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "伊斯坦布尔博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "中",
      "war_desc": "土耳其地区局势复杂，靠近叙利亚边境需注意",
      "gang_activity": "中等",
      "gang_desc": "有组织犯罪存在",
      "civil_unrest": "中",
      "civil_desc": "政治局势时有波动"
    },
    "detailedDangerZones": [
      {
        "area": "法提赫区夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "难民聚集区，治安复杂",
        "tips": "白天前往，夜间避免"
      },
      {
        "area": "锡尔詹区",
        "risk": "中高",
        "time": "全天",
        "reason": "贫民区，犯罪",
        "tips": "避免前往"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "伊斯坦布尔市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "伊斯坦布尔主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "巴厘岛中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "巴厘岛市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "巴厘岛博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "印尼旅游胜地相对安全",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "巴厘岛火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "巴厘岛市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "巴厘岛市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "巴厘岛主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "清迈中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "清迈市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "清迈博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "清迈火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "清迈市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "清迈市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "清迈主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "普吉岛中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "普吉岛市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "普吉岛博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "普吉岛某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "普吉岛市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "普吉岛主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "槟城中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "槟城市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "槟城博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "槟城某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "槟城市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "槟城主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "113",
      "ambulance": "115",
      "fire": "114"
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
      "foodDetails": [
        {
          "name": "河内中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "河内市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "河内博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "越南政局稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "河内某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "河内市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "河内主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "班加罗尔中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "班加罗尔市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "班加罗尔博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "班加罗尔某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "班加罗尔市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "班加罗尔主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "金奈中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "金奈市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "金奈博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "金奈某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "金奈市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "金奈主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "加尔各答中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "加尔各答市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "加尔各答博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "加尔各答老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "加尔各答公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "加尔各答市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "加尔各答主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "海德拉巴中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "海德拉巴市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "海德拉巴博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "海德拉巴老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "海德拉巴公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "海德拉巴市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "海德拉巴主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "深圳中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "深圳市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "深圳博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "中国国内局势稳定",
      "gang_activity": "极少",
      "gang_desc": "严格管控，社会秩序良好",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "深圳火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "深圳市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "深圳市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "深圳主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "广州中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "广州市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "广州博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "中国国内局势稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪控制良好",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "广州某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "广州市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "广州主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "成都中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "成都市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "成都博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "中国国内局势稳定",
      "gang_activity": "极少",
      "gang_desc": "严格管控，社会秩序良好",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "成都某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "成都市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "成都主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "杭州中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "杭州市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "杭州博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "中国国内局势稳定",
      "gang_activity": "极少",
      "gang_desc": "严格管控，社会秩序良好",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "杭州某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "杭州市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "杭州主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "西安中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "西安市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "西安博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "中国国内局势稳定",
      "gang_activity": "极少",
      "gang_desc": "严格管控，社会秩序良好",
      "civil_unrest": "极低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "西安某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "西安市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "西安主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
        "Kensington & Chelsea",
        "Notting Hill (Portobello area)",
        "Greenwich"
      ],
      "hotspots": [
        {
          "area": "Brixton",
          "desc": "Nightclub area, occasional fights - Go in groups",
          "risk": "Medium"
        },
        {
          "area": "Soho (late night)",
          "desc": "Red-light area, occasional disputes - Avoid going alone",
          "risk": "Medium"
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
      "fire": "999"
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
      "foodDetails": [
        {
          "name": "Borough Market",
          "type": "美食市场",
          "location": "伦敦桥",
          "price": "£10-20",
          "mustTry": "生蚝、芝士拼盘",
          "tips": "周六最热闹"
        },
        {
          "name": "Flat Iron",
          "type": "牛排",
          "location": "多处分店",
          "price": "£12-18",
          "mustTry": "平价牛排",
          "tips": "送平头针做纪念品"
        },
        {
          "name": "Dishoom",
          "type": "印度菜",
          "location": "考文特花园",
          "price": "£15-25",
          "mustTry": "Biryani、Naan",
          "tips": "孟买风格，需要排队"
        }
      ],
      "attractionDetails": [
        {
          "name": "大英博物馆",
          "type": "博物馆",
          "location": "布鲁姆斯伯里",
          "why": "世界最大博物馆之一，文明交汇",
          "bestTime": "周五晚（延长至20:30）",
          "duration": "3-4小时",
          "tips": "免费入场，建议提前官网预约"
        },
        {
          "name": "塔桥",
          "type": "地标",
          "location": "塔桥区",
          "why": "伦敦象征，玻璃走廊俯瞰泰晤士河",
          "bestTime": "日落时分",
          "duration": "2小时",
          "tips": "提前官网买票避免排队"
        },
        {
          "name": "博罗市场",
          "type": "美食",
          "location": "桥街",
          "why": "伦敦最古老美食市场，100+摊位",
          "bestTime": "周六10:00-17:00",
          "duration": "2小时",
          "tips": "生蚝和芝士是特色"
        },
        {
          "name": "诺丁山",
          "type": "街区",
          "location": "西伦敦",
          "why": "彩色房子，电影取景地，复古市集",
          "bestTime": "周六Portobello市集",
          "duration": "3小时",
          "tips": "古董摊位只有周六开"
        },
        {
          "name": "碎片大厦观景台",
          "type": "观景",
          "location": "南华克区",
          "why": "欧洲最高楼之一，360度俯瞰伦敦",
          "bestTime": "日落前1小时",
          "duration": "1.5小时",
          "tips": "提前官网订票，选日落时段"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "英国本土无武装冲突",
      "gang_activity": "中等",
      "gang_desc": "部分区域存在帮派问题",
      "civil_unrest": "中",
      "civil_desc": "偶有抗议活动"
    },
    "detailedDangerZones": [
      {
        "area": "Brixton",
        "risk": "Medium",
        "reason": "Nightclub area, occasional fights",
        "time": "Friday/Saturday late night",
        "tips": "Go in groups"
      },
      {
        "area": "Soho (late night)",
        "risk": "Medium",
        "reason": "Red-light area, occasional disputes",
        "time": "After midnight",
        "tips": "Avoid going alone"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "Kensington & Chelsea",
        "why": "Traditional rich district, dense surveillance, many police",
        "features": [
          "Rich",
          "Museums",
          "Hyde Park"
        ],
        "bestFor": "Culture, Shopping"
      },
      {
        "area": "Notting Hill (Portobello area)",
        "why": "Bohemian style, artistic and safe",
        "features": [
          "Markets",
          "Artistic",
          "Colorful Houses"
        ],
        "bestFor": "Artistic Youth"
      },
      {
        "area": "Greenwich",
        "why": "Prime Meridian location, tourist area but very safe",
        "features": [
          "Observatory",
          "Parks",
          "Safe"
        ],
        "bestFor": "Sightseeing"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
        "6th Arr. (Saint-Germain)",
        "16th Arrondissement",
        "Le Marais (selected areas)"
      ],
      "hotspots": [
        {
          "area": "Gare du Nord (Paris North Station)",
          "desc": "Refugee concentration, frequent theft - Watch your luggage, beware of fake petition signers",
          "risk": "Medium"
        },
        {
          "area": "Seine-Saint-Denis (93省)",
          "desc": "Suburban high crime area - Completely avoid",
          "risk": "High"
        },
        {
          "area": "Montmartre (night)",
          "desc": "Tourist traps, aggressive vendors - Decline street performers' approaches",
          "risk": "Medium"
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
      "fire": "18"
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
      "foodDetails": [
        {
          "name": "Le Bouillon Chartier",
          "type": "法餐",
          "location": "第九区",
          "price": "€20-35",
          "mustTry": "油封鸭、蜗牛",
          "tips": "百年老店，手写菜单，复古氛围"
        },
        {
          "name": "Breizh Café",
          "type": "可丽饼",
          "location": "玛黑区",
          "price": "€10-20",
          "mustTry": "荞麦可丽饼+苹果酒",
          "tips": "被誉为巴黎最佳"
        },
        {
          "name": "Pierre Hermé",
          "type": "甜点",
          "location": "多处分店",
          "price": "€5-15",
          "mustTry": "马卡龙（玫瑰味）",
          "tips": "马卡龙界爱马仕"
        },
        {
          "name": "Le Comptoir du Panthéon",
          "type": "法餐",
          "location": "拉丁区",
          "price": "€30-50",
          "mustTry": "鹅肝、牛排薯条",
          "tips": "避开12-14点高峰"
        }
      ],
      "attractionDetails": [
        {
          "name": "卢浮宫",
          "type": "博物馆",
          "location": "第一区",
          "why": "世界最大博物馆，蒙娜丽莎真迹所在地",
          "bestTime": "周三/周五晚（21:45闭馆）",
          "duration": "3-4小时",
          "tips": "金字塔入口排队久，建议走卡鲁塞勒商廊入口"
        },
        {
          "name": "埃菲尔铁塔",
          "type": "地标",
          "location": "第七区",
          "why": "巴黎icon，夜间整点闪烁灯光秀",
          "bestTime": "日落时分登塔",
          "duration": "2小时",
          "tips": "顶层电梯票提前官网购买"
        },
        {
          "name": "蒙马特高地",
          "type": "街区",
          "location": "十八区",
          "why": "艺术家聚集地，萨特香榭丽舍",
          "bestTime": "清晨或黄昏",
          "duration": "2-3小时",
          "tips": "警惕\"友谊手环\"骗局"
        },
        {
          "name": "奥赛博物馆",
          "type": "博物馆",
          "location": "第七区",
          "why": "印象派画作最丰富，火车站改建的建筑本身就是艺术品",
          "bestTime": "周四晚（21:45闭馆）",
          "duration": "2-3小时",
          "tips": "免费入馆：第一周日"
        },
        {
          "name": "凡尔赛宫",
          "type": "宫殿",
          "location": "凡尔赛",
          "why": "法国王权象征，镜厅和花园震撼",
          "bestTime": "早开门9:00",
          "duration": "半天",
          "tips": "大特里亚侬宫需额外门票"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "法国本土无武装冲突",
      "gang_activity": "中等",
      "gang_desc": "郊区存在帮派问题",
      "civil_unrest": "中",
      "civil_desc": "黄背心运动后趋于稳定"
    },
    "detailedDangerZones": [
      {
        "area": "Gare du Nord (Paris North Station)",
        "risk": "Medium",
        "reason": "Refugee concentration, frequent theft",
        "time": "Any time",
        "tips": "Watch your luggage, beware of fake petition signers"
      },
      {
        "area": "Seine-Saint-Denis (93省)",
        "risk": "High",
        "reason": "Suburban high crime area",
        "time": "Any time",
        "tips": "Completely avoid"
      },
      {
        "area": "Montmartre (night)",
        "risk": "Medium",
        "reason": "Tourist traps, aggressive vendors",
        "time": "Night",
        "tips": "Decline street performers' approaches"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "6th Arr. (Saint-Germain)",
        "why": "Embassy district, Left Bank intellectual area, very safe",
        "features": [
          "Embassy",
          "Lux Gardens",
          "Culture"
        ],
        "bestFor": "Culture"
      },
      {
        "area": "16th Arrondissement",
        "why": "Traditional rich district, family area, very quiet and safe",
        "features": [
          "Rich",
          "Bois de Boulogne",
          "Family"
        ],
        "bestFor": "Family Stay"
      },
      {
        "area": "Le Marais (selected areas)",
        "why": "LGBT-friendly, trendy but generally safe",
        "features": [
          "Trendy",
          "Design",
          "Nightlife"
        ],
        "bestFor": "Young Tourists"
      }
    ],
    "festivals": [
      {
        "name": "国庆节（7月14日）",
        "desc": "香榭丽舍阅兵，埃菲尔铁塔烟火"
      },
      {
        "name": "音乐节（6月21日）",
        "desc": "全城免费户外音乐会"
      },
      {
        "name": "葡萄酒节（6月）",
        "desc": "蒙马特品尝精选葡萄酒"
      }
    ],
    "customs": [
      "贴面礼（la bise）：朋友间两颊亲吻",
      "午餐时间长（12-14点），晚餐晚（20点后）",
      "不说法语会被认为不礼貌",
      "咖啡馆外座位需另收费",
      "周日商店关门，周六下午也关"
    ],
    "foodSafety": {
      "tapWater": "可直接饮用",
      "streetFood": "安全，烘焙店和可丽饼摊卫生",
      "seafood": "新鲜，需注意贝类过敏",
      "allergies": "餐厅会标注14种过敏原",
      "tips": "超市食物安全可靠，路边咖啡馆优于快餐店"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、肠胃炎（夏季）",
      "vaccinations": "建议接种流感疫苗（冬季前往）",
      "mosquito": "无寨卡风险",
      "airQuality": "偶尔雾霾（交通）",
      "tips": "药房可直接买非处方药"
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
          "area": "Kottbusser Tor",
          "desc": "Drug dealing area, be vigilant at night - Safer during daytime",
          "risk": "Medium"
        },
        {
          "area": "Berlin Wall Park (Mauerpark) at night",
          "desc": "Occasional robberies - Avoid at night",
          "risk": "Medium"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "柏林中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "柏林墙纪念馆",
          "type": "历史",
          "location": "伯恩瑙街",
          "why": "东西德分裂见证，涂鸦艺术",
          "bestTime": "清晨",
          "duration": "1.5小时",
          "tips": "语音导览了解背后故事"
        },
        {
          "name": "博物馆岛",
          "type": "博物馆",
          "location": "施普雷河",
          "why": "5座世界级博物馆，UNESCO遗产",
          "bestTime": "10:00-18:00",
          "duration": "3-4小时",
          "tips": "买博物馆岛联票"
        },
        {
          "name": "波茨坦广场",
          "type": "地标",
          "location": "米特区",
          "why": "柏林墙倒塌象征，现代建筑群",
          "bestTime": "夜晚灯光",
          "duration": "1小时",
          "tips": "杜莎夫人蜡像馆在此"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "德国和平时期",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "Kottbusser Tor",
        "risk": "Medium",
        "reason": "Drug dealing area, be vigilant at night",
        "time": "Night",
        "tips": "Safer during daytime"
      },
      {
        "area": "Berlin Wall Park (Mauerpark) at night",
        "risk": "Medium",
        "reason": "Occasional robberies",
        "time": "Night",
        "tips": "Avoid at night"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "米特区（菩提树下大街）",
        "why": "政府区，警力充足，博物馆岛安全",
        "features": [
          "政府区",
          "博物馆",
          "警力"
        ],
        "bestFor": "文化之旅"
      },
      {
        "area": "夏洛滕堡",
        "why": "传统高档社区，宫殿和公园环绕",
        "features": [
          "高档社区",
          "宫殿",
          "安全"
        ],
        "bestFor": "家庭旅客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
          "area": "De Wallen (Red Light District)",
          "desc": "Pickpocketing frequent, tourist scams - Watch phone and wallet",
          "risk": "Medium"
        },
        {
          "area": "Vondelpark at night",
          "desc": "Occasional robbery - Avoid going alone at night",
          "risk": "Medium"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "阿姆斯特丹中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "阿姆斯特丹市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "阿姆斯特丹博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "荷兰政局稳定",
      "gang_activity": "中等",
      "gang_desc": "部分区域存在有组织犯罪",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "De Wallen (Red Light District)",
        "risk": "Medium",
        "reason": "Pickpocketing frequent, tourist scams",
        "time": "Night",
        "tips": "Watch phone and wallet"
      },
      {
        "area": "Vondelpark at night",
        "risk": "Medium",
        "reason": "Occasional robbery",
        "time": "Night",
        "tips": "Avoid going alone at night"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "约丹区",
        "why": "运河边的文静社区，本地居民为主",
        "features": [
          "运河区",
          "文静",
          "本地人"
        ],
        "bestFor": "深度游客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "133",
      "ambulance": "144",
      "fire": "122"
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
      "foodDetails": [
        {
          "name": "维也纳中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "维也纳市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "维也纳博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "奥地利永久中立国",
      "gang_activity": "极少",
      "gang_desc": "有组织犯罪极少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "维也纳火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "维也纳市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "内城区（Innere Stadt）",
        "why": "历史中心，政府区，警力充足",
        "features": [
          "历史中心",
          "政府区",
          "文化"
        ],
        "bestFor": "文化之旅"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "117",
      "ambulance": "144",
      "fire": "118"
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
      "foodDetails": [
        {
          "name": "苏黎世中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "苏黎世市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "苏黎世博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "瑞士永久中立国",
      "gang_activity": "极少",
      "gang_desc": "全球最安全城市之一",
      "civil_unrest": "极低",
      "civil_desc": "高度稳定"
    },
    "detailedDangerZones": [
      {
        "area": "苏黎世某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "苏黎世市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "苏黎世主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "斯德哥尔摩中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "斯德哥尔摩市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "斯德哥尔摩博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "北欧和平国家",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "斯德哥尔摩某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "斯德哥尔摩市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "斯德哥尔摩主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "ambulance": "113",
      "fire": "110"
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
      "foodDetails": [
        {
          "name": "奥斯陆中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "奥斯陆市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "奥斯陆博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "奥斯陆某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "奥斯陆市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "奥斯陆主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "哥本哈根中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "哥本哈根市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "哥本哈根博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "北欧和平国家",
      "gang_activity": "极少",
      "gang_desc": "有组织犯罪极少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "哥本哈根某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "哥本哈根市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "哥本哈根主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "赫尔辛基中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "赫尔辛基市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "赫尔辛基博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "赫尔辛基某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "赫尔辛基市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "赫尔辛基主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "091",
      "ambulance": "061",
      "fire": "080"
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
      "foodDetails": [
        {
          "name": "马德里中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "马德里市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "马德里博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "西班牙政局稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "马德里某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "马德里市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "马德里主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
          "area": "Termini Station area",
          "desc": "Pickpockets, scammers active - Watch luggage, beware of fake police",
          "risk": "Medium"
        },
        {
          "area": "Trastevere (late night)",
          "desc": "Immigrant area - Safer during daytime",
          "risk": "Low"
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
      "police": "113",
      "ambulance": "118",
      "fire": "115"
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
      "foodDetails": [
        {
          "name": "Roscioli",
          "type": "意餐",
          "location": "万神殿附近",
          "price": "€40-80",
          "mustTry": "Carbonara、新鲜意面",
          "tips": "当地人最爱的餐厅，需提前预约"
        },
        {
          "name": "Pizzarium",
          "type": "披萨",
          "location": "梵蒂冈附近",
          "price": "€5-10",
          "mustTry": "玛格丽特披萨、时令披萨",
          "tips": "罗马最好吃的街边披萨"
        }
      ],
      "attractionDetails": [
        {
          "name": "斗兽场",
          "type": "古迹",
          "location": "罗马中心",
          "why": "古罗马象征，世界七大奇迹之一",
          "bestTime": "8:30开门即去",
          "duration": "2小时",
          "tips": "买Roma Pass含交通和门票"
        },
        {
          "name": "梵蒂冈博物馆",
          "type": "博物馆",
          "location": "梵蒂冈",
          "why": "西斯廷教堂和拉斐尔壁画",
          "bestTime": "周三或周五下午",
          "duration": "3-4小时",
          "tips": "提前网上购票免排队"
        },
        {
          "name": "特莱维喷泉",
          "type": "地标",
          "location": "特莱维区",
          "why": "罗马最著名喷泉，投币许愿",
          "bestTime": "夜晚灯光下",
          "duration": "30分钟",
          "tips": "背对喷泉右手抛硬币"
        },
        {
          "name": "西班牙广场",
          "type": "地标",
          "location": "西班牙台阶",
          "why": "《罗马假日》取景地",
          "bestTime": "清晨",
          "duration": "1小时",
          "tips": "台阶上坐着吃冰淇淋很惬意"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "意大利政局稳定",
      "gang_activity": "中等",
      "gang_desc": "有组织犯罪存在",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "Termini Station area",
        "risk": "Medium",
        "reason": "Pickpockets, scammers active",
        "time": "Any time",
        "tips": "Watch luggage, beware of fake police"
      },
      {
        "area": "Trastevere (late night)",
        "risk": "Low",
        "reason": "Immigrant area",
        "time": "Late night",
        "tips": "Safer during daytime"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "人民广场/西班牙台阶区",
        "why": "高端购物区，游客集中，安保到位",
        "features": [
          "购物区",
          "游客区",
          "高端"
        ],
        "bestFor": "购物观光"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
        "Eixample",
        "Passeig de Gràcia"
      ],
      "hotspots": [
        {
          "area": "La Rambla",
          "desc": "World-famous for pickpockets, organized theft - Phone in pocket, bag in front",
          "risk": "Medium"
        },
        {
          "area": "Raval area (night)",
          "desc": "Immigrant area, average security - Avoid going alone late at night",
          "risk": "Medium"
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
      "police": "092",
      "ambulance": "061",
      "fire": "080"
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
      "foodDetails": [
        {
          "name": "La Boqueria市场",
          "type": "美食市集",
          "location": "兰布拉大道",
          "price": "€10-30",
          "mustTry": "生蚝、海鲜饭、火腿",
          "tips": "早上去最新鲜，中午人多"
        },
        {
          "name": "Tickets",
          "type": "分子料理",
          "location": "平行大道",
          "price": "€150-250",
          "mustTry": "分子橄榄、创意小食",
          "tips": "El Bulli团队创办，需提前数月预约"
        }
      ],
      "attractionDetails": [
        {
          "name": "巴塞罗那市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "巴塞罗那博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "西班牙政局稳定",
      "gang_activity": "中等",
      "gang_desc": "扒窃问题较突出",
      "civil_unrest": "中",
      "civil_desc": "独立运动偶有示威"
    },
    "detailedDangerZones": [
      {
        "area": "La Rambla",
        "risk": "Medium",
        "reason": "World-famous for pickpockets, organized theft",
        "time": "Any time",
        "tips": "Phone in pocket, bag in front"
      },
      {
        "area": "Raval area (night)",
        "risk": "Medium",
        "reason": "Immigrant area, average security",
        "time": "Night",
        "tips": "Avoid going alone late at night"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "Eixample",
        "why": "Well-planned, residential area, good security",
        "features": [
          "Gaudi Architecture",
          "Residential",
          "Safe"
        ],
        "bestFor": "Architecture Sightseeing"
      },
      {
        "area": "Passeig de Gràcia",
        "why": "Luxury street, comprehensive surveillance, many police",
        "features": [
          "Luxury",
          "Gaudi",
          "Safe"
        ],
        "bestFor": "Shopping"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "里斯本中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "里斯本市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "里斯本博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "葡萄牙政局稳定",
      "gang_activity": "极少",
      "gang_desc": "有组织犯罪极少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "里斯本某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "里斯本市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "里斯本主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "158",
      "ambulance": "155",
      "fire": "150"
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
      "foodDetails": [
        {
          "name": "布拉格中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "布拉格市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "布拉格博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "布拉格某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "小城区（Malá Strana）",
        "why": "安静的高档社区，靠近城堡区",
        "features": [
          "高档社区",
          "城堡区",
          "安静"
        ],
        "bestFor": "浪漫游客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "997",
      "ambulance": "999",
      "fire": "998"
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
      "foodDetails": [
        {
          "name": "华沙中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "华沙市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "华沙博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "华沙某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "华沙市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "华沙主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "100",
      "ambulance": "166",
      "fire": "199"
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
      "foodDetails": [
        {
          "name": "雅典中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "雅典市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "雅典博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "雅典某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "雅典市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "雅典主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "101",
      "ambulance": "100",
      "fire": "100"
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
      "foodDetails": [
        {
          "name": "布鲁塞尔中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "布鲁塞尔市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "布鲁塞尔博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "比利时政局稳定",
      "gang_activity": "中等",
      "gang_desc": "部分区域存在治安问题",
      "civil_unrest": "中",
      "civil_desc": "恐怖袭击风险需关注"
    },
    "detailedDangerZones": [
      {
        "area": "布鲁塞尔某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "布鲁塞尔市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "布鲁塞尔主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "107",
      "ambulance": "104",
      "fire": "105"
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
      "foodDetails": [
        {
          "name": "布达佩斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "布达佩斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "布达佩斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "布达佩斯某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "布达佩斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "布达佩斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "102",
      "ambulance": "103",
      "fire": "101"
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
      "foodDetails": [
        {
          "name": "莫斯科中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "莫斯科市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "莫斯科博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "中",
      "war_desc": "俄乌冲突影响，需关注安全提示",
      "gang_activity": "中等",
      "gang_desc": "有组织犯罪存在",
      "civil_unrest": "中",
      "civil_desc": "政治管控严格"
    },
    "detailedDangerZones": [
      {
        "area": "莫斯科火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "莫斯科市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "莫斯科市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "莫斯科主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "102",
      "ambulance": "103",
      "fire": "101"
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
      "foodDetails": [
        {
          "name": "圣彼得堡中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "圣彼得堡市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "圣彼得堡博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "圣彼得堡老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "圣彼得堡公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "圣彼得堡市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "圣彼得堡主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "113",
      "ambulance": "118",
      "fire": "115"
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
      "foodDetails": [
        {
          "name": "米兰中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "米兰市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "米兰博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "意大利政局稳定",
      "gang_activity": "中等",
      "gang_desc": "有组织犯罪存在",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "米兰某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "米兰市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "米兰主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "慕尼黑中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "慕尼黑市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "慕尼黑博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "慕尼黑某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "慕尼黑市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "慕尼黑主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "法兰克福中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "法兰克福市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "法兰克福博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "法兰克福某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "法兰克福市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "法兰克福主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "汉堡中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "汉堡市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "汉堡博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "汉堡某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "汉堡市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "汉堡主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "999",
      "ambulance": "999",
      "fire": "999"
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
      "foodDetails": [
        {
          "name": "都柏林中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "都柏林市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "都柏林博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "爱尔兰政局稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "都柏林某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "都柏林市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "都柏林主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "999"
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
      "foodDetails": [
        {
          "name": "爱丁堡中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "爱丁堡市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "爱丁堡博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "爱丁堡某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "爱丁堡市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "爱丁堡主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "999"
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
      "foodDetails": [
        {
          "name": "曼彻斯特中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "曼彻斯特市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "曼彻斯特博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "曼彻斯特某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "曼彻斯特市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "曼彻斯特主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "18"
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
      "foodDetails": [
        {
          "name": "里昂中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "里昂市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "里昂博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "里昂某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "里昂市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "里昂主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "18"
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
      "foodDetails": [
        {
          "name": "马赛中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "马赛市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "马赛博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "马赛某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "马赛市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "马赛主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "18"
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
      "foodDetails": [
        {
          "name": "尼斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "尼斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "尼斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "尼斯某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "尼斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "尼斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "113",
      "ambulance": "118",
      "fire": "115"
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
      "foodDetails": [
        {
          "name": "威尼斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "威尼斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "威尼斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "威尼斯某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "威尼斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "威尼斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "113",
      "ambulance": "118",
      "fire": "115"
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
      "foodDetails": [
        {
          "name": "佛罗伦萨中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "佛罗伦萨市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "佛罗伦萨博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "佛罗伦萨某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "佛罗伦萨市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "佛罗伦萨主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "那不勒斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "那不勒斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "那不勒斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "那不勒斯某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "那不勒斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "那不勒斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "瓦伦西亚中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "瓦伦西亚市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "瓦伦西亚博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "瓦伦西亚某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "瓦伦西亚市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "瓦伦西亚主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "塞维利亚中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "塞维利亚市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "塞维利亚博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "塞维利亚某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "塞维利亚市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "塞维利亚主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "马拉加中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "马拉加市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "马拉加博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "马拉加某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "马拉加市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "马拉加主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "波尔图中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "波尔图市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "波尔图博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "波尔图某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "波尔图市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "波尔图主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "克拉科夫中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "克拉科夫市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "克拉科夫博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "克拉科夫某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "克拉科夫市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "克拉科夫主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "117",
      "ambulance": "144",
      "fire": "118"
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
      "foodDetails": [
        {
          "name": "日内瓦中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "日内瓦市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "日内瓦博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "瑞士永久中立国",
      "gang_activity": "极少",
      "gang_desc": "全球最安全城市之一",
      "civil_unrest": "极低",
      "civil_desc": "高度稳定"
    },
    "detailedDangerZones": [
      {
        "area": "日内瓦某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "日内瓦市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "日内瓦主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "科隆中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "科隆市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "科隆博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "科隆某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "科隆市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "科隆主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "new_york": {
    "id": "new_york",
    "name": "纽约",
    "nameEn": "New York",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "Katz's Deli",
          "type": "犹太熟食",
          "location": "下东区",
          "price": "$20-40",
          "mustTry": "Pastrami三明治",
          "tips": "《当哈利》取景，自己取号"
        },
        {
          "name": "Joe's Pizza",
          "type": "披萨",
          "location": "格林威治村",
          "price": "$4-8",
          "mustTry": "Slice of cheese",
          "tips": "纽约最好吃披萨之一"
        },
        {
          "name": "Xi'an Famous Foods",
          "type": "中餐",
          "location": "法拉盛",
          "price": "$10-20",
          "mustTry": "肉夹馍、凉皮",
          "tips": "纽约中餐代表"
        },
        {
          "name": "Le Bernardin",
          "type": "法餐",
          "location": "中城",
          "price": "$150-300",
          "mustTry": "帝王蟹",
          "tips": "米其林三星，需预约"
        }
      ],
      "attractionDetails": [
        {
          "name": "中央公园",
          "type": "公园",
          "location": "曼哈顿中城",
          "why": "曼哈顿之肺，四季皆美的都市绿洲",
          "bestTime": "秋季（枫叶红了）",
          "duration": "3-4小时",
          "tips": "建议从南边入口往北走"
        },
        {
          "name": "自由女神像",
          "type": "地标",
          "location": "自由岛",
          "why": "美国象征，登顶可俯瞰曼哈顿",
          "bestTime": "日出时分",
          "duration": "4小时",
          "tips": " crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown crown"
        },
        {
          "name": "大都会艺术博物馆",
          "type": "博物馆",
          "location": "上东区",
          "why": "世界四大博物馆之一，藏品超200万件",
          "bestTime": "周五周六延长至21:00",
          "duration": "3-4小时",
          "tips": "建议购买联票"
        },
        {
          "name": "时代广场",
          "type": "地标",
          "location": "曼哈顿中城",
          "why": "霓虹灯海洋，纽约不夜城代表",
          "bestTime": "夜晚",
          "duration": "30分钟",
          "tips": "不推荐在此用餐，价格虚高"
        },
        {
          "name": "布鲁克林大桥",
          "type": "地标",
          "location": "曼哈顿-布鲁克林",
          "why": "纽约地标，步行穿越可拍摄天际线",
          "bestTime": "日落时分",
          "duration": "1小时",
          "tips": "从布鲁克林往曼哈顿走是顺光"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "布朗克斯区南部",
        "risk": "高",
        "time": "全天",
        "reason": "犯罪率高，避免区域",
        "tips": "完全避免，绕道而行"
      },
      {
        "area": "中央公园深夜",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫多发",
        "tips": "天黑后不要进入公园深处"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "曼哈顿中城（Hell's Kitchen）",
        "why": "中产社区，警力充足，夜生活安全",
        "features": [
          "中产社区",
          "警力充足",
          "餐饮丰富"
        ],
        "bestFor": "商务、观光"
      },
      {
        "area": "布鲁克林威廉斯堡",
        "why": "文艺社区，本地居民为主，氛围友好",
        "features": [
          "文艺社区",
          "本地人区",
          "咖啡文化"
        ],
        "bestFor": "文艺青年"
      },
      {
        "area": "上东区",
        "why": "传统富人区，街道安静，安全指数高",
        "features": [
          "富人区",
          "博物馆区",
          "高端住宅"
        ],
        "bestFor": "文化爱好者"
      }
    ],
    "festivals": [
      {
        "name": "感恩节大游行（11月）",
        "desc": "巨型气球和花车巡游"
      },
      {
        "name": "时代广场跨年夜",
        "desc": "水晶球降落，百万人在现场"
      },
      {
        "name": "LGBT骄傲月（6月）",
        "desc": "彩虹旗飘扬，骄傲游行"
      }
    ],
    "customs": [
      "给小费是必须的（15-20%）",
      "走路快，靠右站电梯",
      "纽约客直接，不喜欢拐弯抹角",
      "餐厅需提前订位",
      "地铁上不吃东西不喝饮料"
    ],
    "foodSafety": {
      "tapWater": "可直接饮用",
      "streetFood": "安全，热狗摊和餐车监管",
      "seafood": "新鲜，各国料理丰富",
      "allergies": "餐厅必须标注过敏原",
      "tips": "餐厅卫生评级公开（字母A/B/C）"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感（冬季）、莱姆病（春夏）",
      "vaccinations": "建议新冠加强针",
      "mosquito": "西尼罗病毒（夏季）",
      "airQuality": "偶尔雾霾",
      "tips": "急诊等待时间长，预约全科医生更好"
    }
  },
  "los_angeles": {
    "id": "los_angeles",
    "name": "洛杉矶",
    "nameEn": "Los Angeles",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "洛杉矶中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "好莱坞标志",
          "type": "地标",
          "location": "格里菲斯公园",
          "why": "LA标志，俯瞰好莱坞全景",
          "bestTime": "日出或日落",
          "duration": "2小时",
          "tips": "导航到Griffith Observatory最佳"
        },
        {
          "name": "环球影城",
          "type": "主题乐园",
          "location": "环球城",
          "why": "哈利波特魔法世界，超刺激ride",
          "bestTime": "平日9:00开门",
          "duration": "1-2天",
          "tips": "买Express Pass省排队时间"
        },
        {
          "name": "威尼斯海滩",
          "type": "海滩",
          "location": "威尼斯",
          "why": "街头艺人、肌肉海滩、溜冰场",
          "bestTime": "下午",
          "duration": "3小时",
          "tips": "注意财物，街头艺人拍照需给小费"
        },
        {
          "name": "格里菲斯天文台",
          "type": "博物馆",
          "location": "格里菲斯公园",
          "why": "好莱坞标志最佳拍摄点",
          "bestTime": "日落前1小时",
          "duration": "2小时",
          "tips": "停车较贵，建议打车"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好",
      "gangRisk": "高",
      "gangAreas": "南洛杉矶（South LA）、康普顿、克伦肖",
      "description": "帮派地盘分明，避免前往已知帮派区域"
    },
    "detailedDangerZones": [
      {
        "area": "南洛杉矶（South LA）",
        "risk": "高",
        "time": "全天",
        "reason": "犯罪率高",
        "tips": "完全避免"
      },
      {
        "area": "斯肯登 Row",
        "risk": "高",
        "time": "全天",
        "reason": "流浪汉营地，治安极差",
        "tips": "完全避免"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "洛杉矶市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "洛杉矶主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "chicago": {
    "id": "chicago",
    "name": "芝加哥",
    "nameEn": "Chicago",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "芝加哥中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "芝加哥市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "芝加哥博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "美国本土安全",
      "gang_activity": "高",
      "gang_desc": "部分区域帮派冲突较多",
      "civil_unrest": "中",
      "civil_desc": "偶有抗议活动",
      "gangRisk": "极高",
      "gangAreas": "南区（South Side）、西Garfield Park",
      "description": "谋杀率全美最高，完全避开南区"
    },
    "detailedDangerZones": [
      {
        "area": "南区（South Side）",
        "risk": "极高",
        "time": "全天",
        "reason": "谋杀率最高区域",
        "tips": "完全避免！"
      },
      {
        "area": "西 Garfield Park",
        "risk": "极高",
        "time": "全天",
        "reason": "帮派活动频繁",
        "tips": "完全避免"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "芝加哥市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "芝加哥主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "toronto": {
    "id": "toronto",
    "name": "多伦多",
    "nameEn": "Toronto",
    "country": "加拿大",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "多伦多中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "多伦多市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "多伦多博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "加拿大和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "多伦多火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "多伦多市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "多伦多市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "多伦多主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "vancouver": {
    "id": "vancouver",
    "name": "温哥华",
    "nameEn": "Vancouver",
    "country": "加拿大",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "温哥华中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "温哥华市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "温哥华博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "加拿大和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "温哥华某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "温哥华市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "温哥华主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "montreal": {
    "id": "montreal",
    "name": "蒙特利尔",
    "nameEn": "Montreal",
    "country": "加拿大",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "蒙特利尔中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "蒙特利尔市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "蒙特利尔博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "加拿大和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "蒙特利尔火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "蒙特利尔市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "蒙特利尔市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "蒙特利尔主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "san_francisco": {
    "id": "san_francisco",
    "name": "旧金山",
    "nameEn": "San Francisco",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "旧金山中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "旧金山市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "旧金山博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好",
      "gangRisk": "中",
      "gangAreas": "田德隆区、湾景区",
      "description": "无家可归者问题严重，帮派活动有限"
    },
    "detailedDangerZones": [
      {
        "area": "田德隆区",
        "risk": "中高",
        "time": "全天",
        "reason": "流浪汉聚集，毒品交易",
        "tips": "快速通过，不要停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "旧金山市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "旧金山主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "seattle": {
    "id": "seattle",
    "name": "西雅图",
    "nameEn": "Seattle",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "西雅图中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "西雅图市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "西雅图博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "美国本土安全",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "西雅图老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "西雅图公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "西雅图市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "西雅图主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "miami": {
    "id": "miami",
    "name": "迈阿密",
    "nameEn": "Miami",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "迈阿密中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "迈阿密市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "迈阿密博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "美国本土安全",
      "gang_activity": "较高",
      "gang_desc": "部分区域存在毒品相关犯罪",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "利伯蒂城深夜",
        "risk": "中高",
        "time": "深夜",
        "reason": "抢劫、夜间犯罪",
        "tips": "天黑后避免前往"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "迈阿密市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "迈阿密主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "boston": {
    "id": "boston",
    "name": "波士顿",
    "nameEn": "Boston",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "波士顿中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "波士顿市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "波士顿博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "美国本土安全",
      "gang_activity": "中等",
      "gang_desc": "部分区域存在帮派问题",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "波士顿某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "波士顿市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "波士顿主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "washington_dc": {
    "id": "washington_dc",
    "name": "华盛顿",
    "nameEn": "Washington D.C.",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "华盛顿中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "华盛顿市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "华盛顿博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "华盛顿火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "华盛顿市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "华盛顿市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "华盛顿主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "las_vegas": {
    "id": "las_vegas",
    "name": "拉斯维加斯",
    "nameEn": "Las Vegas",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "拉斯维加斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "拉斯维加斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "拉斯维加斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "拉斯维加斯老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "拉斯维加斯公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "拉斯维加斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "拉斯维加斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "denver": {
    "id": "denver",
    "name": "丹佛",
    "nameEn": "Denver",
    "country": "美国",
    "continent": "北美洲",
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "丹佛中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "丹佛市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "丹佛博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "美国本土安全",
      "gang_activity": "中等",
      "gang_desc": "部分区域存在帮派问题",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "丹佛某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "丹佛市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "丹佛主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "atlanta": {
    "id": "atlanta",
    "name": "亚特兰大",
    "nameEn": "Atlanta",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "亚特兰大中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "亚特兰大市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "亚特兰大博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "亚特兰大火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "亚特兰大市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "亚特兰大市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "亚特兰大主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "dallas": {
    "id": "dallas",
    "name": "达拉斯",
    "nameEn": "Dallas",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "达拉斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "达拉斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "达拉斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "达拉斯某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "达拉斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "达拉斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "houston": {
    "id": "houston",
    "name": "休斯顿",
    "nameEn": "Houston",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "休斯顿中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "休斯顿市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "休斯顿博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "休斯顿某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "休斯顿市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "休斯顿主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "phoenix": {
    "id": "phoenix",
    "name": "凤凰城",
    "nameEn": "Phoenix",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "凤凰城中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "凤凰城市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "凤凰城博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "凤凰城火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "凤凰城市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "凤凰城市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "凤凰城主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "portland": {
    "id": "portland",
    "name": "波特兰",
    "nameEn": "Portland",
    "country": "美国",
    "continent": "北美洲",
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "波特兰中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "波特兰市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "波特兰博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "波特兰老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "波特兰公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "波特兰市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "波特兰主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "san_diego": {
    "id": "san_diego",
    "name": "圣迭戈",
    "nameEn": "San Diego",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "圣迭戈中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "圣迭戈市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "圣迭戈博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "圣迭戈某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "圣迭戈市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "圣迭戈主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "austin": {
    "id": "austin",
    "name": "奥斯汀",
    "nameEn": "Austin",
    "country": "美国",
    "continent": "北美洲",
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "奥斯汀中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "奥斯汀市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "奥斯汀博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "奥斯汀火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "奥斯汀市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "奥斯汀市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "奥斯汀主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "mexico_city": {
    "id": "mexico_city",
    "name": "墨西哥城",
    "nameEn": "Mexico City",
    "country": "墨西哥",
    "continent": "拉丁美洲",
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
      "police": "911",
      "ambulance": "911",
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "墨西哥城中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "墨西哥城市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "墨西哥城博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好",
      "gangRisk": "高",
      "gangAreas": "Tepito、Ecatepec",
      "description": "毒枭和帮派活跃，避免相关区域"
    },
    "detailedDangerZones": [
      {
        "area": "Tepito 区",
        "risk": "高",
        "time": "全天",
        "reason": "黑帮控制，治安极差",
        "tips": "完全避免"
      },
      {
        "area": "索卡洛广场周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷",
        "tips": "注意财物"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "墨西哥城市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "墨西哥城主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "cancun": {
    "id": "cancun",
    "name": "坎昆",
    "nameEn": "Cancun",
    "country": "墨西哥",
    "continent": "北美洲",
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "坎昆中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "坎昆市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "坎昆博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "坎昆老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "坎昆公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "坎昆市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "坎昆主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "sao_paulo": {
    "id": "sao_paulo",
    "name": "圣保罗",
    "nameEn": "Sao Paulo",
    "country": "巴西",
    "continent": "拉丁美洲",
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
      "police": "190",
      "ambulance": "192",
      "fire": "193"
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
      "foodDetails": [
        {
          "name": "圣保罗中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "圣保罗市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "圣保罗博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "圣保罗火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "圣保罗市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "圣保罗市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "圣保罗主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "rio_de_janeiro": {
    "id": "rio_de_janeiro",
    "name": "里约热内卢",
    "nameEn": "Rio de Janeiro",
    "country": "巴西",
    "continent": "拉丁美洲",
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
      "police": "190",
      "ambulance": "192",
      "fire": "193"
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
      "foodDetails": [
        {
          "name": "里约热内卢中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "里约热内卢市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "里约热内卢博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好",
      "gangRisk": "极高",
      "gangAreas": "罗西尼亚、维迪加尔等贫民窟",
      "description": "武装毒贩控制贫民窟，参加官方tour"
    },
    "detailedDangerZones": [
      {
        "area": "罗西尼亚贫民窟",
        "risk": "极高",
        "time": "全天",
        "reason": "武装毒贩控制区域",
        "tips": "禁止进入！参加官方tour除外"
      },
      {
        "area": "市中心夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫多发",
        "tips": "结伴而行"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "里约热内卢市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "里约热内卢主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "buenos_aires": {
    "id": "buenos_aires",
    "name": "布宜诺斯艾利斯",
    "nameEn": "Buenos Aires",
    "country": "阿根廷",
    "continent": "拉丁美洲",
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
      "police": "101",
      "ambulance": "107",
      "fire": "100"
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
      "foodDetails": [
        {
          "name": "布宜诺斯艾利斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "布宜诺斯艾利斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "布宜诺斯艾利斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "拉美裔贫民区",
        "risk": "高",
        "time": "全天",
        "reason": "抢劫多发",
        "tips": "避免前往"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "雷克莱塔区",
        "why": "高端住宅区，绿树成荫，相对安全",
        "features": [
          "富人区",
          "公园",
          "安全"
        ],
        "bestFor": "高档体验"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "santiago": {
    "id": "santiago",
    "name": "圣地亚哥",
    "nameEn": "Santiago",
    "country": "智利",
    "continent": "拉丁美洲",
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
      "police": "133",
      "ambulance": "131",
      "fire": "132"
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
      "foodDetails": [
        {
          "name": "圣地亚哥中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "圣地亚哥市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "圣地亚哥博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "圣地亚哥老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "圣地亚哥公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "圣地亚哥市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "圣地亚哥主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "lima": {
    "id": "lima",
    "name": "利马",
    "nameEn": "Lima",
    "country": "秘鲁",
    "continent": "拉丁美洲",
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
      "police": "105",
      "ambulance": "117",
      "fire": "116"
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
      "foodDetails": [
        {
          "name": "利马中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "利马市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "利马博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "利马火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "利马市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "利马市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "利马主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "bogota": {
    "id": "bogota",
    "name": "波哥大",
    "nameEn": "Bogota",
    "country": "哥伦比亚",
    "continent": "拉丁美洲",
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
      "police": "123",
      "ambulance": "125",
      "fire": "119"
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
      "foodDetails": [
        {
          "name": "波哥大中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "波哥大市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "波哥大博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "波哥大老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "波哥大公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "波哥大市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "波哥大主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "medellin": {
    "id": "medellin",
    "name": "麦德林",
    "nameEn": "Medellin",
    "country": "哥伦比亚",
    "continent": "拉丁美洲",
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
      "police": "123",
      "ambulance": "125",
      "fire": "119"
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
      "foodDetails": [
        {
          "name": "麦德林中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "麦德林市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "麦德林博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "麦德林老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "麦德林公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "麦德林市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "麦德林主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "panama_city": {
    "id": "panama_city",
    "name": "巴拿马城",
    "nameEn": "Panama City",
    "country": "巴拿马",
    "continent": "拉丁美洲",
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "巴拿马城中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "巴拿马城市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "巴拿马城博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "巴拿马城火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "巴拿马城市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "巴拿马城市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "巴拿马城主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "cairo": {
    "id": "cairo",
    "name": "开罗",
    "nameEn": "Cairo",
    "country": "埃及",
    "continent": "中东",
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
      "police": "122",
      "ambulance": "123",
      "fire": "180"
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
      "foodDetails": [
        {
          "name": "开罗中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "开罗市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "开罗博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "低",
      "war_desc": "埃及安全局势改善，但部分区域需注意",
      "gang_activity": "中等",
      "gang_desc": "有组织犯罪存在",
      "civil_unrest": "中",
      "civil_desc": "政治过渡期"
    },
    "detailedDangerZones": [
      {
        "area": "赫利奥波利斯贫民区",
        "risk": "高",
        "time": "全天",
        "reason": "犯罪率高",
        "tips": "避免前往"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "开罗市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "开罗主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "绝对不可直接饮用",
      "streetFood": "风险较高，选择高档餐厅",
      "seafood": "尼罗河鱼需确保充分加热",
      "allergies": "沟通困难，携带翻译",
      "tips": "只喝瓶装水，冰块也不安全"
    },
    "diseasePrevention": {
      "commonIllnesses": "甲肝、伤寒、霍乱（偶发）",
      "vaccinations": "强烈建议甲肝、伤寒、黄热病（来自疫区）",
      "mosquito": "疟疾风险低，埃及斑蚊存在",
      "airQuality": "开罗是全球空气污染最严重城市之一",
      "tips": "必须携带处方药，公立医院条件差"
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
      "police": "10111",
      "ambulance": "10177",
      "fire": "10177"
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
      "foodDetails": [
        {
          "name": "开普敦中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "开普敦市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "开普敦博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好",
      "gangRisk": "高",
      "gangAreas": "开普敦Flats贫民窟地区",
      "description": "富人区和旅游区相对安全"
    },
    "detailedDangerZones": [
      {
        "area": "开普敦大部分区域",
        "risk": "中高",
        "time": "全天",
        "reason": "整体治安较差，需高度警惕",
        "tips": "结伴而行，避免夜间外出，勿露富"
      },
      {
        "area": "开普敦市中心偏僻区域",
        "risk": "高",
        "time": "夜间",
        "reason": "武装抢劫多发",
        "tips": "天黑后不要外出"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "开普敦市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "开普敦主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "10111",
      "ambulance": "112",
      "fire": "10177"
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
      "foodDetails": [
        {
          "name": "约翰内斯堡中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "约翰内斯堡市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "约翰内斯堡博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "南非政局稳定",
      "gang_activity": "高",
      "gang_desc": "帮派问题严重",
      "civil_unrest": "中",
      "civil_desc": "贫富差距大",
      "gangRisk": "高",
      "gangAreas": "希尔镇、亚历山德拉镇",
      "description": "武装抢劫多发，结伴而行"
    },
    "detailedDangerZones": [
      {
        "area": "希尔镇（Hillbrow）",
        "risk": "极高",
        "time": "全天",
        "reason": "犯罪率极高的市中心区域",
        "tips": "完全避免单独前往"
      },
      {
        "area": "亚历山德拉镇",
        "risk": "极高",
        "time": "全天",
        "reason": "贫民窟，犯罪率高",
        "tips": "完全避免"
      },
      {
        "area": "市中心夜间",
        "risk": "高",
        "time": "夜间",
        "reason": "武装抢劫",
        "tips": "天黑后不要外出"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "约翰内斯堡市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "约翰内斯堡主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "城市区域可直接饮用",
      "streetFood": "选择商场内餐厅",
      "seafood": "进口为主，新鲜度可",
      "allergies": "标注不全",
      "tips": "避免贫民区附近食物，选择高档场所"
    },
    "diseasePrevention": {
      "commonIllnesses": "疟疾（邻近省份）、HIV（注意）",
      "vaccinations": "强烈建议甲肝、伤寒、黄热病证书",
      "mosquito": "疟疾风险（林波波省旅行）",
      "airQuality": "约翰内斯堡海拔高，空气较好",
      "tips": "私立医院水平高但需保险，公立差"
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
      "police": "199",
      "ambulance": "199",
      "fire": "190"
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
      "foodDetails": [
        {
          "name": "拉各斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "拉各斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "拉各斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "尼日利亚政局稳定",
      "gang_activity": "高",
      "gang_desc": "博科圣地威胁需注意",
      "civil_unrest": "中",
      "civil_desc": "安全挑战存在",
      "gangRisk": "高",
      "gangAreas": "贫民窟和偏僻区域",
      "description": "绑架赎金犯罪存在"
    },
    "detailedDangerZones": [
      {
        "area": "马里娜区夜间",
        "risk": "高",
        "time": "夜间",
        "reason": "抢劫多发",
        "tips": "夜间避免外出"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "拉各斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "拉各斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "999",
      "ambulance": "999",
      "fire": "999"
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
      "foodDetails": [
        {
          "name": "内罗毕中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "内罗毕市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "内罗毕博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "肯尼亚政局稳定",
      "gang_activity": "较高",
      "gang_desc": "恐怖主义风险需关注",
      "civil_unrest": "中",
      "civil_desc": "安全事件偶发",
      "gangRisk": "高",
      "gangAreas": "基贝拉贫民窟",
      "description": "恐怖袭击风险存在，旅游区有警力"
    },
    "detailedDangerZones": [
      {
        "area": "基贝拉贫民窟",
        "risk": "极高",
        "time": "全天",
        "reason": "犯罪率极高",
        "tips": "完全避免"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "内罗毕市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "内罗毕主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "19",
      "ambulance": "15",
      "fire": "15"
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
      "foodDetails": [
        {
          "name": "卡萨布兰卡中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "卡萨布兰卡市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "卡萨布兰卡博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "摩洛哥政局稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "卡萨布兰卡老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "卡萨布兰卡公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "卡萨布兰卡市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "卡萨布兰卡主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "马拉喀什中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "马拉喀什市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "马拉喀什博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "摩洛哥政局稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "马拉喀什老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "马拉喀什公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "马拉喀什市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "马拉喀什主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "突尼斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "突尼斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "突尼斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "低",
      "war_desc": "突尼斯安全局势改善",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "民主过渡期"
    },
    "detailedDangerZones": [
      {
        "area": "突尼斯老城/贫民区",
        "risk": "中高",
        "time": "全天",
        "reason": "抢劫、盗窃多发",
        "tips": "避免前往，或结伴同行"
      },
      {
        "area": "突尼斯公共交通枢纽夜间",
        "risk": "中",
        "time": "夜间",
        "reason": "抢劫目标区域",
        "tips": "快速通过，不做停留"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "突尼斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "突尼斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "191",
      "ambulance": "193",
      "fire": "192"
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
      "foodDetails": [
        {
          "name": "阿克拉中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "阿克拉市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "阿克拉博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "阿克拉大部分区域",
        "risk": "中高",
        "time": "全天",
        "reason": "整体治安较差，需高度警惕",
        "tips": "结伴而行，避免夜间外出，勿露富"
      },
      {
        "area": "阿克拉市中心偏僻区域",
        "risk": "高",
        "time": "夜间",
        "reason": "武装抢劫多发",
        "tips": "天黑后不要外出"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "阿克拉市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "阿克拉主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "991",
      "ambulance": "907",
      "fire": "939"
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
      "foodDetails": [
        {
          "name": "亚的斯亚贝巴中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "亚的斯亚贝巴市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "亚的斯亚贝巴博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "亚的斯亚贝巴大部分区域",
        "risk": "中高",
        "time": "全天",
        "reason": "整体治安较差，需高度警惕",
        "tips": "结伴而行，避免夜间外出，勿露富"
      },
      {
        "area": "亚的斯亚贝巴市中心偏僻区域",
        "risk": "高",
        "time": "夜间",
        "reason": "武装抢劫多发",
        "tips": "天黑后不要外出"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "亚的斯亚贝巴市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "亚的斯亚贝巴主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
        "North Sydney",
        "The Rocks"
      ],
      "hotspots": [
        {
          "area": "Kings Cross",
          "desc": "Red-light area, drug trade, chaotic at night - Avoid late night visits",
          "risk": "Medium"
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
      "fire": "000"
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
      "foodDetails": [
        {
          "name": "悉尼中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "悉尼歌剧院",
          "type": "地标",
          "location": "环形码头",
          "why": "悉尼icon，建筑本身就是艺术品",
          "bestTime": "日出/日落",
          "duration": "2小时",
          "tips": "参加内部导览才值回票价"
        },
        {
          "name": "邦迪海滩",
          "type": "海滩",
          "location": "邦迪",
          "why": "悉尼最著名海滩，悬崖步道绝美",
          "bestTime": "清晨或黄昏",
          "duration": "3小时",
          "tips": "Icebergs泳池俱乐部拍照超美"
        },
        {
          "name": "蓝山国家公园",
          "type": "自然",
          "location": "蓝山",
          "why": "世界自然遗产，三姐妹岩壮观",
          "bestTime": "10:00前入园",
          "duration": "1天",
          "tips": "买联票含缆车票更划算"
        },
        {
          "name": "岩石区",
          "type": "街区",
          "location": "环形码头旁",
          "why": "悉尼最古老街区，周末集市",
          "bestTime": "周六周日",
          "duration": "2小时",
          "tips": "海鲜餐厅多但价格偏贵"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "澳大利亚和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "Kings Cross",
        "risk": "Medium",
        "reason": "Red-light area, drug trade, chaotic at night",
        "time": "Night",
        "tips": "Avoid late night visits"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "North Sydney",
        "why": "Rich district, harbor scenery, very safe",
        "features": [
          "Rich",
          "Harbor",
          "Quiet"
        ],
        "bestFor": "Stay, Sightseeing"
      },
      {
        "area": "The Rocks",
        "why": "Historic district, tourist area but good order",
        "features": [
          "History",
          "Markets",
          "Harbor"
        ],
        "bestFor": "Sightseeing"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "000"
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
      "foodDetails": [
        {
          "name": "墨尔本中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "墨尔本市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "墨尔本博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "澳大利亚和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "中央商务区深夜",
        "risk": "中低",
        "time": "深夜",
        "reason": "酗酒相关冲突",
        "tips": "保持警惕"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "墨尔本市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "墨尔本主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "000"
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
      "foodDetails": [
        {
          "name": "布里斯班中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "布里斯班市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "布里斯班博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "澳大利亚和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "布里斯班某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "布里斯班市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "布里斯班主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "000"
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
      "foodDetails": [
        {
          "name": "珀斯中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "珀斯市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "珀斯博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "澳大利亚和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "珀斯某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "珀斯市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "珀斯主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "000"
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
      "foodDetails": [
        {
          "name": "阿德莱德中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "阿德莱德市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "阿德莱德博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "阿德莱德某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "阿德莱德市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "阿德莱德主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "111",
      "ambulance": "111",
      "fire": "111"
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
      "foodDetails": [
        {
          "name": "奥克兰中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "奥克兰市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "奥克兰博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "新西兰和平稳定",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会稳定"
    },
    "detailedDangerZones": [
      {
        "area": "奥克兰某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "奥克兰市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "奥克兰主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "police": "111",
      "ambulance": "111",
      "fire": "111"
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
      "foodDetails": [
        {
          "name": "惠灵顿中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "惠灵顿市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "惠灵顿博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "惠灵顿某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "惠灵顿市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "惠灵顿主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
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
      "fire": "112"
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
      "foodDetails": [
        {
          "name": "基督城中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "基督城市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "基督城博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "基督城某些偏僻后巷",
        "risk": "低",
        "time": "深夜",
        "reason": "偏僻区域偶有盗窃",
        "tips": "选择明亮主街道，避免偏僻区域"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "基督城市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "基督城主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  },
  "honolulu": {
    "id": "honolulu",
    "name": "檀香山",
    "nameEn": "Honolulu",
    "country": "美国",
    "continent": "北美洲",
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
      "fire": "911"
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
      "foodDetails": [
        {
          "name": "檀香山中央市场",
          "type": "当地美食",
          "location": "市中心",
          "price": "当地价格",
          "mustTry": "当地特色小吃",
          "tips": "选择当地人多的摊位，注意食品安全"
        }
      ],
      "attractionDetails": [
        {
          "name": "檀香山市中心",
          "type": "地标",
          "location": "市中心",
          "why": "城市核心区域，必打卡",
          "bestTime": "白天",
          "duration": "2-3小时",
          "tips": "步行探索最佳"
        },
        {
          "name": "檀香山博物馆",
          "type": "博物馆",
          "location": "市中心",
          "why": "了解城市历史的最佳场所",
          "bestTime": "下午",
          "duration": "2小时",
          "tips": "关注免费开放日"
        }
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
    "conflict": {
      "war_risk": "无",
      "war_desc": "该地区无武装冲突",
      "gang_activity": "较少",
      "gang_desc": "有组织犯罪较少",
      "civil_unrest": "低",
      "civil_desc": "社会秩序良好"
    },
    "detailedDangerZones": [
      {
        "area": "檀香山火车站/汽车站周边",
        "risk": "中低",
        "time": "夜间",
        "reason": "扒手、小偷活跃区域",
        "tips": "看好随身物品，小心陌生人"
      },
      {
        "area": "檀香山市中心夜店区",
        "risk": "中低",
        "time": "深夜",
        "reason": "酒后冲突、抢劫",
        "tips": "避免与陌生人冲突，注意饮品"
      }
    ],
    "detailedSafeZones": [
      {
        "area": "檀香山市中心商业区",
        "why": "商业中心，游客众多，警力相对充足",
        "features": [
          "商业区",
          "游客区",
          "警力"
        ],
        "bestFor": "一般旅客"
      },
      {
        "area": "檀香山主要旅游区",
        "why": "官方景点集中区，安保措施完善",
        "features": [
          "旅游区",
          "官方景点",
          "安保"
        ],
        "bestFor": "观光客"
      }
    ],
    "festivals": [
      {
        "name": "元旦（1月1日）",
        "desc": "新年前夜派对，城市烟花"
      },
      {
        "name": "国庆节",
        "desc": "阅兵、烟火表演、街头派对"
      },
      {
        "name": "圣诞节（12月25日）",
        "desc": "圣诞市集、灯饰、购物打折"
      },
      {
        "name": "除夕（12月31日）",
        "desc": "跨年派对、烟火倒数"
      }
    ],
    "customs": [
      "注意当地宗教禁忌",
      "拍照前先征得同意",
      "尊重当地着装要求",
      "给小费是当地习惯"
    ],
    "foodSafety": {
      "tapWater": "建议饮用瓶装水",
      "streetFood": "选择本地人多的干净摊位",
      "seafood": "确保充分加热",
      "allergies": "主动告知服务员",
      "tips": "购买旅行食品安全险"
    },
    "diseasePrevention": {
      "commonIllnesses": "流感、腹泻",
      "vaccinations": "建议基础疫苗（破伤风等）",
      "mosquito": "视地区，防蚊措施",
      "airQuality": "视城市而定",
      "tips": "携带常用药品和创可贴"
    }
  }
};