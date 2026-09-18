import { describe, expect, it } from 'vitest'
import { pages } from './pages'
describe('Japa Tech page foundation', () => { it('declares the required route set with one H1 source each', () => { expect(pages.map((page) => page.slug)).toContain('/assistencia-tecnica/tv'); expect(new Set(pages.map((page) => page.slug)).size).toBe(pages.length); expect(pages.every((page) => page.heading.length > 0)).toBe(true) }) })
