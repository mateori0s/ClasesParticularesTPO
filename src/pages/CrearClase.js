import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

export default function CajaCrearClases() {
  return (
    <div className="App">
      <h1>Crear clases</h1>
      <Box>
        <Button m={3}>
          <Link to={"/clases"}>Volver</Link>
        </Button>
        <Box
          className="caja"
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
      </Box>
    </div>
  );
}
