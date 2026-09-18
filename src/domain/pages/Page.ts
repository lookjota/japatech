import type { PageMetadata } from '../metadata/PageMetadata'
export interface Page { id: string; slug: string; metadata: PageMetadata; heading: string; summary: string }
