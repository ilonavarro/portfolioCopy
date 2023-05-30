import Link from 'next/link'
import { GithubIcon } from '../Icons'
import { AnimatedImage } from '../AnimatedImage'

export const FeatureProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  priority = false
}) => {
  return (
    <article
      className='w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl
    border border-solid border-dark bg-light shadow-2xl p-12'
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl '
      />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
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

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

export const Project = ({
  title,
  type,
  img,
  link,
  github,
  summary,
  priority = false
}) => {
  return (
    <article
      className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    '
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[1.5rem] bg-dark
      rounded-br-3xl '
      />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
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

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        {summary && <p className='my-2 font-medium text-dark text-sm'>{summary}</p>}
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline'>
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
