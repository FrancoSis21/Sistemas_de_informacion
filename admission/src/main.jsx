import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/log.jsx';
import Registro from './register/regis.jsx'; 
import Services from './Services/servic.jsx'
import Home from './pages/home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Services />} />

        {/* LAS PAGINAS DEL PROYECTO */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
