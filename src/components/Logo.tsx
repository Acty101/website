import { motion } from "framer-motion";
import { useState } from "react";
import "./css/Logo.css";

function Logo({
  duration,
  logo_path,
  scale = 1,
}: {
  duration: number;
  logo_path: string;
  scale?: number;
}) {
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

export default Logo;
