import React from "react";
import About from "./About";
import Carousel from "./Carousel";
import Products from "./Products";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <Products />
    </>
  );
};

export default Home;
