import React, { useState} from "react";
import {Box, useToast, Button } from "@chakra-ui/react";
import "./CrearClase.css";

export default function CrearClases() {
  const toast = useToast()
  const [curse, setCurse] = useState({nameCost:"",nameClass:"",nameFrecuency:"",nameDuration:""
})
  const handleChange = (event) => setCurse({...curse,[event.target.name]: event.target.value})
  return (
      <div className="auth-wrapper2">
        <div className="auth-inner2">
          <form>
            <h3>Crear Clase</h3>
            <div className="mb-3">
              <label>Nombre de la materia</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el nombre"
                name= "nameClass"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Duración(horas)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese la duracion"
                name= "nameDuration"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Frecuencia(Dias)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese la frecuencia"
                name= "nameFrecuency"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Costo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el costo"
                name= "nameCost"
                onChange={handleChange}
              />
            </div>
            <Box justifyContent="center">
              <Box>
                <Button
                  onClick={() =>{
                    setCurse({nameCost:"",nameClass:"",nameFrecuency:"",nameDuration:""
                  })
                    toast({
                      title: 'Clase creada!',
                      description: "Tu clase ha sido creada",
                      status: 'success',
                      duration: 700,
                      isClosable: true,
                    })
                  }
                  }
                  type="submit"
                >
                  Crear clase
                </Button>
              </Box>
            </Box>
          </form>
        </div>
      </div>
    );
  }
