'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Image1 from '../images/Image1.jpeg'
type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
       <motion.div
       initial={{
        x:-200
       }}
       transition={{
        duration: 1.2,
       }}
       whileInView={{opacity:1, x: 0}}
       viewport={{once: true}}
       >
       <Image
       className='-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 
        lg:w-[600px] xl:w-[800px] xl:h-[400px] mt-20'
       src={Image1}
       alt=''
       />
       </motion.div>

       <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'> little </span>about me </h4>
            <p className=''>
                I'm Chimenem. I've been coding for over 2 years. As a front-end developer, I've worked with
                various front-end frameworks and Libraries like Angular.js, React.js  to build several web applications ranging from 
                e-commerce applications. I deliver real value by developing applications that solve real life
                problems  
            </p>
       </div>
    </div>
  )
}