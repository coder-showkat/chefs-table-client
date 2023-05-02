import React, { useState } from "react";
import { BiLike } from "react-icons/bi";

const ChefCard = ({ chefInfo }) => {
  const [hovered, setHovered] = useState(false);
  const { id, name, image, experience, likes, numRecipe } = chefInfo;
  return (
    <div className="space-y-4">
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className="aspect-[19/20] w-full rounded-[20%] overflow-hidden relative"
      >
        <div
          className={`absolute w-full h-full z-10 flex justify-center items-center bg-base-100/80 duration-500 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-3xl font-playfair text-white">{name}</h1>
            <p>Years of Experience: {experience}</p>
            <p>Numbers of recipes: {numRecipe}</p>
            <p className="flex">
              <BiLike className="text-2xl mr-2" /> :{" "}
              <span className="ml-2">{likes}</span>
            </p>
            <button className="btn btn-primary">View Recipes</button>
          </div>
        </div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h1
        className={`text-3xl font-playfair text-white text-center duration-500 ${
          hovered ? "scale-0" : "scale-100"
        }`}
      >
        {name}
      </h1>
    </div>
  );
};

export default ChefCard;
