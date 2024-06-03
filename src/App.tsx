import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Base from "./pages/Base";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";
import { useEffect, useState } from "react";

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

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Base
            github={GITHUB}
            email={EMAIL}
            linkedin={LINKEDIN}
            number={NUMBER}
          />
        }
      >
        <Route path="/" element={<Home/>} />
        <Route
          path="/resume"
          element={<Resume path={RESUME} />}
        />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
