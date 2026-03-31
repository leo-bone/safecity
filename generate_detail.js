// 生成城市详情数据 - 包含节日、交通、景点、美食等
const fs = require('fs');

// 读取基础数据
const dataContent = fs.readFileSync('/Users/leo/WorkBuddy/20260330203857/safecity/data.js', 'utf8');
const match = dataContent.match(/var CITY_DATABASE = ({[\s\S]*});/);
if (!match) {
  console.error('Could not parse CITY_DATABASE');
  process.exit(1);
}

const CITY_DATABASE = JSON.parse(match[1]);
console.log('Loaded cities:', Object.keys(CITY_DATABASE).length);

// 城市详情模板数据
const cityDetails = {
  // 东京
  tokyo: {
    festivals: [
      { name: '樱花季', month: '3-4月', description: '东京各地樱花盛开，上野公园、新宿御苑是热门赏樱地点' },
      { name: '隅田川花火大会', month: '7月', description: '东京最大规模的花火大会，吸引百万观众' },
      { name: '浅草三社祭', month: '5月', description: '浅草神社的年度祭典，有传统神轿游行' },
      { name: '明治神宫初诣', month: '1月', description: '新年期间参拜明治神宫，体验日本传统新年文化' }
    ],
    transport: {
      airport: '成田机场(NRT)和羽田机场(HND)，羽田更靠近市区',
      train: 'JR山手线环状连接主要区域，地铁系统发达',
      subway: '东京Metro和都营地铁覆盖全城，建议购买PASMO或Suica卡',
      taxi: '出租车价格较高，起步价约500日元，深夜有加价'
    },
    attractions: [
      { name: '浅草寺', category: '文化古迹', description: '东京最古老的寺庙，雷门大灯笼是标志性景观' },
      { name: '东京塔/晴空塔', category: '地标建筑', description: '俯瞰东京全景的最佳地点' },
      { name: '涩谷十字路口', category: '城市景观', description: '世界最繁忙的人行横道，体验东京的繁华' },
      { name: '明治神宫', category: '神社', description: '位于市中心的绿洲，供奉明治天皇' },
      { name: '秋叶原', category: '购物娱乐', description: '动漫、电器、游戏爱好者的天堂' },
      { name: '筑地市场', category: '美食', description: '新鲜海鲜市场，可品尝正宗寿司' }
    ],
    food: [
      { name: '寿司', description: '筑地、银座有众多顶级寿司店', recommendation: '寿司大、大和寿司' },
      { name: '拉面', description: '一兰、一风堂等连锁，也有众多特色小店', recommendation: '新宿、池袋的拉面街' },
      { name: '天妇罗', description: '浅草大黑家天妇罗历史悠久', recommendation: '大黑家、土手の伊勢屋' },
      { name: '烧肉', description: '和牛烧肉是必尝美食', recommendation: '叙叙苑、牛角' }
    ],
    customs: [
      '进入室内需要脱鞋，注意袜子要干净',
      '公共场所保持安静，电车内不要大声说话',
      '不要边走边吃，在便利店门口吃完再走',
      '给小费不是日本习俗，不需要给小费',
      '垃圾分类严格，注意按要求分类投放'
    ],
    tips: [
      '下载Google翻译APP，支持拍照翻译菜单',
      '购买东京Metro 24/48/72小时通票更划算',
      '大部分商店晚上8-9点关门，提前规划购物',
      'ATM机并非24小时可用，注意营业时间',
      '地震多发，手机下载灾害预警APP'
    ],
    emergency: { police: '110', ambulance: '119', fire: '119', tourist_hotline: '050-3816-2787' }
  },
  
  // 新加坡
  singapore: {
    festivals: [
      { name: '春节', month: '1-2月', description: '牛车水有盛大庆祝活动和灯会' },
      { name: '新加坡美食节', month: '7月', description: '品尝本地美食的绝佳机会' },
      { name: '国庆日', month: '8月9日', description: '烟花表演和军事阅兵' },
      { name: '屠妖节', month: '10-11月', description: '小印度的印度教节日，灯火辉煌' }
    ],
    transport: {
      airport: '樟宜机场(SIN)，被评为世界最佳机场',
      train: 'MRT地铁系统覆盖全岛，干净高效',
      bus: '巴士网络完善，可用EZ-Link卡支付',
      taxi: '出租车价格合理，有Grab等网约车'
    },
    attractions: [
      { name: '滨海湾花园', category: '自然景观', description: '超级树和云雾林是标志性景观' },
      { name: '鱼尾狮公园', category: '地标', description: '新加坡的象征，必打卡地点' },
      { name: '圣淘沙岛', category: '娱乐', description: '环球影城、海洋馆、海滩' },
      { name: '牛车水', category: '文化区', description: '新加坡唐人街，美食和购物' },
      { name: '小印度', category: '文化区', description: '体验印度文化和美食' },
      { name: '克拉码头', category: '夜生活', description: '河畔酒吧和餐厅聚集地' }
    ],
    food: [
      { name: '海南鸡饭', description: '新加坡国菜', recommendation: '天天海南鸡饭、文东记' },
      { name: '辣椒螃蟹', description: '新加坡招牌海鲜', recommendation: '珍宝海鲜、无招牌海鲜' },
      { name: '肉骨茶', description: '药材炖排骨汤', recommendation: '松发肉骨茶、黄亚细' },
      { name: '叻沙', description: '椰浆咖喱面', recommendation: '加东叻沙' },
      { name: '沙爹', description: '烤肉串配花生酱', recommendation: '老巴刹熟食中心' }
    ],
    customs: [
      '严禁携带口香糖入境',
      '地铁和公交上禁止饮食',
      '公共场所禁止吸烟，只能在指定区域',
      '乱丢垃圾会被重罚',
      '过马路要走斑马线，严格遵守交通规则'
    ],
    tips: [
      '购买Singapore Tourist Pass可无限次乘坐公共交通',
      ' hawker center(熟食中心)是品尝本地美食的最佳地点',
      '全年炎热潮湿，注意防晒和补水',
      '大部分人会讲华语，沟通方便',
      '商场和室内空调很冷，带件薄外套'
    ],
    emergency: { police: '999', ambulance: '995', fire: '995', tourist_hotline: '1800-736-2000' }
  },

  // 首尔
  seoul: {
    festivals: [
      { name: '樱花季', month: '4月', description: '汝矣岛、南山公园赏樱' },
      { name: '首尔灯节', month: '11月', description: '清溪川沿岸的灯会' },
      { name: '首尔文化节', month: '10月', description: '各类文化表演和活动' },
      { name: '春节/中秋', month: '农历', description: '传统节日，部分商店休息' }
    ],
    transport: {
      airport: '仁川机场(ICN)和金浦机场(GMP)',
      train: '地铁1-9号线覆盖全城，T-money卡必备',
      bus: '公交系统发达，但需懂韩文',
      taxi: '普通、模范、大型三种，黑色为模范较贵'
    },
    attractions: [
      { name: '景福宫', category: '历史古迹', description: '朝鲜王朝王宫，可观看换岗仪式' },
      { name: '明洞', category: '购物', description: '购物和美食天堂' },
      { name: 'N首尔塔', category: '地标', description: '南山塔，情侣锁墙' },
      { name: '弘大', category: '文化区', description: '年轻人聚集地，街头表演' },
      { name: '江南区', category: '商业区', description: '高端购物和夜生活' },
      { name: '北村韩屋村', category: '文化', description: '传统韩屋建筑群' }
    ],
    food: [
      { name: '韩式烤肉', description: '必尝美食', recommendation: '姜虎东、王妃家' },
      { name: '参鸡汤', description: '滋补佳品', recommendation: '土俗村参鸡汤' },
      { name: '炸鸡啤酒', description: '韩国夜生活标配', recommendation: '校村炸鸡、BBQ' },
      { name: '石锅拌饭', description: '传统料理', recommendation: '全州中央会馆' },
      { name: '泡菜', description: '每餐必备', recommendation: '各种泡菜汤' }
    ],
    customs: [
      '接受物品用双手表示尊重',
      '长辈先动筷，不可先于长辈用餐',
      '喝酒时侧身喝，表示尊重',
      '进韩式餐厅需脱鞋',
      '地铁有老弱病残专座，不要占用'
    ],
    tips: [
      '下载KakaoMap导航比Google Maps更准确',
      '购买T-money卡可打折乘坐公共交通',
      '免税店购物可机场提货',
      '大部分餐厅有中文菜单',
      'WiFi覆盖率高，可租借随身WiFi'
    ],
    emergency: { police: '112', ambulance: '119', fire: '119', tourist_hotline: '1330' }
  },

  // 香港
  hong_kong: {
    festivals: [
      { name: '春节', month: '1-2月', description: '花车巡游和烟花表演' },
      { name: '端午节', month: '6月', description: '龙舟竞渡' },
      { name: '中秋节', month: '9-10月', description: '大坑舞火龙' },
      { name: '圣诞节', month: '12月', description: '维港灯光秀和购物季' }
    ],
    transport: {
      airport: '香港国际机场(HKG)',
      train: '港铁MTR覆盖主要区域',
      bus: '双层巴士网络完善',
      taxi: '分市区、新界、大屿山三种颜色',
      ferry: '天星小轮是经典体验'
    },
    attractions: [
      { name: '维多利亚港', category: '地标', description: '世界三大夜景之一' },
      { name: '太平山顶', category: '观景', description: '俯瞰维港全景' },
      { name: '迪士尼乐园', category: '娱乐', description: '适合家庭游玩' },
      { name: '海洋公园', category: '娱乐', description: '过山车和水族馆' },
      { name: '庙街夜市', category: '文化', description: '地道香港市井文化' },
      { name: '中环半山扶梯', category: '城市景观', description: '世界最长户外扶梯系统' }
    ],
    food: [
      { name: '点心', description: '早茶必点', recommendation: '添好运、稻香' },
      { name: '烧腊', description: '叉烧、烧鹅', recommendation: '镛记、甘牌烧鹅' },
      { name: '云吞面', description: '经典港式', recommendation: '麦奀云吞面' },
      { name: '鸡蛋仔', description: '街头小吃', recommendation: '北角鸡蛋仔' },
      { name: '丝袜奶茶', description: '港式奶茶', recommendation: '兰芳园' }
    ],
    customs: [
      '茶餐厅有搭台文化，可能要拼桌',
      '用餐速度快，不要久坐',
      '排队文化盛行，请自觉排队',
      '地铁禁食',
      '电梯靠右站，左边留给赶时间的人'
    ],
    tips: [
      '购买八达通卡方便乘坐交通和购物',
      '7-11便利店可充值八达通',
      '大部分商场接受支付宝和微信支付',
      '转换插头必备，英标三脚插',
      '药房购物注意辨别真假'
    ],
    emergency: { police: '999', ambulance: '999', fire: '999', tourist_hotline: '2508-1234' }
  },

  // 伦敦
  london: {
    festivals: [
      { name: '诺丁山狂欢节', month: '8月', description: '欧洲最大街头狂欢节' },
      { name: '跨年烟花', month: '12月31日', description: '伦敦眼烟花表演' },
      { name: '切尔西花展', month: '5月', description: '世界著名园艺展览' },
      { name: '圣诞集市', month: '11-12月', description: '海德公园冬季仙境' }
    ],
    transport: {
      airport: '希思罗(LHR)、盖特威克(LGW)、斯坦斯特德(STN)等',
      train: '地铁Tube覆盖全城，分区计价',
      bus: '红色双层巴士，24小时运营',
      taxi: '黑色出租车可路边招手，Uber可用'
    },
    attractions: [
      { name: '大本钟', category: '地标', description: '英国议会大厦钟楼' },
      { name: '伦敦塔桥', category: '地标', description: '可登桥参观' },
      { name: '大英博物馆', category: '博物馆', description: '免费参观，藏品丰富' },
      { name: '白金汉宫', category: '宫殿', description: '观看卫兵换岗仪式' },
      { name: '伦敦眼', category: '观景', description: '泰晤士河畔摩天轮' },
      { name: '海德公园', category: '公园', description: '市中心绿洲' }
    ],
    food: [
      { name: '炸鱼薯条', description: '英国国菜', recommendation: 'Poppies Fish & Chips' },
      { name: '英式早餐', description: 'Full English Breakfast', recommendation: 'The Breakfast Club' },
      { name: '下午茶', description: 'High Tea体验', recommendation: 'Ritz、Fortnum & Mason' },
      { name: '印度咖喱', description: 'Brick Lane咖喱街', recommendation: 'Brick Lane' }
    ],
    customs: [
      '排队是英国文化，务必遵守',
      '地铁扶梯靠右站',
      '小费通常10-15%，账单已含服务费则不用另给',
      '酒吧点酒去吧台，不需要等服务员',
      '天气多变，随身携带雨伞'
    ],
    tips: [
      '购买Oyster Card或使用Contactless卡',
      '博物馆大多免费，建议早去避开人群',
      '西区音乐剧提前订票',
      '周日部分商店关门较早',
      '注意区分伦敦市(City)和伦敦大都市区'
    ],
    emergency: { police: '999', ambulance: '999', fire: '999', non_emergency: '101' }
  },

  // 巴黎
  paris: {
    festivals: [
      { name: '巴士底日', month: '7月14日', description: '法国国庆日，香街阅兵和烟花' },
      { name: '巴黎时装周', month: '2月/9月', description: '春夏和秋冬两季' },
      { name: '圣诞集市', month: '12月', description: '香榭丽舍大街集市' },
      { name: '白夜节', month: '10月', description: '通宵艺术活动' }
    ],
    transport: {
      airport: '戴高乐(CDG)和奥利(ORY)机场',
      train: '地铁Metro和RER快线',
      bus: '公交网络覆盖全城',
      taxi: '出租车较贵，有Uber'
    },
    attractions: [
      { name: '埃菲尔铁塔', category: '地标', description: '巴黎象征' },
      { name: '卢浮宫', category: '博物馆', description: '世界最大艺术博物馆' },
      { name: '凯旋门', category: '地标', description: '香榭丽舍大街西端' },
      { name: '圣母院', category: '教堂', description: '哥特式建筑杰作(修复中)' },
      { name: '蒙马特高地', category: '文化区', description: '艺术家聚集地' },
      { name: '塞纳河游船', category: '观光', description: '欣赏两岸风光' }
    ],
    food: [
      { name: '可颂', description: '法式早餐必备', recommendation: 'Du Pain et des Idées' },
      { name: '法棍', description: '法国人的主食', recommendation: '任何boulangerie' },
      { name: '马卡龙', description: '精致甜点', recommendation: 'Ladurée、Pierre Hermé' },
      { name: '法式洋葱汤', description: '经典汤品', recommendation: '传统小酒馆' },
      { name: '鹅肝', description: '法国美食', recommendation: '高级餐厅' }
    ],
    customs: [
      '进商店要说Bonjour问候',
      '餐厅用餐时间较长，不要催单',
      '小费已含在账单中，可给零钱凑整',
      '不要大声喧哗',
      '周日很多商店关门'
    ],
    tips: [
      '购买Paris Museum Pass可免排队',
      '注意保管财物，景点周围有小偷',
      '学几句基础法语会更受欢迎',
      '餐厅有固定用餐时间，非饭点可能不营业',
      '地铁有自动检票门，逃票会被罚款'
    ],
    emergency: { police: '17', ambulance: '15', fire: '18', european: '112' }
  },

  // 纽约
  new_york: {
    festivals: [
      { name: '时代广场跨年', month: '12月31日', description: '水晶球降落仪式' },
      { name: '感恩节游行', month: '11月', description: '梅西百货大游行' },
      { name: ' Pride Parade', month: '6月', description: '同志骄傲游行' },
      { name: '圣诞橱窗', month: '12月', description: '第五大道百货公司橱窗' }
    ],
    transport: {
      airport: '肯尼迪(JFK)、纽瓦克(EWR)、拉瓜迪亚(LGA)',
      subway: '24小时运营，按区计价',
      bus: '覆盖地铁不到的地方',
      taxi: '黄色出租车，Uber/Lyft普及'
    },
    attractions: [
      { name: '自由女神像', category: '地标', description: '美国自由的象征' },
      { name: '时代广场', category: '地标', description: '世界的十字路口' },
      { name: '中央公园', category: '公园', description: '曼哈顿绿洲' },
      { name: '帝国大厦', category: '地标', description: '观景台俯瞰城市' },
      { name: '布鲁克林大桥', category: '地标', description: '步行过桥体验' },
      { name: '大都会博物馆', category: '博物馆', description: '世界三大博物馆之一' }
    ],
    food: [
      { name: '纽约披萨', description: '薄片大披萨', recommendation: 'Joe\'s Pizza' },
      { name: '贝果', description: '纽约早餐', recommendation: 'Ess-a-Bagel' },
      { name: '芝士蛋糕', description: 'Junior\'s经典', recommendation: 'Junior\'s' },
      { name: '热狗', description: '街头小吃', recommendation: 'Gray\'s Papaya' },
      { name: '牛排', description: '美式牛排馆', recommendation: 'Peter Luger' }
    ],
    customs: [
      '小费文化重要，餐厅15-20%',
      '走路速度快，不要挡路',
      '地铁卡Swipe要干脆',
      '排队等出租车',
      '注意个人财物安全'
    ],
    tips: [
      '购买MetroCard或OMNY支付',
      '百老汇剧票可在TKTS折扣亭购买',
      '博物馆有建议捐款日',
      '小费是服务人员主要收入',
      '部分区域晚上避免独行'
    ],
    emergency: { police: '911', ambulance: '911', fire: '911', non_emergency: '311' }
  },

  // 悉尼
  sydney: {
    festivals: [
      { name: '跨年烟花', month: '12月31日', description: '世界最早的大型跨年庆祝' },
      { name: '悉尼灯光节', month: '5-6月', description: 'Vivid Sydney灯光秀' },
      { name: '悉尼狂欢节', month: '2-3月', description: 'LGBTQ+骄傲节' },
      { name: '澳洲日', month: '1月26日', description: '国庆日庆祝活动' }
    ],
    transport: {
      airport: '金斯福德·史密斯机场(SYD)',
      train: '城铁覆盖市区和周边',
      bus: '公交网络发达',
      ferry: '渡轮是特色交通方式',
      taxi: '出租车和Uber都可用'
    },
    attractions: [
      { name: '悉尼歌剧院', category: '地标', description: '世界遗产建筑' },
      { name: '海港大桥', category: '地标', description: '可攀登体验' },
      { name: '邦迪海滩', category: '海滩', description: '冲浪胜地' },
      { name: '达令港', category: '娱乐', description: '餐饮娱乐区' },
      { name: '皇家植物园', category: '公园', description: '麦考利夫人椅看歌剧院' },
      { name: '塔龙加动物园', category: '动物园', description: '可看到袋鼠考拉' }
    ],
    food: [
      { name: '海鲜', description: '新鲜澳洲海鲜', recommendation: '悉尼鱼市场' },
      { name: 'Flat White', description: '澳洲咖啡', recommendation: '任意咖啡馆' },
      { name: '肉派', description: '澳洲快餐', recommendation: 'Harry\'s Cafe de Wheels' },
      { name: '烧烤', description: '澳洲BBQ文化', recommendation: '公园公共烧烤台' }
    ],
    customs: [
      '排队文化严格',
      '海滩注意防晒',
      '公共交通上保持安静',
      '小费非必须，可给10%',
      '左侧通行'
    ],
    tips: [
      '购买Opal卡乘坐公共交通',
      '周日公共交通有封顶价',
      '注意防晒，紫外线很强',
      '游泳注意安全，注意旗帜标识',
      '商店晚上6点关门，周四延长'
    ],
    emergency: { police: '000', ambulance: '000', fire: '000', police_non_urgent: '131-444' }
  },

  // 迪拜
  dubai: {
    festivals: [
      { name: '迪拜购物节', month: '1-2月', description: '打折季和抽奖活动' },
      { name: '开斋节', month: '伊斯兰历', description: '宗教节日庆祝' },
      { name: '迪拜美食节', month: '2-3月', description: '美食活动' },
      { name: '国庆日', month: '12月2日', description: '阿联酋国庆' }
    ],
    transport: {
      airport: '迪拜国际机场(DXB)',
      metro: '无人驾驶地铁，有金车厢',
      bus: '空调巴士覆盖全城',
      taxi: '出租车价格合理，有Uber/Careem'
    },
    attractions: [
      { name: '哈利法塔', category: '地标', description: '世界最高建筑' },
      { name: '迪拜购物中心', category: '购物', description: '世界最大购物中心' },
      { name: '帆船酒店', category: '地标', description: '七星级酒店外观' },
      { name: '朱美拉棕榈岛', category: '人工岛', description: '棕榈形状人工岛' },
      { name: '迪拜喷泉', category: '表演', description: '音乐喷泉表演' },
      { name: '黄金市场', category: '购物', description: '传统市场' }
    ],
    food: [
      { name: '阿拉伯烤肉', description: '传统中东美食', recommendation: 'Al Safadi' },
      { name: '鹰嘴豆泥', description: 'Hummus', recommendation: '阿拉伯餐厅' },
      { name: '沙威玛', description: '中东卷饼', recommendation: '街头小店' },
      { name: '椰枣', description: '阿拉伯甜品', recommendation: 'Bateel' }
    ],
    customs: [
      '公共场合着装保守',
      '斋月期间白天不要在公共场合饮食',
      '左手被认为不洁，用右手递物',
      '清真寺参观需脱鞋，女性需遮头',
      '公共场合避免亲密行为'
    ],
    tips: [
      '购买Nol卡乘坐公共交通',
      '夏季(6-9月)非常炎热，室内活动为主',
      '商场内空调很冷，带外套',
      '周五上午部分商店休息',
      '水比油贵，注意补水'
    ],
    emergency: { police: '999', ambulance: '998', fire: '997' }
  },

  // 曼谷
  bangkok: {
    festivals: [
      { name: '泼水节', month: '4月', description: '宋干节，全国最大节日' },
      { name: '水灯节', month: '11月', description: 'Loi Krathong放灯' },
      { name: '中国新年', month: '1-2月', description: '唐人街庆祝' },
      { name: '国王生日', month: '7月28日', description: '父亲节庆祝' }
    ],
    transport: {
      airport: '素万那普(BKK)和廊曼(DMK)机场',
      bts: '天铁，覆盖主要商业区',
      mrt: '地铁，与BTS换乘',
      boat: '湄南河快船，体验特色交通',
      taxi: '出租车便宜， insist on meter',
      tuk_tuk: '嘟嘟车，体验但要砍价'
    },
    attractions: [
      { name: '大皇宫', category: '宫殿', description: '泰国王室宫殿' },
      { name: '玉佛寺', category: '寺庙', description: '泰国最神圣寺庙' },
      { name: '卧佛寺', category: '寺庙', description: '巨大卧佛' },
      { name: '郑王庙', category: '寺庙', description: '湄南河畔高棉风格' },
      { name: '考山路', category: '背包客区', description: '夜市和酒吧' },
      { name: '乍都乍周末市场', category: '市场', description: '亚洲最大周末市场' }
    ],
    food: [
      { name: '冬阴功', description: '酸辣虾汤', recommendation: '任何餐厅' },
      { name: '泰式炒河粉', description: 'Pad Thai', recommendation: '街头小摊' },
      { name: '芒果糯米饭', description: '经典甜品', recommendation: 'Mae Varee' },
      { name: '青木瓜沙拉', description: 'Som Tam', recommendation: '东北菜餐厅' },
      { name: '泰式奶茶', description: 'Cha Yen', recommendation: '街头摊位' }
    ],
    customs: [
      '进寺庙需脱鞋，着装保守',
      '不要摸别人的头',
      '不要用脚指人或物',
      '对王室要尊重，不要议论',
      '双手合十是常见问候'
    ],
    tips: [
      '购买Rabbit卡乘坐BTS',
      '嘟嘟车要砍价，先谈好价格',
      '街边美食便宜好吃',
      '按摩店选择正规店铺',
      '准备零钱，很多小摊不收大额'
    ],
    emergency: { police: '191', ambulance: '1669', fire: '199', tourist_police: '1155' }
  },

  // 通用模板 - 用于其他城市
  default: {
    festivals: [
      { name: '当地春节/新年', month: '1-2月', description: '庆祝新年的传统节日' },
      { name: '夏季音乐节', month: '6-8月', description: '户外音乐和文化活动' },
      { name: '秋季文化节', month: '9-10月', description: '当地文化展示' },
      { name: '圣诞/年末庆典', month: '12月', description: '年末庆祝活动' }
    ],
    transport: {
      airport: '国际机场，提供全球航班连接',
      train: '城市轨道交通系统覆盖主要区域',
      bus: '公交网络覆盖全城',
      taxi: '出租车和网约车服务可用'
    },
    attractions: [
      { name: '市中心广场', category: '地标', description: '城市中心和主要商业区' },
      { name: '历史博物馆', category: '博物馆', description: '了解当地历史和文化' },
      { name: '城市公园', category: '公园', description: '市中心绿地休闲区' },
      { name: '老城区', category: '文化区', description: '传统建筑和街道' },
      { name: '购物中心', category: '购物', description: '现代购物和娱乐' },
      { name: '观景台', category: '观景', description: '俯瞰城市全景' }
    ],
    food: [
      { name: '当地特色菜', description: '传统美食', recommendation: '当地餐厅' },
      { name: '街头小吃', description: '地道街头美食', recommendation: '夜市和小摊' },
      { name: '咖啡/茶', description: '当地饮品文化', recommendation: '特色咖啡馆' },
      { name: '甜点', description: '传统甜品', recommendation: '甜品店' }
    ],
    customs: [
      '尊重当地文化和习俗',
      '公共场合保持礼貌',
      '遵守当地法律法规',
      '注意环保，不要乱扔垃圾',
      '尊重当地宗教信仰'
    ],
    tips: [
      '提前了解当地交通系统',
      '准备当地货币现金',
      '下载翻译APP辅助沟通',
      '购买旅游保险',
      '保存紧急联系方式'
    ],
    emergency: { police: '112', ambulance: '112', fire: '112' }
  }
};

