---
title: 二猫云 2026 深度评测：¥89 年付、¥20 白猫月付 130GB 与 08-11 实测图分析（Top 7）
description: 2026 二猫云评测：2023 年运营 IEPL+VLESS/SS 双端机场，保留 08-11 10:45 MAI-TEST-BOT 测速原图，覆盖 ¥99 不限时 100G、¥89 年付小包（合 ¥7.42/月）与白猫 ¥20/月 130GB，不限在线设备数，附优惠码 ermao5555。
updated: '2026-11-12'
keywords: ['二猫云', '二猫云评测', 'ermao5555', '白猫套餐', '不限设备机场', 'IEPL月付']
faq:
  - q: 二猫云的起步参考价为什么写成 ¥7.42/月？纯单月最低多少钱？
    a: ¥7.42/月（60GB/月）是「二猫年付小包」¥89/年折算后的单月平均花费；如果打算按单月购买，「白猫套餐」纯月付为 ¥20/月并直接提供 130GB 流量（此外还有 ¥99 一次性 100GB 不限时流量包）。
  - q: 二猫云和同价位（¥20）的 U1S1、一翻云相比核心优劣在哪？
    a: 三者同处 ¥20 月付主流赛道：二猫云成立于 2023 年运维周期稳健、提供不限同时在线设备且可购 ¥99 不限时包；一翻云流量给到 150GB 并支持 Hy2/Reality 但偏仅第三方订阅；U1S1（120GB）属 2025 年 IPLC 新军且双端友好。二猫云需留意资料提示节点池偏重港/日/美、部分时段新加坡选项偏少以及 Claude/Gemini 需按节点验证。
  - q: 二猫云支持 Clash Verge Rev 和 Shadowrocket 第三方导入吗？
    a: 完全支持。二猫云采用「自研 + 第三方标准订阅」双轨兼容机制，可直接复制订阅链接导入 Clash Verge Rev、v2rayN、Shadowrocket 与 NekoBox，且无设备数限制。
---

<script setup>
import { airportsData } from '../.vitepress/data/airportsData'
const airport = airportsData.find(a => a.id === 'ermaoyun')
</script>

<AirportDetailHeader v-if="airport" :airport="airport" />

## 一、Top 7 核心定位：2023 年稳态运营 · ¥20/130GB + 全家多端共享

在 Top 10 梯队中，**二猫云**是典型的**「不靠噱头靠均衡」**：成立于 `2023` 年，横跨 `3` 年持续服务周期，同时覆盖 **不限时 ¥99（100GB）**、**超低年付 ¥89（合 ¥7.42/月）** 和 **¥20/月 130GB 白猫主力包** 三条产品线，更重要的一条是**不限制同时在线设备数量**——非常适合电脑、手机、平板、电视盒或家人多设备共摊一个账号。

- **底层规格**：`IEPL 专线 + VLESS / Shadowsocks`，兼容官方轻量应用与全部标准开源代理客户端（`Clash Verge`、`v2rayN`、`Shadowrocket` 等）。

---

## 二、08-11 实测抓包原图与非晚高峰参考指标

<SpeedtestViewer v-if="airport" :airport="airport" />

