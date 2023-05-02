import React, { useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
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
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL ? user.photoURL : avatar} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow-md shadow-black/70 menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <a className="justify-between">
                    {user.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Logout</a>
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
