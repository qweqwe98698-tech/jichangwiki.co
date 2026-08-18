<template>
  <Teleport to="body">
    <div v-if="isOpen" class="search-overlay" @click.self="closeSearch">
      <div class="search-modal">
        <div class="search-input-wrapper">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="搜索 Clash、Shadowrocket、v2rayN、节点超时、订阅失败、VLESS、IEPL..."
            class="search-input"
            @input="handleSearch"
            @keydown.down.prevent="selectNext"
            @keydown.up.prevent="selectPrev"
            @keydown.enter.prevent="navigateSelected"
            @keydown.esc="closeSearch"
          />
          <button class="search-esc-btn" @click="closeSearch">ESC</button>
        </div>

        <!-- Search Results List -->
        <div class="search-body">
          <div v-if="loading" class="search-status">正在检索知识库...</div>
          <div v-else-if="results.length > 0" class="results-list">
            <a
              v-for="(item, idx) in results"
              :key="item.url"
              :href="item.url"
              :class="['result-item', { active: selectedIndex === idx }]"
              @mouseenter="selectedIndex = idx"
              @click="closeSearch"
            >
              <div class="result-top">
                <span class="result-title">{{ item.meta?.title || item.rawTitle || '知识条目' }}</span>
                <span class="result-badge">{{ resolveCategory(item.url) }}</span>
              </div>
              <p class="result-excerpt" v-html="item.excerpt"></p>
            </a>
          </div>
          <div v-else-if="query.trim()" class="search-status">
            未找到包含 "{{ query }}" 的知识条目。请尝试精简关键词或在分类目录中浏览。
          </div>
          <div v-else class="search-shortcuts">
            <div class="shortcut-title">🔥 热门搜索推荐</div>
            <div class="tags-cloud">
              <button
                v-for="kw in hotKeywords"
                :key="kw"
                class="tag-btn"
                @click="setQuery(kw)"
              >
                {{ kw }}
              </button>
            </div>
          </div>
        </div>

        <div class="search-footer">
          <div class="keys-guide">
            <span><kbd>↑</kbd> <kbd>↓</kbd> 切换</span>
            <span><kbd>↵</kbd> 打开</span>
            <span><kbd>ESC</kbd> 退出</span>
          </div>
          <div class="engine-tag">Pagefind 全文检索</div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const isOpen = ref(false)
const query = ref('')
const loading = ref(false)
const selectedIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)

interface SearchResultItem {
  url: string
  rawTitle?: string
  meta?: { title?: string }
  excerpt: string
}

const results = ref<SearchResultItem[]>([])

const hotKeywords = [
  '节点全部超时',
  'Clash Verge',
  'Shadowrocket',
  'v2rayN',
  '更新订阅失败',
  'VLESS',
  'IEPL 专线',
  '已连接打不开网页',
  'TUN 模式'
]

// Fallback search index for dev mode before pagefind builds
const devSearchFallback: SearchResultItem[] = [
  { url: '/troubleshooting/all-nodes-timeout', rawTitle: '节点全部超时 (Timeout / 全红) 深度排查指南', excerpt: '系统时间偏差、订阅链接失效、TLS证书校验与防火墙拦截' },
  { url: '/clients/clash-verge/', rawTitle: 'Clash Verge / Verge Rev 完整中文知识库', excerpt: '现代轻量 GUI，内置 Mihomo 内核，支持 TUN 模式与脚本扩展' },
  { url: '/clients/shadowrocket/', rawTitle: 'Shadowrocket 小火箭完整知识库', excerpt: 'iOS 普及率最高的客户端，支持节点导入、分流规则与 DNS 优化' },
  { url: '/clients/v2rayn/', rawTitle: 'v2rayN (Windows) 完整知识树', excerpt: '经典 Windows GUI 客户端，支持 Xray / sing-box 双内核与丰富分流规则' },
  { url: '/protocols/vless', rawTitle: 'VLESS 协议技术百科', excerpt: '去除了 VMess 繁重对称加密设计，依托底层 TLS/XTLS 保证安全性' },
  { url: '/network/iepl', rawTitle: 'IEPL 内网专线技术百科', excerpt: '国际以太网专线，国内入口走内网专线直达境外落地，不过 GFW' },
  { url: '/subscription/what-is-subscription', rawTitle: '什么是订阅与节点聚合', excerpt: '将成百上千个代理节点配置封装为一个 URL 地址便于批量更新' },
  { url: '/troubleshooting/connected-but-no-internet', rawTitle: '已连接代理但打不开网页排查', excerpt: '系统代理环境变量残留、TUN 虚拟网卡 DNS 劫持冲突与分流规则' }
]

function openSearch() {
  isOpen.value = true
  selectedIndex.value = 0
  nextTick(() => {
    inputRef.value?.focus()
  })
}

function closeSearch() {
  isOpen.value = false
  query.value = ''
  results.value = []
}

function setQuery(kw: string) {
  query.value = kw
  handleSearch()
}

