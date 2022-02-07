import React, { useRef, useState } from "react";
import homeImg from "@/assets/images/banner-sm.jpg";
import aboutImg from "@/assets/images/about-md.jpg";
import diningImg from "@/assets/images/dining-2-md.jpg";
import wellnessImg from "@/assets/images/interior-sm-1.jpg";
import pricingImg from "@/assets/images/spa-md.jpg";
import contactImg from "@/assets/images/contact-sm.jpg";
import { useRouter } from "next/router";
import {
  Grid,
  LeftSide,
  Logo,
  NavWrapper,
  PersonalInfoBlock,
  RightSide,
} from "./styles";
import { gsap } from "gsap";
import PersonalInfo from "@/layout/contact_us/address/PersonalInfo";

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
  const [currentEleNum, setCurrentEleNum] = useState<number>(0);
  const rightSideRef = useRef(null);
  const childrenEle = gsap.utils.selector(rightSideRef);
  const router = useRouter();

  const handleMouseMove = (index: number) => {
    if (currentEleNum != index) {
      setCurrentEleNum(index);

      gsap.from(childrenEle(".img"), {
        autoAlpha: 0,
        duration: 0.8,
        ease: "Power1.easeIn",
      });
    }
  };

  return (
    <NavWrapper id="navMenu">
      <Grid>
        <LeftSide>
          {navMenuOptions.map((item, index) => (
            <h4
              key={item.name}
              className="heading-4 menuName"
              onMouseEnter={() => handleMouseMove(index)}
              onMouseLeave={() =>
                gsap.to(childrenEle(".img"), {
                  autoAlpha: 1,
                  duration: 0.8,
                  ease: "Power1.easeIn",
                })
              }
              onClick={() => {
                router.push(item.path);
                closeMenu();
              }}>
              {item.name}
            </h4>
          ))}
        </LeftSide>

        <RightSide ref={rightSideRef}>
          <div
            className="img"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${navMenuOptions[currentEleNum].img.src})`,
            }}></div>

          <Logo>
            <h1 className="heading-2 bold">Platino</h1>
          </Logo>
        </RightSide>
      </Grid>

      <PersonalInfoBlock>
        <div className="custom-container">
          <div className="content">
            <PersonalInfo />
          </div>
        </div>
      </PersonalInfoBlock>
    </NavWrapper>
  );
};

export default NavMenu;
