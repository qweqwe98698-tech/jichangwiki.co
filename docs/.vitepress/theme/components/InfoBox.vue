<template>
  <div class="callout-box info">
    <div class="callout-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    </div>
    <div class="callout-body">
      <div v-if="title" class="callout-title">{{ title }}</div>
      <div class="callout-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
.callout-box {
  display: flex;
  gap: 0.85rem;
  background: #111822;
  border: 1px solid #1E2E42;
  border-left: 4px solid #38BDF8;
  border-radius: 6px;
  padding: 1rem 1.15rem;
  margin: 1.25rem 0;
}

.callout-icon {
  color: #38BDF8;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.callout-body {
  flex: 1;
}

.callout-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: #F1F5F9;
  margin-bottom: 0.35rem;
}

.callout-content {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.6;
}

.callout-content :deep(p) {
  margin: 0;
}
</style>
