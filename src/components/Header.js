/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTty, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.jpeg";

const Header = () => {
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
      <div className="bg-white border-b-2 shadow-xl px-10 py-5 flex items-center justify-between">
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
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          Home
        </button>
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          About
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </button>
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          Academics
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </button>
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          Faculty
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </button>
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          News & Events
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </button>
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          NCISM Mandatory
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </button>
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          Contact Us
        </button>
        <button className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2">
          More
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-yellow-300 ml-2"
          />
        </button>
      </div>
    </>
  );
};

export default Header;
