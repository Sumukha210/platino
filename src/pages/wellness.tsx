import React from "react";
import Hero from "@/module/hero";
import bannerImg from "@/assets/images/outdoor-pool.jpg";
import Intro from "@/layout/wellness/intro";

const Wellness = () => {
  return (
    <>
      <Hero
        bannerImg={bannerImg}
        title="<span>Find Rest &</span> <span>Relaxation</span>"
      />
      <Intro />
    </>
  );
};

export default Wellness;
