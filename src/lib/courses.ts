import fs from 'fs'
import path from 'path'

export interface CurriculumSection {
  section: string
  lessons: string[]
}

export interface CourseInstructor {
  name: string
  bio: string
}

export interface CourseBadge {
  label: string
  variant?: 'new' | 'popular' | 'sale' | 'default'
}

export interface Course {
  slug: string
  title: string
  description: string
  longDescription: string
  curriculum: CurriculumSection[]
  instructor: CourseInstructor
  price: string
  thumbnail?: string
  tags: string[]
  badge?: CourseBadge
  level: string
  duration: string
  updatedAt: string
  suitableFor?: string[]
  featured?: boolean
}

const coursesDir = path.join(process.cwd(), 'src/content/courses')

export function getAllCourses(): Course[] {
  const files = fs.readdirSync(coursesDir).filter((f) => f.endsWith('.json'))
  const courses = files.map((file) => {
    const raw = fs.readFileSync(path.join(coursesDir, file), 'utf-8')
    return JSON.parse(raw) as Course
  })
  // Featured first, then alphabetical by title
  return courses.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return a.title.localeCompare(b.title, 'fa')
  })
}

export function getCourseBySlug(slug: string): Course | undefined {
  const filePath = path.join(coursesDir, `${slug}.json`)
  if (!fs.existsSync(filePath)) return undefined
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as Course
}
