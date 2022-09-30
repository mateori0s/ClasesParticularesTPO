import React, { Component } from "react";
import { Input, ChakraProvider, Textarea } from "@chakra-ui/react";

export default class SigninTeacher extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Registro de profesor</h3>
            <div className="mb-3">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese nombre"
              />
            </div>
            <div className="mb-3">
              <label>Apellido</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese apellido"
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Ingrese email"
              />
            </div>
            <div className="mb-3">
              <label>Numero de telefono</label>
              <input
                type="phone"
                className="form-control"
                placeholder="Ingrese numero telefonico"
              />
            </div>
            <div className="mb-3">
              <label>Titulo obtenido:</label>
              <ChakraProvider>
                <Input variant="outline" />
              </ChakraProvider>
            </div>
            <label>Experiencia Laboral</label>
            <ChakraProvider>
              <Textarea placeholder="Contanos acerca de tus experiencias laborales" />
            </ChakraProvider>

            <div className="mb-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingrese Contraseña"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
            </div>
            <p className="forgot-password text-right">
              <a href="/sign-in">Ya tenes una cuenta?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
