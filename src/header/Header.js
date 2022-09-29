import React, {useContext} from "react";
import Title from "../title/Title";
import {ClaseContext} from "../contexts/ClasesContext";
import {useNavigate} from "react-router-dom";
import "./Header.css";

export default function Header() {
    const {clase, setClase} = useContext(ClaseContext);
    return (<header className="header">
            <Title name={"en el header esta esto"}/>
        </header>
    );
}