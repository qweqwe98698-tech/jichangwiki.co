<template>
  <div class="answer-box">
    <div class="answer-header">
      <span class="answer-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      </span>
      <span class="answer-label">{{ label || '30 秒快速答案' }}</span>
    </div>
    <div v-if="question" class="answer-question">
      <strong>问题：</strong>{{ question }}
    </div>
    <div class="answer-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question?: string
  label?: string
}>()
</script>

<style scoped>
.answer-box {
  background: #11161D;
  border: 1px solid rgba(0, 229, 255, 0.35);
  border-left: 4px solid #00E5FF;
  border-radius: 8px;
  padding: 1.15rem 1.35rem;
  margin: 1.5rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
}

.answer-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.answer-icon {
  color: #00E5FF;
  display: flex;
  align-items: center;
}

.answer-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #00E5FF;
}

.answer-question {
  font-size: 0.95rem;
  color: #F1F5F9;
  margin-bottom: 0.65rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed #1E2836;
}

.answer-question strong {
  color: #38BDF8;
}

.answer-content {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #CBD5E1;
}

.answer-content :deep(p) {
  margin: 0;
  color: #CBD5E1;
}
</style>
