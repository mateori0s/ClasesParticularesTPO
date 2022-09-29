import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/LoginPage";
import SignUp from "./pages/signin/SigninPage";
import Signin01 from "./pages/signin/Signin01";
import SigninTeacher from "./pages/signin/SigninTeacher";
import SigninStudent from "./pages/signin/SigninStudent";
// import Landing from "./pages/landing/Landing";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              ClasesParticulares.com
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Iniciar Sesion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in-inicial"}>
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-in-inicial" element={<Signin01 />} />
          <Route path="/signinTeacher" element={<SigninTeacher />} />
          <Route path="/signinStudent" element={<SigninStudent />} />
          <Route path="/homeStudentPage" element={<homeStudentPage />} />
        </Routes>
      </div>
    </Router>
  );
}
