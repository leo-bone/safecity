#!/usr/bin/env python3
"""补充最后剩余城市的 safetyIndex"""

import re

with open('data.js', 'r') as f:
    content = f.read()

# 剩余城市的安全评分
CITY_SAFETY = {
    'seville': {'overall': 82, 'grade': 'A-', 'crimeSafety': 82, 'healthMedical': 82, 'transportSafety': 82, 'naturalDisaster': 50, 'environmental': 80, 'socialStability': 86},
    'malaga': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 82, 'transportSafety': 80, 'naturalDisaster': 50, 'environmental': 78, 'socialStability': 84},
    'porto': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 82, 'transportSafety': 80, 'naturalDisaster': 55, 'environmental': 78, 'socialStability': 84},
    'krakow': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 82, 'transportSafety': 80, 'naturalDisaster': 50, 'environmental': 75, 'socialStability': 84},
    'cologne': {'overall': 82, 'grade': 'A-', 'crimeSafety': 80, 'healthMedical': 88, 'transportSafety': 82, 'naturalDisaster': 55, 'environmental': 78, 'socialStability': 85},
    'atlanta': {'overall': 68, 'grade': 'C+', 'crimeSafety': 62, 'healthMedical': 82, 'transportSafety': 70, 'naturalDisaster': 60, 'environmental': 65, 'socialStability': 72},
    'dallas': {'overall': 68, 'grade': 'C+', 'crimeSafety': 60, 'healthMedical': 80, 'transportSafety': 68, 'naturalDisaster': 60, 'environmental': 62, 'socialStability': 70},
    'houston': {'overall': 65, 'grade': 'C', 'crimeSafety': 58, 'healthMedical': 80, 'transportSafety': 65, 'naturalDisaster': 60, 'environmental': 60, 'socialStability': 68},
    'phoenix': {'overall': 70, 'grade': 'B-', 'crimeSafety': 65, 'healthMedical': 78, 'transportSafety': 70, 'naturalDisaster': 55, 'environmental': 65, 'socialStability': 72},
    'portland': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 60, 'environmental': 80, 'socialStability': 84},
    'san_diego': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 60, 'environmental': 80, 'socialStability': 84},
    'austin': {'overall': 78, 'grade': 'B+', 'crimeSafety': 75, 'healthMedical': 82, 'transportSafety': 78, 'naturalDisaster': 60, 'environmental': 75, 'socialStability': 80},
    'medellin': {'overall': 62, 'grade': 'C', 'crimeSafety': 55, 'healthMedical': 65, 'transportSafety': 58, 'naturalDisaster': 55, 'environmental': 62, 'socialStability': 62},
    'panama_city': {'overall': 68, 'grade': 'C+', 'crimeSafety': 62, 'healthMedical': 70, 'transportSafety': 65, 'naturalDisaster': 60, 'environmental': 65, 'socialStability': 70},
    'adelaide': {'overall': 88, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 88, 'transportSafety': 86, 'naturalDisaster': 55, 'environmental': 88, 'socialStability': 90},
    'wellington': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 88, 'socialStability': 90},
    'christchurch': {'overall': 85, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 88, 'transportSafety': 84, 'naturalDisaster': 55, 'environmental': 86, 'socialStability': 88},
}

added = 0
for city_id, template in CITY_SAFETY.items():
    pattern = rf'("{city_id}":\s*\{{\s*"?id"?:\s*"{city_id}")'
    match = re.search(pattern, content)
    if match:
        insert_pos = match.end()
        safetyIndex = f',\n    "safetyIndex": {{\n      "overall": {template["overall"]}, "grade": "{template["grade"]}", "trend": "stable",\n      "dimensions": {{\n        "crimeSafety": {{ "score": {template["crimeSafety"]}, "note": "" }},\n        "healthMedical": {{ "score": {template["healthMedical"]}, "note": "" }},\n        "transportSafety": {{ "score": {template["transportSafety"]}, "note": "" }},\n        "naturalDisaster": {{ "score": {template["naturalDisaster"]}, "note": "" }},\n        "environmental": {{ "score": {template["environmental"]}, "note": "" }},\n        "socialStability": {{ "score": {template["socialStability"]}, "note": "" }}\n      }}\n    }}'
        content = content[:insert_pos] + safetyIndex + content[insert_pos:]
        added += 1

print(f'添加 safetyIndex: {added} 个城市')
si_count = content.count('"safetyIndex":')
print(f'总 safetyIndex 数: {si_count}')

with open('data.js', 'w') as f:
    f.write(content)

print('数据已更新!')
