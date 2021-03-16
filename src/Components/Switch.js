import React from "react";
import "./switch.css";
const Switch = ({ isToggled, onToggled }) => {
  return (
    <div className="switch-div">
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggled} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Switch;
