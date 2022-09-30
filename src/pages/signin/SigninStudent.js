import React, { Component } from "react";
import { Input, ChakraProvider } from "@chakra-ui/react";
import EnCurso from "../../components/EnCurso";
import CheckBoxGroup from "../../components/CheckBoxGroup";

export default class SigninStudent extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Registro de alumno</h3>
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
              <label>Fecha de nacimiento</label>
              <ChakraProvider>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                />
              </ChakraProvider>
            </div>

            <div className="mb-3">
              <ChakraProvider>
                <CheckBoxGroup />
                <EnCurso />
              </ChakraProvider>
            </div>

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
