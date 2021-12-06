import React from "react";
import { Button, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary text-white d-flex justify-content-around">
        <div>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            Contactanos
          </Button>
          <Button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            Sobre Nosotros
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
