import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { COLALIGNMID } from "./settings";
import Carousel from "react-bootstrap/Carousel";
import Profile from "./profile";

function Projects() {
  const cycleInterval = 3000;
  return (
    <Container className="justify-content-center mt-4 mb-5">
      <Row>
        <Col className={COLALIGNMID}>
          <h1>
            <u>Projects</u>
          </h1>
        </Col>
      </Row>
      <Row>
        <Carousel>
          <Carousel.Item interval={cycleInterval}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "400px", position: "relative"}}
            >
              <img
                src="images/profile.jpg"
                style={{ objectFit: "cover", borderRadius: "10px", width: "100%", height: "100%" }}
              />
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={cycleInterval}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <img
                src="images/profile.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={cycleInterval}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <img
                src="images/profile.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
export default Projects;
