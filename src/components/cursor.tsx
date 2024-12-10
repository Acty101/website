import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function CursorBlinker({ fontSize }: { fontSize: number }) {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="d-inline-block bg-white"
      style={{ width: "1px", height: fontSize }}
    />
  );
}
