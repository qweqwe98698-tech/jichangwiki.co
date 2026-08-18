<template>
  <div class="step-guide-container">
    <div class="step-badge">操作步骤指南</div>
    <div class="steps-flow">
      <div v-for="(step, idx) in steps" :key="idx" class="step-item">
        <div class="step-aside">
          <div class="step-circle">{{ idx + 1 }}</div>
          <div v-if="idx < steps.length - 1" class="step-line"></div>
        </div>
        <div class="step-body">
          <h4 class="step-title">{{ step.title }}</h4>
          <p class="step-desc" v-html="step.desc"></p>
          <div v-if="step.tip" class="step-tip">
            <span class="tip-tag">提示</span>
            <span v-html="step.tip"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface StepItem {
  title: string
  desc: string
  tip?: string
}

defineProps<{
  steps: StepItem[]
}>()
</script>

<style scoped>
.step-guide-container {
  background: #11151A;
  border: 1px solid #1E2734;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.75rem 0;
}

.step-badge {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.25);
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.steps-flow {
  display: flex;
  flex-direction: column;
}

.step-item {
  display: flex;
  gap: 1.25rem;
}

.step-aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #161D27;
  border: 2px solid #00E5FF;
  color: #00E5FF;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-line {
  width: 2px;
  flex: 1;
  background: #1E293B;
  margin: 0.4rem 0;
  min-height: 24px;
}

.step-body {
  padding-bottom: 1.5rem;
  flex: 1;
}

.step-title {
  margin: 0.15rem 0 0.35rem 0 !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: #FFFFFF !important;
  border: none !important;
  padding: 0 !important;
}

.step-desc {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #CBD5E1;
  line-height: 1.65;
}

.step-tip {
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  background: #161D27;
  border-left: 3px solid #38BDF8;
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  font-size: 0.82rem;
  color: #94A3B8;
}

.tip-tag {
  color: #38BDF8;
  font-weight: 600;
  font-size: 0.75rem;
}
</style>
