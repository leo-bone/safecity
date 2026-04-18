#!/usr/bin/env python3
"""增强HTML页面 - 添加交通指南、医院、大使馆、安全应用、自保策略"""
import re

path = '/Users/leo/WorkBuddy/20260330203857/safecity/index.html'
with open(path, 'r') as f:
    html = f.read()

# 添加CSS
css = '''    .transport-card { background: var(--card-bg); border-radius: 12px; padding: 16px; margin-bottom: 12px; }
    .transport-name { font-weight: 600; font-size: 15px; margin-bottom: 8px; }
    .transport-tips { font-size: 13px; color: var(--text2); line-height: 1.5; margin-bottom: 6px; }
    .transport-info { font-size: 12px; color: var(--text3); }
    .transport-app { display: inline-block; background: var(--accent); color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 12px; margin-top: 8px; }
    .hospital-card { background: var(--card-bg); border-radius: 12px; padding: 16px; margin-bottom: 16px; }
    .hospital-name { font-weight: 600; font-size: 15px; }
    .hospital-name-en { font-size: 12px; color: var(--text3); margin-top: 2px; }
    .hospital-badge { background: #22c55e; color: #fff; padding: 2px 8px; border-radius: 10px; font-size: 11px; }
    .hospital-address { font-size: 13px; color: var(--text2); margin-bottom: 8px; }
    .hospital-phone { font-size: 14px; color: var(--accent); font-weight: 500; margin-bottom: 8px; }
    .hospital-langs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
    .hospital-lang { background: var(--bg2); padding: 2px 8px; border-radius: 10px; font-size: 11px; }
    .hospital-services { font-size: 12px; color: var(--text3); }
    .app-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .app-card { background: var(--card-bg); border-radius: 12px; padding: 14px; text-align: center; }
    .app-icon { font-size: 28px; margin-bottom: 8px; }
    .app-name { font-weight: 600; font-size: 14px; margin-bottom: 4px; }
    .app-desc { font-size: 12px; color: var(--text3); line-height: 1.4; }
    .defense-section { margin-bottom: 16px; }
    .defense-title { font-weight: 600; font-size: 14px; color: var(--accent); margin-bottom: 10px; }
    .defense-list { list-style: none; padding: 0; margin: 0; }
    .defense-list li { font-size: 13px; color: var(--text2); padding: 8px 0; border-bottom: 1px solid var(--border); line-height: 1.5; }
    .embassy-card { background: var(--card-bg); border-radius: 12px; padding: 16px; margin-bottom: 12px; }
    .embassy-type { font-size: 11px; color: var(--text3); text-transform: uppercase; margin-bottom: 4px; }
    .embassy-name { font-weight: 600; font-size: 15px; margin-bottom: 8px; }
    .embassy-row { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 6px; font-size: 13px; }
    .embassy-row-icon { color: var(--text3); flex-shrink: 0; }
    .embassy-emergency { background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 10px; margin-top: 10px; display: flex; align-items: center; gap: 8px; }
    .embassy-emergency-icon { color: #ef4444; font-size: 18px; }
    .embassy-emergency-label { color: #ef4444; font-weight: 600; }
    .embassy-emergency-num { color: var(--text); font-weight: 500; }
'''
html = html.replace('</style>', css + '\n  </style>')

# 添加Tabs
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

# 添加Panels
old_panel = '<div id="panel-live" class="detail-panel">'
new_panels = '''<div id="panel-transport" class="detail-panel"><div id="transport-content"></div></div>
  <div id="panel-hospital" class="detail-panel"><div id="hospital-content"></div></div>
  <div id="panel-embassy" class="detail-panel"><div id="embassy-content"></div></div>
  <div id="panel-safety-app" class="detail-panel"><div id="safety-app-content"></div></div>
  <div id="panel-self-defense" class="detail-panel"><div id="self-defense-content"></div></div>
  <div id="panel-live" class="detail-panel">'''
html = html.replace(old_panel, new_panels)

# 添加case
old_case = "case 'history':"
new_cases = '''case 'transport': document.getElementById('panel-transport').classList.add('active'); break;
          case 'hospital': document.getElementById('panel-hospital').classList.add('active'); break;
          case 'embassy': document.getElementById('panel-embassy').classList.add('active'); break;
          case 'safety-app': document.getElementById('panel-safety-app').classList.add('active'); break;
          case 'self-defense': document.getElementById('panel-self-defense').classList.add('active'); break;
          case 'history':'''
