import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-28">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
