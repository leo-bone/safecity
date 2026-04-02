// 更新 data.js 中的危险区域和安全区域数据

const fs = require('fs');
const { getSafeAreasForCity } = require('./generate_safe_areas.js');

// 读取 data.js
const dataContent = fs.readFileSync('data.js', 'utf8');

// 提取 CITY_DATABASE
const dbMatch = dataContent.match(/var CITY_DATABASE = \{([\s\S]+)\};/);
if (!dbMatch) {
  console.log('无法找到 CITY_DATABASE');
  process.exit(1);
}

const dbStr = dbMatch[0];
let newDbStr = dbStr;

// 需要更新的城市列表
const cityPattern = /\"(\w+)\": \{[\s\S]*?\},\n\s*"id":/g;
let match;
const updatedCities = [];

// 找到每个城市的 safety 对象
const cityRegex = /"(\w+)": \{[^}]*"country": "([^"]+)"[^}]*"safety": \{[^}]*"hotspots": \[[^\]]*\][^}]*"safeAreas": \[[^\]]*\]/g;

// 更新函数
function updateCitySafeAreas(match, cityId, country) {
  const safeData = getSafeAreasForCity(cityId, country);
  
  // 构建 hotspots 数组
  const hotspotsStr = safeData.riskAreas.map(area => 
    `        {\n          "area": "${area.area}",\n          "desc": "${area.desc}",\n          "risk": "${area.risk}"\n        }`
  ).join(',\n');
  
  // 构建 safeAreas 数组
  const safeAreasStr = safeData.safeAreas.map(area => 
    `        "${area.name}"`
  ).join(',\n      ');
  
  return `"hotspots": [
${hotspotsStr}
      ],
      "safeAreas": [
${safeAreasStr}
      ]`;
}

// 读取文件，逐个城市更新
let lines = dataContent.split('\n');
let result = [];
let i = 0;
let currentCity = null;
let inHotspots = false;
let inSafeAreas = false;
let hotspotsLines = [];
let safeAreasLines = [];
let country = '';

while (i < lines.length) {
  const line = lines[i];
  
  // 检测新城市
  const cityMatch = line.match(/^\s*"(\w+)": \{/);
  if (cityMatch) {
    currentCity = cityMatch[1];
    country = '';
    inHotspots = false;
    inSafeAreas = false;
  }
  
  // 检测 country
  const countryMatch = line.match(/^\s*"country": "([^"]+)"/);
  if (countryMatch) {
    country = countryMatch[1];
  }
  
  // 检测 hotspots 开始
  if (line.match(/^\s*"hotspots": \[/)) {
    inHotspots = true;
    hotspotsLines = [line];
    i++;
    continue;
  }
  
  // 收集 hotspots 内容
  if (inHotspots && !line.match(/^\s*\]/)) {
    hotspotsLines.push(line);
    i++;
    continue;
  }
  
  // hotspots 结束，接下来是 safeAreas
  if (inHotspots && line.match(/^\s*\]/)) {
    hotspotsLines.push(line);
    inHotspots = false;
    // 等待 safeAreas
  }
  
  // 检测 safeAreas 开始
  if (!inHotspots && !inSafeAreas && line.match(/^\s*"safeAreas": \[/)) {
    inSafeAreas = true;
    safeAreasLines = [line];
    i++;
    continue;
  }
  
  // 收集 safeAreas 内容
  if (inSafeAreas && !line.match(/^\s*\]/)) {
    safeAreasLines.push(line);
    i++;
    continue;
  }
  
  // safeAreas 结束，替换数据
  if (inSafeAreas && line.match(/^\s*\]/)) {
    safeAreasLines.push(line);
    inSafeAreas = false;
    
    // 替换这两部分
    if (currentCity && country) {
      const safeData = getSafeAreasForCity(currentCity, country);
      
      const newHotspots = `      "hotspots": [\n${safeData.riskAreas.map(area => 
        `        {\n          "area": "${area.area}",\n          "desc": "${area.desc}",\n          "risk": "${area.risk}"\n        }`
      ).join(',\n')}\n      ]`;
      
      const newSafeAreas = `      "safeAreas": [\n${safeData.safeAreas.map(area => 
        `        "${area.name}"`
      ).join(',\n      ')}\n      ]`;
      
      // 回退并替换
      for (let j = 0; j < hotspotsLines.length + safeAreasLines.length + 1; j++) {
        result.pop();
      }
      result.push(newHotspots);
      result.push(',');
      result.push(newSafeAreas);
      
      updatedCities.push(currentCity);
      console.log(`✓ Updated ${currentCity}`);
    }
    
    currentCity = null;
    country = '';
    result.push(line);
    i++;
    continue;
  }
  
  result.push(line);
  i++;
}

const newContent = result.join('\n');
fs.writeFileSync('data.js', newContent, 'utf8');

console.log(`\n总计更新 ${updatedCities.length} 个城市的安全区域数据`);
console.log('更新完成！');
