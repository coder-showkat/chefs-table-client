import moment from "moment/moment";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { foodImage, author, authorImage, comment, date } = testimonial;
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
          src={foodImage}
          alt=""
          className="w-full aspect-[18/20] object-cover rounded-[20%]"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
