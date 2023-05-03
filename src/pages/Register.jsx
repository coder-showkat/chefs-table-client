import React, { useContext, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiArrowLongRight } from "react-icons/hi2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinnner/Spinner";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { user, loading, createUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const [fullName, setFullName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (fullName.trim().length < 3)
        throw new Error("Name should be minimum three characters");
      if (photoURL.trim().length === 0)
        throw new Error("Please input photo URL");
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false)
        throw new Error("Please input valid email");

      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
          password
        ) === false
      )
        throw new Error(
          "Password must contain minimum six characters, at least one letter, one number and one special character"
        );

      const result = await createUser(fullName, photoURL, email, password);
      if (result.success) {
        toast.success(result.message);
        e.target.reset();
      } else setError(result.message);
    } catch (error) {
      setError(error.message);
    }
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
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-12">
      <form
        onSubmit={handleRegister}
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm shadow-md rounded p-8 space-y-6"
      >
        <h1 className="text-3xl font-playfair mb-8 text-white">
          Create account!
        </h1>
        <div className="flex items-center gap-x-5">
          <span className="label-text flex items-center gap-x-2">
            Already have an account? Click here <HiArrowLongRight />
          </span>

          <input
            type="checkbox"
            onClick={(e) =>
              e.target.checked && setTimeout(() => navigate("/login"), 500)
            }
            className="toggle toggle-primary"
          />
        </div>

        {error && <p className="text-error">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-12 mt-4 p-4 bg-white/10 outline-none focus:bg-transparent border-2 border-white/10 rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="w-full h-12 p-4 bg-white/10 outline-none focus:bg-transparent border-2 border-white/10 rounded"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full h-12 p-4 bg-white/10 outline-none focus:bg-transparent border-2 border-white/10 rounded"
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
        <button
          type="submit"
          className="w-full h-12 btn btn-primary rounded-md"
        >
          Register
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

export default Register;
