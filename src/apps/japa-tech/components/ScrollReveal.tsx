import { useEffect, useRef, type CSSProperties, type HTMLAttributes } from 'react'

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function ScrollReveal({ className = '', delay = 0, style, ...props }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      element.classList.add('reveal--visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      element.classList.add('reveal--visible')
      observer.disconnect()
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    element.classList.add('reveal--pending')
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const revealStyle = { ...style, '--reveal-delay': `${delay}ms` } as CSSProperties
  return <div ref={elementRef} className={`reveal ${className}`.trim()} style={revealStyle} {...props} />
}
