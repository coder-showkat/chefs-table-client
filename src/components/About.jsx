import React from "react";
import chef2 from "../assets/images/chef2.jpg";
import food from "../assets/images/food1.jpg";

const About = () => {
  return (
    <div className="my-20 py-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
      <div className="order-2 lg:order-1 lg:col-span-2 relative h-full min-h-[30rem]">
        <img
          src={chef2}
          alt=""
          className="rounded w-3/4 h-full object-cover absolute right-0"
        />
        <img
          src={food}
          alt=""
          className="rounded-full aspect-square object-cover border-2 absolute z-10 top-1/2 left-0 w-52"
        />
      </div>

      <div className="order-1 lg:order-2 lg:col-span-3 space-y-6">
        <h3 className="font-script text-3xl text-primary">
          About Chef's Table
        </h3>
        <p className="md:text-lg">
          Welcome to Chef's Table, the ultimate destination for food enthusiasts
          who are passionate about discovering new flavors and culinary
          techniques. Our website is a curated collection of recipes from top
          chefs around the world, featuring their signature dishes and unique
          cooking styles. Whether you're a seasoned chef or an aspiring home
          cook, Chef's Table offers something for everyone.
        </p>
        <p>
          Our team of culinary experts scours the globe to bring you the best
          recipes from the most talented chefs in the industry. From classic
          French cuisine to innovative fusion dishes, we showcase a wide range
          of cooking styles and flavors. In addition to our chef-curated
          recipes, we also offer helpful tips and techniques to help you elevate
          your cooking skills and create your own masterpieces in the kitchen.
        </p>
        <p>
          At Chef's Table, we believe that cooking is an art form, and we're
          passionate about sharing our love of food with others. Our community
          of food lovers is always growing, and we encourage you to join us on
          this exciting culinary journey. Share your own recipes, connect with
          other food enthusiasts, and discover new flavors and techniques from
          top chefs around the world.
        </p>
        <button className="btn md:btn-lg btn-primary">Join Chef's Table</button>
      </div>
    </div>
  );
};

export default About;
