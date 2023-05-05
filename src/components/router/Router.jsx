import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import NewsPage from '../news/NewsPage'
import Client from '../client/Client'
import StationTable from '../station/StationTable'
import NotFound from './NotFound'
import RoutesPage from '../routesPage/RoutesPage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<NewsPage/>} path="/News/:id"/>
            <Route element={<StationTable/>} path="/Stations/:name"/>
            <Route element={<RoutesPage/>} path="/Route/:from/:to/:date"/>
            <Route element={<Client/>} path="/Client"/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
