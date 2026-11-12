---
title: 一翻云 2026 深度评测：Hy2/Reality 现代协议、¥20/150GB 月付与优惠码解析（#16）
description: 2026 一翻云评测：专为极客与开源客户端用户设计的 IEPL 专线机场，罕见同时下发 Hysteria 2 + VLESS-Reality + SS 且仅采用第三方标准订阅，提供 ¥98 年付、¥20/150GB 轻享月付、100G~500G 不限时流量包与 yfy6666/1FLYYUN 双优惠码说明。
updated: '2026-11-12'
keywords: ['一翻云', '1FlyYun', '一翻云评测', 'yfy6666', '1FLYYUN', 'Hysteria2机场', 'VLESS Reality']
faq:
  - q: 一翻云为什么在协议列表里比其他机场多了 Hysteria 2 和 VLESS-Reality？有什么实际优势？
    a: Hysteria 2 基于 QUIC (UDP) 拥塞控制，专门改善高丢包/无线 WiFi 或跨运营商晚高峰丢包造成的视频转圈与高延迟痛点；VLESS-Reality 则直接伪装成正常大厂 TLS 握手以大幅降低被主动探测断流风险。两项现代协议对于支持 Mihomo (Clash Verge) 与 sing-box 的用户价值极大。
  - q: 一翻云提供自己的一键客户端 App 吗？完全零基础新手合适吗？
    a: 根据 2026-10 最新《42 家清单》，一翻云属于「仅第三方通用客户端订阅导入」路线（官方并不主推闭源专属套壳软件），需用户在手机/电脑安装 Clash Verge Rev、Shadowrocket 或 v2rayNG 后导入订阅。对完全抗拒安装开源软件的小白，建议转看提供自研端+第三方双支持的飞猫云/微风网络。
  - q: 一翻云的优惠码 yfy6666 和 1FLYYUN 该用哪一个？是否有免费试用？
    a: 清单正文内曾记录主推码 yfy6666，同时亦明确载明新用户 9 折优惠码 1FLYYUN（结账时请依输入后实际抵扣结果二选一使用）。一翻云官方不设免费白嫖试用，最低尝鲜成本为购买 ¥20 轻享版单月付体验 150GB。
---

<script setup>
import { airportsData } from '../.vitepress/data/airportsData'
const airport = airportsData.find(a => a.id === 'yifanyun')
</script>

<AirportDetailHeader v-if="airport" :airport="airport" />

## 一、极客技术流标杆：唯一全量配齐 Hy2 + VLESS-Reality 的 ¥20/150GB 选手

在 ¥20 纯月付这个竞争最惨烈的价格带里，**一翻云（1FlyYun）** 走了一条非常硬核的**「全协议技术透明 + 拒做闭源套壳软件」**路线：
1. **底层协议配置最前卫**：除了标配 `IEPL` 专线与 Shadowsocks 外，一翻云下发了 **[Hysteria 2](/protocols/hysteria2-vs-tuic)**（基于 UDP QUIC 抗丢包引擎）与 **[VLESS-Reality](/protocols/reality)**（去除了传统自建证书特征的现代伪装 TLS）。对于学校校园网、跨网晚高峰高丢包宽带以及 Mihomo / `sing-box` 玩家来说，协议自由度远超同类 20 元档对手；
2. **`¥20/月` 给足 `150GB` 配额**：单 GB 纯月付成本压低到 `¥0.133/GB`（另带单节点最高 `2Gbps` 宣称接入容量），同时还留有 `¥98/年` 小包与 `100G / 250G / 500G` 三档不限时按量包；
3. **坚持纯第三方标准订阅**：不强制、也不捆绑专属闭源套壳客户端，全面交由开源社区客户端接管分流规则。

---

## 二、08-11 凌晨测速原图与非晚高峰基准参考表

<SpeedtestViewer v-if="airport" :airport="airport" />

### 实测特征与透明边界提示
- **`08-11 00:21:30 CST` 实测**：截图采样于凌晨错峰点（香港、新加坡表现流畅），`2026-10-19` 文字表补充港 `23ms / 477Mbps`、台 `40ms / 117Mbps`、新 `42ms / 390Mbps`、日 `53ms / 136Mbps` 与美国 `20Mbps / 180ms`；
- **注意事项**：美区 20Mbps 相对港新明显衰减；且官方明确不设免费白嫖测试期，使用前需确认你的路由器/手机未封锁 UDP 高端口（否则 Hy2 协议需在客户端自动回切为 Reality 或 SS）。

