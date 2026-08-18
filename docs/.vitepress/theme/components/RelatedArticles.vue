<template>
  <div class="related-wrapper">
    <!-- Parent Topic -->
    <div v-if="relation?.parent" class="parent-bar">
      <span class="p-label">所属知识树：</span>
      <a :href="relation.parent.link" class="p-link">{{ relation.parent.text }}</a>
    </div>

    <!-- Related Articles Grid -->
    <div v-if="relation?.related && relation.related.length > 0" class="related-section">
      <h3 class="section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
        <span>相关百科与关联排查</span>
      </h3>
      <div class="related-grid">
        <a
          v-for="item in relation.related"
          :key="item.link"
          :href="item.link"
          class="related-card"
        >
          <span v-if="item.category" class="card-cat">{{ item.category }}</span>
          <span class="card-title">{{ item.text }}</span>
        </a>
      </div>
    </div>

    <!-- Next Step Box -->
    <div v-if="relation?.nextStep" class="next-step-box">
      <div class="next-label">下一步推荐阅读</div>
      <a :href="relation.nextStep.link" class="next-link">
        <span class="next-title">{{ relation.nextStep.text }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <p class="next-desc">{{ relation.nextStep.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { knowledgeGraph, type ArticleRelation } from '../../data/relatedData'

const props = defineProps<{
  customRelation?: ArticleRelation
}>()

const route = useRoute()

const relation = computed<ArticleRelation | undefined>(() => {
  if (props.customRelation) return props.customRelation
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return knowledgeGraph[currentPath] || knowledgeGraph[currentPath + '/']
})
</script>

<style scoped>
.related-wrapper {
  margin: 3rem 0 1.5rem 0;
  border-top: 1px solid #1E2734;
  padding-top: 1.5rem;
}

.parent-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #64748B;
  margin-bottom: 1.25rem;
}

.p-link {
  color: #38BDF8;
  font-weight: 500;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem !important;
  color: #E2E8F0 !important;
  margin: 0 0 1rem 0 !important;
  border: none !important;
  padding: 0 !important;
}

.section-title svg {
  color: #00E5FF;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.related-card {
  background: #11151A;
  border: 1px solid #1E2633;
  border-radius: 8px;
  padding: 0.85rem 1rem;
  text-decoration: none !important;
  transition: all 0.15s ease;
  display: flex;
  flex-direction: column;
}

.related-card:hover {
  background: #161D27;
  border-color: #334155;
  transform: translateY(-2px);
}

.card-cat {
  font-size: 0.72rem;
  color: #00E5FF;
  margin-bottom: 0.25rem;
}

.card-title {
  font-size: 0.88rem;
  color: #F1F5F9;
  font-weight: 500;
  line-height: 1.45;
}

.next-step-box {
  background: #121821;
  border: 1px solid #233042;
  border-left: 4px solid #00E5FF;
  border-radius: 8px;
  padding: 1.15rem 1.35rem;
}

.next-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #00E5FF;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.next-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #FFFFFF !important;
  text-decoration: none !important;
}

.next-link:hover {
  color: #38BDF8 !important;
}

.next-desc {
  margin: 0.35rem 0 0 0;
  font-size: 0.86rem;
  color: #94A3B8;
  line-height: 1.5;
}
</style>
