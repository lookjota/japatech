import { pages } from '../content/pages'
export const publicRoutes = pages.map((page) => ({ pathname: page.slug, page, includeInSitemap: true, prerender: true }))
