import React from "react";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";

const Home = () => {
  const data = {
    name: "daksh store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
