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

  it('renders contextual WhatsApp CTAs and visible FAQs when configured', () => {
    render(<MemoryRouter><TvLandingPage page={tvPage} /></MemoryRouter>)
    expect(screen.getByRole('link', { name: 'Falar com o Japa' })).toHaveAttribute('href', expect.stringContaining('wa.me/5561995646646'))
    expect(screen.getAllByRole('link', { name: 'Falar sobre minha TV' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Falar com o Japa' }).getAttribute('href')).toContain('Marca%2Fmodelo')
    expect(screen.getByText('Vocês atendem TV em domicílio?')).toBeInTheDocument()
    expect(screen.getByText('Qual é a garantia?')).toBeInTheDocument()
  })
})
