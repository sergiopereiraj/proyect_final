import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import MyForm from "./Form";

function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Button
          className="col-4 d-flex justify-content-center mt-2"
          variant="secondary"
          onClick={handleShow}
        >
          Crear un nuevo usuario
        </Button>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea tu usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyForm />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-primary"
            onClick={handleClose}
          >
            Cerrar
          </Button>
          <Button
            variant="primary"
            className="btn btn-primary"
            onClick={handleClose}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
