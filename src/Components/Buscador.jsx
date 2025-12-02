import {Form,InputGroup} from 'react-bootstrap';

function Buscador({setBusquedaTexto}){
    return(
        <div className="Buscador">
 
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Buscador</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder='¿Qué raza de gato quieres buscar?'
              onChange={(e) => setBusquedaTexto(e.target.value)}
            />
          </InputGroup>

        </div>
    );
}

export default Buscador;