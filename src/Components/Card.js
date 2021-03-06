import React, { useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_COLOR } from "../GraphQL/Mutations";
import Editable from "./Editable";
import "./card.css";

const Card = ({ label, hex }) => {
  const [display, setDisplay] = useState({ display: "none" });
  const [remColor, { error }] = useMutation(REMOVE_COLOR);
  const [color, setCol] = useState(label);
  const inputRef = useRef();

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var finalresult = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };

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
      <Editable
        className="card-upper-text"
        text={color}
        hex={hex}
        childRef={inputRef}
        placeholder={label}
        type="input"
      >
        <input
          type="text"
          ref={inputRef}
          name="color"
          placeholder={color}
          value={color}
          onChange={(e) => setCol(e.target.value)}
        />
      </Editable>
      <div className="color-box" style={{ backgroundColor: hex }}>
        <div
          className="delete-color"
          style={display}
          onClick={() => deleteItem(hex)}
        >
          <img
            src="https://img.icons8.com/fluent/48/000000/delete-sign.png"
            alt="delete"
          />
        </div>
      </div>
      {/* <div className="color-name"></div> */}
      <div className="color-name">
        <p>
          hex: {hex}
          <br/>
          rgb: ({finalresult.r},{finalresult.g},{finalresult.b})
        </p>
      </div>
    </div>
  );
};
export default Card;
