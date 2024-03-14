import React from "react";
import { ButtonProps } from "../../types/button";
import "./Button.css";
const Button = (props: ButtonProps) => {
  return <button className="button">{props.label}</button>;
};

export default Button;
