import { useState } from "react";
import { motion } from "framer-motion";
import Bubble from "./Bubble";
import "./Home.css";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Home() {
  const [img, setImg] = useState("./images/profile.jpg");
  const duration = 2;
  const radius = 250;
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <Bubble
        angle={0}
        radius={radius}
        duration={duration}
        text={"About"}
        link=""
        select={true}
      />
      <Bubble
        angle={120}
        radius={radius}
        duration={duration}
        text={"Projects"}
        link=""
        select={true}
      />
      <Bubble
        angle={240}
        radius={radius}
        duration={duration}
        text={"Resume"}
        link="/resume"
        select={true}
      />
      <Bubble angle={60} radius={radius} duration={duration} link="" text={""} />
      <Bubble angle={180} radius={radius} duration={duration} link="" text={""} />
      <Bubble angle={300} radius={radius} duration={duration} link="" text={""} />

      <motion.div
        className="profile-pic-container"
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: duration }}
      >
        {img && (
          <img
            className="profile-pic"
            src={img}
            onError={(e) => {
              setImg("");
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

export default Home;
