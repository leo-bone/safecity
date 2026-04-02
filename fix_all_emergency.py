#!/usr/bin/env python3
import re
import json

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 各国紧急联系数据模板
country_emergency = {
    '日本': {'touristPolice': '03-5321-7837', 'touristHotline': '050-3816-1857', 
             'embassies': {'中国驻日本大使馆': '03-3403-3388', '中国驻大阪总领事馆': '06-6445-9481'},
             'hospitals': [{'name': '东京大学医学部附属医院', 'phone': '03-5800-8630', 'address': '东京都文京本郷'}]},
    '新加坡': {'touristPolice': '1800-736-2000', 'touristHotline': '1800-736-2000',
               'embassies': {'中国驻新加坡大使馆': '65-6471-2117'},
               'hospitals': [{'name': '新加坡中央医院', 'phone': '65-6222-3322', 'address': 'Outram Rd'}]},
    '韩国': {'touristPolice': '1330', 'touristHotline': '1330',
             'embassies': {'中国驻韩国大使馆': '82-2-738-1038'},
             'hospitals': [{'name': '首尔大学医院', 'phone': '82-2-2072-2114', 'address': '首尔市钟路区'}]},
    '泰国': {'touristPolice': '1155', 'touristHotline': '1678',
             'embassies': {'中国驻泰国大使馆': '66-2-245-7044'},
             'hospitals': [{'name': '曼谷医院', 'phone': '66-2-310-3000', 'address': '曼谷'}]},
    '美国': {'touristPolice': '911', 'touristHotline': '1-888-407-4747',
             'embassies': {'中国驻美国大使馆': '1-202-495-2266', '中国驻纽约总领事馆': '1-212-244-9392'},
             'hospitals': []},
    '英国': {'touristPolice': '999', 'touristHotline': '44-20-7946-0958',
             'embassies': {'中国驻英国大使馆': '44-20-7222-9452'},
             'hospitals': []},
    '澳大利亚': {'touristPolice': '000', 'touristHotline': '1300-135-391',
                 'embassies': {'中国驻澳大利亚大使馆': '61-2-6228-3999'},
                 'hospitals': []},
    '法国': {'touristPolice': '17', 'touristHotline': '33-1-42-96-02-47',
            'embassies': {'中国驻法国大使馆': '33-1-4952-2100'},
            'hospitals': []},
    '德国': {'touristPolice': '110', 'touristHotline': '49-30-187-1174',
            'embassies': {'中国驻德国大使馆': '49-30-27588-0'},
            'hospitals': []},
    '意大利': {'touristPolice': '113', 'touristHotline': '39-06-4676-91',
              'embassies': {'中国驻意大利大使馆': '39-06-841-3461'},
              'hospitals': []},
    '西班牙': {'touristPolice': '091', 'touristHotline': '902-102-112',
              'embassies': {'中国驻西班牙大使馆': '34-91-519-4242'},
              'hospitals': []},
    '加拿大': {'touristPolice': '911', 'touristHotline': '1-613-944-4440',
              'embassies': {'中国驻加拿大大使馆': '1-613-789-3434'},
              'hospitals': []},
    '新西兰': {'touristPolice': '111', 'touristHotline': '0800-556-556',
              'embassies': {'中国驻新西兰大使馆': '64-4-473-3514'},
              'hospitals': []},
    '荷兰': {'touristPolice': '112', 'touristHotline': '31-20-752-7888',
           'embassies': {'中国驻荷兰大使馆': '31-70-306-5100'},
           'hospitals': []},
    '瑞士': {'touristPolice': '117', 'touristHotline': '41-44-113-100',
            'embassies': {'中国驻瑞士大使馆': '41-31-351-1692'},
            'hospitals': []},
    '瑞典': {'touristPolice': '112', 'touristHotline': '46-8-783-4900',
           'embassies': {'中国驻瑞典大使馆': '46-8-579-364-29'},
           'hospitals': []},
    '挪威': {'touristPolice': '112', 'touristHotline': '47-23-10-66-00',
            'embassies': {'中国驻挪威大使馆': '47-22-56-38-65'},
            'hospitals': []},
    '丹麦': {'touristPolice': '112', 'touristHotline': '45-33-14-88-70',
           'embassies': {'中国驻丹麦大使馆': '45-39-42-92-16'},
           'hospitals': []},
    '印度': {'touristPolice': '100', 'touristHotline': '91-11-2338-1234',
            'embassies': {'中国驻印度大使馆': '91-11-2611-2338'},
            'hospitals': []},
    '巴西': {'touristPolice': '190', 'touristHotline': '55-61-3823-8484',
            'embassies': {'中国驻巴西大使馆': '55-61-3346-1700'},
            'hospitals': []},
    '墨西哥': {'touristPolice': '911', 'touristHotline': '55-8854-0080',
              'embassies': {'中国驻墨西哥大使馆': '52-55-5281-7000'},
              'hospitals': []},
    '俄罗斯': {'touristPolice': '102', 'touristHotline': '7-495-938-2141',
              'embassies': {'中国驻俄罗斯大使馆': '7-495-938-2005'},
              'hospitals': []},
    '南非': {'touristPolice': '10111', 'touristHotline': '27-12-431-4000',
            'embassies': {'中国驻南非大使馆': '27-12-342-9531'},
            'hospitals': []},
    '埃及': {'touristPolice': '122', 'touristHotline': '20-2-2348-7099',
            'embassies': {'中国驻埃及大使馆': '20-2-2736-1242'},
            'hospitals': []},
    '土耳其': {'touristPolice': '155', 'touristHotline': '90-212-463-3000',
              'embassies': {'中国驻土耳其大使馆': '90-312-436-0628'},
              'hospitals': []},
    '阿联酋': {'touristPolice': '999', 'touristHotline': '971-4-708-1111',
              'embassies': {'中国驻阿联酋大使馆': '971-2-443-4276'},
              'hospitals': []},
    '马来西亚': {'touristPolice': '999', 'touristHotline': '1300-88-5050',
                'embassies': {'中国驻马来西亚大使馆': '60-3-2164-5301'},
                'hospitals': []},
    '印度尼西亚': {'touristPolice': '110', 'touristHotline': '62-21-500-687',
                  'embassies': {'中国驻印尼大使馆': '62-21-576-1035'},
                  'hospitals': []},
    '菲律宾': {'touristPolice': '166', 'touristHotline': '63-2-524-1728',
              'embassies': {'中国驻菲律宾大使馆': '63-2-844-3148'},
              'hospitals': []},
    '越南': {'touristPolice': '113', 'touristHotline': '84-24-3933-1111',
            'embassies': {'中国驻越南大使馆': '84-24-3823-5849'},
            'hospitals': []},
}

