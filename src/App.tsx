import React, { useState } from "react";

import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import NavBar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

// const ExampleToast: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     // <>
//     //   {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//     //   <Toast show={show} onClose={() => toggleShow(false)}>
//     //     <Toast.Header>
//     //       <strong className="mr-auto">React-Bootstrap</strong>
//     //     </Toast.Header>
//     //     <Toast.Body>{children}</Toast.Body>
//     //   </Toast>
//     // </>

//   );
// };

/* 
CONTACT DETAILS:
*/
const GITHUB: string = "https://github.com/Acty101";
const EMAIL: string = "junkit@umich.edu";
const LINKEDIN: string = "https://www.linkedin.com/in/junkitlim/";
const NUMBER: string = "(734) 450-5507";

function App() {
  const [img, setImg] = useState("./profile.jpg");
  return (
    <>
      <NavBar
        github={GITHUB}
        email={EMAIL}
        linkedin={LINKEDIN}
        number={NUMBER}
      />
      <Container>
        <Row>
          <Col>
            <div className="profile-pic-container">
              {img && (
                <img
                  className="profile-pic"
                  src={img}
                  width="30"
                  height="30"
                  onError={(e) => {
                    setImg("");
                  }}
                  style={{ marginRight: "10px" }}
                />
              )}
            </div>
            Jun Kit Lim
          </Col>
          <Col xs={9}>About Me</Col>
        </Row>
      </Container>
    </>
  );
}
// <Container className="p-3">
//   <Container className="p-5 mb-4 bg-light rounded-3">
//     <h1 className="header">Welcome To React-Bootstrap</h1>
//     <ExampleToast>
//       We now have Toasts
//       <span role="img" aria-label="tada">
//         🎉
//       </span>
//     </ExampleToast>
//   </Container>
// </Container>

export default App;
