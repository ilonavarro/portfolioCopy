import NavBar from '@/components/NavBar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export const metadata = {
  title: {
    default: 'Home | Ilo Navarro',
    template: '%s | Ilo Navarro'
  },
  description: 'Frontend Developer Ilo Navarro, React/NextJS, HTML, CSS, JS (Javascript)',
  robots: {
    index: true,
    follow: true,
    googlebot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Ilo&apos;s Portfolio Page',
    card: 'summary_large_image'
  },
  icons: {
    shortcut: '/favicon.ico'
  },
  verification: {
    google: 'need put here the code',
    yandex: 'Does anyone use this?'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen xl:p-24 lg:p-16 md:p-12 sm:p-8
      dark:bg-dark`}
      >
        <script
          id='theme-switcher'
          dangerouslySetInnerHTML={{
            __html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `
          }}
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
