---
title: Shadowrocket (小火箭) 适用的服务选型考量
description: iOS 小火箭用户挑选节点服务时应关注的二维码扫码支持、移动端 UDP QoS 与协议兼容性。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
category: 选择指南
---

# Shadowrocket 适用的服务选型考量

<AnswerBox question="iPhone 小火箭用户挑选节点服务时应注意什么？">
① 提供方便的一键扫码或一键导入到 Shadowrocket 功能；② 包含适配 iOS 移动蜂窝网络的稳定 TCP 协议节点（如 Trojan / VLESS）；③ 多设备同时在线配额是否满足手机与平板共享。
</AnswerBox>

---

## 📱 移动端考量重点

- **一键导入体验**：后台提供二维码或 `shadowrocket://add/sub://...` 深度链接，在手机 Safari 中点击即可直接唤起小火箭完成添加。
- **蜂窝网络抗干扰**：移动数据基站对特定高端口 UDP 有限制，服务商应提供标准 443 端口的 TLS 节点作为备份。
