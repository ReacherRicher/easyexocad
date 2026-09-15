import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'پورتفولیو طراحی دندانپزشکی | ZirconDesign × EasyExoCad',
  description:
    'نمونه‌کارهای طراحی دیجیتال دندانپزشکی توسط ZirconDesign — از کراون و بریج تا فول‌آرچ و ایمپلنت. سفارش طراحی با تخفیف ویژه کاربران EasyExoCad.',
  keywords: [
    'پورتفولیو طراحی دندان',
    'ZirconDesign',
    'طراحی فول آرچ',
    'ایمپلنت دیجیتال',
    'طراحی برون‌سپاری',
    'نمونه کار CAD CAM',
  ],
})

/* ─── Mock portfolio data ──────────────────────────────────── */
const portfolioItems = [
  {
    id: 1,
    title: 'فول آرچ زیرکونیا',
    category: 'Full Arch',
    description: 'طراحی کامل فک بالا با زیرکونیا — ۱۴ واحد',
    img: '/images/portfolio/full-arch-1.jpg',
    fallbackBg: 'from-brand-navy to-brand-blue',
  },
  {
    id: 2,
    title: 'کراون‌های پورسلن',
    category: 'Crown & Bridge',
    description: 'بریج سه واحدی با همپوشانی پورسلن طبیعی',
    img: '/images/portfolio/crown-bridge-1.jpg',
    fallbackBg: 'from-[#1a3a6b] to-brand-blue',
  },
  {
    id: 3,
    title: 'All-on-4 ایمپلنت',
    category: 'Implant',
    description: 'طراحی All-on-4 با اسکرو-ریتین بار',
    img: '/images/portfolio/implant-1.jpg',
    fallbackBg: 'from-brand-blue to-[#1d5fa8]',
  },
  {
    id: 4,
    title: 'ونیر سرامیکی',
    category: 'Veneer',
    description: 'ست ۱۰ تایی ونیر emax برای لبخند هالیوودی',
    img: '/images/portfolio/veneer-1.jpg',
    fallbackBg: 'from-[#0f2e55] to-brand-navy',
  },
  {
    id: 5,
    title: 'رستوریشن ایمپلنت',
    category: 'Implant',
    description: 'کراون ایمپلنت اسکرو-ریتین تک واحد',
    img: '/images/portfolio/implant-2.jpg',
    fallbackBg: 'from-brand-navy to-[#2463b0]',
  },
  {
    id: 6,
    title: 'فول آرچ هایبرید',
    category: 'Full Arch',
    description: 'ایمپلنت بار هایبرید فک پایین با ۶ ایمپلنت',
    img: '/images/portfolio/full-arch-2.jpg',
    fallbackBg: 'from-[#163052] to-brand-blue',
  },
]

const categories = ['همه', 'Full Arch', 'Crown & Bridge', 'Implant', 'Veneer']

/* ─── Page ─────────────────────────────────────────────────── */
export default function ZirconPortfolioPage() {
  return (
    <main>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="bg-brand-navy py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            پورتفولیو مشترک
          </div>
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            طراحی‌های حرفه‌ای{' '}
            <span className="text-brand-gold">ZirconDesign</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            نمونه‌کارهای واقعی تیم ZirconDesign — شریک رسمی EasyExoCad در طراحی دیجیتال دندانپزشکی
          </p>
          <a
            href="https://zircondesign.com?ref=easyexocad&coupon=EASY10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-base shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
            سفارش همین طراحی‌ها با ۱۰٪ تخفیف
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FILTER (client‑side hydration not needed — static categories)
      ══════════════════════════════════════ */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-200 sticky top-[64px] z-30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600 cursor-pointer hover:border-brand-blue hover:text-brand-blue transition-colors duration-150 select-none"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PORTFOLIO GRID
      ══════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300"
              >
                {/* Image / placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.fallbackBg} flex items-center justify-center`}
                  >
                    {/* Tooth icon placeholder */}
                    <svg className="w-16 h-16 text-white/20" viewBox="0 0 64 64" fill="currentColor">
                      <path d="M32 4C22 4 14 10 14 20c0 6 2 10 4 14l4 20c.5 3 2 6 6 6h8c4 0 5.5-3 6-6l4-20c2-4 4-8 4-14 0-10-8-16-18-16zm-6 40l-2-10c2 2 4 3 8 3s6-1 8-3l-2 10H26z"/>
                    </svg>
                  </div>
                  {/* Category badge */}
                  <span className="absolute top-3 start-3 bg-brand-navy/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-brand-navy font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>

                  <a
                    href={`https://zircondesign.com?ref=easyexocad&type=${item.category.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-navy font-semibold text-sm transition-colors duration-150 group-hover:gap-2.5"
                  >
                    سفارش این طراحی
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section className="bg-brand-navy py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-3">
            کیس بعدی‌ات را برون‌سپاری کن
          </h2>
          <p className="text-blue-200 text-base mb-2 leading-relaxed">
            با استفاده از کد تخفیف اختصاصی EasyExoCad روی اولین سفارشت ۱۰٪ صرفه‌جویی کن.
          </p>
          <div className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-xl px-6 py-3 mb-6">
            <span className="text-blue-300 text-sm">کد تخفیف:</span>
            <span className="text-brand-gold font-bold tracking-widest text-lg">EASY10</span>
          </div>
          <div className="flex justify-center">
            <a
              href="https://zircondesign.com?ref=easyexocad&coupon=EASY10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-10 py-4 rounded-xl transition-colors duration-200 text-base shadow-lg"
            >
              شروع سفارش در ZirconDesign ←
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
