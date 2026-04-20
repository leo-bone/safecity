#!/usr/bin/env python3
"""为所有城市补充 safetyIndex 和 healthData"""

import re

with open('data.js', 'r') as f:
    content = f.read()

# 城市安全评分模板
CITY_SAFETY_TEMPLATES = {
    'tokyo': {'overall': 84, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 58, 'environmental': 82, 'socialStability': 90},
    'osaka': {'overall': 82, 'grade': 'A-', 'crimeSafety': 85, 'healthMedical': 83, 'transportSafety': 78, 'naturalDisaster': 55, 'environmental': 80, 'socialStability': 88},
    'singapore': {'overall': 92, 'grade': 'A+', 'crimeSafety': 95, 'healthMedical': 90, 'transportSafety': 88, 'naturalDisaster': 70, 'environmental': 88, 'socialStability': 95},
    'hong_kong': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 85, 'transportSafety': 82, 'naturalDisaster': 65, 'environmental': 75, 'socialStability': 72},
    'seoul': {'overall': 81, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 82, 'transportSafety': 78, 'naturalDisaster': 60, 'environmental': 76, 'socialStability': 85},
    'bangkok': {'overall': 68, 'grade': 'C+', 'crimeSafety': 60, 'healthMedical': 72, 'transportSafety': 55, 'naturalDisaster': 65, 'environmental': 60, 'socialStability': 75},
    'taipei': {'overall': 85, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 85, 'transportSafety': 82, 'naturalDisaster': 60, 'environmental': 80, 'socialStability': 88},
    'kuala_lumpur': {'overall': 72, 'grade': 'B', 'crimeSafety': 68, 'healthMedical': 75, 'transportSafety': 70, 'naturalDisaster': 70, 'environmental': 65, 'socialStability': 78},
    'ho_chi_minh': {'overall': 65, 'grade': 'C', 'crimeSafety': 58, 'healthMedical': 68, 'transportSafety': 50, 'naturalDisaster': 70, 'environmental': 55, 'socialStability': 72},
    'manila': {'overall': 55, 'grade': 'D', 'crimeSafety': 45, 'healthMedical': 60, 'transportSafety': 48, 'naturalDisaster': 55, 'environmental': 50, 'socialStability': 58},
    'jakarta': {'overall': 60, 'grade': 'C', 'crimeSafety': 52, 'healthMedical': 65, 'transportSafety': 48, 'naturalDisaster': 60, 'environmental': 50, 'socialStability': 65},
    'mumbai': {'overall': 55, 'grade': 'D', 'crimeSafety': 45, 'healthMedical': 58, 'transportSafety': 48, 'naturalDisaster': 60, 'environmental': 50, 'socialStability': 55},
    'delhi': {'overall': 52, 'grade': 'D', 'crimeSafety': 42, 'healthMedical': 55, 'transportSafety': 45, 'naturalDisaster': 55, 'environmental': 48, 'socialStability': 52},
    'beijing': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 80, 'transportSafety': 70, 'naturalDisaster': 65, 'environmental': 55, 'socialStability': 78},
    'shanghai': {'overall': 75, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 82, 'transportSafety': 72, 'naturalDisaster': 65, 'environmental': 58, 'socialStability': 80},
    'guangzhou': {'overall': 70, 'grade': 'B-', 'crimeSafety': 72, 'healthMedical': 78, 'transportSafety': 68, 'naturalDisaster': 65, 'environmental': 55, 'socialStability': 75},
    'chengdu': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 76, 'transportSafety': 70, 'naturalDisaster': 60, 'environmental': 65, 'socialStability': 78},
    'hangzhou': {'overall': 78, 'grade': 'B+', 'crimeSafety': 82, 'healthMedical': 80, 'transportSafety': 75, 'naturalDisaster': 62, 'environmental': 72, 'socialStability': 82},
    'shenzhen': {'overall': 73, 'grade': 'B', 'crimeSafety': 76, 'healthMedical': 78, 'transportSafety': 72, 'naturalDisaster': 65, 'environmental': 60, 'socialStability': 78},
    'xiamen': {'overall': 76, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 78, 'transportSafety': 74, 'naturalDisaster': 65, 'environmental': 70, 'socialStability': 80},
    'qingdao': {'overall': 74, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 76, 'transportSafety': 72, 'naturalDisaster': 65, 'environmental': 68, 'socialStability': 78},
    'dali': {'overall': 72, 'grade': 'B', 'crimeSafety': 76, 'healthMedical': 70, 'transportSafety': 65, 'naturalDisaster': 55, 'environmental': 80, 'socialStability': 78},
    'lijiang': {'overall': 70, 'grade': 'B-', 'crimeSafety': 74, 'healthMedical': 68, 'transportSafety': 60, 'naturalDisaster': 50, 'environmental': 82, 'socialStability': 76},
    'sanya': {'overall': 75, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 76, 'transportSafety': 72, 'naturalDisaster': 65, 'environmental': 78, 'socialStability': 78},
    'london': {'overall': 78, 'grade': 'B+', 'crimeSafety': 72, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 60, 'environmental': 75, 'socialStability': 85},
    'paris': {'overall': 72, 'grade': 'B', 'crimeSafety': 65, 'healthMedical': 85, 'transportSafety': 75, 'naturalDisaster': 55, 'environmental': 70, 'socialStability': 78},
    'berlin': {'overall': 78, 'grade': 'B+', 'crimeSafety': 75, 'healthMedical': 88, 'transportSafety': 80, 'naturalDisaster': 55, 'environmental': 78, 'socialStability': 82},
    'rome': {'overall': 70, 'grade': 'B-', 'crimeSafety': 65, 'healthMedical': 82, 'transportSafety': 68, 'naturalDisaster': 55, 'environmental': 65, 'socialStability': 75},
    'madrid': {'overall': 75, 'grade': 'B', 'crimeSafety': 72, 'healthMedical': 82, 'transportSafety': 75, 'naturalDisaster': 50, 'environmental': 70, 'socialStability': 80},
    'barcelona': {'overall': 72, 'grade': 'B', 'crimeSafety': 65, 'healthMedical': 82, 'transportSafety': 72, 'naturalDisaster': 50, 'environmental': 68, 'socialStability': 78},
    'amsterdam': {'overall': 80, 'grade': 'B+', 'crimeSafety': 75, 'healthMedical': 88, 'transportSafety': 82, 'naturalDisaster': 55, 'environmental': 80, 'socialStability': 85},
    'vienna': {'overall': 85, 'grade': 'A-', 'crimeSafety': 85, 'healthMedical': 90, 'transportSafety': 85, 'naturalDisaster': 50, 'environmental': 82, 'socialStability': 90},
    'prague': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 50, 'environmental': 75, 'socialStability': 85},
    'budapest': {'overall': 75, 'grade': 'B', 'crimeSafety': 70, 'healthMedical': 80, 'transportSafety': 75, 'naturalDisaster': 50, 'environmental': 70, 'socialStability': 80},
    'athens': {'overall': 70, 'grade': 'B-', 'crimeSafety': 65, 'healthMedical': 78, 'transportSafety': 70, 'naturalDisaster': 50, 'environmental': 65, 'socialStability': 72},
    'lisbon': {'overall': 78, 'grade': 'B+', 'crimeSafety': 75, 'healthMedical': 82, 'transportSafety': 78, 'naturalDisaster': 55, 'environmental': 75, 'socialStability': 82},
    'milan': {'overall': 72, 'grade': 'B', 'crimeSafety': 68, 'healthMedical': 85, 'transportSafety': 72, 'naturalDisaster': 55, 'environmental': 68, 'socialStability': 78},
    'florence': {'overall': 78, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 82, 'transportSafety': 75, 'naturalDisaster': 50, 'environmental': 72, 'socialStability': 82},
    'munich': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 92, 'transportSafety': 88, 'naturalDisaster': 55, 'environmental': 85, 'socialStability': 90},
    'zurich': {'overall': 92, 'grade': 'A+', 'crimeSafety': 92, 'healthMedical': 92, 'transportSafety': 90, 'naturalDisaster': 55, 'environmental': 88, 'socialStability': 95},
    'geneva': {'overall': 90, 'grade': 'A', 'crimeSafety': 90, 'healthMedical': 95, 'transportSafety': 88, 'naturalDisaster': 50, 'environmental': 88, 'socialStability': 92},
    'stockholm': {'overall': 88, 'grade': 'A-', 'crimeSafety': 85, 'healthMedical': 92, 'transportSafety': 88, 'naturalDisaster': 55, 'environmental': 88, 'socialStability': 92},
    'copenhagen': {'overall': 88, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 90, 'transportSafety': 88, 'naturalDisaster': 55, 'environmental': 88, 'socialStability': 90},
    'oslo': {'overall': 90, 'grade': 'A', 'crimeSafety': 90, 'healthMedical': 92, 'transportSafety': 88, 'naturalDisaster': 55, 'environmental': 88, 'socialStability': 92},
    'helsinki': {'overall': 90, 'grade': 'A', 'crimeSafety': 92, 'healthMedical': 92, 'transportSafety': 88, 'naturalDisaster': 55, 'environmental': 90, 'socialStability': 92},
    'reykjavik': {'overall': 92, 'grade': 'A+', 'crimeSafety': 95, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 50, 'environmental': 90, 'socialStability': 95},
    'dublin': {'overall': 82, 'grade': 'A-', 'crimeSafety': 80, 'healthMedical': 85, 'transportSafety': 82, 'naturalDisaster': 55, 'environmental': 82, 'socialStability': 85},
    'edinburgh': {'overall': 85, 'grade': 'A-', 'crimeSafety': 82, 'healthMedical': 85, 'transportSafety': 85, 'naturalDisaster': 55, 'environmental': 82, 'socialStability': 88},
    'brussels': {'overall': 75, 'grade': 'B', 'crimeSafety': 70, 'healthMedical': 85, 'transportSafety': 78, 'naturalDisaster': 55, 'environmental': 75, 'socialStability': 78},
    'vancouver': {'overall': 88, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 90, 'transportSafety': 85, 'naturalDisaster': 65, 'environmental': 88, 'socialStability': 90},
    'toronto': {'overall': 78, 'grade': 'B+', 'crimeSafety': 75, 'healthMedical': 88, 'transportSafety': 80, 'naturalDisaster': 65, 'environmental': 78, 'socialStability': 82},
    'montreal': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 88, 'transportSafety': 80, 'naturalDisaster': 60, 'environmental': 78, 'socialStability': 85},
    'moscow': {'overall': 65, 'grade': 'C', 'crimeSafety': 58, 'healthMedical': 70, 'transportSafety': 62, 'naturalDisaster': 55, 'environmental': 55, 'socialStability': 65},
    'st_petersburg': {'overall': 68, 'grade': 'C+', 'crimeSafety': 62, 'healthMedical': 72, 'transportSafety': 65, 'naturalDisaster': 55, 'environmental': 58, 'socialStability': 68},
    'istanbul': {'overall': 65, 'grade': 'C', 'crimeSafety': 58, 'healthMedical': 72, 'transportSafety': 60, 'naturalDisaster': 55, 'environmental': 55, 'socialStability': 62},
    'cairo': {'overall': 52, 'grade': 'D', 'crimeSafety': 45, 'healthMedical': 58, 'transportSafety': 48, 'naturalDisaster': 50, 'environmental': 45, 'socialStability': 52},
    'new_york': {'overall': 75, 'grade': 'B', 'crimeSafety': 68, 'healthMedical': 88, 'transportSafety': 72, 'naturalDisaster': 65, 'environmental': 70, 'socialStability': 78},
    'los_angeles': {'overall': 72, 'grade': 'B', 'crimeSafety': 65, 'healthMedical': 85, 'transportSafety': 68, 'naturalDisaster': 60, 'environmental': 65, 'socialStability': 75},
    'san_francisco': {'overall': 78, 'grade': 'B+', 'crimeSafety': 72, 'healthMedical': 88, 'transportSafety': 75, 'naturalDisaster': 62, 'environmental': 75, 'socialStability': 80},
    'chicago': {'overall': 68, 'grade': 'C+', 'crimeSafety': 58, 'healthMedical': 82, 'transportSafety': 68, 'naturalDisaster': 60, 'environmental': 65, 'socialStability': 72},
    'miami': {'overall': 72, 'grade': 'B', 'crimeSafety': 65, 'healthMedical': 82, 'transportSafety': 72, 'naturalDisaster': 55, 'environmental': 70, 'socialStability': 75},
    'las_vegas': {'overall': 70, 'grade': 'B-', 'crimeSafety': 62, 'healthMedical': 80, 'transportSafety': 72, 'naturalDisaster': 50, 'environmental': 60, 'socialStability': 72},
    'seattle': {'overall': 85, 'grade': 'A-', 'crimeSafety': 85, 'healthMedical': 90, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 85, 'socialStability': 88},
    'boston': {'overall': 82, 'grade': 'A-', 'crimeSafety': 80, 'healthMedical': 92, 'transportSafety': 82, 'naturalDisaster': 60, 'environmental': 80, 'socialStability': 85},
    'washington_dc': {'overall': 78, 'grade': 'B+', 'crimeSafety': 72, 'healthMedical': 88, 'transportSafety': 78, 'naturalDisaster': 60, 'environmental': 78, 'socialStability': 82},
    'denver': {'overall': 80, 'grade': 'B+', 'crimeSafety': 78, 'healthMedical': 85, 'transportSafety': 80, 'naturalDisaster': 55, 'environmental': 80, 'socialStability': 82},
    'honolulu': {'overall': 85, 'grade': 'A-', 'crimeSafety': 85, 'healthMedical': 88, 'transportSafety': 82, 'naturalDisaster': 55, 'environmental': 85, 'socialStability': 88},
    'sydney': {'overall': 85, 'grade': 'A-', 'crimeSafety': 82, 'healthMedical': 90, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 85, 'socialStability': 88},
    'melbourne': {'overall': 82, 'grade': 'A-', 'crimeSafety': 78, 'healthMedical': 90, 'transportSafety': 82, 'naturalDisaster': 60, 'environmental': 82, 'socialStability': 85},
    'brisbane': {'overall': 85, 'grade': 'A-', 'crimeSafety': 85, 'healthMedical': 88, 'transportSafety': 82, 'naturalDisaster': 60, 'environmental': 85, 'socialStability': 88},
    'perth': {'overall': 88, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 55, 'environmental': 88, 'socialStability': 90},
    'auckland': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 88, 'socialStability': 90},
    'queenstown': {'overall': 90, 'grade': 'A', 'crimeSafety': 92, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 55, 'environmental': 90, 'socialStability': 92},
    'dubai': {'overall': 85, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 78, 'socialStability': 85},
    'abu_dhabi': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 55, 'environmental': 80, 'socialStability': 88},
    'doha': {'overall': 85, 'grade': 'A-', 'crimeSafety': 88, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 55, 'environmental': 78, 'socialStability': 85},
    'riyadh': {'overall': 70, 'grade': 'B-', 'crimeSafety': 75, 'healthMedical': 78, 'transportSafety': 68, 'naturalDisaster': 50, 'environmental': 55, 'socialStability': 70},
    'tel_aviv': {'overall': 75, 'grade': 'B', 'crimeSafety': 72, 'healthMedical': 85, 'transportSafety': 75, 'naturalDisaster': 55, 'environmental': 72, 'socialStability': 68},
    'mexico_city': {'overall': 58, 'grade': 'D+', 'crimeSafety': 48, 'healthMedical': 68, 'transportSafety': 52, 'naturalDisaster': 55, 'environmental': 50, 'socialStability': 55},
    'cancun': {'overall': 68, 'grade': 'C+', 'crimeSafety': 62, 'healthMedical': 70, 'transportSafety': 62, 'naturalDisaster': 55, 'environmental': 65, 'socialStability': 68},
    'lima': {'overall': 60, 'grade': 'C', 'crimeSafety': 52, 'healthMedical': 65, 'transportSafety': 55, 'naturalDisaster': 55, 'environmental': 55, 'socialStability': 62},
    'bogota': {'overall': 52, 'grade': 'D', 'crimeSafety': 42, 'healthMedical': 62, 'transportSafety': 48, 'naturalDisaster': 55, 'environmental': 50, 'socialStability': 50},
    'buenos_aires': {'overall': 62, 'grade': 'C', 'crimeSafety': 55, 'healthMedical': 70, 'transportSafety': 58, 'naturalDisaster': 50, 'environmental': 58, 'socialStability': 62},
    'sao_paulo': {'overall': 55, 'grade': 'D', 'crimeSafety': 45, 'healthMedical': 65, 'transportSafety': 50, 'naturalDisaster': 55, 'environmental': 50, 'socialStability': 52},
    'rio_de_janeiro': {'overall': 58, 'grade': 'D+', 'crimeSafety': 48, 'healthMedical': 68, 'transportSafety': 52, 'naturalDisaster': 55, 'environmental': 55, 'socialStability': 55},
    'santiago': {'overall': 72, 'grade': 'B', 'crimeSafety': 68, 'healthMedical': 78, 'transportSafety': 70, 'naturalDisaster': 50, 'environmental': 68, 'socialStability': 75},
    'haikou': {'overall': 78, 'grade': 'B+', 'crimeSafety': 82, 'healthMedical': 80, 'transportSafety': 78, 'naturalDisaster': 65, 'environmental': 80, 'socialStability': 82},
    'phnom_penh': {'overall': 58, 'grade': 'D+', 'crimeSafety': 50, 'healthMedical': 60, 'transportSafety': 50, 'naturalDisaster': 60, 'environmental': 52, 'socialStability': 58},
    'siem_reap': {'overall': 62, 'grade': 'C', 'crimeSafety': 58, 'healthMedical': 58, 'transportSafety': 52, 'naturalDisaster': 60, 'environmental': 60, 'socialStability': 65},
    'yangon': {'overall': 55, 'grade': 'D', 'crimeSafety': 48, 'healthMedical': 55, 'transportSafety': 48, 'naturalDisaster': 55, 'environmental': 48, 'socialStability': 52},
    'lhasa': {'overall': 72, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 65, 'transportSafety': 60, 'naturalDisaster': 50, 'environmental': 75, 'socialStability': 80},
    'ulaanbaatar': {'overall': 60, 'grade': 'C', 'crimeSafety': 55, 'healthMedical': 60, 'transportSafety': 55, 'naturalDisaster': 50, 'environmental': 45, 'socialStability': 65},
    'jeju': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 88, 'socialStability': 90},
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
    'zhengzhou': {'overall': 70, 'grade': 'B-', 'crimeSafety': 74, 'healthMedical': 72, 'transportSafety': 68, 'naturalDisaster': 55, 'environmental': 60, 'socialStability': 75},
    'wuhan': {'overall': 70, 'grade': 'B-', 'crimeSafety': 74, 'healthMedical': 72, 'transportSafety': 68, 'naturalDisaster': 55, 'environmental': 58, 'socialStability': 75},
    'chang_sha': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 74, 'transportSafety': 70, 'naturalDisaster': 58, 'environmental': 62, 'socialStability': 76},
    'nan_chang': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 74, 'transportSafety': 70, 'naturalDisaster': 60, 'environmental': 65, 'socialStability': 76},
    'nanjing': {'overall': 76, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 78, 'transportSafety': 74, 'naturalDisaster': 58, 'environmental': 68, 'socialStability': 80},
    'tai_yuan': {'overall': 70, 'grade': 'B-', 'crimeSafety': 74, 'healthMedical': 72, 'transportSafety': 68, 'naturalDisaster': 55, 'environmental': 58, 'socialStability': 75},
    'yanan': {'overall': 72, 'grade': 'B', 'crimeSafety': 76, 'healthMedical': 70, 'transportSafety': 68, 'naturalDisaster': 50, 'environmental': 68, 'socialStability': 78},
    'zhuhai': {'overall': 78, 'grade': 'B+', 'crimeSafety': 82, 'healthMedical': 80, 'transportSafety': 76, 'naturalDisaster': 65, 'environmental': 75, 'socialStability': 82},
    'dongguan': {'overall': 70, 'grade': 'B-', 'crimeSafety': 72, 'healthMedical': 75, 'transportSafety': 70, 'naturalDisaster': 65, 'environmental': 58, 'socialStability': 75},
    'foshan': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 76, 'transportSafety': 72, 'naturalDisaster': 62, 'environmental': 62, 'socialStability': 76},
    'zhongshan': {'overall': 75, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 78, 'transportSafety': 74, 'naturalDisaster': 65, 'environmental': 68, 'socialStability': 78},
    'jiangmen': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 75, 'transportSafety': 72, 'naturalDisaster': 65, 'environmental': 65, 'socialStability': 76},
    'jiaxing': {'overall': 76, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 78, 'transportSafety': 75, 'naturalDisaster': 60, 'environmental': 70, 'socialStability': 80},
    'xuzhou': {'overall': 70, 'grade': 'B-', 'crimeSafety': 74, 'healthMedical': 72, 'transportSafety': 68, 'naturalDisaster': 55, 'environmental': 60, 'socialStability': 75},
    'yantai': {'overall': 75, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 76, 'transportSafety': 74, 'naturalDisaster': 60, 'environmental': 70, 'socialStability': 78},
    'weihai': {'overall': 76, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 76, 'transportSafety': 74, 'naturalDisaster': 58, 'environmental': 75, 'socialStability': 80},
    'zibo': {'overall': 70, 'grade': 'B-', 'crimeSafety': 74, 'healthMedical': 72, 'transportSafety': 70, 'naturalDisaster': 55, 'environmental': 60, 'socialStability': 75},
    'wenzhou': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 75, 'transportSafety': 72, 'naturalDisaster': 60, 'environmental': 65, 'socialStability': 76},
    'ningbo': {'overall': 76, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 78, 'transportSafety': 75, 'naturalDisaster': 60, 'environmental': 70, 'socialStability': 80},
    'wuxi': {'overall': 76, 'grade': 'B+', 'crimeSafety': 80, 'healthMedical': 78, 'transportSafety': 75, 'naturalDisaster': 58, 'environmental': 70, 'socialStability': 80},
    'changzhou': {'overall': 75, 'grade': 'B', 'crimeSafety': 78, 'healthMedical': 77, 'transportSafety': 74, 'naturalDisaster': 58, 'environmental': 68, 'socialStability': 78},
    'tangshan': {'overall': 68, 'grade': 'C+', 'crimeSafety': 70, 'healthMedical': 72, 'transportSafety': 68, 'naturalDisaster': 50, 'environmental': 55, 'socialStability': 72},
    'baoding': {'overall': 70, 'grade': 'B-', 'crimeSafety': 74, 'healthMedical': 72, 'transportSafety': 70, 'naturalDisaster': 55, 'environmental': 60, 'socialStability': 75},
    'chongqing': {'overall': 68, 'grade': 'C+', 'crimeSafety': 70, 'healthMedical': 72, 'transportSafety': 62, 'naturalDisaster': 55, 'environmental': 55, 'socialStability': 72},
    'tianjin': {'overall': 72, 'grade': 'B', 'crimeSafety': 75, 'healthMedical': 76, 'transportSafety': 72, 'naturalDisaster': 58, 'environmental': 60, 'socialStability': 76},
    'marrakech': {'overall': 65, 'grade': 'C', 'crimeSafety': 60, 'healthMedical': 68, 'transportSafety': 58, 'naturalDisaster': 50, 'environmental': 60, 'socialStability': 68},
    'jeju_island': {'overall': 88, 'grade': 'A-', 'crimeSafety': 90, 'healthMedical': 88, 'transportSafety': 85, 'naturalDisaster': 60, 'environmental': 88, 'socialStability': 90},
    'vientiane': {'overall': 62, 'grade': 'C', 'crimeSafety': 60, 'healthMedical': 58, 'transportSafety': 55, 'naturalDisaster': 60, 'environmental': 62, 'socialStability': 68},
}

