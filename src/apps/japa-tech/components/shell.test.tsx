import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { Header } from './Header'

function renderShell(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><Header /><Footer /></MemoryRouter>)
}

describe('global shell', () => {
  it('renders accessible landmarks and active navigation state', () => {
    renderShell('/produtos')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Navegação principal' })).toBeInTheDocument()
    expect(within(screen.getByRole('navigation', { name: 'Navegação principal' })).getByRole('link', { name: 'Produtos' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('opens and closes the mobile menu with the expected state', () => {
    renderShell()
    const menu = screen.getByRole('button', { name: 'Abrir menu' })
    expect(menu).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Navegação móvel' })).not.toBeInTheDocument()
    fireEvent.click(menu)
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true')
    const mobileNavigation = screen.getByRole('navigation', { name: 'Navegação móvel' })
    expect(mobileNavigation).toBeInTheDocument()
    expect(within(mobileNavigation).getAllByRole('link')).toHaveLength(4)
    expect(within(mobileNavigation).queryByRole('link', { name: 'Política de Privacidade' })).not.toBeInTheDocument()
    expect(within(mobileNavigation).queryByRole('link', { name: 'Termos de Uso' })).not.toBeInTheDocument()
    fireEvent.click(within(mobileNavigation).getByRole('link', { name: 'Sobre' }))
    expect(screen.queryByRole('navigation', { name: 'Navegação móvel' })).not.toBeInTheDocument()
  })

  it('does not render a WhatsApp CTA without configuration', () => {
    renderShell()
    expect(screen.queryByRole('link', { name: /WhatsApp/i })).not.toBeInTheDocument()
  })
})
