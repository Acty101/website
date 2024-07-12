import Resume from "./components/resume";
import Home from "./components/home";
import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Footer from "./components/footer";
import "./App.css";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

/* 
CONTACT DETAILS:
*/
const GITHUB: string = "https://github.com/Acty101";
const EMAIL: string = "junkit@umich.edu";
const LINKEDIN: string = "https://www.linkedin.com/in/junkitlim/";
const NUMBER: string = "(734) 450-5507";
/*
RESUME:
*/
const RESUME: string = "./misc-files/Jun_Kit_Lim_Resume.pdf";

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container className="h-100 content mt-4 mb-4">
      <Row />
      {children}
      <Row />
    </Container>
  );
}

function App() {
  // scroll bar configs
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: contentRef });
  const scrollYProgressDamped = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [renderScroll, setRenderScroll] = useState(false);
  const handleScroll = () => {
    setRenderScroll(scrollYProgress.get() > 0.03);
  };

  return (
    <>
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

      <div className="flex-container" ref={contentRef} onScroll={handleScroll}>
        <NavBar
          github={GITHUB}
          email={EMAIL}
          linkedin={LINKEDIN}
          number={NUMBER}
        />
        <ContentWrapper>
          <About />
          <Skills />
          <Experience />
          <Projects />
        </ContentWrapper>
        <Footer />
      </div>
    </>
  );
}

export default App;
