// 脚本:将原data.js转换为增强版数据结构
// 为所有125个城市添加详细的安全指标和实用信息

const originalCities = [
  "tokyo", "singapore", "seoul", "hong_kong", "beijing", "shanghai", "bangkok", 
  "kuala_lumpur", "taipei", "osaka", "mumbai", "delhi", "jakarta", "ho_chi_minh",
  "manila", "dubai", "doha", "riyadh", "muscat", "tel_aviv", "istanbul", "bali",
  "chiangmai", "phuket", "penang", "hanoi", "bangalore", "chennai", "kolkata",
  "hyderabad", "shenzhen", "guangzhou", "chengdu", "hangzhou", "xian", "london",
  "paris", "berlin", "amsterdam", "vienna", "zurich", "stockholm", "oslo",
  "copenhagen", "helsinki", "madrid", "rome", "barcelona", "lisbon", "prague",
  "warsaw", "athens", "brussels", "budapest", "moscow", "st_petersburg", "milan",
  "munich", "frankfurt", "hamburg", "dublin", "edinburgh", "manchester", "lyon",
  "marseille", "nice", "venice", "florence", "naples", "valencia", "seville",
  "malaga", "porto", "krakow", "geneva", "cologne", "new_york", "los_angeles",
  "chicago", "toronto", "vancouver", "montreal", "san_francisco", "seattle", "miami",
  "boston", "washington_dc", "las_vegas", "denver", "atlanta", "dallas", "houston",
  "phoenix", "portland", "san_diego", "austin", "mexico_city", "cancun", "sao_paulo",
  "rio_de_janeiro", "buenos_aires", "santiago", "lima", "bogota", "medellin",
  "panama_city", "cairo", "cape_town", "johannesburg", "lagos", "nairobi",
  "casablanca", "marrakech", "tunis", "accra", "addis_ababa", "sydney", "melbourne",
  "brisbane", "perth", "adelaide", "auckland", "wellington", "christchurch", "honolulu"
];

// 按地区分组,用于生成地区特定的数据
const asianCities = ["tokyo", "singapore", "seoul", "hong_kong", "beijing", "shanghai", "bangkok", 
  "kuala_lumpur", "taipei", "osaka", "mumbai", "delhi", "jakarta", "ho_chi_minh",
  "manila", "dubai", "doha", "riyadh", "muscat", "tel_aviv", "istanbul", "bali",
  "chiangmai", "phuket", "penang", "hanoi", "bangalore", "chennai", "kolkata",
  "hyderabad", "shenzhen", "guangzhou", "chengdu", "hangzhou", "xian"];

const europeanCities = ["london", "paris", "berlin", "amsterdam", "vienna", "zurich", "stockholm", "oslo",
  "copenhagen", "helsinki", "madrid", "rome", "barcelona", "lisbon", "prague",
  "warsaw", "athens", "brussels", "budapest", "moscow", "st_petersburg", "milan",
  "munich", "frankfurt", "hamburg", "dublin", "edinburgh", "manchester", "lyon",
  "marseille", "nice", "venice", "florence", "naples", "valencia", "seville",
  "malaga", "porto", "krakow", "geneva", "cologne"];

const americanCities = ["new_york", "los_angeles", "chicago", "toronto", "vancouver", "montreal", 
  "san_francisco", "seattle", "miami", "boston", "washington_dc", "las_vegas", "denver",
  "atlanta", "dallas", "houston", "phoenix", "portland", "san_diego", "austin",
  "mexico_city", "cancun", "sao_paulo", "rio_de_janeiro", "buenos_aires", "santiago",
  "lima", "bogota", "medellin", "panama_city", "honolulu"];

const africanCities = ["cairo", "cape_town", "johannesburg", "lagos", "nairobi",
  "casablanca", "marrakech", "tunis", "accra", "addis_ababa"];

const oceaniaCities = ["sydney", "melbourne", "brisbane", "perth", "adelaide", "auckland", 
  "wellington", "christchurch"];

