import React, { useState } from "react";
import Caja from "../../components/box/BoxClass";
import mock from "../../data/mock.json";
import {
  Box,
  SimpleGrid,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import "../landing/Landing.css";

export default function Landing() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [curse, setCurse] = useState(null);

  return (
    <div className="landingBody">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="header-text caption">
                <h2>Que clase estas buscando?</h2>
                <div id="search-section">
                  <form>
                    <div className="searchText">
                      <input
                        type="text"
                        name="q"
                        className="searchText"
                        placeholder="Ingresa el nombre de la clase..."
                        autoComplete="on"
                      ></input>
                    </div>
                    <input
                      type="submit"
                      name="results"
                      className="main-button"
                      value="Buscar"
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box className="clase">
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacingX="40px" spacingY="20px">
          {mock.clases.map((clase) => (
            <Box
              as="button"
              onClick={() => {
                onOpen();
                setCurse(clase);
              }}
            >
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
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacing={10}>
              <Caja
                key={curse?.id + "modal"}
                id={curse?.id}
                nombreClase={curse?.nombreClase}
                dias={curse?.dias}
                rating={curse?.rating}
                review={curse?.review}
                precio={curse?.precio}
                duracion={curse?.duracion}
                cupos={curse?.cupos}
                inscriptos={curse?.inscriptos}
              />
              <Box my="auto">
                <form>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Ingrese email"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Numero de telefono</label>
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Ingrese numero telefonico"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Horario</label>
                    <Input
                      placeholder="Seleccionar horario"
                      size="md"
                      type="time"
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Registrarse
                    </button>
                  </div>
                </form>
              </Box>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
