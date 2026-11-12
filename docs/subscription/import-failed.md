---
title: 导入订阅失败排查 - Invalid YAML、Base64 报错与格式不匹配修复
description: 针对客户端导入机场订阅时提示 yaml unmarshal errors、Base64 decode failed、Invalid Subscribe 或无法识别格式等具体报错给出精确逐一修复方法。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 故障排查
faq:
  - q: Clash Verge 导入订阅提示 yaml unmarshal errors 或 cannot unmarshal string 是怎么回事？
    a: 绝大多数情况是把纯节点 Base64 格式订阅链接、机场官网首页链接，或被网页错误页面返回的 HTML 当成了 Clash YAML 配置导入。请在机场用户后台明确选择带有 Clash / Mihomo 标识的订阅链接。
  - q: Shadowrocket（小火箭）扫码或导入链接提示 Invalid Subscribe 如何解决？
    a: 首先核对复制的链接是否混入前后空格或经过聊天工具被转义成 &amp;；其次确认链接没有返回 404/HTML 错误页面；推荐用手机浏览器直接打开机场面板点击一键导入小火箭或扫码识别。
  - q: 导入链接正常但一直卡在下载阶段根本进不到解析步骤怎么办？
    a: 卡在下载说明还没拿到文件就网络断开了，这属于更新拉取网络链路问题，请查看「订阅链接打不开排查」或「更新订阅失败排查」。
---

# 导入订阅失败排查：格式不匹配与解析报错修复

<AnswerBox question="导入订阅时提示格式错误、Invalid YAML 或解码失败怎么办？">
<strong>导入阶段报错几乎都指向「格式错配」或「拉取到的不是节点配置而是报错网页」</strong>。<br>
记住一条核心规则：<strong>Clash 类软件必须导入 YAML 订阅；v2rayN / Shadowrocket 优先导入通用 Base64 节点链接</strong>。此外切勿直接把登录后的官网面板 URL 当订阅链接粘进去。
</AnswerBox>

---

## 一、常见导入报错信息逐条破译

| 报错关键词 | 错误发生的阶段 | 真实根因 | 一键修复方法 |
| :--- | :--- | :--- | :--- |
| **`yaml: unmarshal errors: cannot unmarshal string`** | Clash 系导入/解析阶段 | 返回内容不是合法 YAML，最常见原因：① 复制成了 Base64 链接；② 服务器返回了一段网页报错 HTML | 登录机场后台重新点击「复制 Clash 订阅」；先用浏览器打开该 URL 验证是否下载出 `.yaml` 文件 |
| **`Base64 decode failed` / `解析节点为空`** | v2rayN / v2rayNG 导入 | 把机场给 Clash 专用的 YAML 地址粘贴进了通用节点订阅框 | 到后台找「V2Ray / 通用订阅」或去掉链接末尾的 `&flag=clash` 后再导入 |
| **`Invalid Subscribe`** | Shadowrocket（小火箭） | 链接头尾带空格、URL 被聊天软件转义，或链接指向登录后的网页本身 | 在 iOS Safari 登录机场后台直接点一键添加至小火箭，或扫码添加 |
| **`unsupported protocol` / 部分字段报错** | 旧版 Clash / CFW | 订阅内含 `VLESS-Reality` / `Hysteria2`，但本地内核过旧不认识 | 升级到仍在维护的 **Clash Verge Rev（Mihomo 内核）** 后重新按 [Clash Verge 导入指南](/clients/clash-verge/import-subscription) 导入 |

---

## 二、隐蔽且极高频的 3 个人为贴错原因

### 1. 复制了官网面板网址而非订阅 API 地址
很多刚入门的新手直接从浏览器地址栏复制类似 `https://example.com/#/dashboard` 的网站链接贴入客户端。客户端去抓了一堆前端网页 HTML 代码回来，解析器当然直接崩溃。真正的订阅地址通常在面板首页「一键订阅 ➔ 复制订阅地址」按钮里，链接多带有 `subscribe` 或 `token=`。

### 2. 用微信/QQ 复制粘贴破坏了 URL 参数
把订阅发给自己微信“文件传输助手”再复制到电脑/手机时，部分客户端版本会自动替换符号 `&` 为 HTML 实体字符，或在末尾附带截断。建议使用系统自带跨设备剪贴板、本地记事本或自己登录面板原地复制。

### 3. 在线转换接口吐出了无效或残缺规则
如果你套用了网上来路不明的第三方 Subconverter 链接做中转，当第三方模板规则文件失效或接口报 `500 Bad Gateway`，客户端拿到的就是半截异常报文。尽量改用机场原汁原味的官方格式输出（风险细节参考 [订阅转换原理与隐患](/subscription/conversion)）。

---

## 三、标准排查顺序（4 步搞定）

1. **在浏览器试探响应内容**（对照 [订阅链接打不开排查](/subscription/url-not-working) 验证是否真的下发了 `.yaml` 或纯 Base64 文本）。
2. **核对客户端与格式清单**（查看 [Clash / Base64 / sing-box 格式对照](/subscription/formats) 确认没有张冠李戴）。
3. **升级老旧内核客户端**（淘汰停更多年的原版 Clash，改用 Clash Verge Rev 等现役维护客户端）。
4. **改用「手动粘贴 URL」绕过无效的一键唤起**：若点官网按钮拉不起来，手动点软件内 `新建 / 添加订阅` 粘贴 URL（详细见 [Clash Verge 手动粘贴步骤](/clients/clash-verge/import-subscription)）。

---

## 常见问题解答（FAQ）

### Clash Verge 导入订阅提示 yaml unmarshal errors 或 cannot unmarshal string 是怎么回事？

绝大多数情况是把纯节点 Base64 格式订阅链接、机场官网首页链接，或被网页错误页面返回的 HTML 当成了 Clash YAML 配置导入。请在机场用户后台明确选择带有 Clash / Mihomo 标识的订阅链接。

### Shadowrocket（小火箭）扫码或导入链接提示 Invalid Subscribe 如何解决？

首先核对复制的链接是否混入前后空格或经过聊天工具被转义成 `&amp;`；其次确认链接没有返回 404/HTML 错误页面；推荐用手机浏览器直接打开机场面板点击一键导入小火箭或扫码识别。

### 导入链接正常但一直卡在下载阶段根本进不到解析步骤怎么办？

卡在下载说明还没拿到文件就网络断开了，这属于更新拉取网络链路问题，请查看 [订阅链接打不开排查](/subscription/url-not-working) 或 [更新订阅失败排查](/troubleshooting/subscription-update-failed)。
