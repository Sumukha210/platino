import React from "react";
import bannerImg from "@/assets/images/about-md.jpg";
import Hero from "@/module/hero";
import AboutIntro from "@/module/about_intro/aboutIntro";
import Founders_And_Team from "@/layout/about/founders/founders_and_team";
import PresidentWords from "@/layout/about/presidentWords";
import OurPromises from "@/layout/about/ourPromises";

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
      <OurPromises />
    </>
  );
};

export default About;
