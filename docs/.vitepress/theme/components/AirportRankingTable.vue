<template>
  <div class="ranking-table-wrapper">
    <!-- Scope Switch + Filter Controls -->
    <div class="filter-bar">
      <div class="scope-switch-group">
        <button
          type="button"
          class="scope-btn"
          :class="{ active: scope === 'top10' }"
          @click="scope = 'top10'"
        >
          🏆 Top 10 主推榜 (10)
        </button>
        <button
          type="button"
          class="scope-btn"
          :class="{ active: scope === 'all' }"
          @click="scope = 'all'"
        >
          📋 全部收录品牌 ({{ airportsData.length }})
        </button>
      </div>

      <div class="search-box">
        <input
          v-model="searchQuery"
          type="search"
          placeholder="搜索品牌名称 / 优惠码 / 协议..."
          class="ranking-search-input"
          aria-label="筛选机场品牌"
        />
      </div>
    </div>

    <div class="sub-filter-bar">
      <div class="filter-pills">
        <button
          v-for="filter in networkFilters"
          :key="filter.value"
          type="button"
          class="f-pill"
          :class="{ active: selectedNetwork === filter.value }"
          @click="selectedNetwork = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="extra-filters">
        <select v-model="payMode" class="select-ctrl" aria-label="按计费模式筛选">
          <option value="all">全部计费方式</option>
          <option value="monthly">仅看支持纯月付</option>
          <option value="payg">仅看含不限时按量</option>
        </select>
        <select v-model="clientMode" class="select-ctrl" aria-label="按客户端模式筛选">
          <option value="all">全部客户端支持</option>
          <option value="自研+第三方">自研 + 第三方兼容</option>
          <option value="仅第三方订阅">仅第三方订阅 (Clash等)</option>
          <option value="仅自研客户端">仅自研客户端</option>
        </select>
        <label class="toggle-img-label">
          <input v-model="onlyWithImages" type="checkbox" />
          <span>仅看含实测抓包图</span>
        </label>
      </div>
    </div>

    <div class="result-meta">
      当前展示 <strong>{{ filteredAirports.length }}</strong> 家服务商（默认按推荐排序；含合作品牌推广链接 `nofollow sponsored`）
    </div>

    <!-- Desktop Table -->
    <div class="table-responsive desktop-only">
      <table class="wiki-table">
        <thead>
          <tr>
            <th>排名 / 品牌</th>
            <th>专线与协议</th>
            <th>参考起步价 & 计费口径</th>
            <th>客户端模式</th>
            <th>实测证据</th>
            <th>操作与直达</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredAirports" :key="item.id">
            <td>
              <div class="brand-cell">
                <div class="brand-title-line">
                  <span class="rank-badge" :class="{ top1: item.rank === 1, top10: item.rank <= 10 }">
                    #{{ item.rank }}
                  </span>
                  <a :href="item.reviewUrl" class="brand-title-link">{{ item.name }}</a>
                </div>
                <span class="brand-sub">{{ item.tagline }}</span>
              </div>
            </td>
            <td>
              <div class="net-cell">
                <span class="net-badge">{{ item.networkType }}</span>
                <span class="proto-txt">{{ item.protocols.join(' / ') }}</span>
              </div>
            </td>
            <td>
              <div class="price-cell">
                <strong>¥{{ item.startingPrice }}/月起</strong>
                <span class="traffic-txt">{{ item.priceNote }}</span>
                <span v-if="item.payAsYouGo" class="payg-badge">含不限时流量包</span>
              </div>
            </td>
            <td>
              <div class="client-cell">
                <span class="client-badge" :class="'c-' + clientClass(item.clientSupport)">
                  {{ item.clientSupport }}
                </span>
                <span v-if="item.couponCode" class="coupon-mini">
                  码: <code>{{ item.couponCode }}</code>
                </span>
              </div>
            </td>
            <td>
              <div class="evidence-cell">
                <span class="speed-badge" :class="{ muted: item.speedRating === '待测' }">
                  {{ item.speedRating === '待测' ? '待测' : `评级 ${item.speedRating}` }}
                </span>
                <span v-if="getImgCount(item) > 0" class="img-badge">📷 {{ getImgCount(item) }}张抓包</span>
                <span v-else class="noimg-badge">文字档核查</span>
              </div>
            </td>
            <td>
              <div class="action-cell">
                <a :href="item.reviewUrl" class="link-review">深度评测</a>
                <a
                  v-if="item.affUrl"
                  :href="item.affUrl"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  class="link-visit"
                >
                  官网 →
                </a>
                <span v-else class="link-pending">入口待补充</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Responsive Card List -->
    <div class="mobile-only-cards">
      <div v-for="item in filteredAirports" :key="'m-' + item.id" class="mobile-rank-card">
        <div class="m-card-top">
          <div class="m-title-row">
            <span class="rank-badge" :class="{ top1: item.rank === 1, top10: item.rank <= 10 }">#{{ item.rank }}</span>
            <a :href="item.reviewUrl" class="brand-title-link">{{ item.name }}</a>
          </div>
          <span class="m-price">¥{{ item.startingPrice }}/月起</span>
        </div>
        <p class="m-tagline">{{ item.priceNote }}</p>
        <div class="m-tags-row">
          <span class="net-badge">{{ item.networkType }}</span>
          <span class="client-badge" :class="'c-' + clientClass(item.clientSupport)">{{ item.clientSupport }}</span>
          <span v-if="getImgCount(item) > 0" class="img-badge">📷 {{ getImgCount(item) }}图</span>
          <span v-if="item.couponCode" class="coupon-mini">码: <code>{{ item.couponCode }}</code></span>
        </div>
        <div class="m-actions">
          <a :href="item.reviewUrl" class="link-review">查看评测详情</a>
          <a
            v-if="item.affUrl"
            :href="item.affUrl"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            class="link-visit"
          >
            前往官网 →
          </a>
          <span v-else class="link-pending">入口待补充</span>
        </div>
      </div>
    </div>

    <div v-if="filteredAirports.length === 0" class="empty-state">
      未找到匹配筛选条件的服务商，请尝试切换“全部收录品牌”或重置筛选器。
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { airportsData } from '../../data/airportsData'
import type { AirportItem } from '../../data/airports/types'

