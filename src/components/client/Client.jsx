import React, { useState } from 'react'
import Navibar from '../navbar/Navibar'
import Footer from '../footer/Footer'
import styles from '../client/Client.module.css'

export default function Client() {

  function Alert(){
    alert("Нажаль, зараз дана функція недоступна.")
  }

  let[isLog, setLog] = useState(true)

  return (
    <div>
      <Navibar/>
      <div className={styles.wrapper}>
          <div className={styles.form__container}>
            <div className={styles.log__buttons}>
              <button onClick={() => setLog(true)} className={styles.log__button}>Вхід</button>
              <button onClick={() => setLog(false)} className={styles.log__button}>Реєстрація</button>
            </div>
            <form className={styles.form}> 
              <div className={styles.input__container}>
                <label htmlFor="">Пошта:</label>
                <input type="email" name="email" id="" />
              </div>
              <div className={styles.input__container}>
                <label htmlFor="">Пароль:</label>
                <input type="password" name="password" id="" />
              </div>
              <div className={isLog ? styles.invisible :styles.input__container}>
                <label htmlFor="">Повторіть пароль:</label>
                <input type="password" name="password" id="" />
              </div>
              <button className={!isLog ? styles.invisible :styles.form__button} type='reset' onClick={() => Alert()}>Увійти</button>
              <button className={isLog ? styles.invisible :styles.form__button} type='reset' onClick={() => Alert()}>Зареєструватися</button>
            </form>
          </div>
          
      </div>   
      <Footer/>
    </div>
  )
}
