import React, { useRef, useState } from "react";
import Button from "@/element/button";
import { BsArrowRight } from "react-icons/bs";
import NextImg from "next/image";
import { Wrapper } from "./styles";
import drinkMenuImg from "@/assets/images/drinks.jpg";
import desertMenuImg from "@/assets/images/dessert.jpg";
import pizzaMenuImg from "@/assets/images/pizza.jpg";
import dinnerMenuImg from "@/assets/images/dinner.jpg";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import { gsap } from "gsap";

interface menuNamesTypes {
  name: string;
  imgSrc: StaticImageData;
}

const menuNames: menuNamesTypes[] = [
  { name: "Desert Menu", imgSrc: desertMenuImg },
  { name: "Pizza Menu", imgSrc: pizzaMenuImg },
  { name: "Dinner Menu", imgSrc: dinnerMenuImg },
  { name: "Drink Menu", imgSrc: drinkMenuImg },
];

const Dining = () => {
  const [currentMenuNum, setCurrentMenuNum] = useState(0);
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo(
      children("img"),
      { autoAlpha: 0, scale: 0.9 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.9,
        ease: "Power1.easeInOut",
      }
    );
  }, [currentMenuNum]);

  return (
    <Wrapper ref={wrapperRef}>
      <div className="container component-inner-gap">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div className="row gap-2">
              <div className="col-lg-6">
                <div className="left">
                  <NextImg
                    src={menuNames[currentMenuNum].imgSrc}
                    placeholder="blur"
                    className="diningImg"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="right">
                  <h6 className="caption caption-2">Dining</h6>
                  <h2 className="heading-4 title">Our Restaurant</h2>
                  <p className="sub-title sub-title-1">
                    The buffet breakfast is served in the lounge on the ground
                    floor and also outside on our little patio.
                  </p>
                  <div className="options">
                    {menuNames.map(({ name }, num) => (
                      <h6
                        className="heading-5"
                        key={name}
                        onMouseEnter={() => {
                          setCurrentMenuNum(num);
                        }}>
                        {name}
                      </h6>
                    ))}
                  </div>
                  <Button name="Learn more" Icon={BsArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dining;
