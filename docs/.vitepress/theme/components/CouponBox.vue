<template>
  <div class="coupon-box" @click="copyCoupon">
    <div class="coupon-left">
      <span class="coupon-label">专属优惠福利</span>
      <div class="code-wrapper">
        <code class="coupon-code">{{ code }}</code>
        <span v-if="discount" class="discount-badge">{{ discount }}</span>
      </div>
    </div>
    <div class="coupon-right">
      <button type="button" class="copy-btn">
        {{ copied ? '✓ 已复制到剪贴板' : '点击一键复制' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code: string
  discount?: string
}>()

const copied = ref(false)

const copyCoupon = () => {
  navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.coupon-box {
  background: radial-gradient(circle at 10% 50%, rgba(0, 229, 255, 0.12) 0%, #11161F 70%);
  border: 1px dashed rgba(0, 229, 255, 0.45);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 1.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.coupon-box:hover {
  border-color: #00E5FF;
  box-shadow: 0 4px 18px rgba(0, 229, 255, 0.2);
}

.coupon-left {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.coupon-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.code-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.coupon-code {
  font-size: 1.2rem !important;
  font-weight: 800;
  color: #00E5FF !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  letter-spacing: 0.05em;
}

.discount-badge {
  font-size: 0.72rem;
  font-weight: 700;
  color: #FBBF24;
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.35);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.copy-btn {
  background: #161F2B;
  border: 1px solid #29384D;
  color: #38BDF8;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.coupon-box:hover .copy-btn {
  background: #00E5FF;
  border-color: #00E5FF;
  color: #0B0D10;
}
</style>
