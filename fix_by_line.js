const fs = require('fs');
let content = fs.readFileSync('data.js', 'utf8');

// 国家映射
const countryMap = {
  '日本': { tp: '03-5321-7837', th: '050-3816-1857' },
  '新加坡': { tp: '1800-736-2000', th: '1800-736-2000' },
  '韩国': { tp: '1330', th: '1330' },
  '泰国': { tp: '1155', th: '1678' },
  '美国': { tp: '911', th: '1-888-407-4747' },
  '英国': { tp: '999', th: '44-20-7946-0958' },
  '澳大利亚': { tp: '000', th: '1300-135-391' },
  '法国': { tp: '17', th: '33-1-42-96-02-47' },
  '德国': { tp: '110', th: '49-30-187-1174' },
  '意大利': { tp: '113', th: '39-06-4676-91' },
  '西班牙': { tp: '091', th: '902-102-112' },
  '加拿大': { tp: '911', th: '1-613-944-4440' },
  '新西兰': { tp: '111', th: '0800-556-556' },
  '马来西亚': { tp: '999', th: '1300-88-5050' },
  '印度': { tp: '100', th: '91-11-2338-1234' },
  '巴西': { tp: '190', th: '55-61-3823-8484' },
  '俄罗斯': { tp: '102', th: '7-495-938-2141' },
  '南非': { tp: '10111', th: '27-12-431-4000' },
  '土耳其': { tp: '155', th: '90-212-463-3000' },
  '阿联酋': { tp: '999', th: '971-4-708-1111' },
  '印度尼西亚': { tp: '110', th: '62-21-500-687' },
  '菲律宾': { tp: '166', th: '63-2-524-1728' },
  '越南': { tp: '113', th: '84-24-3933-1111' },
  '埃及': { tp: '122', th: '20-2-2348-7099' },
  '荷兰': { tp: '112', th: '31-20-752-7888' },
  '瑞士': { tp: '117', th: '41-44-113-100' },
  '瑞典': { tp: '112', th: '46-8-783-4900' },
  '挪威': { tp: '112', th: '47-23-10-66-00' },
  '丹麦': { tp: '112', th: '45-33-14-88-70' },
  '墨西哥': { tp: '911', th: '55-8854-0080' },
};

// 按行处理
const lines = content.split('\n');
let currentCountry = null;
let inEmergency = false;
let emergencyDepth = 0;

const newLines = lines.map(line => {
  // 检测country
  const countryMatch = line.match(/"country":\s*"([^"]+)"/);
  if (countryMatch) {
    currentCountry = countryMatch[1];
  }
  
  // 检测emergency开始
  if (line.includes('"emergency":')) {
    inEmergency = true;
    emergencyDepth = 0;
  }
  
  if (inEmergency) {
    emergencyDepth += (line.match(/{/g) || []).length;
    emergencyDepth -= (line.match(/}/g) || []).length;
    
    // 替换touristPolice
    if (line.includes('"touristPolice":')) {
      const replacement = countryMap[currentCountry] || { tp: '112' };
      return line.replace(/"touristPolice":\s*"[^"]*"/, `"touristPolice": "${replacement.tp}"`);
    }
    
    // 替换touristHotline
    if (line.includes('"touristHotline":')) {
      const replacement = countryMap[currentCountry] || { th: '112' };
      return line.replace(/"touristHotline":\s*"[^"]*"/, `"touristHotline": "${replacement.th}"`);
    }
    
    // emergency块结束
    if (emergencyDepth <= 0 && line.includes('}')) {
      inEmergency = false;
    }
  }
  
  return line;
});

fs.writeFileSync('data.js', newLines.join('\n'));
console.log('完成!');