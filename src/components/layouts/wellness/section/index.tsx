import React from "react";
import NextImg from "next/image";
import { sectionTypes } from "./types";
import { Wrapper } from "./styles";

const Section: React.FC<sectionTypes> = ({
  bgColor,
  textColor,
  largeImg,
  smallImg,
  caption,
  title,
  para,
  rowReverse = false,
}) => {
  return (
    <Wrapper
      bgColor={bgColor}
      textColor={textColor}
      rowReverse={rowReverse}
      className="component-inner-gap">
      <div className="custom-container">
        <div className="row gap-3 mainRow align-center">
          <div className="col-lg-6">
            <div className="left">
              <figure className="largeImg">
                <NextImg src={largeImg} objectFit="cover" placeholder="blur" />
              </figure>

              <figure className="smallImg">
                <NextImg src={smallImg} objectFit="cover" placeholder="blur" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <h6 className="caption caption-2">{caption}</h6>
              <h2 className="heading heading-4 bold">{title}</h2>
              <p className="para sub-title-2">{para}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section;
