import React, { useContext, useState } from "react";
import { BiChevronLeft, BiLike } from "react-icons/bi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import spinnerImg from "../../assets/Spinner.svg";
import RecipeCard from "../../components/RecipeCard";
import RecipePoster from "../../components/RecipePoster";
import { useLazyImage } from "../../hooks/LazyImage";
import { FavoriteRecipeContext } from "../../providers/FavoriteRecipeProvider";

const Recipes = () => {
  const chefInfo = useLoaderData();
  const { favoriteRecipe, addToFavorite } = useContext(FavoriteRecipeContext);
  const { name, bio, experience, image, recipes, likes } = chefInfo;
  const [scale, setScale] = useState(100);
  const [selectedRecipe, setSelectedRecipe] = useState(1);
  const { imageRef, shouldLoadImage } = useLazyImage();

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 aspect-[19/8] md:text-lg gap-8 mb-16">
        <img
          ref={imageRef}
          src={shouldLoadImage ? image : spinnerImg}
          alt=""
          className="w-full md:w-3/4 h-full object-cover rounded"
        />
        <div className="h-full flex justify-center items-center">
          <div className="w-full space-y-8">
            <h1 className="font-playfair text-5xl text-white font-semibold">
              {name.split(" ").map((n, i) => (
                <span key={i} className={i === 0 ? "text-primary" : ""}>
                  {n}{" "}
                </span>
              ))}
            </h1>
            <p>{bio}</p>
            <div className="mt-6">
              <p>
                <span className="text-primary">Years of Experience</span>
                {" : "}
                {experience}
              </p>
              <p>
                <span className="text-primary">Number of recipes</span>
                {" : "}
                {recipes.length}
              </p>
              <p className="flex items-center gap-x-2">
                <BiLike className="text-2xl text-primary" />: {likes}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-script text-3xl text-primary mb-6">Recipes:</h3>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
            el: ".pagination",
          }}
          spaceBetween={10}
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              spaceBetween: 30,
              slidesPerView: 2,
            },

            1024: {
              spaceBetween: 40,
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
            clickable: true,
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RecipeCard
                chefInfo={chefInfo}
                recipe={recipe}
                setScale={setScale}
                selectedRecipe={selectedRecipe}
                setSelectedRecipe={setSelectedRecipe}
              />
            </SwiperSlide>
          ))}

          <div className="flex items-center justify-between gap-x-6">
            <p className="pagination" />
            <div className="flex space-x-6 items-center mt-5">
              <button className="prev-btn text-3xl active:text-secondary-focus text-secondary disabled:opacity-0">
                <BiChevronLeft />
              </button>
              <button className="next-btn text-4xl active:text-secondary-focus text-secondary disabled:opacity-0">
                <HiOutlineArrowLongRight />
              </button>
            </div>
          </div>
        </Swiper>

        <RecipePoster
          recipe={recipes.find((recipe) => recipe.id === selectedRecipe)}
          scale={scale}
        />
      </div>
    </div>
  );
};

export default Recipes;
