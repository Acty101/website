import Routed from "./RoutedTemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { COLCLASS } from "./Base";
import Logo from "../components/Logo";
import "./css/Experience.css";

function Experience() {
  const rowStyle = { height: "35%" };
  return (
    <Routed>
      <Container
        fluid
        className="h-100 justify-content-center"
        style={{ overflow: "auto", overflowY: "auto" }}
      >
        <Row>
          <Col className={COLCLASS}>
            <h1>Companies I've worked at</h1>
          </Col>
        </Row>
        <Row>
          <Col sm className={COLCLASS}>
            <Container fluid className="h-100">
              <Row style={rowStyle}>
                <Col
                  sm
                  className="h-100 d-flex align-items-end justify-content-center"
                >
                  <Logo
                    duration={2}
                    logo_path="./images/keysight_logo.png"
                    scale={1.3}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm className={COLCLASS}>
                  <ul>
                    <h1>R&D Software Engineering Intern</h1>
                    <li className="list-item">List Item 1</li>
                    <li className="list-item">List Item 2</li>
                    <li className="list-item">List Item 3</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm className={COLCLASS}>
            <Container fluid className="h-100">
              <Row style={rowStyle}>
                <Col
                  sm
                  className="h-100 d-flex align-items-end justify-content-center"
                >
                  <Logo duration={2} logo_path="./images/tapway_logo.png" />
                </Col>
              </Row>
              <Row>
                <Col sm className={COLCLASS}>
                  <ul>
                    <h1>AI Engineering (MLOps) Intern</h1>
                    <li className="list-item">List Item 1</li>
                    <li className="list-item">List Item 2</li>
                    <li className="list-item">List Item 3</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Routed>
  );
}

export default Experience;
