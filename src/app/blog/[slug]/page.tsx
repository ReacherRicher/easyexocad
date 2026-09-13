import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import CourseCard from '@/components/ui/CourseCard'
import { buildMetadata } from '@/lib/seo'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { getAllCourses } from '@/lib/courses'

/* ── Static params ──────────────────────────────────────────── */
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

/* ── Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    path: `/blog/${post.slug}`,
    ogImage: post.thumbnail,
    ogType: 'article',
  })
}

/* ── Minimal markdown → HTML renderer ──────────────────────── */
/**
 * Very lightweight markdown subset renderer for server-side rendering.
 * Handles headings, bold, italic, links, bullet/ordered lists,
 * horizontal rules, and paragraph breaks — enough for our articles.
 */
function renderMarkdown(md: string): string {
  const lines = md.split('\n')
  const out: string[] = []
  let inUl = false
  let inOl = false

  const flushList = () => {
    if (inUl) { out.push('</ul>'); inUl = false }
    if (inOl) { out.push('</ol>'); inOl = false }
  }

  const inlineFormat = (text: string): string =>
    text
      // Bold+italic
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-brand-blue px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-blue hover:text-brand-navy underline underline-offset-2 transition-colors">$1</a>')

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const line = raw.trimEnd()

    // Headings
    const h3 = line.match(/^### (.+)/)
    if (h3) {
      flushList()
      out.push(`<h3 class="text-lg font-bold text-brand-navy mt-6 mb-2">${inlineFormat(h3[1])}</h3>`)
      continue
    }
    const h2 = line.match(/^## (.+)/)
    if (h2) {
      flushList()
      out.push(`<h2 class="text-xl font-bold text-brand-navy mt-8 mb-3 pb-2 border-b border-gray-100">${inlineFormat(h2[1])}</h2>`)
      continue
    }
    const h1 = line.match(/^# (.+)/)
    if (h1) {
      flushList()
      out.push(`<h1 class="text-2xl font-bold text-brand-navy mt-8 mb-4">${inlineFormat(h1[1])}</h1>`)
      continue
    }

    // Horizontal rule
    if (/^---+$/.test(line)) {
      flushList()
      out.push('<hr class="border-gray-200 my-6" />')
      continue
    }

    // Table row (basic support)
    if (line.startsWith('|')) {
      flushList()
      // Skip delimiter row (e.g. |---|---|)
      if (/^\|[-|\s:]+\|/.test(line)) continue
      const isHeader = lines[i + 1]?.trim().match(/^\|[-|\s:]+\|/)
      const cells = line.split('|').slice(1, -1).map(c => c.trim())
      const tag = isHeader ? 'th' : 'td'
      const cellClass = isHeader
        ? 'bg-brand-navy text-white font-bold px-3 py-2 text-sm text-right'
        : 'border border-gray-200 px-3 py-2 text-sm text-right'
      const row = `<tr>${cells.map(c => `<${tag} class="${cellClass}">${inlineFormat(c)}</${tag}>`).join('')}</tr>`
      // Start a new table block or append to ongoing one
      const prevLine = out[out.length - 1] ?? ''
      if (prevLine.startsWith('<div class="overflow-x-auto')) {
        out[out.length - 1] = prevLine + row
      } else {
        out.push(`<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm">${row}`)
      }
      // Look ahead: if next non-table line, close the table
      const nextLine = lines[i + 1]?.trim() ?? ''
      if (!nextLine.startsWith('|')) {
        out[out.length - 1] += '</table></div>'
      }
      continue
    }

    // Ordered list item
    const olMatch = line.match(/^(\d+)\. (.+)/)
    if (olMatch) {
      if (inUl) { out.push('</ul>'); inUl = false }
      if (!inOl) { out.push('<ol class="list-decimal list-inside space-y-2 my-4 ps-4">'); inOl = true }
      out.push(`<li class="text-gray-700 leading-relaxed">${inlineFormat(olMatch[2])}</li>`)
      continue
    }

    // Unordered list item
    const ulMatch = line.match(/^[-*] (.+)/)
    if (ulMatch) {
      if (inOl) { out.push('</ol>'); inOl = false }
      if (!inUl) { out.push('<ul class="space-y-2 my-4 ps-4">'); inUl = true }
      out.push(`<li class="flex items-start gap-2 text-gray-700 leading-relaxed"><span class="text-brand-gold mt-1.5 text-xs flex-shrink-0">◆</span><span>${inlineFormat(ulMatch[1])}</span></li>`)
      continue
    }

    // Empty line
    if (line.trim() === '') {
      flushList()
      continue
    }

    // Regular paragraph
    flushList()
    out.push(`<p class="text-gray-700 leading-loose mb-4">${inlineFormat(line)}</p>`)
  }

  flushList()
  return out.join('\n')
}

/* ── Page component ─────────────────────────────────────────── */
export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const recentPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4)
  const allCourses = getAllCourses()
  const relatedCourses = allCourses.slice(0, 2)

  const htmlContent = renderMarkdown(post.content)

  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: post.date,
          author: post.author,
          thumbnail: post.thumbnail,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'خانه', url: '/' },
          { name: 'بلاگ', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />

      <main className="bg-gray-50 min-h-screen">
        {/* Header strip */}
        <div className="bg-brand-navy px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-blue-300 mb-4 flex-wrap" aria-label="breadcrumb">
              <Link href="/" className="hover:text-brand-gold transition-colors">خانه</Link>
              <span className="text-blue-500">›</span>
              <Link href="/blog" className="hover:text-brand-gold transition-colors">بلاگ</Link>
              <span className="text-blue-500">›</span>
              <span className="text-white truncate max-w-[200px] sm:max-w-none">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* ═══════════════════════════════════════
                MAIN CONTENT
            ═══════════════════════════════════════ */}
            <article className="flex-1 min-w-0">
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-brand-gold/10 text-brand-gold text-xs px-2.5 py-0.5 rounded-full border border-brand-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-brand-navy leading-tight mb-5">
                {post.title}
              </h1>

              {/* Meta bar */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-5 mb-6 border-b border-gray-200">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{post.readingTime} دقیقه مطالعه</span>
                </div>
              </div>

              {/* Hero image */}
              {post.thumbnail && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 720px"
                    priority
                  />
                </div>
              )}

              {/* Article body */}
              <div
                className="prose-custom bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Back link */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-navy font-semibold text-sm transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  بازگشت به بلاگ
                </Link>
              </div>
            </article>

            {/* ═══════════════════════════════════════
                SIDEBAR
            ═══════════════════════════════════════ */}
            <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-6">
              <div className="sticky top-24 space-y-6">

                {/* Related Courses */}
                {relatedCourses.length > 0 && (
                  <div>
                    <h3 className="text-brand-navy font-bold text-base mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-brand-gold rounded-full inline-block" />
                      دوره‌های مرتبط
                    </h3>
                    <div className="space-y-4">
                      {relatedCourses.map((course) => (
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
                  </div>
                )}

                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="text-brand-navy font-bold text-base mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-brand-gold rounded-full inline-block" />
                      مقالات اخیر
                    </h3>
                    <ul className="space-y-4">
                      {recentPosts.map((p) => (
                        <li key={p.slug}>
                          <Link href={`/blog/${p.slug}`} className="group block">
                            <p className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors leading-snug mb-1 line-clamp-2">
                              {p.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <time dateTime={p.date}>{p.date}</time>
                              <span>·</span>
                              <span>{p.readingTime} دقیقه</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-brand-navy rounded-2xl p-5 text-center">
                  <p className="text-white font-bold text-sm mb-1">سوال دارید؟</p>
                  <p className="text-blue-200 text-xs mb-4 leading-relaxed">
                    برای مشاوره رایگان با ما تماس بگیرید
                  </p>
                  <a
                    href="tel:09197080947"
                    className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-sm py-2.5 rounded-lg transition-colors mb-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    تماس تلفنی
                  </a>
                  <a
                    href="https://instagram.com/easy_exocad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 font-bold text-sm py-2.5 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    اینستاگرام
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
