import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoCard from "./logo";
import { COLALIGNMID } from "./settings";
import "./css/experience.css";

function Work() {

  return (
    <Container className="justify-content-center mt-4 mb-4">
      <Row>
        <Col className={COLALIGNMID}>
          <h1><u>Work Experience</u></h1>
        </Col>
      </Row>
      <Row>
        <Col sm className={`${COLALIGNMID} mt-2 mb-2`}>
          <LogoCard
            duration={2}
            logo_path="./images/keysight_logo.png"
            scale={1.3}
            title="R&D Software Engineering Intern"
            points={["item1", "item2", "item3"]}
          />
        </Col>
        <Col sm className={`${COLALIGNMID} mt-2 mb-2`}>
          <LogoCard
            duration={2}
            logo_path="./images/tapway_logo.png"
            title="AI Engineering (MLOps) Intern"
            points={["item1", "item2", "item3"]}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
