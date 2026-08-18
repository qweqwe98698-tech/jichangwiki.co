<template>
  <div class="airport-card" :class="`border-${airport.badgeColor || 'cyan'}`">
    <div class="card-header">
      <div class="brand-meta">
        <span v-if="airport.recommendedBadge" class="badge-tag" :class="`badge-${airport.badgeColor || 'cyan'}`">
          {{ airport.recommendedBadge }}
        </span>
        <h3 class="brand-name">{{ airport.name }}</h3>
        <p class="brand-tagline">{{ airport.tagline }}</p>
      </div>

      <div class="price-box">
        <span class="price-label">起步价格</span>
        <div class="price-value">
          <span class="currency">¥</span>
          <span class="amount">{{ airport.startingPrice }}</span>
          <span class="period">/月</span>
        </div>
        <span class="traffic-tag">{{ airport.trafficStarting }}</span>
      </div>
    </div>

    <!-- Specs Grid -->
    <div class="specs-grid">
      <div class="spec-item">
        <span class="spec-label">线路架构</span>
        <span class="spec-val highlight-cyan">{{ airport.networkType }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">晚高峰评级</span>
        <span class="spec-val speed-badge">{{ airport.speedRating }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">支持协议</span>
        <span class="spec-val">{{ airport.protocols.join(', ') }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">综合评分</span>
        <span class="spec-val rating-val">⭐ {{ airport.rating }}</span>
      </div>
    </div>

    <!-- Scenarios -->
    <div class="scenarios-row">
      <span class="scenario-label">精选解锁：</span>
      <div class="scenario-tags">
        <span v-for="s in airport.scenarios" :key="s" class="s-tag">{{ s }}</span>
      </div>
    </div>

    <!-- Actions -->
    <div class="card-actions">
      <div v-if="airport.couponCode" class="coupon-pill" @click="copyCoupon">
        <span class="coupon-title">优惠码: <code>{{ airport.couponCode }}</code></span>
        <span class="copy-hint">{{ copied ? '已复制!' : '点击复制' }}</span>
      </div>

      <div class="action-buttons">
        <a :href="airport.reviewUrl" class="btn-review">查看评测报告</a>
        <a :href="airport.affUrl" target="_blank" rel="noopener noreferrer nofollow sponsored" class="btn-visit">
          直达官网注册
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AirportItem } from '../../data/airportsData'

const props = defineProps<{
  airport: AirportItem
}>()

const copied = ref(false)

const copyCoupon = () => {
  if (props.airport.couponCode) {
    navigator.clipboard.writeText(props.airport.couponCode)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.airport-card {
  background: #11151A;
  border: 1px solid #1E2734;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  transition: all 0.2s ease;
  position: relative;
}

.airport-card:hover {
  border-color: #2D3B4D;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.brand-meta {
  flex: 1;
  min-width: 240px;
}

.badge-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.badge-cyan { background: rgba(0, 229, 255, 0.12); color: #00E5FF; border: 1px solid rgba(0, 229, 255, 0.3); }
.badge-amber { background: rgba(245, 158, 11, 0.12); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.3); }
.badge-green { background: rgba(16, 185, 129, 0.12); color: #34D399; border: 1px solid rgba(16, 185, 129, 0.3); }
.badge-purple { background: rgba(168, 85, 247, 0.12); color: #C084FC; border: 1px solid rgba(168, 85, 247, 0.3); }

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

/* Specs */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
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
</style>
