import type { AnchorHTMLAttributes } from 'react'
export function TextLink({ className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) { return <a className={`ds-link ${className}`.trim()} {...props} /> }
