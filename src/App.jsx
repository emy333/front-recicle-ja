import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import CadastroUsuario from './assets/pages/CadastroUsuario';
import Sobre from './assets/pages/Sobre';
import PrivateRoute from './assets/components/PrivateRoute/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
