import React, { useEffect, useState, useRef } from "react";
import { ShrinkingBubble, BigStaticBubble } from "../components/Bubbles";
import { useLocation, useNavigate } from "react-router-dom";

function Routed({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [stateData, _] = useState(location.state ?? "");
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    navigate(location.pathname, { state: null });
  }, [location.state, navigate]);

  // Run after the first render finishes, triggering shrinking animation
  useEffect(() => {
    setRendered(true);
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
