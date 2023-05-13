import React, { useEffect, useState } from "react";
import About from "../components/About";
import ChefProfiles from "../components/ChefProfiles";
import Hero from "../components/Hero";
import Spinner from "../components/Spinnner/Spinner";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [chefData, setChefData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch(
          "https://chefs-table-server-dun.vercel.app/api/chef"
        );
        const res2 = await fetch(
          "https://chefs-table-server-dun.vercel.app/api/chefs-table/testimonials"
        );
        const data1 = await res1.json();
        const data2 = await res2.json();
        setChefData(data1);
        setTestimonialsData(data2);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="pb-12">
      <div className="pt-32 md:pt-28 bg-gradient-to-b from-black/30 to-transparent">
        <Hero />
      </div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <About />
        <ChefProfiles chefData={chefData} />
        <Testimonials testimonialsData={testimonialsData} />
      </div>
    </div>
  );
};

export default Home;
