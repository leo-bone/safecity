
// ============================================================
// SafeCity Global - 全球城市安全数据库 v3.0
// 包含100个全球知名城市，完整安全评分数据
// ============================================================

var CITY_DATABASE = {
  'tokyo': {
    "id": "tokyo",
    "name": "东京",
    "nameEn": "Tokyo",
    "country": "日本",
    "continent": "亚洲",
    "flag": "🇯🇵",
    "lat": 35.6762,
    "lng": 139.6503,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "safety": {
      "overall": 92,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "极低犯罪率",
      "世界级公共交通",
      "优质医疗体系"
    ],
    "risks": [
      "地震风险",
      "台风季节"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "119",
      "fire": "119"
    }
  },
  'singapore': {
    "id": "singapore",
    "name": "新加坡",
    "nameEn": "Singapore",
    "country": "新加坡",
    "continent": "亚洲",
    "flag": "🇸🇬",
    "lat": 1.3521,
    "lng": 103.8198,
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "safety": {
      "overall": 95,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "全球最安全城市之一",
      "严格法律执行",
      "高效公共交通"
    ],
    "risks": [
      "高生活成本",
      "炎热潮湿气候"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "995",
      "fire": "995"
    }
  },
  'seoul': {
    "id": "seoul",
    "name": "首尔",
    "nameEn": "Seoul",
    "country": "韩国",
    "continent": "亚洲",
    "flag": "🇰🇷",
    "lat": 37.5665,
    "lng": 126.978,
    "image": "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "低暴力犯罪率",
      "发达地铁网络",
      "24小时便利城市"
    ],
    "risks": [
      "小偷小摸",
      "地缘政治敏感"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "119",
      "fire": "119"
    }
  },
  'hong_kong': {
    "id": "hong_kong",
    "name": "香港",
    "nameEn": "Hong Kong",
    "country": "中国香港",
    "continent": "亚洲",
    "flag": "🇭🇰",
    "lat": 22.3193,
    "lng": 114.1694,
    "image": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80",
    "safety": {
      "overall": 85,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "低犯罪率",
      "卓越医疗设施",
      "高效公共交通"
    ],
    "risks": [
      "台风季节",
      "密集人群"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "999"
    }
  },
  'beijing': {
    "id": "beijing",
    "name": "北京",
    "nameEn": "Beijing",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 39.9042,
    "lng": 116.4074,
    "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80",
    "safety": {
      "overall": 82,
      "grade": "B+",
      "grades": {
        "crime": "A-",
        "transport": "B+",
        "health": "B+",
        "natural": "B+"
      }
    },
    "highlights": [
      "低暴力犯罪",
      "完善地铁网络",
      "现代医疗"
    ],
    "risks": [
      "空气污染",
      "交通拥堵",
      "扒窃"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "120",
      "fire": "119"
    }
  },
  'shanghai': {
    "id": "shanghai",
    "name": "上海",
    "nameEn": "Shanghai",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 31.2304,
    "lng": 121.4737,
    "image": "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=400&q=80",
    "safety": {
      "overall": 83,
      "grade": "B+",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "B+",
        "natural": "B"
      }
    },
    "highlights": [
      "低暴力犯罪",
      "便捷交通",
      "国际化医疗"
    ],
    "risks": [
      "台风",
      "扒窃",
      "交通事故"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "120",
      "fire": "119"
    }
  },
  'bangkok': {
    "id": "bangkok",
    "name": "曼谷",
    "nameEn": "Bangkok",
    "country": "泰国",
    "continent": "亚洲",
    "flag": "🇹🇭",
    "lat": 13.7563,
    "lng": 100.5018,
    "image": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400&q=80",
    "safety": {
      "overall": 68,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "C+",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "热情好客",
      "丰富医疗选择",
      "国际化城市"
    ],
    "risks": [
      "交通混乱",
      "骗局常见",
      "洪水风险"
    ],
    "emergency": {
      "police": "191",
      "ambulance": "1669",
      "fire": "199"
    }
  },
  'kuala_lumpur': {
    "id": "kuala_lumpur",
    "name": "吉隆坡",
    "nameEn": "Kuala Lumpur",
    "country": "马来西亚",
    "continent": "亚洲",
    "flag": "🇲🇾",
    "lat": 3.139,
    "lng": 101.6869,
    "image": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "B+",
        "natural": "B"
      }
    },
    "highlights": [
      "多元文化",
      "现代医疗",
      "便利交通"
    ],
    "risks": [
      "扒窃频繁",
      "摩托车抢劫",
      "暴雨洪涝"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "994"
    }
  },
  'taipei': {
    "id": "taipei",
    "name": "台北",
    "nameEn": "Taipei",
    "country": "中国台湾",
    "continent": "亚洲",
    "flag": "🇹🇼",
    "lat": 25.033,
    "lng": 121.5654,
    "image": "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=400&q=80",
    "safety": {
      "overall": 86,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "低犯罪率",
      "友善居民",
      "便利捷运"
    ],
    "risks": [
      "地震台风",
      "摩托车多"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "119",
      "fire": "119"
    }
  },
  'osaka': {
    "id": "osaka",
    "name": "大阪",
    "nameEn": "Osaka",
    "country": "日本",
    "continent": "亚洲",
    "flag": "🇯🇵",
    "lat": 34.6937,
    "lng": 135.5023,
    "image": "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?w=400&q=80",
    "safety": {
      "overall": 90,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "极低犯罪率",
      "美食天堂",
      "便捷交通"
    ],
    "risks": [
      "地震风险",
      "台风"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "119",
      "fire": "119"
    }
  },
  'mumbai': {
    "id": "mumbai",
    "name": "孟买",
    "nameEn": "Mumbai",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 19.076,
    "lng": 72.8777,
    "image": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80",
    "safety": {
      "overall": 54,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C+",
        "health": "B-",
        "natural": "C"
      }
    },
    "highlights": [
      "印度金融中心",
      "多元文化"
    ],
    "risks": [
      "扒窃频繁",
      "拥挤交通",
      "季风洪涝",
      "卫生隐患"
    ],
    "emergency": {
      "police": "100",
      "ambulance": "102",
      "fire": "101"
    }
  },
  'delhi': {
    "id": "delhi",
    "name": "新德里",
    "nameEn": "New Delhi",
    "country": "印度",
    "continent": "亚洲",
    "flag": "🇮🇳",
    "lat": 28.6139,
    "lng": 77.209,
    "image": "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?w=400&q=80",
    "safety": {
      "overall": 48,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "C+",
        "natural": "C+"
      }
    },
    "highlights": [
      "历史名城",
      "国际航空枢纽"
    ],
    "risks": [
      "严重空气污染",
      "犯罪率较高",
      "交通混乱",
      "极端高温"
    ],
    "emergency": {
      "police": "100",
      "ambulance": "102",
      "fire": "101"
    }
  },
  'jakarta': {
    "id": "jakarta",
    "name": "雅加达",
    "nameEn": "Jakarta",
    "country": "印度尼西亚",
    "continent": "亚洲",
    "flag": "🇮🇩",
    "lat": -6.2088,
    "lng": 106.8456,
    "image": "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "B-",
        "natural": "C+"
      }
    },
    "highlights": [
      "东南亚最大城市",
      "经济活力"
    ],
    "risks": [
      "严重交通拥堵",
      "洪水频发",
      "扒窃",
      "地面沉降"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "118",
      "fire": "113"
    }
  },
  'ho_chi_minh': {
    "id": "ho_chi_minh",
    "name": "胡志明市",
    "nameEn": "Ho Chi Minh City",
    "country": "越南",
    "continent": "亚洲",
    "flag": "🇻🇳",
    "lat": 10.8231,
    "lng": 106.6297,
    "image": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80",
    "safety": {
      "overall": 63,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "C+",
        "health": "B-",
        "natural": "B-"
      }
    },
    "highlights": [
      "快速发展城市",
      "美食文化丰富"
    ],
    "risks": [
      "摩托车抢劫",
      "交通混乱",
      "洪涝",
      "食品安全"
    ],
    "emergency": {
      "police": "113",
      "ambulance": "115",
      "fire": "114"
    }
  },
  'manila': {
    "id": "manila",
    "name": "马尼拉",
    "nameEn": "Manila",
    "country": "菲律宾",
    "continent": "亚洲",
    "flag": "🇵🇭",
    "lat": 14.5995,
    "lng": 120.9842,
    "image": "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=400&q=80",
    "safety": {
      "overall": 45,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "B-",
        "natural": "C"
      }
    },
    "highlights": [
      "热带气候",
      "友好居民"
    ],
    "risks": [
      "暴力犯罪",
      "台风频繁",
      "交通严重堵塞",
      "洪涝"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'almaty': {
    "id": "almaty",
    "name": "阿拉木图",
    "nameEn": "Almaty",
    "country": "哈萨克斯坦",
    "continent": "亚洲",
    "flag": "🇰🇿",
    "lat": 43.222,
    "lng": 76.8512,
    "image": "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "B-",
        "natural": "B-"
      }
    },
    "highlights": [
      "中亚大都市",
      "自然风光壮美"
    ],
    "risks": [
      "扒窃",
      "地震风险",
      "严冬气候"
    ],
    "emergency": {
      "police": "102",
      "ambulance": "103",
      "fire": "101"
    }
  },
  'tashkent': {
    "id": "tashkent",
    "name": "塔什干",
    "nameEn": "Tashkent",
    "country": "乌兹别克斯坦",
    "continent": "亚洲",
    "flag": "🇺🇿",
    "lat": 41.2995,
    "lng": 69.2401,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 68,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "B-",
        "health": "B-",
        "natural": "B-"
      }
    },
    "highlights": [
      "古丝绸之路",
      "现代化改造"
    ],
    "risks": [
      "地震活跃区",
      "夏季极热"
    ],
    "emergency": {
      "police": "102",
      "ambulance": "103",
      "fire": "101"
    }
  },
  'baku': {
    "id": "baku",
    "name": "巴库",
    "nameEn": "Baku",
    "country": "阿塞拜疆",
    "continent": "亚洲",
    "flag": "🇦🇿",
    "lat": 40.4093,
    "lng": 49.8671,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 70,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "B",
        "health": "B-",
        "natural": "B"
      }
    },
    "highlights": [
      "里海明珠",
      "石油城市"
    ],
    "risks": [
      "扒窃",
      "政治敏感性"
    ],
    "emergency": {
      "police": "102",
      "ambulance": "103",
      "fire": "101"
    }
  },
  'yerevan': {
    "id": "yerevan",
    "name": "埃里温",
    "nameEn": "Yerevan",
    "country": "亚美尼亚",
    "continent": "亚洲",
    "flag": "🇦🇲",
    "lat": 40.1872,
    "lng": 44.5152,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 70,
      "grade": "B",
      "grades": {
        "crime": "B+",
        "transport": "B",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "古老文明",
      "粉红城市",
      "亚拉腊山景观"
    ],
    "risks": [
      "地区冲突",
      "地震",
      "经济波动"
    ],
    "emergency": {
      "police": "102",
      "ambulance": "103",
      "fire": "101"
    }
  },
  'tbilisi': {
    "id": "tbilisi",
    "name": "第比利斯",
    "nameEn": "Tbilisi",
    "country": "格鲁吉亚",
    "continent": "亚洲",
    "flag": "🇬🇪",
    "lat": 41.6938,
    "lng": 44.8015,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B+",
        "transport": "B",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "高加索明珠",
      "古城区魅力",
      "美食葡萄酒"
    ],
    "risks": [
      "地震",
      "部分区域扒窃",
      "地区局势"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'colombo': {
    "id": "colombo",
    "name": "科伦坡",
    "nameEn": "Colombo",
    "country": "斯里兰卡",
    "continent": "亚洲",
    "flag": "🇱🇰",
    "lat": 6.9271,
    "lng": 79.8612,
    "image": "https://images.unsplash.com/photo-1586861153861-14d06dfc8ed8?w=400&q=80",
    "safety": {
      "overall": 60,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "C+",
        "health": "B-",
        "natural": "B-"
      }
    },
    "highlights": [
      "发展中旅游城市",
      "历史文化丰富"
    ],
    "risks": [
      "扒窃",
      "交通混乱",
      "季风暴雨"
    ],
    "emergency": {
      "police": "119",
      "ambulance": "110",
      "fire": "111"
    }
  },
  'dhaka': {
    "id": "dhaka",
    "name": "达卡",
    "nameEn": "Dhaka",
    "country": "孟加拉国",
    "continent": "亚洲",
    "flag": "🇧🇩",
    "lat": 23.8103,
    "lng": 90.4125,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 38,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "D+",
        "health": "C",
        "natural": "C-"
      }
    },
    "highlights": [
      "纺织业中心",
      "历史名城"
    ],
    "risks": [
      "极度拥挤",
      "洪涝灾害",
      "空气污染",
      "交通事故频发"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "199",
      "fire": "199"
    }
  },
  'kathmandu': {
    "id": "kathmandu",
    "name": "加德满都",
    "nameEn": "Kathmandu",
    "country": "尼泊尔",
    "continent": "亚洲",
    "flag": "🇳🇵",
    "lat": 27.7172,
    "lng": 85.324,
    "image": "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "B-",
        "transport": "C",
        "health": "C+",
        "natural": "C"
      }
    },
    "highlights": [
      "喜马拉雅门户",
      "世界文化遗产"
    ],
    "risks": [
      "地震高风险",
      "空气污染严重",
      "卫生条件差"
    ],
    "emergency": {
      "police": "100",
      "ambulance": "102",
      "fire": "101"
    }
  },
  'phnom_penh': {
    "id": "phnom_penh",
    "name": "金边",
    "nameEn": "Phnom Penh",
    "country": "柬埔寨",
    "continent": "亚洲",
    "flag": "🇰🇭",
    "lat": 11.5564,
    "lng": 104.9282,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 52,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "C",
        "natural": "B-"
      }
    },
    "highlights": [
      "吴哥窟门户",
      "发展中城市",
      "丰富历史"
    ],
    "risks": [
      "抢劫",
      "摩托车盗窃",
      "卫生条件"
    ],
    "emergency": {
      "police": "117",
      "ambulance": "119",
      "fire": "118"
    }
  },
  'ulaanbaatar': {
    "id": "ulaanbaatar",
    "name": "乌兰巴托",
    "nameEn": "Ulaanbaatar",
    "country": "蒙古国",
    "continent": "亚洲",
    "flag": "🇲🇳",
    "lat": 47.8864,
    "lng": 106.9057,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C+",
        "health": "C+",
        "natural": "B-"
      }
    },
    "highlights": [
      "游牧文化圣地",
      "世界最冷首都之一"
    ],
    "risks": [
      "极端严寒",
      "空气污染",
      "扒窃"
    ],
    "emergency": {
      "police": "102",
      "ambulance": "103",
      "fire": "101"
    }
  },
  'london': {
    "id": "london",
    "name": "伦敦",
    "nameEn": "London",
    "country": "英国",
    "continent": "欧洲",
    "flag": "🇬🇧",
    "lat": 51.5074,
    "lng": -0.1278,
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80",
    "safety": {
      "overall": 78,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "世界金融中心",
      "完善医疗体系",
      "多元文化"
    ],
    "risks": [
      "扒窃",
      "部分区域犯罪"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "999"
    }
  },
  'paris': {
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
      "overall": 74,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "A-",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "世界文化之都",
      "一流医疗",
      "便捷地铁"
    ],
    "risks": [
      "扒窃频繁",
      "恐怖主义风险",
      "部分郊区治安差"
    ],
    "emergency": {
      "police": "17",
      "ambulance": "15",
      "fire": "18"
    }
  },
  'berlin': {
    "id": "berlin",
    "name": "柏林",
    "nameEn": "Berlin",
    "country": "德国",
    "continent": "欧洲",
    "flag": "🇩🇪",
    "lat": 52.52,
    "lng": 13.405,
    "image": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=80",
    "safety": {
      "overall": 80,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "历史文化丰富",
      "便捷公共交通",
      "高质量医疗"
    ],
    "risks": [
      "扒窃",
      "部分区域夜间治安"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'amsterdam': {
    "id": "amsterdam",
    "name": "阿姆斯特丹",
    "nameEn": "Amsterdam",
    "country": "荷兰",
    "continent": "欧洲",
    "flag": "🇳🇱",
    "lat": 52.3676,
    "lng": 4.9041,
    "image": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=400&q=80",
    "safety": {
      "overall": 82,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "自行车城市",
      "开放包容",
      "高质量生活"
    ],
    "risks": [
      "自行车盗窃",
      "大麻相关犯罪"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'vienna': {
    "id": "vienna",
    "name": "维也纳",
    "nameEn": "Vienna",
    "country": "奥地利",
    "continent": "欧洲",
    "flag": "🇦🇹",
    "lat": 48.2082,
    "lng": 16.3738,
    "image": "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "全球最宜居城市之一",
      "音乐文化之都",
      "完善基础设施"
    ],
    "risks": [
      "扒窃（景区）"
    ],
    "emergency": {
      "police": "133",
      "ambulance": "144",
      "fire": "122"
    }
  },
  'zurich': {
    "id": "zurich",
    "name": "苏黎世",
    "nameEn": "Zurich",
    "country": "瑞士",
    "continent": "欧洲",
    "flag": "🇨🇭",
    "lat": 47.3769,
    "lng": 8.5417,
    "image": "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&q=80",
    "safety": {
      "overall": 94,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "全球最安全城市之一",
      "顶级金融中心",
      "极高生活质量"
    ],
    "risks": [
      "生活成本极高"
    ],
    "emergency": {
      "police": "117",
      "ambulance": "144",
      "fire": "118"
    }
  },
  'stockholm': {
    "id": "stockholm",
    "name": "斯德哥尔摩",
    "nameEn": "Stockholm",
    "country": "瑞典",
    "continent": "欧洲",
    "flag": "🇸🇪",
    "lat": 59.3293,
    "lng": 18.0686,
    "image": "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&q=80",
    "safety": {
      "overall": 85,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "北欧福利国家",
      "创新中心",
      "自然环境优美"
    ],
    "risks": [
      "扒窃",
      "部分郊区犯罪"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'oslo': {
    "id": "oslo",
    "name": "奥斯陆",
    "nameEn": "Oslo",
    "country": "挪威",
    "continent": "欧洲",
    "flag": "🇳🇴",
    "lat": 59.9139,
    "lng": 10.7522,
    "image": "https://images.unsplash.com/photo-1588373959840-9cdf5eb8d26e?w=400&q=80",
    "safety": {
      "overall": 87,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "极低犯罪率",
      "北欧福利体系",
      "自然风光"
    ],
    "risks": [
      "生活成本极高",
      "极端严寒"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "113",
      "fire": "110"
    }
  },
  'copenhagen': {
    "id": "copenhagen",
    "name": "哥本哈根",
    "nameEn": "Copenhagen",
    "country": "丹麦",
    "continent": "欧洲",
    "flag": "🇩🇰",
    "lat": 55.6761,
    "lng": 12.5683,
    "image": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "幸福指数全球最高",
      "低犯罪率",
      "自行车天堂"
    ],
    "risks": [
      "自行车盗窃",
      "生活成本高"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'helsinki': {
    "id": "helsinki",
    "name": "赫尔辛基",
    "nameEn": "Helsinki",
    "country": "芬兰",
    "continent": "欧洲",
    "flag": "🇫🇮",
    "lat": 60.1699,
    "lng": 24.9384,
    "image": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&q=80",
    "safety": {
      "overall": 91,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "全球最安全城市之一",
      "高质量教育医疗",
      "清洁环境"
    ],
    "risks": [
      "极端严寒"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'madrid': {
    "id": "madrid",
    "name": "马德里",
    "nameEn": "Madrid",
    "country": "西班牙",
    "continent": "欧洲",
    "flag": "🇪🇸",
    "lat": 40.4168,
    "lng": -3.7038,
    "image": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&q=80",
    "safety": {
      "overall": 76,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "文化艺术之都",
      "便捷地铁",
      "世界级医疗"
    ],
    "risks": [
      "扒窃",
      "部分区域治安"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'rome': {
    "id": "rome",
    "name": "罗马",
    "nameEn": "Rome",
    "country": "意大利",
    "continent": "欧洲",
    "flag": "🇮🇹",
    "lat": 41.9028,
    "lng": 12.4964,
    "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "永恒之城",
      "世界遗产",
      "地中海气候"
    ],
    "risks": [
      "扒窃严重",
      "游客区欺诈",
      "交通混乱"
    ],
    "emergency": {
      "police": "113",
      "ambulance": "118",
      "fire": "115"
    }
  },
  'barcelona': {
    "id": "barcelona",
    "name": "巴塞罗那",
    "nameEn": "Barcelona",
    "country": "西班牙",
    "continent": "欧洲",
    "flag": "🇪🇸",
    "lat": 41.3851,
    "lng": 2.1734,
    "image": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&q=80",
    "safety": {
      "overall": 68,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "高迪建筑",
      "地中海美食",
      "活跃夜生活"
    ],
    "risks": [
      "扒窃全欧最高",
      "摩托车抢劫"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'lisbon': {
    "id": "lisbon",
    "name": "里斯本",
    "nameEn": "Lisbon",
    "country": "葡萄牙",
    "continent": "欧洲",
    "flag": "🇵🇹",
    "lat": 38.7223,
    "lng": -9.1393,
    "image": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
    "safety": {
      "overall": 79,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "B+",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "欧洲最西端首都",
      "温暖气候",
      "宜居城市"
    ],
    "risks": [
      "扒窃",
      "地震风险"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'prague': {
    "id": "prague",
    "name": "布拉格",
    "nameEn": "Prague",
    "country": "捷克",
    "continent": "欧洲",
    "flag": "🇨🇿",
    "lat": 50.0755,
    "lng": 14.4378,
    "image": "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&q=80",
    "safety": {
      "overall": 80,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "欧洲最美城市之一",
      "中世纪古城",
      "低消费"
    ],
    "risks": [
      "扒窃",
      "酒吧区欺诈"
    ],
    "emergency": {
      "police": "158",
      "ambulance": "155",
      "fire": "150"
    }
  },
  'warsaw': {
    "id": "warsaw",
    "name": "华沙",
    "nameEn": "Warsaw",
    "country": "波兰",
    "continent": "欧洲",
    "flag": "🇵🇱",
    "lat": 52.2297,
    "lng": 21.0122,
    "image": "https://images.unsplash.com/photo-1548407260-da850faa41e3?w=400&q=80",
    "safety": {
      "overall": 78,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "东欧发展最快城市",
      "历史文化复兴"
    ],
    "risks": [
      "扒窃",
      "汽车盗窃"
    ],
    "emergency": {
      "police": "997",
      "ambulance": "999",
      "fire": "998"
    }
  },
  'athens': {
    "id": "athens",
    "name": "雅典",
    "nameEn": "Athens",
    "country": "希腊",
    "continent": "欧洲",
    "flag": "🇬🇷",
    "lat": 37.9838,
    "lng": 23.7275,
    "image": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&q=80",
    "safety": {
      "overall": 70,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "A-",
        "natural": "B"
      }
    },
    "highlights": [
      "人类文明摇篮",
      "地中海气候",
      "历史遗迹"
    ],
    "risks": [
      "扒窃",
      "抗议活动",
      "地震风险"
    ],
    "emergency": {
      "police": "100",
      "ambulance": "166",
      "fire": "199"
    }
  },
  'brussels': {
    "id": "brussels",
    "name": "布鲁塞尔",
    "nameEn": "Brussels",
    "country": "比利时",
    "continent": "欧洲",
    "flag": "🇧🇪",
    "lat": 50.8503,
    "lng": 4.3517,
    "image": "https://images.unsplash.com/photo-1546771816-b1b6f3e01b13?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "欧盟首都",
      "巧克力啤酒之都"
    ],
    "risks": [
      "恐怖主义历史",
      "扒窃",
      "部分区域治安"
    ],
    "emergency": {
      "police": "101",
      "ambulance": "100",
      "fire": "100"
    }
  },
  'budapest': {
    "id": "budapest",
    "name": "布达佩斯",
    "nameEn": "Budapest",
    "country": "匈牙利",
    "continent": "欧洲",
    "flag": "🇭🇺",
    "lat": 47.4979,
    "lng": 19.0402,
    "image": "https://images.unsplash.com/photo-1551951978-eb5ef2d33b6a?w=400&q=80",
    "safety": {
      "overall": 75,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "A-",
        "health": "A-",
        "natural": "A"
      }
    },
    "highlights": [
      "多瑙河明珠",
      "温泉文化",
      "美丽建筑"
    ],
    "risks": [
      "扒窃",
      "出租车欺诈"
    ],
    "emergency": {
      "police": "107",
      "ambulance": "104",
      "fire": "105"
    }
  },
  'moscow': {
    "id": "moscow",
    "name": "莫斯科",
    "nameEn": "Moscow",
    "country": "俄罗斯",
    "continent": "欧洲",
    "flag": "🇷🇺",
    "lat": 55.7558,
    "lng": 37.6173,
    "image": "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "B+",
        "health": "B",
        "natural": "B"
      }
    },
    "highlights": [
      "东欧最大城市",
      "地铁系统壮观"
    ],
    "risks": [
      "政治因素",
      "制裁背景",
      "语言障碍",
      "严冬极寒"
    ],
    "emergency": {
      "police": "102",
      "ambulance": "103",
      "fire": "101"
    }
  },
  'new_york': {
    "id": "new_york",
    "name": "纽约",
    "nameEn": "New York",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 40.7128,
    "lng": -74.006,
    "image": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "A-",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "世界金融中心",
      "多元文化",
      "顶级医疗"
    ],
    "risks": [
      "部分区域犯罪",
      "扒窃",
      "暴风雪"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'los_angeles': {
    "id": "los_angeles",
    "name": "洛杉矶",
    "nameEn": "Los Angeles",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 34.0522,
    "lng": -118.2437,
    "image": "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=400&q=80",
    "safety": {
      "overall": 62,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "B",
        "health": "A",
        "natural": "B-"
      }
    },
    "highlights": [
      "好莱坞",
      "阳光海滩",
      "娱乐产业中心"
    ],
    "risks": [
      "车辆盗窃",
      "无家者问题",
      "地震",
      "野火"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'chicago': {
    "id": "chicago",
    "name": "芝加哥",
    "nameEn": "Chicago",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 41.8781,
    "lng": -87.6298,
    "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80",
    "safety": {
      "overall": 58,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "B+",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "建筑之都",
      "爵士蓝调文化",
      "密歇根湖畔"
    ],
    "risks": [
      "部分区域暴力犯罪",
      "严冬极寒"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'toronto': {
    "id": "toronto",
    "name": "多伦多",
    "nameEn": "Toronto",
    "country": "加拿大",
    "continent": "北美洲",
    "flag": "🇨🇦",
    "lat": 43.6532,
    "lng": -79.3832,
    "image": "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&q=80",
    "safety": {
      "overall": 82,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "多元文化之都",
      "顶级医疗",
      "便捷交通"
    ],
    "risks": [
      "扒窃",
      "部分区域治安",
      "严寒冬季"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'vancouver': {
    "id": "vancouver",
    "name": "温哥华",
    "nameEn": "Vancouver",
    "country": "加拿大",
    "continent": "北美洲",
    "flag": "🇨🇦",
    "lat": 49.2827,
    "lng": -123.1207,
    "image": "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=400&q=80",
    "safety": {
      "overall": 80,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "自然风光壮美",
      "高生活质量",
      "温和气候"
    ],
    "risks": [
      "高房价",
      "毒品问题（部分区域）",
      "地震风险"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'montreal': {
    "id": "montreal",
    "name": "蒙特利尔",
    "nameEn": "Montreal",
    "country": "加拿大",
    "continent": "北美洲",
    "flag": "🇨🇦",
    "lat": 45.5017,
    "lng": -73.5673,
    "image": "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=400&q=80",
    "safety": {
      "overall": 79,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "法裔文化",
      "美食艺术",
      "冬季嘉年华"
    ],
    "risks": [
      "扒窃",
      "极端严寒"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'mexico_city': {
    "id": "mexico_city",
    "name": "墨西哥城",
    "nameEn": "Mexico City",
    "country": "墨西哥",
    "continent": "北美洲",
    "flag": "🇲🇽",
    "lat": 19.4326,
    "lng": -99.1332,
    "image": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&q=80",
    "safety": {
      "overall": 45,
      "grade": "C",
      "grades": {
        "crime": "C-",
        "transport": "C+",
        "health": "B",
        "natural": "C"
      }
    },
    "highlights": [
      "拉美最大城市",
      "文化历史丰富",
      "美食天堂"
    ],
    "risks": [
      "犯罪率高",
      "绑架风险",
      "地震",
      "空气污染"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'san_francisco': {
    "id": "san_francisco",
    "name": "旧金山",
    "nameEn": "San Francisco",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 37.7749,
    "lng": -122.4194,
    "image": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80",
    "safety": {
      "overall": 60,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "B+",
        "health": "A",
        "natural": "B-"
      }
    },
    "highlights": [
      "硅谷科技中心",
      "金门大桥",
      "美食文化"
    ],
    "risks": [
      "车辆入室盗窃",
      "无家者危机",
      "地震风险"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'miami': {
    "id": "miami",
    "name": "迈阿密",
    "nameEn": "Miami",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 25.7617,
    "lng": -80.1918,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "A",
        "natural": "B-"
      }
    },
    "highlights": [
      "阳光海滩",
      "拉丁文化",
      "国际商业中心"
    ],
    "risks": [
      "飓风",
      "部分区域犯罪",
      "热带风暴"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'havana': {
    "id": "havana",
    "name": "哈瓦那",
    "nameEn": "Havana",
    "country": "古巴",
    "continent": "北美洲",
    "flag": "🇨🇺",
    "lat": 23.1136,
    "lng": -82.3666,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 62,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "C+",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "加勒比明珠",
      "复古文化",
      "热情人民"
    ],
    "risks": [
      "轻微盗窃",
      "飓风",
      "经济困难"
    ],
    "emergency": {
      "police": "106",
      "ambulance": "104",
      "fire": "105"
    }
  },
  'panama_city': {
    "id": "panama_city",
    "name": "巴拿马城",
    "nameEn": "Panama City",
    "country": "巴拿马",
    "continent": "北美洲",
    "flag": "🇵🇦",
    "lat": 8.9936,
    "lng": -79.5197,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 52,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "巴拿马运河",
      "金融中心",
      "热带文化"
    ],
    "risks": [
      "贫富差距",
      "部分区域犯罪",
      "热带疾病"
    ],
    "emergency": {
      "police": "104",
      "ambulance": "911",
      "fire": "103"
    }
  },
  'washington_dc': {
    "id": "washington_dc",
    "name": "华盛顿特区",
    "nameEn": "Washington D.C.",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 38.9072,
    "lng": -77.0369,
    "image": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "政治文化中心",
      "世界级博物馆免费开放",
      "历史建筑"
    ],
    "risks": [
      "部分区域犯罪",
      "扒窃",
      "游行示威"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'sao_paulo': {
    "id": "sao_paulo",
    "name": "圣保罗",
    "nameEn": "São Paulo",
    "country": "巴西",
    "continent": "拉丁美洲",
    "flag": "🇧🇷",
    "lat": -23.5505,
    "lng": -46.6333,
    "image": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
    "safety": {
      "overall": 42,
      "grade": "C",
      "grades": {
        "crime": "C-",
        "transport": "B-",
        "health": "B+",
        "natural": "B"
      }
    },
    "highlights": [
      "南美最大城市",
      "金融商业中心",
      "多元文化"
    ],
    "risks": [
      "高犯罪率",
      "贫民窟",
      "武装抢劫"
    ],
    "emergency": {
      "police": "190",
      "ambulance": "192",
      "fire": "193"
    }
  },
  'rio_de_janeiro': {
    "id": "rio_de_janeiro",
    "name": "里约热内卢",
    "nameEn": "Rio de Janeiro",
    "country": "巴西",
    "continent": "拉丁美洲",
    "flag": "🇧🇷",
    "lat": -22.9068,
    "lng": -43.1729,
    "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80",
    "safety": {
      "overall": 38,
      "grade": "C",
      "grades": {
        "crime": "D+",
        "transport": "B-",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "狂欢节",
      "海滩文化",
      "基督山"
    ],
    "risks": [
      "高暴力犯罪",
      "贫民窟武装",
      "武装抢劫"
    ],
    "emergency": {
      "police": "190",
      "ambulance": "192",
      "fire": "193"
    }
  },
  'buenos_aires': {
    "id": "buenos_aires",
    "name": "布宜诺斯艾利斯",
    "nameEn": "Buenos Aires",
    "country": "阿根廷",
    "continent": "拉丁美洲",
    "flag": "🇦🇷",
    "lat": -34.6037,
    "lng": -58.3816,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "B",
        "health": "B+",
        "natural": "A-"
      }
    },
    "highlights": [
      "南美巴黎",
      "探戈文化",
      "牛排美食"
    ],
    "risks": [
      "扒窃",
      "经济不稳定",
      "街头犯罪"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "107",
      "fire": "100"
    }
  },
  'lima': {
    "id": "lima",
    "name": "利马",
    "nameEn": "Lima",
    "country": "秘鲁",
    "continent": "拉丁美洲",
    "flag": "🇵🇪",
    "lat": -12.0464,
    "lng": -77.0428,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 48,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "B-",
        "natural": "C+"
      }
    },
    "highlights": [
      "美食之都",
      "前印加文明",
      "太平洋海岸"
    ],
    "risks": [
      "犯罪频繁",
      "出租车骗局",
      "地震风险"
    ],
    "emergency": {
      "police": "105",
      "ambulance": "117",
      "fire": "116"
    }
  },
  'bogota': {
    "id": "bogota",
    "name": "波哥大",
    "nameEn": "Bogotá",
    "country": "哥伦比亚",
    "continent": "拉丁美洲",
    "flag": "🇨🇴",
    "lat": 4.711,
    "lng": -74.0721,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 45,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "高原首都",
      "黄金博物馆",
      "咖啡文化"
    ],
    "risks": [
      "犯罪率高",
      "高原反应",
      "药物迷晕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "125",
      "fire": "119"
    }
  },
  'santiago': {
    "id": "santiago",
    "name": "圣地亚哥",
    "nameEn": "Santiago",
    "country": "智利",
    "continent": "拉丁美洲",
    "flag": "🇨🇱",
    "lat": -33.4489,
    "lng": -70.6693,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 62,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "B+",
        "natural": "C+"
      }
    },
    "highlights": [
      "南美最现代城市",
      "安第斯山脚",
      "葡萄酒产地"
    ],
    "risks": [
      "扒窃",
      "地震",
      "空气污染"
    ],
    "emergency": {
      "police": "133",
      "ambulance": "131",
      "fire": "132"
    }
  },
  'montevideo': {
    "id": "montevideo",
    "name": "蒙得维的亚",
    "nameEn": "Montevideo",
    "country": "乌拉圭",
    "continent": "拉丁美洲",
    "flag": "🇺🇾",
    "lat": -34.9011,
    "lng": -56.1645,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "B+",
        "natural": "A-"
      }
    },
    "highlights": [
      "南美最安全首都之一",
      "海滨城市",
      "高福利"
    ],
    "risks": [
      "扒窃",
      "部分夜间区域"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "105",
      "fire": "104"
    }
  },
  'caracas': {
    "id": "caracas",
    "name": "加拉加斯",
    "nameEn": "Caracas",
    "country": "委内瑞拉",
    "continent": "拉丁美洲",
    "flag": "🇻🇪",
    "lat": 10.4806,
    "lng": -66.9036,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 15,
      "grade": "D",
      "grades": {
        "crime": "D",
        "transport": "D+",
        "health": "C-",
        "natural": "C"
      }
    },
    "highlights": [
      "安第斯北部门户"
    ],
    "risks": [
      "全球最危险城市之一",
      "严重暴力犯罪",
      "绑架频繁",
      "政局极度不稳"
    ],
    "emergency": {
      "police": "171",
      "ambulance": "171",
      "fire": "171"
    }
  },
  'dubai': {
    "id": "dubai",
    "name": "迪拜",
    "nameEn": "Dubai",
    "country": "阿联酋",
    "continent": "中东",
    "flag": "🇦🇪",
    "lat": 25.2048,
    "lng": 55.2708,
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "极低犯罪率",
      "现代化设施",
      "国际商业中心"
    ],
    "risks": [
      "极端高温",
      "严格法律规定",
      "文化敏感"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "998",
      "fire": "997"
    }
  },
  'abu_dhabi': {
    "id": "abu_dhabi",
    "name": "阿布扎比",
    "nameEn": "Abu Dhabi",
    "country": "阿联酋",
    "continent": "中东",
    "flag": "🇦🇪",
    "lat": 24.4539,
    "lng": 54.3773,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 90,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "阿联酋首都",
      "石油财富",
      "文化包容"
    ],
    "risks": [
      "极端高温",
      "严格伊斯兰法律"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "998",
      "fire": "997"
    }
  },
  'doha': {
    "id": "doha",
    "name": "多哈",
    "nameEn": "Doha",
    "country": "卡塔尔",
    "continent": "中东",
    "flag": "🇶🇦",
    "lat": 25.2854,
    "lng": 51.531,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 87,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "极低犯罪率",
      "世界杯主办城市",
      "现代发展"
    ],
    "risks": [
      "极端高温",
      "劳工权益问题",
      "文化限制"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "999"
    }
  },
  'riyadh': {
    "id": "riyadh",
    "name": "利雅得",
    "nameEn": "Riyadh",
    "country": "沙特阿拉伯",
    "continent": "中东",
    "flag": "🇸🇦",
    "lat": 24.7136,
    "lng": 46.6753,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B+",
        "transport": "B",
        "health": "A-",
        "natural": "B+"
      }
    },
    "highlights": [
      "石油王国首都",
      "现代发展迅速",
      "无犯罪文化"
    ],
    "risks": [
      "极端高温",
      "地区冲突风险",
      "严格宗教法律"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "997",
      "fire": "998"
    }
  },
  'istanbul': {
    "id": "istanbul",
    "name": "伊斯坦布尔",
    "nameEn": "Istanbul",
    "country": "土耳其",
    "continent": "中东",
    "flag": "🇹🇷",
    "lat": 41.0082,
    "lng": 28.9784,
    "image": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&q=80",
    "safety": {
      "overall": 65,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "B+",
        "natural": "B-"
      }
    },
    "highlights": [
      "东西方文化交汇",
      "历史名城",
      "美食文化"
    ],
    "risks": [
      "恐怖主义风险",
      "扒窃",
      "地震活跃区"
    ],
    "emergency": {
      "police": "155",
      "ambulance": "112",
      "fire": "110"
    }
  },
  'tel_aviv': {
    "id": "tel_aviv",
    "name": "特拉维夫",
    "nameEn": "Tel Aviv",
    "country": "以色列",
    "continent": "中东",
    "flag": "🇮🇱",
    "lat": 32.0853,
    "lng": 34.7818,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 62,
      "grade": "B-",
      "grades": {
        "crime": "B",
        "transport": "B",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "创业科技中心",
      "海滩城市",
      "现代生活"
    ],
    "risks": [
      "地区冲突",
      "安全警报",
      "周边局势紧张"
    ],
    "emergency": {
      "police": "100",
      "ambulance": "101",
      "fire": "102"
    }
  },
  'amman': {
    "id": "amman",
    "name": "安曼",
    "nameEn": "Amman",
    "country": "约旦",
    "continent": "中东",
    "flag": "🇯🇴",
    "lat": 31.9454,
    "lng": 35.9284,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 68,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "B-",
        "health": "B+",
        "natural": "A-"
      }
    },
    "highlights": [
      "中东最安全城市之一",
      "古代文明",
      "热情好客"
    ],
    "risks": [
      "周边地区不稳定",
      "极端高温"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'muscat': {
    "id": "muscat",
    "name": "马斯喀特",
    "nameEn": "Muscat",
    "country": "阿曼",
    "continent": "中东",
    "flag": "🇴🇲",
    "lat": 23.588,
    "lng": 58.3829,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 85,
      "grade": "A-",
      "grades": {
        "crime": "A",
        "transport": "A-",
        "health": "B+",
        "natural": "B+"
      }
    },
    "highlights": [
      "中东最安全城市之一",
      "低犯罪率",
      "友好文化"
    ],
    "risks": [
      "极端高温",
      "沙尘暴"
    ],
    "emergency": {
      "police": "9999",
      "ambulance": "9999",
      "fire": "9999"
    }
  },
  'kuwait_city': {
    "id": "kuwait_city",
    "name": "科威特城",
    "nameEn": "Kuwait City",
    "country": "科威特",
    "continent": "中东",
    "flag": "🇰🇼",
    "lat": 29.3759,
    "lng": 47.9774,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 75,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "B",
        "health": "A-",
        "natural": "B+"
      }
    },
    "highlights": [
      "石油富国",
      "免税购物",
      "现代设施"
    ],
    "risks": [
      "极端高温",
      "沙尘暴",
      "地区安全风险"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'tehran': {
    "id": "tehran",
    "name": "德黑兰",
    "nameEn": "Tehran",
    "country": "伊朗",
    "continent": "中东",
    "flag": "🇮🇷",
    "lat": 35.6892,
    "lng": 51.389,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 48,
      "grade": "C",
      "grades": {
        "crime": "C+",
        "transport": "C+",
        "health": "B",
        "natural": "C"
      }
    },
    "highlights": [
      "古波斯文明",
      "市场文化",
      "现代城市"
    ],
    "risks": [
      "制裁影响",
      "政治风险",
      "地震高发",
      "空气污染严重"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "115",
      "fire": "125"
    }
  },
  'cairo': {
    "id": "cairo",
    "name": "开罗",
    "nameEn": "Cairo",
    "country": "埃及",
    "continent": "非洲",
    "flag": "🇪🇬",
    "lat": 30.0444,
    "lng": 31.2357,
    "image": "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=400&q=80",
    "safety": {
      "overall": 52,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "B-",
        "natural": "B"
      }
    },
    "highlights": [
      "非洲最大城市",
      "金字塔",
      "世界最古老城市之一"
    ],
    "risks": [
      "扒窃骚扰",
      "交通混乱",
      "空气污染",
      "政治不稳定"
    ],
    "emergency": {
      "police": "122",
      "ambulance": "123",
      "fire": "180"
    }
  },
  'nairobi': {
    "id": "nairobi",
    "name": "内罗毕",
    "nameEn": "Nairobi",
    "country": "肯尼亚",
    "continent": "非洲",
    "flag": "🇰🇪",
    "lat": -1.2921,
    "lng": 36.8219,
    "image": "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&q=80",
    "safety": {
      "overall": 40,
      "grade": "C",
      "grades": {
        "crime": "C-",
        "transport": "C",
        "health": "C+",
        "natural": "B"
      }
    },
    "highlights": [
      "东非经济中心",
      "野生动物天堂",
      "马赛马拉门户"
    ],
    "risks": [
      "抢劫犯罪",
      "扒窃",
      "疟疾风险",
      "恐怖主义"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "999"
    }
  },
  'cape_town': {
    "id": "cape_town",
    "name": "开普敦",
    "nameEn": "Cape Town",
    "country": "南非",
    "continent": "非洲",
    "flag": "🇿🇦",
    "lat": -33.9249,
    "lng": 18.4241,
    "image": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80",
    "safety": {
      "overall": 38,
      "grade": "C",
      "grades": {
        "crime": "D+",
        "transport": "B-",
        "health": "B-",
        "natural": "B+"
      }
    },
    "highlights": [
      "最美城市之一",
      "桌山",
      "葡萄酒产区"
    ],
    "risks": [
      "暴力犯罪高发",
      "武装抢劫",
      "帮派区域"
    ],
    "emergency": {
      "police": "10111",
      "ambulance": "10177",
      "fire": "107"
    }
  },
  'johannesburg': {
    "id": "johannesburg",
    "name": "约翰内斯堡",
    "nameEn": "Johannesburg",
    "country": "南非",
    "continent": "非洲",
    "flag": "🇿🇦",
    "lat": -26.2041,
    "lng": 28.0473,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 28,
      "grade": "D+",
      "grades": {
        "crime": "D",
        "transport": "C",
        "health": "B-",
        "natural": "B"
      }
    },
    "highlights": [
      "非洲最大经济城市",
      "黄金矿业遗产"
    ],
    "risks": [
      "极高暴力犯罪率",
      "武装抢劫",
      "入室盗窃",
      "汽车劫持"
    ],
    "emergency": {
      "police": "10111",
      "ambulance": "10177",
      "fire": "107"
    }
  },
  'lagos': {
    "id": "lagos",
    "name": "拉各斯",
    "nameEn": "Lagos",
    "country": "尼日利亚",
    "continent": "非洲",
    "flag": "🇳🇬",
    "lat": 6.5244,
    "lng": 3.3792,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 30,
      "grade": "C-",
      "grades": {
        "crime": "D+",
        "transport": "D+",
        "health": "C-",
        "natural": "C"
      }
    },
    "highlights": [
      "非洲金融中心",
      "尼日利亚文化首都"
    ],
    "risks": [
      "高犯罪率",
      "绑架风险",
      "严重交通拥堵",
      "洪涝"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'addis_ababa': {
    "id": "addis_ababa",
    "name": "亚的斯亚贝巴",
    "nameEn": "Addis Ababa",
    "country": "埃塞俄比亚",
    "continent": "非洲",
    "flag": "🇪🇹",
    "lat": 9.032,
    "lng": 38.7469,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 50,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "C",
        "natural": "B-"
      }
    },
    "highlights": [
      "非盟总部所在地",
      "高原城市",
      "咖啡发源地"
    ],
    "risks": [
      "扒窃",
      "示威游行",
      "医疗资源有限"
    ],
    "emergency": {
      "police": "991",
      "ambulance": "907",
      "fire": "939"
    }
  },
  'accra': {
    "id": "accra",
    "name": "阿克拉",
    "nameEn": "Accra",
    "country": "加纳",
    "continent": "非洲",
    "flag": "🇬🇭",
    "lat": 5.6037,
    "lng": -0.187,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "C+",
        "natural": "B-"
      }
    },
    "highlights": [
      "西非最安全国家之一",
      "民主稳定"
    ],
    "risks": [
      "扒窃",
      "网络诈骗",
      "交通事故"
    ],
    "emergency": {
      "police": "191",
      "ambulance": "193",
      "fire": "192"
    }
  },
  'dakar': {
    "id": "dakar",
    "name": "达喀尔",
    "nameEn": "Dakar",
    "country": "塞内加尔",
    "continent": "非洲",
    "flag": "🇸🇳",
    "lat": 14.7167,
    "lng": -17.4677,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 55,
      "grade": "C+",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "C",
        "natural": "B-"
      }
    },
    "highlights": [
      "西非门户",
      "文化活跃",
      "相对稳定"
    ],
    "risks": [
      "扒窃",
      "交通拥堵",
      "卫生隐患"
    ],
    "emergency": {
      "police": "17",
      "ambulance": "15",
      "fire": "18"
    }
  },
  'casablanca': {
    "id": "casablanca",
    "name": "卡萨布兰卡",
    "nameEn": "Casablanca",
    "country": "摩洛哥",
    "continent": "非洲",
    "flag": "🇲🇦",
    "lat": 33.5731,
    "lng": -7.5898,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 60,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "B-",
        "health": "B",
        "natural": "A-"
      }
    },
    "highlights": [
      "摩洛哥商业中心",
      "地中海文化",
      "清真寺建筑"
    ],
    "risks": [
      "扒窃骚扰",
      "街头欺诈",
      "强卖商品"
    ],
    "emergency": {
      "police": "19",
      "ambulance": "150",
      "fire": "15"
    }
  },
  'tunis': {
    "id": "tunis",
    "name": "突尼斯",
    "nameEn": "Tunis",
    "country": "突尼斯",
    "continent": "非洲",
    "flag": "🇹🇳",
    "lat": 36.819,
    "lng": 10.1658,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 62,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "B",
        "natural": "B+"
      }
    },
    "highlights": [
      "地中海文化明珠",
      "相对安全的非洲城市"
    ],
    "risks": [
      "扒窃",
      "政治偶发事件",
      "极端势力"
    ],
    "emergency": {
      "police": "197",
      "ambulance": "190",
      "fire": "198"
    }
  },
  'sydney': {
    "id": "sydney",
    "name": "悉尼",
    "nameEn": "Sydney",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -33.8688,
    "lng": 151.2093,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    "safety": {
      "overall": 88,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "全球最宜居城市之一",
      "世界级海滩",
      "高质量生活"
    ],
    "risks": [
      "部分区域扒窃",
      "山火风险",
      "海洋动物"
    ],
    "emergency": {
      "police": "000",
      "ambulance": "000",
      "fire": "000"
    }
  },
  'melbourne': {
    "id": "melbourne",
    "name": "墨尔本",
    "nameEn": "Melbourne",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -37.8136,
    "lng": 144.9631,
    "image": "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400&q=80",
    "safety": {
      "overall": 89,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "全球最宜居城市常年第一",
      "咖啡文化",
      "体育之都"
    ],
    "risks": [
      "扒窃",
      "极端高温",
      "山火"
    ],
    "emergency": {
      "police": "000",
      "ambulance": "000",
      "fire": "000"
    }
  },
  'auckland': {
    "id": "auckland",
    "name": "奥克兰",
    "nameEn": "Auckland",
    "country": "新西兰",
    "continent": "大洋洲",
    "flag": "🇳🇿",
    "lat": -36.8509,
    "lng": 174.7645,
    "image": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80",
    "safety": {
      "overall": 82,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A-",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "帆船之城",
      "自然风光",
      "毛利文化"
    ],
    "risks": [
      "扒窃",
      "地震火山",
      "交通事故"
    ],
    "emergency": {
      "police": "111",
      "ambulance": "111",
      "fire": "111"
    }
  },
  'wellington': {
    "id": "wellington",
    "name": "惠灵顿",
    "nameEn": "Wellington",
    "country": "新西兰",
    "continent": "大洋洲",
    "flag": "🇳🇿",
    "lat": -41.2865,
    "lng": 174.7762,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "全球最宜居首都之一",
      "文化艺术丰富",
      "创意之城"
    ],
    "risks": [
      "地震风险",
      "大风气候"
    ],
    "emergency": {
      "police": "111",
      "ambulance": "111",
      "fire": "111"
    }
  },
  'perth': {
    "id": "perth",
    "name": "珀斯",
    "nameEn": "Perth",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -31.9505,
    "lng": 115.8605,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 86,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "澳洲最阳光城市",
      "清洁海滩",
      "高质量生活"
    ],
    "risks": [
      "山火",
      "极端高温",
      "毒蜘蛛蛇类"
    ],
    "emergency": {
      "police": "000",
      "ambulance": "000",
      "fire": "000"
    }
  },
  'zurich2': {
    "id": "zurich2",
    "name": "日内瓦",
    "nameEn": "Geneva",
    "country": "瑞士",
    "continent": "欧洲",
    "flag": "🇨🇭",
    "lat": 46.2044,
    "lng": 6.1432,
    "image": "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&q=80",
    "safety": {
      "overall": 93,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "A-"
      }
    },
    "highlights": [
      "联合国欧洲总部",
      "国际组织中心",
      "极高安全水平"
    ],
    "risks": [
      "生活成本极高"
    ],
    "emergency": {
      "police": "117",
      "ambulance": "144",
      "fire": "118"
    }
  },
  'milan': {
    "id": "milan",
    "name": "米兰",
    "nameEn": "Milan",
    "country": "意大利",
    "continent": "欧洲",
    "flag": "🇮🇹",
    "lat": 45.4654,
    "lng": 9.1859,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 74,
      "grade": "B+",
      "grades": {
        "crime": "B",
        "transport": "A",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "时尚之都",
      "金融中心",
      "文化艺术"
    ],
    "risks": [
      "扒窃",
      "部分区域夜间治安"
    ],
    "emergency": {
      "police": "113",
      "ambulance": "118",
      "fire": "115"
    }
  },
  'dublin': {
    "id": "dublin",
    "name": "都柏林",
    "nameEn": "Dublin",
    "country": "爱尔兰",
    "continent": "欧洲",
    "flag": "🇮🇪",
    "lat": 53.3498,
    "lng": -6.2603,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 78,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "B+",
        "health": "A",
        "natural": "A"
      }
    },
    "highlights": [
      "欧洲科技重镇",
      "文化底蕴深厚",
      "温和气候"
    ],
    "risks": [
      "扒窃",
      "部分夜生活区"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    }
  },
  'boston': {
    "id": "boston",
    "name": "波士顿",
    "nameEn": "Boston",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 42.3601,
    "lng": -71.0589,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 72,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "A-",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "世界顶级教育中心",
      "历史名城",
      "医疗研究重镇"
    ],
    "risks": [
      "扒窃",
      "部分区域犯罪",
      "暴风雪"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'seattle': {
    "id": "seattle",
    "name": "西雅图",
    "nameEn": "Seattle",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 47.6062,
    "lng": -122.3321,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 67,
      "grade": "B",
      "grades": {
        "crime": "B-",
        "transport": "B+",
        "health": "A",
        "natural": "B+"
      }
    },
    "highlights": [
      "科技创新中心",
      "咖啡文化发源地",
      "自然风光"
    ],
    "risks": [
      "车辆盗窃",
      "无家者问题",
      "地震风险"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
    }
  },
  'hanoi': {
    "id": "hanoi",
    "name": "河内",
    "nameEn": "Hanoi",
    "country": "越南",
    "continent": "亚洲",
    "flag": "🇻🇳",
    "lat": 21.0278,
    "lng": 105.8342,
    "image": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80",
    "safety": {
      "overall": 68,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "C+",
        "health": "B-",
        "natural": "B-"
      }
    },
    "highlights": [
      "越南首都",
      "古老文化",
      "法式建筑遗迹"
    ],
    "risks": [
      "摩托车交通混乱",
      "扒窃",
      "洪涝"
    ],
    "emergency": {
      "police": "113",
      "ambulance": "115",
      "fire": "114"
    }
  },
  'yangon': {
    "id": "yangon",
    "name": "仰光",
    "nameEn": "Yangon",
    "country": "缅甸",
    "continent": "亚洲",
    "flag": "🇲🇲",
    "lat": 16.8661,
    "lng": 96.1951,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 40,
      "grade": "C",
      "grades": {
        "crime": "C+",
        "transport": "C",
        "health": "C",
        "natural": "C"
      }
    },
    "highlights": [
      "古老文化",
      "佛教圣地",
      "大金寺"
    ],
    "risks": [
      "政治不稳定",
      "基础设施落后",
      "医疗资源有限"
    ],
    "emergency": {
      "police": "199",
      "ambulance": "192",
      "fire": "191"
    }
  },
  'islamabad': {
    "id": "islamabad",
    "name": "伊斯兰堡",
    "nameEn": "Islamabad",
    "country": "巴基斯坦",
    "continent": "亚洲",
    "flag": "🇵🇰",
    "lat": 33.6844,
    "lng": 73.0479,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 42,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "C",
        "natural": "C+"
      }
    },
    "highlights": [
      "计划型首都",
      "相对安全的首都区"
    ],
    "risks": [
      "恐怖主义风险",
      "政治动荡",
      "洪涝"
    ],
    "emergency": {
      "police": "15",
      "ambulance": "115",
      "fire": "16"
    }
  },
  'quito': {
    "id": "quito",
    "name": "基多",
    "nameEn": "Quito",
    "country": "厄瓜多尔",
    "continent": "拉丁美洲",
    "flag": "🇪🇨",
    "lat": -0.1807,
    "lng": -78.4678,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 50,
      "grade": "C+",
      "grades": {
        "crime": "C",
        "transport": "C+",
        "health": "B-",
        "natural": "C+"
      }
    },
    "highlights": [
      "赤道之城",
      "世界文化遗产古城",
      "自然风光"
    ],
    "risks": [
      "扒窃",
      "火山活动",
      "高原反应"
    ],
    "emergency": {
      "police": "101",
      "ambulance": "911",
      "fire": "102"
    }
  },
  'la_paz': {
    "id": "la_paz",
    "name": "拉巴斯",
    "nameEn": "La Paz",
    "country": "玻利维亚",
    "continent": "拉丁美洲",
    "flag": "🇧🇴",
    "lat": -16.5,
    "lng": -68.15,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "safety": {
      "overall": 45,
      "grade": "C",
      "grades": {
        "crime": "C",
        "transport": "C",
        "health": "C",
        "natural": "B-"
      }
    },
    "highlights": [
      "世界最高首都",
      "安第斯文化",
      "盐沼景观"
    ],
    "risks": [
      "扒窃",
      "高原反应严重",
      "政治示威"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "118",
      "fire": "119"
    }
  }

};

// ─── 城市列表索引（用于搜索和展示）─────────────────────────
var CITY_INDEX = Object.values(CITY_DATABASE).map(function(city) {
  return {
    id: city.id,
    name: city.name,
    nameEn: city.nameEn,
    country: city.country,
    continent: city.continent,
    flag: city.flag,
    safetyScore: city.safety ? city.safety.overall : 0,
    safetyGrade: city.safety ? city.safety.grade : 'N/A',
    image: city.image || ''
  };
});

// ─── 区域分类（自动生成）────────────────────────────────────
var CITY_REGIONS = {};
CITY_INDEX.forEach(function(c) {
  if (!CITY_REGIONS[c.continent]) CITY_REGIONS[c.continent] = [];
  CITY_REGIONS[c.continent].push(c.id);
});

// 安全等级颜色映射
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
