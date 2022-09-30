import React from "react";
import { Checkbox, Stack } from "@chakra-ui/react";

function CheckBox() {
  return (
    <Stack spacing={5} direction="row">
      <Checkbox size="lg" spacing="1rem" colorScheme="red">
        Alumno
      </Checkbox>
      <Checkbox size="lg" spacing="1rem" colorScheme="green">
        Profesor
      </Checkbox>
    </Stack>
  );
}

export default CheckBox;
