import {
  Box,
  Button,
  ButtonGroup,
  Alert,
  AlertIcon,
  Textarea,
} from "@chakra-ui/react";
import { MdBlock, MdDone } from "react-icons/md";
import React, { useState } from "react";

export default function BoxComentarios({ id, comentario }) {
  const [visible, setVisible] = useState(true);
  const [alerta, setAlerta] = useState(false);
  return (
    <Box
      className="caja"
      boxShadow="dark-lg"
      backgroundColor="gray.100"
      m={3}
      borderRadius="10"
      borderWidth="3px"
      overflow="hidden"
    >
      {visible ? (
        <Box className="texto">
          <Textarea Disabled placeholder={comentario} />
        </Box>
      ) : (
        <Box className="texto">
          <Textarea isDisabled placeholder={comentario} />
        </Box>
      )}
      <Box className="abajo">
        <ButtonGroup>
          <Button
            leftIcon={<MdDone />}
            colorScheme="red"
            variant="solid"
            onClick={() => setAlerta(!alerta)}
          >
            Aceptar
          </Button>
          <Button
            leftIcon={<MdBlock />}
            colorScheme="red"
            variant="solid"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "Bloquear" : "Desbloquear"}
          </Button>
        </ButtonGroup>
      </Box>
      {alerta ? (
        <Alert status="success">
          <AlertIcon />
          Aceptado
        </Alert>
      ) : (
        ""
      )}
    </Box>
  );
}
