import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/chefs-table/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonialsData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-20 py-8">
      <h3 className="font-script text-3xl text-primary mb-6">Testimonials</h3>
      <p className="mb-8 max-w-xl md:text-lg">
        What our users are saying about Chef's Table:
      </p>

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
        loop={true}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
          clickable: true,
        }}
      >
        {testimonialsData.map((data) => (
          <SwiperSlide key={data.id}>
            <TestimonialCard testimonial={data} />
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
    </div>
  );
};

export default Testimonials;
