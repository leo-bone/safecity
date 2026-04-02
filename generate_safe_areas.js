// 为所有城市生成详细的危险区域和安全区域数据
// 基于真实城市地理信息

const citySafeAreas = {
  "tokyo": {
    safeAreas: [
      {name: "港区（六本木、麻布）", desc: "高档住宅和使馆区，治安极佳", time: "全天安全", tips: "夜晚也相对安全"},
      {name: "千代田区（丸之内、大手町）", desc: "商业中心，24小时监控", time: "全天安全", tips: "适合商务出差"},
      {name: "涩谷区（代官山、惠比寿）", desc: "时尚购物区，环境优雅", time: "日间非常安全", tips: "晚上10点后人流减少"},
      {name: "新宿区（新宿御苑周边）", desc: "绿化区域，环境优美", time: "日间安全", tips: "公园区域适合散步"},
      {name: "文京区", desc: "教育区域，大学众多", time: "全天安全", tips: "学生聚集，氛围安静"},
      {name: "世田谷区", desc: "住宅区，生活便利", time: "全天安全", tips: "适合长期居住"}
    ],
    riskAreas: [
      {area: "新宿歌舞伎町", desc: "夜间娱乐区，人员复杂", risk: "高", time: "22:00-03:00", advice: "避免进入小巷，拒绝陌生推销"},
      {area: "池袋西口", desc: "治安稍差，有醉汉聚集", risk: "中高", time: "21:00-02:00", advice: "走大路，避免偏僻角落"},
      {area: "上野公园周边", desc: "夜间有流浪人员聚集", risk: "中", time: "20:00-05:00", advice: "晚上避免独自经过"},
      {area: "浅草仲见世通", desc: "游客密集，扒窃风险", risk: "低中", time: "10:00-18:00", advice: "注意财物保管"},
      {area: "涩谷站周边", desc: "人流量大，拥挤推搡", risk: "低", time: "全天", advice: "注意手机钱包安全"}
    ]
  },
  "singapore": {
    safeAreas: [
      {name: "乌节路商圈", desc: "主要商业街，监控全覆盖", time: "全天安全", tips: "购物天堂，治安极好"},
      {name: "滨海湾区域", desc: "CBD核心区，24小时安保", time: "全天安全", tips: "地标区域，管理严格"},
      {name: "东海岸公园", desc: "海滨公园，家庭友好", time: "日间安全", tips: "适合全家休闲"},
      {name: "武吉知马区", desc: "高档住宅区，环境优美", time: "全天安全", tips: "安静安全"},
      {name: "荷兰村", desc: "外籍人士聚集区", time: "全天安全", tips: "国际化氛围"}
    ],
    riskAreas: [
      {area: "小印度", desc: "夜间偶有纠纷", risk: "低", time: "22:00后", advice: "晚上避免独自前往"},
      {area: "芽笼", desc: "红灯区，人员复杂", risk: "中", time: "21:00-03:00", advice: "游客避免进入"},
      {area: "巴刹夜市", desc: "人流密集，易丢财物", risk: "低", time: "高峰时段", advice: "注意保管随身物品"}
    ]
  },
  "seoul": {
    safeAreas: [
      {name: "江南区（狎鸥亭、清潭洞）", desc: "高端商业住宅区", time: "全天安全", tips: "监控完善，治安极佳"},
      {name: "松坡区（蚕室）", desc: "新区，设施完善", time: "全天安全", tips: "购物中心集中"},
      {name: "钟路区", desc: "市中心，政府机关", time: "全天安全", tips: "历史文化核心区"},
      {name: "瑞草区", desc: "教育区域，安静安全", time: "全天安全", tips: "适合家庭居住"}
    ],
    riskAreas: [
      {area: "梨泰院", desc: "夜生活区，人员复杂", risk: "中高", time: "22:00-04:00", advice: "注意酒后冲突"},
      {area: "弘大周边", desc: "夜生活集中，醉酒人员多", risk: "中", time: "22:00-04:00", advice: "避免小巷"},
      {area: "东大门设计广场附近", desc: "人流密集，扒窃风险", risk: "低中", time: "高峰时段", advice: "注意财物"}
    ]
  },
  "shanghai": {
    safeAreas: [
      {name: "外滩区域", desc: "地标区域，安保严密", time: "全天安全", tips: "游客聚集，管理严格"},
      {name: "陆家嘴金融区", desc: "CBD核心，24小时监控", time: "全天安全", tips: "商务区域"},
      {name: "徐汇区（衡山路）", desc: "历史街区，环境优雅", time: "全天安全", tips: "适合散步"},
      {name: "静安区（静安寺）", desc: "高档商业住宅区", time: "全天安全", tips: "生活便利"},
      {name: "黄浦区", desc: "市中心，治安良好", time: "全天安全", tips: "交通便利"}
    ],
    riskAreas: [
      {area: "火车站周边", desc: "人员复杂，注意财物", risk: "低中", time: "全天", advice: "警惕陌生搭讪"},
      {area: "长途汽车站", desc: "流动人员多", risk: "低", time: "高峰时段", advice: "看管好行李"},
      {area: "地铁车厢", desc: "拥挤时扒窃风险", risk: "低", time: "早晚高峰", advice: "注意手机钱包"}
    ]
  },
  "beijing": {
    safeAreas: [
      {name: "朝阳区CBD", desc: "商务中心，监控完善", time: "全天安全", tips: "国际化区域"},
      {name: "东城区王府井", desc: "核心商业区", time: "全天安全", tips: "购物区域"},
      {name: "海淀区（中关村）", desc: "科技园区，环境现代", time: "全天安全", tips: "IT产业聚集"},
      {name: "西城区金融街", desc: "金融中心", time: "全天安全", tips: "商务区域"}
    ],
    riskAreas: [
      {area: "火车站周边", desc: "人员流动大", risk: "低中", time: "全天", advice: "注意财物"},
      {area: "三里屯酒吧街", desc: "夜生活区，醉酒风险", risk: "低", time: "22:00-03:00", advice: "注意酒后安全"},
      {area: "旅游景点门口", desc: "小商贩集中", risk: "低", time: "旅游旺季", advice: "谨慎购物"}
    ]
  }
};

