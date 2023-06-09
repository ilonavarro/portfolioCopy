import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import devDesignPic from '../../public/images/profile/development-design.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import HireMe from '@/components/HireMe'
import LightBulb from '../../public/images/svg/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <main
      className='flex items-center text-dark w-full min-h-screen
    dark:text-light'
    >
      <Layout className='pt-0 md:pt-16 sm:pt-8'>
        <div className='flex items-center justify-between w-full lg:flex-col'>
          <div className='w-1/2 md:w-full'>
            <Image
              src={profilePic}
              alt='Ilo Dev'
              className='w-full h-auto rounded-3xl opacity-90 lg:hidden md:inline-block md:w-full'
              priority={true}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText
              className='!text-6xl !text-left 
            xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-6xl sm:!text-3xl'
            >
              Turning Vision Into Reality With Code And Design.
            </AnimatedText>
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a skilled full-stack developer, I am dedicated to turning ideas into
              innovative web applications. Explore my latest projects and articles,
              showcasing my expertise in React.js and web development.
            </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link
                href='#'
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                border-2 border-solid border-transparent
                hover:bg-light hover:text-dark hover:border-dark
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light
                md:p-2 md:px-4 md:text-base'
              >
                My Resume
              </Link>
              <Link
                href='/contact'
                className='ml-4 text-lg font-medium capitalize text-dark underline hover:font-semibold
                dark:text-light
                md:text-base'
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
        <Image src={LightBulb} alt='Ilo Dev' className='w-full h-auto' priority={true} />
      </div>
    </main>
  )
}
