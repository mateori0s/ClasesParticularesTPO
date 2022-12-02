import React from "react";
import { FormControl, Radio, RadioGroup, FormLabel, HStack } from '@chakra-ui/react'


function CheckBoxGroup() {
  return (
    <FormControl as='fieldset'>
      <FormLabel>Seleccione maximo nivel de estudios alcanzado:</FormLabel>
      <RadioGroup defaultValue='Itachi'>
        <HStack spacing='40px'>
          <Radio value='Primario'>Primario</Radio>
          <Radio value='Secundario'>Secundario</Radio>
        </HStack>
        <HStack spacing='40px'>
          <Radio value='Terciario'>Terciario</Radio>
          <Radio value='Universitario'>Universitario</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}

export default CheckBoxGroup;







