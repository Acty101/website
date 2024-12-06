import { Container, Row, Col } from "react-bootstrap";
import { COLALIGNMID } from "./settings";
import { RotatingBubble } from "./bubbles";
import "./css/general.css";

function Skills() {
  const duration = 2;
  const radius = 150;
  const contentHeight = "500px"; // put in children columns so when resize, they are all same height

  return (
    <Container className="align-items-center justify-content-center mt-4 mb-4">
      <Row>
        <Col className={COLALIGNMID}>
          <h1>
            <u>Skills</u>
          </h1>
        </Col>
      </Row>
      <Row
        className="align-items-center justify-content-center"
        style={{ overflow: "hidden", position: "relative"}}
      >
        <Col
          lg={12}
          xl={6}
          className={COLALIGNMID}
          style={{ height: contentHeight }}
        >
          <b>Languages</b>
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
        <Col
          lg={12}
          xl={6}
          className={COLALIGNMID}
          style={{ height: contentHeight }}
        >
          <b>Frameworks</b>
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
      <Row
        className="align-items-center justify-content-center"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <Col
          lg={12}
          xl={6}
          className={COLALIGNMID}
          style={{ height: contentHeight }}
        >
          <b>Databases</b>
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
        <Col
          lg={12}
          xl={6}
          className={COLALIGNMID}
          style={{ height: contentHeight }}
        >
          <b>Technologies</b>
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
      </Row>
    </Container>
  );
}

export default Skills;