const props = withDefaults(
  defineProps<{
    defaultScope?: 'top10' | 'all'
  }>(),
  {
    defaultScope: 'all'
  }
)

const scope = ref<'top10' | 'all'>(props.defaultScope)
const selectedNetwork = ref('all')
const payMode = ref('all')
const clientMode = ref('all')
const onlyWithImages = ref(false)
const searchQuery = ref('')

const networkFilters = [
  { label: '全部线路', value: 'all' },
  { label: 'IEPL 内网专线', value: 'IEPL' },
  { label: 'IPLC 专线', value: 'IPLC' },
  { label: 'BGP / 混合专线', value: 'mixed' }
]

function getImgCount(item: AirportItem): number {
  if (item.testGallery && item.testGallery.length > 0) return item.testGallery.length
  return item.speedtestImage ? 1 : 0
}

function clientClass(mode: AirportItem['clientSupport']): string {
  if (mode === '自研+第三方') return 'both'
  if (mode === '仅第三方订阅') return 'third'
  if (mode === '仅自研客户端') return 'own'
  return 'pending'
}

const filteredAirports = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return airportsData
    .filter(item => {
      if (scope.value === 'top10' && !item.isTop10 && item.rank > 10) return false

      if (selectedNetwork.value !== 'all') {
        if (selectedNetwork.value === 'mixed') {
          if (!['BGP中转', '混合专线', '直连/待核实'].includes(item.networkType)) return false
        } else if (item.networkType !== selectedNetwork.value) {
          return false
        }
      }

      if (payMode.value === 'monthly' && !item.monthlyPay) return false
      if (payMode.value === 'payg' && !item.payAsYouGo) return false

      if (clientMode.value !== 'all' && item.clientSupport !== clientMode.value) return false

      if (onlyWithImages.value && getImgCount(item) === 0) return false

      if (q) {
        const hay = `${item.name} ${item.id} ${item.tagline} ${item.couponCode || ''} ${item.altCouponCode || ''} ${item.protocols.join(' ')}`.toLowerCase()
        if (!hay.includes(q)) return false
      }

      return true
    })
    .slice()
    .sort((a, b) => a.rank - b.rank)
})
</script>

<style scoped>
.ranking-table-wrapper {
  margin: 1.5rem 0;
  background: #0F141B;
  border: 1px solid #1E293B;
  border-radius: 12px;
  padding: 1.15rem;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.8rem;
}

.scope-switch-group {
  display: inline-flex;
  background: #0B0E14;
  border: 1px solid #232E3F;
  border-radius: 8px;
  padding: 0.25rem;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.scope-btn {
  padding: 0.4rem 0.85rem;
  font-size: 0.84rem;
  font-weight: 700;
  color: #94A3B8;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.scope-btn.active {
  color: #091016;
  background: #00E5FF;
}

.search-box {
  flex: 1;
  min-width: 210px;
  max-width: 320px;
}

.ranking-search-input {
  width: 100%;
  box-sizing: border-box;
  background: #141B24;
  color: #E2E8F0;
  border: 1px solid #263344;
  border-radius: 6px;
  padding: 0.45rem 0.75rem;
  font-size: 0.84rem;
  outline: none;
}

.ranking-search-input:focus {
  border-color: #00E5FF;
}

.sub-filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid #1A2331;
}

.filter-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.f-pill {
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #94A3B8;
  background: #161D26;
  border: 1px solid #263140;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.f-pill:hover {
  color: #FFFFFF;
  border-color: #38BDF8;
}

.f-pill.active {
  background: rgba(0, 229, 255, 0.14);
  color: #00E5FF;
  border-color: #00E5FF;
  font-weight: 600;
}

.extra-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
}

