---
title: Wi-Fi 可以使用但手机流量不行排查
description: 手机连家里 Wi-Fi 代理一切正常，一关 Wi-Fi 切换到 4G/5G 蜂窝网络就无法连接的原因与处理。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
---

# Wi-Fi 可以使用但手机流量不行排查

<div class="jw-badge jw-badge-blue">跨网络环境</div>

<AnswerBox question="为什么连 Wi-Fi 能翻墙，换成手机流量就断线了？">
核心原因是**运营商蜂窝数据网络对特定端口或 UDP 流量进行了 QoS 阻断**，或者手机给客户端的「蜂窝移动网络权限」被关闭。
</AnswerBox>

---

## 🛠️ 排查与解决

1. **检查蜂窝网络权限 (iOS)**：
   - 进入 iPhone「设置」→「蜂窝网络」→ 找到「Shadowrocket」，确认允许使用「无线局域网与蜂窝数据」。
2. **切换为 TCP 协议节点**：
   - 移动 5G 基站有时会对 UDP 流量进行丢包拦截。如果使用的是 Hysteria2 或 TUIC 等基于 UDP 的节点，临时切换为基于 TCP 的 **Trojan** 或 **VLESS** 节点。
3. **更换 APN 接入点**：
   - 尝试将手机蜂窝网络 APN 从默认切换为标准互联网接入点。
