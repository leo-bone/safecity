// 为所有城市补充完整emergency数据
const fs = require('fs');

// 读取并解析data.js
const dataContent = fs.readFileSync('./data.js', 'utf8');
// 提取JSON部分
const jsonMatch = dataContent.match(/var CITY_DATABASE = ({[\s\S]*?});/);
const cityDb = JSON.parse(jsonMatch[1]);

const safetyColorsMatch = dataContent.match(/var SAFETY_COLORS = ({[\s\S]*?});/);
const safetyColors = JSON.parse(safetyColorsMatch[1]);

// 完整的紧急联系数据模板（按国家/地区）
const emergencyTemplates = {
  '日本': {
    touristPolice: "03-5321-7837",
    touristHotline: "050-3816-1857",
    embassies: {
      "中国驻日本大使馆": "03-3403-3388",
      "中国驻东京大使馆": "03-3224-5111",
      "中国驻大阪总领事馆": "06-6445-9481",
      "中国驻横滨总领事馆": "045-641-3488"
    },
    hospitals: [
      { name: "东京大学医学部附属医院", phone: "03-5800-8630", address: "东京都文京本郷7-3-1" },
      { name: "圣路加国际医院", phone: "03-3541-5151", address: "东京都中央区明石町9-1" }
    ],
    apps: ["Google翻译", "乘换案内", "Japan Taxi", "Yahoo!防灾速报"],
    selfDefense: ["保持低调，避免大声喧哗", "遵守当地法律法规", "保管好个人物品"]
  },
  '新加坡': {
    touristPolice: "1800-736-2000",
    touristHotline: "1800-736-2000",
    embassies: {
      "中国驻新加坡大使馆": "65-6471-2117",
      "中国驻新加坡大使馆领事部": "65-6475-0192"
    },
    hospitals: [
      { name: "新加坡中央医院", phone: "65-6222-3322", address: "Outram Rd, Singapore 169608" },
      { name: "国立大学医院", phone: "65-6779-5555", address: "5 Lower Kent Ridge Rd, Singapore 119074" }
    ],
    apps: ["SingPass", "Google Maps", "Grab", "MyTransport SG"],
    selfDefense: ["严格遵守法律", "避免在公共场所吸烟", "保持环境整洁"]
  },
  '美国': {
    touristPolice: "911",
    touristHotline: "1-888-407-4747",
    embassies: {
      "中国驻美国大使馆": "1-202-495-2266",
      "中国驻纽约总领事馆": "1-212-244-9392",
      "中国驻洛杉矶总领事馆": "1-213-807-8088",
      "中国驻旧金山总领事馆": "1-415-852-5900"
    },
    hospitals: [
      { name: "UCLA医学中心", phone: "1-310-825-9111", address: "757 Westwood Plaza, Los Angeles, CA 90095" },
      { name: "梅奥诊所", phone: "1-507-284-2511", address: "200 1st St SW, Rochester, MN 55905" }
    ],
    apps: ["Google Maps", "Uber", "Lyft", "First Aid by Red Cross"],
    selfDefense: ["避免夜间独自外出", "贵重物品随身保管", "了解当地紧急求助方式"]
  },
  '英国': {
    touristPolice: "999",
    touristHotline: "44-20-7946-0958",
    embassies: {
      "中国驻英国大使馆": "44-20-7222-9452",
      "中国驻曼彻斯特总领事馆": "44-161-224-1972",
      "中国驻爱丁堡总领事馆": "44-131-337-1206"
    },
    hospitals: [
      { name: "皇家伦敦医院", phone: "44-20-7377-7000", address: "Newark St, London E1 2AA" },
      { name: "牛津大学医院", phone: "44-1865-741-111", address: "Headington, Oxford OX3 9DU" }
    ],
    apps: ["Citymapper", "Google Maps", "NHS App", "Uber"],
    selfDefense: ["注意保管财物", "防范扒窃", "夜间避免偏僻地区"]
  },
  '澳大利亚': {
    touristPolice: "000",
    touristHotline: "1300-135-391",
    embassies: {
      "中国驻澳大利亚大使馆": "61-2-6228-3999",
      "中国驻悉尼总领事馆": "61-2-8596-8200",
      "中国驻墨尔本总领事馆": "61-3-9822-0605"
    },
    hospitals: [
      { name: "皇家墨尔本医院", phone: "61-3-9342-7000", address: "300 Grattan St, Melbourne VIC 3050" },
      { name: "悉尼皇家阿尔弗雷德医院", phone: "61-2-9510-6111", address: "Missenden Rd, Camperdown NSW 2050" }
    ],
    apps: ["Google Maps", "Uber", "HotDoc", "Emergency+"],
    selfDefense: ["注意防晒", "防范野生动物", "遵守水上安全规定"]
  },
  '法国': {
    touristPolice: "17",
    touristHotline: "33-1-42-96-02-47",
    embassies: {
      "中国驻法国大使馆": "33-1-4952-2100",
      "中国驻马赛总领事馆": "33-4-9132-3100",
      "中国驻斯特拉斯堡总领事馆": "33-3-8875-3285"
    },
    hospitals: [
      { name: "皮提耶-沙佩尔医院", phone: "33-1-42-17-60-00", address: "47-83 Bd de l'Hôpital, 75013 Paris" },
      { name: "图卢兹大学医院", phone: "33-5-61-77-21-21", address: "24 Chemin de Pourtalet, 31000 Toulouse" }
    ],
    apps: ["Google Maps", "Citymapper", "RATP", "Doctolib"],
    selfDefense: ["防范扒窃", "注意个人物品安全", "避免在敏感区域拍照"]
  },
  '德国': {
    touristPolice: "110",
    "touristHotline": "49-30-187-1174",
    embassies: {
      "中国驻德国大使馆": "49-30-27588-0",
      "中国驻汉堡总领事馆": "40-4148-5230",
      "中国驻慕尼黑总领事馆": "89-1730-1615"
    },
    hospitals: [
      { name: "夏里特医院", phone: "49-30-450-50", address: "Charitéplatz 1, 10117 Berlin" },
      { name: "慕尼黑大学医院", phone: "49-89-4400-0", address: "Marchioninistraße 15, 81377 München" }
    ],
    apps: ["Google Maps", "DB Navigator", "BVG", "Taxi"],
    selfDefense: ["注意财物安全", "遵守交通规则", "防范新型电信诈骗"]
  },
  '韩国': {
    touristPolice: "1330",
    touristHotline: "1330",
    embassies: {
      "中国驻韩国大使馆": "82-2-738-1038",
      "中国驻釜山总领事馆": "82-51-463-0611",
      "中国驻济州总领事馆": "64-750-7520"
    },
    hospitals: [
      { name: "首尔大学医院", phone: "82-2-2072-2114", address: "首尔市钟路区世宗大路101号" },
      { name: "三星首尔医院", phone: "82-2-3410-2114", address: "首尔市江南区逸院洞516号" }
    ],
    apps: ["KakaoMap", "Naver地图", "Uber", "Kakao T"],
    selfDefense: ["尊重当地文化", "避免在公共场所吸烟", "遵守垃圾分类规定"]
  },
  '泰国': {
    touristPolice: "1155",
    touristHotline: "1678",
    embassies: {
      "中国驻泰国大使馆": "66-2-245-7044",
      "中国驻清迈总领事馆": "66-53-280-380",
      "中国驻宋卡总领事馆": "74-311-114"
    },
    hospitals: [
      { name: "清迈大学附属医院", phone: "66-53-945-000", address: "清迈市素帖路110号" },
      { name: "曼谷医院", phone: "66-2-310-3000", address: "曼谷素坤逸路53号" }
    ],
    apps: ["Google Maps", "Grab", "Line", "Google翻译"],
    selfDefense: ["注意交通安全", "保管好护照", "防范低价旅游陷阱"]
  },
  '马来西亚': {
    touristPolice: "999",
    touristHotline: "1300-88-5050",
    embassies: {
      "中国驻马来西亚大使馆": "60-3-2164-5301",
      "中国驻古晋总领事馆": "60-82-417-065"
    },
    hospitals: [
      { name: "马来亚大学医学中心", phone: "60-3-7949-3222", address: "Jalan Professor Dirman Hashim, Kuala Lumpur" },
      { name: "吉隆坡医院", phone: "60-3-2615-5522", address: "Jalan Pahang, Kuala Lumpur" }
    ],
    apps: ["Google Maps", "Grab", "Moovit", "Waze"],
    selfDefense: ["注意个人财物安全", "防范蚊虫叮咬", "遵守清真寺着装规定"]
  },
  '意大利': {
    touristPolice: "113",
    touristHotline: "39-06-4676-91",
    embassies: {
      "中国驻意大利大使馆": "39-06-841-3461",
      "中国驻米兰总领事馆": "39-02-569-4106",
      "中国驻佛罗伦萨总领事馆": "39-055-505-8209"
    },
    hospitals: [
      { name: "罗马Policlinico医院", phone: "39-06-499-01", address: "Viale del Policlinico 155, Roma" },
      { name: "米兰比可卡大学医院", phone: "39-02-6444-01", address: "Via Pergolesi 33, Milano" }
    ],
    apps: ["Google Maps", "ATAC Roma", "ATM Milano", "TripAdvisor"],
    selfDefense: ["防范扒窃", "注意个人物品", "避免在火车站附近换汇"]
  },
  '西班牙': {
    touristPolice: "091",
    touristHotline: "902-102-112",
    embassies: {
      "中国驻西班牙大使馆": "34-91-519-4242",
      "中国驻巴塞罗那总领事馆": "93-488-0930"
    },
    hospitals: [
      { name: "巴塞罗那医院", phone: "34-93-227-1000", address: "Villarroel 170, Barcelona" },
      { name: "马德里普拉多医院", phone: "34-91-550-4000", address: "Paseo de la Castellana 84, Madrid" }
    ],
    apps: ["Google Maps", "TMB", "EMT Madrid", "TripAdvisor"],
    selfDefense: ["防范扒窃", "海滩注意财物安全", "避免夜间单独行动"]
  },
  '加拿大': {
    touristPolice: "911",
    touristHotline: "1-613-944-4440",
    embassies: {
      "中国驻加拿大大使馆": "1-613-789-3434",
      "中国驻多伦多总领事馆": "1-416-964-7260",
      "中国驻温哥华总领事馆": "1-604-734-7492"
    },
    hospitals: [
      { name: "多伦多综合医院", phone: "1-416-340-3111", address: "200 Elizabeth St, Toronto" },
      { name: "温哥华综合医院", phone: "1-604-875-4111", address: "899 W 12th Ave, Vancouver" }
    ],
    apps: ["Google Maps", "Transit", "Uber", "First Aid"],
    selfDefense: ["注意极端天气", "防范野生动物", "冬季注意防滑"]
  },
  '新西兰': {
    touristPolice: "111",
    touristHotline: "0800-556-556",
    embassies: {
      "中国驻新西兰大使馆": "64-4-473-3514",
      "中国驻奥克兰总领事馆": "64-9-526-5688"
    },
    hospitals: [
      { name: "奥克兰Middlemore医院", phone: "64-9-276-0044", address: "Hospital Rd, Auckland" },
      { name: "惠灵顿医院", phone: "64-4-806-0800", address: "Karori Rd, Wellington" }
    ],
    apps: ["Google Maps", "Uber", "AT", "Emergency App"],
    selfDefense: ["注意防晒", "防范紫外线辐射", "尊重自然环境保护"]
  },
  '荷兰': {
    touristPolice: "112",
    touristHotline: "31-20-752-7888",
    embassies: {
      "中国驻荷兰大使馆": "31-70-306-5100",
      "中国驻阿姆斯特丹总领事馆": "31-20-622-8089"
    },
    hospitals: [
      { name: "阿姆斯特丹UMC", phone: "31-20-566-9111", address: "Meibergdreef 9, Amsterdam" },
      { name: "鹿特丹医院", phone: "31-10-404-4000", address: "Dr. Molewaterplant 40, Rotterdam" }
    ],
    apps: ["Google Maps", "9292", "NS", "Uber"],
    selfDefense: ["自行车出行注意安全", "防范盗窃", "遵守公共秩序"]
  },
  '瑞士': {
    touristPolice: "117",
    touristHotline: "41-44-113-100",
    embassies: {
      "中国驻瑞士大使馆": "41-31-351-1692",
      "中国驻苏黎世总领事馆": "41-44-209-1500"
    },
    hospitals: [
      { name: "苏黎世大学医院", phone: "41-44-255-1111", address: "Rämistrasse 100, Zürich" },
      { name: "日内瓦大学医院", phone: "41-22-372-3311", address: "Rue Gabrielle-Perret-Gentil 4, Genève" }
    ],
    apps: ["Google Maps", "SBB Mobile", "Swisscom", "PostBus"],
    selfDefense: ["注意山区安全", "保管好个人财物", "遵守交通规则"]
  },
  '瑞典': {
    touristPolice: "112",
    touristHotline: "46-8-783-4900",
    embassies: {
      "中国驻瑞典大使馆": "46-8-579-364-29",
      "中国驻哥德堡总领事馆": "46-31-840-609"
    },
    hospitals: [
      { name: "卡罗林斯卡医院", phone: "46-8-517-70000", address: "Solna, Stockholm" },
      { name: "萨尔格伦斯卡医院", phone: "46-31-342-1000", address: "Göteborg" }
    ],
    apps: ["Google Maps", "SL", "Uber", "Karta"],
    selfDefense: ["注意极昼极夜", "冬季注意防寒", "尊重当地文化"]
  },
  '挪威': {
    touristPolice: "112",
    touristHotline: "47-23-10-66-00",
    embassies: {
      "中国驻挪威大使馆": "47-22-56-38-65",
      "中国驻卑尔根总领事馆": "47-55-54-32-50"
    },
    hospitals: [
      { name: "奥斯陆大学医院", phone: "47-22-93-40-00", address: "Oslo" },
      { name: "卑尔根大学医院", phone: "47-55-97-50-00", address: "Bergen" }
    ],
    apps: ["Google Maps", "Ruter", "Uber", "Emergency"],
    selfDefense: ["注意极光旅游安全", "冬季注意防寒", "防范峡湾坠落风险"]
  },
  '丹麦': {
    touristPolice: "112",
    touristHotline: "45-33-14-88-70",
    embassies: {
      "中国驻丹麦大使馆": "45-39-42-92-16"
    },
    hospitals: [
      { name: "哥本哈根大学医院", phone: "45-35-32-45-45", address: "Blegdamsvej 9, Copenhagen" },
      { name: "欧登塞大学医院", phone: "45-65-41-00-00", address: "Odense" }
    ],
    apps: ["Google Maps", "Rejseplanen", "Uber", "Copenhagen"],
    selfDefense: ["注意自行车安全", "保管好个人物品", "遵守交通规则"]
  },
  '印度': {
    touristPolice: "100",
    touristHotline: "91-11-2338-1234",
    embassies: {
      "中国驻印度大使馆": "91-11-2611-2338",
      "中国驻孟买总领事馆": "91-22-6652-1100",
      "中国驻加尔各答总领事馆": "91-33-247-0331"
    },
    hospitals: [
      { name: "全印度医学科学研究所", phone: "91-11-2659-2100", address: "New Delhi" },
      { name: "孟买Kokilaben医院", phone: "91-22-4269-6969", address: "Mumbai" }
    ],
    apps: ["Google Maps", "Ola", "Uber", "Google翻译"],
    selfDefense: ["注意饮食卫生", "防范热浪", "保管好护照"]
  },
  '巴西': {
    touristPolice: "190",
    touristHotline: "55-61-3823-8484",
    embassies: {
      "中国驻巴西大使馆": "55-61-3346-1700",
      "中国驻圣保罗总领事馆": "55-11-3031-0505",
      "中国驻里约热内卢总领事馆": "55-21-3823-0700"
    },
    hospitals: [
      { name: "圣保罗大学医院", phone: "55-11-3061-7000", address: "São Paulo" },
      { name: "里约州立医院", phone: "55-21-2333-4000", address: "Rio de Janeiro" }
    ],
    apps: ["Google Maps", "99 App", "Uber", "Waze"],
    selfDefense: ["注意人身安全", "避免前往贫民窟", "防范抢劫"]
  },
  '墨西哥': {
    touristPolice: "911",
    touristHotline: "55-8854-0080",
    embassies: {
      "中国驻墨西哥大使馆": "52-55-5281-7000",
      "中国驻蒂华纳总领事馆": "52-664-622-3205"
    },
    hospitals: [
      { name: "墨西哥城医院", phone: "52-55-5483-1700", address: "Ciudad de México" },
      { name: "坎昆医院", phone: "52-998-887-9900", address: "Cancún" }
    ],
    apps: ["Google Maps", "Uber", "DiDi", "Waze"],
    selfDefense: ["注意财产安全", "避免夜间单独外出", "防范毒品相关风险"]
  },
  '俄罗斯': {
    touristPolice: "102",
    touristHotline: "7-495-938-2141",
    embassies: {
      "中国驻俄罗斯大使馆": "7-495-938-2005",
      "中国驻圣彼得堡总领事馆": "7-812-714-6230"
    },
    hospitals: [
      { name: "莫斯科第一医院", phone: "7-495-636-1111", address: "Moscow" },
      { name: "圣彼得堡医院", phone: "7-812-274-4401", address: "St. Petersburg" }
    ],
    apps: ["Google Maps", "Yandex Maps", "2GIS", "Uber"],
    selfDefense: ["注意人身安全", "防范小偷", "冬季注意防寒"]
  },
  '南非': {
    touristPolice: "10111",
    touristHotline: "27-12-431-4000",
    embassies: {
      "中国驻南非大使馆": "27-12-342-9531",
      "中国驻约翰内斯堡总领事馆": "27-11-784-8011",
      "中国驻开普敦总领事馆": "21-674-0582"
    },
    hospitals: [
      { name: "约翰内斯堡医院", phone: "27-11-488-3000", address: "Johannesburg" },
      { name: "开普敦医院", phone: "27-21-404-9111", address: "Cape Town" }
    ],
    apps: ["Google Maps", "Uber", "Bolt", "Waze"],
    selfDefense: ["注意人身安全", "避免夜间独自外出", "贵重物品保管好"]
  },
  '埃及': {
    touristPolice: "122",
    touristHotline: "20-2-2348-7099",
    embassies: {
      "中国驻埃及大使馆": "20-2-2736-1242",
      "中国驻亚历山大总领事馆": "20-3-5484-0745"
    },
    hospitals: [
      { name: "开罗大学医院", phone: "20-2-2364-4400", address: "Cairo" },
      { name: "亚历山大大学医院", phone: "20-3-481-2200", address: "Alexandria" }
    ],
    apps: ["Google Maps", "Careem", "Ousta", "Google翻译"],
    selfDefense: ["注意防晒", "防范沙尘暴", "尊重当地宗教习俗"]
  },
  '土耳其': {
    touristPolice: "155",
    touristHotline: "90-212-463-3000",
    embassies: {
      "中国驻土耳其大使馆": "90-312-436-0628",
      "中国驻伊斯坦布尔总领事馆": "90-212-299-2188"
    },
    hospitals: [
      { name: "伊斯坦布尔大学医院", phone: "90-212-414-2000", address: "Istanbul" },
      { name: "安卡拉大学医院", phone: "90-312-508-2000", address: "Ankara" }
    ],
    apps: ["Google Maps", "BiTaksi", "Uber", "Marmara"],
    selfDefense: ["注意签证规定", "防范货币兑换骗局", "尊重当地文化"]
  },
  '阿联酋': {
    touristPolice: "999",
    touristHotline: "971-4-708-1111",
    embassies: {
      "中国驻阿联酋大使馆": "971-2-443-4276",
      "中国驻迪拜总领事馆": "971-4-394-4733"
    },
    hospitals: [
      { name: "迪拜医院", phone: "971-4-311-1111", address: "Dubai" },
      { name: "阿布扎比医院", phone: "971-2-633-3333", address: "Abu Dhabi" }
    ],
    apps: ["Google Maps", "Careem", "Uber", "Dubai Metro"],
    selfDefense: ["遵守当地法律", "注意斋月期间规定", "尊重当地文化"]
  },
  'default': {
    touristPolice: "911",
    touristHotline: "12345",
    embassies: {},
    hospitals: [],
    apps: ["Google Maps", "Google翻译"],
    selfDefense: ["保管好个人物品", "了解当地紧急电话", "尊重当地文化习俗"]
  }
};

