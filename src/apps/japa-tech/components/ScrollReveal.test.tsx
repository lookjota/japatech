import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ScrollReveal } from './ScrollReveal'

describe('ScrollReveal', () => {
  it('keeps content in the document and exposes the reveal primitive', () => {
    render(<ScrollReveal><p>Visible content</p></ScrollReveal>)
    expect(screen.getByText('Visible content')).toBeInTheDocument()
    expect(screen.getByText('Visible content').parentElement).toHaveClass('reveal')
  })
})
