import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/AppContent";
import MyModal from "./Modal";
import { Container, Row, Form, Button } from "react-bootstrap";

const defaultValues = {
  email: "",
  input: "",
};

const UserLogin = () => {
  const { store, actions } = useContext(Context);
  const { onSubmit } = actions;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      rut: store.rut,
      password: store.password,
    },
  });

  return (
    <Container>
      <Row className="bg-white rounded m-5">
        <Form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-12">
            <Form.Label htmlFor="inputEmail4" className="form-label">
              Rut
            </Form.Label>
            <Form.Control
              {...register("rut", {
                required: true,
                rut: true,
                pattern: /^[A-Za-z0-9]$/i,
              })}
              type="text"
              className={
                "form-control" +
                (errors.rut?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.rut?.type === "required" && "Rut es requerido"}
            </div>
          </div>
          <div className="col-md-12">
            <Form.Label htmlFor="inputPassword4" className="form-label">
              Password
            </Form.Label>
            <Form.Control
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 12,
                pattern: /^[A-Za-z 0-9]+$/i,
              })}
              type="password"
              className={
                "form-control" +
                (errors.password?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.password?.type === "required" && "Password es requerido"}
            </div>
          </div>
          <div className="col-12 d-flex justify-content-evenly">
            <Button type="submit" className="btn btn-primary mb-3">
              Ingresar
            </Button>
            <MyModal />
          </div>
        </Form>
      </Row>
    </Container>
  );
};
export default UserLogin;
