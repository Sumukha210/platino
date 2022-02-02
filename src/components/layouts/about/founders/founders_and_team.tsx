import React from "react";
import styled from "styled-components";
import { founders_team_info } from "../utils";
import NextImg from "next/image";

const Founders_And_Team = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div className="content">
              <h2 className="title heading-3">
                Founders & <br /> Team
              </h2>

              <div className="row gap-2">
                {founders_team_info.map(
                  ({ name, designation, imgSrc }, num) => (
                    <div className="col-lg-4" key={num}>
                      <div className="card">
                        <NextImg
                          src={imgSrc}
                          objectFit="cover"
                          placeholder="blur"
                        />
                        <h6 className="card__caption sub-title-4">
                          {designation}
                        </h6>
                        <h3 className="card__title sub-title-1">{name}</h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Founders_And_Team;

const Wrapper = styled.div`
  .title {
    margin-bottom: 2rem;
  }

  .card {
    & > span {
      min-width: 100%;
    }

    img {
      height: 400px !important;
      min-width: 100% !important;
    }

    &__caption {
      margin-top: 10px;
      font-weight: 600;
    }
  }
`;
