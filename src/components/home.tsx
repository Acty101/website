import NavBar from "./navbar";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Footer from "./footer";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./css/general.css";
import "./css/home.css";

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
    <div id="about" className="bg-dark">
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
      <div
        className="flex-container text-setting"
        style={{
          backgroundImage: "url('./misc-files/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <About />
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
