import Routed from "./RoutedTemplate";
import { LeftSlideBubble, RotatingBubble } from "../components/Bubbles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CSSProperties, useEffect, useState } from "react";
import { animate } from "framer-motion";

function About() {
  const [leftBox, setLeftBox] = useState<DOMRect | undefined>(undefined);
  const [rightBox, setRightBox] = useState<DOMRect | undefined>(undefined);
  const [moveLeft, setMoveLeft] = useState(true);

  const colClass = "h-100 d-flex align-items-center justify-content-center";
  const colStlye: CSSProperties | undefined = {
    overflow: "hidden",
  };
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
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col sm className={colClass} style={colStlye}>
            hello
          </Col>
          <Col
            sm
            className={colClass}
            style={{ ...colStlye, position: "absolute" }}
          >
            {/* <LeftSlideBubble finalX={"-20vw"} finalY={"-30vh"} /> */}
            <RotatingBubble
              angle={0}
              radius={radius}
              duration={duration}
              text={"Introduction"}
              select={true}
              clockwise={false}
              onClickCallback={callback}
            />
            <RotatingBubble
              angle={120}
              radius={radius}
              duration={duration}
              text={"Hobbies"}
              select={true}
              clockwise={false}
            />
            <RotatingBubble
              angle={240}
              radius={radius}
              duration={duration}
              text={"Skills"}
              select={true}
              clockwise={false}
            />
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
