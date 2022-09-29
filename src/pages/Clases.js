import Caja from "../components/box/BoxClass";
import mock from "../data/mock.json";
import { SimpleGrid} from '@chakra-ui/react';

export default function Clases() {
    return(
        <div className="App">
        <h1>Mis Clases</h1>
        <div class="clase">
            <SimpleGrid columns={{sm:1 , md:3 }} spacingX='40px' spacingY='20px'>
                {mock.clases.map(clase => (
                <Caja key={clase.id} id={clase.id} nombreClase= {clase.nombreClase} dias={clase.dias} rating={clase.rating} review={clase.review} precio={clase.precio} duracion={clase.duracion} cupos={clase.cupos} inscriptos={clase.inscriptos} />
            ))}
            </SimpleGrid>
        </div>
            
        </div>
    )
}