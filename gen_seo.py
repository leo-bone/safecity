#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成 SEO 基础设施：sitemap.xml 与 robots.txt

从 data_enhanced.js 里解析 CITY_DATABASE 的城市 key，生成站点地图。
每次增删城市后重新运行本脚本即可：

    python3 gen_seo.py
"""

import os
import re
from datetime import date

SITE = "https://safecity.uichain.org"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(SCRIPT_DIR, "data_enhanced.js")
TODAY = date.today().isoformat()


def city_keys():
    """从 data_enhanced.js 提取顶层城市 key。"""
    with open(DATA_FILE, encoding="utf-8") as f:
        src = f.read()
    keys = re.findall(r'^  "([a-z0-9_\-]+)": \{', src, re.M)
    if not keys:  # 兼容压缩成单行的情况
        keys = re.findall(r'"([a-z0-9_\-]+)":\{"id":', src)
    return keys


def build_sitemap(keys):
    urls = [
        (SITE + "/", "1.0", "weekly"),
        (SITE + "/city_detail.html", "0.6", "monthly"),
    ]
    for k in keys:
        urls.append((f"{SITE}/city_detail.html?city={k}", "0.7", "monthly"))

    parts = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, priority, changefreq in urls:
        # XML 里 & 必须转义
        loc = loc.replace("&", "&amp;")
        parts.append("  <url>")
        parts.append(f"    <loc>{loc}</loc>")
        parts.append(f"    <lastmod>{TODAY}</lastmod>")
        parts.append(f"    <changefreq>{changefreq}</changefreq>")
        parts.append(f"    <priority>{priority}</priority>")
        parts.append("  </url>")
    parts.append("</urlset>")
    return "\n".join(parts) + "\n"


def build_robots():
    return f"""User-agent: *
Allow: /

# 城市详情页（带参数的 URL 也允许抓取）
Allow: /city_detail.html

Sitemap: {SITE}/sitemap.xml
"""


def main():
    keys = city_keys()
    if not keys:
        print("❌ 没能从 data_enhanced.js 解析出城市，请检查文件格式")
        return 1

    sitemap = os.path.join(SCRIPT_DIR, "sitemap.xml")
    robots = os.path.join(SCRIPT_DIR, "robots.txt")
    with open(sitemap, "w", encoding="utf-8") as f:
        f.write(build_sitemap(keys))
    with open(robots, "w", encoding="utf-8") as f:
        f.write(build_robots())

    print(f"✓ sitemap.xml 已生成（{len(keys) + 2} 条 URL，含 {len(keys)} 个城市）")
    print(f"✓ robots.txt 已生成")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
