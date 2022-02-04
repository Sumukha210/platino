import Hero from "@/module/hero";
import React from "react";
import bannerImg from "@/assets/images/wellness.jpg";
import Intro from "@/layout/dining/intro";
import Menu from "@/layout/dining/menu";
import BookNowSection from "@/layout/dining/bookNowSection";

const Dining = () => {
  return (
    <>
      <Hero bannerImg={bannerImg} title="<span>Dine with us</span>" />
      <Intro />
      <Menu />
      <BookNowSection />
    </>
  );
};

export default Dining;
