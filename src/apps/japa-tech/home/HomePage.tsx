import { BrowserMetadataRenderer } from '../../../engine/BrowserMetadataRenderer'
import { Link } from 'react-router-dom'
import type { Page } from '../../../domain/pages/Page'
import { Button, Card, Section, Surface } from '../design-system/components'
import { trackEvent } from '../analytics/analytics'
import { createWhatsAppUrl, whatsappMessages } from '../config/site'
import { ScrollReveal } from '../components/ScrollReveal'

const services = [
  ['TVs', '/assistencia-tecnica/tv', 'Atendimento técnico para TVs.'],
  ['Notebooks', '/assistencia-tecnica/notebook', 'Atendimento técnico para notebooks.'],
  ['Computadores', '/assistencia-tecnica/computador', 'Atendimento técnico para computadores.'],
  ['Monitores', '/assistencia-tecnica/monitor', 'Atendimento técnico para monitores.'],
  ['Áudio', '/assistencia-tecnica/audio', 'Atendimento técnico para equipamentos de áudio.'],
] as const

const processSteps = [
  ['01', 'Entre em contato', 'Conte qual equipamento precisa de atenção.'],
  ['02', 'Avaliação inicial', 'Entendemos as informações disponíveis sobre o item.'],
  ['03', 'Diagnóstico e orçamento', 'Indicamos a melhor forma de seguir com o atendimento.'],
  ['04', 'Reparo', 'O equipamento segue para a execução combinada.'],
  ['05', 'Garantia', 'O serviço conta com 3 meses de garantia aplicável.'],
] as const

function MediaPlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return <div className={`home-media-placeholder ${className}`.trim()} aria-hidden="true"><span>{label}</span><i /></div>
}

function WhatsAppCta({ children, message, className = '' }: { children: string; message: string; className?: string }) {
  const href = createWhatsAppUrl(message)
  if (!href) return null
  return <Button className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { source: 'home' })}>{children}</Button>
}

export function HomePage({ page }: { page: Page }) {
  return <main className="home-page" id="conteudo-principal">
    <BrowserMetadataRenderer metadata={page.metadata} />
    <Section className="home-hero"><div className="home-hero__grid"><div className="home-hero__copy"><p className="eyebrow">ASSISTÊNCIA TÉCNICA E ELETRÔNICOS</p><h1>Deu problema?<br /><span>Chama o Japa.</span></h1><p className="home-hero__supporting">Assistência técnica para TVs, notebooks, computadores, monitores e eletrônicos no DF e Entorno.</p><ul className="home-proof-list"><li>10 anos de experiência</li><li>3 meses de garantia</li></ul><WhatsAppCta message={whatsappMessages.general}>Chamar no WhatsApp</WhatsAppCta></div><MediaPlaceholder className="home-hero__media" label="ESPAÇO RESERVADO PARA IMAGEM TÉCNICA" /></div></Section>
    <Section className="home-services" aria-labelledby="services-title"><ScrollReveal className="home-section-heading"><p className="eyebrow">NOSSOS SERVIÇOS</p><h2 id="services-title">Assistência técnica especializada</h2><p className="home-section-intro">Equipamentos presentes no dia a dia recebem avaliação e reparo profissional.</p></ScrollReveal><ScrollReveal className="home-service-grid" delay={60}>{services.map(([label, href, description]) => <Card className="home-service-card" key={href}><MediaPlaceholder label={`PLACEHOLDER · ${label.toUpperCase()}`} /><div className="home-service-card__body"><h3>{label}</h3><p>{description}</p><Link className="ds-link" to={href}>Ver categoria <span aria-hidden="true">↗</span></Link></div></Card>)}</ScrollReveal></Section>
    <Section className="home-tv" aria-labelledby="tv-home-title"><ScrollReveal className="home-tv__grid"><MediaPlaceholder className="home-tv__media" label="ESPAÇO RESERVADO PARA CENA RESIDENCIAL" /><Surface tone="dark"><p className="eyebrow">ATENDIMENTO DIFERENCIADO</p><h2 id="tv-home-title">Sua TV deu problema? Podemos ir até você.</h2><p>Dependendo do defeito, o atendimento pode ser realizado na sua residência. Você informa o problema e verificamos a melhor forma de atendimento.</p><WhatsAppCta message={whatsappMessages.tv}>Falar sobre minha TV</WhatsAppCta></Surface></ScrollReveal></Section>
    <Section className="home-process" aria-labelledby="process-title"><ScrollReveal className="home-section-heading"><p className="eyebrow">COMO FUNCIONA</p><h2 id="process-title">Do contato à solução, sem complicação.</h2></ScrollReveal><ScrollReveal className="home-process-list" delay={70}><ol>{processSteps.map(([number, title, description]) => <li key={number}><span className="home-process-list__number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></ScrollReveal></Section>
    <Section className="home-trust" aria-labelledby="trust-title"><ScrollReveal className="home-section-heading"><p className="eyebrow">POR QUE ESCOLHER A JAPA TECH?</p><h2 id="trust-title">Experiência que gera confiança.</h2></ScrollReveal><ScrollReveal className="home-trust__grid" delay={60}><p className="home-trust__statement">Uma base física em Taguatinga, experiência acumulada e atendimento no DF e Entorno.</p><ul className="home-facts"><li><strong>10 anos</strong><span>de experiência</span></li><li><strong>Taguatinga — DF</strong><span>loja/base física</span></li><li><strong>3 meses</strong><span>de garantia aplicável</span></li><li><strong>DF e Entorno</strong><span>área de atendimento</span></li></ul></ScrollReveal></Section>
    <Section className="home-products" aria-labelledby="products-title"><ScrollReveal className="home-products__grid"><div><p className="eyebrow">ELETRÔNICOS</p><h2 id="products-title">Produtos também é com a Japa Tech.</h2><p className="home-section-intro">Computadores, notebooks, monitores, fones, acessórios e outros eletrônicos.</p><Link className="ds-button ds-button--secondary" to="/produtos">Consultar produtos</Link></div><MediaPlaceholder label="ESPAÇO RESERVADO PARA PRODUTOS" /></ScrollReveal></Section>
  </main>
}
