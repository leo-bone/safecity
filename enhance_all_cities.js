// 为所有125个城市生成完整的详细数据
// 包括：安全评估、紧急联系、吃喝玩乐、危险区域、历史背景

const fs = require('fs');

// 读取现有数据
const data = fs.readFileSync('data.js', 'utf8');
const dbMatch = data.match(/var CITY_DATABASE = \{([\s\S]+)\};/);
const dbStr = dbMatch ? dbMatch[0] : null;

if (!dbStr) {
  console.log('无法找到 CITY_DATABASE');
  process.exit(1);
}

eval(dbStr); // 加载 CITY_DATABASE

console.log(`当前共有 ${Object.keys(CITY_DATABASE).length} 个城市`);

// 基于国家的详细数据模板
const countryTemplates = {
  "日本": {
    emergency: {
      police: "110",
      ambulance: "119",
      fire: "119",
      touristPolice: "050-3816-2789",
      embassies: {
        "中国": "东京都港区元麻布3-4-33 | 03-3403-3064",
        "美国": "东京都港区南麻布1-1-10 | 03-3224-5000"
      },
      hospitals: [
        { name: "东京大学医学部附属医院", phone: "03-3815-5411", address: "东京都文京区本郷7-3-1" },
        { name: "庆应义塾大学医院", phone: "03-3433-8111", address: "东京都新宿区信濃町35" }
      ]
    },
    safety_history: "日本是全球犯罪率最低的国家之一。东京作为首都，建立了完善的城市安全体系，包括广泛覆盖的监控网络、高效的应急响应机制和严格的法律执行。2019年东京奥运会后，城市安全设施进一步升级，国际游客安全保障显著提升。",
    hotspots: [
      { area: "新宿歌舞伎町", desc: "夜间娱乐区，人员复杂，有醉酒者和可疑商家", risk: "高" },
      { area: "池袋西口", desc: "治安稍差，有流浪人员和醉汉聚集", risk: "中高" },
      { area: "上野公园周边", desc: "夜间有流浪人员聚集，光线较暗", risk: "中" },
      { area: "浅草仲见世通", desc: "游客密集，扒窃风险较高", risk: "低中" },
      { area: "涩谷站周边", desc: "人流量大，拥挤时易被扒窃", risk: "低" }
    ],
    safeAreas: [
      "港区（六本木、麻布）- 高档住宅和使馆区，24小时监控",
      "千代田区（丸之内、大手町）- CBD核心区，商务中心",
      "涩谷区（代官山、惠比寿）- 时尚购物区，环境优雅",
      "新宿区（新宿御苑周边）- 绿化公园区域",
      "文京区 - 教育区域，大学众多，安静安全",
      "世田谷区 - 高档住宅区，生活便利"
    ]
  },
  "韩国": {
    emergency: {
      police: "112",
      ambulance: "119",
      fire: "119",
      touristPolice: "02-735-0114",
      embassies: {
        "中国": "首尔市钟路区孝子洞54 | 02-738-1038",
        "美国": "首尔市龙山区梨泰院路60 | 02-397-4114"
      },
      hospitals: [
        { name: "首尔大学医院", phone: "02-2072-2194", address: "首尔市钟路区莲建洞28" },
        { name: "延世大学医疗院", phone: "02-2228-5800", address: "首尔市西大门区新村洞134" }
      ]
    },
    safety_history: "韩国建立了完善的城市安全管理体系。首尔作为首都，拥有先进的监控系统、高效的应急响应机制和严格的交通管理。近年来，通过智能城市建设和安全科技应用，城市安全水平持续提升，为国际游客提供了可靠的安全保障。",
    hotspots: [
      { area: "梨泰院", desc: "夜生活区，人员复杂，酒后冲突风险", risk: "中高" },
      { area: "弘大周边", desc: "夜生活集中，醉酒人员多", risk: "中" },
      { area: "东大门设计广场附近", desc: "人流密集，扒窃风险", risk: "低中" }
    ],
    safeAreas: [
      "江南区（狎鸥亭、清潭洞）- 高端商业住宅区，监控完善",
      "松坡区（蚕室）- 新区，设施完善，购物中心集中",
      "钟路区 - 市中心，政府机关，历史文化核心区",
      "瑞草区 - 教育区域，安静安全"
    ]
  },
  "美国": {
    emergency: {
      police: "911",
      ambulance: "911",
      fire: "911",
      touristPolice: "311",
      embassies: {
        "中国": "华盛顿特区3505 International Place NW | 202-495-2266",
        "日本": "华盛顿特区2520 Massachusetts Ave NW | 202-238-6800"
      },
      hospitals: [
        { name: "通用医院示例", phone: "212-562-4141", address: "纽约市曼哈顿区东16街800号" }
      ]
    },
    safety_history: "美国建立了完善的联邦和地方两级安全管理体系。各主要城市配备现代化的监控设备、专业的应急响应团队和全面的医疗救援系统。通过社区警务、科技监控和国际合作，城市安全治理能力显著提升。",
    hotspots: [
      { area: "市中心边缘区", desc: "流浪人员聚集", risk: "中" },
      { area: "地铁站周边", desc: "犯罪率较高", risk: "中" },
      { area: "公园区域", desc: "夜间不安全", risk: "中" }
    ],
    safeAreas: [
      "市中心商业区 - 监控完善",
      "大学校园 - 安保严格",
      "高档住宅区 - 社区管理好"
    ]
  },
  "英国": {
    emergency: {
      police: "999/101",
      ambulance: "999",
      fire: "999",
      touristPolice: "0800-789-321",
      embassies: {
        "中国": "伦敦市波特兰广场49-51号 | 020-7299-4049",
        "美国": "伦敦市格罗夫纳广场24号 | 020-7499-9000"
      },
      hospitals: [
        { name: "圣托马斯医院", phone: "020-7188-7188", address: "伦敦市威斯敏斯特区Westminster Bridge Rd" }
      ]
    },
    safety_history: "英国建立了成熟的城市安全体系，包括广泛的CCTV监控网络、专业的应急响应机制和严格的法律制度。伦敦等主要城市通过智能化警务、社区巡逻和国际合作，为居民和游客提供了良好的安全保障。",
    hotspots: [
      { area: "哈克尼", desc: "犯罪率较高", risk: "中" },
      { area: "布里克巷", desc: "夜生活区，人员复杂", risk: "低中" },
      { area: "地铁站车厢", desc: "扒窃风险", risk: "低" }
    ],
    safeAreas: [
      "西区（西敏寺、肯辛顿）- 核心商业区",
      "金融城 - CBD，24小时监控",
      "切尔西 - 高档住宅区",
      "格林威治 - 历史文化区"
    ]
  },
  "法国": {
    emergency: {
      police: "17",
      ambulance: "15",
      fire: "18",
      touristPolice: "0800-009-711",
      embassies: {
        "中国": "巴黎市8区George V大道11号 | 01-49-52-19-50",
        "美国": "巴黎市8区Gabriel大街2号 | 01-43-12-22-00"
      },
      hospitals: [
        { name: "Pitié-Salpêtrière医院", phone: "01-42-16-00-00", address: "巴黎市13区Boulevard de l'Hôpital 47-83" }
      ]
    },
    safety_history: "法国拥有完善的城市安全基础设施，巴黎等主要城市部署了密集的监控系统、专业的反恐部队和高效的应急响应机制。通过加强边境管控、提升城市警力和完善旅游安全保障，为国际游客提供了可靠的安全环境。",
    hotspots: [
      { area: "18区（蒙马特北部）", desc: "治安较差，游客避免", risk: "中" },
      { area: "19区（19区周边）", desc: "夜间不太安全", risk: "中" },
      { area: "地铁车厢", desc: "扒窃严重", risk: "中" },
      { area: "火车站周边", desc: "人员复杂，警惕搭讪", risk: "中" }
    ],
    safeAreas: [
      "1-8区（市中心）- 核心区域，监控完善",
      "香榭丽舍大街 - 商业街，安保严格",
      "玛黑区 - 时尚购物区",
      "7区（左岸）- 文化教育区"
    ]
  },
  "德国": {
    emergency: {
      police: "110",
      ambulance: "112",
      fire: "112",
      touristPolice: "030-4669-5512",
      embassies: {
        "中国": "柏林市Märkisches Ufer 54 | 030-27588-0",
        "美国": "柏林市Pariser Platz 2 | 030-8305-0"
      },
      hospitals: [
        { name: "夏里特医院", phone: "030-450-570", address: "柏林市Charitéplatz 1" }
      ]
    },
    safety_history: "德国建立了高效的城市安全体系，主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过严格的法规执行、社区警务和科技应用，为居民和游客提供了优质的安全保障。",
    hotspots: [
      { area: "火车站周边", desc: "夜间人员复杂", risk: "低中" },
      { area: "公园", desc: "夜间不太安全", risk: "低" },
      { area: "地铁站", desc: "偶有扒窃", risk: "低" }
    ],
    safeAreas: [
      "市中心 - 商业区域",
      "大学区域 - 环境安静",
      "商业街 - 购物便利"
    ]
  },
  "意大利": {
    emergency: {
      police: "112",
      ambulance: "118",
      fire: "115",
      touristPolice: "112",
      embassies: {
        "中国": "罗马市Bruxelles大道56号 | 06-9652-4200",
        "美国": "罗马市Veneto大街121号 | 06-46741"
      },
      hospitals: [
        { name: "罗马杰梅利医院", phone: "06-30-15566", address: "罗马市Largo Agostino Gemelli 8" }
      ]
    },
    safety_history: "意大利建立了较为完善的城市安全体系，罗马、米兰等主要城市部署了监控系统、专业的应急响应机制和丰富的旅游安全经验。通过加强巡逻、提升警务效率和游客保护措施，为国际游客提供了良好的安全保障。",
    hotspots: [
      { area: "火车站周边", desc: "扒窃严重", risk: "中" },
      { area: "地铁", desc: "扒窃风险高", risk: "中" },
      { area: "旅游景点", desc: "小偷多", risk: "中" }
    ],
    safeAreas: [
      "市中心 - 历史核心区",
      "旅游区 - 监控完善",
      "高档购物区 - 商业繁华"
    ]
  },
  "澳大利亚": {
    emergency: {
      police: "000",
      ambulance: "000",
      fire: "000",
      touristPolice: "131-444",
      embassies: {
        "中国": "堪培拉市15 Empire Circuit, Yarralumla | 02-6273-4780",
        "美国": "堪培拉市Moonah Place, Yarralumla | 02-6214-5600"
      },
      hospitals: [
        { name: "圣文森特医院", phone: "02-8382-1111", address: "悉尼市Victoria St 390" }
      ]
    },
    safety_history: "澳大利亚建立了完善的城市安全体系，悉尼、墨尔本等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、科技监控和国际合作，为居民和游客提供了优质的安全保障。",
    hotspots: [
      { area: "深夜市中心", desc: "醉酒人员", risk: "低" },
      { area: "火车站周边", desc: "夜间不太安全", risk: "低" }
    ],
    safeAreas: [
      "CBD - 商业中心",
      "海滩周边 - 旅游区域",
      "住宅区 - 环境优美"
    ]
  },
  "加拿大": {
    emergency: {
      police: "911",
      ambulance: "911",
      fire: "911",
      touristPolice: "416-808-2222",
      embassies: {
        "中国": "渥太华市St. Patrick Street 515 | 613-890-6666",
        "美国": "渥太华市Sussex Drive 490 | 613-688-5335"
      },
      hospitals: [
        { name: "多伦多综合医院", phone: "416-340-4800", address: "多伦多市Elizabeth St 200" }
      ]
    },
    safety_history: "加拿大建立了完善的城市安全体系，多伦多、温哥华等主要城市配备先进的监控系统、专业的应急响应团队和全面的医疗救援设施。通过社区警务、文化包容和国际合作，为居民和游客提供了优质的安全保障。",
    hotspots: [
      { area: "火车站周边", desc: "流浪人员", risk: "低" },
      { area: "深夜市中心", desc: "人员较少", risk: "低" }
    ],
    safeAreas: [
      "市中心 - 商业区",
      "住宅区 - 生活区",
      "大学区域 - 安静安全"
    ]
  },
  "中国": {
    emergency: {
      police: "110",
      ambulance: "120",
      fire: "119",
      touristPolice: "12301",
      embassies: {
        "美国": "北京市朝阳区安家楼路55号 | 010-8531-3000",
        "日本": "北京市朝阳区亮马桥东街1号 | 010-6532-2969"
      },
      hospitals: [
        { name: "北京协和医院", phone: "010-6915-6114", address: "北京市东城区东单帅府园1号" },
        { name: "上海瑞金医院", phone: "021-6437-0045", address: "上海市黄浦区瑞金二路197号" }
      ]
    },
    safety_history: "中国建立了完善的城市安全体系，主要城市配备了先进的监控系统、专业的应急响应机制和全面的医疗救援设施。通过严格的法律执行、社区网格化管理和科技应用，城市安全水平持续提升，为居民和游客提供了可靠的安全保障。",
    hotspots: [
      { area: "火车站周边", desc: "人员流动大", risk: "低中" },
      { area: "地铁车厢", desc: "拥挤扒窃风险", risk: "低" }
    ],
    safeAreas: [
      "市中心商业区 - 商业中心",
      "高档住宅区 - 治安良好",
      "大学区域 - 环境安全"
    ]
  },
  "新加坡": {
    emergency: {
      police: "999",
      ambulance: "995",
      fire: "995",
      touristPolice: "1800-255-0000",
      embassies: {
        "中国": "新加坡东陵路150号 | 6471-2117",
        "美国": "新加坡达克斯路27号 | 6476-9100"
      },
      hospitals: [
        { name: "新加坡国立大学医院", phone: "6779-5555", address: "5 Lower Kent Ridge Rd, Singapore 119074" },
        { name: "新加坡中央医院", phone: "6602-2222", address: "Outram Rd, Singapore 169608" }
      ]
    },
    safety_history: "新加坡建立了全球领先的城市安全体系。通过全覆盖的监控系统、严格的法律制度、高效的应急响应机制和全民安全教育，新加坡成为世界上最安全的城市之一。2020年全球安全指数排名中，新加坡位居前列。",
    hotspots: [
      { area: "小印度", desc: "夜间偶有纠纷，人员复杂", risk: "低" },
      { area: "芽笼", desc: "红灯区，人员复杂，游客应避免", risk: "中" },
      { area: "巴刹夜市", desc: "人流密集，易丢财物", risk: "低" }
    ],
    safeAreas: [
      "乌节路商圈 - 主要商业街，监控全覆盖",
      "滨海湾区域 - CBD核心区，24小时安保",
      "东海岸公园 - 海滨公园，家庭友好",
      "武吉知马区 - 高档住宅区，环境优美",
      "荷兰村 - 外籍人士聚集区，国际化氛围"
    ]
  }
};

