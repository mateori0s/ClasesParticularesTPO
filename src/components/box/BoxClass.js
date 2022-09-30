import React from "react";
import { Image, Box, Square, Button, IconButton } from "@chakra-ui/react";
import { StarIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import "./BoxClass.css";
import { useNavigate } from "react-router-dom";
import { MdArrowForward, MdEdit } from "react-icons/md";

export default function Caja({
  id,
  nombreClase,
  dias,
  rating,
  review,
  precio,
  duracion,
  cupos,
  inscriptos,
}) {
  const navigate = useNavigate();
  const redirect = () => {
    const path = "/comentarios/";
    navigate(path);
  };
  const property = {
    imagen:
      "data:image/jpeg;base64,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",
    rating: { rating },
  };

  return (
    <Box m={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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
        <Box ml="3" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < rating ? "blue" : "gray"} />
            ))}
          <Box as="span" ml="3" color="gray.600" fontSize="sm">
            {review} reviews
          </Box>
          <Box as="span" ml="10" color="gray.600" fontSize="sm">
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Send email"
              icon={<MdEdit />}
            />
          </Box>
        </Box>
        <Box as="span" ml="0" mt="0" color="green" fontSize="sm">
          <Button
            colorScheme="red"
            rightIcon={<MdArrowForward />}
            variant="outline"
            onClick={redirect}
          >
            Comentarios
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
