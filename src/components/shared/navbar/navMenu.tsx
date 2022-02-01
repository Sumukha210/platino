import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import homeImg from "@/assets/images/home.jpg";
import aboutImg from "@/assets/images/about.jpg";
import diningImg from "@/assets/images/dining.jpg";
import wellnessImg from "@/assets/images/wellness.jpg";
import pricingImg from "@/assets/images/pricing.jpg";
import contactImg from "@/assets/images/contact.jpg";
import NextImg from "next/image";
import { gsap, Expo } from "gsap";

interface navMenuOptionsType {
  name: string;
  img: StaticImageData;
  isSelected: boolean;
}

const navMenuOptions: navMenuOptionsType[] = [
  { name: "Home", img: homeImg, isSelected: true },
  { name: "About", img: aboutImg, isSelected: true },
  { name: "Dining", img: diningImg, isSelected: true },
  { name: "Wellness", img: wellnessImg, isSelected: true },
  { name: "Pricing", img: pricingImg, isSelected: true },
  { name: "Contact us", img: contactImg, isSelected: true },
];

interface navMenuType {
  menuOpen: boolean;
}

const NavMenu: React.FC<navMenuType> = ({ menuOpen }) => {
  const [currentImg, setCurrentImg] = useState(navMenuOptions[0].img);
  const wrapperRef = useRef(null);

  const handleMouseMove = (e: any, item: any) => {
    const targetContent = e.target?.textContent;

    if (targetContent === item.name && currentImg != item.img) {
      setCurrentImg(() => item.img);
    }
  };
  // const tl = useRef<gsap.core.Timeline>();

  // useEffect(() => {
  //   tl.current = gsap.timeline({ defaults: { duration: 1.1 }, paused: true });

  //   tl.current.paused();
  //   tl.current.to(wrapperRef.current, {
  //     x: 0,
  //     duration: 0.7,
  //     ease: "Expo.in",
  //   });
  // }, []);

  // useEffect(() => {
  //   if (menuOpen) {
  //     tl.current!.play();
  //   } else {
  //     tl.current!.reverse();
  //   }
  // }, [menuOpen]);

  return (
    <NavWrapper ref={wrapperRef} id="navMenu">
      <LeftSide>
        {navMenuOptions.map(item => (
          <h4
            key={item.name}
            className="heading-4 menuName"
            onClick={e => handleMouseMove(e, item)}>
            {item.name}
          </h4>
        ))}
      </LeftSide>
      <RightSide background={currentImg.src}>
        <div className="logo">
          <h1 className="heading-2 bold">Platino</h1>
        </div>
      </RightSide>
    </NavWrapper>
  );
};

export default NavMenu;

interface RightSideType {
  background: string;
}

export const NavWrapper = styled.div`
  position: fixed;
  right: 0%;
  width: 100%;
  height: 100vh;
  z-index: 10000;
  transform: translateX(120vw);
  /* opacity: 0;
  visibility: hidden; */

  background-color: var(--secondary-400);
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 0.7fr;
  }
`;

export const LeftSide = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 4rem;

  @media (min-width: 576px) {
    margin-left: auto;
  }

  @media (max-width: 575.98px) {
    padding: 5rem 32px;
  }

  .menuName {
    margin-bottom: 1.5rem;
    cursor: pointer;
    font-weight: 600 !important;
    color: var(--light-color);
  }
`;

export const RightSide = styled.div<RightSideType>`
  span {
    height: 100vh !important;
  }

  .logo {
    min-height: 100%;
    display: grid;
    place-items: center;
    color: var(--light-color);
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
      url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
