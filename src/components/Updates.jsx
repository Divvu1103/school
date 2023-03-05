import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Updatepoint from "./Updatepoint";

const Updates = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoPlaySpeed: 500,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="mx-auto text-2xl font-semibold  underline underline-offset-8">
        Latest Updates
      </h2>
      <div className=" mx-12 my-4 flex w-3/4 h-2/4 ">
        <img
          src="https://majorsdsu.com/assets/yoga-banner-4.jpeg"
          className="mx-2 w-2/4 h-2/4 "
          alt=""
        />
        <div
          className="flex-1 mx-5 mt-20
        "
        >
          <Slider {...settings}>
            <Updatepoint
              name={
                "Mop-up round counselling registration starts from 30-03-2022 to 08-04-2022"
              }
            />
            <Updatepoint name={"Submission of Total Course Fee (2021-22)"} />
            <Updatepoint name={" Submission of Total Course Fee (2021-22)"} />
            <Updatepoint name={"Fee Submission for All Students"} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Updates;