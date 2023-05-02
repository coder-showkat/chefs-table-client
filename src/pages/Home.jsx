import React from "react";
import About from "../components/About";
import ChefProfiles from "../components/ChefProfiles";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-12">
      <Hero />
      <About />
      <ChefProfiles />
      <Testimonials />
    </div>
  );
};

export default Home;
