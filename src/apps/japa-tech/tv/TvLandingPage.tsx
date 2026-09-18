import { Link } from 'react-router-dom'
import type { Page } from '../../../domain/pages/Page'
import { BrowserMetadataRenderer } from '../../../engine/BrowserMetadataRenderer'
import { trackEvent } from '../analytics/analytics'
import { Button, Card, Section, Surface } from '../design-system/components'
import { createWhatsAppUrl, whatsappMessages } from '../config/site'
import { ScrollReveal } from '../components/ScrollReveal'

const problems = ['Não liga', 'Sem imagem', 'Sem som', 'Tela piscando', 'Reiniciando', 'Problema de fonte', 'Problema de placa']
const steps = [
  ['01', 'Conte o problema', 'Explique o que está acontecendo com sua TV.'],
  ['02', 'Avaliação inicial', 'Analisamos as informações disponíveis sobre o caso.'],
  ['03', 'Diagnóstico e orçamento', 'Verificamos a melhor forma de atendimento.'],
  ['04', 'Reparo após aprovação', 'O reparo acontece depois da sua aprovação.'],
  ['05', 'Garantia', 'Os serviços aplicáveis contam com 3 meses de garantia.'],
] as const
const faqs = [
  ['Vocês atendem TV em domicílio?', 'Sim, dependendo do tipo de defeito. A Japa Tech avalia inicialmente o problema para verificar a melhor forma de atendimento.'],
  ['Minha TV não liga. Vocês consertam?', 'Esse é um dos problemas atendidos pela Japa Tech. O equipamento precisa ser avaliado para identificar a causa.'],
  ['Minha TV está sem imagem ou sem som. Vocês atendem?', 'Sim. Problemas de imagem e som estão entre os casos atendidos pela assistência técnica.'],
  ['Vocês trabalham com problemas de fonte e placa?', 'Sim. Problemas de fonte e placa estão dentro do escopo informado da assistência técnica de TVs.'],
  ['Qual é a garantia?', 'A Japa Tech oferece 3 meses de garantia nos serviços aplicáveis.'],
] as const

function TvMediaPlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return <div className={`tv-media-placeholder ${className}`.trim()} aria-hidden="true"><span>{label}</span><i /></div>
}

function TvWhatsAppCta({ children, message }: { children: string; message: string }) {
  const href = createWhatsAppUrl(message)
  if (!href) return null
  return <Button href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { source: 'tv-landing' })}>{children}</Button>
}

export function TvLandingPage({ page }: { page: Page }) {
  return <main className="tv-page" id="conteudo-principal">
    <BrowserMetadataRenderer metadata={page.metadata} />
    <Section className="tv-hero"><div className="tv-hero__grid"><ScrollReveal className="tv-hero__copy"><p className="eyebrow">ASSISTÊNCIA TÉCNICA DE TV</p><h1>Assistência técnica de TV no DF e Entorno</h1><p className="tv-hero__campaign">Sua TV deu problema? <span>Chama o Japa.</span></p><p className="tv-hero__supporting">Diagnóstico e reparo de TVs, com atendimento residencial conforme o defeito.</p><ul className="home-proof-list"><li>10 anos de experiência</li><li>3 meses de garantia</li></ul><TvWhatsAppCta message={whatsappMessages.tv}>Falar com o Japa</TvWhatsAppCta></ScrollReveal><TvMediaPlaceholder label="ESPAÇO RESERVADO PARA IMAGEM DE TV" /></div></Section>
    <Section className="tv-problems" aria-labelledby="tv-problems-title"><ScrollReveal className="tv-section-heading"><p className="eyebrow">PROBLEMAS COM SUA TV</p><h2 id="tv-problems-title">O que está acontecendo com a sua TV?</h2></ScrollReveal><ScrollReveal className="tv-problems-grid" delay={60}>{problems.map((problem) => <Card key={problem} className="tv-problem-card"><span className="tv-problem-card__marker" aria-hidden="true" /><h3>{problem}</h3></Card>)}<p className="tv-problems-note">Outro problema? Fale com a Japa Tech para avaliação.</p></ScrollReveal></Section>
    <Section className="tv-home-service" aria-labelledby="tv-home-service-title"><ScrollReveal className="tv-home-service__grid"><TvMediaPlaceholder label="ESPAÇO RESERVADO PARA CENA DE ATENDIMENTO" /><Surface tone="dark"><p className="eyebrow">ATENDIMENTO EM DOMICÍLIO</p><h2 id="tv-home-service-title">Dependendo do defeito, podemos ir até você.</h2><p>Você informa o problema e, a partir das informações iniciais, verificamos a melhor forma de atendimento. Em alguns casos, o atendimento pode acontecer na residência; em outros, a TV pode precisar de avaliação ou reparo em oficina.</p><TvWhatsAppCta message={whatsappMessages.tv}>Falar sobre minha TV</TvWhatsAppCta></Surface></ScrollReveal></Section>
    <Section className="tv-process" aria-labelledby="tv-process-title"><ScrollReveal className="tv-section-heading"><p className="eyebrow">COMO FUNCIONA</p><h2 id="tv-process-title">Como funciona</h2></ScrollReveal><ScrollReveal className="tv-process-list" delay={70}><ol>{steps.map(([number, title, description]) => <li key={number}><span className="home-process-list__number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></ScrollReveal></Section>
    <Section className="tv-trust" aria-labelledby="tv-trust-title"><ScrollReveal className="tv-section-heading"><p className="eyebrow">POR QUE ESCOLHER A JAPA TECH?</p><h2 id="tv-trust-title">Experiência que gera confiança.</h2></ScrollReveal><ScrollReveal className="tv-trust__facts" delay={60}><ul className="home-facts"><li><strong>10 anos</strong><span>de experiência</span></li><li><strong>Taguatinga — DF</strong><span>base física</span></li><li><strong>3 meses</strong><span>de garantia aplicável</span></li><li><strong>DF e Entorno</strong><span>área de atendimento</span></li></ul></ScrollReveal></Section>
    <Section className="tv-area" aria-labelledby="tv-area-title"><ScrollReveal><p className="eyebrow">ÁREA DE ATENDIMENTO</p><h2 id="tv-area-title">Atendimento no DF e Entorno</h2><p>Base em Taguatinga — DF, com atendimento no Distrito Federal e Entorno.</p><Link className="ds-link" to="/assistencia-tecnica">Conheça a assistência técnica</Link></ScrollReveal></Section>
    <Section className="tv-faq" aria-labelledby="tv-faq-title"><ScrollReveal className="tv-section-heading"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2 id="tv-faq-title">Perguntas sobre assistência de TV</h2></ScrollReveal><ScrollReveal className="tv-faq-list" delay={60}><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></ScrollReveal></Section>
    <Section className="tv-final-cta" aria-labelledby="tv-final-title"><ScrollReveal><p className="eyebrow">PRÓXIMO PASSO</p><h2 id="tv-final-title">Sua TV deu problema? Fale com o Japa.</h2><p>Conte o que está acontecendo com sua TV e verificamos a melhor forma de atendimento.</p><TvWhatsAppCta message={whatsappMessages.tv}>Falar sobre minha TV</TvWhatsAppCta></ScrollReveal></Section>
  </main>
}
