import React, { createContext, useEffect, useState } from "react";
import {
  addToDB,
  getLocalStorageData,
  removeFromDB,
} from "../utilities/fakedb";

export const FavoriteRecipeContext = createContext([]);

const FavoriteRecipeProvider = ({ children }) => {
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);

  useEffect(() => {
    const localStorageData = getLocalStorageData();
    setFavoriteRecipe(localStorageData);
  }, []);

  const addToFavorite = (chefId, recipeId) => {
    addToDB(chefId, recipeId);
    setFavoriteRecipe(getLocalStorageData());
  };

  const removeFromFavorite = (chefId, recipeId) => {
    removeFromDB(chefId, recipeId);
    setFavoriteRecipe(getLocalStorageData());
  };

  const favoriteRecipeInfo = {
    favoriteRecipe,
    addToFavorite,
    removeFromFavorite,
  };
  return (
    <FavoriteRecipeContext.Provider value={favoriteRecipeInfo}>
      {children}
    </FavoriteRecipeContext.Provider>
  );
};

export default FavoriteRecipeProvider;
