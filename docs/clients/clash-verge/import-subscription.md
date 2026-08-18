---
title: Clash Verge 导入订阅链接图文教程
description: 详细讲解在 Clash Verge / Verge Rev 中添加与导入订阅 URL、生成配置 Profile 并激活节点的完整步骤。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
client: Clash Verge Rev
---

# Clash Verge 导入订阅链接

<AnswerBox question="在 Clash Verge 中如何导入机场订阅链接？">
在左侧菜单点击「订阅 (Profiles)」，在上方输入框中粘贴完整的订阅 URL，点击「导入 (Import)」。下载完成后，右键点击新生成的配置卡片选择「使用 (Use)」激活即可。
</AnswerBox>

---

## 🚀 导入实操步骤

<StepGuide
  :steps="[
    {
      title: '步骤 1：复制机场订阅链接',
      desc: '登录你的服务商网站用户后台，找到「一键订阅」或「复制订阅链接」，选择「Clash 订阅」并复制其 URL。'
    },
    {
      title: '步骤 2：在 Clash Verge 中导入',
      desc: '打开 Clash Verge 客户端，点击左侧导航栏中的「订阅 (Profiles)」图标。在顶部的输入框中粘贴刚才复制的订阅 URL，然后点击右侧的「导入」按钮。'
    },
    {
      title: '步骤 3：激活配置文件',
      desc: '等待下载进度条完成，列表中会出现包含你订阅名称的新配置卡片。点击该卡片（或右键选择「使用」），卡片边缘出现高亮边框即代表成功激活。'
    },
    {
      title: '步骤 4：在代理列表中选择节点',
      desc: '切换到左侧「代理 (Proxies)」页面，在「PROXY / 节点选择」策略组中展开节点列表，点击右上角无线信号图标进行测速，并选中一个延迟正常的绿色节点。'
    }
  ]"
/>

---

## ⚠️ 导入失败常见原因排查

1. **报错 Request Failed (404/500)**：通常是订阅 URL 复制不完整或机场后台 Token 发生了重置。请重新在后台复制一次。
2. **下载出的配置内容为空**：部分机场对直连 IP 进行了防护，可以尝试开启已有代理后勾选导入框旁的「使用系统代理下载」重试。
3. **提示 YAML 解析错误**：说明订阅链接返回的内容不是合法的 Clash 格式（例如返回了 Base64 编码的单节点格式），需联系服务商确认 Clash 专用订阅地址。
