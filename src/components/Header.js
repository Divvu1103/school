/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTty,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [aboutToggle, setAboutToggle] = useState(false);
  const [academicToggle, setAcademicToggle] = useState(false);
  const aboutItems = [
    {
      title: "Overview",
      url: "/overview",
    },
    {
      title: " Mission and Vision",
      url: "/vision",
    },
    {
      title: "Fountained Inspiration",
      url: "/inspiration",
    },
    {
      title: "Leadership",
      url: "/leadership",
    },
  ];
  const academicItems = [
    {
      title: "Courses",
      url: "/courses",
    },
    {
      title: "Departments",
      url: "/",
    },
    {
      title: "Facilities",
      url: "/",
    },
  ];
  return (
    <>
      <div className="bg-[#062b33] mt-7 flex items-center justify-between px-14 py-5">
        <p className="text-white">ADDRESS: FATEHGARH, FARRUKHABAD-209749</p>
        <p className="text-white">EMAIL: sbsdaddujiaydcollege@gmail.com</p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faTty} className="text-white" />
          <p className="text-white ml-3">TOLL FREE: 8127942568</p>
        </p>
        <button className="flex items-center border-white py-1 px-4 bg-white">
          <FontAwesomeIcon icon={faTelegram} className="text-[#062b33]" />
          <p className="text-[#062b33] ml-3 font-bold">APPLY NOW</p>
        </button>
        <button className="bg-yellow-300 py-1 px-4 text-[#062b33] font-bold">
          DOWNLOAD E-BROCHURE
        </button>
      </div>
      <nav className="bg-white border-b-2 shadow-xl px-10 py-5 flex items-center justify-between">
        <p className="flex items-center">
          <img src={logo} width={80} />
          <p className="text-[#062b33] text-xs w-[220px] ml-3 text-center">
            <p>SHRI BABU SINGH DADDU JI AYURVEDIC</p>
            <p>MEDICAL COLLEGE & HOSPITAL</p>
            <p className="text-white bg-[#062b33] py-1 mt-1">
              BAGHAR-FATEHGARH, FARRUKHABAD
            </p>
          </p>
        </p>
        <Link
          to="/"
          className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2"
        >
          Home
        </Link>
        <ul className="flex flex-col" onMouseEnter={() => setAboutToggle(true)}>
          <button
            className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2"
            onClick={() => setAboutToggle(!aboutToggle)}
          >
            About
            {!aboutToggle ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-yellow-300 ml-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-yellow-300 ml-2"
              />
            )}
          </button>
          <ul className="flex flex-col justify-center items-center bg-white gap-y-3 absolute mt-14 -ml-5 z-10">
            {aboutToggle &&
              aboutItems.map((menu, index) => (
                <div key={index}>
                  <li className="px-7 py-2 flex justify-center items-center">
                    <Link to={menu.url}>{menu.title}</Link>
                  </li>
                  <p className="border-b-2" />
                </div>
              ))}
          </ul>
        </ul>
        <ul
          className="flex flex-col"
          onMouseEnter={() => setAcademicToggle(true)}
        >
          <button
            className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2"
            onClick={() => setAcademicToggle(!academicToggle)}
          >
            Academics
            {!academicToggle ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-yellow-300 ml-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-yellow-300 ml-2"
              />
            )}
          </button>
          <ul className="flex flex-col justify-center items-center bg-white gap-y-3 absolute mt-14 -ml-5 z-10">
            {academicToggle &&
              academicItems.map((menu, index) => (
                <div key={index}>
                  <li className="px-7 py-2 flex justify-center items-center">
                    <a href={menu.url}>{menu.title}</a>
                  </li>
                  <p className="border-b-2" />
                </div>
              ))}
          </ul>
        </ul>
        <ul className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          Faculty
        </ul>
        <ul className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          News & Events
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </ul>
        <ul className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          NCISM Mandatory
        </ul>
        <ul className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          Contact Us
        </ul>
        <ul className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          More
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </ul>
      </nav>
    </>
  );
};

export default Header;
