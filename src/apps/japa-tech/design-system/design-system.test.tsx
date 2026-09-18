import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button, Card, Container, Section } from './components'

describe('design system primitives', () => {
  it('renders button variants and native disabled semantics', () => {
    render(<><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button disabled>Disabled</Button></>)
    expect(screen.getByRole('button', { name: 'Primary' })).toHaveClass('ds-button--primary')
    expect(screen.getByRole('button', { name: 'Secondary' })).toHaveClass('ds-button--secondary')
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled()
  })
  it('supports semantic composition primitives', () => {
    render(<Section aria-label="Example"><Container><Card><h2>Card title</h2></Card></Container></Section>)
    expect(screen.getByRole('region', { name: 'Example' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Card title' })).toBeInTheDocument()
  })
})
