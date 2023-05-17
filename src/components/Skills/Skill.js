'use client'
import { motion } from 'framer-motion'

export default function Skill({ text, x, y }) {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-grab
      absolute'
      whileHover={{
        scale: 1.05,
        textShadow: '0px 0px 4px rgb(44, 215, 254)',
        boxShadow: '0px 0px 8px rgb(44, 215, 254)'
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  )
}
