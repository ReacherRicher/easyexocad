export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 bg-white px-6">
      {/* Spinner */}
      <div className="relative w-16 h-16" role="status" aria-label="در حال بارگذاری">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-brand-navy/10" />
        {/* Spinning arc */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-gold animate-spin" />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
        </div>
      </div>

      <p className="text-brand-navy/60 text-sm font-medium animate-pulse">
        در حال بارگذاری...
      </p>
    </div>
  )
}
