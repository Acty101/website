import { useState } from "react";
import { motion, animate } from "framer-motion";
import { RotatingBubble } from "../components/Bubbles";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [img, setImg] = useState("./images/profile.jpg");
  const duration = 2;
  const radius = 250;
  const navigate = useNavigate();

  const callbackGenerator = (link: string) => {
    return (scope: any) => {
      animate(scope.current, { scale: 16 }, { duration: 1 })
        .then(() => {
          navigate(link, { state: { prev: "/" } });
        })
        .catch((error) => {
          console.error("Animation failed: ", error);
        });
    };
  };

  return (
    <div
      className="h-100 d-flex align-items-center justify-content-center"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <RotatingBubble
        angle={0}
        radius={radius}
        duration={duration}
        text={"About"}
        select={true}
        onClickCallback={callbackGenerator("/about-me")}
      />
      <RotatingBubble
        angle={120}
        radius={radius}
        duration={duration}
        text={"Projects"}
        select={true}
        onClickCallback={callbackGenerator("/projects")}
      />
      <RotatingBubble
        angle={240}
        radius={radius}
        duration={duration}
        text={"Resume"}
        select={true}
        onClickCallback={callbackGenerator("/resume")}
      />

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
