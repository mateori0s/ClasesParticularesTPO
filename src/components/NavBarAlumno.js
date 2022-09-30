import React from "react";
import '../pages/homeStudent/homeStudentPage.css'

function NavBarAlumno() {
    return (
        <header class="">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="inicio"><h2>SolicitarClases.com</h2></a>
                    <a class="navbar-brand" href="inicio"><h5>Alumno</h5></a>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="inicio">Inicio
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="misclases">Mis Clases</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="buscarclases">Buscar Clases</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="institucional">Cerrar Sesion</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default NavBarAlumno;




















