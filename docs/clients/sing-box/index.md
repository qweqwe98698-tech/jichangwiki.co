---
title: sing-box 通用代理核心知识中心 - JSON 配置架构与跨平台客户端生态
description: 深度解读新一代开源通用网络代理核心 sing-box 的架构特点、JSON 配置文件结构（inbounds/outbounds/route/dns）、现代协议支持及衍生客户端生态。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 客户端指南
client: sing-box
platform: 跨平台 (Windows / macOS / iOS / Android / Linux)
faq:
  - q: 普通用户需要直接下载并手动编写 sing-box 的 JSON 文件吗？
    a: 大多数情况下不需要。普通用户通常使用封装了 sing-box 核心的图形前端（如 Hiddify、NekoBox）或机场后台一键提供的 sing-box 专属订阅链接即可；只有极客折腾路由器（OpenWrt）或精细部署服务时才需要手写 JSON。
  - q: sing-box 与 Clash（Mihomo）这两大内核有什么本质差异？
    a: 两者都是当前极具活力的主流开源代理内核。sing-box 主打统一 JSON 抽象、二进制极简规则集（Rule-Set `.srs`）与更低内存开销；Mihomo 则延续 Clash YAML 配置体系，在既有海量机场订阅兼容性与中文图形前端生态上普及度依然很高。
  - q: 我想从原版已停更的老旧软件迁移到现代生态，应该选 Clash Verge 还是 sing-box 客户端？
    a: 如果你在电脑端工作且机场提供标准 Clash 订阅，使用基于 Mihomo 的 Clash Verge Rev 最无缝平滑；如果你希望一个软件统管手机电脑极简同步、或你的机场专攻 sing-box 原生模板，可以选择 Hiddify 或官方 sing-box 图形客户端。
---

# sing-box 通用核心知识中心

<AnswerBox question="什么是 sing-box？它为什么成为新一代通用代理标准核心？">
<strong>sing-box</strong> 是由 SagerNet 团队主导开发、采用 Go 语言编写的新一代通用代理核心平台，全面覆盖 Windows、macOS、Linux、Android、iOS 乃至路由器嵌入式环境。<br>
凭借统一的 JSON 配置范式、比旧引擎大幅缩减的内存开销、原生高性能 TUN 栈以及完整的现代协议（<strong>VLESS-Reality、Hysteria 2、TUIC、Shadowsocks 2022、AnyTLS 等</strong>），如今众多极简前端客户端（如 <a href="/clients/hiddify/">Hiddify</a>、<a href="/clients/nekobox/">NekoBox</a>）都构建在它的底层之上。
</AnswerBox>

---

## 一、sing-box 生态客户端地图

大多数用户不会直接敲命令行跑 bare-metal `sing-box` 二进制，而是通过以下生态载体来使用它：

| 应用载体 | 适用平台 | 用户定位 | 订阅兼容性 |
| :--- | :--- | :--- | :--- |
| **[Hiddify](/clients/hiddify/)** | 全平台桌面 + 手机 | **零折腾新手与跨设备人群** | sing-box JSON / Clash YAML / Base64 |
| **[NekoBox](/clients/nekobox/)** | Android 主力（及桌面衍生） | **安卓进阶 / 协议尝鲜玩家** | sing-box JSON / 通用 Base64 / 单节点 |
| **sing-box 官方 SFM / SFA / SFI** | macOS / Android / iOS | **偏好原生纯净图形壳的苹果/安卓用户** | 严格遵循标准 sing-box JSON 订阅或本地导入 |
| **OpenWrt HomeProxy / PassWall2 等插件** | 软路由 / 家庭网关 | 家里全屋透明代理需求 | 配合后端提取配置自动驱动核心运行 |

---

## 二、标准 sing-box JSON 配置文件结构拆解

如果你打开机场下发的 `sing-box` 专属配置链接（`flag=sing-box` 或 `.json` 后缀），会看到一个层次分明的 JSON 对象，主要由四块骨架组成：

```json
{
  "log": { "level": "info" },
  "dns": {
    "servers": [],
    "rules": []
  },
  "inbounds": [
    { "type": "tun", "interface_name": "tun0", "auto_route": true }
  ],
  "outbounds": [
    { "type": "selector", "tag": "🚀 节点选择", "outbounds": ["auto", "hk-01"] },
    { "type": "direct", "tag": "direct" }
  ],
  "route": {
    "rule_set": [],
    "rules": []
  }
}
```

关键工程亮点说明：
1. **二进制 Rule-Set（`.srs`）代替臃肿文本规则**：相较早年动辄上万行的正则/域名文本列表，sing-box 将常用分流列表编译成超紧凑 `.srs` 文件，启动校验与路由匹配耗时极低。
2. **原生 DNS 与 TUN 一体化调度**：不用像老旧软件再靠外接第三方核心，单核心内完成 FakeIP/DoH 与透明代理虚拟网卡流量调度，稳定性高且在移动端省电明显。

---

## 三、与其他方案对比：选 sing-box 还是 Mihomo（Clash）？

- 如果你的所有机场目前**只完美支持 Clash YAML** 且你在电脑上习惯侧边栏看节点分组，建议优先选择 [Clash Verge Rev（Mihomo 内核）](/clients/clash-verge/) —— 这也是目前桌面端生态最完善成熟的方案。
- 如果你想了解市面上各款客户端优缺点并一次性挑对自己的主力工具，可以读一读 [代理客户端选择综合指南](/guides/how-to-choose-client)；各类订阅文件写法差异详查 [主流订阅格式对照](/subscription/formats)。

---

## 常见问题解答（FAQ）

### 普通用户需要直接下载并手动编写 sing-box 的 JSON 文件吗？

大多数情况下不需要。普通用户通常使用封装了 sing-box 核心的图形前端（如 [Hiddify](/clients/hiddify/)、[NekoBox](/clients/nekobox/)）或机场后台一键提供的 sing-box 专属订阅链接即可；只有极客折腾路由器（OpenWrt）或精细部署服务时才需要手写 JSON。

### sing-box 与 Clash（Mihomo）这两大内核有什么本质差异？

两者都是当前极具活力的主流开源代理内核。sing-box 主打统一 JSON 抽象、二进制极简规则集（`.srs`）与更低内存开销；Mihomo 则延续 Clash YAML 配置体系，在既有海量机场订阅兼容性与中文图形前端生态上普及度依然很高。

### 我想从原版已停更的老旧软件迁移到现代生态，应该选 Clash Verge 还是 sing-box 客户端？

如果你在电脑端工作且机场提供标准 Clash 订阅，使用基于 Mihomo 的 [Clash Verge Rev](/clients/clash-verge/) 最无缝平滑；如果你希望一个软件统管手机电脑极简同步、或你的机场专攻 sing-box 原生模板，可以选择 Hiddify 或官方 sing-box 图形客户端。
