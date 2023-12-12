import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ToDo from '../Todo/ToDo'
import Destaque from '../Componentes/Destaque'
import Detalhe from '../Componentes/Detalhe'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<ToDo />}></Route>
        <Route path='/destaque' element={<Destaque />}></Route>
        <Route path='/detalhe/:identidade' element={<Detalhe />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
