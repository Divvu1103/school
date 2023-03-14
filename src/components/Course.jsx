import React from "react";

const Course = () => {
  return (
    <div>
      <h1 className="text-center text-[#062b33] font-bold text-3xl my-10 overflow-hidden">
        Top Courses
      </h1>
      <div className="flex   w-full sm:w-[80vw] mx-auto">
        <div className="bg-slate-100  p-2 sm:p-9 text-xl text-center mx-auto hover:bg-yellow-300 hover:cursor-pointer hover:text-slate-100  hover:from-g transition duration-500 ease-in-out">
          <i class="fa-solid fa-graduation-cap"></i>
          <p>B.A.M.S</p>
        </div>
        <div className="bg-slate-100  p-2 sm:p-9 text-xl text-center mx-auto hover:bg-yellow-300 hover:cursor-pointer hover:text-slate-100  hover:from-g transition duration-500 ease-in-out">
          <i class="fa-solid fa-graduation-cap"></i>
          <p>Doctor Of Medicine</p>
        </div>
        <div className="bg-slate-100  p-2 sm:p-9 text-xl text-center mx-auto hover:bg-yellow-300 hover:cursor-pointer hover:text-slate-100  hover:from-g transition duration-500 ease-in-out">
          <i class="fa-solid fa-graduation-cap"></i>
          <p>Master Of Surgery</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
