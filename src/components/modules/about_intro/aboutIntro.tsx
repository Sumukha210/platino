import Button from "@/element/button";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Wrapper } from "./sytles";

const AboutIntro = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="header">
          <div className="row justify-center">
            <div className="col-xl-10">
              <h6 className="caption">All forms of hospitality</h6>
              <h1 className="title heading-1">A widespread Resort</h1>
              <h5 className="subtitle">In the heart of malnad</h5>
            </div>
          </div>
        </div>

        <div className="row justify-center">
          <div className="col-xl-8">
            <p className="para">
              Welcome to the legendary Platino Restarant & Hotel. Surrounded by
              the pristine beauty of mother nature, the Platino offers unique
              accommodations with laid-back luxury, gracious hospitality,
              superior dining, and one of the most iconic bars in Malnad. Since
              1927, our hotel has created memories for generations of travelers,
              create one for yourself with an unforgettable stay at the Platino!
            </p>
          </div>
        </div>

        <div className="btnContainer">
          <Button name="Explore more" Icon={BsArrowRight} />
        </div>
      </div>

      <div className="videoContainer">
        <video autoPlay loop muted>
          <source src="/intro.mp4" />
        </video>
      </div>
    </Wrapper>
  );
};

export default AboutIntro;
