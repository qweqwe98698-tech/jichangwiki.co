---
title: 订阅链接地址与结构深度解析
description: 拆解订阅 URL 的参数结构、Token 认证、HTTP 响应报文头与用户流量元数据。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
category: 订阅知识
---

# 订阅链接地址与结构深度解析

<AnswerBox question="一条标准的订阅链接内部包含哪些关键信息？">
订阅链接通常由**服务商 API 域名**、**路径标识**、**用户唯一 Token 令牌**以及**格式请求参数**（如 `&flag=clash`）构成。其响应头中还附带有 `subscription-userinfo` 字段用于返回剩余流量与到期时间。
</AnswerBox>

---

## 🔍 典型 URL 结构拆解

```
https://sub.example.com/api/v1/client/subscribe?token=8f9a2b1c&flag=clash
  │          │               │                    │             │
  │          │               │                    │             └── 目标客户端格式声明
  │          │               │                    └──────────────── 用户专属鉴权 Token
  │          │               └───────────────────────────────────── 订阅路由入口
  │          └───────────────────────────────────────────────────── 接口版本
  └──────────────────────────────────────────────────────────────── 服务商订阅下发域名
```

---

## 📊 HTTP 响应头中的流量元数据

许多客户端在更新订阅后，能直接在界面显示“剩余流量：128 GB，到期时间：2026-12-31”。这是因为服务端在 HTTP Response Header 中返回了标准元数据：

```http
subscription-userinfo: upload=1073741824; download=53687091200; total=214748364800; expire=1798732800
```
- `upload`：已用上行流量（字节）。
- `download`：已用下行流量（字节）。
- `total`：套餐总流量上限。
- `expire`：套餐过期 Unix 时间戳。
