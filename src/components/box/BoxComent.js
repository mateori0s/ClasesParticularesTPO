import { Box, Button, ButtonGroup,Alert, AlertIcon, Textarea} from '@chakra-ui/react';
import { MdBlock, MdBuild,MdDone} from "react-icons/md";
import { IconName } from "react-icons/md";
import {Link, useLoaderData} from "react-router-dom";
import React, {useState} from "react";

export default function BoxComentarios({id, comentario}) {
    const clase = useLoaderData();
    const [visible, setVisible] = useState(true);
    const [alerta,setAlerta] = useState(false);
    return (
        <Box class="caja" boxShadow='dark-lg' backgroundColor="gray.100" m={3} borderRadius="10" borderWidth='3px' overflow='hidden'>
            {visible?<Box class="texto">
                <Textarea Disabled placeholder={comentario} />
            </Box>:<Box class="texto">
                <Textarea isDisabled placeholder={comentario} />
            </Box>}
            <Box class="abajo">
                <ButtonGroup>
                    <Button leftIcon={<MdDone />} colorScheme='red' variant='solid' 
                    onClick={()=> setAlerta(!alerta)}>
                        Aceptar
                    </Button>
                    <Button
                     leftIcon={<MdBlock />} colorScheme='red' variant='solid' onClick={() => setVisible(!visible)}>
                        {visible ? "Bloquear" : "Desbloquear"}
                    </Button>
                </ButtonGroup>
            </Box>
            {alerta ? <Alert status='success'><AlertIcon />Aceptado</Alert>: ""}
        </Box>
        
      
    )
  }