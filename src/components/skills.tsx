import { Container, Row, Col } from "react-bootstrap";
import { COLALIGNMID } from "./settings";
import { RotatingBubble } from "./bubbles";

function Skills() {
  const duration = 2;
  const radius = 125;
  const contentHeight = "400px"; // put in children columns so when resize, they are all same height

  return (
    <Container  className="align-items-center justify-content-center mt-4 mb-4">
      <Row>
        <Col className={COLALIGNMID}>
          <h1>
            <u>Skills</u>
          </h1>
        </Col>
      </Row>
      <Row
        className="align-items-center justify-content-center"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Col sm className={COLALIGNMID} style={{ height: contentHeight }}>
          <b>Frontend</b>
          <RotatingBubble
            angle={0}
            radius={radius}
            duration={duration}
            text={"About"}
            select={true}
            clockwise={true}
            onClickCallback={() => {}}
          />
          <RotatingBubble
            angle={120}
            radius={radius}
            duration={duration}
            text={"About"}
            select={true}
            clockwise={true}
            onClickCallback={() => {}}
          />
          <RotatingBubble
            angle={240}
            radius={radius}
            duration={duration}
            text={"About"}
            select={true}
            clockwise={true}
            onClickCallback={() => {}}
          />
        </Col>
        <Col sm className={COLALIGNMID} style={{ height: contentHeight }}>
          <b>Backend</b>
          <RotatingBubble
            angle={0}
            radius={radius}
            duration={duration}
            text={"About"}
            select={true}
            clockwise={false}
            onClickCallback={() => {}}
          />
          <RotatingBubble
            angle={120}
            radius={radius}
            duration={duration}
            text={"About"}
            select={true}
            clockwise={false}
            onClickCallback={() => {}}
          />
          <RotatingBubble
            angle={240}
            radius={radius}
            duration={duration}
            text={"About"}
            select={true}
            clockwise={false}
            onClickCallback={() => {}}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
