import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { publicRoutes } from '../config/routes'
import { AssistanceHubPage } from './AssistanceHubPage'

const page = publicRoutes.find(({ pathname }) => pathname === '/assistencia-tecnica')!.page

describe('assistance hub', () => {
  it('renders the hub hierarchy and five category destinations', () => {
    render(<MemoryRouter><AssistanceHubPage page={page} /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Assistência técnica para seus eletrônicos')
    const categoryLinks = screen.getAllByRole('link', { name: /Ver categoria/ })
    expect(categoryLinks).toHaveLength(5)
    expect(categoryLinks.map((link) => link.getAttribute('href'))).toEqual([
      '/assistencia-tecnica/tv',
      '/assistencia-tecnica/notebook',
      '/assistencia-tecnica/computador',
      '/assistencia-tecnica/monitor',
      '/assistencia-tecnica/audio',
    ])
  })

  it('shows the approved process, trust facts and configured WhatsApp CTAs', () => {
    render(<MemoryRouter><AssistanceHubPage page={page} /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: 'Do contato à solução, sem complicação.' })).toBeInTheDocument()
    expect(screen.getByText('10 anos')).toBeInTheDocument()
    expect(screen.getByText('Taguatinga — DF')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Chamar no WhatsApp' })).toHaveLength(2)
    expect(within(screen.getByRole('main')).getAllByRole('link', { name: /WhatsApp/ })).toHaveLength(2)
  })
})
