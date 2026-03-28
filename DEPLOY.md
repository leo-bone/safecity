# SafeCity 部署到 safecity.uichain.org

## 文件清单

项目目录已包含以下部署所需文件：
```
safecity-app/
├── index.html        ← 主页面
├── data.js           ← 城市数据
├── realtime-api.js   ← 实时 API 模块
├── CNAME             ← GitHub Pages 自定义域名（已配置）
└── .nojekyll         ← 禁用 Jekyll 构建（已配置）
```

---

## 第一步：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 仓库名称：`safecity`（或任意名称）
3. 设为 **Public**（GitHub Pages 免费版需要公开仓库）
4. 不要勾选 Initialize README

---

## 第二步：推送代码

在终端执行（替换 YOUR_GITHUB_USERNAME）：

```bash
cd /Users/leo/WorkBuddy/20260328150512/safecity-app

git init
git add .
git commit -m "Initial deploy: SafeCity global disaster monitoring"

git remote add origin https://github.com/YOUR_GITHUB_USERNAME/safecity.git
git push -u origin main
```

---

## 第三步：开启 GitHub Pages

1. 进入仓库页面 → **Settings** → **Pages**
2. Source 选择：`Deploy from a branch`
3. Branch 选择：`main`，目录选择：`/ (root)`
4. 点击 **Save**
5. 等待约 1-3 分钟，GitHub 会显示部署 URL

此时访问 `https://YOUR_GITHUB_USERNAME.github.io/safecity/` 应已可用。

---

## 第四步：Cloudflare DNS 配置

登录 Cloudflare → 选择 `uichain.org` → **DNS** → **Add record**

| Type  | Name     | Content                                    | Proxy |
|-------|----------|--------------------------------------------|-------|
| CNAME | safecity | YOUR_GITHUB_USERNAME.github.io             | **DNS only（灰色云朵）** |

⚠️ **重要**：必须选 **DNS only**（不代理），否则 GitHub Pages 的 SSL 证书验证会失败。

---

## 第五步：验证

DNS 生效后（通常 5-30 分钟），访问：

```
https://safecity.uichain.org
```

如遇 SSL 证书错误，回到 GitHub Pages 设置页面，找到 **Custom domain** 输入框，输入 `safecity.uichain.org` 后点击 Save，GitHub 会自动申请 Let's Encrypt 证书（约 15 分钟）。

---

## 故障排查

| 问题 | 原因 | 解决 |
|------|------|------|
| 显示 404 | Pages 还没部署完 | 等 3 分钟后刷新 |
| SSL 证书错误 | GitHub 未识别自定义域名 | 在 Pages 设置重新输入域名 |
| 域名不生效 | DNS 未传播 | 用 `dig safecity.uichain.org` 检查 |
| Cloudflare 502 | Proxy 模式开了 | 改为 DNS only 灰色云朵 |

---

## 后续更新

每次修改代码后，执行：
```bash
cd /Users/leo/WorkBuddy/20260328150512/safecity-app
git add . && git commit -m "Update" && git push
```

GitHub Pages 会在约 1 分钟内自动重新部署。