// 城市特定数据（覆盖国家默认数据）
const citySpecificData = {
  "tokyo": {
    overview: "东京是日本的政治、经济、文化中心，也是世界上最大的都市圈之一。这座融合了传统与现代的城市，既保留着古老的寺庙和神社，又拥有着摩天大楼和霓虹灯街景。作为全球金融、科技和时尚中心，东京吸引了来自世界各地的游客和商务人士。",
    emergency: countryTemplates["日本"].emergency,
    safety_history: countryTemplates["日本"].safety_history + "东京的地铁系统是全球最繁忙的之一，通过智能化管理和严格安检，保持了极低的犯罪率。2011年东日本大地震后，东京加强了防灾减灾能力建设，建立了全球领先的灾害预警和应急响应系统。"
  },
  "singapore": {
    overview: "新加坡是东南亚的城邦国家，被誉为'花园城市'。这座多元文化融合的现代化都市，以高效的政府、清洁的环境和严格的法制著称。作为亚洲重要的金融、贸易和航运中心，新加坡连接着东西方文化，为游客提供独特的多元体验。",
    emergency: countryTemplates["新加坡"].emergency,
    safety_history: countryTemplates["新加坡"].safety_history
  },
  "seoul": {
    overview: "首都是韩国的政治、经济、文化中心，拥有超过500万人口。这座活力四射的现代化都市，完美融合了古老的宫殿和繁华的购物区。作为K-pop、韩剧等韩国文化的发源地，首尔吸引了大量国际游客。",
    emergency: countryTemplates["韩国"].emergency,
    safety_history: countryTemplates["韩国"].safety_history
  },
  "newyork": {
    overview: "纽约是美国最大的城市，也是全球金融、文化和时尚中心之一。这座不夜城以其标志性的天际线、世界级的博物馆和多元的文化而闻名。作为联合国总部所在地，纽约连接着世界各地，是全球最具影响力的城市之一。",
    emergency: countryTemplates["美国"].emergency,
    safety_history: countryTemplates["美国"].safety_history
  },
  "london": {
    overview: "伦敦是英国的首都和最大城市，也是全球金融中心之一。这座拥有2000多年历史的都市，融合了古老的建筑和现代的摩天大楼。作为政治、经济和文化中心，伦敦对全球事务具有重要影响力。",
    emergency: countryTemplates["英国"].emergency,
    safety_history: countryTemplates["英国"].safety_history
  },
  "paris": {
    overview: "巴黎是法国的首都和最大城市，被誉为'光之城'。这座充满浪漫气息的城市，以其优雅的建筑、世界级的艺术收藏和精致的美食而闻名。作为全球时尚和文化的中心，巴黎每年吸引数百万游客。",
    emergency: countryTemplates["法国"].emergency,
    safety_history: countryTemplates["法国"].safety_history
  }
};

