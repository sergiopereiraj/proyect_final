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
      email: store.email,
      password: store.password,
    },
  });

  return (
    <Container>
      <Row className="bg-white rounded">
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
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
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
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
            <Button type="submit" className="btn btn-primary">
              Sign in
            </Button>
            <MyModal />
          </div>
        </form>
      </Row>
    </Container>
  );
};
export default UserLogin;
