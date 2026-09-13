import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  role?: string
  quote: string
  rating?: number
  avatar?: string
  className?: string
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} ستاره از ۵`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn('w-4 h-4', i < rating ? 'text-brand-gold' : 'text-gray-200')}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function AvatarInitials({ name, avatar }: { name: string; avatar?: string }) {
  if (avatar) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/30"
      />
    )
  }

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  // Deterministic background from name
  const colors = [
    'bg-brand-navy',
    'bg-brand-blue',
    'bg-emerald-600',
    'bg-purple-600',
    'bg-rose-600',
  ]
  const colorIndex = name.charCodeAt(0) % colors.length

  return (
    <div
      className={cn(
        'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base',
        colors[colorIndex],
      )}
    >
      {initials}
    </div>
  )
}

export default function TestimonialCard({
  name,
  role,
  quote,
  rating = 5,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        'bg-white rounded-2xl p-6 shadow-sm border border-gray-100',
        'hover:shadow-md hover:border-brand-blue/20 transition-all duration-300',
        'flex flex-col gap-4',
        className,
      )}
    >
      {/* Quote icon */}
      <svg
        className="w-8 h-8 text-brand-gold/30 flex-shrink-0"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 22V16c0-4.4 3.6-8 8-8V10c-3.3 0-6 2.7-6 6H10v6H6zM18 22V16c0-4.4 3.6-8 8-8V10c-3.3 0-6 2.7-6 6H22v6H18z"/>
      </svg>

      {/* Quote text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{quote}</p>

      {/* Stars */}
      <StarRating rating={rating} />

      {/* Author */}
      <footer className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <AvatarInitials name={name} avatar={avatar} />
        <div>
          <cite className="not-italic text-brand-navy font-bold text-sm">{name}</cite>
          {role && (
            <p className="text-gray-400 text-xs mt-0.5">{role}</p>
          )}
        </div>
      </footer>
    </blockquote>
  )
}
