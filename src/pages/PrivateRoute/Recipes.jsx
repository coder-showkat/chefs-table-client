import React, { useState } from "react";
import { BiChevronLeft, BiLike } from "react-icons/bi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import RecipeCard from "../../components/RecipeCard";

const Recipes = () => {
  const chefInfo = useLoaderData();
  const { name, bio, experience, image, recipes, likes } = chefInfo;
  const [scale, setScale] = useState(100);
  const [selectedRecipe, setSelectedRecipe] = useState(1);

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 aspect-[19/8] md:text-lg gap-8 mb-16">
        <img
          src={image}
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
              <div
                onClick={() => {
                  if (recipe.id !== selectedRecipe) {
                    setScale(0);
                    setTimeout(() => {
                      setSelectedRecipe(recipe.id);
                      setScale(100);
                    }, 500);
                  }
                }}
                className="card w-full bg-gradient-to-br to-white/10 from-base-100 hover:to-base-100 hover:from-white/10 shadow-xl shadow-primary/10"
              >
                <div className="card-body">
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

                    <MdFavoriteBorder
                      onClick={(e) => {
                        toast.success(
                          `${recipe.title} is added to your favorite`
                        );
                        e.target.style.display = "none";
                      }}
                      title="Add to favorite"
                      className="text-2xl text-red-500 cursor-pointer"
                    />
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

        <RecipeCard
          recipe={recipes.find((recipe) => recipe.id === selectedRecipe)}
          scale={scale}
        />
      </div>
    </div>
  );
};

export default Recipes;
