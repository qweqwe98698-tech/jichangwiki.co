---
title: sing-box 通用通用核心知识中心
description: 新一代通用通用网络代理核心 sing-box 的技术架构、JSON 配置规范、跨平台客户端及现代协议支持。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: sing-box
platform: 跨平台 (Windows / macOS / iOS / Android / Linux)
---

# sing-box 通用核心知识中心

<AnswerBox question="什么是 sing-box？它为什么被誉为新一代代理架构标准？">
sing-box 是由 SagerNet 团队开发的新一代跨平台通用代理核心。它采用极低内存占用与高并发设计，原生支持全量现代协议（Shadowsocks 2022、VLESS-Reality、TUIC、Hysteria 2、WireGuard 等），并在多平台提供官方客户端。
</AnswerBox>

---

## 🚀 核心技术亮点

1. **统一的 JSON 抽象规范**：配置结构由 `inbounds`（入站）、`outbounds`（出站）、`route`（路由规则）与 `dns` 四大模块组成，结构严密，支持现代 Rule-Set 规则集编译。
2. **卓越的性能与内存控制**：相比传统代理客户端，sing-box 在移动设备与嵌入式路由器（OpenWrt）上内存占用可降低 40%~60%。
3. **原生 TUN 虚拟网卡支持**：内置高性能 gVisor / System 虚拟网络栈，支持全协议流量零损耗透明代理。
