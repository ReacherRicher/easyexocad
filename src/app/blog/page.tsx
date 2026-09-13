import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/ui/BlogCard'
import { buildMetadata } from '@/lib/seo'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = buildMetadata({
  title: 'بلاگ | مقالات آموزشی دندانپزشکی دیجیتال',
  description:
    'مقالات آموزشی تخصصی درباره اگزو کد، CAD/CAM دندانپزشکی، طراحی دیجیتال دندان و آخرین اخبار دندانپزشکی دیجیتال در ایران.',
  keywords: [
    'مقالات اگزو کد',
    'بلاگ دندانپزشکی دیجیتال',
    'آموزش CAD/CAM',
    'طراحی دندان دیجیتال',
  ],
  path: '/blog',
})

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main>
      {/* ── Hero Banner ── */}
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
            <span className="text-white">بلاگ</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            بلاگ | مقالات آموزشی دندانپزشکی دیجیتال
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            آخرین مقالات آموزشی درباره اگزو کد، CAD/CAM و طراحی دیجیتال دندان
          </p>
        </div>
      </section>

      {/* ── Post Grid ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 py-20">مقاله‌ای یافت نشد.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  thumbnail={post.thumbnail}
                  tags={post.tags}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-white border-t border-gray-100 py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">
            آماده شروع یادگیری اگزو کد هستید؟
          </h2>
          <p className="text-gray-500 mb-8">
            دوره‌های آموزشی ما را ببینید و اولین قدم را بردارید
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white font-bold px-8 py-3.5 rounded-xl transition-colors duration-200"
          >
            مشاهده دوره‌ها
            <svg className="w-4 h-4 rotate-180" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
