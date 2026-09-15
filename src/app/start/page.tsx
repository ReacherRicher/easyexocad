import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EasyExoCad — آموزش یا سفارش طراحی؟',
  description:
    'آموزش نرم‌افزار اگزو کد با EasyExoCad یا سفارش مستقیم طراحی دندانپزشکی از ZirconDesign. مسیر خود را انتخاب کنید.',
  robots: { index: false, follow: false }, // gateway — no SEO value needed
}

/**
 * /start — Split-screen gateway / splash page
 * ─────────────────────────────────────────────
 * Gives first-time visitors a clear two-path choice:
 *   A) Enter EasyExoCad for tutorials
 *   B) Go to ZirconDesign for outsourced dental design
 */
export default function StartPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* ══════════════════
          PATH A — EasyExoCad
      ══════════════════ */}
      <a
        href="/"
        className="group relative flex-1 flex flex-col items-center justify-center bg-brand-navy overflow-hidden px-10 py-20 md:py-0 cursor-pointer transition-all duration-500 hover:flex-[1.1]"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-brand-blue/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 text-center max-w-xs">
          {/* Brand mark */}
          <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H9a2 2 0 00-2 2v4l-3 6v4a2 2 0 002 2h12a2 2 0 002-2v-4l-3-6V4a2 2 0 00-2-2z"/>
              <line x1="9" y1="2" x2="9" y2="8"/>
              <line x1="15" y1="2" x2="15" y2="8"/>
            </svg>
          </div>

          <span className="text-brand-gold/70 text-xs font-semibold tracking-widest uppercase mb-2 block">
            برای یادگیری
          </span>
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-3">
            EasyExoCad
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8">
            آموزش تخصصی نرم‌افزار اگزو کد، دوره‌های CAD/CAM دندانپزشکی و منابع آموزشی رایگان
          </p>

          <span className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold text-sm px-6 py-3 rounded-xl group-hover:bg-brand-gold-light transition-colors duration-200">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
            ورود به آموزش‌ها
          </span>
        </div>

        {/* Divider arrow — desktop only */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 end-0 translate-x-1/2 z-20 w-12 h-12 rounded-full bg-gray-100 border-4 border-white items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </a>

      {/* ══════════════════
          PATH B — ZirconDesign
      ══════════════════ */}
      <a
        href="https://zircondesign.com?ref=easyexocad"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex-1 flex flex-col items-center justify-center bg-[#f0f6ff] overflow-hidden px-10 py-20 md:py-0 cursor-pointer transition-all duration-500 hover:flex-[1.1]"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231E3A5F' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-radial from-brand-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 text-center max-w-xs">
          {/* Brand mark */}
          <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
              <line x1="12" y1="22" x2="12" y2="15.5"/>
              <polyline points="22 8.5 12 15.5 2 8.5"/>
            </svg>
          </div>

          <span className="text-brand-blue/60 text-xs font-semibold tracking-widest uppercase mb-2 block">
            برای سفارش طراحی
          </span>
          <h2 className="text-brand-navy font-bold text-3xl md:text-4xl mb-3">
            ZirconDesign
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            سرویس حرفه‌ای طراحی دندانپزشکی دیجیتال — کراون، بریج، فول‌آرچ، ایمپلنت و موارد پیچیده
          </p>

          {/* Promo badge */}
          <div className="flex items-center justify-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-xl py-2 px-4 mb-5">
            <svg className="w-3.5 h-3.5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-brand-navy text-xs font-bold">
              کد <span className="tracking-widest">EASY10</span> — ۱۰٪ تخفیف کاربران EasyExoCad
            </span>
          </div>

          <span className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold text-sm px-6 py-3 rounded-xl group-hover:bg-brand-blue transition-colors duration-200">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
            ورود به ZirconDesign
          </span>
        </div>
      </a>

      {/* Mobile "or" divider */}
      <div className="md:hidden flex items-center justify-center bg-white py-3 border-y border-gray-200">
        <span className="text-gray-400 text-sm font-medium px-4">یا</span>
      </div>
    </main>
  )
}
