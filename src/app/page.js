import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image
              src={profilePic}
              alt='Ilo Dev'
              className='w-full h-auto'
              priority={true}
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText className='!text-6xl !text-left'>
              Turning Vision Into Reality With Code And Design.
            </AnimatedText>
            <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas into
              innovative web applications. Explore my latest projects and articles,
              showcasing my expertise in React.js and web development.
            </p>
            <div className='flex items-center self-start mt-2'>
              <Link
                href='#'
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                border-2 border-solid border-transparent
                hover:bg-light hover:text-dark hover:border-dark '
              >
                My Resume
              </Link>
              <Link
                href='/contact'
                className='ml-4 text-lg font-medium capitalize text-dark underline'
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}
