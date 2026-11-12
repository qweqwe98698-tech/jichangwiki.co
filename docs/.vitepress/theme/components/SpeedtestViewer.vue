<template>
  <div class="speedtest-viewer">
    <div class="viewer-header">
      <div class="header-left">
        <span class="pulse-indicator" :class="{ muted: galleryItems.length === 0 }"></span>
        <div>
          <h4 class="viewer-title">{{ airport.name }} · 测速抓包与流媒体解锁证据库</h4>
          <span class="viewer-sub">
            采集基准：{{ activeImage ? activeImage.testedAt : (airport.testedAt || '文字档基准参考') }}
            · {{ activeImage ? activeImage.toolEnv : (airport.testToolEnv || '公开测速/官网核验资料') }}
          </span>
        </div>
      </div>
      <div class="header-badges">
        <span v-if="galleryItems.length > 0" class="count-pill">{{ galleryItems.length }} 张实测图</span>
        <span class="badge-speed">评级 {{ airport.speedRating }}</span>
      </div>
    </div>

    <!-- Multi-tab Image Gallery -->
    <template v-if="galleryItems.length > 0 && activeImage">
      <div v-if="galleryItems.length > 1" class="gallery-tabs" role="tablist" aria-label="实测图片切换">
        <button
          v-for="(item, idx) in galleryItems"
          :key="item.src + idx"
          type="button"
          class="gallery-tab-btn"
          :class="{ active: idx === activeIdx }"
          role="tab"
          :aria-selected="idx === activeIdx"
          @click="activeIdx = idx"
        >
          <span class="kind-dot" :class="'kind-' + item.kind"></span>
          {{ item.label }}
        </button>
      </div>

      <div class="image-wrapper" @click="isZoomed = true" title="点击放大查看完整高分辨率原图">
        <img
          :src="activeImage.src"
          :alt="activeImage.alt"
          loading="lazy"
          decoding="async"
          class="speedtest-img"
        />
        <div class="zoom-overlay">
          <span class="zoom-icon">🔍 点击放大查看原图（{{ activeIdx + 1 }}/{{ galleryItems.length }}）</span>
        </div>
      </div>

      <div class="viewer-caption">
        <p>{{ activeImage.caption }}</p>
      </div>
    </template>

    <!-- Honest Empty Image State -->
    <div v-else class="no-image-notice">
      <div class="notice-badge">暂无独立抓包图片</div>
      <p>
        本站当前尚未采集或验证到 <strong>{{ airport.name }}</strong> 的可公开校验原生测速图。
        严禁使用其他品牌或误标图片拼凑，下方仅客观展示来源文档收录的文字档基准测试表或商家/历史信息供参考。
      </p>
    </div>

    <!-- Structured Benchmarks Table -->
    <div v-if="airport.benchmarks && airport.benchmarks.length > 0" class="benchmarks-block">
      <div class="sub-block-header">
        <h5>📊 区域节点参考测速表</h5>
        <span class="disclaimer-tag">{{ airport.benchmarkDisclaimer || '参考测速数据 · 受本地宽带与时段影响' }}</span>
      </div>
      <div class="bench-table-wrap">
        <table class="bench-table">
          <thead>
            <tr>
              <th>目标区域</th>
              <th>参考延迟</th>
              <th>下载/吞吐参考</th>
              <th>数据采集标注</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rIdx) in airport.benchmarks" :key="row.region + rIdx">
              <td class="region-cell">{{ row.region }}</td>
              <td class="latency-cell">{{ row.latency }}</td>
              <td class="speed-cell">{{ row.download }}</td>
              <td class="note-cell">{{ row.dateNote }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Structured Unlock Summary -->
    <div v-if="airport.unlockSummary" class="unlock-block">
      <div class="sub-block-header">
        <h5>🔓 流媒体与 AI 服务可用性矩阵</h5>
        <span class="disclaimer-tag">受出口 IP 轮换影响，以实时连接结果为准</span>
      </div>

      <div class="unlock-grid">
        <div v-if="airport.unlockSummary.supported?.length" class="unlock-col unlock-pass">
          <span class="unlock-col-title">✓ 支持 / 解锁表现较好</span>
          <div class="unlock-pills">
            <span v-for="svc in airport.unlockSummary.supported" :key="svc" class="u-pill pass">{{ svc }}</span>
          </div>
        </div>
        <div v-if="airport.unlockSummary.nodeDependent?.length" class="unlock-col unlock-warn">
          <span class="unlock-col-title">◐ 视具体地区节点而定</span>
          <div class="unlock-pills">
            <span v-for="svc in airport.unlockSummary.nodeDependent" :key="svc" class="u-pill warn">{{ svc }}</span>
          </div>
        </div>
        <div v-if="airport.unlockSummary.failed?.length" class="unlock-col unlock-fail">
          <span class="unlock-col-title">✕ 实测受限 / 多节点失败</span>
          <div class="unlock-pills">
            <span v-for="svc in airport.unlockSummary.failed" :key="svc" class="u-pill fail">{{ svc }}</span>
          </div>
        </div>
      </div>

      <p v-if="airport.unlockSummary.note" class="unlock-note">
        <strong>补充实测注释：</strong>{{ airport.unlockSummary.note }}
      </p>
    </div>

    <!-- Fullscreen Lightbox Modal -->
    <Teleport to="body">
      <div v-if="isZoomed && activeImage" class="lightbox-backdrop" @click="isZoomed = false">
        <div class="lightbox-content" @click.stop>
          <div class="lightbox-toolbar">
            <span class="lightbox-title">{{ airport.name }} — {{ activeImage.label }} ({{ activeIdx + 1 }}/{{ galleryItems.length }})</span>
            <div class="lightbox-controls">
              <button
                v-if="galleryItems.length > 1"
                type="button"
                class="lb-nav-btn"
                @click="prevImage"
                aria-label="上一张测速图"
              >‹ 上一张</button>
              <button
                v-if="galleryItems.length > 1"
                type="button"
                class="lb-nav-btn"
                @click="nextImage"
                aria-label="下一张测速图"
              >下一张 ›</button>
              <button type="button" class="lightbox-close" @click="isZoomed = false" aria-label="关闭大图">✕</button>
            </div>
          </div>
          <img :src="activeImage.src" :alt="activeImage.alt" class="lightbox-img" />
          <div class="lightbox-meta">
            <span>{{ activeImage.testedAt }} · {{ activeImage.toolEnv }}</span>
            <p class="lightbox-caption">{{ activeImage.caption }}</p>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { AirportItem, TestGalleryItem } from '../../data/airports/types'

const props = defineProps<{
  airport: AirportItem
}>()

const activeIdx = ref(0)
const isZoomed = ref(false)

const galleryItems = computed<TestGalleryItem[]>(() => {
  if (props.airport.testGallery && props.airport.testGallery.length > 0) {
    return props.airport.testGallery
  }
  if (props.airport.speedtestImage) {
    return [
      {
        label: '节点测速实测图',
        src: props.airport.speedtestImage,
        alt: `${props.airport.name} 节点测速实测原图（${props.airport.testedAt || '实测'}）`,
        testedAt: props.airport.testedAt || '单日独立实测',
        toolEnv: props.airport.testToolEnv || '公开高速测速环境',
        kind: 'speedtest',
        caption: `上图为 ${props.airport.name}（${props.airport.networkType}）节点测速实测快照，完整保留全节点测试表现与零速度异常状态，供横向核查。`
      }
    ]
  }
  return []
})

const activeImage = computed(() => galleryItems.value[activeIdx.value] || null)

watch(() => props.airport.id, () => {
  activeIdx.value = 0
  isZoomed.value = false
})

function prevImage() {
  if (galleryItems.value.length <= 1) return
  activeIdx.value = (activeIdx.value - 1 + galleryItems.value.length) % galleryItems.value.length
}

function nextImage() {
  if (galleryItems.value.length <= 1) return
  activeIdx.value = (activeIdx.value + 1) % galleryItems.value.length
}

function onKeydown(e: KeyboardEvent) {
  if (!isZoomed.value) return
  if (e.key === 'Escape') isZoomed.value = false
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.speedtest-viewer {
  margin: 1.75rem 0;
  background: #0F141B;
  border: 1px solid #1E293B;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
}

.viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 0.9rem 1.25rem;
  background: #141B24;
  border-bottom: 1px solid #1E293B;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.pulse-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 8px #10B981;
  flex-shrink: 0;
}

.pulse-indicator.muted {
  background: #64748B;
  box-shadow: none;
}

.viewer-title {
  margin: 0 !important;
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  border: none !important;
  padding: 0 !important;
}

.viewer-sub {
  display: block;
  font-size: 0.75rem;
  color: #94A3B8;
  word-break: break-word;
}

.header-badges {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.count-pill {
  font-size: 0.74rem;
  font-weight: 600;
  color: #38BDF8;
  background: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 0.2rem 0.55rem;
  border-radius: 5px;
}

.badge-speed {
  font-size: 0.76rem;
  font-weight: 700;
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.3);
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
}

.gallery-tabs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #0C1016;
  border-bottom: 1px solid #1C2533;
  overflow-x: auto;
  scrollbar-width: thin;
}

