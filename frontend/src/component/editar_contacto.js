import React, { useContext, useEffect } from "react";
import { Container, Row, Button, Form, ButtonGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Context } from "../store/AppContent";

const EditarContacto = () => {
  const {
    store: { user, apiUrl },
    actions: { getUserById, handleChangeUser, handleSubmitUser, updateUser },
  } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    getUserById(apiUrl, id);
  }, []);


  return (
    <Container>
      <Row className="bg-white m-5">
        <Form className="row g-3" onSubmit={(e)=>{
          e.preventDefault();
          updateUser(apiUrl, user)
        }}>
          <div className="col-md-12">
            <Form.Label className="form-label">Nombre</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              name="names"
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
              name="father_lastname"
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
              name="mother_lastname"
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
              name="rut"
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
              name="phone"
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
              name="email"
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
              name="password"
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
              name="roles"
              id="roles"
              className="form-select"
              placeholder=""
              value={!! user && user.roles[0].name}
              onChange={handleChangeUser}
            >
              <option selected></option>
              <option >User</option>
              <option>Admin</option>
              <option>Director</option>
            </Form.Select>
            </div>
          <div className="col-md-12 d-flex justify-content-center m-3">
            <Button type="submit" className="btn btn-success">
              Aceptar
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default EditarContacto;
