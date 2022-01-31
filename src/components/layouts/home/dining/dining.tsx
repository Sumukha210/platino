import Button from "@/element/button";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import diningImg from "@/assets/images/wellness.jpg";
import NextImg from "next/image";

const Dining = () => {
  return (
    <Wrapper>
      <div className="container component-inner-gap">
        <div className="row">
          <div className="col-lg-5">
            <div className="left">
              <NextImg
                src={diningImg}
                placeholder="blur"
                className="diningImg"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="col-lg-6 ml-auto">
            <div className="right">
              <h6 className="caption caption-2">Dining</h6>
              <h2 className="heading-4 title">Our Restaurant</h2>
              <p className="sub-title sub-title-1">
                The buffet breakfast is served in the lounge on the ground floor
                and also outside on our little patio.
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
    </Wrapper>
  );
};

export default Dining;

export const Wrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0%;
    top: 0%;
    height: 100%;
    background-color: var(--secondary-200);
    z-index: -1;

    width: 30%;
  }

  .row {
    align-items: center;

    .right {
      color: var(--dark-color);
      .sub-title {
        margin-top: 1rem;
      }

      .options {
        margin: 2rem 0;

        h6 {
          position: relative;

          &::after {
            content: "";
            display: block;
            height: 3px;
            margin: 24px 0;
            background-color: var(--dark-color);
          }
        }
      }
    }
  }
`;
