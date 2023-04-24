import React, { useState } from 'react'
import styles from './Searchbar.module.css'
import Datepicker from './Datepicker'



export default function Searchbar() {

  const [isRoute, setIsRoute] = useState(false);
  
  return (
    <div className={styles.Searchbar}>
      <div className={styles.Searchbar__items}>
        <div className={styles.Searchbar__controller}>
          <button onClick={() => setIsRoute(false)} className={styles.Controller__button__station} style={isRoute ? {} : {backgroundColor:"#e0f3d1", color:"#578b32"} }>Вокзал</button>
          <button onClick={() => setIsRoute(true)} className={styles.Controller__button__route} style={isRoute ? {backgroundColor:"#e0f3d1", color:"#578b32"} : {} } >Маршрут</button>   
        </div>
        <div className={styles.Searchbar__gets}>
          <div className={styles.input_container__from}>
            <input id="from" type="text" className={styles.input} placeholder=" "/> 
            <label htmlFor="from" className= {isRoute ? styles.placeholder__no : styles.placeholder}>Вокзал</label>
            <label htmlFor="from" className={isRoute ? styles.placeholder : styles.placeholder__no}>Звідки?</label>
          </div>
          
          
          <div className={isRoute ? styles.input_container__to : styles.input_container__to__no}> 
            <input id="to" type="text" className={styles.input} placeholder=" " />
            <label htmlFor="to" className={styles.placeholder}>Куди?</label>
          </div>

          
          <Datepicker/>
          <button className={styles.Searchbar__button}>Пошук</button>
        </div>
      </div>
    </div>
  )
}
