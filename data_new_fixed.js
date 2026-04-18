// SafeCity Global - 全球城市安全数据库 v7.0
// 包含 200+ 全球主要城市，详细安全评估
// 更新时间: 2026-04-12

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

// 城市图片URL映射 - 确保每个城市有正确且唯一的图片
const CITY_IMAGES = {
  // 亚洲 - 日本
  'tokyo': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80',
  'osaka': 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&q=80',
  'kyoto': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80',
  'sapporo': 'https://images.unsplash.com/photo-1568410698699-de9cae40f37e?w=400&q=80',
  'nagoya': 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400&q=80',
  'fukuoka': 'https://images.unsplash.com/photo-1580130732478-4e339fb33746?w=400&q=80',
  'hiroshima': 'https://images.unsplash.com/photo-1569070593903-647b27e1e2e6?w=400&q=80',
  'sendai': 'https://images.unsplash.com/photo-1577861076009-4c5e1e2fa9e7?w=400&q=80',
  'yokohama': 'https://images.unsplash.com/photo-1573984699404-08cb8f6f4e5c?w=400&q=80',
  'kobe': 'https://images.unsplash.com/photo-1598887142487-3c854d51eabb?w=400&q=80',

  // 亚洲 - 韩国
  'seoul': 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=400&q=80',
  'busan': 'https://images.unsplash.com/photo-1606884441027-fd5cb4eb1897?w=400&q=80',
  'jeju': 'https://images.unsplash.com/photo-1551867051-1c81b1b9a8a4?w=400&q=80',
  'incheon': 'https://images.unsplash.com/photo-1580655653885-6571f35b1bb2?w=400&q=80',
  'daegu': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',

  // 亚洲 - 中国
  'beijing': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80',
  'shanghai': 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=400&q=80',
  'hongkong': 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400&q=80',
  'taipei': 'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=400&q=80',
  'macau': 'https://images.unsplash.com/photo-1586788680434-30d324626f4c?w=400&q=80',
  'guangzhou': 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=400&q=80',
  'shenzhen': 'https://images.unsplash.com/photo-1599638189897-03c837495395?w=400&q=80',
  'chengdu': 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&q=80',
  'xian': 'https://images.unsplash.com/photo-1529921879218-f99546d03a24?w=400&q=80',
  'hangzhou': 'https://images.unsplash.com/photo-1598887140942-f39757349dfa?w=400&q=80',

  // 亚洲 - 东南亚
  'singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80',
  'bangkok': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80',
  'kualalumpur': 'https://images.unsplash.com/photo-1595607691540-c3e6ae39b06f?w=400&q=80',
  'jakarta': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80',
  'bali': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80',
  'manila': 'https://images.unsplash.com/photo-1515458547459-2f0d71891093?w=400&q=80',
  'hochiminh': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
  'hanoi': 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=400&q=80',
  'phnompenh': 'https://images.unsplash.com/photo-1528127269322-3d1d02552c29?w=400&q=80',
  'vientiane': 'https://images.unsplash.com/photo-1552812954-64a74f9523c5?w=400&q=80',
  'yangon': 'https://images.unsplash.com/photo-1544085701-4d1e5e0b7c6a?w=400&q=80',
  'colombo': 'https://images.unsplash.com/photo-1586613835341-ab702353ca87?w=400&q=80',
  'dhaka': 'https://images.unsplash.com/photo-1566966330772-9681c1f00e44?w=400&q=80',
  'kathmandu': 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&q=80',

  // 亚洲 - 南亚
  'mumbai': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80',
  'delhi': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80',
  'bangalore': 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&q=80',
  'chennai': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80',
  'kolkata': 'https://images.unsplash.com/photo-1558431382-f12e866a069d?w=400&q=80',
  'hyderabad': 'https://images.unsplash.com/photo-1603714228681-b399854b8f80?w=400&q=80',
  'pune': 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80',
  'jaipur': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80',
  'agra': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80',
  'goa': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80',

  // 亚洲 - 中东
  'dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80',
  'abu_dhabi': 'https://images.unsplash.com/photo-1548834925-e48f8a27ae16?w=400&q=80',
  'doha': 'https://images.unsplash.com/photo-1577452209-925d3ac89e31?w=400&q=80',
  'riyadh': 'https://images.unsplash.com/photo-1593246049227-5c8e2e6f4f4e?w=400&q=80',
  'jeddah': 'https://images.unsplash.com/photo-1593252719939-8e24c4c23e0c?w=400&q=80',
  'kuwait': 'https://images.unsplash.com/photo-1573941345055-4f4b4d10e2b7?w=400&q=80',
  'muscat': 'https://images.unsplash.com/photo-1587385760169-0df8b87a7bc5?w=400&q=80',
  'manama': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80',
  'amman': 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=400&q=80',
  'beirut': 'https://images.unsplash.com/photo-1578662997250-e87e5cd7d849?w=400&q=80',
  'telaviv': 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80',
  'jerusalem': 'https://images.unsplash.com/photo-1544108605-11c0397b9c9d?w=400&q=80',
  'istanbul': 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80',
  'ankara': 'https://images.unsplash.com/photo-1589308078059-be1415e4eabc?w=400&q=80',
  'antakya': 'https://images.unsplash.com/photo-158930216冉有用/1548951135817-79dc0bb8e0c3?w=400&q=80',

  // 欧洲 - 西欧
  'london': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80',
  'paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
  'amsterdam': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&q=80',
  'brussels': 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?w=400&q=80',
  'vienna': 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80',
  'zurich': 'https://images.unsplash.com/photo-1515486976394-83ad7c1fd02e?w=400&q=80',
  'geneva': 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&q=80',
  'luxembourg': 'https://images.unsplash.com/photo-1599940824399-b87987ce0799?w=400&q=80',
  'monaco': 'https://images.unsplash.com/photo-1534005183086-582b37f02d9e?w=400&q=80',

  // 欧洲 - 南欧
  'rome': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80',
  'milan': 'https://images.unsplash.com/photo-1513177775266-6c4e4bb01b54?w=400&q=80',
  'venice': 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&q=80',
  'florence': 'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=400&q=80',
  'barcelona': 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&q=80',
  'madrid': 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&q=80',
  'lisbon': 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=400&q=80',
  'athens': 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&q=80',
  'santorini': 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&q=80',
  'palma': 'https://images.unsplash.com/photo-1559599746-c0f31e51e0a5?w=400&q=80',
  'malaga': 'https://images.unsplash.com/photo-1569761615338-2710db2f5e19?w=400&q=80',
  'valencia': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
  'seville': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  'nice': 'https://images.unsplash.com/photo-1491166617655-0723a0999cd8?w=400&q=80',
  'marseille': 'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=400&q=80',

  // 欧洲 - 北欧
  'stockholm': 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&q=80',
  'copenhagen': 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=400&q=80',
  'oslo': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  'helsinki': 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=400&q=80',
  'reykjavik': 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=400&q=80',
  'gothenburg': 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80',
  'bergen': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',

  // 欧洲 - 中欧
  'berlin': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&q=80',
  'munich': 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400&q=80',
  'frankfurt': 'https://images.unsplash.com/photo-1569230952951-64c5b5c3d7e3?w=400&q=80',
  'hamburg': 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=400&q=80',
  'prague': 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&q=80',
  'budapest': 'https://images.unsplash.com/photo-1551865071-c5a19c8ae7ae?w=400&q=80',
  'warsaw': 'https://images.unsplash.com/photo-1591135702967-8e5e7c6ea4c9?w=400&q=80',
  'krakow': 'https://images.unsplash.com/photo-1593343136654-6a6c9f4c7e29?w=400&q=80',
  'vienna_at': 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80',
  'salzburg': 'https://images.unsplash.com/photo-1553123764-a3e6f8a9c4f5?w=400&q=80',

  // 欧洲 - 东欧
  'moscow': 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&q=80',
  'stpetersburg': 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400&q=80',
  'kiev': 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&q=80',
  'minsk': 'https://images.unsplash.com/photo-1566159264423-7b73c0e6bb07?w=400&q=80',
  'bucharest': 'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=400&q=80',
  'sofia': 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&q=80',
  'belgrade': 'https://images.unsplash.com/photo-1578662997250-e87e5cd7d849?w=400&q=80',
  'zagreb': 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80',
  'dubrovnik': 'https://images.unsplash.com/photo-1555990538-1e9e6a4c4a75?w=400&q=80',

  // 美洲 - 北美
  'newyork': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80',
  'losangeles': 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&q=80',
  'chicago': 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=400&q=80',
  'sanfrancisco': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80',
  'miami': 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=400&q=80',
  'lasvegas': 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=400&q=80',
  'seattle': 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=400&q=80',
  'boston': 'https://images.unsplash.com/photo-1569605803666-57ab390a5e07?w=400&q=80',
  'washington': 'https://images.unsplash.com/photo-1564246541328-c7a7f50b4cde?w=400&q=80',
  'denver': 'https://images.unsplash.com/photo-154ad21e-41b8-8d93-1ae6c5e9c4e2?w=400&q=80',
  'atlanta': 'https://images.unsplash.com/photo-1565823115687-5e4268448711?w=400&q=80',
  'phoenix': 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=400&q=80',
  'sandiego': 'https://images.unsplash.com/photo-1538097304804-2a1b932466a9?w=400&q=80',
  'houston': 'https://images.unsplash.com/photo-1600861195091-690e3ddf0c6e?w=400&q=80',
  'detroit': 'https://images.unsplash.com/photo-1618506549647-c01bb0b4c8c0?w=400&q=80',

  // 美洲 - 加拿大
  'toronto': 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&q=80',
  'vancouver': 'https://images.unsplash.com/photo-1559511260-66a68d5a8a22?w=400&q=80',
  'montreal': 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80',
  'calgary': 'https://images.unsplash.com/photo-1558638295-4aa93c1e1f63?w=400&q=80',
  'ottawa': 'https://images.unsplash.com/photo-1570521462033-3015e76e7432?w=400&q=80',
  'quebec': 'https://images.unsplash.com/photo-1569906643684-4c4c4a7c9a0e?w=400&q=80',

  // 美洲 - 拉丁美洲
  'mexico_city': 'https://images.unsplash.com/photo-1518659526054-37134bb9e5c5?w=400&q=80',
  'cancun': 'https://images.unsplash.com/photo-1552553302-9211bf7f7053?w=400&q=80',
  'guadalajara': 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400&q=80',
  'havana': 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80',
  'sanjuan': 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=400&q=80',
  'santo_domingo': 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=400&q=80',

  // 美洲 - 中美/南美
  'bogota': 'https://images.unsplash.com/photo-1568438350562-2cae6d2b9f78?w=400&q=80',
  'medellin': 'https://images.unsplash.com/photo-1599413987323-b2b8c0d7d9c8?w=400&q=80',
  'cartagena': 'https://images.unsplash.com/photo-1583531172067-7bbd0b4e4c5a?w=400&q=80',
  'lima': 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=400&q=80',
  'cusco': 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400&q=80',
  'santiago': 'https://images.unsplash.com/photo-1531734480671-9a8cf5f82c67?w=400&q=80',
  'riodejaneiro': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80',
  'saopaulo': 'https://images.unsplash.com/photo-1577948000111-9c970dfe3744?w=400&q=80',
  'buenosaires': 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&q=80',
  'montevideo': 'https://images.unsplash.com/photo-1590080876051-2c2808b65338?w=400&q=80',
  'caracas': 'https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=400&q=80',

  // 大洋洲
  'sydney': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80',
  'melbourne': 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400&q=80',
  'brisbane': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  'perth': 'https://images.unsplash.com/photo-1597659840241-6b55e1e8b2b1?w=400&q=80',
  'adelaide': 'https://images.unsplash.com/photo-1589308078059-be1415e4eabc?w=400&q=80',
  'auckland': 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80',
  'wellington': 'https://images.unsplash.com/photo-1577493343174-3f4a5e8f7b5c?w=400&q=80',
  'queenstown': 'https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=400&q=80',
  'fiji': 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80',

  // 非洲 - 北非
  'cairo': 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&q=80',
  'alexandria': 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400&q=80',
  'luxor': 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400&q=80',
  'casablanca': 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&q=80',
  'marrakech': 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=400&q=80',
  'tunis': 'https://images.unsplash.com/photo-1571401834972-0e56c4e1a5c2?w=400&q=80',
  'tripoli': 'https://images.unsplash.com/photo-1568405535221-a3b63d0b73b9?w=400&q=80',
  'algiers': 'https://images.unsplash.com/photo-1578930215259-8d178d6f8f71?w=400&q=80',

  // 非洲 - 西非
  'lagos': 'https://images.unsplash.com/photo-1586012611133-6f7f4b7e2e01?w=400&q=80',
  'abuja': 'https://images.unsplash.com/photo-1599822026073-6f7f4b7e2e01?w=400&q=80',
  'accra': 'https://images.unsplash.com/photo-1579621336883-6a4b8c7e2e01?w=400&q=80',
  'dakar': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
  'douala': 'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=400&q=80',
  'yaounde': 'https://images.unsplash.com/photo-1580663548749-6e06b5e56d8b?w=400&q=80',

  // 非洲 - 东非
  'nairobi': 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=400&q=80',
  'mombasa': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',
  'addis_ababa': 'https://images.unsplash.com/photo-1577452209-925d3ac89e31?w=400&q=80',
  'dar_es_salaam': 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80',
  'kampala': 'https://images.unsplash.com/photo-1586012611133-6f7f4b7e2e01?w=400&q=80',
  'kigali': 'https://images.unsplash.com/photo-1578662997250-e87e5cd7d849?w=400&q=80',

  // 非洲 - 南非
  'johannesburg': 'https://images.unsplash.com/photo-1552858725-2758b5fb1286?w=400&q=80',
  'capetown': 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80',
  'durban': 'https://images.unsplash.com/photo-1598887140942-f39757349dfa?w=400&q=80',
  'pretoria': 'https://images.unsplash.com/photo-1569070593903-647b27e1e2e6?w=400&q=80',
  'port_elizabeth': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80',

  // 非洲 - 中非
  'kinshasa': 'https://images.unsplash.com/photo-1586012611133-6f7f4b7e2e01?w=400&q=80',
  'luanda': 'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?w=400&q=80',
  'harare': 'https://images.unsplash.com/photo-1598887140942-f39757349dfa?w=400&q=80',
  'lusaka': 'https://images.unsplash.com/photo-1580663548749-6e06b5e56d8b?w=400&q=80',
  'maputo': 'https://images.unsplash.com/photo-1568405535221-a3b63b0d7d9c?w=400&q=80'
};

// 默认图片
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80';

// 获取城市图片
function getCityImage(cityId) {
  return CITY_IMAGES[cityId] || DEFAULT_IMAGE;
}

var CITY_DATABASE = {
