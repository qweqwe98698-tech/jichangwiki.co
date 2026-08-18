---
title: SOCKS5 基础代理协议百科
description: IETF RFC 1928 标准 SOCKS5 协议的握手过程、认证方式、TCP/UDP 支持及在本地客户端中的核心作用。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 协议百科
protocol: SOCKS5
---

# SOCKS5 基础代理协议百科

<AnswerBox question="什么是 SOCKS5 协议？它在代理软件中扮演什么角色？">
SOCKS5 是由 IETF 标准化 (RFC 1928) 的**通用传输层代理协议**。它本身不包含加密和伪装能力，但作为通用工业标准，被 Clash、v2rayN 作为本地监听端口（如 `10808` / `7890`），供浏览器、Telegram、Git 等上层应用连接。
</AnswerBox>

---

## ⚙️ SOCKS5 的核心技术特性

1. **协议无关性**：工作在会话层/传输层，可以代理任何基于 TCP 与 UDP 的上层协议（HTTP、FTP、SMTP、DNS 等）。
2. **支持域名解析 (Remote DNS)**：客户端可以把域名直接发给 SOCKS5 代理端解析，避免本地 DNS 污染。
3. **明文无伪装**：标准 SOCKS5 通信是完全明文的，**严禁在跨境公网上直接裸奔使用**，必须作为本地回环接口（`127.0.0.1`）使用，或嵌套在加密隧道内部。
