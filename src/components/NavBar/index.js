'use client'
import Link from 'next/link'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import {
  BskyDark,
  BskyLight,
  DevToIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon
} from '../Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className }) => {
  const pathname = usePathname()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default function NavBar() {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a
          href='https://www.linkedin.com/in/ilo-navarro'
          target='_blank'
          aria-labelledby='LinkedIn'
          whileHover={{ y: -2, scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href='https://github.com/ilonavarro'
          target='_blank'
          aria-labelledby='github'
          whileHover={{ y: -2, scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href='https://dev.to/ilonavarro'
          target='_blank'
          aria-labelledby='DevTo'
          whileHover={{ y: -2, scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <DevToIcon />
        </motion.a>
        <motion.a
          href='/'
          target='_blank'
          whileHover={{ y: -2, scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mx-3'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href='https://staging.bsky.app/profile/ilonavarro.bsky.social'
          target='_blank'
          aria-labelledby='Bsky'
          whileHover={{ y: -2, scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 ml-3'
        >
          <BskyLight />
        </motion.a>
      </nav>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
