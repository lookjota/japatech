import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
export const projectRoot = resolve(import.meta.dirname, '..')
export const distDirectory = resolve(projectRoot, 'dist')
export async function loadServerEntry() { return import(`${pathToFileURL(resolve(distDirectory, 'server', 'entry-server.js')).href}?time=${Date.now()}`) }
export function escapeHtml(value) { return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;') }
