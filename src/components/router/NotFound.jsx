import React from 'react'
import Navibar from '../navbar/Navibar'
import styles from './NotFound.module.css'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <Navibar/>
        <div className={styles.notfound_content}>
            <p>Сторінку за вашим запитом, нажаль, не знайдено</p>
        </div>
        <footer><Footer/></footer>
    </div>
  )
}
