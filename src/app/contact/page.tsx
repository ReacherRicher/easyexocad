import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { localBusinessSchema } from '@/lib/schema'
import ContactForm from './ContactForm'

/* ─── SEO ──────────────────────────────────────────────────── */
export const metadata: Metadata = buildMetadata({
  title: 'تماس با ما | EasyExoCad',
  description:
    'برای تهیه دوره‌های آموزشی اگزو کد، مشاوره و پشتیبانی با EasyExoCad تماس بگیرید. تلفن: ۰۹۱۹۷۰۸۰۹۴۷ — اینستاگرام: @easy_exocad',
  keywords: [
    'تماس EasyExoCad',
    'خرید دوره اگزو کد',
    'مشاوره دوره exocad',
    'پشتیبانی اگزو کد',
  ],
  path: '/contact',
})

/* ─── Page ───────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <main>
        {/* ══════════════════════════════════════════════
            HERO BANNER
        ══════════════════════════════════════════════ */}
        <section className="bg-brand-navy py-14 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23ffffff'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6" aria-label="breadcrumb">
              <Link href="/" className="hover:text-brand-gold transition-colors">خانه</Link>
              <span className="text-blue-500">›</span>
              <span className="text-white">تماس با ما</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">تماس با ما</h1>
            <p className="text-blue-200 text-lg max-w-2xl">
              برای تهیه دوره، مشاوره یا هر سوالی با ما در تماس باشید — آماده‌ایم کمک کنیم
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 1 — CONTACT METHODS
        ══════════════════════════════════════════════ */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">راه‌های ارتباطی</h2>
              <p className="text-gray-500 text-base">سریع‌ترین راه برای تهیه دوره و مشاوره</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Card 1 — Phone */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 p-8 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-brand-navy font-bold text-xl mb-1">تلفن</h3>
                <p className="text-gray-500 text-sm mb-4">برای تهیه دوره و مشاوره</p>
                <a
                  href="tel:09197080947"
                  className="text-brand-navy font-bold text-2xl tracking-widest mb-6 hover:text-brand-gold transition-colors duration-200"
                  dir="ltr"
                >
                  ۰۹۱۹۷۰۸۰۹۴۷
                </a>
                <a
                  href="tel:09197080947"
                  className="mt-auto w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold py-3 rounded-xl transition-colors duration-200 text-center block"
                >
                  تماس تلفنی
                </a>
              </div>

              {/* Card 2 — Instagram */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 p-8 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-navy/10 flex items-center justify-center mb-5 group-hover:bg-brand-navy/20 transition-colors duration-300">
                  <svg className="w-8 h-8 text-brand-navy" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-brand-navy font-bold text-xl mb-1">اینستاگرام</h3>
                <p className="text-gray-500 text-sm mb-4">محتوای آموزشی رایگان</p>
                <a
                  href="https://instagram.com/easy_exocad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy font-bold text-2xl mb-6 hover:text-brand-blue transition-colors duration-200"
                  dir="ltr"
                >
                  @easy_exocad
                </a>
                <a
                  href="https://instagram.com/easy_exocad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-brand-navy hover:bg-brand-blue text-white font-bold py-3 rounded-xl transition-colors duration-200 text-center block"
                >
                  دنبال کردن
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 2 — CONTACT FORM
        ══════════════════════════════════════════════ */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">پیام مستقیم بفرستید</h2>
              <p className="text-gray-500 text-base">فرم زیر را پر کنید — در اسرع وقت پاسخ می‌دهیم</p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — HOURS & FAQ
        ══════════════════════════════════════════════ */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Working Hours */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-brand-navy font-bold text-xl">ساعات پاسخگویی</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">شنبه تا پنج‌شنبه</span>
                    <span className="text-brand-navy font-bold text-sm" dir="ltr">۹ صبح — ۹ شب</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">جمعه</span>
                    <span className="text-gray-400 text-sm">تعطیل</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600 text-sm font-medium">پشتیبانی اینستاگرام</span>
                    <span className="text-brand-gold font-bold text-sm">۲۴ / ۷</span>
                  </div>
                </div>
                {/* Quick contact bar */}
                <div className="mt-6 bg-brand-navy/5 rounded-xl p-4 flex flex-col gap-3">
                  <a
                    href="tel:09197080947"
                    className="flex items-center gap-3 text-brand-navy hover:text-brand-gold transition-colors duration-200"
                    dir="ltr"
                  >
                    <svg className="w-4 h-4 text-brand-gold flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="font-bold text-sm tracking-widest">۰۹۱۹۷۰۸۰۹۴۷</span>
                  </a>
                  <a
                    href="https://instagram.com/easy_exocad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-brand-navy hover:text-brand-blue transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-brand-navy flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-bold text-sm" dir="ltr">@easy_exocad</span>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8a2 2 0 011.937 2.5c-.237.829-1.187 1.293-1.687 1.97C12 12.9 12 13.4 12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-brand-navy font-bold text-xl">سوالات متداول</h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-brand-navy font-semibold text-sm mb-1.5">چطور دوره را تهیه کنم؟</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      با تماس تلفنی به شماره ۰۹۱۹۷۰۸۰۹۴۷ یا پیام در اینستاگرام
                      {' '}@easy_exocad، راهنمای کامل خرید به شما داده می‌شود.
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-5">
                    <h4 className="text-brand-navy font-semibold text-sm mb-1.5">آیا پشتیبانی بعد از خرید دارید؟</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      بله — پشتیبانی کامل از طریق اینستاگرام تا پایان دوره ارائه می‌شود.
                      تمام سوالات فنی و عملی شما پاسخ داده می‌شود.
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-5">
                    <h4 className="text-brand-navy font-semibold text-sm mb-1.5">دوره‌ها برای چه سطحی مناسب است؟</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      دوره‌های ما برای هر دو سطح مقدماتی و پیشرفته طراحی شده‌اند.
                      اگر تازه‌کار هستید یا تجربه دارید، دوره مناسب شما وجود دارد.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BOTTOM CTA
        ══════════════════════════════════════════════ */}
        <section className="bg-brand-navy py-14 px-6 relative overflow-hidden">
          <div className="absolute top-0 start-0 w-64 h-64 bg-brand-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-brand-gold font-bold text-2xl md:text-3xl mb-3">آماده شروع هستید؟</h2>
            <p className="text-blue-200 mb-8">همین الان با ما تماس بگیرید و اولین قدم را بردارید</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:09197080947"
                className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-8 py-3.5 rounded-xl transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                ۰۹۱۹۷۰۸۰۹۴۷
              </a>
              <a
                href="https://instagram.com/easy_exocad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-bold px-8 py-3.5 rounded-xl transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                اینستاگرام
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
