#!/usr/bin/env python3
"""补充剩余城市的 safetyIndex"""

import re

with open('data.js', 'r') as f:
    content = f.read()

# 剩余城市的安全评分
CITY_SAFETY_TEMPLATES = {
    'muscat': {'overall': 78, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 78, 'transportSafety': 75, 'naturalDisaster': 55, 'environmental': 75, 'socialStability': 80},
    'bali': {'overall': 72, 'grade': 'B', 'crimeSafety': 70, 'healthMedical': 68, 'transportSafety': 65, 'naturalDisaster': 55, 'environmental': 75, 'socialStability': 75},
    'chiangmai': {'overall': 75, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 72, 'transportSafety': 70, 'naturalDisaster': 60, 'environmental': 75, 'socialStability': 80},
    'phuket': {'overall': 72, 'grade': 'B', 'crimeSafety': 70, 'healthMedical': 70, 'transportSafety': 68, 'naturalDisaster': 60, 'environmental': 72, 'socialStability': 75},
    'hanoi': {'overall': 68, 'grade': 'C+', 'crimeSafety': 65, 'healthMedical': 68, 'transportSafety': 60, 'naturalDisaster': 65, 'environmental': 60, 'socialStability': 72},
    'bangalore': {'overall': 58, 'grade': 'D+', 'crimeSafety': 52, 'healthMedical': 62, 'transportSafety': 55, 'naturalDisaster': 60, 'environmental': 52, 'socialStability': 58},
    'chennai': {'overall': 58, 'grade': 'D+', 'crimeSafety': 52, 'healthMedical': 62, 'transportSafety': 55, 'naturalDisaster': 60, 'environmental': 52, 'socialStability': 58},
    'kolkata': {'overall': 55, 'grade': 'D', 'crimeSafety': 48, 'healthMedical': 58, 'transportSafety': 50, 'naturalDisaster': 55, 'environmental': 50, 'socialStability': 55},
    'hyderabad': {'overall': 58, 'grade': 'D+', 'crimeSafety': 52, 'healthMedical': 62, 'transportSafety': 55, 'naturalDisaster': 60, 'environmental': 52, 'socialStability': 58},
    'xian': {'overall': 74, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 75, 'transportSafety': 72, 'naturalDisaster': 55, 'environmental': 62, 'socialStability': 78},
    'warsaw': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 82, 'transportSafety': 80, 'naturalDisaster': 50, 'environmental': 75, 'socialStability': 82},
    'frankfurt': {'overall': 85, 'grade': 'A-', 'crimeSafety': 85, 'healthMedical': 90, 'transportSafety': 85, 'naturalDisaster': 50, 'environmental': 82, 'socialStability': 88},
    'hamburg': {'overall': 82, 'grade': 'A-', 'crimeSafety': 80, 'healthMedical': 88, 'transportSafety': 82, 'naturalDisaster': 55, 'environmental': 80, 'socialStability': 85},
    'manchester': {'overall': 78, 'grade': 'B+', 'crimeSafety': 75, 'healthMedical': 85, 'transportSafety': 78, 'naturalDisaster': 55, 'environmental': 75, 'socialStability': 82},
    'lyon': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 50, 'environmental': 78, 'socialStability': 85},
    'marseille': {'overall': 68, 'grade': 'C+', 'crimeSafety': 62, 'healthMedical': 80, 'transportSafety': 68, 'naturalDisaster': 55, 'environmental': 65, 'socialStability': 72},
    'nice': {'overall': 82, 'grade': 'A-', 'crimeSafety': 82, 'healthMedical': 85, 'transportSafety': 82, 'naturalDisaster': 50, 'environmental': 80, 'socialStability': 86},
    'venice': {'overall': 75, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 80, 'transportSafety': 70, 'naturalDisaster': 50, 'environmental': 70, 'socialStability': 80},
    'naples': {'overall': 65, 'grade': 'C', 'crimeSafety': 58, 'healthMedical': 78, 'transportSafety': 62, 'naturalDisaster': 50, 'environmental': 60, 'socialStability': 68},
    'valencia': {'overall': 82, 'grade': 'A-', 'crimeSafety': 82, 'healthMedical': 82, 'transportSafety': 82, 'naturalDisaster': 50, 'environmental': 78, 'socialStability': 86},
    'milan': {'overall': 72, 'grade': 'B', 'crimeSafety': 68, 'healthMedical': 85, 'transportSafety': 72, 'naturalDisaster': 55, 'environmental': 68, 'socialStability': 78},
    'cape_town': {'overall': 60, 'grade': 'C', 'crimeSafety': 52, 'healthMedical': 68, 'transportSafety': 60, 'naturalDisaster': 55, 'environmental': 65, 'socialStability': 62},
    'johannesburg': {'overall': 52, 'grade': 'D', 'crimeSafety': 42, 'healthMedical': 65, 'transportSafety': 52, 'naturalDisaster': 55, 'environmental': 55, 'socialStability': 50},
    'nairobi': {'overall': 52, 'grade': 'D', 'crimeSafety': 45, 'healthMedical': 55, 'transportSafety': 48, 'naturalDisaster': 55, 'environmental': 50, 'socialStability': 52},
    'lagos': {'overall': 48, 'grade': 'D', 'crimeSafety': 40, 'healthMedical': 50, 'transportSafety': 45, 'naturalDisaster': 55, 'environmental': 45, 'socialStability': 48},
    'addis_ababa': {'overall': 52, 'grade': 'D', 'crimeSafety': 45, 'healthMedical': 52, 'transportSafety': 48, 'naturalDisaster': 55, 'environmental': 48, 'socialStability': 52},
    'accra': {'overall': 58, 'grade': 'D+', 'crimeSafety': 50, 'healthMedical': 58, 'transportSafety': 52, 'naturalDisaster': 55, 'environmental': 52, 'socialStability': 58},
    'casablanca': {'overall': 62, 'grade': 'C', 'crimeSafety': 58, 'healthMedical': 65, 'transportSafety': 60, 'naturalDisaster': 50, 'environmental': 60, 'socialStability': 65},
    'tunis': {'overall': 68, 'grade': 'C+', 'crimeSafety': 65, 'healthMedical': 70, 'transportSafety': 65, 'naturalDisaster': 50, 'environmental': 65, 'socialStability': 72},
    'alger': {'overall': 55, 'grade': 'D', 'crimeSafety': 48, 'healthMedical': 60, 'transportSafety': 52, 'naturalDisaster': 50, 'environmental': 50, 'socialStability': 55},
    'phnom_penh': {'overall': 58, 'grade': 'D+', 'crimeSafety': 50, 'healthMedical': 60, 'transportSafety': 50, 'naturalDisaster': 60, 'environmental': 52, 'socialStability': 58},
    'yangon': {'overall': 55, 'grade': 'D', 'crimeSafety': 48, 'healthMedical': 55, 'transportSafety': 48, 'naturalDisaster': 55, 'environmental': 48, 'socialStability': 52},
    'lhasa': {'overall': 72, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 65, 'transportSafety': 60, 'naturalDisaster': 50, 'environmental': 75, 'socialStability': 80},
    'ulaanbaatar': {'overall': 60, 'grade': 'C', 'crimeSafety': 55, 'healthMedical': 60, 'transportSafety': 55, 'naturalDisaster': 50, 'environmental': 45, 'socialStability': 65},
    'jeju': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 88, 'socialStability': 90},
    'jeju_island': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 88, 'socialStability': 90},
    'busan': {'overall': 82, 'grade': 'A-', 'crimeSafety': 82, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 60, 'environmental': 80, 'socialStability': 85},
    'chiang_mai': {'overall': 75, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 72, 'transportSafety': 70, 'naturalDisaster': 60, 'environmental': 75, 'socialStability': 80},
    'krabi': {'overall': 78, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 72, 'transportSafety': 72, 'naturalDisaster': 60, 'environmental': 80, 'socialStability': 82},
    'penang': {'overall': 75, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 75, 'transportSafety': 72, 'naturalDisaster': 60, 'environmental': 75, 'socialStability': 78},
    'boracay': {'overall': 80, 'grade': 'B+', 'crimeSafety': 82, 'healthMedical': 72, 'transportSafety': 72, 'naturalDisaster': 60, 'environmental': 82, 'socialStability': 82},
    'palawan': {'overall': 78, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 68, 'transportSafety': 68, 'naturalDisaster': 60, 'environmental': 85, 'socialStability': 82},
    'lan_zhou': {'overall': 70, 'grade': 'B-', 'crimeSafety': 75, 'healthMedical': 72, 'transportSafety': 68, 'naturalDisaster': 55, 'environmental': 60, 'socialStability': 75},
    'xi_an': {'overall': 74, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 75, 'transportSafety': 72, 'naturalDisaster': 55, 'environmental': 62, 'socialStability': 78},
    'kunming': {'overall': 75, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 75, 'transportSafety': 72, 'naturalDisaster': 55, 'environmental': 72, 'socialStability': 78},
    'gui_yang': {'overall': 72, 'grade': 'B', 'crimeSafety': 76, 'healthMedical': 72, 'transportSafety': 70, 'naturalDisaster': 55, 'environmental': 70, 'socialStability': 76},
    'nan_ning': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 72, 'transportSafety': 70, 'naturalDisaster': 60, 'environmental': 72, 'socialStability': 76},
}

