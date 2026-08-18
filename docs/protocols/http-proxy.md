---
title: HTTP / HTTPS 代理协议百科
description: HTTP Proxy 工作原理、HTTP CONNECT 隧道方法及与 SOCKS5 代理的区别。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 协议百科
protocol: HTTP Proxy
---

# HTTP / HTTPS 代理协议百科

<AnswerBox question="什么是 HTTP 代理？它与 SOCKS5 代理有什么区别？">
HTTP 代理是工作在应用层的标准网络代理。对于 HTTP 明文请求直接解析转发；对于 HTTPS 加密请求，客户端使用 <code>CONNECT</code> 方法向代理服务器发起握手，建立一条透明的 TCP 盲转发隧道。
</AnswerBox>

---

## ⚖️ HTTP 代理 vs SOCKS5 代理

- **HTTP 代理**：仅支持 TCP 流量，不支持 UDP；与 Windows/macOS 系统的「系统代理」接口天然集成。
- **SOCKS5 代理**：通用性更强，原生支持 TCP 与 UDP 数据包转发。
