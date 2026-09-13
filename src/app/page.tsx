import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import SectionTitle from '@/components/ui/SectionTitle'
import CourseCard from '@/components/ui/CourseCard'
import TestimonialCard from '@/components/ui/TestimonialCard'
import Button from '@/components/ui/Button'
import { buildMetadata } from '@/lib/seo'
import { localBusinessSchema, courseSchema } from '@/lib/schema'
import basicsJson from '@/content/courses/exocad-basics.json'
import advancedJson from '@/content/courses/exocad-advanced.json'

/* ─── SEO ──────────────────────────────────────────────────── */
export const metadata: Metadata = buildMetadata({
  title: 'آموزش حرفه‌ای اگزو کد دندانپزشکی',
  description:
    'با EasyExoCad نرم‌افزار اگزو کد را به‌صورت تخصصی بیاموزید. دوره‌های جامع CAD/CAM دندانپزشکی با مدرس متخصص، محتوای بروز و پشتیبانی ۲۴ ساعته.',
  keywords: [
    'آموزش اگزو کد',
    'دوره exocad',
    'CAD/CAM دندانپزشکی',
    'طراحی دندان دیجیتال',
    'ایمپلنت دیجیتال',
    'دوره آنلاین دندانپزشکی',
  ],
})

/* ─── Static data ───────────────────────────────────────────── */
const stats = [
  { value: '۵۰۰+', label: 'دانشجوی موفق' },
  { value: '۱۰+', label: 'دوره آموزشی' },
  { value: '۵', label: 'سال تجربه' },
  { value: '۲۴/۷', label: 'پشتیبانی' },
]

const features = [
  {
    title: 'آموزش تخصصی',
    description:
      'برنامه درسی دقیق و هدفمند طراحی‌شده برای دندانپزشکان و تکنیسین‌های CAD/CAM که می‌خواهند مهارت اگزو کد را به‌صورت اصولی فرا بگیرند.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 20L20 26L34 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
      </svg>
    ),
  },
  {
    title: 'مدرس متخصص',
    description:
      'تدریس توسط متخصص با سال‌ها تجربه عملی در طراحی دیجیتال دندانپزشکی — از ساده‌ترین کراون تا پیچیده‌ترین کیس‌های فول آرچ.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M30 20l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'محتوای بروز',
    description:
      'مطالب و ویدیوها بر اساس آخرین نسخه اگزو کد به‌روزرسانی می‌شوند تا همیشه با جدیدترین ابزارها و تکنیک‌ها کار کنید.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 14v10l6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 6l2 4-4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'پشتیبانی کامل',
    description:
      'پشتیبانی ۲۴/۷ از طریق تلگرام و تلفن — هر سوالی درباره دوره یا نرم‌افزار داشتید، همیشه در کنارتان هستیم.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12h32v20a4 4 0 01-4 4H12a4 4 0 01-4-4V12z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 12l16 13 16-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="38" cy="10" r="6" fill="#C9A84C" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: 'دکتر علی محمدی',
    role: 'دندانپزشک عمومی',
    quote:
      'دوره اگزو کد مقدماتی EasyExoCad واقعاً زندگیم را تغییر داد. تدریس واضح و گام‌به‌گام بود و توانستم در کمتر از یک ماه اولین کراون دیجیتالم را طراحی کنم.',
    rating: 5,
  },
  {
    name: 'خانم زهرا کریمی',
    role: 'تکنیسین دندانپزشکی',
    quote:
      'پشتیبانی بعد از خرید دوره عالی بود. هر وقت سوالی داشتم سریع جواب می‌دادند. محتوای دوره پیشرفته هم خیلی کامل بود و کار با ایمپلنت را کاملاً یاد گرفتم.',
    rating: 5,
  },
  {
    name: 'آقای رضا صادقی',
    role: 'دندانپزشک متخصص',
    quote:
      'بهترین دوره‌ای بود که تا به حال خریدم. مدرس با تجربه است و مثال‌های واقعی می‌زند. به همه همکارانم توصیه کردم که این دوره را بگیرند.',
    rating: 5,
  },
]

