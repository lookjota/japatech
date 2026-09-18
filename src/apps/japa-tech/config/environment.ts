function optionalValue(value: string | undefined) { return value?.trim() || undefined }
function withoutTrailingSlashes(value: string) { return value.replace(/\/+$/, '') }
function publicUrl(value: string | undefined) {
  if (!value) return undefined
  try { return withoutTrailingSlashes(new URL(value).toString()) } catch { throw new Error('VITE_PUBLIC_SITE_URL deve ser uma URL absoluta válida.') }
}
export const publicConfig = {
  publicSiteUrl: publicUrl(optionalValue(import.meta.env.VITE_PUBLIC_SITE_URL)),
  whatsappNumber: optionalValue(import.meta.env.VITE_WHATSAPP_NUMBER),
  ga4Id: optionalValue(import.meta.env.VITE_GA4_ID),
  clarityId: optionalValue(import.meta.env.VITE_CLARITY_ID),
} as const
