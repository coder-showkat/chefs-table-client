import React, { useContext } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
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
          className="flex items-center space-x-6 font-medium 
      "
        >
          {/* for large device */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            {!user && (
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            )}
          </div>

          {/* if the user logged in profile photo will be visible */}
          {user && (
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
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={logoutHandler}>
                  <a>Log Out</a>
                </li>
              </ul>
            </div>
          )}

          {/* for small device */}
          <div className="md:hidden dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-sm hover:bg-inherit btn-ghost btn-circle"
            >
              <HiBars3BottomRight className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              {!user && (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
