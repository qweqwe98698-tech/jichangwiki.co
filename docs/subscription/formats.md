---
title: 常见订阅格式全景对比 (Clash / Base64 / sing-box)
description: 解析 Clash YAML 格式、Base64 通用单节点聚合、sing-box JSON 规范以及各客户端适配情况。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 订阅知识
---

# 常见订阅格式全景对比

<AnswerBox question="主流订阅格式有哪些？它们互相通用吗？">
主流格式有三种：① **Clash YAML 格式**（包含策略组与规则）；② **Base64 节点聚合格式**（由 `vless://`, `vmess://`, `ss://` 等单节点字符串编码而成）；③ **sing-box JSON 格式**。通常需要匹配客户端支持的格式，或通过订阅转换后端进行格式转换。
</AnswerBox>

---

## 📊 格式对比速查表

| 格式名称 | 语法载体 | 包含内容 | 适用客户端 |
| :--- | :--- | :--- | :--- |
| **Clash YAML** | YAML 语法 | 节点 + 策略组 + 完整分流规则 | Clash Verge, Stash, Clash for Windows |
| **Base64 通用编码** | 纯文本 Base64 | 仅包含单节点 URI 列表 | v2rayN, v2rayNG, Shadowrocket |
| **sing-box JSON** | JSON 语法 | 现代入站/出站/路由规则集 | sing-box 原生客户端, NekoBox, Hiddify |
| **Surge 托管配置** | INI / Conf 语法 | 包含 MitM、脚本与策略模块 | Surge iOS / macOS 专属 |
