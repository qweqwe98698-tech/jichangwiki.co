---
title: 已连接节点但打不开网页？- 2026 最新系统代理残留与 DNS 劫持排查
description: 深度解决代理客户端显示连接成功但浏览器打不开网页、ERR_PROXY_CONNECTION_FAILED 报错、DNS 解析失败与一键修复。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
category: 故障排查
---

# 已显示连接成功，但打不开任何网页？排查与修复

<AnswerBox question="为什么客户端显示节点已连接，但所有网页都提示 ERR_PROXY_CONNECTION_FAILED 或打不开？">
核心排查三大要点：<br>
① <strong>未开启“系统代理 (System Proxy)”开关</strong>（客户端虽然在后台运行，但并未通知操作系统将浏览器流量转交给它）；<br>
② <strong>端口冲突（如 7890 端口被其他软件占用）</strong>；<br>
③ <strong>浏览器安装了 SwitchyOmega 等第三方代理插件，接管了代理设置导致冲突</strong>。<br>
30 秒一键修复：<strong>在客户端界面打开“系统代理”开关，并将浏览器代理插件设置为“直接连接”或“使用系统代理”</strong>。
</AnswerBox>

---

## 🛠️ 一、分步诊断排错清单

### 1. 检查客户端主界面开关
确保客户端上的 **`系统代理 (System Proxy)`** 或 **`TUN 模式`** 处于亮起开启状态。

### 2. 检查浏览器第三方代理插件
若 Chrome / Edge 安装了 SwitchyOmega / Proxy SwitchySharp 等扩展，扩展会覆盖 Windows 系统的代理设置：
- 点击插件图标 ➔ 选择 **`[系统代理]`** 或 **`[直接连接]`**。

### 3. Windows 注册表代理快速复位
若之前非正常退出客户端导致注册表残留：
- 打开 Windows `设置` ➔ `网络和 Internet` ➔ `代理` ➔ 确保开启正确的端口 `127.0.0.1:7890`。

---

## 🌟 二、2026 稳定高可用专线机场推荐

<script setup>
import { airportsData } from '../.vitepress/data/airportsData'
const guangsu = airportsData.find(a => a.id === 'guangsuyun')
const civet = airportsData.find(a => a.id === 'civetnet')
</script>

<AirportCard v-if="guangsu" :airport="guangsu" />
<AirportCard v-if="civet" :airport="civet" />

---

## 📚 关联技术图谱
- [系统代理 (System Proxy) 原理与故障排查](/glossary/system-proxy)
- [TUN 虚拟网卡模式解析](/glossary/tun-mode)
- [2026 机场综合口碑排行榜](/navigation/ranking)