const courses = [basicsJson, advancedJson]

/* ─── Page component ────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <JsonLd data={localBusinessSchema()} />
      {courses.map((course) => (
        <JsonLd
          key={course.slug}
          data={courseSchema({
            title: course.title,
            description: course.description,
            slug: course.slug,
            instructor: course.instructor?.name,
            thumbnail: course.thumbnail,
            keywords: course.tags,
          })}
        />
      ))}

      <main>
        {/* ════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Radial glow */}
          <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
            {/* Tag line */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              آموزش تخصصی CAD/CAM دندانپزشکی
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              آموزش حرفه‌ای
              <span className="block text-brand-gold mt-1">اگزو کد دندانپزشکی</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              با بهترین دوره‌های آموزشی CAD/CAM دندانپزشکی،
              مهارت خود را به سطح جدیدی ببرید
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/courses" variant="primary" size="lg">
                مشاهده دوره‌ها
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                تماس با ما
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce">
            <span>پایین بروید</span>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 2 — STATS BAR
        ════════════════════════════════════════════════ */}
        <section className="bg-brand-blue py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-brand-gold font-bold text-3xl md:text-4xl mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 3 — WHY US / FEATURES
        ════════════════════════════════════════════════ */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="چرا EasyExoCad؟"
              subtitle="ما بهترین تجربه یادگیری اگزو کد را با کیفیت آموزشی بالا و پشتیبانی واقعی فراهم می‌کنیم"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-brand-blue group-hover:text-brand-gold transition-colors duration-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-brand-navy font-bold text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 4 — FEATURED COURSES
        ════════════════════════════════════════════════ */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="دوره‌های آموزشی"
              subtitle="دوره‌های جامع و کاربردی برای هر سطح از مبتدی تا پیشرفته"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 max-w-4xl mx-auto">
              {courses.map((course, i) => (
                <CourseCard
                  key={course.slug}
                  slug={course.slug}
                  title={course.title}
                  description={course.description}
                  thumbnail={course.thumbnail}
                  tags={course.tags}
                  price={course.price}
                  badge={
                    i === 0
                      ? { label: 'پرفروش', variant: 'popular' }
                      : { label: 'جدید', variant: 'new' }
                  }
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/courses" variant="secondary" size="lg">
                مشاهده همه دوره‌ها
              </Button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 5 — TESTIMONIALS
        ════════════════════════════════════════════════ */}
        <section className="bg-blue-50/60 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="نظرات دانشجویان"
              subtitle="تجربه واقعی دانشجویانی که دوره‌های ما را گذرانده‌اند"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.name}
                  name={t.name}
                  role={t.role}
                  quote={t.quote}
                  rating={t.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            SECTION 6 — CTA BANNER
        ════════════════════════════════════════════════ */}
        <section className="bg-brand-navy py-20 px-6 relative overflow-hidden">
          {/* Subtle diagonal accent */}
          <div className="absolute top-0 start-0 w-64 h-64 bg-brand-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 end-0 w-48 h-48 bg-brand-gold/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-brand-gold font-bold text-3xl md:text-4xl mb-4">
              همین الان شروع کن
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              برای تهیه دوره با ما در تماس باشید
            </p>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-3">
                <svg className="w-5 h-5 text-brand-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                <a href="tel:09197080947" className="text-white font-bold text-lg tracking-wider" dir="ltr">
                  ۰۹۱۹۷۰۸۰۹۴۷
                </a>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-3">
                <svg className="w-5 h-5 text-brand-gold flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://instagram.com/easy_exocad" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg" dir="ltr">
                  @easy_exocad
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="tel:09197080947"
                variant="primary"
                size="lg"
                external
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                تماس تلفنی
              </Button>
              <Button
                href="https://instagram.com/easy_exocad"
                variant="outline"
                size="lg"
                external
                className="border-white text-white hover:bg-white hover:text-brand-navy"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                اینستاگرام
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
