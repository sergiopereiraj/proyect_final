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
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
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
