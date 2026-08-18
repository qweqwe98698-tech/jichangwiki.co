---
title: v2rayN 本地端口冲突排查 (10808 / 10809)
description: 如何排查与解决 v2rayN 本地 SOCKS5/HTTP 监听端口与其他软件（如 Clash、开发环境）冲突问题。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
client: v2rayN
---

# v2rayN 本地端口冲突排查

<AnswerBox question="v2rayN 提示 10808 或 10809 端口被占用怎么办？">
在 v2rayN 顶部菜单进入「设置」→「参数设置」→「v2rayN设置」；将「本地监听端口 (SOCKS)」从 10808 改为其他端口（如 <code>20808</code>），将「本地监听端口 (HTTP)」从 10809 改为 <code>20809</code>，点击确定重启核心即可。
</AnswerBox>

---

## 🔍 查看 Windows 哪个进程占用了端口

1. 按下 `Win + R` 输入 `cmd` 打开终端命令行。
2. 输入命令查询：`netstat -ano | findstr 10808`
3. 记录最后一列的 **PID** 进程编号。
4. 打开 Windows 任务管理器，在「详细信息」中找到该 PID 对应的程序并结束，或者直接在 v2rayN 中更改端口。
