---
title: TLS 证书错误与握手失败排查 - certificate has expired 与时钟同步实战
description: 深度解析 TLS 握手失败、certificate has expired 证书过期报错、x509 unknown authority 与系统时钟校准实战。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
---

# TLS 证书错误与握手失败排查指南

<AnswerBox question="连接节点时提示 TLS Certificate Error 或 Handshake Timeout 怎么办？">
核心排查三大步骤：<br>
① <strong>同步系统时间（90% 的原因）</strong>：系统时钟与标准时间偏差超过 90 秒会导致 TLS 证书有效期校验失败；<br>
② <strong>在客户端设置中暂时开启“允许不安全连接 (Skip Cert Verify)”</strong>；<br>
③ <strong>重新导入最新订阅链接以更新证书 SNI 域名</strong>。
</AnswerBox>

---

## 🌟 2026 标配 Reality 免证书高抗封锁专线机场推荐

<script setup>
import { airportsData } from '../.vitepress/data/airportsData'
const guangsu = airportsData.find(a => a.id === 'guangsuyun')
const yuzhou = airportsData.find(a => a.id === 'yuzhoucloud')
</script>

<AirportCard v-if="guangsu" :airport="guangsu" />
<AirportCard v-if="yuzhou" :airport="yuzhou" />

---

## 📚 关联技术图谱
- [TLS 安全传输层协议原理](/glossary/tls)
- [Reality 协议借用证书免维护解析](/protocols/reality)
- [2026 机场综合口碑排行榜](/navigation/ranking)
