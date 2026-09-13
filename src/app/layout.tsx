import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { websiteSchema } from '@/lib/schema'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const vazirmatn = localFont({
  src: [
    { path: '../../public/fonts/IRANYekanThin.woff2',      weight: '100', style: 'normal' },
    { path: '../../public/fonts/IRANYekanUltraLight.woff2', weight: '200', style: 'normal' },
    { path: '../../public/fonts/IRANYekanLight.woff2',      weight: '300', style: 'normal' },
    { path: '../../public/fonts/IRANYekanRegular.woff2',    weight: '400', style: 'normal' },
    { path: '../../public/fonts/IRANYekanMedium.woff2',     weight: '500', style: 'normal' },
    { path: '../../public/fonts/IRANYekanDemiBold.woff2',   weight: '600', style: 'normal' },
    { path: '../../public/fonts/IRANYekanBold.woff2',       weight: '700', style: 'normal' },
    { path: '../../public/fonts/IRANYekanExtraBold.woff2',  weight: '800', style: 'normal' },
    { path: '../../public/fonts/IRANYekanBlack.woff2',      weight: '900', style: 'normal' },
  ],
  variable: '--font-vazirmatn',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.easyexocad.ir'),
  title: {
    template: '%s | EasyExoCad',
    default: 'EasyExoCad | آموزش حرفه‌ای اگزو کد دندانپزشکی',
  },
  description:
    'آموزش تخصصی نرم‌افزار اگزو کد (exocad) برای دندانپزشکان و تکنیسین‌های دندانپزشکی. دوره‌های آموزشی جامع CAD/CAM دندانپزشکی.',
  keywords: [
    'اگزو کد',
    'exocad',
    'آموزش دندانپزشکی',
    'CAD CAM دندانپزشکی',
    'طراحی دیجیتال دندان',
    'دوره اگزو کد',
    'آموزش اگزو کد دندانپزشکی',
    'easyexocad',
  ],
  authors: [{ name: 'EasyExoCad' }],
  creator: 'EasyExoCad',
  publisher: 'EasyExoCad',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://www.easyexocad.ir',
    siteName: 'EasyExoCad',
    title: 'EasyExoCad | آموزش حرفه‌ای اگزو کد دندانپزشکی',
    description:
      'آموزش تخصصی نرم‌افزار اگزو کد (exocad) برای دندانپزشکان و تکنیسین‌های دندانپزشکی.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EasyExoCad — آموزش اگزو کد دندانپزشکی',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyExoCad | آموزش حرفه‌ای اگزو کد دندانپزشکی',
    description:
      'آموزش تخصصی نرم‌افزار اگزو کد (exocad) برای دندانپزشکان و تکنیسین‌های دندانپزشکی.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.easyexocad.ir',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} antialiased`}>
        <JsonLd data={websiteSchema()} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
