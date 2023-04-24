import React from 'react'
import styles from './Navibar.module.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

function Navibar() {
  
  return (
    <div className={styles.Navibar}>
      <img src="public/logo.png" alt="STREKA" className={styles.Logo}/>
      <Navigation/>
      <MobileNavigation/>
    </div>
  )
}

export default Navibar

