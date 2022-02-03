import Hero from "@/module/hero";
import React from "react";
import bannerImg from "@/assets/images/dining-2.jpg";
import Intro from "@/layout/dining/intro";
import Menu from "@/layout/dining/menu";
import BookNow from "@/layout/dining/bookNow";

const Dining = () => {
  return (
    <>
      <Hero bannerImg={bannerImg} title="<span>Dine with us</span>" />
      <Intro />
      <Menu />
      <BookNow />
    </>
  );
};

export default Dining;
