#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SafeCity v10.0 - 专业级全面数据增强
包含：交通指南、医院、大使馆/领事馆、安全应用、自保策略
"""

import json
import re
import random

# ============================================================
# 交通指南数据 (Transportation Guide)
# ============================================================
TRANSPORTATION = {
    'tokyo': {
        'metro': {
            'name': '东京Metro地铁 / 都营地铁',
            'tips': '建议购买Suica卡或Pasmo卡，可通用地铁和便利店。metro图用不同颜色区分，出口众多看编号。',
            'hours': '首班5:00-5:30，末班0:00-0:30',
            'cost': '单程170-320日元，根据距离计价'
        },
        'bus': {
            'name': '都营巴士 / 观光巴士',
            'tips': '后门上车前门下车，下车时刷卡/投币。路线复杂建议用Google Maps。',
            'hours': '约5:00-23:00'
        },
        'taxi': {
            'name': '出租车',
            'tips': '贵！起步价500日元（约2km），深夜加收20%。推荐用Uber或滴滴国际版。',
            'cost': '每公里约400-500日元'
        },
        'train': {
            'name': 'JR山手线 / 新干线',
            'tips': '山手线环城运行，JR Pass可无限次乘坐。新干线需提前购票指定席。',
            'hours': '山手线约5:00-0:30'
        },
        'app': 'Google Maps / 乘换案内'
    },
    'singapore': {
        'metro': {
            'name': 'MRT（大众捷运）',
            'tips': '覆盖全面，干净准时。EZ-Link卡或NETS卡通用地铁和公交。',
            'hours': '首班5:30，末班约0:00',
            'cost': '单程0.8-3新加坡元'
        },
        'bus': {
            'name': '公共巴士',
            'tips': '站牌显示路线，到站按铃下车。不报站！需用App追踪位置。',
            'hours': '约6:00-0:00'
        },
        'taxi': {
            'name': '出租车 / Grab',
            'tips': '推荐Grab（东南亚版滴滴），价格透明可预付。出租车需付高峰/机场附加费。',
            'cost': '起步3.2新加坡元，每公里0.5新加坡元'
        },
        'train': {
            'name': '轻轨LRT',
            'tips': '连接MRT与郊区住宅区，换乘便捷。',
            'hours': '约5:30-0:30'
        },
        'app': 'Grab / Google Maps / Singapore MRT Map'
    },
    'paris': {
        'metro': {
            'name': '巴黎地铁 (Métro)',
            'tips': '14条线路覆盖全市，RER连接郊区。Navigo卡周卡/月卡超划算。',
            'hours': '首班5:30，末班约1:15',
            'cost': '单程2.1欧元，天票5欧元'
        },
        'bus': {
            'name': 'RATP巴士',
            'tips': '路线多覆盖地铁盲区，窗户有路线图。夜间有N线（Noctilien）。',
            'hours': '约7:00-21:00，周日班次少'
        },
        'taxi': {
            'name': '出租车',
            'tips': '白色灯=空车，招手即停。Uber比出租车便宜约30%。',
            'cost': '起步3欧元，每公里1.2欧元'
        },
        'train': {
            'name': 'RER / Transilien',
            'tips': 'RER连接戴高乐机场/迪士尼/凡尔赛宫，注意方向和末班车时间。',
            'hours': '约5:00-0:30'
        },
        'app': 'Citymapper / RATP官方App'
    },
    'bangkok': {
        'metro': {
            'name': 'BTS轻轨 / MRT地铁',
            'tips': 'BTS架空不堵车，MRT深入商业区。两条线需出站换乘，储值卡通用。',
            'hours': 'BTS 6:00-24:00，MRT 6:00-24:00',
            'cost': '单程15-60泰铢'
        },
        'bus': {
            'name': '曼谷公交',
            'tips': '路线极其复杂！空调车/普通车价格不同。建议用App查路线。',
            'hours': '约5:00-23:00'
        },
        'taxi': {
            'name': '出租车 / 嘟嘟车',
            'tips': '出租车要确认打表！嘟嘟车贵但可讲价，且体验感强。',
            'cost': '出租车起步35泰铢，嘟嘟车需议价'
        },
        'boat': {
            'name': '湄南河公交船',
            'tips': '橙旗船站站停，票价15泰铢。快速又便宜，强烈推荐！',
            'hours': '约6:00-19:00'
        },
        'app': 'Google Maps / Grab'
    },
    'new_york': {
        'metro': {
            'name': 'NYC地铁',
            'tips': '24小时运营但夜间维修频繁，注意方向（Uptown/Downtown）。OMNY刷卡通行。',
            'hours': '24小时运营',
            'cost': '单程2.9美元，天票7美元'
        },
        'bus': {
            'name': 'MTA巴士',
            'tips': '与地铁票通用，换乘免费。班次较地铁少。',
            'hours': '约6:00-22:00'
        },
        'taxi': {
            'name': '黄色出租车 / Uber',
            'tips': '曼哈顿打车贵，Uber/Lyft更灵活。布鲁克林/皇后区打车更划算。',
            'cost': '起步2.5美元，每公里约2.5美元'
        },
        'ferry': {
            'name': '斯塔滕岛渡轮',
            'tips': '免费！途经自由女神像，适合观光。',
            'hours': '约6:00-23:00'
        },
        'app': 'Citymapper / MTA Subway Map'
    },
    'london': {
        'metro': {
            'name': '伦敦地铁 (The Tube)',
            'tips': '11条线覆盖全市，Oyster卡必备。周日地铁班次少，提前查时刻表。',
            'hours': '约5:00-0:30，周末24小时部分线路',
            'cost': '单程2.8-6.6英镑，根据zone计价'
        },
        'bus': {
            'name': '红色双层巴士',
            'tips': '标志性红色巴士，周卡/日卡无限坐。下车按铃。',
            'cost': '单程1.75英镑，日票7英镑'
        },
        'taxi': {
            'name': '黑色出租车 (Black Cab)',
            'tips': '认准顶部Taxi灯，司机持证专业。Uber便宜很多。',
            'cost': '起步3.2英镑，每公里约5英镑'
        },
        'train': {
            'name': 'Overground / DLR',
            'tips': 'Overground连接郊区，DLR连接金丝雀码头和格林威治。',
            'hours': '约5:30-0:30'
        },
        'app': 'Citymapper / TfL官方App'
    },
    'dubai': {
        'metro': {
            'name': '迪拜地铁 (Dubai Metro)',
            'tips': '红线/绿线覆盖主要景点和机场，女士专用车厢。工作日高峰拥堵。',
            'hours': '约5:00-0:00，周五10:00起',
            'cost': '单程3-15迪拉姆'
        },
        'bus': {
            'name': 'RTA巴士',
            'tips': '路线有限，打车更实用。',
            'hours': '约5:00-23:00'
        },
        'taxi': {
            'name': '出租车',
            'tips': '推荐Crown Taxi或Uber/Careem。政府认证安全。',
            'cost': '起步12迪拉姆，每公里约2迪拉姆'
        },
        'app': 'RTA Dubai / Uber / Careem'
    },
    'seoul': {
        'metro': {
            'name': '首尔地铁',
            'tips': '覆盖全面，9号线等部分线路24小时运营。换乘时注意站内步行距离。',
            'hours': '约5:30-0:00，部分线路24h',
            'cost': '单程1350韩元（约10元）'
        },
        'bus': {
            'name': '广域巴士 / 干线巴士',
            'tips': '分蓝色/绿色/红色不同类型，覆盖地铁盲区。',
            'hours': '约5:00-23:00'
        },
        'taxi': {
            'name': '出租车',
            'tips': '一般/模范/大型出租车三种，模范出租车可预约外语服务。',
            'cost': '起步4800韩元（约28元）'
        },
        'train': {
            'name': 'KTX高铁',
            'tips': '连接首尔与釜山/大邱等城市，提前购票有折扣。',
            'hours': '约5:30-23:00'
        },
        'app': 'Kakao Maps / Naver Maps'
    }
}

# 默认交通指南（针对没有详细数据的城市）
DEFAULT_TRANSPORT = {
    'metro': {
        'name': '城市轨道交通',
        'tips': '建议购买交通卡，通常可通用地铁和公交。',
        'hours': '约6:00-23:00',
        'cost': '根据距离计价'
    },
    'bus': {
        'name': '公共巴士',
        'tips': '路线覆盖广，注意末班车时间。建议使用地图App导航。',
        'hours': '约6:00-22:00'
    },
    'taxi': {
        'name': '出租车',
        'tips': '确认打表或提前谈好价格。优先选择正规出租车公司。',
        'cost': '起步价约20-50元当地货币'
    },
    'app': 'Google Maps / 当地交通App'
}

# ============================================================
# 医院数据 (Hospitals with Foreign Language Service)
# ============================================================
HOSPITALS = {
    'tokyo': [
        {
            'name': '东京大学医学部附属病院',
            'nameEn': 'The University of Tokyo Hospital',
            'address': '东京都文京本郷7-3-1',
            'phone': '+81-3-3815-5411',
            'languages': ['英语', '中文', '韩语'],
            'services': ['急诊', '综合门诊', '国际诊疗部'],
            'english': True,
            'insurance': '国际保险可对接'
        },
        {
            'name': '圣路加国际医院',
            'nameEn': 'St. Luke\'s International Hospital',
            'address': '东京都中央区明石町9-1',
            'phone': '+81-3-3541-5151',
            'languages': ['英语', '中文', '法语', '德语', '西班牙语', '葡萄牙语'],
            'services': ['全科', '急诊', '体检', '疫苗接种'],
            'english': True,
            'insurance': '国际保险全覆盖，24/7急诊'
        },
        {
            'name': 'JCHO东京新宿大楼诊所',
            'nameEn': 'JCHO Tokyo Shinjuku Building Clinic',
            'address': '东京都新宿区长町5-23',
            'phone': '+81-3-5272-5100',
            'languages': ['英语'],
            'services': ['内科', '外科', '牙科'],
            'english': True,
            'insurance': '国际保险可对接'
        }
    ],
    'singapore': [
        {
            'name': '新加坡中央医院',
            'nameEn': 'Singapore General Hospital (SGH)',
            'address': 'Outram Road, Singapore 169608',
            'phone': '+65-6222-3322',
            'languages': ['英语', '中文', '马来语', '淡米尔语'],
            'services': ['急诊', '专科', '手术中心'],
            'english': True,
            'insurance': '接受国际保险'
        },
        {
            'name': '伊丽莎白医院',
            'nameEn': 'Mount Elizabeth Hospital',
            'address': '3 Mount Elizabeth, Singapore 228510',
            'phone': '+65-6933-0000',
            'languages': ['英语', '中文', '马来语'],
            'services': ['急诊', '心脏科', '肿瘤科', '整形'],
            'english': True,
            'insurance': '高端国际保险，VIP服务'
        },
        {
            'name': '莱佛士医院',
            'nameEn': 'Raffles Hospital',
            'address': '585 North Bridge Road, Singapore 188770',
            'phone': '+65-6311-1111',
            'languages': ['英语', '中文', '日语', '印尼语'],
            'services': ['急诊', '体检', '专科', '中文服务'],
            'english': True,
            'insurance': '国际保险全覆盖'
        }
    ],
    'paris': [
        {
            'name': '美国医院巴黎',
            'nameEn': 'American Hospital of Paris',
            'address': '63 Boulevard Victor Hugo, 92200 Neuilly-sur-Seine',
            'phone': '+33-1-46-41-25-25',
            'languages': ['英语', '法语', '中文', '德语', '西班牙语', '意大利语', '阿拉伯语'],
            'services': ['急诊', '全科', '手术', '体检'],
            'english': True,
            'insurance': '国际保险直付，24/7急诊'
        },
        {
            'name': '皮提耶-萨尔佩特里埃医院',
            'nameEn': 'Hôpital Pitié-Salpêtrière',
            'address': '47-83 Boulevard de l\'Hôpital, 75013 Paris',
            'phone': '+33-1-42-16-00-00',
            'languages': ['法语', '英语'],
            'services': ['急诊', '神经科', '心脏科'],
            'english': True,
            'insurance': '接受国际保险，需先垫付后报销'
        }
    ],
    'bangkok': [
        {
            'name': '康民国际医院',
            'nameEn': 'Bumrungrad International Hospital',
            'address': '33 Sukhumvit 3, Wattana, Bangkok 10110',
            'phone': '+66-2-066-8888',
            'languages': ['英语', '中文', '日语', '韩语', '阿拉伯语', '德语', '法语'],
            'services': ['急诊', '全科', '体检', '医美', '试管婴儿'],
            'english': True,
            'insurance': '国际保险直付，JCI认证全球最大国际医院'
        },
        {
            'name': '曼谷基督教医院',
            'nameEn': 'Bangkok Christian Hospital',
            'address': '124 Silom Road, Bangrak, Bangkok 10500',
            'phone': '+66-2-233-6981',
            'languages': ['英语', '中文'],
            'services': ['急诊', '全科', '专科'],
            'english': True,
            'insurance': '价格实惠，接受国际保险'
        },
        {
            'name': '朱拉蓬国际医院',
            'nameEn': 'Chulalongkorn Hospital',
            'address': '1873 Rama IV Road, Pathum Wan, Bangkok 10330',
            'phone': '+66-2-256-5000',
            'languages': ['英语', '泰语'],
            'services': ['急诊', '综合', '教学医院'],
            'english': True,
            'insurance': '公立医院，费用较低'
        }
    ],
    'new_york': [
        {
            'name': '纽约长老会医院',
            'nameEn': 'NewYork-Presbyterian Hospital',
            'address': '525 E 68th St, New York, NY 10065',
            'phone': '+1-212-746-5454',
            'languages': ['英语', '西班牙语', '中文', '法语', '俄语', '韩语'],
            'services': ['急诊', '专科', '手术', '儿科'],
            'english': True,
            'insurance': '国际保险可对接，语言服务免费'
        },
        {
            'name': '西奈山医院',
            'nameEn': 'Mount Sinai Hospital',
            'address': '1 Gustave L. Levy Place, New York, NY 10029',
            'phone': '+1-212-241-6500',
            'languages': ['英语', '西班牙语', '中文', '希伯来语'],
            'services': ['急诊', '心脏科', '肿瘤科', '神经科'],
            'english': True,
            'insurance': '顶级医疗，语言服务完善'
        },
        {
            'name': '贝尔维尤医院',
            'nameEn': 'Bellevue Hospital',
            'address': '462 1st Ave, New York, NY 10016',
            'phone': '+1-212-562-4141',
            'languages': ['英语', '西班牙语', '中文', '法语', '俄语', '韩语', '阿拉伯语'],
            'services': ['急诊', '精神科', '传染病'],
            'english': True,
            'insurance': '公立医院，必须购买保险否则费用极高'
        }
    ],
    'london': [
        {
            'name': '圣托马斯医院',
            'nameEn': 'St Thomas\' Hospital',
            'address': 'Westminster Bridge Road, London SE1 7EH',
            'phone': '+44-20-7188-7188',
            'languages': ['英语', '法语', '西班牙语', '中文', '波兰语', '阿拉伯语'],
            'services': ['急诊', '专科', '产科', '儿科'],
            'english': True,
            'insurance': 'NHS体系，访客需付费，提前了解NHS收费'
        },
        {
            'name': '哈里菲尔德医院',
            'nameEn': 'Harley Street Clinic',
            'address': '35 Weymouth Street, London W1G 7BQ',
            'phone': '+44-20-7935-7700',
            'languages': ['英语', '法语', '德语', '意大利语', '俄语', '阿拉伯语'],
            'services': ['专科', '肿瘤科', '心脏科', '神经科'],
            'english': True,
            'insurance': '私人医院，国际保险可报销'
        }
    ],
    'dubai': [
        {
            'name': '美国医院迪拜',
            'nameEn': 'American Hospital Dubai',
            'address': '19 Oud Metha Road, Dubai, UAE',
            'phone': '+971-4-336-7777',
            'languages': ['英语', '阿拉伯语', '中文', '法语', '德语', '俄语'],
            'services': ['急诊', '全科', '专科', '体检', '手术'],
            'english': True,
            'insurance': '国际保险直付，多语言服务'
        },
        {
            'name': 'Mediclinic迪拜',
            'nameEn': 'Mediclinic City Hospital',
            'address': 'Building 37 - Dubai Healthcare City',
            'phone': '+971-4-435-9999',
            'languages': ['英语', '阿拉伯语', '法语'],
            'services': ['急诊', '综合', '专科'],
            'english': True,
            'insurance': '国际保险可对接'
        }
    ],
    'seoul': [
        {
            'name': '首尔大学医院',
            'nameEn': 'Seoul National University Hospital',
            'address': '101 Daehak-ro, Jongno-gu, Seoul 03080',
            'phone': '+82-2-2072-2222',
            'languages': ['韩语', '英语', '中文'],
            'services': ['急诊', '综合', '专科', '国际诊疗中心'],
            'english': True,
            'insurance': '国际保险可对接，有国际诊疗中心'
        },
        {
            'name': '三星首尔医院',
            'nameEn': 'Samsung Medical Center',
            'address': '81 Irwon-ro, Gangnam-gu, Seoul 06351',
            'phone': '+82-2-3410-0200',
            'languages': ['韩语', '英语', '中文', '日语', '俄语', '蒙古语'],
            'services': ['急诊', '肿瘤科', '心脏科', '国际医疗中心'],
            'english': True,
            'insurance': '国际保险直付，语言服务完善'
        }
    ]
}

DEFAULT_HOSPITAL = [
    {
        'name': '城市中心医院',
        'nameEn': 'City Central Hospital',
        'address': '市中心区域',
        'phone': '急救电话：当地急救号码',
        'languages': ['英语'],
        'services': ['急诊', '全科'],
        'english': True,
        'insurance': '建议购买国际旅行保险'
    }
]

# ============================================================
# 大使馆/领事馆数据
# ============================================================
EMBASSIES = {
    'tokyo': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻日本大使馆',
            'address': '东京都港区元麻布3-4-33',
            'phone': '+81-3-3403-3064',
            'emergency': '+81-70-3816-0927',
            'email': 'japan_law@vip.163.com',
            'hours': '工作日9:00-12:00（证件）'
        },
        'consulates': [
            {
                'name': '驻大阪总领事馆',
                'address': '大阪府大阪市西区韧工业园3-1-18',
                'phone': '+81-6-6445-9481'
            },
            {
                'name': '驻名古屋总领事馆',
                'address': '爱知县广州市绿区汐见町2-77',
                'phone': '+81-52-932-1098'
            },
            {
                'name': '驻札幌总领事馆',
                'address': '北海道札幌市中央区南13条西23-5-1',
                'phone': '+81-11-563-5563'
            },
            {
                'name': '驻福冈总领事馆',
                'address': '福冈县福冈市中央区药院1-14-2',
                'phone': '+81-92-713-1121'
            }
        ]
    },
    'singapore': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻新加坡大使馆',
            'address': '150 Tanglin Road, Singapore 247969',
            'phone': '+65-6471-2100',
            'emergency': '+65-8129-5526',
            'email': 'singapore@csm.mfa.gov.cn',
            'hours': '工作日8:30-12:00（证件）'
        }
    },
    'paris': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻法兰西共和国大使馆',
            'address': '11 Avenue George V, 75008 Paris',
            'phone': '+33-1-4723-3445',
            'emergency': '+33-6-1923-8001',
            'email': 'info@amb-chine.fr',
            'hours': '工作日9:00-12:00'
        },
        'consulates': [
            {
                'name': '驻马赛总领事馆',
                'address': '20 Boulevard Carmagnole, 13008 Marseille',
                'phone': '+33-4-9132-5000'
            },
            {
                'name': '驻斯特拉斯堡总领事馆',
                'address': '35 Rue Bauer, 67000 Strasbourg',
                'phone': '+33-3-8845-1732'
            }
        ]
    },
    'bangkok': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻泰王国大使馆',
            'address': '57 Ratchadaphisek Road, Bangkok 10400',
            'phone': '+66-2-245-7044',
            'emergency': '+66-85-108-6528',
            'email': 'chinaemb_th@mfa.gov.cn',
            'hours': '工作日8:30-11:30'
        },
        'consulates': [
            {
                'name': '驻清迈总领事馆',
                'address': '111 Changlo Road, Chiang Mai 50100',
                'phone': '+66-53-280-857'
            },
            {
                'name': '驻宋卡总领事馆',
                'address': '90/1 Sadao Road, Songkhla 90000',
                'phone': '+66-74-311-588'
            }
        ]
    },
    'new_york': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻美利坚合众国大使馆',
            'address': '3505 International Place NW, Washington DC 20008',
            'phone': '+1-202-495-2266',
            'emergency': '+1-202-669-8024',
            'email': 'chinaembpress_us@mfa.gov.cn',
            'hours': '工作日9:00-12:00'
        },
        'consulates': [
            {
                'name': '驻纽约总领事馆',
                'address': '520 12th Ave, New York, NY 10036',
                'phone': '+1-212-244-9392',
                'emergency': '+1-212-244-9456'
            },
            {
                'name': '驻旧金山总领事馆',
                'address': '1450 Laguna St, San Francisco, CA 94115',
                'phone': '+1-415-674-2900'
            },
            {
                'name': '驻洛杉矶总领事馆',
                'address': '500 Shatto Place, Los Angeles, CA 90020',
                'phone': '+1-213-807-8088'
            },
            {
                'name': '驻芝加哥总领事馆',
                'address': '1 Illinois Center, 200 W Madison St, Chicago, IL 60606',
                'phone': '+1-312-803-0095'
            }
        ]
    },
    'london': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻大不列颠及北爱尔兰联合王国大使馆',
            'address': '49-51 Portland Place, London W1B 5JL',
            'phone': '+44-20-7299-4049',
            'emergency': '+44-20-7436-8094',
            'email': 'info@chinese-embassy.org.uk',
            'hours': '工作日9:00-12:00'
        },
        'consulates': [
            {
                'name': '驻曼彻斯特总领事馆',
                'address': 'Denison House, 49 Denison Road, Manchester M14 5RX',
                'phone': '+44-161-224-8672'
            },
            {
                'name': '驻爱丁堡总领事馆',
                'address': '55 Corstorphine Road, Edinburgh EH12 5QG',
                'phone': '+44-131-337-1207'
            }
        ]
    },
    'dubai': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻阿拉伯联合酋长国大使馆',
            'address': 'Al Jazira Sports Club Area, Abu Dhabi',
            'phone': '+971-2-443-4276',
            'emergency': '+971-50-522-1628',
            'email': 'chinaemb.ae@mfa.gov.cn',
            'hours': '工作日8:30-12:00'
        },
        'consulates': [
            {
                'name': '驻迪拜总领事馆',
                'address': 'Hessa Tower, Al Wasl Road, Dubai',
                'phone': '+971-4-394-4733',
                'emergency': '+971-50-639-2695'
            }
        ]
    },
    'seoul': {
        'country': '中国',
        'embassy': {
            'name': '中华人民共和国驻大韩民国大使馆',
            'address': '首尔特别市钟路区栗谷路6',
            'phone': '+82-2-738-1038',
            'emergency': '+82-10-9300-2727',
            'email': 'chinaemb_kr@mfa.gov.cn',
            'hours': '工作日9:00-12:00'
        },
        'consulates': [
            {
                'name': '驻釜山总领事馆',
                'address': '釜山广域市海云台区海云台路597',
                'phone': '+82-51-743-7990'
            },
            {
                'name': '驻济州总领事馆',
                'address': '济州特别自治道济州市老衡路',
                'phone': '+82-64-900-8830'
            }
        ]
    }
}

# ============================================================
# 安全应用推荐
# ============================================================
SAFETY_APPS = {
    'tokyo': [
        {'name': 'Safety Tips Japan', 'desc': '日本官方避难APP，提供灾害预警和避难指南', 'icon': 'shield'},
        {'name': 'NHK WORLD-JAPAN', 'desc': '日语学习+新闻+紧急信息', 'icon': 'radio'},
        {'name': 'NAVITIME', 'desc': '交通+地图+周边设施查询', 'icon': 'map'},
        {'name': 'VoiceTra', 'desc': '日语实时语音翻译', 'icon': 'mic'}
    ],
    'singapore': [
        {'name': 'myResponder', 'desc': '一键报警+定位，CPR指引', 'icon': 'alert'},
        {'name': 'One Motoring', 'desc': '交通罚款+停车+道路状况', 'icon': 'car'},
        {'name': 'Police@SG', 'desc': '线上报警+案件追踪', 'icon': 'shield'},
        {'name': 'WhatStop', 'desc': 'MRT故障通知+替代路线', 'icon': 'train'}
    ],
    'paris': [
        {'name': 'SAIP', 'desc': '法国恐袭预警APP', 'icon': 'alert'},
        {'name': 'Citymapper', 'desc': '公共交通导航+实时延误', 'icon': 'map'},
        {'name': 'Vélib\'', 'desc': '共享单车+停车点查询', 'icon': 'bike'},
        {'name': 'RATP', 'desc': '地铁+公交实时信息', 'icon': 'train'}
    ],
    'bangkok': [
        {'name': 'Thai Alert', 'desc': '泰国安全预警+灾害通知', 'icon': 'alert'},
        {'name': 'Grab', 'desc': '打车+支付+追踪行程', 'icon': 'car'},
        {'name': 'Transit TH', 'desc': 'BTS+MRT换乘指南', 'icon': 'train'},
        {'name': 'LINE', 'desc': '泰国主要通讯+紧急联系', 'icon': 'message'}
    ],
    'new_york': [
        {'name': 'NYC 311', 'desc': '非紧急报警+市政服务', 'icon': 'phone'},
        {'name': 'Citizen', 'desc': '实时犯罪地图+安全预警', 'icon': 'map'},
        {'name': 'Google Maps', 'desc': '地铁导航+步行安全路线', 'icon': 'navigation'},
        {'name': 'Uber', 'desc': '安全打车+行程分享', 'icon': 'car'}
    ],
    'london': [
        {'name': 'Citizen', 'desc': '伦敦安全预警+犯罪通知', 'icon': 'alert'},
        {'name': 'Citymapper', 'desc': '公共交通最佳路线', 'icon': 'map'},
        {'name': 'TfL', 'desc': '地铁+公交+火车实时', 'icon': 'train'},
        {'name': 'Bus London', 'desc': '巴士到站预报', 'icon': 'bus'}
    ],
    'dubai': [
        {'name': 'Dubai Police', 'desc': '线上报警+安全服务', 'icon': 'shield'},
        {'name': 'RTA Dubai', 'desc': '地铁+公交+停车+打车', 'icon': 'car'},
        {'name': 'Dubai Corniche', 'desc': '海滩安全+天气预警', 'icon': 'map'},
        {'name': 'Careem', 'desc': '安全打车+女性专属服务', 'icon': 'taxi'}
    ],
    'seoul': [
        {'name': 'Smart Rescue 119', 'desc': '手机报警+位置定位', 'icon': 'alert'},
        {'name': 'KakaoMap', 'desc': '韩语地图+公交导航', 'icon': 'map'},
        {'name': 'Subway Korea', 'desc': '首尔地铁换乘+末班车', 'icon': 'train'},
        {'name': 'Bosingak Safety Bell', 'desc': '夜间安全+报警定位', 'icon': 'shield'}
    ]
}

DEFAULT_SAFETY_APPS = [
    {'name': 'Google Maps', 'desc': '离线地图+导航', 'icon': 'map'},
    {'name': 'Google Translate', 'desc': '实时翻译+相机翻译', 'icon': 'translate'},
    {'name': 'WhatsApp', 'desc': '国际通讯+位置共享', 'icon': 'message'},
    {'name': 'Travel Smart', 'desc': '旅行保险+紧急救援', 'icon': 'shield'}
]

# ============================================================
# 自保策略
# ============================================================
SELF_DEFENSE = {
    'tokyo': {
        'general': [
            '深夜避开新宿歌舞伎町小巷和偏僻公园',
            'JR山手线内侧（环线）相对安全',
            '电车内背包放胸前防盗',
            '自动贩卖机旁夜间避免独自等待',
            '酒店前台保存好地址卡片'
        ],
        'emergency': [
            '立即拨打110报警（可英语）',
            '附近便利店或派出所请求协助',
            '大使馆24小时热线：+81-70-3816-0927',
            '记住最近地铁站出口编号'
        ]
    },
    'singapore': {
        'general': [
            '法律严格：禁烟区吸烟罚1000新元，乱丢垃圾罚500新元',
            '女性夜间可安全独自乘地铁',
            '遇到盘查保持冷静配合出示证件',
            '贵重物品放酒店保险箱',
            '电梯遇可疑人物立即离开'
        ],
        'emergency': [
            '报警999（中国游客友好）',
            '消防/急救995',
            '中国驻新加坡大使馆：+65-8129-5526',
            '下载myResponder APP一键报警'
        ]
    },
    'paris': {
        'general': [
            '蒙马特高地和北站附近扒手多，背包胸前',
            '可疑吉普赛女性搭讪立即走开',
            '夜间避开13区和93省',
            '餐馆小费放桌上非塞给服务员',
            '景点拍照时注意手机被抢'
        ],
        'emergency': [
            '报警17，消防18，急救15',
            '中国驻法国大使馆：+33-6-1923-8001',
            '戴高乐机场失窃可找PCF警察局',
            '重要文件拍照存云端'
        ]
    },
    'bangkok': {
        'general': [
            '嘟嘟车价格虚高，先谈好价再上车',
            '寺庙附近不主动帮陌生人拍照（可能收费）',
            '考山路酒吧街夜间注意饮料被下药',
            '出租车要求打表被拒换一辆',
            '海滩游泳注意离岸流'
        ],
        'emergency': [
            '报警191，旅游警察1155（泰英双语）',
            '中国驻泰大使馆：+66-85-108-6528',
            '购买SIM卡推荐AIS或TrueMove',
            '记录护照号+大使馆电话在手机'
        ]
    },
    'new_york': {
        'general': [
            '深夜避免地铁黑暗站台独自候车',
            '时代广场和中央车站扒手多',
            '地铁/街道看到可疑物品立即报告',
            '911统一报警（中文服务需说明）',
            'Uber比深夜地铁更安全'
        ],
        'emergency': [
            '紧急报警911（非紧急311）',
            '中国驻纽约总领事馆：+1-212-244-9456',
            '911可要求翻译服务',
            '随身带现金（急救可能先收费）'
        ]
    },
    'london': {
        'general': [
            '皮卡迪利广场和科芬园周边扒手多',
            '周五周六晚地铁站醉酒者多',
            '不要接受陌生人递来的物品',
            '陌生人问路保持距离回答',
            '伦敦东部（Hackney/Stoke Newington）夜间注意'
        ],
        'emergency': [
            '报警/急救/消防统一999（非紧急101）',
            '中国驻英国大使馆：+44-20-7436-8094',
            '下载Citizen APP获取实时安全预警',
            'Oyster卡绑定手机可追踪行程'
        ]
    },
    'dubai': {
        'general': [
            '公共场合禁止饮酒（酒店/酒吧除外）',
            '斋月白天禁止在公共场合饮食/吸烟',
            '着装得体，避免暴露（海滩除外）',
            '星期五下午祈祷时间部分场所关闭',
            '与当地人拍照需先征得同意'
        ],
        'emergency': [
            '报警999，急救/消防998',
            '中国驻迪拜总领事馆：+971-50-639-2695',
            '迪拜警察局24小时服务',
            '提前了解当地法律法规'
        ]
    },
    'seoul': {
        'general': [
            '梨泰院和弘大夜店区注意饮料被下药',
            '江南区打车避免被绕路',
            '东大门凌晨购物注意人身安全',
            '便利店深夜购物保持警觉',
            '遇到盘查（军方/警方）保持冷静'
        ],
        'emergency': [
            '报警112，消防/急救119',
            '中国驻韩国大使馆：+82-10-9300-2727',
            '下载Smart Rescue 119 APP手机报警',
            '弘大/梨泰院有夜间巡警'
        ]
    }
}

DEFAULT_SELF_DEFENSE = {
    'general': [
        '将护照首页拍照存云端和手机',
        '不随身携带大量现金和贵重物品',
        '告知家人朋友行程和联系方式',
        '购买覆盖目的地的旅行保险',
        '学习基本本地语言：你好、谢谢、救命'
    ],
    'emergency': [
        '第一时间联系当地警方',
        '联系中国驻当地使领馆寻求协助',
        '联系家人告知情况',
        '记录案件编号和警方联系方式',
        '如有保险，保留所有报案和就医凭证'
    ]
}


def enhance_city(city_id, city_data):
    """为单个城市增强数据"""
    
    # 交通指南
    if 'transportation' not in city_data:
        if city_id in TRANSPORTATION:
            city_data['transportation'] = TRANSPORTATION[city_id]
        else:
            # 使用默认数据
            city_data['transportation'] = DEFAULT_TRANSPORT.copy()
    
    # 医院
    if 'hospitals' not in city_data:
        if city_id in HOSPITALS:
            city_data['hospitals'] = HOSPITALS[city_id]
        else:
            city_data['hospitals'] = DEFAULT_HOSPITAL.copy()
    
    # 大使馆/领事馆
    if 'embassies' not in city_data:
        if city_id in EMBASSIES:
            city_data['embassies'] = EMBASSIES[city_id]
    
    # 安全应用
    if 'safetyApps' not in city_data:
        if city_id in SAFETY_APPS:
            city_data['safetyApps'] = SAFETY_APPS[city_id]
        else:
            city_data['safetyApps'] = DEFAULT_SAFETY_APPS.copy()
    
    # 自保策略
    if 'selfDefense' not in city_data:
        if city_id in SELF_DEFENSE:
            city_data['selfDefense'] = SELF_DEFENSE[city_id]
        else:
            city_data['selfDefense'] = DEFAULT_SELF_DEFENSE.copy()
    
    return city_data


def main():
    # 读取数据
    with open('data_enhanced.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'var CITY_DATABASE = ({[\s\S]*?})\s*;', content)
    data = json.loads(match.group(1))
    
    print(f"开始增强数据...")
    print(f"当前城市数: {len(data)}")
    
    # 增强所有城市
    for city_id in data:
        data[city_id] = enhance_city(city_id, data[city_id])
    
    # 写回文件
    new_content = f'var CITY_DATABASE = {json.dumps(data, ensure_ascii=False)};'
    with open('data_enhanced.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # 验证
    print(f"\n✅ 数据增强完成！")
    print(f"增强后城市数: {len(data)}")
    
    # 打印验证
    print("\n=== 验证新增数据 ===")
    sample_cities = ['tokyo', 'singapore', 'paris', 'bangkok', 'new_york']
    for city_id in sample_cities:
        if city_id not in data:
            continue
        city = data[city_id]
        print(f"\n📍 {city.get('name')}:")
        print(f"   交通指南: {'✅' if 'transportation' in city else '❌'}")
        print(f"   医院: {'✅' if 'hospitals' in city else '❌'} ({len(city.get('hospitals', []))}家)")
        print(f"   大使馆: {'✅' if 'embassies' in city else '❌'}")
        print(f"   安全应用: {'✅' if 'safetyApps' in city else '❌'} ({len(city.get('safetyApps', []))}个)")
        print(f"   自保策略: {'✅' if 'selfDefense' in city else '❌'}")
    
    print("\n=== 部分医院数据验证 ===")
    for city_id in sample_cities:
        if city_id not in data:
            continue
        hospitals = data[city_id].get('hospitals', [])[:1]
        if hospitals:
            h = hospitals[0]
            print(f"\n📍 {data[city_id].get('name')}:")
            print(f"   🏥 {h.get('name')}")
            print(f"   📍 {h.get('address')}")
            print(f"   📞 {h.get('phone')}")
            print(f"   🌍 支持语言: {', '.join(h.get('languages', []))}")
    
    print("\n=== 部分大使馆数据验证 ===")
    for city_id in ['tokyo', 'singapore', 'paris']:
        if city_id not in data or 'embassies' not in data[city_id]:
            continue
        emb = data[city_id]['embassies']
        print(f"\n📍 {data[city_id].get('name')} - 中国使领馆:")
        print(f"   🏛️ {emb.get('embassy', {}).get('name')}")
        print(f"   📍 {emb.get('embassy', {}).get('address')}")
        print(f"   📞 {emb.get('embassy', {}).get('phone')}")
        print(f"   🚨 紧急热线: {emb.get('embassy', {}).get('emergency')}")


if __name__ == '__main__':
    main()