.select-ctrl {
  background: #161D26;
  color: #CBD5E1;
  border: 1px solid #263140;
  border-radius: 6px;
  padding: 0.35rem 0.65rem;
  font-size: 0.8rem;
  outline: none;
  cursor: pointer;
}

.toggle-img-label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: #CBD5E1;
  cursor: pointer;
}

.result-meta {
  font-size: 0.78rem;
  color: #94A3B8;
  margin-bottom: 0.85rem;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.wiki-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 !important;
  display: table !important;
}

.wiki-table th {
  background: #151C26 !important;
  color: #94A3B8 !important;
  font-size: 0.78rem !important;
  font-weight: 600 !important;
  text-align: left !important;
  padding: 0.75rem 0.8rem !important;
  border-bottom: 1px solid #232F3F !important;
  white-space: nowrap;
}

.wiki-table td {
  padding: 0.85rem 0.8rem !important;
  border-bottom: 1px solid #19212C !important;
  vertical-align: middle !important;
  font-size: 0.84rem !important;
}

.wiki-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.brand-cell {
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 260px;
}

.brand-title-line {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.rank-badge {
  font-size: 0.7rem;
  font-weight: 800;
  color: #94A3B8;
  background: #1B2330;
  border: 1px solid #2A3648;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.rank-badge.top10 {
  color: #38BDF8;
  border-color: rgba(56, 189, 248, 0.35);
}

.rank-badge.top1 {
  color: #091016;
  background: #00E5FF;
  border-color: #00E5FF;
}

.brand-title-link {
  font-weight: 700;
  color: #FFFFFF !important;
  font-size: 0.94rem;
  text-decoration: none !important;
}

.brand-title-link:hover {
  color: #00E5FF !important;
}

.brand-sub {
  font-size: 0.73rem;
  color: #64748B;
  line-height: 1.35;
}

.net-cell,
.price-cell,
.client-cell,
.evidence-cell {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.net-badge {
  display: inline-block;
  width: fit-content;
  font-size: 0.74rem;
  font-weight: 600;
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.08);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.proto-txt,
.traffic-txt {
  font-size: 0.73rem;
  color: #94A3B8;
  max-width: 210px;
  line-height: 1.35;
}

.price-cell strong {
  color: #FFFFFF;
}

.payg-badge {
  font-size: 0.7rem;
  color: #34D399;
  font-weight: 600;
}

.client-badge {
  display: inline-block;
  width: fit-content;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.12rem 0.45rem;
  border-radius: 4px;
}

.client-badge.c-both { color: #34D399; background: rgba(16, 185, 129, 0.12); }
.client-badge.c-third { color: #38BDF8; background: rgba(56, 189, 248, 0.12); }
.client-badge.c-own { color: #FBBF24; background: rgba(245, 158, 11, 0.12); }
.client-badge.c-pending { color: #94A3B8; background: #1A222E; }

.coupon-mini {
  font-size: 0.72rem;
  color: #CBD5E1;
}

.coupon-mini code {
  color: #00E5FF !important;
  font-weight: 700;
}

.speed-badge {
  font-weight: 700;
  color: #34D399;
  font-size: 0.82rem;
}

.speed-badge.muted {
  color: #94A3B8;
  font-weight: 500;
}

.img-badge {
  font-size: 0.72rem;
  color: #38BDF8;
}

.noimg-badge {
  font-size: 0.72rem;
  color: #64748B;
}

.action-cell {
  display: flex;
  gap: 0.45rem;
  align-items: center;
  white-space: nowrap;
}

.link-review {
  font-size: 0.78rem;
  color: #CBD5E1 !important;
  text-decoration: none !important;
  border: 1px solid #2A3646;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
}

.link-review:hover {
  border-color: #38BDF8;
  color: #FFFFFF !important;
}

.link-visit {
  font-size: 0.78rem;
  font-weight: 600;
  color: #0B0D10 !important;
  background: #00E5FF;
  text-decoration: none !important;
  padding: 0.3rem 0.65rem;
  border-radius: 5px;
}

.link-visit:hover {
  background: #33EBFF;
}

.link-pending {
  font-size: 0.74rem;
  color: #94A3B8;
  border: 1px dashed #334155;
  padding: 0.25rem 0.55rem;
  border-radius: 5px;
}

.mobile-only-cards {
  display: none;
}

.mobile-rank-card {
  background: #141B24;
  border: 1px solid #222E3E;
  border-radius: 10px;
  padding: 0.9rem;
  margin-bottom: 0.75rem;
}

.m-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.m-title-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.m-price {
  font-size: 0.88rem;
  font-weight: 800;
  color: #00E5FF;
  white-space: nowrap;
}

.m-tagline {
  margin: 0 0 0.55rem 0 !important;
  font-size: 0.76rem;
  color: #94A3B8;
  line-height: 1.45;
}

.m-tags-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.7rem;
}

.m-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.55rem;
  align-items: center;
  border-top: 1px solid #1E2836;
  padding-top: 0.65rem;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #64748B;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only-cards {
    display: block;
  }
  .ranking-table-wrapper {
    padding: 0.9rem;
  }
}
</style>
