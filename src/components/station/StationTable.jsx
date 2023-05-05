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
            <div className={styles.column}>
              <p className={styles.table__header}>Номер потягу</p>
              {station.map(someroutes => {
                return(
                  <div className={styles.row}>{someroutes.number}</div>
                )
              })}
            </div>

            <div  className={styles.column}>
              <p className={styles.table__header}>Станція відправки</p>
              {station.map(someroutes => {
                return(
                  <div className={styles.row}>{someroutes.from}</div>
                )
              })}
            </div>
            
            <div  className={styles.column}>
              <p className={styles.table__header}>Станція прибуття</p>
              {station.map(someroutes => {
                return(
                  <div className={styles.row}>{someroutes.to}</div>
                )
              })}
            </div>

            <div className={styles.column}>
              <p className={styles.table__header}>Час відправки з {name}</p>
              {station.map(someroutes => {
              return(
                <div className={styles.row}>{someroutes.status === "arrival" && <div className={styles.row}>{someroutes.time}</div>}</div>
              )
              })}
            </div>

            <div className={styles.column}>
            <p className={styles.table__header}>Час прибуття на {name}</p>
              {station.map(someroutes => {
              return(
                <div>{someroutes.status === "arrival" && <div className={styles.row}> </div>}</div>
              )
              })}
              {station.map(someroutes => {
              return(
                <div>{someroutes.status === "departure" && <div className={styles.row}>{someroutes.time}</div>}</div>
              )
              })}
              
            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}
