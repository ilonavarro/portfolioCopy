import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../../public/images/profile/ilo.jpg'
import AnimatedNumbers from '@/components/AnimatedNumbers'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

export const metadata = {
  title: 'About',
  description: 'Generated by create next app'
}

export default function About() {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText className='mb-16'>Passion Fuels Purpose!</AnimatedText>
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
            <p className='font-medium'>
              Hi, I&apos;m Ilo Navarro, a web developer and UI/UX designer with a passion
              for creating beautiful, functional, and user-centered digital experiences.
              With 4 years of experience in the field. I am always looking for new and
              innovative ways to bring my client&apos;s visions to life.
            </p>
            <p className='my-4 font-medium'>
              I believe that design is about more than just making things look pretty –
              it&apos;s about solving problems and creating intuitive, enjoyable
              experiences for users.
            </p>
            <p className='font-medium'>
              Whether I&apos;m working on a website, mobile app, or other digital product,
              I bring my commitment to design excellence and user-centered thinking to
              every project I work on. I look forward to the opportunity to bring my
              skills and passion to your next project.
            </p>
          </div>
          <div
            className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
          bg-light p-8'
          >
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
            <Image
              src={profilePic}
              alt='Ilo Navarro'
              className='w-full h-auto rounded-2xl'
              priority={true}
            />
          </div>
          <div className='col-span-2 flex flex-col items-end justify-between'>
            <AnimatedNumbers value={50} text={'satisfied clients'} />
            <AnimatedNumbers value={40} text={'projects completed'} />
            <AnimatedNumbers value={3} text={'years of experience'} />
          </div>
        </div>
        <Skills />
        <Experience />
      </Layout>
    </main>
  )
}
