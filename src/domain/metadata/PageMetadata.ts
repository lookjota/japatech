export type JsonLdValue = string | number | boolean | null | JsonLdObject | JsonLdValue[]
export interface JsonLdObject { [property: string]: JsonLdValue }
export interface PageMetadata { title: string; description: string; locale: string; siteName: string; canonicalUrl?: string; robots: { index: boolean; follow: boolean }; structuredData?: JsonLdObject[] }
