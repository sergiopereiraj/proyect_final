import { getDefaultNormalizer } from "@testing-library/dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/AppContent";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";


const PerfilUsuario = () => {
  const { store, actions } = useContext(Context);
  const { onSubmit } = actions;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    
  });
  /* const history = useHistory();
  useEffect(()=>{
    if(!store.isAuth) history.push("//usuario/perfil");
  },[]) */

  return (
    <Container>
      <Row className="bg-white rounded m-5">
        <Form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
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
              disabled
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
          <div className="d-flex justify-content-center">
            <Button type="submit" className="btn btn-primary">
              Cambio de Contraseña
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
};
export default PerfilUsuario;
