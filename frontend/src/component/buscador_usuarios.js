import React, { useContext } from "react";
import { Container, Row, Table, InputGroup, Form } from "react-bootstrap";
import { Context } from "../store/AppContent";
import { useEffect, useState } from "react";

const BuscadorUsuario = () => {
  const {
    store,
    actions: { setUser },
  } = useContext(Context);

const [busqueda, setBusqueda] = useState('');

const handlefilter = (user) => {
return user.profile.names?.toLowerCase().includes(busqueda.toLowerCase()) || user.profile.father_lastname?.toLowerCase().includes(busqueda.toLowerCase()) || user.profile.mother_lastname?.toLowerCase().includes(busqueda.toLowerCase())
} 

  return (
    <>
      <Container>
        <h1 className="text-center mt-2">Buscador de Usuarios</h1>
        <Row className="bg-white m-1">
          <InputGroup className="p-1">
            <InputGroup.Text>Nombre Usuario</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Nombre y Apellidos"
              name="term"
              id="buscar"
              onChange={(e)=> setBusqueda(e.target.value)}
            />
          </InputGroup>
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
              {!!store.users &&
                store.users.filter(handlefilter).map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.profile.names}</td>
                      <td>{user.profile.father_lastname}</td>
                      <td>{user.profile.mother_lastname}</td>
                      <td>{user.rut}</td>
                      <td>{user.profile.email}</td>
                      <td>{user.roles[0].name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default BuscadorUsuario;
