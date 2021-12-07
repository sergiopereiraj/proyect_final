import React from "react";
import { Button, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white d-flex justify-content-around">
        <div>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            
          ><Link className="text-decoration-none text-white" to="/contacto">
            Contactanos</Link>
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          ><Link className="text-decoration-none text-white" to="/sobre-nosotros">
            Sobre Nosotros</Link>
          </Button>
        </div>
        <div className="">
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i class="fab fa-linkedin"></i>
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="fab fa-youtube" />
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="fab fa-twitter" />
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
