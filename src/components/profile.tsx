import { motion } from "framer-motion";
import { useState } from "react";
import "./css/profile.css";

function Profile({ duration }: { duration: number }) {
  const [img, setImg] = useState("./images/profile.jpg");

  return (
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
  );
}

export default Profile;
