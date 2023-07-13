import Link from 'next/link'
import Layout from '../Layout'

export default function Footer() {
  return (
    <footer
      className='w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:border-light dark:text-light
    sm:text-base'
    >
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>
          Build with{' '}
          <span className='text-red-700 text-2xl px-1 dark:text-red-300'>&#9825;</span>
          and &#129504; &#x1F9E0; by&nbsp;
          <Link
            href='/about'
            className='underline underline-offset-2 hover:text-black/60 dark:text-primaryDark dark:hover:text-white/60'
          >
            Ilo
          </Link>
        </div>
        <Link
          href='/contact'
          className='underline underline-offset-2 hover:text-black/60 dark:text-primaryDark dark:hover:text-white/60'
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}
