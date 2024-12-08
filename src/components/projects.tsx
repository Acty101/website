import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { COLALIGNMID } from "./settings";
import Carousel from "react-bootstrap/Carousel";
import Profile from "./profile";

function Projects() {
  const cycleInterval = 3000;

  const thumbnails = [
    "./project_thumbnails/runpod.png",
    "./project_thumbnails/potsAndPans.jpg",
    "./project_thumbnails/connectRX.jpg",
    "./project_thumbnails/noted.png",
    "./project_thumbnails/chataway.png",
  ];

  const links = [];

  const thumbnailsTitle = [
    "Runpod Serverless GPU",
    "Pots & Pans - HackGT X 1st Place Sustainability Project",
    "Connect RX",
    "",
    "Chat-A-Way",
  ]

  const thumbnailsCaption = [
    "Single-inference autolabelling model endpoint",
    "Recipe generate from a picture using ML model detection",
    "A unified, digital re-imagination of the healthcare system",
    "Simple, fast note taking with Notion integration",
    "Activity recommendations for the perfect date!"
  ];

  const isDarkModeList = [
    true,
    false,
    false,
    true,
    true,
  ];

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
          {thumbnails.map((srcImg, index) => (
            <Carousel.Item interval={cycleInterval} key={index}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "400px"}}
              >
                <img
                  src={srcImg}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              <Carousel.Caption  className={`${isDarkModeList[index] ? "text-white" : "text-dark"}`}>
                {thumbnailsTitle[index] && <h3>{thumbnailsTitle[index]}</h3>}
                <p>{thumbnailsCaption[index]}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}
export default Projects;
