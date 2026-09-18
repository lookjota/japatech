import { afterEach, describe, expect, it, vi } from 'vitest'
import { normalizeWhatsAppNumber } from './environment'

describe('WhatsApp configuration', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('normalizes local and international numbers without duplicating 55', () => {
    expect(normalizeWhatsAppNumber('61 99564-6646')).toBe('5561995646646')
    expect(normalizeWhatsAppNumber('+55 (61) 99564-6646')).toBe('5561995646646')
    expect(normalizeWhatsAppNumber('')).toBeUndefined()
  })

  it('generates an encoded WhatsApp URL when configured', async () => {
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '55 (61) 99564-6646')
    const { createWhatsAppUrl } = await import('./site')
    const url = createWhatsAppUrl('Olá, Japa Tech. TV sem imagem.')
    expect(url).toBe('https://wa.me/5561995646646?text=Ol%C3%A1%2C%20Japa%20Tech.%20TV%20sem%20imagem.')
    expect(url).not.toContain('5555')
  })

  it('does not generate a URL when the number is absent', async () => {
    vi.stubEnv('VITE_WHATSAPP_NUMBER', '')
    const { createWhatsAppUrl } = await import('./site')
    expect(createWhatsAppUrl()).toBeUndefined()
  })
})
