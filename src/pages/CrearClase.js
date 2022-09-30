import React, { Component } from "react";
import { Input, ChakraProvider, Textarea } from "@chakra-ui/react";
import "../pages/signin/SigninPage.css";

export default class SigninTeacher extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Crear Clase</h3>
            <div className="mb-3">
              <label>Nombre de la materia</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el nombre"
              />
            </div>
            <div className="mb-3">
              <label>Duración</label>
              <input
                type="duracion"
                className="form-control"
                placeholder="Ingrese la duracion"
              />
            </div>
            <div className="mb-3">
              <label>Frecuencia</label>
              <input
                type="frecuencia"
                className="form-control"
                placeholder="Ingrese la frecuencia"
              />
            </div>
            <div className="mb-3">
              <label>Costo</label>
              <input
                type="costo"
                className="form-control"
                placeholder="Ingrese el costo"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Crear clase
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
