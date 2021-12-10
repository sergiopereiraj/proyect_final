import Button from '@restart/ui/esm/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import MyForm from './Form';



function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
<<<<<<< HEAD
      <Button variant="primary" onClick={handleShow}>
        Crear un nuevo usuario
=======
      <Button variant="primary" className="btn btn-secondary mb-3" onClick={handleShow}>
        Solicitar crear Usuario
>>>>>>> eafa5717c44053f78bcea8f8f087dddb4da0b7d9
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
<<<<<<< HEAD
          <Modal.Title>Crea tu usuario</Modal.Title>
=======
          <Modal.Title className="text-center">Registrar Usuario</Modal.Title>
>>>>>>> eafa5717c44053f78bcea8f8f087dddb4da0b7d9
        </Modal.Header>
        <Modal.Body>
          <MyForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn btn-primary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" className="btn btn-primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;