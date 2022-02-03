import React, { useRef } from "react";
import drinkMenuImg from "@/assets/images/home.jpg";
import desertMenuImg from "@/assets/images/about.jpg";
import pizzaMenuImg from "@/assets/images/wellness.jpg";
import dinnerMenuImg from "@/assets/images/pricing.jpg";
import happyHourMenuImg from "@/assets/images/contact.jpg";
import NextImg from "next/image";
import { gsap } from "gsap";
import useLayoutEffect from "@/utils/useLayoutEffect";
import { Wrapper } from "./styles";

interface menuNamesTypes {
  name: string;
  imgSrc: StaticImageData;
}

const menuNames: menuNamesTypes[] = [
  { name: "Happy <br/> Hour", imgSrc: happyHourMenuImg },
  { name: "Drink <br/> Menu", imgSrc: drinkMenuImg },
  { name: "Desert <br/> Menu", imgSrc: desertMenuImg },
  { name: "Pizza <br/> Menu", imgSrc: pizzaMenuImg },
  { name: "Dinner <br/> Menu", imgSrc: dinnerMenuImg },
];

const Menu = () => {
  const WrapperRef = useRef(null);
  const children = gsap.utils.selector(WrapperRef);

  useLayoutEffect(() => {
    gsap.utils.toArray(children(".card")).forEach((item: any) => {
      gsap.fromTo(
        item,
        {
          y: 0,
        },
        {
          repeat: -1,
          duration: gsap.utils.random(12, 16),
          ease: "none",
          y: -60,
          yoyo: true,
          yoyoEase: "none",
        }
      );
    });
  }, []);

  return (
    <Wrapper ref={WrapperRef} className="margin-top">
      <div className="imgContainer">
        {menuNames.map(({ name, imgSrc }, num) => (
          <div className="card" key={num}>
            <div className="card__header">
              <NextImg src={imgSrc} objectFit="cover" placeholder="blur" />
            </div>

            <div className="card__body">
              <h4
                className="heading-4"
                dangerouslySetInnerHTML={{ __html: name }}></h4>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Menu;
