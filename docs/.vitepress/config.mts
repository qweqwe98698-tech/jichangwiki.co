import { defineConfig } from 'vitepress'
import { nav } from './data/nav'
import { sidebar } from './data/sidebars/index'
import fs from 'node:fs'
import path from 'node:path'

const DOMAIN = 'https://jichangwiki.co'

export default defineConfig({
  title: 'JichangWiki 机场百科知识库',
  description: '网络工具、代理客户端、协议百科、线路知识、故障诊断与新手指南专业技术知识库。',
  lang: 'zh-CN',
  base: '/',
  cleanUrls: true,
  lastUpdated: false, // Managed manually per E-E-A-T guideline

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0B0D10' }],
    ['meta', { name: 'author', content: 'JichangWiki Technical Editorial Team' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'JichangWiki 百科知识库' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'JichangWiki 机场百科知识库',
        url: DOMAIN,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${DOMAIN}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    ]
  ],

  transformPageData(pageData) {
    const canonicalUrl = `${DOMAIN}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')
      .replace(/\/$/, '')

    pageData.frontmatter.head = pageData.frontmatter.head || []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl || DOMAIN }],
      ['meta', { property: 'og:url', content: canonicalUrl || DOMAIN }]
    )
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'JichangWiki',
    nav,
    sidebar,
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '深色外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '知识目录',
    footer: {
      message: '围绕网络工具、代理协议与线路知识的独立中文百科',
      copyright: 'Copyright © 2026 JichangWiki.co 保留所有权利。'
    }
  },

  buildEnd: async ({ outDir }) => {
    // Generate sitemap.xml with lastmod per Google Search Central standards
    const globFiles = (dir: string, fileList: string[] = []): string[] => {
      const files = fs.readdirSync(dir)
      for (const file of files) {
        const filePath = path.join(dir, file)
        if (fs.statSync(filePath).isDirectory()) {
          if (file !== 'assets' && file !== 'pagefind') {
            globFiles(filePath, fileList)
          }
        } else if (file.endsWith('.html') && file !== '404.html') {
          fileList.push(filePath)
        }
      }
      return fileList
    }

    try {
      const htmlFiles = globFiles(outDir)
      const today = new Date().toISOString().split('T')[0]
      const urls = htmlFiles.map(file => {
        let relative = path.relative(outDir, file).replace(/\\/g, '/')
        if (relative === 'index.html') {
          relative = ''
        } else if (relative.endsWith('/index.html')) {
          relative = relative.replace(/\/index\.html$/, '')
        } else if (relative.endsWith('.html')) {
          relative = relative.replace(/\.html$/, '')
        }

        let mtime = today
        try {
          const stats = fs.statSync(file)
          mtime = stats.mtime.toISOString().split('T')[0]
        } catch {
          mtime = today
        }

        return `  <url>\n    <loc>${DOMAIN}/${relative}</loc>\n    <lastmod>${mtime}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${relative === '' ? '1.0' : '0.8'}</priority>\n  </url>`
      })

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf-8')
      console.log(`[Sitemap] Generated sitemap.xml with ${htmlFiles.length} pages and valid lastmod.`)

      // IndexNow Key verification file
      const indexNowKey = 'b38df94e751246b9a89c362145b45281'
      fs.writeFileSync(path.join(outDir, `${indexNowKey}.txt`), indexNowKey, 'utf-8')
      console.log(`[IndexNow] Generated key verification file: ${indexNowKey}.txt`)
    } catch (err) {
      console.error('[Sitemap/IndexNow] Failed to generate:', err)
    }
  }
})
