import type { HTMLAttributes } from 'react'
import { Container } from './Container'

interface SectionProps extends HTMLAttributes<HTMLElement> { contained?: boolean }

export function Section({ className = '', contained = true, children, ...props }: SectionProps) {
  const content = contained ? <Container>{children}</Container> : children
  return <section className={`ds-section ${className}`.trim()} {...props}>{content}</section>
}
