import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row my-5 items-center mx-52">
      <div className="w-[200px]">
        <img
          src="https://majorsdsu.com/assets/img/Untitled-1.png"
          className=""
          alt=""
        />
        <p className="bg-[#062b33] text-white mt-2 p-2">
          Dr. Anar Singh Yadav (Chairman) M.Sc. (Physics), Phd., LL.B., B.Ed.
        </p>
      </div>
      <div className="mx-2">
        <h1 className="text-black font-bold text-3xl">Introduction</h1>
        <p>
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
      <div className="w-[200px]">
        <img src="https://majorsdsu.com/assets/img/principal-img.jpeg" alt="" />
        <p className="bg-[#062b33] text-white mt-2 p-2">
          Dr. A.K. Batham (Principal) B.A.M.S., MD (Kayachikitsa)
        </p>
      </div>
    </div>
  );
};

export default Hero;
