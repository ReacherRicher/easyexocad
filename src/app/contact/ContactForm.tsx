'use client'

import { useState, FormEvent } from 'react'

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const SUBJECTS = [
  { value: '', label: 'موضوع پیام را انتخاب کنید' },
  { value: 'consultation', label: 'مشاوره دوره' },
  { value: 'purchase', label: 'خرید دوره' },
  { value: 'technical', label: 'سوال فنی' },
  { value: 'other', label: 'سایر' },
]

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const inputClass =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors duration-200'

const labelClass = 'block text-sm font-medium text-brand-navy mb-1.5'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  function validate(): boolean {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'نام الزامی است'
    if (!form.email.trim()) {
      newErrors.email = 'ایمیل الزامی است'
    } else if (!isValidEmail(form.email)) {
      newErrors.email = 'فرمت ایمیل صحیح نیست'
    }
    if (!form.message.trim()) newErrors.message = 'متن پیام الزامی است'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear that field's error on change
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1200)
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-green-800 font-bold text-xl mb-3">پیام ارسال شد!</h3>
        <p className="text-green-700 text-sm leading-relaxed">
          پیام شما با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.
        </p>
        <p className="text-green-600 text-sm mt-2">
          یا همین الان با ما تماس بگیرید:{' '}
          <a href="tel:09197080947" className="font-bold underline" dir="ltr">
            ۰۹۱۹۷۰۸۰۹۴۷
          </a>
        </p>
        <button
          onClick={() => {
            setForm({ name: '', email: '', phone: '', subject: '', message: '' })
            setStatus('idle')
          }}
          className="mt-6 text-sm text-green-700 underline hover:text-green-900 transition-colors"
        >
          ارسال پیام دیگری
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          نام و نام خانوادگی <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="مثال: علی محمدی"
          autoComplete="name"
          className={`${inputClass} ${errors.name ? 'border-red-400 focus:ring-red-300' : ''}`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          ایمیل <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          autoComplete="email"
          dir="ltr"
          className={`${inputClass} ${errors.email ? 'border-red-400 focus:ring-red-300' : ''}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          شماره موبایل{' '}
          <span className="text-gray-400 font-normal text-xs">(اختیاری)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="۰۹۱۹۷۰۸۰۹۴۷"
          autoComplete="tel"
          dir="ltr"
          className={inputClass}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={labelClass}>
          موضوع پیام
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        >
          {SUBJECTS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          متن پیام <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="پیام خود را اینجا بنویسید..."
          className={`${inputClass} resize-none ${errors.message ? 'border-red-400 focus:ring-red-300' : ''}`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-gold hover:bg-brand-gold-light disabled:opacity-60 disabled:cursor-not-allowed text-brand-navy font-bold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-base"
      >
        {status === 'loading' ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            در حال ارسال...
          </>
        ) : (
          'ارسال پیام'
        )}
      </button>
    </form>
  )
}
