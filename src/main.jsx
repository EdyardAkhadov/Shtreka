import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Router from './components/router/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
)
