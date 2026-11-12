---
title: 常见订阅格式全景对比 - Clash YAML、Base64 与 sing-box JSON 选型指南
description: 详尽对比 Clash Meta YAML、通用 Base64 节点列表、sing-box JSON 与 Surge 配置格式的语法差异、适用客户端清单及导入报错应对方式。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 订阅知识
faq:
  - q: 把 Base64 格式订阅直接导入 Clash Verge 会发生什么？
    a: 会直接报错 yaml unmarshal errors 或提示无法识别的配置文件格式。Clash Verge 仅接受符合 YAML 结构的 Clash / Mihomo 订阅；你需要在机场后台复制 Clash 专用链接，或者使用本地工具将其转换为 YAML。
  - q: sing-box、NekoBox 和 Hiddify 该选择哪一种订阅格式？
    a: 原生 sing-box 内核客户端首选机场提供的 sing-box JSON 格式；若机场尚未单独提供 sing-box 输出，Hiddify 与 NekoBox 等前端封装软件通常也能直接兼容 Clash Meta（Mihomo）订阅或 Base64 通用节点列表。
  - q: Base64 格式和 Clash YAML 哪一个包含分流规则？
    a: 只有 Clash YAML（及 Surge/Quantumult X 等独立规则格式）在订阅体内同时下发了国内直连、广告或流媒体分流规则；Base64 仅包含服务器节点列表，分流需依赖客户端自身预设的路由表。
---

# 常见订阅格式全景对比（Clash / Base64 / sing-box）

<AnswerBox question="主流订阅格式有哪些？我应该给自己的软件导入哪一种？">
常见机场订阅主要分为四大类：<strong>Clash YAML（最常见桌面端格式）</strong>、<strong>Base64 通用节点编码（v2rayN / 小火箭常用）</strong>、<strong>sing-box JSON（现代跨平台内核）</strong> 以及 <strong>Surge / Quantumult X 专用配置</strong>。<br>
最稳妥的原则是：<strong>在机场面板优先选用对应客户端的一键导入或专属链接</strong>，不要将 Base64 链接硬塞进 Clash 类软件。
</AnswerBox>

---

## 一、四大主流订阅格式横向对比

| 格式名称 | 载体格式 | 是否自带分流规则 | 适配代表客户端 | 典型协议覆盖 |
| :--- | :--- | :--- | :--- | :--- |
| **Clash / Mihomo** | YAML (`proxies` + `proxy-groups` + `rules`) | 是（完整策略组与分流） | **Clash Verge Rev**、Stash、Clash Meta for Android、FlClash | SS / VMess / Trojan / **VLESS Reality / Hysteria2** |
| **Base64 节点聚合** | 纯文本 Base64 编码多行 URI | 否（仅节点地址） | v2rayN、v2rayNG、**Shadowrocket**（小火箭） | SS(SIP002) / VMess / Trojan / VLESS / Hy2 |
| **sing-box JSON** | JSON (`inbounds` / `outbounds` / `route`) | 是（SRS 规则集路由） | 原生 **sing-box**、Hiddify、NekoBox（部分模式） | 全协议 + 高级 TUN/DNS 路由 |
| **Surge / Loon / QX** | INI / 独立分段文本 | 是（完整脚本/MitM） | Surge (iOS/macOS)、Loon、Quantumult X | 需注意部分小众新协议支持滞后 |

---

## 二、典型数据内容长什么样？（脱敏结构示意）

当你无法确认手里的订阅到底属于哪种格式时，在浏览器或 `curl` 中查看响应前几行即可一秒分辨：

### 1. Clash / Mihomo YAML
开头通常出现 `port:`、`mixed-port:`、`proxies:` 等缩进键名：
```yaml
mixed-port: 7890
proxies:
  - { name: "节点示例", type: shadowsocks, server: 1.2.3.4, port: 443 }
```

### 2. Base64 通用节点列表
未解码前是一整块无换行的字母数字（如 `dmxlc3M6Ly8...`），解码后每行是一个标准协议 URI：
```text
ss://YWVzLTEyOC1nY206cGFzc3dvcmQ=@node1.example.com:443#%E9%A6%99%E6%B8%AF01
vless://uuid@node2.example.com:443?security=reality#%E6%96%B0%E5%8A%A0%E5%9D%A101
```

### 3. sing-box JSON
以大括号 `{` 开头，包含 `"outbounds"` 数组与 `"route"` 规则对象：
```json
{
  "outbounds": [{ "type": "selector", "tag": "proxy", "outbounds": ["hk-01"] }],
  "route": { "rules": [] }
}
```

---

## 三、选错格式后的真实报错与切换建议

- **出现 `yaml: unmarshal errors`**：99% 是把 Base64 通用订阅贴进了 Clash Verge。请回到官网重新复制「Clash 订阅」链接，具体导入可对照 [Clash Verge 订阅导入步骤](/clients/clash-verge/import-subscription)。
- **客户端解析正常但新节点全消失**：大概率是服务端因旧版参数（如传统 `flag=clash`）过滤掉了 `VLESS-Reality` 或 `Hysteria2`，检查方法见 [导入后没有节点排查](/subscription/no-nodes)。
- **机场面板真的没提供目标客户端格式怎么办？**：阅读 [订阅转换原理与安全使用方案](/subscription/conversion)，仅建议在本地运行受信任的转换程序，避免公开网页泄露个人 Token。

---

## 常见问题解答（FAQ）

### 把 Base64 格式订阅直接导入 Clash Verge 会发生什么？

会直接报错 `yaml: unmarshal errors` 或提示无法识别的配置文件格式。Clash Verge 仅接受符合 YAML 结构的 Clash / Mihomo 订阅；你需要在机场后台复制 Clash 专用链接，或者使用本地工具将其转换为 YAML。

### sing-box、NekoBox 和 Hiddify 该选择哪一种订阅格式？

原生 sing-box 内核客户端首选机场提供的 `sing-box JSON` 格式；若机场尚未单独提供 sing-box 输出，Hiddify 与 NekoBox 等前端封装软件通常也能直接兼容 Clash Meta（Mihomo）订阅或 Base64 通用节点列表。

### Base64 格式和 Clash YAML 哪一个包含分流规则？

只有 Clash YAML（及 Surge/Quantumult X 等独立规则格式）在订阅体内同时下发了国内直连、广告或流媒体分流规则；Base64 仅包含服务器节点列表，分流需依赖客户端自身预设的路由表。
