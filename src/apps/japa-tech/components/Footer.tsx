import { Link } from 'react-router-dom'
import { createWhatsAppUrl } from '../config/site'
import { Button, Container } from '../design-system/components'
import { trackEvent } from '../analytics/analytics'
import { BrandMark } from './BrandMark'

const serviceLinks = [
  ['TVs', '/assistencia-tecnica/tv'], ['Notebooks', '/assistencia-tecnica/notebook'], ['Computadores', '/assistencia-tecnica/computador'], ['Monitores', '/assistencia-tecnica/monitor'], ['Áudio', '/assistencia-tecnica/audio'],
] as const
const navigationLinks = [['Assistência Técnica', '/assistencia-tecnica'], ['Produtos', '/produtos'], ['Sobre', '/sobre'], ['Contato', '/contato']] as const

export function Footer() {
  const whatsappHref = createWhatsAppUrl()
  return <footer className="site-footer"><Container><div className="site-footer__top"><div className="site-footer__brand"><BrandMark /><p>Assistência Técnica e Eletrônicos.</p></div><nav aria-label="Navegação do rodapé"><h2>Navegação</h2><ul>{navigationLinks.map(([label, href]) => <li key={href}><Link className="ds-link" to={href}>{label}</Link></li>)}</ul></nav><nav aria-label="Categorias de assistência técnica"><h2>Serviços</h2><ul>{serviceLinks.map(([label, href]) => <li key={href}><Link className="ds-link" to={href}>{label}</Link></li>)}</ul></nav><div className="site-footer__contact"><h2>Contato</h2><p>Taguatinga — DF<br />Atendimento no DF e Entorno</p>{whatsappHref && <Button href={whatsappHref} variant="dark" size="compact" target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { source: 'footer' })}>WhatsApp</Button>}</div><nav aria-label="Links legais"><h2>Legal</h2><ul><li><Link className="ds-link" to="/politica-de-privacidade">Política de Privacidade</Link></li><li><Link className="ds-link" to="/termos-de-uso">Termos de Uso</Link></li></ul></nav></div><div className="site-footer__bottom"><small>JAPA TECH · Assistência Técnica e Eletrônicos</small></div></Container></footer>
}
