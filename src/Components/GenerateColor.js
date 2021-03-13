import React from "react";
import { GENERATE_COLOR_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

const GenerateColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let labels = ["Primary", "Secondary", "Background"];
  const [genColor, { error }] = useMutation(GENERATE_COLOR_MUTATION);
  while (randomColor.length !== 6) {
    randomColor += "0";
  }
  randomColor = "#"+randomColor;
  const generateColor = () => {
    genColor({
      variables: {
        hex_val: randomColor,
        label: labels[Math.floor(Math.random() * 3)],
      },
    });

    if (error) {
      console.log(error);
    }
  };


  return (
    <button  onClick={generateColor} className="generate-button" >
      <h1>Generate New Color</h1>
    </button>
  );
};

export default GenerateColor;
