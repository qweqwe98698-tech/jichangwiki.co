---
title: Clash Verge DNS 与 Fake-IP 模式解析
description: 深入解析 Clash Verge 内置 DNS 模块、Fake-IP 与 Redir-Host 模式差异以及如何避免 DNS 泄漏与污染。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: Clash Verge Rev
---

# Clash Verge DNS 与 Fake-IP 模式解析

<AnswerBox question="Clash Verge 中的 Fake-IP 模式是什么？为什么要用它？">
Fake-IP 是一种高性能 DNS 代理技术。当本地软件发起域名解析时，Clash 内核会立即返回一个虚构的保留私网 IP（如 `198.18.0.x`），并在内核建立域名映射；真正的 DNS 解析延迟被转移到远端代理节点执行，从而彻底杜绝 DNS 污染并实现 0 延迟秒开。
</AnswerBox>

---

## ⚖️ Fake-IP vs Redir-Host

| 对比维度 | Fake-IP 模式 [推荐] | Redir-Host 模式 [传统] |
| :--- | :--- | :--- |
| **解析发生地** | 本地直接给伪 IP，远端节点代为解析 | 本地必须先通过远程 DNS 真实解析出目标 IP |
| **首次打开网页延迟** | **极低（0 ms 响应）** | 较高（需等待跨国 DNS 往返） |
| **防 DNS 污染能力** | **完美杜绝本地污染** | 依赖远程 DoH/DoT 握手，易受公网丢包影响 |
| **个别应用兼容性** | 极少数依赖真实 IP 的旧协议需设 Filter | 兼容性最好，但速度较慢 |

---

## 🛠️ 推荐的高性能 DNS 配置示范

在 Clash Verge 订阅配置（或扩展配置）中，标准的 DNS 结构如下：

```yaml
dns:
  enable: true
  listen: 0.0.0.0:1053
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - '*.lan'
    - 'localhost.ptlogin2.qq.com'
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://doh.pub/dns-query
    - https://dns.alidns.com/dns-query
```

- **国内直连解析**：采用阿里 DNS / 腾讯 DoH，确保国内域名解析出最近的 CDN 节点。
- **国外域名**：由 Fake-IP 接管，直接交由远端落地节点在机房内网高速解析。
