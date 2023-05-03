import React from "react";

const RecipeCard = ({ recipe, scale }) => {
  const { id, title, ingredients, instructions } = recipe;

  return (
    <div
      className={`bg-base-200 py-12 px-6 rounded recipe-card duration-100 origin-top scale-${scale}`}
    >
      <h1 className="rounded p-4 w-fit mx-auto bg-base-100/80 text-base-content text-2xl font-playfair mb-8">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 text-neutral-content md:text-lg">
        <div className="sm:col-span-2">
          <h3 className="text-xl font-semibold mb-2 underline text-center">
            Ingredients
          </h3>
          <ul className="list-disc space-y-3 w-fit mx-auto p-4">
            {ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient.quantity + " " + ingredient.name}</li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-3">
          <h3 className="text-xl font-semibold mb-2 underline text-center">
            Instructions
          </h3>
          <ul className="list-decimal space-y-3 w-fit mx-auto p-4">
            {instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
