import React, { useState } from "react";
import "./bootstrap-style.css";
import scrollDown from "./scrolldown";
function Button() {
  const [arrowState, setArrowState] = useState(false);
  const arrowMovement = () => {
    setArrowState(!arrowState);
  };
  setTimeout(arrowMovement, 600);
  return (
    <div id="downarrow" onLoad={arrowMovement}>
      <img
        src="Images/arrow-207-32.png"
        alt="downarrow"
        className={arrowState ? "downarrowUp" : "downarrowDown"}
        onClick={scrollDown}
      />
    </div>
  );
}

export default Button;
