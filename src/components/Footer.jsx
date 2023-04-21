/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#072a33]">
      <div className="container px-5  py-8 sm:py-24  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-auto sm:w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <span className="ml-3 text-lg">
            SHRI BABU SINGH DADDU JI AYURVEDIC MEDICAL COLLEGE & HOSPITAL
          </span>

          <p className="mt-2 text-sm text-white">
            Kanpur Road, Krishna Nagar Baghar - Fatehgarh, Farrukhabad Uttar
            Pradesh India - 209749
          </p>
          <div className="flex gap-x-3 mt-1">
            <p className=" p-4    border border-gray-400 hover:bg-[#fff000] hover:scale-95 transition ease-in rounded-lg ">
              {" "}
              <a
                href="https://www.facebook.com/sbsdjaydmch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-facebook-f text-2xl"></i>
              </a>
            </p>
            <p className="p-4   border border-gray-400 hover:bg-[#fff000] hover:scale-95 transition ease-in rounded-lg">
            <a href="mailto:sbsdaddujiaydcollege@gmail.com">
              <i class="fa-sharp fa-regular fa-envelope text-2xl"></i>
              </a>
            </p>
            <p className="p-4   border border-gray-400 hover:bg-[#fff000] hover:scale-95 transition ease-in rounded-lg">
            <a href="https://www.youtube.com/watch?v=hCSaSHqqdCU" target="_blank" rel="noopener noreferrer"></a>
            <i class="fa-brands fa-youtube text-2xl"></i>

            </p>
          </div>
        </div>
        <div className=" flex flex-wrap md: -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 px-3 md:w-1/2 w-full">
            <h2 className="title-font  text-white tracking-widest text-2xl font-bold mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li>
                <div className="text-white flex flex-row ">
                  {" "}
                  <i class="fa-solid fa-phone text-2xl text-[#fff000]"></i>
                  <div className="ml-4 font-bold text-xl">Phone</div>
                </div>
              </li>
              <li>
                <a className="text-white " href="tel:+919554964674">
                  +91-+91-9554964674,+91-8127942568
                </a>
              </li>
              <li>
                <a className="text-white " href="tel:+919554964674">
                  +91-+91-9554964674,+91-8127942568
                </a>
              </li>
              <li>
                <div className="text-white ">
                  <i class="fa-regular fa-envelope text-2xl text-[#fff000]"></i>
                  <div className="font-bold text-base sm:text-base">
                    <a href="mailto:sbsdaddujiaydcollege@gmail.com">
                      sbsdaddujiaydcollege@gmail.com
                    </a>
                  </div>{" "}
                </div>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 px-3 md:w-1/2 w-full ">
            <h2 className="title-font  text-white tracking-widest text-2xl font-bold mb-3">
              Quick Links
            </h2>
            <div className="flex flex-row mb-10 gap-x-2">
              <div className="flex flex-col">
                <a className="text-white text-base font-bold">
                  <Link to="/overview">Overview SBSDJAMC</Link>
                </a>
                <a className="text-white text-base font-bold">
                  {" "}
                  <Link to="/vision">Mission & Vision</Link>
                </a>
                <a className="text-white text-base font-bold">
                  {" "}
                  <Link to="/inspiration">Fountained Inspiration</Link>
                </a>
                <a className="text-white text-base font-bold">
                  {" "}
                  <Link to="/courses">Courses</Link>
                </a>
                <a className="text-white text-base font-bold"> Departments</a>
              </div>
              <div className="flex flex-col ">
                <a className="text-white text-base font-bold">
                  <Link to="/ncism-mandatory-disclouser">
                    NCISM Mandatory Disclouser
                  </Link>
                </a>
                <a className="text-white text-base font-bold">
                  <Link to="/contactus">Contact Us</Link>
                </a>
                <a className="text-white text-base font-bold"> Gallery</a>
                <a className="text-white text-base font-bold"> Apply Online</a>
                <a className="text-white text-base font-bold">
                  {" "}
                  Grievance Form
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font  text-white tracking-widest text-2xl font-bold mb-3">
              Important Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-white  text-base font-bold "
                  target={"_blank"}
                  href="https://www.ayush.gov.in/"
                >
                  www.ayush.gov.in
                </a>
              </li>
              <li>
                <a
                  className="text-white  text-base font-bold "
                  target={"_blank"}
                  href="https://ncismindia.org/"
                >
                  www.ncismindia.orgk
                </a>
              </li>
              <li>
                <a
                  className="text-white  text-base font-bold "
                  target={"_blank"}
                  href="http://www.kanpuruniversity.org/"
                >
                  www.kanpuruniversity.org
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full"> 
          <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5357.676838155396!2d79.61932979750057!3d27.29464780933141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3bb6d36d4797%3A0x8308704212936dd!2sShri%20Babu%20Singh%20Daddu%20Ji%20Ayurvedic%20Medical%20College%20and%20Hospital%20-%20Ayurvedic%20College%20Farrukhabad!5e0!3m2!1sen!2sin!4v1678903070110!5m2!1sen!2sin"
              }
              width={"100%"}
              height={"100%"}
              allowfullscreen=""
              loading={"lazy"}
              referrerpolicy={"no-referrer-when-downgrade"}
              ></iframe>
              </div>
        </div>
      </div>
      <div className="bg-bg-[#00142A] border-t-2 border-gray-500">
        <p className="mx-auto text-white text-sm sm:text-base text-center py-5 ">
          {" "}
          Copyright © 2023 SBSDJ Ayurvedic Medical College & Hospital. All
          Rights Reserved. Powered By NTechzy Pvt Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
