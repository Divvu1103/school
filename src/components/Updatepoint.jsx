import React from "react";

const Updatepoint = ({ name }) => {
  return (
    <div className="text-blue-700 p-2 pb-3 font-semibold border-b-4 border-black">
      <span className="font-extrabold text-blue-800 mx-2">
        <i className="fa-solid fa-arrow-right "></i>
      </span>
      {name}
    </div>
  );
};

export default Updatepoint;
