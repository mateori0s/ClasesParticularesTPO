import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login  from './pages/login/LoginPage'
import SignUp from './pages/signin/SigninPage'
import Signin01 from './pages/signin/Signin01'
import SigninTeacher from './pages/signin/SigninTeacher'
import SigninStudent from './pages/signin/SigninStudent'
import Landing from "./Landing";

function App() {

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              ClasesParticulares.com
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Iniciar Sesion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in-inicial'}>
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-in-inicial" element={<Signin01/>} />
              <Route path="/signinTeacher" element={<SigninTeacher/>} />
              <Route path="/signinStudent" element={<SigninStudent/>} />
              <Route path="/homeStudentPage" element={<homeStudentPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );

}
