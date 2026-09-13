import type { Metadata } from 'next'
import Link from 'next/link'
import CourseCard from '@/components/ui/CourseCard'
import { buildMetadata } from '@/lib/seo'
import { getAllCourses } from '@/lib/courses'

export const metadata: Metadata = buildMetadata({
  title: 'دوره‌های آموزشی اگزو کد | EasyExoCad',
  description:
    'دوره‌های آموزشی تخصصی نرم‌افزار اگزو کد برای دندانپزشکان و تکنیسین‌های CAD/CAM. از مقدماتی تا پیشرفته — ایمپلنت، فول آرچ، کراون و بریج دیجیتال.',
  keywords: [
    'دوره اگزو کد',
    'آموزش اگزو کد',
    'آموزش CAD/CAM دندانپزشکی',
    'دوره ایمپلنت دیجیتال',
    'دوره طراحی دندان',
  ],
  path: '/courses',
})

const levels = ['همه', 'مقدماتی', 'پیشرفته']

export default function CoursesPage() {
  const courses = getAllCourses()

  return (
    <main>
      {/* ── Hero Banner ── */}
      <section className="bg-brand-navy py-14 px-6 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6" aria-label="breadcrumb">
            <Link href="/" className="hover:text-brand-gold transition-colors">خانه</Link>
            <span className="text-blue-500">›</span>
            <span className="text-white">دوره‌ها</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            دوره‌های آموزشی اگزو کد
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            از مقدماتی‌ترین مفاهیم تا پیچیده‌ترین کیس‌ها — همه‌چیز را با ما یاد بگیرید
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="bg-white border-b border-gray-100 px-6 py-4 sticky top-[64px] z-20 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-500 font-medium">فیلتر بر اساس سطح:</span>
          {levels.map((level) => (
            <span
              key={level}
              className={`text-sm px-4 py-1.5 rounded-full border cursor-default transition-colors ${
                level === 'همه'
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {level}
            </span>
          ))}
          <span className="me-auto text-sm text-gray-400">
            {courses.length} دوره
          </span>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {courses.length === 0 ? (
            <p className="text-center text-gray-500 py-20">دوره‌ای یافت نشد.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard
                  key={course.slug}
                  slug={course.slug}
                  title={course.title}
                  description={course.description}
                  thumbnail={course.thumbnail}
                  tags={course.tags}
                  price={course.price}
                  badge={course.badge}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-brand-navy py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            سوال دارید؟ با ما تماس بگیرید
          </h2>
          <p className="text-blue-200 mb-8">
            مشاوران ما برای راهنمایی در انتخاب دوره مناسب آماده‌اند
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:09197080947"
              className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              ۰۹۱۹۷۰۸۰۹۴۷
            </a>
            <a
              href="https://instagram.com/easy_exocad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              اینستاگرام
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
