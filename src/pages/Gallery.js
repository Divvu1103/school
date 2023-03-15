/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import akb from "../images/akb.jpeg";

import gallery1 from '../images/gallery1.jpeg'
import gallery2 from '../images/gallery2.jpeg'
import gallery3 from '../images/gallery3.jpeg'
import gallery4 from '../images/gallery4.jpeg'
import gallery5 from '../images/gallery5.jpeg'
import gallery6 from '../images/gallery6.jpeg'
import gallery7 from '../images/gallery7.jpeg'
import gallery8 from '../images/gallery8.jpeg'

const Gallery = () => {
  return (
    <div className="bg-[#f1f1f1] p-4">
      <p className="text-center my-10 text-4xl underline text-[#072a33] font-extrabold overflow-hidden ">
        Gallery
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
        <img src={gallery1} width={300} />
        <img src={gallery2} width={300} />
        <img src={gallery3} width={300} />
        <img src={gallery4} width={300} />
        <img src={gallery5} width={300} />
        <img src={gallery6} width={300} />
        <img src={gallery7} width={300} />
        <img src={gallery8} width={300} />
        <img src={gallery1} width={300} />
        <img src={gallery2} width={300} />
        <img src={gallery3} width={300} />
        <img src={gallery4} width={300} />
        <img src={gallery5} width={300} />
        <img src={gallery6} width={300} />
        <img src={gallery7} width={300} />
      </div>
    </div>
  );
};

export default Gallery;
