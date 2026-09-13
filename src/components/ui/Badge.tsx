import { cn } from '@/lib/utils'

type BadgeVariant = 'new' | 'popular' | 'sale' | 'default' | 'blue' | 'gold' | 'navy' | 'gray'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  new: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  popular: 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30',
  sale: 'bg-red-100 text-red-600 border border-red-200',
  default: 'bg-gray-100 text-gray-600 border border-gray-200',
  blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
  gold: 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30',
  navy: 'bg-brand-navy/10 text-brand-navy border border-brand-navy/20',
  gray: 'bg-gray-100 text-gray-600 border border-gray-200',
}

export default function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-semibold px-2.5 py-1 rounded-full',
        variantClasses[variant],
        className,
      )}
    >
      {label}
    </span>
  )
}
