import React from "react";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <div className="relative aspect-[19/10]">
      {/* text */}
      <div className="max-w-xl 2xl:max-w-3xl w-3/4 h-full relative z-20 flex flex-col justify-center space-y-4 md:space-y-8">
        <h1 className="text-white font-playfair text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl">
          Explore the <br /> World of Culinary Delights
        </h1>
        <h4 className="md:text-lg">
          Discover the Best Recipes and Meet Renowned Chefs
        </h4>
        <button className="btn md:btn-lg btn-primary w-fit">Get Started</button>
      </div>

      {/* image */}
      <div className="w-1/2 absolute top-0 right-0 h-full rounded-[20%] overflow-hidden">
        <img src={banner} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
