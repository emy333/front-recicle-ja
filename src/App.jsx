import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import CadastroUsuario from './assets/pages/CadastroUsuario'
import Perfil from './assets/pages/Perfil'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<CadastroUsuario/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/perfil' element={<Perfil/>}/>

      </Routes>
    </Router>
  )
}

export default App
