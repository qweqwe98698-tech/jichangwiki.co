<template>
  <div class="review-header-card">
    <div class="header-main">
      <div class="header-info">
        <div class="badge-row">
          <span class="badge-status">实测评测</span>
          <span class="badge-network">{{ airport.networkType }}</span>
          <span class="badge-speed">晚高峰评级: {{ airport.speedRating }}</span>
        </div>
        <h1 class="brand-h1">{{ airport.name }} 深度评测报告</h1>
        <p class="brand-lead">{{ airport.tagline }}</p>
      </div>

      <div class="score-box">
        <div class="score-num">{{ airport.rating }}</div>
        <div class="score-stars">⭐⭐⭐⭐⭐</div>
        <div class="score-label">JichangWiki 综合评分</div>
      </div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="stats-grid">
      <div class="stat-box">
        <span class="stat-lbl">起步月付</span>
        <span class="stat-v highlight-price">¥{{ airport.startingPrice }}/月</span>
      </div>
      <div class="stat-box">
        <span class="stat-lbl">入门流量</span>
        <span class="stat-v">{{ airport.trafficStarting }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-lbl">支持协议</span>
        <span class="stat-v">{{ airport.protocols.join(' / ') }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-lbl">月付支持</span>
        <span class="stat-v">{{ airport.monthlyPay ? '支持纯月付' : '仅季付/年付' }}</span>
      </div>
    </div>

    <!-- Bottom CTA Bar -->
    <div class="header-cta-bar">
      <div v-if="airport.couponCode" class="cta-coupon">
        <span>专属优惠码: <code>{{ airport.couponCode }}</code> ({{ airport.discountText || '立减' }})</span>
      </div>
      <a :href="airport.affUrl" target="_blank" rel="noopener noreferrer nofollow" class="header-btn-visit">
        前往 {{ airport.name }} 官网注册 →
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AirportItem } from '../../data/airportsData'

defineProps<{
  airport: AirportItem
}>()
</script>

<style scoped>
.review-header-card {
  background: #11151A;
  border: 1px solid #1E2734;
  border-radius: 12px;
  padding: 1.75rem;
  margin-bottom: 2rem;
}

.header-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.header-info {
  flex: 1;
  min-width: 260px;
}

.badge-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.65rem;
  flex-wrap: wrap;
}

.badge-status {
  font-size: 0.72rem;
  font-weight: 700;
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.3);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  background: #0D1117;
  border: 1px solid #1A222E;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 2px;
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

.cta-coupon {
  font-size: 0.85rem;
  color: #E2E8F0;
}

.cta-coupon code {
  color: #00E5FF !important;
  font-weight: 700;
  background: rgba(0, 229, 255, 0.1) !important;
  border: 1px solid rgba(0, 229, 255, 0.3) !important;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.header-btn-visit {
  background: #00E5FF;
  color: #0B0D10 !important;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  text-decoration: none !important;
  transition: all 0.15s ease;
}

.header-btn-visit:hover {
  background: #33EBFF;
  box-shadow: 0 0 16px rgba(0, 229, 255, 0.4);
}
</style>
