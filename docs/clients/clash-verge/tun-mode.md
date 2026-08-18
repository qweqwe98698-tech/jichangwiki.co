---
title: Clash Verge TUN 虚拟网卡模式启用与驱动配置
description: 详细指导如何在 Clash Verge Rev 中开启 TUN 模式，安装虚拟网卡服务驱动，实现终端命令行、UWP 应用与网络游戏的全量代理接管。
updated: 2026-08-18
lastReviewed: 2026-08-18
difficulty: medium
client: Clash Verge Rev
---

# Clash Verge TUN 虚拟网卡模式

<AnswerBox question="什么是 TUN 模式？什么时候需要开启 TUN 模式？">
TUN 模式是在系统底层创建一块虚拟网络适配器，强制接管整台设备的所有 TCP 与 UDP IP 数据包。当你需要代理**终端命令行 (Git/SSH)**、**微软应用商店 UWP 应用**或**联机游戏**等不走系统代理的软件时，必须开启 TUN 模式。
</AnswerBox>

---

## 🛠️ TUN 模式与系统代理的区别

| 对比项 | 普通系统代理 (System Proxy) | TUN 虚拟网卡模式 |
| :--- | :--- | :--- |
| **接管层级** | 应用层（依赖软件主动遵循系统代理） | **操作系统网络层（全局内核级拦截）** |
| **UDP 协议支持** | 较弱（许多软件不走代理 UDP） | **完美支持全部 UDP 数据包转发** |
| **终端命令行支持** | 默认不接管（需手动设置 `export http_proxy`） | **原生自动全局接管，无需任何终端环境变量** |
| **权限要求** | 普通用户权限即可 | **需要管理员权限安装驱动服务** |

---

## 🚀 开启 TUN 模式的完整步骤

<StepGuide
  :steps="[
    {
      title: '步骤 1：安装服务模式 (Service Mode)',
      desc: '进入 Clash Verge 的「设置 (Settings)」页面，找到「服务模式 (Service Mode)」，点击右侧的「安装 (Install)」。系统会弹出 UAC 管理员提权窗口，点击「是」允许安装。'
    },
    {
      title: '步骤 2：验证服务状态',
      desc: '安装完成后，服务模式右侧的圆点图标应从灰色变为绿色，表示后台驱动常驻守护进程已就绪。'
    },
    {
      title: '步骤 3：开启 TUN 模式开关',
      desc: '在设置页面中找到「TUN 模式 (Tun Mode)」开关并点击打开。在 Windows 网络连接中会看到一张名为 <code>Mihomo</code> 或 <code>Meta</code> 的虚拟网卡被自动创建并激活。'
    }
  ]"
/>

---

## ⚠️ 注意事项与排错

1. **服务模式安装失败**：请确保杀毒软件（如 360、火绒或 Windows Defender）未拦截服务注入，可暂时退出安全软件后重试。
2. **TUN 模式开启后无法解析 DNS**：检查 Clash Verge「订阅配置」中的 DNS 设置，确保使用的是 Fake-IP 或可用的 Nameserver 地址。
