import BoxComentarios from "../components/box/BoxComent";
import mock from "../data/mock.json";
import { SimpleGrid, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Coments() {
  return (
    <div className="App">
      <h1>Mis Comentarios</h1>
      <Box>
        <Button m={3}>
          <Link to={"/clases"}>Volver</Link>
        </Button>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 4 }}
          spacingX="40px"
          spacingY="20px"
        >
          {mock.comentarios.map((comentario) => (
            <BoxComentarios
              key={comentario.id}
              id={comentario.id}
              comentario={comentario.comentario}
            />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
