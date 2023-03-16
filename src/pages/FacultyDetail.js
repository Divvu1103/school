import React from "react";
import { useLocation } from "react-router-dom";

const FacultyDetail = () => {
  const location = useLocation();
  const { name, des, src } = location.state;
  return (
    <div className="w-[300px] bg-white shadow-lg p-2 flex flex-col items-center content-center justify-center  justify-items-center">
      <img src={src} className="rounded-full w-3/4 mx-auto" alt="" />
      <h2 className="text-center text-2xl font-semibold">{name}</h2>
      <h2 className="text-center text-base">{des}</h2>
    </div>
  );
};

export default FacultyDetail;
