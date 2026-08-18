<template>
  <div class="speedtest-observatory" v-if="airport && airport.speedtestImage">
    <div class="observatory-header">
      <div class="header-left">
        <span class="pulse-indicator"></span>
        <span class="header-title">📊 节点测速实测报告 (Performance Observatory)</span>
      </div>
      <div class="header-right">
        <span class="status-badge measured">MEASURED DATA</span>
        <span class="test-time">测试批次: {{ airport.testedAt || '2026-08-11' }} (CST)</span>
      </div>
    </div>

    <!-- Meta specs strip -->
    <div class="observatory-specs">
      <div class="spec-item">
        <span class="spec-label">测试环境</span>
        <span class="spec-value">Clash / MAI-TEST-BOT</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">协议架构</span>
        <span class="spec-value">{{ airport.protocols.join(' / ') }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">线路传输</span>
        <span class="spec-value highlight">{{ airport.networkType }} 专线</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">测速评级</span>
        <span class="spec-value score">{{ airport.speedRating }} 级</span>
      </div>
    </div>

    <!-- Image Container with Zoom Click -->
    <div class="speedtest-image-box" @click="isOpen = true">
      <img 
        :src="airport.speedtestImage" 
        :alt="`${airport.name} 节点测速实测数据图`" 
        class="speedtest-img" 
        loading="lazy"
      />
      <div class="image-overlay">
        <span class="overlay-text">🔍 点击查看高清测速原图</span>
      </div>
    </div>

    <div class="observatory-footer">
      <span>💡 数据说明：本图为 2026 年 8 月实测抓包快照，客观反映各地区落地延迟与并发吞吐表现。</span>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="isOpen" class="lightbox-modal" @click="isOpen = false">
      <div class="lightbox-content" @click.stop>
        <button class="close-btn" @click="isOpen = false">✕ 关闭</button>
        <img :src="airport.speedtestImage" :alt="airport.name" class="lightbox-img" />
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

const isOpen = ref(false)
</script>

<style scoped>
.speedtest-observatory {
  background: #0B0F14;
  border: 1px solid #1E293B;
  border-radius: 10px;
  overflow: hidden;
  margin: 1.75rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.observatory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  background: #101620;
  border-bottom: 1px solid #1E293B;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pulse-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00E5FF;
  box-shadow: 0 0 8px #00E5FF;
}

.header-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: 0.02em;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.status-badge.measured {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: rgba(0, 229, 255, 0.12);
  color: #00E5FF;
  border: 1px solid rgba(0, 229, 255, 0.35);
  letter-spacing: 0.05em;
}

.test-time {
  font-size: 0.78rem;
  color: #8E9AA8;
  font-family: monospace;
}

.observatory-specs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1px;
  background: #1E293B;
  border-bottom: 1px solid #1E293B;
}

.spec-item {
  background: #0E141D;
  padding: 0.65rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.spec-label {
  font-size: 0.72rem;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.spec-value {
  font-size: 0.86rem;
  font-weight: 600;
  color: #CBD5E1;
}

.spec-value.highlight {
  color: #38BDF8;
}

.spec-value.score {
  color: #10B981;
}

.speedtest-image-box {
  position: relative;
  background: #05070A;
  padding: 1rem;
  cursor: zoom-in;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
}

.speedtest-img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  transition: transform 0.2s ease;
  border: 1px solid #1A222E;
}

.speedtest-image-box:hover .speedtest-img {
  transform: scale(1.01);
}

.image-overlay {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: rgba(11, 15, 20, 0.85);
  border: 1px solid rgba(0, 229, 255, 0.4);
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  pointer-events: none;
  backdrop-filter: blur(4px);
}

.overlay-text {
  font-size: 0.78rem;
  color: #00E5FF;
  font-weight: 600;
}

.observatory-footer {
  padding: 0.65rem 1.25rem;
  background: #0E141D;
  font-size: 0.78rem;
  color: #64748B;
}

/* Lightbox Modal */
.lightbox-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-btn {
  align-self: flex-end;
  background: #1E293B;
  color: #FFFFFF;
  border: 1px solid #334155;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
}

.close-btn:hover {
  background: #00E5FF;
  color: #000000;
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #334155;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
}
</style>
