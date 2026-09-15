import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'درباره من | مظاهری',
  description:
    'من مظاهری هستم. دندانپزشکی دیجیتال / اگزو کد. با شما از مبانی طراحی تا ورود به بازار کار.',
  keywords: [
    'مظاهری',
    'دندانپزشکی دیجیتال',
    'اگزو کد',
    'exocad',
    'آموزش طراحی دندان',
    'EasyExoCad',
  ],
})

/* ─── Values ────────────────────────────────────────────────── */
const values = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="2.2" />
        <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    title: 'آموزش شخصی‌سازی‌شده',
    desc: 'هر دانشجو مسیر یادگیری متناسب با سطح و هدف خود را طی می‌کند.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 32V16l12-8 12 8v16" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <rect x="15" y="22" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    ),
    title: 'پایه‌های محکم',
    desc: 'از اصول ابتدایی طراحی تا تکنیک‌های پیشرفته، گام به گام پیش می‌رویم.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6l3.09 9.26H33l-7.95 5.77 3.09 9.26L20 25.52l-8.14 4.77 3.09-9.26L7 15.26h9.91L20 6z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    ),
    title: 'کیفیت حرفه‌ای',
    desc: 'تمرکز بر نتایج واقعی و قابل استفاده در محیط کار.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20h20M20 10v20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    ),
    title: 'پشتیبانی مداوم',
    desc: 'همراهی از اولین درس تا ورود به بازار کار حرفه‌ای.',
  },
]

/* ─── Page ──────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      {/* ══════════════════════════════════════════════
          HERO — profile card on dark background
      ══════════════════════════════════════════════ */}
      <section className="relative bg-brand-navy overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gold radial glow */}
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full ring-4 ring-brand-gold/60 ring-offset-4 ring-offset-brand-navy overflow-hidden shadow-2xl">
              <Image
                src="/images/mypic.webp"
                alt="تصویر پروفایل مظاهری"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Text block */}
          <div className="text-center md:text-right flex-1">
            <p className="inline-block text-brand-gold text-sm font-medium tracking-widest uppercase mb-3">
              About Me
            </p>
            <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-4">
              من مظاهری هستم
            </h1>
            <p className="text-blue-200 text-xl font-medium mb-3">
              با هم، طراحی را بهتر انجام می‌دهیم.
            </p>
            <p className="text-blue-300/80 text-base leading-relaxed max-w-lg md:mx-0 mx-auto mb-8">
              با شما از مبانی طراحی تا ورود به بازار کار.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
              <Button href="/courses" variant="primary" size="lg">
                مشاهده دوره‌ها
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                تماس با من
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VALUES / WHY
      ══════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand-gold font-bold text-sm uppercase tracking-widest text-center mb-2">رویکرد من</p>
          <h2 className="text-brand-navy font-bold text-3xl text-center mb-10">چرا با من یاد بگیرید؟</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 group flex gap-4 items-start"
              >
                <div className="text-brand-blue group-hover:text-brand-gold transition-colors duration-300 flex-shrink-0 mt-1">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-brand-navy font-bold text-base mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 start-0 w-64 h-64 bg-brand-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 end-0 w-48 h-48 bg-brand-gold/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-brand-gold font-bold text-3xl md:text-4xl mb-4">
            آماده شروع هستید؟
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            همین الان اولین قدم را بردارید — از مبانی تا بازار کار، کنارتان هستم.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/courses" variant="primary" size="lg">
              شروع یادگیری
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
              تماس با من
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
