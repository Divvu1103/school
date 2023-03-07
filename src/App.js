/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Facilities from "./components/Facilities";
import Updates from "./components/Updates";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Overview from "./pages/Overview";
import Vision from "./pages/Vision";
import Inspiration from "./pages/Inspiration";
import Leadership from "./pages/Leadership";
import Courses from './pages/Courses'
import whatsapp from "../src/images/whatsapp.gif";

const Home = () => {
  return (
    <>
      <Carousel />
      <Hero />
      <Mission />
      <Facilities />
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
      </Routes>
      <a href="www.webwhatsapp.com" target="_blank">
        <img
          src={whatsapp}
          style={{
            position: "absolute",
            width: 100,
            right: 30,
            marginTop: 300,
          }}
        />
      </a>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
