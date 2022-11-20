import Caja from "../components/box/BoxClass";
import mock from "../data/mock.json";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Clases() {
  return (
    <Box className="clase">
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacingX="40px" spacingY="20px">
        {mock.clases.map((clase) => (
          <Caja
            key={clase.id}
            id={clase.id}
            nombreClase={clase.nombreClase}
            dias={clase.dias}
            rating={clase.rating}
            review={clase.review}
            precio={clase.precio}
            duracion={clase.duracion}
            cupos={clase.cupos}
            inscriptos={clase.inscriptos}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