.gallery-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  padding: 0.4rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94A3B8;
  background: #141B24;
  border: 1px solid #253142;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.gallery-tab-btn:hover {
  color: #E2E8F0;
  border-color: #38BDF8;
}

.gallery-tab-btn.active {
  color: #091016;
  background: #00E5FF;
  border-color: #00E5FF;
}

.kind-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.kind-speedtest { background: #38BDF8; }
.kind-unlock { background: #34D399; }
.kind-mixed { background: #FBBF24; }
.gallery-tab-btn.active .kind-dot { background: #091016; }

.image-wrapper {
  position: relative;
  cursor: zoom-in;
  background: #080A0E;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
}

.speedtest-img {
  max-width: 100%;
  max-height: 540px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 6px;
  transition: opacity 0.2s ease;
}

.zoom-overlay {
  position: absolute;
  bottom: 14px;
  right: 14px;
  background: rgba(11, 13, 16, 0.85);
  border: 1px solid #303D4E;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  backdrop-filter: blur(4px);
}

.zoom-icon {
  font-size: 0.76rem;
  color: #E2E8F0;
}

.viewer-caption {
  padding: 0.75rem 1.25rem;
  background: #111720;
  border-top: 1px solid #1E293B;
}

.viewer-caption p {
  margin: 0 !important;
  font-size: 0.84rem;
  color: #CBD5E1;
  line-height: 1.6;
}

.no-image-notice {
  padding: 1.15rem 1.25rem;
  background: #10161F;
  border-bottom: 1px solid #1E293B;
}

.notice-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  color: #FBBF24;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.3);
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.no-image-notice p {
  margin: 0 !important;
  font-size: 0.85rem;
  color: #94A3B8;
  line-height: 1.65;
}

/* Benchmarks */
.benchmarks-block,
.unlock-block {
  padding: 1.1rem 1.25rem;
  border-top: 1px solid #1C2533;
  background: #0D1219;
}

.sub-block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.85rem;
}

.sub-block-header h5 {
  margin: 0 !important;
  font-size: 0.92rem !important;
  font-weight: 700 !important;
  color: #F8FAFC !important;
  border: none !important;
  padding: 0 !important;
}

.disclaimer-tag {
  font-size: 0.72rem;
  color: #94A3B8;
  background: #161E29;
  border: 1px solid #263344;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
}

.bench-table-wrap {
  width: 100%;
  overflow-x: auto;
  border: 1px solid #1E293B;
  border-radius: 8px;
}

.bench-table {
  width: 100%;
  min-width: 480px;
  border-collapse: collapse;
  margin: 0 !important;
  font-size: 0.84rem;
}

.bench-table th {
  text-align: left;
  background: #141B24;
  color: #94A3B8;
  font-weight: 600;
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid #1E293B;
}

.bench-table td {
  padding: 0.6rem 0.85rem;
  border-bottom: 1px solid #17202C;
  color: #CBD5E1;
}

.bench-table tr:last-child td {
  border-bottom: none;
}

.region-cell {
  font-weight: 600;
  color: #F1F5F9 !important;
}

.latency-cell {
  color: #38BDF8 !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.speed-cell {
  color: #34D399 !important;
  font-weight: 600;
}

.note-cell {
  font-size: 0.78rem;
  color: #94A3B8 !important;
}

/* Unlock Grid */
.unlock-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.75rem;
}

.unlock-col {
  padding: 0.75rem 0.9rem;
  border-radius: 8px;
  border: 1px solid #1E293B;
  background: #121822;
}

.unlock-col-title {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 0.55rem;
}

.unlock-pass .unlock-col-title { color: #34D399; }
.unlock-warn .unlock-col-title { color: #FBBF24; }
.unlock-fail .unlock-col-title { color: #F87171; }

.unlock-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.u-pill {
  font-size: 0.74rem;
  padding: 0.18rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

.u-pill.pass {
  color: #A7F3D0;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.u-pill.warn {
  color: #FDE68A;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.u-pill.fail {
  color: #FECACA;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.25);
}

.unlock-note {
  margin: 0.85rem 0 0 0 !important;
  font-size: 0.82rem;
  color: #CBD5E1;
  background: #141B24;
  border-left: 3px solid #38BDF8;
  padding: 0.6rem 0.85rem;
  border-radius: 0 6px 6px 0;
  line-height: 1.6;
}

/* Lightbox */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(3, 5, 8, 0.92);
  backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
}

.lightbox-content {
  max-width: 95vw;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #0F141B;
  border: 1px solid #243040;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.85);
}

.lightbox-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.lightbox-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #FFFFFF;
}

.lightbox-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lb-nav-btn,
.lightbox-close {
  background: #18202B;
  color: #E2E8F0;
  border: 1px solid #2E3B4E;
  border-radius: 6px;
  padding: 0.35rem 0.7rem;
  font-size: 0.82rem;
  cursor: pointer;
}

.lb-nav-btn:hover,
.lightbox-close:hover {
  border-color: #00E5FF;
  color: #FFFFFF;
}

.lightbox-img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 6px;
  background: #05070A;
}

.lightbox-meta {
  font-size: 0.8rem;
  color: #94A3B8;
}

.lightbox-caption {
  margin: 0.35rem 0 0 0 !important;
  color: #E2E8F0;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .viewer-header,
  .gallery-tabs,
  .benchmarks-block,
  .unlock-block {
    padding-left: 0.9rem;
    padding-right: 0.9rem;
  }
}
</style>
