---
title: Shadowrocket DNS 设置与防 DNS 泄漏指南
description: 小火箭的 DNS 服务器配置、DoH (DNS over HTTPS) 加密防污染解析与 Fallback 设置。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: Shadowrocket
---

# Shadowrocket DNS 设置与防 DNS 泄漏

<AnswerBox question="小火箭应该如何设置 DNS 才能避免污染并加快网页打开速度？">
在小火箭「设置」→「DNS」中，推荐配置阿里 DNS（`223.5.5.5`）或腾讯 DoH 作为国内直连解析服务器，并在远程代理端开启 Fake-IP 或使用 Cloudflare/Google DoH 解析境外域名。
</AnswerBox>

---

## 🛠️ 推荐 DNS 配置方案

在小火箭「设置」→「DNS」模块中：

1. **DNS 覆盖 (DNS Override)**：`开启`
2. **默认 DNS 服务器 (Direct DNS)**：
   - `223.5.5.5`（阿里公共 DNS）
   - `119.29.29.29`（腾讯公共 DNS）
   - `https://doh.pub/dns-query`（腾讯加密 DoH）
3. **远程解析 DNS (Remote DNS)**：
   - `https://1.1.1.1/dns-query`
   - `https://8.8.8.8/dns-query`

这样既能确保国内 App（如微信、美团）解析到速度最快的国内 CDN 节点，又能保证境外请求在节点出口进行安全加密解析，杜绝 DNS 劫持与访问特征泄漏。
