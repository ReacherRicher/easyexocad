import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  thumbnail?: string
  tags?: string[]
  readingTime?: number
  className?: string
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  thumbnail,
  tags = [],
  readingTime,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        'group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100',
        'hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300',
        className,
      )}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-brand-blue/20 to-brand-navy/20 overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <svg viewBox="0 0 80 80" className="w-14 h-14 opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="10" width="56" height="60" rx="4" stroke="#1E3A5F" strokeWidth="2.5"/>
              <line x1="22" y1="26" x2="58" y2="26" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="36" x2="58" y2="36" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="46" x2="44" y2="46" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-brand-navy/30 text-xs">مقاله</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-brand-gold/10 text-brand-gold text-xs px-2.5 py-0.5 rounded-full border border-brand-gold/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-brand-navy font-bold text-base mb-2 leading-snug group-hover:text-brand-blue transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Meta: date + reading time */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <time dateTime={date}>{date}</time>
          {readingTime && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
              <span>{readingTime} دقیقه مطالعه</span>
            </>
          )}
        </div>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
          {excerpt}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-navy font-semibold text-sm transition-colors duration-200"
        >
          ادامه مطلب
          <svg className="w-3.5 h-3.5 rotate-180" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </article>
  )
}
