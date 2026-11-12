import type { PageData, HeadConfig } from 'vitepress'
import { DOMAIN, categoryNameMap } from '../data/categories'
import { airportsData } from '../data/airportsData'

interface FaqItem {
  q: string
  a: string
}

interface HowToStep {
  name: string
  text: string
}

interface HowToConfig {
  name: string
  description?: string
  steps: HowToStep[]
}

function buildCanonicalUrl(relativePath: string): string {
  const cleaned = relativePath
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '')
    .replace(/\/$/, '')
  return cleaned ? `${DOMAIN}/${cleaned}` : `${DOMAIN}/`
}

function buildBreadcrumbSchema(relativePath: string, title: string) {
  const cleaned = relativePath
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '')
    .replace(/\/$/, '')
  if (!cleaned) return null

  const segments = cleaned.split('/').filter(Boolean)
  const itemListElement: Record<string, unknown>[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: DOMAIN
    }
  ]

  let acc = ''
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    acc += `/${seg}`
    const isLast = i === segments.length - 1
    const rawName = categoryNameMap[seg] || seg
    const name = isLast && title ? title.split(' - ')[0].split(' | ')[0].trim() : rawName
    itemListElement.push({
      '@type': 'ListItem',
      position: i + 2,
      name,
      item: `${DOMAIN}${acc}`
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }
}

function pushJsonLd(head: HeadConfig[], schema: Record<string, unknown>) {
  head.push(['script', { type: 'application/ld+json' }, JSON.stringify(schema)])
}

export function applyPageSeoMetadata(pageData: PageData) {
  const head = (pageData.frontmatter.head = pageData.frontmatter.head || [])
  const is404 = pageData.relativePath === '404.md'
  if (is404) {
    head.push(['meta', { name: 'robots', content: 'noindex, follow' }])
    return
  }

  const canonicalUrl = buildCanonicalUrl(pageData.relativePath)
  const isHome = pageData.relativePath === 'index.md'
  const pageTitle = pageData.frontmatter.title || pageData.title || 'JichangWiki 机场百科知识库'
  const pageDesc =
    pageData.frontmatter.description ||
    pageData.description ||
    '围绕网络工具、代理客户端、协议与线路知识的中文技术百科。'

  head.push(
    ['link', { rel: 'canonical', href: canonicalUrl }],
    ['meta', { property: 'og:url', content: canonicalUrl }],
    ['meta', { property: 'og:title', content: pageTitle }],
    ['meta', { property: 'og:description', content: pageDesc }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }]
  )

  if (isHome) {
    pushJsonLd(head, {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'JichangWiki 百科知识库',
      url: DOMAIN,
      logo: `${DOMAIN}/logo.svg`,
      publishingPrinciples: `${DOMAIN}/editorial-policy`
    })
    pushJsonLd(head, {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026 机场综合口碑排行榜与代表服务商',
      url: DOMAIN,
      numberOfItems: airportsData.length,
      itemListElement: airportsData.map((a, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: a.name,
        url: `${DOMAIN}${a.reviewUrl}`
      }))
    })
    return
  }

  // BreadcrumbList for all non-home pages
  const breadcrumb = buildBreadcrumbSchema(pageData.relativePath, pageTitle)
  if (breadcrumb) {
    pushJsonLd(head, breadcrumb)
  }

  // Article / TechArticle schema for content pages
  const dateModified = pageData.frontmatter.updated || pageData.frontmatter.lastReviewed || '2026-11-12'
  const schemaType =
    pageData.relativePath.startsWith('recommend/') ||
    pageData.relativePath.startsWith('navigation/') ||
    pageData.relativePath.startsWith('reviews/') ||
    pageData.relativePath.startsWith('guides/')
      ? 'Article'
      : 'TechArticle'

  pushJsonLd(head, {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: pageTitle,
    description: pageDesc,
    inLanguage: 'zh-CN',
    datePublished: '2026-08-18',
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'JichangWiki Technical Editorial Team',
      url: `${DOMAIN}/about`
    },
    publisher: {
      '@type': 'Organization',
      name: 'JichangWiki 百科知识库',
      url: DOMAIN,
      logo: {
        '@type': 'ImageObject',
        url: `${DOMAIN}/logo.svg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  })

  // Optional FAQPage schema (synced with visible FAQ sections in markdown)
  const faqList = pageData.frontmatter.faq as FaqItem[] | undefined
  if (Array.isArray(faqList) && faqList.length > 0) {
    pushJsonLd(head, {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqList.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    })
  }

  // Optional HowTo schema (synced with visible step guides in markdown)
  const howto = pageData.frontmatter.howto as HowToConfig | undefined
  if (howto && Array.isArray(howto.steps) && howto.steps.length > 0) {
    pushJsonLd(head, {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howto.name,
      description: howto.description || pageDesc,
      step: howto.steps.map((s, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: s.name,
        text: s.text
      }))
    })
  }

  // Optional ItemList schema on ranking / recommendation / reviews hub pages
  if (pageData.frontmatter.itemList) {
    pushJsonLd(head, {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: pageTitle,
      url: canonicalUrl,
      numberOfItems: airportsData.length,
      itemListElement: airportsData.map((a, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: a.name,
        url: `${DOMAIN}${a.reviewUrl}`
      }))
    })
  }
}
