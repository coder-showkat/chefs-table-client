import React, { useContext } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const logoutHandler = async () => {
    const result = await logoutUser();
    if (result.success) toast.success(result.message);
    else toast.error(result.message);
  };

  return (
    <div className="absolute z-40 top-0 left-0 right-0">
      <nav className="container mx-auto px-4 sm:px-8 lg:px-16 py-2 flex items-center justify-between">
        <Link to="/">
          <h2 className="font-script text-3xl font-semibold flex items-center">
            <GiForkKnifeSpoon className="mr-3 text-accent p-1.5 rounded-full bg-neutral text-4xl" />
            Chef's Table
          </h2>
        </Link>
        <div
          className={`flex items-center space-x-6 font-medium 
      }`}
        >
          <Link to="/">Home</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-secondary btn-circle p-0.5 tooltip tooltip-left"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="object-cover rounded-full"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-md shadow-primary/40 bg-base-100 rounded-box w-52"
              >
                <li onClick={logoutHandler}>
                  <a>Log Out</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-primary px-4 py-2 rounded text-black"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
