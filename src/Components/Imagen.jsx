import { Modal, Button } from 'react-bootstrap';

function Imagen({ mostrar, cerrar, gato }) {
  
  const abrirImagen = () => {
    if (!gato || !gato.url) return;
    window.open(gato.url, '_blank');
  };

  if (!gato) return null;

  return (
    <Modal show={mostrar} onHide={cerrar} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {gato.breeds && gato.breeds.length > 0 ? gato.breeds[0].name : 'Gato'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'center', padding: '20px' }}>
        <img 
          src={gato.url} 
          alt={gato.breeds && gato.breeds.length > 0 ? gato.breeds[0].name : 'Gato'}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '70vh', 
            borderRadius: '8px',
            objectFit: 'contain'
          }}
        />
        {gato.breeds && gato.breeds.length > 0 && gato.breeds[0].description && (
          <p style={{ marginTop: '15px', color: '#666', fontSize: '0.95em' }}>
            {gato.breeds[0].description}
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cerrar}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={abrirImagen}>
          Abrir Imagen
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Imagen;

