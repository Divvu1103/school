import React from "react";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Facilities from './components/Facilities';
const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Hero />
      <Mission/>
      <Facilities/>
      <Footer />
    </>
  );
};

export default App;
