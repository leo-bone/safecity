// ============================================================
// SafeCity Global - 城市详情数据库 v4.0
// 包含125个城市的详细信息
// 包含：节日活动、交通指南、景点推荐、美食推荐、文化习俗、实用贴士
// ============================================================

var CITY_DATABASE_DETAIL = {
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
      "fire": "119",
      "tourist_hotline": "050-3816-2787"
    },
    "festivals": [
      {
        "name": "樱花季",
        "month": "3-4月",
        "description": "东京各地樱花盛开，上野公园、新宿御苑是热门赏樱地点"
      },
      {
        "name": "隅田川花火大会",
        "month": "7月",
        "description": "东京最大规模的花火大会，吸引百万观众"
      },
      {
        "name": "浅草三社祭",
        "month": "5月",
        "description": "浅草神社的年度祭典，有传统神轿游行"
      },
      {
        "name": "明治神宫初诣",
        "month": "1月",
        "description": "新年期间参拜明治神宫，体验日本传统新年文化"
      }
    ],
    "transport": {
      "airport": "成田机场(NRT)和羽田机场(HND)，羽田更靠近市区",
      "train": "JR山手线环状连接主要区域，地铁系统发达",
      "subway": "东京Metro和都营地铁覆盖全城，建议购买PASMO或Suica卡",
      "taxi": "出租车价格较高，起步价约500日元，深夜有加价"
    },
    "attractions": [
      {
        "name": "浅草寺",
        "category": "文化古迹",
        "description": "东京最古老的寺庙，雷门大灯笼是标志性景观"
      },
      {
        "name": "东京塔/晴空塔",
        "category": "地标建筑",
        "description": "俯瞰东京全景的最佳地点"
      },
      {
        "name": "涩谷十字路口",
        "category": "城市景观",
        "description": "世界最繁忙的人行横道，体验东京的繁华"
      },
      {
        "name": "明治神宫",
        "category": "神社",
        "description": "位于市中心的绿洲，供奉明治天皇"
      },
      {
        "name": "秋叶原",
        "category": "购物娱乐",
        "description": "动漫、电器、游戏爱好者的天堂"
      },
      {
        "name": "筑地市场",
        "category": "美食",
        "description": "新鲜海鲜市场，可品尝正宗寿司"
      }
    ],
    "food": [
      {
        "name": "寿司",
        "description": "筑地、银座有众多顶级寿司店",
        "recommendation": "寿司大、大和寿司"
      },
      {
        "name": "拉面",
        "description": "一兰、一风堂等连锁，也有众多特色小店",
        "recommendation": "新宿、池袋的拉面街"
      },
      {
        "name": "天妇罗",
        "description": "浅草大黑家天妇罗历史悠久",
        "recommendation": "大黑家、土手の伊勢屋"
      },
      {
        "name": "烧肉",
        "description": "和牛烧肉是必尝美食",
        "recommendation": "叙叙苑、牛角"
      }
    ],
    "customs": [
      "进入室内需要脱鞋，注意袜子要干净",
      "公共场所保持安静，电车内不要大声说话",
      "不要边走边吃，在便利店门口吃完再走",
      "给小费不是日本习俗，不需要给小费",
      "垃圾分类严格，注意按要求分类投放"
    ],
    "tips": [
      "下载Google翻译APP，支持拍照翻译菜单",
      "购买东京Metro 24/48/72小时通票更划算",
      "大部分商店晚上8-9点关门，提前规划购物",
      "ATM机并非24小时可用，注意营业时间",
      "地震多发，手机下载灾害预警APP"
    ]
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
      "police": "999",
      "ambulance": "995",
      "fire": "995",
      "tourist_hotline": "1800-736-2000"
    },
    "festivals": [
      {
        "name": "春节",
        "month": "1-2月",
        "description": "牛车水有盛大庆祝活动和灯会"
      },
      {
        "name": "新加坡美食节",
        "month": "7月",
        "description": "品尝本地美食的绝佳机会"
      },
      {
        "name": "国庆日",
        "month": "8月9日",
        "description": "烟花表演和军事阅兵"
      },
      {
        "name": "屠妖节",
        "month": "10-11月",
        "description": "小印度的印度教节日，灯火辉煌"
      }
    ],
    "transport": {
      "airport": "樟宜机场(SIN)，被评为世界最佳机场",
      "train": "MRT地铁系统覆盖全岛，干净高效",
      "bus": "巴士网络完善，可用EZ-Link卡支付",
      "taxi": "出租车价格合理，有Grab等网约车"
    },
    "attractions": [
      {
        "name": "滨海湾花园",
        "category": "自然景观",
        "description": "超级树和云雾林是标志性景观"
      },
      {
        "name": "鱼尾狮公园",
        "category": "地标",
        "description": "新加坡的象征，必打卡地点"
      },
      {
        "name": "圣淘沙岛",
        "category": "娱乐",
        "description": "环球影城、海洋馆、海滩"
      },
      {
        "name": "牛车水",
        "category": "文化区",
        "description": "新加坡唐人街，美食和购物"
      },
      {
        "name": "小印度",
        "category": "文化区",
        "description": "体验印度文化和美食"
      },
      {
        "name": "克拉码头",
        "category": "夜生活",
        "description": "河畔酒吧和餐厅聚集地"
      }
    ],
    "food": [
      {
        "name": "海南鸡饭",
        "description": "新加坡国菜",
        "recommendation": "天天海南鸡饭、文东记"
      },
      {
        "name": "辣椒螃蟹",
        "description": "新加坡招牌海鲜",
        "recommendation": "珍宝海鲜、无招牌海鲜"
      },
      {
        "name": "肉骨茶",
        "description": "药材炖排骨汤",
        "recommendation": "松发肉骨茶、黄亚细"
      },
      {
        "name": "叻沙",
        "description": "椰浆咖喱面",
        "recommendation": "加东叻沙"
      },
      {
        "name": "沙爹",
        "description": "烤肉串配花生酱",
        "recommendation": "老巴刹熟食中心"
      }
    ],
    "customs": [
      "严禁携带口香糖入境",
      "地铁和公交上禁止饮食",
      "公共场所禁止吸烟，只能在指定区域",
      "乱丢垃圾会被重罚",
      "过马路要走斑马线，严格遵守交通规则"
    ],
    "tips": [
      "购买Singapore Tourist Pass可无限次乘坐公共交通",
      " hawker center(熟食中心)是品尝本地美食的最佳地点",
      "全年炎热潮湿，注意防晒和补水",
      "大部分人会讲华语，沟通方便",
      "商场和室内空调很冷，带件薄外套"
    ]
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
      "ambulance": "119",
      "fire": "119",
      "tourist_hotline": "1330"
    },
    "festivals": [
      {
        "name": "樱花季",
        "month": "4月",
        "description": "汝矣岛、南山公园赏樱"
      },
      {
        "name": "首尔灯节",
        "month": "11月",
        "description": "清溪川沿岸的灯会"
      },
      {
        "name": "首尔文化节",
        "month": "10月",
        "description": "各类文化表演和活动"
      },
      {
        "name": "春节/中秋",
        "month": "农历",
        "description": "传统节日，部分商店休息"
      }
    ],
    "transport": {
      "airport": "仁川机场(ICN)和金浦机场(GMP)",
      "train": "地铁1-9号线覆盖全城，T-money卡必备",
      "bus": "公交系统发达，但需懂韩文",
      "taxi": "普通、模范、大型三种，黑色为模范较贵"
    },
    "attractions": [
      {
        "name": "景福宫",
        "category": "历史古迹",
        "description": "朝鲜王朝王宫，可观看换岗仪式"
      },
      {
        "name": "明洞",
        "category": "购物",
        "description": "购物和美食天堂"
      },
      {
        "name": "N首尔塔",
        "category": "地标",
        "description": "南山塔，情侣锁墙"
      },
      {
        "name": "弘大",
        "category": "文化区",
        "description": "年轻人聚集地，街头表演"
      },
      {
        "name": "江南区",
        "category": "商业区",
        "description": "高端购物和夜生活"
      },
      {
        "name": "北村韩屋村",
        "category": "文化",
        "description": "传统韩屋建筑群"
      }
    ],
    "food": [
      {
        "name": "韩式烤肉",
        "description": "必尝美食",
        "recommendation": "姜虎东、王妃家"
      },
      {
        "name": "参鸡汤",
        "description": "滋补佳品",
        "recommendation": "土俗村参鸡汤"
      },
      {
        "name": "炸鸡啤酒",
        "description": "韩国夜生活标配",
        "recommendation": "校村炸鸡、BBQ"
      },
      {
        "name": "石锅拌饭",
        "description": "传统料理",
        "recommendation": "全州中央会馆"
      },
      {
        "name": "泡菜",
        "description": "每餐必备",
        "recommendation": "各种泡菜汤"
      }
    ],
    "customs": [
      "接受物品用双手表示尊重",
      "长辈先动筷，不可先于长辈用餐",
      "喝酒时侧身喝，表示尊重",
      "进韩式餐厅需脱鞋",
      "地铁有老弱病残专座，不要占用"
    ],
    "tips": [
      "下载KakaoMap导航比Google Maps更准确",
      "购买T-money卡可打折乘坐公共交通",
      "免税店购物可机场提货",
      "大部分餐厅有中文菜单",
      "WiFi覆盖率高，可租借随身WiFi"
    ]
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
      "police": "999",
      "ambulance": "999",
      "fire": "999",
      "tourist_hotline": "2508-1234"
    },
    "festivals": [
      {
        "name": "春节",
        "month": "1-2月",
        "description": "花车巡游和烟花表演"
      },
      {
        "name": "端午节",
        "month": "6月",
        "description": "龙舟竞渡"
      },
      {
        "name": "中秋节",
        "month": "9-10月",
        "description": "大坑舞火龙"
      },
      {
        "name": "圣诞节",
        "month": "12月",
        "description": "维港灯光秀和购物季"
      }
    ],
    "transport": {
      "airport": "香港国际机场(HKG)",
      "train": "港铁MTR覆盖主要区域",
      "bus": "双层巴士网络完善",
      "taxi": "分市区、新界、大屿山三种颜色",
      "ferry": "天星小轮是经典体验"
    },
    "attractions": [
      {
        "name": "维多利亚港",
        "category": "地标",
        "description": "世界三大夜景之一"
      },
      {
        "name": "太平山顶",
        "category": "观景",
        "description": "俯瞰维港全景"
      },
      {
        "name": "迪士尼乐园",
        "category": "娱乐",
        "description": "适合家庭游玩"
      },
      {
        "name": "海洋公园",
        "category": "娱乐",
        "description": "过山车和水族馆"
      },
      {
        "name": "庙街夜市",
        "category": "文化",
        "description": "地道香港市井文化"
      },
      {
        "name": "中环半山扶梯",
        "category": "城市景观",
        "description": "世界最长户外扶梯系统"
      }
    ],
    "food": [
      {
        "name": "点心",
        "description": "早茶必点",
        "recommendation": "添好运、稻香"
      },
      {
        "name": "烧腊",
        "description": "叉烧、烧鹅",
        "recommendation": "镛记、甘牌烧鹅"
      },
      {
        "name": "云吞面",
        "description": "经典港式",
        "recommendation": "麦奀云吞面"
      },
      {
        "name": "鸡蛋仔",
        "description": "街头小吃",
        "recommendation": "北角鸡蛋仔"
      },
      {
        "name": "丝袜奶茶",
        "description": "港式奶茶",
        "recommendation": "兰芳园"
      }
    ],
    "customs": [
      "茶餐厅有搭台文化，可能要拼桌",
      "用餐速度快，不要久坐",
      "排队文化盛行，请自觉排队",
      "地铁禁食",
      "电梯靠右站，左边留给赶时间的人"
    ],
    "tips": [
      "购买八达通卡方便乘坐交通和购物",
      "7-11便利店可充值八达通",
      "大部分商场接受支付宝和微信支付",
      "转换插头必备，英标三脚插",
      "药房购物注意辨别真假"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "北京公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "上海公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "191",
      "ambulance": "1669",
      "fire": "199",
      "tourist_police": "1155"
    },
    "festivals": [
      {
        "name": "泼水节",
        "month": "4月",
        "description": "宋干节，全国最大节日"
      },
      {
        "name": "水灯节",
        "month": "11月",
        "description": "Loi Krathong放灯"
      },
      {
        "name": "中国新年",
        "month": "1-2月",
        "description": "唐人街庆祝"
      },
      {
        "name": "国王生日",
        "month": "7月28日",
        "description": "父亲节庆祝"
      }
    ],
    "transport": {
      "airport": "素万那普(BKK)和廊曼(DMK)机场",
      "bts": "天铁，覆盖主要商业区",
      "mrt": "地铁，与BTS换乘",
      "boat": "湄南河快船，体验特色交通",
      "taxi": "出租车便宜， insist on meter",
      "tuk_tuk": "嘟嘟车，体验但要砍价"
    },
    "attractions": [
      {
        "name": "大皇宫",
        "category": "宫殿",
        "description": "泰国王室宫殿"
      },
      {
        "name": "玉佛寺",
        "category": "寺庙",
        "description": "泰国最神圣寺庙"
      },
      {
        "name": "卧佛寺",
        "category": "寺庙",
        "description": "巨大卧佛"
      },
      {
        "name": "郑王庙",
        "category": "寺庙",
        "description": "湄南河畔高棉风格"
      },
      {
        "name": "考山路",
        "category": "背包客区",
        "description": "夜市和酒吧"
      },
      {
        "name": "乍都乍周末市场",
        "category": "市场",
        "description": "亚洲最大周末市场"
      }
    ],
    "food": [
      {
        "name": "冬阴功",
        "description": "酸辣虾汤",
        "recommendation": "任何餐厅"
      },
      {
        "name": "泰式炒河粉",
        "description": "Pad Thai",
        "recommendation": "街头小摊"
      },
      {
        "name": "芒果糯米饭",
        "description": "经典甜品",
        "recommendation": "Mae Varee"
      },
      {
        "name": "青木瓜沙拉",
        "description": "Som Tam",
        "recommendation": "东北菜餐厅"
      },
      {
        "name": "泰式奶茶",
        "description": "Cha Yen",
        "recommendation": "街头摊位"
      }
    ],
    "customs": [
      "进寺庙需脱鞋，着装保守",
      "不要摸别人的头",
      "不要用脚指人或物",
      "对王室要尊重，不要议论",
      "双手合十是常见问候"
    ],
    "tips": [
      "购买Rabbit卡乘坐BTS",
      "嘟嘟车要砍价，先谈好价格",
      "街边美食便宜好吃",
      "按摩店选择正规店铺",
      "准备零钱，很多小摊不收大额"
    ]
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
    },
    "festivals": [
      {
        "name": "马来西亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "吉隆坡公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "台湾春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "台北公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "日本春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "大阪公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印度春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "孟买公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印度春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "德里公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印尼春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "雅加达公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "越南春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "胡志明市公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "菲律宾春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "马尼拉公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "999",
      "ambulance": "998",
      "fire": "997"
    },
    "festivals": [
      {
        "name": "迪拜购物节",
        "month": "1-2月",
        "description": "打折季和抽奖活动"
      },
      {
        "name": "开斋节",
        "month": "伊斯兰历",
        "description": "宗教节日庆祝"
      },
      {
        "name": "迪拜美食节",
        "month": "2-3月",
        "description": "美食活动"
      },
      {
        "name": "国庆日",
        "month": "12月2日",
        "description": "阿联酋国庆"
      }
    ],
    "transport": {
      "airport": "迪拜国际机场(DXB)",
      "metro": "无人驾驶地铁，有金车厢",
      "bus": "空调巴士覆盖全城",
      "taxi": "出租车价格合理，有Uber/Careem"
    },
    "attractions": [
      {
        "name": "哈利法塔",
        "category": "地标",
        "description": "世界最高建筑"
      },
      {
        "name": "迪拜购物中心",
        "category": "购物",
        "description": "世界最大购物中心"
      },
      {
        "name": "帆船酒店",
        "category": "地标",
        "description": "七星级酒店外观"
      },
      {
        "name": "朱美拉棕榈岛",
        "category": "人工岛",
        "description": "棕榈形状人工岛"
      },
      {
        "name": "迪拜喷泉",
        "category": "表演",
        "description": "音乐喷泉表演"
      },
      {
        "name": "黄金市场",
        "category": "购物",
        "description": "传统市场"
      }
    ],
    "food": [
      {
        "name": "阿拉伯烤肉",
        "description": "传统中东美食",
        "recommendation": "Al Safadi"
      },
      {
        "name": "鹰嘴豆泥",
        "description": "Hummus",
        "recommendation": "阿拉伯餐厅"
      },
      {
        "name": "沙威玛",
        "description": "中东卷饼",
        "recommendation": "街头小店"
      },
      {
        "name": "椰枣",
        "description": "阿拉伯甜品",
        "recommendation": "Bateel"
      }
    ],
    "customs": [
      "公共场合着装保守",
      "斋月期间白天不要在公共场合饮食",
      "左手被认为不洁，用右手递物",
      "清真寺参观需脱鞋，女性需遮头",
      "公共场合避免亲密行为"
    ],
    "tips": [
      "购买Nol卡乘坐公共交通",
      "夏季(6-9月)非常炎热，室内活动为主",
      "商场内空调很冷，带外套",
      "周五上午部分商店休息",
      "水比油贵，注意补水"
    ]
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
    },
    "festivals": [
      {
        "name": "卡塔尔春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "多哈公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "沙特阿拉伯春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "利雅得公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "阿曼春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "马斯喀特公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "以色列春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "特拉维夫公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "土耳其春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "伊斯坦布尔公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印尼春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "巴厘岛公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "泰国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "清迈公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "泰国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "普吉岛公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "马来西亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "槟城公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "越南春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "河内公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印度春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "班加罗尔公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印度春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "金奈公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印度春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "加尔各答公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "印度春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "海德拉巴公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "深圳公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "广州公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "成都公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "杭州公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "西安公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "fire": "999",
      "non_emergency": "101"
    },
    "festivals": [
      {
        "name": "诺丁山狂欢节",
        "month": "8月",
        "description": "欧洲最大街头狂欢节"
      },
      {
        "name": "跨年烟花",
        "month": "12月31日",
        "description": "伦敦眼烟花表演"
      },
      {
        "name": "切尔西花展",
        "month": "5月",
        "description": "世界著名园艺展览"
      },
      {
        "name": "圣诞集市",
        "month": "11-12月",
        "description": "海德公园冬季仙境"
      }
    ],
    "transport": {
      "airport": "希思罗(LHR)、盖特威克(LGW)、斯坦斯特德(STN)等",
      "train": "地铁Tube覆盖全城，分区计价",
      "bus": "红色双层巴士，24小时运营",
      "taxi": "黑色出租车可路边招手，Uber可用"
    },
    "attractions": [
      {
        "name": "大本钟",
        "category": "地标",
        "description": "英国议会大厦钟楼"
      },
      {
        "name": "伦敦塔桥",
        "category": "地标",
        "description": "可登桥参观"
      },
      {
        "name": "大英博物馆",
        "category": "博物馆",
        "description": "免费参观，藏品丰富"
      },
      {
        "name": "白金汉宫",
        "category": "宫殿",
        "description": "观看卫兵换岗仪式"
      },
      {
        "name": "伦敦眼",
        "category": "观景",
        "description": "泰晤士河畔摩天轮"
      },
      {
        "name": "海德公园",
        "category": "公园",
        "description": "市中心绿洲"
      }
    ],
    "food": [
      {
        "name": "炸鱼薯条",
        "description": "英国国菜",
        "recommendation": "Poppies Fish & Chips"
      },
      {
        "name": "英式早餐",
        "description": "Full English Breakfast",
        "recommendation": "The Breakfast Club"
      },
      {
        "name": "下午茶",
        "description": "High Tea体验",
        "recommendation": "Ritz、Fortnum & Mason"
      },
      {
        "name": "印度咖喱",
        "description": "Brick Lane咖喱街",
        "recommendation": "Brick Lane"
      }
    ],
    "customs": [
      "排队是英国文化，务必遵守",
      "地铁扶梯靠右站",
      "小费通常10-15%，账单已含服务费则不用另给",
      "酒吧点酒去吧台，不需要等服务员",
      "天气多变，随身携带雨伞"
    ],
    "tips": [
      "购买Oyster Card或使用Contactless卡",
      "博物馆大多免费，建议早去避开人群",
      "西区音乐剧提前订票",
      "周日部分商店关门较早",
      "注意区分伦敦市(City)和伦敦大都市区"
    ]
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
      "fire": "18",
      "european": "112"
    },
    "festivals": [
      {
        "name": "巴士底日",
        "month": "7月14日",
        "description": "法国国庆日，香街阅兵和烟花"
      },
      {
        "name": "巴黎时装周",
        "month": "2月/9月",
        "description": "春夏和秋冬两季"
      },
      {
        "name": "圣诞集市",
        "month": "12月",
        "description": "香榭丽舍大街集市"
      },
      {
        "name": "白夜节",
        "month": "10月",
        "description": "通宵艺术活动"
      }
    ],
    "transport": {
      "airport": "戴高乐(CDG)和奥利(ORY)机场",
      "train": "地铁Metro和RER快线",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车较贵，有Uber"
    },
    "attractions": [
      {
        "name": "埃菲尔铁塔",
        "category": "地标",
        "description": "巴黎象征"
      },
      {
        "name": "卢浮宫",
        "category": "博物馆",
        "description": "世界最大艺术博物馆"
      },
      {
        "name": "凯旋门",
        "category": "地标",
        "description": "香榭丽舍大街西端"
      },
      {
        "name": "圣母院",
        "category": "教堂",
        "description": "哥特式建筑杰作(修复中)"
      },
      {
        "name": "蒙马特高地",
        "category": "文化区",
        "description": "艺术家聚集地"
      },
      {
        "name": "塞纳河游船",
        "category": "观光",
        "description": "欣赏两岸风光"
      }
    ],
    "food": [
      {
        "name": "可颂",
        "description": "法式早餐必备",
        "recommendation": "Du Pain et des Idées"
      },
      {
        "name": "法棍",
        "description": "法国人的主食",
        "recommendation": "任何boulangerie"
      },
      {
        "name": "马卡龙",
        "description": "精致甜点",
        "recommendation": "Ladurée、Pierre Hermé"
      },
      {
        "name": "法式洋葱汤",
        "description": "经典汤品",
        "recommendation": "传统小酒馆"
      },
      {
        "name": "鹅肝",
        "description": "法国美食",
        "recommendation": "高级餐厅"
      }
    ],
    "customs": [
      "进商店要说Bonjour问候",
      "餐厅用餐时间较长，不要催单",
      "小费已含在账单中，可给零钱凑整",
      "不要大声喧哗",
      "周日很多商店关门"
    ],
    "tips": [
      "购买Paris Museum Pass可免排队",
      "注意保管财物，景点周围有小偷",
      "学几句基础法语会更受欢迎",
      "餐厅有固定用餐时间，非饭点可能不营业",
      "地铁有自动检票门，逃票会被罚款"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "德国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "柏林公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "荷兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "阿姆斯特丹公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "奥地利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "维也纳公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "瑞士春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "苏黎世公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "瑞典春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "斯德哥尔摩公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "挪威春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "奥斯陆公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "丹麦春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "哥本哈根公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "芬兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "赫尔辛基公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "西班牙春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "马德里公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "意大利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "罗马公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "西班牙春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "巴塞罗那公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "葡萄牙春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "里斯本公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "捷克春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "布拉格公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "波兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "华沙公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "希腊春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "雅典公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "比利时春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "布鲁塞尔公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "匈牙利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "布达佩斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "俄罗斯春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "莫斯科公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "俄罗斯春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "圣彼得堡公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "意大利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "米兰公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "德国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "慕尼黑公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "德国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "法兰克福公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "德国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "汉堡公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "爱尔兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "都柏林公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "英国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "爱丁堡公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "英国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "曼彻斯特公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "法国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "里昂公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "法国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "马赛公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "法国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "尼斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "意大利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "威尼斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "意大利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "佛罗伦萨公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "意大利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "那不勒斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "西班牙春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "瓦伦西亚公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "西班牙春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "塞维利亚公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "西班牙春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "马拉加公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "葡萄牙春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "波尔图公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "波兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "克拉科夫公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "瑞士春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "日内瓦公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "德国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "科隆公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "fire": "911",
      "non_emergency": "311"
    },
    "festivals": [
      {
        "name": "时代广场跨年",
        "month": "12月31日",
        "description": "水晶球降落仪式"
      },
      {
        "name": "感恩节游行",
        "month": "11月",
        "description": "梅西百货大游行"
      },
      {
        "name": " Pride Parade",
        "month": "6月",
        "description": "同志骄傲游行"
      },
      {
        "name": "圣诞橱窗",
        "month": "12月",
        "description": "第五大道百货公司橱窗"
      }
    ],
    "transport": {
      "airport": "肯尼迪(JFK)、纽瓦克(EWR)、拉瓜迪亚(LGA)",
      "subway": "24小时运营，按区计价",
      "bus": "覆盖地铁不到的地方",
      "taxi": "黄色出租车，Uber/Lyft普及"
    },
    "attractions": [
      {
        "name": "自由女神像",
        "category": "地标",
        "description": "美国自由的象征"
      },
      {
        "name": "时代广场",
        "category": "地标",
        "description": "世界的十字路口"
      },
      {
        "name": "中央公园",
        "category": "公园",
        "description": "曼哈顿绿洲"
      },
      {
        "name": "帝国大厦",
        "category": "地标",
        "description": "观景台俯瞰城市"
      },
      {
        "name": "布鲁克林大桥",
        "category": "地标",
        "description": "步行过桥体验"
      },
      {
        "name": "大都会博物馆",
        "category": "博物馆",
        "description": "世界三大博物馆之一"
      }
    ],
    "food": [
      {
        "name": "纽约披萨",
        "description": "薄片大披萨",
        "recommendation": "Joe's Pizza"
      },
      {
        "name": "贝果",
        "description": "纽约早餐",
        "recommendation": "Ess-a-Bagel"
      },
      {
        "name": "芝士蛋糕",
        "description": "Junior's经典",
        "recommendation": "Junior's"
      },
      {
        "name": "热狗",
        "description": "街头小吃",
        "recommendation": "Gray's Papaya"
      },
      {
        "name": "牛排",
        "description": "美式牛排馆",
        "recommendation": "Peter Luger"
      }
    ],
    "customs": [
      "小费文化重要，餐厅15-20%",
      "走路速度快，不要挡路",
      "地铁卡Swipe要干脆",
      "排队等出租车",
      "注意个人财物安全"
    ],
    "tips": [
      "购买MetroCard或OMNY支付",
      "百老汇剧票可在TKTS折扣亭购买",
      "博物馆有建议捐款日",
      "小费是服务人员主要收入",
      "部分区域晚上避免独行"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "洛杉矶公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "芝加哥公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "加拿大春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "多伦多公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "加拿大春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "温哥华公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "加拿大春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "蒙特利尔公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "旧金山公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "西雅图公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "迈阿密公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "波士顿公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "华盛顿公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "拉斯维加斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "丹佛公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "亚特兰大公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "达拉斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "休斯顿公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "凤凰城公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "波特兰公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "圣迭戈公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "奥斯汀公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "墨西哥春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "墨西哥城公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "墨西哥春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "坎昆公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "巴西春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "圣保罗公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "巴西春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "里约热内卢公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "阿根廷春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "布宜诺斯艾利斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "智利春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "圣地亚哥公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "秘鲁春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "利马公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "哥伦比亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "波哥大公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "哥伦比亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "麦德林公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "巴拿马春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "巴拿马城公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "埃及春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "开罗公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "南非春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "开普敦公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "南非春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "约翰内斯堡公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "尼日利亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "拉各斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "肯尼亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "内罗毕公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "摩洛哥春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "卡萨布兰卡公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "摩洛哥春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "马拉喀什公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "突尼斯春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "突尼斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "加纳春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "阿克拉公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "埃塞俄比亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "亚的斯亚贝巴公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "fire": "000",
      "police_non_urgent": "131-444"
    },
    "festivals": [
      {
        "name": "跨年烟花",
        "month": "12月31日",
        "description": "世界最早的大型跨年庆祝"
      },
      {
        "name": "悉尼灯光节",
        "month": "5-6月",
        "description": "Vivid Sydney灯光秀"
      },
      {
        "name": "悉尼狂欢节",
        "month": "2-3月",
        "description": "LGBTQ+骄傲节"
      },
      {
        "name": "澳洲日",
        "month": "1月26日",
        "description": "国庆日庆祝活动"
      }
    ],
    "transport": {
      "airport": "金斯福德·史密斯机场(SYD)",
      "train": "城铁覆盖市区和周边",
      "bus": "公交网络发达",
      "ferry": "渡轮是特色交通方式",
      "taxi": "出租车和Uber都可用"
    },
    "attractions": [
      {
        "name": "悉尼歌剧院",
        "category": "地标",
        "description": "世界遗产建筑"
      },
      {
        "name": "海港大桥",
        "category": "地标",
        "description": "可攀登体验"
      },
      {
        "name": "邦迪海滩",
        "category": "海滩",
        "description": "冲浪胜地"
      },
      {
        "name": "达令港",
        "category": "娱乐",
        "description": "餐饮娱乐区"
      },
      {
        "name": "皇家植物园",
        "category": "公园",
        "description": "麦考利夫人椅看歌剧院"
      },
      {
        "name": "塔龙加动物园",
        "category": "动物园",
        "description": "可看到袋鼠考拉"
      }
    ],
    "food": [
      {
        "name": "海鲜",
        "description": "新鲜澳洲海鲜",
        "recommendation": "悉尼鱼市场"
      },
      {
        "name": "Flat White",
        "description": "澳洲咖啡",
        "recommendation": "任意咖啡馆"
      },
      {
        "name": "肉派",
        "description": "澳洲快餐",
        "recommendation": "Harry's Cafe de Wheels"
      },
      {
        "name": "烧烤",
        "description": "澳洲BBQ文化",
        "recommendation": "公园公共烧烤台"
      }
    ],
    "customs": [
      "排队文化严格",
      "海滩注意防晒",
      "公共交通上保持安静",
      "小费非必须，可给10%",
      "左侧通行"
    ],
    "tips": [
      "购买Opal卡乘坐公共交通",
      "周日公共交通有封顶价",
      "注意防晒，紫外线很强",
      "游泳注意安全，注意旗帜标识",
      "商店晚上6点关门，周四延长"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "澳大利亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "墨尔本公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "澳大利亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "布里斯班公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "澳大利亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "珀斯公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "澳大利亚春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "阿德莱德公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "新西兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "奥克兰公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "新西兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "惠灵顿公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
    },
    "festivals": [
      {
        "name": "新西兰春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "基督城公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
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
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "美国春节/新年",
        "month": "1-2月",
        "description": "庆祝新年的传统节日"
      },
      {
        "name": "夏季音乐节",
        "month": "6-8月",
        "description": "户外音乐和文化活动"
      },
      {
        "name": "秋季文化节",
        "month": "9-10月",
        "description": "当地文化展示"
      },
      {
        "name": "圣诞/年末庆典",
        "month": "12月",
        "description": "年末庆祝活动"
      }
    ],
    "transport": {
      "airport": "国际机场，提供全球航班连接",
      "train": "城市轨道交通系统覆盖主要区域",
      "bus": "公交网络覆盖全城",
      "taxi": "出租车和网约车服务可用"
    },
    "attractions": [
      {
        "name": "市中心广场",
        "category": "地标",
        "description": "城市中心和主要商业区"
      },
      {
        "name": "历史博物馆",
        "category": "博物馆",
        "description": "了解当地历史和文化"
      },
      {
        "name": "檀香山公园",
        "category": "公园",
        "description": "市中心绿地休闲区"
      },
      {
        "name": "老城区",
        "category": "文化区",
        "description": "传统建筑和街道"
      },
      {
        "name": "购物中心",
        "category": "购物",
        "description": "现代购物和娱乐"
      },
      {
        "name": "观景台",
        "category": "观景",
        "description": "俯瞰城市全景"
      }
    ],
    "food": [
      {
        "name": "当地特色菜",
        "description": "传统美食",
        "recommendation": "当地餐厅"
      },
      {
        "name": "街头小吃",
        "description": "地道街头美食",
        "recommendation": "夜市和小摊"
      },
      {
        "name": "咖啡/茶",
        "description": "当地饮品文化",
        "recommendation": "特色咖啡馆"
      },
      {
        "name": "甜点",
        "description": "传统甜品",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
      "遵守当地法律法规",
      "注意环保，不要乱扔垃圾",
      "尊重当地宗教信仰"
    ],
    "tips": [
      "提前了解当地交通系统",
      "准备当地货币现金",
      "下载翻译APP辅助沟通",
      "购买旅游保险",
      "保存紧急联系方式"
    ]
  }
