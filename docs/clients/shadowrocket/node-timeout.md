---
title: Shadowrocket 节点全部超时排查指南
description: 小火箭点击连通性测试全部显示 Timeout、全部红色的常见原因与修复清单。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 故障排查
client: Shadowrocket
---

# Shadowrocket 节点全部超时排查

<AnswerBox question="小火箭节点测速全部显示 Timeout 怎么解决？">
下拉首页列表强制刷新一次订阅以获取最新 IP；检查 iPhone 是否开启了「自动同步系统时间」；检查机场账户是否欠费；排查是否连上了带有强力防火墙的特殊 Wi-Fi。
</AnswerBox>

---

## ⚡ 核心检查清单

1. **执行下拉刷新订阅**：节点服务器可能被服务商更换了 IP，在小火箭主界面按住屏幕向下拉动刷新。
2. **检查时间误差**：进入 iPhone「设置」→「通用」→「日期与时间」，关闭后再重新打开「自动设置」。
3. **排查 Wi-Fi 代理污染**：检查当前 Wi-Fi 的 HTTP 代理设置是否为「关闭」状态。
4. **更换测试 URL**：在小火箭「设置」→「连通性测试」中，将测试 URL 从默认的 Google 改为 `http://cp.cloudflare.com/generate_204` 或 `http://www.gstatic.com/generate_204` 再次测试。
