import React from "react";

const ContactUs = () => {
  return (
    <div className=" p-4">
      <p className="text-center overflow-hidden my-10 text-4xl underline text-[#072a33] font-extrabold ">
        Contact Us
      </p>
      <div className="flex flex-wrap gap-x-5  gap-y-3 items-center content-center place-content-center w-11/12 ">
        <div className="flex border sm:w-2/5 border-slate-300 flex-col gap-y-3">
          <p className="bg-slate-300 p-2">
            Admission : <i class="fa-solid fa-phone"></i>+91-9554964674
          </p>
          <p className="p-2">
            Admission Whatsapp Number :
            <a
              href="https://wa.me/919554964674"
              className="text-blue-600 mx-2"
              target={"_blank"}
            >
              <i class="fa-brands fa-whatsapp"></i> +91-9554964674
            </a>
          </p>
          <p className="bg-slate-300 p-2">
            Reception : <i class="fa-solid fa-phone"></i> +91-9554964674
          </p>
          <p className="p-2">
            Email Us :<i class="fa-light fa-envelope"></i>{" "}
            sbsdaddujiaydcollege@gmail.com
          </p>
        </div>
        <div className="flex sm:w-2/5 gap-y-4 flex-col">
          <div className="bg-[#f1f1f1] p-3 ">
            <p className="text-2xl fontsemibold">City Office Address</p>
            <p>Kanpur Road, Krishna Nagar Baghar-Fatehgarh,</p>
            <p>Farrukhabad Uttar Pradesh India - 209749</p>
          </div>
          <div className="bg-[#f1f1f1] p-3 ">
          <p className="text-2xl fontsemibold">Main Campus Address</p>
            <p >Kanpur Road, Krishna Nagar Baghar-Fatehgarh,</p>
            <p>Farrukhabad Uttar Pradesh India - 209749</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
