#!/usr/bin/env python3
"""补充所有缺少真实医院数据的城市"""
import json, re

with open('data_enhanced.js', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'var CITY_DATABASE = ({[\s\S]*?})\s*;', content)
data = json.loads(match.group(1))

# 补充所有还缺少真实医院的城市
EXTRA_HOSPITALS = {
    # 亚洲剩余
    "bali": [
        {"name": "比加医院巴厘岛", "nameEn": "BIMC Hospital Bali", "address": "Jl. Bypass Ngurah Rai No.100X, Kuta, Bali", "phone": "+62-361-761-263", "languages": ["印尼语", "英语", "日语"], "services": ["全科", "急诊", "潜水病"], "english": True, "insurance": "接受国际保险"},
        {"name": "库塔诊所", "nameEn": "Kuta Clinic", "address": "Jl. Raya Kuta No.66, Kuta, Bali", "phone": "+62-361-753-268", "languages": ["印尼语", "英语", "中文"], "services": ["全科", "急诊"], "english": True, "insurance": "接受国际保险"},
    ],
    "chiang_mai": [
        {"name": "清迈罗马医院", "nameEn": "Ramathibodi Hospital Chiang Mai", "address": "99/9 Superhighway Rd., Chiang Mai 50200", "phone": "+66-52-090-333", "languages": ["泰语", "英语", "中文"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "麦科麦卡医院清迈", "nameEn": "Maharaj Nakorn Chiang Mai Hospital", "address": "110 Intavaroros Rd., Chiang Mai", "phone": "+66-53-935-000", "languages": ["泰语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "phuket": [
        {"name": "普吉岛国际医院", "nameEn": "Bangkok Hospital Phuket", "address": "2/1 Hongyok Utis Rd., Phuket Town 83000", "phone": "+66-76-254-425", "languages": ["泰语", "英语", "中文", "日语"], "services": ["全科", "急诊", "潜水病"], "english": True, "insurance": "接受国际保险"},
        {"name": "普吉岛国际医院", "nameEn": "Phuket International Hospital", "address": "44 Chalermprakiat Ror 9 Rd., Phuket", "phone": "+66-76-249-400", "languages": ["泰语", "英语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "penang": [
        {"name": "槟城光大医院", "nameEn": "Penang Adventist Hospital", "address": "465 Jalan Burma, 10350 Penang", "phone": "+60-4-222-7200", "languages": ["英语", "中文", "马来语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
        {"name": "槟城医院", "nameEn": "Island Hospital Penang", "address": "308 Macalister Road, 10450 Penang", "phone": "+60-4-228-8222", "languages": ["英语", "中文", "马来语", "泰语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "hanoi": [
        {"name": "河内法越医院", "nameEn": "French-Vietnamese Hospital Hanoi", "address": "1 Phung Khac Khoan, Hoan Kiem, Hanoi", "phone": "+84-24-3577-1100", "languages": ["越南语", "英语", "法语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "河内百合医院", "nameEn": "Family Medical Practice Hanoi", "address": "298I Kim Ma St., Ba Dinh, Hanoi", "phone": "+84-24-3843-0748", "languages": ["越南语", "英语", "日语"], "services": ["全科", "急诊"], "english": True, "insurance": "接受国际保险"},
    ],
    "bangalore": [
        {"name": "班加罗尔福蒂斯医院", "nameEn": "Fortis Hospital Bangalore", "address": "154/9 Bannerghatta Road, Bangalore 560076", "phone": "+91-80-6621-4444", "languages": ["卡纳达语", "英语", "印地语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "马尼帕尔医院班加罗尔", "nameEn": "Manipal Hospital Bangalore", "address": "98 HAL Airport Road, Bangalore 560017", "phone": "+91-80-2502-4444", "languages": ["卡纳达语", "英语", "印地语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    "chennai": [
        {"name": "阿波罗医院金奈", "nameEn": "Apollo Hospitals Chennai", "address": "21 Greams Lane, Chennai 600006", "phone": "+91-44-2829-0200", "languages": ["泰米尔语", "英语", "印地语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "福蒂斯医院金奈", "nameEn": "Fortis Malar Hospital Chennai", "address": "52 1st Main Road, Gandhi Nagar, Chennai", "phone": "+91-44-4289-2222", "languages": ["泰米尔语", "英语"], "services": ["全科", "急诊", "肾脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "kolkata": [
        {"name": "贝尔维尤诊所加尔各答", "nameEn": "Bellevue Clinic Kolkata", "address": "9 Loudon Street, Kolkata 700017", "phone": "+91-33-2247-2321", "languages": ["孟加拉语", "英语", "印地语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "阿波罗私立医院加尔各答", "nameEn": "Apollo Gleneagles Hospitals Kolkata", "address": "58 Canal Circular Road, Kolkata 700054", "phone": "+91-33-2320-3040", "languages": ["孟加拉语", "英语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    "hyderabad": [
        {"name": "阿波罗医院海得拉巴", "nameEn": "Apollo Hospitals Hyderabad", "address": "Jubilee Hills, Hyderabad 500096", "phone": "+91-40-2360-7777", "languages": ["泰卢固语", "英语", "印地语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
        {"name": "亚洲医院海得拉巴", "nameEn": "Asian Institute of Gastroenterology", "address": "6-3-661, Somajiguda, Hyderabad", "phone": "+91-40-2337-8888", "languages": ["泰卢固语", "英语"], "services": ["全科", "消化内科", "急诊"], "english": True, "insurance": "接受国际保险"},
    ],
    "shenzhen": [
        {"name": "深圳北京大学医院", "nameEn": "Peking University Shenzhen Hospital", "address": "深圳市福田区莲花路1120号", "phone": "+86-755-8392-3333", "languages": ["中文", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "香港大学深圳医院", "nameEn": "The University of Hong Kong-Shenzhen Hospital", "address": "深圳市福田区海园一路1号", "phone": "+86-755-8609-3333", "languages": ["中文", "英语", "广东话"], "services": ["全科", "急诊", "国际医疗"], "english": True, "insurance": "接受国际保险"},
    ],
    "guangzhou": [
        {"name": "广州中山大学附属医院", "nameEn": "Sun Yat-sen University First Hospital", "address": "广州市越秀区中山二路58号", "phone": "+86-20-8733-3090", "languages": ["中文", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "广州祈福医院", "nameEn": "Clifford Hospital Guangzhou", "address": "广州市番禺区祈福新邨", "phone": "+86-20-8470-0011", "languages": ["中文", "英语", "日语"], "services": ["全科", "急诊", "国际医疗"], "english": True, "insurance": "接受国际保险"},
    ],
    "chengdu": [
        {"name": "成都和睦家医院", "nameEn": "United Family Chengdu Hospital", "address": "成都市成华区万年路30号", "phone": "+86-28-8522-0622", "languages": ["中文", "英语"], "services": ["全科", "急诊", "儿科"], "english": True, "insurance": "接受国际保险"},
        {"name": "成都四川大学华西医院", "nameEn": "West China Hospital of Sichuan University", "address": "成都市武侯区国学巷37号", "phone": "+86-28-8542-2114", "languages": ["中文", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    "hangzhou": [
        {"name": "浙江大学附属第一医院", "nameEn": "First Affiliated Hospital of Zhejiang University", "address": "杭州市上城区庆春路79号", "phone": "+86-571-8723-6114", "languages": ["中文", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "杭州中美医疗", "nameEn": "Hangzhou International Medical Center", "address": "杭州市西湖区文三路136号", "phone": "+86-571-8732-9113", "languages": ["中文", "英语", "日语"], "services": ["全科", "急诊"], "english": True, "insurance": "接受国际保险"},
    ],
    "xian": [
        {"name": "西安交通大学第一附属医院", "nameEn": "First Hospital of Xi'an Jiaotong University", "address": "西安市碑林区朱雀大街277号", "phone": "+86-29-8532-3900", "languages": ["中文", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "西安国际医疗中心", "nameEn": "Xi'an International Medical Center", "address": "西安市雁塔区高新二路76号", "phone": "+86-29-8883-9999", "languages": ["中文", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    # 欧洲剩余
    "oslo": [
        {"name": "奥斯陆大学医院", "nameEn": "Oslo University Hospital", "address": "Kirkeveien 166, 0450 Oslo", "phone": "+47-23-07-0000", "languages": ["挪威语", "英语", "阿拉伯语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "维纳私立医院奥斯陆", "nameEn": "Volvat Medisinske Senter Oslo", "address": "Borgenveien 2A, 0370 Oslo", "phone": "+47-22-95-7500", "languages": ["挪威语", "英语", "德语"], "services": ["全科", "内科", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "copenhagen": [
        {"name": "哥本哈根大学医院", "nameEn": "Copenhagen University Hospital", "address": "Blegdamsvej 9, 2100 Copenhagen", "phone": "+45-35-45-0000", "languages": ["丹麦语", "英语", "德语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "吉洛斯特拉普医院", "nameEn": "Glostrup Hospital", "address": "Nordre Ringvej 57, 2600 Glostrup", "phone": "+45-43-23-3000", "languages": ["丹麦语", "英语"], "services": ["全科", "急诊", "神经"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "helsinki": [
        {"name": "赫尔辛基大学中心医院", "nameEn": "Helsinki University Central Hospital", "address": "Haartmaninkatu 4, 00290 Helsinki", "phone": "+358-9-4711", "languages": ["芬兰语", "瑞典语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "迪亚科尼亚私立医院", "nameEn": "Diakonissalaitos Hospital Helsinki", "address": "Alppikatu 2, 00530 Helsinki", "phone": "+358-9-77-50-0", "languages": ["芬兰语", "瑞典语", "英语", "俄语"], "services": ["全科", "急诊", "妇科"], "english": True, "insurance": "接受国际保险"},
    ],
    "lisbon": [
        {"name": "里斯本圣玛丽医院", "nameEn": "Hospital de Santa Maria Lisboa", "address": "Av. Prof. Egas Moniz, 1649-028 Lisbon", "phone": "+351-21-780-5000", "languages": ["葡萄牙语", "英语", "西班牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "里斯本CUF医院", "nameEn": "Hospital CUF Lisboa", "address": "Travessa do Castro 3, 1350-070 Lisbon", "phone": "+351-21-003-0700", "languages": ["葡萄牙语", "英语", "法语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "warsaw": [
        {"name": "华沙卡罗林斯卡医院", "nameEn": "Medicover Hospital Warsaw", "address": "Al. Jerozolimskie 96, 00-807 Warsaw", "phone": "+48-22-444-1800", "languages": ["波兰语", "英语", "德语", "俄语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "华沙公爵基金医院", "nameEn": "CSK MZ Szpital Central Warsaw", "address": "Banacha 1a, 02-097 Warsaw", "phone": "+48-22-599-2000", "languages": ["波兰语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "athens": [
        {"name": "雅典拉伊科医院", "nameEn": "Laiko General Hospital Athens", "address": "Agiou Thoma 17, 11527 Athens", "phone": "+30-213-200-4000", "languages": ["希腊语", "英语", "法语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "拜瑞私立医院", "nameEn": "Bioclinic Athens", "address": "Pireos 172, 18863 Athens", "phone": "+30-215-501-0201", "languages": ["希腊语", "英语", "德语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "brussels": [
        {"name": "布鲁塞尔大学医院", "nameEn": "CHU Saint-Pierre Brussels", "address": "Rue Haute 322, 1000 Brussels", "phone": "+32-2-535-3111", "languages": ["法语", "荷兰语", "英语", "德语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "布鲁塞尔欧洲医院", "nameEn": "Clinique du Parc Léopold", "address": "Rue Froissart 38, 1040 Brussels", "phone": "+32-2-287-5111", "languages": ["法语", "荷兰语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "budapest": [
        {"name": "布达佩斯私立医院", "nameEn": "Medicover Hospital Budapest", "address": "Váci út 29-31, 1134 Budapest", "phone": "+36-1-465-3100", "languages": ["匈牙利语", "英语", "德语", "俄语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣约翰医院布达佩斯", "nameEn": "Semmelweis University Hospital Budapest", "address": "Üllői út 78, 1082 Budapest", "phone": "+36-1-666-8000", "languages": ["匈牙利语", "英语", "德语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "saint_petersburg": [
        {"name": "圣彼得堡欧洲诊所", "nameEn": "European Medical Center St. Petersburg", "address": "Suvorovsky Prospekt 60, St. Petersburg", "phone": "+7-812-777-7500", "languages": ["俄语", "英语", "德语", "芬兰语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣彼得堡国际诊所", "nameEn": "Nordmed St. Petersburg", "address": "Simonova St. 14, St. Petersburg", "phone": "+7-812-600-8528", "languages": ["俄语", "英语", "芬兰语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "milan": [
        {"name": "米兰波利克利尼科医院", "nameEn": "Ospedale Policlinico Milan", "address": "Via Francesco Sforza, 35, 20122 Milan", "phone": "+39-02-5503-1", "languages": ["意大利语", "英语", "法语", "西班牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "人文医院米兰", "nameEn": "Humanitas Research Hospital Milan", "address": "Via Alessandro Manzoni 56, Rozzano, Milan", "phone": "+39-02-8224-1", "languages": ["意大利语", "英语", "法语", "德语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    "munich": [
        {"name": "慕尼黑大学医院", "nameEn": "LMU Klinikum Munich", "address": "Marchioninistraße 15, 81377 Munich", "phone": "+49-89-4400-0", "languages": ["德语", "英语", "土耳其语", "俄语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "拜法罗斯医院慕尼黑", "nameEn": "Schön Klinik München Schwabing", "address": "Parzivalstraße 4, 80804 Munich", "phone": "+49-89-36087-0", "languages": ["德语", "英语", "法语"], "services": ["全科", "骨科", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "frankfurt": [
        {"name": "法兰克福大学医院", "nameEn": "Universitätsklinikum Frankfurt", "address": "Theodor-Stern-Kai 7, 60590 Frankfurt", "phone": "+49-69-6301-0", "languages": ["德语", "英语", "土耳其语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "法兰克福卡塔琳娜医院", "nameEn": "Agaplesion Markus Krankenhaus Frankfurt", "address": "Wilhelm-Epstein-Str. 4, 60431 Frankfurt", "phone": "+49-69-9533-0", "languages": ["德语", "英语", "法语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "hamburg": [
        {"name": "汉堡大学医疗中心", "nameEn": "UKE Hamburg-Eppendorf", "address": "Martinistraße 52, 20246 Hamburg", "phone": "+49-40-7410-0", "languages": ["德语", "英语", "土耳其语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "汉堡阿斯克勒庇俄斯医院", "nameEn": "Asklepios Klinik Altona Hamburg", "address": "Paul-Ehrlich-Str. 1, 22763 Hamburg", "phone": "+49-40-181880-0", "languages": ["德语", "英语", "土耳其语", "俄语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "dublin": [
        {"name": "都柏林圣文森特大学医院", "nameEn": "St. Vincent's University Hospital Dublin", "address": "Elm Park, Dublin 4", "phone": "+353-1-221-4000", "languages": ["英语", "爱尔兰语", "法语", "波兰语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "博蒙特医院都柏林", "nameEn": "Beaumont Hospital Dublin", "address": "Beaumont Road, Dublin 9", "phone": "+353-1-809-3000", "languages": ["英语", "爱尔兰语"], "services": ["全科", "急诊", "神经外科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "edinburgh": [
        {"name": "爱丁堡皇家医院", "nameEn": "Royal Infirmary of Edinburgh", "address": "51 Little France Crescent, Edinburgh EH16 4SA", "phone": "+44-131-536-1000", "languages": ["英语", "乌尔都语", "阿拉伯语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "西部综合医院爱丁堡", "nameEn": "Western General Hospital Edinburgh", "address": "Crewe Road South, Edinburgh EH4 2XU", "phone": "+44-131-537-1000", "languages": ["英语", "法语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "manchester": [
        {"name": "曼彻斯特皇家医院", "nameEn": "Manchester Royal Infirmary", "address": "Oxford Rd, Manchester M13 9WL", "phone": "+44-161-276-1234", "languages": ["英语", "阿拉伯语", "乌尔都语", "波兰语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "北曼彻斯特总医院", "nameEn": "North Manchester General Hospital", "address": "Delaunays Rd, Manchester M8 5RB", "phone": "+44-161-624-0420", "languages": ["英语", "乌尔都语", "孟加拉语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "lyon": [
        {"name": "里昂克鲁瓦-鲁斯医院", "nameEn": "Hôpital de la Croix-Rousse Lyon", "address": "103 Grande Rue de la Croix-Rousse, 69004 Lyon", "phone": "+33-4-7207-1780", "languages": ["法语", "英语", "阿拉伯语"], "services": ["全科", "急诊", "妇产"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "里昂诊所医院", "nameEn": "Clinique du Tonkin Lyon", "address": "77 Rue du Tonkin, 69100 Villeurbanne", "phone": "+33-4-7268-3160", "languages": ["法语", "英语"], "services": ["全科", "骨科", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "marseille": [
        {"name": "马赛蒂姆-弗雷医院", "nameEn": "AP-HM Hôpital Timone Marseille", "address": "264 Rue Saint-Pierre, 13385 Marseille", "phone": "+33-4-9138-0000", "languages": ["法语", "英语", "阿拉伯语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "马赛卡耐佛医院", "nameEn": "Clinique Canet Marseille", "address": "20 Rue Alphonse Daudet, 13014 Marseille", "phone": "+33-4-9158-1000", "languages": ["法语", "英语", "阿拉伯语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "nice": [
        {"name": "尼斯大学中心医院", "nameEn": "CHU de Nice", "address": "4 Avenue Reine Victoria, 06003 Nice", "phone": "+33-4-9203-3333", "languages": ["法语", "英语", "意大利语", "阿拉伯语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "圣玛丽诊所尼斯", "nameEn": "Clinique Saint-Marie Nice", "address": "74 Av. de la Lanterne, 06200 Nice", "phone": "+33-4-9324-2424", "languages": ["法语", "英语", "意大利语"], "services": ["全科", "急诊", "妇科"], "english": True, "insurance": "接受国际保险"},
    ],
    "venice": [
        {"name": "威尼斯综合医院", "nameEn": "Ospedale Civile SS. Giovanni e Paolo Venice", "address": "Campo SS. Giovanni e Paolo, 6776 Venice", "phone": "+39-041-529-4111", "languages": ["意大利语", "英语", "德语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "威尼斯梅斯特医院", "nameEn": "Ospedale dell'Angelo Mestre", "address": "Via Paccagnella 11, 30174 Mestre, Venice", "phone": "+39-041-965-7111", "languages": ["意大利语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "florence": [
        {"name": "佛罗伦萨卡雷格医院", "nameEn": "Careggi University Hospital Florence", "address": "Largo Giovanni Alessandro Brambilla 3, 50134 Florence", "phone": "+39-055-794-9494", "languages": ["意大利语", "英语", "法语", "德语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "美容美容整形外科诊所", "nameEn": "Santa Maria Nuova Hospital Florence", "address": "Piazza Santa Maria Nuova 1, 50122 Florence", "phone": "+39-055-693-8111", "languages": ["意大利语", "英语", "法语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    "naples": [
        {"name": "那不勒斯费德里克医院", "nameEn": "Federico II University Hospital Naples", "address": "Via Sergio Pansini 5, 80131 Naples", "phone": "+39-081-746-3111", "languages": ["意大利语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "科多尔多私立医院那不勒斯", "nameEn": "Clinica Mediterranea Naples", "address": "Via Orazio 2, 80122 Naples", "phone": "+39-081-725-0500", "languages": ["意大利语", "英语", "德语"], "services": ["全科", "骨科", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "valencia": [
        {"name": "瓦伦西亚临床医院", "nameEn": "Hospital Clinico Universitario Valencia", "address": "Av. Blasco Ibáñez 17, 46010 Valencia", "phone": "+34-96-197-8000", "languages": ["西班牙语", "英语", "法语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "德意志-阿斯彼利亚医院", "nameEn": "Hospital Quirónsalud Valencia", "address": "Av. del Cid, 96, 46014 Valencia", "phone": "+34-96-394-9400", "languages": ["西班牙语", "英语", "德语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "seville": [
        {"name": "塞维利亚比尔辛马利亚医院", "nameEn": "Hospital Universitario Virgen Macarena", "address": "Av. Doctor Fedriani, 3, 41009 Seville", "phone": "+34-955-00-8000", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "维瑟马私立诊所塞维利亚", "nameEn": "Clinica Los Remedios Seville", "address": "Calle Virgen de los Reyes 7, 41011 Seville", "phone": "+34-954-508-300", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "malaga": [
        {"name": "马拉加卡洛斯哈亚医院", "nameEn": "Hospital Regional Universitario Carlos Haya", "address": "Av. Carlos Haya s/n, 29010 Málaga", "phone": "+34-951-290-000", "languages": ["西班牙语", "英语", "阿拉伯语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "马拉加诊所", "nameEn": "Clinica Quirónsalud Málaga", "address": "Calle Rodríguez Rubí 1, 29010 Málaga", "phone": "+34-952-122-522", "languages": ["西班牙语", "英语", "德语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "porto": [
        {"name": "波尔图圣乔安医院", "nameEn": "Hospital de São João Porto", "address": "Alameda Prof. Hernâni Monteiro, 4200-319 Porto", "phone": "+351-22-551-2100", "languages": ["葡萄牙语", "英语", "西班牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "波尔图卡斯托医院", "nameEn": "Hospital Lusíadas Porto", "address": "Rua de Ato de Deus 1, 4100-020 Porto", "phone": "+351-22-600-8100", "languages": ["葡萄牙语", "英语", "法语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "krakow": [
        {"name": "克拉科夫大学医院", "nameEn": "Szpital Uniwersytecki Kraków", "address": "ul. Macieja Jakubowskiego 2, 30-688 Kraków", "phone": "+48-12-400-8100", "languages": ["波兰语", "英语", "德语", "俄语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "克拉科夫MEDYCYNA诊所", "nameEn": "Centrum Medyczne Scanmed Kraków", "address": "al. Solidarności 36, 31-864 Kraków", "phone": "+48-12-629-8800", "languages": ["波兰语", "英语", "德语"], "services": ["全科", "内科", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "geneva": [
        {"name": "日内瓦大学医院", "nameEn": "HUG - Hôpitaux Universitaires Genève", "address": "Rue Gabrielle-Perret-Gentil 4, 1211 Geneva", "phone": "+41-22-372-3311", "languages": ["法语", "英语", "德语", "意大利语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣安诺私立医院日内瓦", "nameEn": "Clinique Générale-Beaulieu Genève", "address": "Chemin Beau-Soleil 2, 1206 Geneva", "phone": "+41-22-839-5511", "languages": ["法语", "英语", "德语", "西班牙语"], "services": ["全科", "骨科", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "cologne": [
        {"name": "科隆大学医院", "nameEn": "Universitätsklinikum Köln", "address": "Kerpener Str. 62, 50937 Cologne", "phone": "+49-221-478-0", "languages": ["德语", "英语", "土耳其语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受EU及国际保险"},
        {"name": "科隆赫利奥斯医院", "nameEn": "HELIOS Klinikum Köln-Porz", "address": "Urbacher Weg 19, 51149 Cologne", "phone": "+49-2203-566-0", "languages": ["德语", "英语", "土耳其语", "俄语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受EU及国际保险"},
    ],
    # 北美洲剩余
    "miami": [
        {"name": "迈阿密大学医院", "nameEn": "University of Miami Hospital", "address": "1400 NW 12th Ave, Miami, FL 33136", "phone": "+1-305-325-5511", "languages": ["英语", "西班牙语", "海地克里奥尔语", "葡萄牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受大多数保险"},
        {"name": "巴普蒂斯特健康南佛罗里达迈阿密", "nameEn": "Baptist Health South Florida", "address": "8900 N Kendall Dr, Miami, FL 33176", "phone": "+1-786-596-1960", "languages": ["英语", "西班牙语", "葡萄牙语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "boston": [
        {"name": "麻省总医院", "nameEn": "Massachusetts General Hospital", "address": "55 Fruit Street, Boston, MA 02114", "phone": "+1-617-726-2000", "languages": ["英语", "西班牙语", "中文", "葡萄牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "布里格姆女子医院", "nameEn": "Brigham and Women's Hospital Boston", "address": "75 Francis Street, Boston, MA 02115", "phone": "+1-617-732-5500", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    "washington": [
        {"name": "乔治华盛顿大学医院", "nameEn": "George Washington University Hospital", "address": "900 23rd St NW, Washington, DC 20037", "phone": "+1-202-715-4000", "languages": ["英语", "西班牙语", "阿拉伯语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "麦德斯塔医疗中心华盛顿", "nameEn": "MedStar Georgetown University Hospital", "address": "3800 Reservoir Rd NW, Washington, DC 20007", "phone": "+1-202-444-2000", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "神经"], "english": True, "insurance": "接受国际保险"},
    ],
    "las_vegas": [
        {"name": "拉斯维加斯春谷医院", "nameEn": "Spring Valley Hospital Las Vegas", "address": "5400 S Rainbow Blvd, Las Vegas, NV 89118", "phone": "+1-702-853-3000", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受大多数保险"},
        {"name": "凯撒医疗中心拉斯维加斯", "nameEn": "Valley Hospital Medical Center Las Vegas", "address": "620 Shadow Ln, Las Vegas, NV 89106", "phone": "+1-702-388-4000", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "seattle": [
        {"name": "西北太平洋医疗中心西雅图", "nameEn": "Harborview Medical Center Seattle", "address": "325 9th Ave, Seattle, WA 98104", "phone": "+1-206-744-3000", "languages": ["英语", "西班牙语", "中文", "越南语"], "services": ["全科", "急诊", "创伤"], "english": True, "insurance": "接受大多数保险"},
        {"name": "瑞典医疗中心西雅图", "nameEn": "Swedish Medical Center First Hill", "address": "747 Broadway, Seattle, WA 98122", "phone": "+1-206-386-6000", "languages": ["英语", "中文", "越南语", "日语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
    ],
    "denver": [
        {"name": "丹佛健康医疗中心", "nameEn": "Denver Health Medical Center", "address": "777 Bannock St, Denver, CO 80204", "phone": "+1-303-436-6000", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "创伤"], "english": True, "insurance": "接受大多数保险"},
        {"name": "天主教联合医院丹佛", "nameEn": "UCHealth University of Colorado Hospital", "address": "12605 E 16th Ave, Aurora, CO 80045", "phone": "+1-720-848-0000", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
    ],
    "atlanta": [
        {"name": "埃默里大学医院亚特兰大", "nameEn": "Emory University Hospital Atlanta", "address": "1364 Clifton Rd NE, Atlanta, GA 30322", "phone": "+1-404-712-2000", "languages": ["英语", "西班牙语", "中文", "韩语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "格雷迪纪念医院亚特兰大", "nameEn": "Grady Memorial Hospital Atlanta", "address": "80 Jesse Hill Jr Dr SE, Atlanta, GA 30303", "phone": "+1-404-616-1000", "languages": ["英语", "西班牙语", "越南语"], "services": ["全科", "急诊", "创伤"], "english": True, "insurance": "接受大多数保险"},
    ],
    "dallas": [
        {"name": "达拉斯贝勒医学中心", "nameEn": "Baylor University Medical Center Dallas", "address": "3500 Gaston Ave, Dallas, TX 75246", "phone": "+1-214-820-0111", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "UT西南医疗中心达拉斯", "nameEn": "UT Southwestern Medical Center Dallas", "address": "5323 Harry Hines Blvd, Dallas, TX 75390", "phone": "+1-214-648-3111", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受大多数保险"},
    ],
    "houston": [
        {"name": "德克萨斯医学中心休斯顿", "nameEn": "Memorial Hermann Hospital Houston", "address": "6411 Fannin St, Houston, TX 77030", "phone": "+1-713-704-4000", "languages": ["英语", "西班牙语", "越南语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "休斯顿卫理公会医院", "nameEn": "Houston Methodist Hospital", "address": "6565 Fannin St, Houston, TX 77030", "phone": "+1-713-790-3311", "languages": ["英语", "西班牙语", "中文", "越南语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "phoenix": [
        {"name": "凤凰城梅奥诊所", "nameEn": "Mayo Clinic Hospital Phoenix", "address": "5777 E Mayo Blvd, Phoenix, AZ 85054", "phone": "+1-480-515-6296", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "横幅大学医疗中心凤凰城", "nameEn": "Banner University Medical Center Phoenix", "address": "1111 E McDowell Rd, Phoenix, AZ 85006", "phone": "+1-602-839-2000", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受大多数保险"},
    ],
    "portland": [
        {"name": "俄勒冈健康科学大学医院", "nameEn": "OHSU Hospital Portland", "address": "3181 SW Sam Jackson Park Rd, Portland, OR 97239", "phone": "+1-503-494-8311", "languages": ["英语", "西班牙语", "越南语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受大多数保险"},
        {"name": "圣文森特医疗中心波特兰", "nameEn": "Providence St. Vincent Medical Center Portland", "address": "9205 SW Barnes Rd, Portland, OR 97225", "phone": "+1-503-216-1234", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "san_diego": [
        {"name": "加州大学圣地亚哥医学中心", "nameEn": "UC San Diego Medical Center", "address": "200 W Arbor Dr, San Diego, CA 92103", "phone": "+1-619-543-6222", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "夏普科罗纳多医院", "nameEn": "Sharp Coronado Hospital San Diego", "address": "250 Prospect Pl, Coronado, CA 92118", "phone": "+1-619-522-3600", "languages": ["英语", "西班牙语", "中文"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受大多数保险"},
    ],
    "austin": [
        {"name": "奥斯汀圣大卫医院", "nameEn": "St. David's Medical Center Austin", "address": "919 E 32nd St, Austin, TX 78705", "phone": "+1-512-476-7111", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受大多数保险"},
        {"name": "德克萨斯大学医学中心奥斯汀", "nameEn": "Dell Seton Medical Center Austin", "address": "1500 Red River St, Austin, TX 78701", "phone": "+1-512-324-7000", "languages": ["英语", "西班牙语"], "services": ["全科", "急诊", "创伤"], "english": True, "insurance": "接受大多数保险"},
    ],
    "montreal": [
        {"name": "麦吉尔大学医疗中心", "nameEn": "McGill University Health Centre Montreal", "address": "1001 Blvd Décarie, Montréal, QC H4A 3J1", "phone": "+1-514-934-1934", "languages": ["英语", "法语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣贾斯汀大学医学中心", "nameEn": "Hôpital général de Montréal", "address": "1650 Cedar Ave, Montréal, QC H3G 1A4", "phone": "+1-514-934-8000", "languages": ["英语", "法语", "西班牙语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "cancun": [
        {"name": "坎昆阿美医院", "nameEn": "Amerimed Hospital Cancun", "address": "Av. Tulum, Cancún, QROO 77500", "phone": "+52-998-881-3400", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "潜水病"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣何塞医院坎昆", "nameEn": "Hospital San José Cancún", "address": "Av. Yaxchilán 38, Cancún", "phone": "+52-998-884-6133", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    # 拉丁美洲剩余
    "santiago": [
        {"name": "圣地亚哥诊所医院", "nameEn": "Clínica Las Condes Santiago", "address": "Estoril 450, Las Condes, Santiago", "phone": "+56-2-2210-4000", "languages": ["西班牙语", "英语", "法语", "德语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "圣地亚哥德国医院", "nameEn": "Hospital Alemán de Santiago", "address": "Av. Presidente Riesco 6410, Las Condes, Santiago", "phone": "+56-2-2422-4000", "languages": ["西班牙语", "英语", "德语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "lima": [
        {"name": "利马英美诊所", "nameEn": "Clínica Anglo-Americana Lima", "address": "Calle Alfredo Salazar 350, San Isidro, Lima", "phone": "+51-1-616-8900", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "利马好时光诊所", "nameEn": "Clínica San Pablo Lima", "address": "Av. El Polo 531, Santiago de Surco, Lima", "phone": "+51-1-213-9400", "languages": ["西班牙语", "英语", "葡萄牙语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "bogota": [
        {"name": "波哥大圣伊格纳西奥医院", "nameEn": "Hospital Universitario San Ignacio Bogotá", "address": "Carrera 7 No. 40-62, Bogotá", "phone": "+57-1-594-6161", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "波哥大里亚纽医院", "nameEn": "Fundación Santa Fe de Bogotá", "address": "Calle 119 No 7-75, Bogotá", "phone": "+57-1-603-0303", "languages": ["西班牙语", "英语", "法语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "medellin": [
        {"name": "麦德林圣文森特医院", "nameEn": "Hospital San Vicente Fundación Medellín", "address": "Calle 64 No. 51D-154, Medellín", "phone": "+57-4-444-1333", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "创伤"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "麦德林里维拉医院", "nameEn": "Clínica El Rosario Medellín", "address": "Calle 20 No. 83A-100, El Tesoro, Medellín", "phone": "+57-4-891-8000", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
    ],
    "panama_city": [
        {"name": "巴拿马国家癌症研究所", "nameEn": "Hospital Nacional Panama", "address": "Av. Cuba y Calle 38 Este, Panama City", "phone": "+507-207-8100", "languages": ["西班牙语", "英语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受国际保险"},
        {"name": "巴拿马圣费尔南多医院", "nameEn": "Hospital San Fernando Panama", "address": "Via España, Panama City", "phone": "+507-305-6300", "languages": ["西班牙语", "英语", "中文"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    # 非洲剩余
    "casablanca": [
        {"name": "卡萨布兰卡欧洲医院", "nameEn": "Clinique Internationale Casablanca", "address": "50 Bd de Paris, Casablanca", "phone": "+212-522-224-040", "languages": ["阿拉伯语", "法语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "伊本-鲁什德医院", "nameEn": "Ibn Rochd University Hospital Casablanca", "address": "1 Rue des Hôpitaux, Casablanca", "phone": "+212-522-225-214", "languages": ["阿拉伯语", "法语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    "marrakech": [
        {"name": "马拉喀什国际诊所", "nameEn": "Polyclinique du Sud Marrakech", "address": "Avenue Mohammed VI, Marrakech", "phone": "+212-524-447-999", "languages": ["阿拉伯语", "法语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "马拉喀什伊本-托法伊尔医院", "nameEn": "CHU Ibn Tofail Marrakech", "address": "Av. Ibn Sina, Marrakech", "phone": "+212-524-300-000", "languages": ["阿拉伯语", "法语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    "tunis": [
        {"name": "突尼斯卢巴提医院", "nameEn": "Clinique La Grâce Tunis", "address": "Rue de la Liberté, Mutuelleville, Tunis", "phone": "+216-71-849-555", "languages": ["阿拉伯语", "法语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "突尼斯大学医院", "nameEn": "Hôpital Charles-Nicolle Tunis", "address": "Bd du 9 Avril 1938, Tunis 1006", "phone": "+216-71-562-833", "languages": ["阿拉伯语", "法语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    "accra": [
        {"name": "阿克拉信誉医院", "nameEn": "Nyaho Medical Centre Accra", "address": "Airport Residential Area, Accra", "phone": "+233-30-270-1793", "languages": ["英语", "豪萨语", "法语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
        {"name": "37军医院阿克拉", "nameEn": "37 Military Hospital Accra", "address": "Liberation Road, Accra", "phone": "+233-30-277-6111", "languages": ["英语", "豪萨语"], "services": ["全科", "急诊", "外科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    "addis_ababa": [
        {"name": "亚的斯亚贝巴黑狮医院", "nameEn": "Black Lion Hospital Addis Ababa", "address": "Lideta, Addis Ababa", "phone": "+251-11-551-0764", "languages": ["阿姆哈拉语", "英语", "法语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "圣加布里埃尔医院亚的斯亚贝巴", "nameEn": "St. Gabriel General Hospital Addis Ababa", "address": "Kirkos Kifle Ketema, Addis Ababa", "phone": "+251-11-662-0990", "languages": ["阿姆哈拉语", "英语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "lagos": [
        {"name": "拉各斯大学教学医院", "nameEn": "Lagos University Teaching Hospital", "address": "Idi-Araba, Mushin, Lagos", "phone": "+234-1-774-5068", "languages": ["英语", "约鲁巴语", "豪萨语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
        {"name": "拉各斯岛综合医院", "nameEn": "Lagos Island General Hospital", "address": "1 Catholic Mission Street, Lagos Island", "phone": "+234-1-263-0374", "languages": ["英语", "约鲁巴语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受部分国际保险"},
    ],
    # 大洋洲剩余
    "brisbane": [
        {"name": "皇家布里斯班女子医院", "nameEn": "Royal Brisbane and Women's Hospital", "address": "Butterfield St, Herston QLD 4029", "phone": "+61-7-3646-8111", "languages": ["英语", "中文", "广东话", "越南语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "布里斯班圣安德鲁医院", "nameEn": "St Andrew's War Memorial Hospital Brisbane", "address": "457 Wickham Terrace, Brisbane QLD 4000", "phone": "+61-7-3834-4444", "languages": ["英语", "中文"], "services": ["全科", "急诊", "骨科"], "english": True, "insurance": "接受国际保险"},
    ],
    "perth": [
        {"name": "皇家珀斯医院", "nameEn": "Royal Perth Hospital", "address": "Victoria Square, Perth WA 6000", "phone": "+61-8-9224-2244", "languages": ["英语", "中文", "广东话", "马来语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "弗里曼特尔医院珀斯", "nameEn": "Fiona Stanley Hospital Perth", "address": "11 Robin Warren Drive, Murdoch WA 6150", "phone": "+61-8-6152-2222", "languages": ["英语", "中文", "广东话"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
    ],
    "adelaide": [
        {"name": "皇家阿德莱德医院", "nameEn": "Royal Adelaide Hospital", "address": "Port Rd, Adelaide SA 5000", "phone": "+61-8-7074-0000", "languages": ["英语", "中文", "广东话", "越南语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "弗林德斯医学中心阿德莱德", "nameEn": "Flinders Medical Centre Adelaide", "address": "Flinders Drive, Bedford Park SA 5042", "phone": "+61-8-8204-5511", "languages": ["英语", "中文", "希腊语"], "services": ["全科", "急诊", "肿瘤"], "english": True, "insurance": "接受国际保险"},
    ],
    "auckland": [
        {"name": "奥克兰市医院", "nameEn": "Auckland City Hospital", "address": "2 Park Road, Grafton, Auckland 1023", "phone": "+64-9-367-0000", "languages": ["英语", "毛利语", "中文", "萨摩亚语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "北岸医院奥克兰", "nameEn": "North Shore Hospital Auckland", "address": "124 Shakespeare Road, Takapuna, Auckland", "phone": "+64-9-486-8900", "languages": ["英语", "中文", "韩语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "wellington": [
        {"name": "惠灵顿医院", "nameEn": "Wellington Hospital", "address": "Riddiford Street, Wellington 6021", "phone": "+64-4-385-5999", "languages": ["英语", "毛利语", "中文"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "卡皮蒂海岸医院", "nameEn": "Kenepuru Community Hospital Wellington", "address": "Dundas St, Porirua 5022", "phone": "+64-4-237-9100", "languages": ["英语", "毛利语"], "services": ["全科", "急诊", "内科"], "english": True, "insurance": "接受国际保险"},
    ],
    "christchurch": [
        {"name": "基督城医院", "nameEn": "Christchurch Hospital", "address": "2 Riccarton Ave, Christchurch 8011", "phone": "+64-3-364-0640", "languages": ["英语", "中文", "菲律宾语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受国际保险"},
        {"name": "默西医院基督城", "nameEn": "Mercy Hospital Christchurch", "address": "Mountain Road, Christchurch 8014", "phone": "+64-3-364-4160", "languages": ["英语", "中文"], "services": ["全科", "急诊", "妇科"], "english": True, "insurance": "接受国际保险"},
    ],
    # 中东剩余
    "muscat": [
        {"name": "皇家医院马斯喀特", "nameEn": "Royal Hospital Muscat", "address": "Al Khuwair, Muscat, Oman", "phone": "+968-2459-9999", "languages": ["阿拉伯语", "英语", "乌尔都语"], "services": ["全科", "急诊", "心脏"], "english": True, "insurance": "接受国际保险"},
        {"name": "苏丹卡布斯大学医院", "nameEn": "Sultan Qaboos University Hospital Muscat", "address": "Al-Khoud Street, Muscat", "phone": "+968-2414-1111", "languages": ["阿拉伯语", "英语"], "services": ["全科", "急诊", "专科"], "english": True, "insurance": "接受部分国际保险"},
    ],
}

fixed = 0
for city_id, hospitals in EXTRA_HOSPITALS.items():
    if city_id in data:
        existing = data[city_id].get('hospitals', [])
        if not existing or (len(existing) == 1 and existing[0].get('name') in ['城市中心医院', f"{data[city_id].get('name','?')}国际医院", f"{data[city_id].get('name','?')}大学医院", f"{data[city_id].get('name','?')}纪念医院", f"{data[city_id].get('name','?')}中央医院"]):
            data[city_id]['hospitals'] = hospitals
            fixed += 1

print(f"补充医院数据: {fixed} 个城市")

# 最终统计
two_plus = sum(1 for c in data.values() if c.get('hospitals') and len(c['hospitals']) >= 2)
print(f"2家以上医院的城市: {two_plus}/{len(data)}")

# 保存
with open('data_enhanced.js', 'r', encoding='utf-8') as f:
    content = f.read()
match = re.search(r'var CITY_DATABASE = ({[\s\S]*?})\s*;', content)
new_json = json.dumps(data, ensure_ascii=False, indent=2)
new_content = content[:match.start(1)] + new_json + content[match.end(1):]
with open('data_enhanced.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("✅ 医院数据补充完成！")
