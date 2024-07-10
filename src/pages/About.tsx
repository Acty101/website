import Routed from "./RoutedTemplate";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../components/Profile";
import { CSSProperties, useEffect, useState } from "react";
import { animate } from "framer-motion";

function About() {
  const [leftBox, setLeftBox] = useState<DOMRect | undefined>(undefined);
  const [rightBox, setRightBox] = useState<DOMRect | undefined>(undefined);
  const [moveLeft, setMoveLeft] = useState(true);

  const colClass = "h-100 d-flex align-items-center justify-content-center";
  const colStlye: CSSProperties | undefined = {};
  const radius = 120;
  const duration = 1.5;

  useEffect(() => {
    // get bounding box of left and right column after rendering components
    setLeftBox(document.getElementById("leftAbout")?.getBoundingClientRect());
    setRightBox(document.getElementById("leftAbout")?.getBoundingClientRect());
  }, []);

  const callback = (scope: any) => {
    animate(scope.current, { x: "-50vw", scale: 0.5 }, { duration: 1 })
      .then(() => {
        console.log("Done");
      })
      .catch((error) => {
        console.error("Animation failed: ", error);
      });
  };

  return (
    <Routed>
      <Container
        fluid
        className="h-100"
        style={{ overflow: "auto", overflowY: "auto" }}
      >
        <Row className="h-100">
          <Col sm className={colClass} style={colStlye}>
            hello
          </Col>
          <Col xs={{ order: "first" }} sm={{order: 0 }} className={colClass} style={colStlye}>
            <Container fluid className="h-100">
              <Row className="h-50">
                <Col sm className={colClass} style={colStlye}>
                  <Profile duration={0.5} />
                </Col>
              </Row>
              <Row>
                <Col sm className={colClass} style={colStlye}>
                  <p>
                    Hello! I'm a BSE Computer Science Junior in The University
                    of Michigan. I'm interested in many things including web
                    development, distributed systems, math and finance.
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm className={colClass} style={colStlye}>
            lol
          </Col>
        </Row>
      </Container>
    </Routed>
  );
}

export default About;
