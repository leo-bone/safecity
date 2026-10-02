#!/usr/bin/env node
/**
 * SafeCity 渲染层体检（jsdom 真实渲染）
 *
 * 背景：只比对文件字节大小无法发现「数据被同名变量覆盖」这类问题
 * —— 文件在、大小对，但页面渲染出来的全是「暂无数据」。
 * 本脚本用 jsdom 真实执行页面脚本，逐个城市 × 逐个栏位检查渲染结果。
 *
 * 用法：
 *   NODE_PATH=<jsdom所在node_modules> node verify_render.js [--full] [--url=<站点URL>]
 *   --full  检查全部城市（默认抽样 12 城）
 *
 * 退出码：0 = 全部通过；1 = 发现问题
 */
const { JSDOM, VirtualConsole } = require('jsdom');

const URL_ = (process.argv.find(a => a.startsWith('--url=')) || '--url=https://safecity.uichain.org/').split('=')[1];
const FULL = process.argv.includes('--full');
const SAMPLE = 12;

const TABS = ['safety', 'conflict', 'emergency', 'transport', 'hospital', 'embassy',
  'lifestyle', 'hotspots', 'food-safety', 'disease-prevention', 'safety-app', 'self-defense', 'history'];

// 这些「暂无」是正常文案，不算缺陷
const OK_PHRASES = ['暂无特殊战争风险提醒', '暂无详细描述', '暂无动荡风险'];

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/Not implemented|Could not parse CSS|canvas/i.test(e.message)) errors.push('JSDOM: ' + e.message); });
vc.on('error', (...a) => errors.push('ERR: ' + String(a[0]).slice(0, 120)));

JSDOM.fromURL(URL_, { runScripts: 'dangerously', resources: 'usable', virtualConsole: vc, pretendToBeVisual: true })
  .then(dom => {
    const w = dom.window;
    w.HTMLCanvasElement.prototype.getContext = function () {
      return new Proxy({}, { get: (t, p) => (p === 'canvas' ? { width: 300, height: 300 } : () => ({})) });
    };
    // 数据文件约 2.4MB，脚本加载需要时间，等待不足会误报「CITY_DATABASE 未定义」
    setTimeout(() => run(w), 6000);
  })
  .catch(e => { console.error('FATAL ' + e.message); process.exit(1); });

function run(w) {
  const d = w.document;
  const problems = [];
  const fail = m => problems.push(m);

  const db = w.CITY_DATABASE;
  if (!db) { console.error('FAIL CITY_DATABASE 未定义'); process.exit(1); }
  const ids = Object.keys(db);
  console.log('站点：' + URL_);
  console.log('城市数：' + ids.length);

  // 1) 关键校验：两个数据源不能被同一次赋值覆盖成同一个对象
  const det = w.CITY_DATABASE_DETAIL;
  if (!det) fail('CITY_DATABASE_DETAIL 未定义');
  else if (det === db) fail('致命：CITY_DATABASE 与 CITY_DATABASE_DETAIL 指向同一对象（数据被覆盖）');

  // 2) 富字段覆盖率（这些字段缺失 = 详情页栏位空白）
  const rich = ['hospitals', 'embassies', 'safetyApps', 'selfDefense', 'transportation', 'foodSafety', 'diseasePrevention'];
  rich.forEach(f => {
    const miss = ids.filter(id => !db[id][f]);
    if (miss.length) fail(`字段 ${f} 缺失 ${miss.length} 城：${miss.slice(0, 5).join(',')}`);
  });

  // 3) 渲染体检
  const targets = FULL ? ids : ids.filter((_, i) => i % Math.ceil(ids.length / SAMPLE) === 0);
  console.log('检查城市：' + targets.length + (FULL ? '（全量）' : '（抽样）'));

  targets.forEach(id => {
    let data = db[id];
    try { w.currentCity = data; w.populateCityDetail(data); }
    catch (e) { fail(`[${id}] 详情页渲染异常：${e.message}`); return; }
    TABS.forEach(tab => {
      try { w.switchDetailTab(tab, null); } catch (e) { fail(`[${id}/${tab}] 切换异常：${e.message}`); return; }
      const p = d.getElementById('panel-' + tab);
      if (!p) { fail(`[${id}/${tab}] 面板不存在`); return; }
      const txt = (p.textContent || '').replace(/\s+/g, ' ').trim();
      if (txt.length < 40) fail(`[${id}/${tab}] 内容过短(${txt.length})：${txt.slice(0, 40)}`);
      if (/undefined/.test(txt)) fail(`[${id}/${tab}] 含 undefined`);
      if (/\[object Object\]/.test(txt)) fail(`[${id}/${tab}] 含 [object Object]`);
      if (/NaN/.test(txt)) fail(`[${id}/${tab}] 含 NaN`);
      if (/暂无/.test(txt) && !OK_PHRASES.some(s => txt.includes(s))) fail(`[${id}/${tab}] 暂无数据：${txt.slice(0, 40)}`);
    });
  });

  // 4) 首页
  const cards = d.querySelectorAll('.city-card').length;
  if (cards !== ids.length) fail(`首页卡片数 ${cards} != 城市数 ${ids.length}`);

  if (errors.length) errors.slice(0, 5).forEach(e => fail('脚本报错：' + e));

  if (!problems.length) {
    console.log('\n✅ PASS —— 全部栏位渲染正常，无空面板 / undefined / 数据覆盖');
    process.exit(0);
  }
  console.log(`\n❌ FAIL —— ${problems.length} 项问题：`);
  [...new Set(problems)].slice(0, 30).forEach(p => console.log('  - ' + p));
  process.exit(1);
}
