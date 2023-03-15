import React from "react";

const Courses = () => {
  return (
    <div>
      <p className="text-center my-10 text-4xl text-[#072a33] font-extrabold ">
        B.A.M.S.
      </p>
      <div className="flex items-center flex-col justify-center mb-10 mx-auto w-full">
        <p className="w-11/12 mx-auto sm :mx-0 lg:w-[600px]">
          Bachelor of Ayurveda Medical & Surgery (BAMS) is a five-year
          six-months undergraduate program that offers an integrated course that
          covers a wide range of subjects of traditional Ayurveda and modern
          medical systems. The five and half a year-long course also includes
          the one-year mandatory internship. BAMS covers a wide range of courses
          such as physiology, modern anatomy, pharmacology, medicine, ENT,
          forensic medicine, rules and principles of surgery, standards of the
          solution, legal drug, herbal science, with different subjects of
          Ayurveda. Students aspiring for a career in Bachelor of Ayurveda must
          have great power of concentration and determination as the courses
          include a lot of reading of both modern science and ancient Ayurveda
          texts. Ayurveda is gaining a lot of popularity not only in India but
          in the Western World because of natural healing properties with
          minimum side-effects as these medicines are prepared from natural
          herbs, vegetables, and plants.
        </p>
        <p className="text-2xl font-semibold">BAMS Course Highlights</p>
        <div
          className="flex flex-row flex-wrap gap-y-3 justify-center w-11/12 sm:w-1/2
         items-center"
        >
          <p className="text-1xl font-semibold basis-1/2">Levels</p>
          <p className="text-1xl  basis-1/2">B.A.M.S. - UG (Undergraduate)</p>
          <p className="text-1xl font-semibold basis-1/2">Duration</p>
          <p className="text-1xl  basis-1/2">
            4 Years 6 Months + 1 Year Internship (Hospital Training)
          </p>
          <p className="text-1xl font-semibold basis-1/2">
            Minimum Academic Requirement
          </p>
          <p className="text-1xl  basis-1/2">
            {" "}
            10+2 (Science Stream) + NEET (Qualified)
          </p>
          <p className="text-1xl font-semibold basis-1/2">
            Subject Requirement
          </p>
          <p className="text-1xl  basis-1/2">Physics, Chemistry and Biology</p>
          <p className="text-1xl font-semibold basis-1/2">
            Minimum Aggregate Score Requirement
          </p>
          <p className="text-1xl  basis-1/2">50% or More</p>
          <p className="text-1xl font-semibold basis-1/2">Exam Type</p>
          <p className="text-1xl  basis-1/2"> 4 Phase exams</p>
          <p className="text-1xl font-semibold basis-1/2">
            Admission/ Selection Process
          </p>
          <p className="text-1xl  basis-1/2">Entrance Exam Based</p>
          <p className="text-1xl font-semibold basis-1/2">Exams Accepted</p>
          <p className="text-1xl  basis-1/2">NEET</p>
          <p className="text-1xl font-semibold basis-1/2">Average Course Fee</p>
          <p className="text-1xl  basis-1/2">2,52,900 Per Anum</p>
        </div>
        <div className="w-11/12 mx-auto sm:w-2/3 my-2">
          <p className="text-2xl font-semibold">
            Bachelor of Ayurveda Medical and Surgery (BAMS) Eligibility Criteria
          </p>
          <p className="text-1xl  basis-1/2 leading-loose">
            {" "}
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
            Minimum Educational Qualification Required: 10+2 or equivalent
            examination with Science (Physics, <br /> Chemistry and Biology) as
            mandatory subjects. <br />
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
            Minimum Marks Required: 50% to 60%, varies from college to college.{" "}
            <br />
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
            Age Limit: As per Government norms.
          </p>
          <p className="text-2xl font-semibold">BAMS Admission Process</p>
          <p className="text-1xl  basis-1/2 leading-loose">
            {" "}
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
            BAMS admissions in India are done on the basis of entrance exams.{" "}
            <br />
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
            After the results are out, the conducting authority of the
            examinations prepares a merit list, basis which counselling process
            is conducted.
            <br />
            <i class="fa-sharp fa-solid fa-arrow-right"></i>
            Candidates who make it in the counselling process are allocated
            seats for BAMS course at different colleges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
