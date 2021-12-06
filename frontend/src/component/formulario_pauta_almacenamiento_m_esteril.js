import React, { useRef, useState } from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const SupervisionMaterialEsteril = () => {
  const progressChild = useRef()

  const [ question1, setQuestion1] = useState(false)
  const [ question2, setQuestion2] = useState(false)
  const [ question3, setQuestion3] = useState(false)
  const [ question4, setQuestion4] = useState(false)
  const [ question5, setQuestion5] = useState(false)
  const [ question6, setQuestion6] = useState(false)

  return (
    <>
      <Container>
        <h1 className="text-center m-5">Supervision Almacenamiento Material Estéril</h1>
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
                <td>Superficie estantería y repisa esta limpio</td>
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
                        progressChild.current.addToProgress(17)
                      }else{
                        progressChild.current.removeFromProgress(17);
                      }
                      setQuestion1(!question1)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Material está con fecha esterilidad vigente</td>
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
                        progressChild.current.addToProgress(17);
                      }else{
                        progressChild.current.removeFromProgress(17);
                      }
                      setQuestion2(!question2)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>El material esta ordenado de forma holgada</td>
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
                        progressChild.current.addToProgress(17);
                      }else{
                        progressChild.current.removeFromProgress(17);
                      }
                      setQuestion3(!question3)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Material se encuentra ordenado segun fecha de caducidad</td>
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
                        progressChild.current.addToProgress(17);
                      }else{
                        progressChild.current.removeFromProgress(17);
                      }
                      setQuestion4(!question4)
                    }}
                  
                  />
                </td>
              </tr>
              <tr>
                <td>Material esta almacenado a 30cm del suelo y 1 metro del suelo</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta5"
                    value={question5}
                    onChange={()=>{
                      if(!question5){
                        progressChild.current.addToProgress(17);
                      }else{
                        progressChild.current.removeFromProgress(17);
                      }
                      setQuestion5(!question5)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Material estéril esta sin mezclar con otros materiales</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta6"
                    value={question6}
                    onChange={()=>{
                      if(!question6){
                        progressChild.current.addToProgress(17);
                      }else{
                        progressChild.current.removeFromProgress(17);
                      }
                      setQuestion6(!question6)
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <BarraPorcentajeBoton ref={progressChild} />
      </Container>
    </>
  );
};

export default SupervisionMaterialEsteril;
