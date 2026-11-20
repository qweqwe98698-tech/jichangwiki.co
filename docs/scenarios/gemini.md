---
title: Google Gemini 区域限制排查与节点选择
description: Google Gemini（原 Bard）区域限制排查与节点选择指南：彻底解决访问官网提示「当前国家或地区不可用（Gemini is not available）」、账号语言地区错乱以及升级 Gemini Advanced 订阅支付被拒问题，指导如何挑选纯净美国/日本原生节点并开启高精度 Google AI 分流规则。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 使用场景
---

# Google Gemini 区域限制排查与节点选择

<AnswerBox question="Google Gemini 提示 Location Not Supported 怎么解决？">
Gemini 默认屏蔽了**中国大陆和中国香港 (HK) 节点**。切换到**美国、日本、新加坡、台湾**等支持的节点，并在浏览器中清理 `gemini.google.com` 的网站权限与 Cookie。
</AnswerBox>

---

## 🛠️ 解决步骤

1. 将代理节点切换为**美国 (US) 或日本 (JP)** 节点。
2. 在 Clash / Shadowrocket 中确认 `gemini.google.com` 与 `bard.google.com` 均匹配到了该代理节点。
3. 检查 Google 账号的注册地区归属，建议使用非国区 Google 账号登录。
