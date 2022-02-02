import React from "react";
import bannerImg from "@/assets/images/banner.jpg";
import AboutIntro from "@/module/about_intro/aboutIntro";
import Facilities from "@/module/facilities/facilities";
import Hero from "@/module/hero";
import WellnessSlider from "@/module/wellness_slider/wellnessSlider";
import Dining from "@/layout/home/dining/dining";
// import ExploreWellnessAndSpa from "./about_wellness/about_wellness";

const Home = () => {
  return (
    <>
      <Hero
        forFrontPage={true}
        title="<span>Your luxury Holiday </span> <span>Home in Malnad</span>"
        bannerImg={bannerImg}
      />
      <AboutIntro />
      <Facilities />
      <Dining />
      {/* <ExploreWellnessAndSpa /> */}
      <WellnessSlider />
    </>
  );
};

export default Home;
