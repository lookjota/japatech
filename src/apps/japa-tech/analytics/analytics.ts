declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; clarity?: (...args: unknown[]) => void } }

export type AnalyticsEvent = 'whatsapp_click' | 'service_view' | 'tv_whatsapp_click' | 'product_inquiry'

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, string> = {}) {
  window.gtag?.('event', event, parameters)
}
