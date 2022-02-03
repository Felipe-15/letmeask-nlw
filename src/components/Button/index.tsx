import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
  return <Container isOutlined={isOutlined} {...props}></Container>;
};

export default Button;
