'use client'
import React from 'react'
import styles from './Testimonials.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import TestimonialCard from './testimonial-card/TestimonialCard'
import { caveatFont } from '@/fonts'
import Autoplay from 'embla-carousel-autoplay'

function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])
  return (
    <>
      <section id='testimonials' className={styles.testimonials}>
        <h1 className={caveatFont.className}><span>W</span>hat {" "}
            <span>O</span>ther {" "}
            <span>P</span>eople {" "}
            <span>S</span>ay
        </h1>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <TestimonialCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials

// function useEmblaCarousel(arg0: { loop: boolean }, arg1: any[]): [any] {
//     throw new Error('Function not implemented.')
// }
// function Autoplay(arg0: { delay: number }): any {
//     throw new Error('Function not implemented.')
// }

