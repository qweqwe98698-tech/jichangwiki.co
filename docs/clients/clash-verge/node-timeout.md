---
title: Clash Verge 节点全部超时 (Timeout) 专属排查：Mihomo 内核、TUN 与 DNS 修复
description: 专治 Clash Verge / Clash Verge Rev 测速全红 Timeout：检查 Windows 时钟同步、Mihomo 内核权限、Mixed Port 7897 占用、TUN 服务模式与 default-nameserver DNS 死锁。
updated: 2026-11-12
lastReviewed: 2026-11-12
difficulty: medium
category: 故障排查
client: Clash Verge Rev
platform: Windows / macOS / Linux
faq:
  - q: Clash Verge 测速按钮点下去全部显示 Timeout，日志里该看什么？
    a: 在 Clash Verge 左侧打开「日志 (Logs)」，筛选 Error 或 Warning 级别。如果出现 time check / certificate / handshake timeout，优先校准电脑时间；如果出现 dial tcp ... i/o timeout 或 lookup failed，重点排查 DNS 与防火墙拦截。
  - q: 开启 TUN 模式后 Clash Verge 所有节点反而 Timeout 了怎么办？
    a: 常见原因是本地同时开着其它 VPN/加速器导致虚拟网卡路由冲突，或者未正确安装 Service Mode（服务模式）。请先关闭其它网络加速工具，在设置中卸载并重装 Service Mode 后再重新开启 TUN。
---

# Clash Verge 节点全部超时 (Timeout) 专属排查

<AnswerBox question="Clash Verge / Verge Rev 节点测速全部显示 Timeout 怎么办？">
针对 Clash Verge 的三大高发专属诱因：① <strong>电脑系统时钟误差 &gt; 60 秒</strong>；② <strong>Mihomo 内核 (`verge-mihomo.exe`) 被安全软件拦截或 7897 端口被占用</strong>；③ <strong>TUN 虚拟网卡驱动未就绪或与系统其它加速器路由冲突</strong>。同时确认配置文件已在「订阅」页点击刷新。
</AnswerBox>

> 需要通用跨客户端（含 v2rayN、Shadowrocket）的 5 步基础排查？请先看 [节点全部超时 (Timeout) 通用排查清单](/troubleshooting/all-nodes-timeout)。

---

## 🛑 一、先区分两种 Clash Verge Timeout 表现

1. **所有节点（含香港、日本、美国）瞬间同时报错 Timeout**：几乎 100% 是本地环境问题（系统时钟不准、内核未启动、杀毒软件阻断或订阅已到期）。
2. **仅部分节点 Timeout，其余节点绿色**：通常是服务商单条落地机房维护、晚高峰局部阻断或订阅未更新，切换其它可用地区并 [刷新 Clash Verge 订阅](/clients/clash-verge/update-subscription) 即可。

---

## ⚡ 二、Clash Verge 专属 4 项关键排错步骤

### 1. 检查 Mihomo 内核运行状态与端口监听
在 Clash Verge Rev 左侧点击「设置 (Settings)」：
- 确认 **Clash 内核**（默认 `Mihomo` / `Mihomo Alpha`）状态正常，无红色崩溃提示；
- 查看 **混合端口 (Mixed Port)**（默认为 `7897`），如果本机同时运行了其它 Clash 分支、v2rayN 或本地调试工具占用了该端口，可尝试修改为 `17897` 后重启 Clash Verge。

### 2. 将 Clash Verge 与 Mihomo 内核加入安全软件白名单
Windows Defender 或火绒常在软件静默更新内核后将其拦截：
- 打开 Clash Verge 设置 ➔ 找到安装目录 / 核心文件路径；
- 将 Clash Verge 安装目录及用户配置目录（包含 `verge-mihomo.exe`）加入杀毒软件信任区，并在 Windows 防火墙中允许其访问专有和公用网络。

### 3. 排查 `default-nameserver` 与 DNS 解析死锁
如果订阅里的节点使用域名（如 `hk01.example.com`）而非纯 IP，且配置里把 `default-nameserver` 设为了仅境外才能连通的 DNS（如 `8.8.8.8`），内核在连接节点前就无法解析出节点 IP，进而全部 Timeout。
- 打开「设置」或右键编辑订阅配置覆写（Merge / Script），确保基础引导 DNS 包含国内可达的公共 DNS（如 `223.5.5.5`、`119.29.29.29`）。详见 [Clash Verge DNS 与 Fake-IP 解析](/clients/clash-verge/dns)。

### 4. 处理 Service Mode 服务模式与 TUN 网卡冲突
- 如果你在开启 TUN 模式后所有节点突然 Timeout，请进入「设置」➔ 点击「服务模式 (Service Mode)」旁的盾牌图标，尝试卸载服务后重新安装并授权管理员权限；
- 彻底退出微信开发工具自带代理、游戏加速器（UU/雷神等）及旧版 Clash for Windows，避免残留路由抢占流量。

---

## 📚 三、相关 Clash Verge 排错衔接

- 确认订阅本身是否能正常下载更新：[Clash Verge 更新与维护订阅](/clients/clash-verge/update-subscription)
- 如果订阅损坏或格式异常需要重新导入：[Clash Verge 订阅导入全教程](/clients/clash-verge/import-subscription)
- 节点测速已恢复绿色但浏览器还是打不开网页：[Clash Verge 已连接但打不开网页排查](/clients/clash-verge/cannot-open-websites)

---

## ❓ 四、常见问题 FAQ

### Q1：Clash Verge 测速按钮点下去全部显示 Timeout，日志里该看什么？
在 Clash Verge 左侧打开「日志 (Logs)」，筛选 Error 或 Warning 级别。如果出现 `time check` / `certificate` / `handshake timeout`，优先校准电脑时间；如果出现 `dial tcp ... i/o timeout` 或 `lookup failed`，重点排查 DNS 与防火墙拦截。

### Q2：开启 TUN 模式后 Clash Verge 所有节点反而 Timeout 了怎么办？
常见原因是本地同时开着其它 VPN/加速器导致虚拟网卡路由冲突，或者未正确安装 Service Mode（服务模式）。请先关闭其它网络加速工具，在设置中卸载并重装 Service Mode 后再重新开启 TUN。
