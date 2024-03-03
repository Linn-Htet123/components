import React from "react";
import { ButtonProps } from "../../types/button";

const Button = (props: ButtonProps) => {
  return (
    <button style={{ background: "blue", color: "white" }}>
      {props.label}
    </button>
  );
};

export default Button;