# 处理每个城市
added = 0
for city_id, template in CITY_SAFETY_TEMPLATES.items():
    # 匹配模式: "city_id": { "id": "city_id"
    pattern = rf'("{city_id}":\s*\{{\s*"?id"?:\s*"{city_id}")'
    match = re.search(pattern, content)
    if match:
        insert_pos = match.end()
        
        safetyIndex = f',\n    "safetyIndex": {{\n      "overall": {template["overall"]}, "grade": "{template["grade"]}", "trend": "stable",\n      "dimensions": {{\n        "crimeSafety": {{ "score": {template["crimeSafety"]}, "note": "" }},\n        "healthMedical": {{ "score": {template["healthMedical"]}, "note": "" }},\n        "transportSafety": {{ "score": {template["transportSafety"]}, "note": "" }},\n        "naturalDisaster": {{ "score": {template["naturalDisaster"]}, "note": "" }},\n        "environmental": {{ "score": {template["environmental"]}, "note": "" }},\n        "socialStability": {{ "score": {template["socialStability"]}, "note": "" }}\n      }}\n    }}'
        
        content = content[:insert_pos] + safetyIndex + content[insert_pos:]
        added += 1

print(f'添加 safetyIndex: {added} 个城市')

# 检查最终状态
si_count = content.count('"safetyIndex":')
print(f'总 safetyIndex 数: {si_count}')

with open('data.js', 'w') as f:
    f.write(content)

print('数据已更新!')
