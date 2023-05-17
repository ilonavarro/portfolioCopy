'use client'
import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
export default function AnimatedNumbers({ value, text }) {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    isInView && motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])
  return (
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7xl font-bold'>
        <span ref={ref}>{value}</span>+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75'>{text}</h2>
    </div>
  )
}
