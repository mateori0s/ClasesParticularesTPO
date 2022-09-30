import './App.css';
import React,{useState} from "react";
import {ClaseContext} from "./contexts/ClasesContext";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/root/Root";
import Coments from "./pages/Comentarios";
import Clases from './pages/Clases';
import ClasesAlumnos from "./pages/ClasesAlumnos";
import { ChakraProvider } from '@chakra-ui/react';
import CajaCrearClases from './pages/CrearClase';

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
          <Route path="/" element={<Root/>}>
              <Route path="/comentarios" element={<Coments/>}/>
              <Route path="/clases" element={<Clases/>}/>
              <Route path="/clasesAlumnos" element={<ClasesAlumnos/>}/>
              <Route path="/crearClase" element={<CajaCrearClases/>}/>
          </Route>
      </>
  )
);

function App() {
    const [clase, setClase] = useState();
    return (
      <ChakraProvider>
          <ClaseContext.Provider value={{clase, setClase}}>
            <RouterProvider router={router}/>
          </ClaseContext.Provider>
      </ChakraProvider>
        
)}

export default App;
