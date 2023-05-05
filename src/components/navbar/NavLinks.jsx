import React from 'react'
import styles from './Navibar.module.css'
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul className={styles.Links}>
        <li>
            <Link to="/" className={styles.Links__button}>Розклад</Link>
        </li>
        <li>
            <Link to="/Client" className={styles.Links__button}>Особистий кабінет</Link>
        </li>
  </ul>
  )
}

export default NavLinks;