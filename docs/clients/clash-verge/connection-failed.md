---
title: Clash Verge 启动或连接失败排查
description: 解决 Clash Verge 内核启动报错、端口占用错误、管理员提权失败等基础连接异常。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
client: Clash Verge Rev
---

# Clash Verge 启动或连接失败排查

<AnswerBox question="Clash Verge 提示内核启动失败 (Core Start Error) 或无法启动怎么办？">
最常见原因是端口被其他软件占用（如 7890/7897 端口被占用），或者配置文件存在语法错误。可前往「设置」修改混合端口号（如改为 17897），并在「日志 (Logs)」中查看具体报错行。
</AnswerBox>

---

## 🔍 核心启动排查步骤

1. **端口冲突排查**
   - 打开 Windows 命令行终端，执行：`netstat -ano | findstr 7897`
   - 如果发现该端口已被其他 PID 占用，前往 Clash Verge「设置」→ 将「混合端口」修改为 `17897` 或 `27897` 并重启。
2. **配置文件语法报错**
   - 如果手动编辑过 YAML 规则，缩进错误（如混用了 Tab 和空格）会导致内核启动时 Crash。
   - 解决办法：切换回官方下发未修改的默认 Profile，验证内核能否正常拉起。
3. **服务模式未提权**
   - 部分 Windows 系统缺少管理员权限导致无法安装 TUN 驱动。
   - 解决办法：右键点击 Clash Verge 桌面快捷方式，选择「以管理员身份运行」。
