const SITE_URL = 'https://www.easyexocad.ir'
const SITE_NAME = 'EasyExoCad'

export interface CourseSchemaParams {
  title: string
  description: string
  slug: string
  instructor?: string
  thumbnail?: string
  keywords?: string[]
}

export interface ArticleSchemaParams {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  author?: string
  thumbnail?: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'آموزش تخصصی نرم‌افزار اگزو کد (exocad) برای دندانپزشکان و تکنیسین‌های دندانپزشکی',
    inLanguage: 'fa-IR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function courseSchema(course: CourseSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: `${SITE_URL}/courses/${course.slug}`,
    inLanguage: 'fa-IR',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    instructor: {
      '@type': 'Person',
      name: course.instructor ?? 'متخصص EasyExoCad',
    },
    ...(course.thumbnail && { image: `${SITE_URL}${course.thumbnail}` }),
    ...(course.keywords && { keywords: course.keywords.join(', ') }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IRR',
      url: `${SITE_URL}/contact`,
    },
  }
}

export function articleSchema(post: ArticleSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: 'fa-IR',
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author ?? SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(post.thumbnail && { image: `${SITE_URL}${post.thumbnail}` }),
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'آموزش تخصصی نرم‌افزار اگزو کد (exocad) برای دندانپزشکان و تکنیسین‌های دندانپزشکی. دوره‌های جامع CAD/CAM دندانپزشکی.',
    inLanguage: 'fa-IR',
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Persian',
      url: `${SITE_URL}/contact`,
    },
  }
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}
