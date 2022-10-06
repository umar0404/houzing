import React from "react";
import GenCarousel from "../Carousel";
import CategoryCard from "../CategoryCard";
import HouseCard from "../HouseCard";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};

export default Home;
