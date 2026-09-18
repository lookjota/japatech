function optionalValue(value: string | undefined) { return value?.trim() || undefined }
export function normalizeWhatsAppNumber(value: string | undefined) {
  const digits = value?.replace(/\D/g, '')
  if (!digits) return undefined
  return digits.startsWith('55') ? digits : `55${digits}`
}
function withoutTrailingSlashes(value: string) { return value.replace(/\/+$/, '') }
function publicUrl(value: string | undefined) {
  if (!value) return undefined
  try { return withoutTrailingSlashes(new URL(value).toString()) } catch { throw new Error('VITE_PUBLIC_SITE_URL deve ser uma URL absoluta válida.') }
}
export const publicConfig = {
  publicSiteUrl: publicUrl(optionalValue(import.meta.env.VITE_PUBLIC_SITE_URL)),
  whatsappNumber: normalizeWhatsAppNumber(import.meta.env.VITE_WHATSAPP_NUMBER),
  ga4Id: optionalValue(import.meta.env.VITE_GA4_ID),
  clarityId: optionalValue(import.meta.env.VITE_CLARITY_ID),
} as const
