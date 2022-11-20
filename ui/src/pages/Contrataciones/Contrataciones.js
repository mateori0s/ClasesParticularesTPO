import React from "react";
import "../Contrataciones/Contrataciones.css";
import { Avatar } from "@chakra-ui/react";

export default function Contrataciones() {
  return (
    <div className="banner-contrataciones">
      <div className="header-text caption">
        <h1>En el ultimo mes:</h1>
      </div>
      <div className="contratacionesBox">
        <h1>Solicitadas</h1>
        <p>4 usuarios enviaron solicitud</p>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
      <div className="contratacionesBox">
        <h1>Aceptadas</h1>
        <p>6 usuarios fueron aceptados</p>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
      <div className="contratacionesBox">
        <h1>Canceladas</h1>
        <p>1 usuario fue cancelado</p>
        <Avatar />
      </div>
      <div className="contratacionesBox">
        <h1>Finalizadas</h1>
        <p>2 usuarios finalizaron</p>
        <Avatar />
        <Avatar />
      </div>
    </div>
  );
}
