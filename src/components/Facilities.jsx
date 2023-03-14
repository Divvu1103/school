import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const Facilities = () => {
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
    <div>
      <h1 className="text-center underline text-[#143306] font-bold text-3xl my-10 overflow-hidden">
        Our Facilities
      </h1>
      <Slider {...settings} className="mx-20">
        <Card
          name={"Games"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium asperiores omnis labore iste atque ipsam beatae, sit blanditiis debitis animi provident, esse cum, maxime eaque quo dolorem laboriosam repudiandae excepturi aliquam repellat quos est! Corrupti quas dolorem perferendis adipisci cum alias molestiae quia animi suscipit! Facere sint omnis temporibus!"
          }
        />
        <Card
          name={"Auditorium"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium asperiores omnis labore iste atque ipsam beatae, sit blanditiis debitis animi provident, esse cum, maxime eaque quo dolorem laboriosam repudiandae excepturi aliquam repellat quos est! Corrupti quas dolorem perferendis adipisci cum alias molestiae quia animi suscipit! Facere sint omnis temporibus!"
          }
        />
        <Card
          name={"Boys and Girls Hostel"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium asperiores omnis labore iste atque ipsam beatae, sit blanditiis debitis animi provident, esse cum, maxime eaque quo dolorem laboriosam repudiandae excepturi aliquam repellat quos est! Corrupti quas dolorem perferendis adipisci cum alias molestiae quia animi suscipit! Facere sint omnis temporibus!"
          }
        />
        <Card
          name={"Herbal Garden"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium asperiores omnis labore iste atque ipsam beatae, sit blanditiis debitis animi provident, esse cum, maxime eaque quo dolorem laboriosam repudiandae excepturi aliquam repellat quos est! Corrupti quas dolorem perferendis adipisci cum alias molestiae quia animi suscipit! Facere sint omnis temporibus!"
          }
        />
        <Card
          name={"Pharmacy"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium asperiores omnis labore iste atque ipsam beatae, sit blanditiis debitis animi provident, esse cum, maxime eaque quo dolorem laboriosam repudiandae excepturi aliquam repellat quos est! Corrupti quas dolorem perferendis adipisci cum alias molestiae quia animi suscipit! Facere sint omnis temporibus!"
          }
        />
        <Card
          name={"Hospital and O.P.D"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusantium asperiores omnis labore iste atque ipsam beatae, sit blanditiis debitis animi provident, esse cum, maxime eaque quo dolorem laboriosam repudiandae excepturi aliquam repellat quos est! Corrupti quas dolorem perferendis adipisci cum alias molestiae quia animi suscipit! Facere sint omnis temporibus!"
          }
        />
      </Slider>
    </div>
  );
};

export default Facilities;
