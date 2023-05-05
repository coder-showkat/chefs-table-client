import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-[#2f1d0133] backdrop-blur-lg">
      <Navbar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default Main;
