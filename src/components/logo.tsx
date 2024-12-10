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
        <Col sm className={COLALIGNMID}>
          <ul>
            <h1>{title}</h1>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default LogoCard;
