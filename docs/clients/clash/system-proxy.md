---
title: Clash 系统代理配置指南 - 端口监听、快捷开关与退出断网排查
description: 深度解析 Clash 系统代理（System Proxy）开关工作机制、本地 7890/7897 混合端口监听原理、Windows WinINet 注册表与 macOS 网络配置联动细节，教你彻底排查异常退出客户端后浏览器全面断网的问题，并提供 30 秒清空残留代理设置恢复上网的实战解决指南与常用参考。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
category: 客户端知识
---

# Clash 系统代理配置与断网排查指南

<AnswerBox question="什么是 Clash 的系统代理？退出客户端后打不开网页怎么修？">
系统代理是 Clash 通知操作系统将本机出站 HTTP/SOCKS 端口设置为 `127.0.0.1:7890` 的开关。<br>
<strong>退出后网页打不开修复</strong>：进入 Windows `设置` ➔ `网络和 Internet` ➔ `代理` ➔ 关闭“使用代理服务器”开关。
</AnswerBox>

---

## 🌟 2026 标配高可用专线机场推荐

<script setup>
import { airportsData } from '../../.vitepress/data/airportsData'
const guangsu = airportsData.find(a => a.id === 'guangsuyun')
const yuzhou = airportsData.find(a => a.id === 'yuzhoucloud')
</script>

<AirportCard v-if="guangsu" :airport="guangsu" />
<AirportCard v-if="yuzhou" :airport="yuzhou" />

---

## 📚 关联技术图谱
- [系统代理 (System Proxy) 底层原理与故障排查](/glossary/system-proxy)
- [已连接但打不开网页排查](/troubleshooting/connected-but-no-internet)
- [2026 机场综合口碑排行榜](/navigation/ranking)
