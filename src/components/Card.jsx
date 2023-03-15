import React, { useState } from "react";

const Card = ({ name, content }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col  sm:h-auto sm:w-[30vw] rounded-lg py-5 lg:px-10 px-3 bg-white shadow-lg mx-3 transition duration-500 ease-in-out border-gray-200 border-2"
      style={{ backgroundColor: hover && "#072a33" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2
        className="text-center text-[#072a33] text-2xl font-bold transition duration-500 ease-in-out"
        style={{ color: hover && "white " }}
      >
        {name}
      </h2>
      <p className="text-black mt-3" style={{ color: hover && "white" }}>
        {content}
      </p>
    </div>
  );
};

export default Card;
