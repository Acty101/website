import Routed from "./RoutedTemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../components/Profile";
import { COLCLASS } from "./Base";

function About() {
  return (
    <Routed>
      <Container
        fluid
        className="h-100"
        style={{ overflow: "auto", overflowY: "auto" }}
      >
        <Row className="h-100">
          <Col sm className={COLCLASS}>
            hello
          </Col>
          <Col xs={{ order: "first" }} sm={{ order: 0 }} className={COLCLASS}>
            <Container fluid className="h-100">
              <Row className="h-50">
                <Col sm className={COLCLASS}>
                  <Profile duration={0.5} />
                </Col>
              </Row>
              <Row>
                <Col sm className={COLCLASS}>
                  <p>
                    Hello! I'm Jun Kit, a BSE Computer Science Junior in The
                    University of Michigan. I'm interested in many things
                    including web development, distributed systems, math and
                    finance. Feel free to contact me!
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm className={COLCLASS}>
            lol
          </Col>
        </Row>
      </Container>
    </Routed>
  );
}

export default About;
