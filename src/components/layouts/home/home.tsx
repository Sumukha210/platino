import React from "react";
import Hero from "./hero";
import AboutIntro from "@/module/about_intro/aboutIntro";
import Facilities from "@/module/facilities/facilities";
import Dining from "./dining/dining";
import ExploreWellnessAndSpa from "./about_wellness/about_wellness";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Facilities />
      <Dining />
      <ExploreWellnessAndSpa />
    </>
  );
};

export default Home;
