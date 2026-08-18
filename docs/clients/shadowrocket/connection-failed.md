---
title: Shadowrocket 无法连接 / 无网络访问排查
description: 解决 iOS 小火箭开关打开后无法联网、顶部没有 VPN 图标、提示未能创建网络连接等故障。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
client: Shadowrocket
---

# Shadowrocket 无法连接 / 无网络访问排查

<AnswerBox question="小火箭开启开关后所有网络都断了（无法联网）怎么办？">
首先检查全局路由是否误设为了「直连」；其次进入 iOS 系统「设置」→「通用」→「VPN 与设备管理」，检查 Shadowrocket 的 VPN 描述文件是否存在异常，可尝试在小火箭中重新允许添加 VPN 配置。
</AnswerBox>

---

## 🛑 故障排查四步法

1. **检查 iOS VPN 描述文件授权**
   - 首次打开开关时，iOS 会弹出“Shadowrocket 想添加 VPN 配置”，必须点击「允许」并输入锁屏密码。
   - 若曾经拒绝，可在 iPhone「设置」→「VPN」中找到 Shadowrocket，删除后重新打开小火箭开启开关以重新授权。
2. **排查全局路由误设为「直连」**
   - 确保主界面中央的全局路由显示为「**配置**」或「**代理**」，而不是「直连」。
3. **切换 Wi-Fi 与蜂窝数据测试**
   - 部分公共 Wi-Fi 或校园网可能封锁了非标准端口（如 UDP 或非 443 端口），临时关闭 Wi-Fi 使用 4G/5G 流量测试是否恢复。
4. **检查 iPhone 系统时间**
   - 进入 iPhone「设置」→「通用」→「日期与时间」，确保「自动设置」处于开启状态。
