import BookNow from "@/module/bookNow";
import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import drinkMenuImg from "@/assets/images/drinks.jpg";
import desertMenuImg from "@/assets/images/dessert.jpg";
import pizzaMenuImg from "@/assets/images/pizza.jpg";
import dinnerMenuImg from "@/assets/images/dinner.jpg";
import happyHourMenuImg from "@/assets/images/wine.jpg";
import homeImg from "@/assets/images/home.jpg";
import aboutImg from "@/assets/images/about.jpg";
import wellnessMenuImg from "@/assets/images/wellness.jpg";
import pricingMenuImg from "@/assets/images/pricing.jpg";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import { scrollingTextAnimation } from "@/utils/scrollingTextAnimation";

const images = [
  drinkMenuImg,
  desertMenuImg,
  pizzaMenuImg,
  dinnerMenuImg,
  happyHourMenuImg,
  homeImg,
  aboutImg,
  wellnessMenuImg,
  pricingMenuImg,
];

const BookNowSection = () => {
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  useIsomorphicLayoutEffect(() => {
    scrollingTextAnimation({
      trigger: children(".content"),
      targets: [
        children(".heading"),
        children(".subtitle"),
        children("button"),
      ],
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <BookNow images={images} />
    </Wrapper>
  );
};

export default BookNowSection;

const Wrapper = styled.div`
  background: var(--secondary-400);
  margin-top: -300px;
  padding-top: 380px;

  .content {
    color: var(--light-color);
  }
`;