// 为每个城市生成详情数据
const CITY_DATABASE_DETAIL = {};

Object.keys(CITY_DATABASE).forEach(cityId => {
  const city = CITY_DATABASE[cityId];
  const detail = cityDetails[cityId] || cityDetails['default'];
  
  // 根据城市特点调整详情
  const customizedDetail = JSON.parse(JSON.stringify(detail));
  
  // 为默认模板城市添加城市名称
  if (!cityDetails[cityId]) {
    customizedDetail.festivals.forEach(f => {
      f.name = f.name.replace('当地', city.country);
    });
    customizedDetail.attractions.forEach(a => {
      a.name = a.name.replace('城市', city.name);
    });
  }
  
  CITY_DATABASE_DETAIL[cityId] = {
    ...city,
    ...customizedDetail
  };
});

console.log('Generated details for', Object.keys(CITY_DATABASE_DETAIL).length, 'cities');

// 写入文件
const output = `// ============================================================
// SafeCity Global - 城市详情数据库 v4.0
// 包含${Object.keys(CITY_DATABASE_DETAIL).length}个城市的详细信息
// 包含：节日活动、交通指南、景点推荐、美食推荐、文化习俗、实用贴士
// ============================================================

var CITY_DATABASE_DETAIL = ${JSON.stringify(CITY_DATABASE_DETAIL, null, 2)};`;

fs.writeFileSync('/Users/leo/WorkBuddy/20260330203857/safecity/data_new.js', output);
console.log('Detail data file written successfully!');
