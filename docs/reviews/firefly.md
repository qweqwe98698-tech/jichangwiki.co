---
title: Firefly (萤火虫) 2026 深度评测：合并官网信息、IPLC 多期折扣与自研端说明（Top 10）
description: "2026 Firefly 萤火虫评测（已合并清单 #8 Firefly 与 #41 萤火虫重复品牌）：2024 年运行 IPLC 专线机场，涵盖 ¥96 年付、Lite ¥25/月 150GB 到三年付约 64 折、不限时 ¥100/100G 及 8 折优惠码 firefly，明确告知暂缺独立测速抓包图与仅自研端提示。"
updated: '2026-11-12'
keywords: ['Firefly', '萤火虫机场', 'firefly评测', 'firefly官网', 'IPLC专线', 'firefly优惠码']
faq:
  - q: 网上的「Firefly」和「萤火虫机场」是同一个品牌吗？
    a: 是的。经核对来源清单元信息，排名第 8 位「Firefly」与末尾第 41 位「萤火虫」指向完全相同的注册域 vip02.fireflyaff.com、年付 ¥96 起价及 ¥25/¥45/¥85/¥150 全量价格表，本站已将两者合并为一篇核心评测避免搜索意图内耗。
  - q: Firefly 支持第三方 Clash Verge 或小火箭订阅导出吗？
    a: 根据 2026-10 最新清单标注，Firefly 目前仅提供官方自研专属客户端登录连接，而不直接开放通用第三方订阅配置给外部开源客户端。依赖 OpenWrt 软路由或 Clash Verge 深度定制规则的读者建议考虑光速云或一翻云。
  - q: 优惠码 firefly（新用户 8 折）所有套餐都能用吗？
    a: 不可用于 ¥96/年特价年付小包；除年付小包外的常规分级套餐（Lite / Plus / Blaze / Nova）支持叠加使用，配合两年/三年长周期本身可达到约 64 折～7 折参考。
---

<script setup>
import { airportsData } from '../.vitepress/data/airportsData'
const airport = airportsData.find(a => a.id === 'firefly')
</script>

<AirportDetailHeader v-if="airport" :airport="airport" />

::: info 品牌合并归口说明（Firefly = 萤火虫）
本站梳理《42 家清单》时核实到顶部 **Firefly** 与底部 **萤火虫** 同属于完全相同的推广主域名 `vip02.fireflyaff.com` 及同一套定价架构。本页面作为全站唯一权威档案合并承接「Firefly」「萤火虫机场」两类搜索，不再拆分空壳重复页。
:::

## 一、Top 10 压轴特征：长周期重度折扣与 ¥25/150GB 大额起点

**Firefly（萤火虫）** 成立于 `2024` 年，底层采用 **`IPLC` 物理跨境专线 + `VLESS` 协议**，在定位上十分明确：**服务不愿折腾第三方客户端与分流配置文件、且对「多周期折上折 / 中长期主力」有预算规划的用户**。

- **常规月付从 150GB 起步**：没有虚低引流小月包，`Lite` 纯月付直接 `¥25/月` 给足 `150GB` 流量；
- **罕见的多年期深度折减**：除常见季付（¥67）、半年（¥127）、年付（¥240）外，支持 **两年 `¥420`（7折）** 与 **三年 `¥540`（6折）**，再加上常规档新用户 `firefly` `8折`优惠券支持（年付版不适用）。

---

## 二、测速参考数据与流媒体解锁信息披露

<SpeedtestViewer v-if="airport" :airport="airport" />

