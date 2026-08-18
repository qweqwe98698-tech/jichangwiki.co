---
title: Telegram (电报) 连接与收不到短信验证码排查
description: Telegram 客户端显示 Connecting、无法连接 DC 数据中心、国内手机号 +86 接收验证码异常排查。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 使用场景
---

# Telegram (电报) 连接与验证码排查

<AnswerBox question="Telegram 一直显示 Connecting 转圈怎么办？">
① 在 Telegram「Settings」→「Data and Storage」→「Connection Type」中添加本地 SOCKS5 代理（地址 <code>127.0.0.1</code>，端口填客户端本地端口如 <code>10808</code> 或 <code>7890</code>）；② 在 Clash / Shadowrocket 中开启 TUN 模式。
</AnswerBox>

---

## 🛑 +86 国内手机号收不到验证码怎么办？

由于国内运营商对境外短信验证码的严格拦截过滤：
- **方案 1**：不要在手机 App 频繁点击重试，在官方 Telegram Desktop 电脑端登录，验证码会发送到你已登录的其他已在线设备上（设备内通知）。
- **方案 2**：使用 Google Voice、英国 giffgaff 等海外实体 SIM 卡绑定账号。
