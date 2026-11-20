---
title: Shadowrocket 是什么？- iOS 小火箭的工作原理与核心能力
description: 全面介绍 iOS 代理客户端 Shadowrocket（小火箭）的起源背景、基于苹果 Network Extension 框架的本地 VPN 通道运作原理、完整支持的协议栈（Shadowsocks、VMess、VLESS、Trojan、Hysteria 2 等）以及低功耗与高兼容性的核心优势解析，全面了解。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
client: Shadowrocket
platform: iOS
---

# Shadowrocket 是什么与工作原理

<AnswerBox question="Shadowrocket（小火箭）在 iOS 系统中是如何工作的？">
Shadowrocket 利用苹果官方提供的 **Network Extension (网络扩展)** 框架，在 iOS 系统底层建立本地 VPN 隧道。所有进出 iPhone 的网络流量都会经过该本地隧道，由小火箭根据规则决定哪些直连、哪些走代理节点转发。
</AnswerBox>

---

## 🚀 核心特性概览

1. **协议支持极其全面**：支持 Shadowsocks, ShadowsocksR, VMess, VLESS (支持 Reality), Trojan, Hysteria 2, TUIC, SOCKS5 等绝大多数现代代理协议。
2. **丰富的订阅兼容性**：支持 Base64、Clash 格式、sing-box 格式订阅直接解析与扫码导入。
3. **强大的规则分流引擎**：支持 `DOMAIN-SUFFIX`、`IP-CIDR`、`GEOIP` 规则以及第三方远程分流规则集更新。
4. **MITM 与脚本重写**：支持 HTTPS 解密抓包与轻量 JavaScript 脚本处理。
