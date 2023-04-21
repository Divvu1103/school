import React from "react";
import asy from '../images/asy.png'
import akb from '../images/akb.jpeg'

const Hero = () => {
  return (
    <div className="flex lg:flex-row my-5 gap-x-4 items-center mid lg:justify-between lg:mx-44 flex-col mx-10">
      <div className="lg:w-[200px]">
        <img
          src={asy}
          className=""
          alt=""
        />
        <p className="bg-[#072a33] text-white mt-2 p-2  rounded-lg">
          Dr. Anar Singh Yadav (Chairman) M.Sc. (Physics), Phd., LL.B., B.Ed.
        </p>
      </div>
      <div className="mx-2">
        <h1 className="text-[#133006] font-bold text-3xl overflow-hidden underline text-center">
          Introduction
        </h1>
        <p className="midText text-sm sm:text-base lg:w-[600px] mt-4">
          Shri Babu Singh Daddu Ji Ayurvedic Medical College & Hospital Founded
          by Shri Babu Singh Daddu Ji Educational Trust is situated at 8th
          milestone from fatehgarh city at farrukhabad kanpur state highway the
          college campus provides well accommodation facilities both ladies and
          gents seperately. The are herbal garden is being maintained which
          facilities the academic needs of student the huge library has in its
          store the medical books with around 7500 books and 350 titles. All the
          department are well equipped with chart models and as per the body
          norms. The aim of the institute is to make the institute a prime
          educational center of region so as to cater rural areas for the poor
          and humble people of india.
        </p>
      </div>
      <div className="lg:w-[200px]">
        <img src={akb} alt="" />
        <p className="bg-[#072a33] text-white mt-2 p-2 rounded-lg">
          Dr. A.K. Batham (Principal) B.A.M.S., MD (Kayachikitsa)
        </p>
      </div>
    </div>
  );
};

export default Hero;
