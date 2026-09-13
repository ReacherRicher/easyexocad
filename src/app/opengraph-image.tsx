import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'EasyExoCad — آموزش اگزو کد دندانپزشکی'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1E3A5F',
          padding: '60px',
          fontFamily: 'sans-serif',
          direction: 'rtl',
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: '80px',
            height: '6px',
            backgroundColor: '#C9A84C',
            borderRadius: '3px',
            marginBottom: '32px',
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#C9A84C',
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}
        >
          EasyExoCad
        </div>

        {/* Persian tagline */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 400,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.5,
            maxWidth: '800px',
          }}
        >
          آموزش حرفه‌ای اگزو کد دندانپزشکی
        </div>

        {/* Sub tagline */}
        <div
          style={{
            fontSize: '22px',
            color: '#2D7DD2',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          دوره‌های جامع CAD/CAM دندانپزشکی
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#C9A84C',
            opacity: 0.8,
          }}
        >
          www.easyexocad.ir
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
