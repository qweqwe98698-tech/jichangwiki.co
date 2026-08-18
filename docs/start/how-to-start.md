---
title: 新手如何开始第一步？- 完整的起步实操指南
description: 适合零基础新手的实操流程：从准备网络环境、下载客户端、导入配置到完成第一次成功连通。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
category: 教程实操
---

# 新手如何开始第一步？

<AnswerBox question="新手拿到一份订阅链接后，第一步应该做什么？">
先根据自己的设备平台下载对应的客户端安装包并解压安装；打开客户端的订阅管理页面，将订阅链接粘贴并点击下载/更新；在更新出的节点列表中选择一个香港或日本节点，最后打开客户端的「系统代理」开关。
</AnswerBox>

---

## 🛠️ 开始前的准备工作

在动手配置之前，请确保你已经拥有：
1. 一部联网正常的电脑（Windows / macOS）或智能手机（iOS / Android）。
2. 一条由服务商提供的有效**订阅链接**（形如 `https://.../api/v1/client/subscribe?token=...`）。
3. 确保你的设备**系统时间准确**（系统时间偏差会导致安全握手失败）。

---

## 🚀 完整四步实操流程

<StepGuide
  :steps="[
    {
      title: '第一步：下载并安装适配你操作系统的客户端',
      desc: 'Windows 平台推荐下载 <a href=\'/clients/clash-verge/\'>Clash Verge Rev</a> 或 <a href=\'/clients/v2rayn/\'>v2rayN</a>；iOS 推荐在非国区 AppStore 下载 <a href=\'/clients/shadowrocket/\'>Shadowrocket</a>；Android 推荐下载 <a href=\'/clients/v2rayng/\'>v2rayNG</a>。',
      tip: '请务必从官方 GitHub Release 页面或正规渠道下载，避免使用被二次篡改捆绑木马的安装包。'
    },
    {
      title: '第二步：在客户端中导入订阅链接',
      desc: '打开客户端，进入「订阅管理 (Profiles / Subscriptions)」模块，点击「新建 / 添加」，将你获取到的完整订阅 URL 粘贴到输入框中，点击「保存并更新」。',
      tip: '若导入时提示错误，请先在浏览器隐身窗口直接访问该 URL，确认能否返回一串文本内容。'
    },
    {
      title: '第三步：选择低延迟节点',
      desc: '订阅拉取成功后，界面会出现几十个节点。点击「测速 (Test / Ping)」，观察返回的毫秒数。优先选中一个延迟在 30~80ms 之间且无丢包的香港、日本或新加坡节点。',
      tip: '测速时如果出现个别红色超时节点属于正常现象，只需选择绿色正常的节点即可。'
    },
    {
      title: '第四步：开启代理与设置分流规则',
      desc: '在客户端主界面将代理模式设为「Rule (规则模式)」，然后打开「系统代理 (System Proxy)」或「TUN 模式」总开关。',
      tip: '规则模式会自动将国内流量直连，国外流量走代理，既省流量又不会拖慢微信/淘宝等国内软件。'
    }
  ]"
/>

---

## ✅ 如何确认自己已经设置成功？

1. 打开浏览器新建标签页，访问全球公共 IP 查询网站（如 `ip138.com` 查看国内直连 IP，或 `ipinfo.io` 查看对外出站 IP）。
2. 打开 `https://www.google.com`，如果能瞬间秒开并正常显示搜索框，说明你的网络已经完全就绪。

---

## 🛑 如果遇到问题该怎么办？

- **节点全部显示超时**：请检查 [节点全部超时排查](/troubleshooting/all-nodes-timeout)。
- **显示已连接但打不开网页**：请检查 [已连接打不开网页排查](/troubleshooting/connected-but-no-internet)。
- **更新订阅提示连接错误**：请检查 [更新订阅失败排查](/subscription/update-failed)。
