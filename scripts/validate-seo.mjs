import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { distDirectory } from './build-utils.mjs'
const sitemap = await readFile(resolve(distDirectory, 'sitemap.xml'), 'utf8')
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]))
const failures = []
for (const url of routes) { const pathname = url.pathname; const file = pathname === '/' ? resolve(distDirectory, 'index.html') : resolve(distDirectory, pathname.slice(1), 'index.html'); const html = await readFile(file, 'utf8'); if (!/<title>[^<]+<\/title>/i.test(html)) failures.push(`${pathname}: missing title`); if (!/<meta name="description" content="[^"]+"/i.test(html)) failures.push(`${pathname}: missing description`); if (!html.includes(`rel="canonical" href="${url}"`)) failures.push(`${pathname}: canonical mismatch`); if ((html.match(/<h1(?:\s|>)/gi) ?? []).length !== 1) failures.push(`${pathname}: expected one H1`); for (const block of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) try { JSON.parse(block[1]) } catch { failures.push(`${pathname}: invalid JSON-LD`) } }
const notFound = await readFile(resolve(distDirectory, '404.html'), 'utf8'); if (!/name="robots" content="noindex, follow"/i.test(notFound)) failures.push('404: missing noindex, follow'); if ((notFound.match(/<h1(?:\s|>)/gi) ?? []).length !== 1) failures.push('404: expected one H1'); if (failures.length) throw new Error(`SEO validation failed:\n- ${failures.join('\n- ')}`); console.log(`Validated ${routes.length} canonical routes and 404.`)
