import Link from 'next/link'
import { AnimatedImage, MovingImg } from '../AnimatedImage'
import { AnimatedLi } from './AnimatedLi'

export function FeaturedArticle({ img, title, time, summary, link, priority }) {
  return (
    <li
      className='col-span-1 w-full p-4 bg-light border border-solid 
      border-dark rounded-2xl relative
      dark:bg-dark dark:border-light'
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[1.5rem] bg-dark
      rounded-br-3xl
      dark:bg-light'
      />
      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <AnimatedImage
          src={img}
          alt={title}
          className='w-full h-auto'
          priority={priority}
          scaleNumber={1.05}
          durationNumber={0.2}
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold mb-2 mt-4 hover:underline'>
          {title}
        </h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

export function Article({ img, title, date, link }) {
  return (
    <AnimatedLi>
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark'>
        {date}
      </span>
    </AnimatedLi>
  )
}
