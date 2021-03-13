import React, { useEffect, useState } from "react";
import { COLORS_SUBSCRIPTION } from "../GraphQL/Queries";
import { useSubscription } from "@apollo/client";
import Cards from "./Cards";

const Colors = () => {
  const { data } = useSubscription(COLORS_SUBSCRIPTION, {});
  const [colors, setColors] = useState([]);
  useEffect(() => {
    
    if (data) {
      setColors(data.Colors);
    }
    console.log(data);
  }, [data]);

  return <Cards Colors={colors}></Cards>;
};

export default Colors;
