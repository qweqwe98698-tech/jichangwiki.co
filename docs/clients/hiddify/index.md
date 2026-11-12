---
title: Hiddify 跨平台客户端全指南 - 安装支持、订阅导入与 Smart 智能选路详解
description: 全面介绍开源跨平台代理工具 Hiddify（sing-box 内核）在 Windows、macOS、iOS 与 Android 上的特色功能、支持订阅格式、导入操作步骤与常见问题排查。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: easy
category: 客户端指南
client: Hiddify
platform: Windows / macOS / iOS / Android / Linux
faq:
  - q: Hiddify 和 Clash Verge Rev 在电脑端该选哪一个？
    a: 如果你想多台电脑与手机采用完全一致的极简自动选路界面、懒得自己研究复杂策略组，选 Hiddify 更省心；如果你偏爱细粒度可控的策略分组、经典树状节点测速列表或高度兼容传统机场模板，Windows/macOS 首选 Clash Verge Rev。
  - q: 机场只提供 Clash 订阅链接或通用 Base64 链接，能直接导入 Hiddify 吗？
    a: 可以。Hiddify 基于 sing-box 核心并内置了自动解析兼容层，除了原生支持 sing-box JSON 订阅外，通常也能直接导入标准的 Clash YAML 和通用 Base64 节点订阅。
  - q: Hiddify 出现节点超时或部分网站打不开怎么处理？
    a: 首先切换首页的路由模式（如检查区域分流设置）并手动触发一次订阅刷新；若全局延迟测速显示全部超时，需优先校准系统时钟，并核对账户流量余额或参考全节点超时排查手册。
---

# Hiddify 跨平台极简客户端知识中心

<AnswerBox question="Hiddify 是什么客户端？最适合哪类用户长期使用？">
<strong>Hiddify</strong> 是基于开源 <strong>sing-box</strong> 内核与 Flutter 构建的跨平台代理软件，覆盖 Windows、macOS、Linux、Android 与 iOS 五大系统。<br>
它最大的特征是<strong>全平台界面统一、配置门槛极低且兼容多种订阅格式</strong>，非常适合不想折腾 YAML 语法、希望“导入链接即连”的新手以及多设备同步切换用户。
</AnswerBox>

---

## 一、核心优势与功能定位对比

| 评估维度 | Hiddify | Clash Verge Rev | v2rayNG (Android) |
| :--- | :--- | :--- | :--- |
| **底层内核** | sing-box | Mihomo (Clash.Meta) | Xray / v2ray 核心 |
| **覆盖系统** | Windows / macOS / Linux / Android / iOS | Windows / macOS / Linux | Android 专属 |
| **交互复杂度** | 极简（适合一键自动选择 / 智能分流） | 中等（完整策略组、日志与 TUN 调节） | 轻量（节点列表 + 分应用代理） |
| **兼容订阅格式** | sing-box JSON、Clash YAML、Base64 通用 | Clash / Mihomo YAML | Base64 通用、单节点 URI |

如果你正在纠结桌面或全平台客户端如何挑选，可对比阅读 [代理客户端选择指南](/guides/how-to-choose-client) 与 [Clash Verge Rev 专题](/clients/clash-verge/)。

---

## 二、快速上手与订阅导入流程

<StepGuide
  :steps="[
    {
      title: '1. 复制机场提供的任意兼容订阅地址',
      desc: '登录你的机场后台复制 Clash 订阅、sing-box 订阅或通用 Base64 节点链接（若机场专门提供 sing-box 格式，优先选它以获得最佳匹配）。'
    },
    {
      title: '2. 点击首页添加配置文件（+ New Profile）',
      desc: '打开 Hiddify 主界面，点击中间「+ 新建配置文件 / Add from Clipboard」，将剪切板中的订阅链接粘贴并等待拉取完成。'
    },
    {
      title: '3. 核对地区分流并一键开启连接',
      desc: '在设置选项（Config Options）中将地区（Region）设置为 China 以便自动放行国内直连，随后点击首页大圆按钮即可开启代理。'
    }
  ]"
/>

> [!TIP] 关于 Hiddify 的分流模式
> 建议新手将路由区段保持为 **China（绕过国内直连）**，避免访问国内网银、视频站被误送走境外服务器而拖慢网速并消耗套餐流量。

---

## 三、Hiddify 使用中的常见问题排查

1. **导入后无法解析或节点数为 0**：核查订阅 URL 是否粘贴错成官网网页地址，或者在软件设置里清理误设的节点筛选；必要时参照 [导入后没有节点排查](/subscription/no-nodes)。
2. **显示已连接但所有国外网站转圈**：在 Hiddify 「Proxies（代理列表）」页查看是否卡在一条已失效节点上，试着手动切换另一地区线路或排查 [全节点超时 Timeout 常见根因](/troubleshooting/all-nodes-timeout)。
3. **跨平台 iOS 下载注意**：国区 App Store 无法搜索下载该工具，需配合非国区 Apple ID 进行下载安装，iOS 用户也可以根据习惯对比使用 [Shadowrocket（小火箭）](/clients/shadowrocket/)。

---

## 常见问题解答（FAQ）

### Hiddify 和 Clash Verge Rev 在电脑端该选哪一个？

如果你想多台电脑与手机采用完全一致的极简自动选路界面、懒得自己研究复杂策略组，选 Hiddify 更省心；如果你偏爱细粒度可控的策略分组、经典树状节点测速列表或高度兼容传统机场模板，Windows/macOS 首选 [Clash Verge Rev](/clients/clash-verge/)。

### 机场只提供 Clash 订阅链接或通用 Base64 链接，能直接导入 Hiddify 吗？

可以。Hiddify 基于 sing-box 核心并内置了自动解析兼容层，除了原生支持 sing-box JSON 订阅外，通常也能直接导入标准的 [Clash YAML 和通用 Base64 节点订阅](/subscription/formats)。

### Hiddify 出现节点超时或部分网站打不开怎么处理？

首先切换首页的路由模式（如检查区域分流设置）并手动触发一次订阅刷新；若全局延迟测速显示全部超时，需优先校准系统时钟，并核对账户流量余额或参考 [全节点超时排查手册](/troubleshooting/all-nodes-timeout)。

---

## 关联导航
- [主流客户端横评与选型指南](/guides/how-to-choose-client)
- [sing-box 通用内核技术中心](/clients/sing-box/)
- [机场节点挑选技巧（IEPL 专线 vs 中转）](/guides/how-to-choose-node)
