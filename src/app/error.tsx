'use client'

import { useEffect } from 'react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to error reporting service in production
    console.error(error)
  }, [error])

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
      {/* Error icon */}
      <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 9v4M12 17h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3 text-center">
        خطایی رخ داد
      </h1>
      <p className="text-gray-500 text-base text-center max-w-md mb-8 leading-relaxed">
        متأسفیم، مشکلی پیش آمده است. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={reset}
          className="bg-brand-navy hover:bg-brand-blue text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200"
        >
          تلاش مجدد
        </button>
        <a
          href="/"
          className="border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200"
        >
          بازگشت به خانه
        </a>
      </div>

      {/* Contact hint */}
      <p className="mt-10 text-sm text-gray-400">
        اگر مشکل ادامه داشت با ما تماس بگیرید:{' '}
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
