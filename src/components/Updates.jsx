import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Updatepoint from "./Updatepoint";
import banner1 from "../images/banner1.jpeg";
import banner2 from "../images/banner2.jpeg";

const Updates = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoPlaySpeed: 500,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      // console.log("after change", currentSlide);
    },
  };
  return (
    <div className="flex flex-col gap-y-2 mt-10 bg-[#f1f1f1] p-2">
      <h2
        className="mx-auto text-2xl font-semibold text-[#133006] underline"
      >
        Latest Updates
      </h2>
      <div className="  mx-2 sm:mx-12 my-4 flex  w-full sm:w-3/4 h-auto sm:h-2/4 ">
        <img
          src={banner1}
          className="mx-2 w-2/4 h-2/4 hidden sm:inline rounded-2xl "
          alt=""
        />
        <div
          className="flex-1 mx-14 sm:mx-5 sm:mt-20
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
