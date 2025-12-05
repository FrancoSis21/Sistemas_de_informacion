import { useState } from "react";
import Header from "../include/header";
import Footer from "../include/footer";
import Home from "../pages/home";

// primer apartado
import Cronograma from "../pages/proceso_admision/cronograma";
import Requisitos from "../pages/proceso_admision/requisitos_obligatorios";
import ModalidadesIngreso from "../pages/proceso_admision/modalidad_ingreso";
import Vacantes from "../pages/proceso_admision/vacantes_escuela";

// segundo apartado
import RegistroDatosPersonales from "../pages/incripcion_postulante/registro_datos_personales";
import PagoDerechoExamen from "../pages/incripcion_postulante/pago_examen";
import CargaDocumentos from "../pages/incripcion_postulante/carga_documentos";
import FichaPostulante from "../pages/incripcion_postulante/ficha_postulante";

// tercer apartado
import SimulacroExamen from "../pages/examen_admision/simulacro_examen";
import FechaExamen from "../pages/examen_admision/fecha_lugar_examen";
import ReglamentoExamen from "../pages/examen_admision/reglamento_examen";

// cuarto apartado
import ResultadosGenerales from "../pages/resultados/resultados_generales";
import ResultadosPorEscuela from "../pages/resultados/resultados_por_escuela";
import ResultadosIndividuales from "../pages/resultados/puntajes_obtenidos";

// quinto apartado
import ListaIngresantes from "../pages/matricula_ingresantes/lista_ingresantes";
import GuiaMatricula from "../pages/matricula_ingresantes/guia";
import RequisitosMatricula from "../pages/matricula_ingresantes/requisitos_matricula";

// sexto apartado
import ContactoAdmision from "../pages/contacto_oficina/contacto";

// apartado del usuario
import Perfil from "../pages/usuario/perfil";
import Configuracion from "../pages/usuario/configuracion";

function Services() {
  const [activeSection, setActiveSection] = useState("inicio");

  const renderContent = () => {
    switch (activeSection) {
      case "inicio":
        return <Home />;

      // PRIMER APARTADO
      case "cronograma":
        return <Cronograma />;
      case "requisitos":
        return <Requisitos />;
      case "modalidades":
        return <ModalidadesIngreso />;
      case "vacantes":
        return <Vacantes />;

      // SEGUNDO APARTADO
      case "registro":
        return <RegistroDatosPersonales />;
      case "pago":
        return <PagoDerechoExamen />;
      case "documentos":
        return <CargaDocumentos />;
      case "ficha":
        return <FichaPostulante />;

      // seegundo apartado
      case "simulacro":
        return <SimulacroExamen />;
      case "fecha":
        return <FechaExamen />;
      case "reglas":
        return <ReglamentoExamen />;

      // cuarto apartado
      case "resultados-generales":
        return <ResultadosGenerales />;
      case "por-escuela":
        return <ResultadosPorEscuela />;
      case "puntajes":
        return <ResultadosIndividuales />;

      // quinto apartado
      case "lista-ingresantes":
        return <ListaIngresantes />;
      case "requisitos-matricula":
        return <RequisitosMatricula />;
      case "guia-matricula":
        return <GuiaMatricula />;

      // sexto apartado
      case "contacto":
        return <ContactoAdmision />;

      // apartado del usuario
      case "perfil":
        return <Perfil />;
      case "configuracion":
        return <Configuracion />;

      default:
        return <Home />;
    }
  };

  return (
    <div className="flex w-full h-screen bg-white between-gap-4">
      <Header setActiveSection={setActiveSection} />
      <div className="container mt-4 mb-5 pb-5">{renderContent()}</div>
      <Footer />
    </div>
  );
}

export default Services;
