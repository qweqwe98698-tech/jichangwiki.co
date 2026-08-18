---
title: Clash 分流规则语法与高级配置 - DOMAIN / IP-CIDR / GEOIP 实战
description: 深度解析 Clash 规则分流语法、自顶向下匹配顺序、Rule-Providers 规则集自动更新与自定义规则实战。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 客户端知识
---

# Clash 分流规则语法与高级配置实战

<AnswerBox question="Clash 的分流规则是如何匹配并执行出站动作的？">
Clash 按照 <strong>自顶向下（从第一行扫描至最后一行）</strong> 的顺序逐行匹配规则。<br>
一旦当前访问的域名或 IP 命中了某一条规则，Clash 会立即执行该规则指定的出站行为（如 DIRECT 直连、REJECT 拦截、或特定的代理策略组），<strong>后续所有规则将不再被扫描计算</strong>。
</AnswerBox>

---

## 🌟 2026 标配精细规则的高速专线机场推荐

<script setup>
import { airportsData } from '../../.vitepress/data/airportsData'
const guangsu = airportsData.find(a => a.id === 'guangsuyun')
const civet = airportsData.find(a => a.id === 'civetnet')
</script>

<AirportCard v-if="guangsu" :airport="guangsu" />
<AirportCard v-if="civet" :airport="civet" />

---

## 📚 关联技术图谱
- [规则分流模式 (Rule Mode) 深度解析](/glossary/rule-mode)
- [Clash 是什么与工作原理](/clients/clash/what-is-clash)
- [2026 机场综合口碑排行榜](/navigation/ranking)
