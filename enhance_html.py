#!/usr/bin/env python3
"""增强HTML页面 - 添加交通、医院、大使馆、安全应用、自保策略"""

import re

# 读取文件
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. 添加新的CSS样式
new_styles = '''
    /* 交通指南样式 */
    .transport-section { margin-bottom: 20px; }
    .transport-icon { font-size: 24px; margin-bottom: 8px; }
    .transport-card {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
    }
    .transport-name { font-weight: 600; font-size: 15px; margin-bottom: 8px; color: var(--text); }
    .transport-tips { font-size: 13px; color: var(--text2); line-height: 1.5; margin-bottom: 6px; }
    .transport-info { font-size: 12px; color: var(--text3); }
    .transport-info span { margin-right: 12px; }
    .transport-app {
      display: inline-block;
      background: var(--accent);
      color: #fff;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
      margin-top: 8px;
    }

    /* 医院样式 */
    .hospital-card {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .hospital-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .hospital-name { font-weight: 600; font-size: 15px; color: var(--text); }
    .hospital-name-en { font-size: 12px; color: var(--text3); margin-top: 2px; }
    .hospital-badge {
      background: #22c55e;
      color: #fff;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 11px;
    }
    .hospital-address { font-size: 13px; color: var(--text2); margin-bottom: 8px; }
    .hospital-phone { font-size: 14px; color: var(--accent); font-weight: 500; margin-bottom: 8px; }
    .hospital-langs {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 8px;
    }
    .hospital-lang {
      background: var(--bg2);
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 11px;
    }
    .hospital-services { font-size: 12px; color: var(--text3); }

    /* 安全应用样式 */
    .app-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .app-card {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 14px;
      text-align: center;
    }
    .app-icon { font-size: 28px; margin-bottom: 8px; }
    .app-name { font-weight: 600; font-size: 14px; margin-bottom: 4px; color: var(--text); }
    .app-desc { font-size: 12px; color: var(--text3); line-height: 1.4; }

    /* 自保策略样式 */
    .defense-section { margin-bottom: 16px; }
    .defense-title {
      font-weight: 600;
      font-size: 14px;
      color: var(--accent);
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .defense-list { list-style: none; padding: 0; margin: 0; }
    .defense-list li {
      font-size: 13px;
      color: var(--text2);
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
      line-height: 1.5;
    }
    .defense-list li:last-child { border-bottom: none; }

    /* 大使馆样式增强 */
    .embassy-card {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
    }
    .embassy-type {
      font-size: 11px;
      color: var(--text3);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .embassy-name { font-weight: 600; font-size: 15px; margin-bottom: 8px; color: var(--text); }
    .embassy-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 6px;
      font-size: 13px;
    }
    .embassy-row-icon { color: var(--text3); flex-shrink: 0; }
    .embassy-row-text { color: var(--text2); }
    .embassy-emergency {
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 8px;
      padding: 10px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .embassy-emergency-icon { color: #ef4444; font-size: 18px; }
    .embassy-emergency-text { font-size: 13px; }
    .embassy-emergency-label { color: #ef4444; font-weight: 600; }
    .embassy-emergency-num { color: var(--text); font-weight: 500; }
'''

# 在</style>前插入新样式
style_end = html.find('</style>')
if style_end != -1:
    html = html[:style_end] + new_styles + '\n  ' + html[style_end:]

# 2. 添加新的Tab按钮
old_tabs = '''    <button class="detail-tab" onclick="switchDetailTab('history', this)">📜 历史背景</button>
    <button class="detail-tab" onclick="switchDetailTab('live', this)">🌐 实时数据</button>'''

new_tabs = '''    <button class="detail-tab" onclick="switchDetailTab('transport', this)">🚇 交通指南</button>
    <button class="detail-tab" onclick="switchDetailTab('hospital', this)">🏥 推荐医院</button>
    <button class="detail-tab" onclick="switchDetailTab('embassy', this)">🏛️ 使领馆</button>
    <button class="detail-tab" onclick="switchDetailTab('safety-app', this)">📱 安全应用</button>
    <button class="detail-tab" onclick="switchDetailTab('self-defense', this)">🛡️ 自保策略</button>
    <button class="detail-tab" onclick="switchDetailTab('history', this)">📜 历史背景</button>
    <button class="detail-tab" onclick="switchDetailTab('live', this)">🌐 实时数据</button>'''

html = html.replace(old_tabs, new_tabs)

