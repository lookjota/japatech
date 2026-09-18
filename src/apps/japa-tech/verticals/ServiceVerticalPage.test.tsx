import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { publicRoutes } from '../config/routes'
import { ServiceVerticalPage } from './ServiceVerticalPage'
import { serviceVerticals, type ServiceVerticalKey } from './serviceVerticals'

const cases: Array<[ServiceVerticalKey, string, string]> = [
  ['notebook', 'Assistência técnica de notebook no DF e Entorno', 'notebook'],
  ['computador', 'Assistência técnica de computador no DF e Entorno', 'computador'],
  ['monitor', 'Assistência técnica de monitor no DF e Entorno', 'monitor'],
  ['audio', 'Assistência técnica de áudio no DF e Entorno', 'áudio'],
]

describe('service vertical pages', () => {
  it.each(cases)('renders the %s vertical with its own H1 and WhatsApp context', (key, heading, equipment) => {
    const vertical = serviceVerticals[key]
    const page = publicRoutes.find(({ pathname }) => pathname === vertical.route)!.page
    render(<MemoryRouter><ServiceVerticalPage page={page} vertical={vertical} /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heading)
    const ctas = screen.getAllByRole('link', { name: new RegExp(`Falar sobre meu ${equipment}`, 'i') })
    expect(ctas).toHaveLength(2)
    expect(ctas[0]).toHaveAttribute('href', expect.stringContaining('wa.me/5561995646646'))
    expect(screen.queryByText(/Não liga|Sem imagem|Sem som|Tela piscando/)).not.toBeInTheDocument()
  })

  it('keeps audio scope limited to caixas de som e áudio', () => {
    const vertical = serviceVerticals.audio
    const page = publicRoutes.find(({ pathname }) => pathname === vertical.route)!.page
    render(<MemoryRouter><ServiceVerticalPage page={page} vertical={vertical} /></MemoryRouter>)
    expect(screen.getByText(/caixa de som ou equipamento de áudio/)).toBeInTheDocument()
    expect(screen.queryByText(/amplificador|receiver|mesa|instrumento/i)).not.toBeInTheDocument()
  })
})
