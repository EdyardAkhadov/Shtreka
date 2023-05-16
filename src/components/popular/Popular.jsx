import React, { useEffect, useState } from 'react'
import styles from './Popular.module.css'
import { PopularService } from '../../services/popular.service'
import { Link } from 'react-router-dom'
import trainIcon from '/public/trainIcon.png'

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
              <Link to={`Route/${somepopulars.from}/${somepopulars.to}/everyday`} key={somepopulars.id} className={styles.populars__container}>
                  <p className={styles.from}>{somepopulars.from}</p>
                  <img src={`${trainIcon}`}></img>
                  <p className={styles.to}>{somepopulars.to}</p>
              </Link>
            )
          })}
    </div>
  )
}
