import React from "react";
import { FormControl, Select } from '@chakra-ui/react'


function EnCurso() {
    return (
        <FormControl>
            <Select>
                <option>En Curso</option>
                <option>Finalizado</option>
            </Select>
        </FormControl>
    );
}

export default EnCurso;

