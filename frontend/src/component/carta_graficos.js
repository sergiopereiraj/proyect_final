import React from "react";
import SelectPautas from "./select_pautas";
import BotonesMeses from "./botones_meses";
import {
  Container,
  Row,
  CardGroup,
  Card
} from "react-bootstrap";

const CartaGraficos = () => {
  return (
    <>
      <Container>
        <Row className="bg-white rounded m-5">
          <CardGroup className="mt-3">
            <Card className="col-sm-4 h-50 d-inline-block">
              <Card.Img                
                src="https://picsum.photos/id/237/1700/1800"
                fluid
              />
              <Card.Body>
                <Card.Title>
                  Porcentaje Cumplimiento Lavado de Manos Global por meses
                </Card.Title>
                <Card.Text>
                  Grafico anterior refleja el cumplimiento de la Supervision de Lavado de manos en los meses descritos.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="col-sm-4 h-50 d-inline-block">
              <Card.Img                
                src="https://picsum.photos/id/237/1700/1800"
                fluid
              />
              <Card.Body>
                <Card.Title>
                Porcentaje Cumplimiento Eliminación de cortopunzante Global por meses
                </Card.Title>
                <Card.Text>
                Grafico anterior refleja el cumplimiento de la Supervision de Eliminación de Cortopunzante en los meses descritos.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="col-sm-4 h-50 d-inline-block">
              <Card.Img                
                src="https://picsum.photos/id/237/1700/1800"
                fluid
              />
              <Card.Body>
                <Card.Title>
                Porcentaje Cumplimiento Almacenamiento de Material Estéril Global por meses
                </Card.Title>
                <Card.Text>
                Grafico anterior refleja el cumplimiento de la Supervision de Almacenamiento de Material Esteril en los meses descritos.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <BotonesMeses />
        </Row>
      </Container>
    </>
  );
};
export default CartaGraficos;
