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
  };
  return (
    <div>
      <h1 className="text-center text-[#062b33] font-bold text-3xl my-10">
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
