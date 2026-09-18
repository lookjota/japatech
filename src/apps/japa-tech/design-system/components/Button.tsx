import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'dark'
type ButtonSize = 'default' | 'compact'
interface ButtonBaseProps { variant?: ButtonVariant; size?: ButtonSize; children: ReactNode }
type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type LinkButtonProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
export type ActionButtonProps = ButtonProps | LinkButtonProps

function classNameFor(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return ['ds-button', `ds-button--${variant}`, size === 'compact' ? 'ds-button--compact' : '', className ?? ''].filter(Boolean).join(' ')
}

export function Button({ variant = 'primary', size = 'default', children, className, ...props }: ActionButtonProps) {
  const classes = classNameFor(variant, size, className)
  if ('href' in props && props.href) {
    const linkProps = props as LinkButtonProps
    return <a className={classes} {...linkProps}>{children}</a>
  }
  const buttonProps = props as ButtonProps
  return <button className={classes} type="button" {...buttonProps}>{children}</button>
}
