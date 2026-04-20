#!/usr/bin/env python3
"""
SafeCity v11.0 - 为所有125个城市补充完整 emergencyContacts 数据
"""

import re
import json
from datetime import datetime

# ============ 国家/地区配置数据 ============

# 各国紧急电话
EMERGENCY_PHONES = {
    "日本": {"police": "110", "ambulance": "119", "fire": "119"},
    "韩国": {"police": "112", "ambulance": "119", "fire": "119"},
    "新加坡": {"police": "999", "ambulance": "995", "fire": "995"},
    "中国": {"police": "110", "ambulance": "120", "fire": "119"},
    "香港": {"police": "999", "ambulance": "999", "fire": "999"},
    "台湾": {"police": "110", "ambulance": "119", "fire": "119"},
    "泰国": {"police": "191", "ambulance": "1669", "fire": "199"},
    "马来西亚": {"police": "999", "ambulance": "999", "fire": "994"},
    "越南": {"police": "113", "ambulance": "115", "fire": "114"},
    "印度尼西亚": {"police": "110", "ambulance": "118", "fire": "113"},
    "菲律宾": {"police": "117", "ambulance": "911", "fire": "911"},
    "印度": {"police": "100", "ambulance": "102", "fire": "101"},
    "美国": {"police": "911", "ambulance": "911", "fire": "911"},
    "加拿大": {"police": "911", "ambulance": "911", "fire": "911"},
    "英国": {"police": "999", "ambulance": "999", "fire": "999"},
    "法国": {"police": "17", "ambulance": "15", "fire": "18"},
    "德国": {"police": "110", "ambulance": "112", "fire": "112"},
    "意大利": {"police": "113", "ambulance": "118", "fire": "115"},
    "西班牙": {"police": "091", "ambulance": "061", "fire": "080"},
    "葡萄牙": {"police": "112", "ambulance": "112", "fire": "112"},
    "荷兰": {"police": "112", "ambulance": "112", "fire": "112"},
    "瑞士": {"police": "117", "ambulance": "144", "fire": "118"},
    "瑞典": {"police": "112", "ambulance": "112", "fire": "112"},
    "挪威": {"police": "112", "ambulance": "113", "fire": "110"},
    "丹麦": {"police": "112", "ambulance": "112", "fire": "112"},
    "芬兰": {"police": "112", "ambulance": "112", "fire": "112"},
    "俄罗斯": {"police": "102", "ambulance": "103", "fire": "101"},
    "澳大利亚": {"police": "000", "ambulance": "000", "fire": "000"},
    "新西兰": {"police": "111", "ambulance": "111", "fire": "111"},
    "阿联酋": {"police": "999", "ambulance": "998", "fire": "997"},
    "沙特阿拉伯": {"police": "999", "ambulance": "997", "fire": "998"},
    "卡塔尔": {"police": "999", "ambulance": "999", "fire": "999"},
    "土耳其": {"police": "155", "ambulance": "112", "fire": "110"},
    "埃及": {"police": "122", "ambulance": "123", "fire": "180"},
    "南非": {"police": "10111", "ambulance": "10177", "fire": "10177"},
    "巴西": {"police": "190", "ambulance": "192", "fire": "193"},
    "阿根廷": {"police": "101", "ambulance": "107", "fire": "100"},
    "墨西哥": {"police": "911", "ambulance": "911", "fire": "911"},
    "希腊": {"police": "100", "ambulance": "166", "fire": "199"},
    "奥地利": {"police": "133", "ambulance": "144", "fire": "122"},
    "比利时": {"police": "101", "ambulance": "100", "fire": "100"},
    "波兰": {"police": "997", "ambulance": "999", "fire": "998"},
    "捷克": {"police": "158", "ambulance": "155", "fire": "150"},
    "匈牙利": {"police": "107", "ambulance": "104", "fire": "105"},
    "爱尔兰": {"police": "999", "ambulance": "999", "fire": "999"},
}

DEFAULT_EMERGENCY = {"police": "112", "ambulance": "112", "fire": "112"}

def get_region(country):
    asia = ["日本", "韩国", "新加坡", "中国", "香港", "台湾", "泰国", "马来西亚",
            "越南", "印度尼西亚", "菲律宾", "印度"]
    europe = ["英国", "法国", "德国", "意大利", "西班牙", "葡萄牙", "荷兰", "瑞士",
              "瑞典", "挪威", "丹麦", "芬兰", "俄罗斯", "土耳其", "希腊", "奥地利",
              "比利时", "波兰", "捷克", "匈牙利", "爱尔兰"]
    americas = ["美国", "加拿大", "巴西", "阿根廷", "墨西哥"]
    middle_east = ["阿联酋", "沙特阿拉伯", "卡塔尔", "埃及"]

    if country in asia:
        return "亚洲"
    elif country in europe:
        return "欧美"
    elif country in americas:
        return "南美"
    elif country in middle_east:
        return "中东"
    return "default"

