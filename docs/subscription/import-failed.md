---
title: 导入订阅失败排查 - 格式不匹配与解析异常
description: 解决客户端提示“无法识别的配置格式”、“Invalid YAML”或“Base64 decode failed”等导入错误。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
---

# 导入订阅失败排查指南

<AnswerBox question="导入订阅提示格式错误怎么解决？">
核心原因是客户端类型与订阅格式不匹配。例如将 Base64 订阅直接导入到 Clash 客户端中会导致 YAML 解析崩溃。需确保在机场后台复制对应客户端专用的订阅链接。
</AnswerBox>

---

## 🛑 常见报错与对策

1. **Clash 提示 `yaml: unmarshal errors`**：
   - 说明你复制的不是 Clash 专用订阅，而是一段纯文本 Base64 节点串。
   - 解决：在机场后台找到「一键导入 Clash」或带有 `flag=clash` 的专用链接。
2. **小火箭提示 `Invalid Subscribe`**：
   - 检查链接是否被微信或聊天软件的自动安全过滤篡改，建议直接使用小火箭扫码导入。
