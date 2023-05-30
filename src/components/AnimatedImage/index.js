'use client'
import { motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const FramerImage = motion(Image)

export function AnimatedImage({
  src,
  alt,
  className,
  priority = false,
  scaleNumber,
  durationNumber
}) {
  return (
    <FramerImage
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      whileHover={{ scale: scaleNumber }}
      transition={{ duration: durationNumber }}
    />
  )
}

export function MovingImg({ title, img, link }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block'
    x.set(event.pageX)
    y.set(-10)
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className='w-96 h-auto hidden absolute rounded-lg z-10'
        priority={false}
      />
    </Link>
  )
}
