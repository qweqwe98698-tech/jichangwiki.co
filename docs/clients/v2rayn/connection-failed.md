---
title: v2rayN 连接失败与核心崩溃排错清单
description: 解决 v2rayN 提示 Core exited、无法启动内核、缺少依赖及日志查看方法。
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
