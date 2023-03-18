// import React from 'react'
import React, { Component } from "react";
import Slider from "react-slick";
import choose1 from '../images/choose1.png'
import choose2 from '../images/choose2.png'
import choose3 from '../images/choose3.png'
import choose4 from '../images/choose4.png'
import choose5 from '../images/choose5.png'

const ChooseUs = () => {
  var settings = {
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
    <div className="overflow-hidden">
    <h1 className="text-center underline text-[#072a33] font-bold text-3xl my-10 overflow-hidden">
        Why Choose Us?
      </h1>
    <Slider {...settings} className="lg:mx-20 mx-5 overflow-hidden">
    <img src={choose1} alt="" className="overflow-hidden mx-2
    " />
    <img src={choose2} alt=""  className="overflow-hidden mx-2
    "/>
    <img src={choose3} alt="" className="overflow-hidden mx-2
    " />
    <img src={choose4} alt="" className="overflow-hidden mx-2
    " />
    <img src={choose5} alt="" className="overflow-hidden mx-2
    " />
    </Slider>
  </div>
  )
}

export default ChooseUs