import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { COLALIGNMID } from "./settings";
import Carousel from "react-bootstrap/Carousel";
import "./css/general.css";

function Projects() {
  const cycleInterval = 3000;

  const thumbnails = [
    "./images/project_thumbnails/runpod.png",
    "./images/project_thumbnails/potsAndPans.jpg",
    "./images/project_thumbnails/detrash.png",
    "./images/project_thumbnails/connectRX.jpg",
    "./images/project_thumbnails/noted.png",
    "./images/project_thumbnails/chataway.png",
  ];

  const externalLinks = [
    "https://github.com/Acty101/RunPod-GD",
    "https://devpost.com/software/let-s-cook-41wpbt",
    "https://github.com/Acty101/hackohio-backend",
    "https://devpost.com/software/connect-rx",
    "https://devpost.com/software/noted-t04drs",
    "https://devpost.com/software/chat-a-way",
  ];

  const links = [];

  const thumbnailsTitle = [
    "Runpod Serverless GPU",
    "Pots & Pans",
    "DeTrash",
    "Connect RX",
    "Noted",
    "Chat-A-Way",
  ];

  const thumbnailsCaption = [
    "Single-inference autolabelling model endpoint",
    "Recipe generator from a single picture",
    "Detect, Report, & Visualize from a single picture",
    "A unified, digital healthcare system",
    "Simple, fast note taking with Notion integration",
    "Activity recommendations for the perfect date!",
  ];

  return (
    <Container className="justify-content-center my-4">
      <Row>
        <Col className={COLALIGNMID}>
          <h1>
            <u>
              <a href="#projects" className="no-style-link">
                Projects
              </a>
            </u>
          </h1>
        </Col>
      </Row>
      <Row>
        <Carousel>
          {thumbnails.map((srcImg, index) => (
            <Carousel.Item interval={cycleInterval} key={index}>
              <a
                href={externalLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Container className="justify-content-center mt-2 mb-4">
                  <Row
                    className="d-flex align-items-center justify-content-center mx-5"
                    style={{ height: "600px" }}
                  >
                    <img
                      src={srcImg}
                      className="bg-dark"
                      style={{
                        objectFit: "contain",
                        borderRadius: "75px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Row>
                  <Row className="text-center my-2 text-white">
                    <h3>{thumbnailsTitle[index]}</h3>
                    <p>{thumbnailsCaption[index]}</p>
                  </Row>
                </Container>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}
export default Projects;
