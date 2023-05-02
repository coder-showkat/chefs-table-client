import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ChefCard from "./ChefCard";

const ChefProfiles = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(chefData);
  return (
    <div className="my-20 py-8 space-y-6">
      <h3 className="font-script text-3xl text-primary mb-6">Chef Profiles</h3>
      <p className="mb-8 max-w-xl">
        Discover the top chefs featured on Chef's Table, each with a unique
        culinary perspective and signature dishes. Browse their profiles to
        learn more about their recipe ingredients and cooking method.
      </p>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={0}
        grabCursor={true}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
          clickable: true,
        }}
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
      >
        {chefData.map((data) => (
          <SwiperSlide key={data.id}>
            <ChefCard chefInfo={data} />
          </SwiperSlide>
        ))}

        <div className="flex space-x-6 items-center mt-5 w-fit ml-auto">
          <button className="prev-btn text-3xl active:text-secondary-focus text-secondary disabled:opacity-0">
            <BiChevronLeft />
          </button>
          <button className="next-btn text-4xl active:text-secondary-focus text-secondary disabled:opacity-0">
            <HiOutlineArrowLongRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ChefProfiles;
