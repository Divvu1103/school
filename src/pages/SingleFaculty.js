/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useLocation } from "react-router-dom";

const SingleFaculty = () => {
  const location = useLocation();
  const { name, des, src } = location.state;
  //   console.log("sattes", location.state);
  return (
    <div>
      <h3>{name}</h3>
      <img src={src} />
      <h3>{des}</h3>
    </div>
  );
};

export default SingleFaculty;
