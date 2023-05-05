import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import loadingImg from "../assets/spinner.svg";
import { useLazyImage } from "../hooks/LazyImage";

const ChefCard = ({ chefInfo }) => {
  const [hovered, setHovered] = useState(false);
  const { id, name, image, experience, likes, recipes } = chefInfo;
  const { imageRef, shouldLoadImage } = useLazyImage();
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className="aspect-[19/20] w-full rounded overflow-hidden relative"
      >
        <div
          className={`absolute w-full h-full z-10 flex justify-center items-center bg-base-100/80 duration-500 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-3xl font-playfair text-white">{name}</h1>
            <p>Years of Experience: {experience}</p>
            <p>Numbers of recipes: {recipes.length}</p>
            <p className="flex">
              <BiLike className="text-2xl mr-2" /> :{" "}
              <span className="ml-2">{likes}</span>
            </p>
            <button
              onClick={() => navigate(`/recipes/${name.split(" ").join("-")}`)}
              className="btn btn-primary"
            >
              View Recipes
            </button>
          </div>
        </div>

        <img
          ref={imageRef}
          src={shouldLoadImage ? image : loadingImg}
          alt={name}
          className="w-full h-full object-cover"
        />
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
