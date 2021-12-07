import React from "react";
import { Container, Row, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const SobreNosotros = () => {
  return (
    <Container>
      <Row className="bg-white rounded m-5">
        <h2 className="text-center fw-bold m-3">¿Quiénes somos?</h2>
        <CardGroup>
          <Card className="col-sm-4 h-50 d-inline-block">
            <Card.Img src="/fotos/fotosergio.jpg" fluid/>
            <Card.Body>
              <Card.Title>Sergio Pereira Jorquera</Card.Title>
              <Card.Text>
                Full-Stack Developer, Enfermero, MSc Salud Publica, Dipl.
                Acreditación de Calidad, Dipl. IAAS, Evaluador Sistema Nacional
                de Acreditación en Salud.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-sm-4 h-50 d-inline-block">
            <Card.Img src="/fotos/fotoandres.jpg" fluid />
            <Card.Body>
              <Card.Title>
                Andres Valdivia Pericao
              </Card.Title>
              <Card.Text>
              Full-Stack Developer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="col-sm-4 h-50 d-inline-block">
            <Card.Img src="/fotos/fotoantonio.jpg" fluid />
            <Card.Body>
              <Card.Title>
               Antonio Bello Martinez
              </Card.Title>
              <Card.Text>
              Full-Stack Developer Bilingue, Abogado.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Row>
        <h2 className="text-center fw-bold">¿Qué hacemos?</h2>
        <p className="text-center fs-5 m-3">Generamos soluciones tecnologías para dificultades detectadas en el quehacer laboral. Potenciamos automatización de actividades laborales para aumentar horas profesionales disponibles.</p>
        <h2 className="text-center fw-bold">¿Por qué lo hacemos?</h2>
        <p className="text-center fs-5 m-3">Como equipo tenemos la fiel convicción de que el desarrollo de herramientas tecnológicas ayuda y potencia las cualidades del equipo de trabajo, facilitando su desempeño, empoderando al equipo en sus acciones y generando mejores logros institucionales.</p>
        <h2 className="text-center fw-bold">¿Cómo lo hacemos?</h2>
        <p className="text-center fs-5 m-3">Junto a su equipo institucional, levantamos brechas que pueden ser solucionadas con ayuda de herramientas tecnológicas.</p>
      </Row>
      </Row>
    </Container>
  );
};

export default SobreNosotros;
