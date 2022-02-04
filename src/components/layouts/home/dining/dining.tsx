import React from "react";
import Button from "@/element/button";
import { BsArrowRight } from "react-icons/bs";
import diningImg from "@/assets/images/wellness.jpg";
import NextImg from "next/image";
import { Wrapper } from "./styles";

const Dining = () => {
  return (
    <Wrapper>
      <div className="container component-inner-gap">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div className="row gap-2">
              <div className="col-lg-6">
                <div className="left">
                  <NextImg
                    src={diningImg}
                    placeholder="blur"
                    className="diningImg"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-lg-6 ">
                <div className="right">
                  <h6 className="caption caption-2">Dining</h6>
                  <h2 className="heading-4 title">Our Restaurant</h2>
                  <p className="sub-title sub-title-1">
                    The buffet breakfast is served in the lounge on the ground
                    floor and also outside on our little patio.
                  </p>
                  <div className="options">
                    <h6 className="heading-5">Indian Dish</h6>
                    <h6 className="heading-5">Indian Dish</h6>
                    <h6 className="heading-5">Indian Dish</h6>
                    <h6 className="heading-5">Indian Dish</h6>
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
