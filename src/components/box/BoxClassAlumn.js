import React from "react";
import {
  Image,
  Box,
  Square,
  Button,
  Select,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function CajaAlumno({
  id,
  nombreClase,
  dias,
  rating,
  review,
  precio,
  duracion,
  cupos,
  inscriptos,
  name,
}) {
  const property = {
    imagen:
      "https://cursos.educaciontrespuntocero.com/wp-content/uploads/2021/09/cursos-ingles-online-978x512.jpg",
    rating: { rating },
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      m={5}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
    >
      <Image class="imagen" src={property.imagen} alt={id} />
      <Box>
        <Square>
          <Box display="flex" alignItems="center">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              &bull; {cupos} cupos | &bull; {inscriptos} inscriptos
            </Box>
          </Box>
        </Square>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {nombreClase}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {name}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {dias}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {precio} precio
          </Box>
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {duracion} duracion
          </Box>
        </Box>
        <Box ml="3" m="3" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < rating ? "blue" : "gray"} />
            ))}
          <Box as="span" ml="3" color="gray.600" fontSize="sm">
            {review} reviews
          </Box>
        </Box>
        <Box as="span" ml="0" mt="0" color="red" fontSize="sm">
          <>
            <Button ref={btnRef} colorScheme="red" onClick={onOpen}>
              Comentar
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Comentarios</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Escribir comentario..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="blue" onClick={onClose}>
                    Enviar
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
          <Select mt={2} variant="filled" placeholder="Calificar">
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option3">4</option>
            <option value="option3">5</option>
          </Select>
        </Box>
      </Box>
    </Box>
  );
}
