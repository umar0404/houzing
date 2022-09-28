import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

export const Input = forwardRef(
  (
    {
      type,
      width,
      height,
      fontSize,
      onChange,
      placeholder,
      name,
      defaultValue,
      value,
      prefix,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          prefix={prefix}
          icon={icon}
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
      </Wrapper>
    );
  }
);

export default Input;
