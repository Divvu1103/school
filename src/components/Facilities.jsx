/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/banner1.jpeg";
import banner2 from "../images/banner2.jpeg";
import Card from './Card';
const Facilities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoPlaySpeed: 500,
  };
  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings} >
      <Card name={"Games"} content={"0da"}/>
      <Card name={"Games"} content={"0da"}/>
      </Slider>
    </div>
  );
};

export default Facilities;
