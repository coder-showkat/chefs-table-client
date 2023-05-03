import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import errorImage from "../assets/images/cooking.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-4 justify-center items-center pt-32 pb-16">
      <h1 className="text-5xl font-bold">Opps!</h1>
      <p className="opacity-70">404 Not Found</p>
      <img
        src={errorImage}
        alt=""
        className="w-56 aspect-[10/6] object-cover rounded opacity-50"
      />

      <p className="text-center text-xl font-medium">
        Looks like this page went to try our recipe.
      </p>
      <button
        onClick={() => navigate(-1, { replace: true })}
        className="btn btn-primary"
      >
        <HiArrowLeft className="text-2xl" /> Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
