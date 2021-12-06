import React, { useRef, useState } from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const SupervisionCortopunzante = () => {
  
  
  const progressChild = useRef();

  const [ question1, setQuestion1 ] = useState(false)
  const [ question2, setQuestion2 ] = useState(false)
  const [ question3, setQuestion3 ] = useState(false)
  const [ question4, setQuestion4 ] = useState(false)

  return (
    <>
      <Container>
        <h1 className="text-center m-5">
          Supervision Eliminacion Correcta Material Cortopunzante
        </h1>
        <Row className="bg-white m-5">
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>Requisito</th>
                <th className="text-center">Cumple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Caja de cortopunzante presenta solo objetos cortopunzante
                </td>
                <td className="">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta1"
                    value={question1}
                    onChange={()=>{
                      if(!question1){
                        progressChild.current.addToProgress(25);
                      }else{
                        progressChild.current.removeFromProgress(25);
                        }
                        setQuestion1(!question1)
                      }
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Desechos dentro de caja cortopunzante no sobrepasa tres
                  cuartos de su capacidad
                </td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta2"
                    value={question2}
                    onChange={()=>{
                      if(!question2){
                        progressChild.current.addToProgress(25);
                      }else{
                        progressChild.current.removeFromProgress(25);
                        }
                        setQuestion2(!question2)
                      }
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Caja de cortopunzante ubicada en área sucia.</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta3"
                    value={question3}
                    onChange={()=>{
                      if(!question3){
                        progressChild.current.addToProgress(25);
                      }else{
                        progressChild.current.removeFromProgress(25);
                      }
                      setQuestion3(!question3)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Se tiene pinzas para retiro de aguja de jeringa</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta4"
                    value={question4}
                    onChange={()=>{
                      if(!question4){
                        progressChild.current.addToProgress(25);
                      }else{
                        progressChild.current.removeFromProgress(25);
                      }
                      setQuestion4(!question4)
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <BarraPorcentajeBoton ref={progressChild}/>
      </Container>
    </>
  );
};

export default SupervisionCortopunzante;
