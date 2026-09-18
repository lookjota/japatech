import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { distDirectory, loadServerEntry } from './build-utils.mjs'
const { publicRoutes } = await loadServerEntry()
const indexed = publicRoutes.filter((route) => route.includeInSitemap && route.page.metadata.canonicalUrl)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexed.map((route) => `  <url><loc>${route.page.metadata.canonicalUrl}</loc></url>`).join('\n')}\n</urlset>\n`
const origin = indexed[0] ? new URL(indexed[0].page.metadata.canonicalUrl).origin : undefined
await Promise.all([writeFile(resolve(distDirectory, 'sitemap.xml'), sitemap), writeFile(resolve(distDirectory, 'robots.txt'), `User-agent: *\nAllow: /\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ''}`)])
console.log(`Generated SEO files for ${indexed.length} canonical routes.`)