,
  "dakar": {
    "id": "dakar",
    "name": "达喀尔",
    "nameEn": "Dakar",
    "country": "塞内加尔",
    "continent": "非洲",
    "flag": "🇸🇳",
    "lat": 14.7167,
    "lng": -17.4677,
    "image": "https://picsum.photos/seed/safecity_dakar/1200/400",
    "safety": {
      "overall": 58,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "B-",
        "natural": "B"
      }
    },
    "highlights": [
      "海滨城市",
      "文化活力",
      "法式殖民遗产",
      "渔港美食"
    ],
    "risks": [
      "扒窃与抢包",
      "交通拥堵",
      "高温",
      "(旱季)沙尘"
    ],
    "emergency": {
      "police": "17",
      "ambulance": "18",
      "fire": "18",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "达喀尔双年展",
        "month": "偶数年5月",
        "description": "非洲当代艺术盛会"
      },
      {
        "name": "Tabaski（古尔邦节）",
        "month": "伊斯兰历",
        "description": "全城宰羊庆祝，交通与物价波动"
      }
    ],
    "transport": {
      "airport": "布莱兹·迪亚涅国际机场（DSS），距市区约1小时",
      "train": "城际铁路连郊县",
      "subway": "无地铁，依赖小巴与出租车",
      "taxi": "黄色出租车，建议议价并使用计价"
    },
    "attractions": [
      {
        "name": "戈雷岛",
        "category": "世界遗产",
        "description": "奴隶贸易历史遗址，联合国教科文组织世界遗产"
      },
      {
        "name": "非洲复兴纪念碑",
        "category": "地标",
        "description": "非洲最高的青铜雕像之一"
      },
      {
        "name": "达喀尔大清真寺",
        "category": "宗教建筑",
        "description": "城市天际线的标志"
      }
    ],
    "food": [
      {
        "name": "Thieboudienne",
        "description": "塞内加尔国菜，鱼肉与米饭炖煮",
        "recommendation": "本地家庭餐馆"
      },
      {
        "name": "Yassa 鸡肉",
        "description": "洋葱柠檬腌制的烤鸡",
        "recommendation": "街头与餐馆均常见"
      },
      {
        "name": "烧烤海鲜",
        "description": "大西洋新鲜渔获",
        "recommendation": "海滨排档"
      }
    ],
    "customs": [
      "见面贴面礼常见",
      "进入清真寺需脱鞋并着装保守",
      "周日多数商铺休息",
      "砍价是市场常态"
    ],
    "tips": [
      "沿海地区注意防晒与补水",
      "使用瓶装水",
      "夜间减少步行",
      "保留护照复印件"
    ]
  },
  "abidjan": {
    "id": "abidjan",
    "name": "阿比让",
    "nameEn": "Abidjan",
    "country": "科特迪瓦",
    "continent": "非洲",
    "flag": "🇨🇮",
    "lat": 5.36,
    "lng": -4.0083,
    "image": "https://picsum.photos/seed/safecity_abidjan/1200/400",
    "safety": {
      "overall": 55,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "C+",
        "natural": "C"
      }
    },
    "highlights": [
      "西非经济中心",
      "泻湖风光",
      "夜生活丰富",
      "法国文化交融"
    ],
    "risks": [
      "扒窃与抢包",
      "沿海洪涝",
      "疟疾风险",
      "路况复杂"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "185",
      "fire": "180",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "阿比让狂欢节",
        "month": "12月",
        "description": "海滨城市的大型街头庆典"
      },
      {
        "name": "Fêtes des Masques",
        "month": "2月",
        "description": "原住民面具节"
      }
    ],
    "transport": {
      "airport": "费利克斯·乌弗埃-博瓦尼机场（ABJ），市区约30分钟",
      "train": "铁路网有限",
      "subway": "无地铁",
      "taxi": "橙黄色出租车与摩的，需议价"
    },
    "attractions": [
      {
        "name": "圣保罗大教堂",
        "category": "宗教建筑",
        "description": "现代风格大教堂，可登顶俯瞰泻湖"
      },
      {
        "name": "班科国家公园",
        "category": "自然",
        "description": "城市边缘的热带雨林保护区"
      },
      {
        "name": "泻湖大桥",
        "category": "地标",
        "description": "连接城市两岸的重要通道"
      }
    ],
    "food": [
      {
        "name": "Attiéké",
        "description": "木薯粗粮配烤鱼",
        "recommendation": "路边小摊最地道"
      },
      {
        "name": "Kedjenou 炖鸡",
        "description": "陶罐慢炖鸡肉",
        "recommendation": "传统餐馆"
      },
      {
        "name": "Aloko",
        "description": "炸大蕉",
        "recommendation": "街头小吃"
      }
    ],
    "customs": [
      "见面握手并问候家人",
      "法语为主要通用语",
      "请客时礼貌推辞后再接受",
      "周日部分区域安静"
    ],
    "tips": [
      "黄热病疫苗为入境强制要求",
      "防蚊防疟",
      "避免饮用生水",
      "夜间减少外出"
    ]
  },
  "kampala": {
    "id": "kampala",
    "name": "坎帕拉",
    "nameEn": "Kampala",
    "country": "乌干达",
    "continent": "非洲",
    "flag": "🇺🇬",
    "lat": 0.3476,
    "lng": 32.5825,
    "image": "https://picsum.photos/seed/safecity_kampala/1200/400",
    "safety": {
      "overall": 54,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "C+",
        "natural": "B"
      }
    },
    "highlights": [
      "赤道附近",
      "七座山丘之城",
      "物价相对低",
      "野生动物近郊"
    ],
    "risks": [
      "扒窃",
      "摩托车抢包",
      "疟疾",
      "路况与照明"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "112",
      "fire": "112",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "独立日",
        "month": "10月9日",
        "description": "全国庆典"
      },
      {
        "name": "KLA 艺术节",
        "month": "不定期",
        "description": "坎帕拉本土艺术与音乐"
      }
    ],
    "transport": {
      "airport": "恩德培国际机场（EBB），市区约1小时",
      "train": "无铁路客运",
      "subway": "无",
      "taxi": "Uber/Bolt 与摩的并存，建议使用App"
    },
    "attractions": [
      {
        "name": "卡苏比王陵",
        "category": "世界遗产",
        "description": "布干达王国王室陵墓"
      },
      {
        "name": "恩德培植物园",
        "category": "自然",
        "description": "维多利亚湖畔的历史植物园"
      },
      {
        "name": "赤道纪念碑",
        "category": "地标",
        "description": "可拍照的赤道标记点"
      }
    ],
    "food": [
      {
        "name": "Matoke",
        "description": "煮捣香蕉泥，国民主食",
        "recommendation": "本地餐馆"
      },
      {
        "name": "Rolex 卷饼",
        "description": "鸡蛋蔬菜煎饼卷，街头经典",
        "recommendation": "街边小摊"
      },
      {
        "name": "Nyama Choma",
        "description": "炭烤肉类",
        "recommendation": "烤肉店"
      }
    ],
    "customs": [
      "见面多次握手并问候",
      "英语与卢干达语通用",
      "拍照前先征得同意",
      "小费非强制但受欢迎"
    ],
    "tips": [
      "防蚊防疟必备",
      "饮用瓶装水",
      "夜间拼车更安全",
      "保留证件复印件"
    ]
  },
  "harare": {
    "id": "harare",
    "name": "哈拉雷",
    "nameEn": "Harare",
    "country": "津巴布韦",
    "continent": "非洲",
    "flag": "🇿🇼",
    "lat": -17.8252,
    "lng": 31.0335,
    "image": "https://picsum.photos/seed/safecity_harare/1200/400",
    "safety": {
      "overall": 50,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "B-",
        "health": "C+",
        "natural": "B"
      }
    },
    "highlights": [
      "气候温和",
      "花园城市",
      "物价波动大",
      "近维多利亚瀑布"
    ],
    "risks": [
      "经济不稳带来的街头犯罪",
      "现金短缺",
      "疟疾（周边）",
      "夜间安全"
    ],
    "emergency": {
      "police": "995",
      "ambulance": "994",
      "fire": "993",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "哈拉雷国际艺术节",
        "month": "不定期",
        "description": "HIFA 艺术盛典"
      },
      {
        "name": "独立日",
        "month": "4月18日",
        "description": "全国庆典"
      }
    ],
    "transport": {
      "airport": "罗伯特·穆加贝机场（HRE），市区约30分钟",
      "train": "铁路客运有限",
      "subway": "无",
      "taxi": "建议使用App叫车，现金备零"
    },
    "attractions": [
      {
        "name": "津巴布韦博物馆",
        "category": "博物馆",
        "description": "展示国家历史与考古"
      },
      {
        "name": "Mbare 市场",
        "category": "集市",
        "description": "本地生活与手工艺集散地"
      },
      {
        "name": "哈拉雷植物园",
        "category": "公园",
        "description": "市中心宁静绿地"
      }
    ],
    "food": [
      {
        "name": "Sadza",
        "description": "玉米糊主食配炖菜",
        "recommendation": "本地餐馆"
      },
      {
        "name": "Biltong",
        "description": "风干牛肉条",
        "recommendation": "便利店"
      },
      {
        "name": "烤玉米",
        "description": "街头常见小吃",
        "recommendation": "街边"
      }
    ],
    "customs": [
      "英语为官方语言",
      "见面握手并问候",
      "小费约10%",
      "商务需提前预约"
    ],
    "tips": [
      "备足美元现金零钱",
      "关注汇率与物价",
      "避免夜间步行",
      "饮用瓶装水"
    ]
  },
  "lusaka": {
    "id": "lusaka",
    "name": "卢萨卡",
    "nameEn": "Lusaka",
    "country": "赞比亚",
    "continent": "非洲",
    "flag": "🇿🇲",
    "lat": -15.3875,
    "lng": 28.3228,
    "image": "https://picsum.photos/seed/safecity_lusaka/1200/400",
    "safety": {
      "overall": 54,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B-",
        "health": "C+",
        "natural": "B"
      }
    },
    "highlights": [
      "非洲中南部枢纽",
      "友好民风",
      "近野生动物保护区",
      "物价适中"
    ],
    "risks": [
      "扒窃",
      "街头诈骗",
      "疟疾（周边）",
      "夜间照明不足"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "992",
      "fire": "993",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "独立日",
        "month": "10月24日",
        "description": "全国庆典"
      },
      {
        "name": "Kwacha 文化节",
        "month": "不定期",
        "description": "本土文化展示"
      }
    ],
    "transport": {
      "airport": "肯尼思·卡翁达机场（LUN），市区约30分钟",
      "train": "铁路客运有限",
      "subway": "无",
      "taxi": "App叫车与黄色出租并存"
    },
    "attractions": [
      {
        "name": "卢萨卡国家博物馆",
        "category": "博物馆",
        "description": "赞比亚文化与历史"
      },
      {
        "name": "Munda Wanga 植物园",
        "category": "自然",
        "description": "含小型动物园的绿地"
      },
      {
        "name": "Sunday 跳蚤市场",
        "category": "集市",
        "description": "本地手工艺与古董"
      }
    ],
    "food": [
      {
        "name": "Nshima",
        "description": "玉米糊主食",
        "recommendation": "本地餐馆"
      },
      {
        "name": "烤鱼",
        "description": "坦噶尼喀湖渔获",
        "recommendation": "餐馆"
      },
      {
        "name": "Vetkoek",
        "description": "油炸面团",
        "recommendation": "街头"
      }
    ],
    "customs": [
      "英语为官方语言",
      "见面握手并问候",
      "拍照先征得同意",
      "市场可议价"
    ],
    "tips": [
      "防蚊防疟",
      "饮用瓶装水",
      "夜间减少步行",
      "备小额现金"
    ]
  },
  "amman": {
    "id": "amman",
    "name": "安曼",
    "nameEn": "Amman",
    "country": "约旦",
    "continent": "中东",
    "flag": "🇯🇴",
    "lat": 31.9454,
    "lng": 35.9284,
    "image": "https://picsum.photos/seed/safecity_amman/1200/400",
    "safety": {
      "overall": 74,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "B",
        "health": "A-",
        "natural": "B"
      }
    },
    "highlights": [
      "安全稳定",
      "历史层叠之城",
      "美食之都",
      "罗马遗迹"
    ],
    "risks": [
      "扒窃（旅游区）",
      "夏季高温",
      "交通拥堵",
      "区域局势波动"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "杰拉什艺术节",
        "month": "7-8月",
        "description": "古罗马遗址上的音乐戏剧节"
      },
      {
        "name": "独立日",
        "month": "5月25日",
        "description": "全国庆典"
      }
    ],
    "transport": {
      "airport": "阿丽娅王后机场（AMM），市区约40分钟",
      "train": "无城市轨道交通",
      "subway": "无",
      "taxi": "黄色出租与Uber/Careem并存"
    },
    "attractions": [
      {
        "name": "城堡山",
        "category": "历史遗迹",
        "description": "俯瞰全城的古罗马与伍麦叶遗迹"
      },
      {
        "name": "罗马剧院",
        "category": "古迹",
        "description": "保存完好的2世纪剧场"
      },
      {
        "name": "彩虹街",
        "category": "街区",
        "description": "咖啡馆与书店云集的文艺街区"
      }
    ],
    "food": [
      {
        "name": "Mansaf",
        "description": "羊肉酸奶饭，国菜",
        "recommendation": "传统餐馆"
      },
      {
        "name": "Hummus 与 Falafel",
        "description": "黎凡特经典",
        "recommendation": "街边老店"
      },
      {
        "name": "Knafeh",
        "description": "奶酪甜点",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "见面贴面礼与咖啡待客",
      "斋月白天公共场所饮食需谨慎",
      "周五为周休主日",
      "议价是常态"
    ],
    "tips": [
      "自来水建议烧开",
      "夏季防晒补水",
      "尊重宗教习俗",
      "保留护照复印件"
    ]
  },
  "kuwait_city": {
    "id": "kuwait_city",
    "name": "科威特城",
    "nameEn": "Kuwait City",
    "country": "科威特",
    "continent": "中东",
    "flag": "🇰🇼",
    "lat": 29.3759,
    "lng": 47.9774,
    "image": "https://picsum.photos/seed/safecity_kuwait_city/1200/400",
    "safety": {
      "overall": 76,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B+",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "治安优良",
      "高福利社会",
      "现代天际线",
      "波斯湾海滨"
    ],
    "risks": [
      "夏季极端高温",
      "沙尘暴",
      "驾车激进",
      "油价相关拥堵"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "国庆与解放日",
        "month": "2月25-26日",
        "description": "全国盛大庆祝"
      },
      {
        "name": "Hala Feb 购物节",
        "month": "2月",
        "description": "节庆购物季"
      }
    ],
    "transport": {
      "airport": "科威特国际机场（KWI），市区约30分钟",
      "train": "无",
      "subway": "无",
      "taxi": "App叫车与橙黄色出租"
    },
    "attractions": [
      {
        "name": "科威特塔",
        "category": "地标",
        "description": "海湾标志性的观景双塔"
      },
      {
        "name": "大清真寺",
        "category": "宗教建筑",
        "description": "可容纳万人的宏伟清真寺"
      },
      {
        "name": "科威特国家博物馆",
        "category": "博物馆",
        "description": "波斯湾与海洋史"
      }
    ],
    "food": [
      {
        "name": "Machboos",
        "description": "藏红花米饭配肉，国菜",
        "recommendation": "传统餐馆"
      },
      {
        "name": "Mutabbaq",
        "description": "煎薄饼",
        "recommendation": "街头"
      },
      {
        "name": "海鲜",
        "description": "波斯湾渔获",
        "recommendation": "海滨餐馆"
      }
    ],
    "customs": [
      "斋月白天公共饮食需克制",
      "周五主休",
      "待客慷慨",
      "着装保守得体"
    ],
    "tips": [
      "夏季避免正午户外",
      "沙尘天戴口罩",
      "自来水可饮但偏咸",
      "备现金"
    ]
  },
  "abu_dhabi": {
    "id": "abu_dhabi",
    "name": "阿布扎比",
    "nameEn": "Abu Dhabi",
    "country": "阿联酋",
    "continent": "中东",
    "flag": "🇦🇪",
    "lat": 24.4539,
    "lng": 54.3773,
    "image": "https://picsum.photos/seed/safecity_abu_dhabi/1200/400",
    "safety": {
      "overall": 88,
      "grade": "A",
      "grades": {
        "crime": "A",
        "transport": "A",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "治安极佳",
      "文化新地标",
      "干净现代",
      "家庭友好"
    ],
    "risks": [
      "夏季极端高温",
      "驾车高速",
      "沙尘",
      "跨文化交流"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "998",
      "fire": "997",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "阿布扎比艺术节",
        "month": "1-2月",
        "description": "古典与当代艺术盛宴"
      },
      {
        "name": "F1 阿布扎比大奖赛",
        "month": "11月",
        "description": "亚斯码头赛道"
      }
    ],
    "transport": {
      "airport": "阿布扎比国际机场（AUH），市区约30分钟",
      "train": "无地铁，有公交",
      "subway": "无",
      "taxi": "App叫车与出租普及"
    },
    "attractions": [
      {
        "name": "谢赫扎耶德大清真寺",
        "category": "宗教建筑",
        "description": "白色大理石宏伟清真寺"
      },
      {
        "name": "卢浮宫阿布扎比",
        "category": "博物馆",
        "description": "海湾首个全球艺术博物馆"
      },
      {
        "name": "法拉利世界",
        "category": "主题乐园",
        "description": "亚斯岛上的赛车主题乐园"
      }
    ],
    "food": [
      {
        "name": "Shawarma",
        "description": "旋转烤肉卷",
        "recommendation": "街头与美食广场"
      },
      {
        "name": "Machboos",
        "description": "海湾香料饭",
        "recommendation": "本地餐馆"
      },
      {
        "name": "Luqaimat",
        "description": "炸甜面团球",
        "recommendation": "甜品"
      }
    ],
    "customs": [
      "斋月白天公共饮食需克制",
      "着装保守",
      "周五主休",
      "公共场合举止得体"
    ],
    "tips": [
      "夏季气温超45°C避免户外",
      "尊重宗教与性别规范",
      "自来水可饮",
      "备现金小额"
    ]
  },
  "manama": {
    "id": "manama",
    "name": "麦纳麦",
    "nameEn": "Manama",
    "country": "巴林",
    "continent": "中东",
    "flag": "🇧🇭",
    "lat": 26.2285,
    "lng": 50.586,
    "image": "https://picsum.photos/seed/safecity_manama/1200/400",
    "safety": {
      "overall": 80,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B+",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "治安良好",
      "金融中心",
      "珍珠之路遗产",
      "海湾夜生活"
    ],
    "risks": [
      "夏季高温",
      "沙尘",
      "驾车激进",
      "周五人流"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "999",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "巴林春季节",
        "month": "3-4月",
        "description": "文化演出与市集"
      },
      {
        "name": "F1 巴林大奖赛",
        "month": "3月",
        "description": "沙漠夜赛"
      }
    ],
    "transport": {
      "airport": "巴林国际机场（BAH），市区约20分钟",
      "train": "无",
      "subway": "无",
      "taxi": "App叫车与出租"
    },
    "attractions": [
      {
        "name": "巴林堡（Qal’at al-Bahrain）",
        "category": "世界遗产",
        "description": "迪尔门文明考古遗址"
      },
      {
        "name": "珍珠之路",
        "category": "遗产",
        "description": "联合国教科文组织记忆遗产"
      },
      {
        "name": "巴林国家博物馆",
        "category": "博物馆",
        "description": "海湾历史与石油史"
      }
    ],
    "food": [
      {
        "name": "Machboos",
        "description": "藏红花米饭配肉",
        "recommendation": "传统餐馆"
      },
      {
        "name": "Shawarma",
        "description": "烤肉卷",
        "recommendation": "街头"
      },
      {
        "name": "Arabic Sweets",
        "description": "中东甜点",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "斋月白天克制饮食",
      "周五主休",
      "待客热情",
      "着装保守"
    ],
    "tips": [
      "夏季避免正午户外",
      "沙尘天防护",
      "自来水可饮",
      "备现金"
    ]
  },
  "gold_coast": {
    "id": "gold_coast",
    "name": "黄金海岸",
    "nameEn": "Gold Coast",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -28.0167,
    "lng": 153.4,
    "image": "https://picsum.photos/seed/safecity_gold_coast/1200/400",
    "safety": {
      "overall": 82,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A-",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "海滩度假",
      "主题乐园",
      "冲浪文化",
      "安全宜居"
    ],
    "risks": [
      "烈日与溺水",
      "酒后滋事",
      "暑期人流",
      "偶发抢劫"
    ],
    "emergency": {
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "黄金海岸马拉松",
        "month": "7月",
        "description": "南半球最大马拉松"
      },
      {
        "name": "Schoolies（毕业周）",
        "month": "11月",
        "description": "毕业生海滩聚会，夜间较喧闹"
      }
    ],
    "transport": {
      "airport": "黄金海岸机场（OOL），市区约30分钟",
      "train": "连接布里斯班的火车",
      "subway": "无",
      "taxi": "Uber与出租普及"
    },
    "attractions": [
      {
        "name": "冲浪者天堂",
        "category": "海滩",
        "description": "标志性金色海滩与摩天楼"
      },
      {
        "name": "华纳电影世界",
        "category": "主题乐园",
        "description": "电影主题游乐园"
      },
      {
        "name": "春溪国家公园",
        "category": "自然",
        "description": "雨林瀑布与徒步"
      }
    ],
    "food": [
      {
        "name": "肉派（Meat Pie）",
        "description": "澳式国民小吃",
        "recommendation": "Bakery"
      },
      {
        "name": "海鲜",
        "description": "新鲜虾蟹",
        "recommendation": "海滨餐馆"
      },
      {
        "name": "Flat White",
        "description": "澳式咖啡",
        "recommendation": "咖啡馆"
      }
    ],
    "customs": [
      "小费非强制",
      "公共场所礼貌排队",
      "海滩注意旗语（安全游泳区）",
      "直呼其名较随意"
    ],
    "tips": [
      "严格遵守海滩旗语防溺",
      "防晒补水",
      "野生动物勿靠近",
      "紧急统一拨000"
    ]
  },
  "cairns": {
    "id": "cairns",
    "name": "凯恩斯",
    "nameEn": "Cairns",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -16.9186,
    "lng": 145.7781,
    "image": "https://picsum.photos/seed/safecity_cairns/1200/400",
    "safety": {
      "overall": 84,
      "grade": "A-",
      "grades": {
        "crime": "B+",
        "transport": "A-",
        "health": "A",
        "natural": "B-"
      }
    },
    "highlights": [
      "大堡礁门户",
      "热带雨林",
      "潜水天堂",
      "安全小镇"
    ],
    "risks": [
      "烈日与溺水",
      "箱水母（夏季）",
      "热带暴雨",
      "蚊虫"
    ],
    "emergency": {
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "大堡礁节",
        "month": "8月",
        "description": "海洋与艺术庆典"
      },
      {
        "name": "雨林世界音乐节",
        "month": "11月",
        "description": "库兰达的原音乐节"
      }
    ],
    "transport": {
      "airport": "凯恩斯机场（CNS），市区约10分钟",
      "train": "有连接昆士兰的火车",
      "subway": "无",
      "taxi": "Uber与出租"
    },
    "attractions": [
      {
        "name": "大堡礁",
        "category": "自然奇观",
        "description": "世界最大珊瑚礁，潜水浮潜胜地"
      },
      {
        "name": "库兰达雨林",
        "category": "自然",
        "description": "缆车与火车进入热带雨林"
      },
      {
        "name": "Esplanade 潟湖",
        "category": "泳池",
        "description": "安全人工潟湖泳池"
      }
    ],
    "food": [
      {
        "name": "海鲜拼盘",
        "description": "珊瑚海渔获",
        "recommendation": "海滨餐馆"
      },
      {
        "name": "热带水果",
        "description": "芒果木瓜等",
        "recommendation": "市场"
      },
      {
        "name": "肉派",
        "description": "澳式小吃",
        "recommendation": "Bakery"
      }
    ],
    "customs": [
      "小费非强制",
      "尊重原住民文化",
      "海滩旗语",
      "随意直率"
    ],
    "tips": [
      "夏季远离箱水母区",
      "防晒防蚊",
      "浮潜注意安全",
      "紧急拨000"
    ]
  },
  "hobart": {
    "id": "hobart",
    "name": "霍巴特",
    "nameEn": "Hobart",
    "country": "澳大利亚",
    "continent": "大洋洲",
    "flag": "🇦🇺",
    "lat": -42.8821,
    "lng": 147.3272,
    "image": "https://picsum.photos/seed/safecity_hobart/1200/400",
    "safety": {
      "overall": 85,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "塔斯马尼亚首府",
      "空气洁净",
      "美食美酒",
      "安全宜居"
    ],
    "risks": [
      "冬季寒冷",
      "强风与野火（周边）",
      "夜间人少",
      "海鲜价高"
    ],
    "emergency": {
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "Dark Mofo",
        "month": "6月",
        "description": "冬季光影与艺术节"
      },
      {
        "name": "悉尼—霍巴特帆船赛终点",
        "month": "12月26日",
        "description": "经典帆船赛事抵达"
      }
    ],
    "transport": {
      "airport": "霍巴特机场（HBA），市区约20分钟",
      "train": "无",
      "subway": "无",
      "taxi": "Uber与出租"
    },
    "attractions": [
      {
        "name": "萨拉曼卡市场",
        "category": "集市",
        "description": "周六的历史集市与手工艺"
      },
      {
        "name": "惠灵顿山",
        "category": "自然",
        "description": "俯瞰全城与海峡"
      },
      {
        "name": "MONA 博物馆",
        "category": "博物馆",
        "description": "争议性当代艺术博物馆"
      }
    ],
    "food": [
      {
        "name": "塔斯马尼亚生蚝",
        "description": "冷水优质生蚝",
        "recommendation": "海滨"
      },
      {
        "name": "威灵顿羊肉",
        "description": "本地牧养羊肉",
        "recommendation": "餐馆"
      },
      {
        "name": "手工奶酪",
        "description": "本地乳酪",
        "recommendation": "市集"
      }
    ],
    "customs": [
      "小费非强制",
      "环保分袋严格",
      "随意友好",
      "周末市场文化"
    ],
    "tips": [
      "冬季保暖",
      "野火季关注预警",
      "自驾小心野生动物",
      "紧急拨000"
    ]
  },
  "quito": {
    "id": "quito",
    "name": "基多",
    "nameEn": "Quito",
    "country": "厄瓜多尔",
    "continent": "拉丁美洲",
    "flag": "🇪🇨",
    "lat": -0.1807,
    "lng": -78.4678,
    "image": "https://picsum.photos/seed/safecity_quito/1200/400",
    "safety": {
      "overall": 60,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "B-",
        "natural": "C+"
      }
    },
    "highlights": [
      "赤道首都",
      "世界遗产老城",
      "安第斯高原",
      "物价低"
    ],
    "risks": [
      "扒窃与抢包",
      "高反",
      "地震带",
      "交通拥堵"
    ],
    "emergency": {
      "police": "101",
      "ambulance": "131",
      "fire": "102",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "独立日",
        "month": "8月10日",
        "description": "全国庆典"
      },
      {
        "name": "Inti Raymi 太阳节",
        "month": "6月",
        "description": "印加夏至庆典"
      }
    ],
    "transport": {
      "airport": "马里奥·科博机场（UIO），市区约1小时",
      "train": "无城市轨道交通",
      "subway": "无",
      "taxi": "App叫车更稳妥"
    },
    "attractions": [
      {
        "name": "基多老城",
        "category": "世界遗产",
        "description": "保存完好的殖民时期中心"
      },
      {
        "name": "赤道纪念碑",
        "category": "地标",
        "description": "Mitad del Mundo 赤道线"
      },
      {
        "name": "面包山",
        "category": "观景",
        "description": "缆车登顶俯瞰全城"
      }
    ],
    "food": [
      {
        "name": "Llapingacho",
        "description": "芝士土豆饼",
        "recommendation": "本地餐馆"
      },
      {
        "name": "Cuy（烤豚鼠）",
        "description": "安第斯传统菜",
        "recommendation": "乡村餐馆"
      },
      {
        "name": "Empanadas",
        "description": "炸馅饼",
        "recommendation": "街头"
      }
    ],
    "customs": [
      "见面贴面礼",
      "西语为主",
      "小费约10%",
      "市场可议价"
    ],
    "tips": [
      "防高反慢动作",
      "防扒窃",
      "饮用瓶装水",
      "夜间少步行"
    ]
  },
  "san_jose": {
    "id": "san_jose",
    "name": "圣何塞",
    "nameEn": "San José",
    "country": "哥斯达黎加",
    "continent": "拉丁美洲",
    "flag": "🇨🇷",
    "lat": 9.9281,
    "lng": -84.0907,
    "image": "https://picsum.photos/seed/safecity_san_jose/1200/400",
    "safety": {
      "overall": 62,
      "grade": "B-",
      "grades": {
        "crime": "B-",
        "transport": "B",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "和平稳定",
      "生态旅游门户",
      "物价适中",
      "民主典范"
    ],
    "risks": [
      "扒窃与抢包",
      "夜间安全",
      "火山与地震",
      "暴雨季"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "独立日",
        "month": "9月15日",
        "description": "全国庆祝"
      },
      {
        "name": "玉米节",
        "month": "8月",
        "description": "乡村庆典"
      }
    ],
    "transport": {
      "airport": "胡安·圣玛丽亚机场（SJO），市区约30分钟",
      "train": "城铁有限",
      "subway": "无",
      "taxi": "Uber与出租"
    },
    "attractions": [
      {
        "name": "国家剧院",
        "category": "建筑",
        "description": "法式风格文化地标"
      },
      {
        "name": "黄金博物馆",
        "category": "博物馆",
        "description": "前哥伦布黄金工艺品"
      },
      {
        "name": "中央市场",
        "category": "集市",
        "description": "本地生活与小吃"
      }
    ],
    "food": [
      {
        "name": "Casado",
        "description": "米饭豆类配肉，国民套餐",
        "recommendation": "苏打小馆"
      },
      {
        "name": "Gallo Pinto",
        "description": "黑豆米饭",
        "recommendation": "早餐"
      },
      {
        "name": "新鲜果汁",
        "description": "热带水果",
        "recommendation": "街头"
      }
    ],
    "customs": [
      "西班牙语",
      "见面握手",
      "小费约10%",
      "环保意识强"
    ],
    "tips": [
      "防扒窃",
      "饮用瓶装水",
      "暴雨季注意路况",
      "夜归拼车"
    ]
  },
  "havana": {
    "id": "havana",
    "name": "哈瓦那",
    "nameEn": "Havana",
    "country": "古巴",
    "continent": "拉丁美洲",
    "flag": "🇨🇺",
    "lat": 23.1136,
    "lng": -82.3666,
    "image": "https://picsum.photos/seed/safecity_havana/1200/400",
    "safety": {
      "overall": 62,
      "grade": "B-",
      "grades": {
        "crime": "B",
        "transport": "B-",
        "health": "B-",
        "natural": "B"
      }
    },
    "highlights": [
      "殖民老城",
      "老爷车文化",
      "音乐之都",
      "物价低"
    ],
    "risks": [
      "旅游诈骗",
      "扒窃",
      "物资短缺",
      "网络不便"
    ],
    "emergency": {
      "police": "106",
      "ambulance": "104",
      "fire": "105",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "圣地亚哥狂欢节",
        "month": "7月",
        "description": "全国最盛大的街头狂欢"
      },
      {
        "name": "独立日",
        "month": "10月10日",
        "description": "全国庆典"
      }
    ],
    "transport": {
      "airport": "何塞·马蒂机场（HAV），市区约30分钟",
      "train": "铁路有限",
      "subway": "无",
      "taxi": "国营出租与老爷车出租"
    },
    "attractions": [
      {
        "name": "哈瓦那老城",
        "category": "世界遗产",
        "description": "殖民时期广场与城堡"
      },
      {
        "name": "海滨大道 Malecón",
        "category": "地标",
        "description": "滨海漫步长堤"
      },
      {
        "name": "革命广场",
        "category": "地标",
        "description": "城市政治中心"
      }
    ],
    "food": [
      {
        "name": "Ropa Vieja",
        "description": "炖牛肉丝",
        "recommendation": "家庭餐馆"
      },
      {
        "name": "Cuban Sandwich",
        "description": "古巴三明治",
        "recommendation": "街边"
      },
      {
        "name": "Mojito",
        "description": "朗姆薄荷饮",
        "recommendation": "La Bodeguita"
      }
    ],
    "customs": [
      "西班牙语",
      "音乐与舞蹈文化",
      "小费受欢迎",
      "拍照先征得同意"
    ],
    "tips": [
      "使用正规换汇（Cadeca）",
      "防扒窃",
      "网络需购买上网卡",
      "备小额现金"
    ]
  },
  "curitiba": {
    "id": "curitiba",
    "name": "库里蒂巴",
    "nameEn": "Curitiba",
    "country": "巴西",
    "continent": "拉丁美洲",
    "flag": "🇧🇷",
    "lat": -25.4284,
    "lng": -49.2733,
    "image": "https://picsum.photos/seed/safecity_curitiba/1200/400",
    "safety": {
      "overall": 72,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "A-",
        "health": "B+",
        "natural": "B"
      }
    },
    "highlights": [
      "城市规划典范",
      "公交系统先进",
      "安全宜居",
      "公园众多"
    ],
    "risks": [
      "偶发抢劫",
      "扒窃",
      "冬季湿冷",
      "物价中等"
    ],
    "emergency": {
      "police": "190",
      "ambulance": "192",
      "fire": "193",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "独立日",
        "month": "9月7日",
        "description": "全国庆典"
      },
      {
        "name": "Curitiba 美食节",
        "month": "不定期",
        "description": "本地餐饮活动"
      }
    ],
    "transport": {
      "airport": "阿丰索·佩纳机场（CWB），市区约30分钟",
      "train": "无城市轨道交通",
      "subway": "有快速公交BRT系统",
      "taxi": "Uber与出租普及"
    },
    "attractions": [
      {
        "name": "火车公园",
        "category": "公园",
        "description": "旧火车站改造的绿地"
      },
      {
        "name": "奥斯卡·尼迈耶博物馆",
        "category": "博物馆",
        "description": "眼科状当代艺术馆"
      },
      {
        "name": "植物园",
        "category": "公园",
        "description": "法式花园与温室"
      }
    ],
    "food": [
      {
        "name": "Pão de Queijo",
        "description": "芝士面包",
        "recommendation": "面包店"
      },
      {
        "name": "Barreado",
        "description": "慢炖牛肉",
        "recommendation": "本地餐馆"
      },
      {
        "name": "Churrasco",
        "description": "巴西烤肉",
        "recommendation": "烤肉店"
      }
    ],
    "customs": [
      "葡萄牙语",
      "小费10%左右",
      "见面贴面礼",
      "足球文化浓厚"
    ],
    "tips": [
      "公交系统高效多用BRT",
      "防扒窃",
      "冬季保暖",
      "紧急分别拨190/192/193"
    ]
  },
  "new_orleans": {
    "id": "new_orleans",
    "name": "新奥尔良",
    "nameEn": "New Orleans",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 29.9511,
    "lng": -90.0715,
    "image": "https://picsum.photos/seed/safecity_new_orleans/1200/400",
    "safety": {
      "overall": 52,
      "grade": "B-",
      "grades": {
        "crime": "C+",
        "transport": "B",
        "health": "B+",
        "natural": "C"
      }
    },
    "highlights": [
      "爵士乐之都",
      "美食天堂",
      "独特法式风情",
      "节庆之城"
    ],
    "risks": [
      "部分区高犯罪",
      "飓风与洪涝",
      "高温高湿",
      "夜间安全"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "Mardi Gras 狂欢节",
        "month": "2-3月",
        "description": "最著名的街头狂欢"
      },
      {
        "name": "爵士音乐节",
        "month": "4-5月",
        "description": "全球爵士盛会"
      }
    ],
    "transport": {
      "airport": "路易斯·阿姆斯特朗机场（MSY），市区约30分钟",
      "train": "有街车与公交",
      "subway": "无",
      "taxi": "Uber与出租普及"
    },
    "attractions": [
      {
        "name": "法国区",
        "category": "历史街区",
        "description": "波旁街与杰克逊广场"
      },
      {
        "name": "河口战场",
        "category": "历史",
        "description": "1812年战争遗址"
      },
      {
        "name": "沼泽游船",
        "category": "自然",
        "description": "密西西比河三角洲生态"
      }
    ],
    "food": [
      {
        "name": "Gumbo",
        "description": "海鲜秋葵浓汤",
        "recommendation": "老字号餐馆"
      },
      {
        "name": "Beignets",
        "description": "糖粉油炸面团",
        "recommendation": "Café du Monde"
      },
      {
        "name": "Po’ Boy",
        "description": "炸虾三明治",
        "recommendation": "街头"
      }
    ],
    "customs": [
      "小费15-20%",
      "见面直接称呼名",
      "节庆文化浓",
      "多元包容"
    ],
    "tips": [
      "夜间结伴",
      "关注飓风季预警",
      "高温补水",
      "紧急拨911"
    ]
  },
  "tampa": {
    "id": "tampa",
    "name": "坦帕",
    "nameEn": "Tampa",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 27.9506,
    "lng": -82.4572,
    "image": "https://picsum.photos/seed/safecity_tampa/1200/400",
    "safety": {
      "overall": 68,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "B+",
        "health": "B+",
        "natural": "C+"
      }
    },
    "highlights": [
      "阳光海滨",
      "主题乐园近",
      "经济活跃",
      "家庭友好"
    ],
    "risks": [
      "午后雷暴",
      "飓风季",
      "偶发抢劫",
      "高温"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "Gasparilla 海盗节",
        "month": "1-2月",
        "description": "海盗主题城市庆典"
      },
      {
        "name": "州博会",
        "month": "2月",
        "description": "佛州博览会"
      }
    ],
    "transport": {
      "airport": "坦帕国际机场（TPA），市区约20分钟",
      "train": "有街车与公交",
      "subway": "无",
      "taxi": "Uber与出租普及"
    },
    "attractions": [
      {
        "name": "Ybor City",
        "category": "历史街区",
        "description": "古巴移民历史街区与夜生活"
      },
      {
        "name": "Busch Gardens",
        "category": "主题乐园",
        "description": "非洲主题动物园与过山车"
      },
      {
        "name": "清水滩",
        "category": "海滩",
        "description": "邻近的优质海滩"
      }
    ],
    "food": [
      {
        "name": "Cuban Sandwich",
        "description": "古巴三明治",
        "recommendation": "Ybor老店"
      },
      {
        "name": "石蟹",
        "description": "佛州特产",
        "recommendation": "季节限定"
      },
      {
        "name": "Key Lime Pie",
        "description": "青柠派",
        "recommendation": "甜品店"
      }
    ],
    "customs": [
      "小费15-20%",
      "直率随意",
      "多元文化",
      "驾车文化"
    ],
    "tips": [
      "午后雷暴带伞",
      "飓风季关注预警",
      "海滩防晒",
      "紧急拨911"
    ]
  },
  "minneapolis": {
    "id": "minneapolis",
    "name": "明尼阿波利斯",
    "nameEn": "Minneapolis",
    "country": "美国",
    "continent": "北美洲",
    "flag": "🇺🇸",
    "lat": 44.9778,
    "lng": -93.265,
    "image": "https://picsum.photos/seed/safecity_minneapolis/1200/400",
    "safety": {
      "overall": 66,
      "grade": "B",
      "grades": {
        "crime": "B",
        "transport": "B+",
        "health": "A-",
        "natural": "C+"
      }
    },
    "highlights": [
      "千湖之城",
      "宜居安全",
      "文化艺术强",
      "户外活动"
    ],
    "risks": [
      "严冬极寒",
      "冰雪路面",
      "偶发枪击",
      "暴风雪"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "水节",
        "month": "6月",
        "description": "城市河流庆典"
      },
      {
        "name": "圣诞集市",
        "month": "12月",
        "description": "冬季市集"
      }
    ],
    "transport": {
      "airport": "明尼阿波利斯机场（MSP），市区约20分钟",
      "train": "有轻轨连接机场与市区",
      "subway": "有轻轨（Blue/Green线）",
      "taxi": "Uber与出租普及"
    },
    "attractions": [
      {
        "name": "密西西比河滨",
        "category": "自然",
        "description": "瀑布与步道公园"
      },
      {
        "name": "步行桥雕塑园",
        "category": "艺术",
        "description": "室外雕塑公园"
      },
      {
        "name": "美国购物中心",
        "category": "购物",
        "description": "全美最大室内 Mall"
      }
    ],
    "food": [
      {
        "name": "Juicy Lucy 芝士堡",
        "description": "爆浆芝士汉堡",
        "recommendation": "本地Pub"
      },
      {
        "name": "Hotdish",
        "description": "烤箱炖菜",
        "recommendation": "家常菜"
      },
      {
        "name": "野生稻米",
        "description": "明州特产",
        "recommendation": "餐馆"
      }
    ],
    "customs": [
      "小费15-20%",
      "友善但保持距离",
      "冬季装备必备",
      "湖畔文化"
    ],
    "tips": [
      "冬季防寒-20°C常见",
      "冰雪天慢行",
      "紧急拨911",
      "室内暖气足"
    ]
  },
  "chongqing": {
    "id": "chongqing",
    "name": "重庆",
    "nameEn": "Chongqing",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 29.563,
    "lng": 106.5516,
    "image": "https://picsum.photos/seed/safecity_chongqing/1200/400",
    "safety": {
      "overall": 78,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "B+",
        "natural": "B"
      }
    },
    "highlights": [
      "山城地貌",
      "火锅之都",
      "夜景迷人",
      "物价适中"
    ],
    "risks": [
      "阶梯与坡道多",
      "夏季闷热",
      "轻轨拥挤",
      "麻辣肠胃"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "重庆火锅节",
        "month": "10月",
        "description": "全城火锅主题活动"
      },
      {
        "name": "春节灯会",
        "month": "农历正月",
        "description": "传统灯会"
      }
    ],
    "transport": {
      "airport": "江北国际机场（CKG），市区约40分钟",
      "train": "成渝高铁连接成都",
      "subway": "有10余条轻轨/地铁线",
      "taxi": "网约车与出租普及"
    },
    "attractions": [
      {
        "name": "洪崖洞",
        "category": "地标",
        "description": "吊脚楼夜景网红地标"
      },
      {
        "name": "长江索道",
        "category": "体验",
        "description": "跨江空中缆车"
      },
      {
        "name": "磁器口古镇",
        "category": "古镇",
        "description": "千年古镇与小吃"
      }
    ],
    "food": [
      {
        "name": "重庆火锅",
        "description": "麻辣牛油锅底",
        "recommendation": "老火锅店"
      },
      {
        "name": "小面",
        "description": "麻辣面条早餐",
        "recommendation": "街边小馆"
      },
      {
        "name": "酸辣粉",
        "description": "红薯粉酸辣",
        "recommendation": "小吃摊"
      }
    ],
    "customs": [
      "微信支付宝普及",
      "小费不流行",
      "方言与普通话并存",
      "热情直率"
    ],
    "tips": [
      "备肠胃药应对麻辣",
      "导航注意高低差",
      "防暑补水",
      "紧急拨110/120/119"
    ]
  },
  "qingdao": {
    "id": "qingdao",
    "name": "青岛",
    "nameEn": "Qingdao",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 36.0671,
    "lng": 120.3826,
    "image": "https://picsum.photos/seed/safecity_qingdao/1200/400",
    "safety": {
      "overall": 80,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A-",
        "health": "B+",
        "natural": "B"
      }
    },
    "highlights": [
      "海滨啤酒城",
      "红瓦绿树",
      "德式建筑",
      "凉爽夏季"
    ],
    "risks": [
      "旅游季人多",
      "海鲜过敏",
      "夏季潮汐",
      "海雾"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "青岛国际啤酒节",
        "month": "8月",
        "description": "亚洲最大啤酒节"
      },
      {
        "name": "海洋节",
        "month": "7月",
        "description": "海洋主题庆典"
      }
    ],
    "transport": {
      "airport": "胶东国际机场（TAO），市区约1小时",
      "train": "高铁直达多城",
      "subway": "有地铁线",
      "taxi": "网约车与出租普及"
    },
    "attractions": [
      {
        "name": "栈桥",
        "category": "地标",
        "description": "伸入海中的百年长廊"
      },
      {
        "name": "八大关",
        "category": "街区",
        "description": "万国建筑博物苑"
      },
      {
        "name": "崂山",
        "category": "自然",
        "description": "海上名山与道观"
      }
    ],
    "food": [
      {
        "name": "青岛啤酒",
        "description": "原浆鲜啤",
        "recommendation": "啤酒节/酒馆"
      },
      {
        "name": "海鲜",
        "description": "蛤蜊与海螺",
        "recommendation": "啤酒屋"
      },
      {
        "name": "鲅鱼水饺",
        "description": "本地特色",
        "recommendation": "饺子馆"
      }
    ],
    "customs": [
      "扫码支付普及",
      "小费不流行",
      "海边长者晨练文化",
      "直爽好客"
    ],
    "tips": [
      "海鲜配啤酒适量",
      "海边注意潮汐与防晒",
      "防扒",
      "紧急拨110/120/119"
    ]
  },
  "sanya": {
    "id": "sanya",
    "name": "三亚",
    "nameEn": "Sanya",
    "country": "中国",
    "continent": "亚洲",
    "flag": "🇨🇳",
    "lat": 18.2528,
    "lng": 109.5119,
    "image": "https://picsum.photos/seed/safecity_sanya/1200/400",
    "safety": {
      "overall": 76,
      "grade": "B+",
      "grades": {
        "crime": "B+",
        "transport": "B+",
        "health": "B",
        "natural": "B-"
      }
    },
    "highlights": [
      "热带海岛",
      "度假天堂",
      "潜水胜地",
      "阳光沙滩"
    ],
    "risks": [
      "旅游消费陷阱",
      "台风季",
      "日晒强烈",
      "海鲜宰客"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "120",
      "fire": "119",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "天涯海角国际婚庆节",
        "month": "不定期",
        "description": "婚庆主题"
      },
      {
        "name": "海南欢乐节",
        "month": "11月",
        "description": "全省旅游节"
      }
    ],
    "transport": {
      "airport": "凤凰国际机场（SYX），市区约30分钟",
      "train": "环岛高铁连接海口",
      "subway": "无",
      "taxi": "网约车与出租"
    },
    "attractions": [
      {
        "name": "亚龙湾",
        "category": "海滩",
        "description": "细沙碧水的度假海湾"
      },
      {
        "name": "天涯海角",
        "category": "地标",
        "description": "著名石刻景区"
      },
      {
        "name": "南山文化苑",
        "category": "文化",
        "description": "海上观音圣像"
      }
    ],
    "food": [
      {
        "name": "海鲜",
        "description": "现捞现做",
        "recommendation": "明码标价市场加工"
      },
      {
        "name": "椰子鸡",
        "description": "椰子清汤鸡",
        "recommendation": "火锅店"
      },
      {
        "name": "清补凉",
        "description": "椰奶甜品",
        "recommendation": "街头"
      }
    ],
    "customs": [
      "扫码支付普及",
      "小费不流行",
      "度假休闲文化",
      "物价较内地高"
    ],
    "tips": [
      "海鲜先问价再加工",
      "警惕拉客",
      "强日晒防晒",
      "台风季关注预警"
    ]
  },
  "busan": {
    "id": "busan",
    "name": "釜山",
    "nameEn": "Busan",
    "country": "韩国",
    "continent": "亚洲",
    "flag": "🇰🇷",
    "lat": 35.1796,
    "lng": 129.0756,
    "image": "https://picsum.photos/seed/safecity_busan/1200/400",
    "safety": {
      "overall": 82,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "A",
        "health": "A",
        "natural": "B"
      }
    },
    "highlights": [
      "海港都市",
      "海滩与温泉",
      "美食之都",
      "物价低于首尔"
    ],
    "risks": [
      "夏季台风",
      "地铁拥挤",
      "酒后治安",
      "扒窃"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "119",
      "fire": "119",
      "tourist_hotline": ""
    },
    "festivals": [
      {
        "name": "釜山国际电影节",
        "month": "10月",
        "description": "亚洲重要电影节"
      },
      {
        "name": "海云台沙雕节",
        "month": "夏季",
        "description": "沙滩沙雕展"
      }
    ],
    "transport": {
      "airport": "金海国际机场（PUS），市区约40分钟",
      "train": "KTX高速连接首尔",
      "subway": "有4条地铁线",
      "taxi": "网约车与出租"
    },
    "attractions": [
      {
        "name": "海云台海滩",
        "category": "海滩",
        "description": "韩国最著名海滩"
      },
      {
        "name": "甘川文化村",
        "category": "艺术街区",
        "description": "彩色阶梯壁画村"
      },
      {
        "name": "札嘎其市场",
        "category": "市场",
        "description": "韩国最大水产市场"
      }
    ],
    "food": [
      {
        "name": "猪肉汤饭",
        "description": "Gukbap 暖胃汤饭",
        "recommendation": "老店"
      },
      {
        "name": "海鲜",
        "description": "札嘎其现捞",
        "recommendation": "市场"
      },
      {
        "name": "海鲜煎饼",
        "description": "Pajeon",
        "recommendation": "啤酒馆"
      }
    ],
    "customs": [
      "韩语与敬语",
      "小费不流行",
      "脱鞋入室",
      "饮酒文化浓"
    ],
    "tips": [
      "地铁T-money卡通用",
      "防台风季",
      "饮酒后注意",
      "紧急拨112/119"
    ]
  }
};