// 地区特定的安全建议模板
const safetyTipsByRegion = {
  asia: {
    crime_prevention: [
      "避免深夜独自在偏僻地区行走",
      "警惕街头诈骗和过度热情的推销",
      "使用官方认可的交通服务",
      "保管好贵重物品,使用酒店保险箱"
    ],
    transport_safety: [
      "使用官方出租车或网约车平台",
      "注意交通规则,与国内可能不同",
      "在拥挤场所保管好财物",
      "学习几句当地语言方便沟通"
    ],
    health_tips: [
      "注意饮食卫生,选择卫生的餐厅",
      "准备常用药物和防晒用品",
      "购买旅游保险",
      "了解附近的医院位置"
    ],
    natural_disasters: [
      "关注天气预报,特别是台风季节",
      "了解当地的应急避难场所",
      "准备应急包,包括水、食物和手电筒"
    ]
  },
  europe: {
    crime_prevention: [
      "警惕扒手,特别是在旅游热点和公共交通上",
      "不要接受陌生人的饮料或食物",
      "避免深夜独自在偏僻地区行走",
      "保管好护照和贵重物品"
    ],
    transport_safety: [
      "使用官方出租车或网约车",
      "注意地铁和公交的时间安排",
      "注意交通规则,特别是欧洲的环岛",
      "在火车站和机场保持警惕"
    ],
    health_tips: [
      "欧洲医疗费用较高,务必购买保险",
      "了解欧洲健康保险卡(EHIC)的适用范围",
      "准备常用药品",
      "注意防晒和补充水分"
    ],
    natural_disasters: [
      "欧洲大部分地区自然灾害风险较低",
      "山区注意天气变化",
      "夏季注意防暑"
    ]
  },
  america: {
    crime_prevention: [
      "避免深夜独自在偏僻地区行走",
      "警惕街头犯罪和抢夺",
      "不要展示贵重物品或大量现金",
      "了解哪些区域应该避免"
    ],
    transport_safety: [
      "使用官方出租车或Uber",
      "注意枪支相关的风险",
      "自驾注意交通规则和保险",
      "避免深夜乘坐公共交通"
    ],
    health_tips: [
      "美国医疗费用极高,必须购买保险",
      "准备常用药品",
      "注意饮食安全和饮水",
      "了解附近的急诊室位置"
    ],
    natural_disasters: [
      "根据地区了解飓风、地震、野火等风险",
      "关注当地天气预报",
      "准备应急包和逃生计划"
    ]
  },
  africa: {
    crime_prevention: [
      "保持高度警惕,避免夜间外出",
      "不要展示贵重物品或现金",
      "使用可靠的交通服务",
      "了解哪些区域应该避免"
    ],
    transport_safety: [
      "使用酒店推荐的服务",
      "避免乘坐不明身份的出租车",
      "注意交通安全",
      "在机场和港口保持警惕"
    ],
    health_tips: [
      "咨询医生疫苗接种建议",
      "携带防疟疾药物",
      "使用防蚊措施",
      "只饮用瓶装水"
    ],
    natural_disasters: [
      "了解当地的疾病预防措施",
      "关注天气和气候条件",
      "准备基本的医疗用品"
    ]
  },
  oceania: {
    crime_prevention: [
      "保持基本警惕,犯罪率较低",
      "注意海洋安全",
      "注意野生动物,特别是毒蛇和蜘蛛",
      "保管好财物"
    ],
    transport_safety: [
      "注意左侧驾驶(澳大利亚、新西兰)",
      "使用官方交通服务",
      "注意防晒,户外活动时间不宜过长",
      "了解海滩安全标志"
    ],
    health_tips: [
      "注意防晒,澳洲紫外线强烈",
      "注意海洋生物安全",
      "准备常用药品",
      "购买旅游保险"
    ],
    natural_disasters: [
      "了解野火和季节性风险",
      "注意极端天气",
      "关注海洋天气预报"
    ]
  }
};

// 辅助函数:根据基础评分生成详细评分
function generateDetailedScores(baseGrade, region) {
  const baseScore = baseGrade === "A" ? 90 : 
                    baseGrade === "A-" ? 85 :
                    baseGrade === "B+" ? 80 :
                    baseGrade === "B" ? 75 :
                    baseGrade === "B-" ? 70 :
                    baseGrade === "C+" ? 60 :
                    baseGrade === "C" ? 50 : 40;
  
  // 根据地区调整某些指标
  const regionAdjustments = {
    asia: { natural_disaster: -10, pollution: -5 },
    europe: { terrorism: -5, corruption: -5 },
    america: { violent_crime: -10, gun_control: -20 },
    africa: { health: -20, infrastructure: -15 },
    oceania: { wildlife: -10, sun_exposure: -10 }
  };
  
  const adjustment = regionAdjustments[region] || {};
  
  return {
    // 犯罪安全
    violent_crime: baseScore - 5,
    property_crime: baseScore - 8,
    theft: baseScore - 10,
    fraud: baseScore - 7,
    street_safety: baseScore,
    night_safety: baseScore - 10,
    tourist_safety: baseScore - 5,
    women_safety: baseScore - 5,
    child_safety: baseScore,
    corruption: baseScore - 10,
    terrorism: baseScore - 5,
    gang_activity: baseScore - 8,
    
    // 交通安全
    road_safety: baseScore - 8,
    public_transport: baseScore - 5,
    taxi_safety: baseScore,
    air_safety: 95,
    traffic_accidents: baseScore - 10,
    driving_laws: baseScore - 5,
    vehicle_security: baseScore,
    pedestrian_safety: baseScore - 10,
    bicycle_safety: baseScore - 12,
    traffic_congestion: Math.max(30, 100 - (baseScore - 50)),
    
    // 医疗健康
    medical_quality: baseScore - 5,
    hospital_access: baseScore - 8,
    emergency_response: baseScore - 10,
    medicine_cost: 65,
    health_insurance: 75,
    disease_risk: baseScore - 10,
    food_safety: baseScore - 5,
    water_quality: baseScore - 5,
    
    // 自然灾害
    earthquake_risk: 80,
    flood_risk: 75,
    hurricane_risk: 85,
    wildfire_risk: 80,
    tsunami_risk: 80,
    landslide_risk: 80,
    extreme_weather: 80,
    volcanic_risk: 85,
    
    // 其他安全
    political_stability: baseScore - 10,
    economic_stability: baseScore - 15,
    social_inequality: 70,
    drug_problem: baseScore + 10,
    gun_control: 85,
    pollution: 65,
    noise_level: 60,
    internet_freedom: 70,
    lgbtq_safety: 70,
    religious_freedom: 80,
    immigration: 70,
    cybersecurity: 80
  };
}

console.log("数据转换工具准备完成");
console.log("原始城市数量:", originalCities.length);
console.log("亚洲城市:", asianCities.length);
console.log("欧洲城市:", europeanCities.length);
console("("美洲城市:", americanCities.length);
console.log("非洲城市:", africanCities.length);
console.log("大洋洲城市:", oceaniaCities.length);
