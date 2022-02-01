import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useLayoutEffect from "@/utils/useLayoutEffect";

const ExploreWellnessAndSpa = () => {
  const heading = `In the heart of Platino, a total remise en forme system that connects
  all forms of well-being.`;
  const caption = "Explore Spa & Wellness";
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  const tl = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.current = gsap.timeline();

    tl.current!.to(children(".layer.top"), {
      scrollTrigger: {
        trigger: wrapperRef.current,
        scrub: true,
        start: "top top",
        markers: false,
        pin: true,
        pinSpacing: true,
      },
      x: "100%",
      duration: 1.5,
      ease: "power1.in",
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <div className="layer bottom">
        <div className="container">
          <h1 className="heading-2 ">{heading}</h1>
          <h6 className="caption-1">{caption}</h6>
        </div>
      </div>

      <div className="layer top">
        <div className="container">
          <h1 className="heading-2 ">{heading}</h1>
          <h6 className="caption-1">{caption}</h6>
        </div>
      </div>
    </Wrapper>
  );
};

export default ExploreWellnessAndSpa;

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 750px;

  .layer {
    padding: 8rem 0;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

    &.bottom {
      background-color: var(--primary-100);
      color: var(--primary-300);
    }

    &.top {
      background-color: var(--primary-200);
      color: var(--light-color);
    }
  }

  .caption-1 {
    margin-top: 5rem;
  }
`;