async function handleSearch() {
  if (!query.value.trim()) {
    results.value = []
    return
  }

  loading.value = true
  selectedIndex.value = 0

  try {
    // If window.pagefind is initialized (in production dist)
    if (typeof window !== 'undefined' && (window as any).pagefind) {
      const searchRes = await (window as any).pagefind.search(query.value)
      const fiveResults = await Promise.all(
        searchRes.results.slice(0, 8).map((r: any) => r.data())
      )
      results.value = fiveResults
    } else {
      // Dev mode local search filter
      const q = query.value.toLowerCase()
      results.value = devSearchFallback.filter(
        item => item.rawTitle?.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q)
      )
    }
  } catch (err) {
    console.warn('Pagefind search error:', err)
  } finally {
    loading.value = false
  }
}

function selectNext() {
  if (results.value.length === 0) return
  selectedIndex.value = (selectedIndex.value + 1) % results.value.length
}

function selectPrev() {
  if (results.value.length === 0) return
  selectedIndex.value = (selectedIndex.value - 1 + results.value.length) % results.value.length
}

function navigateSelected() {
  if (results.value.length > 0 && results.value[selectedIndex.value]) {
    const url = results.value[selectedIndex.value].url
    window.location.href = url
    closeSearch()
  }
}

function resolveCategory(url: string) {
  if (url.includes('/clients/')) return '客户端'
  if (url.includes('/protocols/')) return '协议百科'
  if (url.includes('/network/')) return '线路知识'
  if (url.includes('/subscription/')) return '订阅知识'
  if (url.includes('/troubleshooting/')) return '故障诊断'
  if (url.includes('/scenarios/')) return '使用场景'
  if (url.includes('/guides/')) return '选择指南'
  if (url.includes('/start/')) return '新手入门'
  return '知识条目'
}

function handleKeydown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    if (isOpen.value) {
      closeSearch()
    } else {
      openSearch()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  // Listen for custom trigger event
  window.addEventListener('open-jichang-search', openSearch)

  // Dynamically load pagefind.js in production browser environment
  if (typeof window !== 'undefined' && !((window as any).pagefind)) {
    try {
      const dynamicImport = new Function('url', 'return import(url)')
      dynamicImport('/pagefind/pagefind.js')
        .then((module: any) => {
          ;(window as any).pagefind = module
          module.init?.()
        })
        .catch(() => {
          // Dev mode where pagefind bundle isn't generated yet
        })
    } catch {
      // Ignored in dev/SSR
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('open-jichang-search', openSearch)
})

defineExpose({ openSearch, closeSearch })
</script>

<style scoped>
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(4, 6, 8, 0.75);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
}

.search-modal {
  width: 90%;
  max-width: 680px;
  background: #0E1217;
  border: 1px solid #252F3C;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #1C232D;
  background: #11151A;
}

.search-icon {
  color: #00E5FF;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 1.05rem;
  outline: none;
}

.search-input::placeholder {
  color: #64748B;
  font-size: 0.95rem;
}

.search-esc-btn {
  background: #1C232D;
  border: 1px solid #2D3748;
  color: #94A3B8;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.search-body {
  max-height: 440px;
  overflow-y: auto;
  padding: 0.75rem 1rem;
}

.search-status {
  padding: 2rem 1rem;
  text-align: center;
  color: #64748B;
  font-size: 0.9rem;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.result-item {
  padding: 0.75rem 0.9rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  text-decoration: none !important;
  transition: all 0.12s ease;
  display: block;
}

.result-item.active, .result-item:hover {
  background: #161D27;
  border-color: #232F3E;
}

.result-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;
}

.result-title {
  color: #F1F5F9;
  font-weight: 600;
  font-size: 0.95rem;
}

.result-badge {
  font-size: 0.72rem;
  color: #00E5FF;
  background: rgba(0, 229, 255, 0.1);
  padding: 0.1rem 0.4rem;
  border-radius: 3px;
}

.result-excerpt {
  margin: 0;
  font-size: 0.84rem;
  color: #94A3B8;
  line-height: 1.45;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.result-excerpt :deep(mark) {
  background: rgba(0, 229, 255, 0.25);
  color: #00E5FF;
  border-radius: 2px;
  padding: 0 2px;
}

.search-shortcuts {
  padding: 1.25rem 0.5rem;
}

.shortcut-title {
  font-size: 0.8rem;
  color: #64748B;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-btn {
  background: #151A22;
  border: 1px solid #202834;
  color: #CBD5E1;
  font-size: 0.82rem;
  padding: 0.35rem 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.tag-btn:hover {
  background: #1D2531;
  border-color: #00E5FF;
  color: #00E5FF;
}

.search-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1.25rem;
  background: #0B0D10;
  border-top: 1px solid #1C232D;
  font-size: 0.75rem;
  color: #64748B;
}

.keys-guide {
  display: flex;
  gap: 0.85rem;
}

kbd {
  background: #1C232D;
  border: 1px solid #2D3748;
  color: #94A3B8;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  font-size: 0.72rem;
}

.engine-tag {
  color: #475569;
}
</style>
