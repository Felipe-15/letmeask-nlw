import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return <Container {...props}></Container>;
};

export default Button;
