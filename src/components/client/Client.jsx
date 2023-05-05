import React from 'react'
import Navibar from '../navbar/Navibar'
import Footer from '../footer/Footer'
import styles from '../client/Client.module.css'

export default function Client() {
  return (
    <div>
      <Navibar/>
      <div className={styles.form__container}>
        <form className={styles.form}>
          <div className={styles.input__container}>
            <label htmlFor="">Пошта:</label>
            <input type="email" name="email" id="" />
          </div>
          <div className={styles.input__container}>
            <label htmlFor="">Пароль:</label>
            <input type="password" name="password" id="" />
          </div>
          <button type="submit">Увійти</button>
        </form>
      </div>   
      <Footer/>
    </div>
  )
}
