/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import banner2 from "../images/banner2.jpeg";

const Vision = () => {
  return (
    <div>
      <p className="text-center my-10 text-4xl text-[#072a33] font-extrabold ">
        Vision
      </p>
      <div className="flex items-center justify-between mb-10 mx-40">
        <p className="w-[600px]">
          The chief objective if this Hospital and Institute is to provide
          adequate care. Treatment and education to its patients and student.
          Its principal product is medical surgical and nursing service to the
          institute is committed it provide quality education and health service
          without any discrimination to all almost all specialities are
          providing service in the outpatient deptt. (OPD) and admission is done
          if necessary casualty & Emergency function round the college is
          committed to obtain the highest academic place amoung all the
          ayurvedic medical college in the country by enriching the inquisitive
          minds of its student with the latest research findings and most up to
          date and advanced scientific knowlwdge and information on store
          unturned in making itself one of the finest and the most advanced
          ayurvedic medical college of the world.
        </p>
        <img src={banner2} style={{ width: 500, height: 400 }} />
      </div>
    </div>
  );
};

export default Vision;
