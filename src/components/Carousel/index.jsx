import React from "react";
import { Arrow, Blur, Container, Img } from "./style";
import { Carousel } from "antd";
import { useRef } from "react";
import House1 from "../../assets/img/house1.png";
import House2 from "../../assets/img/house2.png";

// const contentStyle = {
//   height: "571px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

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
      <Arrow onClick={onMove} data-name="right" left  />
      <Arrow onClick={onMove} data-name="left" />
    </Container>
  );
};

export default GenCarousel;
