import { useEffect, useState } from "react";
import { motion, useAnimate, AnimationScope } from "framer-motion";
import "./Bubbles.css";

interface AnimationSettings {
  angle: number;
  radius: number;
  duration: number;
  text?: string;
  select?: boolean;
  waitTime?: number;
  clockwise?: boolean;
  onClickCallback?: (arg: AnimationScope<any>) => void;
}

export function LeftSlideBubble({
  finalX,
  finalY,
}: {
  finalX: number | string;
  finalY: number | string;
}) {
  return (
    <motion.div
      className="round-corners d-flex align-items-center justify-content-center"
      style={{ width: 150, height: 150, zIndex: 10 }}
      animate={{ x: finalX, y: finalY }}
      transition={{ duration: 2 }}
      initial={{ x: "-100vw", y: finalY }}
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
      style={{ width: 150, height: 150, zIndex: 5 }}
      animate={{ scale: 0 }}
      transition={{ duration: 2 }}
      initial={{ scale: 16 }}
    ></motion.div>
  );
}

/**
 * Bubble that rotates around a fixed point
 */
export function RotatingBubble({
  angle,
  radius,
  duration,
  text = "",
  select = false,
  waitTime = 0,
  clockwise = true,
  onClickCallback = () => {},
}: AnimationSettings) {
  // angle to position functions
  const countX = (radius: number, angle: number) => {
    return clockwise
      ? radius * Math.sin(angle * (Math.PI / 180))
      : -radius * Math.sin(angle * (Math.PI / 180));
  };
  const countY = (radius: number, angle: number) => {
    return -radius * Math.cos(angle * (Math.PI / 180));
  };

  // states
  const [angleState, setAngle] = useState(angle);
  const [zIndex, setZIndex] = useState(2);
  const [textState, setText] = useState(text);
  const [rotate, setRotate] = useState(true);
  const [x, setX] = useState(countX(radius, angle));
  const [y, setY] = useState(countY(radius, angle));
  const [scope, animate] = useAnimate();
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the counter value every second
      rotate && setAngle((prev) => prev + 1);
    }, 100);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [rotate]);

  useEffect(() => {
    setX(countX(radius, angleState));
    setY(countY(radius, angleState));
  }, [angleState]);

  useEffect(() => {
    if (wait) {
      const interval = setInterval(() => {
        setWait(false);
      }, waitTime);
      return () => clearInterval(interval);
    } else {
      animate(scope.current, { x: x, y: y }, { duration: duration });
    }
  }, [wait, x, y]);

  return (
    <motion.div
      ref={scope}
      className="round-corners d-flex align-items-center justify-content-center"
      whileHover={select ? { scale: 1.2 } : undefined}
      onClick={() => {
        setRotate(false);
        setZIndex(3);
        setText("");
        onClickCallback(scope);
        // set a back button to conditionally render that onClick restores the original state?
      }}
      style={{ width: 140, height: 140, zIndex: zIndex }}
    >
      {textState}
    </motion.div>
  );
}
