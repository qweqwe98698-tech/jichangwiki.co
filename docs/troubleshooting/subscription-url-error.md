---
title: 订阅链接无法访问或 404 排查
description: 订阅 URL 报 404 Not Found、500 Internal Server Error 或连接被拒绝的原因与处理。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
---

# 订阅链接无法访问或 404 排查

<div class="jw-badge jw-badge-blue">订阅异常</div>

<AnswerBox question="订阅链接显示 404 或打不开怎么办？">
404 表示该订阅 Token 在服务端数据库中已不存在（通常是机场后台重置了 Token 或服务商更换了订阅域名）。登录机场官网后台重新复制最新订阅链接，或点击「重置订阅 Token」后重新导入。
</AnswerBox>

---

## 🛠️ 常见状态码排查清单

- **404 Not Found**：Token 已被销毁或路径拼写错误。
- **500 / 502 Bad Gateway**：机场订阅后端服务器数据库繁忙或宕机，稍等 10 分钟重试。
- **SSL 证书过期**：服务商下发订阅域名的 HTTPS 证书未及时续签，联系服务商客服处理。
