import React from 'react';
import styles from './Navibar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import logo from '/public/logo.png';
import { Link } from 'react-router-dom';

function Navibar() {
  
  return (
    <div className={styles.Navibar}>
      <Link to="/"><img src={logo} alt="STREKA" className={styles.Logo}/></Link>
      <Navigation/>
      <MobileNavigation/>
    </div>
  )
}

export default Navibar

