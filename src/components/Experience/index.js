'use client'
import Details from '@/components/Details'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Senior Software Engineer'
            company='Technologeek'
            companyLink='https://technologeek.com'
            time='Sep 2021 - Present'
            address='New York, US'
            work='Developed and maintained a full-stack web application for a large-scale e-commerce'
          />
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com'
            time='Sep 2020 - Sep 2021'
            address='Mountain View, CA'
            work='Worked on a team responsible for developing new features for Google&#39;s 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization'
          />
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com'
            time='Sep 2019 - Sep 2020'
            address='Mountain View, CA'
            work='Developed and maintained a full-stack web application for a large-scale e-commerce'
          />
          <Details
            position='Software Engineer'
            company='Google'
            companyLink='https://www.google.com'
            time='Sep 2018 - Sep 2019'
            address='Mountain View, CA'
            work='Developed and maintained a full-stack web application for a large-scale e-commerce'
          />
        </ul>
      </div>
    </div>
  )
}
