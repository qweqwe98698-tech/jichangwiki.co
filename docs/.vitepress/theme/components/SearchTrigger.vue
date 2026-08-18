<template>
  <button class="jw-search-trigger" type="button" @click="triggerSearch" aria-label="搜索百科知识库">
    <svg class="icon-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
    <span class="trigger-text">{{ placeholder || '搜索知识库...' }}</span>
    <span class="shortcut-badge">
      <kbd>{{ isMac ? '⌘' : 'Ctrl' }}</kbd>
      <kbd>K</kbd>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  placeholder?: string
}>()

const isMac = ref(false)

function triggerSearch() {
  window.dispatchEvent(new CustomEvent('open-jichang-search'))
}

onMounted(() => {
  if (typeof navigator !== 'undefined') {
    isMac.value = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  }
})
</script>

<style scoped>
.jw-search-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: #11151A;
  border: 1px solid #232C38;
  color: #94A3B8;
  padding: 0.45rem 0.85rem;
  border-radius: 6px;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.jw-search-trigger:hover {
  background: #161D27;
  border-color: #00E5FF;
  color: #FFFFFF;
}

.icon-search {
  color: #00E5FF;
  flex-shrink: 0;
}

.trigger-text {
  font-size: 0.88rem;
}

.shortcut-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  margin-left: auto;
}

kbd {
  background: #1C232D;
  border: 1px solid #2B3544;
  color: #94A3B8;
  font-size: 0.68rem;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  font-family: inherit;
}
</style>