---

## 三、全量 8 档套餐资费一览（年付小包 · 大月付 · 永久包）

| 套餐档位 | 周期 | 官网标价 | 包含流量 | 推荐指数与人群 |
| :--- | :--- | :--- | :--- | :--- |
| **98¥ · 年付小包** | 年付特惠 | **¥98/年** | **60GB / 月**（合 ¥8.17/月） | 熟悉客户端配置且每月低消极客 |
| **轻享版** | **纯月付主力** | **¥20/月** | **150GB / 月** | **全库性价比极高的 Hy2/Reality 月付入门** |
| **舒享版** | 月付 | **¥35/月** | **350GB / 月** | 中重度 4K 流媒体追剧、家庭共享 |
| **尊享版** | 月付 | **¥55/月** | **600GB / 月** | 高频大流量研发、多人并发工作室 |
| **极致版** | 月付 | **¥95/月** | **1.2TB / 月** | 极重度影音与海量依赖下载 |
| **轻享版 · 不限时包** | **一次性永久** | **¥100** | **100GB 永不过期** | 备用防失联、极低频出差应急 |
| **舒享版 · 不限时包** | 一次性永久 | **¥200** | **250GB 永不过期** | 单 GB 仅 ¥0.8 的中容量不限时备份 |
| **尊享版 · 不限时包** | 一次性永久 | **¥400** | **500GB 永不过期** | 大容量免月租囤货选择 |

---

## 四、客户端推荐搭配与双优惠码实测注意

- **首选开源客户端组合**：
  - **Windows / macOS / Linux**：[Clash Verge Rev（自带 Mihomo 内核）](/clients/clash-verge/import-subscription) 原生满血支持 Hysteria 2 与 Reality；
  - **iOS**：[Shadowrocket 小火箭](/clients/shadowrocket/import-subscription) 或 [Stash](/clients/stash/)；
  - **Android**：[v2rayNG](/clients/v2rayng/) / [NekoBox](/clients/nekobox/) / [sing-box](/clients/sing-box/)。
- **优惠码二选一验证**：来源《42 家清单》在不同位置同步载有 **`yfy6666`** 与新用户 9 折码 **`1FLYYUN`**，结账框填一个若提示折扣未激活可直接换另一个试减。

<CouponBox code="yfy6666" discount="主录码 yfy6666（清单另有 9 折码 1FLYYUN，结账择优测试）" />

<div style="margin: 2rem 0; text-align: center;">
  <a :href="airport.affUrl" target="_blank" rel="noopener noreferrer nofollow sponsored" class="big-cta-button">
    🚀 前往 一翻云 官网接入 Hy2/Reality + 150G 月付 →
  </a>
</div>

---

## 常见问题解答（FAQ）

### 一翻云为什么在协议列表里比其他机场多了 Hysteria 2 和 VLESS-Reality？有什么实际优势？

[Hysteria 2](/protocols/hysteria2-vs-tuic) 基于 QUIC (UDP) 拥塞控制，专门改善高丢包/无线 WiFi 或跨运营商晚高峰丢包造成的视频转圈与高延迟痛点；[VLESS-Reality](/protocols/reality) 则直接伪装成正常大厂 TLS 握手以大幅降低被主动探测断流风险。两项现代协议对于支持 Mihomo ([Clash Verge Rev](/clients/clash-verge/)) 与 [sing-box](/clients/sing-box/) 的用户价值极大。

### 一翻云提供自己的一键客户端 App 吗？完全零基础新手合适吗？

根据 `2026-10` 最新《42 家清单》，一翻云属于「仅第三方通用客户端订阅导入」路线（官方并不主推闭源专属套壳软件），需用户在手机/电脑安装 Clash Verge Rev、Shadowrocket 或 v2rayNG 后导入订阅。对完全抗拒安装开源软件的小白，建议转看提供自研端+第三方双支持的 [飞猫云](/reviews/flycat) / [微风网络](/reviews/weifeng)。

### 一翻云的优惠码 yfy6666 和 1FLYYUN 该用哪一个？是否有免费试用？

清单正文内曾记录主推码 `yfy6666`，同时亦明确载明新用户 9 折优惠码 `1FLYYUN`（结账时请依输入后实际抵扣结果二选一使用）。一翻云官方不设免费白嫖试用，最低尝鲜成本为购买 `¥20` 轻享版单月付体验 `150GB`。
