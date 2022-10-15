import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Why from "../Why";
import Banner from "../Banner";
import Recent from "../Recent";
import Recommended from "../Recommended";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
