import React from "react";
import Hero from "@/module/hero";
import bannerImg from "@/assets/images/wellness.jpg";

const Wellness = () => {
  return (
    <>
      <Hero
        bannerImg={bannerImg}
        title="<span>Find Rest &</span> <span>Relaxation</span>"
      />
    </>
  );
};

export default Wellness;
