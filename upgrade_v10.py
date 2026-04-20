#!/usr/bin/env python3
"""SafeCity v10.0 数据修复 - 补充完整emergencyContacts、conflict和吃喝玩乐数据"""

import re
import json

# 完整城市数据 - 替换lifestyle部分
CITY_LIFESTYLE_UPDATES = {

    "new_york": {
        "emergencyContacts": {
            "phoneNumbers": {"police": "911", "ambulance": "911", "fire": "911", "tourist": "311"},
            "hospitals": [
                {"name": "纽约长老会医院 (NewYork-Presbyterian)", "phone": "212-746-5454", "address": "525 E 68th St, New York, NY 10065", "features": ["24H急诊", "英语服务", "顶级心脑血管"], "emergency24h": True},
                {"name": "Bellevue医院", "phone": "212-562-4141", "address": "462 1st Ave, New York, NY 10016", "features": ["24H急诊", "创伤中心", "穷人医保"], "emergency24h": True},
                {"name": "Mount Sinai医院", "phone": "212-241-6500", "address": "1 Gustave L. Levy Pl, New York, NY 10029", "features": ["24H急诊", "癌症中心"], "emergency24h": True}
            ],
            "consulates": [
                {"name": "中国驻纽约总领事馆", "phone": "212-244-9392", "address": "520 12th Ave, New York, NY 10036", "hours": "周一至周五 9:00-12:00", "emergency": False},
                {"name": "驻纽约中国签证申请服务中心", "phone": "212-868-2078", "address": "90 John St, Suite 201, NY 10038", "hours": "周一至周五 9:00-15:00", "emergency": False}
            ],
            "safetyApps": [
                {"name": "Citizen", "icon": "📱", "description": "实时犯罪预警，5英里内危险事件提醒"},
                {"name": "NYC 311", "icon": "📱", "description": "市政府服务热线，噪音投诉、路灯损坏等"}
            ],
            "selfProtection": [
                {"icon": "🔒", "title": "财产安全", "tips": ["地铁/公交上把手机放内侧口袋", "时代广场周边警惕假CD骗局", "唐人街/下东区小心换钱骗局"]},
                {"icon": "🌙", "title": "夜间安全", "tips": ["深夜避免单独在地铁站", "布朗克斯和布鲁克林部分地区避免前往", "中央公园天黑后不要深入"]},
                {"icon": "🚇", "title": "地铁安全", "tips": ["优先选择首尾车厢", "避开拥挤但无人的车厢", "注意站台间隙"]}
            ],
            "transport": {"modes": [
                {"icon": "🚇", "name": "地铁", "description": "24小时运营，线路复杂", "tips": ["购买OMNY卡或周卡", "周末部分线路改线", "时报广场换乘人多注意安全"]},
                {"icon": "🚌", "name": "公交", "description": "覆盖地铁不到的地区", "tips": ["下车需拉铃"]},
                {"icon": "🚕", "name": "出租车/Uber", "description": "黄色出租车或Uber/Lyft", "tips": ["Uber更便宜更安全"]}
            ]}
        },
        "food": [
            {"name": "热狗", "type": "街头小吃", "price": "$3-8", "desc": "纽约街头经典美食", "foodSafety": "选择干净摊位，随身带湿纸巾"},
            {"name": "百吉饼 (Bagel)", "type": "早餐", "price": "$5-12", "desc": "配奶油奶酪和烟熏三文鱼", "tip": "去上东区或西村的正宗小店"},
            {"name": "芝士蛋糕", "type": "甜点", "price": "$8-15", "desc": "纽约特产，口感浓郁", "tip": "Junior's或Eileen's是经典"},
            {"name": "披萨 (Lombardi's)", "type": "意大利菜", "price": "$15-25", "desc": "美国第一家披萨店(1905年)", "tip": "点Regular尺寸足够"}
        ],
        "festivals": [
            {"name": "纽约时装周", "date": "2月/9月", "desc": "全球顶级时尚盛会"},
            {"name": "圣帕特里克节大游行", "date": "3月17日", "desc": "第五大道绿色盛装游行"},
            {"name": "感恩节梅西百货游行", "date": "11月第四个周四", "desc": "巨型气球和花车表演"},
            {"name": "时代广场跨年", "date": "12月31日", "desc": "水晶球降落，百万人狂欢"}
        ],
        "customs": [
            "不主动给小费（餐厅15-20%，出租车10-15%，酒店行李员$1-2/件）",
            "纽约客走路很快，不要挡路",
            "地铁座位有弹簧，起身时小心",
            "进入大楼需检查包",
            "唐人街换钱要找正规店铺",
            "排队时不插队"
        ]
    },

    "paris": {
        "emergencyContacts": {
            "phoneNumbers": {"police": "17", "ambulance": "15", "fire": "18", "tourist": "3430"},
            "hospitals": [
                {"name": "Pitié-Salpêtrière医院", "phone": "01-42-17-60-60", "address": "47-83 Bd de l'Hôpital, 75013 Paris", "features": ["24H急诊", "英语服务", "大型综合医院"], "emergency24h": True},
                {"name": "Hôtel-Dieu医院", "phone": "01-42-34-82-34", "address": "1 Pl. du Parvis Notre-Dame, 75004 Paris", "features": ["24H急诊", "市中心位置"], "emergency24h": True},
                {"name": "American Hospital of Paris", "phone": "01-46-41-25-25", "address": "63 Bd Victor Hugo, 92200 Neuilly-sur-Seine", "features": ["24H急诊", "全英语服务", "美国标准"], "emergency24h": True}
            ],
            "consulates": [
                {"name": "中国驻法国大使馆", "phone": "01-49-52-19-50", "address": "20 Rue de l'Abbé Roussel, 75012 Paris", "hours": "周一至周五 9:00-12:00", "emergency": False},
                {"name": "中国驻巴黎总领事馆", "phone": "01-47-23-34-65", "address": "15 Rue de la Saïda, 75015 Paris", "hours": "周一至周五 9:00-12:00", "emergency": False}
            ],
            "safetyApps": [
                {"name": "TousAntiCovid", "icon": "📱", "description": "法国官方疫情追踪应用"},
                {"name": "CityMapper Paris", "icon": "📱", "description": "精准公交地铁导航"}
            ],
            "selfProtection": [
                {"icon": "🎭", "title": "防盗要点", "tips": ["埃菲尔铁塔、卢浮宫周边假petition骗局", "地铁1号线假警察查证件是骗局", "蒙马特高地有人强卖手链"]},
                {"icon": "🔒", "title": "财产安全", "tips": ["把包背在前方", "火车上睡觉要看好行李", "信用卡感应支付注意遮挡"]},
                {"icon": "🗺️", "title": "危险区域", "tips": ["93省(圣丹尼)避免夜间前往", "美丽城(Belleville)需警惕"]}
            ],
            "transport": {"modes": [
                {"icon": "🚇", "name": "地铁/RER", "description": "覆盖全面，去凡尔赛需坐RER C线", "tips": ["周卡Navigo最划算", "查好末班车时间"]},
                {"icon": "🚌", "name": "公交", "description": "可欣赏街景", "tips": ["69路经过多个景点"]},
                {"icon": "🚕", "name": "出租车", "description": "打表计价", "tips": ["Uber更便宜"]}
            ]}
        },
        "food": [
            {"name": "法棍面包", "type": "主食", "price": "€1-2", "desc": "外脆内软，法国人每日必买", "foodSafety": "早餐新鲜吃，放久会硬"},
            {"name": "可颂/牛角包", "type": "烘焙", "price": "€1-3", "desc": "酥脆黄油香，早餐经典", "tip": "小巷里的Local bakery更正宗"},
            {"name": "蜗牛 (Escargot)", "type": "法餐", "price": "€12-20", "desc": "勃艮第蒜香蜗牛，巴黎经典前菜", "tip": "吃法：用蜗牛叉和专用钳"},
            {"name": "马卡龙", "type": "甜点", "price": "€2-5/个", "desc": "Ladurée或Pierre Hermé是顶级", "tip": "口味推荐：焦糖海盐、玫瑰"}
        ],
        "festivals": [
            {"name": "法国国庆阅兵", "date": "7月14日", "desc": "香榭丽舍大道阅兵，埃菲尔铁塔烟火"},
            {"name": "巴黎时装周", "date": "3月/10月", "desc": "全球时尚中心"},
            {"name": "白夜艺术节", "date": "10月第一个周六", "desc": "博物馆、剧院彻夜开放"},
            {"name": "爵士音乐节", "date": "6月下旬", "desc": "杜乐丽花园免费音乐会"}
        ],
        "customs": [
            "餐厅点餐默认收座位费，不要另付小费",
            "法国人不吃麦当劳式快餐，餐厅午餐通常有套餐",
            "贴面礼(La Bise)是常见问候，需看情况",
            "公共场所说话小声，法国人不喜欢嘈杂",
            "很多商店周日不开门",
            "咖啡馆坐在露台比室内贵"
        ]
    },

    "london": {
        "emergencyContacts": {
            "phoneNumbers": {"police": "999", "ambulance": "999", "fire": "999", "tourist": "0300-123-6789"},
            "hospitals": [
                {"name": "St Thomas' Hospital", "phone": "020-7188-7188", "address": "Westminster Bridge Rd, London SE1 7EH", "features": ["24H急诊", "英语服务", "位于国会旁"], "emergency24h": True},
                {"name": "Royal London Hospital", "phone": "020-7377-7000", "address": "Whitechapel Rd, London E1 1FR", "features": ["24H急诊", "创伤中心", "英语服务"], "emergency24h": True},
                {"name": "King's College Hospital", "phone": "020-3299-9000", "address": "Denmark Hill, London SE5 9RS", "features": ["24H急诊", "NHS教学医院"], "emergency24h": True}
            ],
            "consulates": [
                {"name": "中国驻英国大使馆", "phone": "020-7299-4049", "address": "31 Portland Pl, London W1B 1QD", "hours": "周一至周五 9:00-12:00", "emergency": False},
                {"name": "中国驻伦敦签证中心", "phone": "020-7636-5197", "address": "12 Old Jewry, London EC2R 8DU", "hours": "周一至周五 9:00-14:00", "emergency": False}
            ],
            "safetyApps": [
                {"name": "Citizen", "icon": "📱", "description": "实时犯罪预警应用"},
                {"name": "Citymapper", "icon": "📱", "description": "公交地铁精准导航"}
            ],
            "selfProtection": [
                {"icon": "🎭", "title": "防盗要点", "tips": ["伦敦桥周边警惕恐怖袭击风险", "西区剧院票务骗局多", "牛津街/摄政街扒手多"]},
                {"icon": "🔒", "title": "财产安全", "tips": ["地铁上把手机放内侧口袋", "餐厅咖啡馆不把包放椅背", "ATM取款注意周围"]},
                {"icon": "⚠️", "title": "ATM陷阱", "tips": ["避开独立ATM，找银行内的", "警惕假钞找零"]}
            ],
            "transport": {"modes": [
                {"icon": "🚇", "name": "地铁", "description": "世界最古老的地铁系统", "tips": ["Oyster卡最划算", "周末部分线路关闭施工", "地铁无信号提前下好离线地图"]},
                {"icon": "🚌", "name": "公交", "description": "双层红色巴士体验伦敦", "tips": ["不报站名需打开导航", "65路/15路是观光路线"]},
                {"icon": "🚕", "name": "黑色出租车/Uber", "description": "黑色出租车专业安全，Uber更便宜", "tips": ["uber比黑色出租车便宜50%"]}
            ]}
        },
        "food": [
            {"name": "炸鱼薯条 (Fish & Chips)", "type": "英式料理", "price": "£10-18", "desc": "英国国菜，酥脆炸鱼配薯条", "tip": "去东伦敦的Poppie's更正宗"},
            {"name": "英式早餐", "type": "早餐", "price": "£8-15", "desc": "培根、香肠、煎蛋、烤豆、蘑菇", "foodSafety": "选择人气高的餐厅"},
            {"name": "周日烤肉 (Sunday Roast)", "type": "英式料理", "price": "£12-20", "desc": "烤牛肉+约克郡布丁+蔬菜", "tip": "周三到周日下午供应"},
            {"name": "印度咖喱", "type": "南亚料理", "price": "£10-18", "desc": "Brick Lane是印度咖喱一条街", "tip": "要尝试Chicken Tikka Masala"}
        ],
        "festivals": [
            {"name": "新年跨年烟火", "date": "1月1日", "desc": "泰晤士河畔免费烟火，需提前预约"},
            {"name": "诺丁山狂欢节", "date": "8月底周末", "desc": "欧洲最大街头狂欢，加勒比文化"},
            {"name": "伦敦设计节", "date": "9月", "desc": "城市各处的设计装置艺术"},
            {"name": "圣诞点灯", "date": "11月", "desc": "牛津街/摄政街点灯仪式"}
        ],
        "customs": [
            "给小费不是强制，但餐厅通常给10%",
            "英国人排队意识强，不要插队",
            "伦敦地铁上不要大声说话",
            "左边扶梯通行，右边站立",
            "不随意问陌生人工资或体重",
            "泰晤士河以南通常更便宜"
        ]
    },

    "bangkok": {
        "emergencyContacts": {
            "phoneNumbers": {"police": "191", "ambulance": "1669", "fire": "199", "tourist": "1672"},
            "hospitals": [
                {"name": "康民国际医院 (Bumrungrad)", "phone": "+66-2-066-8888", "address": "33 Soi Soonvijai 1, Khlongtoey", "features": ["24H急诊", "全英语服务", "JCI认证", "国际患者"], "emergency24h": True},
                {"name": "曼谷医院 (Bangkok Hospital)", "phone": "+66-2-310-3100", "address": "2 Soi Soonvijai 7, Khlongtoey", "features": ["24H急诊", "多语言", "连锁医院"], "emergency24h": True},
                {"name": "朱拉隆功医院", "phone": "+66-2-652-2000", "address": "1873 Rama IV Rd, Pathum Wan", "features": ["24H急诊", "大学医院", "泰语/英语"], "emergency24h": True}
            ],
            "consulates": [
                {"name": "中国驻泰国大使馆", "phone": "+66-2-245-7032", "address": "57 Ratchadaphisek Rd, Bangkok 10400", "hours": "周一至周五 9:00-11:30", "emergency": False},
                {"name": "中国驻清迈总领事馆", "phone": "+66-53-280-464", "address": "111 Chang Lor Road, Chiang Mai", "hours": "周一至周五 9:00-12:00", "emergency": False}
            ],
            "safetyApps": [
                {"name": "Capwing", "icon": "📱", "description": "泰国报警定位App"},
                {"name": "Grab", "icon": "📱", "description": "打车应用，比嘟嘟车安全"}
            ],
            "selfProtection": [
                {"icon": "🛡️", "title": "安全提示", "tips": ["四面佛周边小心佛牌强制推销", "嘟嘟车价格需提前谈好", "人妖合影要问价格"]},
                {"icon": "🔒", "title": "财产安全", "tips": ["考山路/是隆路小偷多", "信用卡诈骗需警惕", "ATM取款找银行内"]},
                {"icon": "⚠️", "title": "交通安全", "tips": ["嘟嘟车和摩的危险", "出租车必须打表(By Meter)", "注意飞车党抢包"]}
            ],
            "transport": {"modes": [
                {"icon": "🚇", "name": "BTS/MRT", "description": "空中捷运和地铁，覆盖主要区域", "tips": ["BTS和MRT不出站换乘", "购买Rabbit卡更方便"]},
                {"icon": "🚌", "name": "公交", "description": "路线复杂，不推荐游客", "tips": ["有空调公交较安全"]},
                {"icon": "🚕", "name": "出租车", "description": "价格便宜，记得打表", "tips": ["拒绝不去的司机"]}
            ]}
        },
        "food": [
            {"name": "冬阴功汤 (Tom Yum)", "type": "泰式", "price": "฿100-300", "desc": "酸辣虾汤，泰国代表", "tip": "街头小店更正宗"},
            {"name": "芒果糯米饭", "type": "甜点", "price": "฿50-120", "desc": "街头经典甜品", "foodSafety": "选择有冰箱的摊位"},
            {"name": "泰式炒河粉 (Pad Thai)", "type": "泰式", "price": "฿50-150", "desc": "泰式炒粉，街头必吃", "tip": "唐人街YPark最知名"},
            {"name": "泰式烤肉串", "type": "街头", "price": "฿10-20/串", "desc": "夜市必备", "tip": "要配糯米饭"}
        ],
        "festivals": [
            {"name": "宋干节(泼水节)", "date": "4月13-15日", "desc": "全球最大泼水派对，全民狂欢"},
            {"name": "水灯节", "date": "11月(泰历满月)", "desc": "浪漫放水灯，必看"},
            {"name": "Vegetarian Festival", "date": "9-10月", "desc": "九皇斋节，素食者的盛会"},
            {"name": "国王生日", "date": "12月5日", "desc": "到处都是黄衫着装庆祝"}
        ],
        "customs": [
            "进寺庙必须脱鞋，着装过膝过肩",
            "不可触摸泰国人的头",
            "不可以用脚指向人或佛像",
            "不公开批评王室(严法)",
            "给小费不是强制，但按摩后给50-100铢",
            "夜生活场所凌晨2点关门"
        ]
    },

    "sydney": {
        "emergencyContacts": {
            "phoneNumbers": {"police": "000", "ambulance": "000", "fire": "000", "tourist": "13-13-02"},
            "hospitals": [
                {"name": "Royal Prince Alfred Hospital", "phone": "02-9515-6111", "address": "Missenden Rd, Camperdown NSW 2050", "features": ["24H急诊", "创伤中心", "英语服务"], "emergency24h": True},
                {"name": "Royal North Shore Hospital", "phone": "02-9926-7111", "address": "Reserve Rd, St Leonards NSW 2065", "features": ["24H急诊", "神经外科", "英语服务"], "emergency24h": True},
                {"name": "St Vincent's Private Hospital", "phone": "02-8382-1111", "address": "406 Victoria St, Darlinghurst NSW 2010", "features": ["24H急诊", "高端私立", "全英语"], "emergency24h": True}
            ],
            "consulates": [
                {"name": "中国驻悉尼总领事馆", "phone": "02-8595-8002", "address": "39 Dunblane St, Camperdown NSW 2050", "hours": "周一至周五 9:00-12:00", "emergency": False}
            ],
            "safetyApps": [
                {"name": "Emergency+", "icon": "📱", "description": "紧急情况定位求助"},
                {"name": "TripView", "icon": "📱", "description": "悉尼公交实时到站"}
            ],
            "selfProtection": [
                {"icon": "🌊", "title": "海滩安全", "tips": ["只在红旗/黄旗之间游泳", "不要超出防鲨网", "岩石区观浪要小心浪大"]},
                {"icon": "🌙", "title": "夜间安全", "tips": ["Kings Cross红灯区人员复杂", "CBD深夜有醉汉", "红fern区避免深夜"]},
                {"icon": "☀️", "title": "防晒防暑", "tips": ["澳洲紫外线极强，全年需防晒", "带足够饮用水", "中午避免长时间户外"]}
            ],
            "transport": {"modes": [
                {"icon": "🚇", "name": "火车/轻轨", "description": "覆盖大悉尼地区", "tips": ["Opal卡通用", "深夜有Night Bus"]},
                {"icon": "🚌", "name": "公交", "description": "路线密集", "tips": ["Google Maps查好路线", "按铃下车"]},
                {"icon": "🚢", "name": "渡轮", "description": "环形码头到曼利海滩", "tips": ["观光+交通一体"]}
            ]}
        },
        "food": [
            {"name": "海鲜拼盘", "type": "海鲜", "price": "AU$30-60", "desc": "悉尼岩石区生蚝、龙虾", "tip": "鱼市场(Sydney Fish Market)最新鲜便宜"},
            {"name": "澳式BBQ", "type": "烧烤", "price": "AU$20-40", "desc": "BBQ餐厅体验本地牛排", "tip": "边吃边看海景"},
            {"name": "咖啡文化", "type": "饮品", "price": "AU$4-7", "desc": "Flat White发明地，咖啡文化浓厚", "tip": "Newtown区独立咖啡馆最地道"},
            {"name": "肉派 (Meat Pie)", "type": "快餐", "price": "AU$5-8", "desc": "AFL文化，足球比赛必备", "tip": "Bakers Delight是连锁"}
        ],
        "festivals": [
            {"name": "悉尼跨年烟火", "date": "12月31日", "desc": "全球最美新年烟火之一，免费"},
            {"name": "Vivid Sydney灯光节", "date": "5-6月", "desc": "灯光秀，音乐、创意"},
            {"name": "悉尼马拉松", "date": "9月", "desc": "从海港大桥到歌剧院"},
            {"name": "Mardi Gras同志狂欢节", "date": "2-3月", "desc": "全球最大同志活动之一"}
        ],
        "customs": [
            "不插队，澳洲人很重视排队",
            "不歧视原住民(Macaman)",
            "给小费不是强制，但高档餐厅可给10%",
            "澳洲海滩有裸泳区，注意标识",
            "冲浪救生员有权威，听从指挥",
            "不要喂鸽子，违法"
        ]
    },

    "dubai": {
        "emergencyContacts": {
            "phoneNumbers": {"police": "999", "ambulance": "998", "fire": "997", "tourist": "800-497-4973"},
            "hospitals": [
                {"name": "Rashid Hospital", "phone": "04-337-4000", "address": "Oud Metha, Dubai", "features": ["24H急诊", "英语/阿拉伯语", "政府医院"], "emergency24h": True},
                {"name": "American Hospital Dubai", "phone": "04-377-6000", "address": "23 15th St, Al Mankhool", "features": ["24H急诊", "全英语服务", "美国标准"], "emergency24h": True},
                {"name": "Mediclinic City Hospital", "phone": "04-435-9999", "address": "Building 37, Dubai Healthcare City", "features": ["24H急诊", "多语言", "专科齐全"], "emergency24h": True}
            ],
            "consulates": [
                {"name": "中国驻迪拜总领事馆", "phone": "04-394-4733", "address": "Al Wasl Road, Dubai", "hours": "周日-周四 8:30-12:00", "emergency": False}
            ],
            "safetyApps": [
                {"name": "Dubai Police", "icon": "📱", "description": "报警、查询、报案"},
                {"name": "RTA Dubai", "icon": "📱", "description": "地铁、公交、打车"}
            ],
            "selfProtection": [
                {"icon": "⚠️", "title": "法规注意", "tips": ["公共场所禁止亲密行为", "斋月期间白天禁食", "不喝酒精饮料(指定区域外)"]},
                {"icon": "👗", "title": "穿着注意", "tips": ["清真寺对着装有要求", "商场泳池可穿泳装", "政府机构需正式"]},
                {"icon": "🔒", "title": "财产安全", "tips": ["刷卡时遮挡密码", "换钱去正规兑换点", "不炫耀现金和名牌"]}
            ],
            "transport": {"modes": [
                {"icon": "🚇", "name": "地铁/轻轨", "description": "红线贯穿主要区域", "tips": ["金卡车厢需额外付费", "周五下午才开"]},
                {"icon": "🚌", "name": "公交", "description": "覆盖地铁不到的地方", "tips": ["Nol卡通用"]},
                {"icon": "🚕", "name": "出租车", "description": "普通/粉色(女性司机)可选", "tips": ["Uber/Careem比出租车贵但更好"]}
            ]}
        },
        "food": [
            {"name": "沙瓦尔玛 (Shawarma)", "type": "中东料理", "price": "AED 10-25", "desc": "中东烤肉卷饼，大街小巷都有", "tip": "Al Mallah是知名连锁"},
            {"name": "椰枣", "type": "甜点", "price": "AED 20-100", "desc": "阿拉伯特产，必带手信", "tip": "Date Market买散装更划算"},
            {"name": "阿拉伯咖啡+骆驼奶", "type": "饮品", "price": "AED 5-20", "desc": "当地特色体验", "foodSafety": "选择干净店铺"},
            {"name": "海鲜烧烤", "type": "海鲜", "price": "AED 50-150", "desc": "迪拜码头海边餐厅", "tip": "Dubai Marine Beach最有名"}
        ],
        "festivals": [
            {"name": "迪拜购物节", "date": "1月-2月", "desc": "全球最大购物节，折扣力度大"},
            {"name": "斋月", "date": "每年日期不同", "desc": "穆斯林斋月，体验当地文化"},
            {"name": "迪拜赛马世界杯", "date": "3月", "desc": "全球最贵赛马比赛"},
            {"name": "阿联酋航空文学节", "date": "11月", "desc": "国际作家云集"}
        ],
        "customs": [
            "斋月白天不要在公共场合吃喝",
            "不要用左手递东西(被认为不洁)",
            "不谈论宗教和政治",
            "周五是周末，公休",
            "着装得体进入清真寺",
            "小费通常10-15%"
        ]
    }
}

