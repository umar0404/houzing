import React from "react";
import { Container } from "./style";

export const Button = ({ children, type, width, height, fontSize, onClick }) => {
  return (
    <Container onClick={onClick} fontSize={fontSize} height={height} width={width} type={type}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