### 实测与文字参数诚实解读
1. **`08-11 10:45:27` 真实抓包 + `10-19` 文字表**：香港参考延迟低至 `22ms / 481Mbps`、日本 `53ms / 143Mbps`、美国 `17Mbps / 134ms`。在亚太核心日常办公与 4K 流媒体点播场景下吞吐充足。
2. **明确列明两点注意边界**：
   - **地区节点配比偏好**：来源资料提到其核心节点主力集中在**香港、日本、美国**等主枢纽，部分时段可能缺少大量常规新加坡线路，如果您的业务或游戏极度依赖新加坡原生出口，选购前应比对 [微风网络（#4）](/reviews/weifeng) 或 [光速云（#1）](/reviews/guangsuyun)；
   - **AI 与高频风控说明**：`Netflix / Disney+ / YouTube / ChatGPT` 表现稳健，但 `Claude` 与 `Gemini` 在不同节点下存在 IP 属性波动，建议先购 ¥20 白猫单月包结合分流策略组实测后再锁定年付。

---

## 三、全量 6 档套餐对比（含 ¥99 永久不限时包）

| 套餐名称 | 周期 | 标价 | 包含流量 | 适用场景建议 |
| :--- | :--- | :--- | :--- | :--- |
| **二猫云 · 不限时套餐** | **一次性永久** | **¥99** | **100GB 永不过期** | 防失联应急兜底、出差低频设备共用 |
| **二猫年付小包** | 年付特惠 | **¥89/年** | 60GB/月（合 ¥7.42/月） | 日常文字检索与邮件办公轻度用户 |
| **白猫套餐** | **纯月付起步** | **¥20/月** | **130GB / 月** | 居家日常、全网学习与 4K 视频均衡主选 |
| **橘猫畅玩版** | 月付 | **¥40/月** | **230GB / 月** | 多设备家庭共享、中等流量重度观影 |
| **牛奶猫尊享版** | 月付 | **¥80/月** | **430GB / 月** | 视频创作者 / 外贸办公室团队使用 |
| **黑猫重度用户版** | 月付 | **¥160/月** | **850GB / 月** | 高带宽镜像拉取与多工作室集群 |

---

## 四、客户端接入防跑偏提示 & 同档横评

拿到订阅链接后，桌面端按 [Clash Verge Rev 订阅导入教程](/clients/clash-verge/import-subscription) 导入，iOS 使用 [小火箭导入教程](/clients/shadowrocket/import-subscription)，**务必确认已切至「规则模式（Rule）」**避免国内网盘/B站消耗宝贵的 130GB 月流量（原理详见 [规则模式分流机制](/clients/clash/proxy-mode)）。

- **同 ¥20 价位主力三强互比**：[U1S1（#12 · IPLC 120GB）](/reviews/u1s1) ｜ [一翻云（#16 · Hy2/Reality 150GB）](/reviews/yifanyun) ｜ [全球云（#21 · 仅自研端 120GB）](/reviews/quanqiuyun)。

<CouponBox code="ermao5555" discount="专属优惠码 ermao5555（请于官网结账输入核对折扣）" />

<div style="margin: 2rem 0; text-align: center;">
  <a :href="airport.affUrl" target="_blank" rel="noopener noreferrer nofollow sponsored" class="big-cta-button">
    🚀 前往 二猫云 官网核验白猫月付与不限时套餐 →
  </a>
</div>

---

## 常见问题解答（FAQ）

### 二猫云的起步参考价为什么写成 ¥7.42/月？纯单月最低多少钱？

`¥7.42/月`（60GB/月）是「二猫年付小包」`¥89/年` 折算后的单月平均花费；如果打算按单月购买，「白猫套餐」纯月付为 `¥20/月` 并直接提供 `130GB` 流量（此外还有 `¥99` 一次性 `100GB` 不限时流量包）。

### 二猫云和同价位（¥20）的 U1S1、一翻云相比核心优劣在哪？

三者同处 `¥20` 月付主流赛道：二猫云成立于 `2023` 年运维周期稳健、提供不限同时在线设备且可购 `¥99` 不限时包；[一翻云](/reviews/yifanyun) 流量给到 `150GB` 并支持 `Hy2/Reality` 但偏仅第三方订阅；[U1S1](/reviews/u1s1)（120GB）属 `2025` 年 IPLC 新军且双端友好。二猫云需留意资料提示节点池偏重港/日/美、部分时段新加坡选项偏少以及 Claude/Gemini 需按节点验证。

### 二猫云支持 Clash Verge Rev 和 Shadowrocket 第三方导入吗？

完全支持。二猫云采用「自研 + 第三方标准订阅」双轨兼容机制，可直接复制订阅链接导入 [Clash Verge Rev](/clients/clash-verge/)、[v2rayN](/clients/v2rayn/)、[Shadowrocket](/clients/shadowrocket/) 与 [NekoBox](/clients/nekobox/)，且无设备数限制。
