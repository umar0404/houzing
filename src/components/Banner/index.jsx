import React from "react";
import { Blur, Container, Content, Img } from "./style";
import House2 from "../../assets/img/house2.png";
import { Button } from "../Generic";

export const GenCarousel = () => {
  return (
    <Container>
      <Img src={House2} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button width={180}>Read more</Button>
      </Content>
    </Container>
  );
};

export default GenCarousel;
