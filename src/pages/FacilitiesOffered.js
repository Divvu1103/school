import React from "react";
import audi from "../images/audi.jpeg";

const FacilitiesOffered = () => {
  return (
    <div>
      <div>
        <p className="text-center underline my-10 text-4xl text-[#072a33] font-extrabold ">
          Facilities
        </p>
        <div className="flex items-center justify-between mb-10 lg:mx-40 lg:flex-row flex-col mx-10">
          <p className="lg:w-[600px] mx-2">
            Our fully air conditioned auditorium has a capacity for 300 people,
            with projector facility and speakers sound system. Monthly seminars
            and cultural activities are conducted here on regular basis.
          </p>
          <img
            src={audi}
            className="rounded-lg"
            style={{ width: 500, height: 400 }}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesOffered;
