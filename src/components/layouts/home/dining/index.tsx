import React, { useRef, useState } from "react";
import NextImg from "next/image";
import { Wrapper } from "./styles";
import useIsomorphicLayoutEffect from "@/utils/useLayoutEffect";
import { gsap } from "gsap";
import RightSection from "./RightSideSection";
import { menuNames } from "./utils";

const Dining = () => {
  const [currentMenuNum, setCurrentMenuNum] = useState(0);
  const wrapperRef = useRef(null);
  const children = gsap.utils.selector(wrapperRef);

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo(
      children("img"),
      { autoAlpha: 0, scale: 0.9 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 0.9,
        ease: "Power1.easeInOut",
      }
    );
  }, [currentMenuNum]);

  return (
    <Wrapper ref={wrapperRef}>
      <div className="custom-container component-inner-gap">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row gx-lg-5">
              <div className="col-lg-6">
                <div className="left">
                  <NextImg
                    src={menuNames[currentMenuNum].imgSrc}
                    placeholder="blur"
                    className="diningImg"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <RightSection setCurrentMenuNum={setCurrentMenuNum} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dining;
