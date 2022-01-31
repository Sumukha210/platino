import React from "react";
import styled from "styled-components";
import bannerImg from "@/assets/images/banner.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "@/element/button";
import Features from "./features";

const Hero = () => {
  return (
    <>
      <Banner id="hero">
        <div className="container">
          <Content>
            <div className="row justify-center">
              <div className="col-xl-10">
                <h1 className="title heading-2">
                  Your luxury Holiday <br /> Home in Malnad
                </h1>
                <Button
                  name="Watch Now"
                  Icon={AiFillPlayCircle}
                  isDarkBtn={false}
                />
                <Features />
              </div>
            </div>
          </Content>
        </div>
      </Banner>
    </>
  );
};

export default Hero;

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
    url(${bannerImg.src});
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: calc(80vh + 150px);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  .title {
    color: var(--light-color);
    font-family: var(--secondary-font);
    margin-bottom: 3rem;
  }
`;
