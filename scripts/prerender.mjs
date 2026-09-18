import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { distDirectory, escapeHtml, loadServerEntry } from './build-utils.mjs'
const template = await readFile(resolve(distDirectory, 'index.html'), 'utf8')
const { publicRoutes, notFoundPage, render } = await loadServerEntry()
function head(metadata) { const robots = `${metadata.robots.index ? 'index' : 'noindex'}, ${metadata.robots.follow ? 'follow' : 'nofollow'}`; const jsonLd = (metadata.structuredData ?? []).map((item) => `<script type="application/ld+json" data-page-structured-data>${JSON.stringify(item).replaceAll('<', '\\u003c')}</script>`).join(''); return `<title>${escapeHtml(metadata.title)}</title><meta name="description" content="${escapeHtml(metadata.description)}" /><meta name="robots" content="${robots}" />${metadata.canonicalUrl ? `<link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" />` : ''}<meta property="og:type" content="website" /><meta property="og:title" content="${escapeHtml(metadata.title)}" /><meta property="og:description" content="${escapeHtml(metadata.description)}" /><meta property="og:locale" content="${metadata.locale}" /><meta property="og:site_name" content="${escapeHtml(metadata.siteName)}" />${metadata.canonicalUrl ? `<meta property="og:url" content="${escapeHtml(metadata.canonicalUrl)}" />` : ''}<meta name="twitter:card" content="summary" /><meta name="twitter:title" content="${escapeHtml(metadata.title)}" /><meta name="twitter:description" content="${escapeHtml(metadata.description)}" />${jsonLd}` }
function documentFor(page, markup) { return template.replace(/<title>[\s\S]*?<\/title>/i, '').replace('</head>', `${head(page.metadata)}</head>`).replace('<div id="root"></div>', `<div id="root">${markup}</div>`) }
async function writePage(pathname, page) { const html = documentFor(page, render(pathname)); const target = pathname === '/' ? resolve(distDirectory, 'index.html') : resolve(distDirectory, pathname.slice(1), 'index.html'); await mkdir(dirname(target), { recursive: true }); await writeFile(target, html); if (pathname !== '/') await writeFile(resolve(distDirectory, `${pathname.slice(1)}.html`), html) }
for (const route of publicRoutes) if (route.prerender) await writePage(route.pathname, route.page)
await writeFile(resolve(distDirectory, '404.html'), documentFor(notFoundPage, render('/missing')))
await writePage('/__design-system', {
  metadata: {
    title: 'Design System Preview | JAPA TECH',
    description: 'Preview técnico interno do Design System da JAPA TECH.',
    locale: 'pt-BR',
    siteName: 'JAPA TECH',
    robots: { index: false, follow: false },
  },
})
console.log(`Prerendered ${publicRoutes.length} public routes, technical preview and 404.`)
