import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/AppContent";
import { Container, Row, Form, Button } from "react-bootstrap";

const MyForm = () => {
  const { store, actions } = useContext(Context);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  /*  const onSubmit = (data)=>{
    console.log(data);
    reset();
  } */

  return (
    <Container>
      <Row className="bg-white rounded m-5">
        <Form className="row g-3" onSubmit={handleSubmit(actions.onSubmit)}>
          <div className="col-md-12">
            <Form.Label htmlFor="inputEmail4" className="form-label">
              Email
            </Form.Label>
            <Form.Control
              {...register("email", {
                required: true,
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
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              {...register("password", {
                required: true,
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
          <div className="col-12">
            <Form.Label className="form-label">Rut</Form.Label>
            <Form.Control
              {...register("rut", {
                required: true,
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
            <Form.Label className="form-label">Telefono</Form.Label>
            <Form.Control
              {...register("telefono", {
                required: true,
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
            <Form.Label className="form-label">Nombre</Form.Label>
            <Form.Control
              {...register("nombre", {
                required: true,
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
              Apellido Paterno
            </Form.Label>
            <Form.Control
              {...register("apellido", {
                required: true,
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
            <Form.Label htmlFor="inputCity" className="form-label">
              Apellido Materno
            </Form.Label>
            <Form.Control
              {...register("apellido2", {
                required: true,
              })}
              type="text"
              className={
                "form-control" +
                (errors.apellido2?.type === "required" ? " is-invalid" : "")
              }
            />
            <div className="invalid-feedback">
              {errors.apellido2?.type === "required" && "Apellido es requerido"}
            </div>
          </div>
          <div className="col-md-12">
            <Form.Label htmlFor="inputState" className="form-label">
              Tipo de usuario
            </Form.Label>
            <Form.Select
              id="inputState"
              className="form-select"
              {...register("roles")}
            >{
              !!store.roles && 
              store.roles.map((rol)=>{
                return(
                  <option value={rol.id} key={rol.id}>{rol.name}</option>
                )
              })
            }
            </Form.Select>
          </div>
          <div className="">
            <Button type="submit" className="btn btn-primary"> Enviar </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};
export default MyForm;
