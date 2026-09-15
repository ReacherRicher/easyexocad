/**
 * ZirconCallout
 * ──────────────
 * Reusable in-article callout box.
 * Drop inside any blog post or MDX tutorial file:
 *
 *   import ZirconCallout from '@/components/zircon/ZirconCallout'
 *   <ZirconCallout />
 *
 * Optional `compact` prop for tighter inline use.
 */
interface ZirconCalloutProps {
  compact?: boolean
}

export default function ZirconCallout({ compact = false }: ZirconCalloutProps) {
  return (
    <aside className={`not-prose my-8 rounded-2xl overflow-hidden border border-brand-blue/20 shadow-sm ${compact ? 'my-5' : 'my-8'}`}>
      {/* Left accent bar (appears as top bar in RTL layout) */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-gold" />

      <div className="bg-gradient-to-bl from-blue-50 to-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-brand-navy font-bold text-sm mb-0.5">
            وقت ندارید این کیس را طراحی کنید؟
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            برای کیس‌های پیچیده مثل فول‌مauoth، ایمپلنت یا All-on-4 به شریک رسمی ما{' '}
            <strong className="text-brand-blue">ZirconDesign</strong> برون‌سپاری کنید.
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://zircondesign.com?ref=easyexocad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
          سفارش طراحی
        </a>
      </div>
    </aside>
  )
}
