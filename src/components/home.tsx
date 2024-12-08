import NavBar from "./navbar";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Footer from "./footer";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./css/general.css";
import "./css/home.css";

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container className="h-100 content mt-4 mb-4 bg-dark">
      <Row />
      {children}
      <Row />
    </Container>
  );
}
function Home() {
  // scroll bar configs
  const { scrollYProgress } = useScroll();
  const scrollYProgressDamped = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [renderScroll, setRenderScroll] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestScrollProgress) => {
      if (latestScrollProgress < 0.1) {
        setRenderScroll(false);
      } else {
        setRenderScroll(true);
      }
    });
    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <NavBar />
      <AnimatePresence>
        {renderScroll && (
          <motion.div
            className="bar"
            style={{ scaleX: scrollYProgressDamped }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            initial={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="flex-container text-setting">
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <ContentWrapper>
            <Skills />
          </ContentWrapper>
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
