/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/banner1.jpeg";
import banner2 from "../images/banner2.jpeg";

const Carousel = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
  };
  return (
    <div className="px-10 mt-10">
      <Slider {...settings}>
        <img src={banner1} />
        <img src={banner2} />
      </Slider>
    </div>
  );
};

export default Carousel;
