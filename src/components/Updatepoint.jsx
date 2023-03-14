import React from "react";

const Updatepoint = ({ name }) => {
  return (
    <div className="text-[#fff000] w-11/12 sm:w-full  sm:p-2 sm:pb-3  font-medium sm:font-semibold border-b-4 border-[#fff000]">
      <span className="font-extrabold text-[#fff000] mx-2">
        <i className="fa-solid fa-arrow-right "></i>
      </span>
      {name}
    </div>
  );
};

export default Updatepoint;