# conflict数据 - 在safety_history之前添加
CITY_CONFLICT = {
    "tokyo": {
        "war_risk": "极低", "war_desc": "日本是和平国家，无战争风险。",
        "gang_activity": "极低", "gang_desc": "山口组是合法注册组织，主要在经济领域，远离游客区。",
        "civil_unrest": "极低", "civil_desc": "日本社会秩序稳定，极少有抗议活动。"
    },
    "singapore": {
        "war_risk": "极低", "war_desc": "新加坡是东南亚最安全的国家之一，无战争风险。",
        "gang_activity": "极低", "gang_desc": "法律严格，执行力强，帮派活动罕见。",
        "civil_unrest": "极低", "civil_desc": "政治稳定，人民行动党长期执政，社会秩序良好。"
    },
    "seoul": {
        "war_risk": "低", "war_desc": "朝鲜半岛局势紧张，但首尔远离军事分界线。关注朝韩新闻即可。",
        "gang_activity": "低", "gang_desc": "首尔市区帮派活动少见，但梨泰院、弘大夜店区需注意。",
        "civil_unrest": "低", "civil_desc": "偶有政治集会抗议，通常平和。注意避开政治敏感期。"
    },
    "hong_kong": {
        "war_risk": "极低", "war_desc": "香港是中国特别行政区，无战争风险。",
        "gang_activity": "极低", "gang_desc": "香港治安良好，黑帮活动已大幅减少。游客区安全。",
        "civil_unrest": "低", "civil_desc": "2019年后政治环境稳定。购物中心、地铁等公共区域安保加强。"
    },
    "shanghai": {
        "war_risk": "极低", "war_desc": "中国本土无战争风险。",
        "gang_activity": "极低", "gang_desc": "中国大陆治安良好，帮派活动已绝迹多年。",
        "civil_unrest": "极低", "civil_desc": "社会稳定，各项大型活动秩序良好。"
    },
    "beijing": {
        "war_risk": "极低", "war_desc": "中国本土无战争风险。",
        "gang_activity": "极低", "gang_desc": "中国大陆治安良好。",
        "civil_unrest": "极低", "civil_desc": "社会稳定，天安门广场等敏感区域安检严格。"
    },
    "paris": {
        "war_risk": "极低", "war_desc": "法国本土无战争风险，但参与国际军事行动。",
        "gang_activity": "低", "gang_desc": "市区帮派活动少见，但郊区93省有组织犯罪，游客避免前往。",
        "civil_unrest": "中等", "civil_desc": "黄背心运动曾大规模抗议，现在仍有零星罢工。出行前查好是否有游行。"
    },
    "london": {
        "war_risk": "极低", "war_desc": "英国本土无战争风险，但伦敦曾遭受恐怖袭击，需保持警惕。",
        "gang_activity": "低", "gang_desc": "市区帮派活动少见。伦敦南部部分区域有青少年帮派，避免夜间前往陌生区域。",
        "civil_unrest": "低", "civil_desc": "脱欧期间有抗议活动，总体平和。唐宁街和白厅可能有示威。"
    },
    "new_york": {
        "war_risk": "极低", "war_desc": "美国本土无战争风险，政治制度稳定。",
        "gang_activity": "中等", "gang_desc": "布朗克斯南部、皇后区部分社区存在帮派活动，游客避免前往。时报广场有零星诈骗但无帮派威胁。",
        "civil_unrest": "低", "civil_desc": "政治集会偶有发生，通常和平。曼哈顿中城、联合广场可能有关门抗议。"
    },
    "bangkok": {
        "war_risk": "极低", "war_desc": "泰国政治偶有动荡，但远离边境冲突地区。",
        "gang_activity": "低", "gang_desc": "曼谷市区帮派活动少见。红灯区(Nana/Soi Cowboy)有组织犯罪，游客避免深夜单独前往。",
        "civil_unrest": "低", "civil_desc": "2014年政变后社会稳定。陆空交通目前正常。重大政治示威通常在民主纪念碑区域。"
    },
    "sydney": {
        "war_risk": "极低", "war_desc": "澳洲本土无战争风险，但是五眼联盟成员。",
        "gang_activity": "低", "gang_desc": "摩托党(Hells Angels)在郊区有活动，但远离游客区。内城区治安良好。",
        "civil_unrest": "极低", "civil_desc": "社会秩序稳定，偶尔有环保或人权示威，均平和。"
    },
    "dubai": {
        "war_risk": "极低", "war_desc": "阿联酋是中东最安全的国家之一，迪拜远离战争地区。无战争风险。",
        "gang_activity": "极低", "gang_desc": "法律严格，帮派活动几乎不存在。迪拜是最安全的中东城市。",
        "civil_unrest": "极低", "civil_desc": "阿联酋政治稳定，社会秩序良好。无政治抗议活动。"
    }
}

