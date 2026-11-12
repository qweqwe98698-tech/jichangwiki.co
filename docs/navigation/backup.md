---
title: 高可用防失联备用机场导航与双订阅容灾配置策略
description: 2026 防断网高可用备份方案：收录支持不限时按量付费的星岛梦与灵猫网络，并附 Clash Verge / Mihomo 双订阅自动故障转移 (Fallback) 策略组配置实战。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 机场导航
---

# 高可用防失联备用机场导航与配置策略

<AnswerBox question="如何构建一套主力维护时也不掉线的高可用备用体系？">
① 准备一份<strong>主力包月专线订阅</strong> + 一份<strong>不限时按量计费备用订阅</strong>（流量用多少扣多少、不会按月清零）；② 在 Clash Verge / Shadowrocket 中同时导入两份订阅，或在策略组中配置「自动故障转移 (Fallback)」，当主力超时时秒级切换至备用线路。
</AnswerBox>

---

## 🛡️ 一、现役支持不限时按量备用的服务商

以下收录服务商均提供**不限时按量计费套餐**（具体余量说明以各官网最新套餐页条款为准）：

<script setup>
import { airportsData } from '../.vitepress/data/airportsData'
const backupList = airportsData.filter(a => a.payAsYouGo)
</script>

<AirportCard v-for="item in backupList" :key="item.id" :airport="item" />

---

## ⚙️ 二、Clash / Mihomo 双订阅手动与自动容灾做法

### 做法 A：客户端独立多 Profile 切换（最简单，适合 95% 用户）
1. 按照 [Clash Verge 订阅导入教程](/clients/clash-verge/import-subscription) 分别导入「主力机场订阅」和「备用按量订阅」。
2. 平时激活主力配置卡片；一旦发现主力 [节点全部超时 (Timeout)](/troubleshooting/all-nodes-timeout)，直接在「订阅 (Profiles)」中点击激活备用配置即可恢复上网。

### 做法 B：配置 `fallback` 自动故障转移策略组（进阶写法）
若使用自建合并配置或脚本覆写（Merge / Script），可按以下结构定义健康检查周期，当首选节点 `generate_204` 超时时自动切换下一节点：

```yaml
proxy-groups:
  - name: 🚀 自动容灾
    type: fallback
    url: http://www.gstatic.com/generate_204
    interval: 300
    proxies:
      - 🇭🇰 主力专线-节点01
      - 🇭🇰 备用按量-节点01
```

延伸阅读：[不限时按量付费备用机场专题推荐](/recommend/pay-as-you-go) 与 [节点倍率流量计算规则](/glossary/node-multiplier)。
