---
title: NekoBox 客户端指南 (Android / Windows) - sing-box 内核与现代协议配置
description: 全面解读开源代理客户端 NekoBox for Android（及桌面端 Nekoray）的 sing-box 内核特性、Material You UI、兼容订阅格式及导入排错方案。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 客户端指南
client: NekoBox
platform: Android / Windows
faq:
  - q: 安卓手机用 NekoBox 还是 v2rayNG 更好？
    a: 两者都是优秀的免费开源客户端。v2rayNG 胜在体积极小、国民普及度高、机场兼容最久；NekoBox 依托 sing-box 内核，对 Hysteria2、TUIC v5、SS-2022 等新协议支持更及时，且支持直接导入 sing-box 配置与自定义路由。
  - q: NekoBox 导入某些机场 Clash 订阅时提示解析不全怎么办？
    a: 若服务商面板已提供原生 sing-box 订阅链接或通用 Base64 节点链接，应优先使用它们导入 NekoBox；直接解析复杂 Clash Meta YAML 的某些高级字段时，并非所有脚本都能原样平移。
  - q: 如何让国内 App 不走 NekoBox 代理以免影响支付或网速？
    a: 可以在 NekoBox 的「路由设置」开启绕过局域网与大陆地址，同时利用软件内置的「分应用代理（VPN 黑名单/白名单）」直接将银行、外卖和国内社交软件设为绕过（Bypass）。
---

# NekoBox 客户端知识中心（Android / 桌面端）

<AnswerBox question="NekoBox 是什么软件？它为什么受技术派安卓用户青睐？">
<strong>NekoBox</strong>（主打 NekoBox for Android）是一款基于高性能 <strong>sing-box</strong> 开源核心构建的现代代理客户端。<br>
它在设计上提供了原生的 Material You 界面，同时对新近普及的高效协议（如 <strong>VLESS-Reality、Hysteria2、TUIC v5、Shadowsocks-2022</strong>）有着极快的跟进速度，适合追求轻量、纯净和完整协议栈的安卓/桌面用户。
</AnswerBox>

---

## 一、核心技术特点

- **sing-box 核心驱动**：底层直接享用 [sing-box 核心](/clients/sing-box/) 的低内存占用、高效并发连接与统一路由能力。
- **全量现代传输协议**：涵盖主流机场常见线路（Shadowsocks / VMess / Trojan / VLESS-Reality）以及极速 UDP 协议 Hysteria 2 与 TUIC。
- **细粒度安卓分应用代理**：既支持传统基于 `geosite:cn / geoip:cn` 的域名 IP 分流，也允许直接通过手机安装应用清单精确指定哪些 App 放行、哪些走代理。

---

## 二、NekoBox 快速添加机场订阅流程

<StepGuide
  :steps="[
    {
      title: '1. 复制兼容格式的订阅链接',
      desc: '在机场用户面板优先复制通用订阅（Base64）或 sing-box 专用订阅地址（若面板未单独列写，也可先复制通用节点链接测试）。'
    },
    {
      title: '2. 在 NekoBox 新建分组（Groups）',
      desc: '点击左上角抽屉菜单进入「分组（Groups）」➔ 点右上角加号创建分组：分组类型选择「订阅（Subscription）」，粘贴 URL 并保存。'
    },
    {
      title: '3. 刷新订阅并设置基础路由',
      desc: '点击对应分组的更新按钮拉取全部节点；顺手在「设置 ➔ 路由」确认启用绕过大陆地址与局域网，回到节点主页选中常用低延迟节点后点击底部按钮连接。'
    }
  ]"
/>

---

## 三、常见问题排查与对比选择

| 常见故障 / 对比需求 | 处理思路与参考阅读 |
| :--- | :--- |
| **订阅刷新失败或节点数显示为 0** | 切换移动流量刷新避免 Wi-Fi 劫持；核对未设置错节点正则过滤，参考 [订阅拉取与无节点排查](/subscription/no-nodes) |
| **节点连接后全部超时或打不开网页** | 优先确认系统时间误差、检查节点余额是否用尽，对照 [节点超时 Timeout 排查指南](/troubleshooting/all-nodes-timeout) |
| **不想在安卓端配置复杂分流** | 可对比体验极其简单的纯一键型客户端 [v2rayNG 安卓指南](/clients/v2rayng/) 或跨平台一致界面 [Hiddify](/clients/hiddify/) |

---

## 常见问题解答（FAQ）

### 安卓手机用 NekoBox 还是 v2rayNG 更好？

两者都是优秀的免费开源客户端。[v2rayNG](/clients/v2rayng/) 胜在体积极小、国民普及度高、机场兼容最久；NekoBox 依托 sing-box 内核，对 Hysteria2、TUIC v5 等新协议支持更及时，且支持直接导入 sing-box 配置与自定义路由。

### NekoBox 导入某些机场 Clash 订阅时提示解析不全怎么办？

若服务商面板已提供原生 sing-box 订阅链接或通用 Base64 节点链接，应优先使用它们导入 NekoBox；直接解析复杂 Clash YAML 时请留意机场原生支持的格式列表（见 [订阅格式对比](/subscription/formats)）。

### 如何让国内 App 不走 NekoBox 代理以免影响支付或网速？

可以在 NekoBox 的「路由设置」开启绕过局域网与大陆地址，同时利用软件内置的「分应用代理」直接将银行、外卖和国内社交软件设为绕过（Bypass）。
