<template>
  <DefaultTheme.Layout>
    <!-- Nav Search Bar Trigger -->
    <template #nav-bar-content-before>
      <div class="nav-search-wrapper">
        <SearchTrigger placeholder="搜索知识库 / 机场 / 协议..." />
      </div>
    </template>

    <!-- Document Top: Breadcrumbs & Meta -->
    <template #doc-before>
      <Breadcrumb />
      <ArticleMeta />
    </template>

    <!-- Document Bottom: Contextual Recommend & Related Articles & Feedback -->
    <template #doc-after>
      <!-- Smart Contextual Recommend Widget -->
      <ContextualRecommend />

      <!-- Knowledge Graph Related Articles -->
      <RelatedArticles />
      
      <!-- Content Feedback / Error report -->
      <div class="feedback-strip">
        <span>💡 发现内容有误或服务商信息变动？</span>
        <a href="/about/" class="feedback-link">提交内容校正与反馈</a>
      </div>
    </template>

    <!-- Aside Bottom: High Value Internal Links -->
    <template #aside-outline-after>
      <div class="aside-related-box">
        <div class="aside-related-title">🌟 核心专题与排错直达</div>
        <ul class="aside-related-list">
          <li><a href="/recommend/" class="highlight-link">2026 年度最佳机场推荐</a></li>
          <li><a href="/navigation/ranking">2026 机场综合口碑排行榜</a></li>
          <li><a href="/clients/clash-verge/import-subscription">Clash Verge 订阅导入全指南</a></li>
          <li><a href="/troubleshooting/all-nodes-timeout">节点全部超时 (Timeout) 排查</a></li>
          <li><a href="/guides/how-to-choose-node">地区节点推荐与选择指南</a></li>
          <li><a href="/reviews/">42 家品牌深度评测档案</a></li>
        </ul>
      </div>
    </template>

    <!-- Global Search Modal -->
    <template #layout-bottom>
      <SearchModal />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Breadcrumb from './components/Breadcrumb.vue'
import ArticleMeta from './components/ArticleMeta.vue'
import RelatedArticles from './components/RelatedArticles.vue'
import SearchModal from './components/SearchModal.vue'
import SearchTrigger from './components/SearchTrigger.vue'
import ContextualRecommend from './components/ContextualRecommend.vue'
</script>

<style scoped>
.nav-search-wrapper {
  margin-right: 0.75rem;
  width: 200px;
}

.nav-search-wrapper :deep(.jw-search-trigger) {
  width: 100%;
  padding: 0.35rem 0.65rem;
  font-size: 0.82rem;
  background: #10141A;
}

.nav-search-wrapper :deep(.trigger-text) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 960px) {
  .nav-search-wrapper {
    display: none;
  }
}

.aside-related-box {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #1E2734;
}

.aside-related-title {
  font-size: 0.78rem;
  font-weight: 700;
  color: #00E5FF;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.65rem;
}

.aside-related-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.aside-related-list li a {
  font-size: 0.8rem;
  color: #94A3B8;
  text-decoration: none;
  transition: all 0.15s ease;
}

.aside-related-list li a:hover {
  color: #00E5FF;
  transform: translateX(2px);
}

.aside-related-list li a.highlight-link {
  color: #38BDF8;
  font-weight: 600;
}

.feedback-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: #11161E;
  border: 1px solid #1C2430;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-top: 1.5rem;
  font-size: 0.82rem;
  color: #94A3B8;
}

.feedback-link {
  color: #38BDF8;
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
