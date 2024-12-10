import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CursorBlinker from "./cursor";
import { COLALIGNMID } from "./settings";
import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import "./css/about.css";

function About() {
  const timeAnimationDelay = 4000;
  const timeInterval = 6000;

  const images = [
    "./about/profile.jpg",
    "./about/travelling.jpg",
    "./about/hackathon.jpg",
    "./about/snowboard.jpg",
    "./about/outdoor.jpg",
  ];

  const descriptions = [
    "an aspiring software engineer",
    "a traveler",
    "a hackathon enthusiast (and winner🎉)",
    "a snowboarder",
    "an outdoors lover",
  ];

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [index, setIndex] = useState(0);
  const [startInf, setStartInf] = useState(false);

  const baseText = "Hello there!👋 I'm Jun Kit 😎";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  const countInf = useMotionValue(0);
  const roundedInf = useTransform(countInf, (latest) => Math.round(latest));
  const displayTextInf = useTransform(
    roundedInf,
    (latest) => descriptions[index]?.slice(0, latest) || ""
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartInf(true);
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, timeInterval);
      return () => clearInterval(interval);
    }, timeAnimationDelay);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: timeAnimationDelay / 1000,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      const timeout = setTimeout(() => {
        const controls = animate(countInf, 60, {
          type: "tween",
          duration: (timeInterval / 1000 - 2) / 2,
          ease: "easeIn",
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 1,
        });
        return controls.stop;
      }, timeAnimationDelay);

      setIsFirstRender(false);
      return () => clearTimeout(timeout);
    } else {
      const controls = animate(countInf, 60, {
        type: "tween",
        duration: (timeInterval / 1000 - 2) / 2,
        ease: "easeIn",
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 1,
      });
      return controls.stop;
    }
  }, [index]);

  return (
    <>
      <Container
        className="justify-content-center mt-5 mb-4"
        style={{ paddingTop: "60px" }}
      >
        <Row className="justify-content-center g-3">
          <Col md className={COLALIGNMID} style={{ position: "relative" }}>
            <motion.div className="image-container">
              <AnimatePresence>
                <motion.img
                  src={images[index]}
                  alt={`Image ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 2 } }}
                  transition={{ duration: 2 }}
                  key={index}
                />
              </AnimatePresence>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Col md className={COLALIGNMID}>
          <Container className="justify-content-center mt-4 mb-4">
            <Row className="justify-content-center">
              <h1 className="text-center">
                <motion.span>{displayText}</motion.span>
                {!startInf && (
                  <>
                    <CursorBlinker fontSize={40} />
                    <div style={{ paddingBottom: "60px" }}></div>
                  </>
                )}
              </h1>
            </Row>
            {startInf && (
              <Row className="justify-content-center">
                <div
                  className="text-center"
                  style={{
                    fontSize: "30px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <motion.span>{displayTextInf}</motion.span>
                  <CursorBlinker fontSize={30} />
                </div>
              </Row>
            )}
          </Container>
        </Col>
      </Container>
    </>
  );
}

export default About;
