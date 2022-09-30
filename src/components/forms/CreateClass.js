import {
  Box,
  Button,
  ButtonGroup,
  Alert,
  AlertIcon,
  Textarea,
} from "@chakra-ui/react";
import { MdBlock, MdBuild, MdDone } from "react-icons/md";
import { IconName } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import React, { useState } from "react";

export default function crearClase({}) {
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
      <Box className="abajo">
        <Button>
          <Editable defaultValue="Take some chakra">
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Button>
      </Box>
    </Box>
  );
}
