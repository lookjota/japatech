import { businessConfig } from './business'
import { publicConfig } from './environment'

export const siteConfig = { siteName: businessConfig.name, locale: 'pt-BR', siteUrl: publicConfig.publicSiteUrl, analytics: { ga4Id: publicConfig.ga4Id, clarityId: publicConfig.clarityId } } as const
export function absoluteUrl(path: string) { return siteConfig.siteUrl ? new URL(path, `${siteConfig.siteUrl}/`).toString() : undefined }
