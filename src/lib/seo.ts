import type { Metadata } from 'next'

const SITE_URL = 'https://www.easyexocad.ir'
const SITE_NAME = 'EasyExoCad'
const DEFAULT_OG_IMAGE = '/og-image.jpg'

export interface BuildMetadataParams {
  title: string
  description: string
  keywords?: string[]
  path?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
}: BuildMetadataParams): Metadata {
  const url = `${SITE_URL}${path}`

  const defaultKeywords = [
    'اگزو کد',
    'exocad',
    'آموزش دندانپزشکی',
    'CAD CAM دندانپزشکی',
    'طراحی دیجیتال دندان',
    'easyexocad',
  ]

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: 'fa_IR',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  }
}
