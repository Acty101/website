import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CursorBlinker from "./cursor";
import { COLALIGNMID } from "./settings";
import { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import "./css/about.css";

function About() {
  const timeAnimationDelay = 2000;
  const timeInterval = 6000;

  const images = [
    "./images/about/profile.jpg",
    "./images/about/travelling.jpg",
    "./images/about/hackathon.jpg",
    "./images/about/foodie.jpg",
    "./images/about/snowboard.jpg",
    "./images/about/outdoor.jpg",
  ];

  const descriptions = [
    "an aspiring software engineer 🌱",
    "a traveler 🌏",
    "a hackathon enthusiast 💻 (and winner) 🎉",
    "a foodie 🍜",
    "a snowboarder ❄️",
    "an outdoors lover 🎋",
  ];

  const [index, setIndex] = useState(0);
  const [startInf, setStartInf] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    images.map(() => false)
  );
  const [animKey, setAnimKey] = useState(0); // to restart animation

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

  // preload images once
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      };
    });
  }, []);

  // animate intro text, then switch to cycling
  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: timeAnimationDelay / 1000,
      ease: "easeInOut",
      onComplete: () => setStartInf(true),
    });
    return controls.stop;
  }, []);

  // sync image and description animation
  useEffect(() => {
    if (!startInf) return;
    let timer: NodeJS.Timeout | null = null;

    const nextIndex = (index + 1) % images.length;

    const advance = () => {
      setIndex(nextIndex);
      setAnimKey((k) => k + 1);
    };

    if (imagesLoaded[nextIndex]) {
      timer = setTimeout(advance, timeInterval);
    } else {
      // Wait until image is loaded, then advance
      const checkLoaded = setInterval(() => {
        if (imagesLoaded[nextIndex]) {
          advance();
          clearInterval(checkLoaded);
        }
      }, 500);
      timer = checkLoaded;
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [index, imagesLoaded, startInf, timeInterval, images.length]);

  // animate cycling description text, restart on animKey change
  useEffect(() => {
    if (!startInf) return;
    countInf.set(0);
    const controls = animate(countInf, 60, {
      type: "tween",
      duration: (timeInterval - timeAnimationDelay) / 1000 / 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    });
    return controls.stop;
  }, [startInf, animKey, timeInterval]);

  return (
    <>
      <Container className="justify-content-center mt-4 mb-5">
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
          <Container className="justify-content-center">
            <Row>
              <h1 className="text-center">
                <motion.span>{displayText}</motion.span>
                {!startInf && <CursorBlinker fontSize={37} />}
              </h1>
            </Row>
            <Row>
              <div
                className="text-center"
                style={{
                  fontSize: "30px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  minHeight: "90px",
                }}
              >
                {startInf && (
                  <>
                    <motion.span key={animKey}>{displayTextInf}</motion.span>
                    <CursorBlinker fontSize={30} />
                  </>
                )}
              </div>
            </Row>
          </Container>
        </Col>
      </Container>
    </>
  );
}

export default About;
