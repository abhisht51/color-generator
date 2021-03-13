import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import "./card.css";
import { REMOVE_COLOR } from "../GraphQL/Mutations";

const Card = ({ label, hex }) => {
  const [display, setDisplay] = useState({ display: "none" });
  const [remColor, { error, data }] = useMutation(REMOVE_COLOR);

  // id: Math.floor(Math.random()*16777215)
  const deleteItem = (hexID) => {
    console.log(hexID);
    remColor({
      variables: {
        hex_val: hexID,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="card-container"
      onMouseEnter={(e) => setDisplay({ display: "flex" })}
      onMouseLeave={(e) => setDisplay({ display: "none" })}
    >
      <div className="card-upper-text">{label.toString().toUpperCase()}</div>
      <div className="color-box" style={{ backgroundColor: hex }} onClick={deleteItem(hex)}>
        <div className="delete-color" style={display} >
          <img src="https://img.icons8.com/fluent/48/000000/delete-sign.png"  />
        </div>
      </div>
      <div className="color-name">{hex}</div>
    </div>
  );
};

export default Card;
