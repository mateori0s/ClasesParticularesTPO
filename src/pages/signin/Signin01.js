import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signin01 extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3> Registrarse como:</h3>
          <div>
            <Link className="nav-link" to={"/signinStudent"}>
              <h3>
                <u> Alumno </u>
              </h3>
            </Link>
          </div>
          <div>
            <Link className="nav-link" to={"/signinTeacher"}>
              <h3>
                <u>Profesor </u>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
