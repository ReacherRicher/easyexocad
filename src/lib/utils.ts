// lib/utils.ts — general utility helpers

/**
 * Joins class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Formats a Persian date string from an ISO date.
 */
export function formatPersianDate(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Estimates reading time from raw text content.
 */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
