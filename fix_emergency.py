#!/usr/bin/env python3
import re
import json

# 读取文件
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义每个国家的完整emergency模板
templates = {
    '日本': {
        'touristPolice': '03-5321-7837',
        'touristHotline': '050-3816-1857',
        'embassies': {
            '中国驻日本大使馆': '03-3403-3388',
            '中国驻大阪总领事馆': '06-6445-9481',
            '中国驻横滨总领事馆': '045-641-3488'
        },
        'hospitals': [
            {'name': '东京大学医学部附属医院', 'phone': '03-5800-8630', 'address': '东京都文京本郷7-3-1'},
            {'name': '圣路加国际医院', 'phone': '03-3541-5151', 'address': '东京都中央区明石町9-1'}
        ],
        'apps': ['Google翻译', '乘换案内', 'Japan Taxi'],
        'selfDefense': ['保持低调，避免大声喧哗', '遵守当地法律法规']
    },
    '新加坡': {
        'touristPolice': '1800-736-2000',
        'touristHotline': '1800-736-2000',
        'embassies': {'中国驻新加坡大使馆': '65-6471-2117'},
        'hospitals': [
            {'name': '新加坡中央医院', 'phone': '65-6222-3322', 'address': 'Outram Rd, Singapore'}
        ],
        'apps': ['SingPass', 'Google Maps', 'Grab'],
        'selfDefense': ['严格遵守法律', '避免在公共场所吸烟']
    },
    '韩国': {
        'touristPolice': '1330',
        'touristHotline': '1330',
        'embassies': {'中国驻韩国大使馆': '82-2-738-1038'},
        'hospitals': [{'name': '首尔大学医院', 'phone': '82-2-2072-2114', 'address': '首尔市钟路区'}],
        'apps': ['KakaoMap', 'Naver地图'],
        'selfDefense': ['尊重当地文化', '避免在公共场所吸烟']
    },
    '泰国': {
        'touristPolice': '1155',
        'touristHotline': '1678',
        'embassies': {'中国驻泰国大使馆': '66-2-245-7044'},
        'hospitals': [{'name': '曼谷医院', 'phone': '66-2-310-3000', 'address': '曼谷素坤逸路'}],
        'apps': ['Google Maps', 'Grab', 'Line'],
        'selfDefense': ['注意交通安全', '保管好护照']
    },
    '美国': {
        'touristPolice': '911',
        'touristHotline': '1-888-407-4747',
        'embassies': {'中国驻美国大使馆': '1-202-495-2266'},
        'hospitals': [],
        'apps': ['Google Maps', 'Uber'],
        'selfDefense': ['避免夜间独自外出', '贵重物品随身保管']
    },
    '英国': {
        'touristPolice': '999',
        'touristHotline': '44-20-7946-0958',
        'embassies': {'中国驻英国大使馆': '44-20-7222-9452'},
        'hospitals': [],
        'apps': ['Citymapper', 'Google Maps'],
        'selfDefense': ['注意保管财物', '防范扒窃']
    },
    '澳大利亚': {
        'touristPolice': '000',
        'touristHotline': '1300-135-391',
        'embassies': {'中国驻澳大利亚大使馆': '61-2-6228-3999'},
        'hospitals': [],
        'apps': ['Google Maps', 'Uber'],
        'selfDefense': ['注意防晒', '防范野生动物']
    },
    '德国': {
        'touristPolice': '110',
        'touristHotline': '49-30-187-1174',
        'embassies': {'中国驻德国大使馆': '49-30-27588-0'},
        'hospitals': [],
        'apps': ['Google Maps', 'DB Navigator'],
        'selfDefense': ['注意财物安全', '遵守交通规则']
    },
    '法国': {
        'touristPolice': '17',
        'touristHotline': '33-1-42-96-02-47',
        'embassies': {'中国驻法国大使馆': '33-1-4952-2100'},
        'hospitals': [],
        'apps': ['Google Maps', 'Citymapper'],
        'selfDefense': ['防范扒窃', '注意个人物品安全']
    },
    'default': {
        'touristPolice': '911',
        'touristHotline': '12345',
        'embassies': {},
        'hospitals': [],
        'apps': ['Google Maps'],
        'selfDefense': ['保管好个人物品', '了解当地紧急电话']
    }
}

def get_template(country):
    for key in templates:
        if key != 'default' and key in country:
            return templates[key]
    return templates['default']

# 正则匹配每个城市块
city_pattern = r'"(\w+)":\s*\{([^}]*"country":\s*"([^"]+)"[^}]*)\}'
matches = re.findall(city_pattern, content)

print(f"找到 {len(matches)} 个城市")

for city_id, city_block, country in matches:
    template = get_template(country)
    
    # 检查是否已有touristPolice
    if '"touristPolice"' not in city_block:
        # 找到emergency块的位置
        emergency_match = re.search(r'"emergency":\s*\{([^}]*)\}', city_block)
        if emergency_match:
            # 在emergency块中添加新字段
            old_emergency = emergency_match.group(0)
            new_emergency = f'''"emergency": {{
      "police": "{template['touristPolice']}",
      "ambulance": "119",
      "fire": "119",
      "touristPolice": "{template['touristPolice']}",
      "touristHotline": "{template['touristHotline']}",
      "embassies": {json.dumps(template['embassies'], ensure_ascii=False)},
      "hospitals": {json.dumps(template['hospitals'], ensure_ascii=False)},
      "apps": {json.dumps(template['apps'], ensure_ascii=False)},
      "selfDefense": {json.dumps(template['selfDefense'], ensure_ascii=False)}
    }}'''
            city_block = city_block.replace(old_emergency, new_emergency)
            # 替换回原内容
            content = content.replace(f'"{city_id}": {{{city_block}}}', f'"{city_id}": {{"emergency": {json.dumps({{"police": template["touristPolice"], "ambulance": "119", "fire": "119", "touristPolice": template["touristPolice"], "touristHotline": template["touristHotline"], "embassies": template["embassies"], "hospitals": template["hospitals"], "apps": template["apps"], "selfDefense": template["selfDefense"]}, ensure_ascii=False)},' + city_block[city_block.find('"lifestyle"'):])

print("处理完成")

# 写入文件
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("已保存 data.js")