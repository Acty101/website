import React, { useEffect, useState } from "react";
import { ShrinkingBubble } from "../components/Bubbles";
import { useLocation, useNavigate } from "react-router-dom";

function Routed({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [stateData, _] = useState(location.state ?? "");

  useEffect(() => {
    navigate(location.pathname, { state: null });
  }, [location.state, navigate]);

  return (
    <>
      <div
        className="h-100 d-flex align-items-center justify-content-center"
        style={{ overflow: "hidden", position: "relative" }}
      >
        {children}
        {stateData.prev === "/" && <ShrinkingBubble />}
      </div>
    </>
  );
}

export default Routed;
