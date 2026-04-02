const fs = require('fs');

// 读取生成的 lifestyle 数据
const lifestyleData = JSON.parse(fs.readFileSync('lifestyle_data.json', 'utf8'));

// 读取原 data.js 文件
let dataJs = fs.readFileSync('data.js', 'utf8');

// 为每个城市替换 lifestyle 数据
Object.keys(lifestyleData).forEach(cityId => {
  const newLifestyle = JSON.stringify(lifestyleData[cityId]);
  
  // 使用正则表达式找到每个城市并替换 lifestyle
  // 匹配 "cityId": { ... "lifestyle": { ... } }
  const regex = new RegExp(`("${cityId}":\\s*\\{[\\s\\S]*?"lifestyle":\\s*\\{)[\\s\\S]*?(\\},[\\s\\S]*?"risks")`);
  
  if (regex.test(dataJs)) {
    dataJs = dataJs.replace(regex, `$1${newLifestyle}$2`);
    console.log(`已更新 ${cityId}`);
  } else {
    console.log(`未找到 ${cityId} 或格式不匹配`);
  }
});

fs.writeFileSync('data.js', dataJs);
console.log('data.js 更新完成！');