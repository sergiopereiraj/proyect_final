import React from "react";
import { Button, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white d-flex justify-content-around fixed-bottom mt-5">
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
            <a className="text-decoration-none text-white" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <a className="text-decoration-none text-white" href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></a>
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <a className="text-decoration-none text-white" href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a>
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