# 3. 添加新的Panel
old_panels_end = html.find('<div id="panel-live" class="detail-panel">')
if old_panels_end != -1:
    new_panels = '''
  <div id="panel-transport" class="detail-panel">
    <div id="transport-content"></div>
  </div>

  <div id="panel-hospital" class="detail-panel">
    <div id="hospital-content"></div>
  </div>

  <div id="panel-embassy" class="detail-panel">
    <div id="embassy-content"></div>
  </div>

  <div id="panel-safety-app" class="detail-panel">
    <div id="safety-app-content"></div>
  </div>

  <div id="panel-self-defense" class="detail-panel">
    <div id="self-defense-content"></div>
  </div>

'''
    html = html[:old_panels_end] + new_panels + html[old_panels_end:]

# 4. 添加JavaScript函数
js_functions = '''
  // 渲染交通指南
  function renderTransport(cityData) {
    var container = document.getElementById('transport-content');
    if (!container) return;
    
    var t = cityData.transportation;
    if (!t) {
      container.innerHTML = '<div style="text-align:center;color:var(--text3);padding:40px;">暂无交通指南数据</div>';
      return;
    }
    
    var html = '';
    
    // 地铁
    if (t.metro) {
      html += '<div class="transport-section"><div class="transport-card">';
      html += '<div class="transport-name">🚇 ' + (t.metro.name || '城市轨道交通') + '</div>';
      html += '<div class="transport-tips">' + (t.metro.tips || '') + '</div>';
      html += '<div class="transport-info">';
      if (t.metro.hours) html += '<span>⏰ ' + t.metro.hours + '</span>';
      if (t.metro.cost) html += '<span>💰 ' + t.metro.cost + '</span>';
      html += '</div></div></div>';
    }
    
    // 公交
    if (t.bus) {
      html += '<div class="transport-section"><div class="transport-card">';
      html += '<div class="transport-name">🚌 ' + (t.bus.name || '公共巴士') + '</div>';
      html += '<div class="transport-tips">' + (t.bus.tips || '') + '</div>';
      html += '<div class="transport-info">';
      if (t.bus.hours) html += '<span>⏰ ' + t.bus.hours + '</span>';
      if (t.bus.cost) html += '<span>💰 ' + t.bus.cost + '</span>';
      html += '</div></div></div>';
    }
    
    // 出租车
    if (t.taxi) {
      html += '<div class="transport-section"><div class="transport-card">';
      html += '<div class="transport-name">🚕 ' + (t.taxi.name || '出租车') + '</div>';
      html += '<div class="transport-tips">' + (t.taxi.tips || '') + '</div>';
      html += '<div class="transport-info">';
      if (t.taxi.cost) html += '<span>💰 ' + t.taxi.cost + '</span>';
      html += '</div></div></div>';
    }
    
    // 火车/铁路
    if (t.train) {
      html += '<div class="transport-section"><div class="transport-card">';
      html += '<div class="transport-name">🚆 ' + (t.train.name || '火车/铁路') + '</div>';
      html += '<div class="transport-tips">' + (t.train.tips || '') + '</div>';
      html += '<div class="transport-info">';
      if (t.train.hours) html += '<span>⏰ ' + t.train.hours + '</span>';
      html += '</div></div></div>';
    }
    
    // 渡轮
    if (t.boat) {
      html += '<div class="transport-section"><div class="transport-card">';
      html += '<div class="transport-name">⛴️ ' + (t.boat.name || '渡轮') + '</div>';
      html += '<div class="transport-tips">' + (t.boat.tips || '') + '</div>';
      html += '<div class="transport-info">';
      if (t.boat.hours) html += '<span>⏰ ' + t.boat.hours + '</span>';
      if (t.boat.cost) html += '<span>💰 ' + t.boat.cost + '</span>';
      html += '</div></div></div>';
    }
    
    // 推荐APP
    if (t.app) {
      html += '<div class="transport-app">📱 推荐App: ' + t.app + '</div>';
    }
    
    container.innerHTML = html;
  }

  // 渲染医院
  function renderHospital(cityData) {
    var container = document.getElementById('hospital-content');
    if (!container) return;
    
    var hospitals = cityData.hospitals;
    if (!hospitals || hospitals.length === 0) {
      container.innerHTML = '<div style="text-align:center;color:var(--text3);padding:40px;">暂无医院数据</div>';
      return;
    }
    
    var html = '<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">以下医院提供外语服务，建议出发前确认预约。</p>';
    
    hospitals.forEach(function(h) {
      html += '<div class="hospital-card">';
      html += '<div class="hospital-header"><div>';
      html += '<div class="hospital-name">' + h.name + '</div>';
      html += '<div class="hospital-name-en">' + (h.nameEn || '') + '</div></div>';
      if (h.english) html += '<span class="hospital-badge">🌐 外语服务</span>';
      html += '</div>';
      html += '<div class="hospital-address">📍 ' + (h.address || '地址待补充') + '</div>';
      html += '<div class="hospital-phone">📞 ' + (h.phone || '电话待补充') + '</div>';
      html += '<div class="hospital-langs">';
      (h.languages || []).forEach(function(l) {
        html += '<span class="hospital-lang">' + l + '</span>';
      });
      html += '</div>';
      html += '<div class="hospital-services"><strong>服务:</strong> ' + (h.services ? h.services.join('、') : '全科服务');
      if (h.insurance) html += '<br><strong>保险:</strong> ' + h.insurance;
      html += '</div></div>';
    });
    
    container.innerHTML = html;
  }

  // 渲染大使馆
  function renderEmbassyEnhanced(cityData) {
    var container = document.getElementById('embassy-content');
    if (!container) return;
    
    var embassies = cityData.embassies;
    if (!embassies) {
      var emergency = cityData.emergency || {};
      var embs = emergency.embassies || {};
      
      if (Object.keys(embs).length === 0) {
        container.innerHTML = '<div style="text-align:center;color:var(--text3);padding:40px;">暂无使领馆数据</div>';
        return;
      }
      
      var html = '<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">当地中国使领馆信息</p>';
      Object.entries(embs).forEach(function(entry) {
        var name = entry[0];
        var phone = entry[1];
        html += '<div class="embassy-card">';
        html += '<div class="embassy-name">🏛️ ' + name + '</div>';
        html += '<div class="embassy-row"><span class="embassy-row-icon">📞</span><span class="embassy-row-text">' + phone + '</span></div>';
        html += '</div>';
      });
      container.innerHTML = html;
      return;
    }
    
    var html = '<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">中国驻' + (embassies.country || cityData.country || '当地') + '使领馆信息</p>';
    
    // 大使馆
    if (embassies.embassy) {
      var e = embassies.embassy;
      html += '<div class="embassy-card">';
      html += '<div class="embassy-type">大使馆</div>';
      html += '<div class="embassy-name">🏛️ ' + e.name + '</div>';
      html += '<div class="embassy-row"><span class="embassy-row-icon">📍</span><span class="embassy-row-text">' + (e.address || '') + '</span></div>';
      html += '<div class="embassy-row"><span class="embassy-row-icon">📞</span><span class="embassy-row-text">' + (e.phone || '') + '</span></div>';
      if (e.email) html += '<div class="embassy-row"><span class="embassy-row-icon">📧</span><span class="embassy-row-text">' + e.email + '</span></div>';
      if (e.hours) html += '<div class="embassy-row"><span class="embassy-row-icon">⏰</span><span class="embassy-row-text">办公时间: ' + e.hours + '</span></div>';
      if (e.emergency) {
        html += '<div class="embassy-emergency">';
        html += '<span class="embassy-emergency-icon">🚨</span>';
        html += '<div class="embassy-emergency-text"><span class="embassy-emergency-label">24小时领事保护热线</span><br>';
        html += '<span class="embassy-emergency-num">' + e.emergency + '</span></div></div>';
      }
      html += '</div>';
    }
    
    // 总领事馆
    if (embassies.consulates && embassies.consulates.length > 0) {
      embassies.consulates.forEach(function(c) {
        html += '<div class="embassy-card">';
        html += '<div class="embassy-type">总领事馆</div>';
        html += '<div class="embassy-name">🏛️ ' + c.name + '</div>';
        html += '<div class="embassy-row"><span class="embassy-row-icon">📍</span><span class="embassy-row-text">' + (c.address || '') + '</span></div>';
        html += '<div class="embassy-row"><span class="embassy-row-icon">📞</span><span class="embassy-row-text">' + (c.phone || '') + '</span></div>';
        html += '</div>';
      });
    }
    
    container.innerHTML = html;
  }

  // 渲染安全应用
  function renderSafetyApp(cityData) {
    var container = document.getElementById('safety-app-content');
    if (!container) return;
    
    var apps = cityData.safetyApps;
    if (!apps || apps.length === 0) {
      container.innerHTML = '<div style="text-align:center;color:var(--text3);padding:40px;">暂无安全应用数据</div>';
      return;
    }
    
    var iconMap = {
      'shield': '🛡️', 'alert': '🚨', 'map': '🗺️', 'car': '🚗',
      'train': '🚇', 'phone': '📞', 'mic': '🎤', 'radio': '📻',
      'bike': '🚴', 'bus': '🚌', 'taxi': '🚕', 'message': '💬',
      'navigation': '🧭', 'translate': '🌐', 'weather': '⛅'
    };
    
    var html = '<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">推荐下载以下应用提升旅行安全性</p><div class="app-grid">';
    
    apps.forEach(function(app) {
      var icon = iconMap[app.icon] || '📱';
      html += '<div class="app-card">';
      html += '<div class="app-icon">' + icon + '</div>';
      html += '<div class="app-name">' + app.name + '</div>';
      html += '<div class="app-desc">' + app.desc + '</div></div>';
    });
    
    html += '</div>';
    container.innerHTML = html;
  }

  // 渲染自保策略
  function renderSelfDefense(cityData) {
    var container = document.getElementById('self-defense-content');
    if (!container) return;
    
    var sd = cityData.selfDefense;
    if (!sd) {
      container.innerHTML = '<div style="text-align:center;color:var(--text3);padding:40px;">暂无自保策略数据</div>';
      return;
    }
    
    var html = '';
    
    // 一般安全建议
    if (sd.general && sd.general.length > 0) {
      html += '<div class="defense-section">';
      html += '<div class="defense-title">⚠️ 日常安全须知</div>';
      html += '<ul class="defense-list">';
      sd.general.forEach(function(tip) {
        html += '<li>' + tip + '</li>';
      });
      html += '</ul></div>';
    }
    
    // 紧急情况应对
    if (sd.emergency && sd.emergency.length > 0) {
      html += '<div class="defense-section">';
      html += '<div class="defense-title">🚨 紧急情况应对</div>';
      html += '<ul class="defense-list">';
      sd.emergency.forEach(function(tip) {
        html += '<li>' + tip + '</li>';
      });
      html += '</ul></div>';
    }
    
    if (!html) {
      html = '<div style="text-align:center;color:var(--text3);padding:40px;">暂无自保策略数据</div>';
    }
    
    container.innerHTML = html;
  }

'''
    
    # 在 renderLifestyle 函数后插入
    lifestyle_match = re.search(r'function renderLifestyle[\s\S]*?(?=\n\s+function|\n\s+\}\s*$)', html)
    if lifestyle_match:
        insert_pos = lifestyle_match.end()
        html = html[:insert_pos] + '\n' + js_functions + html[insert_pos:]

