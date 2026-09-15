/**
 * ZirconPromoBanner
 * ──────────────────
 * Slim promo-code strip. Use anywhere on the page:
 *   - Above the fold on the homepage
 *   - Top of a blog post / course page
 *   - Sticky bottom bar (wrap in a client component with dismiss logic)
 *
 * Pass `dismissible={true}` for a client-side close button.
 */
'use client'

import { useState } from 'react'

interface ZirconPromoBannerProps {
  dismissible?: boolean
  /** Extra Tailwind classes on the outer wrapper */
  className?: string
}

export default function ZirconPromoBanner({
  dismissible = false,
  className = '',
}: ZirconPromoBannerProps) {
  const [hidden, setHidden] = useState(false)
  if (hidden) return null

  return (
    <div
      className={`relative w-full bg-gradient-to-l from-brand-navy to-[#1a3a6b] text-white ${className}`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center">
        {/* Spark icon */}
        <svg className="w-4 h-4 text-brand-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
        </svg>

        <p className="text-sm font-medium">
          <span className="text-brand-gold font-bold">پیشنهاد ویژه کاربران EasyExoCad:</span>{' '}
          با کد{' '}
          <span className="inline-block bg-white/15 border border-white/25 text-white font-bold tracking-widest px-2 py-0.5 rounded text-xs mx-1">
            EASY10
          </span>{' '}
          روی اولین سفارش ZirconDesign{' '}
          <strong className="text-brand-gold">۱۰٪ تخفیف</strong> بگیرید.
        </p>

        <a
          href="https://zircondesign.com?ref=easyexocad&coupon=EASY10"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-xs px-4 py-1.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
        >
          همین الان استفاده کن ←
        </a>
      </div>

      {dismissible && (
        <button
          onClick={() => setHidden(true)}
          aria-label="بستن"
          className="absolute top-1/2 -translate-y-1/2 end-3 text-white/50 hover:text-white/80 transition-colors duration-150 p-1"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
          </svg>
        </button>
      )}
    </div>
  )
}
