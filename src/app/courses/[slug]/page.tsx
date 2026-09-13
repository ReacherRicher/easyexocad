import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { courseSchema, breadcrumbSchema } from '@/lib/schema'
import { getAllCourses, getCourseBySlug } from '@/lib/courses'

/* ── Static params ──────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllCourses().map((c) => ({ slug: c.slug }))
}

/* ── Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const course = getCourseBySlug(params.slug)
  if (!course) return {}
  return buildMetadata({
    title: `${course.title} | آموزش اگزو کد`,
    description: course.description,
    keywords: course.tags,
    path: `/courses/${course.slug}`,
    ogImage: course.thumbnail,
  })
}

/* ── Icons ──────────────────────────────────────────────────── */
function IconClock() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function IconLevel() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function IconPhone() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}

function IconTelegram() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

/* ── Page component ─────────────────────────────────────────── */
export default function CourseDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const course = getCourseBySlug(params.slug)
  if (!course) notFound()

  const instructorInitials = course.instructor.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={courseSchema({
          title: course.title,
          description: course.description,
          slug: course.slug,
          instructor: course.instructor.name,
          thumbnail: course.thumbnail,
          keywords: course.tags,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'خانه', url: '/' },
          { name: 'دوره‌ها', url: '/courses' },
          { name: course.title, url: `/courses/${course.slug}` },
        ])}
      />

      <main className="bg-gray-50 min-h-screen">
        {/* ── Page header strip ── */}
        <div className="bg-brand-navy px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4" aria-label="breadcrumb">
              <Link href="/" className="hover:text-brand-gold transition-colors">خانه</Link>
              <span className="text-blue-500">›</span>
              <Link href="/courses" className="hover:text-brand-gold transition-colors">دوره‌ها</Link>
              <span className="text-blue-500">›</span>
              <span className="text-white">{course.title}</span>
            </nav>
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* ═══════════════════════════════════════
                MAIN CONTENT — Left/Start column
            ═══════════════════════════════════════ */}
            <div className="flex-1 min-w-0 space-y-8">

              {/* Course header */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                {/* Level badge + tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-brand-blue/10 text-brand-blue text-xs px-2.5 py-0.5 rounded-full border border-brand-blue/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-brand-navy leading-tight mb-4">
                  {course.title}
                </h1>

                {/* Meta chips row */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <IconClock />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconLevel />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconCalendar />
                    <span>بروزرسانی: {course.updatedAt}</span>
                  </div>
                </div>
              </div>

              {/* Long description */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-brand-gold rounded-full inline-block" />
                  درباره این دوره
                </h2>
                <p className="text-gray-600 leading-loose text-base">
                  {course.longDescription}
                </p>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-brand-gold rounded-full inline-block" />
                  سرفصل دوره
                </h2>
                <div className="space-y-4">
                  {course.curriculum.map((section, sIdx) => (
                    <details
                      key={sIdx}
                      className="group border border-gray-100 rounded-xl overflow-hidden"
                      open={sIdx === 0}
                    >
                      <summary className="flex items-center justify-between gap-3 px-5 py-4 bg-gray-50 hover:bg-brand-navy/5 cursor-pointer transition-colors list-none">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {sIdx + 1}
                          </span>
                          <span className="font-semibold text-brand-navy text-sm">
                            {section.section}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs text-gray-400">{section.lessons.length} درس</span>
                          <svg
                            className="w-4 h-4 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9"/>
                          </svg>
                        </div>
                      </summary>
                      <ul className="divide-y divide-gray-50">
                        {section.lessons.map((lesson, lIdx) => (
                          <li
                            key={lIdx}
                            className="flex items-center gap-3 px-5 py-3 text-sm text-gray-600 hover:bg-blue-50/50 transition-colors"
                          >
                            <svg className="w-4 h-4 text-brand-blue/50 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <polygon points="10 8 16 12 10 16 10 8"/>
                            </svg>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-brand-navy mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-brand-gold rounded-full inline-block" />
                  درباره مدرس
                </h2>
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{instructorInitials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-base mb-1">
                      {course.instructor.name}
                    </p>
                    <p className="text-xs text-brand-gold font-medium mb-3">
                      متخصص CAD/CAM دندانپزشکی
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════════
                STICKY SIDEBAR — Right/End column
            ═══════════════════════════════════════ */}
            <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
              <div className="sticky top-24 space-y-5">

                {/* Thumbnail card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video bg-gradient-to-br from-brand-navy to-brand-blue">
                    {course.thumbnail ? (
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 384px"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                        <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-30" fill="none">
                          <rect x="10" y="20" width="60" height="45" rx="4" stroke="white" strokeWidth="2.5"/>
                          <path d="M25 35 Q40 25 55 35 Q40 45 25 35Z" fill="white" opacity="0.6"/>
                          <circle cx="58" cy="28" r="8" stroke="#C9A84C" strokeWidth="2.5"/>
                          <path d="M55 28 L57 30 L62 25" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                        <span className="text-white/50 text-xs">{course.title}</span>
                      </div>
                    )}
                  </div>

                  {/* Sidebar body */}
                  <div className="p-6">
                    {/* Price */}
                    <p className="text-brand-gold font-bold text-xl mb-5">
                      {course.price}
                    </p>

                    {/* CTA — Primary phone */}
                    <a
                      href="tel:09197080947"
                      className="flex items-center justify-center gap-2 w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-base py-3.5 rounded-xl transition-colors duration-200 mb-3"
                    >
                      <IconPhone />
                      تماس برای تهیه دوره
                    </a>

                    {/* CTA — Instagram */}
                    <a
                      href="https://instagram.com/easy_exocad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-brand-navy hover:bg-brand-blue text-white font-bold text-base py-3.5 rounded-xl transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      اینستاگرام
                    </a>

                    <p className="text-center text-xs text-gray-400 mt-3">
                      مشاوره رایگان — پاسخ سریع
                    </p>
                  </div>
                </div>

                {/* Info chips card */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="text-brand-navy font-bold text-sm mb-4">مشخصات دوره</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <IconClock />
                        مدت دوره
                      </div>
                      <span className="font-semibold text-brand-navy">{course.duration}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <IconLevel />
                        سطح
                      </div>
                      <span className="font-semibold text-brand-navy">{course.level}</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <IconCalendar />
                        بروزرسانی
                      </div>
                      <span className="font-semibold text-brand-navy">{course.updatedAt}</span>
                    </li>
                  </ul>
                </div>

                {/* Who is this for */}
                {course.suitableFor && course.suitableFor.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="text-brand-navy font-bold text-sm mb-4">
                      این دوره مناسب کیست؟
                    </h3>
                    <ul className="space-y-2.5">
                      {course.suitableFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                          <IconCheck />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
