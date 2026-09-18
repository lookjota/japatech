import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { publicRoutes } from '../config/routes'
import { TvLandingPage } from './TvLandingPage'

const tvPage = publicRoutes.find(({ pathname }) => pathname === '/assistencia-tecnica/tv')!.page

describe('TV landing page', () => {
  it('renders the TV-specific hierarchy and confirmed problem scope', () => {
    render(<MemoryRouter><TvLandingPage page={tvPage} /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Assistência técnica de TV no DF e Entorno')
    for (const problem of ['Não liga', 'Sem imagem', 'Sem som', 'Tela piscando', 'Reiniciando', 'Problema de fonte', 'Problema de placa']) expect(screen.getByRole('heading', { name: problem })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dependendo do defeito, podemos ir até você.' })).toBeInTheDocument()
  }, 10000)

  it('keeps WhatsApp CTAs absent without configuration and renders visible FAQs', () => {
    render(<MemoryRouter><TvLandingPage page={tvPage} /></MemoryRouter>)
    expect(screen.queryByRole('link', { name: 'Falar com o Japa' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Falar sobre minha TV' })).not.toBeInTheDocument()
    expect(screen.getByText('Vocês atendem TV em domicílio?')).toBeInTheDocument()
    expect(screen.getByText('Qual é a garantia?')).toBeInTheDocument()
  })
})
