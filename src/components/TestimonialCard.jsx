import moment from "moment/moment";
import React from "react";
import spinnerImg from "../assets/spinner.svg";
import { useLazyImage } from "../hooks/LazyImage";

const TestimonialCard = ({ testimonial }) => {
  const { foodImage, author, authorImage, comment, date } = testimonial;
  const { imageRef, shouldLoadImage } = useLazyImage();
  return (
    <div className="w-full grid grid-cols-3 gap-x-6 md:gap-x-12">
      <div className="col-span-2 space-y-4">
        <h1 className="text-xl md:text-3xl font-playfair mb-6 text-white">
          {comment}
        </h1>
        <div className="flex items-center gap-x-4">
          <img
            src={authorImage}
            alt=""
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{author}</h4>
            <p className="text-secondary/70">
              {moment(date).format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          ref={imageRef}
          src={shouldLoadImage ? foodImage : spinnerImg}
          alt=""
          className="w-full aspect-[18/20] object-cover rounded"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
