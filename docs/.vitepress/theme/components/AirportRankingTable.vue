<template>
  <div class="ranking-container">
    <!-- Filter Controls -->
    <div class="filter-toolbar">
      <div class="filter-group">
        <span class="filter-label">线路类型：</span>
        <button 
          v-for="type in networkOptions" 
          :key="type"
          type="button"
          class="filter-btn"
          :class="{ active: selectedNetwork === type }"
          @click="selectedNetwork = type"
        >
          {{ type }}
        </button>
      </div>

      <div class="filter-group">
        <span class="filter-label">付费模式：</span>
        <button 
          type="button" 
          class="filter-btn" 
          :class="{ active: payMode === 'all' }" 
          @click="payMode = 'all'"
        >全部</button>
        <button 
          type="button" 
          class="filter-btn" 
          :class="{ active: payMode === 'monthly' }" 
          @click="payMode = 'monthly'"
        >支持按月付</button>
        <button 
          type="button" 
          class="filter-btn" 
          :class="{ active: payMode === 'payg' }" 
          @click="payMode = 'payg'"
        >不限时按量</button>
      </div>
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <table class="ranking-table">
        <thead>
          <tr>
            <th style="width: 60px;">排名</th>
            <th>服务商品牌</th>
            <th>线路架构</th>
            <th>晚高峰评级</th>
            <th>起步月付</th>
            <th>核心特色与解锁</th>
            <th style="text-align: right;">直达 / 评测</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredList" :key="item.id">
            <td class="rank-col">
              <span class="rank-badge" :class="`rank-${index + 1}`">{{ index + 1 }}</span>
            </td>
            <td class="name-col">
              <div class="brand-cell">
                <a :href="item.reviewUrl" class="cell-title">{{ item.name }}</a>
                <span v-if="item.recommendedBadge" class="cell-tag">{{ item.recommendedBadge }}</span>
              </div>
            </td>
            <td>
              <span class="network-tag">{{ item.networkType }}</span>
            </td>
            <td>
              <span class="speed-tag">{{ item.speedRating }}</span>
            </td>
            <td>
              <div class="price-cell">
                <span class="price-num">¥{{ item.startingPrice }}</span>
                <span class="price-period">/月起</span>
              </div>
            </td>
            <td>
              <div class="features-cell">
                <span v-for="sc in item.scenarios.slice(0, 3)" :key="sc" class="mini-sc">{{ sc }}</span>
              </div>
            </td>
            <td style="text-align: right;">
              <div class="action-cell">
                <a :href="item.affUrl" target="_blank" rel="noopener noreferrer nofollow sponsored" class="table-btn-visit">官网直达</a>
                <a :href="item.reviewUrl" class="table-btn-review">评测</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { airportsData } from '../../data/airportsData'

const selectedNetwork = ref('全部')
const payMode = ref<'all' | 'monthly' | 'payg'>('all')

const networkOptions = ['全部', 'IEPL', 'IPLC', 'BGP中转']

const filteredList = computed(() => {
  return airportsData.filter(item => {
    if (selectedNetwork.value !== '全部') {
      if (selectedNetwork.value === 'IEPL' && item.networkType !== 'IEPL' && item.networkType !== '混合专线') return false
      if (selectedNetwork.value === 'IPLC' && item.networkType !== 'IPLC') return false
      if (selectedNetwork.value === 'BGP中转' && item.networkType !== 'BGP中转' && item.networkType !== '混合专线') return false
    }
    if (payMode.value === 'monthly' && !item.monthlyPay) return false
    if (payMode.value === 'payg' && !item.payAsYouGo) return false
    return true
  })
})
</script>

<style scoped>
.ranking-container {
  margin: 1.75rem 0;
  background: #11151A;
  border: 1px solid #1E2734;
  border-radius: 12px;
  padding: 1.25rem;
}

.filter-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #1A222E;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.filter-label {
  font-size: 0.82rem;
  color: #64748B;
}

.filter-btn {
  font-size: 0.8rem;
  color: #94A3B8;
  background: #161B22;
  border: 1px solid #232D3B;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.filter-btn:hover {
  color: #FFFFFF;
  border-color: #38BDF8;
}

.filter-btn.active {
  color: #0B0D10;
  background: #00E5FF;
  border-color: #00E5FF;
  font-weight: 600;
}

.table-responsive {
  overflow-x: auto;
}

.ranking-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}

.ranking-table th {
  background: #161B22;
  color: #8A96A6;
  font-weight: 600;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid #242E3C;
  text-align: left;
}

.ranking-table td {
  padding: 0.85rem;
  border-bottom: 1px solid #1A222E;
  color: #CBD5E1;
  vertical-align: middle;
}

.ranking-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.rank-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  background: #1A222E;
  color: #94A3B8;
}

.rank-1 { background: rgba(245, 158, 11, 0.2); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.4); }
.rank-2 { background: rgba(0, 229, 255, 0.15); color: #00E5FF; border: 1px solid rgba(0, 229, 255, 0.3); }
.rank-3 { background: rgba(56, 189, 248, 0.15); color: #38BDF8; border: 1px solid rgba(56, 189, 248, 0.3); }

.brand-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cell-title {
  font-weight: 600;
  color: #FFFFFF !important;
  text-decoration: none !important;
}

.cell-title:hover {
  color: #00E5FF !important;
}

.cell-tag {
  font-size: 0.7rem;
  color: #00E5FF;
}

.network-tag {
  font-size: 0.78rem;
  background: #18202C;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  border: 1px solid #232D3B;
  color: #38BDF8;
}

.speed-tag {
  font-weight: 700;
  color: #34D399;
}

.price-num {
  font-size: 1rem;
  font-weight: 700;
  color: #00E5FF;
}

.price-period {
  font-size: 0.72rem;
  color: #64748B;
}

.features-cell {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.mini-sc {
  font-size: 0.72rem;
  background: #141922;
  color: #94A3B8;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
}

.action-cell {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.table-btn-visit {
  background: #00E5FF;
  color: #0B0D10 !important;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  font-size: 0.78rem;
  text-decoration: none !important;
}

.table-btn-visit:hover {
  background: #33EBFF;
}

.table-btn-review {
  background: #18202C;
  color: #94A3B8 !important;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.78rem;
  text-decoration: none !important;
}

.table-btn-review:hover {
  color: #FFFFFF !important;
}
</style>
