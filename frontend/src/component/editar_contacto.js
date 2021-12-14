import React, { useContext, useEffect } from "react";
import { Container, Row, Button, Form, ButtonGroup } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Context } from "../store/AppContent";

const EditarContacto = () => {
  const {
    store: { user, apiURL },
    actions: { getUserById, handleChangeUser, handleSubmitUser },
  } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    getUserById(apiURL, id);
  }, []);

  return (
    <Container>
      <Row className="bg-white m-5">
        <Form className="row g-3" onSubmit={handleSubmitUser}>
          <div className="col-md-12">
            <Form.Label className="form-label">Nombre</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="names"
              placeholder="Nombre"
              value={!!user && user.profile.names}
              onChange={handleChangeUser}
            />
          </div>
          <div className="col-md-12">
            <Form.Label className="form-label">Apellido Paterno</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="father_lastname"
              placeholder="Apellido Paterno"
              value={!!user && user.profile.father_lastname}
              onChange={handleChangeUser}
            />
          </div>
          <div className="col-md-12">
            <Form.Label className="form-label">Apellido Materno</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="mother_lastname"
              placeholder="Apellido Materno"
              value={!!user && user.profile.mother_lastname}
              onChange={handleChangeUser}
            />
          </div>
          <div className="col-12">
            <Form.Label className="form-label">Rut</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="rut"
              placeholder="12.123.123-1"
              value={!!user && user.profile.rut}
              onChange={handleChangeUser}
            />
          </div>
          <div className="col-12">
            <Form.Label className="form-label">Telefono</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="phone"
              placeholder="+569 12312123"
              value={!!user && user.profile.phone}
              onChange={handleChangeUser}
            />
          </div>
          <div className="col-md-12">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              id="email"
              placeholder="antonio.iturra@example.net"
              value={!!user && user.profile.email}
              onChange={handleChangeUser}
            />
          </div>
          <div className="col-md-12">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              id="password"
              placeholder="xxxxxxxxx"
              value={!!user && user.profile.password}
              onChange={handleChangeUser}
            />
          </div>
          <div className="col-md-12">
            <Form.Label htmlFor="inputState" className="form-label">
              Tipo de usuario
            </Form.Label>
            <Form.Select
              id="rol"
              className="form-select"
              placeholder={!! user && user.profile.rol}
              value={!! user && user.profile.rol}
              onChange={handleChangeUser}
            >
              <option></option>
              <option selected>User</option>
              <option>Admin</option>
              <option>Director</option>
            </Form.Select>
            </div>
          <div className="col-md-12 d-flex justify-content-center m-3">
            <Button type="submit" className="btn btn-primary">
              Cambiar
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default EditarContacto;
