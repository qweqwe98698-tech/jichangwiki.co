---
title: v2rayN 连接失败与核心崩溃排错清单
description: v2rayN 启动连接失败与日志报错 Core Exited 核心崩溃排错清单：教你快速定位日志报错关键行，逐一排查缺少 .NET 8 桌面运行时依赖、本地 10808/10809 端口冲突、基础版未下载 Xray/sing-box 内核文件或被杀毒软件误杀拦截等常见故障并迅速恢复正常运行，消除报错。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
client: v2rayN
---

# v2rayN 连接失败排错清单

<AnswerBox question="v2rayN 提示核心已退出 (Core has exited) 怎么办？">
在 v2rayN 主界面下方切换到「日志 (Log)」选项卡查看错误信息；常见原因是端口被占用、配置文件 JSON 语法损坏或系统缺少 VC++ 运行库。
</AnswerBox>

---

## 🔍 日志排查与定位

1. **查看日志**：在 v2rayN 主窗口底部的「信息」或「日志」窗口中查看标红的英文错误。
2. **端口占用排查**：如果日志中包含 `bind: address already in use`，说明本地 `10808` 或 `10809` 端口被其他软件占用。在「设置」→「参数设置」中将本地监听端口修改为 `20808` 和 `20809`。
3. **以管理员身份运行**：右键 `v2rayN.exe` 选择「以管理员身份运行」，确保对网络适配器与注册表拥有读写权限。
