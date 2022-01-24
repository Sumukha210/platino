import { gsap, Expo } from "gsap";
import React, { useEffect, useRef } from "react";

const Contact = () => {
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
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
