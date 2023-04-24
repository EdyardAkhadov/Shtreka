import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { NewsService } from '../../services/news.service'
import News from './News'

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
      <p>{news.title}</p>
    </div>
  )
}

export default NewsPage