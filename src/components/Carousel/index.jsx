import React from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import { useRef } from "react";
import House1 from "../../assets/img/house1.png";
import House2 from "../../assets/img/house2.png";


export const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={House1} />
        <Img src={House2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow onClick={onMove} data-name="right" left="true" />
      <Arrow onClick={onMove} data-name="left" />
    </Container>
  );
};

export default GenCarousel;