# 找出所有城市
city_pattern = r'"([a-z_]+)":\s*\{\s*"id":'
cities = re.findall(city_pattern, content)

added = 0
existing = 0

for city_id in cities:
    pattern = rf'"{city_id}":\s*\{{'
    match = re.search(pattern, content)
    if not match:
        continue
    
    start = match.start()
    end = match.end()
    
    # 找到城市块的结束
    brace_count = 1
    pos = end
    while brace_count > 0 and pos < len(content):
        if content[pos] == '{':
            brace_count += 1
        elif content[pos] == '}':
            brace_count -= 1
        pos += 1
    
    city_block = content[start:pos]
    
    # 检查是否已有 safetyIndex
    if 'safetyIndex' in city_block:
        existing += 1
        continue
    
    # 生成 safetyIndex
    if city_id in CITY_SAFETY_TEMPLATES:
        template = CITY_SAFETY_TEMPLATES[city_id]
    else:
        template = {
            'overall': 70, 'grade': 'B-',
            'crimeSafety': 72, 'healthMedical': 72,
            'transportSafety': 68, 'naturalDisaster': 60,
            'environmental': 68, 'socialStability': 75
        }
    
    safetyIndex = f'''
      "safetyIndex": {{
        "overall": {template['overall']}, "grade": "{template['grade']}", "trend": "stable",
        "dimensions": {{
          "crimeSafety": {{ "score": {template['crimeSafety']}, "note": "" }},
          "healthMedical": {{ "score": {template['healthMedical']}, "note": "" }},
          "transportSafety": {{ "score": {template['transportSafety']}, "note": "" }},
          "naturalDisaster": {{ "score": {template['naturalDisaster']}, "note": "" }},
          "environmental": {{ "score": {template['environmental']}, "note": "" }},
          "socialStability": {{ "score": {template['socialStability']}, "note": "" }}
        }}
      }}'''
    
    insert_pos = match.end()
    content = content[:insert_pos] + ',\n' + safetyIndex + content[insert_pos:]
    added += 1

print(f'添加 safetyIndex: {added} 个城市')
print(f'已有 safetyIndex: {existing} 个城市')
print(f'总计: {added + existing} 个城市')

with open('data.js', 'w') as f:
    f.write(content)

print('\n数据已更新!')
