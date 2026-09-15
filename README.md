# SafeCity Global · 全球城市安全旅行指南

> 覆盖 **125 座城市 · 5 个大洲区** 的安全出行参考站。
> 静态站点 + 免费公开数据源，零后端、零 API Key、零月度成本。
>
> 🌐 在线：https://safecity.uichain.org （GitHub Pages）

## 它解决什么问题

出国前查安全，信息通常是碎片化的：犯罪新闻在社交媒体、疫苗接种建议在卫生部门网站、地震风险在学术页面、台风预警又藏在另一个政府部门。SafeCity 把这些合并成一张卡：

- **六个维度的安全指数** + 总分与等级
- **健康出行信息**：建议疫苗、当地疾病风险与季节、就医贴士
- **实时层**：天气与预报、全球灾害预警、近期地震

| 维度 | 含义 |
|---|---|
| `crimeSafety` | 犯罪与治安风险 |
| `healthMedical` | 医疗资源与就医条件 |
| `transportSafety` | 交通安全（含公共交通与道路） |
| `naturalDisaster` | 自然灾害暴露度（地震带、台风、洪水等） |
| `environmental` | 空气/水质等环境因数 |
| `socialStability` | 社会秩序与稳定性 |

总分 `safetyIndex.overall` 附 `grade`（如 `A-`）与 `trend`。

## 数据结构

每个城市一条记录（`data.js`，约 660 KB）：

```js
{
  "id": "tokyo",
  "name": "东京", "nameEn": "Tokyo", "country": "日本", "continent": "亚洲",
  "lat": 35.6762, "lng": 139.6503,
  "safetyIndex": {
    "overall": 84, "grade": "A-", "trend": "stable",
    "dimensions": {
      "crimeSafety":       { "score": 88, "note": "犯罪率极低，路不拾遗" },
      "healthMedical":     { "score": 85, "note": "医疗体系完善，国际医院多" },
      "transportSafety":   { "score": 80, "note": "交通发达但高峰期拥挤" },
      "naturalDisaster":   { "score": 58, "note": "地震活跃带，台风季需关注" },
      "environmental":     { "score": 82, "note": "空气质量良好，水质洁净" },
      "socialStability":   { "score": 90, "note": "社会秩序优良，政治稳定" }
    }
  },
  "healthData": {
    "vaccines":     [{ "name": "流感疫苗", "note": "冬季高发期前接种", "essential": false }],
    "diseaseRisks": [{ "name": "登革热", "risk": "低", "season": "夏季(6-9月)", "prevention": "防蚊叮咬" }],
    "medicalTips":  ["日本医保制度完善，可报销 70%"]
  }
}
```

**洲际分布**：欧洲 40 · 亚洲 36 · 美洲 31 · 非洲 10 · 大洋洲 8

## 实时层：用哪些源，为什么要那样写代码

`realtime-api.js` 只调用**免费且无需注册**的公开接口：

| 源 | 提供什么 | 端点 |
|---|---|---|
| Open-Meteo | 当前天气 + 7 天预报 | `api.open-meteo.com` |
| GDACS | 联合国全球灾害预警协调系统警报 | `gdacs.org` |
| USGS | 全球地震目录 | `earthquake.usgs.gov` |

工程上的取舍值得单独说，因为静态站点调用第三方 API 最容易在这里翻车：

- **双层缓存**：内存 15 分钟 + `localStorage` 1 小时，避免重复刷新打爆配额。
- **自动重试**：指数退避，最多 2 次，单次超时 9 秒。
- **优雅降级**：请求失败 → 回落到上次缓存 → 再回落到占位文案；页面上用 `LIVE / CACHED / OFFLINE` 标签明确标示当前数据的新鲜度，**不假装是实时的**。
- **并行聚合**：总加载时间控制在 3 秒内，首屏不阻塞。

## 本地预览

纯静态，没有构建步骤。任选一种：

```bash
python3 -m http.server 8080    # 然后打开 http://localhost:8080
# 或者直接用 Firefox / Safari 打开 index.html
```

Chrome 对 `file://` 下的跨源请求会拦截数据文件，所以**不要用 file:// 预览**，起个本地服务器最稳。

## 目录导览

| 文件 | 作用 |
|---|---|
| `index.html` | 首页：城市卡片网格、搜索、大洲筛选 |
| `city_detail.html` | 城市详情页：六维雷达、健康信息、实时层 |
| `data.js` | **唯一权威数据源**，125 座城市 |
| `realtime-api.js` | 实时数据引擎（上面那一节） |
| `city_data_template.js` | 新增城市时的字段模板 |
| `generate_cities.js` / `generate_detail.js` | 由数据生成页面片段 |
| `convert_data.js` / `fill_all_cities.py` / `fill_data_simple.py` | 数据清洗与补全脚本 |
| `gen_seo.py` + `sitemap.xml` + `robots.txt` | 搜索引擎可见性 |
| `CNAME` | `safecity.uichain.org` |

**仓库卫生提醒**：根目录下的 `data_all_filled.js`、`data_before_complete.js`、
`data_complete.js`、`data_enhanced.js`、`data_new.js`、`demo.html`、
`detail_enhanced.html` 都是历史迭代留下的工作副本，页面**没有**引用它们。
留着是版本回溯方便，不是依赖；清理前先确认你要的那份在 `data.js` 里。

## 部署

`.github/workflows/deploy.yml` 走 GitHub Pages。注意一个容易踩的点：

> 该 workflow 的触发条件是 **`push` 到 `gh-pages` 分支**，
> 而仓库默认分支是 `main`。也就是说**推到 main 不会触发部署**，
> 要么把改动同步到 `gh-pages`，要么在 Actions 里手动 `workflow_dispatch`。

如果要改成推 main 即部署，把 `on.push.branches` 改成 `main` 即可。

## 数据诚实声明（重要）

这一点必须写清楚，否则容易被误用：

- 六维评分是**编辑 composite 指数**，用于横向比较与出行参考，
  **不是官方犯罪统计、不是外交部/使领馆旅行警告的替代品**。
- 评分是**静态快照**，实时层（天气/灾害/地震）是**动态数据**，
  两者的新鲜度完全不同——页面已用标签区分，引用时也请区分。
- 出行决策请以目的地官方机构的现行建议为准。

## License

MIT © leo-bone
