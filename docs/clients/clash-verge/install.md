---
title: Clash Verge (Rev) 下载与安装配置教程
description: 详细讲解 Windows 与 macOS 平台下 Clash Verge Rev 的官方下载渠道、安装包架构选择及首次启动配置。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: easy
client: Clash Verge Rev
platform: Windows / macOS
---

# Clash Verge (Rev) 下载与安装配置

<AnswerBox question="Clash Verge Rev 应该下载哪个安装包？">
Windows 64 位推荐下载 `x64-setup.exe`；Windows ARM 设备下载 `arm64-setup.exe`；Mac 苹果芯片 (M1~M4) 下载 `aarch64.dmg`；Mac Intel 芯片下载 `x64.dmg`。请认准官方开源仓库 Release 页面。
</AnswerBox>

---

## 💻 安装环境准备

- **Windows 10 / 11**：系统需具备 Microsoft Edge WebView2 运行时（Win10/11 通常已内置）。若启动报错提示缺少 WebView2，需从微软官网下载安装。
- **macOS (11.0+)**：初次打开若提示“无法打开，因为无法验证开发者”，在「系统设置」→「隐私与安全性」中点击「仍要打开」即可。

---

## 📥 安装步骤

<StepGuide
  :steps="[
    {
      title: '步骤 1：下载对应架构的安装程序',
      desc: '访问官方发布渠道，依据你的操作系统架构下载 <code>.exe</code> 或 <code>.dmg</code> 文件。'
    },
    {
      title: '步骤 2：完成程序安装并启动',
      desc: 'Windows 按照安装向导点击下一步即可；macOS 将应用图标拖拽至 Applications 应用程序文件夹。'
    },
    {
      title: '步骤 3：首次启动与基础偏好设置',
      desc: '进入 Clash Verge 设置页面，建议勾选「开机自启 (Auto Launch)」与「静默启动 (Silent Start)」，并将语言切换为「简体中文」。'
    }
  ]"
/>

---

## ⚙️ 内核选择建议

在 Clash Verge 的「设置」中可以切换底层内核：
- **Mihomo (Clash.Meta) [推荐]**：功能最强大，支持 VLESS-Reality、Hysteria2、TUIC 等新协议，且对 TUN 模式支持最完善。
- **Clash Premium [已停止维护]**：仅支持传统 Shadowsocks / VMess 协议，不推荐新用户使用。
