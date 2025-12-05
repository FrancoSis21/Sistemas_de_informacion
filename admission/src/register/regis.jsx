import { useState } from 'react'
import './regis.css'
import { useNavigate } from 'react-router-dom'
import logo_unap from '../assets/LOGO/logo_unap.png'
import unapImage from '../assets/imagen_izquierda_login/unap_LR.jpg'

function Registro() {

  const [tipoDocumento, setTipoDocumento] = useState('1')
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [dni, setDni] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ tipoDocumento, nombres, apellidos, dni, correo, telefono, password })
    // Aquí conectas tu API
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
          <h2>Regístrate para acceder al sistema</h2>

          <form onSubmit={handleSubmit} className="login-form">

            <input
              type="text"
              placeholder="Nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              required
            />

            <select
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              className="select-documento"
              required
            >
              <option value="1">DNI</option>
              <option value="2">Carnet Extranjero</option>
            </select>

            <input
              type="text"
              placeholder={tipoDocumento === '1' ? 'DNI' : 'Carnet Extranjero'}
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Correo institucional"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn-login">
              REGISTRARSE
            </button>
          </form>

          <button
            className="btn-login-redirect"
            onClick={handleLogin}
            style={{ marginTop: '15px' }}
          >
            ¿Ya tienes cuenta? Ingresa aquí
          </button>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-top">
          <h2>¿Ya tienes usuario?</h2>

          <button className="btn-register" onClick={handleLogin}>
            INICIAR SESION
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

export default Registro
