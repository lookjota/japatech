import { Link } from 'react-router-dom'
import type { Page } from '../../../domain/pages/Page'
import { BrowserMetadataRenderer } from '../../../engine/BrowserMetadataRenderer'
import { Button, Card, Section } from '../design-system/components'
import { trackEvent } from '../analytics/analytics'
import { createWhatsAppUrl, whatsappMessages } from '../config/site'
import { ScrollReveal } from '../components/ScrollReveal'

const categories = [
  ['TVs', '/assistencia-tecnica/tv', 'Conheça a assistência para TVs.', true],
  ['Notebooks', '/assistencia-tecnica/notebook', 'Atendimento para notebooks.', false],
  ['Computadores', '/assistencia-tecnica/computador', 'Atendimento para computadores.', false],
  ['Monitores', '/assistencia-tecnica/monitor', 'Atendimento para monitores.', false],
  ['Áudio', '/assistencia-tecnica/audio', 'Atendimento para equipamentos de áudio.', false],
] as const
const processSteps = [
  ['01', 'Contato', 'Conte qual equipamento precisa de atenção.'],
  ['02', 'Avaliação inicial', 'Entendemos as informações disponíveis sobre o item.'],
  ['03', 'Diagnóstico e orçamento', 'Indicamos a melhor forma de seguir com o atendimento.'],
  ['04', 'Reparo após aprovação', 'O equipamento segue para a execução combinada.'],
  ['05', 'Garantia', 'O serviço conta com 3 meses de garantia aplicável.'],
] as const

function MediaPlaceholder({ label }: { label: string }) {
  return <div className="home-media-placeholder assistance-hub__media" aria-hidden="true"><span>{label}</span><i /></div>
}

function WhatsAppCta({ children }: { children: string }) {
  const href = createWhatsAppUrl(whatsappMessages.general)
  if (!href) return null
  return <Button href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { source: 'assistance-hub' })}>{children}</Button>
}

export function AssistanceHubPage({ page }: { page: Page }) {
  return <main className="assistance-hub" id="conteudo-principal">
    <BrowserMetadataRenderer metadata={page.metadata} />
    <Section className="assistance-hub__hero"><div className="assistance-hub__hero-grid"><ScrollReveal className="assistance-hub__hero-copy"><p className="eyebrow">ASSISTÊNCIA TÉCNICA</p><h1>Assistência técnica para seus eletrônicos</h1><p className="assistance-hub__supporting">Atendimento para TVs, notebooks, computadores, monitores, áudio e outros eletrônicos sob avaliação no DF e Entorno.</p><ul className="home-proof-list"><li>10 anos de experiência</li><li>3 meses de garantia</li></ul><WhatsAppCta>Chamar no WhatsApp</WhatsAppCta></ScrollReveal><MediaPlaceholder label="ESPAÇO RESERVADO PARA IMAGEM TÉCNICA" /></div></Section>
    <Section className="assistance-hub__categories" aria-labelledby="assistance-categories-title"><ScrollReveal className="assistance-hub__heading"><p className="eyebrow">CATEGORIAS DE ASSISTÊNCIA</p><h2 id="assistance-categories-title">Escolha o equipamento</h2><p>Encontre a categoria do seu eletrônico e veja o próximo passo.</p></ScrollReveal><ScrollReveal className="assistance-hub__category-grid" delay={60}>{categories.map(([label, href, description, featured]) => <Card className={`assistance-hub__category-card${featured ? ' is-featured' : ''}`} key={href}><MediaPlaceholder label={`PLACEHOLDER · ${label.toUpperCase()}`} /><div><h3>{label}</h3><p>{description}</p><Link className="ds-link" to={href}>Ver categoria <span aria-hidden="true">↗</span></Link></div></Card>)}</ScrollReveal></Section>
    <Section className="assistance-hub__process" aria-labelledby="assistance-process-title"><ScrollReveal className="assistance-hub__heading"><p className="eyebrow">COMO FUNCIONA</p><h2 id="assistance-process-title">Do contato à solução, sem complicação.</h2></ScrollReveal><ScrollReveal className="assistance-hub__process-list" delay={70}><ol>{processSteps.map(([number, title, description]) => <li key={number}><span className="home-process-list__number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></ScrollReveal></Section>
    <Section className="assistance-hub__trust" aria-labelledby="assistance-trust-title"><ScrollReveal className="assistance-hub__heading"><p className="eyebrow">POR QUE ESCOLHER A JAPA TECH?</p><h2 id="assistance-trust-title">Experiência que gera confiança.</h2></ScrollReveal><ScrollReveal className="assistance-hub__facts" delay={60}><ul className="home-facts"><li><strong>10 anos</strong><span>de experiência</span></li><li><strong>Taguatinga — DF</strong><span>base física</span></li><li><strong>3 meses</strong><span>de garantia aplicável</span></li><li><strong>DF e Entorno</strong><span>área de atendimento</span></li></ul></ScrollReveal></Section>
    <Section className="assistance-hub__other" aria-labelledby="assistance-other-title"><ScrollReveal><p className="eyebrow">OUTROS ELETRÔNICOS</p><h2 id="assistance-other-title">Precisa de assistência para outro eletrônico?</h2><p>Fale com a Japa Tech para verificarmos o atendimento.</p><WhatsAppCta>Falar com a Japa Tech</WhatsAppCta></ScrollReveal></Section>
    <Section className="assistance-hub__final" aria-labelledby="assistance-final-title"><ScrollReveal><p className="eyebrow">PRÓXIMO PASSO</p><h2 id="assistance-final-title">Conte com a Japa Tech.</h2><p>Escolha seu equipamento ou fale conosco para avaliarmos o atendimento.</p><WhatsAppCta>Chamar no WhatsApp</WhatsAppCta></ScrollReveal></Section>
  </main>
}
