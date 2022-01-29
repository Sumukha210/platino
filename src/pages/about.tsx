import { gsap, Expo } from "gsap";
import React, { useEffect, useRef } from "react";

const About = () => {
  const title = useRef(null);

  return (
    <div ref={title} style={{ background: "lightgreen" }}>
      <h1>About</h1>
    </div>
  );
};

export default About;
