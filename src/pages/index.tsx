import Button from "@/element/button";
import { gsap, Expo } from "gsap";
import React, { useEffect, useRef } from "react";

const Home = () => {
  const title = useRef(null);

  useEffect(() => {
    gsap.from(title.current, {
      y: 40,
      autoAlpha: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div ref={title} style={{ background: "lightgreen" }}>
      <h1>Home</h1>
      <Button name="Hello btn" />
    </div>
  );
};

export default Home;
