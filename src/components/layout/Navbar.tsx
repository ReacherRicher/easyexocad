'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'خانه' },
  { href: '/courses', label: 'دوره‌ها' },
  { href: '/blog', label: 'بلاگ' },
  { href: '/contact', label: 'تماس با ما' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-brand-navy transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30 backdrop-blur-sm' : 'border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-brand-gold font-bold text-2xl tracking-wide hover:text-brand-gold-light transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-white text-sm font-normal opacity-70">|</span>
          EasyExoCad
        </Link>

        {/* Desktop nav links — RTL order (right side in LTR container = visual left in RTL page) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive
                    ? 'text-brand-gold'
                    : 'text-blue-200 hover:text-brand-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 right-0 h-0.5 bg-brand-gold rounded-full transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
          <Link
            href="/courses"
            className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-sm px-5 py-2 rounded-lg transition-colors duration-200"
          >
            شروع یادگیری
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="منوی ناوبری"
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10 px-6 pb-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors duration-200 ${
                  isActive ? 'text-brand-gold' : 'text-blue-200 hover:text-brand-gold'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block w-full text-center bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            شروع یادگیری
          </Link>
        </div>
      )}
    </nav>
  )
}
