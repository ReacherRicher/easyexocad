import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'خانه' },
  { href: '/courses', label: 'دوره‌های آموزشی' },
  { href: '/blog', label: 'بلاگ' },
  { href: '/contact', label: 'تماس با ما' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-blue-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 — Brand info */}
          <div>
            <h2 className="text-brand-gold font-bold text-2xl mb-3 tracking-wide">
              EasyExoCad
            </h2>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              آموزش تخصصی نرم‌افزار اگزو کد برای دندانپزشکان و تکنیسین‌های دندانپزشکی.
              با بهترین دوره‌های CAD/CAM به سطح حرفه‌ای برسید.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://instagram.com/easy_exocad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-blue/20 hover:bg-brand-blue/40 text-blue-200 hover:text-white transition-colors duration-200 rounded-lg px-4 py-2 text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                اینستاگرام
              </a>
            </div>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h3 className="text-brand-gold font-bold text-base mb-4">
              دسترسی سریع
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-300 hover:text-brand-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-brand-gold/50 text-xs">◂</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact info */}
          <div>
            <h3 className="text-brand-gold font-bold text-base mb-4">
              اطلاعات تماس
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-0.5">📞</span>
                <div>
                  <p className="text-blue-400 text-xs mb-0.5">شماره تماس</p>
                  <a
                    href="tel:09197080947"
                    className="text-blue-200 hover:text-brand-gold transition-colors duration-200 font-medium"
                    dir="ltr"
                  >
                    ۰۹۱۹۷۰۸۰۹۴۷
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-0.5">✉️</span>
                <div>
                  <p className="text-blue-400 text-xs mb-0.5">ایمیل</p>
                  <a
                    href="mailto:info@easyexocad.ir"
                    className="text-blue-200 hover:text-brand-gold transition-colors duration-200"
                    dir="ltr"
                  >
                    info@easyexocad.ir
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-0.5">📸</span>
                <div>
                  <p className="text-blue-400 text-xs mb-0.5">اینستاگرام</p>
                  <a
                    href="https://instagram.com/easy_exocad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-brand-gold transition-colors duration-200"
                    dir="ltr"
                  >
                    @easy_exocad
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-0.5">⏰</span>
                <div>
                  <p className="text-blue-400 text-xs mb-0.5">پشتیبانی</p>
                  <p className="text-blue-200">۲۴ ساعته — ۷ روز هفته</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-blue-400">
          <p>
            &copy; ۱۴۰۵ EasyExoCad &mdash; تمام حقوق محفوظ است
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors duration-200">
              حریم خصوصی
            </Link>
            <span className="opacity-40">|</span>
            <Link href="/terms" className="hover:text-brand-gold transition-colors duration-200">
              قوانین استفاده
            </Link>
          </div>
        </div>
      </div>

      {/* Crafted by */}
      <div className="border-t border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <a
            href="https://t.me/reacherricher"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white/25 hover:text-white/60 transition-all duration-500"
            aria-label="crafted by reacherricher"
          >
            {/* Left dot-line */}
            <span className="flex items-center gap-1 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
              <span className="w-1 h-1 rounded-full bg-current" />
              <span className="w-6 h-px bg-current" />
            </span>

            <span className="text-[11px] tracking-[0.2em] font-light">crafted by</span>

            {/* Name with subtle accent */}
            <span className="text-[11px] tracking-[0.15em] font-medium text-white/35 group-hover:text-brand-gold/50 transition-colors duration-500">
              reacherricher
            </span>

            {/* Right dot-line */}
            <span className="flex items-center gap-1 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
              <span className="w-6 h-px bg-current" />
              <span className="w-1 h-1 rounded-full bg-current" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