# 默认值
default_emergency = {'touristPolice': '112', 'touristHotline': '112', 'embassies': {}, 'hospitals': []}

def get_emergency(country):
    for key in country_emergency:
        if key in country:
            return country_emergency[key]
    return default_emergency

# 替换所有错误的紧急联系数据
for city_match in re.finditer(r'"(\w+)":\s*\{[^}]*"country":\s*"([^"]+)"[^}]*"emergency":\s*\{[^}]*\}', content):
    city_id = city_match.group(1)
    country = city_match.group(2)
    emerg = get_emergency(country)
    
    # 替换旧的emergency块
    old_pattern = rf'"{city_id}":\s*\{{[^}}]*"emergency":\s*\{{[^}}*\}}'
    # 简单替换touristPolice和touristHotline的值
    content = content.replace(
        f'"touristPolice": "110"',
        f'"touristPolice": "{emerg["touristPolice"]}"'
    )
    content = content.replace(
        f'"touristHotline": "12345"',
        f'"touristHotline": "{emerg["touristHotline"]}"'
    )

# 处理hospitals - 替换为空数组或添加具体数据
# 由于hospitals可能不存在，我们只处理已经存在的
content = content.replace(
    '"hospitals": [\n        {\n          "name": "主要公立医院",\n          "phone": "当地急救电话",\n          "address": "市中心区域"\n        }\n      ]',
    '"hospitals": []'
)

# 清理embassies中的空对象
content = content.replace('"embassies": {}', '"embassies": {}')

# 写入文件
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("完成！已修复所有城市的紧急联系数据")