---
title: 订阅链接地址与结构深度解析 - Token 参数与流量响应头说明
description: 全面拆解机场订阅 URL 的域名、鉴权 Token 与格式标志参数，解析 HTTP subscription-userinfo 响应头如何向客户端回传剩余流量与到期时间，并提供泄露防范建议。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 订阅知识
faq:
  - q: 订阅链接里的 ?token=xxx 和 &flag=clash 分别代表什么？
    a: token 是你在机场账户中的唯一身份凭证，用来校验你是否有权拉取节点；flag 则是告诉服务商后端按哪个客户端（如 Clash YAML、Shadowrocket Base64 或 sing-box JSON）渲染配置。
  - q: 为什么 Clash Verge 能直接在订阅卡片上显示剩余 GB 和到期日期？
    a: 因为机场订阅服务器在返回节点数据的同时，还在 HTTP 响应头里附带了 subscription-userinfo 字段（包含 upload、download、total 和 expire 时间戳），客户端读取后会换算成可视化的进度条。
  - q: 在机场后台「重置订阅链接」会发生什么？
    a: 重置会立即作废旧的 Token 参数并生成一段新链接。原本已经在各个设备导入过旧链接的客户端，下次更新都会提示 401/403/404，需要全部重新复制并替换成新链接。
---

# 订阅链接地址与结构深度解析

<AnswerBox question="一条标准订阅链接内部包含哪些字段？客户端是如何识别流量的？">
标准订阅 URL 通常由 <strong>订阅 API 域名 + 接口路径 + 个人唯一 Token + 客户端格式参数（如 <code>&amp;flag=clash</code>）</strong> 构成。<br>
同时，服务端会在 HTTP 响应头返回 <code>subscription-userinfo</code> 与 <code>profile-update-interval</code> 等元数据，使 Clash Verge、Shadowrocket 等客户端能直接显示剩余流量、到期时间与默认同步周期。
</AnswerBox>

---

## 一、典型订阅 URL 各字段拆解

以常见现代机场面板生成的订阅链接为例（以下 URL 仅为脱敏示例）：

```text
https://sub.example.com/api/v1/client/subscribe?token=8f9a2b1c4d5e&flag=clash
  │          │               │                        │               │
  │          │               │                        │               └── 格式标志（clash / meta / singbox 等）
  │          │               │                        └────────────────── 用户个人鉴权密钥 Token
  │          │               └─────────────────────────────────────────── 订阅接口路径
  │          └─────────────────────────────────────────────────────────── 独立订阅下发域名（常与官网主站隔离）
  └────────────────────────────────────────────────────────────────────── 必须为 HTTPS 加密传输
```

了解这条链路的几个实用细节：

1. **订阅域常与官网域名分开**：许多正规服务商会将登录买套餐的主站和节点下发域分离，即使主站域名更换，独立订阅域通常依然能稳定提供刷新。
2. **`token` 本质上是无密码通行证**：任何人只要拿到这条带完整 `token` 的链接，都能无需密码直接同步你的全部节点并跑你的流量。
3. **`flag=` 缺失时的默认输出**：若机场支持 User-Agent 自动识别，Clash Verge 发起请求时即便没写 `&flag=clash`，机场也可能根据请求头自动识别；但使用 `curl` 或第三方下载器调试时，加上明确的 `flag` 参数或匹配 `User-Agent` 才能看到真实返回内容。

---

## 二、HTTP 响应头里的客户端元数据

在浏览器或命令行执行 HTTP 响应头检查时，除了正文配置外，重点看以下 4 个标准 Header：

```http
subscription-userinfo: upload=1073741824; download=53687091200; total=214748364800; expire=1798732800
profile-update-interval: 24
content-disposition: attachment; filename*=UTF-8''ExampleAirport.yaml
profile-web-page-url: https://example.com
```

| 响应头字段 | 含义与单位 | 客户端实际展示效果 |
| :--- | :--- | :--- |
| **`upload` / `download`** | 已上传 / 已下载字节数（Bytes，÷ 1073741824 得 GiB） | 显示「已用流量」，两者相加决定进度条百分比 |
| **`total`** | 套餐总配额字节数 | 作为总流量上限显示在卡片下方 |
| **`expire`** | 到期日期 Unix 时间戳（秒级）；永久/按量通常为 `0` 或缺省 | 显示到期日期；过期后客户端常会标记提醒 |
| **`profile-update-interval`** | 服务端建议自动同步间隔（小时） | 决定新导入 Profile 的默认自动刷新时间 |
| **`content-disposition`** | 默认档案文件名 | 导入 Clash Verge / Clash 时自动预填的配置卡片名称 |

---

## 三、链接安全与排错实用习惯

- **切勿经过微信 / QQ 明文转发**：国内即时通讯软件自带链接抓取与预览爬虫，不但可能被审计记录 Token，部分软件转发还会自动转义符号 `&` 导致客户端导入时提示链接无效。
- **慎用陌生网页在线转换器**：把含真实 Token 的订阅贴到公共转换站点，相当于把服务器列表直接交给站点运营者；详情见 [订阅转换的隐私泄露风险](/subscription/conversion)。
- **疑似异常跑流立刻重置**：如果发现流量无故暴增，优先登录机场官网查看在线设备/连接数并执行「重置订阅安全码」，随后按照 [Clash Verge 订阅导入步骤](/clients/clash-verge/import-subscription) 替换各设备旧链接。

---

## 常见问题解答（FAQ）

### 订阅链接里的 ?token=xxx 和 &flag=clash 分别代表什么？

`token` 是你在机场账户中的唯一身份凭证，用来校验你是否有权拉取节点；`flag` 则是告诉服务商后端按哪个客户端（如 Clash YAML、Shadowrocket Base64 或 sing-box JSON）渲染配置。

### 为什么 Clash Verge 能直接在订阅卡片上显示剩余 GB 和到期日期？

因为机场订阅服务器在返回节点数据的同时，还在 HTTP 响应头里附带了 `subscription-userinfo` 字段（包含 `upload`、`download`、`total` 和 `expire` 时间戳），客户端读取后会换算成可视化的进度条。

### 在机场后台「重置订阅链接」会发生什么？

重置会立即作废旧的 Token 参数并生成一段新链接。原本已经在各个设备导入过旧链接的客户端，下次更新都会提示 `401/403/404`，需要全部重新复制并替换成新链接。

---

## 关联参考
- [什么是代理订阅与聚合架构](/subscription/what-is-subscription)
- [主流订阅格式语法全景对比](/subscription/formats)
- [订阅链接打不开或报 404/502 排查](/subscription/url-not-working)
