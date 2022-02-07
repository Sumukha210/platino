import Button from "@/element/Button";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Wrapper } from "./styles";
import { aboutIntroData, useAboutIntroAnimation } from "./utils";

const AboutIntro = () => {
  const { caption, title, subtitle, para } = aboutIntroData;
  const { wrapperRef, router } = useAboutIntroAnimation();

  return (
    <Wrapper className="margin-top" ref={wrapperRef}>
      <div className="custom-container">
        <div className="header">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h6 className="caption">{caption}</h6>
              <h1 className="title heading-1">{title}</h1>
              <h5 className="subtitle">{subtitle}</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <p className="para">{para}</p>
          </div>
        </div>

        {router.asPath != "/about" && (
          <div className="btncustom-container">
            <Button
              onClickHandler={() => router.push("/about")}
              name="Explore more"
              Icon={BsArrowRight}
            />
          </div>
        )}
      </div>

      <div className="videocustom-container">
        <video autoPlay loop muted>
          <source src="/intro.mp4" />
        </video>
      </div>
    </Wrapper>
  );
};

export default AboutIntro;
