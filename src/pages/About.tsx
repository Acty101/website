import Routed from "./RoutedTemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bubble } from "../components/Bubbles";
import { CSSProperties } from "react";

function About() {
  const colClass = "h-100 d-flex align-items-center justify-content-center";
  const colStlye: CSSProperties | undefined = {
    overflow: "hidden",
  };
  return (
    <Routed>
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col sm className={colClass} style={colStlye}>
            <Bubble />
          </Col>
          <Col sm className={colClass} style={colStlye}>
            <Bubble />
          </Col>
          <Col sm className={colClass} style={colStlye}>
            <Bubble />
          </Col>
        </Row>
      </Container>
    </Routed>
  );
}

export default About;
