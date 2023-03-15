/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
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
  const [newsToggle, setNewsToggle] = useState(false);
  const [moreToggle, setMoreToggle] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const formRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };
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
  const newsItems = [
    {
      title: "YOGA FOR HUMANITY #Azadi Ka Amrit Mahotsav",
      url: "/yoga-for-humanity-azadi-ka-amrit-mahotsav",
    },
    {
      title: "Best Ayurveda College in Uttar Pradesh",
      url: "/best-ayurveda-college-in-uttar-pradesh",
    },
    {
      title: "AZADI KA AMRIT MAHOTSAV- Awareness programme",
      url: "/azadi-ka-amrit-mahotsav-awareness-programme",
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
  const moreItems = [
    {
      title: "HMS Login",
      url: "https://majorsdsu.com/hms/login.html",
    },
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "Apply Online",
      url: "/apply",
    },
    {
      title: "Grievance Form",
      url: "/apply",
    },
  ];
  return (
    <>
      <div className="bg-[#072a33]  flex items-center justify-between px-14 py-5 header">
        <p className="text-white">ADDRESS: FATEHGARH, FARRUKHABAD-209749</p>
        <p className="text-white">EMAIL: sbsdaddujiaydcollege@gmail.com</p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faTty} className="text-white" />
          <p className="text-white ml-3">TOLL FREE: 8127942568</p>
        </p>
        <button className="flex items-center border-white py-1 px-4 bg-white">
          <FontAwesomeIcon icon={faTelegram} className="text-[#072a33]" />
          <p
            className="text-[#072a33] ml-3 font-bold"
            onClick={handleOpenModal}
          >
            APPLY NOW
          </p>
        </button>
        <button className="bg-[#FFFF00]  py-1 px-4 text-[#072a33] font-bold">
          DOWNLOAD E-BROCHURE
        </button>
        {isOpen && (
          <div className="fixed inset-0 flex items-center z-50 justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white rounded-md shadow-lg p-4 w-96">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mb-4">Apply Now</h2>{" "}
                <button
                  className="px-4 py-2 rounded-3xl bg-red-600 text-white"
                  onClick={handleCloseModal}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    Name
                  </label>
                  <input
                    className="border rounded-md px-3 py-2 w-full"
                    id="username"
                    name="username"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    E-mail
                  </label>
                  <input
                    className="border rounded-md px-3 py-2 w-full"
                    id="username"
                    name="username"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="border rounded-md px-3 py-2 w-full"
                    id="username"
                    name="username"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    Address
                  </label>
                  <input
                    className="border rounded-md px-3 py-2 w-full"
                    id="username"
                    name="username"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="border rounded-md px-3 py-2 w-full"
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>
                <button
                  className="px-4 py-2 rounded-md bg-[#133006] text-white"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
        <button
          className="mobile lg:hidden"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <p className=" text-white text-xl">
            <i class="fa-solid fa-bars"></i>
          </p>
        </button>
        {mobileNav && (
          <div className="lg:hidden transition ease-in">
            <Link
              to="/"
              className="font-semibold text-white flex items-center text-lg "
            >
              Home
            </Link>

            <ul
              className="flex flex-col"
              onMouseEnter={() => setAboutToggle(true)}
            >
              <button
                className="font-semibold text-white flex items-center text-lg "
                onClick={() => setAboutToggle(!aboutToggle)}
              >
                About
                {!aboutToggle ? (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-[#FFF000] ml-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-[#FFF000] ml-2"
                  />
                )}
              </button>
              <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-14 -ml-5 z-10">
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
                className="font-semibold text-white flex items-center text-lg "
                onClick={() => setAcademicToggle(!academicToggle)}
              >
                Academics
                {!academicToggle ? (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-[#FFF000] ml-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-[#FFF000] ml-2"
                  />
                )}
              </button>
              <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-14 -ml-5 z-10">
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
            <Link
              to="/faculty"
              className="font-semibold text-white flex items-center text-lg "
            >
              Faculty
            </Link>
            <ul className="font-semibold text-white flex items-center text-lg ">
              News & Events
              {!newsToggle ? (
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-[#FFF000] ml-2"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faAngleUp}
                  className="text-[#FFF000] ml-2"
                />
              )}
            </ul>
            <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-14 -ml-5 z-10">
              {newsToggle &&
                newsItems.map((menu, index) => (
                  <div key={index}>
                    <li className="px-7 py-2 flex justify-center items-center">
                      <Link to={menu.url}>{menu.title}</Link>
                    </li>
                    <p className="border-b-2" />
                  </div>
                ))}
            </ul>
            <ul className="font-semibold text-white flex items-center text-lg ">
              NCISM Mandatory
            </ul>
            <ul className="font-semibold text-white flex items-center text-lg ">
              Contact Us
            </ul>
            <ul
              className="flex flex-col"
              onMouseEnter={() => setMoreToggle(true)}
            >
              <button
                className="font-semibold text-white flex items-center text-lg "
                onClick={() => setMoreToggle(!moreToggle)}
              >
                More
                {!moreToggle ? (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-[#FFF000] ml-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    className="text-[#FFF000] ml-2"
                  />
                )}
              </button>
              <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-14 -ml-5 z-10">
                {moreToggle &&
                  moreItems.map((menu, index) => (
                    <div key={index}>
                      <li className="px-7 py-2 flex justify-center items-center">
                        <Link to={menu.url}>{menu.title}</Link>
                      </li>
                      <p className="border-b-2" />
                    </div>
                  ))}
              </ul>
            </ul>
          </div>
        )}
      </div>
      <nav className="bg-[#f1f1f1] border-b-2 shadow-xl px-10 py-5 flex items-center justify-between nav">
        <p className="flex items-center">
          <img src={logo} width={80} />
          <p className="text-[#072a33] text-xs w-[220px] ml-3 text-center">
            <p>SHRI BABU SINGH DADDU JI AYURVEDIC</p>
            <p>MEDICAL COLLEGE & HOSPITAL</p>
            <p className="text-white bg-[#072a33] py-1 mt-1">
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
                className="text-[#FFF000] ml-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-[#FFF000] ml-2"
              />
            )}
          </button>
          <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-14 -ml-5 z-10">
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
                className="text-[#FFF000] ml-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-[#FFF000] ml-2"
              />
            )}
          </button>
          <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-14 -ml-5 z-10">
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
        <Link
          to="/faculty"
          className="font-semibold text-[#7a7a7a] flex items-center text-lg "
        >
          Faculty
        </Link>
        <ul
          onMouseEnter={() => setNewsToggle(true)}
          className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2"
        >
          <button
            className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2"
            onClick={() => setNewsToggle(!newsToggle)}
          >
            News and Events
            {!newsToggle ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-[#FFF000] ml-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-[#FFF000] ml-2"
              />
            )}
          </button>
          <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-96 w-48 -ml-5 z-10">
            {newsToggle &&
              newsItems.map((menu, index) => (
                <div key={index}>
                  <li className="px-2 py-2 flex justify-center items-center">
                    <a href={menu.url}>{menu.title}</a>
                  </li>
                  <p className="border-b-2" />
                </div>
              ))}
          </ul>
        </ul>

        <Link
          to="/ncism-mandatory-disclouser"
          className="font-semibold text-[#7a7a7a] flex items-center text-lg "
        >
          NCISM Mandatory
        </Link>
        <Link
          to="/contactus"
          className="font-semibold text-[#7a7a7a] flex items-center text-lg "
        >
          Contact Us
        </Link>
        <ul className="flex flex-col" onMouseEnter={() => setMoreToggle(true)}>
          <button
            className="font-semibold text-[#7a7a7a] flex items-center text-lg hover:text-[#0f2441] hover:border-b-[#0f2441] hover:border-b-2"
            onClick={() => setMoreToggle(!moreToggle)}
          >
            More
            {!moreToggle ? (
              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-[#FFF000] ml-2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleUp}
                className="text-[#FFF000] ml-2"
              />
            )}
          </button>
          <ul className="flex flex-col justify-center items-center bg-[#f1f1f1] gap-y-3 absolute mt-14 -ml-5 z-10">
            {moreToggle &&
              moreItems.map((menu, index) => (
                <div key={index}>
                  <li className="px-7 py-2 flex justify-center items-center">
                    <Link to={menu.url}>{menu.title}</Link>
                  </li>
                  <p className="border-b-2" />
                </div>
              ))}
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Header;