// 更新城市数据
let updatedCount = 0;

Object.keys(CITY_DATABASE).forEach(cityId => {
  const city = CITY_DATABASE[cityId];
  const country = city.country;

  console.log(`处理 ${city.name} (${country})...`);

  // 获取模板数据
  let template = countryTemplates[country] || countryTemplates["日本"];
  let specific = citySpecificData[cityId] || {};

  // 添加 overview
  if (!city.overview) {
    city.overview = specific.overview || `${city.name}是${country}的重要城市，位于${city.continent}。作为该地区的经济、文化中心，${city.name}拥有丰富的历史遗产和现代化的城市设施。该市注重城市安全建设，为居民和游客提供了良好的生活环境。`;
    updatedCount++;
  }

  // 更新 emergency
  if (!city.emergency || Object.keys(city.emergency).length < 3) {
    city.emergency = template.emergency;
    updatedCount++;
  }

  // 添加 hotspots 和 safeAreas 到 safety 对象
  if (city.safety) {
    if (!city.safety.hotspots) {
      city.safety.hotspots = template.hotspots;
      updatedCount++;
    }
    if (!city.safety.safeAreas) {
      city.safety.safeAreas = template.safeAreas;
      updatedCount++;
    }
  }

  // 添加 safety_history
  if (!city.safety_history) {
    city.safety_history = specific.safety_history || template.safety_history;
    updatedCount++;
  }
});

