// ============================================================
// SafeCity Global - 实时数据引擎 v2.0
// ============================================================
// 数据源（全部免费公开，无需 API Key）：
//   1. Open-Meteo  — 天气 + 7天预报 (open-meteo.com)
//   2. GDACS       — 联合国灾害预警 (gdacs.org)
//   3. USGS        — 地震数据 (earthquake.usgs.gov)
//
// 架构特性：
//   • 内存缓存 (Memory) + localStorage 持久缓存 (Disk) 双层
//   • 自动重试（指数退避，最多2次）
//   • 优雅降级：API失败 → 显示上次缓存 → 显示友好占位
//   • 并行请求聚合，总加载时间 <3s
//   • 缓存状态标签：LIVE / CACHED / OFFLINE
// ============================================================

const REALTIME_API = (() => {
  // ─── 配置 ──────────────────────────────────────────────
  const CFG = {
    MEM_TTL:   15 * 60 * 1000,  // 内存缓存 15 分钟
    DISK_TTL:  60 * 60 * 1000,  // localStorage 缓存 1 小时
    TIMEOUT:   9000,            // 单请求超时 9s
    RETRY:     2,               // 最多重试 2 次
    RETRY_MS:  1200,            // 重试间隔
    DISK_PFX:  'sc_cache_',     // localStorage key 前缀
  };

  // ─── WMO 天气码映射 ──────────────────────────────────────
  const WMO = {
    0:  { d:'晴朗',       i:'☀️',  a:false },
    1:  { d:'基本晴朗',   i:'🌤️', a:false },
    2:  { d:'局部多云',   i:'⛅',  a:false },
    3:  { d:'阴天',       i:'☁️',  a:false },
    45: { d:'有雾',       i:'🌫️', a:false },
    48: { d:'冻雾',       i:'🌫️', a:true  },
    51: { d:'细雨',       i:'🌦️', a:false },
    53: { d:'中雨',       i:'🌦️', a:false },
    55: { d:'强毛毛雨',   i:'🌧️', a:false },
    61: { d:'小雨',       i:'🌧️', a:false },
    63: { d:'中雨',       i:'🌧️', a:false },
    65: { d:'大雨',       i:'🌧️', a:true  },
    71: { d:'小雪',       i:'🌨️', a:false },
    73: { d:'中雪',       i:'❄️',  a:false },
    75: { d:'大雪',       i:'❄️',  a:true  },
    77: { d:'雪粒',       i:'🌨️', a:false },
    80: { d:'阵雨（轻）', i:'🌦️', a:false },
    81: { d:'阵雨（中）', i:'🌧️', a:false },
    82: { d:'强阵雨',     i:'⛈️',  a:true  },
    85: { d:'阵雪（轻）', i:'🌨️', a:false },
    86: { d:'强阵雪',     i:'❄️',  a:true  },
    95: { d:'雷暴',       i:'⛈️',  a:true  },
    96: { d:'雷暴伴冰雹', i:'⛈️',  a:true  },
    99: { d:'强雷暴+冰雹',i:'🌩️', a:true  },
  };

  // ─── GDACS 类型映射 ──────────────────────────────────────
  const GDACS_TYPE = {
    EQ: { name:'地震',      icon:'🌍', color:'#f97316' },
    TC: { name:'热带气旋',  icon:'🌀', color:'#ef4444' },
    FL: { name:'洪水',      icon:'🌊', color:'#3b82f6' },
    VO: { name:'火山喷发',  icon:'🌋', color:'#dc2626' },
    WF: { name:'野火',      icon:'🔥', color:'#f97316' },
    DR: { name:'干旱',      icon:'☀️', color:'#f59e0b' },
  };

  const GDACS_LEVEL = {
    Red:    { label:'极端危险', color:'#dc2626', pri:3 },
    Orange: { label:'危险',     color:'#f97316', pri:2 },
    Green:  { label:'关注',     color:'#f59e0b', pri:1 },
  };

  // ─── 双层缓存 ──────────────────────────────────────────
  const mem = new Map();

  function memGet(k) {
    const it = mem.get(k);
    if (!it) return null;
    if (Date.now() - it.ts > CFG.MEM_TTL) { mem.delete(k); return null; }
    return { data: it.data, age: Date.now() - it.ts, src: 'live' };
  }
  function memSet(k, d) { mem.set(k, { data: d, ts: Date.now() }); return d; }

  function diskGet(k) {
    try {
      const raw = localStorage.getItem(CFG.DISK_PFX + k);
      if (!raw) return null;
      const it = JSON.parse(raw);
      if (Date.now() - it.ts > CFG.DISK_TTL) { localStorage.removeItem(CFG.DISK_PFX + k); return null; }
      return { data: it.data, age: Date.now() - it.ts, src: 'cached' };
    } catch { return null; }
  }
  function diskSet(k, d) {
    try { localStorage.setItem(CFG.DISK_PFX + k, JSON.stringify({ data: d, ts: Date.now() })); } catch {}
    return d;
  }

  // 获取缓存（先内存后磁盘）
  function cacheGet(k) {
    return memGet(k) || diskGet(k);
  }
  function cacheSet(k, d) {
    memSet(k, d);
    diskSet(k, d);
    return d;
  }
  // 仅清内存缓存（保留磁盘）
  function cacheInvalidate(k) { mem.delete(k); }
  // 清全部
  function cacheFlush(k) {
    mem.delete(k);
    try { localStorage.removeItem(CFG.DISK_PFX + k); } catch {}
  }

  // ─── 带重试的 fetch ────────────────────────────────────
  async function fetchWithRetry(url, attempt = 0) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(CFG.TIMEOUT) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      if (attempt < CFG.RETRY) {
        await new Promise(r => setTimeout(r, CFG.RETRY_MS * (attempt + 1)));
        return fetchWithRetry(url, attempt + 1);
      }
      throw e;
    }
  }

  // ─── 缓存状态徽章 HTML ─────────────────────────────────
  function cacheBadge(src, updatedAt) {
    if (src === 'live') {
      return `<span class="cache-badge live">● LIVE</span><span class="cache-ts">${updatedAt}</span>`;
    }
    if (src === 'cached') {
      return `<span class="cache-badge cached">🕐 CACHED</span><span class="cache-ts">${updatedAt}</span>`;
    }
    return `<span class="cache-badge offline">⚠ OFFLINE</span>`;
  }

  // ─── 骨架屏 HTML ───────────────────────────────────────
  function skeleton(lines = 3) {
    return `<div class="skel-wrap">
      ${Array.from({length: lines}, (_, i) => `
        <div class="skel-row" style="width:${[90,75,60,80,55][i % 5]}%"></div>`).join('')}
    </div>`;
  }

  // ═══════════════════════════════════════════════════════
  // API 1 ▶ Open-Meteo 实时天气
  // ═══════════════════════════════════════════════════════
  async function getWeather(lat, lng, cityId) {
    const key = `weather_${cityId}`;
    const hit = cacheGet(key);
    if (hit) return { ...hit.data, _src: hit.src };

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}` +
        `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,precipitation` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max` +
        `&timezone=auto&forecast_days=7`;

      const raw = await fetchWithRetry(url);
      const cur = raw.current;
      const wmo = WMO[cur.weather_code] || { d:'未知', i:'🌡️', a:false };

      const result = {
        current: {
          temp:        Math.round(cur.temperature_2m),
          humidity:    cur.relative_humidity_2m,
          windSpeed:   Math.round(cur.wind_speed_10m),
          precipitation: cur.precipitation || 0,
          weatherCode: cur.weather_code,
          weatherDesc: wmo.d,
          weatherIcon: wmo.i,
          hasAlert:    wmo.a || cur.wind_speed_10m > 60 || (cur.precipitation || 0) > 20,
        },
        forecast: raw.daily.time.slice(0, 5).map((date, i) => {
          const fw = WMO[raw.daily.weather_code[i]] || { i:'🌡️', d:'—' };
          return {
            date,
            maxTemp:      Math.round(raw.daily.temperature_2m_max[i]),
            minTemp:      Math.round(raw.daily.temperature_2m_min[i]),
            precipitation: Math.round(raw.daily.precipitation_sum[i] || 0),
            icon:  fw.i,
            desc:  fw.d,
          };
        }),
        source:    'Open-Meteo',
        updatedAt: new Date().toLocaleTimeString('zh-CN'),
        _src:      'live',
      };

      cacheSet(key, result);
      return result;
    } catch (e) {
      console.warn('[Weather] 请求失败:', e.message);
      const disk = diskGet(key);
      if (disk) return { ...disk.data, _src: 'cached' };
      return null;
    }
  }

  // ═══════════════════════════════════════════════════════
  // API 2 ▶ GDACS 全球灾害预警（联合国）
  // ═══════════════════════════════════════════════════════
  async function getGlobalDisasters(forceRefresh = false) {
    const key = 'gdacs_global';
    if (forceRefresh) cacheInvalidate(key);
    const hit = cacheGet(key);
    if (hit) return { ...hit.data, _src: hit.src };

    try {
      const today = new Date().toISOString().split('T')[0];
      const week  = new Date(Date.now() - 7 * 864e5).toISOString().split('T')[0];
      const url = `https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH` +
        `?eventlist=EQ,TC,FL,VO,WF&alertlevel=Orange,Red&fromdate=${week}&todate=${today}&limit=30`;

      const raw = await fetchWithRetry(url);
      const features = raw.features || [];

      const events = features.map(f => {
        const p    = f.properties;
        const type = GDACS_TYPE[p.eventtype] || { name: p.eventtype, icon:'⚠️', color:'#f97316' };
        const lvl  = GDACS_LEVEL[p.alertlevel] || GDACS_LEVEL.Green;
        const coords = f.geometry?.coordinates || [0, 0];
        return {
          id:         p.eventid,
          type:       p.eventtype,
          typeName:   type.name,
          typeIcon:   type.icon,
          typeColor:  type.color,
          alertLevel: p.alertlevel,
          alertLabel: lvl.label,
          alertColor: lvl.color,
          priority:   lvl.pri,
          name:       p.name || `${type.name} - ${p.country}`,
          country:    p.country || '未知地区',
          description: p.severitydata?.severitytext || p.description || '',
          lat:         coords[1],
          lng:         coords[0],
          fromDate:    p.fromdate ? p.fromdate.split('T')[0] : '',
          url: p.url?.report || `https://www.gdacs.org/report.aspx?eventtype=${p.eventtype}&eventid=${p.eventid}`,
        };
      }).sort((a, b) => b.priority - a.priority);

      const result = {
        events,
        total:     events.length,
        updatedAt: new Date().toLocaleTimeString('zh-CN'),
        _src:      'live',
      };

      cacheSet(key, result);
      return result;
    } catch (e) {
      console.warn('[GDACS] 请求失败:', e.message);
      const disk = diskGet(key);
      if (disk) return { ...disk.data, _src: 'cached' };
      return null;
    }
  }

  // ═══════════════════════════════════════════════════════
  // API 3 ▶ USGS 地震数据
  // ═══════════════════════════════════════════════════════
  async function getNearbyEarthquakes(lat, lng, radiusKm = 500) {
    const key = `quake_${lat.toFixed(1)}_${lng.toFixed(1)}`;
    const hit = cacheGet(key);
    if (hit) return { ...hit.data, _src: hit.src };

    try {
      const end   = new Date().toISOString();
      const start = new Date(Date.now() - 30 * 864e5).toISOString();
      const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson` +
        `&starttime=${start}&endtime=${end}` +
        `&latitude=${lat}&longitude=${lng}&maxradiuskm=${radiusKm}` +
        `&minmagnitude=4.0&orderby=magnitude&limit=5`;

      const raw = await fetchWithRetry(url);
      const quakes = (raw.features || []).map(f => ({
        magnitude: f.properties.mag,
        place:     f.properties.place,
        time:      new Date(f.properties.time).toLocaleDateString('zh-CN'),
        depth:     (f.geometry.coordinates[2] || 0).toFixed(1),
        url:       f.properties.url,
        alert:     f.properties.alert || '',
      }));

      const result = {
        quakes,
        count:     quakes.length,
        updatedAt: new Date().toLocaleTimeString('zh-CN'),
        _src:      'live',
      };

      cacheSet(key, result);
      return result;
    } catch (e) {
      console.warn('[USGS] 请求失败:', e.message);
      const disk = diskGet(key);
      if (disk) return { ...disk.data, _src: 'cached' };
      return null;
    }
  }

  // ═══════════════════════════════════════════════════════
  // 聚合 ▶ 城市实时数据（并行）
  // ═══════════════════════════════════════════════════════
  async function getCityLiveData(cityId, lat, lng) {
    const [wRes, qRes, dRes] = await Promise.allSettled([
      getWeather(lat, lng, cityId),
      getNearbyEarthquakes(lat, lng, 300),
      getGlobalDisasters(),
    ]);

    const weather  = wRes.status === 'fulfilled' ? wRes.value : null;
    const quakes   = qRes.status === 'fulfilled' ? qRes.value : null;
    const disasters = dRes.status === 'fulfilled' ? dRes.value : null;

    // 筛选周边1500km内的灾害（按经纬度欧氏距离≈15°）
    const nearbyDisasters = (disasters?.events || []).filter(d => {
      if (!d.lat && !d.lng) return false;
      return Math.sqrt(Math.pow(d.lat - lat, 2) + Math.pow(d.lng - lng, 2)) < 15;
    });

    return {
      weather,
      quakes,
      nearbyDisasters,
      disastersSrc: disasters?._src || 'offline',
      fetchedAt: new Date().toLocaleString('zh-CN'),
    };
  }

  // ═══════════════════════════════════════════════════════
  // 聚合 ▶ 全球预警页数据
  // ═══════════════════════════════════════════════════════
  async function getAlertsPageData(forceRefresh = false) {
    const key = 'alerts_page';
    if (forceRefresh) { cacheInvalidate(key); cacheInvalidate('gdacs_global'); }
    const hit = cacheGet(key);
    if (hit) return { ...hit.data, _src: hit.src };

    const disasters = await getGlobalDisasters(forceRefresh);

    // USGS M6.0+ 全球重大地震（过去14天）
    let majorQuakes = [];
    try {
      const end   = new Date().toISOString();
      const start = new Date(Date.now() - 14 * 864e5).toISOString();
      const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson` +
        `&starttime=${start}&endtime=${end}&minmagnitude=6.0&orderby=time&limit=10`;
      const raw = await fetchWithRetry(url);
      majorQuakes = (raw.features || []).map(f => ({
        type:       'EQ',
        typeName:   '强烈地震',
        typeIcon:   '🌍',
        alertLevel: f.properties.mag >= 7 ? 'Red' : 'Orange',
        alertLabel: f.properties.mag >= 7 ? '极端危险' : '危险',
        alertColor: f.properties.mag >= 7 ? '#dc2626' : '#f97316',
        priority:   f.properties.mag >= 7 ? 3 : 2,
        name:       `M${f.properties.mag} 地震 — ${f.properties.place}`,
        country:    f.properties.place || '未知',
        description: `里氏 ${f.properties.mag} 级，深度 ${(f.geometry.coordinates[2]||0).toFixed(0)} km。${f.properties.alert === 'red' ? '⚠️ PAGER红色预警，可能造成重大伤亡。' : ''}`,
        fromDate:   new Date(f.properties.time).toLocaleDateString('zh-CN'),
        url:        f.properties.url,
        source:     'USGS',
        lat:        f.geometry.coordinates[1],
        lng:        f.geometry.coordinates[0],
      }));
    } catch (e) {
      console.warn('[USGS Major] 请求失败:', e.message);
    }

    const allAlerts = [
      ...(disasters?.events || []).map(d => ({ ...d, source: 'GDACS' })),
      ...majorQuakes,
    ].sort((a, b) => (b.priority || 0) - (a.priority || 0));

    const result = {
      alerts:      allAlerts,
      total:       allAlerts.length,
      redCount:    allAlerts.filter(a => a.alertLevel === 'Red').length,
      orangeCount: allAlerts.filter(a => a.alertLevel === 'Orange').length,
      updatedAt:   new Date().toLocaleString('zh-CN'),
      _src:        'live',
    };

    cacheSet(key, result);
    return result;
  }

  // ─── 公开 API ──────────────────────────────────────────
  return {
    // 数据方法
    getWeather,
    getGlobalDisasters,
    getNearbyEarthquakes,
    getCityLiveData,
    getAlertsPageData,

    // 工具方法
    skeleton,
    cacheBadge,
    cacheFlush,
    cacheInvalidate,

    // 直接访问缓存（用于调试）
    _mem: mem,
    _cfg: CFG,
  };
})();


