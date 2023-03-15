import React from "react";

const ContactUs = () => {
  return (
    <div className=" p-4">
      <p className="text-center overflow-hidden my-10 text-4xl underline text-[#072a33] font-extrabold ">
        Contact Us
      </p>
      <div className="flex flex-wrap  gap-y-3  gap-x-5 place-content-center w-[99vw]">
        <div className="flex border h-[38vh]  border-slate-300  flex-col">
          <p className="bg-slate-200 p-4 hover:bg-slate-300">
            Admission : <i class="fa-solid fa-phone"></i>+91-9554964674
          </p>
          <p className="p-4 hover:bg-slate-300">
            Admission Whatsapp Number :
            <a
              href="https://wa.me/919554964674"
              className="text-blue-600 mx-2"
              target={"_blank"}
            >
              <i class="fa-brands fa-whatsapp"></i> +91-9554964674
            </a>
          </p>
          <p className="bg-slate-200 p-4 hover:bg-slate-300">
            Reception : <i class="fa-solid fa-phone"></i> +91-9554964674
          </p>
          <p className="p-2 hover:bg-slate-300">
            Email Us :<i class="fa-light fa-envelope"></i>{" "}
            sbsdaddujiaydcollege@gmail.com
          </p>
        </div>
        <div className="flex w-11/12 sm:w-2/5 gap-y-4 flex-col">
          <div className="bg-[#f1f1f1] p-3 flex">
            <div>
              <p className="text-2xl fontsemibold ">City Office Address</p>
              <p>Kanpur Road, Krishna Nagar Baghar-Fatehgarh,</p>
              <p>Farrukhabad Uttar Pradesh India - 209749</p>
            </div>
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5357.676838155396!2d79.61932979750057!3d27.29464780933141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3bb6d36d4797%3A0x8308704212936dd!2sShri%20Babu%20Singh%20Daddu%20Ji%20Ayurvedic%20Medical%20College%20and%20Hospital%20-%20Ayurvedic%20College%20Farrukhabad!5e0!3m2!1sen!2sin!4v1678903070110!5m2!1sen!2sin"
              }
              width={"40%"}
              height={"85%"}
              allowfullscreen=""
              loading={"lazy"}
              referrerpolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
          <div className="bg-[#f1f1f1] p-3  flex">
            <div>
              <p className="text-2xl fontsemibold">Main Campus Address</p>
              <p>Kanpur Road, Krishna Nagar Baghar-Fatehgarh,</p>
              <p>Farrukhabad Uttar Pradesh India - 209749</p>
            </div>
            <iframe
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5357.676838155396!2d79.61932979750057!3d27.29464780933141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3bb6d36d4797%3A0x8308704212936dd!2sShri%20Babu%20Singh%20Daddu%20Ji%20Ayurvedic%20Medical%20College%20and%20Hospital%20-%20Ayurvedic%20College%20Farrukhabad!5e0!3m2!1sen!2sin!4v1678903070110!5m2!1sen!2sin"
              }
              width={"40%"}
              height={"85%"}
              allowfullscreen=""
              loading={"lazy"}
              referrerpolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
