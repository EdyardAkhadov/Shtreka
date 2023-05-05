import React, { useEffect, useState } from 'react'
import styles from './Popular.module.css'
import { PopularService } from '../../services/popular.service'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Popular() {
  const[populars, setPopulars] = useState([])

  
  useEffect(() => {
    const newsData = async () => {
      const data = await PopularService.getAll()
      setPopulars(data)
    
    } 
    newsData()
  }, []);


  return (
    <div className={styles.Popular__block}>
      <h3 className={styles.Popular__title}>Популярні маршрути</h3>
      {populars.map(somepopulars => {
            return(
              <Link to={`/${somepopulars.from}/${somepopulars.to}`} key={somepopulars.id} className={styles.populars__container}>
                  <p className={styles.from}>{somepopulars.from}</p>
                  <img src='public/trainIcon.png'></img>
                  <p className={styles.to}>{somepopulars.to}</p>
              </Link>
            )
          })}
    </div>
  )
}
