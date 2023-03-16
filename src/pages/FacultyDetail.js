import React from "react";
import { useLocation } from "react-router-dom";

const FacultyDetail = () => {
  const location = useLocation();
  const { name, des, src, exp, mail } = location.state;
  return (
    <div className="flex flex-wrap py-2 w-11/12 justify-center gap-x-5 items-center">
      <div className="sm:w-[40vw] p-2 bg-white shadow-lg  flex flex-col items-center content-center justify-center  justify-items-center">
        <img src={src} className=" sm:w-3/4 mx-auto" alt="" />
        <h2 className="text-center text-2xl font-semibold">{name}</h2>
        <h2 className="text-center text-base">{des}</h2>
      </div>
      <div>
        {" "}
        <h2 className="text-center text-2xl font-semibold">Experience:{exp} years</h2>
        <h2 className="text-center text-2xl font-semibold">Email:{mail}</h2>
      </div>
    </div>
  );
};

export default FacultyDetail;
