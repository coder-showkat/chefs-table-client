import React, { useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiArrowLongRight } from "react-icons/hi2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinnner/Spinner";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { user, loading, loginUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { state } = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault();
    setError(null);
    const result = await loginUser(email, password);
    if (result.success) {
      toast.success(result.message);
      e.target.reset();
    } else setError(result.message);
  };

  const googleLogin = async () => {
    const result = await loginWithGoogle();
    if (result.success) toast.success(result.message);
    else setError(result.message);
  };

  const githubLogin = async () => {
    const result = await loginWithGithub();
    if (result.success) toast.success(result.message);
    else setError(result.message);
  };

  if (loading) return <Spinner />;

  if (user) {
    return (
      <Navigate to={state?.pathname ? state.pathname : "/"} replace={true} />
    );
  }
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-24">
      <form
        onSubmit={loginHandler}
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm shadow-md rounded p-8 space-y-6"
      >
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
              !e.target.checked &&
              setTimeout(
                () =>
                  navigate("/register", {
                    state,
                  }),
                500
              )
            }
            className="toggle toggle-primary"
            defaultChecked
          />
        </div>
        {console.log(error)}
        {error && <p className="text-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full h-12 mt-4 p-4 bg-white/10 outline-none focus:bg-transparent border-2 border-white/10 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full h-12 p-4 bg-white/10 outline-none focus:bg-transparent border-2 border-white/10 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full h-12 btn btn-primary rounded">
          Login
        </button>

        <div className="divider w-3/4 mx-auto">Or</div>
        <button
          onClick={googleLogin}
          type="button"
          className="w-full h-12 btn btn-neutral btn-outline rounded-full"
        >
          Continue with <FcGoogle className="text-2xl ml-2" />
        </button>
        <button
          onClick={githubLogin}
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
