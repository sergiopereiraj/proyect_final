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
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Rut</th>
                <th>Email</th>
                <th>Tipo de Usuarios</th>
              </tr>
            </thead>
            <tbody>
            {
              !!store.users &&
              store.users.map((user) => {
              return(
                
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.profile.names}</td>
                <td>{user.profile.mother_lastname}</td>
                <td>{user.profile.father_lastname}</td>
                <td>{user.rut}</td>
                <td>{user.profile.email}</td>
                <td>{user.roles[0].name}</td>
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
