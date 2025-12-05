import { useState } from 'react'
import './log.css'
import unapImage from '../assets/imagen_izquierda_login/unap_LR.jpg'
import logo_unap from '../assets/LOGO/logo_unap.png'
import { useNavigate } from 'react-router-dom'

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegistro = () => {
    navigate('/registro')
  }


   const handleServices = () => {
    navigate('/service')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Email:', email)
    console.log('Password:', password)

    // Aquí conectas con tu API
  }

  return (
    <div className="main-container">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src={logo_unap} alt="UNAP Puno" />
          <span>SISTEMA DE ADMISION - UNAP</span>
        </div>
      </header>

      {/* CONTENT */}
      <div className="content">

        {/* IZQUIERDA */}
        <div className="left">
          <img
            src={unapImage}
            alt="UNAP"
            className="left-image"
          />
        </div>

        {/* DERECHA */}
        <div className="right">
          <h2>Ya me registré, deseo ingresar al sistema</h2>

          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Correo institucional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn-login">
              INICIAR SESIÓN
            </button>
          </form>
        </div>


        <button  className="btn-login" onClick={handleServices}>
              DASHBOARD
            </button>

      </div>

      {/* REGISTRO */}
    <footer className="footer">
    <div className="footer-top">
      <h2>¿Aún no tienes usuario?</h2>

      <button className="btn-register" onClick={handleRegistro}>
        REGÍSTRATE
      </button>
    </div>

    <div className="footer-middle">
      <p>¿Problemas con el sistema? Escribe a:</p>
      <strong>sisadmision@unap.edu.pe</strong>
    </div>

    <div className="footer-bottom">
      <p>UNAP - PUNO © 2025. Todos los derechos reservados</p>
    </div>
  </footer>


    </div>
  )
}

export default App