def find_city_block(content, city_id):
    """找到城市数据块的开始和结束位置"""
    pattern = rf'"{city_id}"\s*:\s*\{{'
    match = re.search(pattern, content)
    if not match:
        return None, None
    start = match.start()
    
    # 找到城市结束位置(找到下一个城市的{)
    next_pattern = rf'\n  "[a-z_]+"\s*:\s*\{{'
    next_match = re.search(next_pattern, content[start+10:])
    if next_match:
        end = start + next_match.start()
    else:
        end = len(content)
    
    return start, end

def replace_lifestyle(content, city_id, new_lifestyle):
    """替换城市的lifestyle数据"""
    start, end = find_city_block(content, city_id)
    if start is None:
        return content, False
    
    # 找到lifestyle块的开始
    lifestyle_start_pat = rf'"{city_id}".*?"lifestyle"\s*:\s*\{{'
    lifestyle_match = re.search(lifestyle_start_pat, content[start:end], re.DOTALL)
    if not lifestyle_match:
        return content, False
    
    ls = start + lifestyle_match.end() - 1  # 指向开始花括号
    
    # 计算lifestyle块的结束位置(匹配花括号)
    depth = 1
    i = ls + 1
    in_string = False
    while i < len(content) and depth > 0:
        c = content[i]
        if c == '"' and (i == 0 or content[i-1] != '\\'):
            in_string = not in_string
        elif not in_string:
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
        i += 1
    
    le = i - 1
    
    # 准备替换内容
    replacement = f'\n      "emergencyContacts": {json.dumps(new_lifestyle.get("emergencyContacts", {}), ensure_ascii=False, indent=6)}'
    replacement += f',\n      "food": {json.dumps(new_lifestyle.get("food", []), ensure_ascii=False, indent=6)}'
    replacement += f',\n      "festivals": {json.dumps(new_lifestyle.get("festivals", []), ensure_ascii=False, indent=6)}'
    replacement += f',\n      "customs": {json.dumps(new_lifestyle.get("customs", []), ensure_ascii=False, indent=6)}'
    
    # 替换
    new_content = content[:ls] + replacement + content[le:]
    
    return new_content, True

