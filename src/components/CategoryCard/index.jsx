import React from "react";
import { Blur, Container, Content, Img } from "./style";
import noimg from "../../assets/img/noimg.png";
import category from "../../assets/img/category.png";

export const CategoryCard = ({ data = {} }) => {
  const { name } = data;
  return (
    <Container>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
