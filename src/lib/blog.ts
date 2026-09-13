import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  tags: string[]
  excerpt: string
  thumbnail?: string
  readingTime: number
  content: string
}

const blogDir = path.join(process.cwd(), 'src/content/blog')

/** Estimate reading time: ~200 Persian words per minute */
function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug: (data.slug as string | undefined) ?? slug,
      title: (data.title as string) ?? '',
      date: (data.date as string) ?? '',
      author: (data.author as string) ?? 'EasyExoCad',
      tags: (data.tags as string[]) ?? [],
      excerpt: (data.excerpt as string) ?? '',
      thumbnail: data.thumbnail as string | undefined,
      readingTime: calcReadingTime(content),
      content,
    } satisfies BlogPost
  })

  // Sort descending by date
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  // Try the slug as filename, or scan for frontmatter slug match
  const directPath = path.join(blogDir, `${slug}.mdx`)
  if (fs.existsSync(directPath)) {
    const raw = fs.readFileSync(directPath, 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug: (data.slug as string | undefined) ?? slug,
      title: (data.title as string) ?? '',
      date: (data.date as string) ?? '',
      author: (data.author as string) ?? 'EasyExoCad',
      tags: (data.tags as string[]) ?? [],
      excerpt: (data.excerpt as string) ?? '',
      thumbnail: data.thumbnail as string | undefined,
      readingTime: calcReadingTime(content),
      content,
    }
  }

  // Fallback: scan all posts for matching frontmatter slug
  return getAllPosts().find((p) => p.slug === slug)
}
