---
title: GFW (防火长城) - 技术演进、拦截机制与现代抗封锁技术解析
description: 深度解析防火长城 (Great Firewall) 的底层技术手段（SNI阻断、主动探测、机器学习分类器）与现代专线/Reality协议抗封锁实战。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: hard
category: 百科词典
---

# GFW (Great Firewall / 防火长城) 深度技术解析

<AnswerBox question="什么是 GFW？它的核心拦截技术是如何演进的？">
GFW 是部署在中国国家级骨干网国际出口上的大型分布式网络流量监控与过滤防御系统。
其拦截技术经历了从早期的<strong>明文关键字与 DNS 污染</strong>、中期的<strong>IP/端口黑名单与明文 SNI 阻断</strong>，演进至现代的<strong>全自动主动探测 (Active Probing)、TLS 流量指纹识别 (JA3/JA4) 与基于机器学习的未知协议实时丢包</strong>。
</AnswerBox>

---

## ⚙️ 一、GFW 核心技术拦截手段全景

```mermaid
graph TD
  Traffic[跨境网络流量] --> D1{1. DNS 解析层}
  D1 -->|命中黑名单| D1_Action[旁路伪造响应 DNS 污染]
  D1 -->|通过| D2{2. 传输握手层}
  
  D2 -->|明文 SNI 包含敏感词| D2_RST[注入 TCP RST 重置断开]
  D2 -->|疑似未知代理协议特征| D3{3. 主动探测系统 Active Probing}
  
  D3 -->|向服务器回连探测特定握手| D3_Check{是否返回代理特征响应?}
  D3_Check -->|是| Ban[立即封禁服务器 IP + 端口]
  D3_Check -->|否 (Reality完美伪装)| Pass[放行通过]
```

---

## 🔬 二、三大核心拦截机制深度剖析

### 1. SNI (Server Name Indication) 阻断
- **机制**：在 TLS 握手的 Client Hello 阶段，目标网站域名通常以明文传输。GFW 监视到受限域名即刻向两端发送伪造的 `TCP RST` 报文强行重置 TCP 连接。
- **应对方案**：使用 **ECH (Encrypted Client Hello)** 或 **VLESS-Reality（借用正规白名单网站证书）**。

### 2. 主动探测 (Active Probing)
- **机制**：当 GFW 监测到某个境外 IP 产生了连续大流量的加密 TCP 握手时，探测集群会在数秒内主动向该服务器发送各类伪造的 Shadowsocks/VMess 数据包，若服务器返回了对应的响应特征，立即下发封锁指令。
- **应对方案**：**VLESS-Reality**（收到非合法密钥探测时，直接将连接转发给真正的目标大型网站，使探测器无法抓到把柄）。

### 3. 基于机器学习的熵值与流量指纹分析
- **机制**：检测数据包大小分布、包到达间隔时间（Timing）和密文熵值（随机度）。

---

## 🛡️ 三、终极抗封锁两大架构方案

| 方案类别 | 代表技术 | 抗封锁原理 | 适用场景 |
| :--- | :--- | :--- | :--- |
| **物理隔离方案** | **IEPL / IPLC 物理专线** | **走运营商封闭内网物理光纤，完全不过 GFW** | 追求 100% 稳定、0 维护、0 丢包 |
| **密码学协议伪装** | **VLESS-Reality / Trojan** | **完美模拟真实合规 HTTPS 网站 TLS 1.3 握手** | 自建节点、公网穿透、高性价比 |

---

## 🌟 四、2026 专线不过 GFW / 抗封锁机场推荐

<script setup>
import { airportsData } from '../.vitepress/data/airportsData'
const guangsu = airportsData.find(a => a.id === 'guangsuyun')
const yuzhou = airportsData.find(a => a.id === 'yuzhoucloud')
</script>

<AirportCard v-if="guangsu" :airport="guangsu" />
<AirportCard v-if="yuzhou" :airport="yuzhou" />

---

## 📚 关联技术百科
- [IEPL 专线技术百科（不过 GFW 原理）](/network/iepl)
- [VLESS 协议与 Reality 抗主动探测解析](/protocols/reality)
- [全 IEPL 专线高端机场推荐](/recommend/iepl-airports)
