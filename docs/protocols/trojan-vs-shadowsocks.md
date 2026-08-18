---
title: Trojan 和 Shadowsocks 深度对比 - 公网伪装与专线内网的取舍
description: Trojan 与 Shadowsocks 协议的设计思想、公网抗审查能力、加解密延迟与专线场景适配对比。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 对比评测
---

# Trojan 和 Shadowsocks 深度对比

<AnswerBox question="Trojan 和 Shadowsocks 应该怎么选？">
在**公网直连 / 普通中转**环境下，首选 **Trojan**（具备标准 HTTPS 网页特征，不易被封锁）；在 **IEPL / IPLC 内网专线** 环境下，首选 **Shadowsocks**（无 TLS 握手延迟，吞吐性能与并发极佳）。
</AnswerBox>

---

## 📊 核心对比总表

<CompareTable
  featureHeader="对比维度"
  itemAHeader="Trojan 协议"
  itemBHeader="Shadowsocks 协议"
  :rows="[
    { feature: '流量外观特征', valA: '标准 HTTPS (TLS 1.3) 流量', valB: '高熵随机对称加密数据流' },
    { feature: '公网抗封锁能力', valA: '<strong>极强</strong> (伪装成真实 Web 站点)', valB: '较弱 (容易被基于机器学习的流量识别阻断)' },
    { feature: '握手延迟', valA: '需进行标准 TLS 证书协商 (约 1~2 RTT)', valB: '<strong>几乎零握手延迟</strong> (直接发送加密报文)' },
    { feature: '证书与域名依赖', valA: '必须配置有效域名与 SSL 证书', valB: '<strong>无需任何域名与证书</strong>' },
    { feature: '最佳适用场景', valA: '<strong>公网中转、直连 VPS、海外 Web 伪装</strong>', valB: '<strong>IEPL / IPLC 跨境专线内部传输</strong>' }
  ]"
/>
