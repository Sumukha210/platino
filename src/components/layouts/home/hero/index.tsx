import React, { useRef } from "react";
import styled from "styled-components";
import bannerImg from "@/assets/images/banner.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "@/element/button";
import Features from "./features";
import { gsap } from "gsap/dist/gsap";
import useLayoutEffect from "@/utils/useLayoutEffect";
// import GSDevTools from "gsap/dist/GSDevTools";

const Hero = () => {
  const bannerRef = useRef(null);
  const tl = useRef<gsap.core.Timeline>();
  const children = gsap.utils.selector(bannerRef);

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current
      .to(children(".title span"), {
        autoAlpha: 1,
        y: 0,
        duration: 2.5,
        ease: "power3.inOut",
        stagger: 0.1,
      })
      .to(children("button"), { y: 0, autoAlpha: 1 }, "-=1")
      .from(
        children(".feature span"),
        {
          y: 40,
          autoAlpha: 0,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=0.8"
      );
  }, []);

  return (
    <>
      <Banner ref={bannerRef} id="hero">
        <div className="container">
          <Content>
            <div className="row justify-center">
              <div className="col-xl-10">
                <h1 className="title heading-2">
                  <span>Your luxury Holiday </span> <span>Home in Malnad</span>
                </h1>
                <Button
                  name="Watch Now"
                  Icon={AiFillPlayCircle}
                  isDarkBtn={false}
                />
                <Features />
              </div>
            </div>
          </Content>
        </div>
      </Banner>
    </>
  );
};

export default Hero;

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
    url(${bannerImg.src});
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: calc(80vh + 150px);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  .title {
    color: var(--light-color);
    font-family: var(--secondary-font);
    margin-bottom: 3rem;
    overflow: hidden;

    span {
      display: block;
      visibility: hidden;
      opacity: 0;
      transform: translateY(220px);
    }
  }
  button {
    transform: translateY(40px);
    opacity: 0;
    visibility: hidden;
  }
`;
