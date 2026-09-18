import { describe, expect, it } from 'vitest'
import { businessConfig } from './business'
describe('businessConfig', () => { it('keeps unknown contact details unconfigured', () => { expect(businessConfig.contact).toEqual({ phone: null, whatsapp: null, email: null }) }) })
