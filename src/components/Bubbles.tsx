import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Bubbles.css";

interface AnimationSettings {
  angle: number;
  radius: number;
  duration: number;
  link: string;
  text?: string;
  select?: boolean;
}

export function Bubble() {
  return (
    <motion.div
      className="round-corners d-flex align-items-center justify-content-center"
      style={{ width: 150, height: 150 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      initial={{ y: -500 }}
    ></motion.div>
  );
}

/**
 * Used for occupying the whole space of a container
 * NOTE: expects container to be postion: relative and overflow: hidden
 * Use to ensure consistency with bubble colors and animations
 */
export function BigStaticBubble() {
  return (
    <div
      className="round-corners d-flex align-items-center justify-content-center"
      style={{ width: 2400, height: 2400 }}
    ></div>
  );
}

/**
 * Bubble for shrinking animation after link changes
 */
export function ShrinkingBubble() {
  return (
    <motion.div
      className="round-corners d-flex align-items-center justify-content-center"
      style={{ width: 150, height: 150 }}
      animate={{ scale: 0 }}
      transition={{ duration: 2 }}
      initial={{ scale: 16 }}
    ></motion.div>
  );
}

/**
 * Bubble that rotates around 
 */
export function RotatingBubble({
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
  const [angleState, setAngle] = useState(angle);
  const [zIndex, setZIndex] = useState(2);
  const [textState, setText] = useState(text);
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
      whileHover={select ? { scale: 1.2 } : undefined}
      onClick={() => {
        setZIndex(5);
        setText("");
        animate(scope.current, { scale: 16 }, { duration: 1 })
          .then(() => {
            navigate(link, { state: { prev: "/" } });
          })
          .catch((error) => {
            console.error("Animation failed: ", error);
          });
      }}
      style={{ width: 140, height: 140, zIndex: zIndex }}
    >
      {textState}
    </motion.div>
  );
}
