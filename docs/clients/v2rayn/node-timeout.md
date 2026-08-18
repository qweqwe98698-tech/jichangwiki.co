---
title: v2rayN 节点全部超时解决办法
description: 针对 Windows v2rayN 真连接测试全为 -1、Timeout 的系统性原因分析与修复指南。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
client: v2rayN
---

# v2rayN 节点全部超时解决办法

<AnswerBox question="v2rayN 测速全为 -1 或 Timeout 怎么办？">
第一步校准 Windows 系统时间（误差超过 60 秒 Xray 核心会拒绝握手）；第二步点击「订阅分组」→「更新所有订阅(不通过代理)」；第三步检查杀毒软件日志是否把 <code>xray.exe</code> 拦截或删除了。
</AnswerBox>

---

## ⚡ 三大高频原因排查

1. **Windows 系统时间未同步**：
   - 解决方案：按 `Win + I` 打开系统设置 →「时间和语言」→「日期和时间」→ 点击「立即同步」。
2. **核心文件损坏或被杀毒软件误杀**：
   - 检查 v2rayN 安装目录下的 `bin/Xray/xray.exe` 是否存在。若被 Windows Defender 误删，需重新解压并添加信任白名单。
3. **订阅链接过期或机场更换了入口**：
   - 使用「更新所有订阅(不通过代理)」同步最新配置。
