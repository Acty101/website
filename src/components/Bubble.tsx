import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Bubble.css";

interface AnimationSettings {
  angle: number;
  radius: number;
  duration: number;
  link: string;
  text?: string;
  select?: boolean;
}

function Bubble({
  angle,
  radius,
  duration,
  link = "",
  text = "",
  select = false,
}: AnimationSettings) {
  // angle to position functions
  const countX = (radius: number, angle: number) => {
    return radius * Math.sin(angle * (Math.PI / 180));
  };
  const countY = (radius: number, angle: number) => {
    return -radius * Math.cos(angle * (Math.PI / 180));
  };

  // states
  const [width, setWidth] = useState(140);
  const [height, setHeight] = useState(140);
  const [angleState, setAngle] = useState(angle);
  const [x, setX] = useState(countX(radius, angle));
  const [y, setY] = useState(countY(radius, angle));
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the counter value every second
      setAngle((prev) => prev + 1);
    }, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setX(countX(radius, angleState));
    setY(countY(radius, angleState));
  }, [angleState]);

  useEffect(() => {
    animate(scope.current, { x: x, y: y }, { duration: duration });
  }, [scope, x, y]);

  const navigate = useNavigate();

  return (
    <motion.div
      ref={scope}
      className="round-corners d-flex align-items-center justify-content-center"
      transition={{ ease: [0.17, 0.67, 0.83, 1] }}
      onMouseEnter={() => {
        if (select) {
          setWidth(width + 20);
          setHeight(height + 20);
        }
      }}
      onMouseLeave={() => {
        if (select) {
          setWidth(width - 20);
          setHeight(height - 20);
        }
      }}
      onClick={() => {
        navigate(link);
      }}
      style={{ width: width, height: height }}
    >
      {text}
    </motion.div>
  );
}

export default Bubble;
