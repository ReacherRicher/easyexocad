import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-10', centered ? 'text-center' : 'text-right', className)}>
      <h2 className="inline-block relative text-brand-navy text-3xl md:text-4xl font-bold leading-tight mb-3">
        {title}
        {/* Gold underline accent */}
        <span
          className={cn(
            'block h-1 bg-brand-gold rounded-full mt-3',
            centered ? 'mx-auto w-16' : 'w-16',
          )}
        />
      </h2>
      {subtitle && (
        <p className={cn('text-gray-500 text-base md:text-lg mt-3 leading-relaxed', centered ? 'max-w-2xl mx-auto' : 'max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
