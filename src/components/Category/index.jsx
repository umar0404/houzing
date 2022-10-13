import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  arrows: true,
  speed: 500,
  adaptiveHeight: true,
  dots: true,
  appendDots: (dots) => <h1>{dots}</h1>,
};

export const GenCategory = () => {
  const [data, setDate] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setDate(res?.data || []);
      });
  }, []);
  console.log(data);
  return (
    <Container>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
              key={value.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default GenCategory;
