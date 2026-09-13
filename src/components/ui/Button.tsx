import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold shadow-sm hover:shadow-md',
  secondary:
    'bg-brand-blue hover:bg-[#2268b8] text-white font-bold shadow-sm hover:shadow-md',
  outline:
    'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-bold',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm rounded-md',
  md: 'px-6 py-2.5 text-base rounded-lg',
  lg: 'px-8 py-3.5 text-lg rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold/50',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className,
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
