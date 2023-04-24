import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import NewsPage from '../news/NewsPage'
import Client from '../client/Client'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<NewsPage/>} path="/News/:id"/>
            <Route element={<Client/>} path="/Client"/>
            <Route path='*' element={<div>Not found</div>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
