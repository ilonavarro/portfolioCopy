'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Bsky,
  DevToIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon
} from '../Icons'
import useThemeSwitcher from '../hooks/useThemeSwitcher'
import Logo from '../Logo'

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
        dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group my-2 text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
        h-[1px] inline-block bg-light 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? 'w-full' : 'w-0'}
        dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  )
}

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className='w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'
    >
      <button
        className='flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav className='xl:w-[35%] xl:flex xl:items-center xl:justify-center '>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='mx-4' />
          <CustomLink href='/articles' title='Articles' className='mx-4' />
          <CustomLink href='/contact' title='Contact' className='ml-4' />
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a
            href='https://www.linkedin.com/in/ilo-navarro'
            target='_blank'
            aria-labelledby='LinkedIn'
            whileHover={{ y: -2, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-3 bg-light rounded'
          >
            {mode === 'dark' ? <LinkedInIcon fill='#000000' /> : <LinkedInIcon />}
          </motion.a>
          <motion.a
            href='https://github.com/ilonavarro'
            target='_blank'
            aria-labelledby='github'
            whileHover={{ y: -2, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            {mode === 'dark' ? <GithubIcon /> : <GithubIcon />}
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
            className='w-6 mx-3 bg-light rounded'
          >
            {mode === 'dark' ? <TwitterIcon fill='#1b1b1b' /> : <TwitterIcon />}
          </motion.a>
          <motion.a
            href='https://staging.bsky.app/profile/ilonavarro.bsky.social'
            target='_blank'
            aria-labelledby='Bsky'
            whileHover={{ y: -2, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 ml-3'
          >
            {mode === 'dark' ? <Bsky fill='#000000' /> : <Bsky />}
          </motion.a>

          <motion.button
            whileHover={{ y: -2, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            className={`w-6 ml-4 flex items-center justify-center rounded-full
          /*${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}*/`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </motion.button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between items-center fixed 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32 
      dark:bg-light/75'
        >
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} />
            <CustomMobileLink
              href='/about'
              title='About'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/projects'
              title='Projects'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/articles'
              title='Articles'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/contact'
              title='Contact'
              className=''
              toggle={handleClick}
            />
          </nav>
          <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a
              href='https://www.linkedin.com/in/ilo-navarro'
              target='_blank'
              aria-labelledby='LinkedIn'
              whileHover={{ y: -2, scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mr-3 bg-light rounded sm:mx-1'
            >
              {mode === 'dark' ? <LinkedInIcon fill='#000000' /> : <LinkedInIcon />}
            </motion.a>
            <motion.a
              href='https://github.com/ilonavarro'
              target='_blank'
              aria-labelledby='github'
              whileHover={{ y: -2, scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
            >
              {mode === 'dark' ? <GithubIcon /> : <GithubIcon />}
            </motion.a>
            <motion.a
              href='https://dev.to/ilonavarro'
              target='_blank'
              aria-labelledby='DevTo'
              whileHover={{ y: -2, scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-3 sm:mx-1'
            >
              <DevToIcon />
            </motion.a>
            <motion.a
              href='/'
              target='_blank'
              whileHover={{ y: -2, scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-3 rounded sm:mx-1'
            >
              {mode === 'dark' ? <TwitterIcon fill='#1b1b1b' /> : <TwitterIcon />}
            </motion.a>
            <motion.a
              href='https://staging.bsky.app/profile/ilonavarro.bsky.social'
              target='_blank'
              aria-labelledby='Bsky'
              whileHover={{ y: -2, scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 ml-3 sm:mx-1'
            >
              {mode === 'dark' ? <Bsky fill='#000000' /> : <Bsky />}
            </motion.a>

            <motion.button
              whileHover={{ y: -2, scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
              className={`w-6 ml-4 flex items-center justify-center rounded-full sm:mx-1
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </motion.button>
          </nav>
        </motion.div>
      )}

      <div className='absolute left-[50%] top-2 translate-x-[-50%] xl:left-[55%]'>
        <Logo />
      </div>
    </header>
  )
}
