---
title: Loon (iOS) 代理与分流插件客户端指南 - 核心特点、订阅导入与选型对比
description: 系统讲解 iOS 平台现代代理与抓包工具 Loon 的价格定位、模块化插件（Plugin）体系、常见机场订阅兼容格式及与 Shadowrocket/Stash 的对比建议。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 客户端指南
client: Loon
platform: iOS
faq:
  - q: Loon 和 Shadowrocket（小火箭）在 iPhone 上选哪个更好？
    a: 如果只是单纯科学上网、用机场现成的分流规则，便宜轻便的 Shadowrocket 完全足够；如果你喜欢去广告插件、脚本重写、可视化策略编辑及精美的 UI 界面，且愿意花 $5.99 购置高级工具，Loon 体验非常好。
  - q: 普通机场提供的订阅链接可以直接导入 Loon 吗？
    a: 若机场后台直接提供 Loon 专用托管配置链接，可直接一键导入；若机场只给 Clash 或通用订阅，可以在 Loon 的「节点 ➔ 订阅」里尝试解析节点清单，再配合社区分流规则配置使用，或留意机场是否原厂下发 Loon 策略模板。
  - q: Loon 导入订阅节点后全部不可用或超时怎么办？
    a: 首先在 Loon 顶部切换运行模式（如「自动分流」）并刷新机场订阅链接获取最新节点 IP，同时核对系统时间与机场余量，排查思路见全节点超时故障指南。
---

# Loon (iOS) 知识中心与配置导览

<AnswerBox question="Loon 是一款什么工具？哪些苹果用户值得入手它？">
<strong>Loon</strong> 是一款运行在 iOS / iPadOS 平台的现代网络代理与流量微调工具（美区 App Store 一次性买断售价约 $5.99）。<br>
相比入门级的 <a href="/clients/shadowrocket/">Shadowrocket</a> 和极客向的 <a href="/clients/quantumult-x/">Quantumult X</a>，Loon 在保持现代化美观交互的同时，主打<strong>开箱即用的可视化插件（Plugin）体系</strong>与优雅的可视化规则管理。
</AnswerBox>

---

## 一、iOS 主流四大代理应用横向对比

| 客户端名称 | App Store 参考定位 | 学习门槛 | 突出特色 | 推荐人群 |
| :--- | :--- | :--- | :--- | :--- |
| **[Shadowrocket](/clients/shadowrocket/)** | 入门高性价比 ($2.99) | 低 | 轻量省电、机场兼容度近乎 100% | 绝大多数新手与日常轻量使用者 |
| **Loon** | 进阶颜值与插件生态 ($5.99) | 中 | 模块化一键插件、UI 清爽直观 | 需要精简广告/脚本自动化且注重交互体验的用户 |
| **[Quantumult X](/clients/quantumult-x/)** | 深度重写脚本派 ($7.99) | 偏高 | 丰富 HTTP Rewrite 与历史脚本资源多 | 爱折腾脚本任务与高度自定义分流的玩家 |
| **[Stash](/clients/stash/)** | Clash 生态无缝迁移 | 低~中 | 直接读取机场标准 Clash YAML 配置与 iCloud 同步 | 电脑用 Clash Verge、想保持一致规则体验的苹果多端用户 |

---

## 二、Loon 的核心功能特性

1. **模块化插件系统（Plugin）**：不需要手动复制晦涩的正则段落，直接从插件库填入 URL 即可挂载主流去广告规则、重定向或特定站点分流能力。
2. **直观的可视化策略组管理**：以拖拽和卡片化的方式设置测速（url-test）、手动选择与故障切换策略组，比纯手工文本改配置轻松得多。
3. **现代协议覆盖完整**：原生支持 Shadowsocks、VMess、VLESS（含 XTLS/Reality）、Trojan、Hysteria 2 与 WireGuard，紧跟 2026 主流机场架构升级。

---

## 三、在 Loon 中配置机场订阅的基本步骤

1. **区分「节点订阅」与「完整配置文件」**：
   - 若你的机场后台直接提供「**一键导入 Loon**」或 Loon 专用托管配置 URL，可以直接在配置列表粘贴拉取全套节点+规则。
   - 若机场仅提供通用订阅链接，请先进入 Loon 的 **「节点 ➔ 订阅」** 添加并拉取服务器清单，再把对应订阅挂进自己的分流策略组。格式差异说明可对照 [常见订阅格式对比](/subscription/formats)。
2. **开启节点连通性测试与本地策略选择**：下拉更新订阅确认节点出现后，对目标地区节点点击测速（Loon 支持自定义测速 URL）；若全军覆没或均显示超时，参见 [全节点超时故障排查](/troubleshooting/all-nodes-timeout)。
3. **注意系统剪贴板与网络权限**：iOS 首次弹窗询问网络权限、VPN 配置写入权限和剪贴板访问时请务必选择允许。

---

## 常见问题解答（FAQ）

### Loon 和 Shadowrocket（小火箭）在 iPhone 上选哪个更好？

如果只是单纯科学上网、用机场现成的分流规则，便宜轻便的 [Shadowrocket](/clients/shadowrocket/) 完全足够；如果你喜欢去广告插件、脚本重写、可视化策略编辑及精美的 UI 界面，且愿意花 $5.99 购置高级工具，Loon 体验非常好。

### 普通机场提供的订阅链接可以直接导入 Loon 吗？

若机场后台直接提供 Loon 专用托管配置链接，可直接一键导入；若机场只给 Clash 或通用订阅，可以在 Loon 的「节点 ➔ 订阅」里尝试解析节点清单，再配合社区分流规则配置使用。

### Loon 导入订阅节点后全部不可用或超时怎么办？

首先在 Loon 顶部切换运行模式（如「自动分流」）并刷新机场订阅链接获取最新节点 IP，同时核对系统时间与机场余量，排查思路见 [全节点超时故障指南](/troubleshooting/all-nodes-timeout)。
