---
title: v2rayN TUN 模式配置与使用
description: 详细指导如何在 v2rayN 中开启 TUN 虚拟网卡模式，使用 sing-box 核心接管系统所有进程与联机游戏流量。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: v2rayN
---

# v2rayN TUN 模式配置与使用

<AnswerBox question="v2rayN 怎么开启 TUN 虚拟网卡模式？">
在 v2rayN 底部勾选「自动配置系统代理」旁边的「开启 TUN 模式」开关（或在顶部设置中开启）。开启时需要右键 v2rayN 以**管理员身份运行**，否则无法向 Windows 注册虚拟网卡驱动。
</AnswerBox>

---

## 🛠️ 开启步骤与依赖

1. **以管理员身份启动**：退出当前 v2rayN，找到 `v2rayN.exe`，右键选择「以管理员身份运行」。
2. **切换/核对内核**：建议在「设置」→「核心类型设置」中将 TUN 核心指定为 `sing-box`。
3. **勾选 TUN 模式**：在主界面顶部或底部工具栏中找到并勾选「**开启 TUN 模式 (Enable Tun)**」。
4. **验证网卡生成**：按下 `Win + X` 打开设备管理器，在网络适配器中会看到 `sing-tun` 虚拟网络设备已正常启用。
