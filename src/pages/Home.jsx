import React from "react";
import About from "../components/About";
import ChefProfiles from "../components/ChefProfiles";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="pb-12">
      <div className="pt-32 md:pt-28 bg-gradient-to-b from-black/30 to-transparent">
        <Hero />
      </div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <About />
        <ChefProfiles />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
