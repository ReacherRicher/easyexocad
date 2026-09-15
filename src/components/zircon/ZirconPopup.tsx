'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * ZirconPopup
 * ────────────
 * Exit-intent + 15-second timeout popup.
 * - On desktop: fires when mouse leaves toward the top of the viewport (exit-intent).
 * - On mobile/tablet: fires after 15 seconds (no reliable exit-intent on touch).
 * - Once dismissed it stores a session flag so it never re-shows in the same tab.
 * - Lightweight: no external dependencies.
 */
export default function ZirconPopup() {
  const [visible, setVisible] = useState(false)
  const firedRef = useRef(false)

  const fire = () => {
    if (firedRef.current) return
    firedRef.current = true
    setVisible(true)
  }

  useEffect(() => {
    // Don't re-show if already dismissed this session
    if (sessionStorage.getItem('zircon_popup_dismissed')) return

    // Exit-intent for desktop
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) fire()
    }
    document.addEventListener('mouseleave', handleMouseLeave)

    // 15-second fallback (covers mobile)
    const timer = setTimeout(fire, 15_000)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('zircon_popup_dismissed', '1')
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="پیشنهاد ویژه ZirconDesign"
        className="fixed inset-0 z-[201] flex items-center justify-center p-4"
      >
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Top accent stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-gold" />

          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="بستن"
            className="absolute top-4 start-4 text-gray-400 hover:text-gray-600 transition-colors duration-150 p-1 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
            </svg>
          </button>

          <div className="px-7 pt-6 pb-7">
            {/* Logos */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-brand-navy font-bold text-lg">EasyExoCad</span>
              <span className="text-gray-300 font-light">×</span>
              <span className="text-brand-blue font-bold text-lg">ZirconDesign</span>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>

            {/* Copy */}
            <h3 className="text-brand-navy font-bold text-xl text-center mb-2">
              پیشنهاد ویژه برای شما
            </h3>
            <p className="text-gray-500 text-sm text-center leading-relaxed mb-5">
              کیس‌های پیچیده‌ات را به تیم ZirconDesign بسپار و با کد تخفیف اختصاصی EasyExoCad،
              <span className="text-brand-gold font-bold"> ۱۰٪ تخفیف </span>
              روی اولین سفارش بگیر.
            </p>

            {/* Promo code */}
            <div className="flex items-center justify-center gap-2 bg-gray-50 border border-dashed border-brand-gold/50 rounded-xl py-3 px-4 mb-5">
              <span className="text-xs text-gray-400">کد تخفیف:</span>
              <span className="font-bold text-brand-navy tracking-widest text-base">EASY10</span>
            </div>

            {/* CTA */}
            <a
              href="https://zircondesign.com?ref=easyexocad&coupon=EASY10"
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="block w-full text-center bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold py-3.5 rounded-xl transition-colors duration-200 text-sm"
            >
              سفارش طراحی در ZirconDesign ←
            </a>

            <button
              onClick={dismiss}
              className="block w-full text-center text-gray-400 hover:text-gray-600 text-xs mt-3 transition-colors duration-150"
            >
              نه ممنون، خودم طراحی می‌کنم
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
