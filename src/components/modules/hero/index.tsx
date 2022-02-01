import React, { useRef } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Button from "@/element/button";
import Features from "./features";
import { gsap } from "gsap/dist/gsap";
import { heroAnimation } from "./animation";
import { Banner, Content } from "./styles";

interface heroTypes {
  forFrontPage?: boolean;
  title: string;
}

const Hero: React.FC<heroTypes> = ({ forFrontPage = false, title }) => {
  const bannerRef = useRef(null);
  const tl = useRef<gsap.core.Timeline>();
  const children = gsap.utils.selector(bannerRef);

  heroAnimation(tl, children, forFrontPage);

  return (
    <>
      <Banner ref={bannerRef} id="hero">
        <div className="container">
          <Content>
            <div className="row justify-center">
              <div className="col-xl-10">
                <h1
                  className="title heading-2"
                  dangerouslySetInnerHTML={{ __html: title }}></h1>

                {forFrontPage && (
                  <>
                    <Button
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
