---
title: Clash 订阅机制与 YAML 配置解析 - 参数结构与内核兼容性指南
description: 解析 Clash 与 Mihomo 内核订阅的 YAML 配置文件结构、flag=clash 与 flag=meta 请求参数差异，以及旧版 Clash 内核升级迁移建议。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 客户端知识
faq:
  - q: 为什么 Clash 客户端不能直接导入 Base64 订阅链接？
    a: Clash 系列内核只解析符合 YAML 规范的完整配置文件（包含 proxies、proxy-groups 和 rules 字段），而 Base64 订阅解码后仅是一行行单节点 URI，缺少策略组与分流规则结构，直接导入会触发 yaml unmarshal 解析报错。
  - q: flag=clash 和 flag=meta（Mihomo）有什么区别？
    a: 现代机场新增的 VLESS Reality、Hysteria2 等协议仅被 Mihomo（原 Clash.Meta）及 Clash Verge Rev 支持。若使用老版内核或错误请求传统 flag=clash 参数，服务端可能省略新协议节点或导致内核校验报错。
  - q: 我想直接看 Clash Verge 导入订阅链接的步骤应该去哪里？
    a: 本页聚焦 Clash YAML 订阅格式与内核原理；如果你要在 Windows 或 macOS 的 Clash Verge Rev 中添加并激活机场订阅，请直接查看《Clash Verge 订阅导入完整教程》。
---

# Clash 订阅机制与 YAML 配置解析

<AnswerBox question="Clash 系列客户端的订阅和其他客户端有什么本质区别？">
与其他仅包含服务器 IP 的纯节点订阅不同，<strong>Clash 订阅本质上是一份完整可执行的 YAML 配置文件</strong>：它同时下发了节点列表（<code>proxies</code>）、策略分组逻辑（<code>proxy-groups</code>）与域名分流规则（<code>rules</code>）。<br>
如果你正在寻找 Clash Verge Rev 的图文导入与 <code>clash://</code> 一键导入排错，请直接前往：<a href="/clients/clash-verge/import-subscription">Clash Verge 订阅导入与一键链接设置指南</a>。
</AnswerBox>

> [!NOTE] 页面定位说明
> 为了避免内容混淆，本页专门解释 **Clash / Mihomo 内核的 YAML 订阅规范与参数机制**；涉及 Clash Verge Rev 桌面端的具体按钮操作、定时刷新与超时排错，统一归档在 [Clash Verge Rev 专题](/clients/clash-verge/)。

---

## 一、Clash YAML 订阅的三段核心结构

当你在机场面板点击「复制 Clash 订阅」时，后端 API 通常会在请求地址末尾附带 `?flag=clash` 或 `?flag=meta` 标识，并下发如下结构的文本配置：

```yaml
mixed-port: 7890
allow-lan: false
mode: rule

proxies:
  - name: "香港 IEPL 01"
    type: vless
    server: hk01.example.com
    port: 443
    uuid: 00000000-0000-0000-0000-000000000000
    network: tcp
    tls: true
    servername: example.com
    client-fingerprint: chrome

proxy-groups:
  - name: "🚀 节点选择"
    type: select
    proxies:
      - "♻️ 自动选择"
      - "香港 IEPL 01"
  - name: "♻️ 自动选择"
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    proxies:
      - "香港 IEPL 01"

rules:
  - GEOIP,LAN,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,🚀 节点选择
```

理解这三部分，就能快速排查绝大多数订阅解析问题：

1. **`proxies`（节点清单）**：如果该段为空（`proxies: []`），或只有一条名为 `[过期提醒]` 的伪节点，通常代表套餐已到期或流量耗尽。
2. **`proxy-groups`（策略组）**：决定客户端侧边栏出现哪些分组（如手动选择、自动测速 `url-test`、故障转移 `fallback`、OpenAI 专用组）。详情可查看 [Clash 节点选择与策略组说明](/clients/clash/node-selection)。
3. **`rules`（分流规则）**：决定国内站点直连（`DIRECT`）还是走代理（`MATCH`），直接影响访问国内网站是否变慢。深入写法参考 [Clash 分流规则语法](/clients/clash/rules)。

---

## 二、常见参数差异与内核兼容性风险

| 参数 / 格式形态 | 适用内核 | 协议支持情况 | 常见兼容性坑点 |
| :--- | :--- | :--- | :--- |
| **`flag=clash`（传统原版）** | 已停止维护的原版 Clash / CFW | 仅稳定支持 SS / VMess / Trojan | 遇到 VLESS-Reality 或 Hysteria2 节点时，旧客户端会报错或直接忽略节点 |
| **`flag=meta` / `clash.meta`** | **Mihomo 内核（Clash Verge Rev / FlClash）** | 支持 VLESS / Reality / Hy2 / AnyTLS | 最推荐现代客户端使用；部分老旧面板会默认下发精简节点给普通参数 |
| **通用 Base64 链接（无 flag）** | v2rayN / Shadowrocket / v2rayNG | 纯文本多行节点 URI | **无法直接导入 Clash**，需切回机场提供的 Clash YAML 链接或用本地转换器处理 |

---

## 三、旧版 Clash 用户升级与日常导入路径

由于原版 Clash 内核早已归档停更，继续使用 2023 年前的旧桌面端往往会导致新协议节点被隐藏甚至触发安全隐患：

- **桌面端标准入口**：建议统一使用仍在维护的 Mihomo 生态客户端，按 [Clash Verge 订阅导入完整指南](/clients/clash-verge/import-subscription) 导入并开启规则分流。
- **自动更新设置**：关于桌面端定时更新间隔设置与直连/代理更新切换，可参考 [Clash Verge 自动更新订阅教程](/clients/clash-verge/update-subscription)。
- **协议与格式转换原理**：想对比 Clash YAML、Base64 与 sing-box JSON 差异，请阅读 [常见订阅格式全景对比](/subscription/formats)；需要自建转换前务必阅读 [订阅转换隐私风险说明](/subscription/conversion)。

---

## 常见问题解答（FAQ）

### 为什么 Clash 客户端不能直接导入 Base64 订阅链接？

Clash 系列内核只解析符合 YAML 规范的完整配置文件（包含 `proxies`、`proxy-groups` 和 `rules` 字段），而 Base64 订阅解码后仅是一行行单节点 URI，缺少策略组与分流规则结构，直接导入会触发 `yaml: unmarshal` 解析报错。

### flag=clash 和 flag=meta（Mihomo）有什么区别？

现代机场新增的 VLESS Reality、Hysteria2 等协议仅被 Mihomo（原 Clash.Meta）及 Clash Verge Rev 支持。若使用老版内核或错误请求传统 `flag=clash` 参数，服务端可能省略新协议节点或导致内核校验报错。

### 我想直接看 Clash Verge 导入订阅链接的步骤应该去哪里？

本页聚焦 Clash YAML 订阅格式与内核原理；如果你要在 Windows 或 macOS 的 Clash Verge Rev 中添加并激活机场订阅，请直接查看 [Clash Verge 订阅导入完整教程](/clients/clash-verge/import-subscription)。
