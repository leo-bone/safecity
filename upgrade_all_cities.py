#!/usr/bin/env python3
"""
SafeCity v11.0 - 为所有125个城市补充 emergencyContacts 数据
完整修复版
"""

import re
import json
from datetime import datetime

# ============ 配置数据 ============

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
    "突尼斯": {"police": "197", "ambulance": "190", "fire": "198"},
    "加纳": {"police": "191", "ambulance": "193", "fire": "192"},
    "埃塞俄比亚": {"police": "991", "ambulance": "907", "fire": "939"},
}

DEFAULT_EM = {"police": "112", "ambulance": "112", "fire": "112"}

def get_region(country):
    asia = ["日本", "韩国", "新加坡", "中国", "香港", "台湾", "泰国", "马来西亚",
            "越南", "印度尼西亚", "菲律宾", "印度"]
    europe = ["英国", "法国", "德国", "意大利", "西班牙", "葡萄牙", "荷兰", "瑞士",
              "瑞典", "挪威", "丹麦", "芬兰", "俄罗斯", "土耳其", "希腊", "奥地利",
              "比利时", "波兰", "捷克", "匈牙利", "爱尔兰"]
    americas = ["美国", "加拿大", "巴西", "阿根廷", "墨西哥"]
    oceania = ["澳大利亚", "新西兰"]
    africa = ["埃及", "南非", "突尼斯", "加纳", "埃塞俄比亚"]
    
    if country in asia: return "亚洲"
    elif country in europe: return "欧美"
    elif country in americas: return "南美"
    elif country in oceania: return "大洋洲"
    elif country in africa: return "非洲"
    return "其他"

def generate_ec(country, city_name, region):
    phones = EMERGENCY_PHONES.get(country, DEFAULT_EM)
    
    return {
        "phoneNumbers": phones,
        "hospitals": [
            {
                "name": "市中心主要医院",
                "phone": phones["ambulance"],
                "address": "市中心区域",
                "features": ["急诊服务"],
                "emergency24h": True
            }
        ],
        "consulates": [
            {
                "name": "中国驻" + country + "使领馆",
                "phone": "请查询外交部领事服务网",
                "address": "请查询外交部领事服务网",
                "hours": "周一至周五 9:00-12:00",
                "emergency": False
            }
        ] if country != "中国" else [],
        "safetyApps": [
            {"name": "Google Maps", "icon": "map", "description": "导航和位置分享"},
            {"name": "WhatsApp/微信", "icon": "message", "description": "与家人保持联系"}
        ] if region in ["亚洲", "其他"] else [
            {"name": "Google Maps", "icon": "map", "description": "导航和位置分享"},
            {"name": "Life360", "icon": "family", "description": "家庭位置共享"}
        ],
        "selfProtection": [
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
        ],
        "transport": {
            "modes": [
                {"icon": "train", "name": "地铁/捷运", "description": "覆盖全面，换乘方便"},
                {"icon": "bus", "name": "公交", "description": "票价便宜，注意线路"},
                {"icon": "taxi", "name": "出租车", "description": "建议打表计价"}
            ] if region in ["亚洲"] else [
                {"icon": "train", "name": "地铁/轻轨", "description": "市中心主要交通"},
                {"icon": "bus", "name": "公交/巴士", "description": "覆盖郊区"},
                {"icon": "taxi", "name": "出租车", "description": "可用Uber/Bolt"}
            ]
        }
    }

def main():
    print("SafeCity v11.0 - 批量补充 emergencyContacts")
    print("=" * 50)
    
    with open('data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到所有城市 (正确的匹配模式)
    city_pattern = r'"([a-z_]+)":\s*\{\s*"id":\s*"\1"'
    cities = list(re.finditer(city_pattern, content))
    
    print("找到 {} 个城市".format(len(cities)))
    
    updated = 0
    skipped = 0
    
    # 逐个处理
    for i, match in enumerate(cities):
        city_id = match.group(1)
        start_pos = match.start()
        
        # 找到城市块结束位置
        if i + 1 < len(cities):
            end_pos = cities[i + 1].start()
        else:
            end_pos = len(content)
        
        city_block = content[start_pos:end_pos]
        
        # 检查是否已有 emergencyContacts
        if '"emergencyContacts":' in city_block:
            continue
        
        # 获取城市信息
        name_m = re.search(r'"name":\s*"([^"]+)"', city_block)
        country_m = re.search(r'"country":\s*"([^"]+)"', city_block)
        
        if not name_m or not country_m:
            skipped += 1
            print(f"  跳过 {city_id}: 无国家/名称信息")
            continue
        
        city_name = name_m.group(1)
        country = country_m.group(1)
        region = get_region(country)
        
        # 生成 emergencyContacts
        ec = generate_ec(country, city_name, region)
        ec_json = json.dumps(ec, ensure_ascii=False, indent=6)
        
        # 查找 lifestyle 字段
        lifestyle_m = re.search(r'"lifestyle":\s*\{', city_block)
        if not lifestyle_m:
            skipped += 1
            print(f"  跳过 {city_id}: 无lifestyle字段")
            continue
        
        # 在 lifestyle 内部的 food 之前插入
        food_m = re.search(r'"food":\s*\[', city_block[lifestyle_m.end():lifestyle_m.end()+5000])
        
        if food_m:
            insert_pos = start_pos + lifestyle_m.end() + food_m.start()
        else:
            insert_pos = start_pos + lifestyle_m.end()
        
        # 插入数据
        new_data = '\n      "emergencyContacts": ' + ec_json + ',\n      '
        content = content[:insert_pos] + new_data + content[insert_pos:]
        
        updated += 1
        print(f"  添加 {city_id}: {city_name} ({country})")
    
    # 更新版本号
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
    
    # 写回文件
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    
    # 验证
    with open('data.js', 'r', encoding='utf-8') as f:
        verify = f.read()
    count = verify.count('"emergencyContacts":')
    
    print()
    print("=" * 50)
    print("处理完成!")
    print("  已更新: {} 个城市".format(updated))
    print("  跳过: {} 个城市".format(skipped))
    print("  总计: {} 个城市有 emergencyContacts".format(count))
    print("=" * 50)

if __name__ == "__main__":
    main()
