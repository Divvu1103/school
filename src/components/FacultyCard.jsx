import React from "react";

const FacultyCard = ({ name, src, des }) => {
  return (
    <div className="w-[300px] bg-white p-2 flex flex-col items-center content-center justify-center  justify-items-center">
      <img src={src} className="rounded-full w-3/4 mx-auto" alt="" />
      <h2 className="text-center text-2xl font-semibold">{name}</h2>
      <h2 className="text-center text-base">{des}</h2>
    </div>
  );
};

export default FacultyCard;
