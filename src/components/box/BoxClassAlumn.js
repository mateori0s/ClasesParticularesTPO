import React,{useContext} from "react";
import {Image, Box, Square, Button, ButtonGroup} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
// import './BoxClassAlumn.css';
import {ClaseContext} from "../../contexts/ClasesContext";
import {useNavigate} from "react-router-dom";
import {MdArrowForward, MdEdit} from "react-icons/md";

export default function CajaAlumno({id, nombreClase, dias, rating, review, precio, duracion, cupos, inscriptos, name}) {
    const {clase} = useContext(ClaseContext);
    const navigate = useNavigate();
    const redirect = () => {
        const path = '/comentarios/';
        navigate(path);
    }
    const property = {
      imagen: 'https://cursos.educaciontrespuntocero.com/wp-content/uploads/2021/09/cursos-ingles-online-978x512.jpg',
      rating : {rating}
    }
  
    return (
              <Box m={5} maxW='sm'  borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image class="imagen" src= {property.imagen} alt={id}/>
                <Box>
                  <Square>
                    <Box display='flex' alignItems='center'>
                      <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                      >
                        &bull; {cupos} cupos | &bull; {inscriptos}  inscriptos
                      </Box>
                    </Box>
                  </Square>
                  
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {nombreClase}
                  </Box>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {name}
                  </Box>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {dias}
                  </Box>
          
                  <Box>
                    <Box as='span' color='gray.600' fontSize='sm'>
                      {precio} precio
                    </Box>
                  </Box>

                  <Box>
                    <Box as='span' color='gray.600' fontSize='sm'>
                    {duracion} duracion
                    </Box>
                  </Box>
                  <Box ml="3" m='3' alignItems="center">
                      {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < rating ? 'blue' : 'gray'}
                          />
                      ))}
                      <Box as='span' ml='3' color='gray.600' fontSize='sm'>
                        {review} reviews
                      </Box>
                    </Box>
                    <Box as='span' ml='0' mt="0" color='green' fontSize='sm'>
                        <ButtonGroup>
                            <Button colorScheme='red' rightIcon={<MdArrowForward />} variant='outline'>
                                Comentar
                            </Button>
                            <Button colorScheme='red' rightIcon={<MdArrowForward />} variant='outline'>
                                Calificar
                            </Button>
                        </ButtonGroup>
                    </Box>
                  </Box>
              </Box> 
    )
  }