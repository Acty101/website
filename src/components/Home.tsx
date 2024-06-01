import { useState } from "react";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home(){
    const [img, setImg] = useState("./profile.jpg");
    return (
      <>
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
};

export default Home;