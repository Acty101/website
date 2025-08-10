import { motion } from "framer-motion";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { COLALIGNEND, COLALIGNMID } from "./settings";
import "./css/logo.css";

interface logo_details {
  duration: number;
  logo_path: string;
  scale?: number;
}

interface logo_card_details extends logo_details {
  title: string;
  points: string[];
}

function Logo({ duration, logo_path, scale = 1 }: logo_details) {
  const [img, setImg] = useState(logo_path);

  return (
    <motion.div
      className="logo-container"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0, scale: scale }}
      transition={{ duration: duration }}
    >
      {img && (
        <img
          className="logo"
          src={img}
          onError={(e) => {
            setImg("");
          }}
        />
      )}
    </motion.div>
  );
}

function LogoCard({
  duration,
  logo_path,
  scale,
  title,
  points,
}: logo_card_details) {
  return (
    <Container fluid className={"h-100 logo-card bg-dark"}>
      <Row>
        <Col sm className={COLALIGNEND}>
          <Logo duration={duration} logo_path={logo_path} scale={scale} />
        </Col>
      </Row>
      <Row>
        <Col sm className={COLALIGNEND}>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col
          sm
          className={`${COLALIGNMID} some-justify-class`}
          style={{ maxWidth: "92.5%", textAlign: "justify" }}
        >
          <ul
            style={{
              paddingLeft: "10%",
              lineHeight: 1.5,
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            {points.map((point, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                {point.split(". ").map((sentence, i) => (
                  <p key={i} style={{ margin: 0 }}>
                    {sentence.trim()}
                    {i < point.split(". ").length - 1 ? "." : ""}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default LogoCard;
