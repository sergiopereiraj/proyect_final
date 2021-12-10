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
      <Button variant="primary" onClick={handleShow}>
        Crear un nuevo usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea tu usuario</Modal.Title>
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