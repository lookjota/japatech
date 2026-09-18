import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { Page } from '../../../domain/pages/Page'
import { BrowserMetadataRenderer } from '../../../engine/BrowserMetadataRenderer'
import { Button, Section } from '../design-system/components'
import { trackEvent } from '../analytics/analytics'
import { createWhatsAppUrl } from '../config/site'
import { ScrollReveal } from '../components/ScrollReveal'
import type { ServiceVertical } from './serviceVerticals'

const processSteps = [
  ['01', 'Contato', 'Conte qual equipamento precisa de atenção.'],
  ['02', 'Avaliação inicial', 'Entendemos as informações disponíveis sobre o item.'],
  ['03', 'Diagnóstico e orçamento', 'Indicamos a melhor forma de seguir com o atendimento.'],
  ['04', 'Reparo após aprovação', 'O equipamento segue para a execução combinada.'],
  ['05', 'Garantia', 'O serviço conta com 3 meses de garantia aplicável.'],
] as const

function MediaPlaceholder({ label }: { label: string }) {
  return <div className="home-media-placeholder vertical-service__media" aria-hidden="true"><span>{label}</span><i /></div>
}

function WhatsAppCta({ vertical, children }: { vertical: ServiceVertical; children: ReactNode }) {
  const href = createWhatsAppUrl(vertical.whatsappMessage)
  if (!href) return null
  return <Button href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { source: `vertical-${vertical.equipment}` })}>{children}</Button>
}

export function ServiceVerticalPage({ page, vertical }: { page: Page; vertical: ServiceVertical }) {
  return <main className="vertical-service" id="conteudo-principal">
    <BrowserMetadataRenderer metadata={page.metadata} />
    <Section className="vertical-service__hero"><div className="vertical-service__hero-grid"><ScrollReveal className="vertical-service__hero-copy"><p className="eyebrow">{vertical.eyebrow}</p><h1>{vertical.heading}</h1><p className="vertical-service__supporting">{vertical.supporting}</p><ul className="home-proof-list"><li>10 anos de experiência</li><li>3 meses de garantia</li></ul><WhatsAppCta vertical={vertical}>Falar sobre meu {vertical.equipment}</WhatsAppCta></ScrollReveal><MediaPlaceholder label={vertical.placeholder} /></div></Section>
    <Section className="vertical-service__scope" aria-labelledby="vertical-scope-title"><ScrollReveal className="vertical-service__scope-grid"><div><p className="eyebrow">ESCOPO DA ASSISTÊNCIA</p><h2 id="vertical-scope-title">Avaliação para definir o melhor reparo.</h2><p>{vertical.scope}</p><Link className="ds-link" to="/assistencia-tecnica">Ver todas as categorias <span aria-hidden="true">↗</span></Link></div><MediaPlaceholder label={`PLACEHOLDER · ${vertical.equipment.toUpperCase()}`} /></ScrollReveal></Section>
    <Section className="vertical-service__process" aria-labelledby="vertical-process-title"><ScrollReveal className="vertical-service__heading"><p className="eyebrow">COMO FUNCIONA</p><h2 id="vertical-process-title">Do contato à solução, sem complicação.</h2></ScrollReveal><ScrollReveal className="vertical-service__process-list" delay={70}><ol>{processSteps.map(([number, title, description]) => <li key={number}><span className="home-process-list__number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></ScrollReveal></Section>
    <Section className="vertical-service__trust" aria-labelledby="vertical-trust-title"><ScrollReveal className="vertical-service__heading"><p className="eyebrow">POR QUE ESCOLHER A JAPA TECH?</p><h2 id="vertical-trust-title">Experiência que gera confiança.</h2></ScrollReveal><ScrollReveal className="vertical-service__facts" delay={60}><ul className="home-facts"><li><strong>10 anos</strong><span>de experiência</span></li><li><strong>Taguatinga — DF</strong><span>base física</span></li><li><strong>3 meses</strong><span>de garantia aplicável</span></li><li><strong>DF e Entorno</strong><span>área de atendimento</span></li></ul></ScrollReveal></Section>
    <Section className="vertical-service__area" aria-labelledby="vertical-area-title"><ScrollReveal><p className="eyebrow">ÁREA DE ATENDIMENTO</p><h2 id="vertical-area-title">Atendimento no DF e Entorno</h2><p>Base em Taguatinga — DF, com atendimento no Distrito Federal e Entorno.</p><Link className="ds-link" to="/assistencia-tecnica">Conheça a assistência técnica</Link></ScrollReveal></Section>
    <Section className="vertical-service__final" aria-labelledby="vertical-final-title"><ScrollReveal><p className="eyebrow">PRÓXIMO PASSO</p><h2 id="vertical-final-title">Fale sobre seu {vertical.equipment}.</h2><p>Conte qual equipamento precisa de atenção e verificamos a melhor forma de atendimento.</p><WhatsAppCta vertical={vertical}>Falar sobre meu {vertical.equipment}</WhatsAppCta></ScrollReveal></Section>
  </main>
}
