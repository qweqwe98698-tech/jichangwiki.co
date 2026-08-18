<template>
  <div v-if="hasMeta" class="article-meta">
    <div class="meta-left">
      <span v-if="frontmatter.updated" class="meta-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <span>更新: {{ frontmatter.updated }}</span>
      </span>
      <span v-if="frontmatter.lastReviewed" class="meta-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>核验: {{ frontmatter.lastReviewed }}</span>
      </span>
    </div>

    <div class="meta-right">
      <span v-if="frontmatter.platform" class="meta-badge badge-platform">{{ frontmatter.platform }}</span>
      <span v-if="frontmatter.client" class="meta-badge badge-client">{{ frontmatter.client }}</span>
      <span v-if="frontmatter.difficulty" :class="['meta-badge', `badge-diff-${frontmatter.difficulty}`]">
        {{ difficultyLabel(frontmatter.difficulty) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const hasMeta = computed(() => {
  return frontmatter.value.updated || frontmatter.value.platform || frontmatter.value.difficulty || frontmatter.value.client
})

function difficultyLabel(diff: string) {
  const map: Record<string, string> = {
    'easy': '入门级',
    'medium': '进阶级',
    'hard': '专家级'
  }
  return map[diff] || diff
}
</script>

<style scoped>
.article-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #1E2734;
  font-size: 0.8rem;
  color: #64748B;
}

.meta-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.meta-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-badge {
  padding: 0.12rem 0.45rem;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 500;
}

.badge-platform {
  background: #161D27;
  color: #94A3B8;
  border: 1px solid #232E3E;
}

.badge-client {
  background: rgba(0, 229, 255, 0.08);
  color: #00E5FF;
  border: 1px solid rgba(0, 229, 255, 0.2);
}

.badge-diff-easy {
  background: rgba(16, 185, 129, 0.08);
  color: #10B981;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.badge-diff-medium {
  background: rgba(245, 158, 11, 0.08);
  color: #F59E0B;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.badge-diff-hard {
  background: rgba(239, 68, 68, 0.08);
  color: #EF4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}
</style>
