<template>
  <div class="callout-box warning">
    <div class="callout-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
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
  background: #1A1713;
  border: 1px solid #3F2B14;
  border-left: 4px solid #F59E0B;
  border-radius: 6px;
  padding: 1rem 1.15rem;
  margin: 1.25rem 0;
}

.callout-icon {
  color: #F59E0B;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.callout-body {
  flex: 1;
}

.callout-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: #FEF3C7;
  margin-bottom: 0.35rem;
}

.callout-content {
  font-size: 0.88rem;
  color: #FDE68A;
  line-height: 1.6;
}

.callout-content :deep(p) {
  margin: 0;
}
</style>
