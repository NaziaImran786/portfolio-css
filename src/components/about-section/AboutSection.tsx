'use client'
import React from 'react'
import Image from 'next/image'
import Styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/fonts'
import Button from '../button/Button'
import { motion } from 'framer-motion'
function AboutSection() {
  return (
    <>
    <section id='about' className={Styles.about}>
      <motion.div className={Styles.aboutLeftDiv}
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1.5, type: "spring"}}
      >          
          <h1 className={ caveatFont.className}>Nazia Imran</h1>
          <p className={ caveatFont.className}>Freelance Web Developer</p>

          <h3 className={`${Styles.detailText} ${interFont.className}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
          dolorum odio magni possimus corrupti molestiae labore voluptatum
          ut autem deleniti facilis tempora commodi dolores debitis repellendus
          excepturi nisi? Quisquam suscipit iste facere molestiae saepe
          voluptates.</h3>

          <Button text={"Contact Me"} />
      </motion.div >

      <motion.div className={Styles.aboutRightDiv}
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1.5, type: "spring"}}
      >
        <Image src={"/profile-pic.png"} alt={"profile picture"} width={400} height={400}></Image>
      </motion.div>
    </section>
    </>
  )
}

export default AboutSection
