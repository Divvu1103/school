/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import akb from "../images/akb.jpeg";

const Gallery = () => {
  return (
    <div className="bg-[#f1f1f1] p-4">
      <p className="text-center my-10 text-4xl underline text-[#072a33] font-extrabold overflow-hidden ">
        Faculty
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
        <img src={akb} width={300} />
      </div>
    </div>
  );
};

export default Gallery;
