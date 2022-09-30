import mock from "../data/mock.json";
import { Box,SimpleGrid, Button} from '@chakra-ui/react';
import CajaAlumno from "../components/box/BoxClassAlumn";
import {Link} from "react-router-dom";

export default function ClasesAlumnos() {
    return(
        <div className="App">
            <h1>Mis Clases</h1>
            <Box class="clase">
                <Button m={3}>
                        <Link to={"/clases"}>Volver</Link>
                </Button>
                <SimpleGrid columns={{sm:1 , md:3 }} spacingX='40px' spacingY='20px'>
                    {mock.clases.map(clase => (
                    <CajaAlumno key={clase.id} id={clase.id} nombreClase= {clase.nombreClase} dias={clase.dias} rating={clase.rating} review={clase.review} precio={clase.precio} duracion={clase.duracion} cupos={clase.cupos} inscriptos={clase.inscriptos} name={clase.name} />
                ))}
                </SimpleGrid>
            </Box>
            
        </div>
    )
}