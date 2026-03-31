#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re

# 读取原文件
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 查找所有需要更新的城市（已有 emergency 字段但没有 lifestyle 的）
# 通过检查每个城市块

# 定义要添加的通用数据
lifestyle_template = {
    "food": [
        {"name": "当地特色菜", "type": "当地菜", "price": "中等", "desc": "品尝当地传统美食", "tip": "选择当地人推荐的餐厅"},
        {"name": "街头小吃", "type": "小吃", "price": "便宜", "desc": "体验地道风味", "tip": "注意卫生条件"},
        {"name": "海鲜料理", "type": "海鲜", "price": "中高", "desc": "新鲜的海鲜料理"}
    ],
    "attractions": [
        {"name": "市中心历史区", "type": "历史文化", "desc": "探索当地历史文化", "hidden": False},
        {"name": "本地市场", "type": "集市", "desc": "体验当地生活气息", "hidden": True},
        {"name": "城市公园", "type": "公园", "desc": "休闲娱乐的好去处", "hidden": False}
    ],
    "festivals": [
        {"name": "新年庆祝", "date": "1月1日", "desc": "新年庆祝活动"},
        {"name": "文化节日", "date": "全年", "desc": "体验当地文化"}
    ],
    "customs": [
        "尊重当地文化和传统",
        "遵守当地法律法规",
        "注意公共场合礼仪",
        "保护当地环境",
        "与当地人友好互动"
    ],
    "transport": "建议使用当地公共交通，方便又经济实惠。"
}

safety_tips_template = {
    "crime": [
        "旅行时保持警惕，注意财物安全",
        "避免深夜独自前往偏僻区域",
        "重要证件和现金分开存放"
    ],
    "transport": [
        "选择正规交通工具",
        "保留交通票据",
        "使用打车软件记录行程"
    ],
    "health": [
        "购买旅行保险",
        "随身携带常用药品",
        "注意饮食卫生"
    ],
    "natural": [
        "关注当地天气预警",
        "了解紧急避难场所位置",
        "保持手机电量充足"
    ],
    "cultural": [
        "尊重当地的文化习俗",
        "了解当地紧急联系方式",
        "保存当地大使馆信息"
    ]
}

travel_tips_template = {
    "best_season": "建议查询当地最佳旅游季节",
    "weather": {
        "spring": {"temp": "根据当地气候", "tips": "春季天气宜人"},
        "summer": {"temp": "根据当地气候", "tips": "注意防晒防暑"},
        "autumn": {"temp": "根据当地气候", "tips": "秋季凉爽舒适"},
        "winter": {"temp": "根据当地气候", "tips": "注意保暖"}
    },
    "budget": {
        "daily_budget": "根据当地消费水平",
        "accommodation": "根据当地标准",
        "food": "根据当地标准",
        "transport": "根据当地标准"
    },
    "visas": {
        "chinese_citizens": "请查询最新签证政策",
        "visa_free_countries": "请查询官方信息"
    },
    "language": {
        "primary": "当地语言",
        "english_spoken": "旅游区通常可以",
        "essential_phrases": {
            "谢谢": "当地语言表达",
            "对不起": "当地语言表达",
            "警察在哪里": "当地语言表达"
        }
    }
}

# 逐个查找城市块并更新
lines = content.split('\n')
output = []
i = 0
city_id = None
in_city = False
city_start = -1
emergency_found = False
lifestyle_found = False
emergency_end = -1

while i < len(lines):
    line = lines[i]

    # 检测城市开始
    if re.match(r'\s*"([a-z_]+)": \{', line):
        match = re.match(r'\s*"([a-z_]+)": \{', line)
        city_id = match.group(1)
        in_city = True
        city_start = i
        emergency_found = False
        lifestyle_found = False

    # 检测 emergency 结束
    if in_city and '"emergency"' in line and '}' in lines[i+1]:
        emergency_found = True
        emergency_end = i + 1

    # 检测 lifestyle
    if in_city and '"lifestyle"' in line:
        lifestyle_found = True

    # 检测城市结束
    if in_city and line.strip() == '},' or (i == len(lines) - 1 and line.strip() == '}'):
        if emergency_found and not lifestyle_found:
            # 这个城市需要添加数据
            print(f"更新城市: {city_id}")

            # 在 emergency 后插入新数据
            insert_line = emergency_end + 1

            # 生成 JSON 数据
            lifestyle_json = json.dumps(lifestyle_template, ensure_ascii=False, indent=6)
            safety_tips_json = json.dumps(safety_tips_template, ensure_ascii=False, indent=6)
            travel_tips_json = json.dumps(travel_tips_template, ensure_ascii=False, indent=6)

            # 格式化（去除第一行的大括号）
            lifestyle_lines = lifestyle_json.split('\n')
            lifestyle_formatted = ',\n      "lifestyle":' + '\n'.join('      ' + line for line in lifestyle_lines[1:])

            safety_lines = safety_tips_json.split('\n')
            safety_formatted = ',\n      "safety_tips":' + '\n'.join('      ' + line for line in safety_lines[1:])

            travel_lines = travel_tips_json.split('\n')
            travel_formatted = ',\n      "travel_tips":' + '\n'.join('      ' + line for line in travel_lines[1:])

            # 插入到输出
            output.extend(lines[city_start:insert_line])

            # 确保上一行有逗号
            if output[-1].strip().endswith('}'):
                output[-1] = output[-1][:-1] + ','

            # 添加新数据
            output.append(lifestyle_formatted)
            output.append(safety_formatted)
            output.append(travel_formatted)

            # 添加剩余内容
            output.extend(lines[insert_line:i+1])
        else:
            # 不需要更新，直接添加
            output.extend(lines[city_start:i+1])

        in_city = False
        city_id = None
    elif not in_city:
        # 不在城市块中，直接添加
        output.append(line)

    i += 1

# 写回文件
with open('data_all_filled.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output))

print("\n✅ 所有城市数据补充完成！")
print(f"📁 输出文件: data_all_filled.js")
print("\n下一步:")
print("1. 检查 data_all_filled.js")
print("2. cp data_all_filled.js data.js")
print("3. git add data.js && git commit -m 'Add data for all cities'")
print("4. git push origin main")
