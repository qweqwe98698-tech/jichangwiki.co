<template>
  <div class="diagnostic-card">
    <div class="card-header">
      <div class="title-row">
        <span class="pulse-dot"></span>
        <h3 class="tool-title">⚡ 本地智能问题诊断器</h3>
      </div>
      <p class="tool-subtitle">只需两步，快速定位故障并获取经过验证的精准解决方案</p>
    </div>

    <!-- Step 1: Issue Selection -->
    <div class="step-section">
      <div class="step-label">
        <span class="step-num">1</span>
        <span>你遇到了什么问题？</span>
      </div>
      <div class="options-grid">
        <button
          v-for="issue in issues"
          :key="issue.id"
          :class="['option-btn', { active: selectedIssue === issue.id }]"
          @click="selectIssue(issue.id)"
        >
          <span class="radio-indicator"></span>
          <span>{{ issue.label }}</span>
        </button>
      </div>
    </div>

    <!-- Step 2: Client Selection -->
    <div v-if="selectedIssue" class="step-section fade-in">
      <div class="step-label">
        <span class="step-num">2</span>
        <span>你正在使用什么客户端或操作系统？</span>
      </div>
      <div class="options-grid clients-grid">
        <button
          v-for="client in clients"
          :key="client.id"
          :class="['option-btn', { active: selectedClient === client.id }]"
          @click="selectClient(client.id)"
        >
          <span class="radio-indicator"></span>
          <span>{{ client.label }}</span>
        </button>
      </div>
    </div>

    <!-- Step 3: Result Card -->
    <div v-if="result" class="result-section fade-in">
      <div class="result-badge">匹配推荐方案</div>
      <h4 class="result-title">{{ result.title }}</h4>
      <p class="result-summary">{{ result.summary }}</p>

      <div class="result-steps">
        <div class="steps-heading">快速处置要点：</div>
        <ul>
          <li v-for="(step, idx) in result.solutionSteps" :key="idx">{{ step }}</li>
        </ul>
      </div>

      <div class="action-row">
        <a :href="result.url" class="btn-primary">
          <span>查看完整排错手册</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <button class="btn-reset" @click="resetTool">重新诊断</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { diagnosticIssues, diagnosticClients, diagnosticRoutes, type DiagnosticResult } from '../../data/diagnosticsData'

const issues = diagnosticIssues
const clients = diagnosticClients

const selectedIssue = ref<string | null>('node-timeout')
const selectedClient = ref<string | null>('clash-verge')

function selectIssue(id: string) {
  selectedIssue.value = id
}

function selectClient(id: string) {
  selectedClient.value = id
}

function resetTool() {
  selectedIssue.value = null
  selectedClient.value = null
}

const result = computed<DiagnosticResult | null>(() => {
  if (!selectedIssue.value) return null
  const issueRoutes = diagnosticRoutes[selectedIssue.value]
  if (!issueRoutes) return null

  if (selectedClient.value && issueRoutes[selectedClient.value]) {
    return issueRoutes[selectedClient.value]
  }
  return issueRoutes['default'] || Object.values(issueRoutes)[0] || null
})
</script>

<style scoped>
.diagnostic-card {
  background: #11151A;
  border: 1px solid #232D3B;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.card-header {
  margin-bottom: 1.25rem;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #00E5FF;
  border-radius: 50%;
  box-shadow: 0 0 10px #00E5FF;
}

.tool-title {
  margin: 0 !important;
  font-size: 1.2rem !important;
  font-weight: 700 !important;
  color: #FFFFFF !important;
  border: none !important;
  padding: 0 !important;
}

.tool-subtitle {
  font-size: 0.88rem;
  color: #94A3B8;
  margin: 0.35rem 0 0 0;
}

.step-section {
  margin-top: 1.25rem;
}

.step-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #E2E8F0;
  margin-bottom: 0.75rem;
}

.step-num {
  width: 20px;
  height: 20px;
  background: #1E293B;
  color: #00E5FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid #334155;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.5rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #161C24;
  border: 1px solid #232C38;
  color: #CBD5E1;
  padding: 0.65rem 0.85rem;
  border-radius: 6px;
  font-size: 0.88rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.15s ease;
}

.option-btn:hover {
  background: #1D2530;
  border-color: #3B82F6;
  color: #FFFFFF;
}

.option-btn.active {
  background: rgba(0, 229, 255, 0.08);
  border-color: #00E5FF;
  color: #00E5FF;
}

.radio-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1.5px solid #475569;
  flex-shrink: 0;
}

.option-btn.active .radio-indicator {
  border-color: #00E5FF;
  background: #00E5FF;
}

.result-section {
  margin-top: 1.5rem;
  background: #161D27;
  border: 1px solid rgba(0, 229, 255, 0.4);
  border-radius: 8px;
  padding: 1.25rem;
}

.result-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.12);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.result-title {
  margin: 0 0 0.4rem 0 !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: #FFFFFF !important;
  border: none !important;
  padding: 0 !important;
}

.result-summary {
  font-size: 0.9rem;
  color: #94A3B8;
  margin: 0 0 0.85rem 0;
}

.result-steps {
  background: #10151C;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #1E2836;
}

.steps-heading {
  font-size: 0.82rem;
  font-weight: 600;
  color: #38BDF8;
  margin-bottom: 0.4rem;
}

.result-steps ul {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.85rem;
  color: #CBD5E1;
}

.result-steps li {
  margin-bottom: 0.25rem;
}

.action-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #00E5FF;
  color: #0B0D10 !important;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.55rem 1.1rem;
  border-radius: 6px;
  text-decoration: none !important;
  transition: background 0.15s ease;
}

.btn-primary:hover {
  background: #38BDF8;
}

.btn-reset {
  background: transparent;
  border: 1px solid #334155;
  color: #94A3B8;
  font-size: 0.85rem;
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  cursor: pointer;
}

.btn-reset:hover {
  color: #FFFFFF;
  border-color: #64748B;
}

.fade-in {
  animation: fadeIn 0.2s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
