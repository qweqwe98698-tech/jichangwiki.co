---
title: Stash (iOS / macOS / tvOS) 指南 - 苹果生态下的 Clash 订阅完美平替
description: 详尽介绍 Apple 全平台客户端 Stash 的特点、如何直接导入机场 Clash YAML 订阅链接、iCloud 配置同步以及和 Shadowrocket/Surge/Loon 的适用场景对比。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 客户端指南
client: Stash
platform: iOS / iPadOS / macOS / tvOS
faq:
  - q: 电脑上用 Clash Verge，手机 iPhone 想用一个不用学新语法、直接粘贴同一个 Clash 订阅的工具，选谁？
    a: 选 Stash 最省事。它直接原生读取标准 Clash YAML（及新版 Mihomo 相关节点协议）与远端策略，配合 iCloud 云同步功能，能让你在 iPhone、iPad、Mac 和 Apple TV 之间维持近乎一致的分流逻辑。
  - q: Stash 可以像小火箭一样免费下载吗？支持 Apple TV (tvOS) 吗？
    a: Stash 属于海外 App Store 买断制付费工具，不支持免账号或国区直接下载（需外区 Apple ID 购买）；它的一大独特优势是官方直接适配了 tvOS（Apple TV），大屏电视看流媒体非常方便。
  - q: 把 Clash 链接导入 Stash 后遇到测速 Timeout 或某些节点不出现怎么排查？
    a: 检查是否粘贴了 Base64 链接而不是 Clash YAML 链接；同时确保 Stash App 已升级到最新版以支持 Reality 或 Hysteria2 协议，若全节点仍超时请检查本地时钟与机场余额。
---

# Stash 客户端知识中心（iOS / macOS / Apple TV）

<AnswerBox question="Stash 是一款怎样的客户端？它和 Clash 以及小火箭有什么区别？">
<strong>Stash</strong> 是专门围绕 Apple 全家桶（iPhone / iPad / Mac / Apple TV）研发的规则代理客户端。<br>
其最大差异化优势在于<strong>直接原生兼容机场标准 Clash YAML 订阅配置</strong>（包含策略组、分流规则及覆写机制），让你在苹果移动设备上也能获得与桌面端 Clash 一致的分流体验，并通过 iCloud 同步跨设备配置。
</AnswerBox>

---

## 一、Stash 的核心竞争优势

1. **Clash 订阅链接无缝平移**：桌面端在用 [Clash Verge Rev](/clients/clash-verge/) 时机场给的那条 `Clash` 订阅，原封不动复制进 Stash「配置列表 ➔ 从 URL 下载」就能即刻生效，不用再去学圈X 或 Surge 的复杂规则语法。
2. **完整的 Apple TV（tvOS）原生生态**：tvOS 17+ 允许运行 VPN 代理客户端后，Stash 是少数支持通过 iPhone 快速扫码或 iCloud 同步，直接在客厅电视上切节点看海外流媒体的软件之一。
3. **按需自动连接（On Demand）与流量仪表盘**：可定义连接到指定公司/家里 Wi-Fi 自动断连或切规则，同时具备极清晰的连接诊断日志与延迟测速图形显示。

---

## 二、如何在 Stash 中导入机场订阅（3 步生效）

<StepGuide
  :steps="[
    {
      title: '1. 在机场后台复制 Clash 专属订阅',
      desc: '注意一定要选「Clash / Clash Meta」专用链接，不要复制普通 Base64 链接，避免配置文件缺少策略组与规则字段。'
    },
    {
      title: '2. 通过 URL 下载配置文件',
      desc: '打开 Stash 点击当前配置卡片「切换配置文件 ➔ 从 URL 下载」，粘贴链接并保存。在机场提供一键导入 Stash 按钮时也可尝试由 Safari 直接唤起。'
    },
    {
      title: '3. 选择节点组并允许系统 VPN 授权',
      desc: '确认主界面的策略组选定正确地区（或自动选择），点击顶部启动开关并在系统弹窗里输入锁屏密码/面容 ID 写入 VPN 描述文件。'
    }
  ]"
/>

---

## 三、和 iPhone 其他主力客户端怎么选？

- **预算敏感、追求极简极省电、且机场兼容什么格式都行** ➔ 入门选 [Shadowrocket（小火箭）](/clients/shadowrocket/)。
- **平时主力用 Clash 体系、想直接一套 Clash 订阅打通 Mac + iPhone + Apple TV** ➔ **Stash** 体验最为平滑统一。
- **偏好丰富可视化去广告插件** ➔ 看一看 [Loon](/clients/loon/)；重度开发者抓包调试 ➔ 研究 [Surge](/clients/surge/)。

---

## 常见问题解答（FAQ）

### 电脑上用 Clash Verge，手机 iPhone 想用一个不用学新语法、直接粘贴同一个 Clash 订阅的工具，选谁？

选 Stash 最省事。它直接原生读取标准 Clash YAML 与远端策略，配合 iCloud 云同步功能，能让你在 iPhone、iPad、Mac 和 Apple TV 之间维持近乎一致的分流逻辑。

### Stash 可以像小火箭一样免费下载吗？支持 Apple TV (tvOS) 吗？

Stash 属于海外 App Store 买断制付费工具，不支持国区直接搜索下载（需外区 Apple ID 购买）；它的一大独特优势是官方直接适配了 tvOS（Apple TV），大屏电视搭配流媒体很省心。

### 把 Clash 链接导入 Stash 后遇到测速 Timeout 或某些节点不出现怎么排查？

检查是否粘贴了 Base64 链接而不是 Clash YAML 链接（格式对照见 [常见订阅格式对比](/subscription/formats)）；同时确保 Stash 已升级到新版以支持最新协议，若全节点仍超时请阅读 [全节点超时排查手册](/troubleshooting/all-nodes-timeout)。
