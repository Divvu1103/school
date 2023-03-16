/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/babu singh daddu jii.jpg";
import banner2 from "../images/banner2.jpeg";
import Updatepoint from "./Updatepoint";
import { NoticePoint } from "./NoticePoint";

const Carousel = () => {
  var settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div classNameName="px-10 mt-10 flex">
      <Slider {...settings}>
        <div className="w-full p-1">
          <img src={banner1} className=" w-[85vw] my-2  mx-auto h-[60vh]  " />
        </div>
        <div className="w-full p-1">
          <img src={banner2} className="  w-[85vw] my-2  mx-auto h-[60vh]" />
        </div>
      </Slider>
      <div className="w-[85vw] mx-auto">
        <h2 className="text-center text-xl font-semibold text-[#133006]  underline"> Notice</h2>

        <Slider {...settings1}>
          <NoticePoint
            name={
              "Mop-up round counselling registration starts from 30-03-2022 to 08-04-2022"
            }
          />
          <NoticePoint name={"Submission of Total Course Fee (2021-22)"} />
          <NoticePoint name={" Submission of Total Course Fee (2021-22)"} />
          <NoticePoint name={"Fee Submission for All Students"} />
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
