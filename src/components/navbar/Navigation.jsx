import React from 'react'
import NavLinks from './NavLinks'
import styles from './Navibar.module.css'

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
        <NavLinks/>
    </nav>
  )
}
