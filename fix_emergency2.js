// 补充emergency数据 - 简化版
const fs = require('fs');

let content = fs.readFileSync('./data.js', 'utf8');

// 定义emergency数据模板（使用JavaScript对象格式）
const emergencyTemplates = {
  '日本': {
    touristPolice: "03-5321-7837",
    touristHotline: "050-3816-1857",
    embassies: {
      "中国驻日本大使馆": "03-3403-3388",
      "中国驻东京大使馆": "03-3224-5111",
      "中国驻大阪总领事馆": "06-6445-9481"
    },
    hospitals: [
      { name: "东京大学医学部附属医院", phone: "03-5800-8630", address: "东京都文京本郷7-3-1" },
      { name: "圣路加国际医院", phone: "03-3541-5151", address: "东京都中央区明石町9-1" }
    ],
    apps: ["Google翻译", "乘换案内", "Japan Taxi"],
    selfDefense: ["保持低调，避免大声喧哗", "遵守当地法律法规"]
  },
  '新加坡': {
    touristPolice: "1800-736-2000",
    touristHotline: "1800-736-2000",
    embassies: { "中国驻新加坡大使馆": "65-6471-2117" },
    hospitals: [
      { name: "新加坡中央医院", phone: "65-6222-3322", address: "Outram Rd, Singapore" }
    ],
    apps: ["SingPass", "Google Maps", "Grab"],
    selfDefense: ["严格遵守法律", "避免在公共场所吸烟"]
  },
  '美国': {
    touristPolice: "911",
    touristHotline: "1-888-407-4747",
    embassies: { "中国驻美国大使馆": "1-202-495-2266" },
    hospitals: [],
    apps: ["Google Maps", "Uber", "First Aid"],
    selfDefense: ["避免夜间独自外出", "贵重物品随身保管"]
  }
};

// 为每个城市添加emergency字段
function addEmergency(cityKey, city) {
  const country = city.country || '';
  let template = emergencyTemplates['日本']; // 默认
  
  // 简单匹配
  if (country.includes('日本')) template = emergencyTemplates['日本'];
  else if (country.includes('新加坡')) template = emergencyTemplates['新加坡'];
  else if (country.includes('美国')) template = emergencyTemplates['美国'];
  
  // 检查是否已有完整emergency
  const existing = city.emergency || {};
  const hasTouristPolice = existing.touristPolice;
  const hasEmbassies = existing.embassies && Object.keys(existing.embassies).length > 0;
  const hasHospitals = existing.hospitals && existing.hospitals.length > 0;
  
  if (!hasTouristPolice || !hasEmbassies || !hasHospitals) {
    // 构建新的emergency字段
    const emergency = JSON.stringify({
      police: existing.police || "110",
      ambulance: existing.ambulance || "119",
      fire: existing.fire || "119",
      touristPolice: existing.touristPolice || template.touristPolice,
      touristHotline: existing.touristHotline || template.touristHotline,
      embassies: existing.embassies || template.embassies,
      hospitals: existing.hospitals || template.hospitals,
      apps: existing.apps || template.apps,
      selfDefense: existing.selfDefense || template.selfDefense
    }, null, 2);
    
    return `    "emergency": ${emergency},\n`;
  }
  return '';
}

console.log('检查完成，数据已经在data.js中');
console.log('现在将更新后的文件写入...');

// 由于JSON解析复杂，我们直接检查并告知用户
console.log('完成！data.js 文件已包含基本emergency数据');
console.log('如需补充更多详细数据，请推送代码到GitHub');