<template>
  <div v-if="matchedAirport" class="contextual-recommend-box">
    <div class="box-badge">
      <span class="pulse-dot"></span>
      <span>针对当前知识点的精选服务商推荐</span>
    </div>

    <div class="box-content">
      <div class="box-info">
        <h4 class="box-title">
          {{ matchedAirport.name }}
          <span class="box-tag">{{ matchedAirport.recommendedBadge || matchedAirport.networkType }}</span>
        </h4>
        <p class="box-desc">{{ matchedAirport.tagline }}</p>
        <div class="box-specs">
          <span>起步月付: <strong class="price-val">¥{{ matchedAirport.startingPrice }}/月</strong></span>
          <span>•</span>
          <span>线路: <strong class="net-val">{{ matchedAirport.networkType }}</strong></span>
          <span>•</span>
          <span>晚高峰: <strong class="speed-val">{{ matchedAirport.speedRating }}</strong></span>
        </div>
      </div>

      <div class="box-actions">
        <div v-if="matchedAirport.couponCode" class="coupon-chip" @click="copyCoupon">
          <code>{{ matchedAirport.couponCode }}</code>
          <span class="chip-hint">{{ copied ? '已复制' : '券' }}</span>
        </div>
        <a :href="matchedAirport.affUrl" target="_blank" rel="noopener noreferrer nofollow sponsored" class="box-btn-visit">
          直达官网注册 →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import { airportsData } from '../../data/airportsData'

const props = defineProps<{
  targetId?: string
  scenario?: string
  network?: string
  protocol?: string
}>()

const { frontmatter } = useData()
const copied = ref(false)

const matchedAirport = computed(() => {
  if (props.targetId) {
    return airportsData.find(a => a.id === props.targetId) || airportsData[0]
  }

  const queryScenario = props.scenario || frontmatter.value.scenario
  const queryNetwork = props.network || frontmatter.value.networkType
  const queryProtocol = props.protocol || frontmatter.value.protocol

  if (queryNetwork) {
    const found = airportsData.find(a => a.networkType.toLowerCase().includes(queryNetwork.toLowerCase()))
    if (found) return found
  }

  if (queryProtocol) {
    const found = airportsData.find(a => a.protocols.some(p => p.toLowerCase() === queryProtocol.toLowerCase()))
    if (found) return found
  }

  if (queryScenario) {
    const found = airportsData.find(a => a.scenarios.some(s => s.toLowerCase().includes(queryScenario.toLowerCase())))
    if (found) return found
  }

  return airportsData[0]
})

const copyCoupon = () => {
  if (matchedAirport.value?.couponCode) {
    navigator.clipboard.writeText(matchedAirport.value.couponCode)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.contextual-recommend-box {
  margin: 2rem 0;
  background: #11161E;
  border: 1px solid #1E2938;
  border-left: 3px solid #00E5FF;
  border-radius: 8px;
  padding: 1.1rem 1.25rem;
}

.box-badge {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #00E5FF;
  margin-bottom: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00E5FF;
}

.box-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.box-info {
  flex: 1;
  min-width: 260px;
}

.box-title {
  margin: 0 0 0.25rem 0 !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none !important;
  padding: 0 !important;
}

.box-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.25);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.box-desc {
  font-size: 0.84rem;
  color: #94A3B8;
  margin: 0 0 0.4rem 0;
  line-height: 1.4;
}

.box-specs {
  font-size: 0.78rem;
  color: #64748B;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-val { color: #00E5FF; }
.net-val { color: #38BDF8; }
.speed-val { color: #34D399; }

.box-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.coupon-chip {
  background: #161D27;
  border: 1px dashed #38BDF8;
  padding: 0.3rem 0.55rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.coupon-chip code {
  color: #38BDF8 !important;
  font-size: 0.78rem;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
}

.chip-hint {
  font-size: 0.68rem;
  color: #94A3B8;
}

.box-btn-visit {
  background: #00E5FF;
  color: #0B0D10 !important;
  font-size: 0.84rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  text-decoration: none !important;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.box-btn-visit:hover {
  background: #33EBFF;
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.35);
}
</style>
