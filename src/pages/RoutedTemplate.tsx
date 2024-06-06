import React, { useEffect, useState } from "react";
import { ShrinkingBubble, BigStaticBubble } from "../components/Bubbles";
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

  return (
    <>
      <div
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ overflow: "hidden", position: "relative" }}
      >
        {children}
        {stateData.prev === "/" && (rendered ? (
          <ShrinkingBubble />
        ) : (
          <BigStaticBubble />)
        )}
      </div>
    </>
  );
}

export default Routed;
