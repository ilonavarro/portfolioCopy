import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image src={profilePic} alt='Ilo Dev' className='w-full h-auto' />
          </div>
          <div className='w-1/2'>
            <AnimatedText>Turning Vision Into Reality With Code And Design.</AnimatedText>
            <p>
              As a skilled full-stack developer, I am dedicated to turning ideas into
              innovative web applications. Explore my latest projects and articles,
              showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  )
}
