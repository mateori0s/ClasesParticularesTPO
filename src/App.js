import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/LoginPage";
import SignUp from "./pages/signin/SigninPage";
import SigninRole from "./pages/signin/SigninRole";
import SigninTeacher from "./pages/signin/SigninTeacher";
import SigninStudent from "./pages/signin/SigninStudent";
import ClasesAlumnos from "./pages/ClasesAlumnos";
import Coments from "./pages/Comentarios";
import Clases from "./pages/Clases";
import CajaCrearClases from "./pages/CrearClase";
import OlvidoContrasena from "./pages/olvidoContrasena/olvidoContrasena";
import Landing from "./pages/landing/Landing";
import Contrataciones from "./pages/Contrataciones/Contrataciones";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>
                <h2>SolicitarClases.com</h2>
              </Link>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/clases"}>
                      Mis Clases
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/crearclases"}>
                      Crear Clases
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Iniciar Sesion
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in-inicial"}>
                      Registrate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"}>
                      Cerrar Sesion
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/olvidoContrasena" element={<OlvidoContrasena />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in-inicial" element={<SigninRole />} />
            <Route path="/signinTeacher" element={<SigninTeacher />} />
            <Route path="/signinStudent" element={<SigninStudent />} />
            <Route path="/clasesAlumnos" element={<ClasesAlumnos />} />
            <Route path="/comentarios" element={<Coments />} />
            <Route path="/clases" element={<Clases />} />
            <Route path="/crearClase" element={<CajaCrearClases />} />
            <Route path="/contrataciones" element={<Contrataciones />} />

          </Routes>
        </main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="footer-item">
                  <div className="footer-heading">
                    <h2>Sobre Nosotros</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi consectetur dui et commodo pretium. Praesent lacinia
                    ipsum ac sapien interdum, sit amet facilisis diam placerat.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="footer-item">
                  <div className="footer-heading">
                    <h2>Acceso Rapido</h2>
                  </div>
                  <ul className="footer-list">
                    <li>
                      <Link className="nav-link" to={"/"}>
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to={"/clases"}>
                        Mis Clases
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to={"/"}>
                        Contrataciones
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to={"/crearClase"}>
                        Crear Clase
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to={"/"}>
                        Cerrar Sesion
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="footer-item">
                  <div className="footer-heading">
                    <h2>Mas Informacion</h2>
                  </div>
                  <ul className="footer-list">
                    <li>
                      Phone: <a href="/">010-020-0560</a>
                    </li>
                    <li>
                      Email: <a href="/">x@company.com</a>
                    </li>
                    <li>
                      Support: <a href="/">x@company.com</a>
                    </li>
                    <li>
                      Website: <a href="/">www.ClasesParticulares.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}
