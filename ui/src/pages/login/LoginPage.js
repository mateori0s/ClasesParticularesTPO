import React, { useContext, useState } from "react";
import mock from "../data/mockUsers.json";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Inicio de sesion </h3>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="role"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                placeholder="Ingrese su email"
              />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Recordarme
                </label>
              </div>
            </div>
            <Link className="forgpass-link" to={"/olvidoContrasena"}>
              <p className="forgot-password text-right">
                Olvidaste tu contraseña?
              </p>
            </Link>
            <div className="d-grid">
              <button
                className="btn btn-primary"

              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
