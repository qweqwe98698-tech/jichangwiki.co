<template>
  <div class="airport-detail-header">
    <div class="header-top">
      <div class="title-block">
        <div class="badges-line">
          <span class="badge-rank" :class="{ 'is-top1': airport.rank === 1 }">
            {{ airport.rank === 1 ? 'Top 1 · 第一主推' : airport.isTop10 ? `Top ${airport.rank}` : `#${airport.rank}` }}
          </span>
          <span v-if="airport.recommendedBadge" class="badge-tag" :class="badgeClass">
            {{ airport.recommendedBadge }}
          </span>
          <span class="badge-network">{{ airport.networkType }}</span>
          <span class="badge-speed">
            {{ airport.speedRating === '待测' ? '实测待补充' : `测速 ${airport.speedRating}` }}
          </span>
          <span class="badge-client">{{ airport.clientSupport }}</span>
          <span class="badge-status">{{ statusLabel }}</span>
        </div>
        <h1 class="brand-h1">{{ airport.name }} 深度评测报告</h1>
        <p class="brand-lead">{{ airport.tagline }}</p>
      </div>

      <div class="score-box">
        <div class="score-num">{{ airport.rating.toFixed(1) }}</div>
        <div class="score-stars">{{ '⭐'.repeat(Math.round(airport.rating)) }}</div>
        <div class="score-label">综合推荐指数</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-box">
        <span class="stat-lbl">参考起步门槛</span>
        <span class="stat-v highlight-price">¥{{ airport.startingPrice }}/月起</span>
        <span class="stat-sub">{{ airport.priceNote }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-lbl">入门流量 / 周期</span>
        <span class="stat-v">{{ airport.trafficStarting }}</span>
        <span class="stat-sub">
          {{ airport.monthlyPay ? '支持纯月付' : '年付/长周期为主' }}{{ airport.payAsYouGo ? ' · 含不限时按量' : '' }}
        </span>
      </div>
      <div class="stat-box">
        <span class="stat-lbl">支持代理协议</span>
        <span class="stat-v">{{ airport.protocols.join(' · ') }}</span>
        <span class="stat-sub">运营起步：{{ airport.establishedYear }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-lbl">支付与客户端模式</span>
        <span class="stat-v">{{ airport.paymentMethods.join(' / ') }}</span>
        <span class="stat-sub">{{ airport.clientSupport }}</span>
      </div>
    </div>

    <div class="header-cta-bar">
      <div class="cta-left">
        <div class="cta-coupon">
          <template v-if="airport.couponCode">
            优惠码：<code>{{ airport.couponCode }}</code> ({{ airport.discountText || '结账验证使用' }})
            <span v-if="airport.altCouponCode" class="alt-coupon-note">
              · 另一可用历史码：<code>{{ airport.altCouponCode }}</code>
            </span>
          </template>
          <template v-else>
            <span>按官网实时套餐定价购买（暂未核实专属优惠码）</span>
          </template>
        </div>
        <div v-if="airport.affLinkNote || airport.vendorNote" class="cta-disclosure">
          {{ airport.affLinkNote || airport.vendorNote }}
        </div>
      </div>

      <a
        v-if="airport.affUrl"
        :href="airport.affUrl"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        class="header-btn-visit"
      >
        访问 {{ airport.name }} 官网（含推广链接） →
      </a>
      <span v-else class="header-btn-disabled">
        官网直达入口待核实补充
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AirportItem } from '../../data/airports/types'

const props = defineProps<{
  airport: AirportItem
}>()

const badgeClass = computed(() => {
  switch (props.airport.badgeColor) {
    case 'amber': return 'badge-amber'
    case 'green': return 'badge-green'
    case 'purple': return 'badge-purple'
    case 'red': return 'badge-red'
    default: return 'badge-cyan'
  }
})

const statusLabel = computed(() => {
  switch (props.airport.dataStatus) {
    case 'measured': return '含实测抓包'
    case 'vendor': return '商家/文本基准'
    case 'historical': return '历史记录整理'
    default: return '部分待核实'
  }
})
</script>

<style scoped>
.airport-detail-header {
  background: linear-gradient(135deg, #0E131A 0%, #111822 100%);
  border: 1px solid #1E293B;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.75rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.title-block {
  flex: 1;
  min-width: 240px;
}

.badges-line {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.65rem;
}

.badge-rank {
  font-size: 0.72rem;
  font-weight: 800;
  color: #CBD5E1;
  background: #1C2533;
  border: 1px solid #2D3B4E;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.badge-rank.is-top1 {
  color: #091016;
  background: #00E5FF;
  border-color: #00E5FF;
}

.badge-tag {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.badge-cyan { background: rgba(0, 229, 255, 0.12); color: #00E5FF; border: 1px solid rgba(0, 229, 255, 0.3); }
.badge-amber { background: rgba(245, 158, 11, 0.12); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.3); }
.badge-green { background: rgba(16, 185, 129, 0.12); color: #34D399; border: 1px solid rgba(16, 185, 129, 0.3); }
.badge-purple { background: rgba(168, 85, 247, 0.12); color: #C084FC; border: 1px solid rgba(168, 85, 247, 0.3); }
.badge-red { background: rgba(239, 68, 68, 0.12); color: #F87171; border: 1px solid rgba(239, 68, 68, 0.3); }

.badge-network {
  font-size: 0.72rem;
  font-weight: 600;
  color: #38BDF8;
  background: #161D27;
  border: 1px solid #253344;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.badge-speed {
  font-size: 0.72rem;
  font-weight: 600;
  color: #34D399;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.badge-client,
.badge-status {
  font-size: 0.72rem;
  font-weight: 600;
  color: #CBD5E1;
  background: #161E28;
  border: 1px solid #273242;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.brand-h1 {
  font-size: 1.65rem !important;
  font-weight: 800 !important;
  color: #FFFFFF !important;
  margin: 0 0 0.4rem 0 !important;
  border: none !important;
  padding: 0 !important;
  line-height: 1.3 !important;
}

.brand-lead {
  font-size: 0.95rem;
  color: #94A3B8;
  margin: 0;
}

.score-box {
  background: #161B22;
  border: 1px solid #232D3B;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  text-align: center;
  min-width: 140px;
}

.score-num {
  font-size: 2.2rem;
  font-weight: 800;
  color: #00E5FF;
  line-height: 1;
}

.score-stars {
  font-size: 0.75rem;
  margin: 4px 0 2px 0;
}

.score-label {
  font-size: 0.68rem;
  color: #64748B;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 0.85rem;
  background: #0D1117;
  border: 1px solid #1A222E;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.stat-lbl {
  font-size: 0.72rem;
  color: #64748B;
}

.stat-v {
  font-size: 0.9rem;
  font-weight: 600;
  color: #E2E8F0;
}

.stat-sub {
  font-size: 0.72rem;
  color: #94A3B8;
  line-height: 1.4;
}

.highlight-price {
  color: #00E5FF;
}

.header-cta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid #1A222E;
  padding-top: 1.1rem;
  flex-wrap: wrap;
}

.cta-left {
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.cta-coupon {
  font-size: 0.85rem;
  color: #E2E8F0;
  line-height: 1.5;
}

.cta-coupon code {
  color: #00E5FF !important;
  font-weight: 700;
  background: rgba(0, 229, 255, 0.1) !important;
  border: 1px solid rgba(0, 229, 255, 0.3) !important;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.alt-coupon-note {
  color: #94A3B8;
  font-size: 0.8rem;
}

.cta-disclosure {
  font-size: 0.74rem;
  color: #94A3B8;
  line-height: 1.45;
}

.header-btn-visit {
  background: #00E5FF;
  color: #0B0D10 !important;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.55rem 1.2rem;
  border-radius: 6px;
  text-decoration: none !important;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.header-btn-visit:hover {
  background: #33EBFF;
  box-shadow: 0 0 16px rgba(0, 229, 255, 0.4);
}

.header-btn-disabled {
  background: #1C2533;
  color: #94A3B8;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.55rem 1.1rem;
  border-radius: 6px;
  border: 1px dashed #334155;
}
</style>
