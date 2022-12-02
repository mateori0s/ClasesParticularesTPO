import React, { useContext, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import {Redirect} from "react-router-dom";
import {login} from "../../controller/miApp.controller";


export default function LoginPage(props) {
  const [email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);


  const handleEmail=(event)=>{
      setEmail(event.target.value);
  }
  const handlePassword=(event)=>{    
      setPassword(event.target.value);
  }
  
  
  //Ejecuto el endopoint para validar login
  const validarLogin= async function()
  {
      let datos = {
        email: email,
        password:password
      }
      let getLogin = await login(datos);
      if (getLogin.rdo===0 )
      {
        setUsuarioValido(true);
      }
      if (getLogin.rdo===1)
      {
        alert(getLogin.mensaje)
      }
      
  }
  
  //Valido campos y llamo endpoint
  const loginUser=()=>
  {
    if (email!=="" && password!=="")
    {
      validarLogin();
    }
    else
    {
      alert("Debe completar usuario y password");
    }
    
    
  }  
  const redirect= ()=>{
    if (usuarioValido) {
      return <Navigate to='/clases' />
    }
    
  } 

  return (
    <div>
    {redirect()}
    
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Inicio de sesion </h3>
            <div className="mb-3">
              <label>Email</label>
              <input
               onChange ={(event) => handleEmail(event)}
               id="email"
               type= "email"
              />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              <input
                id="pass"
                onChange ={(event) => handlePassword(event)}
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
            {/* <Link className="forgpass-link" to={"/olvidoContrasena"}>
              <p className="forgot-password text-right">
                Olvidaste tu contraseña?
              </p>
            </Link> */}
            <div className="d-grid">
              <button
                className="btn btn-primary"
                onClick={loginUser}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
