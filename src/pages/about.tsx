import React from "react";
import bannerImg from "@/assets/images/about.jpg";
import Hero from "@/module/hero";
import AboutIntro from "@/module/about_intro/aboutIntro";
import Founders_And_Team from "@/layout/about/founders/founders_and_team";
import PresidentWords from "@/layout/about/presidentWords";

const About = () => {
  return (
    <>
      <Hero
        bannerImg={bannerImg}
        title="<span>Learn more</span> <span>About us</span>"
      />
      <AboutIntro />
      <Founders_And_Team />
      <PresidentWords />
    </>
  );
};

export default About;
