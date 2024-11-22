import React from 'react'
import styles from './FooterSection.module.css'
import { caveatFont } from '@/fonts'

function FooterSection() {
  return (
    <>
    <footer className={styles.footer}>
        <h1 className={caveatFont.className}>© 2024 Nazia Imran. All rights reserved</h1>
    </footer>
      
    </>
  )
}

export default FooterSection
