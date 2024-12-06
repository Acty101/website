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
import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./components/css/general.css";

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
      <NavBar
        github={GITHUB}
        email={EMAIL}
        linkedin={LINKEDIN}
        number={NUMBER}
      />
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
        <About />
        <ContentWrapper>
          <Skills />
        </ContentWrapper>
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
