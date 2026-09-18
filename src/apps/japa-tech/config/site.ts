import { businessConfig } from './business'
import { publicConfig } from './environment'

export const siteConfig = { siteName: businessConfig.name, locale: 'pt-BR', siteUrl: publicConfig.publicSiteUrl, analytics: { ga4Id: publicConfig.ga4Id, clarityId: publicConfig.clarityId } } as const
export const whatsappMessages = {
  general: 'Olá! Gostaria de falar com a JAPA TECH.',
  tv: 'Olá, Japa Tech. Preciso de assistência para minha TV. Marca/modelo: ____. Problema: ____.',
} as const
export function absoluteUrl(path: string) { return siteConfig.siteUrl ? new URL(path, `${siteConfig.siteUrl}/`).toString() : undefined }
export function createWhatsAppUrl(message: string = whatsappMessages.general) {
  if (!publicConfig.whatsappNumber) return undefined
  return `https://wa.me/${publicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
