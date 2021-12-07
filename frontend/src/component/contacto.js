import { getDefaultNormalizer } from "@testing-library/dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/AppContent";
import { Container, Row, Form, Button } from "react-bootstrap";

const defaultValues = {
  email: "",
  input: "",
};

const Contacto = () => {
  const { store, actions } = useContext(Context);
  const { onSubmit } = actions;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: store.email,
      password: store.password,
    },
  });

  return (
    <Container>
      <Row className="bg-white rounded m-5">
          <h3 className="ms-3 mt-3">Por Favor complete el formulario:</h3>
        <Form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-12">
            <Form.Label htmlFor="inputCity" className="form-label">
              Nombre
            </Form.Label>
            <Form.Control
              {...register("nombre", {
                required: true,
                maxLength: 30,
                pattern: /^[A-Za-z ]+$/i,
              })}
              type="text"
              className={
                "form-control" +
                (errors.nombre?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.nombre?.type === "required" && "Nombre es requerido"}
            </div>
          </div>
          <div className="col-md-12">
            <Form.Label htmlFor="inputCity" className="form-label">
              Apellido
            </Form.Label>
            <Form.Control
              {...register("apellido", {
                required: true,
                maxLength: 30,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              className={
                "form-control" +
                (errors.apellido?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.apellido?.type === "required" && "Apellido es requerido"}
            </div>
          </div>
          <div className="col-md-12">
            <Form.Label htmlFor="inputEmail4" className="form-label">
              Email
            </Form.Label>
            <Form.Control
              {...register("email", {
                required: true,
                email: true,
                pattern: /^[A-Za-z0-9]$/i,
              })}
              type="email"
              className={
                "form-control" +
                (errors.email?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.email?.type === "required" && "Email es requerido"}
            </div>
          </div>
          <div className="col-12">
            <Form.Label htmlFor="inputAddress2" className="form-label">
              Telefono
            </Form.Label>
            <Form.Control
              {...register("telefono", {
                required: true,
                minLength: 9,
                maxLength: 9,
                pattern: /^[0-9]+$/i,
              })}
              type="text"
              className={
                "form-control" +
                (errors.telefono?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.telefono?.type === "required" && "Telefono es requerido"}
            </div>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="col-md-12 d-flex justify-content-center m-3">
            <Button type="submit" className="btn btn-primary">
              Enviar
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};
export default Contacto;
