import BoxComentarios from "../components/box/BoxComent";
import mock from "../data/mock.json";
import { SimpleGrid} from '@chakra-ui/react';
import "./Comentarios.css";

export default function Coments() {
    return(
        <div className="App">
            <h1>Mis Comentarios</h1>
            <div class= "clase">
            <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
                    {mock.comentarios.map(comentario => (
                    <BoxComentarios key={comentario.id} id={comentario.id} comentario={comentario.comentario} />
                    ))}
            </SimpleGrid>
            </div>
        </div>
    )
}