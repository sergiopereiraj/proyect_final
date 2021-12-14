import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/AppContent";
import MyModal from "./Modal";
import { Container, Row, Form } from "react-bootstrap";


const UserLogin = () => {
  const { store, actions } = useContext(Context);
  const { register, formState: { errors }, reset,handleSubmit} = useForm(
  );
  
  const onSubmit = (data)=>{
    console.log(data);
    reset();
  }
  

  return (
    <Container>
      <Row className="bg-white rounded m-5">
        <form className="row g-3" onSubmit={handleSubmit(actions.loginUser)}>
        <div className="col-md-12">
            <Form.Label className="form-label">
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
            <Form.Label className="form-label">
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
          <div className="col-12 d-flex justify-content-evenly">
          <input type="submit" className="btn btn-primary"/>
            <MyModal />
          </div>
        </form>
      </Row>
    </Container>
  );
};
export default UserLogin;
