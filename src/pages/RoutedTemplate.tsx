import React, { useEffect, useState } from "react";
import { FadingBubble, BigStaticBubble } from "../components/Bubbles";
import { useLocation } from "react-router-dom";

function Routed({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [stateData, _] = useState(location.state ?? "");
  const [rendered, setRendered] = useState(false);

  // Run after the first render finishes
  useEffect(() => {
    // Trigger shrinking animation
    setRendered(true);
    // Prevents shrinking animation from running more than once against refreshes
    window.history.replaceState(null, "");
  }, []);

  const className = "h-100 d-flex align-items-center justify-content-center";

  return (
    <>
      <div
        className={className}
        style={{ overflow: "hidden", position: "relative" }}
      >
        {children}

        {stateData.prev === "/" &&
          (rendered ? <FadingBubble duration={1} /> : <BigStaticBubble />)}
      </div>
    </>
  );
}

export default Routed;
