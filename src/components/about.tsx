import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./profile";
import { COLALIGNMID } from "./settings";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./css/about.css";

function About() {
  const leftImages = [
    "https://via.placeholder.com/300?text=Image+1",
    "https://via.placeholder.com/300?text=Image+2",
    "https://via.placeholder.com/300?text=Image+3",
    "https://via.placeholder.com/300?text=Image+4",
  ];

  const rightImages = [
    "https://via.placeholder.com/300?text=Image+1",
    "https://via.placeholder.com/300?text=Image+2",
    "https://via.placeholder.com/300?text=Image+3",
    "https://via.placeholder.com/300?text=Image+4",
  ];

  const [currentLeftIndex, setLeftIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [leftImages.length]);

  const [currentRightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRightIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rightImages.length]);

  return (
    <>
      <Container className="justify-content-center mt-4 mb-4">
        <Row>
          <Col className={COLALIGNMID}>
            <h1>Hello there👋</h1>
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-center mt-4 mb-4">
        <Row className="justify-content-center g-3">
          <Col md className={`${COLALIGNMID} image-container`} style={{ position: "relative" }}>
            <AnimatePresence>
              <motion.img
                src={leftImages[currentLeftIndex]}
                alt={`Image ${currentLeftIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 2 } }}
                transition={{ duration: 2 }}
                key={currentLeftIndex}
              />
            </AnimatePresence>
          </Col>
          <Col
            xs={{ order: "first" }}
            md={{ order: 0 }}
            className={COLALIGNMID}
          >
            <Container fluid className="justify-content-center">
              <Row>
                <Col sm className="d-flex justify-content-center">
                  <Profile duration={0.5} />
                </Col>
              </Row>
              <Row>
                <Col sm className={COLALIGNMID}>
                  <div
                    style={{
                      fontFamily: "Arial, sans-serif",
                      lineHeight: "1.6",
                    }}
                  >
                    <h3 className="text-center">I'm Kit 😎</h3>
                    <p className="text-center">
                      A third-year CS major studying at <br />
                      <strong>
                        The University of Michigan - Ann Arbor
                      </strong>. <br />
                      💛 Go Blue! 💙
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md className={`${COLALIGNMID} image-container`}>
              <AnimatePresence>
                <motion.img
                  src={rightImages[currentRightIndex]}
                  alt={`Image ${currentRightIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{ duration: 2 }}
                  key={currentRightIndex}
                />
              </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
