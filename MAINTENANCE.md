# SafeCity 维护手册

站点：https://safecity.uichain.org ｜ 仓库：leo-bone/safecity ｜ 发布分支：main（GitHub Pages）

---

## 一、2026-10-02 事故：城市详情栏位大面积空白

用户反馈「打开城市详情，大使馆、医疗等子栏位都是空的」。

### 根因

`data_new.js` 头部写成链式赋值：

```
CITY_DATABASE_DETAIL =
CITY_DATABASE =
CITY_DATABASE =
CITY_DATABASE = { ... }
```

等价于 `CITY_DATABASE_DETAIL = CITY_DATABASE = … = {…}`。该文件在 `data_enhanced.js`
之后加载，于是把主数据（含 `hospitals` / `embassies` / `transportation` / `safetyApps` /
`selfDefense` / `foodSafety` / `diseasePrevention`）**整个覆盖**。

页面渲染用的是被顶掉后的数据，所有富字段消失 → 全部栏位显示「暂无数据」。

**为什么之前的检查没发现**：只比对文件字节大小 + 统计字段覆盖率会「通过」——
数据文件确实在、字段确实存在，只是页面实际引用的不是它。

### 修复

| # | 问题 | 影响 | 处理 |
|---|---|---|---|
| 1 | `data_new.js` 链式赋值覆盖主数据 | 148/148 城富栏位全空 | `data_enhanced.js` → `var CITY_DATABASE = {`；`data_new.js` → `var CITY_DATABASE_DETAIL = {` |
| 2 | 23 城详情页抛 `undefined.map` 白屏 | 达喀尔、阿比让、坎帕拉、哈拉雷等 | 由 #1 引起，随之消除 |
| 3 | 食品安全 / 疾病预防字段路径不匹配 | 148/148 全空 | 渲染函数加字段归一化层，缺 `summary` 时用现有字段合成 |
| 4 | 37 张城市图 404 | 25% 破图 | 换成同大洲已验证 200 的真实照片 |
| 5 | 外链图片随时可能失效 | 长期风险 | 新增 `imgFallback()`：失效时显示「国旗 + 城市名」渐变占位 |

修复后：148 城 × 13 栏位全部有内容，148/148 图片返回 200，线上脚本 0 报错。

### 字段归一化说明（不要回退）

`renderFoodSafetyPanel` / `renderDiseasePreventionPanel` 期望 `summary` / `diseases` / `weather`，
而数据实际字段是 `tapWater` / `streetFood` / `seafood` / `allergy` / `waterSafe`
与 `commonDiseases` / `vaccines` / `mosquitoRisk` / `airQuality` / `tips`。
两个函数开头各有一段归一化代码做映射并合成 `summary`，**不要删除**。

---

## 二、校验：必须跑真实渲染，别只比对文件大小

```bash
cd <工作目录> && NODE_PATH=/Users/leo/.workbuddy/binaries/node/workspace/node_modules \
  /Users/leo/.workbuddy/binaries/node/versions/22.22.2-3/bin/node verify_render.js [--full]
```

`verify_render.js` 用 jsdom 真实执行线上页面脚本，检查：

- 城市数 = 148
- **`CITY_DATABASE` 与 `CITY_DATABASE_DETAIL` 不是同一个对象**（防止再次发生覆盖）
- 富字段 7 项无缺失
- 抽样（加 `--full` 为全量）城市 × 13 个详情栏位：非空、无 `undefined`、无 `[object Object]`、无「暂无数据」
- 首页卡片数 = 城市数

退出码 0 = 通过，1 = 有问题并打印明细。

### jsdom 体检的两个坑

1. `openCity()` 内部有 `showLoadingBriefly` 400ms 延时，同步检测会读到空面板
   → 直接调 `populateCityDetail(data)` + `switchDetailTab()`。
2. 需 stub `HTMLCanvasElement.prototype.getContext`（雷达图），
   且数据文件约 2.4MB，等待时间要给足（脚本里 6000ms），否则误报 `CITY_DATABASE 未定义`。

依赖缺失时：`cd /Users/leo/.workbuddy/binaries/node/workspace && npm install jsdom`。

---

## 三、部署

```bash
cd <工作目录> && GITHUB_TOKEN=$(security find-internet-password -s github.com -w) \
  python3 deploy_v2.py
```

- 走 Git Data API（blobs / trees / commits），不受 Contents API 1MB 限制。
- 推送文件见 `deploy_v2.py` 的 `FILES`。
- **改动 `index.html` 必须同步升级 3 处 `?v=<时间戳>` 缓存版本号**，否则浏览器继续用旧缓存。
- Pages 重建约 1–3 分钟，生效后跑一次 `verify_render.js` 确认。

### 凭据

旧的 `/tmp/ghtoken.txt` 已失效。本机 keychain 里有可用 token：

```bash
security find-internet-password -s github.com -w
```

已验证具备 `leo-bone/safecity` 的 admin 权限。

---

## 四、已知限制（如实记录）

- 37 张替换图是**同大洲的真实城市照片**，不是每城专属照片。原因是本环境无法访问
  wikipedia.org / commons.wikimedia.org / unsplash.com 检索接口（000 / 401），
  拿不到新的精确图源。若有 Unsplash API key 可全部换成各城市专属照片。
- 另有约 25 张图片在不同城市间重复（同一张图用于多城）。
- 节庆日期多为月份精度；安全评分为综合估算值，非官方发布。
- 实时数据来自 Open-Meteo（天气）、GDACS（灾害预警）、USGS（地震），均为免费公开接口。
