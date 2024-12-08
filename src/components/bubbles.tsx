import { useEffect, useState } from "react";
import { motion, useAnimate, AnimationScope } from "framer-motion";
import "./css/bubbles.css";

interface AnimationSettings {
  angle: number;
  radius: number;
  duration: number;
  children: React.ReactNode;
  select?: boolean;
  waitTime?: number;
  clockwise?: boolean;
  onClickCallback?: (arg: AnimationScope<any>) => void;
}

interface IconList {
  title: string;
  imgSources: string[];
  radius: number;
  clockwise: boolean;
}

/**
 * Bubble that rotates around a fixed point
 */
export function RotatingIcon({
  angle,
  radius,
  duration,
  children,
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
  const [x, setX] = useState(countX(radius, angle));
  const [y, setY] = useState(countY(radius, angle));
  const [scope, animate] = useAnimate();
  const [wait, setWait] = useState(true);

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
  }, [countX, radius, angleState]);

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
        onClickCallback(scope);
      }}
      style={{ zIndex: 3 }}
    >
      {children}
    </motion.div>
  );
}

export function RotatingIconList({
  title,
  imgSources,
  radius,
  clockwise,
}: IconList) {
  const interval = 360 / imgSources.length;
  return (
    <>
      <b>{title}</b>
      {imgSources.map((srcImg, index) => (
        <RotatingIcon
          key={index}
          angle={index * interval}
          radius={radius}
          duration={2}
          select={true}
          clockwise={clockwise}
          onClickCallback={() => {}}
        >
          <img src={srcImg} />
        </RotatingIcon>
      ))}
    </>
  );
}
