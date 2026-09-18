import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../design-system/components'
import { trackEvent } from '../analytics/analytics'
import { createWhatsAppUrl } from '../config/site'
import { BrandMark } from './BrandMark'

const primaryLinks = [
  { label: 'Assistência Técnica', href: '/assistencia-tecnica' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
] as const

function isCurrentPath(pathname: string, href: string) {
  return href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)
}

function WhatsAppAction({ mobile = false }: { mobile?: boolean }) {
  const href = createWhatsAppUrl()
  if (!href) return null
  return <Button className={mobile ? 'shell-mobile-whatsapp' : ''} href={href} variant="primary" size={mobile ? 'compact' : 'default'} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { source: 'header' })}>{mobile ? 'WhatsApp' : 'Chamar no WhatsApp'}</Button>
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const closeMenu = () => setMenuOpen(false)

  return <header className="site-header">
    <div className="ds-container site-header__inner">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Navegação principal"><ul>{primaryLinks.map((link) => <li key={link.href}><Link className={isCurrentPath(location.pathname, link.href) ? 'is-current' : ''} to={link.href} aria-current={isCurrentPath(location.pathname, link.href) ? 'page' : undefined}>{link.label}</Link></li>)}</ul></nav>
      <div className="site-header__actions"><WhatsAppAction /><WhatsAppAction mobile /><button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen((open) => !open)}><span className="menu-toggle__icon" aria-hidden="true" /></button></div>
    </div>
    {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel"><ul>{primaryLinks.map((link) => <li key={link.href}><Link onClick={closeMenu} className={isCurrentPath(location.pathname, link.href) ? 'is-current' : ''} to={link.href} aria-current={isCurrentPath(location.pathname, link.href) ? 'page' : undefined}>{link.label}</Link></li>)}</ul></nav>}
  </header>
}
