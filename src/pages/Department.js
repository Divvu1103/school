import React from "react";
import department from '../images/department.jpg'
const Department = () => {
  return (
    <div>
      <p className="text-center underline my-10 text-4xl text-[#072a33] font-extrabold ">
        Departments
      </p>
      <div className="flex items-center justify-between mb-10 lg:mx-40 lg:flex-row flex-col mx-10">
        <p className="lg:w-[600px] mx-2">
          Department of Samhita Siddhnta & Samskruta was established in 2013,
          since then the department is growing and working for upliftment of
          Ayurveda. Vision To establish excellence in basic concepts explained
          in the Samhitas and to conduct outstanding research. Mission
          Empowering the students with the basic tools for approaching the
          science of Ayurveda in a structured manner, which shall enable them in
          understanding the contents of all the branches of Ayurveda and enable
          them to adopt it in their clinical practice. Objectives To educate the
          students to understand the fundamental concepts of Ayurveda And To
          make Samskruta as a speaking language in the campus.
        </p>
        <img
          src={department}
          className="rounded-lg"
          style={{ width: 500, height: 400 }}
        />
      </div>
    </div>
  );
};

export default Department;
