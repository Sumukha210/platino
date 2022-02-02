import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import homeImg from "@/assets/images/home.jpg";
import aboutImg from "@/assets/images/about.jpg";
import diningImg from "@/assets/images/dining.jpg";
import wellnessImg from "@/assets/images/wellness.jpg";
import pricingImg from "@/assets/images/pricing.jpg";
import contactImg from "@/assets/images/contact.jpg";
import { useRouter } from "next/router";

interface navMenuOptionsType {
  name: string;
  img: StaticImageData;
  path: string;
}

const navMenuOptions: navMenuOptionsType[] = [
  { name: "Home", img: homeImg, path: "/" },
  { name: "About", img: aboutImg, path: "/about" },
  { name: "Dining", img: diningImg, path: "/dining" },
  { name: "Wellness", img: wellnessImg, path: "/wellness" },
  { name: "Pricing", img: pricingImg, path: "/pricing" },
  { name: "Contact us", img: contactImg, path: "/contact" },
];

interface navMenuType {
  closeMenu: () => void;
}

const NavMenu: React.FC<navMenuType> = ({ closeMenu }) => {
  const [currentImg, setCurrentImg] = useState(navMenuOptions[0].img);
  const wrapperRef = useRef(null);
  const router = useRouter();

  const handleMouseMove = (e: any, item: any) => {
    const targetContent = e.target?.textContent;

    if (targetContent === item.name && currentImg != item.img) {
      setCurrentImg(() => item.img);
    }
  };

  return (
    <NavWrapper ref={wrapperRef} id="navMenu">
      <LeftSide>
        {navMenuOptions.map(item => (
          <h4
            key={item.name}
            className="heading-4 menuName"
            onMouseEnter={e => handleMouseMove(e, item)}
            onClick={() => {
              router.push(item.path);
              closeMenu();
            }}>
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