// ================================================================
// SafeCity 前端渲染器 v2.0
// 负责：实时数据面板渲染、骨架屏、缓存状态标签、城市卡片天气徽章
// ================================================================

const RT_UI = {
  // ─── 核心：渲染城市实时数据面板 ──────────────────────────
  async renderCityLive(cityData) {
    const { lat, lng, id } = cityData;

    // 先显示骨架屏
    this._setLiveLoading();

    const liveData = await REALTIME_API.getCityLiveData(id, lat, lng);

    this._renderWeather(liveData.weather);
    this._renderQuakes(liveData.quakes);
    this._renderNearbyDisasters(liveData.nearbyDisasters, liveData.disastersSrc);
  },

  _setLiveLoading() {
    document.getElementById('live-weather-content').innerHTML =
      REALTIME_API.skeleton(4);
    document.getElementById('live-quake-content').innerHTML =
      REALTIME_API.skeleton(3);
    document.getElementById('live-disaster-content').innerHTML =
      REALTIME_API.skeleton(2);
  },

  // ─── 天气渲染 ───────────────────────────────────────────
  _renderWeather(w) {
    const el = document.getElementById('live-weather-content');
    if (!w) {
      el.innerHTML = `<div class="live-offline"><span>⚠️</span><div><strong>天气数据暂时不可用</strong><br>可能是网络或 API 限制，请稍后刷新</div></div>`;
      return;
    }

    const alertBanner = w.current.hasAlert
      ? `<div class="weather-alert-banner">⚠️ 当前天气存在风险：${w.current.weatherDesc}，风速 ${w.current.windSpeed} km/h，降水 ${w.current.precipitation} mm</div>`
      : '';

    const forecastHtml = w.forecast.map(d => {
      const date = new Date(d.date);
      const label = date.toLocaleDateString('zh-CN', { month:'numeric', day:'numeric' });
      return `
        <div class="forecast-day">
          <div class="forecast-day-label">${label}</div>
          <div class="forecast-icon">${d.icon}</div>
          <div class="forecast-temps">
            <span class="forecast-max">${d.maxTemp}°</span>
            <span class="forecast-min"> / ${d.minTemp}°</span>
          </div>
          ${d.precipitation > 0 ? `<div class="forecast-rain">💧 ${d.precipitation}mm</div>` : ''}
        </div>`;
    }).join('');

    const srcBadge = REALTIME_API.cacheBadge(w._src, w.updatedAt);

    el.innerHTML = `
      <div class="weather-current">
        <div class="weather-icon-big">${w.current.weatherIcon}</div>
        <div>
          <div class="weather-temp-big">${w.current.temp}°C</div>
          <div class="weather-desc-big">${w.current.weatherDesc}</div>
        </div>
        <div class="weather-meta">
          <div class="weather-meta-item">💧 ${w.current.humidity}%</div>
          <div class="weather-meta-item">💨 ${w.current.windSpeed} km/h</div>
          ${w.current.precipitation > 0 ? `<div class="weather-meta-item">🌧️ ${w.current.precipitation}mm</div>` : ''}
        </div>
      </div>
      ${alertBanner}
      <div class="weather-forecast">${forecastHtml}</div>
      <div class="live-src-row">📡 Open-Meteo ${srcBadge}</div>`;
  },

  // ─── 地震渲染 ───────────────────────────────────────────
  _renderQuakes(q) {
    const el = document.getElementById('live-quake-content');
    if (!q) {
      el.innerHTML = `<div class="live-offline"><span>⚠️</span><div><strong>地震数据暂时不可用</strong><br>USGS 接口暂时无法访问</div></div>`;
      return;
    }

    const srcBadge = REALTIME_API.cacheBadge(q._src, q.updatedAt);

    if (q.quakes.length === 0) {
      el.innerHTML = `
        <div class="live-ok-banner">✅ 过去 30 天周边 300km 内无 M4.0+ 地震记录</div>
        <div class="live-src-row">📡 USGS ${srcBadge}</div>`;
      return;
    }

    el.innerHTML = `
      <div class="quake-list">
        ${q.quakes.map(qk => {
          const magClass = qk.magnitude >= 6 ? 'large' : qk.magnitude >= 5 ? 'medium' : '';
          const pagemAlert = qk.alert === 'red'
            ? `<span class="pager-alert red">⚠ PAGER红色</span>`
            : qk.alert === 'orange'
            ? `<span class="pager-alert orange">⚠ PAGER橙色</span>` : '';
          return `
            <div class="quake-item">
              <div class="quake-mag ${magClass}">M${qk.magnitude}</div>
              <div class="quake-info">
                <div class="quake-place">${qk.place}</div>
                <div class="quake-meta">${qk.time} · 深度 ${qk.depth}km ${pagemAlert}</div>
              </div>
              ${qk.url ? `<a href="${qk.url}" target="_blank" class="quake-link">报告</a>` : ''}
            </div>`;
        }).join('')}
      </div>
      <div class="live-src-row">📡 USGS · 过去30天300km内M4.0+ ${srcBadge}</div>`;
  },

  // ─── 附近灾害渲染 ────────────────────────────────────────
  _renderNearbyDisasters(list, src) {
    const el = document.getElementById('live-disaster-content');
    const srcBadge = REALTIME_API.cacheBadge(src || 'live', '');

    if (!list || list.length === 0) {
      el.innerHTML = `
        <div class="live-ok-banner">✅ 周边地区暂无活跃灾害预警（来自 GDACS 联合国数据库）</div>
        <div class="live-src-row">📡 GDACS（联合国）${srcBadge}</div>`;
      return;
    }

    el.innerHTML = list.map(d => {
      const badgeStyle = d.alertLevel === 'Red'
        ? 'background:rgba(220,38,38,0.2);color:#ef4444'
        : 'background:rgba(249,115,22,0.2);color:#f97316';
      return `
        <div class="quake-item" style="border-left-color:${d.alertColor};">
          <div style="font-size:26px;line-height:1">${d.typeIcon}</div>
          <div class="quake-info">
            <div class="quake-place">${d.name}</div>
            <div class="quake-meta">
              <span style="${badgeStyle};padding:1px 7px;border-radius:4px;font-size:10px;font-weight:700;margin-right:6px">${d.alertLabel}</span>
              ${d.description ? d.description.substring(0, 70) + (d.description.length > 70 ? '…' : '') : ''}
            </div>
          </div>
          ${d.url ? `<a href="${d.url}" target="_blank" class="quake-link">报告</a>` : ''}
        </div>`;
    }).join('') + `<div class="live-src-row">📡 GDACS（联合国全球灾害预警协调系统）${srcBadge}</div>`;
  },

  // ─── 全球预警页渲染 ─────────────────────────────────────
  async renderAlertsPage(forceRefresh = false) {
    const container = document.getElementById('alerts-container');
    const lastUpdateEl = document.getElementById('alerts-last-update');

    // 骨架屏
    container.innerHTML = `
      <div class="skel-wrap">
        ${Array.from({length:4}, (_,i) =>
          `<div class="skel-card" style="animation-delay:${i*0.1}s"></div>`).join('')}
      </div>`;
    lastUpdateEl.textContent = '加载中…';

    let data;
    try {
      data = await REALTIME_API.getAlertsPageData(forceRefresh);
    } catch (e) {
      console.error('[AlertsPage]', e);
    }

    if (!data || !data.alerts || data.alerts.length === 0) {
      container.innerHTML = `
        <div class="alerts-empty">
          <div class="alerts-empty-icon">✅</div>
          <div style="font-size:16px;font-weight:700;margin-bottom:8px">目前无高危灾害预警</div>
          <div style="font-size:13px;color:var(--text3)">GDACS + USGS 全球数据库中暂无 Orange/Red 级别活跃灾害</div>
        </div>`;
      lastUpdateEl.textContent = data ? `更新于 ${data.updatedAt}` : '数据不可用';
      document.getElementById('stat-red').textContent    = '0';
      document.getElementById('stat-orange').textContent = '0';
      return;
    }

    document.getElementById('stat-red').textContent    = data.redCount;
    document.getElementById('stat-orange').textContent = data.orangeCount;

    const srcBadge = REALTIME_API.cacheBadge(data._src || 'live', '');
    lastUpdateEl.innerHTML = `更新于 ${data.updatedAt} ${srcBadge}`;

    container.innerHTML = data.alerts.map((a, idx) => {
      const levelClass = a.alertLevel === 'Red' ? 'level-red' : a.alertLevel === 'Orange' ? 'level-orange' : 'level-green';
      const badgeStyle = a.alertLevel === 'Red'
        ? 'background:rgba(220,38,38,0.2);color:#ef4444'
        : a.alertLevel === 'Orange' ? 'background:rgba(249,115,22,0.2);color:#f97316'
        : 'background:rgba(245,158,11,0.2);color:#f59e0b';
      return `
      <div class="disaster-card ${levelClass} fade-in" style="animation-delay:${idx * 0.04}s">
        <span class="source-tag">${a.source || 'GDACS'}</span>
        <div class="disaster-header">
          <div class="disaster-type-icon">${a.typeIcon || '⚠️'}</div>
          <div class="disaster-body">
            <div class="disaster-name">${a.name}</div>
            <div class="disaster-meta">
              <span class="disaster-level-badge" style="${badgeStyle}">${a.alertLabel}</span>
              <span class="disaster-country">📍 ${a.country}</span>
              ${a.fromDate ? `<span class="disaster-date">${a.fromDate}</span>` : ''}
            </div>
            ${a.description ? `<div class="disaster-desc">${a.description}</div>` : ''}
            ${a.url ? `<a href="${a.url}" target="_blank" class="disaster-link">📄 查看详情报告 →</a>` : ''}
          </div>
        </div>
      </div>`;
    }).join('');
  },

  // ─── 首页城市卡片：批量注入实时天气徽章 ──────────────────
  async injectCityWeatherBadges() {
    // 获取所有可见城市卡片
    const cards = document.querySelectorAll('.city-card[data-city-id]');
    if (!cards.length) return;

    // 并行拉取所有城市天气（利用缓存）
    await Promise.allSettled(Array.from(cards).map(async card => {
      const cityId = card.getAttribute('data-city-id');
      const lat    = parseFloat(card.getAttribute('data-lat'));
      const lng    = parseFloat(card.getAttribute('data-lng'));
      if (!cityId || isNaN(lat) || isNaN(lng)) return;

      const w = await REALTIME_API.getWeather(lat, lng, cityId);
      if (!w) return;

      // 查找或创建天气徽章容器
      let badge = card.querySelector('.city-weather-badge');
      if (!badge) {
        badge = document.createElement('div');
        badge.className = 'city-weather-badge';
        const img = card.querySelector('.city-card-img');
        if (img) img.appendChild(badge);
      }
      badge.innerHTML = `${w.current.weatherIcon} ${w.current.temp}°`;
      badge.title     = `${w.current.weatherDesc}，湿度 ${w.current.humidity}%，风速 ${w.current.windSpeed}km/h`;
      if (w.current.hasAlert) badge.classList.add('alert');
    }));
  },
};
