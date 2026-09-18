import type { HTMLAttributes } from 'react'
type SurfaceTone = 'light' | 'white' | 'dark' | 'carbon' | 'accent'
export function Surface({ tone = 'light', className = '', ...props }: HTMLAttributes<HTMLDivElement> & { tone?: SurfaceTone }) { return <div className={`ds-surface ds-surface--${tone} ${className}`.trim()} {...props} /> }
