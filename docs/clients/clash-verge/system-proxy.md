---
title: Clash Verge 系统代理开启与端口配置
description: 详解 Clash Verge 的系统代理开关、混合代理端口 (Mixed Port) 机制及绕过系统代理的例外列表设置。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
client: Clash Verge Rev
---

# Clash Verge 系统代理开启与端口配置

<AnswerBox question="如何让系统所有软件都走 Clash Verge 代理？">
在 Clash Verge 左下角或「设置」页面中，打开「系统代理 (System Proxy)」开关。客户端会自动将 Windows/macOS 的网络代理地址配置为 `127.0.0.1:7897`（或自定义混合端口）。
</AnswerBox>

---

## ⚙️ 系统代理的工作原理

开启「系统代理」后，Clash Verge 会自动修改操作系统的网络设置注册表（Windows 位于 Internet 选项中，macOS 位于网络代理中）：
- **HTTP 代理**：`127.0.0.1:7897`
- **HTTPS 代理**：`127.0.0.1:7897`
- **SOCKS5 代理**：`127.0.0.1:7897`

所有遵循系统代理设置的应用程序（如 Edge、Chrome、Firefox 默认设置）发起的网络请求都会自动流入 Clash Verge 进行规则匹配与转发。

---

## 🛠️ 混合端口 (Mixed Port) 设置

Clash Verge 默认使用「混合端口 (Mixed Port)」，该端口同时支持 HTTP 与 SOCKS5 协议握手。
- 默认端口通常为 `7897`（或旧版的 `7890`）。
- 若与其他本地软件（如本地代理服务、开发环境）发生端口冲突，可在「设置」→「混合端口」中手动修改为其他未被占用的端口（如 `17890`）。

---

## ⚠️ 系统代理关闭后无法上网的解决办法

若非正常退出软件（如电脑蓝屏或强制杀进程），系统代理开关可能仍保持勾选状态但本地后台已关闭，导致浏览器提示“无法连接到代理服务器”。
- **解决方法**：重新打开 Clash Verge 正常开启再关闭一次系统代理；或者进入 Windows「设置」→「网络和 Internet」→「代理」，手动将「使用代理服务器」开关关闭。
