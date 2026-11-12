<template>
  <!-- 1. Commercial / Guide / Scenario Pages: Context-matched recommendation card -->
  <div v-if="mode === 'commercial' && matchedAirport" class="contextual-recommend-box">
    <div class="box-badge">
      <span class="pulse-dot"></span>
      <span>结合当前场景的实测参考服务商（含推广合作披露）</span>
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
          <span>测速评级: <strong class="speed-val">{{ matchedAirport.speedRating }}</strong></span>
        </div>
      </div>

      <div class="box-actions">
        <div v-if="matchedAirport.couponCode" class="coupon-chip" @click="copyCoupon">
          <code>{{ matchedAirport.couponCode }}</code>
          <span class="chip-hint">{{ copied ? '已复制' : '券' }}</span>
        </div>
        <a :href="matchedAirport.reviewUrl" class="box-btn-review">查看评测</a>
        <a :href="matchedAirport.affUrl" target="_blank" rel="noopener noreferrer nofollow sponsored" class="box-btn-visit">
          官网直达 →
        </a>
      </div>
    </div>
  </div>

  <!-- 2. Troubleshooting Pages: Problem-first pathway -->
  <div v-else-if="mode === 'troubleshooting'" class="contextual-pathway-box pathway-trouble">
    <div class="pathway-label">下一步排查与线路稳定性对照</div>
    <p class="pathway-text">
      若已完成本地时钟同步、防火墙放行与订阅刷新仍持续报错或超时，通常与公网直连被阻断或节点超售有关。
    </p>
    <div class="pathway-links">
      <a href="/troubleshooting/" class="pathway-link">返回故障排查总览</a>
      <a href="/navigation/ranking" class="pathway-link">查看 2026 稳定性排行榜</a>
      <a href="/recommend/pay-as-you-go" class="pathway-link">了解不限时备用应急方案 →</a>
    </div>
  </div>

  <!-- 3. Informational / Encyclopedia Pages: Knowledge-to-selection pathway -->
  <div v-else-if="mode === 'informational'" class="contextual-pathway-box">
    <div class="pathway-label">延伸阅读与选型路径</div>
    <p class="pathway-text">
      了解底层原理与配置规范后，你可以继续查看客户端实操教程，或结合自身网络需求对比不同线路与服务商。
    </p>
    <div class="pathway-links">
      <a href="/guides/" class="pathway-link">选型决策指南</a>
      <a href="/clients/clash-verge/import-subscription" class="pathway-link">Clash Verge 订阅导入教程</a>
      <a href="/recommend/" class="pathway-link">2026 机场推荐专题 →</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { airportsData } from '../../data/airportsData'

const props = defineProps<{
  targetId?: string
  scenario?: string
  network?: string
  protocol?: string
}>()

const { frontmatter } = useData()
const route = useRoute()
const copied = ref(false)

const mode = computed<'none' | 'commercial' | 'troubleshooting' | 'informational'>(() => {
  if (props.targetId) return 'commercial'

  const path = route.path.replace(/\.html$/, '')
  // Never inject bottom promo cards on reviews (already has header & coupon), about/legal, or root
  if (
    path === '/' ||
    path.startsWith('/reviews/') ||
    path.startsWith('/about/') ||
    path.startsWith('/editorial-policy/') ||
    path.startsWith('/sources/') ||
    path.startsWith('/disclaimer/') ||
    path.startsWith('/privacy/') ||
    path.startsWith('/terms/') ||
    path === '/404'
  ) {
    return 'none'
  }

  if (
    path.startsWith('/troubleshooting/') ||
    path.includes('timeout') ||
    path.includes('failed') ||
    path.includes('cannot-') ||
    path.includes('tls-error') ||
    path.includes('port-conflict')
  ) {
    return 'troubleshooting'
  }

  if (
    path.startsWith('/recommend/') ||
    path.startsWith('/navigation/') ||
    path.startsWith('/guides/') ||
    path.startsWith('/scenarios/')
  ) {
    return 'commercial'
  }

  return 'informational'
})

const matchedAirport = computed(() => {
  const linkableAirports = airportsData.filter(a => Boolean(a.affUrl))
  const pool = linkableAirports.length > 0 ? linkableAirports : airportsData

  if (props.targetId) {
    const exact = airportsData.find(a => a.id === props.targetId)
    if (exact && exact.affUrl) return exact
  }

  const queryScenario = props.scenario || frontmatter.value.scenario
  const queryNetwork = props.network || frontmatter.value.networkType
  const queryProtocol = props.protocol || frontmatter.value.protocol

  if (queryNetwork) {
    const found = pool.find(a => a.networkType.toLowerCase().includes(queryNetwork.toLowerCase()))
    if (found) return found
  }

  if (queryProtocol) {
    const found = pool.find(a => a.protocols.some(p => p.toLowerCase() === queryProtocol.toLowerCase()))
    if (found) return found
  }

  if (queryScenario) {
    const found = pool.find(a => a.scenarios.some(s => s.toLowerCase().includes(queryScenario.toLowerCase())))
    if (found) return found
  }

  return pool[0]
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
  letter-spacing: 0.02em;
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
  min-width: 240px;
}

.box-title {
  margin: 0 0 0.25rem 0 !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  line-height: 1.45;
}

.box-specs {
  font-size: 0.78rem;
  color: #64748B;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
}

.price-val { color: #00E5FF; }
.net-val { color: #38BDF8; }
.speed-val { color: #34D399; }

.box-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
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

.box-btn-review {
  background: #161B22;
  color: #CBD5E1 !important;
  border: 1px solid #283342;
  font-size: 0.82rem;
  padding: 0.38rem 0.75rem;
  border-radius: 6px;
  text-decoration: none !important;
}

.box-btn-review:hover {
  border-color: #38BDF8;
  color: #FFFFFF !important;
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

.contextual-pathway-box {
  margin: 2rem 0;
  background: #0F141B;
  border: 1px solid #1E2734;
  border-left: 3px solid #38BDF8;
  border-radius: 8px;
  padding: 1rem 1.25rem;
}

.pathway-trouble {
  border-left-color: #F59E0B;
}

.pathway-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: #38BDF8;
  margin-bottom: 0.4rem;
}

.pathway-trouble .pathway-label {
  color: #FBBF24;
}

.pathway-text {
  font-size: 0.85rem;
  color: #94A3B8;
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.pathway-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.pathway-link {
  font-size: 0.82rem;
  color: #E2E8F0 !important;
  background: #161D27;
  border: 1px solid #253244;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  text-decoration: none !important;
  transition: all 0.15s ease;
}

.pathway-link:hover {
  border-color: #00E5FF;
  color: #00E5FF !important;
}
</style>
