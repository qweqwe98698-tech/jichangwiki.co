---
title: 百科词典 - 网络代理核心术语全景速查与知识库
description: 节点, 订阅, 延迟, 丢包率, 带宽, 倍率, TUN模式, 系统代理, 规则分流, 全局代理, 软路由, Clash内核, 入口机, 落地机, 中转隧道, BGP多线, IEPL专线, IPLC专线, 原生IP, 广播IP, 住宅IP, 欺诈分, DNS污染, DNS泄露, GFW, QoS, TLS 标准词典。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
category: 百科词典
---

# 百科词典 (Glossary) - 术语全景索引

本词典为网络代理、协议架构与系统设置领域的专业术语提供准确、凝练的标准定义与独立深入词条单页。

---

## 📑 1. 基础概念与计费

- **[节点 (Node)](/glossary/node)**：远端机房中运行的代理服务器实例。
- **[订阅 (Subscription)](/glossary/subscription)**：一键获取并批量更新全部节点的托管配置链接。
- **[延迟与 Ping (Latency)](/glossary/latency)**：数据往返时间 (RTT)，反映网络交互敏捷度。
- **[丢包率 (Packet Loss)](/glossary/packet-loss)**：传输中未达数据包占比，卡顿的罪魁祸首。
- **[网络带宽 (Bandwidth)](/glossary/bandwidth)**：单位时间内最大传输容量，决定下载与 4K 极速。
- **[节点倍率 (Multiplier)](/glossary/node-multiplier)**：节点扣除套餐流量的计费乘数（0.1x ~ 5.0x）。

---

## ⚙️ 2. 客户端模式与系统

- **[TUN 虚拟网卡模式](/glossary/tun-mode)**：操作系统三层网络层强制接管全部应用与游戏 UDP 流量。
- **[系统代理 (System Proxy)](/glossary/system-proxy)**：标准 HTTP/SOCKS 注册表广播代理。
- **[规则分流模式 (Rule Mode)](/glossary/rule-mode)**：国内直连、国外走代理的智能分流模式。
- **[全局代理模式 (Global Mode)](/glossary/global-mode)**：全部流量一律强制走代理节点。
- **[软路由与旁路网关](/glossary/soft-routing)**：OpenWrt 透明网关，全屋设备免装客户端。
- **[Clash / Mihomo 内核](/glossary/clash-core)**：现代开源内核演进与 VLESS/Reality 支持。

---

## 🌐 3. 网络链路与架构

- **[入口服务器 (Entry Node)](/glossary/entry-node)**：国内第一跳机房，负责就近接入与隐藏落地。
- **[落地服务器 (Exit Node)](/glossary/exit-node)**：海外最终出口，决定流媒体与 AI 解锁能力。
- **[中转隧道 (Transit Relay)](/glossary/transit)**：国内跳板加密隧道转发，兼顾性价比与稳定性。
- **[BGP 动态多线接入](/glossary/bgp)**：电信/联通/移动三网智能路由调度。
- **[IEPL 内网专线](/glossary/iepl)**：二层以太网私网光纤专线，不过公网 GFW，晚高峰 0 丢包。
- **[IPLC 物理专线](/glossary/iplc)**：点对点物理层裸光纤，极低物理延迟。

---

## 🛡️ 4. IP 类型与风控安全

- **[原生 IP (Native IP)](/glossary/native-ip)**：注册地与机房物理位置一致，流媒体全解锁。
- **[广播 IP (Broadcast IP)](/glossary/broadcast-ip)**：BGP 跨区播报 IP，性价比高但易受风控。
- **[住宅 IP (Residential IP)](/glossary/residential-ip)**：海外家庭宽带真实 ISP 分配 IP，防封号神级选择。
- **[IP 欺诈分 (Fraud Score)](/glossary/fraud-score)**：安全风控平台的风险评分，决定是否触发 1020 报错。
- **[DNS 污染 (DNS Pollution)](/glossary/dns-pollution)**：防火墙抢答伪造虚假 IP 阻断机制。
- **[DNS 泄露 (DNS Leak)](/glossary/dns-leak)**：代理状态下 DNS 仍向本地运营商暴露真实位置。

---

## 🔐 5. 协议加密与防护

- **[GFW (防火长城)](/glossary/gfw)**：国家级网络边界监控、DNS 污染与主动探测机制。
- **[QoS (运营商服务质量控制)](/glossary/qos)**：晚高峰骨干网公网单向限速与丢包策略。
- **[TLS 安全传输层协议](/glossary/tls)**：现代 HTTPS 握手与伪装通信基石。

---

## 🧭 相关核心专题
- [2026 最新机场推荐指南](/recommend/)
- [2026 机场综合排行榜](/navigation/ranking)
- [协议全景深度对比](/protocols/protocol-comparison)
