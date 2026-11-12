<template>
  <article class="airport-card">
    <div class="card-header">
      <div class="title-group">
        <div class="card-badges">
          <span class="rank-pill" :class="{ 'is-top1': airport.rank === 1 }">
            {{ airport.rank === 1 ? 'Top 1 主推' : `#${airport.rank}` }}
          </span>
          <span v-if="airport.recommendedBadge" class="badge-tag" :class="badgeClass">
            {{ airport.recommendedBadge }}
          </span>
          <span v-if="imageCount > 0" class="img-count-pill">📷 {{ imageCount }}图实测</span>
        </div>
        <h3 class="brand-name">{{ airport.name }}</h3>
        <p class="brand-tagline">{{ airport.tagline }}</p>
      </div>

      <div class="price-box">
        <span class="price-label">参考起步价</span>
        <div class="price-value">
          <span class="currency">¥</span>
          <span class="amount">{{ airport.startingPrice }}</span>
          <span class="period">/月</span>
        </div>
        <span class="traffic-tag">{{ airport.trafficStarting }}</span>
      </div>
    </div>

    <div v-if="airport.priceNote" class="price-note-bar">
      计费口径：{{ airport.priceNote }}
    </div>

    <div class="specs-grid">
      <div class="spec-item">
        <span class="spec-label">底层网络线路</span>
        <span class="spec-val highlight-cyan">{{ airport.networkType }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">客户端支持</span>
        <span class="spec-val">{{ airport.clientSupport }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">测速评级 / 计费</span>
        <span class="spec-val speed-badge">
          {{ airport.speedRating === '待测' ? '待测' : airport.speedRating }} · {{ airport.monthlyPay ? '纯月付' : '多周期' }}
        </span>
      </div>
      <div class="spec-item">
        <span class="spec-label">综合推荐度</span>
        <span class="spec-val rating-val">{{ airport.rating.toFixed(1) }} / 5.0</span>
      </div>
    </div>

    <div class="scenarios-row">
      <span class="scenario-label">适用场景：</span>
      <div class="scenario-tags">
        <span v-for="s in airport.scenarios" :key="s" class="s-tag">{{ s }}</span>
      </div>
    </div>

    <div class="card-actions">
      <button
        v-if="airport.couponCode"
        type="button"
        class="coupon-pill"
        @click="copyCoupon(airport.couponCode)"
        title="点击复制优惠码"
      >
        <span class="coupon-title">
          优惠码 <code>{{ airport.couponCode }}</code>
          <template v-if="airport.altCouponCode"> / {{ airport.altCouponCode }}</template>
        </span>
        <span class="copy-hint">{{ copied ? '已复制 ✓' : '点击复制' }}</span>
      </button>
      <div v-else class="no-coupon-note">按官网实时标价购买（含合作外链标识）</div>

      <div class="action-buttons">
        <a :href="airport.reviewUrl" class="btn-review">深度评测</a>
        <a
          v-if="airport.affUrl"
          :href="airport.affUrl"
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          class="btn-visit"
        >
          前往官网 →
        </a>
        <span v-else class="btn-visit-disabled">入口待补充</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AirportItem } from '../../data/airports/types'

const props = defineProps<{
  airport: AirportItem
}>()

const copied = ref(false)

const imageCount = computed(() => {
  if (props.airport.testGallery && props.airport.testGallery.length > 0) {
    return props.airport.testGallery.length
  }
  return props.airport.speedtestImage ? 1 : 0
})

const badgeClass = computed(() => {
  switch (props.airport.badgeColor) {
    case 'amber': return 'badge-amber'
    case 'green': return 'badge-green'
    case 'purple': return 'badge-purple'
    case 'red': return 'badge-red'
    default: return 'badge-cyan'
  }
})

function copyCoupon(code: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.airport-card {
  background: linear-gradient(145deg, #10151C 0%, #0D1117 100%);
  border: 1px solid #1E293B;
  border-radius: 12px;
  padding: 1.35rem;
  margin-bottom: 1.25rem;
  transition: border-color 0.2s ease, transform 0.15s ease;
}

.airport-card:hover {
  border-color: rgba(0, 229, 255, 0.45);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.title-group {
  flex: 1;
  min-width: 220px;
}

.card-badges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.45rem;
}

.rank-pill {
  font-size: 0.7rem;
  font-weight: 800;
  color: #CBD5E1;
  background: #1C2533;
  border: 1px solid #2D3B4E;
  padding: 0.14rem 0.48rem;
  border-radius: 4px;
}

.rank-pill.is-top1 {
  color: #091016;
  background: #00E5FF;
  border-color: #00E5FF;
}

.img-count-pill {
  font-size: 0.7rem;
  font-weight: 600;
  color: #34D399;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.14rem 0.48rem;
  border-radius: 4px;
}

.badge-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
}

.badge-cyan { background: rgba(0, 229, 255, 0.12); color: #00E5FF; border: 1px solid rgba(0, 229, 255, 0.3); }
.badge-amber { background: rgba(245, 158, 11, 0.12); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.3); }
.badge-green { background: rgba(16, 185, 129, 0.12); color: #34D399; border: 1px solid rgba(16, 185, 129, 0.3); }
.badge-purple { background: rgba(168, 85, 247, 0.12); color: #C084FC; border: 1px solid rgba(168, 85, 247, 0.3); }
.badge-red { background: rgba(239, 68, 68, 0.12); color: #F87171; border: 1px solid rgba(239, 68, 68, 0.3); }

.brand-name {
  font-size: 1.35rem !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  margin: 0 0 0.3rem 0 !important;
  border: none !important;
  padding: 0 !important;
}

.brand-tagline {
  font-size: 0.88rem;
  color: #94A3B8;
  margin: 0;
  line-height: 1.4;
}

.price-box {
  text-align: right;
  background: #161B22;
  border: 1px solid #242E3C;
  padding: 0.6rem 1rem;
  border-radius: 8px;
}

.price-label {
  display: block;
  font-size: 0.7rem;
  color: #64748B;
}

.price-value {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
}

.currency {
  font-size: 0.9rem;
  color: #00E5FF;
  font-weight: 600;
}

.amount {
  font-size: 1.6rem;
  color: #00E5FF;
  font-weight: 800;
  line-height: 1;
  margin: 0 2px;
}

.period {
  font-size: 0.75rem;
  color: #94A3B8;
}

.traffic-tag {
  display: block;
  font-size: 0.72rem;
  color: #38BDF8;
}

.price-note-bar {
  font-size: 0.76rem;
  color: #94A3B8;
  background: #121821;
  border-left: 2px solid #38BDF8;
  padding: 0.38rem 0.7rem;
  border-radius: 0 5px 5px 0;
  margin-bottom: 0.9rem;
}

/* Specs */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  gap: 0.75rem;
  background: #0D1117;
  border: 1px solid #1A222E;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spec-label {
  font-size: 0.72rem;
  color: #64748B;
}

.spec-val {
  font-size: 0.86rem;
  color: #E2E8F0;
  font-weight: 500;
}

.highlight-cyan {
  color: #00E5FF;
  font-weight: 600;
}

.speed-badge {
  color: #34D399;
  font-weight: 700;
}

.rating-val {
  color: #FBBF24;
  font-weight: 600;
}

/* Scenarios */
.scenarios-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.scenario-label {
  font-size: 0.8rem;
  color: #64748B;
}

.scenario-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.s-tag {
  font-size: 0.76rem;
  background: #18202C;
  color: #CBD5E1;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #253244;
}

/* Actions */
.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid #1A222E;
  padding-top: 1.1rem;
  flex-wrap: wrap;
}

.coupon-pill {
  background: rgba(0, 229, 255, 0.08);
  border: 1px dashed rgba(0, 229, 255, 0.4);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.15s ease;
}

.coupon-pill:hover {
  background: rgba(0, 229, 255, 0.16);
  border-color: #00E5FF;
}

.coupon-title {
  font-size: 0.82rem;
  color: #E2E8F0;
}

.coupon-title code {
  color: #00E5FF !important;
  font-weight: 700;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
}

.copy-hint {
  font-size: 0.72rem;
  color: #38BDF8;
}

.no-coupon-note {
  font-size: 0.78rem;
  color: #94A3B8;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-review {
  padding: 0.45rem 0.9rem;
  font-size: 0.86rem;
  color: #94A3B8 !important;
  background: #161B22;
  border: 1px solid #283342;
  border-radius: 6px;
  text-decoration: none !important;
  transition: all 0.15s ease;
}

.btn-review:hover {
  color: #FFFFFF !important;
  background: #202732;
  border-color: #38BDF8;
}

.btn-visit {
  padding: 0.45rem 1.1rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: #0B0D10 !important;
  background: #00E5FF;
  border: 1px solid #00E5FF;
  border-radius: 6px;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.15s ease;
}

.btn-visit:hover {
  background: #33EBFF;
  box-shadow: 0 0 14px rgba(0, 229, 255, 0.4);
}

.btn-visit-disabled {
  padding: 0.45rem 0.9rem;
  font-size: 0.82rem;
  color: #94A3B8;
  background: #161B22;
  border: 1px dashed #334155;
  border-radius: 6px;
}
</style>
