import React from "react";
import slugify from "slugify";
import { Link } from "react-router-dom";

const FacultyCard = ({ name, src, des }) => {
  const generateSlug = (name) => {
    return slugify(name, { lower: true });
  };
  const slug = generateSlug(name);
  console.log(slug);
  return (
    <div className="w-[300px] bg-white shadow-lg p-2 flex flex-col items-center content-center justify-center  justify-items-center">
      <img src={src} className="rounded-full w-3/4 mx-auto" alt="" />
      <h2 className="text-center text-2xl font-semibold">{name}</h2>
      <h2 className="text-center text-base">{des}</h2>
      <Link to={`/faculty/${slug}`}>
        <p className="text-xl text-center my-2 ">
          <i class="fa-solid fa-envelope"></i> <br />
          Read More
        </p>
      </Link>
    </div>
  );
};

export default FacultyCard;