def add_conflict(content, city_id, conflict_data):
    """添加conflict数据"""
    start, end = find_city_block(content, city_id)
    if start is None:
        return content, False
    
    # 检查是否已有conflict
    if '"conflict"' in content[start:end]:
        return content, False
    
    # 找到safety_history之前
    hist_pat = rf'"{city_id}".*?"safety_history"\s*:\s*"'
    hist_match = re.search(hist_pat, content[start:end], re.DOTALL)
    if not hist_match:
        return content, False
    
    insert_pos = start + hist_match.start() + len(hist_match.group())
    
    conflict_str = f'\n    "conflict": {json.dumps(conflict_data, ensure_ascii=False, indent=4)},'
    
    new_content = content[:insert_pos] + conflict_str + content[insert_pos:]
    
    return new_content, True

def main():
    # 读取data.js
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 备份
    with open('data.js.v9_backup', 'w', encoding='utf-8') as f:
        f.write(content)
    print("已备份原文件到 data.js.v9_backup")
    
    updated = []
    failed = []
    conflicts_added = []
    
    # 更新lifestyle数据
    for city_id, data in CITY_LIFESTYLE_UPDATES.items():
        new_content, success = replace_lifestyle(content, city_id, data)
        if success:
            content = new_content
            updated.append(city_id)
            print(f"lifestyle更新: {city_id}")
        else:
            failed.append(city_id)
            print(f"lifestyle失败: {city_id}")
    
    # 添加conflict数据
    for city_id, conflict_data in CITY_CONFLICT.items():
        new_content, success = add_conflict(content, city_id, conflict_data)
        if success:
            content = new_content
            conflicts_added.append(city_id)
            print(f"conflict添加: {city_id}")
    
    # 更新文件头版本号
    content = content.replace('v9.0', 'v10.0')
    content = content.replace('更新时间: 2026-04-20 v9.0', '更新时间: 2026-04-20 v10.0')
    
    # 保存
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n=== 完成 ===")
    print(f"lifestyle更新: {len(updated)} 个城市")
    print(f"conflict添加: {len(conflicts_added)} 个城市")
    if failed:
        print(f"失败: {failed}")

if __name__ == "__main__":
    main()
