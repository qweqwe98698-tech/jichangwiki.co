---
title: 技术资料来源原则与标准参考 (Sources & References)
description: 说明 JichangWiki 知识库所采信与引用的 IETF RFC 技术标准、开源核心代码仓库（Xray-core、Mihomo、sing-box、Hysteria）及桌面移动客户端官方发布渠道。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: easy
category: 关于本站
---

# 技术资料来源原则与参考规范

<AnswerBox question="JichangWiki 的教程解析、参数数据与排错指南来源于哪些权威依据？">
本站所有技术原理阐述、协议解析、客户端指引与评测快照均坚持<strong>「可溯源、可验证」</strong>原则：底层技术理论溯源自 IETF RFC 互联网标准文档与各开源核心项目官方源码/文档；品牌配置参数核对以服务商实时后台公开标示、本地实测记录及客户端标准测试报文为准。
</AnswerBox>

---

## 一、核心技术参考与上游文献矩阵

### 1. 互联网工程任务组 (IETF RFC) 底层网络规范
本站提及传输层封装、代理握手、DNS 加密与多路复用机制时，严格依据以下标准定义：
- **RFC 1928**：SOCKS Protocol Version 5（参考阅读：[SOCKS5 协议百科](/protocols/socks5)）
- **RFC 8446**：The Transport Layer Security (TLS) Protocol Version 1.3（TLS 握手及校验排查参照：[SSL 证书与握手报错处理](/troubleshooting/certificate-error)）
- **RFC 9000 / RFC 9114**：QUIC 传输协议与 HTTP/3 应用层基础规范
- **RFC 8484**：DNS Queries over HTTPS (DoH) 加密域名解析架构

### 2. 开源代理内核及协议项目官方仓库
各协议工作原理与客户端配置兼容特性主要核对至各自社区权威上游工程与 Release 更新日志：
- **Project X / Xray-core**：XTLS、VLESS 与 REALITY 传输架构实现规范
- **MetaCubeX / Mihomo (Clash.Meta)**：现代 Clash YAML 语法、Fake-IP、TUN 与策略组调度规则规范
- **SagerNet / sing-box**：统一 JSON 抽象架构、`.srs` 二进制规则集与多平台核心（专题：[sing-box 核心中心](/clients/sing-box/)）
- **HyNetwork / Hysteria**：基于魔改 QUIC 的拥塞控制与防丢包实现（v1 / v2）
- **Shadowsocks / SIP002 & SIP022**：AEAD 加密规范与通用 URI 编码定义

### 3. 主流 GUI 客户端开源发布通道
所有涉及菜单名称、界面开关与排错步骤的内容（如 `Clash Verge Rev`、`v2rayN`、`v2rayNG`、`NekoBox`、`Hiddify`），均基于各项目公开发行版本客户端实际 UI 布局撰写，同时参考 `Shadowrocket`、`Stash`、`Loon`、`Quantumult X`、`Surge` 的官方文档与实际配置验证。

---

## 二、收录品牌数据与单次测速快照采集说明

- **独立单日测速快照说明**：站内部分品牌评测页面的速度测试图均系同一评测批次（例如 `2026-08-11` 标明时间戳之独立批次截图），各服务商按记录时间独立采样，**并非同期跨品牌严格受控横向跑分对比，亦不作为长期全天候 SLA 稳定性或特定流媒体实时解锁承诺**。
- **动态信息变动提醒**：订阅格式支持、优惠码失效状态或套餐定价随商家运营可能变动，相关细节以服务商官网用户中心最终结账页展示为最高依据。更完整的编辑准则请查阅 [编辑与审核方法论](/editorial-policy/) 及 [免责声明](/disclaimer/)。