// 基于国家生成默认数据
const defaultSafeAreas = {
  "日本": {
    safeAreas: [
      {name: "市中心车站周边", desc: "主要交通枢纽", time: "全天安全", tips: "人流密集，监控完善"},
      {name: "商业街", desc: "主要购物区", time: "全天安全", tips: "商业繁华"},
      {name: "政府机关周边", desc: "治安管理严格", time: "全天安全", tips: "管理规范"}
    ],
    riskAreas: [
      {area: "车站后巷", desc: "人流量小，光线暗", risk: "低中", time: "22:00后", advice: "走大路"},
      {area: "娱乐场所周边", desc: "夜生活区域", risk: "低", time: "22:00-03:00", advice: "避免冲突"},
      {area: "观光景点", desc: "游客密集", risk: "低", time: "旺季", advice: "保管财物"}
    ]
  },
  "美国": {
    safeAreas: [
      {name: "市中心商业区", desc: "监控完善", time: "日间安全", tips: "晚上需谨慎"},
      {name: "大学校园", desc: "安保严格", time: "日间安全", tips: "环境安全"},
      {name: "高档住宅区", desc: "社区管理好", time: "全天安全", tips: "适合居住"}
    ],
    riskAreas: [
      {area: "市中心边缘区", desc: "流浪人员聚集", risk: "中", time: "全天", advice: "避免进入"},
      {area: "地铁站周边", desc: "犯罪率较高", risk: "中高", time: "22:00-04:00", advice: "尽量避免"},
      {area: "公园区域", desc: "夜间不安全", risk: "中", time: "20:00-06:00", advice: "晚上不要进入"}
    ]
  },
  "英国": {
    safeAreas: [
      {name: "市中心", desc: "主要商业区", time: "日间安全", tips: "晚上结伴而行"},
      {name: "旅游区", desc: "安保完善", time: "日间安全", tips: "游客区域"},
      {name: "大学区域", desc: "环境安全", time: "全天安全", tips: "学生区域"}
    ],
    riskAreas: [
      {area: "地铁站", desc: "扒窃风险", risk: "低", time: "全天", advice: "注意财物"},
      {area: "酒吧街", desc: "醉酒人员多", risk: "中", time: "22:00-03:00", advice: "避免冲突"},
      {area: "公园", desc: "夜间不安全", risk: "低中", time: "21:00后", advice: "晚上不要进入"}
    ]
  },
  "法国": {
    safeAreas: [
      {name: "市中心（1-8区）", desc: "核心区域", time: "日间安全", tips: "晚上结伴"},
      {name: "旅游区", desc: "监控完善", time: "日间安全", tips: "管理严格"},
      {name: "高档商业街", desc: "购物区域", time: "日间安全", tips: "商业繁华"}
    ],
    riskAreas: [
      {area: "地铁车厢", desc: "扒窃严重", risk: "中", time: "全天", advice: "财物放好"},
      {area: "火车站周边", desc: "人员复杂", risk: "中", time: "全天", advice: "警惕陌生搭讪"},
      {area: "18-20区", desc: "治安较差", risk: "中高", time: "全天", advice: "游客避免"}
    ]
  },
  "德国": {
    safeAreas: [
      {name: "市中心", desc: "商业区域", time: "日间安全", tips: "晚上相对安全"},
      {name: "大学区域", desc: "环境安静", time: "全天安全", tips: "管理规范"},
      {name: "商业街", desc: "购物便利", time: "日间安全", tips: "生活区域"}
    ],
    riskAreas: [
      {area: "火车站周边", desc: "夜间人员复杂", risk: "低中", time: "22:00后", advice: "注意安全"},
      {area: "公园", desc: "夜间不太安全", risk: "低", time: "21:00后", advice: "晚上不要进入"},
      {area: "地铁站", desc: "偶有扒窃", risk: "低", time: "高峰时段", advice: "注意财物"}
    ]
  },
  "意大利": {
    safeAreas: [
      {name: "市中心", desc: "历史核心区", time: "日间安全", tips: "晚上结伴"},
      {name: "旅游区", desc: "游客密集", time: "日间安全", tips: "监控完善"},
      {name: "高档购物区", desc: "奢侈品街区", time: "日间安全", tips: "商业繁华"}
    ],
    riskAreas: [
      {area: "火车站周边", desc: "扒窃严重", risk: "中", time: "全天", advice: "财物放好"},
      {area: "地铁", desc: "扒窃风险高", risk: "中", time: "全天", advice: "特别警惕"},
      {area: "旅游景点", desc: "小偷多", risk: "中", time: "旺季", advice: "保管好财物"}
    ]
  },
  "澳大利亚": {
    safeAreas: [
      {name: "CBD", desc: "商业中心", time: "日间安全", tips: "晚上相对安全"},
      {name: "海滩周边", desc: "旅游区域", time: "日间安全", tips: "注意水上安全"},
      {name: "住宅区", desc: "生活区域", time: "全天安全", tips: "环境优美"}
    ],
    riskAreas: [
      {area: "深夜市中心", desc: "醉酒人员", risk: "低", time: "00:00-04:00", advice: "避免冲突"},
      {area: "火车站周边", desc: "夜间不太安全", risk: "低", time: "22:00后", advice: "注意安全"}
    ]
  },
  "加拿大": {
    safeAreas: [
      {name: "市中心", desc: "商业区", time: "日间安全", tips: "相对安全"},
      {name: "住宅区", desc: "生活区", time: "全天安全", tips: "环境良好"},
      {name: "大学区域", desc: "安静安全", time: "全天安全", tips: "教育区域"}
    ],
    riskAreas: [
      {area: "火车站周边", desc: "流浪人员", risk: "低", time: "全天", advice: "注意财物"},
      {area: "深夜市中心", desc: "人员较少", risk: "低", time: "23:00后", advice: "结伴而行"}
    ]
  }
};

function getSafeAreasForCity(cityId, country) {
  if (citySafeAreas[cityId]) {
    return citySafeAreas[cityId];
  }
  if (defaultSafeAreas[country]) {
    return defaultSafeAreas[country];
  }
  return defaultSafeAreas["日本"]; // 默认参考日本
}

module.exports = { getSafeAreasForCity, citySafeAreas };
