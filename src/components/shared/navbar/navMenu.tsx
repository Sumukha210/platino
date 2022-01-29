import React, { useState } from "react";
import styled from "styled-components";
import homeImg from "@/assets/images/home.jpg";
import aboutImg from "@/assets/images/about.jpg";
import diningImg from "@/assets/images/dining.jpg";
import wellnessImg from "@/assets/images/wellness.jpg";
import pricingImg from "@/assets/images/pricing.jpg";
import contactImg from "@/assets/images/contact.jpg";
import NextImg from "next/image";

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

const NavMenu = () => {
  const [currentImg, setCurrentImg] = useState(navMenuOptions[0].img);

  const handleMouseMove = (e: any, item: any) => {
    const targetContent = e.target?.textContent;

    if (targetContent === item.name && currentImg != item.img) {
      setCurrentImg(() => item.img);
    }
  };

  return (
    <NavWrapper>
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
  width: 0%;
  height: 100vh;
  z-index: 10000;

  background-color: var(--secondary-200);

  display: grid;
  grid-template-columns: 1fr 0.7fr;
`;

export const LeftSide = styled.div`
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 4rem;

  .menuName {
    margin-bottom: 2rem;
    display: block;
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

  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
    url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  img {
    height: 100vh !important;
    width: 100%;
  }
`;
