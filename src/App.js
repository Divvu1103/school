/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
import Faculty from "./pages/Faculty";
import NCSIM from './pages/NCSIM';
import Course from "./components/Course";
import ContactUs from "./pages/ContactUs";
import whatsapp from "../src/images/whatsapp.gif";

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
        <Route path="/yoga-for-humanity-azadi-ka-amrit-mahotsav" element={<Yoga/>} />
        <Route path="/azadi-ka-amrit-mahotsav-awareness-programme" element={<Azadi/>} />
        <Route path="/best-ayurveda-college-in-uttar-pradesh" element={<Ayurvedi/>} />
      </Routes>
      {/* <a href="www.webwhatsapp.com" target="_blank">
        <img
          src={whatsapp}
          style={{
            position: "absolute",
            width: 100,
            right: 30,
            marginTop: 300,
          }}
        />
      </a> */}

      <Footer />
    </BrowserRouter>
  );
};

export default App;
