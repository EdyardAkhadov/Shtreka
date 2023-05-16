import React, { useEffect, useState } from 'react'
import Navibar from '../navbar/Navibar'
import { useParams } from 'react-router-dom'
import { RoutesService } from '../../services/routes.service'
import styles from './RoutesPage.module.css'
import Footer from '../footer/Footer'


export default function RoutesPage() {
    const {from, to, date} = useParams()

    const[routes, setRoutes] = useState([])
  
    useEffect(() => {
      const newsData = async () => {
        const data = await RoutesService.getByFromToDate(from, to, date)
        setRoutes(data)
        console.log(data)
      }
      newsData()
    }, []);

    return (
    <div>
        <Navibar/>
        <div className={styles.wrapper}> 
        <div className={styles.ticket__container}>
        {routes.map(someroutes => {
            return(  
              <div className={styles.ticket__card} style={{backgroundImage:`url(${someroutes.background})`}}>
                <div className={styles.information}>
                  <h4 className={styles.header}>Квиток</h4>
                  <div className={styles.from__to}>
                    <div className={styles.forTime}>
                      <p className={styles.from}>{someroutes.from}</p>
                      <p className={styles.time}>{someroutes.fromTime}</p>
                    </div>
                    <div className={styles.forTime}>
                      <p className={styles.to}>{someroutes.to}</p> 
                      <p className={styles.time}>{someroutes.toTime}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.details}>
                  <p className={styles.number}>{someroutes.number}</p>
                  <p className={styles.price}>{someroutes.price}</p>
                  <button className={styles.buy__button}>Придбати</button>
                </div>
              </div>
            )
        })}
        </div>
        </div>
        <div className={styles.footer}><Footer/></div>
    </div>
  )
}
