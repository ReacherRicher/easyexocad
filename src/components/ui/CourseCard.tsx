import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface CourseCardProps {
  title: string
  description: string
  slug: string
  thumbnail?: string
  tags?: string[]
  price?: string
  badge?: {
    label: string
    variant?: 'new' | 'popular' | 'sale' | 'default'
  }
  className?: string
}

export default function CourseCard({
  title,
  description,
  slug,
  thumbnail,
  tags = [],
  price,
  badge,
  className,
}: CourseCardProps) {
  return (
    <article
      className={cn(
        'group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100',
        'hover:border-brand-gold hover:shadow-xl transition-all duration-300',
        className,
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-brand-navy to-brand-blue overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Decorative placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="20" width="60" height="45" rx="4" stroke="white" strokeWidth="2.5"/>
              <path d="M25 35 Q40 25 55 35 Q40 45 25 35Z" fill="white" opacity="0.6"/>
              <circle cx="58" cy="28" r="8" stroke="#C9A84C" strokeWidth="2.5"/>
              <path d="M55 28 L57 30 L62 25" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="text-white/50 text-xs font-medium">دوره آموزشی</span>
          </div>
        )}
        {/* Badge overlay */}
        {badge && (
          <div className="absolute top-3 right-3">
            <Badge label={badge.label} variant={badge.variant} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-brand-blue/8 text-brand-blue text-xs px-2.5 py-0.5 rounded-full border border-brand-blue/15"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-brand-navy font-bold text-lg mb-2 leading-snug group-hover:text-brand-blue transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <span className="text-brand-gold font-bold text-sm">
            {price ?? 'تماس بگیرید'}
          </span>
          <Link
            href={`/courses/${slug}`}
            className="bg-brand-navy hover:bg-brand-blue text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </article>
  )
}
