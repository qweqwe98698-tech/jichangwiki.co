import fs from 'node:fs'
import path from 'node:path'

const CATEGORIES_PATH = path.join('docs', '.vitepress', 'data', 'categories.ts')
const SITEMAP_PATH = path.join('docs', '.vitepress', 'dist', 'sitemap.xml')
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

function readConfig() {
  const raw = fs.readFileSync(CATEGORIES_PATH, 'utf-8')
  const domainMatch = raw.match(/export const DOMAIN = ['"]([^'"]+)['"]/)
  const keyMatch = raw.match(/export const INDEXNOW_KEY = ['"]([a-zA-Z0-9-]+)['"]/)
  if (!domainMatch || !keyMatch) {
    throw new Error('Could not read DOMAIN or INDEXNOW_KEY from docs/.vitepress/data/categories.ts')
  }
  const domain = domainMatch[1].replace(/\/$/, '')
  const key = keyMatch[1]
  return { domain, host: new URL(domain).host, key }
}

function readSitemapUrls() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Missing ${SITEMAP_PATH}. Run "npm run build" first.`)
  }
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf-8')
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim()).filter(Boolean)
}

async function main() {
  const dryRun = process.argv.includes('--dry-run')
  const { domain, host, key } = readConfig()
  const keyLocation = `${domain}/${key}.txt`
  const keyDistPath = path.join('docs', '.vitepress', 'dist', `${key}.txt`)

  if (!fs.existsSync(keyDistPath) || fs.readFileSync(keyDistPath, 'utf-8').trim() !== key) {
    throw new Error(`Verification file ${keyDistPath} is missing or mismatched. Run "npm run build" first.`)
  }

  const urlList = readSitemapUrls()
  if (urlList.length === 0) {
    throw new Error('No <loc> entries found in sitemap.xml')
  }

  const payload = {
    host,
    key,
    keyLocation,
    urlList
  }

  if (dryRun) {
    console.log('[IndexNow Dry-Run] Endpoint:', INDEXNOW_ENDPOINT)
    console.log('[IndexNow Dry-Run] Host:', host)
    console.log('[IndexNow Dry-Run] Key Location:', keyLocation)
    console.log('[IndexNow Dry-Run] Total URLs queued:', urlList.length)
    console.log('[IndexNow Dry-Run] Sample URLs:', urlList.slice(0, 5))
    return
  }

  const keyCheck = await fetch(keyLocation)
  const keyBody = keyCheck.ok ? (await keyCheck.text()).trim() : ''
  if (!keyCheck.ok || keyBody !== key) {
    throw new Error(
      `Remote key file check failed (${keyLocation} -> HTTP ${keyCheck.status}). Deploy the built site before submitting to IndexNow.`
    )
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload)
  })

  const text = await res.text()
  if (!res.ok) {
    throw new Error(`IndexNow submission failed: HTTP ${res.status} ${text}`)
  }

  console.log(`[IndexNow] Submitted ${urlList.length} URLs for ${host} (HTTP ${res.status}).`)
}

main().catch(err => {
  console.error('[IndexNow Error]', err.message)
  process.exit(1)
})
