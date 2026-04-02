// 直接修改 data.js，为每个城市添加 hotspots 和 safeAreas

const fs = require('fs');

// 读取数据
let content = fs.readFileSync('data.js', 'utf8');

// 先备份
fs.writeFileSync('data.js.backup', content, 'utf8');

// 定义各城市的安全区域数据
const cityData = {
  "tokyo": {
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
  "singapore": {
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
  },
  "seoul": {
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
  "newyork": {
    hotspots: [
      { area: "东哈莱姆", desc: "犯罪率较高区域", risk: "中" },
      { area: "时代广场深夜", desc: "人流量大，扒窃风险", risk: "低" },
      { area: "地铁站车厢", desc: "夜间车厢不安全", risk: "低中" }
    ],
    safeAreas: [
      "曼哈顿下城 - 金融区，监控完善",
      "上东区 - 高档住宅区",
      "上西区 - 文化教育区",
      "布鲁克林高地 - 住宅区，环境优雅"
    ]
  },
  "london": {
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
  "paris": {
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
  "losangeles": {
    hotspots: [
      { area: "市中心南部", desc: "流浪人员聚集", risk: "中" },
      { area: "好莱坞大道深夜", desc: "醉酒人员多", risk: "低" },
      { area: "地铁站", desc: "夜间不太安全", risk: "低中" }
    ],
    safeAreas: [
      "比佛利山庄 - 高档住宅区",
      "圣莫尼卡 - 海滨区域",
      "帕萨迪纳 - 住宅区，环境优美",
      "西木区 - 大学区域"
    ]
  },
  "shanghai": {
    hotspots: [
      { area: "火车站周边", desc: "人员复杂，注意财物保管", risk: "低中" },
      { area: "长途汽车站", desc: "流动人员多，注意行李安全", risk: "低" },
      { area: "地铁车厢", desc: "早晚高峰拥挤，扒窃风险", risk: "低" }
    ],
    safeAreas: [
      "外滩区域 - 地标区域，安保严密",
      "陆家嘴金融区 - CBD核心，24小时监控",
      "徐汇区（衡山路）- 历史街区，环境优雅",
      "静安区（静安寺）- 高档商业住宅区",
      "黄浦区 - 市中心，治安良好"
    ]
  },
  "beijing": {
    hotspots: [
      { area: "火车站周边", desc: "人员流动大，警惕陌生搭讪", risk: "低中" },
      { area: "三里屯酒吧街", desc: "夜生活区，醉酒冲突风险", risk: "低" },
      { area: "旅游景点门口", desc: "小商贩集中，谨慎购物", risk: "低" }
    ],
    safeAreas: [
      "朝阳区CBD - 商务中心，监控完善",
      "东城区王府井 - 核心商业区",
      "海淀区（中关村）- 科技园区，环境现代",
      "西城区金融街 - 金融中心"
    ]
  },
  "hongkong": {
    hotspots: [
      { area: "旺角", desc: "夜间人流密集，注意财物", risk: "低" },
      { area: "油麻地", desc: "老旧区域，环境复杂", risk: "低中" },
      { area: "尖沙咀夜市", desc: "游客密集，扒窃风险", risk: "低" }
    ],
    safeAreas: [
      "中环CBD - 核心商业区，治安极好",
      "铜锣湾 - 高档购物区",
      "湾仔 - 商业住宅区",
      "西九龙文化区 - 新开发区，环境优美"
    ]
  }
};

// 为所有城市生成更新
const allCities = Object.keys(cityData);
let updatedCount = 0;

allCities.forEach(cityId => {
  const data = cityData[cityId];
  if (!data) return;

  // 构建 hotspots 字符串
  const hotspotsStr = data.hotspots.map(h => 
    `        {\n          "area": "${h.area}",\n          "desc": "${h.desc}",\n          "risk": "${h.risk}"\n        }`
  ).join(',\n');

  // 构建 safeAreas 字符串
  const safeAreasStr = data.safeAreas.map(a => `"${a}"`).join(',\n      ');

  // 查找该城市的 safety 对象
  const pattern = new RegExp(`"${cityId}": \\{[^}]*"safety": \\{[^}]*\\}`, 's');
  
  const newSafety = `"safety": {
      "overall": 81,
      "grade": "A-",
      "grades": {
        "crime": "A-",
        "transport": "B",
        "health": "B+",
        "natural": "B"
      },
      "hotspots": [
${hotspotsStr}
      ],
      "safeAreas": [
      ${safeAreasStr}
      ]
    }`;

  // 替换
  const regex = new RegExp(`"${cityId}": \\{[^}]*"safety": \\{[^}]*\\}(?=,|"highlights")`, 's');
  content = content.replace(regex, newSafety);
  
  updatedCount++;
});

console.log(`已更新 ${updatedCount} 个城市的安全区域数据`);

// 保存
fs.writeFileSync('data.js', content, 'utf8');
console.log('✓ data.js 已更新');
