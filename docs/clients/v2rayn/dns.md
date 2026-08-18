---
title: v2rayN DNS 设置与防污染配置
description: v2rayN 内置 DNS 设置、DoH 加密解析与国内国外域名分流解析调优。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: v2rayN
---

# v2rayN DNS 设置与防污染配置

<AnswerBox question="v2rayN 如何配置 DNS 以防止污染并提升网站秒开率？">
在「设置」→「DNS 设置」中，将国内 DNS 设为阿里/腾讯 DoH（`https://doh.pub/dns-query`），国外远程 DNS 设为 Google/Cloudflare DoH（`https://dns.google/dns-query`）。
</AnswerBox>

---

## 🛠️ 标准分流 DNS 架构

```json
{
  "servers": [
    {
      "address": "https://doh.pub/dns-query",
      "domains": ["geosite:cn"],
      "expectIPs": ["geoip:cn"]
    },
    {
      "address": "https://dns.google/dns-query",
      "domains": ["geosite:geolocation-!cn"]
    },
    "223.5.5.5"
  ]
}
```

- **国内域名**：由 `doh.pub` 快速返回中国大陆 CDN IP，访问腾讯视频、淘宝等极速直连。
- **国外域名**：由 `dns.google` 在节点端安全解析，杜绝 DNS 劫持与 SNI 阻断。
