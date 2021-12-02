import { getDefaultNormalizer } from "@testing-library/dom";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "./AppContent";

const defaultValues = {
    email: "antoniobellom14@gmail.com",
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
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input {...register("email", { required: true, email: true, pattern: /^[A-Za-z0-9]$/i })} type="email" className={"form-control" + (errors.email?.type === 'required' ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    {errors.email?.type === 'required' && "Email is required"}
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input {...register("password", { required: true, minLength: 8,  maxLength: 12, pattern: /^[A-Za-z 0-9]+$/i })} type="password" className={"form-control" + (errors.password?.type === 'required' ? " is-invalid" : "")} />
                <div className="invalid-feedback">
                    {errors.password?.type === 'required' && "Password is required"}
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Rut</label>
                <input {...register("Rut", { required: true, minLength: 8,  maxLength: 12, pattern: /^[A-Za-z 0-9]+$/i })} type="text" className={"form-control" + (errors.password?.type === 'required' ? " is-invalid" : "")} placeholder="XXXX" />
                <div className="invalid-feedback">
                    {errors.rut?.type === 'required' && "Rut is required"}
                </div>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Telefono</label>
                <input {...register("Telefono")} type="text" className="form-control" placeholder="+56" />
            </div>
            <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">Nombre</label>
                <input {...register("Nombre")} type="text" className="form-control" />
            </div>
            <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">Apellido</label>
                <input {...register("Apellido")} type="text" className="form-control" />
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
    );
}
export default MyForm;