import React, { useContext } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import spinnerImg from "../assets/Spinner.svg";
import { useLazyImage } from "../hooks/LazyImage";
import { FavoriteRecipeContext } from "../providers/FavoriteRecipeProvider";

const RecipeCard = ({
  chefInfo,
  recipe,
  setScale,
  selectedRecipe,
  setSelectedRecipe,
}) => {
  const { imageRef, shouldLoadImage } = useLazyImage();
  const { favoriteRecipe, addToFavorite } = useContext(FavoriteRecipeContext);
  return (
    <div className="card w-full bg-gradient-to-br to-white/10 from-base-100 hover:to-base-100 hover:from-white/10 shadow-xl shadow-primary/10">
      <div className="card-body">
        <img
          onClick={() => {
            if (recipe.id !== selectedRecipe) {
              setScale(0);
              setTimeout(() => {
                setSelectedRecipe(recipe.id);
                setScale(100);
              }, 600);
            }
          }}
          ref={imageRef}
          src={shouldLoadImage ? recipe.img : spinnerImg}
          className="w-full aspect-square object-cover rounded-lg cursor-pointer"
        />

        <h2 className="card-title font-playfair">{recipe.title}</h2>
        <p className="opacity-60">
          Number of ingredients: {recipe.ingredients.length}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <StarRatings
              rating={recipe.rating}
              starDimension="20px"
              starSpacing="3px"
              starRatedColor="#EA8115"
              starEmptyColor="grey"
            />
            <span className="ml-3 align-middle opacity-70">
              {recipe.rating}
            </span>
          </div>

          <button
            disabled={
              favoriteRecipe.find(
                (data) =>
                  data.chefId === chefInfo.id && data.recipeId === recipe.id
              )
                ? true
                : false
            }
            onClick={() => {
              toast.success(`${recipe.title} is added to your favorite`);
              addToFavorite(chefInfo.id, recipe.id);
            }}
            title="Add to favorite"
            className="text-2xl text-red-500 disabled:opacity-0"
          >
            <MdFavoriteBorder />
          </button>
        </div>
        <div className="card-actions justify-center relative">
          <span className="aspect-square absolute -bottom-[4.7rem]">
            <RiArrowDownSFill
              className={`text-7xl text-neutral/20 ${
                selectedRecipe === recipe.id ? "block" : "hidden"
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
