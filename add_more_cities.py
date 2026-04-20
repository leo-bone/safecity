#!/usr/bin/env python3
"""
批量为城市添加emergencyContacts数据
"""
import re

# 基于国家的默认emergencyContacts数据
COUNTRY_EC = {
    '日本': {
        'police': '110', 'ambulance': '119', 'fire': '119', 'tourist': '050-3816-2727',
        'hospitals': [{'name': '当地市民医院', 'phone': '当地电话', 'features': ['24H急诊', '日语服务']}],
        'consulates': [{'name': '中国驻日本使领馆', 'phone': '03-3403-3388', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Safety Tip', 'icon': '📱', 'description': '日本官方灾害提醒'}],
        'selfProtection': [{'icon': '🔒', 'title': '财产安全', 'tips': ['游客密集区防盗', '内侧口袋放贵重物']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['购买Suica卡']}, {'icon': '🚌', 'name': '公交', 'tips': ['后上前下']}]
    },
    '韩国': {
        'police': '112', 'ambulance': '119', 'fire': '119', 'tourist': '02-1330',
        'hospitals': [{'name': '当地大学医院', 'phone': '当地电话', 'features': ['24H急诊', '英语服务']}],
        'consulates': [{'name': '中国驻韩国大使馆', 'phone': '02-755-0468', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Kakao T', 'icon': '🚕', 'description': '打车应用'}],
        'selfProtection': [{'icon': '🌙', 'title': '夜间安全', 'tips': ['弘大梨泰院深夜注意', '不接陌生人饮料']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['T-money卡通用']}, {'icon': '🚌', 'name': '公交', 'tips': ['换乘优惠']}]
    },
    '泰国': {
        'police': '191', 'ambulance': '1669', 'fire': '199', 'tourist': '1672',
        'hospitals': [{'name': '当地国际医院', 'phone': '当地电话', 'features': ['24H急诊', '英语服务', 'JCI认证']}],
        'consulates': [{'name': '中国驻泰国大使馆', 'phone': '+66-2-245-7032', 'hours': '周一至周五 9:00-11:30'}],
        'safetyApps': [{'name': 'Grab', 'icon': '🚕', 'description': '打车应用'}],
        'selfProtection': [{'icon': '🛡️', 'title': '安全提示', 'tips': ['嘟嘟车需议价', '佛牌骗局警惕', '登革热防蚊']}],
        'transport': [{'icon': '🚇', 'name': 'BTS/MRT', 'tips': ['不通用需购票']}, {'icon': '🛺', 'name': '嘟嘟车', 'tips': ['需议价']}]
    },
    '法国': {
        'police': '17', 'ambulance': '15', 'fire': '18', 'tourist': '3430',
        'hospitals': [{'name': '当地Centre Hospitalier', 'phone': '15', 'features': ['24H急诊', '法语/英语']}],
        'consulates': [{'name': '中国驻法国大使馆', 'phone': '01-49-52-19-50', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'TousAntiCovid', 'icon': '📱', 'description': '法国官方防疫'}],
        'selfProtection': [{'icon': '🎭', 'title': '防盗（最重要）', 'tips': ['假警察骗局警惕', '景点小偷多', '贵重物品存酒店']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['高峰期小偷多']}, {'icon': '🚌', 'name': '公交', 'tips': ['需提前购票']}]
    },
    '英国': {
        'police': '999', 'ambulance': '999', 'fire': '999', 'tourist': '0300-123-6789',
        'hospitals': [{'name': '当地A&E急诊', 'phone': '999', 'features': ['24H急诊', '英语']}],
        'consulates': [{'name': '中国驻英国大使馆', 'phone': '020-7299-4049', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Citizen', 'icon': '📱', 'description': '实时犯罪预警'}],
        'selfProtection': [{'icon': '🎭', 'title': '防盗', 'tips': ['伦敦桥周边注意', '西区骗局多', '牛津街扒手']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['Oyster卡有上限']}, {'icon': '🚌', 'name': '公交', 'tips': ['不报站名']}]
    },
    '德国': {
        'police': '110', 'ambulance': '112', 'fire': '112', 'tourist': '030-1888',
        'hospitals': [{'name': '当地Klinikum', 'phone': '112', 'features': ['24H急诊', '德语/英语']}],
        'consulates': [{'name': '中国驻德国大使馆', 'phone': '030-27588-0', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'NINA', 'icon': '📱', 'description': '官方灾害预警'}],
        'selfProtection': [{'icon': '🔒', 'title': '防盗', 'tips': ['柏林部分区域注意', 'ICE火车防盗']}],
        'transport': [{'icon': '🚇', 'name': 'U-Bahn/S-Bahn', 'tips': ['DB Navigator App']}, {'icon': '🚌', 'name': '公交', 'tips': ['BVG App']}]
    },
    '美国': {
        'police': '911', 'ambulance': '911', 'fire': '911', 'tourist': '311',
        'hospitals': [{'name': '当地Emergency Room', 'phone': '911', 'features': ['24H急诊', '英语', '费用昂贵']}],
        'consulates': [{'name': '中国驻美国使领馆', 'phone': '各地不同', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Citizen', 'icon': '📱', 'description': '实时犯罪预警'}],
        'selfProtection': [{'icon': '🚇', 'title': '地铁安全', 'tips': ['深夜不坐', '站靠近工作人员']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['大城市有']}, {'icon': '🚕', 'name': 'Uber/出租车', 'tips': ['Uber最常用']}]
    },
    '意大利': {
        'police': '113', 'ambulance': '118', 'fire': '115', 'tourist': '060060',
        'hospitals': [{'name': '当地Ospedale', 'phone': '118', 'features': ['24H急诊', '意大利语/英语']}],
        'consulates': [{'name': '中国驻意大利大使馆', 'phone': '06-96524200', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'YUKU', 'icon': '📱', 'description': '急救App'}],
        'selfProtection': [{'icon': '🎭', 'title': '防盗', 'tips': ['罗马威尼斯小偷多', '警惕假警察']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['罗马ATAC较乱']}, {'icon': '🚌', 'name': '公交', 'tips': ['记得打票']}]
    },
    '西班牙': {
        'police': '112', 'ambulance': '061', 'fire': '080', 'tourist': '902-102-112',
        'hospitals': [{'name': '当地Hospital', 'phone': '112', 'features': ['24H急诊', '西班牙语/英语']}],
        'consulates': [{'name': '中国驻西班牙大使馆', 'phone': '915-194-242', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'AlertCops', 'icon': '👮', 'description': '警方报警App'}],
        'selfProtection': [{'icon': '🎭', 'title': '防盗', 'tips': ['巴塞罗那小偷极多', '海滩财物防盗']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['马德里/巴塞罗那有']}, {'icon': '🚌', 'name': '公交', 'tips': ['T-us Transportes']}]
    },
    '瑞士': {
        'police': '117', 'ambulance': '144', 'fire': '118', 'tourist': '0800-100-300',
        'hospitals': [{'name': '当地Kantonsspital', 'phone': '144', 'features': ['24H急诊', '多语言']}],
        'consulates': [{'name': '中国驻瑞士大使馆', 'phone': '031-352-7333', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Rega', 'icon': '🚁', 'description': '瑞士救援App'}],
        'selfProtection': [{'icon': '⛰️', 'title': '山区安全', 'tips': ['注意天气变化', '量力而行']}],
        'transport': [{'icon': '🚇', 'name': '地铁/火车', 'tips': ['Swiss Travel Pass']}, {'icon': '🚌', 'name': '公交', 'tips': ['PostBus全覆盖']}]
    },
    '新加坡': {
        'police': '999', 'ambulance': '995', 'fire': '995', 'tourist': '1800-736-2000',
        'hospitals': [{'name': 'NUH/中央医院', 'phone': '+65-6779-5555', 'features': ['24H急诊', '英语', '国立']}],
        'consulates': [{'name': '中国驻新加坡大使馆', 'phone': '+65-6471-2107', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'SGSecure', 'icon': '📱', 'description': '国家安全预警'}],
        'selfProtection': [{'icon': '🚫', 'title': '法规严格', 'tips': ['乱丢垃圾重罚', '室内禁烟']}],
        'transport': [{'icon': '🚇', 'name': 'MRT', 'tips': ['EZ-Link通用']}, {'icon': '🚌', 'name': '公交', 'tips': ['报站中英双语']}]
    },
    '马来西亚': {
        'police': '999', 'ambulance': '999', 'fire': '994', 'tourist': '1300-885-999',
        'hospitals': [{'name': '吉隆坡中央医院', 'phone': '+60-3-2615-5555', 'features': ['24H急诊', '马来语/英语']}],
        'consulates': [{'name': '中国驻马来西亚大使馆', 'phone': '03-2142-1708', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Grab', 'icon': '🚕', 'description': '打车应用'}],
        'selfProtection': [{'icon': '🌴', 'title': '海滩安全', 'tips': ['海啸风险区注意', '离岛注意天气']}],
        'transport': [{'icon': '🚇', 'name': 'LRT/MRT', 'tips': ['Touch n Go卡']}, {'icon': '🚌', 'name': '公交', 'tips': ['较不准时']}]
    },
    '中国香港': {
        'police': '999', 'ambulance': '999', 'fire': '999', 'tourist': '2501-8123',
        'hospitals': [{'name': '玛丽/威尔斯亲王医院', 'phone': '999', 'features': ['24H急诊', '粤语/英语']}],
        'consulates': [],
        'safetyApps': [{'name': 'Hong Kong Police', 'icon': '👮', 'description': '警方App'}],
        'selfProtection': [{'icon': '🚇', 'title': '地铁安全', 'tips': ['港铁高效', '注意末班']}],
        'transport': [{'icon': '🚇', 'name': '港铁MTR', 'tips': ['八达通卡通用']}, {'icon': '🚌', 'name': '公交', 'tips': ['双层巴士']}]
    },
    '中国': {
        'police': '110', 'ambulance': '120', 'fire': '119', 'tourist': '12345',
        'hospitals': [{'name': '当地三甲医院', 'phone': '120', 'features': ['24H急诊', '多语言']}],
        'consulates': [{'name': '美国/英国使领馆', 'phone': '各地不同', 'hours': '周一至周五'}],
        'safetyApps': [{'name': '微信/支付宝', 'icon': '📱', 'description': '支付出行必备'}],
        'selfProtection': [{'icon': '🚇', 'title': '地铁安全', 'tips': ['高峰期防盗', '看好手机']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['微信支付宝可刷']}, {'icon': '🚌', 'name': '公交', 'tips': ['支付宝可刷']}]
    },
    '阿联酋': {
        'police': '999', 'ambulance': '998', 'fire': '997', 'tourist': '800-8500',
        'hospitals': [{'name': '当地公立医院', 'phone': '998', 'features': ['24H急诊', '阿拉伯语/英语']}],
        'consulates': [{'name': '中国驻阿联酋大使馆', 'phone': '02-443-4276', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Dubai Police', 'icon': '👮', 'description': '警方App'}],
        'selfProtection': [{'icon': '🕌', 'title': '宗教文化', 'tips': ['斋月注意饮食', '穿着保守']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['迪拜有', 'Nol卡']}, {'icon': '🚌', 'name': '公交', 'tips': ['有空调']}]
    },
    '澳大利亚': {
        'police': '000', 'ambulance': '000', 'fire': '000', 'tourist': '1300-555-010',
        'hospitals': [{'name': '当地Hospital Emergency', 'phone': '000', 'features': ['24H急诊', '英语']}],
        'consulates': [{'name': '中国驻澳大利亚大使馆', 'phone': '02-6228-3988', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Emergency+', 'icon': '📱', 'description': '官方急救定位'}],
        'selfProtection': [{'icon': '☀️', 'title': '防晒', 'tips': ['紫外线极强SPF50+', '全年防晒']}],
        'transport': [{'icon': '🚇', 'name': '地铁/轻轨', 'tips': ['Opal卡/Myki卡']}, {'icon': '🚌', 'name': '公交', 'tips': ['班次间隔大']}]
    },
    '加拿大': {
        'police': '911', 'ambulance': '911', 'fire': '911', 'tourist': '1-800-463-8558',
        'hospitals': [{'name': '当地Hospital Emergency', 'phone': '911', 'features': ['24H急诊', '英语/法语']}],
        'consulates': [{'name': '中国驻加拿大使馆', 'phone': '613-878-4422', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Canary', 'icon': '📱', 'description': '安全App'}],
        'selfProtection': [{'icon': '❄️', 'title': '冬季注意', 'tips': ['寒冷注意保暖', '冰雪防滑']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['多伦多/温哥华有']}, {'icon': '🚌', 'name': '公交', 'tips': ['班次间隔大']}]
    },
    '荷兰': {
        'police': '112', 'ambulance': '112', 'fire': '112', 'tourist': '0800-0247',
        'hospitals': [{'name': '当地Ziekenhuis', 'phone': '112', 'features': ['24H急诊', '荷兰语/英语']}],
        'consulates': [{'name': '中国驻荷兰大使馆', 'phone': '070-306-5061', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': '112NL', 'icon': '📱', 'description': '急救App'}],
        'selfProtection': [{'icon': '🚴', 'title': '自行车', 'tips': ['自行车王国靠右', '小心被盗']}],
        'transport': [{'icon': '🚇', 'name': '地铁/电车', 'tips': ['OV卡通用']}, {'icon': '🚲', 'name': '自行车', 'tips': ['租用OV-fiets']}]
    },
    '印度': {
        'police': '100', 'ambulance': '102', 'fire': '101', 'tourist': '1800-11-1363',
        'hospitals': [{'name': 'Apollo/MAX私立医院', 'phone': '1061', 'features': ['24H急诊', '英语', '私立较好']}],
        'consulates': [{'name': '中国驻印度使领馆', 'phone': '011-2688-5488', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Polices App', 'icon': '👮', 'description': '各地警方'}],
        'selfProtection': [{'icon': '🚰', 'title': '饮水安全', 'tips': ['只喝瓶装水', '避免冰块']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['德里/孟买有', '女性专用车厢']}, {'icon': '🚕', 'name': 'Uber/Ola', 'tips': ['比出租车安全']}]
    },
    '巴西': {
        'police': '190', 'ambulance': '192', 'fire': '193', 'tourist': '136',
        'hospitals': [{'name': '当地Hospital', 'phone': '192', 'features': ['24H急诊', '葡萄牙语', '公立较差']}],
        'consulates': [{'name': '中国驻巴西大使馆', 'phone': '61-2195-8200', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'SPTrans', 'icon': '🚌', 'description': '公交信息'}],
        'selfProtection': [{'icon': '⚠️', 'title': '治安注意', 'tips': ['贫民区绝对避开', '里约海滩防盗']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['主要城市有']}, {'icon': '🚕', 'name': 'Uber', 'tips': ['最安全选择']}]
    },
    '墨西哥': {
        'police': '911', 'ambulance': '911', 'fire': '911', 'tourist': '078',
        'hospitals': [{'name': '当地Hospital', 'phone': '911', 'features': ['24H急诊', '西班牙语/英语']}],
        'consulates': [{'name': '中国驻墨西哥使领馆', 'phone': '55-5616-0609', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': '911 CDMX', 'icon': '📱', 'description': '急救App'}],
        'selfProtection': [{'icon': '⚠️', 'title': '治安警告', 'tips': ['贫民区避开', '坎昆tourist zone较安全']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['墨西哥城有', '扒手多']}, {'icon': '🚕', 'name': 'Uber', 'tips': ['比出租车安全']}]
    },
    '俄罗斯': {
        'police': '102', 'ambulance': '103', 'fire': '101', 'tourist': '8-800-200-1234',
        'hospitals': [{'name': '当地医院', 'phone': '103', 'features': ['24H急诊', '俄语', '医疗较差']}],
        'consulates': [{'name': '中国驻俄罗斯大使馆', 'phone': '7495-938-2001', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': '112 Russia', 'icon': '📱', 'description': '紧急救援'}],
        'selfProtection': [{'icon': '⚠️', 'title': '治安注意', 'tips': ['避免夜间独自出行', '警惕警察检查']}],
        'transport': [{'icon': '🚇', 'name': '地铁', 'tips': ['莫斯科/圣彼得堡有']}, {'icon': '🚕', 'name': 'Yandex Go', 'tips': ['用App预约']}]
    },
    '菲律宾': {
        'police': '117', 'ambulance': '911', 'fire': '160', 'tourist': '1326',
        'hospitals': [{'name': '当地医院', 'phone': '911', 'features': ['24H急诊', '英语']}],
        'consulates': [{'name': '中国驻菲律宾大使馆', 'phone': '02-8443148', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Grab', 'icon': '🚕', 'description': '打车应用'}],
        'selfProtection': [{'icon': '🌊', 'title': '海岛安全', 'tips': ['注意离岸流', '检查天气']}],
        'transport': [{'icon': '🚌', 'name': '吉普尼', 'tips': ['菲律宾特色公交']}, {'icon': '🚕', 'name': '出租车', 'tips': ['要求打表']}]
    },
    '越南': {
        'police': '113', 'ambulance': '115', 'fire': '114', 'tourist': '1080',
        'hospitals': [{'name': '当地国际医院', 'phone': '当地电话', 'features': ['24H急诊', '英语']}],
        'consulates': [{'name': '中国驻越南大使馆', 'phone': '04-3845-3736', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Grab', 'icon': '🚕', 'description': '打车应用'}],
        'selfProtection': [{'icon': '🏍️', 'title': '摩托车', 'tips': ['横穿马路注意', '租摩托需驾照']}],
        'transport': [{'icon': '🚌', 'name': 'Open Bus', 'tips': ['越南特色']}, {'icon': '🚕', 'name': '出租车', 'tips': ['Mai Linh较正规']}]
    },
    '印尼': {
        'police': '110', 'ambulance': '118', 'fire': '113', 'tourist': '021-6316161',
        'hospitals': [{'name': '当地国际医院', 'phone': '当地电话', 'features': ['24H急诊', '英语']}],
        'consulates': [{'name': '中国驻印尼大使馆', 'phone': '021-5761037', 'hours': '周一至周五 9:00-12:00'}],
        'safetyApps': [{'name': 'Gojek/Grab', 'icon': '🚕', 'description': '打车应用'}],
        'selfProtection': [{'icon': '🦎', 'title': '登革热', 'tips': ['巴厘岛防蚊', '驱蚊液必备']}],
        'transport': [{'icon': '🚌', 'name': '公交', 'tips': ['较混乱']}, {'icon': '🚕', 'name': 'Gojek/Grab', 'tips': ['最方便安全']}]
    },
}

def get_country_data(city_country):
    if not city_country:
        return None
    if city_country in COUNTRY_EC:
        return COUNTRY_EC[city_country]
    country_lower = city_country.lower()
    for key in COUNTRY_EC:
        if key.lower() in country_lower or country_lower in key.lower():
            return COUNTRY_EC[key]
    return None

def build_ec_json(ec):
    pn = ec['phoneNumbers']
    hosp = ec['hospitals']
    cons = ec['consulates']
    apps = ec['safetyApps']
    sp = ec['selfProtection']
    trans = ec['transport']
    
    lines = ['      "emergencyContacts": {']
    lines.append(f'        "phoneNumbers": {{"police": "{pn["police"]}", "ambulance": "{pn["ambulance"]}", "fire": "{pn["fire"]}", "tourist": "{pn.get("tourist", "")}"}},')
    
    hosp_items = []
    for h in hosp:
        hosp_items.append(f'{{"name": "{h["name"]}", "phone": "{h["phone"]}", "address": "市中心", "features": ["{h["features"][0]}"], "emergency24h": true}}')
    lines.append(f'        "hospitals": [{", ".join(hosp_items)}],')
    
    if cons:
        cons_items = []
        for c in cons:
            cons_items.append(f'{{"name": "{c["name"]}", "phone": "{c["phone"]}", "address": "请查询官网", "hours": "{c["hours"]}", "emergency": false}}')
        lines.append(f'        "consulates": [{", ".join(cons_items)}],')
    else:
        lines.append('        "consulates": [],')
    
    apps_items = []
    for a in apps:
        apps_items.append(f'{{"name": "{a["name"]}", "icon": "{a["icon"]}", "description": "{a["description"]}"}}')
    lines.append(f'        "safetyApps": [{", ".join(apps_items)}],')
    
    sp_items = []
    for s in sp:
        tips_str = '["' + '", "'.join(s['tips'][:2]) + '"]'
        sp_items.append(f'{{"icon": "{s["icon"]}", "title": "{s["title"]}", "tips": {tips_str}}}')
    lines.append(f'        "selfProtection": [{", ".join(sp_items)}],')
    
    trans_items = []
    for t in trans[:3]:
        trans_items.append(f'{{"icon": "{t["icon"]}", "name": "{t["name"]}", "description": "城市交通", "tips": ["{t["tips"][0]}"]}}')
    lines.append(f'        "transport": {{"modes": [{", ".join(trans_items)}]}}')
    
    lines.append('      }')
    return '\n'.join(lines)

def main():
    with open('data.js', 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    new_lines = []
    i = 0
    added = 0
    
    while i < len(lines):
        line = lines[i]
        
        match = re.match(r'^\s+"([a-z]+)":\s*\{', line)
        if match:
            city_id = match.group(1)
            
            j = i + 1
            country = ''
            lifestyle_idx = -1
            has_ec = False
            
            while j < len(lines) and not re.match(r'^\s*\}', lines[j]):
                if '"country":' in lines[j]:
                    m = re.search(r'"country":\s*"([^"]+)"', lines[j])
                    if m:
                        country = m.group(1)
                if '"lifestyle": {' in lines[j]:
                    lifestyle_idx = j
                if '"emergencyContacts":' in lines[j]:
                    has_ec = True
                j += 1
            
            new_lines.append(line)
            
            if not has_ec and lifestyle_idx > 0:
                ec = get_country_data(country)
                if ec:
                    k = lifestyle_idx + 1
                    if k < len(lines) and re.match(r'^\s+\},?\s*$', lines[k]):
                        ec_json = build_ec_json(ec)
                        new_lines.append(ec_json)
                        added += 1
                        print(f"✓ {city_id} ({country})")
                    else:
                        new_lines.append(lines[k]) if k < len(lines) else None
                else:
                    print(f"- 跳过 {city_id} ({country}) - 无数据")
                    new_lines.append(lines[k]) if k < len(lines) else None
            else:
                for k in range(i + 1, j + 1):
                    if k < len(lines):
                        new_lines.append(lines[k])
                i = j
        else:
            new_lines.append(line)
        
        i += 1
    
    with open('data.js', 'w') as f:
        f.write('\n'.join(new_lines))
    
    print(f"\n完成！共添加 {added} 个城市的 emergencyContacts")

if __name__ == '__main__':
    main()
