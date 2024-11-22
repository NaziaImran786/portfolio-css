'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import { caveatFont, interFont } from '@/fonts';
import { IoMenu } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { AnimatePresence, motion } from 'framer-motion';

function Header () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={caveatFont.className}>Nazia Imran</h1>

          <AnimatePresence>
         {isOpen ? (
           <motion.ul className={`${interFont.className} ${styles.navUl} ${styles.active}
           `}
           key={"active"}
           initial={{opacity: 0, width: 0}}
           animate={{opacity: 1, width: "40%"}}
           exit={{opacity: 0, width: 0}}
           transition={{duration: 1.5, type: "spring"}}
           >
           <CgCloseR size={30} className={styles.close} onClick={()=>{setIsOpen(!isOpen)}} />
           <li><Link href={"#home"}>Home</Link></li>
           <li><Link href={"#about"}>About</Link></li>
           <li><Link href={"#portfolio"}>Portfolio</Link></li>
           <li><Link href={"#services"}>Services</Link></li>
           <li><Link href={"#testimonials"}>Testimonials</Link></li>
           <li><Link href={"#contact"}>Contact</Link></li>
         </motion.ul>
         ) 
         :
         (
            <ul className={`${interFont.className} ${styles.navUl}`}>
            <li><Link href={"#home"}>Home</Link></li>
            <li><Link href={"#about"}>About</Link></li>
            <li><Link href={"#portfolio"}>Portfolio</Link></li>
            <li><Link href={"#services"}>Services</Link></li>
            <li><Link href={"#testimonials"}>Testimonials</Link></li>
            <li><Link href={"#contact"}>Contact</Link></li>
           </ul>
          )}
          </AnimatePresence>

          <IoMenu size={30} className={styles.menu} onClick={()=>{setIsOpen(!isOpen)}}/>
        </nav>
      </header>
    </>
  )
}

export default Header
