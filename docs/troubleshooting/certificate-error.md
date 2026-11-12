---
title: SSL / TLS 证书校验异常排查 - 连接不是私密连接与握手失败修复
description: 解决浏览器出现 NET::ERR_CERT_AUTHORITY_INVALID（您的连接不是私密连接）或代理节点 TLS 握手失败的问题，区分客户端 MitM 证书、杀软拦截与系统时钟偏差三类根因。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: hard
category: 故障排查
faq:
  - q: 为什么开了代理后访问正常官网也频频提示「您的连接不是私密连接 (ERR_CERT_AUTHORITY_INVALID)」？
    a: 绝大多数情况与机场节点无关，而是你在代理工具（或某些调试工具/杀软）中开启了 HTTPS 解密 / MitM 中间人抓取功能，却没有在操作系统正确安装并完全信任对应的自签根证书。先试着关闭软件中的 MitM 开关即可立刻恢复。
  - q: 如果没开过任何 MitM 抓包，但全站突然大量证书报错或节点连不上怎么办？
    a: 第二大元凶是本地操作系统时间错乱！如果电脑日期调慢/快了几个月乃至几年，SSL 证书有效期核对就会全盘驳回。请检查并立即校准 Windows 或 macOS 的系统网络时间。
  - q: 机场订阅本身拉取时提示 SSL Certificate Expired 怎么修？
    a: 首先同步本机时钟排除自身原因；若本机时间精确，则说明服务商专门用来派发订阅的 API 子域名忘记续签 HTTPS 证书，通常需联系服务商换用新公布的备用订阅域名。
---

# SSL / Certificate 证书校验异常排查手册

<AnswerBox question="浏览器提示「您的连接不是私密连接 (NET::ERR_CERT_AUTHORITY_INVALID)」或节点报 TLS Error 怎么办？">
按照以下 3 个最常见根因逐一消除：① <strong>检查 Surge / Shadowrocket / Quantumult X 等工具是否打开了 HTTPS MitM 解密却未信任 CA 根证书</strong>；② <strong>退出卡巴斯基、ESET 或学校网络准入客户端的 HTTPS 扫描防护</strong>；③ <strong>一键校准电脑/手机系统日期和时间</strong>。
</AnswerBox>

---

## 一、两大常见“SSL 证书出错”情景区分

| 报错发生场景 | 典型报错特征 | 核心排查方向 |
| :--- | :--- | :--- |
| **浏览器访问 Google / 淘宝 / 常见网站均红屏拦截** | `NET::ERR_CERT_AUTHORITY_INVALID` 或 `SEC_ERROR_UNKNOWN_ISSUER` | 客户端开了 HTTPS 解密（MitM）但没安装信任根证书；或者杀软开启了 Web 加密流量扫描 |
| **客户端内更新订阅或节点连接日志报握手失败** | `x509: certificate has expired` / `TLS handshake failed` | **本地系统时间出错**、校园/企业网络强行注入内网认证页面、或服务商自身订阅域名过期 |

---

## 二、对应快速解决步骤

### 1. 关闭客户端 MitM / HTTPS 解密（针对 iOS / macOS 高级工具）
像 **Shadowrocket（小火箭）**、**Quantumult X**、**Loon** 与 **Surge** 为了实现部分去广告或脚本功能提供了 HTTPS 流量解密。如果证书未信任、过期或删掉了系统描述文件，所有被匹配到的域名都会立即断网报不安全。
- **日常不需要脚本调试的用户**：直接进入对应客户端设置，将 **HTTPS 解密 / MitM 总开关关闭**；清理不再使用的旧 CA 描述文件。

### 2. 检查杀毒软件「扫描加密网页」选项与公司监控软件
部分安全软件（如某些版本的卡巴斯基、ESET、小红伞以及某些公司桌面管理软件）会拦截浏览器跟远程服务器的 TLS 握手并替换成自己的证书。若其与本地代理端口冲突，常常导致全站 SSL 失灵：
- 暂时关闭杀毒软件的「HTTPS 扫描 / Web 加密流量检测」选项测试效果。

### 3. 立即同步操作系统日期与时区
TLS 数字证书严格限制 `Not Before` 与 `Not After` 生效窗口；同时 `VMess / VLESS / Trojan` 节点握手本身也依赖系统时钟同步。确保系统时钟与标准北京时间（东八区）误差在几秒以内。

### 4. 在客户端针对单个异常条目做核对（v2rayN 场景）
如果你在 v2rayN 中遇到部分节点报错 TLS/SNI 异常，可参阅 [v2rayN TLS 与证书错误专题处理](/clients/v2rayn/tls-error)；若是更新订阅阶段遭遇的 SSL 拦截，见 [订阅更新失败状态码手册](/troubleshooting/subscription-update-failed)。

---

## 常见问题解答（FAQ）

### 为什么开了代理后访问正常官网也频频提示「您的连接不是私密连接 (ERR_CERT_AUTHORITY_INVALID)」？

绝大多数情况与机场节点无关，而是你在代理工具或杀软中开启了 HTTPS 解密 / MitM 中间人抓取功能，却没有在操作系统正确安装并完全信任对应的自签根证书。先试着关闭软件中的 MitM 开关即可立刻恢复。

### 如果没开过任何 MitM 抓包，但全站突然大量证书报错或节点连不上怎么办？

请检查并立即校准 Windows 或 macOS 的系统网络时间；双系统用户在 Windows 与 Linux/macOS 切换时极易造成时钟偏移 8 小时从而全线触发 TLS 校验驳回。

### 机场订阅本身拉取时提示 SSL Certificate Expired 怎么修？

首先同步本机时钟排除自身原因；若本机时间精确，则说明服务商派发订阅的域名 HTTPS 证书未及时续签，请访问官网寻找公告公布的备用下发域名，参考 [订阅链接打不开处理方案](/subscription/url-not-working)。
