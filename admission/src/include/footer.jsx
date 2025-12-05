function Footer() {
  return (
    <footer className="bg-white border-top fixed-bottom shadow-sm">
      <div className="container py-4">

        <div className="row align-items-center text-center text-md-start">

          {/* IZQUIERDA */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold mb-1">UNAP - PUNO</h6>
            <small className="text-muted">
              Universidad Nacional del Altiplano
            </small>
          </div>

          {/* CENTRO */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h6 className="fw-semibold mb-1">SISADMISION</h6>
            <small className="text-muted">
              Plataforma de servicios academicos
            </small>
          </div>

          {/* DERECHA */}
          <div className="col-md-4 text-md-end">
            <h6 className="fw-semibold mb-1">Contacto</h6>
            <small className="text-muted d-block">sisadmision@unap.edu.pe</small>
            <small className="text-muted">Puno - Peru</small>
          </div>
        </div>

        <hr className="my-3"/>

        <div className="text-center small text-muted">
          © 2025 - Franco Rojas | Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
}

export default Footer;
