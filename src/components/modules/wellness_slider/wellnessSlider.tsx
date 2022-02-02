import React, { useRef } from "react";
import swimmingPool from "@/assets/images/swimmingPool.jpg";
import spa from "@/assets/images/spa-md.jpg";
import fitness from "@/assets/images/fitness.jpg";
import styled from "styled-components";
import NextImg from "next/image";
import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";

interface sliderType {
  src: StaticImageData;
  title: string;
}

const sliderInfo: sliderType[] = [
  { src: swimmingPool, title: "outdoor pool" },
  { src: fitness, title: "fitness" },
  { src: spa, title: "Platino spa" },
];

const WellnessSlider = () => {
  type mousePointerType = React.MouseEvent<HTMLDivElement, MouseEvent>;
  let direction: "left" | "right" | null = null;

  const router = useRouter();
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);
  let currentEleNum = 3;

  const handleMouseMove = (e: mousePointerType) => {
    direction = e.clientX - window.innerWidth / 2 > 0 ? "right" : "left";
  };

  const handleSliderClick = (e: mousePointerType) => {
    const targetNum = parseInt(e.currentTarget.dataset.slidernum!);
    console.log(
      `you clicked on ${direction} and slider className ${targetNum} and current ele num ${currentEleNum}`
    );

    const xPercent = direction === "right" ? -100 : 100;
    const gsapValues: gsap.TweenVars = {
      xPercent,
      duration: 1.2,
      ease: "power4.in",
    };

    // if (direction === "left" && currentEleNum > 1) {
    //   currentEleNum--;
    //   gsap.to(children(`.slider-${targetNum}`), {
    //     ...gsapValues,
    //   });
    //   // gsap.set(children(`.slider-${currentEleNum + 1}`), { xPercent: 0 });
    // } else if (direction === "right" && currentEleNum < sliderInfo.length) {
    //   currentEleNum++;
    //   gsap.set(children(`.slider-${currentEleNum}`), { xPercent: 0 });
    //   gsap.to(children(`.slider-${targetNum}`), {
    //     ...gsapValues,
    //   });
    // }
  };

  return (
    <Wrapper ref={wrapperRef}>
      {sliderInfo.map(({ title, src }, num) => (
        <div
          className={`slider slider-${num + 1}`}
          key={title}
          data-slidernum={num + 1}
          onMouseMove={handleMouseMove}
          onClick={handleSliderClick}>
          <figure>
            <NextImg
              src={src}
              objectFit="cover"
              placeholder="blur"
              loading="eager"
            />
          </figure>
          <div className="content">
            <div className="container">
              <h4
              //   onClick={() => router.push("/wellness")}
              >
                <span className="heading-2">{title}</span>
                <span>Explore now</span>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default WellnessSlider;

export const Wrapper = styled.div`
  position: relative;
  min-height: 640px;
  overflow: hidden;

  .slider {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;

    &-1 {
      z-index: 1;
    }

    &-2 {
      z-index: 2;
    }

    &-3 {
      z-index: 3;
    }

    figure {
      &::after {
        content: "";
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }

    img {
      width: 100vw !important;
      height: 100% !important;
    }

    .content {
      position: absolute;
      bottom: 6rem;
      left: 0;
      width: 100%;
      /* z-index: 1; */

      margin: auto;
      text-align: center;

      color: var(--light-color);
    }
  }
`;
