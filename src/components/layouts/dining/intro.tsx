import React, { useRef } from "react";
import styled from "styled-components";
import NextImg from "next/image";
import menuImg1 from "@/assets/images/menu-5.png";
import menuImg2 from "@/assets/images/menu-7.png";
import menuImg3 from "@/assets/images/menu-8.png";
import useLayoutEffect from "@/utils/useLayoutEffect";
import { gsap } from "gsap";

const Intro = () => {
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  const tl = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.fromTo(
      children("img"),
      { rotation: 0 },
      {
        rotation: 360,
        repeat: -1,
        duration: 80,
        ease: "none",
        transformOrigin: "center",
      }
    );
  }, []);

  return (
    <IntroWrapper className="component-inner-gap" ref={wrapperRef}>
      <div className="container">
        <div className="content">
          <div className="row justify-center">
            <div className="col-lg-8">
              <h6 className="caption-2">Eat & Drink</h6>
              <h2 className="heading-4">
                Home to a warm and welcoming vibe where life’s simplicities are
                delighted in, Platino affords the perfect setting for
                experiences to be had and memories to be made.
              </h2>

              <div className="imgContainer">
                <div className="row gap-3">
                  <div className="col-sm-6 col-md-4">
                    <NextImg src={menuImg2} />
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <NextImg src={menuImg1} />
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <NextImg src={menuImg3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};

export default Intro;

const IntroWrapper = styled.div`
  .content {
    text-align: center;
    color: var(--dark-color);

    .caption-2 {
      font-weight: bold;
    }

    .heading-4 {
      font-weight: 400;
      margin-top: 8px;
    }
  }

  .imgContainer {
    margin-top: 2rem;
  }
`;
