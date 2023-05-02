import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-24">
      <form className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm shadow-md rounded p-8 space-y-6">
        <h1 className="text-3xl font-playfair mb-8 text-white">
          Welcome back!
        </h1>
        <div className="flex items-center gap-x-5">
          <span className="label-text flex items-center gap-x-2">
            Don't have an account? Click here <HiArrowLongRight />
          </span>

          <input
            type="checkbox"
            onClick={(e) =>
              e.target.checked && setTimeout(() => navigate("/register"), 500)
            }
            className="toggle toggle-primary"
          />
        </div>

        <p className="text-error">Error:</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full h-12 mt-4 p-4 bg-white/10 outline-none focus:bg-transparent border-2 border-white/10 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full h-12 p-4 bg-white/10 outline-none focus:bg-transparent border-2 border-white/10 rounded"
        />
        <button type="submit" className="w-full h-12 btn btn-primary rounded">
          Login
        </button>

        <div className="divider w-3/4 mx-auto">Or</div>
        <button
          type="button"
          className="w-full h-12 btn btn-neutral btn-outline rounded-full"
        >
          Continue with <FcGoogle className="text-2xl ml-2" />
        </button>
        <button
          type="button"
          className="w-full h-12 btn btn-neutral btn-outline rounded-full"
        >
          Continue with <BsGithub className="text-2xl ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Login;
