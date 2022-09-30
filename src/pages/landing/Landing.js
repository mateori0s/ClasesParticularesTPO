import React from "react";
import "../landing/Landing.css";

export default function Landing() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="header-text caption">
              <h2>Que clase estas buscando?</h2>
              <div id="search-section">
                <form>
                  <div className="searchText">
                    <input
                      type="text"
                      name="q"
                      className="searchText"
                      placeholder="Ingresa el nombre de la clase..."
                      autoComplete="on"
                    ></input>
                  </div>
                  <input
                    type="submit"
                    name="results"
                    className="main-button"
                    value="Buscar"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
