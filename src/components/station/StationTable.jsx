import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Navibar from '../navbar/Navibar'
import { RailwaystationService } from '../../services/railwaystation.service'
import styles from './StationTable.module.css'
import Footer from '../footer/Footer'

export default function StationTable() {
    const {name} = useParams()
    const [station, setStations] = useState([])

    
    useEffect(() => {
        if(!name) return 
        const stationsData = async () => {
          const data = await RailwaystationService.getByName(name)
          console.log(data.routes);
          setStations(data.routes)
        } 
        stationsData()
      }, [name]);


  return (
    <div>
        <Navibar/>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Розклад для станції {name}</h2>
          <div className={styles.routes__container}>  
          <p className={styles.block_title}>Відправки з {name}</p>
            <div className={styles.arrival}>
              
              <div className={styles.table__header}>
                <p className={styles.Header__item}>Номер потягу</p>
                <p className={styles.Header__item}>Станція відправки</p>
                <p className={styles.Header__item}>Станція прибуття</p>
                <p className={styles.Header__item}>Час відправки з {name}</p>
              </div>
                {station.map(someroutes => {
                  if(someroutes.status === "arrival"){
                    return(
                      <div className={styles.route__block}>
                        <div className={styles.row}>{someroutes.number}</div>
                        <div className={styles.row}>{someroutes.from}</div>
                        <div className={styles.row}>{someroutes.to}</div>
                        <div className={styles.row}>{someroutes.time}</div>
                      </div>
                    )
                  }              
                })}
            </div>
            <p className={styles.block_title}>Прибуття на {name}</p>
            <div className={styles.departure}>        
              <div className={styles.table__header}>
                <p className={styles.Header__item}>Номер потягу</p>
                <p className={styles.Header__item}>Станція відправки</p>
                <p className={styles.Header__item}>Станція прибуття</p>
                <p className={styles.Header__item}>Час прибуття на {name}</p>
              </div>
                {station.map(someroutes => {
                  if(someroutes.status === "departure"){
                    return(
                      <div className={styles.route__block}>
                        <div className={styles.row}>{someroutes.number}</div>
                        <div className={styles.row}>{someroutes.from}</div>
                        <div className={styles.row}>{someroutes.to}</div>
                        <div className={styles.row}>{someroutes.time}</div>
                      </div>
                    )
                  }              
                })}
          </div>
        </div>
        </div>

        <Footer/>
    </div>
  )
}
