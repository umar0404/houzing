import React from "react";
import GenCarousel from "../Carousel";
import GenCategory from "../Category";
// import CategoryCard from "../CategoryCard";
// import HouseCard from "../HouseCard";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <GenCategory />
    </Container>
  );
};

export default Home;
