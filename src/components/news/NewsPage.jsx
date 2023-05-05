import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { NewsService } from '../../services/news.service'
import Navibar from '../navbar/Navibar'
import styles from './NewsPage.module.css'
import Footer from '../footer/Footer'

const NewsPage = () => {
    const {id} = useParams()
    const [news, setNews] = useState({})

    
    useEffect(() => {
        if(!id ) return
        const newsData = async () => {
          const data = await NewsService.getById(id)
          console.log(data)
          setNews(data)
        } 
        newsData()
      }, [id]);

  

  return (
    <div>
      <Navibar/>
      <div className={styles.wrapper}>
        <div className={styles.news__block}>
          <p>{news.date}</p>
          <h3 className={styles.title}>{news.title}</h3>
          
          <div className={styles.content__block}><em className={styles.content}>{news.content}</em></div>
          <div className={styles.article__block}>
            <p className={styles.article}>{news.article1}</p>
            <p className={styles.article}>{news.article2}</p>
            <p className={styles.article}>{news.article3}</p>
            <p className={styles.article}>{news.article4}</p>
            <p className={styles.article}>{news.article5}</p>
          </div>
          <div className={styles.photo__block}>
            <img src={news.photo1} className={styles.photo}/>
            <img src={news.photo2} className={styles.photo}/>
            <img src={news.photo3} className={styles.photo}/>
            <img src={news.photo4} className={styles.photo}/>
            <img src={news.photo5} className={styles.photo}/>
          </div>       
        </div>
      </div>

    <Footer/>

    </div>
  )
}

export default NewsPage
