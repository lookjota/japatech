import { Button, Card, Container, Section, Surface, TextLink } from './components'

const swatches = [
  ['Brand Graphite', 'var(--color-brand)', '--color-brand'], ['Carbon', 'var(--color-surface-dark)', '--color-surface-dark'], ['Technical Yellow', 'var(--color-accent)', '--color-accent'], ['Off White', 'var(--color-background)', '--color-background'], ['Surface White', 'var(--color-surface)', '--color-surface'], ['Steel', 'var(--color-text-muted)', '--color-text-muted'], ['Border', 'var(--color-border)', '--color-border'],
] as const

export function DesignSystemPreview() {
  return <main className="ds-preview" id="conteudo-principal">
    <Section className="ds-preview__intro"><p className="eyebrow">DESIGN SYSTEM V1</p><h1>Technical Precision</h1><p className="ds-lead">Primitives visuais da JAPA TECH: precisão, competência e organização sem ruído.</p></Section>
    <Section aria-labelledby="colors-title"><p className="eyebrow">FOUNDATION</p><h2 id="colors-title">Color tokens</h2><div className="ds-swatch-grid">{swatches.map(([label, color, token]) => <div className="ds-swatch" key={token}><span className="ds-swatch__color" style={{ background: color }} /><span><strong>{label}</strong><small>{token}</small></span></div>)}</div></Section>
    <Section aria-labelledby="type-title" className="ds-preview__dark"><p className="eyebrow">TYPE SCALE</p><h2 id="type-title">Sora + Inter</h2><p className="display">Precision in every detail.</p><h3>Clear hierarchy for technical work.</h3><p className="body-large">Inter keeps interface copy legible while Sora gives headings a measured, confident voice.</p><p>Body text remains calm, direct and easy to scan across devices.</p></Section>
    <Section aria-labelledby="actions-title"><p className="eyebrow">INTERACTION</p><h2 id="actions-title">Actions and links</h2><div className="ds-action-row"><Button>Primary action</Button><Button variant="secondary">Secondary action</Button><Surface tone="dark"><Button variant="dark">Dark surface action</Button></Surface><Button disabled>Disabled</Button></div><p className="ds-example-copy"><TextLink href="#card">Inline link with a visible underline</TextLink></p></Section>
    <Section aria-labelledby="surfaces-title" className="ds-preview__dark"><p className="eyebrow">SURFACES</p><h2 id="surfaces-title">Simple, useful surfaces</h2><div className="ds-card-grid"><Card id="card"><p className="eyebrow">CARD PRIMITIVE</p><h3>Neutral information surface</h3><p>Border, contrast and spacing carry the hierarchy.</p></Card><Surface tone="carbon"><h3>Carbon surface</h3><p>For future compositions that need controlled depth.</p></Surface></div></Section>
    <Section aria-labelledby="spacing-title"><p className="eyebrow">LAYOUT</p><h2 id="spacing-title">Responsive container and spacing</h2><div className="ds-spacing-demo"><span>section</span><span>component</span><span>inline</span></div></Section>
    <footer className="ds-preview__footer"><Container><TextLink href="/">Return to foundation</TextLink></Container></footer>
  </main>
}
