import React, { useContext } from "react";
import { Container, Row, Table, Button } from "react-bootstrap";
import { Context } from "../store/AppContent";

const SolicitudesUsuarios = () => {
  const { store } = useContext(Context);
  return (
    <>
      <Container>
        <h1 className="text-center mt-3"> Solicitudes  Pendientes de Usuarios</h1>
        <Row className="bg-white m-5">
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Rut</th>
                <th>Tipo de Usuarios</th>
              </tr>
            </thead>
            <tbody>
            {
              !!store.contacts &&
              store.contacts.map((contact) => {
              return(
                
                <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.lastname}</td>
                <td>{contact.rut}</td>
                <td>{contact.role.name}</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              )
              })
            }
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default SolicitudesUsuarios;
