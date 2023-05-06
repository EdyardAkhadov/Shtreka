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
              <button onClick={() => setLog(true)} className={!isLog ? styles.log__button : styles.chosen__button}>Вхід</button>
              <button onClick={() => setLog(false)} className={isLog ? styles.log__button : styles.chosen__button}>Реєстрація</button>
            </div>
            <form className={styles.form}> 
              <div className={styles.input__container}>
                <label htmlFor="email">Пошта:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className={styles.input__container}>
                <label htmlFor="password">Пароль:</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className={isLog ? styles.invisible :styles.input__container}>
                <label htmlFor="resetpassword">Перевірка пароля:</label>
                <input type="password" name="resetpassword" id="resetpassword" />
              </div>
              <div className={styles.check__container}>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Ознайомився з <a href="https://zakon.rada.gov.ua/laws/show/2297-17#Text">правилами обробки персональних даних</a>  та даю згоду на їх обробку</label>
              </div>
              
              <button className={!isLog ? styles.invisible :styles.form__button} type='reset' onClick={() => Alert()}>Увійти</button>
              <button className={isLog ? styles.invisible :styles.form__button} type='reset' onClick={() => Alert()}>Зареєструватися</button>
            </form>
          </div>
          
      </div>   
      <div className={styles.footer}><Footer/></div>
    </div>
  )
}
