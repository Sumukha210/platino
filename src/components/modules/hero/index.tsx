import React, { useRef } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "@/element/button";
import Features from "./features";
import { gsap } from "gsap/dist/gsap";
import { useHeroAnimation } from "./animation";
import { Banner, Content } from "./styles";

export interface bannerProp {
  bannerImg: StaticImageData;
}

interface heroTypes extends bannerProp {
  forFrontPage?: boolean;
  title: string;
}

const Hero: React.FC<heroTypes> = ({
  forFrontPage = false,
  title,
  bannerImg,
}) => {
  const bannerRef = useRef(null);
  const tl = useRef<gsap.core.Timeline>();
  const children = gsap.utils.selector(bannerRef);

  useHeroAnimation(tl, children, forFrontPage);

  return (
    <>
      <Banner ref={bannerRef} id="hero" bannerImg={bannerImg}>
        <div className="custom-container">
          <Content>
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h1
                  className="title heading-2"
                  dangerouslySetInnerHTML={{ __html: title }}></h1>

                {forFrontPage && (
                  <>
                    <Button
                      onClickHandler={() => {}}
                      name="Watch Now"
                      Icon={AiFillPlayCircle}
                      isDarkBtn={false}
                    />
                    <Features />
                  </>
                )}
              </div>
            </div>
          </Content>
        </div>
      </Banner>
    </>
  );
};

export default Hero;