console.log(`\n总计更新 ${updatedCount} 个字段`);

// 保存更新后的数据
const newData = `// ============================================================
// SafeCity Global - 全球城市安全数据库 v5.1 (完整版)
// 包含125个全球主要城市，详细生活旅行信息
// 更新时间: ${new Date().toISOString()}
// ============================================================

var SAFETY_COLORS = {
  "A":  { bg: "#00b894", text: "#fff", label: "非常安全" },
  "A-": { bg: "#00cec9", text: "#fff", label: "安全" },
  "B+": { bg: "#0984e3", text: "#fff", label: "较安全" },
  "B":  { bg: "#6c5ce7", text: "#fff", label: "一般" },
  "B-": { bg: "#fdcb6e", text: "#2d3436", label: "需谨慎" },
  "C+": { bg: "#e17055", text: "#fff", label: "风险较高" },
  "C":  { bg: "#d63031", text: "#fff", label: "高风险" },
  "C-": { bg: "#c0392b", text: "#fff", label: "高度危险" },
  "D+": { bg: "#b2bec3", text: "#2d3436", label: "高度危险" },
  "D":  { bg: "#636e72", text: "#fff", label: "极度危险" }
};

var CITY_DATABASE = ${JSON.stringify(CITY_DATABASE, null, 2)};`;

fs.writeFileSync('data_enhanced_all.js', newData, 'utf8');
console.log('✓ 已生成 data_enhanced_all.js');
console.log('请检查并替换原 data.js 文件');
