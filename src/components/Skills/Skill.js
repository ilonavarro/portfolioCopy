'use client'
import { motion } from 'framer-motion'

export default function Skill({ text, x, y, tooltip = '✨ You hover me!' }) {
  return (
    <>
      <motion.div
        className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark 
        cursor-grab absolute
        dark:bg-light dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark
        xs:dark:text-light xs:font-bold'
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
        <span
          className='absolute top-10 scale-0 transition-all rounded-full bg-light p-2 text-xs text-dark group-hover:scale-100 
        text-center border-dark border-2
        dark:bg-dark dark:text-light dark:border-light'
        >
          {tooltip}
        </span>
      </motion.div>
    </>
  )
}

// className='absolute top-10 scale-0 transition-all rounded-full bg-red-950 p-2 text-xs text-light group-hover:scale-100
//         text-center'