### 客观数据边界说明（重要）
- **暂未采集独立实测抓包原图**：当前页面内表格展示的是 `2026-10-19` 资料清单提供的**非晚高峰参考指标**（香港 `27ms / 547Mbps`、台湾 `39ms / 135Mbps`、新加坡 `42ms / 445Mbps`、美国 `143ms / 30Mbps`）。
- **关于商家宣称与自测策略**：原资料所写「全部节点 1x 不限速」「原生 IP 解锁各大平台」属服务商自述口径，在缺乏独立抓包原图与 RegionRestriction 实测图前，**切勿第一单就无脑冲三年 ¥540 套餐**。最理性的方式是先买一个月 **Lite ¥25/月** 用好 8 折码实测家宽晚高峰后再谈长周期续费。

---

## 三、全量 6 档套餐价格体系（附长周期报价参照）

| 套餐型号 | 周期与说明 | 官网标价 | 流量配额 | 优惠码适用性说明 |
| :--- | :--- | :--- | :--- | :--- |
| **Firefly 年付版** | 年付特惠 | **¥96/年** | **60GB / 月**（合 ¥8/月） | 明确不适用 `firefly` 优惠码 |
| **Firefly Lite** | **常规纯月付** | **¥25/月**（季¥67/半年¥127/年¥240/两年¥420/三年¥540） | **150GB / 月** | 适用 `firefly` 新用户 8 折核验 |
| **Firefly Plus** | 月付 / 多期 | **¥45/月** | **300GB / 月** | 适用优惠码，家庭共享常用 |
| **Firefly Blaze** | 月付 / 多期 | **¥85/月** | **600GB / 月** | 适用优惠码，开发/团队高频传输 |
| **Firefly Nova** | 月付 / 多期 | **¥150/月** | **1000GB / 月** | 适用优惠码，单月 TB 级需求 |
| **Firefly 不限时** | 一次性不过期 | **¥100** | **100GB 一次性** | 应急备用不损耗月租 |

---

## 四、仅自研客户端提示 & 竞品替代选择

- **客户端限定说明**：Firefly 现行采用**仅官方专属自研客户端**方案（Windows / macOS / iOS / Android 登录即用，未面向第三方软件发放通用订阅导入 URL）。
- 若你既看重 ¥25/150GB 级纯月付容量、又要求**一定要开源订阅或明确多图实测抓包**：优先对照排名 #1 [光速云（6图双端）](/reviews/guangsuyun)、排名 #4 [微风网络（50节点图双端）](/reviews/weifeng) 与 ¥20 档全第三方代表 [一翻云（#16）](/reviews/yifanyun)。

<CouponBox code="firefly" discount="新用户 8 折优惠码 firefly（¥96 年付版不适用）" />

<div style="margin: 2rem 0; text-align: center;">
  <a :href="airport.affUrl" target="_blank" rel="noopener noreferrer nofollow sponsored" class="big-cta-button">
    🚀 前往 Firefly (萤火虫) 官网核验套餐与 8 折优惠 →
  </a>
</div>

---

## 常见问题解答（FAQ）

### 网上的「Firefly」和「萤火虫机场」是同一个品牌吗？

是的。经核对来源清单元信息，顶部收录「Firefly」与末尾第 41 条「萤火虫」指向完全相同的注册域 `vip02.fireflyaff.com`、年付 `¥96` 起价及 `¥25/¥45/¥85/¥150` 全量价格表，本站已将两者合并为一篇核心评测避免搜索意图内耗。

### Firefly 支持第三方 Clash Verge 或小火箭订阅导出吗？

根据 `2026-10` 最新清单标注，Firefly 目前仅提供官方自研专属客户端登录连接，而不直接开放通用第三方订阅配置给外部开源客户端。依赖 OpenWrt 软路由或 [Clash Verge Rev](/clients/clash-verge/) 深度定制规则的读者建议考虑 [光速云](/reviews/guangsuyun) 或 [一翻云](/reviews/yifanyun)。

### 优惠码 firefly（新用户 8 折）所有套餐都能用吗？

不可用于 `¥96/年` 特价年付小包；除年付小包外的常规分级套餐（Lite / Plus / Blaze / Nova）支持叠加使用，配合两年/三年长周期本身可达到约 6 折～7 折参考。
