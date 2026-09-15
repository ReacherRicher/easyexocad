import Link from 'next/link'

/**
 * ZirconHeroBanner
 * ─────────────────
 * Full-width partnership banner for the homepage hero area.
 * Sits between the main hero section and the stats bar.
 * Uses the existing brand palette (navy / blue / gold).
 */
export default function ZirconHeroBanner() {
  return (
    <section className="relative bg-gradient-to-l from-brand-navy via-[#1a3a6b] to-brand-blue py-14 px-6 overflow-hidden">
      {/* Subtle diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute -top-16 -end-16 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Partnership badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z"/>
            </svg>
            همکاری رسمی
          </span>
        </div>

        {/* Logos row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <span className="text-white font-bold text-2xl tracking-wider">EasyExoCad</span>
          <span className="text-brand-gold/60 text-2xl font-light hidden sm:block">×</span>
          <span className="text-brand-gold font-bold text-2xl tracking-wider">ZirconDesign</span>
        </div>

        {/* Headline */}
        <h2 className="text-white font-bold text-2xl md:text-3xl text-center leading-snug mb-3">
          طراحی‌های پیچیده دندانی را به متخصصان بسپارید!
        </h2>
        <p className="text-blue-200 text-center text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          همکاری رسمی EasyExoCad و ZirconDesign — طراحی‌های فول‌آرچ، ایمپلنت و کیس‌های دشوار را به تیم حرفه‌ای زیرکون بسپارید.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://zircondesign.com?ref=easyexocad"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-gold/30 transition-all duration-300"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
            سفارش طراحی در ZirconDesign
          </a>
        </div>
      </div>
    </section>
  )
}
