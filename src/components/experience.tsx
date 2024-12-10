import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoCard from "./logo";
import { COLALIGNMID } from "./settings";
import "./css/experience.css";

const keysightDetails = [
  "Developed a multi-threaded Python GUI to display real-time Keysight instrument data with integrated AI-driven UI navigation and AI-powered data analysis capabilities",
  "Streamlined the GUI build process by integrating Bash scripts, CMakeLists.txt, and Makefiles to automate the compilation of C++/Python bindings, manage dependencies, and implement error detection mechanisms",
  "Fixed critical, non-deterministic memory leak crashes in the C++ driver program",
];

const tapwayDetails = [
  "Maintained and optimized a microservices backend for an ML model training and analytics web app by optimizing the training and auto-labeling pipelines while leveraging AWS and ML model libraries",
  "Integrated two post-processing stages in the training pipeline to handle ML model exports and data uploads",
  "Deployed an image auto- labeling model on a serverless GPU (RunPod), enabling single-inference use cases",
  "Engineered a client-side data validation and analysis module in Typescript for YOLO format datasets and optimized the COCO format version to reduce runtime on a 1.3GB dataset by 96% (17s to 0.7s)",
];

function Work() {
  return (
    <Container className="justify-content-center mt-4 mb-4">
      <Row>
        <Col className={COLALIGNMID}>
          <h1>
            <u>Work Experience</u>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm className={`${COLALIGNMID} mt-2 mb-2`}>
          <LogoCard
            duration={2}
            logo_path="./images/work/keysight_logo.png"
            scale={1.3}
            title="R&D Software Engineering Intern"
            points={keysightDetails}
          />
        </Col>
        <Col sm className={`${COLALIGNMID} mt-2 mb-2`}>
          <LogoCard
            duration={2}
            logo_path="./images/work/tapway_logo.png"
            title="AI Engineering (MLOps) Intern"
            points={tapwayDetails}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
