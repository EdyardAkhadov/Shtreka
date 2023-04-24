import React from 'react'
import styles from './Navibar.module.css'

const NavLinks = (props) => {
  return (
    <ul className={styles.Links}>
        <li>
            <a href="/" className={styles.Links__button}>Розклад</a>
        </li>

        <li>
            <a href="/News" className={styles.Links__button}>Новини</a>
        </li>

        <li>
            <a href="/Travels" className={styles.Links__button}>Куди поїхати?</a>
        </li>
        <li>
            <a href="/Client" className={styles.Links__button}>Особистий кабінет</a>
        </li>
  </ul>
  )
}

export default NavLinks;