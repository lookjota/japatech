import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { homePage } from '../content/pages'
import { HomePage } from './HomePage'

describe('home page', () => {
  it('renders the approved commercial hierarchy and five service categories', () => {
    render(<MemoryRouter><HomePage page={homePage} /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Deu problema?Chama o Japa.')
    expect(screen.getByRole('heading', { name: 'Assistência técnica especializada' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sua TV deu problema? Podemos ir até você.' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Ver categoria/ })).toHaveLength(5)
  })

  it('does not render a dead WhatsApp CTA without a configured number', () => {
    render(<MemoryRouter><HomePage page={homePage} /></MemoryRouter>)
    expect(screen.queryByRole('link', { name: 'Chamar no WhatsApp' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Falar sobre minha TV' })).not.toBeInTheDocument()
  })
})
