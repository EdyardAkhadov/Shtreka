import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import axios from 'axios'
import { NewsService } from '../../services/news.service.jsx';

export default function News() {

  const[news, setNews] = useState([])

  
  useEffect(() => {
    const newsData = async () => {
      const data = await NewsService.getAll()
      setNews(data)
    
    } 
    newsData()
  }, []);

  return (
        <div className={styles.News__block}>
          <h3 className={styles.News__block__title}>Новини</h3>
          {news.map(somenews => {
            return(
              <div className={styles.news__container}>
                <p>{somenews.date}</p>
                <a href={`News/${somenews.id}`}><h4 className={styles.news__title}>{somenews.title}</h4></a>
                <p className={styles.news_content}>{somenews.content}</p>
              </div>
            )
          })}
        </div>
  )
}
