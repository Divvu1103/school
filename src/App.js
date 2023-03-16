/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./pages/Department";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Azadi from "./pages/Azadi";
import Facilities from "./components/Facilities";
import Ayurvedi from "./pages/Ayurvedi";
import Updates from "./components/Updates";
import Yoga from "./pages/Yoga";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Overview from "./pages/Overview";
import Vision from "./pages/Vision";
import Inspiration from "./pages/Inspiration";
import Leadership from "./pages/Leadership";
import Courses from "./pages/Courses";
import FacilitiesOffered from "./pages/FacilitiesOffered";
import Faculty from "./pages/Faculty";
import NCSIM from "./pages/NCSIM";
import Course from "./components/Course";
import ContactUs from "./pages/ContactUs";
import whatsapp from "../src/images/whatsapp.gif";
import Gallery from "./pages/Gallery";
import Apply from "./pages/Apply";
import SingleFaculty from "./pages/SingleFaculty";

const Home = () => {
  return (
    <>
      <Carousel />
      <Hero />
      <Mission />
      <Facilities />
      <Course />
      <Updates />
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ncism-mandatory-disclouser" element={<NCSIM />} />
        <Route path="/facilities" element={<FacilitiesOffered />} />
        <Route path="/department" element={<Department />} />
        <Route
          path="/yoga-for-humanity-azadi-ka-amrit-mahotsav"
          element={<Yoga />}
        />
        <Route
          path="/azadi-ka-amrit-mahotsav-awareness-programme"
          element={<Azadi />}
        />
        <Route
          path="/best-ayurveda-college-in-uttar-pradesh"
          element={<Ayurvedi />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/faculty/:id" element={<SingleFaculty />} />
      </Routes>
      <a href="https://wa.me/919554964674" target="_blank">
        <p className=" px-3 py-2 text-4xl rounded-full text-white bg-[#4DC247] fixed bottom-4 right-4">
          <i class="fa-brands fa-whatsapp"></i>
        </p>
      </a>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
