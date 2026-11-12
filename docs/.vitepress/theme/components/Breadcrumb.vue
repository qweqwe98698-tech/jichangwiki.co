<template>
  <nav v-if="crumbs.length > 1" class="jw-breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(crumb, idx) in crumbs" :key="crumb.path" class="breadcrumb-item">
        <a v-if="idx < crumbs.length - 1" :href="crumb.path" class="crumb-link">{{ crumb.title }}</a>
        <span v-else class="crumb-current" aria-current="page">{{ crumb.title }}</span>
        <span v-if="idx < crumbs.length - 1" class="crumb-separator">›</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { categoryNameMap } from '../../data/categories'

const route = useRoute()
const { frontmatter } = useData()

interface CrumbItem {
  title: string
  path: string
}

const crumbs = computed<CrumbItem[]>(() => {
  const path = route.path.replace(/\/$/, '')
  if (!path || path === '') return []

  const segments = path.split('/').filter(Boolean)
  const result: CrumbItem[] = [{ title: '首页', path: '/' }]

  let accumulated = ''
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    accumulated += `/${seg}`
    const isLast = i === segments.length - 1

    let title = categoryNameMap[seg] || seg
    if (isLast && frontmatter.value.title) {
      // Use clean title without trailing suffix
      title = frontmatter.value.title.split(' - ')[0].split(' | ')[0]
    }
    result.push({
      title,
      path: isLast ? `${accumulated}` : `${accumulated}/`
    })
  }

  return result
})
</script>

<style scoped>
.jw-breadcrumb {
  margin: 0.5rem 0 1.25rem 0;
  font-size: 0.82rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.35rem;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #64748B;
}

.crumb-link {
  color: #94A3B8;
  text-decoration: none;
  transition: color 0.15s ease;
}

.crumb-link:hover {
  color: #00E5FF;
  text-decoration: underline;
}

.crumb-current {
  color: #CBD5E1;
  font-weight: 500;
  max-width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.crumb-separator {
  color: #475569;
  font-size: 0.75rem;
}
</style>
