import { getDefaultNormalizer } from "@testing-library/dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/AppContent";
import { Container, Row } from "react-bootstrap";


const defaultValues = {
    email: "",
    input : "",

};



const MyForm = () => {
    const {store, actions} = useContext(Context);
    const {onSubmit} = actions;
    const { register, formState: { errors }, handleSubmit } = useForm({defaultValues:{
        email: store.email,
        password: store.password,
    }});
    

    return (
        <Container>
            <Row className="bg-white rounded">
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input {...register("email", { required: true, email: true, pattern: /^[A-Za-z0-9]$/i })} type="email" className={"form-control" + (errors.email?.type === 'required' ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    {errors.email?.type === 'required' && "Email es requerido"}
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input {...register("password", { required: true, minLength: 8,  maxLength: 12, pattern: /^[A-Za-z 0-9]+$/i })} type="password" className={"form-control" + (errors.password?.type === 'required' ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    {errors.password?.type === 'required' && "Password es requerido"}
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Rut</label>
                <input {...register("rut", { required: true, minLength: 9,  maxLength: 9, pattern: /^[K 0-9]+$/i })} type="text" className={"form-control" + (errors.rut?.type === 'required' ? " is-invalid" : "")}/>
                <div className="invalid-feedback">
                    {errors.rut?.type === 'required' && "Rut is required"}
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Telefono</label>
                <input {...register("telefono", { required: true, minLength: 9,  maxLength: 9, pattern: /^[0-9]+$/i })} type="text" className={"form-control" + (errors.telefono?.type === 'required' ? " is-invalid" : "")}  />
                <div className="invalid-feedback">
                    {errors.telefono?.type === 'required' && "Telefono es requerido"}
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">Nombre</label>
                <input {...register("nombre", { required: true,  maxLength: 30, pattern: /^[A-Za-z ]+$/i })} type="text" className={"form-control" + (errors.nombre?.type === 'required' ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    {errors.nombre?.type === 'required' && "Nombre es requerido"}
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">Apellido</label>
                <input {...register("apellido", { required: true,  maxLength: 30, pattern: /^[A-Za-z]+$/i })} type="text" className={"form-control" + (errors.apellido?.type === 'required' ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    {errors.apellido?.type === 'required' && "Apellido es requerido"}
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="inputState" className="form-label">Tipo de usuario</label>
                <select id="inputState" className="form-select" {...register("Tipo de usuario")}>
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
        </Row>
        </Container>
    );
}
export default MyForm;