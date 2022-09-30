import React from "react";

export default function OlvidoContrasena() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Olvidó su contraseña?</h3>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese su email para recuperar su cuenta"
            />
          </div>
          <button className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}
