import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/navbar/Navibar';
import News from './components/news/News';
import Popular from './components/popular/Popular';
import styles from './main.module.css'
import Searchbar from './components/searchbar/Searchbar';
import Footer from './components/footer/Footer';

function Home() {
  return (
    <div className={styles.Container}>
        <Navibar/>
        <Searchbar/>
        <div className={styles.NewsNPopular}>
        <News/>
        <Popular/>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home