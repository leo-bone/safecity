// ============================================================
// SafeCity Global - 城市详情数据库 v5.0
// 包含148个城市的详细信息
// 包含：节日活动、交通指南、景点推荐、美食推荐、文化习俗、实用贴士
// 图片已统一升级为高清（Unsplash w=1200 / picsum 1600x600）
// 风险/贴士/习俗词条已按大洲补齐至最小深度
// 23座新增城市（非洲/中东/大洋洲/拉美/北美/亚洲）已做全栏位深度扩充（美食/景点/节日/习俗/热点/安全区均补齐）
// 厄瓜多尔(quito)紧急电话已校正为统一 911
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "110",
      "ambulance": "119",
      "fire": "119",
      "tourist_hotline": "050-3816-2787"
    },
    "festivals": [
      {
        "name": "樱花季（花见）",
        "month": "3月下旬—4月上旬",
        "description": "上野公园、千鸟之渊等地樱花盛开的赏花季。"
      },
      {
        "name": "神田祭",
        "month": "5月中旬（奇数年为大祭）",
        "description": "神田明神的传统神舆巡游，日本三大祭之一。"
      },
      {
        "name": "隅田川花火大会",
        "month": "7月最后一个星期六",
        "description": "东京最具代表性的夏季烟火大会，浅草一带人潮拥挤。"
      },
      {
        "name": "浅草三社祭",
        "month": "5月第三个周末",
        "description": "浅草神社的江户风情祭典，数十座神舆巡行。"
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
        "name": "浅草寺（Sensō-ji）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "东京晴空塔（Tokyo Skytree）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "明治神宫",
        "category": "景点",
        "description": ""
      },
      {
        "name": "涩谷路口（Shibuya Crossing）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皇居东御苑",
        "category": "景点",
        "description": ""
      },
      {
        "name": "上野公园（上野恩赐公园）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "江户前寿司",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "酱油拉面",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "天妇罗",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "文字烧（もんじゃ焼き）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鳗鱼饭（うな丼）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "进入室内需要脱鞋",
      "不要在电车上大声说话",
      "给小费是不礼貌的行为",
      "不要边走边吃",
      "公共场合尽量避免大声打电话",
      "进入室内需要脱鞋，注意袜子要干净",
      "公共场所保持安静，电车内不要大声说话",
      "不要边走边吃，在便利店门口吃完再走"
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "995",
      "fire": "995",
      "tourist_hotline": "1800-736-2000"
    },
    "festivals": [
      {
        "name": "春节（农历新年）",
        "month": "1月—2月",
        "description": "牛车水一带张灯结彩，有妆艺游行与街头庆祝。"
      },
      {
        "name": "开斋节（Hari Raya Aidilfitri）",
        "month": "斋月结束后（伊斯兰历10月1日）",
        "description": "芽笼士乃夜市与马来社区开放家宴庆祝。"
      },
      {
        "name": "屠妖节（Deepavali）",
        "month": "10月—11月",
        "description": "小印度街区点灯亮起，印度族裔最重要的节日。"
      },
      {
        "name": "新加坡大奖赛（F1夜间赛）",
        "month": "9月—10月",
        "description": "滨海湾街道赛道举行的世界一级方程式夜赛。"
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
        "name": "滨海湾花园（Gardens by the Bay）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "鱼尾狮公园（Merlion Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣淘沙岛（Sentosa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "滨海湾金沙（Marina Bay Sands）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "新加坡动物园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "牛车水（Chinatown）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "海南鸡饭",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "辣椒螃蟹",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "叻沙（Laksa）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "肉骨茶（Bak Kut Teh）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "咖椰吐司（Kaya Toast）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "公共场合禁止吃口香糖",
      "不要随地乱扔垃圾",
      "地铁上禁止饮食",
      "过马路必须等绿灯",
      "尊重多元文化习俗",
      "严禁携带口香糖入境",
      "地铁和公交上禁止饮食",
      "公共场所禁止吸烟，只能在指定区域"
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "部分城市交通拥堵",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "119",
      "fire": "119",
      "tourist_hotline": "1330"
    },
    "festivals": [
      {
        "name": "首尔灯光节（Seoul Lantern Festival）",
        "month": "11月",
        "description": "清溪川沿岸布置大型灯饰装置。"
      },
      {
        "name": "江南樱花节",
        "month": "4月上旬",
        "description": "江南区樱花大道的赏樱庆典与街头演出。"
      },
      {
        "name": "首尔国际烟花节",
        "month": "10月",
        "description": "汝矣岛汉江公园举行的多国烟花表演，观礼人流极大。"
      },
      {
        "name": "佛诞日灯会（燃灯会）",
        "month": "5月（农历四月初八前后）",
        "description": "曹溪寺一带手绘莲灯巡游，韩国国家级非物质文化遗产。"
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
        "name": "景福宫（경복궁）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "昌德宫（창덕궁）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "北村韩屋村（북촌한옥마을）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "N首尔塔（N서울타워）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "明洞（명동）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "汉江公园（한강공원）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "韩式烤肉（불고기／갈비）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "石锅拌饭（비빔밥）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "辣炒年糕（떡볶이）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "参鸡汤（삼계탕）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "部队锅（부대찌개）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "和长辈一起喝酒要侧身，不要正面饮酒",
      "双手接过长辈给的物品，表示尊重",
      "鞋子要整齐放在门口，不要踩踏",
      "不要给小费，韩国没有小费文化",
      "公共场合保持安静，不要大声说话",
      "用筷子时不要指人",
      "不要用筷子插食物，这被认为不吉利",
      "接受物品用双手表示尊重"
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "部分城市交通拥堵",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "999",
      "tourist_hotline": "2508-1234"
    },
    "festivals": [
      {
        "name": "农历新年维港烟花汇演",
        "month": "农历年初二（1月—2月）",
        "description": "维多利亚港上空的大型贺岁烟花，尖沙咀一带挤满观众。"
      },
      {
        "name": "长洲太平清醮",
        "month": "4月下旬—5月（农历四月初八前后）",
        "description": "长洲岛的抢包山与飘色巡游，香港国家级非遗项目。"
      },
      {
        "name": "香港书展",
        "month": "7月中下旬",
        "description": "湾仔会议展览中心举办的华语地区大型书展。"
      },
      {
        "name": "香港美酒佳肴巡礼",
        "month": "10月下旬",
        "description": "中环海滨举行的美食与美酒户外展销活动。"
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
        "name": "太平山顶（Victoria Peak）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维多利亚港（尖沙咀海滨）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "香港迪士尼乐园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "天坛大佛与昂坪360",
        "category": "景点",
        "description": ""
      },
      {
        "name": "香港海洋公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "庙街夜市",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "港式点心（饮茶）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烧鹅",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "云吞面",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "蛋挞",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "煲仔饭",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "食品安全",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "地坛春节文化庙会",
        "month": "农历正月初一至初五（1月—2月）",
        "description": "地坛公园的传统庙会，含仿清祭地表演与小吃摊。"
      },
      {
        "name": "北京国际电影节",
        "month": "4月中下旬",
        "description": "红毯、展映与电影市场活动，吸引大量影迷。"
      },
      {
        "name": "北京马拉松",
        "month": "10月下旬",
        "description": "从天安门广场起跑的城市马拉松赛事。"
      },
      {
        "name": "香山红叶文化节",
        "month": "10月中旬—11月中旬",
        "description": "香山公园黄栌红叶观赏季，周末登山人流极大。"
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
        "name": "故宫博物院",
        "category": "景点",
        "description": ""
      },
      {
        "name": "天安门广场",
        "category": "景点",
        "description": ""
      },
      {
        "name": "八达岭长城",
        "category": "景点",
        "description": ""
      },
      {
        "name": "天坛公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "颐和园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "什刹海与南锣鼓巷",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "北京烤鸭",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸酱面",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "涮羊肉",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "豆汁儿",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卤煮火烧",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "食品安全",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "豫园新春灯会",
        "month": "农历腊月至2月",
        "description": "豫园商城的生肖主题灯会，是上海最有年味的活动。"
      },
      {
        "name": "上海国际电影节",
        "month": "6月",
        "description": "中国唯一的国际A类电影节，展映场次覆盖全市影院。"
      },
      {
        "name": "上海旅游节",
        "month": "9月中下旬",
        "description": "含花车巡游与景区半价优惠的年度旅游推广活动。"
      },
      {
        "name": "上海马拉松",
        "month": "11月下旬",
        "description": "穿越外滩与徐汇滨江的城市马拉松，报名极为抢手。"
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
        "name": "外滩（The Bund）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "豫园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "东方明珠广播电视塔",
        "category": "景点",
        "description": ""
      },
      {
        "name": "上海博物馆",
        "category": "景点",
        "description": ""
      },
      {
        "name": "南京路步行街",
        "category": "景点",
        "description": ""
      },
      {
        "name": "田子坊",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "南翔小笼包",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "生煎包（生煎馒头）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "本帮红烧肉",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "葱油拌面",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "腌笃鲜",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "191",
      "ambulance": "1669",
      "fire": "199",
      "tourist_police": "1155"
    },
    "festivals": [
      {
        "name": "宋干节（泼水节）",
        "month": "4月13日—15日",
        "description": "泰国新年，全城泼水庆祝，考山路与是隆路水战最热闹。"
      },
      {
        "name": "万佛节（Makha Bucha）",
        "month": "2月（泰历三月满月）",
        "description": "佛教重要节日，信众绕寺点烛，王室成员常出席仪式。"
      },
      {
        "name": "水灯节（Loy Krathong）",
        "month": "11月（泰历十二月满月）",
        "description": "向河面放水灯祈福，湄南河畔与河畔商场有庆典。"
      },
      {
        "name": "唐人街农历新年",
        "month": "1月—2月",
        "description": "耀华力路张灯结彩，舞龙舞狮与路边宴席规模盛大。"
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
        "name": "大皇宫与玉佛寺（Wat Phra Kaew）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卧佛寺（Wat Pho）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "郑王庙（Wat Arun）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "四面佛（Erawan Shrine）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "恰图恰周末市场（Chatuchak）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "湄南河（Chao Phraya River）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "冬阴功汤（ต้มยำกุ้ง）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "泰式炒河粉（Pad Thai）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "青木瓜沙拉（Som Tam）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "绿咖喱鸡（แกงเขียวหวาน）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "芒果糯米饭（ข้าวเหนียวมะม่วง）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "食品安全",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "大宝森节（Thaipusam）",
        "month": "1月—2月（泰米尔历泰月满月）",
        "description": "黑风洞举行的大型印度教苦行还愿庆典，参与者可达数十万。"
      },
      {
        "name": "开斋节（Hari Raya Aidilfitri）",
        "month": "斋月结束后",
        "description": "马来家庭开放门户（Open House），商场与夜市装饰一新。"
      },
      {
        "name": "马来西亚国庆日",
        "month": "8月31日",
        "description": "独立广场举行阅兵与升旗仪式，晚间有烟花。"
      },
      {
        "name": "屠妖节（Deepavali）",
        "month": "10月—11月",
        "description": "印度族裔的灯节，砖厂一带（Brickfields）点灯庆祝。"
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
        "name": "双子塔（Petronas Twin Towers）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "黑风洞（Batu Caves）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "独立广场（Merdeka Square）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "吉隆坡塔（KL Tower）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国家清真寺（Masjid Negara）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "茨厂街（Petaling Street）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "椰浆饭（Nasi Lemak）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "肉骨茶（Bak Kut Teh）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "福建炒面（Hokkien Mee）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "印度煎饼（Roti Canai）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "沙嗲（Satay）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "台北灯节",
        "month": "元宵节前后（2月）",
        "description": "西区或东区设主灯区，展出大型花灯与光雕。"
      },
      {
        "name": "台北国际书展",
        "month": "2月",
        "description": "世贸一馆举办的华文出版界年度盛会。"
      },
      {
        "name": "台北电影节",
        "month": "6月下旬—7月",
        "description": "以台湾电影为主的国际影展，含国际新导演竞赛。"
      },
      {
        "name": "台北跨年晚会与101烟火",
        "month": "12月31日",
        "description": "市政府前广场跨年演唱会与101大楼烟火秀，散场人潮拥挤。"
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
        "name": "台北101",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国立故宫博物院",
        "category": "景点",
        "description": ""
      },
      {
        "name": "中正纪念堂",
        "category": "景点",
        "description": ""
      },
      {
        "name": "士林夜市",
        "category": "景点",
        "description": ""
      },
      {
        "name": "艋舺龙山寺",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西门町",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "牛肉面",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卤肉饭",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "蚵仔煎",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "珍珠奶茶",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "凤梨酥",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "自然灾害风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "造币局樱花通道开放",
        "month": "4月中旬",
        "description": "大阪造币局院内樱花通道限时对外开放，品种逾百。"
      },
      {
        "name": "天神祭",
        "month": "7月24日—25日",
        "description": "大阪天满宫的祭典，含船渡御与奉纳烟火，日本三大祭之一。"
      },
      {
        "name": "淀川花火大会",
        "month": "8月上旬",
        "description": "淀川河畔的大型烟火大会，观众极多需注意散场安全。"
      },
      {
        "name": "大阪光之盛宴",
        "month": "11月—12月",
        "description": "御堂筋行道树灯光与中之岛光雕投影的冬季灯饰季。"
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
        "name": "大阪城（大阪城天守阁）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "道顿堀（Dotonbori）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "新世界与通天阁",
        "category": "景点",
        "description": ""
      },
      {
        "name": "日本环球影城（USJ）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "梅田蓝天大厦空中庭园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "海游馆（Osaka Aquarium Kaiyukan）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "章鱼烧（たこ焼き）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "御好烧（お好み焼き）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "串炸（串カツ）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "箱押寿司（押し寿司）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "狐狸乌冬面（きつねうどん）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "进入室内需要脱鞋，注意不要踩踏门槛",
      "不要在电车上大声说话，手机需设置为静音",
      "给小费是不礼貌的行为，服务费已包含在账单中",
      "不要边走边吃，站在店铺旁边吃完再走",
      "公共场合尽量避免大声打电话，使用耳机接听",
      "递东西时使用双手，表示尊重",
      "不要用筷子直插米饭（像上香一样）",
      "尊重当地文化和习俗"
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "自然灾害风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "象头神节（Ganesh Chaturthi）",
        "month": "8月—9月",
        "description": "全市设神像供台，最后一天将神像送入阿拉伯海，场面壮观。"
      },
      {
        "name": "胡里节（Holi）",
        "month": "3月",
        "description": "洒色彩粉的春季节庆，参加者建议护眼并结伴而行。"
      },
      {
        "name": "卡拉戈达艺术节（Kala Ghoda Arts Festival）",
        "month": "2月",
        "description": "南孟买艺术区举办的免费艺术、戏剧与音乐节。"
      },
      {
        "name": "排灯节（Diwali）",
        "month": "10月—11月",
        "description": "全城点灯与烟火，商业区人流和噪音都很大。"
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
        "name": "印度门（Gateway of India）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "贾特拉帕蒂·希瓦吉终点站（CST）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "象岛石窟（Elephanta Caves）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "海滨大道（Marine Drive）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "哈吉阿里清真寺（Haji Ali Dargah）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "班德拉-沃利海上大桥（Bandra-Worli Sea Link）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "瓦达帕夫（Vada Pav）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "帕夫巴吉（Pav Bhaji）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "贝拉普里（Bhel Puri）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "塞夫普里（Sev Puri）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "孟买香饭（Mumbai Biryani）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "共和国日阅兵",
        "month": "1月26日",
        "description": "国王大道（Kartavya Path）举行阅兵与文化方阵游行。"
      },
      {
        "name": "胡里节（Holi）",
        "month": "3月",
        "description": "洒粉庆祝的春季节日，建议只参加有组织的活动。"
      },
      {
        "name": "十胜节与拉姆里拉（Dussehra/Ramlila）",
        "month": "9月—10月",
        "description": "红堡一带演出《罗摩衍那》并焚烧十首魔王巨像。"
      },
      {
        "name": "排灯节（Diwali）",
        "month": "10月—11月",
        "description": "印度最重要的灯节，家家点灯并燃放鞭炮。"
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
        "name": "红堡（Red Fort）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "印度门（India Gate）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "库特卜塔（Qutub Minar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "胡马雍陵（Humayun's Tomb）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "莲花寺（Lotus Temple）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "贾玛清真寺（Jama Masjid）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "黄油鸡（Butter Chicken）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "唐杜里烤鸡（Tandoori Chicken）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鹰嘴豆咖喱配炸饼（Chole Bhature）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烤肉串（Seekh Kebab）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "香料土豆饼（Aloo Tikki）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "部分城市交通拥堵",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "印尼独立日",
        "month": "8月17日",
        "description": "全国升旗仪式与社区拔河、爬椰子树等民间比赛。"
      },
      {
        "name": "开斋节（Lebaran）",
        "month": "斋月结束后",
        "description": "全国性返乡高峰，城市道路空旷而车站机场极度拥挤。"
      },
      {
        "name": "雅加达博览会（Jakarta Fair）",
        "month": "6月中旬—7月中旬",
        "description": "凯马腰兰（Kemayoran）举办的大型商贸展与游园会。"
      },
      {
        "name": "雅加达马拉松",
        "month": "10月",
        "description": "途经国家纪念碑与老城区的城市马拉松赛事。"
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
        "name": "国家纪念碑（Monas）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "雅加达老城区（Kota Tua）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊斯蒂赫拉尔大清真寺（Masjid Istiqlal）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "印尼缩影公园（Taman Mini Indonesia Indah）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "安佐尔梦幻乐园（Ancol Dreamland）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉古南动物园（Ragunan Zoo）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "印尼炒饭（Nasi Goreng）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "沙嗲（Sate Ayam）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "加多加多（Gado-gado）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "椰浆饭（Nasi Uduk）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴达维索托汤（Soto Betawi）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "越南农历新年（Tết）",
        "month": "1月—2月",
        "description": "阮惠步行街设花市与灯饰，除夕夜有跨年活动。"
      },
      {
        "name": "南方解放与国家统一纪念日",
        "month": "4月30日",
        "description": "统一宫一带举行纪念活动与表演。"
      },
      {
        "name": "中秋节（Tết Trung Thu）",
        "month": "农历八月十五（9月—10月）",
        "description": "堤岸第五郡灯笼满街，有舞狮与月饼摊位。"
      },
      {
        "name": "胡志明市国际马拉松",
        "month": "12月前后",
        "description": "起终点设在市中心，吸引大量外国跑者参加。"
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
        "name": "战争遗迹博物馆（War Remnants Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "统一宫（Independence Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西贡圣母大教堂（Notre-Dame Cathedral）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西贡中央邮政局（Saigon Central Post Office）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "滨城市场（Ben Thanh Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "古芝地道（Cu Chi Tunnels）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "越南河粉（Phở）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "越式法包三明治（Bánh Mì）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "越式煎饼（Bánh Xèo）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "碎米饭烤肉（Cơm Tấm）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "生春卷（Gỏi cuốn）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "黑面拿撒勒节（Traslación）",
        "month": "1月9日",
        "description": "奎亚波教堂的黑面拿撒勒像巡游，参与人数上百万，需极度注意拥挤安全。"
      },
      {
        "name": "圣周与复活节（Holy Week）",
        "month": "3月—4月",
        "description": "教堂礼仪与苦路巡游，部分街区封路、商铺歇业。"
      },
      {
        "name": "菲律宾独立日",
        "month": "6月12日",
        "description": "黎刹公园举行升旗与纪念仪式，全国放假。"
      },
      {
        "name": "马尼拉国际书展",
        "month": "9月中旬",
        "description": "SMX会展中心举办的全国最大书展，出版与文创摊位众多。"
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
        "name": "王城区（Intramuros）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣奥古斯丁教堂（San Agustin Church）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣地亚哥堡（Fort Santiago）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "黎刹公园（Rizal Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马尼拉大教堂（Manila Cathedral）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "岷伦洛中国城（Binondo）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "菲律宾炖肉（Adobo）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烤乳猪（Lechon）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "铁板猪脸肉（Sisig）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "哈啰哈啰冰（Halo-halo）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "罗望子酸汤（Sinigang）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "998",
      "fire": "997"
    },
    "festivals": [
      {
        "name": "迪拜购物节（Dubai Shopping Festival）",
        "month": "每年12月下旬至次年1月下旬",
        "description": "全城商场大减价，配合哈利法塔与海滨的跨年焰火、抽奖与街头演出，是迪拜规模最大的年度活动。"
      },
      {
        "name": "斋月与开斋节（Eid al-Fitr）",
        "month": "伊斯兰历9月为斋月，10月1日为开斋节（公历每年约提前11天）",
        "description": "白天禁食、日落开斋，夜间集市与开斋帐蓬热闹非凡；白天在公共场所进食属失礼行为。"
      },
      {
        "name": "宰牲节（古尔邦节，Eid al-Adha）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "伊斯兰教最重要的节日，家庭聚会、施舍与宰牲，公共假期通常连休数日。"
      },
      {
        "name": "迪拜美食节（Dubai Food Festival）",
        "month": "每年2月至3月",
        "description": "全城餐厅推出限定菜单，并有海滩美食市集、名厨演示与街头小吃活动。"
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
        "name": "哈利法塔（Burj Khalifa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "迪拜购物中心与迪拜音乐喷泉（Dubai Mall / Dubai Fountain）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "朱美拉棕榈岛（Palm Jumeirah）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "迪拜相框（Dubai Frame）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "朱美拉清真寺（Jumeirah Mosque，少数对非穆斯林开放的清真寺，需预约导览）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿法迪历史街区（Al Fahidi Historical Neighbourhood，含迪拜湾老集市与风塔建筑）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "马奇布斯（Machboos，阿联酋香料炖肉饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "哈里斯（Harees，小麦羊肉粥）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卢盖马特（Luqaimat，藏红花炸甜丸）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴拉里特（Balaleet，藏红花粉丝配煎蛋）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿拉伯沙威玛（Shawarma）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "卡塔尔国庆日（Qatar National Day）",
        "month": "每年12月18日",
        "description": "纪念国家统一，多哈举行阅兵、焰火、传统歌舞与达布·萨伊（Darb Al Saai）民俗活动。"
      },
      {
        "name": "开斋节（Eid al-Fitr）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "斋月结束后的三天假期，家庭聚餐、互赠礼物，瓦其夫集市夜间格外热闹。"
      },
      {
        "name": "宰牲节（古尔邦节，Eid al-Adha）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "伊斯兰教最重要的节日，与麦加朝觐同期，家庭聚会并行善施舍。"
      },
      {
        "name": "卡塔尔国际美食节（Qatar International Food Festival）",
        "month": "每年2月至3月",
        "description": "名厨现场演示、美食车与本地料理展销，是体验卡塔尔及海湾饮食的年度活动。"
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
        "name": "伊斯兰艺术博物馆（Museum of Islamic Art）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瓦其夫集市（Souq Waqif）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "多哈海滨大道（Doha Corniche）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡塔尔国家博物馆（National Museum of Qatar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡塔拉文化村（Katara Cultural Village）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "珍珠岛（The Pearl-Qatar）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "马奇布斯（Machboos，卡塔尔国菜五香肉饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "萨卢纳（Saloona，番茄香料炖肉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "哈里斯（Harees，碎小麦鸡肉粥）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴拉里特（Balaleet，玫瑰水藏红花粉丝配蛋饼）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卢盖马特（Luqaimat，蘸枣糖浆的炸甜丸）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "利雅得季（Riyadh Season）",
        "month": "每年10月至次年3月",
        "description": "全城数十个主题娱乐区同时开放，集合演唱会、戏剧、美食与冬季露营活动，是沙特最大的现代节庆季。"
      },
      {
        "name": "沙特国庆日（Saudi National Day）",
        "month": "每年9月23日",
        "description": "纪念1932年沙特王国统一，全城灯光秀、焰火与传统文化表演。"
      },
      {
        "name": "开斋节（Eid al-Fitr）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "斋月结束后的公共假期，家庭聚会与集市庆祝，多数机构连休数日。"
      },
      {
        "name": "宰牲节（古尔邦节，Eid al-Adha）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "伊斯兰教最重要的节日，与麦加朝觐同期，全城放假并举行慈善分发。"
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
        "name": "德拉伊耶·图赖夫区（Diriyah / At-Turaif，沙特王朝发源地，世界遗产）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "沙特国家博物馆（National Museum of Saudi Arabia）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马斯马克城堡（Al Masmak Fortress）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "王国中心天空桥（Kingdom Centre Sky Bridge）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "利雅得大道（Boulevard Riyadh City）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "世界边缘（Edge of the World / Jebel Fihrayn，图韦克山悬崖）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "卡布萨（Kabsa，沙特国菜香料肉饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "贾雷什（Jareesh，碎小麦肉粥）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "萨利格（Saleeg，奶香米粥配烤鸡）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "穆塔巴克（Mutabbaq，肉馅煎饼）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "哈尼德（Haneeth，地下石炉慢烤羊肉）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "马斯喀特节（Muscat Festival）",
        "month": "每年1月至2月",
        "description": "为期约三周的阿曼文化节，设传统手工艺集市、民间歌舞、遗产村与美食展销。"
      },
      {
        "name": "阿曼国庆日（National Day）",
        "month": "每年11月18日",
        "description": "纪念国家复兴，全城悬挂旗帜与画像，举行阅兵、焰火与传统表演。"
      },
      {
        "name": "开斋节（Eid al-Fitr）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "斋月结束后的三天假期，家庭互访、赠送礼物，马特拉集市夜间人流密集。"
      },
      {
        "name": "宰牲节（古尔邦节，Eid al-Adha）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "伊斯兰教最重要的节日，家庭聚合并向穷人分发肉食。"
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
        "name": "苏丹卡布斯大清真寺（Sultan Qaboos Grand Mosque，非穆斯林可在指定上午时段参观）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "穆特拉集市（Mutrah Souq）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿拉姆皇宫（Al Alam Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "米拉尼堡与贾拉利堡（Al Mirani Fort / Al Jalali Fort）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马斯喀特皇家歌剧院（Royal Opera House Muscat）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿曼国家博物馆（National Museum of Oman）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "舒瓦（Shuwa，地下沙炉慢烤羊肉，节庆菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马奇布斯（Majboos，阿曼香料肉饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马什瓦伊（Mashuai，炭烤马鲛鱼配柠檬饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "米什卡克（Mishkak，香料烤肉串）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿曼哈勒瓦（Omani Halwa，玫瑰水藏红花坚果软糕）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "自然灾害风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "特拉维夫白夜节（Laila Lavan）",
        "month": "每年6月下旬的一个周四黄昏至次日黎明",
        "description": "纪念白城包豪斯建筑列入世界遗产，博物馆、画廊、海滩与街区彻夜举办大量免费演出。"
      },
      {
        "name": "特拉维夫骄傲游行（Tel Aviv Pride）",
        "month": "每年6月",
        "description": "中东规模最大的骄傲周，为期一周的派对后于周五举行海滨大游行，终点在查尔斯·克洛尔公园。"
      },
      {
        "name": "逾越节（Passover）",
        "month": "犹太历尼散月15日起，公历3—4月",
        "description": "为期七天的犹太重要节日，首夜全家守夜宴（Seder）并食用无酵饼，期间多数机构与商铺调整营业。"
      },
      {
        "name": "光明节（Hanukkah）",
        "month": "犹太历基斯流月25日起连续八天，公历11—12月",
        "description": "每日点燃九枝烛台，吃油炸甜甜圈与土豆饼，公共建筑悬挂大烛台。"
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
        "name": "雅法老城（Old Jaffa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "特拉维夫白城包豪斯建筑群（White City，世界遗产）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡梅尔市场（Carmel Market / Shuk HaCarmel）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "特拉维夫海滨长廊（Tel Aviv Promenade / Tayelet）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "内夫泽德克街区（Neve Tzedek）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉宾广场（Rabin Square）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "法拉费（Falafel，鹰嘴豆炸丸）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "沙威玛（Shawarma）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鹰嘴豆泥（Hummus）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "萨比赫（Sabich，炸茄子夹饼）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "沙克舒卡（Shakshuka，番茄水波蛋）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "自然灾害风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "伊斯坦布尔郁金香节（İstanbul Lale Festivali）",
        "month": "每年4月",
        "description": "全城公园、广场与道路种满郁金香，埃米尔冈公园与苏丹阿赫梅特广场为主要展区。"
      },
      {
        "name": "伊斯坦布尔音乐节（İstanbul Müzik Festivali）",
        "month": "每年6月",
        "description": "创办于1973年的古典音乐节，邀请国际乐团、芭蕾与爵士演出，场地遍布历史建筑。"
      },
      {
        "name": "开斋节（Ramazan Bayramı）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "三天公共假期，家庭互访并赠送糖果与果仁蜜饼，长途交通与住宿紧张。"
      },
      {
        "name": "宰牲节（Kurban Bayramı）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "四天公共假期，最重要的宗教节日，全国交通与机场客流高峰。"
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
        "name": "圣索菲亚大清真寺（Hagia Sophia / Ayasofya）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "苏丹艾哈迈德清真寺（蓝色清真寺，Sultan Ahmet Camii）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "托普卡帕宫（Topkapı Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大巴扎（Kapalıçarşı / Grand Bazaar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "加拉塔塔（Galata Tower）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "博斯普鲁斯海峡（Bosphorus）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "土耳其旋转烤肉（Döner Kebab）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "伊斯坎德尔烤肉（İskender Kebap）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烤鱼三明治（Balık Ekmek）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "土耳其传统早餐（Kahvaltı）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴克拉瓦（Baklava，果仁蜜酥）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "自然灾害风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "安宁日（Nyepi）",
        "month": "3月（巴厘历新年）",
        "description": "全岛静默一日，机场关闭、街上禁行，游客须留在酒店内。"
      },
      {
        "name": "加隆冈节（Galungan）",
        "month": "每210天一次（巴厘历）",
        "description": "祖先返乡庆典，家家门前竖起高耸的penjor竹饰。"
      },
      {
        "name": "巴厘艺术节（Bali Arts Festival）",
        "month": "6月中旬—7月中旬",
        "description": "登巴萨文化公园举办的舞蹈、音乐与手工艺展演月。"
      },
      {
        "name": "乌布作家与读者节",
        "month": "10月",
        "description": "乌布举办的国际文学与思想节，含写作工作坊。"
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
        "name": "海神庙（Tanah Lot）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "乌鲁瓦图神庙（Uluwatu Temple）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "乌布皇宫（Ubud Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "德格拉朗梯田（Tegallalang Rice Terrace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣泉寺（Tirta Empul）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "库塔海滩（Kuta Beach）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "烤猪饭（Babi Guling）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "脆皮脏鸭（Bebek Goreng）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴厘拼饭（Nasi Campur）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "香料烤肉串（Sate Lilit）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "椰丝杂拌（Lawar）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "清迈鲜花节",
        "month": "2月上旬",
        "description": "鲜花花车巡游与素贴山麓花展，是泰北最盛大的年度活动之一。"
      },
      {
        "name": "宋干节（泼水节）",
        "month": "4月13日—15日",
        "description": "古城护城河一带泼水狂欢，是清迈最热闹的节庆。"
      },
      {
        "name": "水灯节与天灯节（Loy Krathong / Yi Peng）",
        "month": "11月（泰历十二月满月）",
        "description": "放水灯与放飞天灯，湄平河畔及各寺庙人山人海。"
      },
      {
        "name": "清迈设计周",
        "month": "12月",
        "description": "古城内展览、装置与创意市集联动的城市设计活动。"
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
        "name": "素贴寺（Wat Phra That Doi Suthep）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "契迪龙寺（Wat Chedi Luang）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "帕辛寺（Wat Phra Singh）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "塔佩门（Tha Phae Gate）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "清迈古城墙与护城河",
        "category": "景点",
        "description": ""
      },
      {
        "name": "清迈周日步行街（Sunday Walking Street）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "泰北咖喱面（Khao Soi）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "泰北香肠（Sai Ua）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "泰北猪肉咖喱（Gaeng Hang Lay）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "泰北辣椒酱（Nam Prik Noom／Nam Prik Ong）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "泰北糯米饭（Khao Niao）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "部分城市交通拥堵",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "普吉素食节",
        "month": "9月—10月（农历九月初一至初九）",
        "description": "华人庙宇举行穿腮、过火等仪式，全城素食摊位林立。"
      },
      {
        "name": "宋干节（泼水节）",
        "month": "4月13日—15日",
        "description": "芭东海滩与普吉镇的泼水庆祝，路面湿滑需注意。"
      },
      {
        "name": "水灯节（Loy Krathong）",
        "month": "11月（泰历十二月满月）",
        "description": "海滩与湖面放水灯祈福，夜间人流集中。"
      },
      {
        "name": "普吉国王杯帆船赛",
        "month": "12月",
        "description": "亚洲规模较大的帆船赛事，基地设在考拉与奈汉海滩一带。"
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
        "name": "芭东海滩（Patong Beach）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "普吉大佛（Big Buddha）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "查龙寺（Wat Chalong）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皮皮岛（Phi Phi Islands）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "攀牙湾（Phang Nga Bay）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "普吉镇老城（Phuket Old Town）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "普吉红烧肉（Moo Hong）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "普吉蚝煎（O Tao）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "普吉米线（Mee Hoon Phuket）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "泰南酸辣鱼咖喱（Gaeng Som Pla）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "普吉海鲜烧烤",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "乔治市艺术节（George Town Festival）",
        "month": "8月",
        "description": "为纪念乔治市入遗而设的年度艺术节，含展览、演出与市集。"
      },
      {
        "name": "大宝森节（Thaipusam）",
        "month": "1月—2月",
        "description": "乔治市与瀑布寺一带的印度教苦行庆典，游行路线封路。"
      },
      {
        "name": "九皇爷诞",
        "month": "农历九月初一至初九（10月前后）",
        "description": "华人庙宇的斋戒庆典，街边素食摊遍布，有走火炭仪式。"
      },
      {
        "name": "槟城大桥国际马拉松",
        "month": "11月",
        "description": "跨槟威大桥举行的马拉松，清晨封桥举行。"
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
        "name": "乔治市历史街区（George Town）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "姓氏桥（Clan Jetties）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "极乐寺（Kek Lok Si）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "槟城山（Penang Hill）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "康华丽堡（Fort Cornwallis）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "侨生博物馆（Pinang Peranakan Mansion）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "槟城炒粿条（Char Kway Teow）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "亚参叻沙（Asam Laksa）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "福建虾面（Hokkien Har Mee）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "扁担饭（Nasi Kandar）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "煎蕊冰（Cendol）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "自然灾害风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "越南农历新年（Tết）",
        "month": "1月—2月",
        "description": "老城区的桃花与金橘花市，还剑湖除夕有跨年活动。"
      },
      {
        "name": "越南国庆日",
        "month": "9月2日",
        "description": "巴亭广场举行纪念活动，胡志明陵墓一带封闭管控。"
      },
      {
        "name": "中秋节（Tết Trung Thu）",
        "month": "农历八月十五（9月—10月）",
        "description": "还剑湖周边挂满灯笼、舞狮巡游，儿童提灯游行。"
      },
      {
        "name": "河内遗产马拉松",
        "month": "10月",
        "description": "赛道穿越西湖、老城与还剑湖的夜间与清晨赛事。"
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
        "name": "还剑湖（Hoàn Kiếm Lake）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "河内老城三十六行街（Old Quarter）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "文庙国子监（Văn Miếu）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "一柱寺（Chùa Một Cột）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "胡志明陵墓（Lăng Hồ Chí Minh）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西湖与镇国寺（Hồ Tây）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "烤肉米线（Bún Chả）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "越南河粉（Phở）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "姜黄烤鱼（Chả Cá Lã Vọng）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鸡蛋咖啡（Cà phê trứng）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "米纸卷粉（Bánh Cuốn）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "部分城市交通拥堵",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "拉尔巴格植物园花展",
        "month": "1月（共和国日）与8月（独立日）",
        "description": "玻璃花房周边的大型花卉展，参观人数众多。"
      },
      {
        "name": "Karaga 节",
        "month": "3月—4月",
        "description": "班加罗尔最古老的守护神巡游节，夜间的仪式队列长达数公里。"
      },
      {
        "name": "Ugadi（卡纳塔克新年）",
        "month": "3月—4月",
        "description": "泰卢固与坎纳达语地区的新年，家家制作特色苦楝花糖。"
      },
      {
        "name": "班加罗尔文学节",
        "month": "12月上旬",
        "description": "免费开放的文学与思想节，近三百位作家出席。"
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
        "name": "库本公园（Cubbon Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "班加罗尔宫（Bangalore Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉巴植物园（Lalbagh Botanical Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "邦议会大厦（Vidhana Soudha）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "ISKCON 神庙（ISKCON Temple）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "提普苏丹夏宫（Tipu Sultan's Summer Palace）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "马沙拉薄饼（Masala Dosa）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "蒸米糕与炸豆饼（Idli & Vada）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "辣味扁豆炖饭（Bisi Bele Bath）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "南印滤泡咖啡（Filter Coffee）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卡纳塔克米饼（Akki Roti）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "蓬加尔节（Pongal）",
        "month": "1月中旬",
        "description": "泰米尔纳德邦最重要的丰收节，家家煮甜米粥祭日神。"
      },
      {
        "name": "马德拉斯音乐季（Chennai Music Season）",
        "month": "12月中旬—1月初",
        "description": "数十场卡纳提克古典音乐与婆罗多舞演出集中上演。"
      },
      {
        "name": "泰米尔新年（Puthandu）",
        "month": "4月中旬",
        "description": "寺庙庆典与家庭宴席，街头有文化表演。"
      },
      {
        "name": "金奈书展",
        "month": "12月底—1月中旬",
        "description": "南丹纳姆YMCA广场举办的大型书展，摊位超九百个。"
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
        "name": "玛丽娜海滩（Marina Beach）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡帕利希瓦尔神庙（Kapaleeshwarar Temple）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣乔治堡（Fort St. George）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "金奈政府博物馆（Government Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瓦卢瓦尔纪念堂（Valluvar Kottam）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣多默主教座堂（Santhome Cathedral）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "切蒂纳德辣鸡（Chettinad Chicken）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "蒸米糕配桑巴汤（Idli & Sambar）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马沙拉薄饼（Masala Dosa）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸银鱼（Nethili Fry）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "南印滤泡咖啡（Filter Coffee）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "杜尔加女神节（Durga Puja）",
        "month": "9月—10月",
        "description": "全城数千座神棚与神像，最后一天巡游沉入胡格利河。"
      },
      {
        "name": "迦梨女神节（Kali Puja）",
        "month": "10月—11月（与排灯节同期）",
        "description": "夜间神像供奉与烟火，与排灯节灯饰同时进行。"
      },
      {
        "name": "加尔各答国际书展",
        "month": "1月—2月",
        "description": "世界规模最大的非商业性书展之一，观众数以百万计。"
      },
      {
        "name": "泰戈尔诞辰（Rabindra Jayanti）",
        "month": "5月上旬",
        "description": "泰戈尔故居与高校举办诗歌朗诵与音乐纪念活动。"
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
        "name": "维多利亚纪念堂（Victoria Memorial）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "豪拉大桥（Howrah Bridge）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "印度博物馆（Indian Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "达克希内斯瓦卡利神庙（Dakshineswar Kali Temple）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "迦梨迦特神庙（Kalighat Temple）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大理石宫（Marble Palace）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "加尔各答卷饼（Kathi Roll）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "孟加拉鱼咖喱（Machher Jhol）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "拉丝古拉甜球（Rosogolla）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "甜酸奶（Mishti Doi）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "脆球饼（Phuchka）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "食品安全",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "博纳卢节（Bonalu）",
        "month": "7月—8月",
        "description": "泰伦加纳地区的女神节，妇女头顶陶罐供品巡游至寺庙。"
      },
      {
        "name": "巴图卡玛节（Bathukamma）",
        "month": "9月—10月",
        "description": "以鲜花层层堆叠的花塔歌舞庆典，女性节日色彩浓厚。"
      },
      {
        "name": "海得拉巴文学节",
        "month": "1月下旬",
        "description": "免费入场的三日文学节，英语、泰卢固语、乌尔都语场次并行。"
      },
      {
        "name": "开斋节",
        "month": "斋月结束后",
        "description": "老城查尔米纳尔一带夜市通宵营业，人流极度密集。"
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
        "name": "查尔米纳尔（Charminar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "戈尔康达堡（Golconda Fort）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "侯赛因湖（Hussain Sagar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "萨拉江博物馆（Salar Jung Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "麦加清真寺（Mecca Masjid）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "乔玛哈拉宫（Chowmahalla Palace）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "海德拉巴香饭（Hyderabadi Biryani）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "麦粥（Haleem）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "辣酱青椒（Mirchi ka Salan）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "伊朗奶茶与奥斯马尼亚饼干（Irani Chai & Osmania Biscuit）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸面包布丁（Double ka Meetha）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "自然灾害风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "中国（深圳）国际文化产业博览交易会",
        "month": "5月中下旬",
        "description": "国家级文化产业展会，会展中心与分会场联动。"
      },
      {
        "name": "深圳读书月",
        "month": "11月",
        "description": "全市范围的阅读推广活动，含书展与名家讲座。"
      },
      {
        "name": "中国国际高新技术成果交易会（高交会）",
        "month": "11月",
        "description": "深圳会展中心举办的科技产业展会，专业观众众多。"
      },
      {
        "name": "深圳马拉松",
        "month": "12月",
        "description": "沿深南大道与深圳湾举行的城市马拉松赛事。"
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
        "name": "世界之窗（Window of the World）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "深圳湾公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "莲花山公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "梧桐山",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大梅沙海滨公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大鹏所城",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "公明烧鹅",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "沙井蚝",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "光明乳鸽",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "客家酿豆腐",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "围村盆菜",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "广州迎春花市",
        "month": "农历腊月二十八至除夕",
        "description": "各区设花街摆卖年花年桔，是广府年俗的核心活动。"
      },
      {
        "name": "中国进出口商品交易会（广交会）",
        "month": "4月与10月",
        "description": "分两期在广交会展馆举行，期间酒店与交通极为紧张。"
      },
      {
        "name": "广州国际灯光节",
        "month": "11月",
        "description": "珠江新城与海心沙一带的大型灯光装置与投影秀。"
      },
      {
        "name": "广州马拉松",
        "month": "12月",
        "description": "沿珠江两岸举行的城市马拉松，赛道穿越多个城区。"
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
        "name": "广州塔（Canton Tower）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "陈家祠（陈氏书院）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "沙面岛（Shamian Island）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "白云山",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西汉南越王博物馆",
        "category": "景点",
        "description": ""
      },
      {
        "name": "北京路步行街",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "广式点心（虾饺、烧卖）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "白切鸡",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "肠粉",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "艇仔粥",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "双皮奶",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "成都大庙会（武侯祠）",
        "month": "农历正月至2月",
        "description": "武侯祠与锦里一带的仿古灯会、小吃与川剧表演。"
      },
      {
        "name": "都江堰清明放水节",
        "month": "4月上旬",
        "description": "纪念李冰父子治水的放水仪式与仿古祭祀。"
      },
      {
        "name": "成都马拉松",
        "month": "10月",
        "description": "途经金沙、天府广场与环球中心的城市马拉松。"
      },
      {
        "name": "中国成都国际非物质文化遗产节",
        "month": "每两年一届，多安排在6月或10月",
        "description": "非遗展演与国际论坛，举办年份需提前查询。"
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
        "name": "成都大熊猫繁育研究基地",
        "category": "景点",
        "description": ""
      },
      {
        "name": "宽窄巷子",
        "category": "景点",
        "description": ""
      },
      {
        "name": "锦里古街",
        "category": "景点",
        "description": ""
      },
      {
        "name": "武侯祠",
        "category": "景点",
        "description": ""
      },
      {
        "name": "杜甫草堂",
        "category": "景点",
        "description": ""
      },
      {
        "name": "金沙遗址博物馆",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "成都火锅",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "麻婆豆腐",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "夫妻肺片",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "担担面",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "麻辣兔头",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "蚊虫叮咬",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "西湖龙井开茶节",
        "month": "3月下旬—4月",
        "description": "西湖龙井新茶上市的开采庆典，茶园可体验采茶。"
      },
      {
        "name": "钱塘江观潮节",
        "month": "农历八月十八前后（9月—10月）",
        "description": "下沙与海宁一带观一线潮，须服从现场警戒、远离堤岸。"
      },
      {
        "name": "杭州西湖国际博览会",
        "month": "10月—11月",
        "description": "包含展览、论坛与消费活动的城市综合博览会。"
      },
      {
        "name": "杭州马拉松",
        "month": "11月",
        "description": "起于黄龙体育中心、沿西湖与钱塘江的经典赛道。"
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
        "name": "西湖风景名胜区",
        "category": "景点",
        "description": ""
      },
      {
        "name": "灵隐寺",
        "category": "景点",
        "description": ""
      },
      {
        "name": "飞来峰石窟造像",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西溪国家湿地公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "良渚古城遗址公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "六和塔",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "西湖醋鱼",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "东坡肉",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "龙井虾仁",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "片儿川",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "葱包桧",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "西安城墙新春灯会",
        "month": "农历腊月至正月（1月—2月）",
        "description": "明城墙上布置大型彩灯，夜间登城赏灯人流极大。"
      },
      {
        "name": "丝绸之路国际电影节（西安）",
        "month": "9月—10月",
        "description": "以丝路主题的国际影展，展映与论坛分布在全市影院。"
      },
      {
        "name": "西安国际马拉松",
        "month": "10月",
        "description": "起点设在永宁门，途经钟楼、大雁塔等标志地段。"
      },
      {
        "name": "回坊开斋节",
        "month": "斋月结束后",
        "description": "回民街一带穆斯林社区聚餐庆祝，街巷人流拥挤。"
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
        "name": "秦始皇帝陵兵马俑",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西安明城墙",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大雁塔（大慈恩寺）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "钟鼓楼广场",
        "category": "景点",
        "description": ""
      },
      {
        "name": "陕西历史博物馆",
        "category": "景点",
        "description": ""
      },
      {
        "name": "回民街（北院门）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "腊汁肉夹馍",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "羊肉泡馍",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "油泼扯面（Biangbiang面）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "凉皮",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "西安胡辣汤",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "申根签证",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "999",
      "ambulance": "999",
      "fire": "999",
      "non_emergency": "101"
    },
    "festivals": [
      {
        "name": "诺丁山狂欢节（Notting Hill Carnival）",
        "month": "8月底（银行假日周末）",
        "description": "欧洲规模最大的街头狂欢节，加勒比文化花车巡游与钢鼓乐队，人流极密集需防盗"
      },
      {
        "name": "伦敦马拉松（TCS London Marathon）",
        "month": "4月",
        "description": "世界六大满贯之一，从格林尼治跑到圣詹姆斯公园，沿途交通管制范围大"
      },
      {
        "name": "切尔西花展（RHS Chelsea Flower Show）",
        "month": "5月下旬",
        "description": "世界最著名的园艺展览，需提前数月购票，展期周边地铁拥挤"
      },
      {
        "name": "伦敦跨年烟花（New Year's Eve Fireworks）",
        "month": "12月31日",
        "description": "泰晤士河与伦敦眼焰火表演，需实名预约观景区，散场时地铁免费但极度拥挤"
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
        "name": "大英博物馆（British Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伦敦塔（Tower of London）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "塔桥（Tower Bridge）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "白金汉宫（Buckingham Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "威斯敏斯特教堂（Westminster Abbey）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大本钟与议会大厦（Elizabeth Tower / Houses of Parliament）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "炸鱼薯条（Fish and Chips）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "英式全早餐（Full English Breakfast）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "派配土豆泥（Pie and Mash，东区传统配欧芹酱汁）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "周日烤肉（Sunday Roast）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "司康配凝脂奶油（Cream Tea / Scone with clotted cream）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "申根签证",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "17",
      "ambulance": "15",
      "fire": "18",
      "european": "112"
    },
    "festivals": [
      {
        "name": "巴士底日（Fête Nationale / 14 Juillet）",
        "month": "7月14日",
        "description": "法国国庆，香榭丽舍阅兵与埃菲尔铁塔烟花，观礼区安检严格、人流极大"
      },
      {
        "name": "巴黎音乐节（Fête de la Musique）",
        "month": "6月21日",
        "description": "全城免费露天演出，街头与广场彻夜狂欢，地铁延时运营但仍拥挤"
      },
      {
        "name": "巴黎马拉松（Marathon de Paris）",
        "month": "4月",
        "description": "从香榭丽舍大街出发的经典赛事，赛道沿线封路，观赛需提前查路线"
      },
      {
        "name": "白夜艺术节（Nuit Blanche）",
        "month": "10月",
        "description": "通宵当代艺术之夜，美术馆、市政厅与街头装置开放至天亮"
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
        "name": "埃菲尔铁塔（Tour Eiffel）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卢浮宫（Musée du Louvre）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴黎圣母院（Notre-Dame de Paris）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "凯旋门（Arc de Triomphe）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣心堂与蒙马特高地（Sacré-Cœur）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "奥赛博物馆（Musée d'Orsay）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "法式洋葱汤（Soupe à l'oignon）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "红酒炖牛肉（Bœuf Bourguignon）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "油封鸭腿（Confit de canard）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴黎-布雷斯特泡芙（Paris-Brest）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "火腿黄油法棍三明治（Jambon-beurre）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "申根签证",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "柏林国际电影节（Berlinale）",
        "month": "2月",
        "description": "世界三大电影节之一，金熊奖颁奖与公开放映票需抢购，波茨坦广场一带人流密集"
      },
      {
        "name": "柏林马拉松（BMW Berlin Marathon）",
        "month": "9月",
        "description": "世界最快赛道之一，全城封路，沿线观赛需提前规划地铁"
      },
      {
        "name": "柏林灯光节（Festival of Lights）",
        "month": "10月",
        "description": "地标建筑投影秀，夜间徒步观展路线长，注意保暖与随身物品"
      },
      {
        "name": "柏林圣诞集市（Weihnachtsmärkte）",
        "month": "11月下旬至12月",
        "description": "御林广场、夏洛滕堡宫等处的传统市场，人多拥挤且扒窃高发"
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
        "name": "勃兰登堡门（Brandenburger Tor）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国会大厦（Reichstagsgebäude）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "博物馆岛（Museumsinsel）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "东边画廊柏林墙遗址（East Side Gallery）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "柏林电视塔（Fernsehturm）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "柏林大教堂（Berliner Dom）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "咖喱香肠（Currywurst）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "柏林腌猪腿配酸菜（Eisbein mit Sauerkraut）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "柏林煎肉丸（Bulette）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "柏林果酱炸甜圈（Berliner Pfannkuchen）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "柏林白啤（Berliner Weisse）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "物价较高",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "国王节（Koningsdag）",
        "month": "4月27日",
        "description": "全国橙色狂欢日，运河游船派对与露天市集，市中心极度拥挤且公共交通限行"
      },
      {
        "name": "阿姆斯特丹骄傲游船（Pride Amsterdam）",
        "month": "7月末至8月",
        "description": "运河船队巡游与街头派对，沿线桥面与堤岸人满为患"
      },
      {
        "name": "王子运河露天音乐会（Prinsengrachtconcert）",
        "month": "8月",
        "description": "运河上搭台的古典音乐会，多数观众在自家船上或沿岸免费收看"
      },
      {
        "name": "阿姆斯特丹灯光节（Amsterdam Light Festival）",
        "month": "12月至次年1月",
        "description": "运河沿岸灯光装置，步行或乘船观赏，冬季夜间湿冷需防寒"
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
        "name": "运河带（Grachtengordel）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "安妮之家（Anne Frank Huis）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "荷兰国立博物馆（Rijksmuseum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "梵高博物馆（Van Gogh Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "水坝广场与阿姆斯特丹王宫（De Dam / Koninklijk Paleis）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西教堂（Westerkerk）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "生鲱鱼配洋葱（Hollandse Nieuwe / Haring）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "荷兰薯条配蛋黄酱（Patat met mayonaise）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "糖浆华夫饼（Stroopwafel）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "小松饼（Poffertjes）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸肉丸（Bitterballen）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "语言沟通问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "维也纳新年音乐会",
        "month": "1月1日",
        "description": "维也纳爱乐乐团在金色大厅演出，电视转播全球收看。"
      },
      {
        "name": "维也纳歌剧院舞会",
        "month": "2月（圣灰星期三前的星期四）",
        "description": "国家歌剧院变身舞厅的盛装社交舞会，需着晚礼服。"
      },
      {
        "name": "维也纳艺术节（Wiener Festwochen）",
        "month": "5月中旬—6月中旬",
        "description": "涵盖戏剧、舞蹈与音乐的跨领域艺术节。"
      },
      {
        "name": "维也纳圣诞市场（Christkindlmarkt）",
        "month": "11月中旬—12月底",
        "description": "市政厅广场等地的传统圣诞市集，人流拥挤需防扒手。"
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
        "name": "美泉宫（Schloss Schönbrunn）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣斯蒂芬大教堂（Stephansdom）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "霍夫堡皇宫（Hofburg）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维也纳国家歌剧院（Wiener Staatsoper）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "美景宫（Schloss Belvedere）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "普拉特公园与摩天轮（Prater & Riesenrad）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "维也纳炸牛排（Wiener Schnitzel）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "萨赫蛋糕（Sachertorte）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "苹果卷（Apfelstrudel）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "维也纳炖牛肉（Gulasch）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "皇帝煎饼（Kaiserschmarrn）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "物价较高",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "六鸣节（Sechseläuten）",
        "month": "4月第三个周一",
        "description": "苏黎世传统春季庆典，行会游行后在湖畔焚烧雪人 Böögg 送冬，全城放假般热闹"
      },
      {
        "name": "苏黎世街头游行（Street Parade）",
        "month": "8月",
        "description": "世界最大电子音乐街头游行之一，环湖花车与数十万人参与，需严防扒窃"
      },
      {
        "name": "苏黎世电影节（Zurich Film Festival）",
        "month": "9月末至10月",
        "description": "德语区重要影展，主会场在市中心影院，公开放映票提前开售"
      },
      {
        "name": "苏黎世圣诞集市（Christkindlimarkt）",
        "month": "11月下旬至12月",
        "description": "火车站大厅与老城的圣诞市场，热红酒与烤物摊位多，人流拥挤"
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
        "name": "苏黎世湖（Zürichsee）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "苏黎世大教堂（Grossmünster）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣母教堂与夏加尔彩窗（Fraumünster）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "林登霍夫观景台（Lindenhof）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瑞士国家博物馆（Landesmuseum Zürich）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "班霍夫大街（Bahnhofstrasse）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "苏黎世式烩小牛肉（Zürcher Geschnetzeltes）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "瑞士奶酪火锅（Käsefondue）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "瑞士薯饼（Rösti）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卢森堡蛋白霜（Luxemburgerli，Sprüngli 招牌马卡龙）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烤奶酪（Raclette）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "物价较高",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "仲夏节（Midsommar）",
        "month": "6月下旬",
        "description": "瑞典最重要的传统节日，五月柱舞蹈与鲱鱼宴，市区商铺多关门、公交减班"
      },
      {
        "name": "斯德哥尔摩爵士音乐节（Stockholm Jazz Festival）",
        "month": "7月",
        "description": "在 Skeppsholmen 岛举办的滨水音乐节，露天场地夜间风凉需带外套"
      },
      {
        "name": "斯德哥尔摩水节（Stockholm Water Festival）",
        "month": "8月",
        "description": "以城市与水为主题的节庆，含焰火、音乐与水上活动，市中心夜间人多"
      },
      {
        "name": "圣露西亚节（Lucia）",
        "month": "12月13日",
        "description": "烛光少女唱游 procession，是瑞典冬日最具代表性的节庆之一"
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
        "name": "老城（Gamla Stan）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瓦萨号沉船博物馆（Vasamuseet）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "斯康森露天博物馆（Skansen）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "斯德哥尔摩王宫（Kungliga Slottet）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "斯德哥尔摩市政厅（Stadshuset）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "动物园岛（Djurgården）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "瑞典肉丸配越橘酱（Köttbullar med lingonsylt）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "腌鲱鱼（Inlagd sill）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "瑞典式冷餐台（Smörgåsbord）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "肉桂卷（Kanelbulle）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "奶油杏仁小面包（Semla）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "挪威宪法日（Grunnlovsdagen）",
        "month": "5月17日",
        "description": "国庆日，儿童游行与民族盛装游行穿过卡尔约翰大街，市中心封路、餐饮歇业"
      },
      {
        "name": "霍尔门科伦滑雪节（Holmenkollen Ski Festival）",
        "month": "3月",
        "description": "在霍尔门科伦跳台举行的传统滑雪盛事，观赛区山坡湿滑需注意保暖防滑"
      },
      {
        "name": "奥斯陆爵士音乐节（Oslo Jazz Festival）",
        "month": "8月",
        "description": "为期一周的爵士节，场馆分布在市中心与港口区，夜间散场注意末班交通"
      },
      {
        "name": "诺贝尔和平奖颁奖典礼",
        "month": "12月10日",
        "description": "在奥斯陆市政厅举行的颁奖仪式，周边道路管制，参观需提前确认开放安排"
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
        "name": "维格兰雕塑公园（Vigelandsparken）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "奥斯陆歌剧院（Operaen）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿克什胡斯城堡（Akershus festning）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蒙克博物馆（Munchmuseet）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "海盗船博物馆（Vikingskipshuset）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "霍尔门科伦跳台滑雪场（Holmenkollen）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "腌三文鱼（Gravlaks）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "羊肉炖卷心菜（Fårikål）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "挪威肉丸（Kjøttkaker）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "棕色羊奶酪（Brunost）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "挪威华夫饼（Vaffel）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "哥本哈根爵士音乐节（Copenhagen Jazz Festival）",
        "month": "7月",
        "description": "北欧重要爵士节，演出散布于爵士屋、港口与公园，部分户外场次免费"
      },
      {
        "name": "Distortion 街头音乐节",
        "month": "5月末至6月初",
        "description": "以街区派对与移动音响车闻名的城市音乐节，人流与噪音集中在内城与 Vesterbro"
      },
      {
        "name": "哥本哈根骄傲节（Copenhagen Pride）",
        "month": "8月",
        "description": "北欧大型骄傲庆典，游行与市政厅广场演出，参与人数多、注意财物"
      },
      {
        "name": "蒂沃利圣诞集市与灯饰",
        "month": "11月中旬至12月",
        "description": "蒂沃利公园的圣诞市集与灯光装置，冬季湿冷、夜间拥挤"
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
        "name": "小美人鱼雕像（Den Lille Havfrue）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "新港（Nyhavn）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蒂沃利公园（Tivoli）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿美琳堡宫（Amalienborg）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "罗森堡宫（Rosenborg Slot）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圆塔（Rundetaarn）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "丹麦开放三明治（Smørrebrød）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "丹麦酥皮点心（Wienerbrød）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "脆皮烤猪肉（Flæskesteg）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "丹麦肉丸（Frikadeller）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "丹麦热狗（Dansk pølse）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "申根签证",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "仲夏节（Juhannus）",
        "month": "6月下旬",
        "description": "芬兰最重要的夏季节日，伴侣岛 Seurasaari 点燃巨型篝火，市区商铺与公交多缩减"
      },
      {
        "name": "Lux Helsinki 灯光艺术节",
        "month": "1月",
        "description": "冬季灯光装置展，市内多处免费观赏，极夜季节路面结冰需穿防滑鞋"
      },
      {
        "name": "赫尔辛基艺术节（Helsinki Festival）",
        "month": "8月至9月初",
        "description": "北欧最大的综合艺术节，涵盖古典、戏剧与街头演出，部分活动免费"
      },
      {
        "name": "赫尔辛基圣诞集市（Tuomaan Markkinat）",
        "month": "12月",
        "description": "参议院广场的传统圣诞市场，热饮与手工艺摊位多，天寒地滑"
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
        "name": "赫尔辛基白教堂（Helsingin tuomiokirkko）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "乌斯佩斯基大教堂（Uspenskin katedraali）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "岩石教堂（Temppeliaukion kirkko）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "芬兰堡海上要塞（Suomenlinna）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西贝柳斯公园（Sibeliuksenpuisto）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "塞乌拉岛露天博物馆（Seurasaaren ulkomuseo）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "卡累利阿派（Karjalanpiirakka）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "奶油鲑鱼汤（Lohikeitto）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "芬兰肉桂卷（Korvapuusti）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "黑麦面包（Ruisleipä）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炒驯鹿肉（Poronkäristys）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣伊西德罗节（San Isidro）",
        "month": "5月15日前后",
        "description": "马德里守护神圣节，斗牛、露天音乐与传统的「圣水」活动，市中心夜间人流极大"
      },
      {
        "name": "圣周游行（Semana Santa）",
        "month": "3月至4月",
        "description": "复活节前一周的宗教游行，队伍穿行老城，多条街道封闭、观礼区拥挤"
      },
      {
        "name": "马德里骄傲节（Madrid Orgullo）",
        "month": "7月",
        "description": "欧洲规模最大的骄傲庆典之一，花车与演唱会持续数日，楚埃卡区长期封路"
      },
      {
        "name": "马德里时装周（Mercedes-Benz Fashion Week Madrid）",
        "month": "2月与9月",
        "description": "西班牙时装周，主会场在 IFEMA 或会展场馆，期间展馆周边交通紧张"
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
        "name": "普拉多博物馆（Museo del Prado）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马德里王宫（Palacio Real）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "太阳门（Puerta del Sol）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马约尔广场（Plaza Mayor）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "丽池公园（Parque del Retiro）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿尔卡拉门（Puerta de Alcalá）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "马德里炖肉汤（Cocido madrileño）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鱿鱼三明治（Bocadillo de calamares）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "西班牙土豆饼（Tortilla de patatas）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "油条蘸热巧克力（Churros con chocolate）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "伊比利亚火腿（Jamón ibérico）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "罢工影响交通",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "罗马建城纪念日（Natale di Roma）",
        "month": "4月21日",
        "description": "纪念罗马建城的历史庆典，含古装游行与斗兽场周边活动"
      },
      {
        "name": "复活节与教皇祝福（Urbi et Orbi）",
        "month": "3月至4月",
        "description": "梵蒂冈圣彼得广场的复活节弥撒与教皇祝福，需提前预约或排队安检，人数极多"
      },
      {
        "name": "罗马电影节（Festa del Cinema di Roma）",
        "month": "10月",
        "description": "在音乐公园礼堂等地举办的国际影展，公映票与红毯活动需提前购票"
      },
      {
        "name": "罗马马拉松（Maratona di Roma）",
        "month": "3月至4月",
        "description": "穿越古城中心的马拉松赛，赛道沿线全天封路，观赛需提前查路线"
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
        "name": "罗马斗兽场（Colosseo）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "古罗马广场与帕拉蒂尼山（Foro Romano）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "万神殿（Pantheon）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "特雷维喷泉（Fontana di Trevi）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣天使城堡（Castel Sant'Angelo）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "博尔盖塞美术馆（Galleria Borghese）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "罗马培根蛋面（Pasta alla Carbonara）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "奶酪黑胡椒面（Cacio e pepe）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿玛特里齐亚纳面（Amatriciana）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "犹太式炸洋蓟（Carciofi alla giudia）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "罗马炖牛尾（Coda alla vaccinara）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "罢工影响交通",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣乔治节（Sant Jordi）",
        "month": "4月23日",
        "description": "加泰罗尼亚情人节，街头摆满书摊与玫瑰摊，兰布拉与老城人流极密"
      },
      {
        "name": "圣胡安之夜（Nit de Sant Joan）",
        "month": "6月23日至24日",
        "description": "仲夏前夜的海滩篝火与焰火，海滩与街区通宵狂欢，注意拥挤与随身物品"
      },
      {
        "name": "Sónar 电子音乐与创意节",
        "month": "6月",
        "description": "国际知名的电子音乐与新媒体艺术节，白天展演与夜间演出分布城中各场馆"
      },
      {
        "name": "仁慈圣母节（La Mercè）",
        "month": "9月24日前后",
        "description": "巴塞罗那城市守护神节，巨人游行、人塔、焰火与免费音乐会持续数日"
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
        "name": "圣家堂（Sagrada Família）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "桂尔公园（Park Güell）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "米拉之家（Casa Milà / La Pedrera）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴特罗之家（Casa Batlló）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "哥特区（Barri Gòtic）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "兰布拉大道（La Rambla）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "番茄面包（Pa amb tomàquet）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "海鲜饭（Paella）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "加泰罗尼亚海鲜细面（Fideuà）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "加泰罗尼亚奶油布丁（Crema catalana）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "加泰罗尼亚炖肉汤（Escudella i carn d'olla）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣安东尼节（Festas de Santo António）",
        "month": "6月12日至13日",
        "description": "里斯本守护神节，阿尔法玛街头烧烤沙丁鱼与游行，老城狭窄街道彻夜拥挤"
      },
      {
        "name": "里斯本骄傲游行（Marcha do Orgulho LGBTI+）",
        "month": "6月",
        "description": "沿自由大道与商业广场行进的骄傲游行，参与人数多、注意防晒与财物"
      },
      {
        "name": "NOS Alive 音乐节",
        "month": "7月",
        "description": "在阿尔热斯滨水场地举办的摇滚与流行音乐节，需往返市区，夜间返程交通拥挤"
      },
      {
        "name": "里斯本马拉松（Maratona de Lisboa）",
        "month": "10月",
        "description": "从贝伦出发沿海岸线的马拉松与半马，沿线道路封闭，观赛需查路线"
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
        "name": "贝伦塔（Torre de Belém）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "热罗尼莫斯修道院（Mosteiro dos Jerónimos）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣乔治城堡（Castelo de São Jorge）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿尔法玛老城区（Alfama）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "商业广场（Praça do Comércio）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣胡斯塔升降机（Elevador de Santa Justa）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "葡式蛋挞（Pastéis de nata / Pastéis de Belém）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鳕鱼球（Bolinhos de bacalhau）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "布拉什鳕鱼（Bacalhau à Brás）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烤沙丁鱼（Sardinhas assadas）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炖猪肉三明治（Bifana）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "布拉格之春国际音乐节（Pražské jaro）",
        "month": "5月中旬至6月初",
        "description": "以斯梅塔纳《我的祖国》开幕的古典音乐节，场馆为市政厅与鲁道夫音乐厅，门票紧张"
      },
      {
        "name": "布拉格国际马拉松（Prague Marathon）",
        "month": "5月",
        "description": "穿行老城与查理大桥的赛道，沿线封路，观赛需提前规划路线"
      },
      {
        "name": "Signal 灯光艺术节（Signal Festival）",
        "month": "10月中旬",
        "description": "捷克最大的文化节庆，老城历史建筑投影秀，夜间免费路线人潮极密且秋季寒冷"
      },
      {
        "name": "布拉格圣诞集市",
        "month": "11月下旬至12月",
        "description": "老城广场与瓦茨拉夫广场的圣诞市场，热红酒与木偶摊位多，扒窃高发"
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
        "name": "布拉格城堡（Pražský hrad）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣维特大教堂（Katedrála svatého Víta）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "查理大桥（Karlův most）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老城广场与天文钟（Staroměstské náměstí / Pražský orloj）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瓦茨拉夫广场（Václavské náměstí）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "列侬墙（Lennonova zeď）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "烤猪肘配酸菜与面饺（Vepřo-knedlo-zelo）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "奶油酱炖牛里脊（Svíčková na smetaně）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "捷克炖牛肉（Guláš）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸奶酪（Smažený sýr）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烟囱卷（Trdelník）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "华沙起义纪念日",
        "month": "8月1日",
        "description": "纪念1944年华沙起义，全城鸣响警报、车辆停驶默哀，博物馆与纪念地人流增多"
      },
      {
        "name": "华沙国际电影节（Warszawa IFF）",
        "month": "10月",
        "description": "中东欧重要影展，放映场地为市中心多厅影院，公映票需提前购买"
      },
      {
        "name": "Jazz Jamboree 爵士音乐节",
        "month": "10月末至11月",
        "description": "中东欧历史最久的爵士节之一，场馆多在大剧院与音乐厅一带"
      },
      {
        "name": "华沙圣诞集市",
        "month": "11月下旬至12月",
        "description": "老城与城堡广场的圣诞市场，夜间拥挤、需注意保暖与随身物品"
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
        "name": "华沙老城（Stare Miasto）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "华沙皇家城堡（Zamek Królewski）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "文化科学宫（Pałac Kultury i Nauki）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瓦津基皇家公园（Łazienki Królewskie）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "华沙起义博物馆（Muzeum Powstania Warszawskiego）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "波兰犹太人历史博物馆（Muzeum POLIN）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "波兰饺子（Pierogi）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "酸黑麦汤（Żurek）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "猎人炖肉（Bigos）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波兰炸猪排（Kotlet schabowy）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波兰果酱甜甜圈（Pączek）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "罢工影响交通",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "希腊东正教复活节",
        "month": "3月末至5月初（按儒略历变动）",
        "description": "希腊最重要的宗教节日，圣周六午夜焰火与复活仪式，卫城山下与教堂周边极度拥挤"
      },
      {
        "name": "雅典骄傲节（Athens Pride）",
        "month": "6月",
        "description": "在宪法广场一带举行的骄傲游行与演出，参与人数逐年增加"
      },
      {
        "name": "雅典-埃皮达鲁斯艺术节（Athens Epidaurus Festival）",
        "month": "6月至8月",
        "description": "古希腊戏剧与音乐舞蹈演出，场地包括卫城山下的赫罗迪斯剧场，夏季夜间闷热"
      },
      {
        "name": "雅典经典马拉松（Athens Classic Marathon）",
        "month": "11月第二个周日",
        "description": "沿马拉松至泛雅典体育场的原创赛道，全城封路，观众与选手众多"
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
        "name": "雅典卫城与帕特农神庙（Ακρόπολη / Παρθενώνας）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "雅典卫城博物馆（Μουσείο Ακρόπολης）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "古罗马广场（Ρωμαϊκή Αγορά）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "普拉卡老城区（Πλάκα）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "宪法广场与希腊议会（Πλατεία Συντάγματος）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "奥林匹亚宙斯神庙（Ναός του Ολυμπίου Διός）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "希腊旋转烤肉卷（Γύρος / Gyros）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "慕沙卡（Μουσακάς / Moussaka）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "希腊乡村沙拉（Χωριάτικη / Horiatiki）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "菠菜奶酪派（Σπανακόπιτα / Spanakopita）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "希腊酸奶配蜂蜜（Γιαούρτι με μέλι）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "布鲁塞尔爵士马拉松（Brussels Jazz Marathon）",
        "month": "5月",
        "description": "在大广场与市内多处舞台举行的免费爵士节，户外演出区人流密集"
      },
      {
        "name": "Ommegang 历史大游行",
        "month": "7月",
        "description": "重现16世纪查理五世时代入城仪式的古装游行，大广场夜间演出需购票观礼"
      },
      {
        "name": "冬季奇迹圣诞集市（Winter Wonders）",
        "month": "11月末至次年1月初",
        "description": "大广场周边的大型圣诞市场与灯光秀，人潮密集、扒窃高发"
      },
      {
        "name": "布鲁塞尔国际奇幻电影节（BIFFF）",
        "month": "4月",
        "description": "世界知名的类型片影展，主会场在布鲁塞尔展览馆（海塞尔），含化妆比赛与吸血鬼舞会"
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
        "name": "布鲁塞尔大广场（Grand-Place / Grote Markt）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "撒尿小童雕像（Manneken Pis）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "原子球塔（Atomium）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣米歇尔圣古都勒主教座堂（Cathédrale Saints-Michel-et-Gudule）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "布鲁塞尔皇宫（Palais Royal）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马格利特博物馆（Musée Magritte）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "比利时薯条（Frites / Frietjes）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "白酒煮贻贝配薯条（Moules-frites）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "布鲁塞尔华夫饼（Gaufre de Bruxelles）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "佛兰芒啤酒炖牛肉（Carbonnade flamande）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "比利时夹心巧克力（Pralines belges）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣伊什特万日与国庆焰火",
        "month": "8月20日",
        "description": "匈牙利建国纪念日，国会与多瑙河畔焰火表演，桥面与河岸观景区极度拥挤"
      },
      {
        "name": "Sziget 音乐节",
        "month": "8月",
        "description": "在多瑙河 óbudai 岛举办的国际音乐节，露营区人多、需注意财物与高温"
      },
      {
        "name": "布达佩斯葡萄酒节（Budavári Borfesztivál）",
        "month": "9月",
        "description": "在布达城堡庭院举行的葡萄酒节，含品酒、音乐会与丰收游行"
      },
      {
        "name": "布达佩斯圣诞集市",
        "month": "11月中旬至1月初",
        "description": "弗洛什马尔蒂广场与圣伊什特万大教堂前的圣诞市场，人流密集、扒窃多发"
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
        "name": "匈牙利国会大厦（Országház）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "布达城堡（Budai Vár）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "渔人堡（Halászbástya）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "链子桥（Széchenyi lánchíd）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "塞切尼温泉浴场（Széchenyi fürdő）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "英雄广场（Hősök tere）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "匈牙利牛肉汤（Gulyásleves）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "红椒炖鸡（Paprikás csirke）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "兰戈斯炸饼（Lángos）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "库尔托什烟囱蛋糕（Kürtőskalács）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "匈牙利渔夫汤（Halászlé）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "罢工影响交通",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "胜利日（День Победы）",
        "month": "5月9日",
        "description": "红场阅兵与全城焰火，市中心道路封控严格，参观需提前了解管制与观礼安排"
      },
      {
        "name": "谢肉节（Масленица）",
        "month": "2月至3月",
        "description": "送冬迎春的传统节日，吃布林饼、焚烧稻草人，红场与高尔基公园有集市演出"
      },
      {
        "name": "莫斯科城市日（День города）",
        "month": "9月第一个周末",
        "description": "建城纪念日，特维尔大街游行、音乐会与焰火，市中心地铁与道路管制多"
      },
      {
        "name": "斯巴斯克塔国际军乐节（Спасская башня）",
        "month": "8月末至9月初",
        "description": "红场上的国际军乐团与仪仗表演，夜间场次需购票与安检"
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
        "name": "红场（Красная площадь）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "克里姆林宫（Московский Кремль）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣瓦西里大教堂（Собор Василия Блаженного）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "基督救世主主教座堂（Храм Христа Спасителя）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "莫斯科大剧院（Большой театр）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "特列季亚科夫画廊（Третьяковская галерея）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "俄式红菜汤（Борщ）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "俄式饺子（Пельмени）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "基辅式炸鸡卷（Котлета по-киевски）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "俄式薄饼配鱼子酱（Блины с икрой）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "奥利维耶沙拉（Оливье）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "罢工影响交通",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "白夜节与「红帆」庆典（Белые ночи / Алые паруса）",
        "month": "6月",
        "description": "白夜季的高潮，中学生毕业庆典含涅瓦河红帆船与焰火，沿岸数十万人聚集"
      },
      {
        "name": "白夜之星艺术节（Звёзды белых ночей）",
        "month": "5月至7月",
        "description": "马林斯基剧院的音乐与芭蕾系列演出，是白夜季的顶级艺术活动，门票紧张"
      },
      {
        "name": "圣彼得堡城市日（День города）",
        "month": "5月27日",
        "description": "建城纪念日，宫殿广场音乐会、游行与焰火，市中心交通管制范围大"
      },
      {
        "name": "海军节阅兵（День ВМФ）",
        "month": "7月最后一个周日",
        "description": "涅瓦河上的舰艇阅兵与空中展示，河岸观景区安检严格、人流极大"
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
        "name": "冬宫与埃尔米塔什博物馆（Эрмитаж）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣以撒大教堂（Исаакиевский собор）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "滴血救世主教堂（Спас на Крови）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "彼得保罗要塞（Петропавловская крепость）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "涅瓦大街（Невский проспект）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马林斯基剧院（Мариинский театр）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "圣彼得堡炸甜甜圈（Пышка）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "俄式鱼汤（Уха）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "涅瓦河炸胡瓜鱼（Корюшка）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "俄式薄饼（Блины）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "俄式红菜汤（Борщ）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "米兰时装周（Milano Fashion Week）",
        "month": "2月与9月",
        "description": "全球四大时装周之一，期间全城秀场、展区与派对密集。"
      },
      {
        "name": "米兰设计周暨国际家具展（Salone del Mobile）",
        "month": "4月",
        "description": "全球规模最大的家具与设计展会，全城同期举办外围展。"
      },
      {
        "name": "米兰狂欢节（Carnevale Ambrosiano）",
        "month": "2月",
        "description": "按米兰安布罗斯礼举行的狂欢节，比罗马礼晚数日，有化装游行。"
      },
      {
        "name": "圣安布罗斯节（Festa di Sant'Ambrogio）",
        "month": "12月7日",
        "description": "纪念米兰主保圣人，老城举办传统的 Oh Bej! Oh Bej! 集市。"
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
        "name": "米兰大教堂（Duomo di Milano）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维托里奥·埃马努埃莱二世拱廊（Galleria Vittorio Emanuele II）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "斯福尔扎城堡（Castello Sforzesco）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "斯卡拉歌剧院（Teatro alla Scala）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣玛利亚感恩教堂（Santa Maria delle Grazie，藏有达·芬奇《最后的晚餐》）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "纳维利运河区（Navigli）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "米兰藏红花烩饭（Risotto alla Milanese）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "米兰炸肉排（Cotoletta alla Milanese）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "米兰炖小牛膝（Ossobuco alla Milanese）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卡索拉炖肉（Cassoeula，猪肋排与卷心菜慢炖）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "潘妮托妮（Panettone，米兰圣诞传统甜面包）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "物价较高",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "慕尼黑啤酒节（Oktoberfest）",
        "month": "9月下旬至10月初",
        "description": "在特蕾莎草坪举行的世界最大啤酒节，需提前订位且酒后人多拥挤。"
      },
      {
        "name": "慕尼黑电影节（Filmfest München）",
        "month": "6月末至7月初",
        "description": "德国重要的电影节，展映国际新片并举办露天放映。"
      },
      {
        "name": "Tollwood 艺术节",
        "month": "夏季6—7月、冬季11—12月",
        "description": "在特蕾莎草坪举办的音乐、戏剧与环保市集节庆。"
      },
      {
        "name": "慕尼黑圣诞市场（Christkindlmarkt）",
        "month": "11月末至12月",
        "description": "玛利亚广场周边的古老圣诞市场，售卖手工艺品与热红酒。"
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
        "name": "玛利亚广场（Marienplatz）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "慕尼黑新市政厅（Neues Rathaus，木偶钟表演）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "慕尼黑王宫（Münchner Residenz）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "宁芬堡宫（Schloss Nymphenburg）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "英国花园（Englischer Garten）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "德意志博物馆（Deutsches Museum）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "慕尼黑白香肠（Münchner Weißwurst，传统上午餐配甜芥末）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴伐利亚烤猪肘（Schweinshaxn）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "碱水面包结（Brezn）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴伐利亚奶酪抹酱（Obatzda）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "猪肝丸子汤（Leberknödelsuppe）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "法兰克福书展（Frankfurter Buchmesse）",
        "month": "10月中旬",
        "description": "全球规模最大的图书版权展会，周末对公众开放并举办签售。"
      },
      {
        "name": "法兰克福苹果酒节（Äppelwoifest）",
        "month": "8月",
        "description": "在萨克森豪森区举行的苹果酒节，配现场音乐与本地小吃。"
      },
      {
        "name": "法兰克福博物馆之夜（Nacht der Museen）",
        "month": "4月末至5月初",
        "description": "数十家博物馆与场馆一票通宵开放，夜间交通非常拥挤。"
      },
      {
        "name": "法兰克福圣诞市场（Frankfurter Weihnachtsmarkt）",
        "month": "11月末至12月",
        "description": "以罗马广场为中心的德国最古老圣诞市场之一。"
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
        "name": "罗马广场（Römerberg）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "法兰克福皇帝大教堂（Kaiserdom St. Bartholomäus）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "歌德故居（Goethe-Haus）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "施泰德博物馆（Städel Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "棕榈花园（Palmengarten）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老歌剧院（Alte Oper）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "法兰克福绿酱（Grüne Soße，七种香草酸奶酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "法兰克福苹果酒（Äppelwoi）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "手捏奶酪配洋葱（Handkäse mit Musik）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "法兰克福香肠（Frankfurter Würstchen）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "法兰克福花环蛋糕（Frankfurter Kranz）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "汉堡港节（Hafengeburtstag）",
        "month": "5月上旬",
        "description": "庆祝港口建港周年，有帆船巡游、船舰开放与烟火。"
      },
      {
        "name": "汉堡国际电影节（Filmfest Hamburg）",
        "month": "9月末至10月初",
        "description": "德国大型电影节，展映德语区和国际影片并设公众展映。"
      },
      {
        "name": "汉堡游乐节（Hamburger Dom）",
        "month": "3—4月、7—8月、11—12月各一次",
        "description": "一年三度的传统集市游乐节，摩天轮与游乐设施聚集海利根盖斯特菲尔德。"
      },
      {
        "name": "汉堡马拉松（Haspa Marathon Hamburg）",
        "month": "4月",
        "description": "德国规模较大的城市马拉松，赛道穿城而过，部分路段临时封闭。"
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
        "name": "易北爱乐厅（Elbphilharmonie）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "仓库城（Speicherstadt）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "微缩景观世界（Miniatur Wunderland）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣米迦勒教堂（Sankt Michaelis \"Michel\"）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "汉堡市政厅（Rathaus）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "港口栈桥（Landungsbrücken）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "汉堡鳗鱼汤（Hamburger Aalsuppe）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "水手粗莱斯（Labskaus，咸牛肉土豆，配腌鲱鱼与荷包蛋）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "平底锅煎鱼芥末酱（Pannfisch）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "弗朗茨面包卷（Franzbrötchen，肉桂糖面包）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "红果布丁（Rote Grütze，配奶油或香草酱）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "申根签证",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣帕特里克节（St. Patrick's Festival）",
        "month": "3月17日前后",
        "description": "为期数日的全国庆典，市中心有大型游行、音乐与烟火。"
      },
      {
        "name": "都柏林戏剧节（Dublin Theatre Festival）",
        "month": "9月末至10月中旬",
        "description": "爱尔兰主要戏剧节，汇集本土与国际剧团新作。"
      },
      {
        "name": "都柏林国际文学节（International Literature Festival Dublin）",
        "month": "5月",
        "description": "邀请世界作家与诗人的文学节，含朗读会与对谈。"
      },
      {
        "name": "都柏林马拉松（Dublin Marathon）",
        "month": "10月下旬",
        "description": "数万人参加的城市马拉松，多条主干道当日封闭。"
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
        "name": "健力士啤酒展览馆（Guinness Storehouse）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "都柏林城堡（Dublin Castle）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣三一学院与《凯尔经》展（Trinity College Old Library, Book of Kells）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣帕特里克大教堂（St. Patrick's Cathedral）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "基尔曼汉姆监狱博物馆（Kilmainham Gaol）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "凤凰公园（Phoenix Park）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "爱尔兰炖肉（Irish Stew）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "都柏林杂烩锅（Dublin Coddle，香肠培根洋葱土豆一锅炖）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "健力士黑啤炖牛肉（Beef in Guinness）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "培根炖卷心菜（Bacon and Cabbage，配欧芹白汁）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "爱尔兰苏打面包（Irish Soda Bread）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "爱丁堡国际艺术节（Edinburgh International Festival）",
        "month": "8月",
        "description": "世界顶尖的古典音乐、歌剧与戏剧节，需提前购票。"
      },
      {
        "name": "爱丁堡艺穗节（Edinburgh Festival Fringe）",
        "month": "8月",
        "description": "全球最大的开放艺术节，数千场演出遍布全城。"
      },
      {
        "name": "爱丁堡军乐节（Royal Edinburgh Military Tattoo）",
        "month": "8月",
        "description": "在爱丁堡城堡广场举行的军乐队列与烟火表演。"
      },
      {
        "name": "霍格莫内跨年庆典（Edinburgh's Hogmanay）",
        "month": "12月31日至1月初",
        "description": "连续三日的跨年庆典，含火炬游行、街头派对与烟火。"
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
        "name": "爱丁堡城堡（Edinburgh Castle）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皇家一英里（Royal Mile）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "荷里路德宫（Palace of Holyroodhouse）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "苏格兰国家博物馆（National Museum of Scotland）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "亚瑟王座（Arthur's Seat）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "玛丽金遗迹街（The Real Mary King's Close）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "哈吉斯（Haggis，羊杂布丁配芜菁泥与土豆泥）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "韭葱鸡汤（Cock-a-leekie）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卡伦汤（Cullen Skink，烟熏鳕鱼奶油浓汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "苏格兰黄油酥饼（Shortbread）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "克兰纳肯（Cranachan，树莓燕麦奶油甜点）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "曼彻斯特国际艺术节（Manchester International Festival）",
        "month": "6—7月，每两年一次（奇数年）",
        "description": "委托艺术家创作新作的当代艺术节，场地遍布全城。"
      },
      {
        "name": "曼彻斯特骄傲节（Manchester Pride）",
        "month": "8月银行假日周末",
        "description": "在同志村运河街周边举行的游行与音乐活动，人潮极密。"
      },
      {
        "name": "曼彻斯特圣诞市场（Manchester Christmas Markets）",
        "month": "11月中旬至12月",
        "description": "分布在多个广场的德式风格圣诞市场，夜间人流拥挤。"
      },
      {
        "name": "曼彻斯特马拉松（Manchester Marathon）",
        "month": "4月",
        "description": "英国大型城市马拉松，途经老特拉福德等标志性路段。"
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
        "name": "曼彻斯特市政厅（Manchester Town Hall）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "曼彻斯特大教堂（Manchester Cathedral）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科学与工业博物馆（Science and Industry Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "约翰·莱兰兹图书馆（John Rylands Library）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "帝国战争博物馆北馆（Imperial War Museum North，索尔福德码头）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老特拉福德球场（Old Trafford）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "兰开夏炖锅（Lancashire Hotpot）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "曼彻斯特塔（Manchester Tart，覆盆子椰丝奶油塔）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "埃克尔斯小蛋糕（Eccles Cakes）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "黑血肠（Black Pudding）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "拉格布丁（Rag Pudding，大曼彻斯特地区的蒸制肉馅布丁）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "里昂灯光节（Fête des Lumières）",
        "month": "12月8日前后，连办数晚",
        "description": "全城建筑投影灯光秀，为全世界规模最大的灯光节之一。"
      },
      {
        "name": "卢米埃尔电影节（Festival Lumière）",
        "month": "10月中旬",
        "description": "纪念电影发明者卢米埃尔兄弟的经典电影节，放映修复老片。"
      },
      {
        "name": "富维耶之夜（Les Nuits de Fourvière）",
        "month": "6—8月",
        "description": "在古罗马剧场举办的音乐、戏剧与舞蹈露天演出季。"
      },
      {
        "name": "里昂双年展（Biennale de Lyon）",
        "month": "9月至次年1月",
        "description": "当代艺术与舞蹈双年展，分布于美术馆与旧厂房空间。"
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
        "name": "富维耶圣母院（Basilique Notre-Dame de Fourvière）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "古罗马剧场遗址（Théâtres romains de Fourvière）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老里昂（Vieux Lyon，联合国教科文组织世界遗产）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "秘密通道（Traboules，老城穿楼小巷）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "白莱果广场（Place Bellecour）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "里昂美食集市（Halles de Lyon Paul Bocuse）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "里昂沙拉（Salade Lyonnaise，菊苣、培根与水波蛋）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "梭鱼肉丸（Quenelle de brochet）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "工兵围裙（Tablier de sapeur，炸腌牛肚）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "丝织工奶酪酱（Cervelle de canut，蒜香香草鲜奶酪抹酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "粉红杏仁糖塔（Tarte aux pralines）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "南方音乐节（Fiesta des Suds）",
        "month": "10月",
        "description": "以世界音乐为主的音乐节，在港口仓库区举办。"
      },
      {
        "name": "马赛国际电影节（FIDMarseille）",
        "month": "7月",
        "description": "专注纪录片与实验影像的国际电影节，设公众放映。"
      },
      {
        "name": "五大洲爵士音乐节（Jazz des Cinq Continents）",
        "month": "7月",
        "description": "在旧港与多处场地举办的国际爵士音乐节。"
      },
      {
        "name": "马赛—卡西斯国际半程马拉松（Marseille-Cassis）",
        "month": "10月末",
        "description": "穿越卡拉格山口通往卡西斯的知名半马赛事，沿线道路封闭。"
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
        "name": "旧港（Vieux-Port）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "守护圣母堂（Notre-Dame de la Garde）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊夫岛城堡（Château d'If）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "隆尚宫（Palais Longchamp）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣让堡（Fort Saint-Jean）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡朗格峡湾国家公园（Calanques）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "马赛鱼汤（Bouillabaisse）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马赛大蒜鳕鱼（Aïoli de morue，蒜香蛋黄酱配炖鳕鱼与时蔬）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鹰嘴豆炸饼（Panisse）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "羊蹄包（Pieds et paquets，马赛传统羊杂）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马赛小船饼干（Navettes de Marseille）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "语言障碍",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "尼斯狂欢节（Carnaval de Nice）",
        "month": "2月",
        "description": "世界三大狂欢节之一，有巨型人偶花车与鲜花大战游行。"
      },
      {
        "name": "鲜花大战（Bataille de Fleurs）",
        "month": "2月狂欢节期间",
        "description": "花车上向观众抛掷含羞草与鲜花，是狂欢节的重头戏。"
      },
      {
        "name": "尼斯爵士音乐节（Nice Jazz Festival）",
        "month": "7月",
        "description": "历史悠久的爵士节，在露天剧场与花园舞台举办。"
      },
      {
        "name": "Prom'Classic 尼斯10公里赛",
        "month": "1月",
        "description": "沿英国人漫步大道举行的万人跑步赛，海滨道路临时封闭。"
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
        "name": "英国人海滨大道（Promenade des Anglais）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "尼斯老城（Vieux Nice）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "城堡山观景台（Colline du Château）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马塞纳广场（Place Masséna）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "俄罗斯东正教圣尼古拉大教堂（Cathédrale Orthodoxe Russe Saint-Nicolas）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马蒂斯美术馆（Musée Matisse）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "尼斯沙拉（Salade Niçoise）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "洋葱凤尾鱼塔（Pissaladière）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鹰嘴豆薄饼（Socca）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "尼斯杂菜炖（Ratatouille niçoise）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "尼斯酿时蔬（Petits farcis niçois）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "威尼斯狂欢节（Carnevale di Venezia）",
        "month": "1月末至2月",
        "description": "以面具与古装闻名的世界著名狂欢节，圣马可广场有官方活动。"
      },
      {
        "name": "威尼斯国际电影节（Mostra del Cinema）",
        "month": "8月末至9月初",
        "description": "世界最古老的电影节，主会场在丽都岛。"
      },
      {
        "name": "威尼斯双年展（Biennale di Venezia）",
        "month": "6月至11月",
        "description": "艺术展与建筑展交替举办的国际大展，分布于绿园城堡与军械库。"
      },
      {
        "name": "历史赛船节（Regata Storica）",
        "month": "9月第一个周日",
        "description": "大运河上的古装船队巡游与贡多拉赛船。"
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
        "name": "圣马可广场（Piazza San Marco）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣马可大教堂（Basilica di San Marco）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "总督宫与叹息桥（Palazzo Ducale / Ponte dei Sospiri）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "里亚托桥（Ponte di Rialto）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大运河（Canal Grande）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "布拉诺岛（Burano）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "墨鱼汁烩饭（Risotto al nero di seppia）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "酸甜洋葱沙丁鱼（Sarde in saor）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "乳化盐鳕鱼泥（Baccalà mantecato）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "威尼斯洋葱炒小牛肝（Fegato alla Veneziana）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "青豆烩饭（Risi e bisi）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣乔凡尼节（Festa di San Giovanni）",
        "month": "6月24日",
        "description": "纪念城市主保圣人，米开朗基罗广场放烟火，阿诺河上有灯船。"
      },
      {
        "name": "历史足球赛（Calcio Storico Fiorentino）",
        "month": "6月",
        "description": "源于16世纪的粗暴传统球赛，在圣十字广场举行，对抗激烈。"
      },
      {
        "name": "战车爆炸仪式（Scoppio del Carro）",
        "month": "复活节主日",
        "description": "大教堂前的古礼，点燃彩车燃放烟火，全城观看。"
      },
      {
        "name": "五月音乐节（Maggio Musicale Fiorentino）",
        "month": "4—6月",
        "description": "意大利历史最久的音乐节，歌剧与交响乐演出季。"
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
        "name": "圣母百花大教堂与穹顶（Santa Maria del Fiore）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "乌菲兹美术馆（Galleria degli Uffizi）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "学院美术馆与米开朗基罗《大卫》（Galleria dell'Accademia）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老桥（Ponte Vecchio）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "米开朗基罗广场（Piazzale Michelangelo）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皮蒂宫与波波里花园（Palazzo Pitti / Giardino di Boboli）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "佛罗伦萨丁骨牛排（Bistecca alla Fiorentina）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "牛肚包（Lampredotto）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "重煮蔬菜面包汤（Ribollita）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "番茄面包汤（Pappa al pomodoro）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "杏仁脆饼配圣酒（Cantucci e Vin Santo）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "物价较高",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣热内罗血液液化仪式（Miracolo di San Gennaro）",
        "month": "5月第一个周六、9月19日、12月16日",
        "description": "那不勒斯大教堂内信众聚集，观看圣血是否液化的传统仪式。"
      },
      {
        "name": "古迹之五月（Maggio dei Monumenti）",
        "month": "5月",
        "description": "为期一个月的文化活动季，大量宫殿、教堂与遗址延时开放。"
      },
      {
        "name": "圣格雷戈里奥·阿尔梅诺街圣诞马槽展",
        "month": "11月至次年1月",
        "description": "老城著名手作马槽街，圣诞期间摆满手工耶稣诞生场景。"
      },
      {
        "name": "那不勒斯披萨节（Napoli Pizza Village）",
        "month": "6月",
        "description": "在海滨大道举办的那不勒斯披萨盛会，集中数十家披萨店。"
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
        "name": "那不勒斯国立考古博物馆（Museo Archeologico Nazionale di Napoli）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "那不勒斯地下城（Napoli Sotterranea）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蛋堡（Castel dell'Ovo）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "新堡（Castel Nuovo / Maschio Angioino）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣卡洛歌剧院（Teatro San Carlo）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "庞贝古城遗址（Pompei）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "那不勒斯披萨（Pizza Napoletana，如玛格丽塔）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "那不勒斯慢炖肉酱（Ragù Napoletano）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "千层酥（Sfogliatella）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "小麦芝士派（Pastiera Napoletana）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "朗姆巴巴（Babà al rum）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "申根签证",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "法雅节（Las Fallas）",
        "month": "3月15—19日",
        "description": "联合国非遗节庆，巨型纸塑人偶游行后在最后一夜焚烧，烟火与噪音极大。"
      },
      {
        "name": "七月节（Feria de Julio）",
        "month": "7月",
        "description": "为期一个月的夏季节庆，有音乐会、露天舞会与烟火比赛。"
      },
      {
        "name": "滨海圣周（Semana Santa Marinera）",
        "month": "3—4月圣周",
        "description": "滨海渔村社区举行的圣周游行，气氛较老城更朴素。"
      },
      {
        "name": "瓦伦西亚马拉松（Valencia Marathon）",
        "month": "12月",
        "description": "以平坦快速赛道著称的国际马拉松，数万人参加，市中心交通管制。"
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
        "name": "艺术科学城（Ciutat de les Arts i les Ciències）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瓦伦西亚主教座堂与米格雷特钟楼（Catedral / El Miguelete）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "中央市场（Mercado Central）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "丝绸交易厅（Lonja de la Seda，联合国教科文组织世界遗产）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "图里亚河花园（Jardí del Túria）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿尔布费拉自然公园（Parc Natural de l'Albufera）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "瓦伦西亚肉饭（Paella Valenciana，兔鸡肉与宽扁豆）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "蒜辣炖鳗鱼（All i pebre）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "面条海鲜锅（Fideuà）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炭炉焗饭（Arròs al forn）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "油莎草奶昔配法顿条（Horchata de chufa con fartons）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣周（Semana Santa）",
        "month": "3—4月圣周",
        "description": "全城数十个教会的忏悔游行，穿城街道封闭、观众极多。"
      },
      {
        "name": "四月节（Feria de Abril）",
        "month": "4月下旬至5月上旬",
        "description": "在展会场地搭起的彩棚帐篷中举行的弗拉门戈与马术庆典。"
      },
      {
        "name": "弗拉门戈双年展（Bienal de Flamenco）",
        "month": "9月，每两年一次",
        "description": "世界最重要的弗拉门戈艺术节，各剧场与老城场地轮番上演。"
      },
      {
        "name": "塞维利亚欧洲电影节（Festival de Cine Europeo）",
        "month": "11月",
        "description": "专注欧洲影片的电影节，多家影院同步展映并设竞赛单元。"
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
        "name": "塞维利亚大教堂与希拉尔达塔（Catedral y Giralda）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "塞维利亚王宫（Real Alcázar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西班牙广场（Plaza de España）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皇家骑士团斗牛场（Plaza de Toros de la Real Maestranza）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "特里安娜区（Triana）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "都市阳伞（Metropol Parasol / Setas de Sevilla）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "伊比利亚猪颊肉（Carrillada ibérica）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "塞拉尼托三明治（Serranito，安达卢西亚猪肉烤辣椒三明治）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "菠菜炖鹰嘴豆（Espinacas con garbanzos）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸小鱼（Pescaíto frito）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "圣莱安德罗蛋黄甜点（Yemas de San Leandro）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "罢工影响交通",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "马拉加圣周（Semana Santa de Málaga）",
        "month": "3—4月圣周",
        "description": "规模盛大的宗教游行，巨型圣像宝座穿行老城，街道封闭。"
      },
      {
        "name": "八月节（Feria de Málaga）",
        "month": "8月中旬",
        "description": "纪念城市收复的夏日节庆，白天在市中心、夜间在展会场地狂欢。"
      },
      {
        "name": "马拉加西班牙电影节（Festival de Cine de Málaga）",
        "month": "3月",
        "description": "专注西班牙本土电影的电影节，放映与颁奖同期举行。"
      },
      {
        "name": "三王游行（Cabalgata de Reyes）",
        "month": "1月5日",
        "description": "主显节前夜的花车巡游，向沿街儿童抛撒糖果，人流极密。"
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
        "name": "阿尔卡萨瓦城堡与吉布拉法罗要塞（Alcazaba y Castillo de Gibralfaro）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马拉加主教座堂（Catedral de Málaga \"La Manquita\"）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马拉加罗马剧场（Teatro Romano）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马拉加毕加索博物馆（Museo Picasso Málaga）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蓬皮杜中心马拉加分馆（Centre Pompidou Málaga）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "一号码头港区（Muelle Uno, Puerto de Málaga）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "炭烤沙丁鱼串（Espetos de sardinas）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "白蒜杏仁冷汤（Ajoblanco malagueño）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马拉加沙拉（Ensalada malagueña，土豆、鳕鱼与橙子）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鱼虾拼盘（Fritura malagueña）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "安特克拉番茄冷汤（Porra antequerana）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣若昂节（Festa de São João do Porto）",
        "month": "6月23—24日",
        "description": "全城街头派对，敲塑料锤、烤沙丁鱼、放气球与烟火。"
      },
      {
        "name": "Fantasporto 国际奇幻电影节",
        "month": "2—3月",
        "description": "葡萄牙重要电影节，专注奇幻、恐怖与科幻影片。"
      },
      {
        "name": "NOS Primavera Sound 波尔图音乐节",
        "month": "6月",
        "description": "在帕拉达花园举办的独立音乐节，与巴塞罗那同名音乐节同源。"
      },
      {
        "name": "波尔图马拉松（Porto Marathon）",
        "month": "11月",
        "description": "穿城并沿杜罗河跑向海岸的赛事，桥梁与滨河道路当日封闭。"
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
        "name": "路易一世大桥（Ponte Dom Luís I）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "莱罗书店（Livraria Lello）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "牧师塔（Torre dos Clérigos）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "波尔图主教座堂（Sé do Porto）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "交易所宫（Palácio da Bolsa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "盖亚河岸波特酒窖（Caves de Vinho do Porto, Vila Nova de Gaia）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "法国姑娘三明治（Francesinha，芝士啤酒酱汁焗三明治）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波尔图式牛肚锅（Tripas à moda do Porto）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "戈麦斯·德萨烤鳕鱼（Bacalhau à Gomes de Sá）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炭烤沙丁鱼（Sardinhas assadas，圣约翰节传统）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鳕鱼球（Bolinhos de bacalhau）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "克拉科夫犹太文化节（Jewish Culture Festival）",
        "month": "6月末至7月初",
        "description": "在卡齐米日区举办的世界知名犹太文化节，有音乐会与导览。"
      },
      {
        "name": "克拉科夫电影节（Krakow Film Festival）",
        "month": "5—6月",
        "description": "欧洲历史最久的纪录片与短片电影节之一。"
      },
      {
        "name": "仲夏夜花冠节（Wianki）",
        "month": "6月下旬",
        "description": "维斯瓦河畔的夏至庆典，放花环入水并有音乐会与烟火。"
      },
      {
        "name": "克拉科夫圣诞市场（Jarmark Bożonarodzeniowy）",
        "month": "11月末至12月",
        "description": "中央市场广场的圣诞集市，售卖手工艺品与热食。"
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
        "name": "瓦维尔城堡与大教堂（Wawel）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "中央市集广场与纺织会馆（Rynek Główny / Sukiennice）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣玛丽亚教堂（Kościół Mariacki）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡齐米日犹太区（Kazimierz）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维利奇卡盐矿（Kopalnia Soli Wieliczka）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "奥斯维辛-比克瑙国家博物馆（Muzeum Auschwitz-Birkenau, Oświęcim）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "克拉科夫环形面包圈（Obwarzanek krakowski）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波兰饺子（Pierogi ruskie）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "酸黑麦汤（Żurek）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "猎人炖菜（Bigos）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波兰式烤面包（Zapiekanka，克拉科夫经典街头小吃）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "日内瓦节（Fêtes de Genève）",
        "month": "8月",
        "description": "环湖的大型综合节庆，以烟花表演和湖上活动为主。"
      },
      {
        "name": "登城节（Fête de l'Escalade）",
        "month": "12月中旬",
        "description": "纪念1602年守城的市民庆典，有火炬游行与砸巧克力锅习俗。"
      },
      {
        "name": "人权电影节（FIFDH）",
        "month": "3月",
        "description": "日内瓦国际电影节暨人权论坛，影片与讨论会同步进行。"
      },
      {
        "name": "Antigel 当代艺术节",
        "month": "1—2月",
        "description": "分布在全城场馆的音乐与当代艺术冬季节庆。"
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
        "name": "日内瓦大喷泉（Jet d'Eau）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "万国宫（Palais des Nations，联合国日内瓦办事处）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣皮埃尔大教堂（Cathédrale Saint-Pierre）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "日内瓦老城（Vieille Ville）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "英国花园与花钟（Jardin Anglais / L'Horloge fleurie）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "红十字与红新月国际博物馆（Musée International de la Croix-Rouge et du Croissant-Rouge）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "瑞士奶酪火锅（Fondue）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "日内瓦隆若尔香肠（Longeole de Genève）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "莱芒湖鲈鱼柳（Filets de perche du Léman）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "日内瓦奶油焗刺菜蓟（Cardon genevois）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "榛子普拉林巧克力（Avelines，日内瓦传统款）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "小偷小摸",
      "旅游热点扒手与抢包高发，财物分散保管",
      "部分城市示威集会频繁，避开人群聚集"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "科隆狂欢节（Kölner Karneval）",
        "month": "11月11日开季，玫瑰星期一游行在2—3月",
        "description": "德国最盛大的狂欢节，玫瑰星期一有百万级街头游行与化装派对。"
      },
      {
        "name": "科隆灯光节（Köln leuchtet）",
        "month": "7月",
        "description": "莱茵河沿岸的灯光装置与音乐烟火表演。"
      },
      {
        "name": "科隆骄傲游行（Cologne Pride）",
        "month": "7月",
        "description": "德国规模最大的同志骄傲活动之一，市中心游行与舞台演出。"
      },
      {
        "name": "科隆大教堂圣诞市场（Weihnachtsmarkt am Dom）",
        "month": "11月末至12月",
        "description": "大教堂广场下的圣诞市场，以手工艺摊和热红酒闻名。"
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
        "name": "科隆大教堂（Kölner Dom）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "霍亨索伦桥（Hohenzollernbrücke）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科隆老城（Altstadt）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大圣马丁教堂（Groß St. Martin）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "路德维希博物馆（Museum Ludwig）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊姆霍夫巧克力博物馆（Schokoladenmuseum）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "奶酪黑麦面包（Halver Hahn）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "莱茵醋焖牛肉（Rheinischer Sauerbraten）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "天堂与土地（Himmel un Ääd，土豆苹果泥配血肠）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "莱茵土豆煎饼（Rievkooche / Reibekuchen）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "科隆啤酒（Kölsch）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911",
      "non_emergency": "311"
    },
    "festivals": [
      {
        "name": "梅西感恩节大游行（Macy's Thanksgiving Day Parade）",
        "month": "11月第四个星期四",
        "description": "巨型卡通气球与花车从中央公园西沿街行进至先驱广场，全城收视最高的年度游行。"
      },
      {
        "name": "时代广场跨年水晶球降落",
        "month": "12月31日",
        "description": "数十万人聚集时代广场等待水晶球降落，现场设有安检与围栏，需提前数小时入场。"
      },
      {
        "name": "纽约骄傲游行（NYC Pride March）",
        "month": "6月最后一个周日",
        "description": "纪念石墙事件的大型 LGBTQ+ 游行，沿曼哈顿下城举行，全月有多场文化活动。"
      },
      {
        "name": "纽约马拉松（TCS New York City Marathon）",
        "month": "11月第一个周日",
        "description": "世界规模最大的城市马拉松之一，赛道贯穿五大城区，沿线交通与地铁会临时调整。"
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
        "name": "自由女神像与自由岛（Statue of Liberty）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "时代广场（Times Square）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "中央公园（Central Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "帝国大厦观景台（Empire State Building）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "布鲁克林大桥（Brooklyn Bridge）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大都会艺术博物馆（Metropolitan Museum of Art）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "纽约式薄底披萨（New York-Style Pizza，折叠食用的大薄片）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "贝果配烟熏三文鱼（Bagel & Lox）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "犹太熟食店腌牛肉黑麦三明治（Pastrami on Rye）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "纽约芝士蛋糕（New York Cheesecake）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "街头热狗推车的洋葱酱热狗（Dirty Water Hot Dog）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "毒品问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "玫瑰游行（Tournament of Roses Parade）",
        "month": "1月1日",
        "description": "在帕萨迪纳举行的鲜花装饰花车大游行，随后举办玫瑰碗大学橄榄球赛。"
      },
      {
        "name": "奥斯卡金像奖颁奖典礼（Academy Awards）",
        "month": "2月下旬至3月",
        "description": "在好莱坞杜比剧院举行的全球电影盛事，周边道路会封闭并加强安保。"
      },
      {
        "name": "洛杉矶骄傲节（LA Pride）",
        "month": "6月",
        "description": "以西好莱坞为中心的大型 LGBTQ+ 游行与音乐演出，参与人数众多。"
      },
      {
        "name": "洛杉矶马拉松（LA Marathon）",
        "month": "3月中旬",
        "description": "被称为体育场到海洋的路线，从道奇体育场跑至圣莫尼卡，沿途多路段封闭。"
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
        "name": "好莱坞标志（Hollywood Sign）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "好莱坞环球影城（Universal Studios Hollywood）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "格里菲斯天文台（Griffith Observatory）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "盖蒂中心（Getty Center）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣莫尼卡码头（Santa Monica Pier）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "威尼斯海滩步道（Venice Beach Boardwalk）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "法式蘸汁三明治（French Dip，洛杉矶经典）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "墨西哥玉米卷与餐车美食（Taco Truck Tacos）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "柯布沙拉（Cobb Salad，源自洛杉矶）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "韩国城烤肉（Koreatown BBQ）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "加州卷（California Roll，诞生于洛杉矶的日式寿司）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "毒品问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣帕特里克节染绿芝加哥河",
        "month": "3月17日前后",
        "description": "市中心河面被染成绿色并举行游行，沿河一带人流密集、部分道路封闭。"
      },
      {
        "name": "芝加哥蓝调音乐节（Chicago Blues Festival）",
        "month": "6月中旬",
        "description": "在千禧公园等地举办的免费蓝调音乐节，是芝加哥最具代表性的音乐活动。"
      },
      {
        "name": "Lollapalooza 音乐节",
        "month": "7月底至8月初",
        "description": "在格兰特公园举行的四天大型音乐节，期间园区周边交通与酒店紧张。"
      },
      {
        "name": "芝加哥马拉松（Chicago Marathon）",
        "month": "10月",
        "description": "世界六大马拉松之一，赛道穿过二十多个社区，比赛日全市多处道路封闭。"
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
        "name": "千禧公园云门雕塑（Cloud Gate）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "威利斯大厦观景台（Willis Tower Skydeck）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "海军码头（Navy Pier）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "芝加哥艺术博物馆（Art Institute of Chicago）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "菲尔德自然史博物馆（Field Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "密歇根大道壮丽一英里（Magnificent Mile）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "芝加哥深盘披萨（Deep-Dish Pizza）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "芝加哥式热狗（罂粟籽面包、不加番茄酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "意大利牛肉三明治（Italian Beef Sandwich）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "焦糖与芝士混合爆米花（Garrett's 风味）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "布朗尼蛋糕（Brownie，相传源自芝加哥）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "多伦多国际电影节（TIFF）",
        "month": "9月上旬",
        "description": "全球最重要的电影展映活动之一，市中心电影院周边人流与交通压力明显上升。"
      },
      {
        "name": "多伦多加勒比狂欢节（Toronto Caribbean Carnival）",
        "month": "7月底至8月初",
        "description": "北美规模最大的加勒比文化庆典，以湖滨大道的花车巡游与钢鼓乐队为主。"
      },
      {
        "name": "加拿大国家展览（CNE）",
        "month": "8月中下旬至劳动节",
        "description": "在 Exhibition Place 举办的百年展会，含游乐设施、农业展与飞行表演。"
      },
      {
        "name": "多伦多骄傲月游行（Pride Toronto）",
        "month": "6月",
        "description": "在市中心教堂街一带举行的大型 LGBTQ+ 游行，是北美规模较大的骄傲活动之一。"
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
        "name": "加拿大国家电视塔（CN Tower）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皇家安大略博物馆（Royal Ontario Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡萨罗马城堡（Casa Loma）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瑞普利加拿大水族馆（Ripley's Aquarium of Canada）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣劳伦斯市场（St. Lawrence Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "多伦多群岛（Toronto Islands）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "豌豆粉培根三明治（Peameal Bacon Sandwich）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "黄油挞（Butter Tart）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "牙买加肉饼（Jamaican Patty）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "枫糖浆甜点（枫糖挞与枫糖太妃）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "寿司披萨（Sushi Pizza，多伦多首创的日式创意料理）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "温哥华樱花节（Vancouver Cherry Blossom Festival）",
        "month": "3月下旬至4月",
        "description": "全城数万株樱花盛开期间举办的赏樱步行、日式音乐与园艺活动。"
      },
      {
        "name": "光之庆典国际烟花比赛（Celebration of Light）",
        "month": "7月下旬至8月初",
        "description": "在英吉利湾上空举行的多国烟花比赛，海滩与沿岸观景点人潮拥挤。"
      },
      {
        "name": "温哥华骄傲游行（Vancouver Pride Parade）",
        "month": "8月长周末",
        "description": "沿市中心街道举行的大型 LGBTQ+ 游行，配套有戴维村一带的街头庆典。"
      },
      {
        "name": "温哥华国际电影节（VIFF）",
        "month": "9月底至10月",
        "description": "北美规模较大的影展之一，以亚洲与加拿大本土影片单元著称。"
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
        "name": "斯坦利公园（Stanley Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡皮拉诺吊桥（Capilano Suspension Bridge）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "格兰维尔岛公共市场（Granville Island Public Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "煤气镇蒸汽钟（Gastown Steam Clock）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "加拿大广场（Canada Place）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "英吉利湾海滩与日落沙滩（English Bay）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "太平洋野生三文鱼（Salmon）料理",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "珍宝蟹（Dungeness Crab）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "斑点虾（Spot Prawn，不列颠哥伦比亚海域特产）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "本地寿司与日式拉面（温哥华日餐业发达）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "纳奈莫条（Nanaimo Bar，本省经典甜点）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "蒙特利尔国际爵士音乐节（Festival International de Jazz）",
        "month": "6月底至7月初",
        "description": "全球规模最大的爵士音乐节，市中心街区封闭并设多个免费户外舞台。"
      },
      {
        "name": "蒙特利尔国际烟花比赛（L'International des Feux）",
        "month": "6月至8月",
        "description": "在圣劳伦斯河上举行的多国烟花赛事，可从老港与雅克·卡蒂亚桥一带观赏。"
      },
      {
        "name": "欢乐喜剧节（Festival Juste pour rire / Just for Laughs）",
        "month": "7月",
        "description": "国际知名的喜剧节，汇聚英语与法语脱口秀、街头表演与剧场演出。"
      },
      {
        "name": "蒙特利尔灯光节（MONTRÉAL EN LUMIÈRE）",
        "month": "2月下旬至3月",
        "description": "结合灯光装置、美食与户外演出的冬季艺术节，是严寒季节的城市亮点。"
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
        "name": "老城圣母大教堂（Notre-Dame Basilica）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皇家山公园（Mount Royal Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老港（Old Port of Montreal）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蒙特利尔美术馆（Musée des beaux-arts）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣约瑟夫礼拜堂（Saint Joseph's Oratory）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蒙特利尔植物园（Montreal Botanical Garden）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "肉汁奶酪薯条（Poutine，魁北克经典）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "蒙特利尔熏肉三明治（Smoked Meat）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "蒙特利尔贝果（手工柴火烤贝果）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "魁北克肉派（Tourtière）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "枫糖太妃（Maple Taffy，雪地枫糖糖浆）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "旧金山骄傲游行（SF Pride）",
        "month": "6月最后一个周末",
        "description": "全美规模最大的骄傲庆典之一，从市场街行进至市政厅，参与者以数十万计。"
      },
      {
        "name": "北加州樱花节（Northern California Cherry Blossom Festival）",
        "month": "4月",
        "description": "在日本城（Japantown）举办的樱花主题文化节，有太鼓、茶道与巡游。"
      },
      {
        "name": "旧金山舰队周与蓝天使飞行表演（Fleet Week）",
        "month": "10月上旬",
        "description": "军舰开放参观与蓝天使特技飞行表演，滨海一带与渔人码头观景区人潮密集。"
      },
      {
        "name": "旧金山国际电影节（SFFILM Festival）",
        "month": "4月中下旬",
        "description": "北美历史悠久的独立电影节，展映大量纪录片与国际新片。"
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
        "name": "金门大桥（Golden Gate Bridge）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "恶魔岛（Alcatraz Island）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "渔人码头与39号码头（Fisherman's Wharf / Pier 39）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "九曲花街（Lombard Street）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "旧金山现代艺术博物馆（SFMOMA）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "金门公园（Golden Gate Park）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "酸面包碗蛤蜊浓汤（Clam Chowder in Sourdough Bowl）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "旧金山酸面包（Sourdough Bread）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "珍宝蟹（Dungeness Crab，渔人码头）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "米慎区墨西哥卷饼（Mission Burrito）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "爱尔兰咖啡（Irish Coffee，本地酒吧发源）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "西北民俗节（Northwest Folklife Festival）",
        "month": "5月阵亡将士纪念日周末",
        "description": "在西雅图中心举办的免费民俗艺术节，集中展示太平洋西北的音乐、舞蹈与手工艺。"
      },
      {
        "name": "西雅图国际电影节（SIFF）",
        "month": "5月中旬至6月",
        "description": "北美观众规模较大的影展之一，展映数百部各国影片并设多个影院场地。"
      },
      {
        "name": "西雅图骄傲月（Seattle Pride）",
        "month": "6月",
        "description": "市中心举行的大型 LGBTQ+ 游行与街头庆典， Capitol Hill 一带活动集中。"
      },
      {
        "name": "海洋节（Seafair）",
        "month": "7月至8月上旬",
        "description": "夏季传统节庆，包含火炬大游行、蓝天使飞行表演与华盛顿湖水上活动。"
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
        "name": "太空针塔（Space Needle）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "派克市场（Pike Place Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "奇胡利玻璃艺术园（Chihuly Garden and Glass）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "流行文化博物馆（MoPOP）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西雅图水族馆（Seattle Aquarium）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "凯瑞公园观景台（Kerry Park）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "太平洋野生王鲑（Chinook Salmon）料理",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "珍宝蟹与本地生蚝",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "西雅图式奶油奶酪热狗（Seattle Dog）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "派克市场蛤蜊浓汤（Pike Place Chowder）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "本地精品咖啡（星巴克首家门店所在城市）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "迈阿密海滩巴塞尔艺术展（Art Basel Miami Beach）",
        "month": "12月第一周",
        "description": "全球最重要的当代艺术博览会之一，会展中心与海滩一带酒店与交通极为紧张。"
      },
      {
        "name": "南滩美酒美食节（South Beach Wine & Food Festival）",
        "month": "2月下旬",
        "description": "由知名厨师参与的美食美酒活动，沙滩与酒店场地遍布品鉴与晚宴。"
      },
      {
        "name": "迈阿密狂欢节（Miami Carnival）",
        "month": "10月",
        "description": "加勒比风情的盛装巡游与钢鼓音乐庆典，通常在 Broward 县一带举行。"
      },
      {
        "name": "迈阿密海滩骄傲节（Miami Beach Pride）",
        "month": "4月",
        "description": "以南海滩为中心的 LGBTQ+ 游行与海滩派对，林肯路一带活动最集中。"
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
        "name": "南海滩（South Beach）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "装饰艺术历史街区（Art Deco Historic District）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "小哈瓦那（Little Havana）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维兹卡亚庄园与花园（Vizcaya Museum & Gardens）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "温伍德艺术区涂鸦墙（Wynwood Walls）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大沼泽国家公园（Everglades，近郊一日游）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "古巴三明治（Cuban Sandwich）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸大蕉（Tostones 与 Maduros）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "佛罗里达石蟹钳（Stone Crab Claws）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "酸橘汁腌鱼（Ceviche）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "古巴浓缩咖啡（Cafecito）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "波士顿马拉松（Boston Marathon）",
        "month": "4月第三个星期一（爱国者日）",
        "description": "全球历史最悠久的年度马拉松，赛道从霍普金顿跑至市中心，沿线道路全天封闭。"
      },
      {
        "name": "南波士顿圣帕特里克节游行",
        "month": "3月17日前后",
        "description": "纪念爱尔兰传统的盛大游行，南波士顿百老汇沿线人流密集，酒吧区夜间拥挤。"
      },
      {
        "name": "查尔斯河畔独立日音乐会与烟火",
        "month": "7月4日",
        "description": "波士顿大众乐团在河滨露天音乐台演出，夜晚于查尔斯河上空燃放烟花。"
      },
      {
        "name": "波士顿骄傲游行（Boston Pride）",
        "month": "6月",
        "description": "从科普利广场行至市政厅广场的 LGBTQ+ 游行，配套有街头文化节。"
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
        "name": "自由之路（Freedom Trail）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "法尼尔厅与昆西市场（Faneuil Hall / Quincy Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "波士顿公园与公共花园（Boston Common & Public Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "芬威球场（Fenway Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "波士顿美术馆（Museum of Fine Arts）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "哈佛大学与剑桥镇（Cambridge，近郊）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "新英格兰蛤蜊浓汤（Clam Chowder）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "龙虾卷（Lobster Roll）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波士顿奶油派（Boston Cream Pie）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波士顿烤豆（Boston Baked Beans）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "生蚝与海鲜吧（Union Oyster House 老店式）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "国家樱花节（National Cherry Blossom Festival）",
        "month": "3月下旬至4月上旬",
        "description": "纪念1912年日本赠送樱花树，潮汐湖畔赏樱并举办游行与风筝节。"
      },
      {
        "name": "史密森尼民俗文化节（Smithsonian Folklife Festival）",
        "month": "6月底至7月初",
        "description": "在国家广场举办的免费文化节，每年聚焦不同国家或地区的传统技艺与饮食。"
      },
      {
        "name": "独立日国家广场庆典",
        "month": "7月4日",
        "description": "音乐会、阅兵式与华盛顿纪念碑上空烟火，广场安检严格、人流极多。"
      },
      {
        "name": "使馆开放日 Passport DC",
        "month": "5月",
        "description": "数十国驻美使馆向公众开放，可参观并品尝各国饮食，需提前预约热门场次。"
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
        "name": "国家广场与华盛顿纪念碑（National Mall）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "白宫（The White House）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "美国国会大厦（U.S. Capitol）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "林肯纪念堂（Lincoln Memorial）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "史密森尼国家自然历史博物馆",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国家航空航天博物馆（National Air and Space Museum）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "半烟熏香肠（Half-Smoke，本地标志性街头食品）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马里兰蓝蟹蟹饼（Crab Cake）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "老湾调味料蒸海鲜（Old Bay 蒸虾与蒸蟹）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Mumbo 酱炸鸡翅（Mumbo Sauce，华府特色酱料）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "埃塞俄比亚英吉拉料理（Injera，本地非洲社区规模居全美前列）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "国际消费电子展（CES）",
        "month": "1月上旬",
        "description": "在拉斯维加斯会议中心举办的全球最大科技展会，期间酒店与航班价格大幅上涨。"
      },
      {
        "name": "电动雏菊狂欢节（EDC Las Vegas）",
        "month": "5月",
        "description": "在拉斯维加斯赛车场举行的三天大型电子音乐节，夜间往返需提前安排交通。"
      },
      {
        "name": "世界牛仔竞技总决赛（National Finals Rodeo）",
        "month": "12月上旬",
        "description": "牛仔竞技顶级年度赛事，同时带动大道各酒店的乡村音乐演出与主题派对。"
      },
      {
        "name": "大道跨年烟花庆典",
        "month": "12月31日",
        "description": "多家赌场酒店同步燃放烟花，大道实施交通管制与人流单向疏导。"
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
        "name": "拉斯维加斯大道（The Strip）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "百乐宫音乐喷泉（Fountains of Bellagio）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "威尼斯人度假村（The Venetian）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "弗里蒙特街体验区（Fremont Street Experience）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "红岩峡谷国家保护区（Red Rock Canyon，近郊）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "胡佛水坝（Hoover Dam，近郊）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "赌场自助餐（Buffet，拉斯维加斯标志性餐饮）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "老派虾仁鸡尾酒（Shrimp Cocktail）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "慢烤牛肋排（Prime Rib，赌场经典招牌）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "干式熟成牛排（Steakhouse）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "大道名厨餐厅料理（Celebrity Chef 餐厅）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "毒品问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "国家西部牧马展与牛仔竞技（National Western Stock Show）",
        "month": "1月",
        "description": "拥有百余年历史的畜牧展与牛仔竞技盛会，在丹佛国家西部中心举行。"
      },
      {
        "name": "四二〇大麻文化集会（4/20 活动）",
        "month": "4月20日前后",
        "description": "科罗拉多州允许成年人购买娱乐用大麻，市中心常有大麻文化集会；但公共场所吸食仍属违法，中国公民另须遵守本国法律。"
      },
      {
        "name": "丹佛骄傲节（Denver PrideFest）",
        "month": "6月",
        "description": "在市政中心公园举办的大型 LGBTQ+ 庆典与游行，是落基山地区规模最大的同类活动。"
      },
      {
        "name": "美国大啤酒节（Great American Beer Festival）",
        "month": "9月底至10月初",
        "description": "在丹佛会展中心举办的全国性精酿啤酒品鉴活动，门票通常提前售罄。"
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
        "name": "丹佛艺术博物馆（Denver Art Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "丹佛自然与科学博物馆（Denver Museum of Nature & Science）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "联合车站（Union Station）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉里默广场（Larimer Square）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科罗拉多州议会大厦（Colorado State Capitol，金色穹顶）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "红岩露天剧场（Red Rocks Amphitheatre，近郊）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "科罗拉多绿辣椒炖肉（Green Chile）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "科罗拉多烤羊排（Colorado Lamb）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "野牛汉堡（Bison Burger）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "落基山生蚝（Rocky Mountain Oysters，牧场传统炸物）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "精酿啤酒与啤酒餐（丹佛为美国精酿重镇）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "桃树公路赛（Peachtree Road Race）",
        "month": "7月4日",
        "description": "世界参赛人数最多的10公里路跑之一，从勒诺克斯广场跑至 Piedmont 公园。"
      },
      {
        "name": "Dragon Con 动漫科幻展",
        "month": "8月底至9月初（劳动节周末）",
        "description": "市中心多家酒店同步举办的大型流行文化展会，以cosplay巡游著称。"
      },
      {
        "name": "亚特兰大骄傲节（Atlanta Pride）",
        "month": "10月",
        "description": "在 Piedmont 公园举行的大型 LGBTQ+ 庆典，是美国东南部规模最大的同类活动之一。"
      },
      {
        "name": "亚特兰大电影节（Atlanta Film Festival）",
        "month": "4月",
        "description": "美国运行时间最长的独立电影节之一，展映剧情片、纪录片与短片。"
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
        "name": "佐治亚水族馆（Georgia Aquarium）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "可口可乐世界（World of Coca-Cola）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马丁·路德·金国家历史公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "百年奥林匹克公园（Centennial Olympic Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "亚特兰大植物园（Atlanta Botanical Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "福克斯剧院（Fox Theatre）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "南方炸鸡（Southern Fried Chicken）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "桃子派与桃酥（Peach Cobbler，佐治亚为桃州）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸青番茄（Fried Green Tomatoes）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烧烤排骨配玉米面包（BBQ Ribs）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "南方甜茶（Sweet Tea）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "德州博览会（State Fair of Texas）",
        "month": "9月底至10月中",
        "description": "在博览会公园举办的百年州博览会，以巨型摩天轮与油炸创意食品闻名。"
      },
      {
        "name": "棉花碗橄榄球赛（Cotton Bowl Classic）",
        "month": "12月底至1月初",
        "description": "大学橄榄球传统碗赛，与博览会公园一带的新年庆祝活动同期举行。"
      },
      {
        "name": "达拉斯马拉松（BMW Dallas Marathon）",
        "month": "12月中旬",
        "description": "赛道经过市中心与白岩湖一带，比赛日上午多条主干道封闭。"
      },
      {
        "name": "达拉斯国际电影节（Dallas International Film Festival）",
        "month": "4月",
        "description": "在市中心举办的多单元影展，展映独立影片与国际新作并设颁奖环节。"
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
        "name": "第六层博物馆（Sixth Floor Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "迪利广场（Dealey Plaza）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "达拉斯艺术博物馆（Dallas Museum of Art）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "重逢塔观景台（Reunion Tower）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "佩罗自然与科学博物馆（Perot Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "达拉斯植物园（Dallas Arboretum）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "德州慢烤牛胸肉（BBQ Brisket）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鸡排（Chicken Fried Steak）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "德州-墨西哥风味菜（Tex-Mex，法士达与玉米卷）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "博览会玉米热狗（Corny Dog，德州博览会经典）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "山核桃派（Pecan Pie）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "休斯顿牛仔竞技节与畜牧展（Houston Livestock Show and Rodeo）",
        "month": "2月底至3月",
        "description": "全球规模最大的牛仔竞技与畜牧展，每晚还有流行歌手演唱会。"
      },
      {
        "name": "休斯顿马拉松（Chevron Houston Marathon）",
        "month": "1月中旬",
        "description": "赛道穿越市中心与多个社区，以平坦快速路线吸引大量跑者。"
      },
      {
        "name": "休斯顿骄傲游行（Houston Pride）",
        "month": "6月",
        "description": "夜间在蒙特罗斯街区举行的游行与庆典，是美国南部规模较大的骄傲活动之一。"
      },
      {
        "name": "河口城艺术节（Bayou City Art Festival）",
        "month": "3月与10月",
        "description": "春秋两季在市中心举办的大型户外艺术展，聚集数百位艺术家与手作摊位。"
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
        "name": "休斯顿航天中心（Space Center Houston）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "休斯顿自然科学博物馆（HMNS）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "赫尔曼公园与休斯顿动物园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "休斯顿美术馆（Museum of Fine Arts）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "水墙公园（Gerald D. Hines Waterwall Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "市中心水族馆（Downtown Aquarium）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "德州慢烤牛胸肉（BBQ Brisket）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "越南牛肉河粉（休斯顿越南裔社区规模居全美前列）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "德州-墨西哥菜（Tex-Mex，法士达与玉米卷）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卡真秋葵汤饭（Gumbo）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "越式卡真辣味小龙虾（Viet-Cajun Crawfish，春季常见）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "WM 凤凰城公开赛（WM Phoenix Open）",
        "month": "2月初",
        "description": "在斯科茨代尔 TPC 球场举行的 PGA 巡回赛，观众规模居高尔夫赛事首位。"
      },
      {
        "name": "菲斯塔碗橄榄球赛与游行（Fiesta Bowl）",
        "month": "12月底至1月初",
        "description": "大学橄榄球季后赛赛事，同期举办西部风情花车游行与嘉年华活动。"
      },
      {
        "name": "凤凰城骄傲节（Phoenix Pride）",
        "month": "4月",
        "description": "在市中心举行的 LGBTQ+ 游行与街区庆典，是亚利桑那规模最大的同类活动。"
      },
      {
        "name": "亚利桑那州博览会（Arizona State Fair）",
        "month": "10月至11月",
        "description": "在州博览会会场举办的传统展会，含游乐设施、畜牧展与现场演出。"
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
        "name": "沙漠植物园（Desert Botanical Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "赫德博物馆（Heard Museum，美洲原住民文化）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "凤凰城艺术博物馆（Phoenix Art Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "驼背山登山步道（Camelback Mountain）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "帕帕戈公园岩石之洞（Hole-in-the-Rock）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老城斯科茨代尔（Old Town Scottsdale，近郊）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "索诺兰热狗（培根裹热狗配豆酱与配料）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "梅斯基特木炭烤肉（Mesquite Grill）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "墨西哥玉米卷与卷饼（Taco & Burrito）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "仙人掌片沙拉（Nopales）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "西南风味绿辣椒炖肉（Green Chile Stew）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "毒品问题",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "波特兰玫瑰节（Portland Rose Festival）",
        "month": "5月底至6月",
        "description": "拥有百余年历史的城市节庆，含玫瑰巡游、舰队周与河岸庆典活动。"
      },
      {
        "name": "波特兰骄傲游行（Portland Pride）",
        "month": "6月",
        "description": "沿市中心与滨水区举行的 LGBTQ+ 游行与为期数天的社区庆典。"
      },
      {
        "name": "滨水蓝调音乐节（Waterfront Blues Festival）",
        "month": "7月4日前后",
        "description": "在汤姆·麦考尔滨水公园举办的蓝调音乐节，以烟花收尾、门票收入用于慈善。"
      },
      {
        "name": "波特兰图书节（Portland Book Festival）",
        "month": "11月",
        "description": "由文学机构主办的大型书展，市中心场馆集中举办作家对谈与签售。"
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
        "name": "波特兰日本花园（Portland Japanese Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国际玫瑰试验园（International Rose Test Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "兰苏中国花园（Lan Su Chinese Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "鲍威尔书城（Powell's City of Books）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "皮托克大厦（Pittock Mansion）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马尔特诺马瀑布（Multnomah Falls，近郊）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "精酿啤酒（波特兰为美国精酿啤酒重镇）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "餐车美食（Food Carts，市区餐车广场密集）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "创意甜甜圈（以 Voodoo Doughnut 为代表）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "太平洋西北野生三文鱼与生蚝",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "本地精品咖啡（独立咖啡馆文化）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣迭戈国际动漫展（San Diego Comic-Con）",
        "month": "7月中下旬",
        "description": "全球最具影响力的流行文化展会，会展中心与瓦斯灯街区一票难求、人流极大。"
      },
      {
        "name": "圣迭戈骄傲节（San Diego Pride）",
        "month": "7月",
        "description": "在巴尔博亚公园与希尔克雷斯特街区举行的大型 LGBTQ+ 游行与音乐节。"
      },
      {
        "name": "圣迭戈国际电影节（San Diego International Film Festival）",
        "month": "10月",
        "description": "在瓦斯灯街区举办的多单元影展，展映国际剧情片、纪录片与短片。"
      },
      {
        "name": "巴尔博亚公园十二月之夜（December Nights）",
        "month": "12月上旬",
        "description": "公园内博物馆免费开放的灯光节庆，有各国文化表演与街头美食摊位。"
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
        "name": "巴尔博亚公园（Balboa Park，含多家博物馆）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣迭戈动物园（San Diego Zoo）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "中途岛号航空母舰博物馆（USS Midway Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "老城历史公园（Old Town San Diego）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科罗纳多海滩与德尔酒店（Hotel del Coronado）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉霍亚海湾（La Jolla Cove）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "加州卷饼（California Burrito，内含炸薯条）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鱼肉玉米卷（Fish Taco）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "精酿啤酒（圣迭戈精酿啤酒业发达）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "本地生蚝与海鲜",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "墨西哥风味酸橘汁腌鱼（Ceviche）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "西南偏南大会（SXSW）",
        "month": "3月中旬",
        "description": "音乐、电影与科技跨界的大型节展，市中心场馆与酒吧演出密集、住宿紧张。"
      },
      {
        "name": "奥斯汀骄傲节（Austin Pride）",
        "month": "8月",
        "description": "在国会大道一带举行的 LGBTQ+ 游行与庆典，配套有街区派对与演出。"
      },
      {
        "name": "奥斯汀城市极限音乐节（ACL Festival）",
        "month": "10月（连续两个周末）",
        "description": "在齐尔克公园举行的大型音乐节，汇集摇滚、独立与乡村音乐阵容。"
      },
      {
        "name": "奥斯汀马拉松（Austin Marathon）",
        "month": "2月中旬",
        "description": "赛道穿过州议会大厦、南 Congress 与市区住宅区，当日多处道路封闭。"
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
        "name": "德州州议会大厦（Texas State Capitol）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国会大道桥（日落蝙蝠出巢观赏点）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴顿泉泳池（Barton Springs Pool）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "齐尔克公园（Zilker Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "布洛克德州历史博物馆（Bullock Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "南国会大道街区（South Congress / SoCo）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "德州慢烤牛胸肉（BBQ Brisket）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "早餐玉米卷（Breakfast Taco）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鸡排（Chicken Fried Steak）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "德州-墨西哥芝士酱与玉米片（Queso & Nachos）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "科拉奇捷克酥皮点心（Kolache，德州中部常见）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "亡灵节（Día de Muertos）",
        "month": "10月下旬至11月2日",
        "description": "墨西哥最具代表性的节日，市区有亡灵节大游行，家家设祭坛（ofrenda），霍奇米尔科一带另有夜游船活动"
      },
      {
        "name": "独立日庆典（Grito de Independencia）",
        "month": "9月15日夜至9月16日",
        "description": "宪法广场鸣钟重演多洛雷斯呼声，次日举行阅兵，市中心人流极大、封路范围广"
      },
      {
        "name": "瓜达卢佩圣母瞻礼",
        "month": "12月12日",
        "description": "天主教重要朝圣日，大量信众徒步前往瓜达卢佩圣母大教堂，周边交通管制"
      },
      {
        "name": "Vive Latino 音乐节",
        "month": "通常3—4月（春季）",
        "description": "在 Foro Sol 体育场举办的大型拉丁摇滚音乐节，一日内多舞台演出"
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
        "name": "特奥蒂瓦坎古城与太阳金字塔、月亮金字塔（Teotihuacán，城东北近郊）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国立人类学博物馆（Museo Nacional de Antropología）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "查普尔特佩克城堡与查普尔特佩克森林公园（Castillo de Chapultepec / Bosque de Chapultepec）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "宪法广场与大都会主教座堂、国立宫壁画（Zócalo / Catedral Metropolitana / Palacio Nacional）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "霍奇米尔科运河与漂浮花园（Xochimilco，彩色平底船 trajinera）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "弗里达·卡罗博物馆（Museo Frida Kahlo，科约阿坎区蓝屋）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "牧羊人烤肉塔可（Tacos al pastor，菠萝腌猪肉，街头摊招牌）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "玉米粽（Tamales，常配玉米热饮 atole 作早餐）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波索莱玉米浓汤（Pozole，配萝卜、牛至、青柠）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "玉米杯（Esquites / Elote，街头玉米粒配柠檬辣椒粉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "手工玉米厚饼（Tlacoyo，豆泥馅现做玉米饼）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "坎昆狂欢节（Carnaval de Cancún）",
        "month": "2月至3月",
        "description": "以花车巡游、彩装舞蹈与街头派对为主的传统狂欢节，市中心一带人流密集。"
      },
      {
        "name": "春假（Spring Break）",
        "month": "3月至4月",
        "description": "北美学生假期集中涌入，海滩与夜店人流剧增，需注意饮酒、溺水与个人财物安全。"
      },
      {
        "name": "墨西哥独立日庆典",
        "month": "9月16日",
        "description": "全国性节日，广场有喊口号仪式、焰火与墨西哥传统音乐舞蹈表演。"
      },
      {
        "name": "亡灵节（Día de Muertos）",
        "month": "11月1日至2日",
        "description": "以万寿菊、骷髅糖与祭坛纪念逝者的传统节日，被列入人类非物质文化遗产。"
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
        "name": "坎昆酒店区白沙海滩（Zona Hotelera）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "坎昆水下雕塑博物馆（MUSA）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "女人岛（Isla Mujeres，近郊渡轮可达）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "埃尔雷伊玛雅遗址（El Rey Ruins，酒店区内）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "天然井溶洞潜水（Cenote）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "图卢姆玛雅海滨遗址（Tulum，近郊一日游）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "香蕉叶慢烤猪肉（Cochinita Pibil）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "牧师烤肉玉米卷（Tacos al Pastor）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "酸橘汁腌鱼（Ceviche）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "街头烤玉米（Elote）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸大蕉片（Tostones）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "枪支暴力风险",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "圣保罗狂欢节（Carnaval de São Paulo）",
        "month": "通常2—3月",
        "description": "桑巴舞校在 Anhembi 桑巴大道举行评级游行，同期全城有大量街头 blocos 狂欢"
      },
      {
        "name": "LGBT+ 骄傲游行（Parada do Orgulho LGBT）",
        "month": "6月（多为月中或下旬周日）",
        "description": "沿保利斯塔大道举行，是世界上规模最大的骄傲游行之一"
      },
      {
        "name": "文化不夜城（Virada Cultural）",
        "month": "通常5月",
        "description": "24小时不间断的免费演出、电影与展览，覆盖市中心多个舞台"
      },
      {
        "name": "圣保罗双年展（Bienal de São Paulo）",
        "month": "双数年9月至12月",
        "description": "世界重要当代艺术双年展之一，在伊比拉普埃拉公园的双年展馆举办"
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
        "name": "圣保罗艺术博物馆（MASP，保利斯塔大道上的玻璃悬挂建筑）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊比拉普埃拉公园与双年展馆（Parque Ibirapuera / Pavilhão da Bienal）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "保利斯塔大道（Avenida Paulista）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蝙蝠侠涂鸦巷（Beco do Batman，Vila Madalena 街区）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣保罗市立市场（Mercado Municipal / Mercadão，拱顶彩窗建筑）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "自由区日本街（Bairro da Liberdade，日本侨民街区与周末集市）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "莫塔德拉香肠三明治（Sanduíche de mortadela，市立市场名物）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "黑豆炖肉（Feijoada，周末传统正餐）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "圣保罗风味干肉套餐（Virado à paulista，豆泥配干牛肉、木薯粉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "集市炸饼（Pastel de feira，配甘蔗汁 caldo de cana）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "奶酪面包球（Pão de queijo，面包店与咖啡馆常见）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "里约狂欢节（Carnaval do Rio）",
        "month": "通常2月或3月（四旬斋前）",
        "description": "桑巴大道（Sambódromo）的桑巴舞校游行加全城街头 blocos，为世界最著名狂欢节"
      },
      {
        "name": "科帕卡巴纳跨年庆典（Réveillon）",
        "month": "12月31日夜",
        "description": "海滩数十万人看烟花过大年，穿白衣是传统，结束后地铁与道路长时间拥挤"
      },
      {
        "name": "里约国际电影节（Festival do Rio）",
        "month": "通常10月",
        "description": "南美重要影展，市区多家影院放映数百部巴西与国际影片"
      },
      {
        "name": "六月节（Festas Juninas）",
        "month": "6月",
        "description": "庆祝丰收的街头乡村风市集，玉米制品、方形舞（quadrilha）与格子衬衫装扮"
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
        "name": "基督像（Cristo Redentor，科尔科瓦多山顶）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "甜面包山缆车（Bondinho do Pão de Açúcar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科帕卡巴纳海滩（Praia de Copacabana）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊帕内马海滩与两兄弟山（Praia de Ipanema / Morro Dois Irmãos）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "塞勒隆阶梯与拉帕拱门（Escadaria Selarón / Arcos da Lapa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蒂茹卡国家公园（Parque Nacional da Tijuca，城市中的热带雨林）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "黑豆炖肉（Feijoada，周六传统餐配米饭、木薯粉与橙片）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "里约风味牛肉碎饭（Picadinho carioca，配黑豆、木薯粉 farofa 与煎蛋）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "巴西烤肉（Churrasco，rodízio 式续盘烤肉店）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "鳕鱼球（Bolinho de bacalhau，小酒馆 botequim 下酒菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿萨伊果碗（Açaí na tigela，海滩摊常见）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "布宜诺斯艾利斯探戈节与世锦赛（Festival y Mundial de Tango）",
        "month": "通常8月",
        "description": "全城免费舞会、大师课与演出，并在 Luna Park 举行探戈世界锦标赛决赛"
      },
      {
        "name": "布宜诺斯艾利斯国际书展（Feria Internacional del Libro）",
        "month": "通常4月下旬至5月",
        "description": "西班牙语世界最重要的书展之一，在 La Rural 展览中心举办"
      },
      {
        "name": "博物馆之夜（La Noche de los Museos）",
        "month": "通常11月",
        "description": "一晚内上百家博物馆与文化机构免费开放至凌晨，交通与场馆极度拥挤"
      },
      {
        "name": "港口版狂欢节（Carnaval / murgas porteñas）",
        "month": "2月（多为周末与狂欢节假期）",
        "description": "各街区 murga 鼓队与彩车队巡演，规模小于巴西但社区氛围强"
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
        "name": "方尖碑与七月九日大道（Obelisco / Avenida 9 de Julio）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "五月广场与玫瑰宫（Plaza de Mayo / Casa Rosada）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "博卡区卡迷你托街（Caminito，La Boca，彩色铁皮屋）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "雷科莱塔公墓（Cementerio de Recoleta，贝隆夫人墓）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣特尔莫老区与多雷戈广场集市（San Telmo / Plaza Dorrego）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科隆剧院（Teatro Colón）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "阿根廷烤肉（Asado / parrilla，牛排与牛肠等内脏）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "恩潘纳达馅饼（Empanadas，烤箱或油炸馅饼）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "那不勒斯式米兰内萨（Milanesa a la napolitana，炸肉排铺火腿番茄酱奶酪）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "香肠三明治（Choripán，配青酱 chimichurri）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿尔法霍尔夹心饼干（Alfajor，牛奶焦糖 dulce de leche 馅）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "智利国庆（Fiestas Patrias）",
        "month": "9月18日前后（含19日建军节）",
        "description": "全城搭起 fonda 帐篷，有 cueca 国舞、烤肉与智利美食，饮酒多、交通繁忙"
      },
      {
        "name": "圣地亚哥千剧艺术节（Santiago a Mil）",
        "month": "通常1月",
        "description": "拉丁美洲重要戏剧节，国内外剧团在多个剧场与街区演出"
      },
      {
        "name": "智利站音乐节（Lollapalooza Chile）",
        "month": "通常3月",
        "description": "在圣地亚哥的 Bicentenario Cerrillos 公园举办的大型国际音乐节，单日人流数万"
      },
      {
        "name": "圣地亚哥国际书展（FILSA）",
        "month": "通常10月下旬至11月",
        "description": "在马波乔车站文化中心（Estación Mapocho）举办的全国最大书展"
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
        "name": "圣卢西亚山（Cerro Santa Lucía，城市发源地）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣克里斯托瓦尔山与山顶圣母像（Cerro San Cristóbal，缆车与索道）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "武器广场与圣地亚哥大都会主教座堂（Plaza de Armas / Catedral Metropolitana）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉莫内达宫（Palacio de La Moneda，总统府）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "贝拉维斯塔区与聂鲁达故居拉查斯柯娜（Barrio Bellavista / La Chascona）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣地亚哥中央市场（Mercado Central，海鲜市场与老餐馆）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "智利牛肉馅饼（Empanada de pino，牛肉末、洋葱、鸡蛋与橄榄）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "玉米牛肉烤饼（Pastel de choclo，玉米糊烤牛肉馅）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "智利式热狗（Completo，番茄、鳄梨与酸奶油酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "海鲜杂烩汤（Paila marina，中央市场海鲜馆名菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "智利家常炖汤（Cazuela de vacuno / de ave）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "奇迹之主游行（Señor de los Milagros）",
        "month": "10月（多次出巡）",
        "description": "利马最重要的宗教活动，紫袍信众抬画像穿城游行，人潮拥挤需提前安排路线"
      },
      {
        "name": "独立日庆典（Fiestas Patrias）",
        "month": "7月28日至29日",
        "description": "国庆日阅兵与演出，同时也是国内出行高峰，机场与长途车站排队时间长"
      },
      {
        "name": "秘鲁国际电影节（Festival de Cine de Lima）",
        "month": "通常8月",
        "description": "由利马天主教大学主办的重要影展，放映拉美新片并举办竞赛单元"
      },
      {
        "name": "米斯图拉美食节（Mistura）",
        "month": "多在9月，近年按年度不定期举办",
        "description": "曾多次举办的秘鲁大型美食展，汇集海岸、安第斯与亚马逊食材，出发前需先确认当年是否举办"
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
        "name": "利马历史中心与武器广场（Centro Histórico / Plaza de Armas，大教堂与总统府）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣弗朗西斯科修道院与地下墓穴（Convento y Catacumbas de San Francisco）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "米拉弗洛雷斯区与爱情公园（Miraflores / Parque del Amor，海边悬崖）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴兰科区与叹息桥（Barranco / Puente de los Suspiros）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉尔科博物馆（Museo Larco，前哥伦布时期文物）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "帕查卡马克考古遗址（Santuario Arqueológico de Pachacamac，城南近郊）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "酸橘汁腌鱼（Ceviche，配玉米粒与红薯，海鲜餐馆招牌）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "烤牛心串（Anticuchos de corazón，街头炭烤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "黄辣椒炖鸡（Ají de gallina，配米饭与橄榄）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "利马风味土豆泥（Causa limeña，黄土豆泥夹海鲜或鸡肉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "利马叹息（Suspiro limeño，蛋白霜配牛奶焦糖甜点）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "自然灾害",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "伊比利亚美洲戏剧节（Festival Iberoamericano de Teatro）",
        "month": "双数年，通常3—4月",
        "description": "世界上规模最大的戏剧节之一，街头演出、剧团巡演遍布全城"
      },
      {
        "name": "波哥大国际书展（FILBo）",
        "month": "通常4月下旬至5月上旬",
        "description": "在 Corferias 展览中心举办，拉美重要出版盛事，读者日人流极大"
      },
      {
        "name": "公园摇滚音乐节（Rock al Parque）",
        "month": "多在年中或年末举办",
        "description": "市政府主办的免费户外摇滚音乐节，多年来以西蒙玻利瓦尔公园为主要场地"
      },
      {
        "name": "波哥大短片电影节（BOGOSHORTS）",
        "month": "通常12月",
        "description": "聚焦短片与电影工业的行业影展，多场放映集中于市中心影院与电影院"
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
        "name": "黄金博物馆（Museo del Oro，前哥伦布时期金器）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "玻利瓦尔广场与首主教座堂（Plaza de Bolívar / Catedral Primada）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蒙塞拉特山（Cerro de Monserrate，缆车与山顶朝圣教堂）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "波特罗博物馆与拉坎德拉里亚老城（Museo Botero / La Candelaria）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西蒙·玻利瓦尔都会公园（Parque Metropolitano Simón Bolívar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西帕基拉盐教堂（Catedral de Sal de Zipaquirá，城北近郊一日游）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "波哥大土豆鸡汤（Ajiaco bogotano，配酸奶油、刺山柑与牛至）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "玉米叶蒸肉粽（Tamal，配热巧克力的传统早餐）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "奶香蛋汤（Changua，牛奶马铃薯葱花汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "热巧克力配奶酪面包（Chocolate santafereño con queso）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "威化饼夹牛奶焦糖（Obleas con arequipe，街头甜点）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "鲜花节（Feria de las Flores）",
        "month": "通常8月上中旬",
        "description": "麦德林最盛大的节庆，核心是花农背花巡游 desfile de silleteros，另有音乐会与老爷车巡游"
      },
      {
        "name": "圣诞灯饰（Alumbrados Navideños）",
        "month": "12月上旬至次年1月初",
        "description": "由公共事业公司 EPM 主办的灯饰，沿河与主要街道布置，夜间人气极高"
      },
      {
        "name": "麦德林国际诗歌节（Festival Internacional de Poesía）",
        "month": "通常6—7月",
        "description": "创办于1990年代的诗歌盛会，在多个文化场馆与街区举办朗诵"
      },
      {
        "name": "哥伦比亚时尚周（Colombiamoda）",
        "month": "通常7月",
        "description": "拉美重要时装与纺织贸易展，在 Mayor 会展中心举办，含公开秀与订货会"
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
        "name": "博特罗广场（Plaza Botero，安蒂奥基亚博物馆前的雕塑群）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "麦德林现代艺术博物馆（Museo de Arte Moderno de Medellín, MAMM）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "探索公园（Parque Explora，科学馆与水族馆）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿尔维生态公园（Parque Arví，Metrocable 缆车直达）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "13号社区街头艺术区（Comuna 13，涂鸦与户外电动扶梯）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "瓜塔佩巨石（Piedra del Peñol，城东近郊）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "派莎拼盘（Bandeja paisa，红豆、炸猪皮、牛肉末、香肠、煎蛋与鳄梨）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "安蒂奥基亚玉米饼（Arepa antioqueña，配黄油与鲜奶酪）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "牛肚浓汤（Mondongo antioqueño）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸奶酪球（Buñuelos，常与 natilla 同食）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "油炸拼盘（Picada / fritanga，分食式炸肉与木薯）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "治安差异大",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "巴拿马狂欢节（Carnaval de Panamá）",
        "month": "通常2月或3月（连续四天至忏悔周二）",
        "description": "全城水车队与鼓乐队狂欢，海滨大道有舞台与游行，内地的拉斯塔布拉斯庆典更盛大"
      },
      {
        "name": "独立日与国旗月庆典",
        "month": "11月（3日独立日、28日脱离西班牙纪念日）",
        "description": "官方假日期间举行全国性游行、鼓乐队与焰火，大学与国家旗帜游行为亮点"
      },
      {
        "name": "巴拿马爵士节（Panama Jazz Festival）",
        "month": "通常1月",
        "description": "由丹尼洛·佩雷斯创办的音乐节，含大师课与市区多场地演出"
      },
      {
        "name": "巴拿马国际电影节（IFF Panamá）",
        "month": "通常4—5月",
        "description": "中美洲重要影展，集中展映伊比利亚美洲新片并设竞赛单元"
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
        "name": "巴拿马运河米拉弗洛雷斯船闸游客中心（Esclusas de Miraflores / Centro de Visitantes）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡斯科别霍老城（Casco Viejo / Casco Antiguo，世界遗产）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴拿马旧城遗址（Panamá Viejo，世界遗产）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿马多堤道（Calzada de Amador / Causeway，海滨长廊）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "生物多样性博物馆（Biomuseo，弗兰克·盖里设计）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "安孔山（Cerro Ancón，城市制高点）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "巴拿马山药鸡汤（Sancocho panameño，鸡与 ñame 山药熬煮）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "香蕉叶玉米粉蒸肉（Tamal panameño）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "海鲈鱼酸橘汁腌鱼（Ceviche de corvina，海鲜市场名菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "木薯炸肉饼（Carimañola，木薯面团包肉馅油炸）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "猪皮三明治（Sándwich de sao，猪皮配柠檬汁夹面包）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "疾病风险",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "开斋节（Eid al-Fitr）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "斋月结束后的三天假期，全城公园与尼罗河畔热闹，家庭互访并分发甜点。"
      },
      {
        "name": "宰牲节（古尔邦节，Eid al-Adha）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "伊斯兰教最重要的节日，家庭聚会并施舍肉食，公共假期连休数日。"
      },
      {
        "name": "开罗国际电影节（Cairo International Film Festival）",
        "month": "每年11月",
        "description": "创办于1976年，是中东与非洲历史最久的国际电影节之一，开罗歌剧院为主会场。"
      },
      {
        "name": "闻风节（Sham El-Nessim）",
        "month": "科普特复活节后的星期一，多在4—5月",
        "description": "源自古埃及的春季踏青节，全家到公园与尼罗河边野餐，吃咸鱼、彩蛋与生菜。"
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
        "name": "吉萨金字塔与狮身人面像（Giza Pyramids / Sphinx）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大埃及博物馆（Grand Egyptian Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "汗哈利利市场（Khan el-Khalili）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "萨拉丁城堡与穆罕默德·阿里清真寺（Citadel of Salah al-Din）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科普特开罗（Coptic Cairo，含悬空教堂）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "开罗塔（Cairo Tower）",
        "category": "地标",
        "description": "格济拉岛上的187米观景塔，可俯瞰全城与尼罗河"
      }
    ],
    "food": [
      {
        "name": "库沙里（Koshari，米饭意面扁豆杂烩）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "塔米亚（Ta'ameya，埃及蚕豆丸子）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "富尔（Ful Medames，炖蚕豆）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "穆卢赫耶（Molokhia，锦葵叶汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马哈什（Mahshi，肉米酿蔬菜）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "医疗条件有限",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "开普敦国际爵士音乐节（Cape Town International Jazz Festival）",
        "month": "每年3月底至4月初",
        "description": "非洲规模最大的爵士节，国际与本地乐手同台，市中心绿市广场另设免费演出。"
      },
      {
        "name": "开普敦自行车赛（Cape Town Cycle Tour）",
        "month": "每年3月的第二个周日",
        "description": "全球规模最大的计时自行车赛，三万余名选手沿半岛绕行109公里，途经查普曼峰。"
      },
      {
        "name": "开普敦国际风筝节（Cape Town International Kite Festival）",
        "month": "每年10月下旬",
        "description": "在穆济贝格的赞德弗莱湖畔放飞大型风筝，设制作工坊与美食摊，收入用于慈善。"
      },
      {
        "name": "开普敦米纳斯特狂欢节（Kaapse Klopse）",
        "month": "每年1月2日（新年后的“第二个新年”）",
        "description": "源于19世纪的彩色缎面盛装游行，乐队与舞者穿城而过，是最古老的街头狂欢传统之一。"
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
        "name": "桌山（Table Mountain）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "罗本岛（Robben Island）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "好望角与开普角（Cape of Good Hope / Cape Point）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "波卡普（Bo-Kaap，马来区彩色老屋）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维多利亚与阿尔弗雷德海滨（V&A Waterfront）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "博尔德斯海滩企鹅栖息地（Boulders Beach Penguin Colony）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "南非炭火烤肉（Braai）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波波蒂（Bobotie，咖喱肉末焗饼）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "开普马来咖喱（Cape Malay Curry）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "盖茨比（Gatsby，开普敦长条夹心三明治）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "马尔瓦布丁（Malva Pudding，杏酱海绵蛋糕）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "基础设施差",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "约翰内斯堡国际莫扎特音乐节（JIMF）",
        "month": "每年1月底至2月初",
        "description": "为期约一周的古典音乐节，在林德音乐厅与多处教堂举办交响乐、室内乐与管风琴演出。"
      },
      {
        "name": "FNB 约翰内斯堡艺术博览会（Art Joburg）",
        "month": "每年9月",
        "description": "非洲重要的当代艺术博览会，在桑顿会议中心集中呈现非洲画廊与艺术家作品。"
      },
      {
        "name": "约翰内斯堡骄傲游行（Joburg Pride）",
        "month": "每年10月",
        "description": "南非规模最大的骄傲活动之一，游行与社区活动主要在桑顿一带举行。"
      },
      {
        "name": "索韦托马拉松（Soweto Marathon）",
        "month": "每年11月",
        "description": "以FNB体育场为起终点、穿越索韦托街区的路跑赛事，设全程、半程与10公里项目。"
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
        "name": "种族隔离博物馆（Apartheid Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "宪法山（Constitution Hill）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "索韦托与曼德拉故居（Soweto / Mandela House）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "黄金城主题公园（Gold Reef City）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "人类摇篮与马罗彭游客中心（Cradle of Humankind / Maropeng）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡尔顿中心观景台（Carlton Centre，非洲之巅）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "希萨尼亚玛炭烤肉（Shisa Nyama / Braai）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "科塔（Kota，四分之一面包夹薯条的豪登省街头主食）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "波波蒂（Bobotie）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "查卡拉卡（Chakalaka，辣味蔬菜酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "南非干肉（Biltong，风干腌肉）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=1200&q=85",
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
      "基础设施差",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "拉各斯狂欢节（Lagos Carnival）",
        "month": "每年复活节前后，多在3—4月",
        "description": "彩装花车与街头巡游，融合尼日利亚各族群与巴西风格的装扮、鼓乐与舞蹈。"
      },
      {
        "name": "费拉节（Felabration）",
        "month": "每年10月",
        "description": "纪念Afrobeat先驱费拉·库蒂的音乐周，在新非洲神殿（New Afrika Shrine）举办演出、展览与讲座。"
      },
      {
        "name": "埃约节（Eyo Festival）",
        "month": "不定期举办，多在纪念重要人物时举行",
        "description": "拉各斯岛的白衣高帽面具游行，被视为巴西狂欢节的前身，是拉各斯最独特的传统仪式。"
      },
      {
        "name": "拉各斯时装周（Lagos Fashion Week）",
        "month": "每年10月",
        "description": "非洲重要的时装发布平台，在维多利亚岛的联邦宫殿酒店举办走秀与设计师展售。"
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
        "name": "莱基保护中心（Lekki Conservation Centre，非洲最长树冠步道）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "尼基艺术画廊（Nike Art Gallery）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "自由公园（Freedom Park，殖民时期监狱改造的文化园）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉各斯国家博物馆（National Museum Lagos）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "新非洲神殿（New Afrika Shrine，Afrobeat 现场音乐场地）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "塔法瓦·巴莱瓦广场（Tafawa Balewa Square）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "乔洛夫饭（Jollof Rice）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "苏亚（Suya，辣味炭烤肉串）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "埃古斯汤（Egusi Soup，瓜子仁浓汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿马拉配埃杜汤（Amala with Ewedu）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿卡拉（Akara，豆泥炸丸）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "治安风险高",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "共和国日（Jamhuri Day）",
        "month": "每年12月12日",
        "description": "纪念1963年肯尼亚独立的全国假日，内罗毕举行阅兵、演讲与传统歌舞表演。"
      },
      {
        "name": "渣打内罗毕马拉松（Standard Chartered Nairobi Marathon）",
        "month": "每年10月下旬",
        "description": "东非规模最大的路跑赛事之一，设全程、半程与10公里，吸引大量国际选手与观众。"
      },
      {
        "name": "内罗毕餐厅周（Nairobi Restaurant Week）",
        "month": "每年1月下旬至2月，另有8月场次",
        "description": "全市数十家餐厅推出固定价格套餐，是体验内罗毕多元饮食的年度活动。"
      },
      {
        "name": "Blankets & Wine 音乐节",
        "month": "每年多场，通常在6月、9月与12月",
        "description": "东非知名露天音乐野餐节，非洲音乐、时尚与美食市集结合，可自带野餐垫入场。"
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
        "name": "内罗毕国家公园（Nairobi National Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "长颈鹿中心（Giraffe Centre）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大象孤儿院（David Sheldrick Wildlife Trust）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡伦·布利克森博物馆（Karen Blixen Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "内罗毕国家博物馆（Nairobi National Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡鲁拉森林（Karura Forest）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "尼亚马乔马（Nyama Choma，炭烤山羊肉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "乌加利配苏库马维基（Ugali & Sukuma Wiki）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "斯瓦希里香饭（Pilau）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "吉泰里（Githeri，玉米与豆类炖菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "曼达齐（Mandazi，斯瓦希里炸面点）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "政治动荡",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "卡萨布兰卡国际爵士音乐节（Jazzablanca）",
        "month": "每年7月初",
        "description": "创办于2006年的摩洛哥重要音乐节，在安法公园设多个舞台，涵盖爵士、放克与世界音乐。"
      },
      {
        "name": "开斋节（Eid al-Fitr）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "斋月结束后的三天假期，家庭聚会、互赠甜点，海滨与老城夜市热闹。"
      },
      {
        "name": "宰牲节（古尔邦节，Eid al-Adha）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "伊斯兰教最重要的节日，家庭聚会并行善施舍，多数商铺休业数日。"
      },
      {
        "name": "摩洛哥独立日（国庆日）",
        "month": "每年11月18日",
        "description": "纪念1956年结束保护地地位恢复独立，全城举行官方仪式、焰火与庆祝活动。"
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
        "name": "哈桑二世清真寺（Hassan II Mosque，摩洛哥极少数对非穆斯林开放的清真寺，需购票导览）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡萨布兰卡老麦地那（Old Medina of Casablanca）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "哈布斯新区（Habous / Nouvelle Médina）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "穆罕默德五世广场（Place Mohammed V）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "艾因迪亚布滨海大道（Ain Diab Corniche）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣心教堂（Église du Sacré-Cœur）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "塔吉锅（Tagine，陶锅慢炖菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "古斯古斯（Couscous，周五传统粗麦饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "帕斯蒂拉（Pastilla，酥皮肉派）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "哈里拉汤（Harira，番茄豆类浓汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "摩洛哥薄荷茶（Atay bi Na'na）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=1200&q=85",
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
      "疾病风险",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "马拉喀什国际电影节（FIFM）",
        "month": "每年11月底至12月初",
        "description": "北非最重要的电影节，会议宫举办红毯首映，杰马夫纳广场另有免费露天放映。"
      },
      {
        "name": "马拉喀什民间艺术节（Festival National des Arts Populaires）",
        "month": "每年6—7月",
        "description": "在巴迪宫与老城多处举办柏柏尔舞蹈、格纳瓦音乐、杂技与说书表演。"
      },
      {
        "name": "开斋节（Eid al-Fitr）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "斋月结束后的三天假期，家庭聚会并赠送甜点，老城集市人流密集。"
      },
      {
        "name": "宰牲节（古尔邦节，Eid al-Adha）",
        "month": "伊斯兰历12月10日（公历每年约提前11天）",
        "description": "伊斯兰教最重要的节日，家庭聚合并施舍，部分商铺与餐厅休业数日。"
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
        "name": "杰马夫纳广场（Jemaa el-Fnaa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "库图比亚清真寺（Koutoubia Mosque，非穆斯林不可入内，可观赏宣礼塔与玫瑰园）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴伊亚宫（Bahia Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马若雷勒花园（Jardin Majorelle）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "本尤素福神学院（Ben Youssef Madrasa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "萨阿德王朝陵墓（Saadian Tombs）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "塔吉锅（Tagine）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "坦吉亚（Tangia，陶罐炭火慢炖肉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "梅舒伊（Mechoui，慢烤整羊）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "帕斯蒂拉（Pastilla，鸽肉杏仁酥派）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "摩洛哥薄荷茶（Atay bi Na'na）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
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
      "疾病风险",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "迦太基国际艺术节（Festival International de Carthage）",
        "month": "每年7月中旬至8月中旬",
        "description": "创办于1964年，在迦太基的古罗马剧场举办音乐、戏剧与舞蹈演出，是马格里布最负盛名的艺术节。"
      },
      {
        "name": "迦太基电影节（Journées Cinématographiques de Carthage，JCC）",
        "month": "每年11月",
        "description": "创办于1966年，非洲与阿拉伯世界历史最久的电影节之一，最高奖项为金塔尼奖。"
      },
      {
        "name": "突尼斯老城麦地那文化节",
        "month": "每年斋月期间",
        "description": "老城的宫殿与经学院每晚开放，举办马卢夫古典音乐与苏菲吟唱夜场，气氛独特。"
      },
      {
        "name": "开斋节（Eid al-Fitr）",
        "month": "伊斯兰历10月1日（公历每年约提前11天）",
        "description": "斋月结束后的公共假期，家庭聚会与集市庆祝，多数机构休业数日。"
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
        "name": "突尼斯麦地那（Medina of Tunis，世界遗产，含宰图纳清真寺，非穆斯林不可入祈祷厅）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴尔多博物馆（Bardo Museum，世界最大罗马马赛克收藏）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "迦太基遗址（Carthage，含安东尼浴场与布匿港口）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "西迪布赛义德（Sidi Bou Said，蓝白悬崖小镇）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "哈比卜·布尔吉巴大道（Avenue Habib Bourguiba）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉古莱特渔港（La Goulette）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "布里克蛋（Brik à l'œuf，金枪鱼溏心蛋炸薄饼）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "突尼斯鱼古斯古斯（Couscous au poisson）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "拉布拉比（Lablabi，鹰嘴豆汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "沙克舒卡（Chakchouka，番茄炖蛋）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "梅尔盖兹香肠（Merguez，辣味羊肉肠）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "政治动荡",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "加纳独立日（Independence Day）",
        "month": "每年3月6日",
        "description": "纪念1957年脱离英国统治独立，黑星广场举行阅兵、演讲与文化表演。"
      },
      {
        "name": "霍莫沃节（Homowo）",
        "month": "每年8月至9月，各加族社区自定日期",
        "description": "加族丰收节，意为“驱赶饥饿”，有鼓乐游行、洒祭传统食物kpokpoi与家族团聚。"
      },
      {
        "name": "查勒沃特街头艺术节（Chale Wote）",
        "month": "每年8月",
        "description": "西非最大的街头艺术节，詹姆斯敦街区化身露天画廊，有壁画、装置、时装与现场音乐，免费入场。"
      },
      {
        "name": "解放日（Emancipation Day）",
        "month": "每年8月1日",
        "description": "纪念废除奴隶制的公共假日，阿克拉与沿海地区举行纪念仪式与文化活动。"
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
        "name": "夸梅·恩克鲁玛纪念公园与陵墓（Kwame Nkrumah Memorial Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "詹姆斯敦历史街区与灯塔（Jamestown，含 Ussher Fort）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "独立广场与黑星门（Independence Square / Black Star Gate）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马科拉市场（Makola Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "拉巴迪海滩（Labadi Beach）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "W.E.B. 杜波依斯泛非文化中心（W.E.B. Du Bois Centre）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "乔洛夫饭（Jollof Rice）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "瓦基耶（Waakye，米豆同煮饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "班库配烤罗非鱼（Banku with Grilled Tilapia）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "富富配棕榈果汤（Fufu with Palmnut Soup）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "凯莱韦莱（Kelewele，姜辣炸大蕉）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "医疗条件有限",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）",
      "饮水与食物卫生需谨慎，只喝瓶装或煮沸水"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "主显节（Timket）",
        "month": "每年1月19日（闰年1月20日），前夜开始",
        "description": "各教堂抬出约柜复制品（Tabot）游行至简梅达广场，信众守夜后于黎明接受圣水祝福。"
      },
      {
        "name": "马斯卡尔节（Meskel）",
        "month": "每年9月27日（闰年9月28日），前夜点燃篝火",
        "description": "纪念寻获真十字架，马斯卡尔广场竖起巨型“德梅拉”篝火，已被列入人类非物质文化遗产。"
      },
      {
        "name": "埃塞俄比亚新年（Enkutatash）",
        "month": "每年9月11日（闰年9月12日）",
        "description": "雨季结束、黄色雏菊盛开的时节，儿童穿白衣挨家唱歌送花，家庭聚餐并举行咖啡仪式。"
      },
      {
        "name": "阿德瓦胜利日（Adwa Victory Day）",
        "month": "每年3月2日",
        "description": "纪念1896年击败意大利军队的战役，孟尼利克二世广场一带举行纪念与献花活动。"
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
        "name": "埃塞俄比亚国家博物馆（National Museum of Ethiopia，藏“露西”化石）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣三一大教堂（Holy Trinity Cathedral）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "恩托托山（Mount Entoto，含恩托托玛丽亚姆教堂）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "默卡托市场（Merkato，非洲最大露天市场）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "团结公园（Unity Park，大皇宫园区）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "民族学博物馆（Ethnological Museum，前海尔·塞拉西皇宫）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "英吉拉配多罗瓦特（Injera with Doro Wat，埃塞国菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "提布斯（Tibs，香料铁板羊肉/牛肉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "基特福（Kitfo，辣椒粉生拌牛肉末）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "希罗瓦特（Shiro Wat，鹰嘴豆辣酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "埃塞俄比亚咖啡仪式（Ethiopian Coffee Ceremony）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "地域广阔交通不便",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "000",
      "ambulance": "000",
      "fire": "000",
      "police_non_urgent": "131-444"
    },
    "festivals": [
      {
        "name": "跨年烟花（Sydney New Year's Eve Fireworks）",
        "month": "12月31日夜",
        "description": "以海港大桥与歌剧院为中心的烟花秀，是全球最早的大规模跨年庆典，需提前占位"
      },
      {
        "name": "活力悉尼灯光音乐节（Vivid Sydney）",
        "month": "通常5月下旬至6月中旬",
        "description": "灯光投影、装置与音乐演出分布在歌剧院、环形码头与巴兰加鲁一带"
      },
      {
        "name": "悉尼同性恋狂欢节（Sydney Gay and Lesbian Mardi Gras）",
        "month": "通常2月至3月初",
        "description": "以牛津街游行为高潮的LGBTQ+庆祝季，同期有电影节与派对系列活动"
      },
      {
        "name": "澳大利亚日（Australia Day）",
        "month": "1月26日",
        "description": "国庆日，海港上有赛舟与飞行表演，同时也是原住民相关的争议纪念日，社会讨论较多"
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
        "name": "悉尼歌剧院（Sydney Opera House）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "悉尼海港大桥（Sydney Harbour Bridge，可登桥攀爬）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "岩石区与环形码头（The Rocks / Circular Quay）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "邦迪海滩与邦迪至库吉海岸步道（Bondi Beach / Bondi to Coogee Walk）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "悉尼皇家植物园（Royal Botanic Garden Sydney）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "达令港（Darling Harbour）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "澳洲肉派（Meat pie，面包店与球场经典）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "香肠卷（Sausage roll，面包店国民小吃）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "悉尼岩蚝（Sydney Rock Oyster，悉尼鱼市场与海鲜餐厅）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鱼薯条（Fish and chips，邦迪与曼利海滩名店）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "拉明顿蛋糕（Lamington，澳洲巧克力椰丝蛋糕）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "地域广阔交通不便",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "澳大利亚网球公开赛（Australian Open）",
        "month": "1月中下旬",
        "description": "四大满贯之一，在墨尔本公园举行，赛事前后两周酒店与餐饮紧张"
      },
      {
        "name": "墨尔本杯赛马节（Melbourne Cup Carnival）",
        "month": "11月，重头戏为11月第一个星期二",
        "description": "弗莱明顿赛马场的两英里大赛，当天为维多利亚州公共假日，全国也在观赛"
      },
      {
        "name": "墨尔本国际喜剧节（Melbourne International Comedy Festival）",
        "month": "通常3月下旬至4月中下旬",
        "description": "世界规模最大的喜剧节之一，全城数百个场地轮番演出"
      },
      {
        "name": "墨尔本国际电影节（MIFF）",
        "month": "通常8月",
        "description": "澳洲重要影展，集中在市中心影院与 ACMI（影像中心）放映新片与回顾单元"
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
        "name": "联邦广场（Federation Square）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "弗林德斯街车站（Flinders Street Station）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维多利亚女王市场（Queen Victoria Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "霍西尔巷与市区涂鸦巷（Hosier Lane 等街巷涂鸦）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "圣基尔达海滩与栈桥（St Kilda Beach / St Kilda Pier）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "墨尔本皇家植物园（Royal Botanic Gardens Melbourne）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "牛油果吐司早午餐（Avocado toast with poached egg，墨尔本咖啡馆招牌）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "帕尔玛鸡排（Chicken parmigiana，酒吧 pub 餐主力）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "澳式点心 Dim sim（源自墨尔本南墨尔本市场）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "澳白咖啡（Flat white，墨尔本咖啡馆文化的代表作）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "澳洲肉派（Meat pie，市集与面包店常见）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1534430485822-0d3d8e56d7c6?w=1200&q=85",
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
      "地域广阔交通不便",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "布里斯班皇家农展（Ekka / Royal Queensland Show）",
        "month": "通常8月",
        "description": "昆士兰年度农业展，含牛仔竞技、畜牧评比与嘉年华，公共假日当天人流最多"
      },
      {
        "name": "布里斯班节（Brisbane Festival）",
        "month": "通常9月",
        "description": "为期三周多的艺术节，以开幕夜的 Riverfire 烟花燃桥表演为标志"
      },
      {
        "name": "地方风味美食节（Regional Flavours）",
        "month": "通常7月",
        "description": "在南岸公园举办的免费昆士兰农产品与美食活动，可品尝各产区食材"
      },
      {
        "name": "布里斯班喜剧节（Brisbane Comedy Festival）",
        "month": "通常2—3月",
        "description": "多场地演出的喜剧季，规模小于墨尔本但选片覆盖面广"
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
        "name": "南岸公园与市内人造沙滩（South Bank Parklands / Streets Beach）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "故事桥（Story Bridge，攀桥与桥下步道）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "龙柏考拉保护区（Lone Pine Koala Sanctuary）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "昆士兰现代艺术馆与文化中心（GOMA / Queensland Cultural Centre）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "库萨山观景台与植物园（Mount Coot-tha Lookout / Brisbane Botanic Gardens）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "布里斯班城市植物园（City Botanic Gardens）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "摩顿湾小龙虾（Moreton Bay Bug，布里斯班海鲜餐厅名菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "泥蟹（Mud crab，昆士兰海鲜名产）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "肺鱼巴勒蒙迪（Barramundi，澳洲北部常见食用鱼）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "澳洲肉派（Meat pie）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "拉明顿蛋糕（Lamington，昆士兰风味甜点）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=1200&q=85",
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
      "地域广阔交通不便",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "珀斯艺术节（Perth Festival）",
        "month": "通常2月至3月初",
        "description": "澳洲历史最久的年度艺术节，涵盖戏剧、舞蹈、视觉艺术与免费户外活动"
      },
      {
        "name": "珀斯边缘艺术节（Fringe World）",
        "month": "通常1月中旬至2月中旬",
        "description": "开放报名的表演艺术节，马戏、喜剧与实验剧场分散在临时场馆"
      },
      {
        "name": "珀斯皇家农展（Perth Royal Show）",
        "month": "通常9月底至10月初",
        "description": "西澳年度农业与游园会，含畜牧评比、游乐设施与烟花"
      },
      {
        "name": "国王公园野花节（Kings Park Festival）",
        "month": "通常9月",
        "description": "配合西澳野花季的植物园活动，含野花步道导览与土著文化讲解"
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
        "name": "国王公园与植物园（Kings Park and Botanic Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊丽莎白码头与天鹅河（Elizabeth Quay / Swan River）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "珀斯铸币厂（The Perth Mint）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "弗里曼特尔（Fremantle：弗里曼特尔监狱、弗里曼特尔市场与渔船港）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "罗特尼斯岛（Rottnest Island，短尾矮袋鼠 quokka，需乘渡轮）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科特斯洛海滩（Cottesloe Beach）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "西澳岩龙虾（Western Rock Lobster，弗里曼特尔海鲜名菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鱼薯条（Fish and chips，Fremantle 渔港老店）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "澳洲肉派（Meat pie）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "袋鼠肉（Kangaroo，西澳餐厅与超市常见）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "拉明顿蛋糕（Lamington）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1508766512815-9f92f8d2e9e9?w=1200&q=85",
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
      "紫外线强",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "阿德莱德艺术节（Adelaide Festival）",
        "month": "通常3月",
        "description": "澳洲重要综合艺术节，同期举办作家周与视觉艺术展"
      },
      {
        "name": "阿德莱德边缘艺术节（Adelaide Fringe）",
        "month": "通常2月中旬至3月中旬",
        "description": "南半球最大的 Fringe 艺术节，全城数千场小剧场与街头表演"
      },
      {
        "name": "沃玛代拉世界音乐节（WOMADelaide）",
        "month": "通常3月",
        "description": "在植物园举办的世界音乐节，露营区与多舞台演出持续数天"
      },
      {
        "name": "环澳自行车赛（Tour Down Under）",
        "month": "通常1月",
        "description": "国际自行车联盟世界巡回赛开幕站，起点与赛段绕阿德莱德与周边产区"
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
        "name": "阿德莱德中央市场（Adelaide Central Market）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "南澳州立图书馆莫特洛克阅览室（State Library of South Australia, Mortlock Wing）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿德莱德植物园（Adelaide Botanic Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "格雷尔海滩（Glenelg Beach，复古有轨电车直达）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "南澳博物馆（South Australian Museum，原住民藏品）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "芭萝莎谷酒乡（Barossa Valley，城东北近郊酒庄区）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "希腊式烤肉卷（Yiros，阿德莱德街边烤肉店名物，配蒜酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "肉派漂浮汤（Pie floater，肉派浸豌豆汤，南澳经典夜宵）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "青蛙蛋糕（Frog cake，南澳标志性的海绵小蛋糕）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "艾尔半岛生蚝（Coffin Bay Oyster，南澳海鲜名产）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "汉多夫德国村香肠猪肘（Hahndorf 德式餐，阿德莱德山近郊）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=1200&q=85",
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
      "野生动物",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "奥克兰艺术节（Auckland Arts Festival）",
        "month": "通常3月",
        "description": "涵盖毛利与太平洋岛国艺术的综合性艺术节，场馆分布在市中心、奥克兰码头一带与阿尔伯特公园临时场地"
      },
      {
        "name": "奥克兰灯节（Auckland Lantern Festival）",
        "month": "农历正月期间，多为2月",
        "description": "规模盛大的免费灯笼嘉年华，多在南区 Manukau 场地举办，含灯组、舞狮与小吃摊"
      },
      {
        "name": "奥克兰排灯节（Diwali Festival）",
        "month": "通常10月下旬至11月上旬",
        "description": "免费家庭活动，以灯光装饰、印度舞蹈与街头美食为主，规模居全国前列"
      },
      {
        "name": "新西兰国际电影节（NZIFF Auckland）",
        "month": "通常7—8月",
        "description": "全国巡回首站设在奥克兰，放映数百部本国与国际新片"
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
        "name": "天空塔（Sky Tower）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "一树山与康沃尔公园（Maungakiekie / One Tree Hill and Cornwall Park）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊登山火山口（Mount Eden / Maungawhau）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "奥克兰战争纪念博物馆（Auckland War Memorial Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "怀希基岛（Waiheke Island，酒庄与海滩，需乘渡轮）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "使命湾（Mission Bay，怀特玛塔港海滨）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "绿唇贻贝（Green-lipped mussels，白酒奶油煮）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "新西兰烤羊排（Lamb）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "帕夫洛娃（Pavlova，蛋白霜奶油水果蛋糕）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "炸鱼薯条（Fish and chips，使命湾海滨店）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "霍基波基冰淇淋（Hokey Pokey，新西兰国民口味）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=85",
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
      "野生动物",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "新西兰国际电影节（NZIFF Wellington）",
        "month": "通常7—8月",
        "description": "电影节的首映城市， Embassy 剧院等老牌影院连映新片与特别单元"
      },
      {
        "name": "古巴杜帕街头艺术节（CubaDupa）",
        "month": "通常3月",
        "description": "以古巴街为中心的免费户外艺术嘉年华，狂欢式巡演、装置与街头舞台"
      },
      {
        "name": "盘中惠灵顿美食节（Wellington on a Plate）",
        "month": "通常8月",
        "description": "餐馆推出限定套餐与低价试吃菜单，配合品酒讲座与快闪餐饮活动"
      },
      {
        "name": "新西兰艺术节（NZ Festival）",
        "month": "多数为双数年2—3月",
        "description": "以惠灵顿为主场的国家级艺术节，国际剧目、舞蹈与原住民作品集中上演"
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
        "name": "新西兰国家博物馆蒂帕帕（Te Papa Tongarewa）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "惠灵顿缆车与植物园（Wellington Cable Car / Botanic Garden）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "新西兰议会建筑群“蜂巢”（Beehive / Parliament Buildings）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维塔工作室（Weta Workshop，《指环王》《阿凡达》特效工作室，Miramar）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "古巴街与考特尼广场（Cuba Street / Courtenay Place）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "维多利亚山观景台（Mount Victoria Lookout）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "绿唇贻贝（Green-lipped mussels）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "新西兰烤羊排（Lamb）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "新西兰肉派（Mince and cheese pie / steak pie）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "帕夫洛娃（Pavlova）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "澳白咖啡（Flat white，惠灵顿咖啡馆文化的招牌）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85",
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
      "野生动物",
      "紫外线极强，需高倍防晒与持续补水",
      "海岸暗流与海洋生物（箱水母、鲨鱼）需警惕"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "基督城艺术节（Christchurch Arts Festival）",
        "month": "多在下半年（近年为8—10月）",
        "description": "市内主要的综合艺术节，含剧场、音乐、视觉展与免费公共装置，出发前需确认当年日期"
      },
      {
        "name": "新西兰杯与农展周（New Zealand Cup & Show Week）",
        "month": "通常11月",
        "description": "坎特伯雷的传统农展与赛马周，含农畜评比、嘉年华与利卡顿赛马日的赛事"
      },
      {
        "name": "毛利新年（Matariki）",
        "month": "通常6—7月",
        "description": "以昴星团升起为标志的新西兰公共假日，市内有灯光装置、音乐会与观星活动"
      },
      {
        "name": "新西兰国际电影节（NZIFF Christchurch）",
        "month": "通常7—8月",
        "description": "全国巡回至基督城的场次，放映当年精选影片与短片单元"
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
        "name": "基督城植物园与雅芳河撑船（Christchurch Botanic Gardens / Punting on the Avon）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "过渡教堂“纸教堂”（Transitional Cathedral / Cardboard Cathedral）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "坎特伯雷博物馆（Canterbury Museum）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国际南极中心（International Antarctic Centre）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "新摄政街（New Regent Street，复古有轨电车街）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "基督城缆车与港口山观景（Christchurch Gondola / Port Hills）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "坎特伯雷烤羊肉（Canterbury lamb）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "绿唇贻贝（Green-lipped mussels）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "白银鱼煎饼（Whitebait fritters，新西兰季节性名菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "霍基波基冰淇淋（Hokey Pokey ice cream）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "帕夫洛娃（Pavlova）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
    "image": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=1200&q=85",
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
      "医疗费用高",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度",
      "交通混行普遍，过马路与乘车格外谨慎"
    ],
    "emergency": {
      "police": "112",
      "ambulance": "112",
      "fire": "112"
    },
    "festivals": [
      {
        "name": "花环节（Lei Day）",
        "month": "5月1日",
        "description": "夏威夷传统五月花环节，在威基基与市中心有花环制作比赛与草裙舞表演。"
      },
      {
        "name": "洛特王子草裙舞节（Prince Lot Hula Festival）",
        "month": "7月",
        "description": "在莫阿纳鲁亚花园举行的免费草裙舞盛会，展示传统哈拉乌舞蹈与手工艺。"
      },
      {
        "name": "阿罗哈节（Aloha Festivals）",
        "month": "9月",
        "description": "夏威夷规模最大的文化庆典，包含花车游行、草裙舞比赛与街区宴会。"
      },
      {
        "name": "檀香山马拉松（Honolulu Marathon）",
        "month": "12月第二个周日",
        "description": "赛道经过钻石头山与威基基，海外参赛者众多，当日部分沿海道路封闭。"
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
        "name": "威基基海滩（Waikīkī Beach）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "钻石头山火山口步道（Diamond Head）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "珍珠港亚利桑那号纪念馆（Pearl Harbor）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊欧拉尼王宫（ʻIolani Palace）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "恐龙湾自然保护区（Hanauma Bay）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "努阿努帕里观景台（Nuʻuanu Pali Lookout）",
        "category": "景点",
        "description": ""
      }
    ],
    "food": [
      {
        "name": "夏威夷生鱼拌饭（Poke）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "卡卢阿烤猪（Kālua Pig，传统卢奥宴主菜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "洛可摩可（Loco Moco，米饭汉堡排配蛋）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "夏威夷刨冰（Shave Ice）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "夏威夷盘餐（Plate Lunch，两勺米饭配主菜）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "保持安静和礼貌",
      "尊重当地文化和习俗",
      "公共场合保持礼貌",
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
  "dakar": {
    "id": "dakar",
    "name": "达喀尔",
    "nameEn": "Dakar",
    "country": "塞内加尔",
    "continent": "非洲",
    "flag": "🇸🇳",
    "lat": 14.7167,
    "lng": -17.4677,
    "image": "https://images.unsplash.com/photo-1621862681248-c891542db4d7?w=1200&q=85",
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
      "(旱季)沙尘",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）"
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
      },
      {
        "name": "开斋节（Korité / Aïd el-Fitr）",
        "month": "伊斯兰历10月1日（每年浮动，2026年约在3月）",
        "description": "斋月结束的全国性重大节日，达喀尔全城清真寺礼拜、家庭聚餐与海滨集会。"
      },
      {
        "name": "阿舒拉节（Tamkharit / Achoura）",
        "month": "伊斯兰历1月10日（每年浮动）",
        "description": "塞内加尔特有称呼的阿舒拉节，达喀尔家庭互赠小米粉等食品、通宵集会。"
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
      },
      {
        "name": "玫瑰湖（Retba 粉红湖）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "马默莱灯塔（Phare des Mamelles，非洲大陆最西端的火山丘灯塔）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "恩戈尔岛与恩戈尔海滩（Île de Ngor，离岸小岛与冲浪海滩）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Mafé（花生酱炖羊肉/牛肉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Pastels（塞内加尔炸鱼/肉馅角饼）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "见面贴面礼常见",
      "进入清真寺需脱鞋并着装保守",
      "周日多数商铺休息",
      "砍价是市场常态",
      "见面多次握手、寒暄后再谈正事",
      "进入清真寺与民宅须脱鞋",
      "部分地区忌用左手递物或进食"
    ],
    "tips": [
      "沿海地区注意防晒与补水",
      "使用瓶装水",
      "夜间减少步行",
      "保留护照复印件",
      "入境前查询疫苗与黄皮书要求"
    ],
    "lifestyle": {
      "food": [
        "Thieboudienne（国菜：番茄番茄酱炖鱼配饭）",
        "Yassa（洋葱柠檬炖鸡/鱼）",
        "Maafe（花生炖肉）",
        "Pastels（炸鱼饼）",
        "Bissap（木槿花饮）"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1785095617583-e408f4b451ca?w=1200&q=85",
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
      "路况复杂",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）"
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
      },
      {
        "name": "Popo 狂欢节",
        "month": "2月",
        "description": "Grand-Bassam 海滨城市的街头狂欢"
      },
      {
        "name": "阿努马博都市音乐节（FEMUA — Festival des Musiques Urbaines d'Anoumabo）",
        "month": "4月",
        "description": "由乐队 Magic System 在阿比让 Marcory 区 Anoumabo 创办的非洲都市音乐节。"
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
      },
      {
        "name": "Plateau 中心商务区",
        "category": "景点",
        "description": ""
      },
      {
        "name": "科特迪瓦文明博物馆（Musée des Civilisations de Côte d'Ivoire）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "特雷什维尔市场（Marché de Treichville）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Alloco（炸大蕉配辣椒酱）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Foutou（捣制山药/大蕉团配酱汁）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "见面握手并问候家人",
      "法语为主要通用语",
      "请客时礼貌推辞后再接受",
      "周日部分区域安静",
      "见面握手寒暄、称呼长辈",
      "尊重宗教与长者，着装保守",
      "部分地区忌用左手递物或进食"
    ],
    "tips": [
      "黄热病疫苗为入境强制要求",
      "防蚊防疟",
      "避免饮用生水",
      "夜间减少外出",
      "入境前查询疫苗与黄皮书要求"
    ],
    "lifestyle": {
      "food": [
        "Attiéké（木薯粗粉，国民主食）",
        "Kedjenou（慢炖鸡肉/肉）",
        "Alloco（炸大蕉）",
        "Garba（金枪鱼配 attiéké）",
        "Foutou（捣碎大蕉）"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1675756261486-09bd1e0f6c8a?w=1200&q=85",
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
      "路况与照明",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）"
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
      },
      {
        "name": "坎帕拉城市节",
        "month": "10月",
        "description": "市中心游行、音乐与美食活动"
      },
      {
        "name": "Nyege Nyege 音乐节",
        "month": "9月",
        "description": "东非电子与当代音乐盛会（邻近 Jinja）"
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
        "name": "卡苏比王陵（Kasubi Tombs）",
        "category": "世界遗产",
        "description": "布干达王室陵墓，联合国教科文组织世界文化遗产"
      },
      {
        "name": "赤道纪念碑",
        "category": "地标",
        "description": "可拍照的赤道标记点"
      },
      {
        "name": "乌干达博物馆",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴哈伊神庙（非洲唯一）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "乌干达国家清真寺（Uganda National Mosque，老坎帕拉山，可登塔俯瞰全城）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "纳米伦贝大教堂（Namirembe Cathedral）",
        "category": "宗教建筑",
        "description": "乌干达最古老的新教大教堂，位于山顶可俯瞰坎帕拉"
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
      },
      {
        "name": "Posho（玉米糊）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Luwombo（香蕉叶包裹蒸制的鸡肉/牛肉）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "见面多次握手并问候",
      "英语与卢干达语通用",
      "拍照前先征得同意",
      "小费非强制但受欢迎",
      "见面握手并寒暄健康状况",
      "尊重长者、称呼长辈",
      "部分地区忌用左手递物或进食"
    ],
    "tips": [
      "防蚊防疟必备",
      "饮用瓶装水",
      "夜间拼车更安全",
      "保留证件复印件",
      "入境前查询疫苗与黄皮书要求"
    ],
    "lifestyle": {
      "food": [
        "Matoke（蒸香蕉，国菜）",
        "Posho（玉米糊）",
        "Rolex（鸡蛋卷薄饼，街头小吃）",
        "Luwombo（蕉叶炖肉）",
        "Nyama choma（烤肉）"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1721012970985-3ca71fe3877c?w=1200&q=85",
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
      "夜间安全",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）"
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
      },
      {
        "name": "哈拉雷农业展（Zimbabwe Agricultural Show）",
        "month": "8月底至9月初",
        "description": "津巴布韦最大农业与商业展览，在哈拉雷 Exhibition Park 举办，含集市与娱乐活动。"
      },
      {
        "name": "Shoko 节（Shoko Festival）",
        "month": "9月",
        "description": "津巴布韦最大的口语诗歌、喜剧与音乐节，在哈拉雷多个场馆举行。"
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
      },
      {
        "name": "津巴布韦人类科学博物馆",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国家英雄纪念地",
        "category": "景点",
        "description": ""
      },
      {
        "name": "津巴布韦国家美术馆（National Gallery of Zimbabwe）",
        "category": "文化",
        "description": "展示津巴布韦现代艺术与石雕"
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
      },
      {
        "name": "Nyama choma（烤肉）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Kapenta（炸/炖卡里巴湖小鱼干）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "英语为官方语言",
      "见面握手并问候",
      "小费约10%",
      "商务需提前预约",
      "礼貌问候、称呼长辈",
      "着装得体、尊重宗教场所",
      "部分地区忌用左手递物或进食"
    ],
    "tips": [
      "备足美元现金零钱",
      "关注汇率与物价",
      "避免夜间步行",
      "饮用瓶装水",
      "入境前查询疫苗与黄皮书要求"
    ],
    "lifestyle": {
      "food": [
        "Sadza（玉米糊主食）",
        "Nyama choma（烤肉）",
        "Mopane 虫（干炸毛毛虫，特色）",
        "Dovi（花生炖菜）",
        "Maheu（发酵谷物饮）"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1643580018337-5af73fe3c21a?w=1200&q=85",
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
      "夜间照明不足",
      "部分国家疟疾/登革热风险，做好防蚊与药物预防（遵医嘱）"
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
      },
      {
        "name": "Kulamba 成年礼",
        "month": "8月",
        "description": "Chewa 族盛大成年庆典（邻近 Katete）"
      },
      {
        "name": "Kuomboka 洪水节",
        "month": "3-4月",
        "description": "Barotse 酋长雨季迁宫的传统仪式"
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
      },
      {
        "name": "Kabwata 文化村",
        "category": "景点",
        "description": ""
      },
      {
        "name": "蒙达万加环境公园（Munda Wanga Environmental Park，植物园兼野生动物救助中心）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡布瓦塔文化村（Kabwata Cultural Village，手工艺作坊群）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Ifisashi（蔬菜花生炖）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Kapenta（炸湖小鱼干）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "英语为官方语言",
      "见面握手并问候",
      "拍照先征得同意",
      "市场可议价",
      "见面问候、尊重长者",
      "着装得体、宗教场所保守",
      "部分地区忌用左手递物或进食"
    ],
    "tips": [
      "防蚊防疟",
      "饮用瓶装水",
      "夜间减少步行",
      "备小额现金",
      "入境前查询疫苗与黄皮书要求"
    ],
    "lifestyle": {
      "food": [
        "Nshima（玉米糊主食）",
        "Ifisashi（蔬菜花生炖）",
        "Kapenta（小干鱼）",
        "Chikanda（兰花肉冻点心）",
        "坦噶尼喀湖鲫鱼"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1589825513188-72edada388d8?w=1200&q=85",
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
      "区域局势波动",
      "夏季极端高温，户外需防中暑与脱水"
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
      },
      {
        "name": "安曼爵士音乐节",
        "month": "全年",
        "description": "本地与国际爵士演出"
      },
      {
        "name": "安曼国际电影节（Amman International Film Festival – Awal Film）",
        "month": "7—8月",
        "description": "以阿拉伯处女作为主的电影节，在安曼的影院与文化中心展映。"
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
      },
      {
        "name": "罗马剧场",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿卜杜拉国王一世清真寺（King Abdullah I Mosque，蓝色穹顶）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "约旦博物馆（The Jordan Museum，藏有死海古卷相关展品）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Maqluba（翻转锅饭，肉与茄子/花椰菜米饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Falafel 配鹰嘴豆泥（法拉费与 Hummus）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "见面贴面礼与咖啡待客",
      "斋月白天公共场所饮食需谨慎",
      "周五为周休主日",
      "议价是常态",
      "见面握手并道 As-salamu alaykum",
      "宗教场所脱鞋、着装保守",
      "进入清真寺需脱鞋、着装保守"
    ],
    "tips": [
      "自来水建议烧开",
      "夏季防晒补水",
      "尊重宗教习俗",
      "保留护照复印件",
      "女性建议携带围巾以备进入宗教场所"
    ],
    "lifestyle": {
      "food": [
        "Mansaf（羊肉酸奶饭，国菜）",
        "Falafel",
        "Hummus",
        "Maqluba（倒锅饭）",
        "Knafeh（奶酪甜点）"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1558634742-56096b49522b?w=1200&q=85",
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
      "油价相关拥堵",
      "夏季极端高温，户外需防中暑与脱水"
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
      },
      {
        "name": "Hala February 二月节",
        "month": "2月",
        "description": "购物与文化嘉年华"
      },
      {
        "name": "国庆日",
        "month": "2月25日",
        "description": "全国庆典"
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
      },
      {
        "name": "Mubarakiya 老市集",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿尔沙希德公园（Al Shaheed Park，市区最大城市公园）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "穆巴拉基亚老市场（Souq Al-Mubarakiya，石油时代前的老集市）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "烤石斑鱼 Hamour（海湾石斑鱼碳烤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Harees（小麦与肉慢熬的咸粥）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "斋月白天公共饮食需克制",
      "周五主休",
      "待客慷慨",
      "着装保守得体",
      "着装保守、尊重宗教",
      "见面握手问候",
      "进入清真寺需脱鞋、着装保守"
    ],
    "tips": [
      "夏季避免正午户外",
      "沙尘天戴口罩",
      "自来水可饮但偏咸",
      "备现金",
      "女性建议携带围巾以备进入宗教场所"
    ],
    "lifestyle": {
      "food": [
        "Machboos（香料饭配肉，国菜）",
        "Mutabbaq samak（炸鱼）",
        "Harees（小麦肉糜）",
        "Gabout（填料酥皮）",
        "Kunafa"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1603565095944-2a6f33bb517c?w=1200&q=85",
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
      "跨文化交流",
      "夏季极端高温，户外需防中暑与脱水"
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
      },
      {
        "name": "阿布扎比电影节",
        "month": "全年",
        "description": "中东重要电影展"
      },
      {
        "name": "阿布扎比国际书展（Abu Dhabi International Book Fair）",
        "month": "4月",
        "description": "在 ADNEC 举办的大型国际书展，有大量阿拉伯语出版与文化活动。"
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
      },
      {
        "name": "阿布扎比卢浮宫",
        "category": "景点",
        "description": ""
      },
      {
        "name": "酋长宫酒店",
        "category": "景点",
        "description": ""
      },
      {
        "name": "卡斯尔·瓦坦总统府（Qasr Al Watan，可参观的国事宫）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Al Harees（小麦肉糜）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "阿拉伯烤羊与沙威玛（Shawarma）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "斋月白天公共饮食需克制",
      "着装保守",
      "周五主休",
      "公共场合举止得体",
      "着装保守、公共场合得体",
      "公共场合避免亲密举止",
      "进入清真寺需脱鞋、着装保守"
    ],
    "tips": [
      "夏季气温超45°C避免户外",
      "尊重宗教与性别规范",
      "自来水可饮",
      "备现金小额",
      "女性建议携带围巾以备进入宗教场所"
    ],
    "lifestyle": {
      "food": [
        "Al Harees（小麦肉糜）",
        "Machboos",
        "Shawarma",
        "Luqaimat（甜炸球）",
        "骆驼肉料理"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1748066768504-99532da7d1e9?w=1200&q=85",
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
      "周五人流",
      "夏季极端高温，户外需防中暑与脱水"
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
      },
      {
        "name": "巴林 F1 大奖赛",
        "month": "3-4月",
        "description": "Sakhir 赛道年度赛事"
      },
      {
        "name": "文化之春 Spring of Culture",
        "month": "10-12月",
        "description": "音乐会与国际演出季"
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
      },
      {
        "name": "Al-Fateh 大清真寺",
        "category": "景点",
        "description": ""
      },
      {
        "name": "法提赫大清真寺（Al-Fateh Grand Mosque，世界最大玻璃钢穹顶之一）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "巴林门与老集市（Bab Al Bahrain 及黄金市场）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Muhammar（甜米饭）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Halwa Bahraini（巴林藏红花坚果哈尔瓦软糖）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "斋月白天克制饮食",
      "周五主休",
      "待客热情",
      "着装保守",
      "着装保守、尊重宗教",
      "进清真寺脱鞋",
      "进入清真寺需脱鞋、着装保守"
    ],
    "tips": [
      "夏季避免正午户外",
      "沙尘天防护",
      "自来水可饮",
      "备现金",
      "女性建议携带围巾以备进入宗教场所"
    ],
    "lifestyle": {
      "food": [
        "Machboos（巴林香料饭）",
        "Muhammar（甜米饭）",
        "Kebab",
        "Harees",
        "巴林 Halwa 甜点"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1582761370596-77a6a42350d7?w=1200&q=85",
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
      "偶发抢劫",
      "紫外线极强，需高倍防晒与持续补水"
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
      },
      {
        "name": "黄金海岸电影节",
        "month": "4月",
        "description": "本地与国际独立影展"
      },
      {
        "name": "Broadbeach 蓝调节",
        "month": "5月",
        "description": "海滨免费蓝调音乐节"
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
      },
      {
        "name": "主题乐园（梦幻世界/电影世界/海洋世界）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Burleigh Heads",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Q1 大厦天空观景台（SkyPoint Observation Deck，77 层）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "炸鱼薯条",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "莫顿湾螯虾（Moreton Bay bug，炭烤或蒜香煎）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "小费非强制",
      "公共场所礼貌排队",
      "海滩注意旗语（安全游泳区）",
      "直呼其名较随意",
      "随和友好、'no worries' 心态",
      "小费非必须",
      "原住民圣地勿随意进入或拍照"
    ],
    "tips": [
      "严格遵守海滩旗语防溺",
      "防晒补水",
      "野生动物勿靠近",
      "紧急统一拨000",
      "自驾靠左行驶，熟悉交规再上路"
    ],
    "lifestyle": {
      "food": [
        "肉派 Meat pie",
        "炸鱼薯条",
        "Lamington 椰子蛋糕",
        "Barramundi 鱼",
        "海鲜拼盘"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1676406912249-8bdefd0a706d?w=1200&q=85",
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
      "蚊虫",
      "紫外线极强，需高倍防晒与持续补水"
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
      },
      {
        "name": "凯恩斯节 Cairns Festival",
        "month": "8月",
        "description": "音乐、艺术与社区活动月"
      },
      {
        "name": "凯恩斯铁人赛",
        "month": "6月",
        "description": "闻名的三铁赛事"
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
      },
      {
        "name": "戴恩树雨林",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Kuranda 观光火车",
        "category": "景点",
        "description": ""
      },
      {
        "name": "库兰达观光火车与 Skyrail 热带雨林缆车（Kuranda Scenic Railway / Skyrail）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Barramundi 鱼",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "芒果",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "小费非强制",
      "尊重原住民文化",
      "海滩旗语",
      "随意直率",
      "海滩在旗帜间游泳",
      "强烈紫外线需高倍防晒",
      "原住民圣地勿随意进入或拍照"
    ],
    "tips": [
      "夏季远离箱水母区",
      "防晒防蚊",
      "浮潜注意安全",
      "紧急拨000",
      "自驾靠左行驶，熟悉交规再上路"
    ],
    "lifestyle": {
      "food": [
        "Barramundi 鱼",
        "芒果",
        "海鲜拼盘",
        "袋鼠/鳄鱼肉",
        "Lamington"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1674897413368-11705695cf4d?w=1200&q=85",
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
      "海鲜价高",
      "紫外线极强，需高倍防晒与持续补水"
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
      },
      {
        "name": "塔斯马尼亚味觉节",
        "month": "12-1月",
        "description": "全州美食美酒盛宴"
      },
      {
        "name": "澳大利亚木舟节（Australian Wooden Boat Festival）",
        "month": "2月（每两年一届，奇数年）",
        "description": "霍巴特海滨举办的世界知名木质帆船盛会，展出传统木船与航海文化。"
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
      },
      {
        "name": "Salamanca 集市",
        "category": "景点",
        "description": ""
      },
      {
        "name": "MONA 古今艺术博物馆",
        "category": "景点",
        "description": ""
      },
      {
        "name": "炮台角历史街区（Battery Point）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "塔斯马尼亚三文鱼",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "干贝派（Scallop pie，萨拉曼卡市集名物）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "小费非强制",
      "环保分袋严格",
      "随意友好",
      "周末市场文化",
      "随和、小费非必须",
      "天气多变需分层穿衣",
      "原住民圣地勿随意进入或拍照"
    ],
    "tips": [
      "冬季保暖",
      "野火季关注预警",
      "自驾小心野生动物",
      "紧急拨000",
      "自驾靠左行驶，熟悉交规再上路"
    ],
    "lifestyle": {
      "food": [
        "塔斯马尼亚三文鱼",
        "生蚝",
        "Leatherwood 蜂蜜",
        "袋鼠肉",
        "手工奶酪（Bruny）"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1593742553188-65c60dcd8737?w=1200&q=85",
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
      "交通拥堵",
      "扒手与抢手机高发，财物贴身保管"
    ],
    "emergency": {
      "police": "911",
      "ambulance": "911",
      "fire": "911"
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
      },
      {
        "name": "狂欢节 Carnaval",
        "month": "2-3月",
        "description": "全国泼水与游行"
      },
      {
        "name": "基多建城节（Fiestas de Quito）",
        "month": "12月6日前后",
        "description": "纪念1534年建城，含 Chivas 彩车大游行、街头演出与音乐会。"
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
      },
      {
        "name": "旧城区（历史中心，UNESCO）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Basílica del Voto Nacional 大教堂",
        "category": "景点",
        "description": ""
      },
      {
        "name": "TelefériQo 缆车（登皮钦查火山 4,050 米观景台）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Locro de papa（土豆奶酪汤配牛油果）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Hornado（整只慢烤乳猪）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "见面贴面礼",
      "西语为主",
      "小费约10%",
      "市场可议价",
      "见面贴面礼问候",
      "着装得体、宗教场所保守",
      "小费文化普遍（餐厅约10%）"
    ],
    "tips": [
      "防高反慢动作",
      "防扒窃",
      "饮用瓶装水",
      "夜间少步行",
      "打车用 Uber/DiDi 等可追踪平台"
    ],
    "lifestyle": {
      "food": [
        "Cuy（高原烤豚鼠）",
        "Llapingacho（土豆饼）",
        "Ceviche 酸橘汁腌鱼",
        "Locro de papa（土豆汤）",
        "Empanadas de viento"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1699385602094-4c5a017c64a5?w=1200&q=85",
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
      "暴雨季",
      "扒手与抢手机高发，财物贴身保管"
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
      },
      {
        "name": "Palmares 节",
        "month": "1月",
        "description": "两周音乐与牛仔竞技"
      },
      {
        "name": "灯光节（Festival de la Luz）",
        "month": "12月中旬",
        "description": "圣何塞市中心的大型圣诞灯光花车游行，是哥斯达黎加年末最重要的街头节庆。"
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
      },
      {
        "name": "哥斯达黎加国家博物馆（Museo Nacional，旧贝亚维斯塔兵营）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "阿蒙街区（Barrio Amón，咖啡大亨老宅街区）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "玉博物馆（Museo del Jade）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Olla de carne（牛肉与根茎蔬菜炖汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Ceviche（柑橘汁腌鱼配香菜洋葱）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "西班牙语",
      "见面握手",
      "小费约10%",
      "环保意识强",
      "'pura vida' 问候",
      "礼貌、着装得体",
      "小费文化普遍（餐厅约10%）"
    ],
    "tips": [
      "防扒窃",
      "饮用瓶装水",
      "暴雨季注意路况",
      "夜归拼车",
      "打车用 Uber/DiDi 等可追踪平台"
    ],
    "lifestyle": {
      "food": [
        "Gallo pinto（豆饭，国菜）",
        "Casado（套餐）",
        "Olla de carne（牛骨汤）",
        "Tamales",
        "Chifrijo"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?w=1200&q=85",
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
      "网络不便",
      "扒手与抢手机高发，财物贴身保管"
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
      },
      {
        "name": "哈瓦那狂欢节",
        "month": "7-8月",
        "description": "街头游行与音乐"
      },
      {
        "name": "国际爵士音乐节",
        "month": "12月",
        "description": "世界级爵士演出"
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
      },
      {
        "name": "旧哈瓦那 Habana Vieja（UNESCO）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Malecón 海滨大道",
        "category": "景点",
        "description": ""
      },
      {
        "name": "国会大厦 Capitolio",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Arroz con pollo",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Moros y cristianos（黑豆饭）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "西班牙语",
      "音乐与舞蹈文化",
      "小费受欢迎",
      "拍照先征得同意",
      "见面贴面礼问候",
      "餐厅可给小费",
      "小费文化普遍（餐厅约10%）"
    ],
    "tips": [
      "使用正规换汇（Cadeca）",
      "防扒窃",
      "网络需购买上网卡",
      "备小额现金",
      "打车用 Uber/DiDi 等可追踪平台"
    ],
    "lifestyle": {
      "food": [
        "Ropa vieja（撕碎牛肉）",
        "Arroz con pollo",
        "Moros y cristianos（豆饭）",
        "Tostones（炸大蕉）",
        "Cubano 三明治"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1649180436242-aeb0b92a4aab?w=1200&q=85",
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
      "物价中等",
      "扒手与抢手机高发，财物贴身保管"
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
      },
      {
        "name": "Curitiba 夏季节",
        "month": "1月",
        "description": "免费户外音乐与演出"
      },
      {
        "name": "圣诞灯饰",
        "month": "11-1月",
        "description": "市中心大规模灯饰与活动"
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
      },
      {
        "name": "Tanguá 公园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Wire Opera 钢丝绳歌剧院",
        "category": "景点",
        "description": ""
      },
      {
        "name": "坦瓜公园（Parque Tanguá，瀑布、隧道与观景台）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Carne de onça（黑麦面包上的生牛肉酱，库里蒂巴名物）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Pinhão（南洋杉种子，冬季煮食或入菜）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "葡萄牙语",
      "小费10%左右",
      "见面贴面礼",
      "足球文化浓厚",
      "见面贴面礼问候",
      "宗教场所着装得体",
      "小费文化普遍（餐厅约10%）"
    ],
    "tips": [
      "公交系统高效多用BRT",
      "防扒窃",
      "冬季保暖",
      "紧急分别拨190/192/193",
      "打车用 Uber/DiDi 等可追踪平台"
    ],
    "lifestyle": {
      "food": [
        "Barreado（慢炖牛肉）",
        "Pão de queijo（芝士面包）",
        "Feijoada 黑豆炖肉",
        "Coxinha 炸饺",
        "Churrasco 烤肉"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1586974325246-05d48d665f24?w=1200&q=85",
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
      "夜间安全",
      "医疗费用昂贵，务必购买旅行医疗险"
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
      },
      {
        "name": "爵士与传统音乐节",
        "month": "4-5月",
        "description": "世界级音乐盛事"
      },
      {
        "name": "狂欢节 Mardi Gras（2/3月）",
        "month": "全年",
        "description": ""
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
      },
      {
        "name": "Bourbon 街",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Garden District",
        "category": "景点",
        "description": ""
      },
      {
        "name": "花园区（Garden District，19 世纪豪宅与橡树街）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Jambalaya 什锦饭",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Muffuletta（意大利冷切与橄榄酱大三明治）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "小费15-20%",
      "见面直接称呼名",
      "节庆文化浓",
      "多元包容",
      "友好随和的'y'all'",
      "音乐文化尊重",
      "服务行业小费是惯例而非可选"
    ],
    "tips": [
      "夜间结伴",
      "关注飓风季预警",
      "高温补水",
      "紧急拨911",
      "紧急统一拨 911（警/救/火）"
    ],
    "lifestyle": {
      "food": [
        "Gumbo 秋葵汤",
        "Jambalaya 什锦饭",
        "Po'boy 三明治",
        "Beignets 糖粉甜甜圈",
        "Crawfish étouffée"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1561063139-e183e66909c4?w=1200&q=85",
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
      "高温",
      "医疗费用昂贵，务必购买旅行医疗险"
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
      },
      {
        "name": "草莓节",
        "month": "3月",
        "description": "邻近 Plant City 的农业庆典"
      },
      {
        "name": "加勒比狂欢节",
        "month": "全年",
        "description": ""
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
      },
      {
        "name": "Tampa Riverwalk",
        "category": "景点",
        "description": ""
      },
      {
        "name": "伊博城（Ybor City，雪茄工厂历史街区）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "坦帕河滨步道（Tampa Riverwalk）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "魔鬼蟹 deviled crab",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Cubano 古巴三明治（含热那亚萨拉米，坦帕为发源地）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "小费15-20%",
      "直率随意",
      "多元文化",
      "驾车文化",
      "随和休闲",
      "海滩下午雷暴留意",
      "服务行业小费是惯例而非可选"
    ],
    "tips": [
      "午后雷暴带伞",
      "飓风季关注预警",
      "海滩防晒",
      "紧急拨911",
      "紧急统一拨 911（警/救/火）"
    ],
    "lifestyle": {
      "food": [
        "Cuban sandwich 古巴三明治",
        "魔鬼蟹 deviled crab",
        "石蟹钳",
        "Key lime pie 青柠派",
        "Grouper 鱼三明治"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1528991191763-275f9418709f?w=1200&q=85",
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
      "暴风雪",
      "医疗费用昂贵，务必购买旅行医疗险"
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
      },
      {
        "name": "双城马拉松",
        "month": "10月",
        "description": "闻名全美的城市马拉松"
      },
      {
        "name": "双城骄傲节（Twin Cities Pride）",
        "month": "6月",
        "description": "以明尼阿波利斯 Loring Park 为中心的 LGBTQ+ 节庆，含游行与露天演出。"
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
      },
      {
        "name": "Minnehaha 瀑布",
        "category": "景点",
        "description": ""
      },
      {
        "name": "Walker 艺术中心与雕塑园",
        "category": "景点",
        "description": ""
      },
      {
        "name": "古斯里剧院（Guthrie Theater，密西西比河畔的剧场与观景平台）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "Juicy Lucy 芝士爆浆汉堡",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "Jucy Lucy（芝士夹心汉堡，Matt's Bar 与 5-8 Club 争起源）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "小费15-20%",
      "友善但保持距离",
      "冬季装备必备",
      "湖畔文化",
      "'Minnesota nice' 礼貌",
      "冬季极寒需保暖着装",
      "服务行业小费是惯例而非可选"
    ],
    "tips": [
      "冬季防寒-20°C常见",
      "冰雪天慢行",
      "紧急拨911",
      "室内暖气足",
      "紧急统一拨 911（警/救/火）"
    ],
    "lifestyle": {
      "food": [
        "Juicy Lucy 芝士爆浆汉堡",
        "Hotdish 砂锅炖菜",
        "Walleye 鱼",
        "野米汤",
        "Tater tot hotdish"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1676107982922-f942bab11de6?w=1200&q=85",
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
      "麻辣肠胃",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度"
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
      },
      {
        "name": "三峡国际旅游节",
        "month": "全年",
        "description": "长江三峡文化与旅游盛事"
      },
      {
        "name": "重庆国际啤酒节",
        "month": "夏季",
        "description": "夏日啤酒与音乐活动"
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
      },
      {
        "name": "解放碑",
        "category": "景点",
        "description": ""
      },
      {
        "name": "武隆天生三桥（世界自然遗产喀斯特天坑）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大足石刻（世界文化遗产摩崖石刻）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "歌乐山辣子鸡（辣椒堆里找鸡丁）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "毛血旺（鸭血毛肚麻辣锅）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "微信支付宝普及",
      "小费不流行",
      "方言与普通话并存",
      "热情直率",
      "麻辣饮食文化盛行",
      "火锅是重要社交方式",
      "进寺庙脱鞋、着装遮盖肩腿"
    ],
    "tips": [
      "备肠胃药应对麻辣",
      "导航注意高低差",
      "防暑补水",
      "紧急拨110/120/119",
      "下载离线地图与翻译App应对语言障碍"
    ],
    "lifestyle": {
      "food": [
        "重庆火锅（麻辣）",
        "重庆小面",
        "辣子鸡",
        "毛血旺",
        "万州烤鱼"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1766990420545-7721c4374597?w=1200&q=85",
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
      "海雾",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度"
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
      },
      {
        "name": "青岛萝卜元宵山会",
        "month": "农历正月初九至十五（通常2月）",
        "description": "市北区传统的萝卜会与元宵山会合并的大型庙会，有民间表演与小吃集市。"
      },
      {
        "name": "海云庵糖球会",
        "month": "农历正月十六（通常2月）",
        "description": "四方海云庵一带的传统庙会，以糖葫芦（糖球）与民间文艺演出著称。"
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
      },
      {
        "name": "五四广场（五月的风雕塑与城市海岸线）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "青岛啤酒博物馆（百年啤酒厂参观与品鉴）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "信号山公园（旋转观景楼俯瞰红瓦绿树）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "辣炒蛤蜊",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "排骨米饭（排骨炖菜配米饭，青岛快餐名物）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "扫码支付普及",
      "小费不流行",
      "海边长者晨练文化",
      "直爽好客",
      "啤酒与海鲜饮食文化",
      "公共场所禁烟",
      "进寺庙脱鞋、着装遮盖肩腿"
    ],
    "tips": [
      "海鲜配啤酒适量",
      "海边注意潮汐与防晒",
      "防扒",
      "紧急拨110/120/119",
      "下载离线地图与翻译App应对语言障碍"
    ],
    "lifestyle": {
      "food": [
        "青岛啤酒",
        "辣炒蛤蜊",
        "鲅鱼水饺",
        "锅贴",
        "海鲜烧烤"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1568427514759-1c282e2215e4?w=1200&q=85",
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
      "海鲜宰客",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度"
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
      },
      {
        "name": "三亚国际马拉松",
        "month": "3月",
        "description": "海滨赛道马拉松"
      },
      {
        "name": "海南岛国际电影节（HIIFF）",
        "month": "12月",
        "description": "以三亚为主会场的国际电影节，含竞赛单元、展映与沙滩放映。"
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
      },
      {
        "name": "南山寺",
        "category": "景点",
        "description": ""
      },
      {
        "name": "南山文化旅游区（108 米海上观音与南山寺）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "大小洞天（海岸山岩与道教文化景区）",
        "category": "景点",
        "description": ""
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
      },
      {
        "name": "海南鸡饭",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "文昌鸡",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "扫码支付普及",
      "小费不流行",
      "度假休闲文化",
      "物价较内地高",
      "海岛度假休闲文化",
      "高倍防晒、注意补水",
      "进寺庙脱鞋、着装遮盖肩腿"
    ],
    "tips": [
      "海鲜先问价再加工",
      "警惕拉客",
      "强日晒防晒",
      "台风季关注预警",
      "下载离线地图与翻译App应对语言障碍"
    ],
    "lifestyle": {
      "food": [
        "海南鸡饭",
        "文昌鸡",
        "椰子鸡火锅",
        "海鲜",
        "清补凉"
      ]
    }
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
    "image": "https://images.unsplash.com/photo-1578724007989-43f1c0f5f3c7?w=1200&q=85",
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
      "扒窃",
      "部分地区饮食卫生差异大，生冷食物注意新鲜度"
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
      },
      {
        "name": "海云台沙节",
        "month": "6月",
        "description": "海滩沙雕与活动"
      },
      {
        "name": "釜山国际烟花节（Busan International Fireworks Festival）",
        "month": "10月",
        "description": "在广安里海滩与广安大桥上空举行的多国烟花汇演，是釜山最大秋季活动。"
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
      },
      {
        "name": "太宗台（影岛南端悬崖与灯塔）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "龙头山公园与釜山塔（市区最高观景点）",
        "category": "景点",
        "description": ""
      },
      {
        "name": "广安里海水浴场（可看广安大桥夜景）",
        "category": "景点",
        "description": ""
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
        "name": "小麦面（밀면，釜山式冷荞麦/小麦凉面）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "釜山鱼糕（어묵，鱼糕串与鱼糕汤）",
        "description": "当地菜",
        "recommendation": ""
      },
      {
        "name": "种子糖饼（씨앗호떡，南浦洞 BIFF 广场名物）",
        "description": "当地菜",
        "recommendation": ""
      }
    ],
    "customs": [
      "韩语与敬语",
      "小费不流行",
      "脱鞋入室",
      "饮酒文化浓",
      "鞠躬问候",
      "进屋脱鞋",
      "进寺庙脱鞋、着装遮盖肩腿"
    ],
    "tips": [
      "地铁T-money卡通用",
      "防台风季",
      "饮酒后注意",
      "紧急拨112/119",
      "下载离线地图与翻译App应对语言障碍"
    ],
    "lifestyle": {
      "food": [
        "札嘎其海鲜",
        "猪肉汤饭 Dwaeji-gukbap",
        "辣炒年糕 Tteokbokki",
        "海鲜煎饼",
        "烤牛肠"
      ]
    }
  }
};
