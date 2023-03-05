import React from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Facilities from "./components/Facilities";
import Updates from "./components/Updates";
import ReactWhatsapp from "react-whatsapp";
const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Hero />
      <Mission />
      <Facilities />
      <Updates />
      <Footer />
      <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
    </>
  );
};

export default App;