// 根据国家匹配模板
function getEmergencyTemplate(country) {
  // 尝试精确匹配
  if (emergencyTemplates[country]) {
    return emergencyTemplates[country];
  }
  // 尝试模糊匹配
  const countryLower = country.toLowerCase();
  for (const [key, template] of Object.entries(emergencyTemplates)) {
    if (countryLower.includes(key.toLowerCase()) || key.includes(country)) {
      return template;
    }
  }
  return emergencyTemplates['default'];
}

// 为每个城市补充完整emergency数据
for (const cityId in cityDb) {
  const city = cityDb[cityId];
  const country = city.country || '';
  const template = getEmergencyTemplate(country);
  
  // 合并紧急联系数据（保留现有的，补充缺失的）
  city.emergency = {
    ...city.emergency,
    touristPolice: city.emergency?.touristPolice || template.touristPolice,
    touristHotline: city.emergency?.touristHotline || template.touristHotline,
    embassies: city.emergency?.embassies || template.embassies,
    hospitals: city.emergency?.hospitals || template.hospitals,
    apps: city.emergency?.apps || template.apps,
    selfDefense: city.emergency?.selfDefense || template.selfDefense
  };
}

console.log('完成！共更新 ' + Object.keys(cityDb).length + ' 个城市');

fs.writeFileSync('./data.js', 'var SAFETY_COLORS = ' + JSON.stringify(safetyColors, null, 2) + ';\n\nvar CITY_DATABASE = ' + JSON.stringify(cityDb, null, 2) + ';');
console.log('已写入 data.js');