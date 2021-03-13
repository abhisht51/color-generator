import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { SET_LABEL } from "../GraphQL/Mutations";

const Editable = ({
  hex,
  childRef,
  text,
  type,
  placeholder,
  children,
  ...props
}) => {
  const [setLabel] = useMutation(SET_LABEL);

  const [isEditing, setEditing] = useState(false);
  const handleKeyDown = (event, type,hex, text) => {
    // Handle when key is pressed
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey]; // All keys array

    /* 
    - For textarea, check only Escape and Tab key and set the state to false
    - For everything else, all three keys will set the state to false
  */ if (
      (type === "textarea" && keys.indexOf(key) > -1) ||
      (type !== "textarea" && allKeys.indexOf(key) > -1)
    ) {
      setLabel({
        variables: {
          hex_val: hex,
          label: text,
        },
      });
      setEditing(false);
    }

  };

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type, hex, text)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text || placeholder || "Editable content"}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
