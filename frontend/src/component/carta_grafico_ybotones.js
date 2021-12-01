import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartaGraficosBotones = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div classname="form-group">
            <label htmlFor="exampleFormControlSelect1">
              Seleccionar Pauta de Supervision:
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Lavado de Manos</option>
              <option>Eliminacion de Cortopunzantes</option>
              <option>Almacenamiento de Material Esteril</option>
            </select>
          </div>
          <div className="card-group row">
            <div className="card col-sm-4 h-50 d-inline-block">
              <img
                className="card-img-top"
                src="https://picsum.photos/id/237/300/400"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Porcentaje Cumplimiento Lavado de Manos Global por meses
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card col-sm-4 h-50 d-inline-block">
              <img
                className="card-img-top"
                src="https://picsum.photos/id/237/300/400"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Porcenaje cumplimiento Eliminacion Cortopunzantes global por
                  meses
                </h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card col-sm-4 h-50 d-inline-block">
              <img
                className="card-img-top"
                src="https://picsum.photos/id/237/300/400"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  porcentaje de cumplimiento de Almacenamiento de Material
                  Esteril Global por meses
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="col-12 btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-primary m-1">
                Enero
              </button>
              <button type="button" className="btn btn-primary m-1">
                Febrero
              </button>
              <button type="button" className="btn btn-primary m-1">
                Marzo
              </button>
              <button type="button" className="btn btn-primary m-1">
                Abril
              </button>
              <button type="button" className="btn btn-primary m-1">
                Mayo
              </button>
              <button type="button" className="btn btn-primary m-1">
                Junio
              </button>
            </div>
            <div
              className="col-12 btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-primary m-1">
                Julio
              </button>
              <button type="button" className="btn btn-primary m-1">
                Agosto
              </button>
              <button type="button" className="btn btn-primary m-1">
                Septiembre
              </button>
              <button type="button" className="btn btn-primary m-1">
                Octubre
              </button>
              <button type="button" className="btn btn-primary m-1">
                Noviembre
              </button>
              <button type="button" className="btn btn-primary m-1">
                Diciembre
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartaGraficosBotones;
