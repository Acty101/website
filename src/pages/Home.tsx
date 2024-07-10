import { animate } from "framer-motion";
import { RotatingBubble } from "../components/Bubbles";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";

function Home() {
  
  const duration = 2;
  const radius = 250;
  const navigate = useNavigate();
  const rotateClockwise = Math.random() < 0.5;

  const callbackGenerator = (link: string) => {
    return (scope: any) => {
      animate(scope.current, { scale: 20 }, { duration: 1 })
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
        clockwise={rotateClockwise}
        onClickCallback={callbackGenerator("/about")}
      />
      <RotatingBubble
        angle={72}
        radius={radius}
        duration={duration}
        text={"Projects"}
        select={true}
        clockwise={rotateClockwise}
        onClickCallback={callbackGenerator("/projects")}
      />
      <RotatingBubble
        angle={144}
        radius={radius}
        duration={duration}
        text={"Resume"}
        select={true}
        clockwise={rotateClockwise}
        onClickCallback={callbackGenerator("/resume")}
      />
      <RotatingBubble
        angle={216}
        radius={radius}
        duration={duration}
        text={"Experience"}
        select={true}
        clockwise={rotateClockwise}
        onClickCallback={callbackGenerator("/experience")}
      />
      <RotatingBubble
        angle={288}
        radius={radius}
        duration={duration}
        text={"Skills"}
        select={true}
        clockwise={rotateClockwise}
        onClickCallback={callbackGenerator("/skills")}
      />

      <Profile duration={duration}/>

    </div>
  );
}

export default Home;
