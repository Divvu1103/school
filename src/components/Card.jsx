import React, { useState } from "react";

const Card = ({ name, content }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col  sm:w-[30vw] rounded-lg py-5 px-10 bg-white shadow-lg border-gray-200 border-2"
      style={{ backgroundColor: hover && "#014b92" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2
        className="text-center text-blue-500 text-2xl font-bold"
        style={{ color: hover && "white" }}
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
