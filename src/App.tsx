import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Base from "./components/Base";
import "./App.css";

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
    <>
      <Router>
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
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume path={RESUME} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
