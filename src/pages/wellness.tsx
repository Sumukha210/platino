import React from "react";
import Hero from "@/module/hero";
import bannerImg from "@/assets/images/outdoor-pool.jpg";
import Intro from "@/layout/wellness/intro";
import Section from "@/layout/wellness/section";
import fitnessImg from "@/assets/images/gym.jpg";
import yogaImg from "@/assets/images/yoga.jpg";
import spa1Img from "@/assets/images/spa.jpg";
import spa2Img from "@/assets/images/spaImg.jpg";
import outdoorPoolImg from "@/assets/images/outdoor-pool.jpg";
import indoorPoolImg from "@/assets/images/indoor-pool.jpg";

const Wellness = () => {
  return (
    <>
      <Hero
        bannerImg={bannerImg}
        title="<span>Find Rest &</span> <span>Relaxation</span>"
      />
      <Intro />

      <div className="margin-top">
        <Section
          largeImg={fitnessImg}
          smallImg={yogaImg}
          caption="fitness center"
          title="Get your heart racing"
          para="For those who love to keep fit and take advantage of free time to exercise, Platino has a fitness center equipped with modern equipment and open 24 hours a day. Furthermore, the splendid natural environment of Telese offers interesting and adventurous paths among the olive trees, the vineyards, sandalwood and woods surrounding Platino. Ideal trails for a run, but also for a photographic walk. A Yoga center also present at platino."
          bgColor="--secondary-200"
        />
      </div>

      <Section
        rowReverse={true}
        largeImg={spa2Img}
        smallImg={spa1Img}
        caption="Wellness spa"
        title="Rest & Recharge"
        para="Your journey to self-care begins at the Gage Wellness Spa, offering luxurious and invigorating spa services including massage therapy, body treatments, facials and customized packages performed by our expert therapists. Opening in Summer 2021, we are excited to announce an expansion of our spa to include a hydro-therapy spa pool and aroma-therapy steam room, all dedicated to your mind, body and fitness health."
        bgColor="--secondary-400"
        textColor="--light-color"
      />

      <Section
        largeImg={indoorPoolImg}
        smallImg={outdoorPoolImg}
        caption="swimming pool"
        title="To dive on an island of pleasure"
        para="Surrounded by the Mediterranean scrub, the large outdoor swimming pool is the heart of platino. A swim among olive trees and agaves under the southern sky and then relax in the shade of the trees, treatment while contemplating nature: these are just some of the possibilities that this fascinating oasis in the Sannio offers."
        bgColor="--secondary-300"
        textColor="--light-color"
      />
    </>
  );
};

export default Wellness;
