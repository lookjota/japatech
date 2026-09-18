import type { JsonLdObject } from '../../../domain/metadata/PageMetadata'
import type { Page } from '../../../domain/pages/Page'
import { absoluteUrl, siteConfig } from '../config/site'

const pageDefinitions = [
  ['home', '/', 'JAPA TECH — Assistência Técnica e Eletrônicos', 'Fundação digital da JAPA TECH, assistência técnica e eletrônicos em Taguatinga, DF.'],
  ['technical-assistance', '/assistencia-tecnica', 'Assistência Técnica | JAPA TECH', 'Informações sobre assistência técnica da JAPA TECH.'],
  ['tv', '/assistencia-tecnica/tv', 'Assistência Técnica de TV no DF e Entorno | JAPA TECH', 'Assistência técnica de TV no DF e Entorno para problemas de imagem, som, fonte e placa.'],
  ['notebook', '/assistencia-tecnica/notebook', 'Assistência Técnica para Notebook | JAPA TECH', 'Página técnica de assistência para notebook da JAPA TECH.'],
  ['computer', '/assistencia-tecnica/computador', 'Assistência Técnica para Computador | JAPA TECH', 'Página técnica de assistência para computador da JAPA TECH.'],
  ['monitor', '/assistencia-tecnica/monitor', 'Assistência Técnica para Monitor | JAPA TECH', 'Página técnica de assistência para monitor da JAPA TECH.'],
  ['audio', '/assistencia-tecnica/audio', 'Assistência Técnica para Áudio | JAPA TECH', 'Página técnica de assistência para áudio da JAPA TECH.'],
  ['products', '/produtos', 'Produtos | JAPA TECH', 'Página de produtos da JAPA TECH.'],
  ['about', '/sobre', 'Sobre | JAPA TECH', 'Informações institucionais da JAPA TECH.'],
  ['contact', '/contato', 'Contato | JAPA TECH', 'Canais de contato da JAPA TECH.'],
  ['privacy', '/politica-de-privacidade', 'Política de Privacidade | JAPA TECH', 'Política de privacidade da JAPA TECH.'],
  ['terms', '/termos-de-uso', 'Termos de Uso | JAPA TECH', 'Termos de uso da JAPA TECH.'],
] as const

function structuredData(title: string, description: string, slug: string): JsonLdObject[] {
  const url = absoluteUrl(slug)
  if (!url) return []
  return [{ '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url, inLanguage: siteConfig.locale, isPartOf: { '@type': 'WebSite', name: siteConfig.siteName, url: absoluteUrl('/')! } }]
}
export const pages: Page[] = pageDefinitions.map(([id, slug, title, description]) => ({ id, slug, heading: title, summary: description, metadata: { title, description, locale: siteConfig.locale, siteName: siteConfig.siteName, canonicalUrl: absoluteUrl(slug), robots: { index: true, follow: true }, structuredData: structuredData(title, description, slug) } }))
export const homePage = pages.find((page) => page.slug === '/')!
export const notFoundPage: Page = { id: 'not-found', slug: '/404', heading: 'Página não encontrada', summary: 'A página solicitada não está disponível.', metadata: { title: 'Página não encontrada | JAPA TECH', description: 'Página não encontrada na JAPA TECH.', locale: siteConfig.locale, siteName: siteConfig.siteName, robots: { index: false, follow: true } } }
