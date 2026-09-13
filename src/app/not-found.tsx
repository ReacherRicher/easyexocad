import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'صفحه یافت نشد | EasyExoCad',
  description: 'صفحه مورد نظر وجود ندارد یا جابجا شده است.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      {/* 404 badge */}
      <div className="text-8xl font-black text-brand-navy/10 select-none mb-2" aria-hidden="true">
        ۴۰۴
      </div>

      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-brand-gold"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 11h4M11 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 text-center">
        صفحه مورد نظر یافت نشد
      </h1>
      <p className="text-gray-500 text-base text-center max-w-md mb-8 leading-relaxed">
        متأسفیم! صفحه‌ای که دنبال آن هستید وجود ندارد یا جابجا شده است.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="bg-brand-navy hover:bg-brand-blue text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200"
        >
          بازگشت به خانه
        </Link>
        <Link
          href="/courses"
          className="border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200"
        >
          مشاهده دوره‌ها
        </Link>
      </div>

      {/* Contact hint */}
      <p className="mt-10 text-sm text-gray-400">
        سوال دارید؟{' '}
        <a
          href="tel:09197080947"
          className="text-brand-gold font-semibold hover:underline"
          dir="ltr"
        >
          ۰۹۱۹۷۰۸۰۹۴۷
        </a>
      </p>
    </main>
  )
}
