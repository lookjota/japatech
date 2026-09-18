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

  it('renders configured WhatsApp CTAs with valid destinations', () => {
    render(<MemoryRouter><HomePage page={homePage} /></MemoryRouter>)
    expect(screen.getByRole('link', { name: 'Chamar no WhatsApp' })).toHaveAttribute('href', expect.stringContaining('wa.me/5561995646646'))
    expect(screen.getByRole('link', { name: 'Falar sobre minha TV' })).toHaveAttribute('href', expect.stringContaining('wa.me/5561995646646'))
  })
})
