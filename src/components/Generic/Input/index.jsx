import React from "react";
import { Container } from "./style";

export const Input = ({
  type,
  width,
  height,
  fontSize,
  onChange,
  placeholder,
  name,
  defaultValue,
  value,
}) => {
  return (
    <Container
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      fontSize={fontSize}
      height={height}
      width={width}
      type={type}
    />
  );
};

export default Input;
