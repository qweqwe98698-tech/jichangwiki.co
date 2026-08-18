---
title: 手机正常但电脑无法上网排查
description: 同一条订阅链接在手机上秒开，但在 Windows / Mac 电脑上完全无法上网的深度排错指南。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
---

# 手机正常但电脑无法上网排查

<div class="jw-badge jw-badge-blue">设备差异</div>

<AnswerBox question="同一份订阅在手机上完全正常，导入电脑却无法上网？">
排查三点：① 电脑系统时间未与北京时间同步；② 电脑端客户端的「系统代理」开关未开启；③ Windows 防火墙或杀毒软件静默拦截了电脑端的内核进程。
</AnswerBox>

---

## ⚡ 电脑端排查四步法

1. **校准电脑时间**：手机由于基站自动授时永远精准，而 Windows 电脑经常出现几分钟时间差，导致电脑端 TLS 握手失败。立即在 Windows 设置中点击「立即同步时间」。
2. **确认系统代理开启**：检查任务栏右下角图标（v2rayN 必须为红色，Clash Verge 系统代理必须为亮色）。
3. **关闭电脑端代理扩展**：检查 Chrome/Edge 是否安装了 SwitchyOmega 插件导致系统代理被覆盖。
4. **测试开启 TUN 模式**：通过 TUN 虚拟网卡接管整机流量，绕过潜在的应用层代理冲突。
