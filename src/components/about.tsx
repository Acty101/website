import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./profile";
import { COLALIGNMID } from "./settings";
import "./css/general.css";

function About() {
  return (
    <Container className="justify-content-center mt-4 mb-4">
      <Row>
        <Col className={COLALIGNMID}>
          <h1>
            <u>Hi there!</u>
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md className={COLALIGNMID}>
          hello
        </Col>
        <Col xs={{ order: "first" }} md={{ order: 0 }} className={COLALIGNMID}>
          <Container fluid className="justify-content-center">
            <Row>
              <Col sm className="d-flex justify-content-center">
                <Profile duration={0.5} />
              </Col>
            </Row>
            <Row>
              <Col sm className={COLALIGNMID}>
                <p>
                  I'm Kit, a BSE Computer Science Junior in The University of
                  Michigan. I'm interested in many things including web
                  development, distributed systems, math and finance. Feel free
                  to contact me!
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md className={COLALIGNMID}>
          lol
        </Col>
      </Row>
    </Container>
  );
}

export default About;
