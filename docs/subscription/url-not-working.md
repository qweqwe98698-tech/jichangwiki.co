---
title: 订阅链接打不开或无响应排查指南
description: 浏览器与客户端访问订阅 URL 提示 404 Not Found、502 Bad Gateway、连接超时或证书过期的原因与处理方案。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
---

# 订阅链接打不开或无响应排查

<AnswerBox question="订阅链接在浏览器打不开或客户端拉取超时怎么办？">
首先检查复制的 URL 是否包含多余空格或字符；其次尝试在开启现有代理的环境下访问（部分机场订阅域名被国内污染）；若返回 404 或 500，登录机场官网重置订阅 Token。
</AnswerBox>

---

## 🔍 HTTP 错误状态码对照

- **404 Not Found**：订阅路径错误，或服务商后台已删除了该旧 Token。需要在官网后台重新复制或重置一次订阅链接。
- **502 / 504 Bad Gateway**：服务商后台后端 API 崩溃或正在进行数据库维护，需等待服务商恢复。
- **ERR_CONNECTION_TIMED_OUT**：订阅域名在国内被 DNS 投毒或 IP 阻断，需开启已有代理后再尝试拉取更新。