def generate_emergency_contacts(country, city_name, region):
    """生成 emergencyContacts 数据"""
    phones = EMERGENCY_PHONES.get(country, DEFAULT_EMERGENCY)

    if region == "亚洲":
        safety_apps = [
            {"name": "Google Maps", "icon": "map", "description": "导航和位置分享"},
            {"name": "WhatsApp/微信", "icon": "message", "description": "与家人保持联系"}
        ]
    elif region == "欧美":
        safety_apps = [
            {"name": "Google Maps", "icon": "map", "description": "导航和位置分享"},
            {"name": "Life360", "icon": "family", "description": "家庭位置共享"}
        ]
    else:
        safety_apps = [
            {"name": "Google Maps", "icon": "map", "description": "导航和位置分享"}
        ]

    base_protection = [
        {"icon": "lock", "title": "财产安全", "tips": [
            "将贵重物品放在酒店保险箱",
            "避免在公共场所显露贵重物品"
        ]},
        {"icon": "home", "title": "住宿安全", "tips": [
            "选择正规酒店",
            "入住后确认门锁安全"
        ]},
        {"icon": "car", "title": "出行安全", "tips": [
            "使用正规交通工具",
            "夜间避免单独行动"
        ]},
        {"icon": "phone", "title": "紧急联络", "tips": [
            "将当地报警电话存入手机",
            "告知家人行程安排"
        ]}
    ]

    if region == "亚洲":
        transport_modes = [
            {"icon": "train", "name": "地铁/捷运", "description": "覆盖全面，换乘方便"},
            {"icon": "bus", "name": "公交", "description": "票价便宜，注意线路"},
            {"icon": "taxi", "name": "出租车", "description": "建议打表计价"}
        ]
    else:
        transport_modes = [
            {"icon": "train", "name": "地铁/轻轨", "description": "市中心主要交通"},
            {"icon": "bus", "name": "公交/巴士", "description": "覆盖郊区"},
            {"icon": "taxi", "name": "出租车", "description": "可用Uber/Bolt"}
        ]

    consulates = []
    if country != "中国":
        consulates.append({
            "name": "中国驻" + country + "使领馆",
            "phone": "请查询外交部领事服务网",
            "address": "请查询外交部领事服务网",
            "hours": "周一至周五 9:00-12:00",
            "emergency": False
        })

    hospitals = [
        {
            "name": "市中心主要医院",
            "phone": phones["ambulance"],
            "address": "市中心区域",
            "features": ["急诊服务"],
            "emergency24h": True
        }
    ]

    return {
        "phoneNumbers": phones,
        "hospitals": hospitals,
        "consulates": consulates,
        "safetyApps": safety_apps,
        "selfProtection": base_protection,
        "transport": {"modes": transport_modes}
    }

def to_json(obj):
    return json.dumps(obj, ensure_ascii=False, indent=6)

def process_data_file():
    print("开始处理 data.js...")

    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    city_pattern = r'("(\w+)":\s*\{\s*"id":\s*"\2")'
    cities = list(re.finditer(city_pattern, content))

    print("找到 {} 个城市".format(len(cities)))

    updated = 0
    skipped = 0
    already_has = 0

    for i, match in enumerate(cities):
        city_key = match.group(2)
        start_pos = match.start()

        if i + 1 < len(cities):
            end_pos = cities[i + 1].start()
        else:
            end_pos = len(content)

        city_block = content[start_pos:end_pos]

        # 检查是否有 lifestyle.emergencyContacts（嵌套结构）
        if '"lifestyle":' in city_block and '"emergencyContacts":' in city_block:
            already_has += 1
            continue

        name_match = re.search(r'"name":\s*"([^"]+)"', city_block)
        country_match = re.search(r'"country":\s*"([^"]+)"', city_block)

        if not name_match or not country_match:
            skipped += 1
            continue

        city_name = name_match.group(1)
        country = country_match.group(1)
        region = get_region(country)

        emergency_contacts = generate_emergency_contacts(country, city_name, region)

        # 查找lifestyle字段位置
        lifestyle_match = re.search(r'"lifestyle":\s*\{', city_block)

        if not lifestyle_match:
            skipped += 1
            continue

        insert_offset = lifestyle_match.end()

        # 在lifestyle内部查找合适位置：在第一个属性之前插入
        # 查找 lifestyle 后的第一个实际属性
        first_prop = re.search(r'"food":|"attractions":|"festivals":|"customs":|"nightlife":|"shopping":|"transport":',
                               city_block[lifestyle_match.end():lifestyle_match.end()+5000])
        
        if first_prop:
            insert_offset = lifestyle_match.end() + first_prop.start()
        else:
            insert_offset = lifestyle_match.end()

        new_data = '\n      "emergencyContacts": ' + to_json(emergency_contacts) + ',\n      '

        actual_pos = start_pos + insert_offset
        content = content[:actual_pos] + new_data + content[actual_pos:]

        updated += 1

    content = re.sub(
        r'SafeCity Global - 全球城市安全数据库 v\d+\.\d+',
        'SafeCity Global - 全球城市安全数据库 v11.0',
        content
    )
    content = re.sub(
        r'更新时间: \d{4}-\d{2}-\d{2} v\d+\.\d+',
        '更新时间: ' + datetime.now().strftime("%Y-%m-%d") + ' v11.0',
        content
    )

    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(content)

    print("""
========== 处理完成 ==========
总城市数: {}
已更新: {}
已有数据: {}
跳过: {}
===============================""".format(len(cities), updated, already_has, skipped))

    with open('data.js', 'r', encoding='utf-8') as f:
        verify = f.read()
    count = len(re.findall(r'"emergencyContacts":', verify))
    print("验证: 现在有 {} 个城市有 emergencyContacts".format(count))

if __name__ == "__main__":
    process_data_file()