html = html.replace(old_case, new_cases)

# 添加JS函数
js = '''
  function renderTransport(d){var c=document.getElementById('transport-content');if(!c)return;var t=d.transportation;if(!t){c.innerHTML='<div style="text-align:center;color:var(--text3);padding:40px;">暂无交通指南数据</div>';return}var h='';if(t.metro)h+='<div class="transport-card"><div class="transport-name">🚇 '+(t.metro.name||'')+'</div><div class="transport-tips">'+(t.metro.tips||'')+'</div><div class="transport-info">'+(t.metro.hours?'⏰ '+t.metro.hours:'')+' '+(t.metro.cost?'💰 '+t.metro.cost:'')+'</div></div>';if(t.bus)h+='<div class="transport-card"><div class="transport-name">🚌 '+(t.bus.name||'')+'</div><div class="transport-tips">'+(t.bus.tips||'')+'</div><div class="transport-info">'+(t.bus.hours?'⏰ '+t.bus.hours:'')+' '+(t.bus.cost?'💰 '+t.bus.cost:'')+'</div></div>';if(t.taxi)h+='<div class="transport-card"><div class="transport-name">🚕 '+(t.taxi.name||'')+'</div><div class="transport-tips">'+(t.taxi.tips||'')+'</div><div class="transport-info">'+(t.taxi.cost?'💰 '+t.taxi.cost:'')+'</div></div>';if(t.train)h+='<div class="transport-card"><div class="transport-name">🚆 '+(t.train.name||'')+'</div><div class="transport-tips">'+(t.train.tips||'')+'</div><div class="transport-info">'+(t.train.hours?'⏰ '+t.train.hours:'')+'</div></div>';if(t.boat)h+='<div class="transport-card"><div class="transport-name">⛴️ '+(t.boat.name||'')+'</div><div class="transport-tips">'+(t.boat.tips||'')+'</div><div class="transport-info">'+(t.boat.hours?'⏰ '+t.boat.hours:'')+' '+(t.boat.cost?'💰 '+t.boat.cost:'')+'</div></div>';if(t.app)h+='<div class="transport-app">📱 推荐App: '+t.app+'</div>';c.innerHTML=h}
  function renderHospital(d){var c=document.getElementById('hospital-content');if(!c)return;var hs=d.hospitals;if(!hs||!hs.length){c.innerHTML='<div style="text-align:center;color:var(--text3);padding:40px;">暂无医院数据</div>';return}var h='<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">以下医院提供外语服务，建议出发前确认预约。</p>';hs.forEach(function(x){h+='<div class="hospital-card"><div class="hospital-name">'+x.name+'</div><div class="hospital-name-en">'+(x.nameEn||'')+'</div>'+(x.english?'<span class="hospital-badge">🌐 外语服务</span>':'')+'<div class="hospital-address">📍 '+(x.address||'')+'</div><div class="hospital-phone">📞 '+(x.phone||'')+'</div><div class="hospital-langs">';(x.languages||[]).forEach(function(l){h+='<span class="hospital-lang">'+l+'</span>'});h+='</div><div class="hospital-services"><strong>服务:</strong> '+(x.services?x.services.join('、'):'全科')+(x.insurance?'<br><strong>保险:</strong> '+x.insurance:'')+'</div></div>'});c.innerHTML=h}
  function renderEmbassyEnhanced(d){var c=document.getElementById('embassy-content');if(!c)return;var e=d.embassies;if(!e){var embs=(d.emergency||{}).embassies||{};if(!Object.keys(embs).length){c.innerHTML='<div style="text-align:center;color:var(--text3);padding:40px;">暂无使领馆数据</div>';return}var h='<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">当地中国使领馆信息</p>';Object.entries(embs).forEach(function(o){h+='<div class="embassy-card"><div class="embassy-name">🏛️ '+o[0]+'</div><div class="embassy-row"><span class="embassy-row-icon">📞</span><span>'+o[1]+'</span></div></div>'});c.innerHTML=h;return}var h='<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">中国驻'+(e.country||d.country||'当地')+'使领馆信息</p>';if(e.embassy){var x=e.embassy;h+='<div class="embassy-card"><div class="embassy-type">大使馆</div><div class="embassy-name">🏛️ '+x.name+'</div><div class="embassy-row"><span class="embassy-row-icon">📍</span><span>'+(x.address||'')+'</span></div><div class="embassy-row"><span class="embassy-row-icon">📞</span><span>'+(x.phone||'')+'</span></div>'+(x.email?'<div class="embassy-row"><span class="embassy-row-icon">📧</span><span>'+x.email+'</span></div>':'')+(x.hours?'<div class="embassy-row"><span class="embassy-row-icon">⏰</span><span>办公时间: '+x.hours+'</span></div>':'')+(x.emergency?'<div class="embassy-emergency"><span class="embassy-emergency-icon">🚨</span><div><span class="embassy-emergency-label">24小时领事保护热线</span><br><span class="embassy-emergency-num">'+x.emergency+'</span></div></div>':'')+'</div>'}if(e.consulates){e.consulates.forEach(function(x){h+='<div class="embassy-card"><div class="embassy-type">总领事馆</div><div class="embassy-name">🏛️ '+x.name+'</div><div class="embassy-row"><span class="embassy-row-icon">📍</span><span>'+(x.address||'')+'</span></div><div class="embassy-row"><span class="embassy-row-icon">📞</span><span>'+(x.phone||'')+'</span></div></div>'})}c.innerHTML=h}
  function renderSafetyApp(d){var c=document.getElementById('safety-app-content');if(!c)return;var apps=d.safetyApps;if(!apps||!apps.length){c.innerHTML='<div style="text-align:center;color:var(--text3);padding:40px;">暂无安全应用数据</div>';return}var iconMap={'shield':'🛡️','alert':'🚨','map':'🗺️','car':'🚗','train':'🚇','phone':'📞','mic':'🎤','bike':'🚴','bus':'🚌','taxi':'🚕','message':'💬','navigation':'🧭','translate':'🌐'};var h='<p style="font-size:13px;color:var(--text3);margin-bottom:16px;">推荐下载以下应用提升旅行安全性</p><div class="app-grid">';apps.forEach(function(a){h+='<div class="app-card"><div class="app-icon">'+(iconMap[a.icon]||'📱')+'</div><div class="app-name">'+a.name+'</div><div class="app-desc">'+a.desc+'</div></div>'});h+='</div>';c.innerHTML=h}
  function renderSelfDefense(d){var c=document.getElementById('self-defense-content');if(!c)return;var sd=d.selfDefense;if(!sd){c.innerHTML='<div style="text-align:center;color:var(--text3);padding:40px;">暂无自保策略数据</div>';return}var h='';if(sd.general&&sd.general.length){h+='<div class="defense-section"><div class="defense-title">⚠️ 日常安全须知</div><ul class="defense-list">';sd.general.forEach(function(t){h+='<li>'+t+'</li>'});h+='</ul></div>'}if(sd.emergency&&sd.emergency.length){h+='<div class="defense-section"><div class="defense-title">🚨 紧急情况应对</div><ul class="defense-list">';sd.emergency.forEach(function(t){h+='<li>'+t+'</li>'});h+='</ul></div>'}c.innerHTML=h||'<div style="text-align:center;color:var(--text3);padding:40px;">暂无自保策略数据</div>'}
'''
html = html.replace('</script>', js + '\n</script>')

# 添加调用
if 'renderLifestyle(cityData);' in html:
    html = html.replace(
        'renderLifestyle(cityData);',
        'renderLifestyle(cityData);\n    renderTransport(cityData);\n    renderHospital(cityData);\n    renderEmbassyEnhanced(cityData);\n    renderSafetyApp(cityData);\n    renderSelfDefense(cityData);'
    )

with open(path, 'w') as f:
    f.write(html)
print("✅ HTML增强完成！")
print("\n新增5个功能Tab:")
print("  🚇 交通指南 - 地铁/公交/出租车/火车/渡轮详细指南")
print("  🏥 推荐医院 - 支持外语服务的医院列表（含地址/电话/语言）")
print("  🏛️ 使领馆 - 中国驻当地使领馆完整信息（地址/电话/邮箱/24h热线）")
print("  📱 安全应用 - 推荐的本地安全App")
print("  🛡️ 自保策略 - 日常安全须知 + 紧急情况应对指南")
