import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import UseTri from "../../hooks/useTripulacion";
import "../global-styles/layout";
function SeccionTri5() {
  const response = UseTri();
  const data = response.allStrapiTripulacion.nodes[0].tripulacion_seccion6[0];
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const imagen = data.imagen[0].url;

  return (
    <div style={{ paddingBottom: "50px" }} className="contenedor-body6">
      <Container>
        <Row className="row-tri4">
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              style={{ paddingTop: "40px", width: "40%" }}
              src={imagen}
              alt=""
            ></img>
          </Col>
          <Col id="scTri5"
            style={{
              alignContent: "center",
              alignItems: "center",
              paddingTop: "100px",
              textAlign: "center",
            }}
          >
            <h4 className="seccion6Titulo">{titulo}</h4>
            <h4 className="seccion6descripcion">{descripcion}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SeccionTri5;
