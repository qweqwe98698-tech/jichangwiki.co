---
title: v2rayN 路由规则与绕过大陆 IP 配置
description: 解析 v2rayN 底部「路由」选项的「绕过大陆」、「全局」与「黑名单」模式，以及 GeoSite / GeoIP 规则库更新。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: v2rayN
---

# v2rayN 路由规则与绕过大陆 IP

<AnswerBox question="v2rayN 底部「路由」应该选哪一项？">
日常使用**强烈推荐选择「绕过大陆 (Whitelist)」**。在此模式下，所有中国大陆的 IP 和顶级域名直接走本地网络直连，只有境外国外网站才走选中的代理节点。
</AnswerBox>

---

## 🧭 常见路由选项含义

在 v2rayN 主界面底部有「路由」下拉选择框：

1. **绕过大陆 (Whitelist) [推荐]**：
   - 规则：`geoip:cn` 与 `geosite:cn` 走 `direct`（直连），其余所有境外流量走 `proxy`（代理）。
2. **全局 (Global)**：
   - 规则：所有网络流量无条件强制走代理节点（包括百度、淘宝、微信等）。
3. **黑名单 (Blacklist)**：
   - 规则：仅匹配到黑名单内的被墙域名才走代理，未被列入的全部直连。

---

## 🔄 更新 Geo 路由规则数据库

v2rayN 依赖 `geoip.dat` 与 `geosite.dat` 两个离线数据库来精准判断国内与国外 IP：
- 定期更新方法：点击顶部菜单「检查更新」→「更新 geoip / geosite 数据库」。
