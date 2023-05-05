import React, { useContext, useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { FavoriteRecipeContext } from "../providers/FavoriteRecipeProvider";

const FavoriteRecipes = () => {
  const [favoriteRecipeData, setFavoriteRecipeData] = useState([]);
  const { favoriteRecipe, removeFromFavorite } = useContext(
    FavoriteRecipeContext
  );
  const chefData = useLoaderData();

  useEffect(() => {
    if (chefData.length > 0 && favoriteRecipe.length > 0) {
      const data = [];
      favoriteRecipe.map((item) => {
        const chefInfo = chefData.find((d) => d.id === item.chefId);

        if (chefInfo) {
          const recipeInfo = chefInfo.recipes.find(
            (r) => r.id === item.recipeId
          );
          data.push({
            id: `${chefInfo.id}${recipeInfo.id}`,
            chefName: chefInfo.name,
            recipeName: recipeInfo.title,
            recipeImg: recipeInfo.img,
            chefId: chefInfo.id,
            recipeId: recipeInfo.id,
          });
        }
      });
      setFavoriteRecipeData(data);
    } else {
      setFavoriteRecipeData([]);
    }
  }, [chefData, favoriteRecipe]);

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-24">
      <h1 className="text-3xl font-playfair text-white mb-8">
        Your Favorite Recipes
      </h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-8">
          {favoriteRecipeData.length > 0 ? (
            favoriteRecipeData.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex gap-x-4">
                  <img
                    src={item.recipeImg}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary/20"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.recipeName}</h2>
                    <h3>
                      <span className="opacity-70">By</span> {item.chefName}
                    </h3>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() =>
                      removeFromFavorite(item.chefId, item.recipeId)
                    }
                    className="text-xl text-red-500"
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-error">
              You did not add any recipe in your favorite list.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteRecipes;
