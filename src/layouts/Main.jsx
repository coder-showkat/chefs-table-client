import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinnner/Spinner";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div className="bg-[#2f1d0133] backdrop-blur-lg">
      <Navbar />
      {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default Main;
