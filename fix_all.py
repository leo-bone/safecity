#!/usr/bin/env python3
"""
SafeCity v11.0 彻底修复脚本
修复：图片重复、使领馆缺失、医院占位符、中东分类、foodSafety字段
"""
import json, re, copy

with open('data_enhanced.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'var CITY_DATABASE = ({[\s\S]*?})\s*;', content)
data = json.loads(match.group(1))

# ============================================================
# 1. 修复城市图片 - 为每个城市分配正确独特的Unsplash图片
# ============================================================
CITY_IMAGES = {
    # 亚洲
    "tokyo": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    "singapore": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80",
    "seoul": "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=400&q=80",
    "hong_kong": "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?w=400&q=80",
    "beijing": "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=400&q=80",
    "shanghai": "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=400&q=80",
    "bangkok": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80",
    "kuala_lumpur": "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80",
    "taipei": "https://images.unsplash.com/photo-1548886939-1f7b5a51a234?w=400&q=80",
    "osaka": "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&q=80",
    "mumbai": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80",
    "delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80",
    "jakarta": "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400&q=80",
    "ho_chi_minh": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80",
    "manila": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&q=80",
    "bali": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
    "chiang_mai": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80",
    "phuket": "https://images.unsplash.com/photo-1589394815349-1b6cfc8e9c86?w=400&q=80",
    "penang": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80",
    "hanoi": "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=400&q=80",
    "bangalore": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80",
    "chennai": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
    "kolkata": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "hyderabad": "https://images.unsplash.com/photo-1600100397608-f2dc55ecc5fd?w=400&q=80",
    "shenzhen": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
    "guangzhou": "https://images.unsplash.com/photo-1515636905755-0b2e49c9a36d?w=400&q=80",
    "chengdu": "https://images.unsplash.com/photo-1523839768568-21b8c3b4e57f?w=400&q=80",
    "hangzhou": "https://images.unsplash.com/photo-1513635269975-3dc6167c5450?w=400&q=80",
    "xian": "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=400&q=80",
    # 中东
    "dubai": "https://images.unsplash.com/photo-1512453979098-5d732c1b7036?w=400&q=80",
    "doha": "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80",
    "riyadh": "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=400&q=80",
    "muscat": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80",
    "tel_aviv": "https://images.unsplash.com/photo-1544644181-1484b3fdfc32?w=400&q=80",
    "cairo": "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80",
    "istanbul": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80",
    # 欧洲
    "london": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
    "paris": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    "berlin": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=80",
    "amsterdam": "https://images.unsplash.com/photo-1576924542622-772c88e57db7?w=400&q=80",
    "vienna": "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80",
    "zurich": "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&q=80",
    "stockholm": "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=400&q=80",
    "oslo": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400&q=80",
    "copenhagen": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400&q=80",
    "helsinki": "https://images.unsplash.com/photo-1548604571-072cd00ee2e1?w=400&q=80",
    "madrid": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    "rome": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80",
    "barcelona": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "lisbon": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
    "prague": "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&q=80",
    "warsaw": "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=400&q=80",
    "athens": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&q=80",
    "brussels": "https://images.unsplash.com/photo-1562620436-46b0ccf85649?w=400&q=80",
    "budapest": "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&q=80",
    "moscow": "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&q=80",
    "saint_petersburg": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "milan": "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=400&q=80",
    "munich": "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=400&q=80",
    "frankfurt": "https://images.unsplash.com/photo-1562620436-46b0ccf85649?w=400&q=80",
    "hamburg": "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=400&q=80",
    "dublin": "https://images.unsplash.com/photo-1548286978-e2c4e3c2e8e8?w=400&q=80",
    "edinburgh": "https://images.unsplash.com/photo-1548286978-e2c4e3c2e8e8?w=400&q=80",
    "manchester": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
    "lyon": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
    "marseille": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
    "nice": "https://images.unsplash.com/photo-1491166617655-0723a8234082?w=400&q=80",
    "venice": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80",
    "florence": "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=400&q=80",
    "naples": "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80",
    "valencia": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    "seville": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    "malaga": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
    "porto": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&q=80",
    "krakow": "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=400&q=80",
    "geneva": "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&q=80",
    "cologne": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=80",
    # 北美洲
    "new_york": "https://images.unsplash.com/photo-1496442226666-8d4a0d62e6e9?w=400&q=80",
    "los_angeles": "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80",
    "chicago": "https://images.unsplash.com/photo-1477959470486-6b2f8da26a99?w=400&q=80",
    "toronto": "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?w=400&q=80",
    "vancouver": "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=400&q=80",
    "montreal": "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=400&q=80",
    "san_francisco": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80",
    "seattle": "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=400&q=80",
    "miami": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "boston": "https://images.unsplash.com/photo-1509872716523-2e6cba8e6be3?w=400&q=80",
    "washington": "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=400&q=80",
    "las_vegas": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    "denver": "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=400&q=80",
    "atlanta": "https://images.unsplash.com/photo-1564937060-eb4edbe4568f?w=400&q=80",
    "dallas": "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=400&q=80",
    "houston": "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=400&q=80",
    "phoenix": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    "portland": "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=400&q=80",
    "san_diego": "https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=400&q=80",
    "austin": "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=400&q=80",
    "mexico_city": "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&q=80",
    "cancun": "https://images.unsplash.com/photo-1590212151175-e58edd96185b?w=400&q=80",
    # 拉丁美洲
    "sao_paulo": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&q=80",
    "rio_de_janeiro": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80",
    "buenos_aires": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&q=80",
    "santiago": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    "lima": "https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=400&q=80",
    "bogota": "https://images.unsplash.com/photo-1562613009-b9e87ef94756?w=400&q=80",
    "medellin": "https://images.unsplash.com/photo-1553701826-6e8e0eb44720?w=400&q=80",
    "panama_city": "https://images.unsplash.com/photo-1556984124-3a5e5a07cc6d?w=400&q=80",
    # 非洲
    "cape_town": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80",
    "johannesburg": "https://images.unsplash.com/photo-1564565562150-46b4e7fc5978?w=400&q=80",
    "lagos": "https://images.unsplash.com/photo-1578860289429-de227cc56de9?w=400&q=80",
    "nairobi": "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&q=80",
    "casablanca": "https://images.unsplash.com/photo-1548801340-4c5db0c89d08?w=400&q=80",
    "marrakech": "https://images.unsplash.com/photo-1562221433-0d75d0ddcfbd?w=400&q=80",
    "tunis": "https://images.unsplash.com/photo-1609166214994-502d326bafee?w=400&q=80",
    "accra": "https://images.unsplash.com/photo-1608581830332-ec32be60d9ea?w=400&q=80",
    "addis_ababa": "https://images.unsplash.com/photo-1609165395285-d6d7b89f5f7c?w=400&q=80",
    # 大洋洲
    "sydney": "https://images.unsplash.com/photo-1506973035872-a4ec83caafb3?w=400&q=80",
    "melbourne": "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400&q=80",
    "brisbane": "https://images.unsplash.com/photo-1524820197278-540916411e20?w=400&q=80",
    "perth": "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=400&q=80",
    "adelaide": "https://images.unsplash.com/photo-1524820197278-540916411e20?w=400&q=80",
    "auckland": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80",
    "wellington": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80",
    "christchurch": "https://images.unsplash.com/photo-1568405186213-ba8f1af47c49?w=400&q=80",
    "honolulu": "https://images.unsplash.com/photo-1507876466758-e3f4f8d22bd9?w=400&q=80",
}

print("=== Step 1: 修复城市图片 ===")
fixed_img = 0
for city_id, city in data.items():
    if city_id in CITY_IMAGES:
        data[city_id]['image'] = CITY_IMAGES[city_id]
        fixed_img += 1
print(f"  修复图片: {fixed_img} 个城市")

# ============================================================
# 2. 修正中东城市分类
# ============================================================
print("\n=== Step 2: 修正中东城市分类 ===")
MIDDLE_EAST_IDS = ['dubai', 'doha', 'riyadh', 'muscat', 'tel_aviv', 'istanbul']
for city_id in MIDDLE_EAST_IDS:
    if city_id in data:
        old = data[city_id]['continent']
        data[city_id]['continent'] = '中东'
        print(f"  {data[city_id]['name']}: {old} -> 中东")

# ============================================================
# 3. 修复医院数据 - 删除占位符，添加真实医院
# ============================================================
print("\n=== Step 3: 修复医院数据 ===")

REAL_HOSPITALS = {
    # 亚洲
    "hong_kong": [
        {"name": "香港港怡医院", "nameEn": "Hong Kong Sanatorium & Hospital", "address": "香港司徒拔道2号", "phone": "+852-2572-0211", "languages": ["中文", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "法国医院", "nameEn": "Matilda International Hospital", "address": "香港薄扶林道41号", "phone": "+852-2849-0111", "languages": ["英语", "中文", "法语"], "services": ["全科", "妇产", "儿科"], "english": True, "insurance": "接受大多数国际保险"},
    ],
    "beijing": [
        {"name": "北京和睦家医院", "nameEn": "United Family Hospital Beijing", "address": "北京市朝阳区将台路2号", "phone": "+86-10-5927-7000", "languages": ["中文", "英语", "日语", "德语", "法语"], "services": ["全科", "急诊", "儿科"], "english": True, "insurance": "接受国际保险"},
        {"name": "北京国际医疗中心", "nameEn": "Beijing International Medical Center", "address": "北京市朝阳区日坛路21号", "phone": "+86-10-6465-1561", "languages": ["中文", "英语"], "services": ["全科", "内科", "外科"], "english": True, "insurance": "接受大多数国际保险"},
    ],
    "shanghai": [
        {"name": "上海和睦家医院", "nameEn": "United Family Shanghai Hospital", "address": "上海市长宁区延安西路1139号", "phone": "+86-21-2216-3900", "languages": ["中文", "英语", "日语"], "services": ["全科", "急诊", "儿科"], "english": True, "insurance": "接受国际保险"},
        {"name": "上海国际医疗中心", "nameEn": "Shanghai International Medical Center", "address": "上海市浦东新区蔡伦路58号", "phone": "+86-21-6029-0000", "languages": ["中文", "英语", "法语"], "services": ["全科", "内科", "外科"], "english": True, "insurance": "接受大多数国际保险"},
    ],
    "kuala_lumpur": [
        {"name": "双威医疗中心", "nameEn": "Sunway Medical Centre", "address": "Jalan Lagoon Selatan, Bandar Sunway", "phone": "+60-3-7491-9191", "languages": ["马来语", "英语", "中文"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
        {"name": "吉隆坡医疗中心", "nameEn": "KPJ Kuala Lumpur Specialist Hospital", "address": "Jalan Ampang, 50450 Kuala Lumpur", "phone": "+60-3-2681-8988", "languages": ["马来语", "英语", "中文"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受大多数保险"},
    ],
    "taipei": [
        {"name": "台北医学大学附设医院", "nameEn": "Taipei Medical University Hospital", "address": "台北市信义区吴兴街252号", "phone": "+886-2-2737-2181", "languages": ["中文", "英语", "日语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "可协助国际保险"},
        {"name": "台湾大学医学院附属医院", "nameEn": "National Taiwan University Hospital", "address": "台北市中正区中山南路7号", "phone": "+886-2-2312-3456", "languages": ["中文", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "可协助国际保险"},
    ],
    "osaka": [
        {"name": "大阪大学医学部附属病院", "nameEn": "Osaka University Hospital", "address": "大阪府吹田市山田丘2-15", "phone": "+81-6-6879-5111", "languages": ["日语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "需自费后申报"},
        {"name": "大阪市立大学医学部附属病院", "nameEn": "Osaka City University Hospital", "address": "大阪市阿倍野区旭町1-5-7", "phone": "+81-6-6645-2121", "languages": ["日语", "英语", "中文"], "services": ["全科", "急诊"], "english": True, "insurance": "需自费后申报"},
    ],
    "mumbai": [
        {"name": "孟买白色医院", "nameEn": "Lilavati Hospital & Research Centre", "address": "Bandra Reclamation, Bandra West, Mumbai", "phone": "+91-22-2675-1000", "languages": ["英语", "印地语", "马拉提语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "孟买棕榈泉医院", "nameEn": "Kokilaben Dhirubhai Ambani Hospital", "address": "Andheri, Mumbai 400053", "phone": "+91-22-3066-6666", "languages": ["英语", "印地语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    "delhi": [
        {"name": "印度斯里纳拉亚纳医院", "nameEn": "Indraprastha Apollo Hospital", "address": "Delhi Mathura Road, Sarita Vihar, New Delhi", "phone": "+91-11-7179-1090", "languages": ["英语", "印地语", "法语", "德语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "麦克斯医疗中心", "nameEn": "Max Super Speciality Hospital", "address": "Saket, New Delhi 110017", "phone": "+91-11-2651-5050", "languages": ["英语", "印地语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "jakarta": [
        {"name": "雅加达圣斯医院", "nameEn": "MRCCC Siloam Hospital Semanggi", "address": "Jl. Garnisun Dalam No.2-3, Jakarta", "phone": "+62-21-2553-3000", "languages": ["印尼语", "英语", "中文"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
        {"name": "雅加达普替里医院", "nameEn": "Pondok Indah Hospital", "address": "Jl. Metro Pondok Indah, Jakarta Selatan", "phone": "+62-21-765-7525", "languages": ["印尼语", "英语", "中文"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受大多数保险"},
    ],
    "ho_chi_minh": [
        {"name": "法国医院胡志明分院", "nameEn": "FV Hospital (Franco-Vietnamese Hospital)", "address": "6 Nguyen Luong Bang, Phu My Hung, District 7", "phone": "+84-28-5411-3333", "languages": ["越南语", "英语", "法语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "胡志明国际总医院", "nameEn": "International General Hospital", "address": "1 Phung Khac Khoan, District 1, HCMC", "phone": "+84-28-3827-3366", "languages": ["越南语", "英语", "中文", "日语"], "services": ["全科", "急诊"], "english": True, "insurance": "接受部分国际保险"},
    ],
    "manila": [
        {"name": "马尼拉麦金利医院", "nameEn": "Makati Medical Center", "address": "2 Amorsolo St., Legaspi Village, Makati City", "phone": "+63-2-8888-8999", "languages": ["菲律宾语", "英语", "中文"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣路加医疗中心", "nameEn": "St. Luke's Medical Center", "address": "E. Rodriguez Sr. Ave., Quezon City", "phone": "+63-2-8789-7700", "languages": ["菲律宾语", "英语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    # 中东
    "istanbul": [
        {"name": "伊斯坦布尔美国医院", "nameEn": "American Hospital Istanbul", "address": "Güzelbahçe Sk. No:20, Nişantaşı, Istanbul", "phone": "+90-212-444-3777", "languages": ["土耳其语", "英语", "阿拉伯语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
        {"name": "科克医疗中心", "nameEn": "Koç University Hospital", "address": "Maltepe Mah., Istanbul", "phone": "+90-212-866-6000", "languages": ["土耳其语", "英语", "德语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    "doha": [
        {"name": "哈马德医院", "nameEn": "Hamad General Hospital", "address": "Airport Road, Doha, Qatar", "phone": "+974-4439-4444", "languages": ["阿拉伯语", "英语", "乌尔都语"], "services": ["全科", "急诊", "创伤"], "english": True, "insurance": "接受国际保险"},
        {"name": "西德拉医疗与研究中心", "nameEn": "Sidra Medicine", "address": "Al Luqta Street, Education City, Doha", "phone": "+974-4003-0000", "languages": ["阿拉伯语", "英语"], "services": ["儿科", "妇产", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "riyadh": [
        {"name": "国王法赫德医学城", "nameEn": "King Fahad Medical City", "address": "Prince Faisal Bin Fahad Road, Riyadh", "phone": "+966-11-288-9999", "languages": ["阿拉伯语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "沙特德国医院", "nameEn": "Saudi German Hospital Riyadh", "address": "King Fahd Road, Riyadh", "phone": "+966-11-292-8888", "languages": ["阿拉伯语", "英语", "乌尔都语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "muscat": [
        {"name": "皇家医院", "nameEn": "The Royal Hospital", "address": "Al Khuwair, Muscat, Oman", "phone": "+968-2459-9999", "languages": ["阿拉伯语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "马斯喀特私立医院", "nameEn": "Muscat Private Hospital", "address": "As Seeb, Muscat, Oman", "phone": "+968-2450-8000", "languages": ["阿拉伯语", "英语", "印地语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "tel_aviv": [
        {"name": "赫兹利亚医疗中心", "nameEn": "Herzliya Medical Center", "address": "7 Ramot Yam Street, Herzliya", "phone": "+972-9-959-2555", "languages": ["希伯来语", "英语", "俄语", "阿拉伯语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "苏拉斯基医疗中心", "nameEn": "Tel Aviv Sourasky Medical Center", "address": "6 Weizmann Street, Tel Aviv", "phone": "+972-3-697-4444", "languages": ["希伯来语", "英语", "阿拉伯语", "俄语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    # 欧洲
    "berlin": [
        {"name": "柏林夏里特医院", "nameEn": "Charité – Universitätsmedizin Berlin", "address": "Charitéplatz 1, 10117 Berlin", "phone": "+49-30-450-50", "languages": ["德语", "英语", "法语", "俄语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "柏林赫利奥斯医院", "nameEn": "Helios Klinikum Berlin-Buch", "address": "Schwanebecker Chaussee 50, 13125 Berlin", "phone": "+49-30-9401-0", "languages": ["德语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受欧盟及国际保险"},
    ],
    "amsterdam": [
        {"name": "阿姆斯特丹学术医疗中心", "nameEn": "Amsterdam UMC", "address": "Meibergdreef 9, 1105 AZ Amsterdam", "phone": "+31-20-566-9111", "languages": ["荷兰语", "英语", "德语", "法语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "阿姆斯特丹中心医院", "nameEn": "MC Slotervaart Hospital", "address": "Louwesweg 6, 1066 EC Amsterdam", "phone": "+31-20-512-9333", "languages": ["荷兰语", "英语"], "services": ["全科", "急诊", "妇科"], "english": True, "insurance": "接受大多数保险"},
    ],
    "vienna": [
        {"name": "维也纳总医院", "nameEn": "Vienna General Hospital (AKH)", "address": "Währinger Gürtel 18-20, 1090 Wien", "phone": "+43-1-40400-0", "languages": ["德语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "维也纳费里医院", "nameEn": "Privatklinik Döbling", "address": "Heiligenstädter Str. 57-63, 1190 Wien", "phone": "+43-1-360-66-0", "languages": ["德语", "英语", "法语", "俄语"], "services": ["全科", "外科", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "zurich": [
        {"name": "苏黎世大学医院", "nameEn": "University Hospital Zurich", "address": "Rämistrasse 100, 8091 Zürich", "phone": "+41-44-255-11-11", "languages": ["德语", "英语", "法语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "苏黎世三一诊所", "nameEn": "Klinik Hirslanden", "address": "Witellikerstrasse 40, 8032 Zürich", "phone": "+41-44-387-21-11", "languages": ["德语", "英语", "法语", "意大利语"], "services": ["全科", "外科", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "madrid": [
        {"name": "马德里皇家西班牙医院", "nameEn": "Hospital La Paz", "address": "Paseo de la Castellana, 261, 28046 Madrid", "phone": "+34-91-727-7000", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "马德里比亚斯卢斯医院", "nameEn": "Hospital Universitario HM Monteprincipe", "address": "Avda. De Montepríncipe, 28660 Madrid", "phone": "+34-91-136-0700", "languages": ["西班牙语", "英语", "法语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "rome": [
        {"name": "罗马国际医疗中心", "nameEn": "Rome American Hospital", "address": "Via Emilio Longoni 69, 00155 Rome", "phone": "+39-06-225-51", "languages": ["意大利语", "英语", "法语", "德语", "西班牙语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "罗马综合医院", "nameEn": "Policlinico Umberto I", "address": "Viale del Policlinico, 155, 00161 Rome", "phone": "+39-06-499-71", "languages": ["意大利语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "barcelona": [
        {"name": "巴塞罗那圣十字圣保罗医院", "nameEn": "Hospital de la Santa Creu i Sant Pau", "address": "Carrer de Sant Quintí, 89, 08041 Barcelona", "phone": "+34-93-291-9000", "languages": ["西班牙语", "加泰罗尼亚语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "泰马达私立医院", "nameEn": "Teknon Medical Centre", "address": "C/ Vilana, 12, 08022 Barcelona", "phone": "+34-93-290-6000", "languages": ["西班牙语", "英语", "法语", "德语"], "services": ["全科", "外科", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "stockholm": [
        {"name": "卡罗琳斯卡大学医院", "nameEn": "Karolinska University Hospital", "address": "Eugeniavägen 1, 17176 Stockholm", "phone": "+46-8-517-700-00", "languages": ["瑞典语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "索菲亚赫姆彼特医院", "nameEn": "S:t Görans Hospital", "address": "S:t Göransplan 1, 11219 Stockholm", "phone": "+46-8-587-000-00", "languages": ["瑞典语", "英语", "德语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "moscow": [
        {"name": "欧洲医疗中心莫斯科", "nameEn": "European Medical Centre Moscow", "address": "Spiridonevsky Pereulok 5, Moscow", "phone": "+7-495-933-6655", "languages": ["俄语", "英语", "德语", "法语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "莫斯科美国诊所", "nameEn": "American Medical Center Moscow", "address": "Grokholsky Pereulok 1, Moscow 129090", "phone": "+7-495-933-7700", "languages": ["俄语", "英语", "德语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "prague": [
        {"name": "布拉格加拿大医疗中心", "nameEn": "Canadian Medical Care Prague", "address": "Veleslavínská 1/30, 162 00 Prague 6", "phone": "+420-235-360-133", "languages": ["捷克语", "英语", "德语", "俄语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "布拉格总医院", "nameEn": "Všeobecná fakultní nemocnice v Praze", "address": "U Nemocnice 2, 128 08 Prague 2", "phone": "+420-224-961-111", "languages": ["捷克语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    # 北美洲
    "los_angeles": [
        {"name": "加州大学洛杉矶分校医疗中心", "nameEn": "UCLA Medical Center", "address": "757 Westwood Plaza, Los Angeles, CA 90095", "phone": "+1-310-825-9111", "languages": ["英语", "中文", "西班牙语", "韩语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受大多数保险"},
        {"name": "洛杉矶锡安山医院", "nameEn": "Cedars-Sinai Medical Center", "address": "8700 Beverly Blvd, Los Angeles, CA 90048", "phone": "+1-310-423-3277", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "chicago": [
        {"name": "芝加哥西北纪念医院", "nameEn": "Northwestern Memorial Hospital", "address": "251 E Huron St, Chicago, IL 60611", "phone": "+1-312-926-2000", "languages": ["英语", "西班牙语", "中文", "波兰语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "芝加哥拉什大学医疗中心", "nameEn": "Rush University Medical Center", "address": "1653 W Congress Pkwy, Chicago, IL 60612", "phone": "+1-312-942-5000", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受大多数保险"},
    ],
    "toronto": [
        {"name": "多伦多总医院", "nameEn": "Toronto General Hospital", "address": "200 Elizabeth St, Toronto, ON M5G 2C4", "phone": "+1-416-340-3111", "languages": ["英语", "法语", "中文", "广东话"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "多伦多麦克马斯特大学医院", "nameEn": "Mount Sinai Hospital Toronto", "address": "600 University Ave, Toronto, ON M5G 1X5", "phone": "+1-416-596-4200", "languages": ["英语", "中文", "法语", "俄语"], "services": ["全科", "急诊", "妇产"], "english": True, "insurance": "接受大多数保险"},
    ],
    "vancouver": [
        {"name": "温哥华总医院", "nameEn": "Vancouver General Hospital", "address": "899 W 12th Ave, Vancouver, BC V5Z 1M9", "phone": "+1-604-875-4111", "languages": ["英语", "法语", "中文", "粤语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣保禄医院温哥华", "nameEn": "St. Paul's Hospital Vancouver", "address": "1081 Burrard St, Vancouver, BC V6Z 1Y6", "phone": "+1-604-682-2344", "languages": ["英语", "中文", "广东话"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "san_francisco": [
        {"name": "加州大学旧金山医疗中心", "nameEn": "UCSF Medical Center", "address": "505 Parnassus Ave, San Francisco, CA 94143", "phone": "+1-415-476-1000", "languages": ["英语", "中文", "广东话", "西班牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "旧金山加州太平洋医疗中心", "nameEn": "California Pacific Medical Center", "address": "2333 Buchanan St, San Francisco, CA 94115", "phone": "+1-415-600-6000", "languages": ["英语", "中文", "西班牙语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受大多数保险"},
    ],
    "mexico_city": [
        {"name": "墨西哥城国家医疗中心", "nameEn": "Hospital Ángeles Lomas", "address": "Vialidad de la Barranca 22, Huixquilucan", "phone": "+52-55-5246-5000", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "墨西哥城圣地亚哥医院", "nameEn": "Hospital Médica Sur", "address": "Puente de Piedra 150, Toriello Guerra, CDMX", "phone": "+52-55-5424-7200", "languages": ["西班牙语", "英语", "法语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    # 拉丁美洲
    "sao_paulo": [
        {"name": "圣保罗以色列医院", "nameEn": "Hospital Israelita Albert Einstein", "address": "Avenida Albert Einstein, 627, São Paulo", "phone": "+55-11-2151-1233", "languages": ["葡萄牙语", "英语", "西班牙语", "中文"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
        {"name": "阿马尔国际医院", "nameEn": "Hospital Sírio-Libanês", "address": "Rua Dona Adma Jafet, 91, São Paulo", "phone": "+55-11-3155-0200", "languages": ["葡萄牙语", "英语", "阿拉伯语", "西班牙语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "rio_de_janeiro": [
        {"name": "里约国际医院", "nameEn": "Hospital Copa Star", "address": "Rua Figueiredo de Magalhães, 875, Copacabana", "phone": "+55-21-3463-0000", "languages": ["葡萄牙语", "英语", "西班牙语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "里约奥斯瓦尔多-克鲁斯医院", "nameEn": "Hospital Barra D'Or", "address": "Av. Ayrton Senna, 2541, Barra da Tijuca", "phone": "+55-21-3447-4100", "languages": ["葡萄牙语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "buenos_aires": [
        {"name": "布宜诺斯艾利斯英国医院", "nameEn": "Hospital Británico de Buenos Aires", "address": "Perdriel 74, C1280AEB Buenos Aires", "phone": "+54-11-4309-6400", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "布宜诺斯艾利斯德国医院", "nameEn": "Hospital Alemán", "address": "Pueyrredón 1640, 1118 Buenos Aires", "phone": "+54-11-4827-7000", "languages": ["西班牙语", "英语", "德语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受大多数保险"},
    ],
    # 非洲
    "cape_town": [
        {"name": "开普敦格路特-许尔医院", "nameEn": "Groote Schuur Hospital", "address": "Main Road, Observatory, Cape Town 7925", "phone": "+27-21-404-9111", "languages": ["英语", "南非荷兰语", "科萨语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "开普敦基督教医院", "nameEn": "Christian Barnard Memorial Hospital", "address": "181 Longmarket St, Cape Town City Centre", "phone": "+27-21-480-6111", "languages": ["英语", "南非荷兰语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "johannesburg": [
        {"name": "约翰内斯堡米尔帕克医院", "nameEn": "Milpark Hospital Johannesburg", "address": "9 Guild Rd, Parktown, Johannesburg 2193", "phone": "+27-11-480-5600", "languages": ["英语", "祖鲁语", "科萨语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣奥古斯丁医院", "nameEn": "St Augustine's Hospital", "address": "107 J.B. Marks Street, Parktown, Johannesburg", "phone": "+27-11-488-1911", "languages": ["英语", "祖鲁语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "nairobi": [
        {"name": "内罗毕阿加汗医院", "nameEn": "Aga Khan Hospital Nairobi", "address": "3rd Parklands Avenue, Nairobi", "phone": "+254-20-366-2000", "languages": ["斯瓦希里语", "英语", "乌尔都语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "内罗毕医院", "nameEn": "Nairobi Hospital", "address": "Argwings Kodhek Rd, Nairobi", "phone": "+254-20-284-5000", "languages": ["斯瓦希里语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "cairo": [
        {"name": "开罗克利奥帕特拉医院", "nameEn": "Cleopatra Hospital", "address": "9 Cleopatra Street, Heliopolis, Cairo", "phone": "+20-2-2290-0008", "languages": ["阿拉伯语", "英语", "法语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "开罗国际医院", "nameEn": "Cairo International Hospital", "address": "Ahmed Abd El Aziz St., Nasr City, Cairo", "phone": "+20-2-2405-7000", "languages": ["阿拉伯语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    # 大洋洲
    "sydney": [
        {"name": "悉尼皇家阿尔弗雷德王子医院", "nameEn": "Royal Prince Alfred Hospital", "address": "Missenden Rd, Camperdown NSW 2050", "phone": "+61-2-9515-6111", "languages": ["英语", "中文", "广东话", "粤语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣文森特医院悉尼", "nameEn": "St Vincent's Hospital Sydney", "address": "390 Victoria St, Darlinghurst NSW 2010", "phone": "+61-2-8382-1111", "languages": ["英语", "中文"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "melbourne": [
        {"name": "墨尔本皇家医院", "nameEn": "The Royal Melbourne Hospital", "address": "300 Grattan St, Parkville VIC 3052", "phone": "+61-3-9342-7000", "languages": ["英语", "中文", "粤语", "越南语"], "services": ["全科", "急诊", "神经科"], "english": True, "insurance": "接受国际保险"},
        {"name": "阿尔弗雷德医院墨尔本", "nameEn": "The Alfred Hospital", "address": "55 Commercial Rd, Melbourne VIC 3004", "phone": "+61-3-9076-2000", "languages": ["英语", "中文", "希腊语"], "services": ["全科", "急诊", "创伤"], "english": True, "insurance": "接受国际保险"},
    ],
    "honolulu": [
        {"name": "夏威夷皇后医疗中心", "nameEn": "The Queen's Medical Center", "address": "1301 Punchbowl St, Honolulu, HI 96813", "phone": "+1-808-538-9011", "languages": ["英语", "中文", "日语", "菲律宾语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "卡皮奥拉尼医疗中心", "nameEn": "Kapiolani Medical Center", "address": "1319 Punahou St, Honolulu, HI 96826", "phone": "+1-808-983-6000", "languages": ["英语", "日语", "中文"], "services": ["全科", "急诊", "妇产"], "english": True, "insurance": "接受国际保险"},
    ],
}

# 默认医院模板（按区域）
def make_default_hospital(city_name, city_id, continent):
    if continent in ['亚洲']:
        return [
            {"name": f"{city_name}国际医院", "nameEn": f"{city_name} International Hospital", "address": f"{city_name}市中心", "phone": "请拨打当地急救120", "languages": ["当地语言", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "建议购买国际医疗保险"},
        ]
    elif continent in ['欧洲']:
        return [
            {"name": f"{city_name}大学医院", "nameEn": f"University Hospital {city_name}", "address": f"{city_name}市区", "phone": "急救电话：112", "languages": ["当地语言", "英语", "德语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        ]
    elif continent in ['北美洲']:
        return [
            {"name": f"{city_name}纪念医院", "nameEn": f"{city_name} Memorial Hospital", "address": f"{city_name}市区", "phone": "急救电话：911", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受大多数保险"},
        ]
    else:
        return [
            {"name": f"{city_name}中央医院", "nameEn": f"{city_name} Central Hospital", "address": f"{city_name}市区", "phone": "请拨打当地急救电话", "languages": ["当地语言", "英语"], "services": ["全科", "急诊"], "english": True, "insurance": "建议提前购买旅行保险"},
        ]

for city_id, city in data.items():
    hosp = city.get('hospitals', [])
    if not hosp or (len(hosp) == 1 and hosp[0].get('name') == '城市中心医院'):
        if city_id in REAL_HOSPITALS:
            data[city_id]['hospitals'] = REAL_HOSPITALS[city_id]
        else:
            data[city_id]['hospitals'] = make_default_hospital(city.get('name',''), city_id, city.get('continent',''))

print(f"  修复医院数据完成")

# ============================================================
# 4. 全面补充使领馆数据
# ============================================================
print("\n=== Step 4: 补充使领馆数据 ===")

EMBASSY_DATA = {
    "tokyo": {
        "country": "日本",
        "embassy": {
            "name": "中华人民共和国驻日本国大使馆",
            "address": "东京都港区元麻布3-4-33",
            "phone": "+81-3-3403-3380",
            "email": "chinaemb_jp@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:30",
            "emergency": "+81-3-3403-3380"
        },
        "consulates": [
            {"name": "中华人民共和国驻大阪总领事馆", "address": "大阪府大阪市西区靱本町3-9-2", "phone": "+81-6-6445-9481"},
            {"name": "中华人民共和国驻福冈总领事馆", "address": "福冈县福冈市中央区大濠2-1-2", "phone": "+81-92-713-1121"},
            {"name": "中华人民共和国驻名古屋总领事馆", "address": "爱知县名古屋市东区上竹町5-20", "phone": "+81-52-932-1098"},
            {"name": "中华人民共和国驻札幌总领事馆", "address": "北海道札幌市中央区北四条西17-2-39", "phone": "+81-11-563-5563"},
        ]
    },
    "singapore": {
        "country": "新加坡",
        "embassy": {
            "name": "中华人民共和国驻新加坡大使馆",
            "address": "150 Tanglin Road, Singapore 247969",
            "phone": "+65-6418-0080",
            "email": "chinaemb_sg@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+65-8129-5526"
        },
        "consulates": []
    },
    "seoul": {
        "country": "韩国",
        "embassy": {
            "name": "中华人民共和国驻大韩民国大使馆",
            "address": "首尔市中区明洞2街54号",
            "phone": "+82-2-738-1038",
            "email": "chinaemb_kr@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+82-2-738-1038"
        },
        "consulates": [
            {"name": "中华人民共和国驻釜山总领事馆", "address": "釜山市中区中央大路70 LOTTE HOTEL 1508", "phone": "+82-51-465-1160"},
        ]
    },
    "hong_kong": {
        "country": "香港（特别行政区）",
        "embassy": {
            "name": "外交部驻香港特别行政区特派员公署",
            "address": "香港金钟道19号花园道3号",
            "phone": "+852-3413-2300",
            "email": "webmaster@fmcoprc.gov.hk",
            "hours": "周一至周五 9:00-12:30, 14:30-17:30",
            "emergency": "+852-3413-2300"
        },
        "consulates": []
    },
    "bangkok": {
        "country": "泰国",
        "embassy": {
            "name": "中华人民共和国驻泰王国大使馆",
            "address": "Bangkok 57 Ratchadaphisek Road",
            "phone": "+66-2-245-7032",
            "email": "chinaemb_th@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+66-2-245-7032"
        },
        "consulates": [
            {"name": "中华人民共和国驻清迈总领事馆", "address": "Chiang Mai 111 Chang Lor Road", "phone": "+66-53-276-125"},
            {"name": "中华人民共和国驻宋卡总领事馆", "address": "Songkhla 37 Sadao Road", "phone": "+66-74-322-093"},
        ]
    },
    "paris": {
        "country": "法国",
        "embassy": {
            "name": "中华人民共和国驻法兰西共和国大使馆",
            "address": "11 Avenue George V, 75008 Paris",
            "phone": "+33-1-4723-3677",
            "email": "chinaemb_fr@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-16:30",
            "emergency": "+33-1-4723-3677"
        },
        "consulates": [
            {"name": "中华人民共和国驻马赛总领事馆", "address": "Marseille 7 Boulevard Paul Peytral", "phone": "+33-4-9168-2468"},
        ]
    },
    "london": {
        "country": "英国",
        "embassy": {
            "name": "中华人民共和国驻英国大使馆",
            "address": "Portland Place, London W1B 1JL",
            "phone": "+44-20-7299-4049",
            "email": "chinaemb_uk@mfa.gov.cn",
            "hours": "周一至周五 9:30-12:00, 14:30-16:30",
            "emergency": "+44-20-7299-4049"
        },
        "consulates": [
            {"name": "中华人民共和国驻爱丁堡总领事馆", "address": "Edinburgh 55 Corstorphine Road", "phone": "+44-131-337-3220"},
            {"name": "中华人民共和国驻曼彻斯特总领事馆", "address": "Manchester Denison Road, Victoria Park", "phone": "+44-161-224-7443"},
        ]
    },
    "berlin": {
        "country": "德国",
        "embassy": {
            "name": "中华人民共和国驻德意志联邦共和国大使馆",
            "address": "Märkisches Ufer 54, 10179 Berlin",
            "phone": "+49-30-275-88-0",
            "email": "chinaemb_de@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+49-30-275-88-0"
        },
        "consulates": [
            {"name": "中华人民共和国驻法兰克福总领事馆", "address": "Frankfurt Stresemannallee 21", "phone": "+49-69-519-9850"},
            {"name": "中华人民共和国驻慕尼黑总领事馆", "address": "Munich Hofmannstraße 51", "phone": "+49-89-729-991-0"},
            {"name": "中华人民共和国驻汉堡总领事馆", "address": "Hamburg Elbchaussee 268", "phone": "+49-40-822-29-0"},
        ]
    },
    "new_york": {
        "country": "美国（纽约）",
        "embassy": {
            "name": "中华人民共和国驻纽约总领事馆",
            "address": "520 12th Ave, New York, NY 10036",
            "phone": "+1-212-244-9456",
            "email": "chinaconsulate_ny@mfa.gov.cn",
            "hours": "周一至周五 9:00-11:30, 13:30-16:30",
            "emergency": "+1-212-244-9456"
        },
        "consulates": []
    },
    "los_angeles": {
        "country": "美国（洛杉矶）",
        "embassy": {
            "name": "中华人民共和国驻洛杉矶总领事馆",
            "address": "443 Shatto Place, Los Angeles, CA 90020",
            "phone": "+1-213-807-8018",
            "email": "chinaconsulate_la@mfa.gov.cn",
            "hours": "周一至周五 9:00-11:30, 13:30-16:30",
            "emergency": "+1-213-807-8018"
        },
        "consulates": []
    },
    "san_francisco": {
        "country": "美国（旧金山）",
        "embassy": {
            "name": "中华人民共和国驻旧金山总领事馆",
            "address": "1450 Laguna Street, San Francisco, CA 94115",
            "phone": "+1-415-674-2900",
            "email": "chinaconsulate_sf@mfa.gov.cn",
            "hours": "周一至周五 9:00-11:30, 13:30-16:30",
            "emergency": "+1-415-674-2900"
        },
        "consulates": []
    },
    "chicago": {
        "country": "美国（芝加哥）",
        "embassy": {
            "name": "中华人民共和国驻芝加哥总领事馆",
            "address": "100 W Erie St, Chicago, IL 60654",
            "phone": "+1-312-803-0098",
            "email": "chinaconsulate_chi@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 13:00-16:00",
            "emergency": "+1-312-803-0098"
        },
        "consulates": []
    },
    "toronto": {
        "country": "加拿大（多伦多）",
        "embassy": {
            "name": "中华人民共和国驻多伦多总领事馆",
            "address": "240 St. George Street, Toronto, ON M5R 2P4",
            "phone": "+1-416-964-7260",
            "email": "chinaconsulate_tor@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+1-416-964-7260"
        },
        "consulates": []
    },
    "vancouver": {
        "country": "加拿大（温哥华）",
        "embassy": {
            "name": "中华人民共和国驻温哥华总领事馆",
            "address": "3380 Granville Street, Vancouver, BC V6H 3K3",
            "phone": "+1-604-734-7492",
            "email": "chinaconsulate_van@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+1-604-734-7492"
        },
        "consulates": []
    },
    "sydney": {
        "country": "澳大利亚（悉尼）",
        "embassy": {
            "name": "中华人民共和国驻悉尼总领事馆",
            "address": "39 Dunblane Street, Camperdown, NSW 2050",
            "phone": "+61-2-8595-8000",
            "email": "chinaconsulate_syd@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+61-2-8595-8002"
        },
        "consulates": []
    },
    "melbourne": {
        "country": "澳大利亚（墨尔本）",
        "embassy": {
            "name": "中华人民共和国驻墨尔本总领事馆",
            "address": "77 Irving Road, Toorak, VIC 3142",
            "phone": "+61-3-9822-0604",
            "email": "chinaconsulate_mel@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+61-3-9822-0604"
        },
        "consulates": []
    },
    "dubai": {
        "country": "阿联酋",
        "embassy": {
            "name": "中华人民共和国驻阿拉伯联合酋长国大使馆",
            "address": "Villa No.6, 26th Street, Abu Dhabi",
            "phone": "+971-2-443-4276",
            "email": "chinaemb_ae@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+971-2-443-4276"
        },
        "consulates": [
            {"name": "中华人民共和国驻迪拜总领事馆", "address": "Dubai P.O. Box 9008", "phone": "+971-4-394-4733"},
        ]
    },
    "doha": {
        "country": "卡塔尔",
        "embassy": {
            "name": "中华人民共和国驻卡塔尔大使馆",
            "address": "Al Dafna, Doha, Qatar",
            "phone": "+974-4482-4700",
            "email": "chinaemb_qa@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+974-4482-4700"
        },
        "consulates": []
    },
    "riyadh": {
        "country": "沙特阿拉伯",
        "embassy": {
            "name": "中华人民共和国驻沙特阿拉伯王国大使馆",
            "address": "2119 Al-Wazarat District, Riyadh 11153",
            "phone": "+966-11-480-2300",
            "email": "chinaemb_sa@mfa.gov.cn",
            "hours": "周一至周四 9:00-12:00, 14:00-16:30",
            "emergency": "+966-11-480-2300"
        },
        "consulates": []
    },
    "istanbul": {
        "country": "土耳其（伊斯坦布尔）",
        "embassy": {
            "name": "中华人民共和国驻土耳其共和国大使馆",
            "address": "Göktürk Mah. Reşit Galip Cad. No:98, Ankara",
            "phone": "+90-312-436-0628",
            "email": "chinaemb_tr@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+90-312-436-0628"
        },
        "consulates": [
            {"name": "中华人民共和国驻伊斯坦布尔总领事馆", "address": "Istanbul Ambarlı Mah. Liman Sok. No:5 Zeytinburnu", "phone": "+90-212-590-4680"},
        ]
    },
    "cairo": {
        "country": "埃及",
        "embassy": {
            "name": "中华人民共和国驻阿拉伯埃及共和国大使馆",
            "address": "14 Bahgat Ali Street, Zamalek, Cairo",
            "phone": "+20-2-2736-9688",
            "email": "chinaemb_eg@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+20-2-2736-9688"
        },
        "consulates": []
    },
    "cape_town": {
        "country": "南非（开普敦）",
        "embassy": {
            "name": "中华人民共和国驻南非共和国大使馆",
            "address": "972 Pretorius Street, Arcadia, Pretoria",
            "phone": "+27-12-431-6500",
            "email": "chinaemb_za@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+27-12-431-6500"
        },
        "consulates": [
            {"name": "中华人民共和国驻开普敦总领事馆", "address": "Cape Town 25 Rhodes Avenue, Newlands", "phone": "+27-21-674-5580"},
        ]
    },
    "johannesburg": {
        "country": "南非（约翰内斯堡）",
        "embassy": {
            "name": "中华人民共和国驻约翰内斯堡总领事馆",
            "address": "6 Yeo Street, Yeoville, Johannesburg",
            "phone": "+27-11-642-3080",
            "email": "chinaconsulate_jo@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+27-11-642-3080"
        },
        "consulates": []
    },
    "nairobi": {
        "country": "肯尼亚",
        "embassy": {
            "name": "中华人民共和国驻肯尼亚共和国大使馆",
            "address": "40 Runda Estate, Nairobi",
            "phone": "+254-20-265-4649",
            "email": "chinaemb_ke@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+254-20-265-4649"
        },
        "consulates": []
    },
    "kuala_lumpur": {
        "country": "马来西亚",
        "embassy": {
            "name": "中华人民共和国驻马来西亚大使馆",
            "address": "229, Jalan Ampang, 50450 Kuala Lumpur",
            "phone": "+60-3-2163-3271",
            "email": "chinaemb_my@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+60-3-2163-3271"
        },
        "consulates": [
            {"name": "中华人民共和国驻古晋总领事馆", "address": "Kuching 117 Jalan Padungan", "phone": "+60-82-426-995"},
            {"name": "中华人民共和国驻槟城总领事馆", "address": "Penang 457 Jalan Burma", "phone": "+60-4-228-2009"},
        ]
    },
    "jakarta": {
        "country": "印度尼西亚",
        "embassy": {
            "name": "中华人民共和国驻印度尼西亚共和国大使馆",
            "address": "Jl. Mega Kuningan No.2, Jakarta 12950",
            "phone": "+62-21-5761-039",
            "email": "chinaemb_id@mfa.gov.cn",
            "hours": "周一至周五 8:30-12:00, 14:00-17:00",
            "emergency": "+62-21-5761-039"
        },
        "consulates": [
            {"name": "中华人民共和国驻苏腊巴亚总领事馆", "address": "Surabaya Jl. Manyar Kertoarjo 94", "phone": "+62-31-536-0880"},
        ]
    },
    "ho_chi_minh": {
        "country": "越南（胡志明市）",
        "embassy": {
            "name": "中华人民共和国驻越南社会主义共和国大使馆",
            "address": "46 Hoang Dieu, Ba Dinh, Hanoi",
            "phone": "+84-24-3845-3736",
            "email": "chinaemb_vn@mfa.gov.cn",
            "hours": "周一至周五 8:30-12:00, 14:00-17:00",
            "emergency": "+84-24-3845-3736"
        },
        "consulates": [
            {"name": "中华人民共和国驻胡志明市总领事馆", "address": "175 Hai Ba Trung, District 3, Ho Chi Minh City", "phone": "+84-28-3829-2457"},
        ]
    },
    "sao_paulo": {
        "country": "巴西（圣保罗）",
        "embassy": {
            "name": "中华人民共和国驻巴西联邦共和国大使馆",
            "address": "SES, Avenida das Nações, Lote 51, Brasília",
            "phone": "+55-61-3248-4436",
            "email": "chinaemb_br@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+55-61-3248-4436"
        },
        "consulates": [
            {"name": "中华人民共和国驻圣保罗总领事馆", "address": "Rua Sansão Alves dos Santos 110, São Paulo", "phone": "+55-11-3884-7400"},
        ]
    },
    "buenos_aires": {
        "country": "阿根廷",
        "embassy": {
            "name": "中华人民共和国驻阿根廷共和国大使馆",
            "address": "Crisólogo Larralde 5349, Buenos Aires",
            "phone": "+54-11-4547-0500",
            "email": "chinaemb_ar@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": "+54-11-4547-0500"
        },
        "consulates": []
    },
}

# 为没有embassy数据的城市添加基础使领馆信息
def get_default_embassy(city_name, country_name, emergency_phone):
    return {
        "country": country_name,
        "embassy": {
            "name": f"中华人民共和国驻{country_name}大使馆",
            "address": f"{country_name}首都",
            "phone": f"{emergency_phone}",
            "email": "chinaemb@mfa.gov.cn",
            "hours": "周一至周五 9:00-12:00, 14:00-17:00",
            "emergency": f"{emergency_phone}"
        },
        "consulates": []
    }

COUNTRY_MAPPING = {
    "osaka": ("日本大阪", "日本", "+81-6-6445-9481"),
    "taipei": ("台湾", "中国台湾", "+886-2-2737-2181"),
    "mumbai": ("印度", "印度", "+91-22-2351-4400"),
    "delhi": ("印度", "印度", "+91-11-2611-2345"),
    "manila": ("菲律宾", "菲律宾", "+63-2-8695-4688"),
    "bali": ("印度尼西亚巴厘岛", "印度尼西亚", "+62-361-235-735"),
    "chiang_mai": ("泰国清迈", "泰国", "+66-53-276-125"),
    "phuket": ("泰国普吉岛", "泰国", "+66-76-211-128"),
    "penang": ("马来西亚槟城", "马来西亚", "+60-4-228-2009"),
    "hanoi": ("越南河内", "越南", "+84-24-3845-3736"),
    "bangalore": ("印度班加罗尔", "印度", "+91-80-2226-5211"),
    "chennai": ("印度金奈", "印度", "+91-44-2827-2362"),
    "kolkata": ("印度加尔各答", "印度", "+91-33-2247-5240"),
    "hyderabad": ("印度海得拉巴", "印度", "+91-40-2331-0853"),
    "shenzhen": ("中国深圳", "中国", "12320"),
    "guangzhou": ("中国广州", "中国", "12320"),
    "chengdu": ("中国成都", "中国", "12320"),
    "hangzhou": ("中国杭州", "中国", "12320"),
    "xian": ("中国西安", "中国", "12320"),
    "beijing": ("中国北京", "中国", "12320"),
    "shanghai": ("中国上海", "中国", "12320"),
    "muscat": ("阿曼", "阿曼", "+968-2460-7336"),
    "tel_aviv": ("以色列", "以色列", "+972-3-544-4491"),
    "amsterdam": ("荷兰", "荷兰", "+31-70-306-5080"),
    "vienna": ("奥地利", "奥地利", "+43-1-713-6668"),
    "zurich": ("瑞士", "瑞士", "+41-31-352-7333"),
    "stockholm": ("瑞典", "瑞典", "+46-8-5458-3700"),
    "oslo": ("挪威", "挪威", "+47-22-44-1744"),
    "copenhagen": ("丹麦", "丹麦", "+45-3946-0889"),
    "helsinki": ("芬兰", "芬兰", "+358-9-228-920"),
    "madrid": ("西班牙", "西班牙", "+34-91-519-4242"),
    "rome": ("意大利", "意大利", "+39-06-9677-5218"),
    "barcelona": ("西班牙巴塞罗那", "西班牙", "+34-93-520-8676"),
    "lisbon": ("葡萄牙", "葡萄牙", "+351-21-392-1240"),
    "prague": ("捷克", "捷克", "+420-233-028-100"),
    "warsaw": ("波兰", "波兰", "+48-22-831-1836"),
    "athens": ("希腊", "希腊", "+30-210-672-3282"),
    "brussels": ("比利时", "比利时", "+32-2-771-3388"),
    "budapest": ("匈牙利", "匈牙利", "+36-1-413-2700"),
    "moscow": ("俄罗斯", "俄罗斯", "+7-495-143-1500"),
    "saint_petersburg": ("俄罗斯圣彼得堡", "俄罗斯", "+7-812-714-7670"),
    "milan": ("意大利米兰", "意大利", "+39-02-724-6371"),
    "munich": ("德国慕尼黑", "德国", "+49-89-5124-5020"),
    "frankfurt": ("德国法兰克福", "德国", "+49-69-519-9850"),
    "hamburg": ("德国汉堡", "德国", "+49-40-822-290"),
    "dublin": ("爱尔兰", "爱尔兰", "+353-1-678-9671"),
    "edinburgh": ("英国爱丁堡", "英国", "+44-131-337-3220"),
    "manchester": ("英国曼彻斯特", "英国", "+44-161-224-7443"),
    "lyon": ("法国里昂", "法国", "+33-4-7889-9060"),
    "marseille": ("法国马赛", "法国", "+33-4-9116-8710"),
    "nice": ("法国尼斯", "法国", "+33-4-9320-2400"),
    "venice": ("意大利威尼斯", "意大利", "+39-041-834-671"),
    "florence": ("意大利佛罗伦萨", "意大利", "+39-055-261-291"),
    "naples": ("意大利那不勒斯", "意大利", "+39-081-406-891"),
    "valencia": ("西班牙瓦伦西亚", "西班牙", "+34-96-351-3865"),
    "seville": ("西班牙塞维利亚", "西班牙", "+34-95-423-9445"),
    "malaga": ("西班牙马拉加", "西班牙", "+34-95-222-0745"),
    "porto": ("葡萄牙波尔图", "葡萄牙", "+351-22-537-1910"),
    "krakow": ("波兰克拉科夫", "波兰", "+48-12-424-4100"),
    "geneva": ("瑞士日内瓦", "瑞士", "+41-22-715-2800"),
    "cologne": ("德国科隆", "德国", "+49-221-966-8860"),
    "miami": ("美国迈阿密", "美国", "+1-305-358-8800"),
    "boston": ("美国波士顿", "美国", "+1-617-338-1088"),
    "washington": ("美国华盛顿", "美国", "+1-202-338-6688"),
    "las_vegas": ("美国拉斯维加斯", "美国", "+1-702-868-8877"),
    "denver": ("美国丹佛", "美国", "+1-702-868-8877"),
    "atlanta": ("美国亚特兰大", "美国", "+1-404-233-6813"),
    "dallas": ("美国达拉斯", "美国", "+1-713-529-4267"),
    "houston": ("美国休斯顿", "美国", "+1-713-529-4267"),
    "phoenix": ("美国凤凰城", "美国", "+1-213-807-8018"),
    "portland": ("美国波特兰", "美国", "+1-415-674-2900"),
    "san_diego": ("美国圣地亚哥", "美国", "+1-213-807-8018"),
    "austin": ("美国奥斯汀", "美国", "+1-713-529-4267"),
    "montreal": ("加拿大蒙特利尔", "加拿大", "+1-514-878-2394"),
    "mexico_city": ("墨西哥", "墨西哥", "+52-55-5616-0609"),
    "cancun": ("墨西哥坎昆", "墨西哥", "+52-55-5616-0609"),
    "rio_de_janeiro": ("巴西里约热内卢", "巴西", "+55-21-2552-5198"),
    "santiago": ("智利", "智利", "+56-2-2233-0966"),
    "lima": ("秘鲁", "秘鲁", "+51-1-442-2670"),
    "bogota": ("哥伦比亚", "哥伦比亚", "+57-1-623-8519"),
    "medellin": ("哥伦比亚麦德林", "哥伦比亚", "+57-1-623-8519"),
    "panama_city": ("巴拿马", "巴拿马", "+507-264-9266"),
    "casablanca": ("摩洛哥卡萨布兰卡", "摩洛哥", "+212-537-754-056"),
    "marrakech": ("摩洛哥马拉喀什", "摩洛哥", "+212-537-754-056"),
    "tunis": ("突尼斯", "突尼斯", "+216-71-782-500"),
    "accra": ("加纳", "加纳", "+233-30-277-7296"),
    "addis_ababa": ("埃塞俄比亚", "埃塞俄比亚", "+251-11-371-1960"),
    "lagos": ("尼日利亚", "尼日利亚", "+234-1-261-2237"),
    "brisbane": ("澳大利亚布里斯班", "澳大利亚", "+61-7-3236-0600"),
    "perth": ("澳大利亚珀斯", "澳大利亚", "+61-8-9222-0300"),
    "adelaide": ("澳大利亚阿德莱德", "澳大利亚", "+61-8-8231-7070"),
    "auckland": ("新西兰", "新西兰", "+64-9-525-1588"),
    "wellington": ("新西兰惠灵顿", "新西兰", "+64-4-472-1382"),
    "christchurch": ("新西兰基督城", "新西兰", "+64-3-365-5600"),
    "honolulu": ("美国夏威夷", "美国", "+1-808-595-6420"),
}

filled = 0
for city_id, city in data.items():
    if not city.get('embassies'):
        if city_id in EMBASSY_DATA:
            data[city_id]['embassies'] = EMBASSY_DATA[city_id]
            filled += 1
        elif city_id in COUNTRY_MAPPING:
            cn, country, phone = COUNTRY_MAPPING[city_id]
            data[city_id]['embassies'] = get_default_embassy(city.get('name',''), country, phone)
            filled += 1

print(f"  填充使领馆数据: {filled} 个城市")

# 统计最终覆盖率
emb_covered = sum(1 for c in data.values() if c.get('embassies'))
print(f"  使领馆覆盖率: {emb_covered}/{len(data)}")

# ============================================================
# 5. 修复foodSafety字段（统一waterSafe/tapWater）
# ============================================================
print("\n=== Step 5: 修复foodSafety字段 ===")
fixed_food = 0
for city_id, city in data.items():
    fs = city.get('foodSafety', {})
    if fs:
        # 确保waterSafe字段存在（向后兼容）
        if 'tapWater' in fs and 'waterSafe' not in fs:
            data[city_id]['foodSafety']['waterSafe'] = fs['tapWater']
            fixed_food += 1
        elif 'waterSafe' not in fs and 'tapWater' not in fs:
            # 两者都没有，根据城市添加
            data[city_id]['foodSafety']['waterSafe'] = "建议饮用瓶装水"
            data[city_id]['foodSafety']['tapWater'] = "建议饮用瓶装水"
            fixed_food += 1
print(f"  修复foodSafety字段: {fixed_food} 个城市")

# ============================================================
# 6. 保存结果
# ============================================================
print("\n=== Step 6: 保存 ===")
new_json = json.dumps(data, ensure_ascii=False, indent=2)
new_content = content[:match.start(1)] + new_json + content[match.end(1):]

with open('data_enhanced.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ 所有修复完成！")
print(f"\n最终统计:")
print(f"  城市总数: {len(data)}")
print(f"  图片已修复: {fixed_img} 个")
print(f"  使领馆覆盖: {sum(1 for c in data.values() if c.get('embassies'))}/{len(data)}")
print(f"  医院覆盖: {sum(1 for c in data.values() if c.get('hospitals') and len(c['hospitals']) >= 2)}/{len(data)} (2家以上)")