# 5. 在城市数据加载后调用新渲染函数
lifestyle_call_match = re.search(r'renderLifestyle\(cityData\);', html)
if lifestyle_call_match:
    insert_pos = lifestyle_call_match.end()
    new_calls = '''
    renderTransport(cityData);
    renderHospital(cityData);
    renderEmbassyEnhanced(cityData);
    renderSafetyApp(cityData);
    renderSelfDefense(cityData);
    '''
    html = html[:insert_pos] + new_calls + html[insert_pos:]

# 6. 添加新的tab case
case_history_match = re.search(r"case 'history':", html)
if case_history_match:
    new_cases = '''case 'transport':
            document.getElementById('panel-transport').classList.add('active');
            break;
          case 'hospital':
            document.getElementById('panel-hospital').classList.add('active');
            break;
          case 'embassy':
            document.getElementById('panel-embassy').classList.add('active');
            break;
          case 'safety-app':
            document.getElementById('panel-safety-app').classList.add('active');
            break;
          case 'self-defense':
            document.getElementById('panel-self-defense').classList.add('active');
            break;
          '''
    html = html.replace(
        "case 'history':",
        new_cases + "          case 'history':"
    )

# 写回文件
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ HTML增强完成！")
print("\n新增功能:")
print("  🚇 交通指南 - 地铁/公交/出租车/火车详细指南")
print("  🏥 推荐医院 - 支持外语服务的医院列表")
print("  🏛️ 使领馆 - 中国驻当地使领馆完整信息")
print("  📱 安全应用 - 推荐的本地安全App")
print("  🛡️ 自保策略 - 日常安全和紧急应对指南")
