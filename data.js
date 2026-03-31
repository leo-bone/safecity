// ============================================================
// SafeCity Global - 全球城市安全数据库 v4.0
// 包含125个全球主要城市，安全评分数据
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "119"
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "119"
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
      }
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
      "fire": "119"
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
      }
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
      "fire": "119"
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
      }
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
      "fire": "119"
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
      }
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
      "fire": "119"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "911"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "911"
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
      }
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
      }
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
      "fire": "911"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
      }
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
      }
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
      }
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
      }
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
      "fire": "112"
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
      }
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
      "fire": "112"
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
      }
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
      }
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
    }
  }
};