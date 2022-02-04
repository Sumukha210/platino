import React from "react";
import styled from "styled-components";
import NextImg from "next/image";

interface wrapperProps {
  bgColor: string;
  textColor: string;
}

interface sectionTypes extends wrapperProps {
  largeImg: StaticImageData;
  smallImg: StaticImageData;
  caption: string;
  title: string;
  para: string;
}

const Section: React.FC<sectionTypes> = ({
  bgColor,
  textColor,
  largeImg,
  smallImg,
  caption,
  title,
  para,
}) => {
  return (
    <Wrapper
      bgColor={bgColor}
      textColor={textColor}
      className="component-inner-gap">
      <div className="container">
        <div className="row gap-3">
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
              <h2 className="heading heading-2">{title}</h2>
              <p className="para sub-title-2">{para}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section;

export const Wrapper = styled.div<wrapperProps>`
  background-color: var(${props => props.bgColor || "--light-color"});
`;
