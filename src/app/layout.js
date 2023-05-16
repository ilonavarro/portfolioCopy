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
    default: 'Home Portfólio Page',
    template: '%s | Portfólio'
  },
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
