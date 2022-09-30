import React from "react";
import '../pages/homeStudent/homeStudentPage.css'
import NavBarAlumno from "../../components/NavBarAlumno";
import FooterAlumno from "../../components/FooterAlumno";


function homeStudentPage() {
    return (
        <div>
        <NavBarAlumno />
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="header-text caption">
                            <h2>Que clase estas buscando?</h2>
                            <div id="search-section">
                                <form>
                                    <div class="searchText">
                                        <input type="text" name="q" class="searchText" placeholder="Ingresa el nombre de la clase..." autocomplete="on"></input>
                                    </div>
                                    <input type="submit" name="results" class="main-button" value="Buscar"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterAlumno/>
    </div>
        
    );
  }
  export default homeStudentPage;