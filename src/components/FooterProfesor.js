import React from "react";
import '../pages/homeStudent/homeStudentPage.css'


function FooterProfesor() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="footer-item">
                            <div class="footer-heading">
                                <h2>Sobre Nosotros</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur dui et commodo pretium. Praesent lacinia ipsum ac sapien interdum, sit amet facilisis diam placerat.</p>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="footer-item">
                            <div class="footer-heading">
                                <h2>Acceso Rapido</h2>
                            </div>
                            <ul class="footer-list">
                            <li><a href="#">Inicio</a></li>
                                <li><a href="#">Mis Clases</a></li>
                                <li><a href="#">Contrataciones</a></li>
                                <li><a href="#">Crear Clase</a></li>
                                <li><a href="#">Cerrar Sesion</a></li>

                            </ul>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="footer-item">
                            <div class="footer-heading">
                                <h2>Mas Informacion</h2>
                            </div>
                            <ul class="footer-list">
                                <li>Phone: <a href="#">010-020-0560</a></li>
                                <li>Email: <a href="#">x@company.com</a></li>
                                <li>Support: <a href="#">x@company.com</a></li>
                                <li>Website: <a href="#">www.ClasesParticulares.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="sub-footer">
                            <p>Copyright &copy; 2022 ClasesParticulares.com
                                 </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default FooterProfesor;




