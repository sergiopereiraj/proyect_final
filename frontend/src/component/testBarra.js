import React, { useRef, useState } from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const testArr = [{
  "title": "Antes de tocar al Paciente"
}, {
  "title": "Antes de realizar una tarea aseptica"
  
},{
  "title": "pauta3"
}];

const TestBarra = () => {

  const progressChild = useRef();

  const [bool1, setBool1] = useState(false);

  //let bool2, bool3, bool4 = false;

  return (
    <>
      <Container>
        <h1 className="text-center m-5">Supervision de Lavado de Manos</h1>
        <Row className="bg-white m-5">
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>Requisito</th>
                <th className="text-center">Cumple</th>
              </tr>
            </thead>
            <tbody>
            {testArr.map((item, i) => {     
              console.log("Entered");                 
              // Return the element. Also pass key     
              return (<tr>
                <td>{item.title}</td>
                <td className="">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta1"
                    value={bool1}
                    onChange={() => {
                      if (!bool1) {
                        console.log("addProgress");
                        progressChild.current.addToProgress(25);
                      } else {
                        console.log("removeProgress");
                        progressChild.current.removeFromProgress(25);
                      }
                      setBool1(!bool1);
                    }}
                  />
                </td>
              </tr>) 
            })}
            </tbody>
          </Table>
        </Row>
        <BarraPorcentajeBoton ref={progressChild} />
      </Container>
    </>
  );
};

export default TestBarra;
