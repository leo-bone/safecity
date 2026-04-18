#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SafeCity v9.5 专业级数据增强
- 修复所有缺失数据
- 添加具体准确的必点菜品
- 添加详细的疾病预防信息
- 增强节日风俗的本地特色
- 添加具体安全建议
"""

import json
import re
import random

# ==================== 专业数据定义 ====================

# 各城市详细景点推荐（每个城市5个）
ATTRACTION_DETAILS = {
    'tokyo': [
        {'name': '涩谷十字路口', 'type': '地标', 'location': '涩谷区', 'why': '全球最繁忙的行人交叉口，霓虹灯夜景震撼', 'bestTime': '夜晚21:00-23:00', 'duration': '30分钟', 'tips': '从星巴克2楼拍摄全景，避开高峰期'},
        {'name': '东京迪士尼度假区', 'type': '主题乐园', 'location': '千叶县浦安市', 'why': '亚洲最受欢迎的主题乐园，氛围梦幻', 'bestTime': '平日（非节假日）9:00开门', 'duration': '1-2天', 'tips': '提前购买fast pass，下载官方APP预约演出'},
        {'name': '筑地/丰洲市场', 'type': '美食', 'location': '筑地/丰洲', 'why': '金枪鱼拍卖世界闻名，新鲜寿司早餐', 'bestTime': '丰洲市场5:00-10:00', 'duration': '2-3小时', 'tips': '丰洲游客区无需预约，注意周六部分休市'},
        {'name': '秋叶原', 'type': '商圈', 'location': '千代田区的', 'why': '动漫/电子产品/女仆咖啡厅文化圣地', 'bestTime': '14:00-21:00', 'duration': '3小时', 'tips': 'BicCamera和Yodobashi是大型电器店'},
        {'name': '明治神宫', 'type': '神社', 'location': '涩谷区代代木', 'why': '东京最神圣的神社，森林中的宁静', 'bestTime': '清晨6:00-8:00', 'duration': '1-2小时', 'tips': '新年参拜人数世界之最，建议平日去'}
    ],
    'paris': [
        {'name': '卢浮宫', 'type': '博物馆', 'location': '第一区', 'why': '世界最大博物馆，蒙娜丽莎真迹所在地', 'bestTime': '周三或周五晚（21:45闭馆）', 'duration': '3-4小时', 'tips': '金字塔入口排队久，建议走卡鲁塞勒商廊入口更快捷'},
        {'name': '埃菲尔铁塔', 'type': '地标', 'location': '第七区', 'why': '巴黎icon，夜间整点闪烁灯光秀', 'bestTime': '日落时分登塔', 'duration': '2小时', 'tips': '顶层电梯票提前官网购买，登顶电梯有时排队2小时'},
        {'name': '蒙马特高地', 'type': '街区', 'location': '十八区', 'why': '艺术街区，圣心大教堂，街头艺术家云集', 'bestTime': '上午10:00前', 'duration': '3小时', 'tips': '小心骗子强卖手链，骗子假装给你戴手链然后收钱'},
        {'name': '奥赛博物馆', 'type': '博物馆', 'location': '第七区', 'why': '印象派画作收藏世界之最', 'bestTime': '周四晚（21:45闭馆）', 'duration': '2-3小时', 'tips': '持卢浮宫或凡尔赛门票可优惠'},
        {'name': '玛黑区', 'type': '街区', 'location': '第三/四区', 'why': '时尚/古董/咖啡馆文化中心', 'bestTime': '14:00-20:00', 'duration': '4小时', 'tips': '潮流买手店集中地，Le Marais是法语名字'}
    ],
    'bangkok': [
        {'name': '大皇宫', 'type': '宫殿', 'location': '拉塔纳科辛区', 'why': '泰国皇室象征，金碧辉煌', 'bestTime': '8:30开门即去', 'duration': '2小时', 'tips': '穿长裤/长裙，不能露肩露背，门口有租借'},
        {'name': '考山路', 'type': '街区', 'location': '帕那空区', 'why': '全球背包客聚集地，夜生活丰富', 'bestTime': '18:00后', 'duration': '3小时', 'tips': '马杀鸡（按摩）便宜但要选正规店，避免天价'},
        {'name': '乍都乍周末市场', 'type': '市场', 'location': '恰图恰区', 'why': '全球最大露天市场，15000+摊位', 'bestTime': '周六日9:00-18:00', 'duration': '4-5小时', 'tips': '砍价从3折开始，周末才开，记得带水'},
        {'name': 'IconSiam', 'type': '商场', 'location': '湄南河畔', 'why': '东南亚最大购物中心，室内水上市场', 'bestTime': '10:00-22:00', 'duration': '3小时', 'tips': '负一楼美食广场超推荐，抢包和榴莲不能带进商场'},
        {'name': '郑王庙', 'type': '寺庙', 'location': '湄南河对岸', 'why': '黎明之塔，瓷器装饰的壮观寺庙', 'bestTime': '8:00-18:00', 'duration': '1.5小时', 'tips': '穿租借的泰服拍照超美，渡轮只需几泰铢'}
    ],
    'singapore': [
        {'name': '滨海湾花园', 'type': '公园', 'location': '滨海湾', 'why': '超级树和云雾林室内花园，科幻感十足', 'bestTime': '19:45灯光秀', 'duration': '3小时', 'tips': '免费进入户外区，云雾林门票约20新币'},
        {'name': '环球影城', 'type': '主题乐园', 'location': '圣淘沙', 'why': '东南亚最好玩的主题乐园，适合各年龄', 'bestTime': '平日开门即去', 'duration': '1天', 'tips': '周一至周四人少，购买快速通行证节省排队'},
        {'name': '牛车水', 'type': '街区', 'location': '地铁Chinatown站', 'why': '新加坡唐人街，美食和文化中心', 'bestTime': '18:00-22:00', 'duration': '3小时', 'tips': '麦士威路美食中心物美价廉，天天海南鸡饭在那'},
        {'name': '小印度', 'type': '街区', 'location': '地铁Little India站', 'why': '印度文化区，彩色街道和印度美食', 'bestTime': '10:00-20:00', 'duration': '2-3小时', 'tips': '竹脚中心美食广场推荐，榴莲不能带进地铁'},
        {'name': '克拉码头', 'type': '夜生活', 'location': '新加坡河畔', 'why': '酒吧餐厅聚集地，夜景绝佳', 'bestTime': '19:00-02:00', 'duration': '4小时', 'tips': '珍宝海鲜（无招牌）就在附近，辣椒蟹必吃'}
    ],
    'new_york': [
        {'name': '中央公园', 'type': '公园', 'location': '曼哈顿中城', 'why': '曼哈顿之肺，四季皆美的都市绿洲', 'bestTime': '秋季（枫叶红了）', 'duration': '3-4小时', 'tips': '建议从南边入口往北走，带野餐食物'},
        {'name': '自由女神像', 'type': '地标', 'location': '自由岛', 'why': '美国象征，登顶可俯瞰曼哈顿', 'bestTime': '日出时分登船', 'duration': '4小时', 'tips': 'Statue of Liberty Crown需要提前几个月预约'},
        {'name': '帝国大厦', 'type': '观景台', 'location': '曼哈顿中城', 'why': '经典电影场景，86层户外观景台', 'bestTime': '日落前1小时', 'duration': '2小时', 'tips': '夜间观景最美，避免旺季排队可买CityPASS'},
        {'name': '时代广场', 'type': '地标', 'location': '曼哈顿中城', 'why': '霓虹灯世界中心，纽约繁华象征', 'bestTime': '夜晚', 'duration': '1小时', 'tips': '小心卡通人物合照收小费，路边餐车性价比高'},
        {'name': '布鲁克林大桥', 'type': '地标', 'location': '曼哈顿下城', 'why': '经典地标，步行过桥风景绝佳', 'bestTime': '日落时分', 'duration': '1小时', 'tips': '从曼哈顿走向布鲁克林方向拍照更好看'}
    ],
    'london': [
        {'name': '大英博物馆', 'type': '博物馆', 'location': '布鲁姆斯伯里', 'why': '世界最大博物馆之一，文明交汇', 'bestTime': '周五晚（延长至20:30）', 'duration': '3-4小时', 'tips': '免费入场，建议提前官网预约免费导览'},
        {'name': '塔桥', 'type': '地标', 'location': '塔桥区', 'why': '伦敦象征，玻璃走廊俯瞰泰晤士河', 'bestTime': '日落时分', 'duration': '2小时', 'tips': '提前官网买票避免排队，登塔顶看天气'},
        {'name': '博罗市场', 'type': '美食', 'location': '伦敦桥附近', 'why': '伦敦最古老美食市场，100+摊位', 'bestTime': '周六10:00-17:00', 'duration': '2-3小时', 'tips': '生蚝和奶酪是特色，周六最热闹'},
        {'name': '诺丁山', 'type': '街区', 'location': '西伦敦', 'why': '彩色 houses，波特贝罗路古董市场', 'bestTime': '周六跳蚤市场', 'duration': '3小时', 'tips': '波特贝罗路市集周六才全开， Notting Hill电影场景'},
        {'name': '西区剧院', 'type': '演出', 'location': '莱斯特广场', 'why': '世界级音乐剧和戏剧中心', 'bestTime': '晚场19:30', 'duration': '2-3小时', 'tips': 'TKTS半价售票亭买当天票，歌剧魅影/悲惨世界必看'}
    ],
    'rome': [
        {'name': '斗兽场', 'type': '古迹', 'location': '罗马中心', 'why': '古罗马象征，世界七大奇迹之一', 'bestTime': '8:30开门即去', 'duration': '2小时', 'tips': '买Roma Pass含交通和门票，建议预约第二层'},
        {'name': '梵蒂冈博物馆', 'type': '博物馆', 'location': '梵蒂冈城', 'why': '西斯廷教堂和拉斐尔壁画', 'bestTime': '周三或周五下午人少', 'duration': '3-4小时', 'tips': '提前网上购票免排队，最后进西斯廷避免人群'},
        {'name': '特莱维喷泉', 'type': '景点', 'location': '西班牙广场附近', 'why': '罗马最著名许愿池，巴洛克经典', 'bestTime': '清晨或深夜', 'duration': '30分钟', 'tips': '背对喷泉右手扔硬币许愿，据说会再回罗马'},
        {'name': '万神殿', 'type': '古迹', 'location': '万神殿广场', 'why': '2000年历史的完美穹顶建筑', 'bestTime': '中午12点（光线最好）', 'duration': '45分钟', 'tips': '免费入场，周二和宗教节日可能关闭'},
        {'name': '西班牙台阶', 'type': '景点', 'location': '西班牙广场', 'why': '《罗马假日》经典场景，137级台阶', 'bestTime': '下午', 'duration': '1小时', 'tips': '禁止在台阶上吃东西（会被罚款），破船喷泉在底部'}
    ],
    'sydney': [
        {'name': '悉尼歌剧院', 'type': '地标', 'location': '环形码头', 'why': '悉尼icon，建筑本身就是艺术品', 'bestTime': '日出/日落', 'duration': '2小时', 'tips': '参加内部导览才值回票价，提前官网预约'},
        {'name': '邦迪海滩', 'type': '海滩', 'location': '邦迪区', 'why': '悉尼最著名海滩，悬崖步道绝美', 'bestTime': '清晨或黄昏', 'duration': '3小时', 'tips': 'Icebergs泳池俱乐部拍照超美，注意浪大'},
        {'name': '蓝山国家公园', 'type': '自然', 'location': '悉尼西侧', 'why': '世界遗产，壮观的悬崖峡谷和桉树林', 'bestTime': '清晨出发', 'duration': '全天', 'tips': '乘坐Railway/Scenic Railway小火车，Katoomba是中心小镇'},
        {'name': '塔龙加动物园', 'type': '动物园', 'location': 'Mosman区', 'why': '悉尼港美景与动物同框，特色动物园', 'bestTime': '上午（动物活跃）', 'duration': '3-4小时', 'tips': '乘渡轮前往，沿途欣赏悉尼港大桥'},
        {'name': '岩石区', 'type': '街区', 'location': '环形码头旁', 'why': '悉尼最古老的街区，周末有集市', 'bestTime': '周六日', 'duration': '2-3小时', 'tips': '周末岩石区市场是亮点，殖民时期建筑'}
    ],
    'dubai': [
        {'name': '哈利法塔', 'type': '地标', 'location': 'downtown', 'why': '世界最高建筑828米，迪拜地标', 'bestTime': '日落时分', 'duration': '2小时', 'tips': 'At The Top观景台提前官网预订，日落时段最抢手'},
        {'name': '迪拜购物中心', 'type': '商场', 'location': 'downtown', 'why': '全球最大购物中心之一', 'bestTime': '14:00-22:00', 'duration': '4小时', 'tips': '迪拜喷泉在商场外，每30分钟表演一次'},
        {'name': '朱美拉棕榈岛', 'type': '地标', 'location': '朱美拉', 'why': '世界最大人工岛，形状像棕榈树', 'bestTime': '下午', 'duration': '3小时', 'tips': '乘坐单轨列车观光，The View观景台俯瞰全岛'},
        {'name': '迪拜老城区', 'type': '文化', 'location': 'Deira区', 'why': '黄金市场/香料市场/传统建筑', 'bestTime': '傍晚（不那么热）', 'duration': '3小时', 'tips': 'Abra渡轮1迪拉姆过河，砍价往三分之一砍'},
        {'name': '沙漠冲沙', 'type': '体验', 'location': '迪拜沙漠', 'why': '4驱越野冲沙，日落BBQ体验', 'bestTime': '下午3点出发', 'duration': '5小时', 'tips': '通过酒店或旅行APP预订，含晚餐和表演'}
    ],
    'seoul': [
        {'name': '明洞', 'type': '购物', 'location': '中区', 'why': '首尔购物天堂，化妆品/时装/美食', 'bestTime': '10:00-22:00', 'duration': '4小时', 'tips': '换钱去明洞大使馆或民间换钱所，比机场划算'},
        {'name': '景福宫', 'type': '宫殿', 'location': '钟路区', 'why': '朝鲜王朝第一宫，卫队换岗仪式', 'bestTime': '上午10:00或14:00', 'duration': '2小时', 'tips': '穿韩服免费入场（平日），景福宫站出口即到'},
        {'name': '东大门设计广场', 'type': '地标', 'location': '东大门区', 'why': '未来感建筑，24小时购物', 'bestTime': '晚上', 'duration': '3小时', 'tips': 'DOOTA购物中心是正品，其他需谨慎'},
        {'name': '北村韩屋村', 'type': '文化', 'location': '三清洞', 'why': '600年历史传统韩屋，UNESCO遗产', 'bestTime': '清晨或傍晚', 'duration': '2小时', 'tips': '北村八景是经典路线，注意不要打扰居民'},
        {'name': '弘大', 'type': '街区', 'location': '麻浦区', 'why': '年轻人文化中心，街头表演/美食/夜店', 'bestTime': '晚上', 'duration': '4小时', 'tips': '周六街头表演最丰富，美食店营业到凌晨'}
    ]
}

# 美食详细推荐（餐厅+必点菜品）
FOOD_DETAILS = {
    'tokyo': [
        {'name': '�的�半之助于治', 'location': '日本桥人形钉3-6-2', 'price': '¥2000-3000', 'specialties': '天妇罗盖饭（穴子/大虾/海鳗），酥脆不腻', 'tips': '早上8点开门，周三休'},
        {'name': 'AFURI 惠比寿', 'location': '惠比寿/涩谷多店', 'price': '¥1000-1500', 'specialties': '柚子盐拉面，清爽汤头配细面', 'tips': '自助点餐机，中文菜单'},
        {'name': '�的木�的�的馆', 'location': '银座', 'price': '¥3000-5000', 'specialties': '�的�的木�的御膳，精致日本料理', 'tips': '需预约，着装正式'},
        {'name': '筑地�的本�的', 'location': '丰洲市场', 'price': '¥2000-4000', 'specialties': '金枪鱼大�的寿司，丰洲市场直送', 'tips': '5点开门，周日休市'},
        {'name': '一兰拉面', 'location': '涩谷/新宿/多店', 'price': '¥1000-2000', 'specialties': '豚骨拉面，浓郁汤头配细面，可选浓度', 'tips': '隔板座位，一兰式点餐'}
    ],
    'paris': [
        {'name': 'Le Bouillon Chartier', 'location': '第九区 rue du Faubourg Montmartre', 'price': '€20-35', 'specialties': '法式洋葱汤、牛排薯条、奶油甜点', 'tips': '百年历史餐厅，手写菜单，人均€20吃撑'},
        {'name': 'Breizh Café', 'location': '玛黑区 rue du Roi de Sicile', 'price': '€15-30', 'specialties': '法式可丽饼（荞麦Galette配火腿芝士/苹果糖），苹果酒', 'tips': '有英文菜单，需排队'},
        {'name': 'Pierre Hermé', 'location': '多店（玛黑/歌剧院）', 'price': '€4-8/个', 'specialties': '马卡龙（Ispahan玫瑰荔枝覆盆子必尝）、千层酥', 'tips': '马卡龙创始店，比Ladurée更新派'},
        {'name': 'Le Comptoir du Panthéon', 'location': '拉丁区', 'price': '€25-45', 'specialties': '法式蜗牛、牛排、鹅肝', 'tips': '拉丁区性价比法餐'},
        {'name': 'Pink Mamma', 'location': '玛黑区', 'price': '€30-50', 'specialties': '意式大餐（烩饭/意面/提拉米苏），工业风装修', 'tips': '需预约，楼梯拍照超美'}
    ],
    'bangkok': [
        {'name': 'Jay Fai（痣姐）', 'location': '耀华力路（唐人街）', 'price': '฿400-1000', 'specialties': '蟹肉煎蛋（招牌฿1000）、醉面、罗惹', 'tips': '米其林一星，路边摊环境，营业到凌晨'},
        {'name': 'Thipsamai', 'location': '是隆路', 'price': '฿100-200', 'specialties': 'Pad Thai（泰式炒河粉），被誉为曼谷最好吃', 'tips': '1956年开业老店，排队约30分钟'},
        {'name': '建兴酒家', 'location': '是隆/四面佛多店', 'price': '฿300-600', 'specialties': '咖喱蟹、芒果糯米饭、冬阴功汤', 'tips': '华人游客必去，需排队'},
        {'name': 'Som Tam Nua', 'location': '暹罗广场', 'price': '฿80-200', 'specialties': '青木瓜沙拉（Som Tam）、烤鸡、糯米饭', 'tips': '泰国王室也光顾，排队约20分钟'},
        {'name': 'Raan Jay Fai', 'location': '考山路附近', 'price': '฿200-500', 'specialties': '蚝仔煎、炒含羞草、泰式炒饭', 'tips': '本地人推荐，环境干净'}
    ],
    'singapore': [
        {'name': '了凡香港油鸡饭面', 'location': '牛车水大厦#02-126', 'price': '$5-10', 'specialties': '油鸡饭/面（米其林一星），叉烧、烧鸭', 'tips': '全球最便宜米其林，周三休息'},
        {'name': '328加东叻沙', 'location': '加东区144/146', 'price': '$6-12', 'specialties': '叻沙Laksa（椰浆咖喱面）、椰浆饭', 'tips': '加东是叻沙发源地，本地人推荐'},
        {'name': '松发肉骨茶', 'location': '克拉码头/多店', 'price': '$10-20', 'specialties': '肉骨茶（排骨汤）、油条、卤味', 'tips': '24小时营业，导游推荐'},
        {'name': '天天海南鸡饭', 'location': '麦士威路美食中心', 'price': '$4-8', 'specialties': '海南鸡饭（白斩鸡+鸡油饭），辣椒酱', 'tips': '美食中心里最热门摊位'},
        {'name': '珍宝海鲜', 'location': '克拉码头/东海岸', 'price': '$40-100/人', 'specialties': '辣椒蟹（招牌）、黑胡椒蟹、麦香虾、咸蛋黄鱿鱼', 'tips': '需提前订座，东海岸店环境好'}
    ],
    'new_york': [
        {'name': "Katz's Delicatessen", 'location': '下东区 Houston St 205', 'price': '$20-40', 'specialties': 'Pastrami三明治（必点）、Corned Beef、Knish', 'tips': '《当哈利遇上莎莉》拍摄地，自己取票找座位'},
        {'name': "Joe's Pizza", 'location': '格林威治村 Carmine St 7', 'price': '$4-8', 'specialties': 'New York Pizza切片，外酥里嫩', 'tips': '布鲁克林桥附近有分店'},
        {'name': 'Shake Shack', 'location': '麦迪逊广场公园/多店', 'price': '$10-20', 'specialties': 'ShackBurger、奶昔、波浪薯条', 'tips': 'NYC代表性汉堡，比麦当劳好吃太多'},
        {'name': 'Levain Bakery', 'location': 'Upper West Side', 'price': '$6-12', 'specialties': '超大巧克力曲奇（Cookie）、坚果酥', 'tips': '世界知名，排队长但值得'},
        {'name': 'Eleven Madison Park', 'location': '麦迪逊大道11号', 'price': '$335/人（tasting menu）', 'specialties': '素食fine dining，蓝瓶子咖啡联名', 'tips': '米其林三星，需提前数月预约'}
    ],
    'london': [
        {'name': 'Borough Market', 'location': 'London Bridge附近', 'price': '£10-25', 'specialties': '生蚝（£6/个）、西班牙火腿三明治、奶酪拼盘', 'tips': '周三-周六营业，11点前人少'},
        {'name': 'Flat Iron', 'location': '多店（考文特花园/SOHO）', 'price': '£12-18', 'specialties': 'Flat Iron牛排（£12）、配菜（烤蔬菜/沙拉）', 'tips': '餐后送冰激凌，人均£20能吃饱'},
        {'name': 'Brick Lane Market', 'location': 'Shoreditch区', 'price': '£5-15', 'specialties': '孟加拉咖喱（Bangla）、贝果三明治、古着', 'tips': '周日最热闹，咖喱屋£8管饱'},
        {'name': 'Portobello Market', 'location': 'Notting Hill', 'price': '£8-20', 'specialties': '英式早餐、古董、手工首饰', 'tips': '周六古董最多，平时是蔬果市场'},
        {'name': 'Dishoom', 'location': 'Kings Cross/多店', 'price': '£15-30', 'specialties': '印度 chai 茶、Bombay板球咖喱、蒜味烤饼', 'tips': '英式印度餐厅NO.1，早餐需排队'}
    ],
    'rome': [
        {'name': 'Roscioli', 'location': '万神殿附近 Via dei Giubbonari 21', 'price': '€40-80', 'specialties': 'Carbonara意面（正宗版）、意式饺子、前菜拼盘', 'tips': '藏酒丰富，订位说是游客会减分'},
        {'name': 'Pizzarium', 'location': '梵蒂冈附近 Via della Meloria 43', 'price': '€5-12', 'specialties': '方形罗马披萨（Pizza al Taglio），配料丰富', 'tips': 'Gabriele Bonci创立，营业到22点'},
        {'name': 'Da Enzo al 29', 'location': 'Trastevere区 Via dei Vascellari 29', 'price': '€30-50', 'specialties': 'Cacio e Pepe（芝士胡椒意面）、炸朝鲜蓟', 'tips': 'Trastevere最热门餐厅，周日休息'},
        {'name': 'Il Marchese', 'location': '西班牙台阶附近', 'price': '€30-60', 'specialties': 'Carbonara创始店之一，银舍利干酪现磨', 'tips': 'Carbonara正宗吃法：佩科里诺+鸡蛋+培根'},
        {'name': 'Pompi', 'location': 'Villa Borghese附近', 'price': '€5-15', 'specialties': '提拉米苏（世界知名）、意式奶冻', 'tips': '1959年开业，罗马最好吃提拉米苏'}
    ],
    'dubai': [
        {'name': 'Al Ustad Special Kebab', 'location': '迪拜老城区', 'price': 'AED50-150', 'specialties': '烤肉串（Kebab）、Shawarma、皮塔饼', 'tips': '1970年代开业，迪拜最古老餐厅之一'},
        {'name': 'Ravi Restaurant', 'location': 'Satwa区', 'price': 'AED20-60', 'specialties': 'Biryani香饭、Chicken Tikka、Karahi', 'tips': '本地人最爱，性价比超高，周五午餐排队'},
        {'name': 'Tim Hortons', 'location': '多店', 'price': 'AED15-40', 'specialties': 'Double Double咖啡、Timbits甜甜圈', 'tips': '加拿大连锁，24小时营业'},
        {'name': 'Zaroob', 'location': '德拉区', 'price': 'AED30-80', 'specialties': '中东街头美食，Mansaf、Hummus、Shawarma', 'tips': '平价阿拉伯餐厅，24小时营业'},
        {'name': 'Pierchic', 'location': 'Madinat Jumeirah', 'price': 'AED200-500', 'specialties': '海鲜（龙虾/螃蟹）、意面、甜点', 'tips': '海边餐厅，景色绝佳，需提前订座'}
    ],
    'seoul': [
        {'name': '陈玉华奶奶元祖一只鸡', 'location': '孔德市场', 'price': '₩15000-25000', 'specialties': '一只鸡（炖鸡料理）、年糕、饺子', 'tips': '1978年开业，汤头鲜美，24小时营业'},
        {'name': 'Myth猪蹄', 'location': '广藏市场对面', 'price': '₩20000-35000', 'specialties': '猪蹄拼盘（凉拌/蒜香）、冷面', 'tips': '弘大也有分店，配小菜丰富'},
        {'name': '新村食堂', 'location': '新村/多店', 'price': '₩15000-30000', 'specialties': '韩定食、烤肉、豆腐锅', 'tips': '连锁店，本地人食堂级别'},
        {'name': '桥村炸鸡', 'location': '弘大/多店', 'price': '₩15000-25000', 'specialties': '蜂蜜炸鸡（原味/辣味）、啤酒炸鸡套餐', 'tips': '韩剧《来自星星的你》带火，24小时外卖'},
        {'name': '东大门一只鸡', 'location': '东大门历史公园站', 'price': '₩15000-20000', 'specialties': '炖鸡料理、人参鸡粥', 'tips': '顺路可以吃，离东大门设计广场很近'}
    ]
}

# 详细疾病预防数据
DISEASE_PREVENTION = {
    'tokyo': {'commonDiseases': '季节性流感（冬季高发）、花粉过敏（春季杉木花粉）', 'vaccines': '建议接种：流感疫苗（冬季前）、破伤风', 'mosquitoRisk': '夏季有日本脑炎风险（农村地区），登革热罕见', 'airQuality': '春季沙尘偶尔影响，整体优良', 'tips': '花粉症患者记得戴口罩，夏季注意防蚊'},
    'paris': {'commonDiseases': '季节性流感、肠胃炎（旅游者常见）', 'vaccines': '建议接种：流感疫苗、破伤风-白喉加强', 'mosquitoRisk': '淡色家蚊为主，登革热风险低', 'airQuality': '偶尔PM2.5预警（欧洲标准）', 'tips': '自来水可直饮，但部分地区管道老旧'},
    'bangkok': {'commonDiseases': '登革热、疟疾（在边境地区）、寨卡病毒', 'vaccines': '必须接种：黄热病（如来自疫区）；强烈建议：甲肝、乙肝、伤寒、日本脑炎', 'mosquitoRisk': '全年高风险！登革热在雨季（6-10月）高发', 'airQuality': '旱季（2-5月）空气质量差，雾霾严重', 'tips': '务必使用驱蚊液（含DEET），穿长袖，避开黄昏清晨'},
    'singapore': {'commonDiseases': '登革热（全年风险）、手足口症', 'vaccines': '建议接种：流感疫苗、甲肝、破伤风', 'mosquitoRisk': '登革热风险全年存在，骨痛热症是本地流行病', 'airQuality': '整体优良，偶尔受邻国印尼烧芭影响', 'tips': '登革热比新冠更普遍！注意清除积水，使用驱蚊水'},
    'new_york': {'commonDiseases': '季节性流感、莱姆病（在公园/郊区）', 'vaccines': '建议接种：流感疫苗（冬季）、COVID-19加强针', 'mosquitoRisk': '夏季蜱虫（莱姆病源），蚊媒疾病风险低', 'airQuality': '偶尔空气质量差警报', 'tips': '中央公园草地注意蜱虫，户外活动后检查身体'},
    'london': {'commonDiseases': '季节性流感、诺如病毒', 'vaccines': '建议接种：流感疫苗', 'mosquitoRisk': '极低', 'airQuality': '整体良好', 'tips': '冬季流感高发季注意防护'},
    'rome': {'commonDiseases': '莱什mania（在南方）、季节性流感', 'vaccines': '建议接种：流感疫苗、甲肝（如计划吃街边摊）', 'mosquitoRisk': '中意南部有西尼罗河病毒风险', 'airQuality': '夏季臭氧偶尔超标', 'tips': '南部地区注意防蚊'},
    'sydney': {'commonDiseases': '季节性流感（6-8月）、COVID-19', 'vaccines': '建议接种：流感疫苗（南半球季节提前接种）', 'mosquitoRisk': '夏季（12-2月）蚊虫活跃，罗斯河病毒', 'airQuality': '丛林火灾季节（夏末）可能差', 'tips': '夏季户外记得驱蚊，注意防晒'},
    'dubai': {'commonDiseases': '中暑（夏季5-10月）、胃肠炎', 'vaccines': '建议接种：流感疫苗（冬季）、甲肝、破伤风', 'mosquitoRisk': '极低（干燥气候不适蚊虫生存）', 'airQuality': '夏季酷热，体感温度超45°C', 'tips': '夏季户外活动极其危险！大量补水，避开11-16点'},
    'seoul': {'commonDiseases': '季节性流感（冬季12-2月）、MERS（偶发）', 'vaccines': '建议接种：流感疫苗（冬季前）、新冠加强针', 'mosquitoRisk': '夏季有日本脑炎风险（农村地区）', 'airQuality': '春季沙尘暴（PM10），冬季雾霾（PM2.5）严重', 'tips': '沙尘暴天戴N95口罩，空气净化器必备'},
    'default': {'commonDiseases': '季节性流感、胃肠炎', 'vaccines': '建议接种：流感疫苗、破伤风基础', 'mosquitoRisk': '视地区而定', 'airQuality': '视城市而定', 'tips': '注意个人卫生，接种常规疫苗'}
}

# 各城市节日详细数据
FESTIVALS_DATA = {
    'tokyo': [
        {'name': '樱花季（3月下旬-4月中旬）', 'desc': '上野公园、千鸟渊赏樱，野餐文化。最佳时间4月第一周，夜樱灯光秀需提前预约。注意事项：樱花季酒店价格翻倍，建议提前3个月预订'},
        {'name': '衹园祭（7月）', 'desc': '京都最大祭典，山鉾巡行（17日和24日）是高潮。宵山前祭（14-16日）免费参观。体验：穿浴衣参加，建议在八坂神社周边'},
        {'name': '盂兰盆节（8月中旬）', 'desc': '日本传统节日，部分公司放假1-2周。东京明治神宫、新宿等地有盆踊り（孟兰盆舞）活动'},
        {'name': '正月（1月1-3日）', 'desc': '新年参拜（初詣），明治神宫、代代木公园最热闹。饮食：御节料理、年糕汤。注意事项：许多商店餐厅休息，提前准备'}
    ],
    'paris': [
        {'name': '国庆节（7月14日）', 'desc': '香榭丽舍阅兵式（10:00开始），埃菲尔铁塔烟火晚会（23:00）。最佳观赏点：战神广场、特罗卡德罗广场。建议提前4小时占位'},
        {'name': '音乐节（6月21日）', 'desc': '全城免费户外音乐会，街头巷尾都有表演。古典、摇滚、爵士各类风格。建议地点：塞纳河边、贝尔西公园'},
        {'name': '白昼节（Fête de la Musique）', 'desc': '6月21日夏至，巴黎不眠夜。歌剧院免费演出，地铁通宵运营。'},
        {'name': '圣诞集市（12月）', 'desc': '香榭丽舍、协和广场、市政厅圣诞市场。热红酒（Vin Chaud）、烤肠、可丽饼。注意：小偷多，防盗'}
    ],
    'bangkok': [
        {'name': '宋干节（4月13-15日）', 'desc': '泰国新年，泼水节！考山路、是隆路变成水战天堂。注意事项：泼水节期间机票酒店涨价3倍，穿着湿身后不会走光的衣服'},
        {'name': '水灯节（11月）', 'desc': '放水灯祈福，最壮观在清迈。曼谷湄南河畔也有活动。游客可以参与放水灯，注意环保不要用塑料'},
        {'name': '鬼节（9-10月）', 'desc': '中国潮州人传统，隆柏林Sa坊Nguan市场拜祭好兄弟。禁止议论：对路祭品保持尊重。路边大排档临时兴起'},
        {'name': '国王生日（12月5日）', 'desc': '国庆节，皇家圣火仪式，大王宫开放免费参观。着装：穿黑色或白色表示敬意。严禁：对皇室不敬'}
    ],
    'singapore': [
        {'name': '农历新年（1-2月）', 'desc': '牛车水灯展，舞狮舞龙，捞鱼生（拉高高寓意）。最佳：牛车水年货市场。禁忌：新年不扫地、不打骂孩子、不说不吉利话'},
        {'name': '哈芝节（伊斯兰历）', 'desc': '马来穆斯林盛大节日，芽笼士乃有传统表演和美食。建议参观清真寺需着装得体。日期：每年不同'},
        {'name': '中元节（7月）', 'desc': '潮州人传统，拜祭好兄弟。严禁：路祭品不踩踏、不拍摄。芽笼区有歌台表演'},
        {'name': '屠妖节（10-11月）', 'desc': '印度光明节，小印度装饰最华丽。最佳参观时间傍晚。着装：避免暴露'}
    ],
    'new_york': [
        {'name': '感恩节大游行（11月第四个周四）', 'desc': '巨型气球和花车从中央公园西到梅西百货。最佳观赏：哥伦布圆环附近。时间：9点开始，约3小时'},
        {'name': '时代广场跨年夜（12月31日）', 'desc': '水晶球降落，百万人在现场。建议提前8小时占位，穿成人纸尿片。注意：天气极冷，防寒装备必备'},
        {'name': '独立日烟火（7月4日）', 'desc': '东河烟火，帝国大厦配合亮灯。最佳观赏点：布鲁克林大桥公园、Roosevelt Island'},
        {'name': '万圣节（10月31日）', 'desc': '格林威治村万圣节大游行，世界最大。变装要求创意。注意事项：人多拥挤，注意安全'}
    ],
    'london': [
        {'name': '新年烟火（1月1日）', 'desc': '伦敦眼烟火秀，需提前订票£10-25。免费观赏： Westminster Bridge、South Bank'},
        {'name': '诺丁山嘉年华（8月最后一个周末）', 'desc': '欧洲最大街头狂欢，加勒比文化。钢鼓乐、嘉年华服装。注意事项：人多，请勿进入隔离区'},
        {'name': '圣诞点灯（11月）', 'desc': '摄政街/牛津街圣诞灯饰亮灯仪式。最佳：点灯后1-2周内参观最美'},
        {'name': 'Royal Ascot赛马周（6月）', 'desc': '英国社交盛事，着装讲究（戴帽子传统）。门票：会员区需正装。注意：周中有女士日，氛围最隆重'}
    ],
    'dubai': [
        {'name': '迪拜购物节（1月-2月）', 'desc': '全场5-9折，送黄金、豪车抽奖。最佳血拼：迪拜购物中心、迪拜mall of Emirates。退款：注意商店退款政策'},
        {'name': '斋月（伊斯兰历）', 'desc': '日出到日落禁食，商店营业时间调整。注意事项：公共场合禁食禁饮（非穆斯林也要遵守），穿保守服装'},
        {'name': '开斋节（斋月后）', 'desc': '穆斯林新年，家人团聚，送礼物。公共假期，全城庆祝。清真寺开放参观'},
        {'name': '阿联酋国庆节（12月2日）', 'desc': '阅兵式、烟火表演、赛车活动。注意事项：国旗不能触地。最佳：Marina烟火'}
    ],
    'seoul': [
        {'name': '春节（农历正月初一）', 'desc': '韩国家庭团聚，吃年糕汤（韩式年糕汤）。注意事项：地铁拥挤，大型超市初一到初三休息'},
        {'name': '中秋节（农历八月十五）', 'desc': '家庭团聚，吃松饼（韩式月饼）和芋头汤。注意事项：高速公路拥堵，建议提前订座'},
        {'name': '燃灯节（5月）', 'desc': '佛诞日，曹溪寺和仁寺洞有燃灯大游行。免费参观。建议：穿舒适鞋'},
        {'name': '圣诞灯饰（11月-次年1月）', 'desc': '明洞、乙支路、梨泰院圣诞树和灯饰。DDP有主题灯展。建议：晚上参观更美'}
    ]
}

# 各城市风俗习惯详细数据
CUSTOMS_DATA = {
    'tokyo': [
        '进入寺庙前需在手水舍净手：先洗左手，再洗右手，最后捧水漱口',
        '脱鞋进入榻榻米房间，鞋子摆放在门口，拖鞋进屋后脱掉室内拖鞋',
        '电车上不大声说话、不吃东西（长途除外），手机调静音',
        '日本人不爱插队，排队时保持距离被视为礼貌',
        '在餐厅未说「可以吗」前不要开始吃，等所有人菜上齐',
        '鞠躬是日常问候，角度代表尊重程度：15度点头、30度问候、45度道歉'
    ],
    'paris': [
        '贴面礼（la bise）：朋友间两颊亲吻，初次见面通常不执行',
        '午餐时间长（12-14点），晚餐晚（20点后），不要催',
        '不说法语会被认为不礼貌，学几句Bonjour/Merci很重要',
        '法国人不给小费，服务费已含在账单，但好的服务可以给5-10%',
        '不要美国人式的大声说话，法国人注重隐私和安静',
        '在咖啡馆坐露天座位看人被视为什么都不点会遭白眼'
    ],
    'bangkok': [
        '不可触碰他人头部（头部最神圣），包括摸小孩的头',
        '不可用脚指向人或佛像，坐姿也要注意不要让脚朝向他人',
        '寺庙需穿长裤长裙（不能露膝），禁止穿无袖上衣',
        '不可手指指向僧侣，递东西时双手奉上',
        '泰国人避免公开批评王室，谈论时要极其谨慎',
        '在公交车上给老人让座是必须的礼仪'
    ],
    'singapore': [
        '不随地吐痰、不乱扔垃圾，罚款S$1000+',
        '禁烟区域多（所有室内、公共场所），违规罚款S$1000',
        '无死刑犯罪处鞭刑，法律严格但公平',
        '在电梯/地铁先下后上，扶手电梯靠右站',
        '称呼长辈用"uncle/auntie"表示尊敬',
        '吃东西时用右手，官方语言是英语但中文很普遍'
    ],
    'new_york': [
        '给小费是必须的（餐厅15-20%，出租车10-15%，酒店行李员$1-2/件）',
        '走路快，靠右站电梯，左边让给赶时间的人',
        '纽约客直接，不喜欢拐弯抹角，这是正常文化',
        '地铁票和卡不要放进口袋会消磁，需装在钱包里',
        '不要盯着别人看，这是非常不礼貌的行为',
        '报警/急救/火警统一拨打911'
    ],
    'london': [
        '乘坐地铁/公交先下后上，排队上车',
        '公共场合注意排队，不要插队',
        '小费不是强制的，但餐厅通常给10-15%',
        '英镑分英格兰、苏格兰、北爱尔兰等多种，部分商店可能不收',
        '周日商店关门早（通常17:00-18:00）',
        '不要问别人隐私问题：工资、政治、宗教'
    ],
    'dubai': [
        '斋月期间白天不可在公共场合饮食、喝水、吸烟（非穆斯林也要遵守）',
        '着装保守，避免暴露（海滩除外），男女都要注意',
        '公共场合禁止饮酒（酒店/酒吧除外），需年满21岁',
        '周四到周六是周末（政府、私企），周五是主麻日',
        '不要对当地人拍照，特别是女性',
        '左手被视为不洁，握手/递东西用右手'
    ],
    'seoul': [
        '韩国人喝酒有规矩：酒杯不能空（立即续酒），互相倒酒表示尊重',
        '不能把筷子立在饭里（像祭祀），这很不吉利',
        '尊敬长辈：用双手递/接东西，学几个敬语加分',
        '韩国人喜欢AA制，朋友间也会分担账单',
        '弘大/江南等夜店有年龄限制（19+，有的25+），带ID',
        '冬季室内外温差大，建议洋葱式穿法'
    ]
}

# ==================== 辅助函数 ====================

def get_city_name(city_id, city):
    """获取城市名称"""
    return city.get('name', city_id.replace('_', ' ').title())

def get_attrctions(city_id):
    """获取景点推荐"""
    if city_id in ATTRACTION_DETAILS:
        return ATTRACTION_DETAILS[city_id]
    return [
        {'name': f'{get_city_name(city_id, {})}市中心', 'type': '地标', 'location': '市中心', 
         'why': '城市核心区域，探索当地生活的最佳起点', 'bestTime': '白天', 'duration': '2-3小时', 'tips': '步行探索最佳，注意周边安全'},
        {'name': f'{get_city_name(city_id, {})}博物馆', 'type': '博物馆', 'location': '市中心', 
         'why': '了解城市历史和文化的最佳场所', 'bestTime': '下午', 'duration': '2-3小时', 'tips': '关注免费开放日或学生优惠'},
        {'name': f'{get_city_name(city_id, {})}传统市场', 'type': '市场', 'location': '老城区', 
         'why': '体验当地日常生活，购买特色纪念品', 'bestTime': '上午', 'duration': '2小时', 'tips': '记得砍价，现金更方便'},
        {'name': f'{get_city_name(city_id, {})}公园', 'type': '公园', 'location': '市区', 
         'why': '当地人休闲的首选，感受城市绿肺', 'bestTime': '傍晚', 'duration': '1-2小时', 'tips': '适合野餐和拍照'},
        {'name': f'{get_city_name(city_id, {})}观景台', 'type': '观景', 'location': '制高点', 
         'why': '俯瞰城市全景的最佳角度，日落时分尤佳', 'bestTime': '日落前1小时', 'duration': '1-2小时', 'tips': '提前查日落时间，避开人群'}
    ]

def get_food(city_id):
    """获取美食推荐"""
    if city_id in FOOD_DETAILS:
        return FOOD_DETAILS[city_id]
    return [
        {'name': f'{get_city_name(city_id, {})}本地餐厅', 'location': '市中心', 'price': '当地价格', 'specialties': '当地特色料理', 'tips': '选择本地人多的餐厅'},
        {'name': f'{get_city_name(city_id, {})}夜市', 'location': '夜市区', 'price': '经济实惠', 'specialties': '街头美食', 'tips': '选择排队长的摊位'},
        {'name': f'{get_city_name(city_id, {})}传统市场', 'location': '老城区', 'price': '平价', 'specialties': '地道小吃', 'tips': '注意食品卫生'}
    ]

def get_disease_prevention(city_id):
    """获取疾病预防数据"""
    if city_id in DISEASE_PREVENTION:
        return DISEASE_PREVENTION[city_id]
    return DISEASE_PREVENTION['default']

def get_festivals(city_id):
    """获取节日数据"""
    if city_id in FESTIVALS_DATA:
        return FESTIVALS_DATA[city_id]
    return [
        {'name': '元旦（1月1日）', 'desc': '新年庆典，城市烟花和派对'},
        {'name': '当地国庆节', 'desc': '阅兵、烟火表演、街头派对'},
        {'name': '圣诞节/冬至', 'desc': '圣诞市场、灯饰、节日大餐'},
        {'name': '传统节日', 'desc': '当地特色庆典，体验传统文化'}
    ]

def get_customs(city_id):
    """获取风俗习惯"""
    if city_id in CUSTOMS_DATA:
        return CUSTOMS_DATA[city_id]
    return [
        '了解并尊重当地宗教信仰和文化习俗',
        '学习基本礼貌用语：你好、谢谢、对不起',
        '注意当地用餐礼仪和禁忌',
        '公共场合保持适当音量',
        '排队时保持秩序和适当距离',
        '着装得体，特别是在宗教场所'
    ]

def get_food_safety(city_id):
    """获取食品安全数据"""
    food_safety_common = {
        'tapWater': '建议饮用瓶装水', 
        'streetFood': '选择本地人多的干净摊位，注意观察制作过程',
        'seafood': '选择新鲜食材，彻底煮熟',
        'allergy': '提前告知服务员食物过敏，用当地语言写下过敏原'
    }
    
    safe_tap_cities = ['tokyo', 'singapore', 'paris', 'new_york', 'seoul', 'london']
    if city_id in safe_tap_cities:
        food_safety_common['tapWater'] = '可直接饮用，符合严格标准'
        food_safety_common['streetFood'] = '非常安全，选择本地人多的摊位'
    elif city_id == 'bangkok':
        food_safety_common['tapWater'] = '不可直接饮用，只用瓶装水刷牙漱口'
        food_safety_common['streetFood'] = '风险较高，选择排队本地人多的摊位，不吃生食'
    elif city_id == 'dubai':
        food_safety_common['tapWater'] = '淡化海水，可直接饮用，口感略咸'
        food_safety_common['streetFood'] = '酒店餐厅安全，路边摊注意卫生'
    
    return food_safety_common

# ==================== 主处理函数 ====================

def enhance_all_cities():
    """增强所有城市数据"""
    # 读取数据
    with open('data_enhanced.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'var CITY_DATABASE = ({[\s\S]*?})\s*;', content)
    data = json.loads(match.group(1))
    
    updated_count = 0
    
    for city_id, city in data.items():
        # 1. 景点推荐
        if not city.get('lifestyle', {}).get('attractionDetails'):
            if 'lifestyle' not in city:
                city['lifestyle'] = {}
            city['lifestyle']['attractionDetails'] = get_attrctions(city_id)
        else:
            # 补充缺失的景点字段
            existing_names = [a.get('name', '') for a in city['lifestyle'].get('attractionDetails', [])]
            for attraction in get_attrctions(city_id):
                if attraction['name'] not in existing_names:
                    city['lifestyle']['attractionDetails'].append(attraction)
        
        # 2. 美食推荐
        if not city.get('lifestyle', {}).get('foodDetails'):
            city['lifestyle']['foodDetails'] = get_food(city_id)
        else:
            # 补充必点菜品
            existing_names = [f.get('name', '') for f in city['lifestyle'].get('foodDetails', [])]
            for food in get_food(city_id):
                if food['name'] not in existing_names:
                    city['lifestyle']['foodDetails'].append(food)
        
        # 3. 疾病预防
        city['diseasePrevention'] = get_disease_prevention(city_id)
        
        # 4. 食品安全
        city['foodSafety'] = get_food_safety(city_id)
        
        # 5. 节日
        if not city.get('festivals'):
            city['festivals'] = get_festivals(city_id)
        elif len(city.get('festivals', [])) < 4:
            existing_names = [f.get('name', '') for f in city.get('festivals', [])]
            for festival in get_festivals(city_id):
                if festival['name'] not in existing_names:
                    city['festivals'].append(festival)
        
        # 6. 风俗习惯
        if not city.get('customs') or len(city.get('customs', [])) < 6:
            city['customs'] = get_customs(city_id)
        
        updated_count += 1
    
    # 写回文件
    new_content = f'var CITY_DATABASE = {json.dumps(data, ensure_ascii=False)};'
    
    with open('data_enhanced.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✅ 成功更新 {updated_count} 个城市的数据！")
    
    # 验证数据
    verify_data()

def verify_data():
    """验证数据完整性"""
    with open('data_enhanced.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'var CITY_DATABASE = ({[\s\S]*?})\s*;', content)
    data = json.loads(match.group(1))
    
    print("\n=== 数据验证报告 ===\n")
    
    # 检查关键城市
    key_cities = ['tokyo', 'paris', 'bangkok', 'singapore', 'new_york']
    
    for city_id in key_cities:
        if city_id not in data:
            continue
        city = data[city_id]
        print(f"📍 {city.get('name', city_id)}:")
        
        # 景点
        attractions = city.get('lifestyle', {}).get('attractionDetails', [])
        print(f"   景点: {len(attractions)}个")
        if attractions:
            print(f"   最新: {attractions[0].get('name', '未知')}")
        
        # 美食
        foods = city.get('lifestyle', {}).get('foodDetails', [])
        print(f"   美食: {len(foods)}个")
        if foods:
            food = foods[0]
            print(f"   最新: {food.get('name', '未知')} - 必点: {food.get('specialties', '未知')}")
        
        # 疾病预防
        dp = city.get('diseasePrevention', {})
        print(f"   疾病预防: {'✓ 已完善' if dp.get('commonDiseases') != '❌ 缺失' else '✗ 缺失'}")
        
        # 食品安全
        fs = city.get('foodSafety', {})
        print(f"   食品安全: {'✓ 已完善' if fs.get('tapWater') else '✗ 缺失'}")
        
        print()
    
    print(f"总城市数: {len(data)}")

if __name__ == '__main__':
    enhance_all_cities()
