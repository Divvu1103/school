/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#00142A]">
      <div className="container px-5 py-24  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-1/4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <span className="ml-3 text-lg">
            SHRI BABU SINGH DADDU JI AYURVEDIC MEDICAL COLLEGE & HOSPITAL
          </span>

          <p className="mt-2 text-sm text-white">
            Kanpur Road, Krishna Nagar Baghar - Fatehgarh, Farrukhabad Uttar
            Pradesh India - 209749
          </p>
          <div className="flex  -ml-7 sm:ml-1 gap-x-3 mt-3">
            <p className=" p-4  border border-gray-400 hover:bg-blue-700 hover:scale-95 transition ease-in rounded-lg ">
              <i class="fa-brands fa-facebook-f text-2xl"></i>
            </p>
            <p className="p-4 border border-gray-400 hover:bg-blue-700 hover:scale-95 transition ease-in rounded-lg">
              <i class="fa-sharp fa-regular fa-envelope text-2xl"></i>
            </p>
            <p className="p-4 border border-gray-400 hover:bg-blue-700 hover:scale-95 transition ease-in rounded-lg">
              <i class="fa-brands fa-instagram text-2xl"></i>
            </p>
          </div>
        </div>
        <div className=" flex flex-wrap md: -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-2/6 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white tracking-widest text-2xl font-bold mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li>
                <div className="text-white flex flex-row ">
                  {" "}
                  <i class="fa-solid fa-phone text-2xl text-[#014A83] -ml-5"></i>
                  <div className="ml-4 font-bold text-xl">Phone</div>
                </div>
              </li>
              <li>
                <a className="text-white ">+91-+91-9554964674,+91-8127942568</a>
              </li>
              <li>
                <a className="text-white ">+91-+91-9554964674,+91-8127942568</a>
              </li>
              <li>
                <div className="text-white ">
                  <i class="fa-regular fa-envelope text-2xl text-[#014A83] -ml-5"></i>
                  <div className="font-bold text-xl -ml-10">
                    sbsdaddujiaydcollege@gmail.com
                  </div>{" "}
                </div>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white tracking-widest text-2xl font-bold mb-3">
              Quick Links
            </h2>
            <div className="flex flex-row mb-10 gap-x-2">
              <div className="flex flex-col">
                <a className="text-white text-base font-bold">
                  Overview SBSDJAMC
                </a>
                <a className="text-white text-base font-bold">
                  {" "}
                  Mission & Vision
                </a>
                <a className="text-white text-base font-bold">
                  {" "}
                  Fountained Inspiration
                </a>
                <a className="text-white text-base font-bold"> Courses</a>
                <a className="text-white text-base font-bold"> Departments</a>
              </div>
              <div className="flex flex-col ">
                <a className="text-white text-base font-bold">
                  NCISM Mandatory Disclouser
                </a>
                <a className="text-white text-base font-bold"> Contact Us</a>
                <a className="text-white text-base font-bold"> Gallery</a>
                <a className="text-white text-base font-bold"> Apply Online</a>
                <a className="text-white text-base font-bold">
                  {" "}
                  Grievance Form
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white tracking-widest text-2xl font-bold mb-3">
              Important Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white  text-base font-bold ">
                  www.ayush.gov.in
                </a>
              </li>
              <li>
                <a className="text-white  text-base font-bold ">
                  www.ncismindia.orgk
                </a>
              </li>
              <li>
                <a className="text-white  text-base font-bold ">
                  www.kanpuruniversity.org
                </a>
              </li>
              <li>
                <a className="text-white  text-base font-bold ">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-bg-[#00142A] border-t-2 border-gray-500">
        <p className="mx-auto text-white text-center py-5 ">
          {" "}
          Copyright © 2023 SBSDJ Ayurvedic Medical College & Hospital. All
          Rights Reserved. Powered By SOM SOFTWARE INFOTECH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
