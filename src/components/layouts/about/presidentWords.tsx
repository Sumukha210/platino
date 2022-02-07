import React from "react";
import styled from "styled-components";
import NextImg from "next/image";
import { founders_team_info } from "./utils";

const PresidentWords = () => {
  const { imgSrc, designation, quote, name } = founders_team_info[0];

  return (
    <Wrapper className="margin-top">
      <div className="custom-container">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div className="row gap-3 align-center">
              <div className="col-lg-6">
                <div className="left">
                  <NextImg src={imgSrc} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right">
                  <h6 className="caption-2">{designation}</h6>
                  <h2 className="heading-4 bold">{name}</h2>
                  <p className="sub-title-2">{quote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PresidentWords;

const Wrapper = styled.div`
  .left {
    img {
      min-height: 520px !important;
    }
  }

  .right {
    color: var(--dark-color);
    h6 {
      opacity: 0.4;
    }

    p {
      margin-top: 2rem;
    }
  }
`;
