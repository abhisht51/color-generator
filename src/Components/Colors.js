import React, { useEffect, useState } from "react";
import { LOAD_COLORS, COLORS_SUBSCRIPTION } from "../GraphQL/Queries";
import { gql, useQuery, useSubscription } from "@apollo/client";
import Cards from "./Cards";

const Colors = () => {
  const { data, error, loading } = useSubscription(COLORS_SUBSCRIPTION, {});
  const [colors, setColors] = useState([]);
  useEffect(() => {
    if (data) {
      setColors(data.Colors);
    }
    console.log(data);
  }, [data]);

  return (
      <Cards Colors={colors}></Cards>
  );
};

export default Colors;
