import React, {useState} from "react";
import "./card.css";

const Card = ({ label, hex }) => {
  const [display, setDisplay] = useState({ display: "none" });
  return (
    <div
      className="card-container"
      onMouseEnter={(e) => setDisplay({ display: "flex" })}
      onMouseLeave={(e) => setDisplay({ display: "none" })}
    >
      <div className="card-upper-text">{label.toString().toUpperCase()}</div>
      <div className="color-box" style={{ backgroundColor: hex }}>
        <div className="delete-color" style={display}>
          <img src="https://img.icons8.com/fluent/48/000000/delete-sign.png" />
        </div>
      </div>
      <div className="color-name">{hex}</div>
    </div>
  );
};

export default Card;
