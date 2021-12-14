import { getDefaultNormalizer } from "@testing-library/dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/AppContent";
import { Container, Row, Form, Button } from "react-bootstrap";
import PerfilUsuario from "../component/perfil_usuario";


const defaultValues = {
  email: "",
  password: "",
  input: "",
  rut: "",
  name: "",
  lastname: "",
  phone: "",

};



const MyForm = () => {
  const { store, actions } = useContext(Context);
  const { onSubmit } = actions;
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      email: store.email,
      password: store.password,
      rut: store.rut,
      name: store.name,
      lastname: store.lastname,
      phone: store.phone,
    }
  });

  


  return (
    <Container>
      <Row className="bg-white rounded m-5">
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
          <div className="col-12">
            <Form.Label htmlFor="inputAddress" className="form-label">
              Rut
            </Form.Label>
            <Form.Control
              {...register("rut", {
                required: true,
                minLength: 9,
                maxLength: 9,
                pattern: /^[K 0-9]+$/i,
              })}
              type="text"
              className={
                "form-control" +
                (errors.rut?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.rut?.type === "required" && "Rut is required"}
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
<div className="col-md-12">
            <Form.Label htmlFor="inputState" className="form-label">
              Tipo de usuario
            </Form.Label>
            <Form.Select
              id="inputState"
              className="form-select"
              {...register("Tipo de usuario")}
            >
              <option selected>Usuario</option>
              <option>Administrador</option>
              <option>Director</option>
            </Form.Select>
          </div>
          <div className="col-12">
            <div className="form-check">
{/*               <Form.Control
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <Form.Label className="form-check-label"  htmlFor="gridCheck">
                Check me out
              </Form.Label> */}
            </div>
          </div>
          <div className="col-12">
            <Button type="submit" className="btn btn-primary">
              Solicitar
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
export default MyForm;